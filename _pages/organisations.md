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
    <div class="organisations-controls" aria-label="Organisation filters">
      <div class="organisations-controls-copy">
        <p class="organisations-controls-eyebrow">Browse by sector</p>
        <p class="organisations-controls-title">Filter organisations by industry</p>
      </div>
      <label class="organisations-filter" for="industry-filter">
        <span>Industry</span>
        <div class="organisations-filter-select-wrap">
          <select id="industry-filter">
            <option value="all">All industries</option>
          </select>
        </div>
      </label>
      <p class="organisations-filter-status" id="industry-filter-status">Showing all organisations</p>
    </div>
  </header>

  <div class="posts am-list-page">
    {% for post in site.posts %}
      {% if post.categories contains 'organisations' %}
        {% unless post.categories contains 'organisations-hidden' %}
          <div class="organisation-entry" data-industry="{{ post.industry | slugify }}" data-industry-label="{{ post.industry | escape }}">
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
                      {% if post.linkedin %}
                      <a href="{{ post.linkedin }}" target="_blank">LinkedIn</a>
                      {% endif %}
                      {% if post.orgchart %}
                      <a href="{{ post.orgchart }}" target="_blank">Org chart</a>
                      {% endif %}
                      {% if post.companies-house %}
                      <a href="{{ post.companies-house }}" target="_blank">Companies House</a>
                      {% endif %}
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

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const filter = document.getElementById("industry-filter");
    const status = document.getElementById("industry-filter-status");

    if (!filter || !status) return;

    const entries = Array.from(document.querySelectorAll(".organisation-entry"));
    const industries = new Map();

    entries.forEach((entry) => {
      const value = entry.dataset.industry;
      const label = entry.dataset.industryLabel;

      if (value && label && !industries.has(value)) {
        industries.set(value, label);
      }
    });

    Array.from(industries.entries())
      .sort((a, b) => a[1].localeCompare(b[1]))
      .forEach(([value, label]) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        filter.appendChild(option);
      });

    const updateFilter = () => {
      const selected = filter.value;
      let visibleCount = 0;

      entries.forEach((entry) => {
        const matches = selected === "all" || entry.dataset.industry === selected;
        entry.hidden = !matches;
        if (matches) visibleCount += 1;
      });

      if (selected === "all") {
        status.textContent = `Showing all organisations (${visibleCount})`;
        return;
      }

      const selectedLabel = filter.options[filter.selectedIndex]?.textContent || "selected industry";
      status.textContent = `Showing ${visibleCount} organisation${visibleCount === 1 ? "" : "s"} in ${selectedLabel}`;
    };

    filter.addEventListener("change", updateFilter);
    updateFilter();
  });
</script>

{% include footer.md %}
