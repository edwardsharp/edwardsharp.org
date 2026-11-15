---
title: "pushboard template (Google Spreadsheets backend)"
date: "2015-01-28T10:44:37.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-ao5tfes2/"
source_id: "ao5tfes2"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/ao5tfes2/6/"
source_revision: 6
---
<iframe class="code-demo" src="{{ '/content/media/2015/2015-01-28-jsfiddle-ao5tfes2-demo.html' | relative_url }}" title="pushboard template (Google Spreadsheets backend)" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>JSONP &amp; Google Spreadsheetz to retrieve dataz</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"results"</span><span class="nt">&gt;&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">td</span> <span class="p">&#123;</span>
  <span class="nl">padding-right</span><span class="p">:</span> <span class="m">1em</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.name</span> <span class="p">&#123;</span>
  <span class="nl">font-weight</span><span class="p">:</span> <span class="m">900</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.date</span> <span class="p">&#123;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#666</span><span class="p">;</span>
  <span class="nl">border</span><span class="p">:</span> <span class="nx">#fff</span> <span class="m">0.75em</span> <span class="nb">solid</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#ccc</span><span class="p">;</span>
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
  <span class="kd">var</span> <span class="nx">table</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">table</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">table</span><span class="p">.</span><span class="nf">setAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">id</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">output</span><span class="dl">"</span><span class="p">);</span>
  <span class="kd">var</span> <span class="nx">tbody</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">tbody</span><span class="dl">"</span><span class="p">);</span>

  <span class="kd">var</span> <span class="nx">tr</span><span class="p">;</span>
  <span class="kd">var</span> <span class="nx">thead</span><span class="p">;</span>
  <span class="kd">var</span> <span class="nx">header_col</span> <span class="o">=</span> <span class="p">[];</span>
  <span class="kd">var</span> <span class="nx">number_of_header_cellz</span> <span class="o">=</span> <span class="mi">8</span><span class="p">;</span>

  <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">json</span><span class="p">.</span><span class="nx">feed</span><span class="p">.</span><span class="nx">entry</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">number_of_header_cellz</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">header_col</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">json</span><span class="p">.</span><span class="nx">feed</span><span class="p">.</span><span class="nx">entry</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">content</span><span class="p">.</span><span class="nx">$t</span><span class="p">;</span>
      <span class="k">continue</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="kd">var</span> <span class="nx">entry</span> <span class="o">=</span> <span class="nx">json</span><span class="p">.</span><span class="nx">feed</span><span class="p">.</span><span class="nx">entry</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span>

    <span class="k">if </span><span class="p">(</span><span class="nx">entry</span><span class="p">.</span><span class="nx">gs$cell</span><span class="p">.</span><span class="nx">col</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">1</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">tr</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">tbody</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">tr</span><span class="p">);</span>
      <span class="p">&#125;</span>
      <span class="nx">tr</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">tr</span><span class="dl">"</span><span class="p">);</span>
    <span class="p">&#125;</span>

    <span class="kd">var</span> <span class="nx">td</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">td</span><span class="dl">"</span><span class="p">);</span>
    <span class="nx">td</span><span class="p">.</span><span class="nf">setAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">class</span><span class="dl">"</span><span class="p">,</span> <span class="nx">header_col</span><span class="p">[</span><span class="nx">i</span> <span class="o">%</span> <span class="nx">number_of_header_cellz</span><span class="p">]);</span>
    <span class="nx">td</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nf">createTextNode</span><span class="p">(</span><span class="nx">entry</span><span class="p">.</span><span class="nx">content</span><span class="p">.</span><span class="nx">$t</span><span class="p">));</span>
    <span class="nx">tr</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">td</span><span class="p">);</span>
  <span class="p">&#125;</span>

  <span class="nx">tbody</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">tr</span><span class="p">);</span>
  <span class="nx">table</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">tbody</span><span class="p">);</span>
  <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">results</span><span class="dl">"</span><span class="p">).</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">table</span><span class="p">);</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/ao5tfes2/6/">original jsfiddle post</a></p>
