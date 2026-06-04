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

<div class="am-page">
  <header class="am-page-hero">
    <p class="am-page-eyebrow">Career timeline</p>
    <h1>Experience</h1>
    <p class="am-page-summary">A chronological view of delivery, engineering, leadership, data, and platform roles.</p>
  </header>

  <div class="posts am-list-page">
    {% for post in site.posts %}
      {% if post.categories contains 'experience' %}
        <button type="button" class="collapsible">
          <span class="collapsible-content-header">
            <span>
              <strong><a href="{{ post.link }}" target="_blank">{{ post.company }}</a>, {{ post.location }}</strong><br>
              <em>{{ post.title }}</em>
            </span>
            <span>{{ post.date | date: "%B %Y" }} - {% if post.end-date %}{{ post.end-date | date: "%B %Y" }}{% else %}Present{% endif %}</span>
          </span>
        </button>
        <div class="collapsible-content">
          {{ post.content | markdownify }}
          <p><strong>Skills: </strong><em>{{ post.skills }}</em></p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
</div>

{% include footer.md %}
