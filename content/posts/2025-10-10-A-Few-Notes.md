---
title: A Few Notes for Some Dynamic Features in Markdown Page
author: 'ZHU'
date: '2025-10-10'
categories:
  - 'Codes'
tags:
  - null
---
## A flex container used in `about/contact information` and `cv/contact information`

One can embed HTML in Markdown to create responsive containers. These containers will align elements horizontally on wide screens, but automatically stack them vertically and center them on narrow screens. For cleaner Markdown and reusable containers, it's better to define the styles in your Hugo theme's header. You can do this by editing the `./layouts/_partials/head_custom.html` file, like in the following example:

<div class="flex-container">
    <div class="left">
        <p>Left Column</p>
    </div>
    <div class="right">
        <p>Right Column</p>
    </div>
</div>

with html codes in the `./content/page.markdown`
```html
<div class="flex-container">
    <div class="left">
        <p>Left Column</p>
    </div>
    <div class="right">
        <p>Right Column</p>
    </div>
</div>
```

and the style defined in `./layouts/_partials/head_custom.html`

```html
<style>
  .flex-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  .left {
    order: 2;
    width: 90%;
    max-width: 500px;
  }
  .right {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .profile-image {
    max-width: 160px;
    min-width: 50px;
    border-radius: 0%;
  }
  @media (min-width: 600px) {
    .flex-container {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
    .left {
      order: 1;
      max-width: 60%;
      min-width: 300px;
    }
    .right {
      order: 2;
      max-width: 40%;
      min-width: 50px;
    }
  }
  body {
      font-family: sans-serif;
  }
  .left p {
      margin: 0;
  }
  .material-symbols-outlined {
      vertical-align: middle;
  }
</style>
```



## Download function in `cv` page

A download button is added in the `./cv/` page, which enables one to directly download the cv.pdf file on the webpage. This feature is achieved using javascript embeded in markdown.



Similarly, one can add a button with the following html code in the markdown page:

```html
<button id="download-btn" type="button" style="
  padding: 6px 14px;
  background-color: #777bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
">
```



Then using this fuction, you will be able to download from url by clicking the button.

```html
<script>
  document.getElementById("download-btn").addEventListener("click", () => {
  const url = "download url";
  const filename = "download filename";
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
</script>
```



You can also play around with such functions. For example, a function like this will allow you to download the content in a previous code-block and generate a new file without the need of a permanent link.

```html
<script>
document.getElementById("download-btn").addEventListener("click", () => {
    const codeContent = document.getElementById("code-block").innerText;
    const blob = new Blob([codeContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "filename.";
    downloadLink.click();
    URL.revokeObjectURL(url);
});
</script>
```

