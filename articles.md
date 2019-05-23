---
layout: default
title: Все статьи
search: exclude
---
<ul>
{% for page in site.pages %}{% unless page.title not null %}
    <li>
        <a href="{{ page.url }}">{{ page.title }}</a>
        {{ page.excerpt }}
    </li>
{% endunless %}{% endfor %}
</ul>
