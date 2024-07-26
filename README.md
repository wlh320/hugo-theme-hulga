# hugo-theme-hulga

> hugo + bulma = hulga

## Screenshots

Build `exampleSite`, you will see:

![screenshot](https://github.com/wlh320/hugo-theme-hulga/blob/main/images/screenshot.png)

You can also customize primary and secondary color, for example:

![material color](https://github.com/wlh320/hugo-theme-hulga/blob/main/images/material.png)

## Demo

[Demo Site](https://wlh320.github.io/hugo-theme-hulga)

[My Blog](https://blog.zilch40.wang)

## Features

- Based on Bulma v1
- Small & fast
- Basic functions:
  - category list&term pages
  - tag list&term pages
  - archives pages
- Table of contents (TOC) sidebar
- Modern CSS variables based dark mode
  - `prefers-color-scheme` media support
  - force light/dark theme
- Static search with pagefind
- PWA support

## Install

1. Clone to hugo site themes folder

    ```bash
    git submodule add https://github.com/wlh320/hugo-theme-hulga.git themes/hulga
    ```

2. Enable it in `config.toml`

    ```
    theme = "hulga"
    ```
    and then config it.

3. To use `postcss`, you should have hugo extended version installed, 
then copy `package.json` and `postcss.config.js` to the root of your site folder, then `npm install`.

4. If your language is not `en` or `zh-cn`, you may need to add i18n files in i18n folder
to show some i18n strings in this theme.

5. Ensure the to put all content in a directory titled "post" for 
the theme to populate the articles. Ex. content\post

6. To enable search page, install pagefind and run `npx pagefind --site public` after 
`hugo build`. Check [pagefind's docs](https://pagefind.app/docs/#indexing-your-site)
for detail.
    

## Config

You can check the config of the demo site in `exampleSite/hugo.toml`

An example of avaliable params:

```toml
baseURL = "https://example.com"
languageCode = "zh-cn"
DefaultContentLanguage = "zh-cn"
title = "My New Hugo Site"
paginate = 10
theme = "hulga"

[params]
  # show in HTML meta tag
  author = "xxx"
  keywords = "HTML, hugo, CSS"
  description = "xxx's blog, xxx xx xxxx"

  # change bulma's primary color
  primaryColor = "#1d9bf0"

  # use primary color everywhere, default true
  primaryEverywhere = true

  # change bulma's link color (secondary color in this theme)
  # linkColor = "#f91880"

  # subtitle on homepage
  subtitle = "This is a subtitle"

  # copyright text on footer
  copyright = "Copyright © 2020 wlh. All rights reserved."

  # enable katex rendering on every post page, default false
  math = false

  # enable postcss, mainly for css purge (746kB->56kB->9kB gzipped, but this makes build slower), default false
  postcss = true

  # enable showing content summary below post title in home page, default false
  showSummary = true

  # set paginate on taxonomy term page (tags or categories), default 10
  termPaginate = 3

  # enable toc on every post page, default false
  toc = true

  # enable TOC auto collapse, default false
  autoCollapseToc = true

  # enable prefers-color-scheme:dark, default false
  darkMedia = true

  # enable user to toggle dark mode with a menu, default false
  darkToggle = true

  # enable hero section's is-bold effect, default false
  heroBold = false

  # enable hero section that looks like steam deck's home page, default false
  heroSteamDeck = false

  # enable PWA, prepare your icons and DON'T forget to modify manifest.json, default false
  pwa = true

  # disable jsdelivr cdn, default false
  noCDN = false

# for postcss-purgecss
# see https://purgecss.com/guides/hugo.html
# [build]
#   writeStats = true

# to enable different hightlight themes in light/dark mode 
[markup]
  [markup.highlight]
    noClasses = false

[menu]
  [[menu.main]]
    identifier = "index"
    name = "Home"
    url = "/"
    weight = 1
  [[menu.main]]
    identifier = "archives"
    name = "Archives"
    url = "/archives/"
    weight = 2
  [[menu.main]]
    identifier = "tags"
    name = "Tags"
    url = "/tags/"
    weight = 3
  [[menu.main]]
    identifier = "about"
    name = "About"
    url = "/about/"
    weight = 4
  [[menu.main]]
    identifier = "search"
    name = "Search"
    url = "/search/"
    weight = 5

[taxonomies]
category = "categories"
tag = "tags"

```

## Acknowledgements

- [Hugo](https://gohugo.io/): Static site generator
- [Bulma](https://bulma.io/): CSS framework
- [Purgecss](https://purgecss.com/) [cssnano](https://cssnano.co/): Purge CSS size
- [Katex](https://katex.org/): $\LaTeX$ rendering
- [anchorjs](https://github.com/bryanbraun/anchorjs): Add anchor to title
- [tocbot](https://tscanlin.github.io/tocbot/): Generate table of contents
- [vanilla-back-to-top](https://github.com/vfeskov/vanilla-back-to-top): Add back-to-top button

