document.addEventListener("DOMContentLoaded", function () {
  // =========================
  // Collapsible Q&A sections (scoped so it won't break JTD sidebar +/-)
  // =========================
  var qaRoot =
    document.getElementById("main-content") ||
    document.querySelector(".main-content") ||
    document;

  // IMPORTANT: only target *buttons* with .collapsible (your Q&A uses <button class="collapsible">)
  var coll = qaRoot.querySelectorAll("button.collapsible");

  for (var i = 0; i < coll.length; i++) {
    var btn = coll[i];
    var content = btn.nextElementSibling;
    if (!content) continue;

    // Default: collapsed (do NOT force open)
    btn.classList.remove("active");
    content.style.display = "none";

    btn.addEventListener("click", function (event) {
      event.preventDefault();
      this.classList.toggle("active");

      var content = this.nextElementSibling;
      if (!content) return;

      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

  // =========================
  // "Read more" functionality
  // =========================
  var readMoreLinks = document.querySelectorAll(".read-more-link");
  readMoreLinks.forEach(function (link) {
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

  var readMoreContent = document.querySelectorAll(".read-more-content");
  readMoreContent.forEach(function (content) {
    content.style.display = "block";
  });

  // =========================
  // Filter posts by topic
  // =========================
  function filterPostsByTopic(selectedTopic) {
    console.log("Filtering by topic:", selectedTopic);
    var softSkillsPosts = document.querySelectorAll(
      "#soft-skills-posts .question-entry"
    );
    var techSkillsPosts = document.querySelectorAll(
      "#technical-skills-posts .question-entry"
    );
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
      var selectedTopic = this.getAttribute("data-topic");
      filterPostsByTopic(selectedTopic);
    });
  });

  console.log("Event listeners added to topic badges");

  // =========================
  // Collapsible sidebar toggle (Just-the-Docs menu button)
  // =========================
  var menuBtn = document.getElementById("menu-button");
  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      document.body.classList.toggle("sidebar-collapsed");
    });
    console.log("Sidebar toggle wired to #menu-button");
  } else {
    console.warn("Sidebar toggle: #menu-button not found");
  }
});
