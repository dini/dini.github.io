---
layout: default
title: Все статьи
search: exclude
---
<ul>{% for page in site.pages %}{% unless page.search == "exclude" or page.url == "/feed.xml" or page.url == "/sitemap.xml" or page.url == "/robots.txt" %}
    <li>
        <a href="{{ page.url }}">{{ page.title }}</a>
        {{ page.excerpt }}
    </li>{% endunless %}{% endfor %}
</ul>
