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

<div class="am-page">
  <header class="am-page-hero">
    <p class="am-page-eyebrow">Research notes</p>
    <h1>Organisations</h1>
    <p class="am-page-summary">Company profiles, hiring links, operating context, technology notes, and useful research links.</p>
  </header>

  <div class="posts am-list-page">
    {% for post in site.posts %}
      {% if post.categories contains 'organisations' %}
        {% unless post.categories contains 'organisations-hidden' %}
          <div class="organisation-entry">
            <button type="button" class="collapsible">
              <span class="collapsible-content-header">
                <span>
                  <strong><a href="{{ post.website }}" target="_blank">{{ post.company }}</a></strong><br>
                  <a href="{{ post.careers }}" target="_blank">Jobs</a>
                </span>
                <span>{{ post.date | date: "%d %B %Y" }}</span>
              </span>
            </button>
            <div class="collapsible-content">
              <div class="experience-entry">
                {{ post.overview }}
                <h3>About the Company</h3>
                <table class="company-facts-table">
                  <tr>
                    <th>Industry</th>
                    <th>Founded</th>
                    <th>Employees</th>
                    <th>CEO</th>
                    <th>Links</th>
                  </tr>
                  <tr>
                    <td>{{ post.industry }}</td>
                    <td>{{ post.founded }}</td>
                    <td>{{ post.size | number_with_delimiter: "," }}</td>
                    <td><a href="{{ post.ceo-link }}" target="_blank">{{ post.ceo }}</a></td>
                    <td class="company-facts-links">
                      <a href="{{ post.linkedin }}" target="_blank">LinkedIn</a>
                      <a href="{{ post.orgchart }}" target="_blank">Org chart</a>
                      <a href="{{ post.companies-house }}" target="_blank">Companies House</a>
                    </td>
                  </tr>
                </table>
                <div class="read-more-content">
                  {{ post.about | markdownify }}
                </div>
                <a href="#" class="read-more-link">Read more</a>
                <h3>Tech Stack</h3>
                {{ post.tech-stack }}
                <h3>Specialties</h3>
                {{ post.specialties }}
                <br>
                {{ post.content | markdownify }}
              </div>
            </div>
          </div>
        {% endunless %}
      {% endif %}
    {% endfor %}
  </div>
</div>

{% include footer.md %}
