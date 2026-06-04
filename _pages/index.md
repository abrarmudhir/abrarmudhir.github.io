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
    <p class="am-page-summary">Life-long learner, data product builder, data engineer, and applied data science practitioner.</p>
  </header>

  <section class="am-card">
    <h2>About</h2>
    <p>As a lifelong learner and versatile engineer in financial services, I mix humour with a serious passion for tech and the environment. I am a people-first person who thrives on connecting and collaborating.</p>
    <p>Using my skills in algorithms, data wrangling, and project management, I create impactful solutions that benefit both people and the planet.</p>
  </section>

  <section class="am-card-grid">
    <div class="am-card">
      <h2>Resume</h2>
      <p>Download my latest CV in PDF format.</p>
      <p><a class="am-action-link" href="{{ site.data.files.cv.pdf }}" target="_blank">Download CV</a></p>
      <p class="am-muted">Last updated: {{ site.data.files.cv.last_update }}</p>
    </div>

    <div class="am-card">
      <h2>Contact</h2>
      <p>Feel free to reach out by email.</p>
      <p><a class="am-action-link" href="mailto:abrarmudhir@outlook.com">abrarmudhir@outlook.com</a></p>
    </div>
  </section>
</div>

{% include footer.md %}
