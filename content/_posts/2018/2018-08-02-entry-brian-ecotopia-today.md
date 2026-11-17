---
title: "brian ecotopia.today"
date: "2018-08-02T22:14:43-04:00"
last_modified: "2018-08-30T20:05:52-04:00"
kind: "entry"
tags: ["ecotopia.today","#TODO"]
date_precision: "second"
render_with_liquid: false
permalink: "/post/2018-08-02-entry-brian-ecotopia-today/"
---

## brian ecotopia.today

http://ecotopia.today/cascadia-test.html#

https://edwardsharp.github.io/ecotopia-today/

https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#platform-linux

8-17

X 1. setting up the sub nav for Grand Coulee and Basin Project

2. add the mouseover/hover interactions

3. setup the spyglass feature

4. anything else that might be missing

mobile/small nav improve subNav

X refactor Watershed computed props

dig into vueJS prototypes

material frame work is fun & useful (…polymer?)

$1k budget (66.6 hrz @ 15/hr or 40hr @25/hr)

dev toolz: git (github 1gb vs gitlab 10gb repoz); atom or vscode;

explore and be helpful. document process. be open to feedback. don’t make thingz too complex but don’t be afraid of learning curvez.

DRY-ness & reusability: !!!

transparency in work and budget and everything == less surprise.

performance: what about tile images

figure out how tiles were created and how many/size

hosting?

dev setup doc

stub out material vueJS boiler plate

stub out openlayers component

stub out various nav & sidebar components

## HOURS

|          |       |                                                                                                                                  |
| -------- | ----- | -------------------------------------------------------------------------------------------------------------------------------- |
| date     | hourz | note                                                                                                                             |
| 8-2-2018 | 1     | phone call with Brian                                                                                                            |
| 8-4-2018 | 3     | review cascadia-test code & other ecotopia.today maps; investigate vue-material, vue router, and open layers libraries           |
| 8-5-2018 | 6     | work on Vue.JS prototype, flex layout, responsive layout, and open layers map component; deploy to GitHub pages and update Brian |

aug 13:

legend is accordion— collapsed by default under (right after) main sidebar image

sources accordion— end of text

recipe: add layer do this

ah yes! well, i wonder if helps to make the buttons more button-like? refresh https://edwardsharp.github.io/ecotopia-today and you should see the change. could also flash some tooltips (https://vuematerial.io/components/tooltip) off the buttons when the page loads to tell folx they can click!

i feel ya on the popup. another thing i've been thinking is that instead of having the nav buttons on the map: the legend section could be the legend area by default but then also be a static place to display what is currently displaying in the map popup box? then the map would not need to shift when a thing is clicked and the pop up content will always be in the same, predictable place...

for the layer changing buttons (currently "Legacy", "Plumes", & "Missoula floods" i was thinking about having this hang off the menu as another menu fly-out. as i dig into operlayer map component more it'll make more sense to me how to add buttons over the map.

no need to send any tile images; i can (probably) get them from your server. will be able to shave some MBs off the geojson files by minifying them. i also wonder about the compression level of your .png tile images-- ~50GB seems like maybe a lot. like how many individual files are we talkin'?

will get to mobile testing soon-ish. i think any important map interaction should be a click/touch, since, you know, mobile's not so good at that...

well, yes, help. so if you wanted to jump into this that'd be cool. i'm not sure where you are at with git but here's a crash course:

1. log into github.com and go to my repo and click the fork button in the top right of the page: https://github.com/edwardsharp/ecotopia-today

1. this will make a copy of my repo to your own github user's repos

1. you can then clone (download) your forked repo to your computer. run: `git clone https://github.com/WHATEVER\_YOUR\_GITHUB\_USERNAME\_IS/ecotopia-today`
1. it might be a good time to get into the groove of git branches. so now would be a good time to create a new brach from the 'master' branch. you can name it whatever you want (as long its not already a branch name). (this step is technically optional)
1. `cd ecotopia-today/` and follow along with (https://github.com/edwardsharp/ecotopia-today/blob/master/README.md)
1. run: `npm install`

1. make sure you have the latest stable releases of nodeJS & npm installed

1. run: `npm start`  to start the development server. some magic will flow through your terminal and in a few moments you can point your browser to http://localhost:8080  (or you will be enlightened with some helpful error messages that you can work through OR you'll get stuck with a weird error message, in which case, stop and email me a copy/paste of the the error and the command(s) you ran)
1. start hacking on something. maybe add some static HTML content to one of the view files, like: https://github.com/edwardsharp/ecotopia-today/blob/master/src/views/bioregion/BioregionIntroduction.vue

1. when you save a file the webserver will reload your browser window and you should see the change.
1. the terminal console will nit-pick code via eslint, listen to it's sage advice and make your code better

1. okay, great, maybe you were able to add a little bit of content. now would be a great time to make a git commit and push those changes to github.com
1. soo: if you're using the command line (i, personally use a GUI client and think most people should) you'd do these things in git:

1. `git commit `
1. `git push origin WHATEVER\_YOU\_NAMED\_YOUR\_BRANCH`

1. neat! sooo now go to github.com and create a pull request. i'll see your changes and likely merge them into my repo.
1. hooray; we're collaborating! if you made it this far consider yourself proficient in git! if you ran into any troubles, then feel free to ask me about 'em.

\*\*\*a really helpful point for people getting started with git is to put **only a few changes in any single commit**. one thing that's never fun is dealing with merge conflicts (e.g. we both try to change the same line of code in a file). when things go wrong it's easier to iron out problems when there's smaller change-sets per commit (at least for beginners, anyway).\*\*\*

cheerz!

cors

curl -H "Origin: https://mississippi.ecotopia.today" \

-H "Access-Control-Request-Method: POST" \

-H "Access-Control-Request-Headers: X-Requested-With" \

-X OPTIONS --verbose \

https://api.ecotopia.today/api/v2/Brian/datasets/demo/places

https://accounts.google.com/o/oauth2/auth?scope=openid+email+profile&state=q1PDA0lgkD1vygv2nM3VKoNPHvSqcUbE&redirect\_uri=http://api:8010/api/v2/users/complete/google-oauth2/&response\_type=code&client\_id=513129951319-3fsarg6867ala3bo65atiaj7s2v1ftm2.apps.googleusercontent.com

note the `comand` for the web (3dwardsharp/nginx-certbot) instance in `docker-compose.yml`: `command: /bin/bash -c "envsubst '$${BASE\_SERVER},$${ADMIN\_SERVER}' < /etc/nginx/conf.d/nginx.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"` you need to explicitly tell `envsubst` about the variables to substitute like `'$${BASE\_SERVER},$${ADMIN\_SERVER}'` note the `$$`. otherwise envsubst will replace other `$` variables in nginx.template with blank strings.
