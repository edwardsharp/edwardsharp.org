---
kind: "entry"
title: "more freqhole shiz"
date: "2026-01-20T11:45:00-05:00"
date_precision: "second"
last_modified: "2026-01-20T12:57:41-05:00"
render_with_liquid: false
tags: ["freqhole","TODO"]
---

# more freqhole shiz

zomg so much frontend shit, still 😩

use config generes for top-level generes list (left/first col), then break down sub-generes ...somehow. (also it might be that albums (not songs) should have genres, ugh). also playlist stats are wrong (again in the left/first column). when clicking a genre, i get scrolled back to the top of the list. ...do genres have images? otherwise left/first col row doesn't need a thumbnail/icon.

make pink accent bg buttons text black (not white)

deal with this top nav bar, ugh. maybe always need a two col layout? how will it be on mobile 1-col layout, tho? prolly need to think about topnav more. albums and songs is 1-col layout.

the width of the first/left column in the two col layout should be the same width everywhere (artists, genres, playlists).

playlist song row image, and queue image need to work like: image cell with leftpad index number `000` white text on tight wrapped background centered middle of image. row hover clears the index number (so can see image), hovering over the image shows play icon (and clicking it will play that song). songs table list could maybe do this, too (tho icon needs to be much smaller. so maybe not?)

...my music doesn't have any album images? or they're not loading correctly.

scan music probably needs to work harder for song artist name and album name. can do filename splitting (to some reasonable point). is the scan truncating long title names?! double check `Headcleaner: Zentrifuge/Stabs/Rottlichtachse/Propaganda/Aufmarsh/E ...` song (seeing it in the artist detail view) also `Headcleaner: Das Gleissen/Schlacht/Lyrischer Ruckzug` doesn't marquee in the queue (wait, it's actually the last item in the queue doesn't marquee!)?

oh. also double click or play icon click of song on artist detail doesn't start playing anything (whole album is queued tho)

also, need to handle the case for compilation albums, there would be different artist and "album artist" metadata on the mp3 (song file). in this case, i don't really want to show these artists in the /artists route (so probably don't create artist table records? but show this somewhere?). look at legacylib/

queue history tab for play history. also, since we're creating api cache for queued songs, i guess we should just create local indexed db records for this music?

mild interest in just using opfs and no api cache, but need to think carefully.

topnav should show storage use (not a lot of open space, so keep it compact). also be nice to show the remote server image (if there is one).

add some recent playlists in top nav (order by updated_at). for sure local playlists, but wondering, how complex it would be to show remote playlists that the user has created? or maybe this should be contextual to the selected remote-- maybe that's a good way to start anyway. "view all" and "+ create" buttons should be wired up.

album and artist detail page should also have "shuffle" and "+ queue" (or "add to queue", the "+queue" text is gonna be useful for narrow/mobile view when space starts getting tight) buttons. probably should add a new presentational component that wraps all these buttons? album and artist don't need "ARTIST" and "ABLUM" in the top of the header section. also need an edit button (only if user can edit tho, local always, remote should have proper role).

artist A-Z nav index needs to be wired up.

...search (suggestions should let user play song(s), or go to detail pages) otherwise pressing enter will go to search results page. also, persisted search input should be used as `q` param in all the query api requests (so will be a filter, will cause most all views to re-render and show filtered by this query param)

tags (have presentational component, just needs rendered and wired up to api calls)

context menus

playlist + tag context menus

edit songs (and albums, like bulk edit)

favorite handling everywhere the favorite is shown. same for rating.

track currently playing song so we can show either a pink triangle or some other lil' animation or thing in all the places songs are rendered.

narrow mobile views? how to do this better? previous isMobile ran into some trouble. will be single column layout. would be nice if it didn't do touch detection, and could do responsive stuff instead so desktop can also render a narrow view.

route transitions and more `loading...` ui (but only after \>1second of loading time (maybe could pull it down to 750ms or 500ms)). should be able to tap into tanstack query more. also probably need more ETag handlers so we can handle better when new data is added to remote.

artist/album detail grid (in genres) needs some size (and maybe responsive) tweaking

cli for server setup, so init config, step user thru entering proper config values, setup a root user, generate 1 invite code (ask if user wants this for passkey setup), ask if user wants apikey (prolly do?), prompt dir for first music scan.

YANK ALL THESE FRIGGEN BORDERS!

can the playlist image take up the whole page bg? maybe album and artist detail pages can do this, too?

maybe a carousel on artist and album detail pages to show all the images (no waveform images, tho)

...use the waveform images for something? can we generate them not blue with white bg but pink with black bg? maybe use the image for currently playing thing? maybe like a background fill for the row or something?

blob data separate .db file
