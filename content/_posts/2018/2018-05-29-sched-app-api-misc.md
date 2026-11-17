---
kind: "entry"
title: "sched  {app, api, misc…}"
date: "2018-05-29T02:31:54-04:00"
date_precision: "second"
last_modified: "2018-06-25T17:02:57-04:00"
render_with_liquid: false
tags: ["#TODO","sched"]
---

# sched {app, api, misc…}

[https://github.com/swagger-api/swagger-node/blob/master/README.md](https://github.com/swagger-api/swagger-node/blob/master/README.md)

#todo: use .json? (note: pay attn to detailz (?!))

port previous sched_api swagger.json

…use definitionz && sequelize && models && [http://docs.sequelizejs.com/manual/tutorial/migrations.html](http://docs.sequelizejs.com/manual/tutorial/migrations.html)

ACL [https://www.npmjs.com/package/acl-sequelize](https://www.npmjs.com/package/acl-sequelize)

gahhhhh, railz pretty much has all the shit i want to use (devise, pundit, jobz, mail, etc) but like, fuck railz, lolol

#TODO: ng library package for interacting/testing with sched_api

ng lib & drone ci boilerplate: [https://github.com/schedsite/accounts/tree/ae5356d555366bcc5a7101d9ce68addc690e3680](https://github.com/schedsite/accounts/tree/ae5356d555366bcc5a7101d9ce68addc690e3680)

work faster on CI -> staging buildz.

WHAT DOES THE API EVEN NEED TO DO?!

post JSON, write to disk

post file uploadz, write to disk

RELAY & DELETE THAT SHIT

WHERE DOES THE BUSINESS LOGIC NEED TO GO?!

angular appz/libz

sched_accounts schedsite/accounts @sched/accounts

register (& beta sign up)

login

all the shit devise does (i guess, but maybe leverage npm’s passport?)

sched_reservation

sched_resources

like (partz of) sched dashboard admin from rails prototype

setup eventz

setup appointmentz (calendar or rrule form)

sched_orders

checkout

sched_formbuilder (pull from rebelcricket & improve)

sched_store

display resources and store info (from settingz)

sched_admin

…is this just aggregation of the admin/settingz part of the other modules?

sched_calendar (date picker et. all)

WHAT WILL THE USER NEED TO DO?!

MOCK & TEST THAT SHIT!

…okay, so like an electron all, KEEP SHIT LOCAL (meanz less server hosting, …right?) pouch/couchdb is cool.

but a server will still need to be used, BUT METER’d, …couchDB, how to setup up a metering protocol, like, rate and space limitz, QUOTA

will upload JSON, files,

USER AUTH (oAuth, couchdb, what is yr deal with oAuth?!)

model-ing data. branding/themeing yada yada [http://www.jsontots.com/](http://www.jsontots.com/)

couchDB admin, so like, fauxton but electronJS-ified.

build local shit, publish to the ‘netz… how to charge/admin/test this?

think about: data retention, so like: a cloud server is just a relay to local sched.app, will retain data for, like, 1 week (or more if paid?) hello couchDB?

what about aggregating multiple couchDB instances?

so, like, customer can get a micro instance (aws or do) that’s just couchdb? neat, what about free/demo ppl?

static content builder & deployer (ffffffucking s3 or do spacez, couchDB or whatever)

angular, material, electron boilerplate repo

**sched superuser app to:** process invitez, quota monitor, billing, onboard/venue setup, support, deploymentz, logz/debug/analyticz

**branding ideaz:**

private-room karaoke

dance/yoga studio

hair salon

art eventz

venue rental, bowling alley lane reservations, heath and wellness appointments,

templatez— for various various biz typez

MAKE IT PUBLIC (aaaah? fawaaaa!)

[https://github.com/orgs/schedsite/projects/1](https://github.com/orgs/schedsite/projects/1)

[https://schedsite.github.io/accounts/](https://schedsite.github.io/accounts/)
