---
layout: default
title: About
permalink: /about/
---

<div class="about-section">
  <h1>About</h1>
  
  <p class="lead">We focus on creating clean, minimal designs that prioritize content and usability.</p>

  <div class="card">
    <h2>What We Do</h2>
    
    <div class="grid">
      <div class="feature">
        <h3>Jekyll Framework</h3>
        <p>Built with Jekyll, a static site generator that provides fast loading speeds and robust security features.</p>
      </div>
      
      <div class="feature">
        <h3>GitHub Pages</h3>
        <p>Hosted on GitHub Pages, providing reliable, scalable hosting with seamless deployment capabilities.</p>
      </div>
    </div>
  </div>
  
  <div class="team-section">
    <h2>Our Team</h2>
    
    <div class="grid">
      <div class="card team-member">
        <img src="https://via.placeholder.com/150" alt="Team Member" class="avatar">
        <h3>Jane Doe</h3>
        <p class="position">Lead Designer</p>
        <p>With over 10 years of experience in UI/UX design, Jane creates beautiful and functional interfaces.</p>
        <div class="social-links">
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
          <a href="#">GitHub</a>
        </div>
      </div>
      
      <div class="card team-member">
        <img src="https://via.placeholder.com/150" alt="Team Member" class="avatar">
        <h3>John Smith</h3>
        <p class="position">Developer</p>
        <p>John is a full-stack developer passionate about creating clean, efficient code.</p>
        <div class="social-links">
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
          <a href="#">GitHub</a>
        </div>
      </div>
      
      <div class="card team-member">
        <img src="https://via.placeholder.com/150" alt="Team Member" class="avatar">
        <h3>Alex Johnson</h3>
        <p class="position">Content Strategist</p>
        <p>Alex crafts compelling narratives and ensures content aligns with strategic goals.</p>
        <div class="social-links">
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
          <a href="#">GitHub</a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="cta-section">
    <h2>Get In Touch</h2>
    <p>Interested in working with us or have questions about our projects? We'd love to hear from you.</p>
    <div class="button-group">
      <a href="mailto:{{ site.email }}" class="button">Email Us</a>
      <a href="https://github.com/{{ site.github_username }}/{{ site.baseurl | split: '/' | last }}" class="button secondary">View on GitHub</a>
    </div>
  </div>
</div> <!-- End of about-section -->
