---
layout: home
---
# Select a recipe book:

{% for book in site.collections %}
{% if book.label != "posts" %}
* <a href="recipes/{{book.label}}" onclick="OpenLink(this); return false">{{book.label}}</a>
{% endif %}
{% endfor %}
