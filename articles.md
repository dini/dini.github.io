---
layout: default
title: Все статьи
search: exclude
---
<ul>
{% for page in site.pages %}{% unless not page.title %}
    <li>
        <a href="{{ page.url }}">{{ page.title }}</a>
        {{ page.excerpt }}
    </li>
{% endunless %}{% endfor %}
</ul>
