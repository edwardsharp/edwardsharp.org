---
title: "micronemez zoom'r"
date: "2014-01-06T17:52:41.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-9RtQU/"
source_id: "9RtQU"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/9RtQU/32/"
source_revision: 32
---

<iframe class="code-demo" src="{{ '/content/media/2014/2014-01-06-jsfiddle-9RtQU-demo.html' | relative_url }}" title="micronemez zoom'r" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

some zoomin css!

## html

```html
<script
  type="text/javascript"
  src="//janne.aukia.com/zoomooz/jquery.zoomooz.min.js"
></script>

<div class="bump">
  <div class="hex_top"></div>
  <div class="hex_mid">
    <p class="title">MICRONEMEZ</p>
    <p class="subtitle" title="--marvin minisky">
      those inner mental context clues that shade our minds&#039; activities in
      ways we can rarely express.
    </p>
  </div>
  <div class="hex_bot"></div>
</div>

<div id="cluster">
  <div class="hex-row row1">
    <div class="hex none">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
    <div class="hex none">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
    <div class="hex none">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget">
        012345678901 234567890123 345678901234
      </div>
      <div class="bottom"></div>
    </div>
  </div>
  <div class="hex-row even row2">
    <div class="hex none">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
  </div>
  <div class="hex-row row3">
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget">
        012345678901 234567890123 345678901234
      </div>
      <div class="bottom"></div>
    </div>
  </div>
  <div class="hex-row even row4">
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget">
        012345678901 234567890123 345678901234
      </div>
      <div class="bottom"></div>
    </div>
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget">
        012345678901 234567890123 345678901234
      </div>
      <div class="bottom"></div>
    </div>
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
  </div>
  <div class="hex-row row5">
    <div class="hex none">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
  </div>
  <div class="hex-row even row6">
    <div class="hex none">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
    <div class="hex none">
      <div class="top"></div>
      <div class="middle zoomTarget">
        012345678901 234567890123 345678901234
      </div>
      <div class="bottom"></div>
    </div>
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget">
        012345678901 234567890123 345678901234
      </div>
      <div class="bottom"></div>
    </div>
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget">
        012345678901 234567890123 345678901234
      </div>
      <div class="bottom"></div>
    </div>
  </div>
  <div class="hex-row row7">
    <div class="hex none">
      <div class="top"></div>
      <div class="middle zoomTarget">
        012345678901 234567890123 345678901234
      </div>
      <div class="bottom"></div>
    </div>
    <div class="hex none">
      <div class="top"></div>
      <div class="middle zoomTarget">
        012345678901 234567890123 345678901234
      </div>
      <div class="bottom"></div>
    </div>
    <div class="hex none">
      <div class="top"></div>
      <div class="middle zoomTarget">
        012345678901 234567890123 345678901234
      </div>
      <div class="bottom"></div>
    </div>
    <div class="hex none">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget">
        012345678901 234567890123 345678901234
      </div>
      <div class="bottom"></div>
    </div>
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget">
        012345678901 234567890123 345678901234
      </div>
      <div class="bottom"></div>
    </div>
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
    <div class="hex">
      <div class="top"></div>
      <div class="middle zoomTarget"></div>
      <div class="bottom"></div>
    </div>
  </div>
</div>
```

## css

```css
body {
  background: #000;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}

p.title {
  padding-left: 5px;
  font-size: 28px;
}

p.subtitle {
  font-size: 18px;
}

.hex_top {
  width: 0;
  border-bottom: 60px solid #ff6600;
  border-left: 104px solid transparent;
  border-right: 104px solid transparent;
}
.hex_mid {
  width: 203px;
  height: 120px;
  background-color: #ff6600;
  padding-left: 4px;
}
.hex_bot {
  width: 0;
  border-top: 60px solid #ff6600;
  border-left: 104px solid transparent;
  border-right: 104px solid transparent;
}

.hex_uno:before {
  content: " ";
  width: 0;
  height: 0;
  border-bottom: 30px solid #ff6600;
  border-left: 52px solid transparent;
  border-right: 52px solid transparent;
  position: absolute;
  top: -30px;
}

.hex_uno {
  margin-top: 30px;
  width: 102px;
  height: 60px;
  background-color: #ff6600;
  position: relative;
}

.hex_uno:after {
  content: "";
  width: 0;
  position: absolute;
  bottom: -30px;
  border-top: 30px solid #ff6600;
  border-left: 52px solid transparent;
  border-right: 52px solid transparent;
}

.bump {
}

.bump_left {
}
.bump_left:hover {
  border-color: yellow;
}

#cluster {
}
.hex {
  float: left;
}
.hex:hover .top,
.hex:hover .bottom {
  filter: alpha(opacity=50); /* internet explorer */
  -khtml-opacity: 0.5; /* khtml, old safari */
  -moz-opacity: 0.5; /* mozilla, netscape */
  opacity: 0.5; /* fx, safari, opera */
}

.hex .top {
  width: 0;
  border-bottom: 30px solid #ff6600;
  border-left: 52px solid transparent;
  border-right: 52px solid transparent;
}
.hex .middle {
  width: 103px;
  height: 63px;
  background: #ff6600;
}
.hex .middle:hover {
  background: #000;
}

.hex .bottom {
  width: 0;
  border-top: 30px solid #ff6600;
  border-left: 52px solid transparent;
  border-right: 52px solid transparent;
}
.hex-row {
  clear: left;
}
.hex-row.even {
}

.tranz {
  filter: alpha(opacity=50); /* internet explorer */
  -khtml-opacity: 0.5; /* khtml, old safari */
  -moz-opacity: 0.5; /* mozilla, netscape */
  opacity: 0.5; /* fx, safari, opera */
}

.none {
  visibility: hidden;
}

.hex .no-background {
  color: #ff6600;
  background-color: #000;
}
.hex .no-background:hover {
}
```

## javascript

```javascript
jQuery(document).ready(function ($) {
  /*
   clone = $('.hex_bot').clone();
    
    $('body').after(clone);
    $(clone).addClass('bump_left');
    $(clone).hide();
    

    offset = $('.hex_bot').offset();
    var fromtop = offset.top;

    $(document).scroll(function() {
        doc = $(this);
        dist = $(this).scrollTop();

        if (dist >= fromtop) {
            $(clone).show();
            $('.hex_bot').css({
                'position': 'fixed',
                'top': '0',

            });

        } else {
            $('.hex_bot').css({
                'position': 'relative'
            });
            $(clone).hide();
        }
    });

    $('.hex_bot').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });*/

  $(".middle").click(function () {
    $(this).addClass("no-background");
  });

  $("body").click(function () {
    $(".no-background").removeClass(".no-background");
  });
});
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/9RtQU/32/)
