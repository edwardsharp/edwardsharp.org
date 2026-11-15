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
<p>some zoomin css!</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script
  </span><span class="na">type=</span><span class="s">"text/javascript"</span>
  <span class="na">src=</span><span class="s">"http://janne.aukia.com/zoomooz/jquery.zoomooz.min.js"</span>
<span class="nt">&gt;&lt;/script&gt;</span>

<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bump"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex_top"</span><span class="nt">&gt;&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex_mid"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"title"</span><span class="nt">&gt;</span>MICRONEMEZ<span class="nt">&lt;/p&gt;</span>
    <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"subtitle"</span> <span class="na">title=</span><span class="s">"--marvin minisky"</span><span class="nt">&gt;</span>
      those inner mental context clues that shade our minds<span class="ni">&amp;#039;</span> activities in
      ways we can rarely express.
    <span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex_bot"</span><span class="nt">&gt;&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>

<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"cluster"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex-row row1"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex none"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex none"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex none"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;</span>
        012345678901 234567890123 345678901234
      <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex-row even row2"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex none"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex-row row3"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;</span>
        012345678901 234567890123 345678901234
      <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex-row even row4"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;</span>
        012345678901 234567890123 345678901234
      <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;</span>
        012345678901 234567890123 345678901234
      <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex-row row5"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex none"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex-row even row6"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex none"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex none"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;</span>
        012345678901 234567890123 345678901234
      <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;</span>
        012345678901 234567890123 345678901234
      <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;</span>
        012345678901 234567890123 345678901234
      <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex-row row7"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex none"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;</span>
        012345678901 234567890123 345678901234
      <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex none"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;</span>
        012345678901 234567890123 345678901234
      <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex none"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;</span>
        012345678901 234567890123 345678901234
      <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex none"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;</span>
        012345678901 234567890123 345678901234
      <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;</span>
        012345678901 234567890123 345678901234
      <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#000</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">overflow-x</span><span class="p">:</span> <span class="nb">hidden</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nt">p</span><span class="nc">.title</span> <span class="p">&#123;</span>
  <span class="nl">padding-left</span><span class="p">:</span> <span class="m">5px</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">28px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nt">p</span><span class="nc">.subtitle</span> <span class="p">&#123;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">18px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.hex_top</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">border-bottom</span><span class="p">:</span> <span class="m">60px</span> <span class="nb">solid</span> <span class="nx">#ff6600</span><span class="p">;</span>
  <span class="nl">border-left</span><span class="p">:</span> <span class="m">104px</span> <span class="nb">solid</span> <span class="nb">transparent</span><span class="p">;</span>
  <span class="nl">border-right</span><span class="p">:</span> <span class="m">104px</span> <span class="nb">solid</span> <span class="nb">transparent</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.hex_mid</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">203px</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">120px</span><span class="p">;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#ff6600</span><span class="p">;</span>
  <span class="nl">padding-left</span><span class="p">:</span> <span class="m">4px</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.hex_bot</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">border-top</span><span class="p">:</span> <span class="m">60px</span> <span class="nb">solid</span> <span class="nx">#ff6600</span><span class="p">;</span>
  <span class="nl">border-left</span><span class="p">:</span> <span class="m">104px</span> <span class="nb">solid</span> <span class="nb">transparent</span><span class="p">;</span>
  <span class="nl">border-right</span><span class="p">:</span> <span class="m">104px</span> <span class="nb">solid</span> <span class="nb">transparent</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.hex_uno</span><span class="nd">:before</span> <span class="p">&#123;</span>
  <span class="nl">content</span><span class="p">:</span> <span class="s1">" "</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">border-bottom</span><span class="p">:</span> <span class="m">30px</span> <span class="nb">solid</span> <span class="nx">#ff6600</span><span class="p">;</span>
  <span class="nl">border-left</span><span class="p">:</span> <span class="m">52px</span> <span class="nb">solid</span> <span class="nb">transparent</span><span class="p">;</span>
  <span class="nl">border-right</span><span class="p">:</span> <span class="m">52px</span> <span class="nb">solid</span> <span class="nb">transparent</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">-30px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.hex_uno</span> <span class="p">&#123;</span>
  <span class="nl">margin-top</span><span class="p">:</span> <span class="m">30px</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">102px</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">60px</span><span class="p">;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#ff6600</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">relative</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.hex_uno</span><span class="nd">:after</span> <span class="p">&#123;</span>
  <span class="nl">content</span><span class="p">:</span> <span class="s1">""</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">bottom</span><span class="p">:</span> <span class="m">-30px</span><span class="p">;</span>
  <span class="nl">border-top</span><span class="p">:</span> <span class="m">30px</span> <span class="nb">solid</span> <span class="nx">#ff6600</span><span class="p">;</span>
  <span class="nl">border-left</span><span class="p">:</span> <span class="m">52px</span> <span class="nb">solid</span> <span class="nb">transparent</span><span class="p">;</span>
  <span class="nl">border-right</span><span class="p">:</span> <span class="m">52px</span> <span class="nb">solid</span> <span class="nb">transparent</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.bump</span> <span class="p">&#123;</span>
<span class="p">&#125;</span>

<span class="nc">.bump_left</span> <span class="p">&#123;</span>
<span class="p">&#125;</span>
<span class="nc">.bump_left</span><span class="nd">:hover</span> <span class="p">&#123;</span>
  <span class="nl">border-color</span><span class="p">:</span> <span class="nx">yellow</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#cluster</span> <span class="p">&#123;</span>
<span class="p">&#125;</span>
<span class="nc">.hex</span> <span class="p">&#123;</span>
  <span class="nl">float</span><span class="p">:</span> <span class="nb">left</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.hex</span><span class="nd">:hover</span> <span class="nc">.top</span><span class="o">,</span>
<span class="nc">.hex</span><span class="nd">:hover</span> <span class="nc">.bottom</span> <span class="p">&#123;</span>
  <span class="nl">filter</span><span class="p">:</span> <span class="nb">alpha</span><span class="p">(</span><span class="nf">opacity</span><span class="err">=</span><span class="m">50</span><span class="p">);</span> <span class="c">/* internet explorer */</span>
  <span class="nl">-khtml-opacity</span><span class="p">:</span> <span class="m">0.5</span><span class="p">;</span> <span class="c">/* khtml, old safari */</span>
  <span class="nl">-moz-opacity</span><span class="p">:</span> <span class="m">0.5</span><span class="p">;</span> <span class="c">/* mozilla, netscape */</span>
  <span class="nl">opacity</span><span class="p">:</span> <span class="m">0.5</span><span class="p">;</span> <span class="c">/* fx, safari, opera */</span>
<span class="p">&#125;</span>

<span class="nc">.hex</span> <span class="nc">.top</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">border-bottom</span><span class="p">:</span> <span class="m">30px</span> <span class="nb">solid</span> <span class="nx">#ff6600</span><span class="p">;</span>
  <span class="nl">border-left</span><span class="p">:</span> <span class="m">52px</span> <span class="nb">solid</span> <span class="nb">transparent</span><span class="p">;</span>
  <span class="nl">border-right</span><span class="p">:</span> <span class="m">52px</span> <span class="nb">solid</span> <span class="nb">transparent</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.hex</span> <span class="nc">.middle</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">103px</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">63px</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#ff6600</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.hex</span> <span class="nc">.middle</span><span class="nd">:hover</span> <span class="p">&#123;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#000</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.hex</span> <span class="nc">.bottom</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">border-top</span><span class="p">:</span> <span class="m">30px</span> <span class="nb">solid</span> <span class="nx">#ff6600</span><span class="p">;</span>
  <span class="nl">border-left</span><span class="p">:</span> <span class="m">52px</span> <span class="nb">solid</span> <span class="nb">transparent</span><span class="p">;</span>
  <span class="nl">border-right</span><span class="p">:</span> <span class="m">52px</span> <span class="nb">solid</span> <span class="nb">transparent</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.hex-row</span> <span class="p">&#123;</span>
  <span class="nl">clear</span><span class="p">:</span> <span class="nb">left</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.hex-row.even</span> <span class="p">&#123;</span>
<span class="p">&#125;</span>

<span class="nc">.tranz</span> <span class="p">&#123;</span>
  <span class="nl">filter</span><span class="p">:</span> <span class="nb">alpha</span><span class="p">(</span><span class="nf">opacity</span><span class="err">=</span><span class="m">50</span><span class="p">);</span> <span class="c">/* internet explorer */</span>
  <span class="nl">-khtml-opacity</span><span class="p">:</span> <span class="m">0.5</span><span class="p">;</span> <span class="c">/* khtml, old safari */</span>
  <span class="nl">-moz-opacity</span><span class="p">:</span> <span class="m">0.5</span><span class="p">;</span> <span class="c">/* mozilla, netscape */</span>
  <span class="nl">opacity</span><span class="p">:</span> <span class="m">0.5</span><span class="p">;</span> <span class="c">/* fx, safari, opera */</span>
<span class="p">&#125;</span>

<span class="nc">.none</span> <span class="p">&#123;</span>
  <span class="nl">visibility</span><span class="p">:</span> <span class="nb">hidden</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.hex</span> <span class="nc">.no-background</span> <span class="p">&#123;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#ff6600</span><span class="p">;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#000</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.hex</span> <span class="nc">.no-background</span><span class="nd">:hover</span> <span class="p">&#123;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="nf">jQuery</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nf">ready</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="cm">/*
   clone = $('.hex_bot').clone();
    
    $('body').after(clone);
    $(clone).addClass('bump_left');
    $(clone).hide();
    

    offset = $('.hex_bot').offset();
    var fromtop = offset.top;

    $(document).scroll(function() &#123;
        doc = $(this);
        dist = $(this).scrollTop();

        if (dist &gt;= fromtop) &#123;
            $(clone).show();
            $('.hex_bot').css(&#123;
                'position': 'fixed',
                'top': '0',

            &#125;);

        &#125; else &#123;
            $('.hex_bot').css(&#123;
                'position': 'relative'
            &#125;);
            $(clone).hide();
        &#125;
    &#125;);

    $('.hex_bot').click(function() &#123;
        $('body,html').animate(&#123;
            scrollTop: 0
        &#125;, 800);
        return false;
    &#125;);*/</span>

  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.middle</span><span class="dl">"</span><span class="p">).</span><span class="nf">click</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nf">addClass</span><span class="p">(</span><span class="dl">"</span><span class="s2">no-background</span><span class="dl">"</span><span class="p">);</span>
  <span class="p">&#125;);</span>

  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">body</span><span class="dl">"</span><span class="p">).</span><span class="nf">click</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.no-background</span><span class="dl">"</span><span class="p">).</span><span class="nf">removeClass</span><span class="p">(</span><span class="dl">"</span><span class="s2">.no-background</span><span class="dl">"</span><span class="p">);</span>
  <span class="p">&#125;);</span>
<span class="p">&#125;);</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/9RtQU/32/">original jsfiddle post</a></p>
