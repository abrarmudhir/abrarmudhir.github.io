document.addEventListener("DOMContentLoaded", function() {
    // Handle collapsible sections
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].classList.add("active");
        var content = coll[i].nextElementSibling;
        content.style.display = "block";

        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }

    // Handle "Read more" functionality
    var readMoreLinks = document.querySelectorAll('.read-more-link');
    readMoreLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var content = this.previousElementSibling;
            content.classList.toggle('expanded');
            if (content.classList.contains('expanded')) {
                this.textContent = "Read less";
            } else {
                this.textContent = "Read more";
            }
        });
    });

    // Initially hide the extended content for "Read more"
    var readMoreContent = document.querySelectorAll('.read-more-content');
    readMoreContent.forEach(function(content) {
        content.style.display = "block";
    });

    // Filter posts by topic
    function filterPostsByTopic(selectedTopic) {
        console.log("Filtering by topic:", selectedTopic);
        var softSkillsPosts = document.querySelectorAll('#soft-skills-posts .question-entry');
        var techSkillsPosts = document.querySelectorAll('#technical-skills-posts .question-entry');
        var softSkillsSection = document.getElementById('soft-skills-posts');
        var techSkillsSection = document.getElementById('technical-skills-posts');

        function filterPosts(posts) {
            var visibleCount = 0;
            posts.forEach(function(post) {
                var topic = post.getAttribute('data-topic');
                if (selectedTopic === 'all' || topic === selectedTopic) {
                    post.style.display = 'block';
                    visibleCount++;
                } else {
                    post.style.display = 'none';
                }
            });
            return visibleCount > 0;
        }

        var showSoftSkills = filterPosts(softSkillsPosts);
        var showTechSkills = filterPosts(techSkillsPosts);

        softSkillsSection.style.display = showSoftSkills ? 'block' : 'none';
        techSkillsSection.style.display = showTechSkills ? 'block' : 'none';
    }

    // Add event listeners to topic filters
    document.querySelectorAll('#topic-filters a').forEach(function(badge) {
        badge.addEventListener('click', function(event) {
            event.preventDefault();
            var selectedTopic = this.getAttribute('data-topic');
            filterPostsByTopic(selectedTopic);
        });
    });

    console.log("Event listeners added to topic badges");
});
