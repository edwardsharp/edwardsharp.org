---
title: "sched sched_admin"
date: "2018-03-11T13:17:34-04:00"
last_modified: "2018-05-19T16:56:21-04:00"
kind: "entry"
tags: ["#TODO","sched","rebelcricket"]
date_precision: "second"
render_with_liquid: false
permalink: "/post/2018-03-11-entry-sched-sched-admin/"
---

sched_accounts needs to do resource accounting & billing …also some more SSO stuff

sched_api needz to interact with couchdb more? or maybe not at all.

how to frame this around rebelcricket?

WHAT DOES REBELCRICKET NEED?!

1. FORMBUILDER okay: quote generation, like, a formbuilder. so, the polymer prototype. okay, real-time is good.
2. dashboard for quote processing, scheduling, and admin taskz.

…so the angular thing i built for rebelcricket is pretty nifty… expand on this!

X number field min & max

X select multiple

X img colorz

X gfx layer notez

X order/quote total (& qty total) on dashboard (X) & on order-detail (X)

X date picker form field

X public pages for landing, about, & services

X landing page app toolbar, hack into titleService, hide search, add “Price Quote”

X \_attachment modal for adding/editing new attachment field

X delete \_attachments

quote’r

X convo prototype

X pouchdb setup service

X remove service btn

X \_attachment upload

vendor goodz

BUG: order.name lost when returning from vendor_goods browsing… (cuz conversation form overwrites on destroy)

x multi-select (still need to handle (re)selecting)

X date field

checkbox yes/no buttons

number type, min/max validation

quote -> order workflow (data obj transformation)

X or just add quote?:Quote attr to Order…

X iterate quote.items and populate base order fieldz (TRANSFORM)

email’r ( check into this! )

x quote/order

reset password

user/admin accountz (make this as a ng module)

X deal with cookie shit, nginx proxy

X add app-wide logic for user/admin checkz.

X somehow add user when submitting quote

X …ish, via replication. order service to get from user’s db (via pouch socket)

…and order db paging…

X settings(et. all) db init (in server.js)

X private google tokenz settingz db

X set colorz from order-detail

multi-color input/autocomplete close bug.

img rgbquant

X set user can’t edit order if status != ‘new’

…big attachments probz need separate upload util (so not replicating a buncha huge \_attachmentz)

X build prototype!

X work into app where using \_attachments otherwise…

todo: gfx uploadz

additional gfx templatez

X ability for admin to delete uploadz: setup uploads couchdb, on upload post add, if doc/row removed then delete filez

build some testz that create 1000 quotes with lots of big attachments

SPLIT APART ADMIN & USER SECTIONZ

ZOMG, WHAT ABOUT AN ELECTRON APP (GRR)

deploy to admin.rebelcricket.com

**X dashboard button to move to next status & collapse status lane if no orders**

**X bug where lane position attr is wrong after sorting**

**scrape’r, work into admin app**

**also rework google sheet import for nodejs**

sql copy/import of CSV into postgres db

X catalogue builder (select vendor itemz)

**archive order**

**X export quote as PDF (and maybe an email template) PRINT / PRINT PREVIEW (simple internal, gfx, etc. toggle)**

**quote/order static display page? can this also be a pdf template?**

**X order-detail @print improvementz**

**add price \* qty \* colors calculations to quote (see sheet 11 of goog doc)**

settings page bugz (sometimez fieldz don’t save…) …when selectedService changez?

digital ocean backupz !

X private docker repo for rebelcricket

X letsencrypt setup for couch & and front-end app

visiting /dashboard/orders doesn’t work unless first visiting /dashboard

X google api keyz need to not be synced to public settings couchdb.

https://github.com/pouchdb/pouchdb-server

`sched\_admin` <&ltTA-DA!>> -> sched_screenprinting

sched_accounts, sched_accounts, sched_accounts, okay okay okay

this needs to do some stripe billing & some provisioning, and usage accounting.

like: setup couchdb admin users, keep track of storage usage.

also, sched_accounts will do abuncha routing, so haproxy config editor/deployer

how to add config to rebelcricket app? mostly api json requestz from sched_accounts. need to stuff out some local storage for that, i ’spose. then start limiting ng routez based on user admin status.

#TODO:

port the polymer event & appointment reservation module to angular

make it really simple. a free sched service could mostly be done with google calendar api (add attendees to calendar event.)

why am i working on this imagemagick converter? hmm.

i can’t really decide between pg sql catalogz or couchdb instancez.

like, so afraid/confused about cost and tangled customer data.

then, frame this around DIY art spacez that do workshopz & classes and the like, do this at ppl, goddammit.

so, sched_admin needz a way to connect to a remote database, so, then would sched_accounts do the api/config legwork of connecting/accounting these db servicez? also, how can sched_admin be a more-generic template for multi-purpose biz? like, a buncha feature flagz somewhere, like, in sched_accounts. also, where do these copies of biz portalz go? s3 static site hosting, but what about https?

okay, so like, get some fucking work done on this.

#TODO: then like, an API, swagger doc or i mean OpenAPI

get some spec done and working.

remember headphonez anfuck. (found’em)

so, like, a fucking formbuilder thing. so then sched_accounts, needs some revisitz, and then this should setup & account couchDB databasez; otherwise the form builder app should stand, mostly on its own, as an angular app. hooray.

okay, so how can this be useful for scheduling eventz, sort of like meetup and then something like that. if there’s some kind of collaboration thing like, that group schedule thing that i don’t want to mention. WHAT ARE THE FEATUREZ?! ui, motherfucker, u-fucking-i.

how long will it take to get there? do i have that much time? dunno. but i guess i should start. so, widgetz, got a good start with polymer and these, but like, then, some kind of js library for sched API componentz, rails, couchdb, and such. okay, so then like then sched_reservation could use a port to angular.

okay, so then, the formbuilder and scheduler could be really useful for rebelcricket, who, in so-many-wayz, sellz event-based shit, cuz labor == $$. this would be a complex use-case! so, then, fucking quote builder. how to work this out, threaded messages, real-time shit. gantt-like, pipeline view. constraintz are the pipeline and time. so, then, some widgets… formbuilder, and quote builder, which is just an interactive form of the FORMBUILDER, (duh). so basically have a crude prototype of this in polymer, porting this to angular should mean it getz cleaned up. so,

NOTIFICATIONZ — the api needz to send email, txt msg, and maybe IMz (like on fb, or instagram, gmail, irc, etc. etc. etc.)

this can also mean a real-time thing via the rails real-time module (wtf’s it called? ACTION CABLE) for chat. what about chat-bot?? mmm, so then, take that into consideration during formbuilder build, flow and succession order and contingency. omfuckinggodpleasedon’tmakesouthparkreferencezyoufuckingbrodiediedie. then i get a look cuz i channel’d all the negative energy. fuck. but then, i just want there to be more spec written, it’s gonna take, like, fucking, forever. but maybe a rebelcricket prototype would be good. okay, closing at 3pm today.

so, rebelcricket, needz a formbuilder. so that meanz: a place to plug-in servicez offered (which would be a short description, image(z), and listz of optionz, and contingenciez. so if this-then-that. then these thingz have some sort of weight so that when they come in time estimation can be made. sum of partz is also important, so like, how many colorz, itemz (like qty of shirtz), servicez, etc. etc..

then a real-time thing is very useful here. so then also notificationz are pretty useful here, too. but wouldn’t it be weird of that guy that i knew sat down right there, nah, it can’t be, but was it seriously that guy the other night, “that’s terrible”.

okay, so then, quotez and then people try to make an order, select servicez, quantities, productz, and all the other misc. detailz. so, picture that. in so many wayz, a prototype of what’s on beta.rebelcricket.com & some kind of UI interface to modify form detailz. where does the quote data live? couchdb or in a rails api, i mean, i guess that scheduling data is easier in sql and raw form data sort of workz good inside of couchdb. mmm, accounting so usage can be moderated and constrained. so, then, that app needz some UI for analyticz and the like. todo that.

isolated or at least regular running spec for gcal sync. this is a contingency.

how about just organizing free shit. i dunno, quote, reservation, fuckkk, it probably does too much, but then how to orchestrate all these little modulez.

`heroku addons | grep heroku-redis` check if already added, if not:

`heroku addons:create heroku-redis`

`heroku redis:credentials`

COPY inventory_alp FROM '/Users/edward/Desktop/TRASH/alphabroder/inventory-alp.csv' WITH (FORMAT csv, ENCODING 'latin1');

CREATE TABLE "public"."items" (

"Company" text,

"Item Number" text,

"Description" text,

"Features" text,

"Piece" text,

"Dozen" text,

"Case" text,

"Style Code" text,

"Size Name" text,

"Size Category" text,

"Size Code" text,

"Color Name" text,

"Hex Code" text,

"Color Code" text,

"Weight" text,

"Domain" text,

"ProdDetail Image" text,

"ProdGallery Image" text,

"Retail Price" text,

"Style Number" text,

"GTIN Number" text,

"Max Inventory" text,

"Closeout" text,

"Mill Name" text,

"Pack Qty" text,

"Case Qty" text,

"Launch Date" text,

"Coming Soon" text,

"Front of Image Name" text,

"Back of Image Name" text,

"Side of Image Name" text,

"PMS Code" text,

"Size Sort Order" text

);

COPY items FROM '/Users/edward/Desktop/TRASH/alphabroder/fromweb/items_R064.csv' WITH (FORMAT csv, HEADER, ENCODING 'latin1');

"Company","Style Code","Description","Features","Domain","ProdDetail Image","ProdThumbnail Image","ProdCompare Image","ProdSearch Image","Mill-Category","Mill Code","Category Code","Item Count","Mill Name","Category Name","Popularity"

CREATE TABLE "public"."styles" (

"Company" text,

"Style Code" text,

"Description" text,

"Features" text,

"Domain" text,

"ProdDetail Image" text,

"ProdThumbnail Image" text,

"ProdCompare Image" text,

"ProdSearch Image" text,

"Mill-Category" text,

"Mill Code" text,

"Category Code" text,

"Item Count" text,

"Mill Name" text,

"Category Name" text,

"Popularity" text

);

COPY styles FROM '/Users/edward/Desktop/TRASH/alphabroder/fromweb/styles.csv' WITH (FORMAT csv, HEADER, ENCODING 'latin1');

"88181", "G880", "437", "78181", "8210", "BE007", "8886", "FT001", "8860", "C1515", "AG2226", "1414", "6027", "6026", "6002", "81622", "N5296", "N5293", "B491", "8187", "4400", "RS3301", "G510P", "3321", "3401", "6277", "AD969", "6089", "1501", "6606", "M500", "LS535", "1574", "D620", "88193", "88183", "88083", "88184", "M750", "TT80", "G500", "G200", "G800", "G500B", "G640", "G185", "G180", "996", "G185B", "G125", "M990", "M990W", "M980", "88697", "88190", "812", "M898", "810", "BU8800", "2112372", "6951", "8424", "TT31", "88187", "DG440”
