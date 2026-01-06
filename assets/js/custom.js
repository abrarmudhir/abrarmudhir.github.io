document.addEventListener("DOMContentLoaded", function () {
  // =========================
  // Collapsible Q&A sections (ONLY inside your Q&A lists)
  // =========================
  var postsRoot =
    document.querySelector("#soft-skills-posts") ||
    document.querySelector("#technical-skills-posts");

  // If either exists, scope to the whole document but only match the Q&A structure
  var qaButtons = document.querySelectorAll(".posts .question-entry > button.collapsible");

  qaButtons.forEach(function (btn) {
    var content = btn.nextElementSibling;
    if (!content) return;

    // Default: collapsed
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

  // =========================
  // "Read more" functionality
  // =========================
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

  // =========================
  // Filter posts by topic
  // =========================
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

  document.querySelectorAll("#topic-filters a").forEach(function (badge) {
    badge.addEventListener("click", function (event) {
      event.preventDefault();
      filterPostsByTopic(this.getAttribute("data-topic"));
    });
  });

  // =========================
  // Desktop sidebar collapse toggle (YOUR button, not JTD's)
  // =========================
  var sidebarToggle = document.querySelector(".am-sidebar-toggle");
  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", function () {
      document.body.classList.toggle("sidebar-collapsed");
    });
  }
});
