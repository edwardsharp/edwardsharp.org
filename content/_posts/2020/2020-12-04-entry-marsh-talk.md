---
title: "marsh talk"
date: "2020-12-04T17:33:32-05:00"
last_modified: "2021-01-02T00:20:13-05:00"
kind: "entry"
tags: ["marsh","thotz","#TODO"]
date_precision: "second"
render_with_liquid: false
permalink: "/post/2020-12-04-entry-marsh-talk/"
---

# marsh talk

## some recent #TODO:

knex npm for postgres db talk? just use the fucking pg lib

passport-js? oh yeah, already done that.

hasura graphQL thingy?

setup a read-only pg db user for reporting, remote access, pg_dump etc.

## from dec18 talk

sidewalk sales:

user place an order without paying -- only ON HAND items

sliding scale prices for some items

square ebt: totil pay -- look into this thing

actually #TODO:

1. user place an order without paying -- ONLY on hand stuff

# monday dec21 talk

initial thoughtz:

inventory

toughtz:

POS -- ipad is p much ideal, leverage square but also open to some alternatives (like totilpay and custom web ui)

handing changes (reject or substitute items) after wholesale order:

initial order rejection (wholesaler not having stock)

delay from async communication

on-delivery counts

all this needs to feed into central inventory database

note to say: square inventory doesn't handle fractional units: so keeping track of weighed bulk inventory a little more challenging: like if you get 25lb but then you weight out & sell 1.3 lb then square inventory would round units. best to use smallest units possible, like grams

so where to go from here:

hasura graphQL server and shift more db "modeling" to client-side JS

try to remove sorta-cart-server or make it really simple

like lambda cloud functions:

services like ziet now nextjs

yank sequilize lib! can handle everything with a graphQL client?!

how to deal with db migrationz; ugh just some fucking SQL, this doesn't need to exist on the server!

still pondering auth0

move members table into square users?

also explore "saved carts" for quicker checkout:

this could also encourage repeat checkoutz for like, when members collaborate on group orders.

consider batch payments to avoid multiple transaction feez

guest tokens?

marsh admins can create a token to allow guest checkout

so like send out an email to a user with guest checkout link

token good for only so long and for 1 checkout

make a link on login form to input guest token? marsh could hand-out printed tokenz?

maybe verify email first?

## #TODO:

- update sorta-cart-server square lib

* saved payment source?

- better mobile table (like fix position add-to-cart button when overflowing; make description own row)
- admin member edit, turn "create user" checkbox into a button if no user assoc exists.
- bundle google font css
- favicon
- add to cart snackbar pop instead of opening cart.

* also include "continue shopping" button to close cart

- announcements thingy that uses pages proto and displays a popup on sorta-cart landing page once to user
- admin dashboard:

* recent orders limit by date range, like past 1 or 2 weeks then maybe 50 or so.
* use moment or some "from now" date lib to format dates.

- fix sort order for users My Orders list (use date-fns or something)
- inventory

* handle wantsTwoPickups (like add field to order db?)

- refactor ON-HAND-items-only check for payment need during checkout
- handle count_on_hand changes for admin orders (DOUBLE CHECK)
- check if order has both ON HAND && backordered line items, figure out how to split

* handle adding duplicate products to cart. ??? could have duplicate but one CS and one EA unit, tho :hmm:
* add .csv download for async updates to feed back to addStock (so populate on_hand_count_change with ordered quantity (case conversion, too?))

- set count_on_hand_change to adjustment total
- add qtyOrdered (which is sum of line item qty)
- current on hand list
- i guess first validate unf & upc_code on sheet is unique
- when dropping existing products by import_tag don't drop where count_on_hand > 0 -- how to handle in bulkCreate to avoid duplicates? after create go through each one left from import_tag?

* figure out for product uploads -- upc_code & unf uniqueness && what do to preserve count_on_hand
* mutate cart line items that have selected_unit CS and stock_on_hand > 0 into EA units and use u_price (not ws_price) when validating line itemz

- or just don't validate or make stock movements for CS units :hmm:

* admin order edits && on_hand_count changes -> move "remove line item" x, and store credit buttons into menu and also add "add stock movement button" which would move amount of count_on_hand into "on_hand" status line item (duplicate line item or create a new one?) and then decrement product count_on_hand ORRRR one button next to "Backorder" heading that submits the order, save, and then calculates and available stock movements and moves to "on_hand" status

- HANDLE THIS MANUALLY FOR NOW
- add count_on_hand to admin edit autocomplete search menu

* some kind of front-end view for count_on_hand in products table. maybe just a boolean & filter where "count_on_hand > 0" or somesuch
* VALIDATE selected_unit === 'CS' unit types (qty \* pk multiplier)
* only update cart quantity if no_backorder (think this is the case, need to double check)
* handle empty unf values
* addStock first use on_hand_count (if not null) for hard-count updates, then inc/dec on_hand_change (maybe call it on_hand_count_change?)

- also handle no_backorder
- fix on_hand_count primary val first.

* format createdAt date on order email
* donation option on checkout?
* get JWT tokenz outta localStorage -- use cookiez :nomnom:

## data viz

- grant marshro user readonly access to marsh_production db
- create sheet that, for each user, count distinct order line items

* some kind of stats thingy that represents propensity to buy the same thing again
* this could result in useful UI for user: recammondations (eek)
* this could also be UI on the admin dashboard? maybe just a report, tho.
* like: a "shopping list" that's a list of search queries to quickly "add to cart"

## GRAPHQL thotz:

- wire up JWT auth thru hasura
- wire up material-table to graphQL

* explore infinite scroll to remove pagination row
* make filters also a side-nav item (currently just first row in table, which is challenging with infinite scroll)

- write a mutation order submission

* ...webhook? some kind of order processing; like inventory validation, payment processing, and/or email

- figure out how to coalesce square inventory items into graphQL data

* just add a fucking on_hand col :/ (deal with square inventory later, just generate a .csv with mapped cols for any "on hand" items? or just all the products)

## other stuff:

- on-hand pick up fulfillment time windows estimates?
- "ready to pickup" email when status changes. might need more statuses like "partial pickup ready" ???
- twillo SMS thingy?
- explore pending wholesale orders-- esp partial cases
- user email update? like a preferences page for user to update email and change password
- member record might not need: discount, discount type, shares
- remove admin users view? add some way to add admin users, tho. invite email with link?

migrationz needed:

alter Products table:

```sql

ALTER TABLE "public"."Products"

ADD COLUMN "count\_on\_hand" integer,

ADD COLUMN "no\_backorder" boolean;

CREATE INDEX "products\_count\_on\_hand" ON "public"."Products"("count\_on\_hand");

CREATE UNIQUE INDEX "products\_uniq\_id" ON "public"."Products"("unf","upc\_code");

ALTER TABLE "public"."OrderLineItems" ADD COLUMN "status" character varying(255);

```

check distinct:

```sql

SELECT "unf", "upc\_code", COUNT(\*) FROM "Products" GROUP BY "unf", "upc\_code" HAVING COUNT(\*) > 1;

```

SELECT \* FROM "Products" WHERE "upc_code" IN ('903188', '903187', '903186', '903183', '903182', '902303', '902045', '10101');

deployment #TODO:

deploy 2 react appz

tag sorta-cart-server

truncate products table

migrationz :point-up:

delete pages (set one to draft and copy test content)

deploy sorta-cart-server new version kubectl

LOC statz sorta-cart-server

+1,754 −1,037

https://github.com/marshlife-art/sorta-cart-server/pull/5

sorta-cart+1,269 −390

https://github.com/marshlife-art/sorta-cart/pull/1

sorta-cart-admin

+10,861 −6,297

https://github.com/marshlife-art/sorta-cart-admin/pull/1

+13,884, -7,724
