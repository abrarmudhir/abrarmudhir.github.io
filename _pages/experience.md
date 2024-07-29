---
theme: just-the-docs
layout: page
data: experience
title: 🕸️ E|xperience
permalink: /experience/
isHome: false
nav_order: 2
isPost: false
---

## Experience 🦜🕸️

<div class="posts">
  {% for post in site.posts %}
    {% if post.categories contains 'experience' %}
      <div class="experience-entry">
        <p style="display: flex; justify-content: space-between;">
          <span>
            <strong><a href="{{ post.link }}" target="_blank">{{ post.company }}</a>, {{ post.location }}</strong><br>
            <em>{{ post.title }}</em>
          </span>
          <span>{{ post.date | date: "%B %Y" }} – {{ post.end-date | date: "%B %Y" }}</span>
        </p>
        {{ post.content | markdownify }}
        <p>
          <strong>SKILLS: </strong><em>{{ post.skills }}</em>
        </p>
      </div>
    {% endif %}
  {% endfor %}
</div>

---

{% include footer.md %}
