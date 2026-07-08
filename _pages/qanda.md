---
theme: just-the-docs
layout: page
data: qanda
title: 🗣️ Q & A
permalink: /qanda/
isHome: false
nav_order: 7
isPost: false
---
<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

<div class="qanda-page">
  <header class="qanda-hero">
    <p class="qanda-eyebrow">Interview notes</p>
    <h1>Q&A</h1>
    <p class="qanda-summary">Browse practical interview answers by topic, or search for a specific scenario, technology, or pattern.</p>
  </header>

  <div class="qanda-controls" aria-label="Q&A filters">
    <label class="qanda-search" for="qanda-search">
      <span>Search questions</span>
      <input id="qanda-search" type="search" placeholder="Search AWS, migration, SOLID, testing..." autocomplete="off">
    </label>

    <nav id="topic-filters" class="qanda-topic-filters" aria-label="Topic filters">
      <a href="#" class="qanda-filter is-active" data-topic="all">All Topics</a>
      {% assign rendered_topics = "|" %}
      {% assign qanda_topics_csv = "" %}
      {% for post in site.posts %}
        {% if post.categories contains 'qanda' and post.topic %}
          {% assign topic_key = "|" | append: post.topic | append: "|" %}
          {% unless rendered_topics contains topic_key %}
            {% assign qanda_topics_csv = qanda_topics_csv | append: post.topic | append: "|" %}
            {% assign rendered_topics = rendered_topics | append: post.topic | append: "|" %}
          {% endunless %}
        {% endif %}
      {% endfor %}
      {% assign qanda_topics = qanda_topics_csv | split: "|" | sort %}
      {% for topic in qanda_topics %}
        {% if topic != "" %}
          <a href="#" class="qanda-filter" data-topic="{{ topic }}">{{ topic }}</a>
        {% endif %}
      {% endfor %}
    </nav>

    <div id="qanda-subtopic-filter" class="l3-filter-menu qanda-subtopic-menu" hidden>
      <button
        type="button"
        class="qanda-filter l3-filter-menu-toggle"
        id="qanda-subtopic-toggle"
        aria-expanded="false"
        aria-controls="qanda-subtopic-panel"
      >
        Subtopics
      </button>
      <div id="qanda-subtopic-panel" class="l3-filter-menu-panel" hidden>
        <button type="button" class="qanda-filter is-active" data-subtopic="all" data-parent-topic="all">
          All Subtopics
        </button>
        {% assign unique_subtopic_keys = "|" %}
        {% for post in site.posts %}
          {% if post.categories contains 'qanda' and post.topic and post["sub-topic"] %}
            {% assign subtopic_key = "|" | append: post.topic | append: "::" | append: post["sub-topic"] | append: "|" %}
            {% unless unique_subtopic_keys contains subtopic_key %}
              <button
                type="button"
                class="qanda-filter"
                data-subtopic="{{ post["sub-topic"] }}"
                data-parent-topic="{{ post.topic }}"
              >
                {{ post["sub-topic"] }}
              </button>
              {% assign unique_subtopic_keys = unique_subtopic_keys | append: post.topic | append: "::" | append: post["sub-topic"] | append: "|" %}
            {% endunless %}
          {% endif %}
        {% endfor %}
      </div>
    </div>
  </div>

  <section class="qanda-section" id="soft-skills-posts" aria-labelledby="soft-skills-title">
    <div class="qanda-section-header">
      <p class="qanda-section-kicker">Softies</p>
      <h2 id="soft-skills-title">Soft Skills</h2>
    </div>

    {% assign soft_posts = site.posts | where_exp: "post", "post.type contains 'soft-skills'" %}
    {% assign soft_subtopics_csv = "" %}
    {% assign rendered_soft_subtopics = "|" %}
    {% for post in soft_posts %}
      {% assign display_topic = post["sub-topic"] | default: post.topic %}
      {% if display_topic %}
        {% assign subtopic_key = "|" | append: display_topic | append: "|" %}
        {% unless rendered_soft_subtopics contains subtopic_key %}
          {% assign soft_subtopics_csv = soft_subtopics_csv | append: display_topic | append: "|" %}
          {% assign rendered_soft_subtopics = rendered_soft_subtopics | append: display_topic | append: "|" %}
        {% endunless %}
      {% endif %}
    {% endfor %}
    {% assign soft_subtopics = soft_subtopics_csv | split: "|" | sort %}
    {% for subtopic in soft_subtopics %}
      {% if subtopic != "" %}
        <h3 class="topic-header" data-topic="Soft Skills" data-subtopic="{{ subtopic }}">{{ subtopic }}</h3>
        {% for post in soft_posts %}
          {% assign display_topic = post["sub-topic"] | default: post.topic %}
          {% if display_topic == subtopic %}
            <div
              class="question-entry"
              data-topic="{{ post.topic }}"
              data-subtopic="{{ display_topic }}"
              data-title="{{ post.title | escape }}"
              data-question="{{ post.question | escape }}"
              data-answer="{{ post.answer | strip_html | strip_newlines | escape }}"
            >
              <button type="button" class="collapsible">
                <span class="collapsible-content-header">{{ post.title }}</span>
              </button>
              <div class="collapsible-content">
                <div class="answer-entry">
                  <h3>Question</h3>
                  {{ post.question }}
                  <h3>Answer</h3>
                  {{ post.answer | markdownify }}
                  <p><small>Date Added: {{ post.date | date: "%d %B %Y" }}</small></p>
                </div>
              </div>
            </div>
          {% endif %}
        {% endfor %}
      {% endif %}
    {% endfor %}
  </section>

  <section class="qanda-section" id="technical-skills-posts" aria-labelledby="technical-skills-title">
    <div class="qanda-section-header">
      <p class="qanda-section-kicker">Techies</p>
      <h2 id="technical-skills-title">Technical Skills</h2>
    </div>

    {% assign displayed_types = "" %}
    {% for post in site.posts %}
      {% if post.type contains 'technical-skills' %}
        {% assign display_topic = post["sub-topic"] | default: post.topic %}
        {% assign display_key = post.topic | append: "::" | append: display_topic %}
        {% unless displayed_types contains display_key %}
          <h3 class="topic-header" data-topic="{{ post.topic }}" data-subtopic="{{ display_topic }}">{{ display_topic }}</h3>
          {% assign displayed_types = displayed_types | append: display_key | append: "," %}
        {% endunless %}
        <div
          class="question-entry"
          data-topic="{{ post.topic }}"
          data-subtopic="{{ display_topic }}"
          data-title="{{ post.title | escape }}"
          data-question="{{ post.question | escape }}"
          data-answer="{{ post.answer | strip_html | strip_newlines | escape }}"
        >
          <button type="button" class="collapsible">
            <span class="collapsible-content-header">{{ post.title }}</span>
          </button>
          <div class="collapsible-content">
            <div class="answer-entry">
              <h3>Question</h3>
              {{ post.question }}
              <h3>Answer</h3>
              {{ post.answer | markdownify }}
              {% if post.script %}
                <h3>Script</h3>
                {% highlight python %}
                {% include {{ post.script }} %}
                {% endhighlight %}
              {% endif %}
              <p><small>Date Added: {{ post.date | date: "%d %B %Y" }}</small></p>
            </div>
          </div>
        </div>
      {% endif %}
    {% endfor %}
  </section>

  <p class="qanda-empty" id="qanda-empty" hidden>No matching Q&A entries found.</p>
</div>

{% include footer.md %}
