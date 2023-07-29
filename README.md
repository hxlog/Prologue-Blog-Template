# Prologue Template

Next.js13 + tailwindcss + contentlayer + MDX Blog

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FhuaixuOvO%2FPrologue-Blog-Template)

## Features

- Content Focused, contentlayer + md/mdx
- Adaptive dark mode
- Full SEO, Opengraph + JSON-LD
- Lightweight search engine, powered by Fuse.js
- Generate social media cards

- 以内容为重点，md/mdx写作，基于contentlayer
- 自适应黑暗模式
- 支持Opengraph和JSON-LD的SEO
- 轻量的搜索引擎，基于Fuse.js
- 生成社交平台卡片

## Get Started

```
yarn install
```

All configurations are in `/data`

所有配置文件在`/data`

## Configuration

Post frontmatter

```yaml
---
title: title
description: description
pubDate: 2022-11-13
(required)

updatedDate: 2023-07-02
tags: ["tag"]
image: /static/photos/06.jpg
(optional)
---
```

Page frontmatter

```yaml
title: title
description: description
(required)
```
