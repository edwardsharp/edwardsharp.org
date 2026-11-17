---
kind: "entry"
title: "rebelcricket"
date: "2017-09-22T20:49:09-04:00"
date_precision: "second"
last_modified: "2018-08-08T13:49:30-04:00"
render_with_liquid: false
tags: ["rebelcricket","#TODO"]
---

okay, couchdb process that, given a user ctx, returnz a pre-signed s3/spaces url for uploadz (PUT?).

…okay, also, a nodejs app that admin can login, invite other adminz (email), any user can register.

Calculating _pixel/inch (PPI)_ or _dots/inch (DPI)_ and corresponding image size

**Formula**

real_width [in] = image_width [px] / PPI [px/in]

real_height [in] = image_width [px] / PPI [px/in]

If you want to calculate _pixel/inch (PPI)_, just reverse the order

PPI [px/in] = image_width [px] / real_width [in]

To calculate a resolution of a real scanned image

image_width [px] = real_width [in] \* PPI [px/in]

**Examples**

Image width = 3072px, height = 2048px

**72PPI**

width = 3072 / 72 = 42.67 inches

height = 2048 / 72 = 28.44 inches

**300PPI**

width = 3072 / 300 = 10.24 inches

height = 2048 / 300 = 6.83 inches

eeddee [4943bd0b@gateway/web/freenode/ip.73.67.189.11] has joined #couchdb

[20:43] <eeddee> hi! i'm trying to follow the external os processes guide, however, i can't seem to get the couch_httpd_proxy config to work... when i use the google.com example from the doc i still get "Database does not exist" error when i try to visit [http://localhost:5984/_google](http://localhost:5984/_google)

[20:43] <eeddee> doc ref: [http://docs.couchdb.org/en/2.1.0/config/proxying.html?highlight=httpd_global_handlers](http://docs.couchdb.org/en/2.1.0/config/proxying.html?highlight=httpd_global_handlers)

[20:43] <eeddee> \_google = {couch_httpd_proxy, handle_proxy_req, <<"[http://www.google.com](http://www.google.com)">>}

[20:43] <eeddee> in my [httpd\_global\_handlers]

[20:44] == m-i\_ [~m-i\_@LFbn-1-13041-235.w83-199.abo.wanadoo.fr] has quit [Remote host closed the connection]

[20:45] <eeddee> ...using apache/couchdb:2.1.0

[20:45] == m-i\_ [~m-i\_@2a01cb0803d61900f9260a303096c5ff.ipv6.abo.wanadoo.fr] has joined #couchdb

[21:08] == SkyRocknRoll [~SkyRocknR@unaffiliated/skyrocknroll] has quit [Ping timeout: 240 seconds]

[21:43] == SkyRocknRoll [~SkyRocknR@unaffiliated/skyrocknroll] has joined #couchdb

[23:11] == hos7ein [~hos7ein@95.130.247.2] has joined #couchdb

#TODO:

top-level custom order fieldz

archive'd orders DB & orders table switch'r

start saving order.key field as composite string of various property partz, for fast filter'n, perhapz like so:

`${order.status}\_\_${order.name}\_\_${order.email\_\_${order.org}}`

…get a better separator string??

user service

connect to couchdb.

tag color option && ui display

X vendor goodz

..retry orderSave() when vendor goodz modifies order.line_items

split title into own field

.replace(/NEW|IMPROVED/,'').split('®')[0].trim() else split(' ')[0].trim()

X add vendor name as field (column)

add catalog field so different services can ref different slices of vendor goodz...

—> add new catalog ui widget, use catalog name on import, set db key field so filtering on catalog name is simpler

#DONE

X goodstart: component for tag editor module as for order.tags in 2+ placez, like some animation config for on-select that showz x for delete as well as adding input and hiding/toggle'n normal tag/chip display. + button for new chip! ta-da! module! TO NPM LOLOL (6:48 am 10/8/17 i turn my keyboard lightz upp+++){ now(); goodNight(myLove); }

settingz for storfront pagez: mostly text stringz but also image gallery and logo? about, services

settingz for extended order fieldz, apparel service, other services

Inbox

Needs Review

Backlog

In Progress

Ready

Done

Assignees

Size

Labels

Milestone

vendor goods page

setup automation for scraperz

data-tables for sorting and creating view filters, which can be saved & linked to

see: [https://github.com/angular/material2/blob/master/src/material-examples/table-http/table-http-example.ts](https://github.com/angular/material2/blob/master/src/material-examples/table-http/table-http-example.ts)

okay, quote history (admin-user tab?) and utilz for writing history log

web workerz && pouchdb ng services, loading spinner

3rd party libz in angular app:

1. Import libraries

npm install underscore --save

npm install @types/underscore --save

(and/or?? or sometimez dt repo like dt~gapi)

typings install underscore --global —save

2. in tsconfig.app.json, add underscore to array 'types':

"types": [

"underscore"

]

3. In any component file I need to use underscore, I add this

import \* as \_ from 'underscore';

string pathz!

var obj = {

a: {

b: "d",

c: ["", "f"],

'\u1200': 'unicode key',

'dot.dot': 'key'

}

};

var objectPath = require("object-path");

//get deep property

objectPath.get(obj, "a.b");

PIPEZ!

[https://angular.io/api?type=pipe](https://angular.io/api?type=pipe)

media query scss

@mixin for-size($size) {

@if $size == phone-only {

@media (max-width: 599px) { @content; }

} @else if $size == tablet-portrait-up {

@media (min-width: 600px) { @content; }

} @else if $size == tablet-landscape-up {

@media (min-width: 900px) { @content; }

} @else if $size == desktop-up {

@media (min-width: 1200px) { @content; }

} @else if $size == big-desktop-up {

@media (min-width: 1800px) { @content; }

}

}

// usage

.my-box {

padding: 10px;

@include for-size(desktop-up) {

padding: 20px;

}

}

initial couchdb setup for system databases:

[http://docs.couchdb.org/en/stable/install/setup.html#install-setup](http://docs.couchdb.org/en/stable/install/setup.html#install-setup)

curl -X PUT [http://127.0.0.1:5984/_users](http://127.0.0.1:5984/_users)

curl -X PUT [http://127.0.0.1:5984/_replicator](http://127.0.0.1:5984/_replicator)

curl -X PUT [http://127.0.0.1:5984/_global_changes](http://127.0.0.1:5984/_global_changes)
