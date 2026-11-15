---
title: "pushboard template (Google Spreadsheets backend)"
date: "2015-01-30T07:36:45.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-Lxctgnge/"
source_id: "Lxctgnge"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/Lxctgnge/13/"
source_revision: 13
---
<iframe class="code-demo" src="{{ '/content/media/2015/2015-01-30-jsfiddle-Lxctgnge-demo.html' | relative_url }}" title="pushboard template (Google Spreadsheets backend)" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>JSONP &amp; Google Spreadsheetz to retrieve dataz</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;img</span> <span class="na">border=</span><span class="s">"0"</span> <span class="na">src=</span><span class="s">"http://i.imgur.com/EhMz9EM.jpg"</span> <span class="nt">/&gt;</span>
<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"header"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"red"</span><span class="nt">&gt;</span>
    + CLICK <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"http://wut?"</span><span class="nt">&gt;</span>HERE<span class="nt">&lt;/a&gt;</span> TO ADD AN EVENT TO AN UPCOMING WEEK.
    THIS WORKS BEST IF YOU SUBMIT YOUR EVENTS TO US EARLY.
  <span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;p&gt;</span>
    + VIEW GOOGLE CALENDAR OF ALL UPCOMING EVENTS
    <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"http://wut?"</span><span class="nt">&gt;</span>HERE<span class="nt">&lt;/a&gt;</span>. YOU CAN SYNC THIS CALENDAR WITH YOUR OWN.
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
  <span class="nl">margin-bottom</span><span class="p">:</span> <span class="m">1em</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nt">p</span> <span class="p">&#123;</span>
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
<pre class="highlight"><code class="language-javascript"><span class="kd">var</span> <span class="nx">spreadsheet_id</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">1PugfDgRTtRQosAqCb-C9OaRr0rvpFdpcQrP5tZA5oLE</span><span class="dl">"</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">url</span> <span class="o">=</span>
  <span class="dl">"</span><span class="s2">https://spreadsheets.google.com/feeds/cells/</span><span class="dl">"</span> <span class="o">+</span>
  <span class="nx">spreadsheet_id</span> <span class="o">+</span>
  <span class="dl">"</span><span class="s2">/od6/public/values?alt=json-in-script&amp;callback=?</span><span class="dl">"</span><span class="p">;</span>

<span class="nx">$</span><span class="p">.</span><span class="nf">getJSON</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">cellEntries</span><span class="p">);</span>

<span class="kd">function</span> <span class="nf">cellEntries</span><span class="p">(</span><span class="nx">json</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="kd">var</span> <span class="nx">out</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">div</span><span class="dl">"</span><span class="p">);</span>
  <span class="kd">var</span> <span class="nx">p</span><span class="p">;</span>
  <span class="kd">var</span> <span class="nx">header_col</span> <span class="o">=</span> <span class="p">[];</span>
  <span class="kd">var</span> <span class="nx">number_of_header_cellz</span> <span class="o">=</span> <span class="mi">9</span><span class="p">;</span>

  <span class="c1">//collect column namez</span>
  <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">number_of_header_cellz</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">header_col</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">json</span><span class="p">.</span><span class="nx">feed</span><span class="p">.</span><span class="nx">entry</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">content</span><span class="p">.</span><span class="nx">$t</span><span class="p">;</span>
  <span class="p">&#125;</span>

  <span class="c1">//loop through all the cellz, skip the header cellz.</span>
  <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">number_of_header_cellz</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">json</span><span class="p">.</span><span class="nx">feed</span><span class="p">.</span><span class="nx">entry</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">entry</span> <span class="o">=</span> <span class="nx">json</span><span class="p">.</span><span class="nx">feed</span><span class="p">.</span><span class="nx">entry</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span>

    <span class="c1">//check if we have a cell from column 1 OR 2, meaning it will indicate a group (of events for a single day)</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">entry</span><span class="p">.</span><span class="nx">gs$cell</span><span class="p">.</span><span class="nx">col</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">1</span><span class="dl">"</span> <span class="o">||</span> <span class="nx">entry</span><span class="p">.</span><span class="nx">gs$cell</span><span class="p">.</span><span class="nx">col</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">2</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">p</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">out</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">p</span><span class="p">);</span>
      <span class="p">&#125;</span>
      <span class="nx">p</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">p</span><span class="dl">"</span><span class="p">);</span>
    <span class="p">&#125;</span>

    <span class="kd">var</span> <span class="nx">span</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">span</span><span class="dl">"</span><span class="p">);</span>
    <span class="kd">var</span> <span class="nx">this_header_col</span> <span class="o">=</span> <span class="nx">header_col</span><span class="p">[</span><span class="nx">entry</span><span class="p">.</span><span class="nx">gs$cell</span><span class="p">.</span><span class="nx">col</span> <span class="o">-</span> <span class="mi">1</span><span class="p">];</span>
    <span class="nx">span</span><span class="p">.</span><span class="nf">setAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">class</span><span class="dl">"</span><span class="p">,</span> <span class="nx">this_header_col</span><span class="p">);</span>

    <span class="k">if </span><span class="p">(</span><span class="nx">this_header_col</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">link_text</span><span class="dl">"</span> <span class="o">||</span> <span class="nx">this_header_col</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">link_url</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">this_header_col</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">link_text</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="c1">//need to do this just once, so hence the second if...</span>
        <span class="kd">var</span> <span class="nx">a</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">a</span><span class="dl">"</span><span class="p">);</span>
        <span class="kd">var</span> <span class="nx">linkText</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createTextNode</span><span class="p">(</span><span class="nx">entry</span><span class="p">.</span><span class="nx">content</span><span class="p">.</span><span class="nx">$t</span><span class="p">);</span>
        <span class="nx">a</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">linkText</span><span class="p">);</span>
        <span class="c1">//jump one ahead to grab the link (this is a little hacky)</span>
        <span class="nx">a</span><span class="p">.</span><span class="nx">title</span> <span class="o">=</span> <span class="nx">json</span><span class="p">.</span><span class="nx">feed</span><span class="p">.</span><span class="nx">entry</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">].</span><span class="nx">gs$cell</span><span class="p">.</span><span class="nx">$t</span><span class="p">;</span>
        <span class="nx">a</span><span class="p">.</span><span class="nx">href</span> <span class="o">=</span> <span class="nx">json</span><span class="p">.</span><span class="nx">feed</span><span class="p">.</span><span class="nx">entry</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">].</span><span class="nx">gs$cell</span><span class="p">.</span><span class="nx">$t</span><span class="p">;</span>

        <span class="nx">span</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span>
        <span class="nx">p</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">span</span><span class="p">);</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
      <span class="nx">span</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nf">createTextNode</span><span class="p">(</span><span class="nx">entry</span><span class="p">.</span><span class="nx">content</span><span class="p">.</span><span class="nx">$t</span><span class="p">));</span>
      <span class="nx">p</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">span</span><span class="p">);</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>

  <span class="nx">out</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">p</span><span class="p">);</span>
  <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">output</span><span class="dl">"</span><span class="p">).</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">out</span><span class="p">);</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/Lxctgnge/13/">original jsfiddle post</a></p>
