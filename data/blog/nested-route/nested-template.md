---
title: Nested Template
date: '1/1/22'
tags: ['multi-author', 'nested-template']
draft: true
summary: 'Nested template'
---

# Nested Routes

Hello again content writers, this is Stanley. This is a nested template, which helps us group posts that are of similar content. The location of this folder relative to the website is `/data/blog/nested-route`

## How

Create a new folder inside the main `/data/blog` folder and add your `.md`/`.mdx` files to them. The nesting can continue, such as `/data/blog/nested-route/nested-route-2/your-post-here.md`

## Use Cases

These would ideally be used to organize topics

- More logical content organisation (blogs will still be displayed based on the created date)
- Multi-part posts
- Different sub-routes for each author
- Internationalization (though it would be recommended to use [Next.js built-in i8n routing](https://nextjs.org/docs/advanced-features/i18n-routing))

## Note

- The previous/next post links at bottom of the template are currently sorted by date. One could explore modifying the template to refer the reader to the previous/next post in the series, rather than by date.
