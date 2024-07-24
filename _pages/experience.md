---
theme: just-the-docs
layout: page
data: experience
title: Experience
permalink: /experience/
isHome: false
isPost: false
---

## Experience

<div class="posts">
  {% for post in site.posts %}
    {% if post.categories contains 'experience' %}
      <div class="experience-entry">
        <p style="display: flex; justify-content: space-between;">
          <span>
            <strong>{{ post.company }}, {{ post.location }}</strong><br>
            <em>{{ post.title }}</em>
          </span>
          <span>{{ post.date | date: "%B %Y" }} – {{ post.end-date | date: "%B %Y" }}</span>
        </p>
        <ul>
          <li>{{ post.skills }}</li>
        </ul>
        {{ post.content | markdownify }}
      </div>
    {% endif %}
  {% endfor %}
</div>

---

{% include footer.md %}
