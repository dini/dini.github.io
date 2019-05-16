---
layout: default
title: Как добавить исключение для ClamAV
excerpt_separator: <!--more-->
---
# Как добавить исключение для ClamAV
При появлении false-positive на ClamAV необходимо<!--more-->:

* Определить сработавшую сигнатуру(в логах демона или сервиса, к которому прикручен clamav), например Sanesecurity.Jurlbl.81bb94.UNOFFICIAL;
* В каталоге с базами создать файл или отредактировать существующий с расширением `.ign2`;
* В файл вносим строку с названием сигнатуры в формате SOURCE.type.NUMBER(т.е. без приписок OFFICIAL/UNOFFICIAL/etc), в нашем случае Sanesecurity.Jurlbl.81bb94;
* Перезапустить сервис clamav.

## Где находятся базы?
```
$ grep DatabaseDirectory /etc/clamav/clamd.conf
```
