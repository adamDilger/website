---
title: ESP32 ePaper Dashboard
img: /portfolio/esp32_epaper_dashboard.webp
date: 2023-12
tags: [c++, serverless function]
---

This project was a gift for my brother, to monitor certain stats about his power generation/usage at his house.

I bought an ESP32 microcontroller and a ePaper display, used PlatformIO vscode extension to write the ESP32 portion of the code.

The ESP32 connects to your WIFI, makes a HTTP request to a serverless function (DenoDeploy) which collates all the data from various sources, returning a text representation of the data. (I chose to not use JSON to simplify the ESP32 code, and also it doubled as a way to view the data in a browser if needed).

The ESP32 then displays then draws all the graphics/text onto the screen, and sleeps for a couple minutes before doing the whole process again.

An improvement I would like to make to this setup, is to instead generate a black and white image on the server side, and send that to the ESP32 to display. This would greatly reduce the ESP32 code complexity, and would:

- allow for more complex and varied graphics to be displayed on the dashboard
- speeding up development time for the dashboard designs
- allow for updating of the dashboard without needing to reflash the ESP32
