---
title: "fullcalendar thing"
date: "2016-08-19T12:58:22.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-ycqa0nt7/"
source_id: "ycqa0nt7"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/ycqa0nt7/"
source_revision: 7
---
<iframe class="code-demo" src="{{ '/content/media/2016/2016-08-19-jsfiddle-ycqa0nt7-demo.html' | relative_url }}" title="fullcalendar thing" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>just a day view</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"http://fullcalendar.io/js/fullcalendar-2.9.1/lib/moment.min.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"http://fullcalendar.io/js/fullcalendar-2.9.1/fullcalendar.min.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;link</span>
  <span class="na">rel=</span><span class="s">"stylesheet"</span>
  <span class="na">href=</span><span class="s">"http://fullcalendar.io/js/fullcalendar-2.9.1/fullcalendar.css"</span>
<span class="nt">/&gt;</span>
<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"calendar"</span><span class="nt">&gt;&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">font-family</span><span class="p">:</span> <span class="s1">"Lucida Grande"</span><span class="p">,</span> <span class="n">Helvetica</span><span class="p">,</span> <span class="n">Arial</span><span class="p">,</span> <span class="n">Verdana</span><span class="p">,</span> <span class="nb">sans-serif</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">14px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.fc-toolbar</span> <span class="p">&#123;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="nf">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nf">ready</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#calendar</span><span class="dl">"</span><span class="p">).</span><span class="nf">fullCalendar</span><span class="p">(&#123;</span>
    <span class="na">header</span><span class="p">:</span> <span class="p">&#123;</span>
      <span class="na">left</span><span class="p">:</span> <span class="dl">""</span><span class="p">,</span>
      <span class="na">center</span><span class="p">:</span> <span class="dl">""</span><span class="p">,</span>
      <span class="na">right</span><span class="p">:</span> <span class="dl">""</span><span class="p">,</span>
    <span class="p">&#125;,</span>
    <span class="na">defaultView</span><span class="p">:</span> <span class="dl">"</span><span class="s2">agendaDay</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">defaultDate</span><span class="p">:</span> <span class="dl">"</span><span class="s2">2016-06-12</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">titleFormat</span><span class="p">:</span> <span class="dl">"</span><span class="s2"> </span><span class="dl">"</span><span class="p">,</span>
    <span class="na">columnFormat</span><span class="p">:</span> <span class="dl">"</span><span class="s2"> </span><span class="dl">"</span><span class="p">,</span>
    <span class="na">editable</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
    <span class="na">height</span><span class="p">:</span> <span class="dl">"</span><span class="s2">auto</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">slotEventOverlap</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
    <span class="na">eventLimit</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span> <span class="c1">// allow "more" link when too many events</span>
    <span class="na">displayEventEnd</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
    <span class="na">minTime</span><span class="p">:</span> <span class="dl">"</span><span class="s2">10:30:00</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">maxTime</span><span class="p">:</span> <span class="dl">"</span><span class="s2">22:00:00</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">eventBackgroundColor</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#ff6600</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">eventBorderColor</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#ff6600</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">allDaySlot</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
    <span class="na">events</span><span class="p">:</span> <span class="p">[</span>
      <span class="p">&#123;</span>
        <span class="na">title</span><span class="p">:</span> <span class="dl">"</span><span class="s2">All Day Event</span><span class="dl">"</span><span class="p">,</span>
        <span class="na">start</span><span class="p">:</span> <span class="dl">"</span><span class="s2">2016-06-01</span><span class="dl">"</span><span class="p">,</span>
      <span class="p">&#125;,</span>
      <span class="p">&#123;</span>
        <span class="na">title</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Long Event</span><span class="dl">"</span><span class="p">,</span>
        <span class="na">start</span><span class="p">:</span> <span class="dl">"</span><span class="s2">2016-06-07</span><span class="dl">"</span><span class="p">,</span>
        <span class="na">end</span><span class="p">:</span> <span class="dl">"</span><span class="s2">2016-06-10</span><span class="dl">"</span><span class="p">,</span>
      <span class="p">&#125;,</span>
      <span class="p">&#123;</span>
        <span class="na">id</span><span class="p">:</span> <span class="mi">999</span><span class="p">,</span>
        <span class="na">title</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Repeating Event</span><span class="dl">"</span><span class="p">,</span>
        <span class="na">start</span><span class="p">:</span> <span class="dl">"</span><span class="s2">2016-06-09T16:00:00</span><span class="dl">"</span><span class="p">,</span>
      <span class="p">&#125;,</span>
      <span class="p">&#123;</span>
        <span class="na">id</span><span class="p">:</span> <span class="mi">999</span><span class="p">,</span>
        <span class="na">title</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Repeating Event</span><span class="dl">"</span><span class="p">,</span>
        <span class="na">start</span><span class="p">:</span> <span class="dl">"</span><span class="s2">2016-06-16T16:00:00</span><span class="dl">"</span><span class="p">,</span>
      <span class="p">&#125;,</span>
      <span class="p">&#123;</span>
        <span class="na">title</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Meeting</span><span class="dl">"</span><span class="p">,</span>
        <span class="na">start</span><span class="p">:</span> <span class="dl">"</span><span class="s2">2016-06-12T10:30:00</span><span class="dl">"</span><span class="p">,</span>
        <span class="na">end</span><span class="p">:</span> <span class="dl">"</span><span class="s2">2016-06-12T12:30:00</span><span class="dl">"</span><span class="p">,</span>
      <span class="p">&#125;,</span>
      <span class="p">&#123;</span>
        <span class="na">title</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Lunch</span><span class="dl">"</span><span class="p">,</span>
        <span class="na">start</span><span class="p">:</span> <span class="dl">"</span><span class="s2">2016-06-12T12:00:00</span><span class="dl">"</span><span class="p">,</span>
      <span class="p">&#125;,</span>
      <span class="p">&#123;</span>
        <span class="na">title</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Meeting</span><span class="dl">"</span><span class="p">,</span>
        <span class="na">start</span><span class="p">:</span> <span class="dl">"</span><span class="s2">2016-06-12T14:30:00</span><span class="dl">"</span><span class="p">,</span>
      <span class="p">&#125;,</span>
      <span class="p">&#123;</span>
        <span class="na">title</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Happy Hour</span><span class="dl">"</span><span class="p">,</span>
        <span class="na">start</span><span class="p">:</span> <span class="dl">"</span><span class="s2">2016-06-12T17:30:00</span><span class="dl">"</span><span class="p">,</span>
      <span class="p">&#125;,</span>
      <span class="p">&#123;</span>
        <span class="na">title</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Dinner</span><span class="dl">"</span><span class="p">,</span>
        <span class="na">start</span><span class="p">:</span> <span class="dl">"</span><span class="s2">2016-06-12T20:00:00</span><span class="dl">"</span><span class="p">,</span>
      <span class="p">&#125;,</span>
      <span class="p">&#123;</span>
        <span class="na">title</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Birthday Party</span><span class="dl">"</span><span class="p">,</span>
        <span class="na">start</span><span class="p">:</span> <span class="dl">"</span><span class="s2">2016-06-13T07:00:00</span><span class="dl">"</span><span class="p">,</span>
      <span class="p">&#125;,</span>
      <span class="p">&#123;</span>
        <span class="na">title</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Click for Google</span><span class="dl">"</span><span class="p">,</span>
        <span class="na">url</span><span class="p">:</span> <span class="dl">"</span><span class="s2">http://google.com/</span><span class="dl">"</span><span class="p">,</span>
        <span class="na">start</span><span class="p">:</span> <span class="dl">"</span><span class="s2">2016-06-28</span><span class="dl">"</span><span class="p">,</span>
      <span class="p">&#125;,</span>
    <span class="p">],</span>
  <span class="p">&#125;);</span>
<span class="p">&#125;);</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/ycqa0nt7/">original jsfiddle post</a></p>
