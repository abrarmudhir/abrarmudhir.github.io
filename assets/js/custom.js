document.addEventListener("DOMContentLoaded", function() {
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        // Ensure all sections start expanded
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

    // Function to filter posts by topic and show/hide sections
    function filterPostsByTopic(selectedTopic) {
        console.log("Filtering by topic:", selectedTopic); // Debugging output
        var softSkillsPosts = document.querySelectorAll('#soft-skills-posts .question-entry');
        var techSkillsPosts = document.querySelectorAll('#technical-skills-posts .question-entry');
        var softSkillsSection = document.getElementById('soft-skills-posts');
        var techSkillsSection = document.getElementById('technical-skills-posts');

        var softSkillsVisible = false;
        var techSkillsVisible = false;

        function filterPosts(posts, section) {
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
            // Show or hide the section based on the visibility of its posts
            if (visibleCount > 0) {
                section.style.display = 'block';
                return true;
            } else {
                section.style.display = 'none';
                return false;
            }
        }

        softSkillsVisible = filterPosts(softSkillsPosts, softSkillsSection);
        techSkillsVisible = filterPosts(techSkillsPosts, techSkillsSection);
    }

    // Add event listeners to topic badges
    var topicBadges = document.querySelectorAll('#topic-filters a');
    topicBadges.forEach(function(badge) {
        badge.addEventListener('click', function(event) {
            event.preventDefault();
            var selectedTopic = this.getAttribute('data-topic');
            filterPostsByTopic(selectedTopic);
        });
    });

    console.log("Event listeners added to topic badges"); // Debugging output
});
