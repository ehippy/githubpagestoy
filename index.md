---
layout: default
title: Home
---

<section class="hero">
  <h1>Welcome to {{ site.title }}</h1>
  <p class="lead">A modern, sleek Jekyll site hosted on GitHub Pages.</p>
  <a href="{{ '/about' | relative_url }}" class="button">Learn More <i class="fas fa-arrow-right"></i></a>
</section>

<section class="recent-posts">
  <h2><i class="fas fa-newspaper"></i> Recent Posts</h2>

  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
        <h3>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        <div class="post-excerpt">{{ post.excerpt }}</div>
        <a href="{{ post.url | relative_url }}" class="button">Read More</a>
      </li>
    {% endfor %}
  </ul>
</section>
