---
layout: default
menus: header
---

# Cheat Sheets
<ul>
{% assign pdf_files = site.static_files | where: "pdf", true %}
{% for pdf_file in pdf_files %}
  <li><a href="{{ pdf_file.path }}" target="_blank">{{ pdf_file.basename }}</a></li>
{% endfor %}
</ul>

