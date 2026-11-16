---
title: "emergency index hourz log"
date: "2017-12-04T21:11:49-05:00"
last_modified: "2018-04-16T17:04:30-04:00"
kind: "entry"
tags: ["emergencyINDEX","#TODO"]
date_precision: "second"
render_with_liquid: false
permalink: "/post/2017-12-04-entry-emergency-index-hourz-log/"
---

emergency index hourz log

|       |       |                                                                                                            |
| ----- | ----- | ---------------------------------------------------------------------------------------------------------- |
| date  | hourz | notez                                                                                                      |
| 12-4  | 6     | review notes, create GitHub issues, work on app stub (angular) gh#5                                        |
| 12-5  | 1     | project & home cmpnt stubz; fix namespace gh#3                                                             |
| 12-8  | 2     | work on database prototype gh#6                                                                            |
| 12-9  | 2     | work on database prototype gh#6                                                                            |
| 12-10 | 5     | work on project service & spec                                                                             |
| 12-11 | 3     | work on project service & spec                                                                             |
| 12-12 | 6     | stub out rails prototype                                                                                   |
| 12-13 | 3     | paperclip file upload, short IDz                                                                           |
| 12-14 | 3     | project work                                                                                               |
| 12-15 | 4     | project view work                                                                                          |
| 12-16 | 4     | dropzone, datepicker, misc tidy’n                                                                          |
| 12-17 | 8     | fix project attrz; img upload; show view; tidy’n                                                           |
| 12-18 | 1     | minor layout fixes, testing                                                                                |
| 1-17  | 2     | admin view stubz, nav template                                                                             |
| 1-18  | 2     | project tags                                                                                               |
| 1-19  | 5     | admin dashboard                                                                                            |
| 1-20  | 4     | admin dashboard                                                                                            |
| 1-21  | 8     | admin dashboard, project search                                                                            |
| 1-22  | 9     | admin dashboard                                                                                            |
| 1-23  | 4     | contributors, terms, places index views; misc tidy                                                         |
| 1-24  | 8     | pagination, project viewer prototype, indesign file scrape’r                                               |
| 1-25  | 3     | project model’n & scrape’n                                                                                 |
| 1-28  | 3     | projectz import                                                                                            |
| 1-29  | 8     | project pages & terms parsing                                                                              |
| 2-3   | 1     | misc tidy’n                                                                                                |
| 2-4   | 6     | indesign exportz, volume & nav views, indexes search widget, \_projects_table & nav tidy’n, staging deploy |
| 2-5   | 2     | misc test’n/tidy’n                                                                                         |
| 2-6   | 2     | work on 2012 parsing                                                                                       |
| 2-7   | 8     | work on jekyll prototype; 2012 parsing                                                                     |
| 2-8   | 8     | work on alveol.us prototype; index views; project tidy’n                                                   |
| 2-9   | 8     | work on 2012 & 2013 parsing; misc tidy’n                                                                   |
| 2-10  | 3     | work on 2013 terms parsing                                                                                 |
| 2-11  | 8     | wrap up volume parsing, misc tidy                                                                          |
| 2-12  | 8     | work on index pages, misc tidy                                                                             |
| 2-13  | 6     | work on index pages, misc tidy                                                                             |
| 3-7   | 7     | search widget, misc tidy’n                                                                                 |
| 3-23  | 1     | add 2014 places index                                                                                      |
| 4-1   | 1     | add 2014 terms index page                                                                                  |
| 4-2   | 2     | add 2014 terms to project pages                                                                            |

To make changes and preview locally, checkout this repository and run jekyll.

$ `bundle exec jekyll serve`

...to get started make sure you've got ruby 2.4 (or greater version) installed. see [rvm](https://rvm.io/)

$ `bundle install`

$ `bundle exec jekyll serve`

...or

"8 EMPTY DIVZ AT LINEZ: 107, 167, 197, 219, 248, 1631, 2093, 4125"

#todo:

[ ] - couchDB init/migrationz

init projects db

init project design doc (validate_doc_update role check)

[ ] - couchDB testz

[ ] - couchDB user utilz: register, reset passwd, login, logout

[ ] - emergencyindex.ifitis.org

[ ] - FORMBUILDER

…is angular taking too long? is angular really the best choice here? hmm, rails? who’s gonna work on this thing? how’s it gonna be accessed? API? SQL is a thing. okay, digging into rails…

… … but, like, fuckin’ seriously. could all this be done with github-pages??

yes, but it’d be less dynamic & more manual. which could be, like, good in wayz.

#todo

- project model validation
- paperclip file upload (project)

* image size requirementz 5x7 300dpi, max 50(100?)mb 5x7”@300dpi = 1500px x 2100px
* image processing job
* logic to add image only after project is created first (validated)
* image upload on it’s own page. show own page after new submission. modal when editing saved entry.

- project description max 400 wordz

* description word count attr/method

- photo credit attr
- short IDz
- only user who created project can edit/update/destroy

* pundit class
* spec
* project belongs_to :user; user has_many :projects

- admin role (pundit gem?)
- admin can edit anything
- /admin dashboard

* maybe use dropdown for icon buttonz to avoid tooltipz… (mobile friendly)
* create volumes

- admin edit volume (can change open/close date; can only change year if no projects)
- calendar schedule to automatically create volz/editionz and open/close call.
- “official” volume attr

* use variable for yearz
* projects view/search/filter

- admin project review/publish projects
- delete
- fix table row click
- fix sort linkz in projectz admin dashboard (link_to needs remote: true)

* users view/search/filter

- register other users
- delete users
- resend confirmation and password reset
- edit user
- suspend?

* project tagz (acts-as-taggable-on)

- use separator (;) in js select2

* project search
* SPEC! & coverage (simplecov gem)
* new project volume association

- \_form
- controller
- date parse for current open
- user can create volumez and add projectz to volume (like, personal playlist. published flag?)

* mobile: fixednav or other collection need to remove container padding (see indexes viewz)
* mobile: terms accordion needz focus (will open off screen)
* pagination

- https://github.com/jonatack/will\_paginate
- ajax’y
- projectz
- userz

* project viewer, carousel // book reading like (by year)

- index of: terms Project.tag_counts, contributors User.joins(:projects).group('users.id').uniq, places Project.pluck(:venue).uniq
- indexes by volume
- infinite scroll’r w/ sidenav index sorted by date (or other sorts) [!!!]

* projects associated when user registerz project.published_contact == user.email (then write project.contact_email)

- non-admin user can destroy projects?

* advanced search

- projects without picture
- projectz with placeholder image

* NAV (right nav? sticky?)

- hero transition animationz (for NAV)? https://themes.materializecss.com/pages/dark-theme
- nav button, like a circle (ring) with a filled circle inside, slightly off-center ref:

* http://www.psi-web.org/wp-content/uploads/2017/01/Index-Call-flier-2017-1-copy.jpg
* https://pbs.twimg.com/media/Cz06W9kXEAE7LjH.jpg

- FONT: Lucida Sans?

* monospace toggle on project descriptionz
* bigger font size on mobile

- import projects from indesign filez

* 2011
* 2012
* 2013
* 2014

- missing TERMS & PLACES

* 2015
* 2016

- page editor MD &| html/css/js (fiddle-like?)

* attrz: name, slug, parent_id, is_markdown, markdown, html, css, js, user_id, published, show_in_nav

- docker-ize

* open source (public)
* test/build/deploy pipeline (gitlab?)

- FORMBUILDER (editor for project form field label text, required. public/private fields?)

* help tip text
* jsonb fieldz

- omniauth google & facebook & twitter
- i18n
- copyright concerns? (verbiage?)
- analytics
- API

* search filterz (ransack)

- project footnote

lolo pi:

Source: /media/dat/emergencyINDEX

Destination: /media/dat/emergencyINDEX/\_site

Incremental build: disabled. Enable with --incremental

Generating...

done in 9247.316 seconds.

Auto-regeneration: disabled. Use --watch to enable.
