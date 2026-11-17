---
title: "emergency INDEX"
date: "2019-02-08T18:52:08-05:00"
last_modified: "2019-02-10T03:56:59-05:00"
kind: "entry"
tags: ["emergencyINDEX","thotz","#TODO"]
date_precision: "second"
render_with_liquid: false
permalink: "/post/2019-02-08-entry-emergency-index/"
---

git submodule update --recursive --remote

#TODO:

dat://

ipfs://

more documentation of GitHub & editing and site info

better use of submodules (yeah, ok)

STORYBOOK

project component (maybe useful in editing single projectz?)

fucking react

offline reading of index (API-like download of .json & dynamic template rendering)

let jekyll build API-like json data from various years’ project repoz into static files distributed via gh-pages.

NOTEBOOK

an editor? GitHub sync. ugh, merge conflictz… or p2p-based editor (!!!)

some kind of notebook based thing that’s basically an opinionated text-editor + console

md + yaml front---matter pretty-print

editable \<div> && local css stylez

git submodule update --remote

git submodule sync

git submodule update --init --recursive --remote

https://demo.peergos.net/

fuckfuckfuck

zomgd00d

---

layout: default

title: README

permalink: /README.md/

---

## EmergencyINDEX

You can use the [editor on GitHub](https://github.com/edwardsharp/alveol.us/edit/master/README.md) to maintain and preview the content for this website in Markdown files.

Whenever someone commits to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the site (\_limit of 10 builds an hour\_).

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling text. It includes conventions for general purpose formatting, for example:

```markdown
Syntax highlighted code block

# Header 1

## Header 2

### Header 3

- Bulleted

- List

1. Numbered

2. List

\*\*Bold\*\* and \_Italic\_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Project template

All of the project files need to include this [YAML](http://yaml.org/) metadata at the top of the Markdown file:

```markdown
---
layout: project

volume:

image:

photo\_credit:

title:

first\_performed:

place:

times\_performed:

contributor:

collaborators:
  -

home:

links:
  -

contact:

footnote:

tags:
  -

pages:

needs\_review:
---
```

### local development

#### git stuff

$ `git clone https://github.com/emergencyindex/emergencyindex.com.git`

the content for each year is referenced via git submodules to individual project repos:

[projects-2011](https://github.com/emergencyindex/projects-2011)

[projects-2012](https://github.com/emergencyindex/projects-2012)

[projects-2013](https://github.com/emergencyindex/projects-2013)

[projects-2014](https://github.com/emergencyindex/projects-2014)

[projects-2015](https://github.com/emergencyindex/projects-2015)

[projects-2016](https://github.com/emergencyindex/projects-2016)

every repository contains separate branches (`projects`, `indexes`, & `images`) with files that end up their own respective folder in this project (e.g. [projects-2011](https://github.com/emergencyindex/projects-2011)'s `indexes` branch files will end up the `\_projects/2011` folder).

so to get ALL of the projects git sub-module content you can:

$ `git submodule update --init --recursive`

or to get a single sub-module project:

$ `git submodule update --init -- \_projects/2011`

...replace `\_projects/2011` what a specific sub-module (e.g. `assets/img/2015`)

see `.gitmodules` file for reference to all the different modules used in this repository.

#### Jekyll (for local development)

...to get started make sure you've got ruby 2.4 (or higher version) installed. see [rvm](https://rvm.io/)

$ `gem install bundler`

$ `bundle install`

$ `bundle exec jekyll serve`

(...it will take a few minutes to build)

add `--incremental` flag to speed up build time. make changes & preview locally, run:

$ `bundle exec jekyll serve --incremental`
