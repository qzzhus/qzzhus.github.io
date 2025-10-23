---
title: My modifications on XMIN theme
author: 'ZHU'
date: '2025-10-10'
categories:
  - Codes
tags:
  - null
---
## 1. Basic Latex Support
Add below to `layouts/_partials/foot_custom.html`.

```html
<!-- Latex Support -->
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/katex/dist/katex.min.css">
<script src="//cdn.jsdelivr.net/combine/npm/katex/dist/katex.min.js,npm/katex/dist/contrib/auto-render.min.js,npm/@xiee/utils/js/render-katex.js" defer></script>
```

## 2. Images are centered alignment by default

Add below to `layouts/_partials/foot_custom.html`.

```html
<!-- image centered alignment -->
<script src="//cdn.jsdelivr.net/npm/@xiee/utils/js/center-img.min.js" defer></script>
```

## 3. Add spaces between site menus

Modify `layouts/_partials/header.html`

```html
<li><a href="{{ .URL | relURL }}">{{ .Name }}</a></li>
```

by adding `<t>&#160;&#160;&#160;&#160;</t>` afterwards into

```html
<li><a href="{{ .URL | relURL }}">{{ .Name }}</a></li><t>&#160;&#160;</t>
```

## 4. Add support for the use of icons from Google Font

Add below to `layouts/_partials/header_custom.html`

```html
    <!-- Google Font Icon Support -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
```

One can then add icons from [Google Fonts](https://fonts.google.com/icons) into your markdown files using a span block.

```html
<span class="material-symbols-outlined">
icon name
</span>
```

For example, <span class="material-symbols-outlined">
add_box
</span> can be added with the following:

```html
<span class="material-symbols-outlined">
add_box
</span>
```

### 4.1 Vertical alignment problem of the material symbols font

To ensure icons (such as Material Symbols here) align properly with text fonts, we need to add a **custom.css** file to `./static/css`. This file should modify the default baseline alignment (`vertical-align: baseline;`) to a more suitable alignment method.

First add below into `layouts/_partials/header_custom.html`.

```html
    <!-- Custom css Support -->
    <link rel="stylesheet" href="{{ "css/custom.css" | relURL }}" />
```

Then create **custom.css** at `./static/css`.

```css
.material-symbols-outlined {
  vertical-align: text-bottom;
}
```

