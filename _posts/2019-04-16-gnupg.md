---
layout: default
title: Авторизация SSH
excerpt_separator: <!--more-->
---
## Авторизация SSH
В автозапуск добавляем:
```
export GPG_TTY=$(tty)
export SSH_AUTH_SOCK=$(gpgconf --list-dirs agent-ssh-socket)
```
В конфиг `~/.gnupg/gpg-agent.conf` добавляем строку:
```
enable-ssh-support
```
<!--more-->

### Ошибки
Если при добавлении ключа получаем ошибку:
```
$ ssh-add id_rsa
Could not add identity "id_rsa": agent refused operation
```
То запускаем:
```
$ echo UPDATESTARTUPTTY | gpg-connect-agent
```
