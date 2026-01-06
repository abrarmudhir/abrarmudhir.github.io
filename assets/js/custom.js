document.addEventListener("DOMContentLoaded", function () {
  // ==========================================================
  // 1) Q&A / Experience collapsibles (ONLY in main page content)
  //    (Won't touch Just-the-Docs sidebar +/- buttons)
  // ==========================================================
  var mainContent =
    document.getElementById("main-content") ||
    document.querySelector(".main-content");

  if (mainContent) {
    // Only your content-area collapsibles
    var contentCollapsibles = mainContent.querySelectorAll("button.collapsible");

    contentCollapsibles.forEach(function (btn) {
      var content = btn.nextElementSibling;
      if (!content || !content.classList.contains("collapsible-content")) return;

      // Default collapsed
      btn.classList.remove("active");
      content.style.display = "none";

      btn.addEventListener("click", function (event) {
        event.preventDefault();
        btn.classList.toggle("active");

        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    });
  }

  // ==========================================================
  // 2) Read more
  // ==========================================================
  document.querySelectorAll(".read-more-link").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var content = this.previousElementSibling;
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

  // ==========================================================
  // 3) Topic filtering (Q&A page only)
  // ==========================================================
  function filterPostsByTopic(selectedTopic) {
    var softSkillsPosts = document.querySelectorAll("#soft-skills-posts .question-entry");
    var techSkillsPosts = document.querySelectorAll("#technical-skills-posts .question-entry");
    var softSkillsSection = document.getElementById("soft-skills-posts");
    var techSkillsSection = document.getElementById("technical-skills-posts");

    function filterPosts(posts) {
      var visibleCount = 0;
      posts.forEach(function (post) {
        var topic = post.getAttribute("data-topic");
        if (selectedTopic === "all" || topic === selectedTopic) {
          post.style.display = "block";
          visibleCount++;
        } else {
          post.style.display = "none";
        }
      });
      return visibleCount > 0;
    }

    var showSoftSkills = filterPosts(softSkillsPosts);
    var showTechSkills = filterPosts(techSkillsPosts);

    if (softSkillsSection) softSkillsSection.style.display = showSoftSkills ? "block" : "none";
    if (techSkillsSection) techSkillsSection.style.display = showTechSkills ? "block" : "none";
  }

  var topicFilters = document.getElementById("topic-filters");
  if (topicFilters) {
    topicFilters.querySelectorAll("a[data-topic]").forEach(function (badge) {
      badge.addEventListener("click", function (event) {
        event.preventDefault();
        filterPostsByTopic(this.getAttribute("data-topic"));
      });
    });
  }

  // ==========================================================
  // 4) IMPORTANT: do NOT bind anything to #menu-button.
  //    That's Just-the-Docs' own nav/menu control.
  // ==========================================================
});
