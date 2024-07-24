---
theme: just-the-docs
layout: page
data: organisations
title: Organisations
permalink: /organisations/
isHome: false
isPost: false
---

## Organisations 🦜🔗

<div class="posts">
  {% for post in site.posts %}
    {% if post.categories contains 'organisations' %}
      <div class="experience-entry">
        <h3><a href="{{ post.website }}" target="_blank">{{ post.company }}</a></h3>
        {{ post.overview }}
        <h3>Overview</h3>
        {{ post.about }}
        <h3>Industry</h3>
        {{ post.industry }}
        <h3>Company size</h3>
        {{ post.size }}
        <h3>Tech Stack</h3>
        {{ post.tech-stack }}
        <br />
        {{ post.content | markdownify }}
      </div>
    {% endif %}
  {% endfor %}
</div>

---

{% include footer.md %}
