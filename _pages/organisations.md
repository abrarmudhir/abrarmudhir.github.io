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
        <p class="organisations-controls-title">Filter organisations by industry, headquarters, or date added, or search by name</p>
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
      <label class="organisations-filter" for="location-filter">
        <span>Headquarters</span>
        <div class="organisations-filter-select-wrap">
          <select id="location-filter">
            <option value="all">All headquarters</option>
          </select>
        </div>
      </label>
      <label class="organisations-filter" for="date-filter">
        <span>Date Added</span>
        <input id="date-filter" type="date">
      </label>
      <label class="organisations-filter" for="sort-filter">
        <span>Sort by</span>
        <div class="organisations-filter-select-wrap">
          <select id="sort-filter">
            <option value="date">Date Added</option>
            <option value="name">Name</option>
            <option value="industry">Industry</option>
          </select>
        </div>
      </label>
      <div class="organisations-letter-filter" aria-label="Filter organisations by first letter">
        <span>Filter Names</span>
        <div class="organisations-letter-filter-options" role="group" aria-label="Organisation first letter">
          <button type="button" class="organisations-letter-filter-button is-active" data-letter="all" aria-pressed="true">All</button>
          {% assign alphabet = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z" | split: "," %}
          {% for letter in alphabet %}
            <button type="button" class="organisations-letter-filter-button" data-letter="{{ letter | downcase }}" aria-pressed="false">{{ letter }}</button>
          {% endfor %}
        </div>
      </div>
      <p class="organisations-filter-status" id="industry-filter-status">Showing all organisations</p>
    </div>
  </header>

  <div class="posts am-list-page">
    {% for post in site.posts %}
      {% if post.categories contains 'organisations' %}
        {% unless post.categories contains 'organisations-hidden' %}
          <div class="organisation-entry" data-industry="{{ post.industry | slugify }}" data-industry-label="{{ post.industry | escape }}" data-location="{{ post.location | slugify }}" data-location-label="{{ post.location | escape }}" data-date="{{ post.date | date: '%Y-%m-%d' }}" data-date-label="{{ post.date | date: '%d %B %Y' }}" data-company="{{ post.company | downcase | escape }}">
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
                    <td>
                      {% if post.ceo-links %}
                        {% for ceo in post.ceo-links %}
                          <a href="{{ ceo.url }}" target="_blank">{{ ceo.name }}</a>{% unless forloop.last %} &amp; {% endunless %}
                        {% endfor %}
                      {% elsif post.ceo-link %}
                        <a href="{{ post.ceo-link }}" target="_blank">{{ post.ceo }}</a>
                      {% else %}
                        {{ post.ceo }}
                      {% endif %}
                    </td>
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
                      <button type="button" class="organisation-share-button" data-share-url="{{ post.url | relative_url }}" data-share-title="{{ post.company | escape }}" aria-label="Share {{ post.company | escape }}">Share</button>
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
    const locationFilter = document.getElementById("location-filter");
    const dateFilter = document.getElementById("date-filter");
    const sortFilter = document.getElementById("sort-filter");
    const status = document.getElementById("industry-filter-status");

    if (!nameFilter || !industryFilter || !locationFilter || !dateFilter || !sortFilter || !status) return;

    const entries = Array.from(document.querySelectorAll(".organisation-entry"));
    const entriesContainer = document.querySelector(".am-list-page");
    const letterButtons = Array.from(document.querySelectorAll(".organisations-letter-filter-button"));
    let selectedLetter = "all";
    const industries = new Map();
    const locations = new Map();
    entries.forEach((entry) => {
      const industryValue = entry.dataset.industry;
      const industryLabel = entry.dataset.industryLabel;
      const locationValue = entry.dataset.location;
      const locationLabel = entry.dataset.locationLabel;

      if (industryValue && industryLabel && !industries.has(industryValue)) {
        industries.set(industryValue, industryLabel);
      }
      if (locationValue && locationLabel && !locations.has(locationValue)) {
        locations.set(locationValue, locationLabel);
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

    Array.from(locations.entries())
      .sort((a, b) => a[1].localeCompare(b[1]))
      .forEach(([value, label]) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        locationFilter.appendChild(option);
      });

    const sortEntries = () => {
      const sortBy = sortFilter.value;
      const sortedEntries = [...entries].sort((a, b) => {
        if (sortBy === "date") return (b.dataset.date || "").localeCompare(a.dataset.date || "");
        if (sortBy === "name") return (a.dataset.company || "").localeCompare(b.dataset.company || "");
        return (a.dataset.industryLabel || "").localeCompare(b.dataset.industryLabel || "")
          || (a.dataset.company || "").localeCompare(b.dataset.company || "");
      });

      sortedEntries.forEach((entry) => entriesContainer.appendChild(entry));
    };

    const updateFilter = () => {
      const query = nameFilter.value.trim().toLowerCase();
      const selectedIndustry = industryFilter.value;
      const selectedLocation = locationFilter.value;
      const selectedDate = dateFilter.value;
      let visibleCount = 0;

      entries.forEach((entry) => {
        const matchesIndustry = selectedIndustry === "all" || entry.dataset.industry === selectedIndustry;
        const matchesLocation = selectedLocation === "all" || entry.dataset.location === selectedLocation;
        const matchesDate = selectedDate === "" || entry.dataset.date === selectedDate;
        const companyName = entry.dataset.company || "";
        const matchesName = query === "" || companyName.includes(query);
        const matchesLetter = selectedLetter === "all" || companyName.startsWith(selectedLetter);
        const matches = matchesIndustry && matchesLocation && matchesDate && matchesName && matchesLetter;
        entry.hidden = !matches;
        if (matches) visibleCount += 1;
      });

      if (selectedIndustry === "all" && selectedLocation === "all" && selectedDate === "" && query === "" && selectedLetter === "all") {
        status.textContent = `Showing all organisations (${visibleCount})`;
        return;
      }

      const filters = [];
      if (selectedIndustry !== "all") {
        filters.push(`in ${industryFilter.options[industryFilter.selectedIndex]?.textContent || "the selected industry"}`);
      }
      if (selectedLocation !== "all") {
        filters.push(`headquartered in ${locationFilter.options[locationFilter.selectedIndex]?.textContent || "the selected headquarters"}`);
      }
      if (selectedDate) {
        const dateLabel = new Intl.DateTimeFormat("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric"
        }).format(new Date(`${selectedDate}T00:00:00`));
        filters.push(`added on ${dateLabel}`);
      }
      if (selectedLetter !== "all") filters.push(`starting with ${selectedLetter.toUpperCase()}`);
      if (query) filters.push(`matching "${query}"`);

      status.textContent = `Showing ${visibleCount} organisation${visibleCount === 1 ? "" : "s"} ${filters.join(" and ")}`;
    };

    industryFilter.addEventListener("change", updateFilter);
    locationFilter.addEventListener("change", updateFilter);
    dateFilter.addEventListener("change", updateFilter);
    sortFilter.addEventListener("change", function () {
      sortEntries();
      updateFilter();
    });
    letterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        selectedLetter = button.dataset.letter || "all";
        letterButtons.forEach((item) => {
          const isActive = item === button;
          item.classList.toggle("is-active", isActive);
          item.setAttribute("aria-pressed", String(isActive));
        });
        updateFilter();
      });
    });
    nameFilter.addEventListener("input", updateFilter);

    document.querySelectorAll(".organisation-share-button").forEach((button) => {
      button.addEventListener("click", async function () {
        const url = new URL(this.dataset.shareUrl, window.location.origin).href;
        const title = this.dataset.shareTitle || "Organisation";
        const originalLabel = this.textContent;

        try {
          if (navigator.share) {
            await navigator.share({ title, url });
            return;
          }

          await navigator.clipboard.writeText(url);
          this.textContent = "Copied";
        } catch (error) {
          if (error && error.name === "AbortError") return;

          const input = document.createElement("input");
          input.value = url;
          document.body.appendChild(input);
          input.select();
          document.execCommand("copy");
          input.remove();
          this.textContent = "Copied";
        }

        window.setTimeout(() => {
          this.textContent = originalLabel;
        }, 1800);
      });
    });

    sortEntries();
    updateFilter();
  });
</script>

{% include footer.md %}
