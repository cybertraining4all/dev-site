---
layout: default
title: Cybersecurity Training & Resources
menus: header
---

<section class="home-hero">
  <div class="hero-gridlines" aria-hidden="true"></div>
  <div class="hero-copy">
    <div class="eyebrow"><span class="eyebrow-line"></span> CYBERSECURITY KNOWLEDGE FOR EVERYONE</div>
    <h1>Build skills.<br><span>Strengthen defenses.</span></h1>
    <p>Practical cybersecurity training and trusted resources for the people who learn, lead, and protect—at every level of the organization.</p>
    <div class="hero-actions">
      <a class="button button-primary" href="{{ '/students/' | relative_url }}">Explore training <span aria-hidden="true">→</span></a>
      <a class="button button-secondary" href="{{ '/about/' | relative_url }}">About this project</a>
    </div>
    <div class="hero-proof"><span class="proof-icon" aria-hidden="true">⌘</span><span>Hands-on resources</span><i></i><span>Leadership guidance</span><i></i><span>Security awareness</span></div>
  </div>
  <div class="hero-visual" role="img" aria-label="Cybersecurity professional working at a computer">
    <div class="visual-frame"><img src="{{ '/assets/hacker.png' | relative_url }}" alt="" fetchpriority="high">
      <div class="visual-overlay"></div>
      <div class="visual-label"><span class="status-dot"></span><span><strong>DEFENSE STARTS WITH KNOWLEDGE</strong><small>Understand the threat. Build the capability.</small></span></div>
      <div class="visual-corner corner-tl"></div><div class="visual-corner corner-br"></div>
    </div>
    <div class="visual-orbit orbit-one"></div><div class="visual-orbit orbit-two"></div>
  </div>
  <div class="hero-bottomline"><span>01 / LEARN</span><span>02 / PRACTICE</span><span>03 / PROTECT</span></div>
</section>

<section class="audience-section">
  <div class="section-heading"><div><span class="section-kicker">FIND YOUR STARTING POINT</span><h2>Security is everyone's responsibility.</h2></div><p>Choose the path that fits your role. Build confidence with focused resources designed for your needs.</p></div>
  <div class="audience-grid">
    <a class="audience-card" href="{{ '/students/' | relative_url }}">
      <div class="card-image"><img src="{{ '/assets/students.jpg' | relative_url }}" alt="" loading="lazy"><span class="card-index">01</span><span class="card-arrow" aria-hidden="true">↗</span></div>
      <div class="card-body"><span class="card-tag">TECHNICAL LEARNING</span><h3>Students & Practitioners</h3><p>Build hands-on skills in blue teaming, red teaming, DFIR, labs, certifications, and more.</p><span class="card-link">Explore student resources <span aria-hidden="true">→</span></span></div>
    </a>
    <a class="audience-card" href="{{ '/executive/' | relative_url }}">
      <div class="card-image"><img src="{{ '/assets/executives.jpg' | relative_url }}" alt="" loading="lazy"><span class="card-index">02</span><span class="card-arrow" aria-hidden="true">↗</span></div>
      <div class="card-body"><span class="card-tag">STRATEGY & GOVERNANCE</span><h3>Executives & Boards</h3><p>Connect cybersecurity risk to business decisions, governance, frameworks, and oversight.</p><span class="card-link">Explore executive guidance <span aria-hidden="true">→</span></span></div>
    </a>
    <a class="audience-card" href="{{ '/employees/' | relative_url }}">
      <div class="card-image"><img src="{{ '/assets/employees.jpg' | relative_url }}" alt="" loading="lazy"><span class="card-index">03</span><span class="card-arrow" aria-hidden="true">↗</span></div>
      <div class="card-body"><span class="card-tag">EVERYDAY AWARENESS</span><h3>Employees & Teams</h3><p>Recognize phishing, avoid scams, and strengthen everyday security habits at work.</p><span class="card-link">Explore awareness training <span aria-hidden="true">→</span></span></div>
    </a>
  </div>
</section>

<section class="principles-section">
  <div class="principles-intro"><span class="section-kicker">WHY CYBER TRAINING 4 ALL</span><h2>Useful knowledge.<br><span>Real-world impact.</span></h2><p>Security improves when people at every level understand their part. These resources are built to make cybersecurity concepts approachable, practical, and actionable.</p></div>
  <div class="principle-list">
    <div class="principle-item"><span class="principle-number">01</span><div><h3>Learn at every level</h3><p>From foundational awareness to technical security references, find material that meets you where you are.</p></div><span class="principle-symbol" aria-hidden="true">⌁</span></div>
    <div class="principle-item"><span class="principle-number">02</span><div><h3>Turn concepts into practice</h3><p>Use guides, cheat sheets, frameworks, and hands-on learning resources to put knowledge to work.</p></div><span class="principle-symbol" aria-hidden="true">⌘</span></div>
    <div class="principle-item"><span class="principle-number">03</span><div><h3>Build a stronger culture</h3><p>Help individuals and organizations make better-informed decisions about cybersecurity risk.</p></div><span class="principle-symbol" aria-hidden="true">◈</span></div>
  </div>
</section>

{% if site.posts.size > 0 %}
<section class="insights-section">
  <div class="section-heading"><div><span class="section-kicker">FROM THE FIELD</span><h2>Security insights</h2></div><a class="text-link" href="{{ '/posts' | relative_url }}">View all insights <span aria-hidden="true">→</span></a></div>
  <div class="insights-grid">
    {% for post in site.posts limit:3 %}
    <article class="insight-card"><div class="insight-meta"><span>FIELD NOTES</span><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %d, %Y" }}</time></div><h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>{% if post.excerpt %}<p>{{ post.excerpt | strip_html | truncate: 145 }}</p>{% endif %}<a class="insight-read" href="{{ post.url | relative_url }}">Read insight <span aria-hidden="true">→</span></a></article>
    {% endfor %}
  </div>
</section>
{% endif %}
