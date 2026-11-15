---
title: "pushboard template (Google Calendar data source)"
date: "2015-02-04T04:30:45.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-e0xmv06n/"
source_id: "e0xmv06n"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/e0xmv06n/"
source_revision: 13
---
<iframe class="code-demo" src="{{ '/content/media/2015/2015-02-04-jsfiddle-e0xmv06n-demo.html' | relative_url }}" title="pushboard template (Google Calendar data source)" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p data-import-note="">an API key was removed from this archived example; some features need a replacement key.</p>
<p>JSONP &amp; Google cal to retrieve dataz</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"http://momentjs.com/downloads/moment.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;img</span> <span class="na">border=</span><span class="s">"0"</span> <span class="na">src=</span><span class="s">"http://i.imgur.com/EhMz9EM.jpg"</span> <span class="nt">/&gt;</span>
<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"header"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"red"</span><span class="nt">&gt;</span>
    + CLICK <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"http://www.pushboardportland.com/"</span><span class="nt">&gt;</span>HERE<span class="nt">&lt;/a&gt;</span> TO ADD AN EVENT
    TO AN UPCOMING WEEK. THIS WORKS BEST IF YOU SUBMIT YOUR EVENTS TO US EARLY.
  <span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;p&gt;</span>
    + VIEW GOOGLE CALENDAR OF ALL UPCOMING EVENTS
    <span class="nt">&lt;a</span>
      <span class="na">href=</span><span class="s">"https://www.google.com/calendar/embed?src=pushboardportland%40gmail.com&amp;ctz=America/Los_Angeles"</span>
      <span class="nt">&gt;</span>HERE<span class="nt">&lt;/a</span>
    <span class="nt">&gt;</span>. YOU CAN SYNC THIS CALENDAR WITH YOUR OWN.
  <span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;p&gt;</span>+ NEW INSTALLMENT EVERY MONDAY.<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"output"</span><span class="nt">&gt;&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">img</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nf">#header</span> <span class="nt">p</span> <span class="p">&#123;</span>
  <span class="nl">font</span><span class="p">:</span>
    <span class="m">0.75em</span> <span class="n">arial</span><span class="p">,</span>
    <span class="nb">sans-serif</span><span class="p">;</span>
  <span class="nl">margin-bottom</span><span class="p">:</span> <span class="m">0.5em</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nt">span</span> <span class="p">&#123;</span>
  <span class="nl">margin-right</span><span class="p">:</span> <span class="m">1em</span><span class="p">;</span>
  <span class="nl">font</span><span class="p">:</span>
    <span class="m">0.8em</span> <span class="n">verdena</span><span class="p">,</span>
    <span class="nb">sans-serif</span><span class="p">;</span>
  <span class="nl">font-family</span><span class="p">:</span> <span class="nb">monospace</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.red</span> <span class="p">&#123;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">red</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.header_date</span> <span class="p">&#123;</span>
  <span class="nl">font</span><span class="p">:</span> <span class="m">1.5em</span> <span class="nb">monospace</span><span class="p">;</span>
  <span class="nl">font-weight</span><span class="p">:</span> <span class="nb">bold</span><span class="p">;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">block</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.name</span> <span class="p">&#123;</span>
<span class="p">&#125;</span>
<span class="nc">.time</span> <span class="p">&#123;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#222</span><span class="p">;</span>
  <span class="nl">text-align</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#fff</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="kd">function</span> <span class="nf">nextMonday</span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="kd">var</span> <span class="nx">d</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">Date</span><span class="p">();</span>

  <span class="k">switch </span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nf">getDay</span><span class="p">())</span> <span class="p">&#123;</span>
    <span class="k">case</span> <span class="mi">0</span><span class="p">:</span>
      <span class="nx">d</span><span class="p">.</span><span class="nf">setDate</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nf">getDate</span><span class="p">()</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span>
      <span class="k">break</span><span class="p">;</span>

    <span class="k">case</span> <span class="mi">2</span><span class="p">:</span>
      <span class="nx">d</span><span class="p">.</span><span class="nf">setDate</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nf">getDate</span><span class="p">()</span> <span class="o">+</span> <span class="mi">6</span><span class="p">);</span>
      <span class="k">break</span><span class="p">;</span>

    <span class="k">case</span> <span class="mi">3</span><span class="p">:</span>
      <span class="nx">d</span><span class="p">.</span><span class="nf">setDate</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nf">getDate</span><span class="p">()</span> <span class="o">+</span> <span class="mi">5</span><span class="p">);</span>
      <span class="k">break</span><span class="p">;</span>

    <span class="k">case</span> <span class="mi">4</span><span class="p">:</span>
      <span class="nx">d</span><span class="p">.</span><span class="nf">setDate</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nf">getDate</span><span class="p">()</span> <span class="o">+</span> <span class="mi">4</span><span class="p">);</span>
      <span class="k">break</span><span class="p">;</span>

    <span class="k">case</span> <span class="mi">5</span><span class="p">:</span>
      <span class="nx">d</span><span class="p">.</span><span class="nf">setDate</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nf">getDate</span><span class="p">()</span> <span class="o">+</span> <span class="mi">3</span><span class="p">);</span>
      <span class="k">break</span><span class="p">;</span>

    <span class="k">case</span> <span class="mi">6</span><span class="p">:</span>
      <span class="nx">d</span><span class="p">.</span><span class="nf">setDate</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nf">getDate</span><span class="p">()</span> <span class="o">+</span> <span class="mi">2</span><span class="p">);</span>
      <span class="k">break</span><span class="p">;</span>
  <span class="p">&#125;</span>

  <span class="k">return</span> <span class="nx">d</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="c1">//pwnwn ngttpigcg45hjul9g0g1v4dadc%40group.calendar.google.com</span>
<span class="c1">//e# edward%40edwardsharp.net</span>
<span class="c1">//pb pushboardportland%40gmail.com</span>
<span class="kd">var</span> <span class="nx">cal_id</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">pushboardportland%40gmail.com</span><span class="dl">"</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">cal_api_key</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">REDACTED_API_KEY</span><span class="dl">"</span><span class="p">;</span>

<span class="kd">var</span> <span class="nx">weekAfterNextMonday</span> <span class="o">=</span> <span class="nf">moment</span><span class="p">(</span><span class="k">new</span> <span class="nc">Date</span><span class="p">(</span><span class="nf">nextMonday</span><span class="p">()));</span>

<span class="nx">weekAfterNextMonday</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span><span class="mi">7</span><span class="p">,</span> <span class="dl">"</span><span class="s2">days</span><span class="dl">"</span><span class="p">);</span>

<span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="nf">nextMonday</span><span class="p">().</span><span class="nf">toISOString</span><span class="p">());</span>
<span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="nx">weekAfterNextMonday</span><span class="p">.</span><span class="nf">toISOString</span><span class="p">());</span>
<span class="kd">var</span> <span class="nx">url</span> <span class="o">=</span>
  <span class="dl">"</span><span class="s2">https://www.googleapis.com/calendar/v3/calendars/</span><span class="dl">"</span> <span class="o">+</span>
  <span class="nx">cal_id</span> <span class="o">+</span>
  <span class="dl">"</span><span class="s2">/events?singleEvents=true&amp;orderBy=startTime&amp;timeMin=</span><span class="dl">"</span> <span class="o">+</span>
  <span class="nf">nextMonday</span><span class="p">().</span><span class="nf">toISOString</span><span class="p">()</span> <span class="o">+</span>
  <span class="dl">"</span><span class="s2">&amp;timeMax=</span><span class="dl">"</span> <span class="o">+</span>
  <span class="nx">weekAfterNextMonday</span><span class="p">.</span><span class="nf">toISOString</span><span class="p">()</span> <span class="o">+</span>
  <span class="dl">"</span><span class="s2">&amp;key=</span><span class="dl">"</span> <span class="o">+</span>
  <span class="nx">cal_api_key</span><span class="p">;</span>

<span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="nx">url</span><span class="p">);</span>

<span class="nx">$</span><span class="p">.</span><span class="nf">getJSON</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">cellEntries</span><span class="p">);</span>

<span class="kd">function</span> <span class="nf">cellEntries</span><span class="p">(</span><span class="nx">json</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="c1">//console.log(json);</span>
  <span class="kd">var</span> <span class="nx">out</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">div</span><span class="dl">"</span><span class="p">);</span>
  <span class="kd">var</span> <span class="nx">p</span><span class="p">;</span>
  <span class="kd">var</span> <span class="nx">dateHeading</span> <span class="o">=</span> <span class="nf">nextMonday</span><span class="p">();</span>
  <span class="kd">var</span> <span class="nx">dateHeadingDay</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>

  <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">json</span><span class="p">.</span><span class="nx">items</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">entry</span> <span class="o">=</span> <span class="nx">json</span><span class="p">.</span><span class="nx">items</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span>

    <span class="k">if </span><span class="p">(</span><span class="nx">p</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">out</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">p</span><span class="p">);</span>
    <span class="p">&#125;</span>
    <span class="nx">p</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">p</span><span class="dl">"</span><span class="p">);</span>

    <span class="kd">var</span> <span class="nx">text</span> <span class="o">=</span> <span class="dl">""</span><span class="p">;</span>

    <span class="kd">var</span> <span class="nx">start</span><span class="p">;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">entry</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">date</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">start</span> <span class="o">=</span> <span class="nx">entry</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">date</span><span class="p">;</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">entry</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">dateTime</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">start</span> <span class="o">=</span> <span class="nx">entry</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">dateTime</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="kd">var</span> <span class="nx">startDateDay</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">Date</span><span class="p">(</span><span class="nx">start</span><span class="p">).</span><span class="nf">getDay</span><span class="p">();</span>
    <span class="c1">//console.log("startDateDay: "+startDateDay+" dateHeadingDay:"+dateHeadingDay);</span>

    <span class="k">if </span><span class="p">(</span><span class="nx">startDateDay</span> <span class="o">!=</span> <span class="nx">dateHeadingDay</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">span</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">span</span><span class="dl">"</span><span class="p">);</span>
      <span class="nx">span</span><span class="p">.</span><span class="nf">setAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">class</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">header_date</span><span class="dl">"</span><span class="p">);</span>

      <span class="nx">text</span> <span class="o">+=</span> <span class="nf">moment</span><span class="p">(</span><span class="nx">start</span><span class="p">).</span><span class="nf">format</span><span class="p">(</span><span class="dl">"</span><span class="s2">dddd, MMMM Do YYYY</span><span class="dl">"</span><span class="p">);</span>

      <span class="nx">span</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nf">createTextNode</span><span class="p">(</span><span class="nx">text</span><span class="p">));</span>
      <span class="nx">p</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">span</span><span class="p">);</span>
      <span class="nx">dateHeadingDay</span> <span class="o">=</span> <span class="nx">startDateDay</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="kd">var</span> <span class="nx">text</span> <span class="o">=</span> <span class="dl">""</span><span class="p">;</span>
    <span class="kd">var</span> <span class="nx">span</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">span</span><span class="dl">"</span><span class="p">);</span>
    <span class="nx">span</span><span class="p">.</span><span class="nf">setAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">class</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">time</span><span class="dl">"</span><span class="p">);</span>
    <span class="nx">text</span> <span class="o">+=</span> <span class="nf">moment</span><span class="p">(</span><span class="nx">start</span><span class="p">).</span><span class="nf">format</span><span class="p">(</span><span class="dl">"</span><span class="s2">h:mma</span><span class="dl">"</span><span class="p">);</span>

    <span class="nx">span</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nf">createTextNode</span><span class="p">(</span><span class="nx">text</span><span class="p">));</span>
    <span class="nx">p</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">span</span><span class="p">);</span>

    <span class="kd">var</span> <span class="nx">span</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">span</span><span class="dl">"</span><span class="p">);</span>
    <span class="nx">span</span><span class="p">.</span><span class="nf">setAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">class</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">description</span><span class="dl">"</span><span class="p">);</span>
    <span class="nx">text</span> <span class="o">=</span> <span class="dl">""</span><span class="p">;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">entry</span><span class="p">.</span><span class="nx">summary</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">text</span> <span class="o">+=</span> <span class="nx">entry</span><span class="p">.</span><span class="nx">summary</span><span class="p">;</span>
      <span class="nx">text</span> <span class="o">+=</span> <span class="dl">"</span><span class="s2"> </span><span class="dl">"</span><span class="p">;</span>
    <span class="p">&#125;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">entry</span><span class="p">.</span><span class="nx">description</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">text</span> <span class="o">+=</span> <span class="nx">entry</span><span class="p">.</span><span class="nx">description</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="nx">span</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nf">createTextNode</span><span class="p">(</span><span class="nx">text</span><span class="p">));</span>
    <span class="nx">p</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">span</span><span class="p">);</span>

    <span class="kd">var</span> <span class="nx">span</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">span</span><span class="dl">"</span><span class="p">);</span>
    <span class="nx">span</span><span class="p">.</span><span class="nf">setAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">class</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">location</span><span class="dl">"</span><span class="p">);</span>
    <span class="nx">text</span> <span class="o">=</span> <span class="dl">""</span><span class="p">;</span>

    <span class="k">if </span><span class="p">(</span><span class="nx">entry</span><span class="p">.</span><span class="nx">location</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">text</span> <span class="o">+=</span> <span class="dl">"</span><span class="s2">@</span><span class="dl">"</span><span class="p">;</span>
      <span class="nx">text</span> <span class="o">+=</span> <span class="nx">entry</span><span class="p">.</span><span class="nx">location</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="nx">span</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nf">createTextNode</span><span class="p">(</span><span class="nx">text</span><span class="p">));</span>
    <span class="nx">p</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">span</span><span class="p">);</span>
  <span class="p">&#125;</span>

  <span class="k">if </span><span class="p">(</span><span class="nx">p</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">out</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">p</span><span class="p">);</span>
  <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
    <span class="nx">out</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nf">createTextNode</span><span class="p">(</span><span class="dl">"</span><span class="s2">there's nothing!</span><span class="dl">"</span><span class="p">));</span>
  <span class="p">&#125;</span>

  <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">output</span><span class="dl">"</span><span class="p">).</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">out</span><span class="p">);</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/e0xmv06n/">original jsfiddle post</a></p>
