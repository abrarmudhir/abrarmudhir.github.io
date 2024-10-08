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
                  <span>
                    <a href="{{ post.website }}" target="_blank">{{ post.company }}</a><br>
                    <a href="{{ post.careers }}" target="_blank">Jobs</a>
                  </span>
                  <span>{{ post.date | date: "%d %B %Y" }}</span>
              </p>
          </button>
          <div class="collapsible-content">
            <div class="experience-entry">
              {{ post.overview }}
              <h3>About the Company</h3>
              <table>
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
                  <td><a href="{{ post.linkedin }}" target="_blank">linkedIn</a> | <a href="{{ post.orgchart }}" target="_blank">org-chart</a> | <a href="{{ post.companies-house }}" target="_blank">uk companies-house</a></td>
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