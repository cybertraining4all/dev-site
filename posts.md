---
layout: default
title: Security Insights
permalink: /posts/
---

<div class="audience-page-intro"><span class="section-kicker">FROM THE FIELD</span><h1>Security insights</h1><p>Articles and observations on cybersecurity, threats, and the changing digital landscape.</p></div>

<div class="post-listing">
  {% for post in site.posts %}
  <article class="post-row"><div class="post-date"><span>{{ post.date | date: "%d" }}</span><small>{{ post.date | date: "%b %Y" }}</small></div><div class="post-details"><h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2><p>{{ post.excerpt | strip_html | truncate: 240 }}</p><a class="card-link" href="{{ post.url | relative_url }}">Read article →</a></div></article>
  {% endfor %}
</div>
