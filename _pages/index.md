---
title: 👋 Profile
layout: default
data: profile
permalink: /
theme: just-the-docs
nav_order: 1
isHome: true
isPost: false
---
<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

<div class="am-page">
  <header class="am-page-hero">
    <p class="am-page-eyebrow">Profile</p>
    <h1>Abrar Mudhir</h1>
    <p class="am-page-summary">Senior software and AI engineer with 15+ years of experience building mission-critical systems for financial services and trading.</p>
  </header>

  <section class="am-card am-profile-intro">
    <h2>About</h2>
    <p>I design and deliver reliable software, data products, analytics platforms and APIs for investment and trading teams. My work spans Python, Java, cloud-native services, data engineering, quantitative modelling and machine learning.</p>
    <p>I am an experienced technical leader in enterprise architecture, legacy modernisation and engineering standards. I enjoy turning complex business and data problems into maintainable systems, working closely with stakeholders and helping teams grow along the way.</p>
  </section>

  <section class="am-card">
    <h2>Technical focus</h2>
    <p class="am-muted">Technologies and domains I use to build production systems.</p>
    <div class="am-profile-skills">
      <div>
        <h3>Core engineering</h3>
        <p>Python, Java, C#, SQL, FastAPI, Spring Boot, REST APIs, microservices, distributed systems</p>
      </div>
      <div>
        <h3>Data, AI &amp; analytics</h3>
        <p>Data pipelines, Spark, Pandas, Polars, Snowflake, MongoDB, machine learning, Generative AI, Dash, Plotly</p>
      </div>
      <div>
        <h3>Cloud &amp; delivery</h3>
        <p>AWS, Azure, Docker, Kubernetes, CI/CD, Apache Airflow, Dagster, data quality and production support</p>
      </div>
      <div>
        <h3>Financial markets</h3>
        <p>Fixed income, credit, equities, FX, gas, power, LNG, fund analytics, market data and portfolio analytics</p>
      </div>
    </div>
  </section>

  <section class="am-card">
    <h2>Credentials</h2>
    <p>M.Eng. (Hons) in Computer Science from University College London, with a machine-learning project on correlated exchange-rate movements using neural networks.</p>
    <p>Microsoft-certified AI Engineer and Data Scientist, with 11 active AI and data certifications including AI-102, DP-100, DP-203, DP-300 and PL-400.</p>
    <p><a class="am-action-link" href="{{ '/education/' | relative_url }}">View education &amp; certifications</a></p>
  </section>

  <section class="am-card-grid">
    <div class="am-card">
      <h2>CV</h2>
      <p>Download my latest CV in PDF format.</p>
      <p><a class="am-action-link" href="{{ site.data.files.cv.pdf }}" target="_blank">Download CV</a></p>
      <p class="am-muted">Last updated: {{ site.data.files.cv.last_update }}</p>
    </div>

    <div class="am-card">
      <h2>Let's connect</h2>
      <p>I am always happy to discuss engineering, data, AI and financial-markets technology.</p>
      <p><a class="am-action-link" href="mailto:{{ site.email }}">Email me</a> <a class="am-action-link" href="{{ site.linkedin_url }}" target="_blank">LinkedIn</a></p>
    </div>
  </section>
</div>

{% include footer.md %}
