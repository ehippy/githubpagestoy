---
layout: default
title: Home
---

<section class="hero">
  <h1>Emerging Horizons in AI</h1>
  <p class="lead">Exploring the cutting edge of artificial intelligence and its impact on our world.</p>
  <a href="{{ '/about' | relative_url }}" class="button">About Us</a>
</section>

<section class="featured-post">
  <h2>Featured Article</h2>
  {% assign featured_post = site.posts.first %}
  <div class="featured-card">
    {% if featured_post.image %}
    <img src="{{ featured_post.image }}" alt="{{ featured_post.title }}" class="featured-card-image">
    {% endif %}
    <span class="post-meta">{{ featured_post.date | date: "%B %-d, %Y" }}</span>
    <h3>
      <a href="{{ featured_post.url | relative_url }}">{{ featured_post.title }}</a>
    </h3>
    <div class="post-excerpt">{{ featured_post.excerpt | strip_html | truncatewords: 30 }}</div>
    <a href="{{ featured_post.url | relative_url }}" class="button">Read More</a>
  </div>
</section>

<section class="topics">
  <h2>AI Topics</h2>
  <div class="topic-grid">
    <a href="#recent-foundation" class="topic-card">
      <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=300&h=300&crop=entropy&fit=crop" alt="Foundation Models" class="topic-card-image">
      <h3>Foundation Models</h3>
      <p>The architecture shaping the future of AI</p>
    </a>
    <a href="#recent-ethics" class="topic-card">
      <img src="https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=300&h=300&crop=entropy&fit=crop" alt="Ethics & Trust" class="topic-card-image">
      <h3>Ethics & Trust</h3>
      <p>Building responsible AI systems</p>
    </a>
    <a href="#recent-applications" class="topic-card">
      <img src="https://images.unsplash.com/photo-1581094794329-c8112a89f47e?w=300&h=300&crop=entropy&fit=crop" alt="Applications" class="topic-card-image">
      <h3>Applications</h3>
      <p>AI transforming industries</p>
    </a>
    <a href="#recent-hardware" class="topic-card">
      <img src="https://images.unsplash.com/photo-1544511916-0148ccdeb877?w=300&h=300&crop=entropy&fit=crop" alt="Hardware" class="topic-card-image">
      <h3>Hardware</h3>
      <p>Next-generation AI infrastructure</p>
    </a>
  </div>
</section>

<section id="recent-posts" class="recent-posts">
  <h2>Latest Insights</h2>

  <ul class="post-list">
    {% for post in site.posts offset:1 limit:4 %}
      <li class="card">
        {% if post.image %}
        <img src="{{ post.image }}" alt="{{ post.title }}" class="card-image">
        {% endif %}
        <span class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</span>
        <h3>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        <div class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</div>
        <a href="{{ post.url | relative_url }}" class="button">Read More</a>
      </li>
    {% endfor %}
  </ul>
  
  <div class="all-posts-link">
    <a href="#all-posts" class="button secondary">View All Articles</a>
  </div>
</section>

<section id="all-posts" class="all-posts">
  <h2>All Articles</h2>
  
  <ul class="post-grid">
    {% for post in site.posts %}
      <li class="post-card">
        {% if post.image %}
        <img src="{{ post.image }}" alt="{{ post.title }}" class="post-card-image">
        {% endif %}
        <span class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</span>
        <h3>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        <div class="post-categories">
          {% for category in post.categories limit:2 %}
            <span class="category-tag">{{ category }}</span>
          {% endfor %}
        </div>
        <a href="{{ post.url | relative_url }}" class="read-more">Read Article →</a>
      </li>
    {% endfor %}
  </ul>
</section>

<section class="features">
  <h2>Features</h2>
  
  <div class="grid">
    <div class="card">
      <h3>Modern Design</h3>
      <p>Clean, minimalist aesthetic with attention to typography and white space.</p>
    </div>
    
    <div class="card">
      <h3>Fully Responsive</h3>
      <p>Optimized for all screen sizes from desktop to mobile devices.</p>
    </div>
    
    <div class="card">
      <h3>Performance Focused</h3>
      <p>Built with speed and efficiency in mind for the best user experience.</p>
    </div>
  </div>
</section>
