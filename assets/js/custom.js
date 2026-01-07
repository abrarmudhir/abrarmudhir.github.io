(function () {
  // ==========================================================
  // Guard: prevent double-binding if custom.js is included twice
  // ==========================================================
  if (window.__am_custom_js_loaded) return;
  window.__am_custom_js_loaded = true;

  // ============================================
  // Helpers
  // ============================================
  function getMainContentRoot() {
    return (
      document.getElementById("main-content") ||
      document.querySelector(".main-content") ||
      document.body
    );
  }

  function findNextCollapsibleContent(btn) {
    let el = btn.nextSibling;
    while (el) {
      if (el.nodeType === 1 && el.classList.contains("collapsible-content")) return el;
      el = el.nextSibling;
    }
    return null;
  }

  function setCollapsed(btn, content, isOpen) {
    if (!content) return;
    btn.classList.toggle("active", isOpen);
    content.style.display = isOpen ? "block" : "none";
  }

  function normalisePathname(pathname) {
    // "/experience/" -> "/experience"
    // "/" -> ""
    if (!pathname) return "";
    if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
    return pathname;
  }

  function shouldExpandByDefault() {
    const p = normalisePathname(window.location.pathname || "");
    // ✅ expand by default on these pages
    return p === "/experience" || p === "/organisations";
  }

  // ============================================
  // Bind everything (safe to call multiple times)
  // ============================================
  function init() {
    const expandByDefault = shouldExpandByDefault();

    // ============================================
    // 1) Initialise page-content collapsibles
    // ============================================
    const mainRoot = getMainContentRoot();
    const collapsibles = mainRoot.querySelectorAll("button.collapsible");

    collapsibles.forEach((btn) => {
      // prevent double-initialising the same button
      if (btn.dataset.amInit === "1") return;
      btn.dataset.amInit = "1";

      const content = findNextCollapsibleContent(btn);
      if (!content) return;

      // ✅ Experience + Organisations: expanded by default
      // Other pages: collapsed by default
      setCollapsed(btn, content, expandByDefault);
    });

    // ============================================
    // 3) Read more (bind once per link)
    // ============================================
    document.querySelectorAll(".read-more-link").forEach(function (link) {
      if (link.dataset.amBound === "1") return;
      link.dataset.amBound = "1";

      link.addEventListener("click", function (event) {
        event.preventDefault();
        const content = this.previousElementSibling;
        if (!content) return;
        content.classList.toggle("expanded");
        this.textContent = content.classList.contains("expanded")
          ? "Read less"
          : "Read more";
      });
    });

    document.querySelectorAll(".read-more-content").forEach(function (content) {
      content.style.display = "block";
    });

    // ============================================
    // 4) Topic filters (Q&A) (bind once)
    // ============================================
    function filterPostsByTopic(selectedTopic) {
      const softPosts = document.querySelectorAll("#soft-skills-posts .question-entry");
      const techPosts = document.querySelectorAll("#technical-skills-posts .question-entry");
      const softSection = document.getElementById("soft-skills-posts");
      const techSection = document.getElementById("technical-skills-posts");

      function apply(posts) {
        let visible = 0;
        posts.forEach((post) => {
          const topic = post.getAttribute("data-topic");
          const show = selectedTopic === "all" || topic === selectedTopic;
          post.style.display = show ? "block" : "none";
          if (show) visible++;
        });
        return visible > 0;
      }

      const showSoft = apply(softPosts);
      const showTech = apply(techPosts);

      if (softSection) softSection.style.display = showSoft ? "block" : "none";
      if (techSection) techSection.style.display = showTech ? "block" : "none";
    }

    const topicFilters = document.getElementById("topic-filters");
    if (topicFilters && topicFilters.dataset.amBound !== "1") {
      topicFilters.dataset.amBound = "1";

      topicFilters.querySelectorAll("a[data-topic]").forEach((badge) => {
        badge.addEventListener("click", function (event) {
          event.preventDefault();
          filterPostsByTopic(this.getAttribute("data-topic"));
        });
      });
    }

    // ============================================
    // 5) Desktop sidebar collapse (keep JTD mobile nav-open)
    // - bind robustly, even if header/nav is injected late
    // ============================================
    const menuBtn = document.getElementById("menu-button");
    if (menuBtn && menuBtn.dataset.amBound !== "1") {
      menuBtn.dataset.amBound = "1";

      // Capture phase so we still run even if JTD handlers run too
      menuBtn.addEventListener(
        "click",
        function () {
          const isDesktop = window.matchMedia("(min-width: 50rem)").matches;

          // Desktop: toggle your custom collapse class
          if (isDesktop) {
            document.body.classList.toggle("sidebar-collapsed");

            // keep aria-pressed sane
            const pressed =
              menuBtn.getAttribute("aria-pressed") === "true" ? "false" : "true";
            menuBtn.setAttribute("aria-pressed", pressed);
          }

          // Do NOT preventDefault/stopPropagation:
          // JTD still controls mobile (nav-open) behaviour.
        },
        true
      );
    }
  }

  // ============================================
  // 2) Event delegation for collapsibles (bind ONCE)
  // ============================================
  if (!document.__am_collapsible_delegation_bound) {
    document.__am_collapsible_delegation_bound = true;

    document.addEventListener("click", function (event) {
      const mainRoot = getMainContentRoot();
      if (!mainRoot.contains(event.target)) return;

      const btn = event.target.closest("button.collapsible");
      if (!btn) return;

      // Allow links inside the collapsible header to work normally
      if (event.target.closest("a")) return;

      const content = findNextCollapsibleContent(btn);
      if (!content) return;

      const isOpen = content.style.display === "block";
      setCollapsed(btn, content, !isOpen);
    });
  }

  // ============================================
  // Run init at multiple times to handle late DOM
  // ============================================
  document.addEventListener("DOMContentLoaded", init);
  window.addEventListener("load", init);

  // short retry loop (covers cases where header/nav is injected after load)
  let tries = 0;
  const t = setInterval(() => {
    init();
    tries += 1;
    if (tries > 20) clearInterval(t); // ~2 seconds total
  }, 100);
})();
