---
title: "jsfiddle / 58xwq4ty"
date: "2018-07-03T16:52:31.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css","javascript"]
permalink: "/post/jsfiddle-58xwq4ty/"
source_id: "58xwq4ty"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/58xwq4ty/11/"
source_revision: 11
---
<iframe class="code-demo" src="{{ '/content/media/2018/2018-07-03-jsfiddle-58xwq4ty-demo.html' | relative_url }}" title="jsfiddle / 58xwq4ty" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://content.jwplatform.com/libraries/IDzF9Zmk.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"player-container"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"player"</span><span class="nt">&gt;&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"sidebar"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"searchbox"</span> <span class="na">class=</span><span class="s">"searchbox"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"search"</span><span class="nt">&gt;</span>Search<span class="nt">&lt;/label&gt;</span>
      <span class="nt">&lt;span</span> <span class="na">id=</span><span class="s">"match"</span> <span class="na">class=</span><span class="s">"match"</span><span class="nt">&gt;</span>0 of 0<span class="nt">&lt;/span&gt;</span>
      <span class="nt">&lt;input</span> <span class="na">id=</span><span class="s">"search"</span> <span class="na">type=</span><span class="s">"search"</span> <span class="na">class=</span><span class="s">"search"</span> <span class="nt">/&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"transcript"</span> <span class="na">class=</span><span class="s">"transcript"</span><span class="nt">&gt;&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">black</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">white</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.player-container</span> <span class="p">&#123;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">flex</span><span class="p">;</span>
  <span class="nl">justify-content</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
  <span class="nl">flex-wrap</span><span class="p">:</span> <span class="nb">wrap</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.sidebar</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">360px</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">360px</span><span class="p">;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#000</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">white</span><span class="p">;</span>
  <span class="nl">font-family</span><span class="p">:</span> <span class="n">Arial</span><span class="p">,</span> <span class="nb">sans-serif</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="k">@media</span> <span class="nb">screen</span> <span class="n">and</span> <span class="p">(</span><span class="n">max-width</span><span class="p">:</span> <span class="m">1080px</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nc">.sidebar</span> <span class="p">&#123;</span>
    <span class="nl">width</span><span class="p">:</span> <span class="m">640px</span><span class="p">;</span>
    <span class="nl">margin-bottom</span><span class="p">:</span> <span class="m">20px</span><span class="p">;</span>
  <span class="p">&#125;</span>
<span class="p">&#125;</span>

<span class="nc">.sidebar</span> <span class="nt">h3</span> <span class="p">&#123;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">20px</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">14px</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#fff</span><span class="p">;</span>
  <span class="nl">text-align</span><span class="p">:</span> <span class="nb">left</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.searchbox</span> <span class="p">&#123;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">10px</span> <span class="m">20px</span><span class="p">;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">block</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">relative</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.searchbox</span> <span class="nt">input</span> <span class="p">&#123;</span>
  <span class="nl">line-height</span><span class="p">:</span> <span class="m">20px</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">16px</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#000</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">5px</span> <span class="m">20px</span> <span class="m">5px</span> <span class="m">30px</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#fff</span>
    <span class="nf">url</span><span class="p">(</span><span class="s1">"//s3.amazonaws.com/demo.jwplayer.com/interactive-transcript/search.png"</span><span class="p">)</span>
    <span class="nb">no-repeat</span> <span class="nb">top</span> <span class="nb">left</span><span class="p">;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">3px</span><span class="p">;</span>
  <span class="nl">border</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.searchbox</span> <span class="nc">.match</span> <span class="p">&#123;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">right</span><span class="p">:</span> <span class="m">10px</span><span class="p">;</span>
  <span class="c">/* top: 20px; */</span>
  <span class="nl">line-height</span><span class="p">:</span> <span class="m">20px</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">14px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.transcript</span> <span class="p">&#123;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">20px</span><span class="p">;</span>
  <span class="nl">max-height</span><span class="p">:</span> <span class="m">80%</span><span class="p">;</span>
  <span class="nl">overflow</span><span class="p">:</span> <span class="nb">auto</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.transcript</span> <span class="nt">p</span> <span class="p">&#123;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">15px</span><span class="p">;</span>
  <span class="nl">overflow</span><span class="p">:</span> <span class="nb">hidden</span><span class="p">;</span>
  <span class="nl">text-align</span><span class="p">:</span> <span class="nb">left</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#fff</span><span class="p">;</span>
  <span class="nl">line-height</span><span class="p">:</span> <span class="m">20px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.transcript</span> <span class="nt">span</span> <span class="p">&#123;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">inline</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">4px</span> <span class="m">2px</span><span class="p">;</span>
  <span class="nl">line-height</span><span class="p">:</span> <span class="m">24px</span><span class="p">;</span>
  <span class="nl">cursor</span><span class="p">:</span> <span class="nb">pointer</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#fff</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.transcript</span> <span class="nt">span</span><span class="nc">.current</span> <span class="p">&#123;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#ff6600</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#000</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.transcript</span> <span class="nt">span</span><span class="nd">:not</span><span class="o">(</span><span class="nc">.current</span><span class="o">)</span><span class="nd">:hover</span> <span class="p">&#123;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#ff6600</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.transcript</span> <span class="nt">span</span> <span class="nt">em</span> <span class="p">&#123;</span>
  <span class="nl">font-style</span><span class="p">:</span> <span class="nb">normal</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#666</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#fff</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.transcript</span> <span class="nt">span</span> <span class="nt">em</span><span class="nc">.current</span> <span class="p">&#123;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#ff0046</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.transcript</span> <span class="nt">h4</span> <span class="p">&#123;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">25px</span> <span class="m">0</span> <span class="m">15px</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">text-align</span><span class="p">:</span> <span class="nb">left</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#fff</span><span class="p">;</span>
  <span class="nl">font-weight</span><span class="p">:</span> <span class="nb">bold</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="kd">var</span> <span class="nx">chapters</span> <span class="o">=</span> <span class="p">[];</span>
<span class="kd">var</span> <span class="nx">captions</span> <span class="o">=</span> <span class="p">[];</span>
<span class="kd">var</span> <span class="nx">caption</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">matches</span> <span class="o">=</span> <span class="p">[];</span>
<span class="kd">var</span> <span class="nx">query</span> <span class="o">=</span> <span class="dl">""</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">cycle</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span>

<span class="kd">var</span> <span class="nx">transcript</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">transcript</span><span class="dl">"</span><span class="p">);</span>
<span class="kd">var</span> <span class="nx">search</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">search</span><span class="dl">"</span><span class="p">);</span>
<span class="kd">var</span> <span class="nx">match</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">match</span><span class="dl">"</span><span class="p">);</span>

<span class="c1">// Setup JW Player</span>
<span class="nf">jwplayer</span><span class="p">(</span><span class="dl">"</span><span class="s2">player</span><span class="dl">"</span><span class="p">).</span><span class="nf">setup</span><span class="p">(&#123;</span>
  <span class="na">file</span><span class="p">:</span> <span class="dl">"</span><span class="s2">//content.jwplatform.com/manifests/3p683El7.m3u8</span><span class="dl">"</span><span class="p">,</span>
  <span class="na">image</span><span class="p">:</span> <span class="dl">"</span><span class="s2">//content.jwplatform.com/thumbs/3p683El7-640.jpg</span><span class="dl">"</span><span class="p">,</span>
  <span class="na">tracks</span><span class="p">:</span> <span class="p">[</span>
    <span class="p">&#123;</span>
      <span class="na">file</span><span class="p">:</span> <span class="dl">"</span><span class="s2">https://raw.githubusercontent.com/jwplayer/jwdeveloper-demos/master/demos/innovation/interactive-transcripts/assets/chapters.vtt</span><span class="dl">"</span><span class="p">,</span>
      <span class="na">kind</span><span class="p">:</span> <span class="dl">"</span><span class="s2">chapters</span><span class="dl">"</span><span class="p">,</span>
    <span class="p">&#125;,</span>
    <span class="p">&#123;</span>
      <span class="na">file</span><span class="p">:</span> <span class="dl">"</span><span class="s2">https://raw.githubusercontent.com/jwplayer/jwdeveloper-demos/master/demos/innovation/interactive-transcripts/assets/captions.vtt</span><span class="dl">"</span><span class="p">,</span>
      <span class="na">kind</span><span class="p">:</span> <span class="dl">"</span><span class="s2">captions</span><span class="dl">"</span><span class="p">,</span>
    <span class="p">&#125;,</span>
    <span class="p">&#123;</span>
      <span class="na">file</span><span class="p">:</span> <span class="dl">"</span><span class="s2">//content.jwplatform.com/strips/3p683El7-120.vtt</span><span class="dl">"</span><span class="p">,</span>
      <span class="na">kind</span><span class="p">:</span> <span class="dl">"</span><span class="s2">thumbnails</span><span class="dl">"</span><span class="p">,</span>
    <span class="p">&#125;,</span>
  <span class="p">],</span>
  <span class="na">displaytitle</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
  <span class="na">width</span><span class="p">:</span> <span class="mi">640</span><span class="p">,</span>
  <span class="na">height</span><span class="p">:</span> <span class="mi">360</span><span class="p">,</span>
<span class="p">&#125;);</span>
<span class="nf">jwplayer</span><span class="p">().</span><span class="nf">addButton</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">https://raw.githubusercontent.com/jwplayer/jwdeveloper-demos/master/demos/innovation/interactive-transcripts/assets/download.png</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">Download Slides</span><span class="dl">"</span><span class="p">,</span>
  <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">href</span> <span class="o">=</span>
      <span class="dl">"</span><span class="s2">https://raw.githubusercontent.com/jwplayer/jwdeveloper-demos/master/demos/innovation/interactive-transcripts/assets/state-html5-video.pdf</span><span class="dl">"</span><span class="p">;</span>
  <span class="p">&#125;,</span>
  <span class="dl">"</span><span class="s2">download</span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>

<span class="c1">// Load chapters / captions</span>
<span class="nf">jwplayer</span><span class="p">().</span><span class="nf">on</span><span class="p">(</span><span class="dl">"</span><span class="s2">ready</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="kd">var</span> <span class="nx">r</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">XMLHttpRequest</span><span class="p">();</span>
  <span class="nx">r</span><span class="p">.</span><span class="nx">onreadystatechange</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">r</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">==</span> <span class="mi">4</span> <span class="o">&amp;&amp;</span> <span class="nx">r</span><span class="p">.</span><span class="nx">status</span> <span class="o">==</span> <span class="mi">200</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">t</span> <span class="o">=</span> <span class="nx">r</span><span class="p">.</span><span class="nx">responseText</span><span class="p">.</span><span class="nf">split</span><span class="p">(</span><span class="dl">"</span><span class="se">\n\n</span><span class="dl">"</span><span class="p">);</span>
      <span class="nx">t</span><span class="p">.</span><span class="nf">shift</span><span class="p">();</span>
      <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">t</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="kd">var</span> <span class="nx">c</span> <span class="o">=</span> <span class="nf">parse</span><span class="p">(</span><span class="nx">t</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span>
        <span class="nx">chapters</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">c</span><span class="p">);</span>
      <span class="p">&#125;</span>
      <span class="nf">loadCaptions</span><span class="p">();</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;;</span>
  <span class="nx">r</span><span class="p">.</span><span class="nf">open</span><span class="p">(</span>
    <span class="dl">"</span><span class="s2">GET</span><span class="dl">"</span><span class="p">,</span>
    <span class="dl">"</span><span class="s2">https://raw.githubusercontent.com/jwplayer/jwdeveloper-demos/master/demos/innovation/interactive-transcripts/assets/chapters.vtt</span><span class="dl">"</span><span class="p">,</span>
    <span class="kc">true</span><span class="p">,</span>
  <span class="p">);</span>
  <span class="nx">r</span><span class="p">.</span><span class="nf">send</span><span class="p">();</span>
<span class="p">&#125;);</span>
<span class="kd">function</span> <span class="nf">loadCaptions</span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="kd">var</span> <span class="nx">r</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">XMLHttpRequest</span><span class="p">();</span>
  <span class="nx">r</span><span class="p">.</span><span class="nx">onreadystatechange</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">r</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">==</span> <span class="mi">4</span> <span class="o">&amp;&amp;</span> <span class="nx">r</span><span class="p">.</span><span class="nx">status</span> <span class="o">==</span> <span class="mi">200</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">t</span> <span class="o">=</span> <span class="nx">r</span><span class="p">.</span><span class="nx">responseText</span><span class="p">.</span><span class="nf">split</span><span class="p">(</span><span class="dl">"</span><span class="se">\n\n</span><span class="dl">"</span><span class="p">);</span>
      <span class="nx">t</span><span class="p">.</span><span class="nf">shift</span><span class="p">();</span>
      <span class="kd">var</span> <span class="nx">h</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">&lt;p&gt;</span><span class="dl">"</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">s</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
      <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">t</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="kd">var</span> <span class="nx">c</span> <span class="o">=</span> <span class="nf">parse</span><span class="p">(</span><span class="nx">t</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">s</span> <span class="o">&lt;</span> <span class="nx">chapters</span><span class="p">.</span><span class="nx">length</span> <span class="o">&amp;&amp;</span> <span class="nx">c</span><span class="p">.</span><span class="nx">begin</span> <span class="o">&gt;</span> <span class="nx">chapters</span><span class="p">[</span><span class="nx">s</span><span class="p">].</span><span class="nx">begin</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">h</span> <span class="o">+=</span> <span class="dl">"</span><span class="s2">&lt;/p&gt;&lt;h4&gt;</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">chapters</span><span class="p">[</span><span class="nx">s</span><span class="p">].</span><span class="nx">text</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">&lt;/h4&gt;&lt;p&gt;</span><span class="dl">"</span><span class="p">;</span>
          <span class="nx">s</span><span class="o">++</span><span class="p">;</span>
        <span class="p">&#125;</span>
        <span class="nx">h</span> <span class="o">+=</span> <span class="dl">"</span><span class="s2">&lt;span id='caption</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">i</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">'&gt;</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">c</span><span class="p">.</span><span class="nx">text</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">&lt;/span&gt;</span><span class="dl">"</span><span class="p">;</span>
        <span class="nx">captions</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">c</span><span class="p">);</span>
      <span class="p">&#125;</span>
      <span class="nx">transcript</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="nx">h</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">&lt;/p&gt;</span><span class="dl">"</span><span class="p">;</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;;</span>
  <span class="nx">r</span><span class="p">.</span><span class="nf">open</span><span class="p">(</span>
    <span class="dl">"</span><span class="s2">GET</span><span class="dl">"</span><span class="p">,</span>
    <span class="dl">"</span><span class="s2">https://raw.githubusercontent.com/jwplayer/jwdeveloper-demos/master/demos/innovation/interactive-transcripts/assets/captions.vtt</span><span class="dl">"</span><span class="p">,</span>
    <span class="kc">true</span><span class="p">,</span>
  <span class="p">);</span>
  <span class="nx">r</span><span class="p">.</span><span class="nf">send</span><span class="p">();</span>
<span class="p">&#125;</span>
<span class="kd">function</span> <span class="nf">parse</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="kd">var</span> <span class="nx">a</span> <span class="o">=</span> <span class="nx">d</span><span class="p">.</span><span class="nf">split</span><span class="p">(</span><span class="dl">"</span><span class="se">\n</span><span class="dl">"</span><span class="p">);</span>
  <span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">a</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nf">indexOf</span><span class="p">(</span><span class="dl">"</span><span class="s2"> --&gt; </span><span class="dl">"</span><span class="p">);</span>
  <span class="kd">var</span> <span class="nx">t</span> <span class="o">=</span> <span class="nx">a</span><span class="p">[</span><span class="mi">2</span><span class="p">];</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="mi">3</span><span class="p">])</span> <span class="p">&#123;</span>
    <span class="nx">t</span> <span class="o">+=</span> <span class="dl">"</span><span class="s2"> </span><span class="dl">"</span> <span class="o">+</span> <span class="nx">a</span><span class="p">[</span><span class="mi">3</span><span class="p">];</span>
  <span class="p">&#125;</span>
  <span class="nx">t</span> <span class="o">=</span> <span class="nx">t</span><span class="p">.</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/&amp;/g</span><span class="p">,</span> <span class="dl">"</span><span class="s2">&amp;amp;</span><span class="dl">"</span><span class="p">).</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/&lt;/g</span><span class="p">,</span> <span class="dl">"</span><span class="s2">&amp;lt;</span><span class="dl">"</span><span class="p">).</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/&gt;/g</span><span class="p">,</span> <span class="dl">"</span><span class="s2">&amp;gt;</span><span class="dl">"</span><span class="p">);</span>
  <span class="k">return</span> <span class="p">&#123;</span>
    <span class="na">begin</span><span class="p">:</span> <span class="nf">seconds</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nf">substr</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">i</span><span class="p">)),</span>
    <span class="na">btext</span><span class="p">:</span> <span class="nx">a</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nf">substr</span><span class="p">(</span><span class="mi">3</span><span class="p">,</span> <span class="nx">i</span> <span class="o">-</span> <span class="mi">7</span><span class="p">),</span>
    <span class="na">end</span><span class="p">:</span> <span class="nf">seconds</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nf">substr</span><span class="p">(</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">5</span><span class="p">)),</span>
    <span class="na">text</span><span class="p">:</span> <span class="nx">t</span><span class="p">,</span>
  <span class="p">&#125;;</span>
<span class="p">&#125;</span>
<span class="kd">function</span> <span class="nf">seconds</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="kd">var</span> <span class="nx">a</span> <span class="o">=</span> <span class="nx">s</span><span class="p">.</span><span class="nf">split</span><span class="p">(</span><span class="dl">"</span><span class="s2">:</span><span class="dl">"</span><span class="p">);</span>
  <span class="kd">var</span> <span class="nx">r</span> <span class="o">=</span> <span class="nc">Number</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="nx">a</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">])</span> <span class="o">+</span> <span class="nc">Number</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="nx">a</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">2</span><span class="p">])</span> <span class="o">*</span> <span class="mi">60</span><span class="p">;</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">2</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">r</span> <span class="o">+=</span> <span class="nc">Number</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="nx">a</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">3</span><span class="p">])</span> <span class="o">*</span> <span class="mi">3600</span><span class="p">;</span>
  <span class="p">&#125;</span>
  <span class="k">return</span> <span class="nx">r</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="c1">// Highlight current caption and chapter</span>
<span class="nf">jwplayer</span><span class="p">().</span><span class="nf">on</span><span class="p">(</span><span class="dl">"</span><span class="s2">time</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="kd">var</span> <span class="nx">p</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">position</span><span class="p">;</span>
  <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">captions</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">captions</span><span class="p">[</span><span class="nx">j</span><span class="p">].</span><span class="nx">begin</span> <span class="o">&lt;</span> <span class="nx">p</span> <span class="o">&amp;&amp;</span> <span class="nx">captions</span><span class="p">[</span><span class="nx">j</span><span class="p">].</span><span class="nx">end</span> <span class="o">&gt;</span> <span class="nx">p</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">j</span> <span class="o">!=</span> <span class="nx">caption</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="kd">var</span> <span class="nx">c</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">caption</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">j</span><span class="p">);</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">caption</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">caption</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">caption</span><span class="p">).</span><span class="nx">className</span> <span class="o">=</span> <span class="dl">""</span><span class="p">;</span>
        <span class="p">&#125;</span>
        <span class="nx">c</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">current</span><span class="dl">"</span><span class="p">;</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">query</span> <span class="o">==</span> <span class="dl">""</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">transcript</span><span class="p">.</span><span class="nx">scrollTop</span> <span class="o">=</span> <span class="nx">c</span><span class="p">.</span><span class="nx">offsetTop</span> <span class="o">-</span> <span class="nx">transcript</span><span class="p">.</span><span class="nx">offsetTop</span> <span class="o">-</span> <span class="mi">40</span><span class="p">;</span>
        <span class="p">&#125;</span>
        <span class="nx">caption</span> <span class="o">=</span> <span class="nx">j</span><span class="p">;</span>
      <span class="p">&#125;</span>
      <span class="k">break</span><span class="p">;</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>
<span class="p">&#125;);</span>

<span class="c1">// Hook up interactivity</span>
<span class="nx">transcript</span><span class="p">.</span><span class="nf">addEventListener</span><span class="p">(</span><span class="dl">"</span><span class="s2">click</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">id</span><span class="p">.</span><span class="nf">indexOf</span><span class="p">(</span><span class="dl">"</span><span class="s2">caption</span><span class="dl">"</span><span class="p">)</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nc">Number</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">id</span><span class="p">.</span><span class="nf">replace</span><span class="p">(</span><span class="dl">"</span><span class="s2">caption</span><span class="dl">"</span><span class="p">,</span> <span class="dl">""</span><span class="p">));</span>
    <span class="nf">jwplayer</span><span class="p">().</span><span class="nf">seek</span><span class="p">(</span><span class="nx">captions</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">begin</span><span class="p">);</span>
  <span class="p">&#125;</span>
<span class="p">&#125;);</span>
<span class="nx">search</span><span class="p">.</span><span class="nf">addEventListener</span><span class="p">(</span><span class="dl">"</span><span class="s2">focus</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nf">setTimeout</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="nx">search</span><span class="p">.</span><span class="nf">select</span><span class="p">();</span>
  <span class="p">&#125;,</span> <span class="mi">100</span><span class="p">);</span>
<span class="p">&#125;);</span>
<span class="nx">search</span><span class="p">.</span><span class="nf">addEventListener</span><span class="p">(</span><span class="dl">"</span><span class="s2">keydown</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">==</span> <span class="mi">27</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nf">resetSearch</span><span class="p">();</span>
  <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">==</span> <span class="mi">13</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">q</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">value</span><span class="p">.</span><span class="nf">toLowerCase</span><span class="p">();</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">q</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">q</span> <span class="o">==</span> <span class="nx">query</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">cycle</span> <span class="o">&gt;=</span> <span class="nx">matches</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nf">cycleSearch</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
          <span class="nf">cycleSearch</span><span class="p">(</span><span class="nx">cycle</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
        <span class="nf">resetSearch</span><span class="p">();</span>
        <span class="nf">searchTranscript</span><span class="p">(</span><span class="nx">q</span><span class="p">);</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
      <span class="nf">resetSearch</span><span class="p">();</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>
<span class="p">&#125;);</span>

<span class="c1">// Execute search</span>
<span class="kd">function</span> <span class="nf">searchTranscript</span><span class="p">(</span><span class="nx">q</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">matches</span> <span class="o">=</span> <span class="p">[];</span>
  <span class="nx">query</span> <span class="o">=</span> <span class="nx">q</span><span class="p">;</span>
  <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">captions</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">m</span> <span class="o">=</span> <span class="nx">captions</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">text</span><span class="p">.</span><span class="nf">toLowerCase</span><span class="p">().</span><span class="nf">indexOf</span><span class="p">(</span><span class="nx">q</span><span class="p">);</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">m</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">caption</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">i</span><span class="p">).</span><span class="nx">innerHTML</span> <span class="o">=</span>
        <span class="nx">captions</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">text</span><span class="p">.</span><span class="nf">substr</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">m</span><span class="p">)</span> <span class="o">+</span>
        <span class="dl">"</span><span class="s2">&lt;em&gt;</span><span class="dl">"</span> <span class="o">+</span>
        <span class="nx">captions</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">text</span><span class="p">.</span><span class="nf">substr</span><span class="p">(</span><span class="nx">m</span><span class="p">,</span> <span class="nx">q</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="o">+</span>
        <span class="dl">"</span><span class="s2">&lt;/em&gt;</span><span class="dl">"</span> <span class="o">+</span>
        <span class="nx">captions</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">text</span><span class="p">.</span><span class="nf">substr</span><span class="p">(</span><span class="nx">m</span> <span class="o">+</span> <span class="nx">q</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span>
      <span class="nx">matches</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">i</span><span class="p">);</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">matches</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nf">cycleSearch</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span>
  <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
    <span class="nf">resetSearch</span><span class="p">();</span>
  <span class="p">&#125;</span>
<span class="p">&#125;</span>
<span class="kd">function</span> <span class="nf">cycleSearch</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">cycle</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">o</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">caption</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">matches</span><span class="p">[</span><span class="nx">cycle</span><span class="p">]);</span>
    <span class="nx">o</span><span class="p">.</span><span class="nf">getElementsByTagName</span><span class="p">(</span><span class="dl">"</span><span class="s2">em</span><span class="dl">"</span><span class="p">)[</span><span class="mi">0</span><span class="p">].</span><span class="nx">className</span> <span class="o">=</span> <span class="dl">""</span><span class="p">;</span>
  <span class="p">&#125;</span>
  <span class="kd">var</span> <span class="nx">c</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">caption</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">matches</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span>
  <span class="nx">c</span><span class="p">.</span><span class="nf">getElementsByTagName</span><span class="p">(</span><span class="dl">"</span><span class="s2">em</span><span class="dl">"</span><span class="p">)[</span><span class="mi">0</span><span class="p">].</span><span class="nx">className</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">current</span><span class="dl">"</span><span class="p">;</span>
  <span class="nx">match</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span> <span class="o">+</span> <span class="dl">"</span><span class="s2"> of </span><span class="dl">"</span> <span class="o">+</span> <span class="nx">matches</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>
  <span class="nx">transcript</span><span class="p">.</span><span class="nx">scrollTop</span> <span class="o">=</span> <span class="nx">c</span><span class="p">.</span><span class="nx">offsetTop</span> <span class="o">-</span> <span class="nx">transcript</span><span class="p">.</span><span class="nx">offsetTop</span> <span class="o">-</span> <span class="mi">40</span><span class="p">;</span>
  <span class="nx">cycle</span> <span class="o">=</span> <span class="nx">i</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="kd">function</span> <span class="nf">resetSearch</span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">matches</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">captions</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">caption</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">i</span><span class="p">).</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="nx">captions</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">text</span><span class="p">;</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>
  <span class="nx">query</span> <span class="o">=</span> <span class="dl">""</span><span class="p">;</span>
  <span class="nx">matches</span> <span class="o">=</span> <span class="p">[];</span>
  <span class="nx">match</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">0 of 0</span><span class="dl">"</span><span class="p">;</span>
  <span class="nx">cycle</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span>
  <span class="nx">transcript</span><span class="p">.</span><span class="nx">scrollTop</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/58xwq4ty/11/">original jsfiddle post</a></p>
