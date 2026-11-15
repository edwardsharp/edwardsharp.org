---
title: "pre-line!"
date: "2017-04-19T12:33:02.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css","javascript"]
permalink: "/post/jsfiddle-0bkotc47/"
source_id: "0bkotc47"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/0bkotc47/"
source_revision: 2
---
<iframe class="code-demo" src="{{ '/content/media/2017/2017-04-19-jsfiddle-0bkotc47-demo.html' | relative_url }}" title="pre-line!" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>so without, all text will ignore newlines between tags, however, it will add new-lines to text if there is not enough screen width for the whole line of text, so what what-space: pre-line; does it the usual when wrapping because of width, but also respects new lines between the tags. </p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"font0"</span> <span class="na">class=</span><span class="s">"font"</span><span class="nt">&gt;&lt;/div&gt;</span>
<span class="nt">&lt;br</span> <span class="nt">/&gt;</span>
<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"font1"</span> <span class="na">class=</span><span class="s">"font"</span><span class="nt">&gt;&lt;/div&gt;</span>
<span class="nt">&lt;br</span> <span class="nt">/&gt;</span>
<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"font2"</span> <span class="na">class=</span><span class="s">"font"</span><span class="nt">&gt;&lt;/div&gt;</span>
<span class="nt">&lt;br</span> <span class="nt">/&gt;</span>
<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"font3"</span> <span class="na">class=</span><span class="s">"font"</span><span class="nt">&gt;&lt;/div&gt;</span>
<span class="nt">&lt;br</span> <span class="nt">/&gt;</span>
<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"font4"</span> <span class="na">class=</span><span class="s">"font"</span><span class="nt">&gt;&lt;/div&gt;</span>
<span class="nt">&lt;br</span> <span class="nt">/&gt;</span>
<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"font5"</span> <span class="na">class=</span><span class="s">"font"</span><span class="nt">&gt;&lt;/div&gt;</span>
<span class="nt">&lt;br</span> <span class="nt">/&gt;</span>
<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"font6"</span> <span class="na">class=</span><span class="s">"font"</span><span class="nt">&gt;&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="k">@import</span> <span class="nf">url</span><span class="p">(</span><span class="s1">"https://fonts.googleapis.com/css?family=Gloria+Hallelujah|Lobster|Merriweather+Sans|Permanent+Marker|Roboto+Mono|Shrikhand"</span><span class="p">);</span>
<span class="nc">.font</span> <span class="p">&#123;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">2em</span><span class="p">;</span>
  <span class="nl">line-height</span><span class="p">:</span> <span class="m">1em</span><span class="p">;</span>
  <span class="nl">white-space</span><span class="p">:</span> <span class="nb">pre-line</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#font0</span> <span class="p">&#123;</span>
  <span class="nl">font-family</span><span class="p">:</span> <span class="s1">"Roboto Mono"</span><span class="p">,</span> <span class="nb">monospace</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#font1</span> <span class="p">&#123;</span>
  <span class="nl">font-family</span><span class="p">:</span> <span class="s1">"Lobster"</span><span class="p">,</span> <span class="nb">cursive</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#font2</span> <span class="p">&#123;</span>
  <span class="nl">font-family</span><span class="p">:</span> <span class="s1">"Shrikhand"</span><span class="p">,</span> <span class="nb">cursive</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#font3</span> <span class="p">&#123;</span>
  <span class="nl">font-family</span><span class="p">:</span> <span class="s1">"Merriweather Sans"</span><span class="p">,</span> <span class="nb">sans-serif</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#font4</span> <span class="p">&#123;</span>
  <span class="nl">font-family</span><span class="p">:</span> <span class="s1">"Gloria Hallelujah"</span><span class="p">,</span> <span class="nb">cursive</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#font5</span> <span class="p">&#123;</span>
  <span class="nl">font-family</span><span class="p">:</span> <span class="s1">"Permanent Marker"</span><span class="p">,</span> <span class="nb">cursive</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#font6</span> <span class="p">&#123;</span>
  <span class="nl">font-family</span><span class="p">:</span> <span class="nb">cursive</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="cm">/*
 *  ( •_•)&gt;⌐■-■
 *  (⌐■_■)
 */</span>

<span class="kd">var</span> <span class="nx">txt</span> <span class="o">=</span>
  <span class="dl">"</span><span class="s2">CUSTOM SCREEN PRINTING</span><span class="dl">"</span> <span class="o">+</span>
  <span class="dl">"</span><span class="s2">&amp;amp; PRE-PRESS SERVICES</span><span class="dl">"</span> <span class="o">+</span>
  <span class="dl">"</span><span class="s2">5040 SE MILWAUKIE AVE.</span><span class="dl">"</span> <span class="o">+</span>
  <span class="dl">"</span><span class="s2">PORTLAND, OR 97202</span><span class="dl">"</span><span class="p">;</span>

<span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="mi">7</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="kd">var</span> <span class="nx">_elem</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">font</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">i</span><span class="p">);</span>
  <span class="nx">_elem</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="nx">txt</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/0bkotc47/">original jsfiddle post</a></p>
