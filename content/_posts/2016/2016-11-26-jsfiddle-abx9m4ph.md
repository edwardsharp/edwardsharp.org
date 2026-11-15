---
title: "a calendar layout"
description: "a calendar mockup with a prominent selected date and a compact month grid."
date: "2016-11-26T10:42:51.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css"]
permalink: "/post/jsfiddle-abx9m4ph/"
source_id: "abx9m4ph"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/abx9m4ph/2/"
source_revision: 2
---

<iframe class="code-demo" src="{{ '/content/media/2016/2016-11-26-jsfiddle-abx9m4ph-demo.html' | relative_url }}" title="jsfiddle / abx9m4ph" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<link
  rel="stylesheet"
  href="//cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css"
/>
<div class="month">
  <div id="current_date">
    <div id="selected_weekday">FRI</div>
    <div id="selected_month">NOV</div>
    <div id="selected_day">26</div>
    <div id="selected_year">2016</div>
  </div>

  <div class="row">
    <div class="col-xs-1">❮</div>
    <div class="col-xs-10" id="current_month">NOVEMBER</div>
    <div class="col-xs-1">❯</div>
  </div>
</div>

<ul class="weekdays">
  <li>M</li>
  <li>T</li>
  <li>W</li>
  <li>T</li>
  <li>F</li>
  <li>S</li>
  <li>S</li>
</ul>

<ul class="days">
  <li></li>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>10</li>
  <li>11</li>
  <li>12</li>
  <li>13</li>
  <li>14</li>
  <li>15</li>
  <li>16</li>
  <li>17</li>
  <li>18</li>
  <li>19</li>
  <li>20</li>
  <li>21</li>
  <li>22</li>
  <li>23</li>
  <li>24</li>
  <li>25</li>
  <li><span class="active">26</span></li>
  <li>27</li>
  <li>28</li>
  <li>29</li>
  <li>30</li>
</ul>
```

## css

```css
* {
  box-sizing: border-box;
}
ul {
  list-style-type: none;
}
body {
  font-family: sans-serif;
}

.month {
  font-family: monospace, sans-serif;
  padding: 25px 25px 10px 25px;
  width: 100%;
  background: #1abc9c;
}

#current_date {
  text-align: center;
  margin-bottom: 1em;
}

#current_month {
  font-size: 25px;
  text-align: center;
}

.month {
  color: white;
  text-transform: uppercase;
  letter-spacing: 3px;
}

#selected_weekday {
  font-size: 25px;
}
#selected_month {
  font-size: 25px;
}
#selected_day {
  font-size: 40px;
}
#selected_year {
  font-size: 18px;
}

.weekdays {
  margin: 0;
  padding: 10px 0;
  background-color: #ddd;
  clear: both;
}

.weekdays li {
  display: inline-block;
  width: 13.6%;
  color: #666;
  text-align: center;
}

.days {
  padding: 10px 0;
  background: #eee;
  margin: 0;
}

.days li {
  list-style-type: none;
  display: inline-block;
  width: 13.6%;
  text-align: center;
  margin-bottom: 5px;
  font-size: 22px;
  color: #777;
}

.days li .active {
  padding: 5px;
  background: #1abc9c;
  color: white !important;
  border-radius: 9999px;
}

/* Add media queries for smaller screens */
@media screen and (max-width: 720px) {
  .weekdays li,
  .days li {
    width: 13.1%;
  }
}

@media screen and (max-width: 420px) {
  .weekdays li,
  .days li {
    width: 12.5%;
  }
  .days li .active {
    padding: 2px;
  }
}

@media screen and (max-width: 290px) {
  .weekdays li,
  .days li {
    width: 12.2%;
  }
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/abx9m4ph/2/)
