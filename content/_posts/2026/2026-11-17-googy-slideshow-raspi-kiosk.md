---
kind: "code"
title: "googy-slideshow-raspi-kiosk"
date: "2026-11-17T21:19:00.000Z"
date_precision: "minute"
preview_image: "/content/media/2026/2026-11-17-googy-slideshow-raspi-kiosk.webp"
preview_alt: "googy raspi kiosk on a monitor in a dark room with some other junk on a desk"
tags: ["raspberry pi", "hardware"]
---

![googy raspi kiosk on a monitor in a dark room with some other junk on a desk](/content/media/2026/2026-11-17-googy-slideshow-raspi-kiosk.webp)

so my bro asked me how to make a raspberry pi show google slides on a kiosk screen, so i made dis. it's a simple python script that scrapes google slide url to get .png images, then use [fbi](https://www.nongnu.org/fbi-improved/) to render images on a tty (so like just a plain linux console, no xwindows gui or browser). there's [a github action workflow](https://github.com/edwardsharp/googy-slideshow-raspi-kiosk/blob/main/.github/workflows/image.yml) to build a custom raspi image that can used with the [Raspberry Pi Imager](https://www.raspberrypi.com/software/) app to build an sd card + then can add google slides url to slideshow.txt; then plug into a raspberry pi and all set, easy peasy (no keyboard or ssh or further interaction with raspi needed)!

**see also:** [github/edwardsharp/googy-slideshow-raspi-kiosk](https://github.com/edwardsharp/googy-slideshow-raspi-kiosk)
