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

## Q & A 🦜🗣️

### Softies ✨

<div class="posts">
  {% assign displayed_types = "" %}
  {% for post in site.posts %}
    {% if post.type contains 'soft-skills' %}
      {% unless displayed_types contains post.topic %}
        <h3>{{ post.topic }}</h3>
        {% assign displayed_types = displayed_types | append: post.topic | append: "," %}
      {% endunless %}
      <div class="question-entry">
        <button type="button" class="collapsible">
            <p class="collapsible-content-header">{{ post.title }}</p>
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
</div>

### Techies 👨‍💻

<div class="posts">
  {% assign displayed_types = "" %}
  {% for post in site.posts %}
    {% if post.type contains 'technical-skills' %}
      {% unless displayed_types contains post.topic %}
        <h3>{{ post.topic }}</h3>
        {% assign displayed_types = displayed_types | append: post.topic | append: "," %}
      {% endunless %}
      <div class="question-entry">
        <button type="button" class="collapsible">
            <p class="collapsible-content-header">{{ post.title }}</p>
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
            {% else %}
              <p><small>No script field found.</small></p>
            {% endif %}
            <p><small>Date Added: {{ post.date | date: "%d %B %Y" }}</small></p>
          </div>
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>

<script src="{{ '/assets/js/custom.js' | relative_url }}"></script>

{% include footer.md %}
