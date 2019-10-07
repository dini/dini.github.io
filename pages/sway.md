---
layout: default
title: Sway keyboard layout
excerpt_separator: <!--more-->
---
## Sway keyboard layout
На просторах инета нашёл вариант:
<!--more-->
```
# swaymsg -t get_inputs | jq '.[0].xkb_active_layout_name'
```
