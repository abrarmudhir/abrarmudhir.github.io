document.addEventListener("DOMContentLoaded", function () {
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

  // ============================================
  // 1) Initialise page-content collapsibles
  // ============================================
  const mainRoot = getMainContentRoot();
  const collapsibles = mainRoot.querySelectorAll("button.collapsible");

  collapsibles.forEach((btn) => {
    const content = findNextCollapsibleContent(btn);
    if (!content) return;
    setCollapsed(btn, content, false);
  });

  // ============================================
  // 2) Event delegation for collapsibles
  // ============================================
  document.addEventListener("click", function (event) {
    if (!mainRoot.contains(event.target)) return;

    const btn = event.target.closest("button.collapsible");
    if (!btn) return;

    const content = findNextCollapsibleContent(btn);
    if (!content) return;

    const isOpen = content.style.display === "block";
    setCollapsed(btn, content, !isOpen);
  });

  // ============================================
  // 3) Read more
  // ============================================
  document.querySelectorAll(".read-more-link").forEach(function (link) {
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
  // 4) Topic filters (Q&A)
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
  if (topicFilters) {
    topicFilters.querySelectorAll("a[data-topic]").forEach((badge) => {
      badge.addEventListener("click", function (event) {
        event.preventDefault();
        filterPostsByTopic(this.getAttribute("data-topic"));
      });
    });
  }

  // ============================================
  // 5) Desktop sidebar collapse (keep JTD mobile nav-open)
  // ============================================
  const menuBtn =
    document.getElementById("menu-button") ||
    document.querySelector(".site-header .site-button");

  if (menuBtn) {
    // Capture phase so it still runs even if JTD handlers run too
    menuBtn.addEventListener(
      "click",
      function () {
        // JTD desktop breakpoint is ~50rem; only collapse on desktop
        const isDesktop = window.matchMedia("(min-width: 50rem)").matches;
        if (isDesktop) {
          document.body.classList.toggle("sidebar-collapsed");
        }
        // Do NOT preventDefault/stopPropagation:
        // JTD still controls mobile (nav-open) behaviour.
      },
      true
    );
  }
});
