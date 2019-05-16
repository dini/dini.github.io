---
layout: default
title: Все статьи
---
<ul>
{% for page in site.pages %}
    <li>
        <a href="{{ page.url }}">{{ page.title }}</a>
        {{ page.excerpt }}
    </li>
{% endfor %}
</ul>
