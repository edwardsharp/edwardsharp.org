---
title: "YOUOKE"
date: "2018-05-19T19:49:38-04:00"
last_modified: "2018-06-11T20:38:12-04:00"
kind: "entry"
tags: ["#TODO","youoke"]
date_precision: "second"
render_with_liquid: false
permalink: "/post/2018-05-19-entry-youoke/"
---

project stubz && boiler plate stufffzzz

sooo, should all this be in GitHub? zomg, do i want help with this, or really, do i want to handle the open source admin of this?!

cuz i gotta be the BDFL

ask motherfuckerz on reddit for help? hmmm.

[angular]

X dashboard

[dexie]

settings

X youtube api key (so i don’t have to ship it).

DESTROY everything option.

make single settings object, row[0] is default row[1] is user specified (mmm??) or probably model Settings object. or just keep on like i am.

youtube-dl bin path (and installer or install instructionz?)

youtube-dl folder (/videos/ or similar) playlistz by folder (&& folder mv’ing and organization)

googleauth.js setup (& destroy)

split a/v in order to do timeshift’n (or let queue video play audio & player muted does video, can nudged fwd/bkwrd)

does there need to be a single application db? instead of multiple 1-table dbz…

[@angular/material]

X theme switch’r

X playlist && dexie-observable

[electron]

X YT player

file player

add ctrl/cmd +a (& other default/useful?) edit shortcut key(z)

[google api/auth]

googleauth.js work into main.js (electron)

app directory init in main.js ( /googleauth/ or similar)

check for client_secret.json

open auth url, code input elem

log out (delete /.credentials/youoke.json)

library

X add dexie service (or maybe just deal with .json via FS)

search local library

also pipe local library search to socketio

youtube

playlist import from YT acct/API

X search

X youtube player & player api

preview player dialog/modal (used everywhere, so modular service) will yt-dl filez need to be streamed? what about non-embeddable yt vidz?!

get title from video id input (new playlist item. does this need a yt api key?)

player time sync nudge +/- 1 second (make settings toggle-able)

need a decent library seed, figure out a list of ~1k (??) good karaoke jammz

read/write local media and index (json) filez.

partyline

X nodejs server w/ socketz

X socketio && https://github.com/socketio/socket.io-redis

X use dexie!

X angular project!

deploy to heroku? mmm, digital ocean, mmmmm, **is redis really needed**?

X generate channel code

X yt search

yt preview (video_library icon)

show queue in partyline?

X add to queue

snackBar for add-to-q confirmation

player index with current minute composite key (with value) to prevent duplicate queue itemz

-or- if /player/ was it’s own project, this could be avoided (since multiple event listeners wouldn’t be registered)

-but- multiple queue’d itemz should still be avoided (or accounted for)

channel title (next to Queue in toolbar) badge for online/offline

debug channel setup (like, just tested, needed to refresh a couple timez before partyline could join channel)

like, maybe cache channels so app can join/leave? ahhhh, mmm, :(

do queue’d videoz go into library? maybe make this a setting?

X add yt title to queue

X websocket request line

X player code (ex. f3ab66)

player font-size setting

add “requested by:” to queue

partyline user name input (& dexie storage)

model playerz (title, value -> ytId, local file path)

queue sorting (drag-n-drop) re-order

library; add local folder(z)

library search/browse (fwd to partyline socket)

playlist & queue mat-toolbar icon-btn badge count

log queue (append) to txt file (know what was sung & by whom) (youoke app can do this)

…testz

Can't bind to 'matTooltip' since it isn't a known property of 'button' (wut??)

CUSTOM_ELEMENTS_SCHEMA

lololz

5--RnSogips

8leAAwMIigI

hR82cuPvfoA

oc58y9fPznU

http://dexie.org/docs/Observable/Dexie.Observable

youoke.party mail txt v=spf1 include:spf.efwd.registrar-servers.com ~all
