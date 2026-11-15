---
title: "multi selectable"
date: "2016-01-25T05:32:56.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-m9a8bzdx/"
source_id: "m9a8bzdx"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/m9a8bzdx/6/"
source_revision: 6
---
<iframe class="code-demo" src="{{ '/content/media/2016/2016-01-25-jsfiddle-m9a8bzdx-demo.html' | relative_url }}" title="multi selectable" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>clever twist on a jQuery favourite</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"http://code.jquery.com/ui/1.9.2/jquery-ui.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;link</span>
  <span class="na">rel=</span><span class="s">"stylesheet"</span>
  <span class="na">href=</span><span class="s">"http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css"</span>
<span class="nt">/&gt;</span>
<span class="nt">&lt;div&gt;</span>
  <span class="nt">&lt;ul</span> <span class="na">class=</span><span class="s">"itemlist"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"item"</span> <span class="na">data-time=</span><span class="s">"12:00p"</span><span class="nt">&gt;</span>
      12
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"inner"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"item unavailable"</span> <span class="na">data-time=</span><span class="s">"12:30p"</span><span class="nt">&gt;</span>
      :30
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"inner"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"item unavailable"</span> <span class="na">data-time=</span><span class="s">"1:00p"</span><span class="nt">&gt;</span>
      1
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"inner"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"item"</span> <span class="na">data-time=</span><span class="s">"1:30p"</span><span class="nt">&gt;</span>
      :30
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"inner"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"item"</span> <span class="na">data-time=</span><span class="s">"2:00p"</span><span class="nt">&gt;</span>
      2
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"inner"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"item"</span> <span class="na">data-time=</span><span class="s">"2:30p"</span><span class="nt">&gt;</span>
      :30
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"inner"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"item unavailable"</span> <span class="na">data-time=</span><span class="s">"3:00p"</span><span class="nt">&gt;</span>
      3
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"inner"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"item unavailable"</span> <span class="na">data-time=</span><span class="s">"3:30p"</span><span class="nt">&gt;</span>
      :30
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"inner"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"item"</span> <span class="na">data-time=</span><span class="s">"4:00p"</span><span class="nt">&gt;</span>
      4
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"inner"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"item"</span> <span class="na">data-time=</span><span class="s">"4:30p"</span><span class="nt">&gt;</span>
      :30
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"inner"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"item"</span> <span class="na">data-time=</span><span class="s">"5:00p"</span><span class="nt">&gt;</span>
      5
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"inner"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"item"</span> <span class="na">data-time=</span><span class="s">"5:30p"</span><span class="nt">&gt;</span>
      :30
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"inner"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"item"</span> <span class="na">data-time=</span><span class="s">"6:00p"</span><span class="nt">&gt;</span>
      6
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"inner"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"item"</span> <span class="na">data-time=</span><span class="s">"6:30p"</span><span class="nt">&gt;</span>
      :30
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"inner"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"item"</span> <span class="na">data-time=</span><span class="s">"7:00p"</span><span class="nt">&gt;</span>
      7
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"inner"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;/ul&gt;</span>
<span class="nt">&lt;/div&gt;</span>

<span class="nt">&lt;p</span> <span class="na">id=</span><span class="s">"feedback"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;span&gt;</span>You've selected:<span class="nt">&lt;/span&gt;</span> <span class="nt">&lt;span</span> <span class="na">id=</span><span class="s">"select-result"</span><span class="nt">&gt;</span>nothing yet<span class="nt">&lt;/span&gt;</span>.
<span class="nt">&lt;/p&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nc">.itemlist</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">550px</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">100px</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#f7f7f7</span><span class="p">;</span>
  <span class="nl">overflow</span><span class="p">:</span> <span class="nb">scroll</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.item</span> <span class="p">&#123;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#fff</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">30px</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">25px</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#12a6eb</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">5px</span><span class="p">;</span>
  <span class="nl">float</span><span class="p">:</span> <span class="nb">left</span><span class="p">;</span>
  <span class="nl">text-align</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.unavailable</span> <span class="p">&#123;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#ddd</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.fmgrRubberBand</span> <span class="p">&#123;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nf">rgba</span><span class="p">(</span><span class="m">255</span><span class="p">,</span> <span class="m">250</span><span class="p">,</span> <span class="m">245</span><span class="p">,</span> <span class="m">0.5</span><span class="p">);</span>
  <span class="nl">border</span><span class="p">:</span> <span class="m">3px</span> <span class="nb">solid</span> <span class="nx">#ccc</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.inner</span> <span class="p">&#123;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#f2f2f2</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">green</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">50%</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0px</span> <span class="nb">auto</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">2px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.ui-selected</span> <span class="p">&#123;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">orange</span> <span class="cp">!important</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.itemlist</span><span class="dl">"</span><span class="p">)</span>
  <span class="p">.</span><span class="nf">bind</span><span class="p">(</span><span class="dl">"</span><span class="s2">mousedown</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">e</span><span class="p">.</span><span class="nx">metaKey</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
  <span class="p">&#125;)</span>
  <span class="p">.</span><span class="nf">selectable</span><span class="p">(&#123;</span>
    <span class="na">filter</span><span class="p">:</span> <span class="dl">"</span><span class="s2">li:not('.unavailable')</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">stop</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">ui</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.ui-selected</span><span class="dl">"</span><span class="p">,</span> <span class="k">this</span><span class="p">).</span><span class="nf">addClass</span><span class="p">(</span><span class="dl">"</span><span class="s2">ui-selected</span><span class="dl">"</span><span class="p">);</span>

      <span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#select-result</span><span class="dl">"</span><span class="p">).</span><span class="nf">empty</span><span class="p">();</span>
      <span class="nx">selectedTimes</span> <span class="o">=</span> <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.ui-selected</span><span class="dl">"</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span>
      <span class="kd">var</span> <span class="nx">selectedArr</span> <span class="o">=</span> <span class="p">[];</span>
      <span class="nx">selectedTimes</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
        <span class="nx">selectedArr</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">selectedTimes</span><span class="p">.</span><span class="nf">index</span><span class="p">(</span><span class="k">this</span><span class="p">));</span>
      <span class="p">&#125;);</span>

      <span class="kd">var</span> <span class="nx">min</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">.</span><span class="nf">apply</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">selectedArr</span><span class="p">),</span>
        <span class="nx">max</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">.</span><span class="nf">apply</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">selectedArr</span><span class="p">);</span>
      <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="nx">min</span><span class="p">,</span> <span class="nx">max</span><span class="p">,</span> <span class="nx">selectedArr</span><span class="p">);</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">selectedArr</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">result</span><span class="p">.</span><span class="nf">append</span><span class="p">(</span>
          <span class="nx">selectedTimes</span><span class="p">.</span><span class="nf">eq</span><span class="p">(</span><span class="nx">min</span><span class="p">).</span><span class="nf">data</span><span class="p">(</span><span class="dl">"</span><span class="s2">time</span><span class="dl">"</span><span class="p">)</span> <span class="o">+</span>
            <span class="dl">"</span><span class="s2"> - </span><span class="dl">"</span> <span class="o">+</span>
            <span class="nx">selectedTimes</span><span class="p">.</span><span class="nf">eq</span><span class="p">(</span><span class="nx">max</span><span class="p">).</span><span class="nf">data</span><span class="p">(</span><span class="dl">"</span><span class="s2">time</span><span class="dl">"</span><span class="p">),</span>
        <span class="p">);</span>
      <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
        <span class="nx">result</span><span class="p">.</span><span class="nf">append</span><span class="p">(</span><span class="dl">"</span><span class="s2">nothing yet</span><span class="dl">"</span><span class="p">);</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;,</span>
  <span class="p">&#125;);</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/m9a8bzdx/6/">original jsfiddle post</a></p>
