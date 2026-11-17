---
kind: "entry"
title: "freqhole thotz"
date: "2025-06-24T13:28:01-04:00"
date_precision: "second"
last_modified: "2026-01-04T14:26:38-05:00"
render_with_liquid: false
tags: ["freqhole","#TODO"]
---

# freqhole thotz

## sun jan 4, 2026

okay, so try to nail the basicz, i guess:

assuming multiple sqlite.db filez is a good idea…

consider singular table names, `rowid` foreign keys (but no fk constraints!), avoid using uuid id columns?! and just auto-incrementing integers (for rowid fields, use maybe short-sha or base64 (or some baseX) or something for id?). oh, and how to deal with multiple processes accessing the same sqlite.db file (eek, IPC or something? just use the json api?!)

1. media blobz in sqlite, crud rust lib fnz. 1 sqlite.db file for raw media_blobz data (basically key/value store) and 2. sqlite.db for records
2. application state sqlite.db (jobs, config, etc.)

3. the config stuff got wayyyy too complicated, too many weird half-baked features, too many options in the config file

4. START WITH A PAIRED-DOWN CONFIG FILE, define a few sensible default values ONCE
5. DOES THE CONFIG NEED TO BE EXTENDABLE TO OTHER MODULES?!

6. filesystem scan & sync (ionotify? or incremental jobs?); mostly related to just dealing with media_blobz but would soon extend into domain-specific stuff like: music. deal with app directory, backing up sqlite.db files (copy), setting a “watch” directory (that probably needs to recursively scan all sub-dirs)
7. music domain, so another sqlite.db file for this. improve artist, album, and genre normalization and some other useful metadata modeling (see anna’s archive post about spotify sqlite db model! docs/annas-archive-spotify-schema.md). filesystem scan & sync module extensions for handling music-specific files and creating music domain records (that reference media_blobz)
8. auth & authorization (ugh), so maybe also: plugins, can the webauthn-rs stuff be modularized and very very contained? still probably need users, and a way to register users, so the invite/link code stuff could technically issue a cookie… or a JWT? (so like that’d be in the core code shit, and the webauthn-rs stuff could be an optional plugin!)
9. search (fts!) and filtering (eek what about sea-query.rs?)
10. so the server package, do better with route org, make sure auth is required for just about everything. be wary of static file hosting? or config. maybe config can also do, like proxy so http api extensions could happen this way (prolly wildly insecure). BE VERY CLEAR AND EXPLICIT ABOUT THE JSON API! DOCUMENT IT AND HAVE A WAY TO VALIDATE OR GENERATE THE API DOCZ (even cooler, generate zod schemas?!). json api could also be a good way to test?

11. …would be really cool to be able to get this db.pool().clone() and other db-related stuff outta here and handled in grimoire package…
12. server/src/upload/mod.rs is a really nice module! ☺️
13. server/src/media/mod.rs is too mixed up with music domain! should just be for handling media_blobz!

…so plugins… it’d sure be neat if there was an easy way to have extensions for whatever-weird-feature in it’s own repo, some things so far that might otherwise be better as plugin:

1. yt-dlp stuff
2. musicbrains integration

i guess a plugin would basically be like some kind of api handler and some web-ui (js)? but maybe rust thingz? some real architectural hurdlez here…

the whole tauri thing, guh

but also pwa pretty much does it, just have to deal with https certz (but prolly some d.i.y. letsencrypt thing, another plugin?)

…the previous cli got way too complex!

important code shit: avoid a million little half-baked featurez!

avoid using defaults as much as possible!

be modular! avoid long files (limit ~750 lines of code per file!)

contain sql! try to contain crate deps! try to use fewer crates!

## sat, jan 3, 2026

ffs, okay, it’s so huge and there’s sill so many huge problemz lololz think about the playlist stuff a bit? web client player + localstorage pwa thing + some kind of localhost https server && get the friggen future death agency shit back online??fucking capitalism and wayz to make $$$ ;( appz, service (ugh), a lil’ hardware thing? hmm. some kind of federated media thing with a social thing? can support some community hubz (but the ugc + moderation overhead is …huge ;()wireguard seemz promising, tho. [https://github.com/pivpn/pivpn](https://github.com/pivpn/pivpn) (i guess maybe fucking cloudflare tunnel for bigger shit?) [https://github.com/tailscale/libtailscale](https://github.com/tailscale/libtailscale) [https://github.com/messense/libtailscale-rs](https://github.com/messense/libtailscale-rs) [https://github.com/barnstar/TailBrowser](https://github.com/barnstar/TailBrowser)

like a nts.live but for performance art? lolol …okay, fuckin’ sqlite, should have used it, prolly need to re-do a lot of shit. but it’d be a lot more portable. (be nice to solve the issue where there’s artists (and/or albums) with the same name but not actually the same artist (or album or artist + album). what about sea-query crate? [https://github.com/SeaQL/sea-query/blob/master/examples/sqlx_sqlite/src/main.rs](https://github.com/SeaQL/sea-query/blob/master/examples/sqlx_sqlite/src/main.rs) there probably needs to be a package or core module for scanning the fs for media (and i guess also re-scanning or periodic updates, or chunked async/background processing; maybe ionotify fs listener for changes to “monitor” some folderz?)

## sat, sept 6, 2025

the artists list should have a toggle that by default shows a distinct list of album artists (so would should Various Artists), and otherwise shows all artist names like it does now.

tags for bigger song collection separation, so like weird short samples, or voice memos, or a bunch of old random 1hit wonderz, or like my main good collection of shit, etc. import scan music and whatever ingest should handle this. some way to tag based off common file directory

## tue, aug 19, 2025

so, like pg is sooo cool. but what about flat filez, tho? sqlite is also really portable and standard? but flat filez + git is like easy peasy revision stuff :/

i guess with sqlite, from a server-side, lean into sql being in .sql filez, and then a rust app to do http server stuff with static filez, .sql filez and some simple paginated json api stuff. lean into document db style.

what about a web gpu thing that’s like tabular text? what about a playlistz view?

push playlistz into own repo. make a cli thing for collecting songs into a standalone mode. re-work standalone mode to use web-component children slotz:

```
<frehole-playlistz>
<div slot=“playlist-json”>
{
    title: “triphobia mixtape”,
    description: “+ ppl we know && <3”,
    songs: [{ title: “bonez song”, artist: “triphobia”, album: “a side” }, { … }],
}
</div>
</freqhole-playlistz>
```

…or markdown front-matter style, eek.

## mon, june 30, 2025

okay, so documents domain. like a document is many media_blobs. maybe like a bunch of .webp images from a pdf. a little html offline playlist thing, some .csv data

it would be cool also if there could be “query” media_blobs, that are just sql fragments that are saved, so admin users can have like raw db exec access! can pg’s SAVEPOINT be used for this somehow? to be able to have like preview and rollback functionality?

drag in the toidz data and viz stuff! also the lil’ canvas demo start! the monaco text editor 😎

# from a while ago:

cd /Users/edward/Desktop/is4trash/authn-stuff/axum_tutorial

./scripts/embeddedpg-start.sh

RUST_LOG=info cargo run --bin server

[https://edwardsharp.github.io/peedeeeff/really-simple-container.html](https://edwardsharp.github.io/peedeeeff/really-simple-container.html)

[https://www.npmjs.com/package/@edwardsharp/pee-dee-eff](https://www.npmjs.com/package/@edwardsharp/pee-dee-eff)

[https://www.youtube.com/playlist?list=PLTdfhpDttnE5Y-ZY_91nSEVmnL59HocsW&jct=W45zqnWpmR4zqvWEORXt_g](https://www.youtube.com/playlist?list=PLTdfhpDttnE5Y-ZY_91nSEVmnL59HocsW&jct=W45zqnWpmR4zqvWEORXt_g)

[https://www.youtube.com/watch?v=ndSqfRiBaXk](https://www.youtube.com/watch?v=ndSqfRiBaXk)

zomg ts
