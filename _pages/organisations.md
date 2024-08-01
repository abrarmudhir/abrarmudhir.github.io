---
theme: just-the-docs
layout: page
data: organisations
title: 🔗 Organisations
permalink: /organisations/
isHome: false
nav_order: 3
isPost: false
---
<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

## Organisations 🦜🔗

<div class="posts">
  {% for post in site.posts %}
    {% if post.categories contains 'organisations' %}
      {% unless post.categories contains 'organisations-hidden' %}
        <div class="organisation-entry">
          <button type="button" class="collapsible">
              <p class="collapsible-content-header">
                  <a href="{{ post.website }}" target="_blank">{{ post.company }}</a>
              </p>
          </button>
          <div class="collapsible-content">
            <div class="experience-entry">
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
          </div>
        </div>
      {% endunless %}
    {% endif %}
  {% endfor %}
</div>

<script src="{{ '/assets/js/custom.js' | relative_url }}"></script>

---

{% include footer.md %}