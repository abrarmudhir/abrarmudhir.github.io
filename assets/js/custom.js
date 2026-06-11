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

  function getStoredTheme() {
    return localStorage.getItem("am-theme");
  }

  function getPreferredTheme() {
    if (getStoredTheme()) return getStoredTheme();
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function setTheme(theme) {
    const nextTheme = theme === "dark" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", nextTheme);
    document.querySelectorAll(".am-theme-toggle").forEach((button) => {
      const isDark = nextTheme === "dark";
      button.setAttribute("aria-pressed", String(isDark));
      button.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
      button.title = isDark ? "Switch to light theme" : "Switch to dark theme";
    });
  }

  function initThemeToggle() {
    setTheme(getPreferredTheme());

    if (document.querySelector(".am-theme-toggle")) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "am-theme-toggle";
    button.addEventListener("click", function () {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem("am-theme", nextTheme);
      setTheme(nextTheme);
    });

    document.body.appendChild(button);
    setTheme(getPreferredTheme());
  }

  function initSearchResultNavigation() {
    if (document.__am_search_result_navigation_bound) return;
    document.__am_search_result_navigation_bound = true;

    document.addEventListener(
      "click",
      function (event) {
        const link = event.target.closest("#search-results a.search-result[href]");
        if (!link) return;

        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          link.target === "_blank"
        ) {
          return;
        }

        event.preventDefault();
        window.location.assign(link.href);
      },
      true
    );
  }

  function setSidebarCollapsed(isCollapsed) {
    document.body.classList.toggle("sidebar-collapsed", isCollapsed);

    document.querySelectorAll("#menu-button, .am-sidebar-float-toggle").forEach((button) => {
      button.setAttribute("aria-pressed", String(isCollapsed));
      button.setAttribute("aria-label", isCollapsed ? "Show menu" : "Hide menu");
      button.title = isCollapsed ? "Show menu" : "Hide menu";
    });
  }

  function initFloatingSidebarToggle() {
    if (document.querySelector(".am-sidebar-float-toggle")) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "am-sidebar-float-toggle";
    button.setAttribute("aria-label", "Show menu");
    button.setAttribute("aria-pressed", "true");
    button.innerHTML =
      '<svg viewBox="0 0 24 24" class="icon" aria-hidden="true"><use xlink:href="#svg-menu"></use></svg>';

    button.addEventListener("click", function (event) {
      event.preventDefault();
      setSidebarCollapsed(false);
    });

    document.body.appendChild(button);
  }

  // ============================================
  // Bind everything (safe to call multiple times)
  // ============================================
  function init() {
    initThemeToggle();
    initSearchResultNavigation();
    initFloatingSidebarToggle();

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
    function filterQanda() {
      const activeFilter = document.querySelector("#topic-filters [data-topic].is-active");
      const selectedTopic = activeFilter ? activeFilter.getAttribute("data-topic") : "all";
      const searchInput = document.getElementById("qanda-search");
      const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
      const sections = document.querySelectorAll(".qanda-section");
      const emptyState = document.getElementById("qanda-empty");
      let totalVisible = 0;

      sections.forEach((section) => {
        const posts = section.querySelectorAll(".question-entry");
        const headers = section.querySelectorAll(".topic-header");
        const visibleTopics = new Set();
        let sectionVisible = 0;

        posts.forEach((post) => {
          const topic = post.getAttribute("data-topic") || "";
          const title = post.getAttribute("data-title") || "";
          const question = post.getAttribute("data-question") || "";
          const answer = post.getAttribute("data-answer") || "";
          const haystack = `${topic} ${title} ${question} ${answer}`.toLowerCase();
          const matchesTopic = selectedTopic === "all" || topic === selectedTopic;
          const matchesQuery = !query || haystack.includes(query);
          const show = matchesTopic && matchesQuery;

          post.hidden = !show;
          if (show) {
            visibleTopics.add(topic);
            sectionVisible += 1;
          }
        });

        headers.forEach((header) => {
          const topic = header.getAttribute("data-topic") || "";
          header.hidden = !visibleTopics.has(topic);
        });

        section.hidden = sectionVisible === 0;
        totalVisible += sectionVisible;
      });

      if (emptyState) emptyState.hidden = totalVisible !== 0;
    }

    const topicFilters = document.getElementById("topic-filters");
    if (topicFilters && topicFilters.dataset.amBound !== "1") {
      topicFilters.dataset.amBound = "1";

      topicFilters.querySelectorAll("a[data-topic]").forEach((badge) => {
        badge.addEventListener("click", function (event) {
          event.preventDefault();
          topicFilters.querySelectorAll("[data-topic]").forEach((item) => {
            item.classList.toggle("is-active", item === this);
          });
          filterQanda();
        });
      });
    }

    const qandaSearch = document.getElementById("qanda-search");
    if (qandaSearch && qandaSearch.dataset.amBound !== "1") {
      qandaSearch.dataset.amBound = "1";
      qandaSearch.addEventListener("input", filterQanda);
      filterQanda();
    }

    function filterLearning() {
      const activeFilter = document.querySelector("#l3-topic-filters [data-topic].is-active");
      const selectedTopic = activeFilter ? activeFilter.getAttribute("data-topic") : "all";
      const searchInput = document.getElementById("l3-search");
      const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
      const sections = document.querySelectorAll(".l3-section");
      const emptyState = document.getElementById("l3-empty");
      let totalVisible = 0;

      sections.forEach((section) => {
        const posts = section.querySelectorAll(".learning-entry");
        const headers = section.querySelectorAll(".learning-topic-header");
        const visibleGroups = new Set();
        let sectionVisible = 0;

        posts.forEach((post) => {
          const topic = post.getAttribute("data-topic") || "";
          const domain = post.getAttribute("data-domain") || "";
          const track = post.getAttribute("data-track") || "";
          const subtrack = post.getAttribute("data-subtrack") || "";
          const group = post.getAttribute("data-group") || "";
          const title = post.getAttribute("data-title") || "";
          const body = post.getAttribute("data-body") || "";
          const haystack = `${topic} ${domain} ${track} ${subtrack} ${title} ${body}`.toLowerCase();
          const matchesTopic = selectedTopic === "all" || topic === selectedTopic;
          const matchesQuery = !query || haystack.includes(query);
          const show = matchesTopic && matchesQuery;

          post.hidden = !show;
          if (show) {
            visibleGroups.add(group);
            sectionVisible += 1;
          }
        });

        headers.forEach((header) => {
          const group = header.getAttribute("data-group") || "";
          header.hidden = !visibleGroups.has(group);
        });

        section.hidden = sectionVisible === 0;
        totalVisible += sectionVisible;
      });

      if (emptyState) emptyState.hidden = totalVisible !== 0;
    }

    const learningFilters = document.getElementById("l3-topic-filters");
    if (learningFilters && learningFilters.dataset.amBound !== "1") {
      learningFilters.dataset.amBound = "1";
      const domainToggle = document.getElementById("l3-filter-domain-toggle");
      const domainPanel = document.getElementById("l3-filter-domain-panel");
      const trackToggle = document.getElementById("l3-filter-track-toggle");
      const trackPanel = document.getElementById("l3-filter-track-panel");
      const subtrackToggle = document.getElementById("l3-filter-subtrack-toggle");
      const subtrackPanel = document.getElementById("l3-filter-subtrack-panel");

      function setMenuState(toggle, panel, expanded) {
        if (!toggle || !panel) return;
        toggle.setAttribute("aria-expanded", String(expanded));
        panel.hidden = !expanded;
      }

      learningFilters.querySelectorAll("[data-topic]").forEach((badge) => {
        badge.addEventListener("click", function (event) {
          if (this.tagName === "A") event.preventDefault();
          learningFilters.querySelectorAll("[data-topic]").forEach((item) => {
            item.classList.toggle("is-active", item === this);
          });
          if (domainToggle && this !== domainToggle) {
            setMenuState(domainToggle, domainPanel, false);
            setMenuState(trackToggle, trackPanel, false);
            setMenuState(subtrackToggle, subtrackPanel, false);
          }
          filterLearning();
        });
      });

      if (!document.__am_learning_menu_bound) {
        document.__am_learning_menu_bound = true;

        document.addEventListener("click", function (event) {
          const toggle = event.target.closest(
            "#l3-filter-domain-toggle, #l3-filter-track-toggle, #l3-filter-subtrack-toggle"
          );
          if (!toggle) return;

          event.preventDefault();

          const currentDomainToggle = document.getElementById("l3-filter-domain-toggle");
          const currentDomainPanel = document.getElementById("l3-filter-domain-panel");
          const currentTrackToggle = document.getElementById("l3-filter-track-toggle");
          const currentTrackPanel = document.getElementById("l3-filter-track-panel");
          const currentSubtrackToggle = document.getElementById("l3-filter-subtrack-toggle");
          const currentSubtrackPanel = document.getElementById("l3-filter-subtrack-panel");

          const setCurrentMenuState = (currentToggle, currentPanel, expanded) => {
            if (!currentToggle || !currentPanel) return;
            currentToggle.setAttribute("aria-expanded", String(expanded));
            currentPanel.hidden = !expanded;
          };

          if (toggle.id === "l3-filter-domain-toggle") {
            const next = toggle.getAttribute("aria-expanded") !== "true";
            setCurrentMenuState(currentDomainToggle, currentDomainPanel, next);
            if (!next) {
              setCurrentMenuState(currentTrackToggle, currentTrackPanel, false);
              setCurrentMenuState(currentSubtrackToggle, currentSubtrackPanel, false);
            }
            return;
          }

          if (toggle.id === "l3-filter-track-toggle") {
            const next = toggle.getAttribute("aria-expanded") !== "true";
            setCurrentMenuState(currentTrackToggle, currentTrackPanel, next);
            if (!next) {
              setCurrentMenuState(currentSubtrackToggle, currentSubtrackPanel, false);
            }
            return;
          }

          if (toggle.id === "l3-filter-subtrack-toggle") {
            const next = toggle.getAttribute("aria-expanded") !== "true";
            setCurrentMenuState(currentSubtrackToggle, currentSubtrackPanel, next);
          }
        });
      }
    }

    const learningSearch = document.getElementById("l3-search");
    if (learningSearch && learningSearch.dataset.amBound !== "1") {
      learningSearch.dataset.amBound = "1";
      learningSearch.addEventListener("input", filterLearning);
      filterLearning();
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
        function (event) {
          const isDesktop = window.matchMedia("(min-width: 50rem)").matches;

          // Desktop: toggle your custom collapse class
          if (isDesktop) {
            event.preventDefault();
            event.stopImmediatePropagation();
            setSidebarCollapsed(!document.body.classList.contains("sidebar-collapsed"));
          }

          // Mobile still falls through to Just-the-Docs nav-open behaviour.
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
