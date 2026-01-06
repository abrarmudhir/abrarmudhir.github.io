---
theme: just-the-docs
layout: page
data: experience
title: 🕸️ Experience
permalink: /experience/
isHome: false
nav_order: 2
isPost: false
---
<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

## Experience 🦜🕸️

<div class="posts">
  {% for post in site.posts %}
    {% if post.categories contains 'experience' %}
      <button type="button" class="collapsible">
        <p class="collapsible-content-header">
          <span>
            <strong><a href="{{ post.link }}" target="_blank">{{ post.company }}</a>, {{ post.location }}</strong><br>
            <em>{{ post.title }}</em>
          </span>
          <span>{{ post.date | date: "%B %Y" }} – {% if post.end-date %}{{ post.end-date | date: "%B %Y" }}{% else %}Present{% endif %}</span>
        </p>
      </button>
      <div class="collapsible-content">
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
