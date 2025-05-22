---
layout: default
title: Home
---

<section class="hero">
  <h1>{{ site.title }}</h1>
  <p class="lead">A minimal approach to web design and development.</p>
  <a href="{{ '/about' | relative_url }}" class="button">Learn More</a>
</section>

<section class="recent-posts">
  <h2>Recent Posts</h2>

  <ul class="post-list">
    {% for post in site.posts %}
      <li class="card">
        <span class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</span>
        <h3>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        <div class="post-excerpt">{{ post.excerpt }}</div>
        <a href="{{ post.url | relative_url }}" class="button">Read More</a>
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
