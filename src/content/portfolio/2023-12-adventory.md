---
title: Adventory - Present Idea Inventory
url: https://adventory.gift
img: /portfolio/adventory.webp
date: 2023-12
tags: [nuxt, Turso, Cloudflare Workers]
---

Adventory is a simple web app for keeping track of present ideas for friends and family. Add present ideas with comments, descriptions and links, mark who's purchased, all the while not being able to see who's bought presents for yourself!

A Nuxt/Vue app deployed on Cloudflare Workers using Turso database, this is the first fully serverless app I've made. Servless made sense in this instance as it's only required for use for around a month a year.

The main challenges were ensuring the app could be used by anyone, allowing for a new user to signup, create a group and invite people. Google OAuth was used for authentication, although more auth methods could be used in the future. Invites were handled with a short lived token that the admin must send out for each user.
