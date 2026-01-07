(function () {
  // Prevent double-init if custom.js is accidentally included twice
  if (window.__am_custom_init__) return;
  window.__am_custom_init__ = true;

  function getMainContentRoot() {
    return (
      document.getElementById("main-content") ||
      document.querySelector(".main-content") ||
      document.body
    );
  }

  function findNextCollapsibleContent(btn) {
    // Walk siblings until we find an element with .collapsible-content
    let el = btn.nextSibling;
    while (el) {
      if (el.nodeType === 1 && el.classList.contains("collapsible-content")) {
        return el;
      }
      el = el.nextSibling;
    }
    return null;
  }

  function setCollapsed(btn, content, isOpen) {
    if (!content) return;
    btn.classList.toggle("active", isOpen);
    content.style.display = isOpen ? "block" : "none";
  }

  function init() {
    const mainRoot = getMainContentRoot();

    // ============================================
    // 1) Initialise ONLY page-content collapsibles
    //    (your custom ones: <button class="collapsible">)
    // ============================================
    const collapsibles = mainRoot.querySelectorAll("button.collapsible");

    collapsibles.forEach((btn) => {
      // If this button was already initialised, skip
      if (btn.dataset.amBound === "true") return;
      btn.dataset.amBound = "true";

      const content = findNextCollapsibleContent(btn);
      if (!content) return;

      // Default collapsed
      setCollapsed(btn, content, false);

      // Bind directly to the button (no global delegation)
      btn.addEventListener("click", function (event) {
        // If user clicked a link INSIDE the button, allow navigation and don't toggle
        if (event.target.closest("a")) return;

        const c = findNextCollapsibleContent(btn);
        if (!c) return;

        const isOpen = c.style.display === "block";
        setCollapsed(btn, c, !isOpen);
      });
    });

    // ============================================
    // 2) Read more
    // ============================================
    document.querySelectorAll(".read-more-link").forEach((link) => {
      if (link.dataset.amBound === "true") return;
      link.dataset.amBound = "true";

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

    document.querySelectorAll(".read-more-content").forEach((content) => {
      content.style.display = "block";
    });

    // ============================================
    // 3) Topic filters (Q&A)
    // ============================================
    function filterPostsByTopic(selectedTopic) {
      const softPosts = document.querySelectorAll(
        "#soft-skills-posts .question-entry"
      );
      const techPosts = document.querySelectorAll(
        "#technical-skills-posts .question-entry"
      );
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
    if (topicFilters && topicFilters.dataset.amBound !== "true") {
      topicFilters.dataset.amBound = "true";

      topicFilters.querySelectorAll("a[data-topic]").forEach((badge) => {
        badge.addEventListener("click", function (event) {
          event.preventDefault();
          filterPostsByTopic(this.getAttribute("data-topic"));
        });
      });
    }

    // IMPORTANT:
    // Do NOT bind anything to #menu-button — Just-the-Docs owns that.
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
