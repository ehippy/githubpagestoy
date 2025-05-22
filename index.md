---
layout: default
title: Home
---

<h1>Welcome to my GitHub Pages site!</h1>

<p>This is a simple Jekyll site that's set up to publish to GitHub Pages.</p>

<h2>Recent Posts</h2>

<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
      <h3>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
