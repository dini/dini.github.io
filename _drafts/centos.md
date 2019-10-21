---
layout: default
title: PHP 5.6 на CentOS 5
excerpt_separator: <!--more-->
---
## Обновление до CentOS 5.11
<!--more-->
Создаём новый файл репозитория:
```
[base]
name=CentOS-$releasever - Base
baseurl=http://vault.centos.org/5.11/os/$basearch/
enabled=1
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-5

[updates]
name=CentOS-$releasever - Updates
baseurl=http://vault.centos.org/5.11/updates/$basearch/
enabled=1
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-5
```
Затем очищаем и обновляем кеш:
```
# yum clean all
# yum makecache
```
Ну и обновляем систему:
```
# yum update
```
## Установка PHP 5.6
