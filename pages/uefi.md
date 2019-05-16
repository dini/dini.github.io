---
layout: default
title: EFI Stub Kernel
excerpt_separator: <!--more-->
---
## EFI Stub Kernel
В подавляющем большинстве дистрибутивов ядро уже собранно с параметром `CONFIG_EFI_STUB` и этим можно воспользоваться.
Монтируем ESP раздел в директорию `/esp`, затем `/esp/EFI/Linux` биндим в `/boot`.
<!--more-->
```
# mkdir -p /esp
# mount /dev/sda1 /esp
# mkdir -p /esp/EFI/Linux
# mv /boot/* /esp/EFI/Linux
# mount -o bind /esp/EFI/Linux /boot
# mount /sys/firmware/efi/efivars -o rw,remount
# efibootmgr --create --part 1 --disk /dev/sda --label "Linux" --loader '\EFI\Linux\vmlinuz-linux' -u 'initrd=\EFI\Linux\initramfs.img'
# mount /sys/firmware/efi/efivars -o ro,remount
```
