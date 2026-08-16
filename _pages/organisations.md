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
        <p class="organisations-controls-title">Filter organisations by industry or date added, or search by name</p>
      </div>
      <label class="organisations-filter" for="name-filter">
        <span>Name</span>
        <input id="name-filter" type="search" placeholder="Search organisation name..." autocomplete="off">
      </label>
      <label class="organisations-filter" for="industry-filter">
        <span>Industry</span>
        <div class="organisations-filter-select-wrap">
          <select id="industry-filter">
            <option value="all">All industries</option>
          </select>
        </div>
      </label>
      <label class="organisations-filter" for="date-filter">
        <span>Date Added</span>
        <input id="date-filter" type="date">
      </label>
      <p class="organisations-filter-status" id="industry-filter-status">Showing all organisations</p>
    </div>
  </header>

  <div class="posts am-list-page">
    {% for post in site.posts %}
      {% if post.categories contains 'organisations' %}
        {% unless post.categories contains 'organisations-hidden' %}
          <div class="organisation-entry" data-industry="{{ post.industry | slugify }}" data-industry-label="{{ post.industry | escape }}" data-date="{{ post.date | date: '%Y-%m-%d' }}" data-date-label="{{ post.date | date: '%d %B %Y' }}" data-company="{{ post.company | downcase | escape }}">
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
    const nameFilter = document.getElementById("name-filter");
    const industryFilter = document.getElementById("industry-filter");
    const dateFilter = document.getElementById("date-filter");
    const status = document.getElementById("industry-filter-status");

    if (!nameFilter || !industryFilter || !dateFilter || !status) return;

    const entries = Array.from(document.querySelectorAll(".organisation-entry"));
    const industries = new Map();
    entries.forEach((entry) => {
      const industryValue = entry.dataset.industry;
      const industryLabel = entry.dataset.industryLabel;

      if (industryValue && industryLabel && !industries.has(industryValue)) {
        industries.set(industryValue, industryLabel);
      }
    });

    Array.from(industries.entries())
      .sort((a, b) => a[1].localeCompare(b[1]))
      .forEach(([value, label]) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        industryFilter.appendChild(option);
      });

    const updateFilter = () => {
      const query = nameFilter.value.trim().toLowerCase();
      const selectedIndustry = industryFilter.value;
      const selectedDate = dateFilter.value;
      let visibleCount = 0;

      entries.forEach((entry) => {
        const matchesIndustry = selectedIndustry === "all" || entry.dataset.industry === selectedIndustry;
        const matchesDate = selectedDate === "" || entry.dataset.date === selectedDate;
        const companyName = entry.dataset.company || "";
        const matchesName = query === "" || companyName.includes(query);
        const matches = matchesIndustry && matchesDate && matchesName;
        entry.hidden = !matches;
        if (matches) visibleCount += 1;
      });

      if (selectedIndustry === "all" && selectedDate === "" && query === "") {
        status.textContent = `Showing all organisations (${visibleCount})`;
        return;
      }

      const filters = [];
      if (selectedIndustry !== "all") {
        filters.push(`in ${industryFilter.options[industryFilter.selectedIndex]?.textContent || "the selected industry"}`);
      }
      if (selectedDate) {
        const dateLabel = new Intl.DateTimeFormat("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric"
        }).format(new Date(`${selectedDate}T00:00:00`));
        filters.push(`added on ${dateLabel}`);
      }
      if (query) filters.push(`matching "${query}"`);

      status.textContent = `Showing ${visibleCount} organisation${visibleCount === 1 ? "" : "s"} ${filters.join(" and ")}`;
    };

    industryFilter.addEventListener("change", updateFilter);
    dateFilter.addEventListener("change", updateFilter);
    nameFilter.addEventListener("input", updateFilter);
    updateFilter();
  });
</script>

{% include footer.md %}
