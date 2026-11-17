---
kind: "code"
title: "a mobile news reader"
date: "2012-09-06T20:39:49.000Z"
date_precision: "second"
description: "a jquery mobile news reader fetches headlines, updates an item count, and offers a refresh button."
source: "https://jsfiddle.net/edwardsharp/FYLHp/"
tags: ["jsfiddle","code","jquery","html","css","javascript","animation"]
---

<iframe class="code-demo" src="{{ '/content/media/2012/2012-09-06-a-mobile-news-reader-demo.html' | relative_url }}" title="jsfiddle / FYLHp" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<script src="//code.jquery.com/mobile/1.0a3/jquery.mobile-1.0a3.js"></script>
<link
  rel="stylesheet"
  href="//code.jquery.com/mobile/1.0a3/jquery.mobile-1.0a3.css"
/>
<script src="//ajax.microsoft.com/ajax/jquery.templates/beta1/jquery.tmpl.min.js"></script>
<script src="//github.com/appendto/amplify/raw/master/core/amplify.core.js"></script>
<div data-role="page" id="hackerNews">
  <div data-role="header" data-backbtn="false">
    <a id="btnRefresh" href="#" data-icon="refresh">Refresh</a>
    <h1>
      Hacker News &nbsp;<span
        id="itemCount"
        class="count ui-btn-up-c ui-btn-corner-all"
        >0</span
      >
    </h1>
  </div>

  <div id="content" data-role="content">
    <ol class="newsList" data-role="listview"></ol>
  </div>
</div>

<script id="newsItem" type="text/x-jquery-tmpl">
  <li data-messageId="${id}" class="newsItem">
      <h3><a href="${url}">${title}</a></h3>
      <p class="subItem"><strong>${postedAgo} by ${postedBy} </strong></p>
      <div class="ui-li-aside">
          <p><strong>${points} points</strong></p>
          <p>${commentCount} comments</p>
      </div>
  </li>
</script>
```

## css

```css
.count {
  position: absolute;
  font-size: 11px;
  font-weight: bold;
  padding: 0.2em 0.5em;
  top: 50%;
  margin-top: -1em;
}

.ui-li-aside {
  float: right;
  width: 50%;
  text-align: right;
  margin: 1.4em 0px 0px 0px !important;
  position: absolute;
  right: 25px;
}

.ui-li-heading,
.ui-li-desc {
  width: 90%;
  text-overflow: ellipsis;
}

strong {
  font-style: bold;
}
```

## javascript

```javascript
var hackerNews = (function ($, undefined) {
  var pub = {};

  pub.init = function () {
    //Refresh news when btnRefresh is clicked
    $("#btnRefresh").live("click", function () {
      pub.getAndDisplayNews();
    });

    //When news updated, display items in list
    amplify.subscribe("news.updated", function (news) {
      displayNews(news);
    });

    //When news updated, then set item count
    amplify.subscribe("news.updated", function (news) {
      $("#itemCount").text(news.items.length);
    });
  };

  pub.getAndDisplayNews = function () {
    //Starting loading animation
    $.mobile.pageLoading();

    //Get news and add success callback using then
    getNews().then(function () {
      //Stop loading animation on success
      $.mobile.pageLoading(true);
    });
  };

  function getNews() {
    //Get news via ajax and return jqXhr
    return $.ajax({
      url: "//api.ihackernews.com/page?format=jsonp",
      dataType: "jsonp",
    }).then(function (data, textStatus, jqXHR) {
      //Publish that news has been updated & allow
      //the 2 subscribers to update the UI content
      amplify.publish("news.updated", data);
    });
  }

  function displayNews(news) {
    var newsList = $("#hackerNews").find(".newsList");

    //Empty current list
    newsList.empty();

    //Use template to create items & add to list
    $("#newsItem").tmpl(news.items).appendTo(newsList);

    //Call the listview jQuery UI Widget after adding
    //items to the list allowing correct rendering
    newsList.listview("refresh");
  }

  return pub;
})(jQuery);

hackerNews.init();
hackerNews.getAndDisplayNews();
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/FYLHp/)
