---
title: "list timing box plots"
description: "a d3 box-plot experiment for comparing the time that cards spend in different lists."
date: "2018-10-01T16:04:26.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css","javascript","svg"]
permalink: "/post/jsfiddle-tfuj5bcp/"
source_id: "tfuj5bcp"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/tfuj5bcp/21/"
source_revision: 21
---
<iframe class="code-demo" src="{{ '/content/media/2018/2018-10-01-jsfiddle-tfuj5bcp-demo.html' | relative_url }}" title="jsfiddle / tfuj5bcp" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"//d3js.org/d3.v3.min.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nc">.box</span> <span class="p">&#123;</span>
  <span class="nl">font</span><span class="p">:</span> <span class="m">10px</span> <span class="nb">sans-serif</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.box</span> <span class="nt">line</span><span class="o">,</span>
<span class="nc">.box</span> <span class="nt">rect</span><span class="o">,</span>
<span class="nc">.box</span> <span class="nt">circle</span> <span class="p">&#123;</span>
  <span class="py">fill</span><span class="p">:</span> <span class="nx">#fff</span><span class="p">;</span>
  <span class="py">stroke</span><span class="p">:</span> <span class="nx">#000</span><span class="p">;</span>
  <span class="py">stroke-width</span><span class="p">:</span> <span class="m">1.5px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.box</span> <span class="nc">.center</span> <span class="p">&#123;</span>
  <span class="py">stroke-dasharray</span><span class="p">:</span> <span class="m">3</span><span class="p">,</span> <span class="m">3</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.box</span> <span class="nc">.outlier</span> <span class="p">&#123;</span>
  <span class="py">fill</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
  <span class="py">stroke</span><span class="p">:</span> <span class="nx">#ccc</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="c1">// load some stuff into a global var.</span>
<span class="c1">// then do some etl magic.</span>

<span class="c1">// some random data listID strings and then some random days 0.00 anywhere from 0- 90 dayz? ~15 "lists" with ~24 cardz each</span>

<span class="c1">// so like build a graph that computez average time (dayz) for each list</span>

<span class="cm">/* 			-				-				-				@				-
 * t		-				@				-				-				-
 * i		@				-				-				-				-
 * m		-				-				@				-				@
 * e		-				-				-				-				-
 *  	listA		listB		listC		listD		listE
 * 		 100		 80			 60			 50      30			&lt;-- total cards
 * 						    lists
 */</span>
<span class="c1">// see: https://bl.ocks.org/mbostock/4061502</span>
<span class="c1">// http://bl.ocks.org/jensgrubert/7789216</span>

<span class="kd">let</span> <span class="nx">listData</span> <span class="o">=</span> <span class="p">[</span>
  <span class="p">&#123;</span>
    <span class="na">listA</span><span class="p">:</span> <span class="mf">10.0</span><span class="p">,</span>
    <span class="na">listB</span><span class="p">:</span> <span class="mf">14.05</span><span class="p">,</span>
    <span class="na">listC</span><span class="p">:</span> <span class="mf">7.09</span><span class="p">,</span>
    <span class="na">listD</span><span class="p">:</span> <span class="mf">20.01</span><span class="p">,</span>
    <span class="na">listE</span><span class="p">:</span> <span class="mf">6.66</span><span class="p">,</span>
  <span class="p">&#125;,</span>
  <span class="p">&#123;</span>
    <span class="na">listA</span><span class="p">:</span> <span class="mf">19.34</span><span class="p">,</span>
    <span class="na">listB</span><span class="p">:</span> <span class="mf">15.47</span><span class="p">,</span>
    <span class="na">listC</span><span class="p">:</span> <span class="mf">2.22</span><span class="p">,</span>
    <span class="na">listD</span><span class="p">:</span> <span class="mf">24.43</span><span class="p">,</span>
  <span class="p">&#125;,</span>
<span class="p">];</span>

<span class="kd">let</span> <span class="nx">listT</span> <span class="o">=</span> <span class="p">[</span>
  <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mf">2.82</span><span class="p">],</span>
  <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mf">0.06</span><span class="p">],</span>
  <span class="p">[</span><span class="mi">2</span><span class="p">,</span> <span class="mi">0</span><span class="p">],</span>
  <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mf">2.76</span><span class="p">],</span>
  <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mf">0.06</span><span class="p">],</span>
  <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mf">3.83</span><span class="p">],</span>
  <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mf">3.83</span><span class="p">],</span>
  <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mf">2.73</span><span class="p">],</span>
  <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">],</span>
  <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mf">3.82</span><span class="p">],</span>
  <span class="p">[</span><span class="mi">2</span><span class="p">,</span> <span class="mf">4.78</span><span class="p">],</span>
  <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">],</span>
  <span class="p">[</span><span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">],</span>
  <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mf">1.76</span><span class="p">],</span>
  <span class="p">[</span><span class="mi">2</span><span class="p">,</span> <span class="mf">3.79</span><span class="p">],</span>
  <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mf">0.96</span><span class="p">],</span>
  <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mf">0.02</span><span class="p">],</span>
<span class="p">];</span>

<span class="cm">/* BOX.JS */</span>
<span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="c1">// Inspired by http://informationandvisualization.de/blog/box-plot</span>
  <span class="nx">d3</span><span class="p">.</span><span class="nx">box</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">width</span> <span class="o">=</span> <span class="mi">1</span><span class="p">,</span>
      <span class="nx">height</span> <span class="o">=</span> <span class="mi">1</span><span class="p">,</span>
      <span class="nx">duration</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span>
      <span class="nx">domain</span> <span class="o">=</span> <span class="kc">null</span><span class="p">,</span>
      <span class="nx">value</span> <span class="o">=</span> <span class="nb">Number</span><span class="p">,</span>
      <span class="nx">whiskers</span> <span class="o">=</span> <span class="nx">boxWhiskers</span><span class="p">,</span>
      <span class="nx">quartiles</span> <span class="o">=</span> <span class="nx">boxQuartiles</span><span class="p">,</span>
      <span class="nx">tickFormat</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>

    <span class="c1">// For each small multiple…</span>
    <span class="kd">function</span> <span class="nf">box</span><span class="p">(</span><span class="nx">g</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">g</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">,</span> <span class="nx">i</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">d</span> <span class="o">=</span> <span class="nx">d</span><span class="p">.</span><span class="nf">map</span><span class="p">(</span><span class="nx">value</span><span class="p">).</span><span class="nf">sort</span><span class="p">(</span><span class="nx">d3</span><span class="p">.</span><span class="nx">ascending</span><span class="p">);</span>
        <span class="kd">var</span> <span class="nx">g</span> <span class="o">=</span> <span class="nx">d3</span><span class="p">.</span><span class="nf">select</span><span class="p">(</span><span class="k">this</span><span class="p">),</span>
          <span class="nx">n</span> <span class="o">=</span> <span class="nx">d</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span>
          <span class="nx">min</span> <span class="o">=</span> <span class="nx">d</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span>
          <span class="nx">max</span> <span class="o">=</span> <span class="nx">d</span><span class="p">[</span><span class="nx">n</span> <span class="o">-</span> <span class="mi">1</span><span class="p">];</span>

        <span class="c1">// Compute quartiles. Must return exactly 3 elements.</span>
        <span class="kd">var</span> <span class="nx">quartileData</span> <span class="o">=</span> <span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">quartiles</span> <span class="o">=</span> <span class="nf">quartiles</span><span class="p">(</span><span class="nx">d</span><span class="p">));</span>

        <span class="c1">// Compute whiskers. Must return exactly 2 elements, or null.</span>
        <span class="kd">var</span> <span class="nx">whiskerIndices</span> <span class="o">=</span> <span class="nx">whiskers</span> <span class="o">&amp;&amp;</span> <span class="nx">whiskers</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">i</span><span class="p">),</span>
          <span class="nx">whiskerData</span> <span class="o">=</span>
            <span class="nx">whiskerIndices</span> <span class="o">&amp;&amp;</span>
            <span class="nx">whiskerIndices</span><span class="p">.</span><span class="nf">map</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="nx">d</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span>
            <span class="p">&#125;);</span>

        <span class="c1">// Compute outliers. If no whiskers are specified, all data are "outliers".</span>
        <span class="c1">// We compute the outliers as indices, so that we can join across transitions!</span>
        <span class="kd">var</span> <span class="nx">outlierIndices</span> <span class="o">=</span> <span class="nx">whiskerIndices</span>
          <span class="p">?</span> <span class="nx">d3</span>
              <span class="p">.</span><span class="nf">range</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">whiskerIndices</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span>
              <span class="p">.</span><span class="nf">concat</span><span class="p">(</span><span class="nx">d3</span><span class="p">.</span><span class="nf">range</span><span class="p">(</span><span class="nx">whiskerIndices</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">+</span> <span class="mi">1</span><span class="p">,</span> <span class="nx">n</span><span class="p">))</span>
          <span class="p">:</span> <span class="nx">d3</span><span class="p">.</span><span class="nf">range</span><span class="p">(</span><span class="nx">n</span><span class="p">);</span>

        <span class="c1">// Compute the new x-scale.</span>
        <span class="kd">var</span> <span class="nx">x1</span> <span class="o">=</span> <span class="nx">d3</span><span class="p">.</span><span class="nx">scale</span>
          <span class="p">.</span><span class="nf">linear</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">domain</span><span class="p">((</span><span class="nx">domain</span> <span class="o">&amp;&amp;</span> <span class="nx">domain</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">i</span><span class="p">))</span> <span class="o">||</span> <span class="p">[</span><span class="nx">min</span><span class="p">,</span> <span class="nx">max</span><span class="p">])</span>
          <span class="p">.</span><span class="nf">range</span><span class="p">([</span><span class="nx">height</span><span class="p">,</span> <span class="mi">0</span><span class="p">]);</span>

        <span class="c1">// Retrieve the old x-scale, if this is an update.</span>
        <span class="kd">var</span> <span class="nx">x0</span> <span class="o">=</span>
          <span class="k">this</span><span class="p">.</span><span class="nx">__chart__</span> <span class="o">||</span>
          <span class="nx">d3</span><span class="p">.</span><span class="nx">scale</span><span class="p">.</span><span class="nf">linear</span><span class="p">().</span><span class="nf">domain</span><span class="p">([</span><span class="mi">0</span><span class="p">,</span> <span class="kc">Infinity</span><span class="p">]).</span><span class="nf">range</span><span class="p">(</span><span class="nx">x1</span><span class="p">.</span><span class="nf">range</span><span class="p">());</span>

        <span class="c1">// Stash the new scale.</span>
        <span class="k">this</span><span class="p">.</span><span class="nx">__chart__</span> <span class="o">=</span> <span class="nx">x1</span><span class="p">;</span>

        <span class="c1">// Note: the box, median, and box tick elements are fixed in number,</span>
        <span class="c1">// so we only have to handle enter and update. In contrast, the outliers</span>
        <span class="c1">// and other elements are variable, so we need to exit them! Variable</span>
        <span class="c1">// elements also fade in and out.</span>

        <span class="c1">// Update center line: the vertical line spanning the whiskers.</span>
        <span class="kd">var</span> <span class="nx">center</span> <span class="o">=</span> <span class="nx">g</span>
          <span class="p">.</span><span class="nf">selectAll</span><span class="p">(</span><span class="dl">"</span><span class="s2">line.center</span><span class="dl">"</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">whiskerData</span> <span class="p">?</span> <span class="p">[</span><span class="nx">whiskerData</span><span class="p">]</span> <span class="p">:</span> <span class="p">[]);</span>

        <span class="nx">center</span>
          <span class="p">.</span><span class="nf">enter</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">insert</span><span class="p">(</span><span class="dl">"</span><span class="s2">line</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">rect</span><span class="dl">"</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">class</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">center</span><span class="dl">"</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">x1</span><span class="dl">"</span><span class="p">,</span> <span class="nx">width</span> <span class="o">/</span> <span class="mi">2</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y1</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nf">x0</span><span class="p">(</span><span class="nx">d</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span>
          <span class="p">&#125;)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">x2</span><span class="dl">"</span><span class="p">,</span> <span class="nx">width</span> <span class="o">/</span> <span class="mi">2</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y2</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nf">x0</span><span class="p">(</span><span class="nx">d</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span>
          <span class="p">&#125;)</span>
          <span class="p">.</span><span class="nf">style</span><span class="p">(</span><span class="dl">"</span><span class="s2">opacity</span><span class="dl">"</span><span class="p">,</span> <span class="mi">1</span><span class="nx">e</span><span class="o">-</span><span class="mi">6</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">transition</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">duration</span><span class="p">(</span><span class="nx">duration</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">style</span><span class="p">(</span><span class="dl">"</span><span class="s2">opacity</span><span class="dl">"</span><span class="p">,</span> <span class="mi">1</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y1</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nf">x1</span><span class="p">(</span><span class="nx">d</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span>
          <span class="p">&#125;)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y2</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nf">x1</span><span class="p">(</span><span class="nx">d</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span>
          <span class="p">&#125;);</span>

        <span class="nx">center</span>
          <span class="p">.</span><span class="nf">transition</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">duration</span><span class="p">(</span><span class="nx">duration</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">style</span><span class="p">(</span><span class="dl">"</span><span class="s2">opacity</span><span class="dl">"</span><span class="p">,</span> <span class="mi">1</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y1</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nf">x1</span><span class="p">(</span><span class="nx">d</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span>
          <span class="p">&#125;)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y2</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nf">x1</span><span class="p">(</span><span class="nx">d</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span>
          <span class="p">&#125;);</span>

        <span class="nx">center</span>
          <span class="p">.</span><span class="nf">exit</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">transition</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">duration</span><span class="p">(</span><span class="nx">duration</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">style</span><span class="p">(</span><span class="dl">"</span><span class="s2">opacity</span><span class="dl">"</span><span class="p">,</span> <span class="mi">1</span><span class="nx">e</span><span class="o">-</span><span class="mi">6</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y1</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nf">x1</span><span class="p">(</span><span class="nx">d</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span>
          <span class="p">&#125;)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y2</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nf">x1</span><span class="p">(</span><span class="nx">d</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span>
          <span class="p">&#125;)</span>
          <span class="p">.</span><span class="nf">remove</span><span class="p">();</span>

        <span class="c1">// Update innerquartile box.</span>
        <span class="kd">var</span> <span class="nx">box</span> <span class="o">=</span> <span class="nx">g</span><span class="p">.</span><span class="nf">selectAll</span><span class="p">(</span><span class="dl">"</span><span class="s2">rect.box</span><span class="dl">"</span><span class="p">).</span><span class="nf">data</span><span class="p">([</span><span class="nx">quartileData</span><span class="p">]);</span>

        <span class="nx">box</span>
          <span class="p">.</span><span class="nf">enter</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">append</span><span class="p">(</span><span class="dl">"</span><span class="s2">rect</span><span class="dl">"</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">class</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">box</span><span class="dl">"</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">x</span><span class="dl">"</span><span class="p">,</span> <span class="mi">0</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nf">x0</span><span class="p">(</span><span class="nx">d</span><span class="p">[</span><span class="mi">2</span><span class="p">]);</span>
          <span class="p">&#125;)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">width</span><span class="dl">"</span><span class="p">,</span> <span class="nx">width</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">height</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nf">x0</span><span class="p">(</span><span class="nx">d</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="o">-</span> <span class="nf">x0</span><span class="p">(</span><span class="nx">d</span><span class="p">[</span><span class="mi">2</span><span class="p">]);</span>
          <span class="p">&#125;)</span>
          <span class="p">.</span><span class="nf">transition</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">duration</span><span class="p">(</span><span class="nx">duration</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nf">x1</span><span class="p">(</span><span class="nx">d</span><span class="p">[</span><span class="mi">2</span><span class="p">]);</span>
          <span class="p">&#125;)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">height</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nf">x1</span><span class="p">(</span><span class="nx">d</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="o">-</span> <span class="nf">x1</span><span class="p">(</span><span class="nx">d</span><span class="p">[</span><span class="mi">2</span><span class="p">]);</span>
          <span class="p">&#125;);</span>

        <span class="nx">box</span>
          <span class="p">.</span><span class="nf">transition</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">duration</span><span class="p">(</span><span class="nx">duration</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nf">x1</span><span class="p">(</span><span class="nx">d</span><span class="p">[</span><span class="mi">2</span><span class="p">]);</span>
          <span class="p">&#125;)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">height</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nf">x1</span><span class="p">(</span><span class="nx">d</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="o">-</span> <span class="nf">x1</span><span class="p">(</span><span class="nx">d</span><span class="p">[</span><span class="mi">2</span><span class="p">]);</span>
          <span class="p">&#125;);</span>

        <span class="c1">// Update median line.</span>
        <span class="kd">var</span> <span class="nx">medianLine</span> <span class="o">=</span> <span class="nx">g</span><span class="p">.</span><span class="nf">selectAll</span><span class="p">(</span><span class="dl">"</span><span class="s2">line.median</span><span class="dl">"</span><span class="p">).</span><span class="nf">data</span><span class="p">([</span><span class="nx">quartileData</span><span class="p">[</span><span class="mi">1</span><span class="p">]]);</span>

        <span class="nx">medianLine</span>
          <span class="p">.</span><span class="nf">enter</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">append</span><span class="p">(</span><span class="dl">"</span><span class="s2">line</span><span class="dl">"</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">class</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">median</span><span class="dl">"</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">x1</span><span class="dl">"</span><span class="p">,</span> <span class="mi">0</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y1</span><span class="dl">"</span><span class="p">,</span> <span class="nx">x0</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">x2</span><span class="dl">"</span><span class="p">,</span> <span class="nx">width</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y2</span><span class="dl">"</span><span class="p">,</span> <span class="nx">x0</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">transition</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">duration</span><span class="p">(</span><span class="nx">duration</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y1</span><span class="dl">"</span><span class="p">,</span> <span class="nx">x1</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y2</span><span class="dl">"</span><span class="p">,</span> <span class="nx">x1</span><span class="p">);</span>

        <span class="nx">medianLine</span>
          <span class="p">.</span><span class="nf">transition</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">duration</span><span class="p">(</span><span class="nx">duration</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y1</span><span class="dl">"</span><span class="p">,</span> <span class="nx">x1</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y2</span><span class="dl">"</span><span class="p">,</span> <span class="nx">x1</span><span class="p">);</span>

        <span class="c1">// Update whiskers.</span>
        <span class="kd">var</span> <span class="nx">whisker</span> <span class="o">=</span> <span class="nx">g</span><span class="p">.</span><span class="nf">selectAll</span><span class="p">(</span><span class="dl">"</span><span class="s2">line.whisker</span><span class="dl">"</span><span class="p">).</span><span class="nf">data</span><span class="p">(</span><span class="nx">whiskerData</span> <span class="o">||</span> <span class="p">[]);</span>

        <span class="nx">whisker</span>
          <span class="p">.</span><span class="nf">enter</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">insert</span><span class="p">(</span><span class="dl">"</span><span class="s2">line</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">circle, text</span><span class="dl">"</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">class</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">whisker</span><span class="dl">"</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">x1</span><span class="dl">"</span><span class="p">,</span> <span class="mi">0</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y1</span><span class="dl">"</span><span class="p">,</span> <span class="nx">x0</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">x2</span><span class="dl">"</span><span class="p">,</span> <span class="nx">width</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y2</span><span class="dl">"</span><span class="p">,</span> <span class="nx">x0</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">style</span><span class="p">(</span><span class="dl">"</span><span class="s2">opacity</span><span class="dl">"</span><span class="p">,</span> <span class="mi">1</span><span class="nx">e</span><span class="o">-</span><span class="mi">6</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">transition</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">duration</span><span class="p">(</span><span class="nx">duration</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y1</span><span class="dl">"</span><span class="p">,</span> <span class="nx">x1</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y2</span><span class="dl">"</span><span class="p">,</span> <span class="nx">x1</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">style</span><span class="p">(</span><span class="dl">"</span><span class="s2">opacity</span><span class="dl">"</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span>

        <span class="nx">whisker</span>
          <span class="p">.</span><span class="nf">transition</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">duration</span><span class="p">(</span><span class="nx">duration</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y1</span><span class="dl">"</span><span class="p">,</span> <span class="nx">x1</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y2</span><span class="dl">"</span><span class="p">,</span> <span class="nx">x1</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">style</span><span class="p">(</span><span class="dl">"</span><span class="s2">opacity</span><span class="dl">"</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span>

        <span class="nx">whisker</span>
          <span class="p">.</span><span class="nf">exit</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">transition</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">duration</span><span class="p">(</span><span class="nx">duration</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y1</span><span class="dl">"</span><span class="p">,</span> <span class="nx">x1</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y2</span><span class="dl">"</span><span class="p">,</span> <span class="nx">x1</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">style</span><span class="p">(</span><span class="dl">"</span><span class="s2">opacity</span><span class="dl">"</span><span class="p">,</span> <span class="mi">1</span><span class="nx">e</span><span class="o">-</span><span class="mi">6</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">remove</span><span class="p">();</span>

        <span class="c1">// Update outliers.</span>
        <span class="kd">var</span> <span class="nx">outlier</span> <span class="o">=</span> <span class="nx">g</span>
          <span class="p">.</span><span class="nf">selectAll</span><span class="p">(</span><span class="dl">"</span><span class="s2">circle.outlier</span><span class="dl">"</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">outlierIndices</span><span class="p">,</span> <span class="nb">Number</span><span class="p">);</span>

        <span class="nx">outlier</span>
          <span class="p">.</span><span class="nf">enter</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">insert</span><span class="p">(</span><span class="dl">"</span><span class="s2">circle</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">text</span><span class="dl">"</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">class</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">outlier</span><span class="dl">"</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">r</span><span class="dl">"</span><span class="p">,</span> <span class="mi">5</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">cx</span><span class="dl">"</span><span class="p">,</span> <span class="nx">width</span> <span class="o">/</span> <span class="mi">2</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">cy</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nf">x0</span><span class="p">(</span><span class="nx">d</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span>
          <span class="p">&#125;)</span>
          <span class="p">.</span><span class="nf">style</span><span class="p">(</span><span class="dl">"</span><span class="s2">opacity</span><span class="dl">"</span><span class="p">,</span> <span class="mi">1</span><span class="nx">e</span><span class="o">-</span><span class="mi">6</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">transition</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">duration</span><span class="p">(</span><span class="nx">duration</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">cy</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nf">x1</span><span class="p">(</span><span class="nx">d</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span>
          <span class="p">&#125;)</span>
          <span class="p">.</span><span class="nf">style</span><span class="p">(</span><span class="dl">"</span><span class="s2">opacity</span><span class="dl">"</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span>

        <span class="nx">outlier</span>
          <span class="p">.</span><span class="nf">transition</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">duration</span><span class="p">(</span><span class="nx">duration</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">cy</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nf">x1</span><span class="p">(</span><span class="nx">d</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span>
          <span class="p">&#125;)</span>
          <span class="p">.</span><span class="nf">style</span><span class="p">(</span><span class="dl">"</span><span class="s2">opacity</span><span class="dl">"</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span>

        <span class="nx">outlier</span>
          <span class="p">.</span><span class="nf">exit</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">transition</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">duration</span><span class="p">(</span><span class="nx">duration</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">cy</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nf">x1</span><span class="p">(</span><span class="nx">d</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span>
          <span class="p">&#125;)</span>
          <span class="p">.</span><span class="nf">style</span><span class="p">(</span><span class="dl">"</span><span class="s2">opacity</span><span class="dl">"</span><span class="p">,</span> <span class="mi">1</span><span class="nx">e</span><span class="o">-</span><span class="mi">6</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">remove</span><span class="p">();</span>

        <span class="c1">// Compute the tick format.</span>
        <span class="kd">var</span> <span class="nx">format</span> <span class="o">=</span> <span class="nx">tickFormat</span> <span class="o">||</span> <span class="nx">x1</span><span class="p">.</span><span class="nf">tickFormat</span><span class="p">(</span><span class="mi">8</span><span class="p">);</span>

        <span class="c1">// Update box ticks.</span>
        <span class="kd">var</span> <span class="nx">boxTick</span> <span class="o">=</span> <span class="nx">g</span><span class="p">.</span><span class="nf">selectAll</span><span class="p">(</span><span class="dl">"</span><span class="s2">text.box</span><span class="dl">"</span><span class="p">).</span><span class="nf">data</span><span class="p">(</span><span class="nx">quartileData</span><span class="p">);</span>

        <span class="nx">boxTick</span>
          <span class="p">.</span><span class="nf">enter</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">append</span><span class="p">(</span><span class="dl">"</span><span class="s2">text</span><span class="dl">"</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">class</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">box</span><span class="dl">"</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">dy</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">.3em</span><span class="dl">"</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">dx</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">,</span> <span class="nx">i</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nx">i</span> <span class="o">&amp;</span> <span class="mi">1</span> <span class="p">?</span> <span class="mi">6</span> <span class="p">:</span> <span class="o">-</span><span class="mi">6</span><span class="p">;</span>
          <span class="p">&#125;)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">x</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">,</span> <span class="nx">i</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nx">i</span> <span class="o">&amp;</span> <span class="mi">1</span> <span class="p">?</span> <span class="nx">width</span> <span class="p">:</span> <span class="mi">0</span><span class="p">;</span>
          <span class="p">&#125;)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y</span><span class="dl">"</span><span class="p">,</span> <span class="nx">x0</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">text-anchor</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">,</span> <span class="nx">i</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nx">i</span> <span class="o">&amp;</span> <span class="mi">1</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">start</span><span class="dl">"</span> <span class="p">:</span> <span class="dl">"</span><span class="s2">end</span><span class="dl">"</span><span class="p">;</span>
          <span class="p">&#125;)</span>
          <span class="p">.</span><span class="nf">text</span><span class="p">(</span><span class="nx">format</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">transition</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">duration</span><span class="p">(</span><span class="nx">duration</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y</span><span class="dl">"</span><span class="p">,</span> <span class="nx">x1</span><span class="p">);</span>

        <span class="nx">boxTick</span><span class="p">.</span><span class="nf">transition</span><span class="p">().</span><span class="nf">duration</span><span class="p">(</span><span class="nx">duration</span><span class="p">).</span><span class="nf">text</span><span class="p">(</span><span class="nx">format</span><span class="p">).</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y</span><span class="dl">"</span><span class="p">,</span> <span class="nx">x1</span><span class="p">);</span>

        <span class="c1">// Update whisker ticks. These are handled separately from the box</span>
        <span class="c1">// ticks because they may or may not exist, and we want don't want</span>
        <span class="c1">// to join box ticks pre-transition with whisker ticks post-.</span>
        <span class="kd">var</span> <span class="nx">whiskerTick</span> <span class="o">=</span> <span class="nx">g</span><span class="p">.</span><span class="nf">selectAll</span><span class="p">(</span><span class="dl">"</span><span class="s2">text.whisker</span><span class="dl">"</span><span class="p">).</span><span class="nf">data</span><span class="p">(</span><span class="nx">whiskerData</span> <span class="o">||</span> <span class="p">[]);</span>

        <span class="nx">whiskerTick</span>
          <span class="p">.</span><span class="nf">enter</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">append</span><span class="p">(</span><span class="dl">"</span><span class="s2">text</span><span class="dl">"</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">class</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">whisker</span><span class="dl">"</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">dy</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">.3em</span><span class="dl">"</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">dx</span><span class="dl">"</span><span class="p">,</span> <span class="mi">6</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">x</span><span class="dl">"</span><span class="p">,</span> <span class="nx">width</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y</span><span class="dl">"</span><span class="p">,</span> <span class="nx">x0</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">text</span><span class="p">(</span><span class="nx">format</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">style</span><span class="p">(</span><span class="dl">"</span><span class="s2">opacity</span><span class="dl">"</span><span class="p">,</span> <span class="mi">1</span><span class="nx">e</span><span class="o">-</span><span class="mi">6</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">transition</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">duration</span><span class="p">(</span><span class="nx">duration</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y</span><span class="dl">"</span><span class="p">,</span> <span class="nx">x1</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">style</span><span class="p">(</span><span class="dl">"</span><span class="s2">opacity</span><span class="dl">"</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span>

        <span class="nx">whiskerTick</span>
          <span class="p">.</span><span class="nf">transition</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">duration</span><span class="p">(</span><span class="nx">duration</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">text</span><span class="p">(</span><span class="nx">format</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y</span><span class="dl">"</span><span class="p">,</span> <span class="nx">x1</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">style</span><span class="p">(</span><span class="dl">"</span><span class="s2">opacity</span><span class="dl">"</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span>

        <span class="nx">whiskerTick</span>
          <span class="p">.</span><span class="nf">exit</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">transition</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">duration</span><span class="p">(</span><span class="nx">duration</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y</span><span class="dl">"</span><span class="p">,</span> <span class="nx">x1</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">style</span><span class="p">(</span><span class="dl">"</span><span class="s2">opacity</span><span class="dl">"</span><span class="p">,</span> <span class="mi">1</span><span class="nx">e</span><span class="o">-</span><span class="mi">6</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">remove</span><span class="p">();</span>
      <span class="p">&#125;);</span>
      <span class="nx">d3</span><span class="p">.</span><span class="nx">timer</span><span class="p">.</span><span class="nf">flush</span><span class="p">();</span>
    <span class="p">&#125;</span>

    <span class="nx">box</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">x</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="k">return</span> <span class="nx">width</span><span class="p">;</span>
      <span class="nx">width</span> <span class="o">=</span> <span class="nx">x</span><span class="p">;</span>
      <span class="k">return</span> <span class="nx">box</span><span class="p">;</span>
    <span class="p">&#125;;</span>

    <span class="nx">box</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">x</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="k">return</span> <span class="nx">height</span><span class="p">;</span>
      <span class="nx">height</span> <span class="o">=</span> <span class="nx">x</span><span class="p">;</span>
      <span class="k">return</span> <span class="nx">box</span><span class="p">;</span>
    <span class="p">&#125;;</span>

    <span class="nx">box</span><span class="p">.</span><span class="nx">tickFormat</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">x</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="k">return</span> <span class="nx">tickFormat</span><span class="p">;</span>
      <span class="nx">tickFormat</span> <span class="o">=</span> <span class="nx">x</span><span class="p">;</span>
      <span class="k">return</span> <span class="nx">box</span><span class="p">;</span>
    <span class="p">&#125;;</span>

    <span class="nx">box</span><span class="p">.</span><span class="nx">duration</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">x</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="k">return</span> <span class="nx">duration</span><span class="p">;</span>
      <span class="nx">duration</span> <span class="o">=</span> <span class="nx">x</span><span class="p">;</span>
      <span class="k">return</span> <span class="nx">box</span><span class="p">;</span>
    <span class="p">&#125;;</span>

    <span class="nx">box</span><span class="p">.</span><span class="nx">domain</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">x</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="k">return</span> <span class="nx">domain</span><span class="p">;</span>
      <span class="nx">domain</span> <span class="o">=</span> <span class="nx">x</span> <span class="o">==</span> <span class="kc">null</span> <span class="p">?</span> <span class="nx">x</span> <span class="p">:</span> <span class="nx">d3</span><span class="p">.</span><span class="nf">functor</span><span class="p">(</span><span class="nx">x</span><span class="p">);</span>
      <span class="k">return</span> <span class="nx">box</span><span class="p">;</span>
    <span class="p">&#125;;</span>

    <span class="nx">box</span><span class="p">.</span><span class="nx">value</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">x</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="k">return</span> <span class="nx">value</span><span class="p">;</span>
      <span class="nx">value</span> <span class="o">=</span> <span class="nx">x</span><span class="p">;</span>
      <span class="k">return</span> <span class="nx">box</span><span class="p">;</span>
    <span class="p">&#125;;</span>

    <span class="nx">box</span><span class="p">.</span><span class="nx">whiskers</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">x</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="k">return</span> <span class="nx">whiskers</span><span class="p">;</span>
      <span class="nx">whiskers</span> <span class="o">=</span> <span class="nx">x</span><span class="p">;</span>
      <span class="k">return</span> <span class="nx">box</span><span class="p">;</span>
    <span class="p">&#125;;</span>

    <span class="nx">box</span><span class="p">.</span><span class="nx">quartiles</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">x</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="k">return</span> <span class="nx">quartiles</span><span class="p">;</span>
      <span class="nx">quartiles</span> <span class="o">=</span> <span class="nx">x</span><span class="p">;</span>
      <span class="k">return</span> <span class="nx">box</span><span class="p">;</span>
    <span class="p">&#125;;</span>

    <span class="k">return</span> <span class="nx">box</span><span class="p">;</span>
  <span class="p">&#125;;</span>

  <span class="kd">function</span> <span class="nf">boxWhiskers</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">return</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="nx">d</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">];</span>
  <span class="p">&#125;</span>

  <span class="kd">function</span> <span class="nf">boxQuartiles</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">return</span> <span class="p">[</span><span class="nx">d3</span><span class="p">.</span><span class="nf">quantile</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span> <span class="mf">0.25</span><span class="p">),</span> <span class="nx">d3</span><span class="p">.</span><span class="nf">quantile</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span> <span class="mf">0.5</span><span class="p">),</span> <span class="nx">d3</span><span class="p">.</span><span class="nf">quantile</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span> <span class="mf">0.75</span><span class="p">)];</span>
  <span class="p">&#125;</span>
<span class="p">&#125;)();</span>
<span class="cm">/* end BOX.JS */</span>
<span class="c1">/////////////////////////////</span>

<span class="kd">var</span> <span class="nx">margin</span> <span class="o">=</span> <span class="p">&#123;</span> <span class="na">top</span><span class="p">:</span> <span class="mi">10</span><span class="p">,</span> <span class="na">right</span><span class="p">:</span> <span class="mi">50</span><span class="p">,</span> <span class="na">bottom</span><span class="p">:</span> <span class="mi">20</span><span class="p">,</span> <span class="na">left</span><span class="p">:</span> <span class="mi">50</span> <span class="p">&#125;,</span>
  <span class="nx">width</span> <span class="o">=</span> <span class="mi">120</span> <span class="o">-</span> <span class="nx">margin</span><span class="p">.</span><span class="nx">left</span> <span class="o">-</span> <span class="nx">margin</span><span class="p">.</span><span class="nx">right</span><span class="p">,</span>
  <span class="nx">height</span> <span class="o">=</span> <span class="mi">300</span> <span class="o">-</span> <span class="nx">margin</span><span class="p">.</span><span class="nx">top</span> <span class="o">-</span> <span class="nx">margin</span><span class="p">.</span><span class="nx">bottom</span><span class="p">;</span>

<span class="kd">var</span> <span class="nx">min</span> <span class="o">=</span> <span class="kc">Infinity</span><span class="p">,</span>
  <span class="nx">max</span> <span class="o">=</span> <span class="o">-</span><span class="kc">Infinity</span><span class="p">;</span>

<span class="kd">var</span> <span class="nx">chart</span> <span class="o">=</span> <span class="nx">d3</span><span class="p">.</span><span class="nf">box</span><span class="p">().</span><span class="nf">width</span><span class="p">(</span><span class="nx">width</span><span class="p">).</span><span class="nf">height</span><span class="p">(</span><span class="nx">height</span><span class="p">);</span>
<span class="c1">//.whiskers(iqr(1.5))</span>

<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="p">[];</span>

<span class="nx">listT</span><span class="p">.</span><span class="nf">forEach</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">x</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">x</span><span class="dl">"</span><span class="p">,</span> <span class="nx">x</span><span class="p">);</span>
  <span class="kd">var</span> <span class="nx">e</span> <span class="o">=</span> <span class="nx">x</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="c1">//Math.floor(x[0] - 1),</span>
    <span class="cm">/* r = Math.floor(x.Run - 1), */</span>
    <span class="nx">s</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">floor</span><span class="p">(</span><span class="nx">x</span><span class="p">[</span><span class="mi">1</span><span class="p">]),</span>
    <span class="nx">d</span> <span class="o">=</span> <span class="nx">data</span><span class="p">[</span><span class="nx">e</span><span class="p">];</span>
  <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">d</span><span class="p">)</span> <span class="nx">d</span> <span class="o">=</span> <span class="nx">data</span><span class="p">[</span><span class="nx">e</span><span class="p">]</span> <span class="o">=</span> <span class="p">[</span><span class="nx">s</span><span class="p">];</span>
  <span class="k">else</span> <span class="nx">d</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">s</span><span class="p">);</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">s</span> <span class="o">&gt;</span> <span class="nx">max</span><span class="p">)</span> <span class="nx">max</span> <span class="o">=</span> <span class="nx">s</span><span class="p">;</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">s</span> <span class="o">&lt;</span> <span class="nx">min</span><span class="p">)</span> <span class="nx">min</span> <span class="o">=</span> <span class="nx">s</span><span class="p">;</span>
<span class="p">&#125;);</span>

<span class="nx">chart</span><span class="p">.</span><span class="nf">domain</span><span class="p">([</span><span class="nx">min</span><span class="p">,</span> <span class="nx">max</span><span class="p">]);</span>

<span class="kd">var</span> <span class="nx">svg</span> <span class="o">=</span> <span class="nx">d3</span>
  <span class="p">.</span><span class="nf">select</span><span class="p">(</span><span class="dl">"</span><span class="s2">body</span><span class="dl">"</span><span class="p">)</span>
  <span class="p">.</span><span class="nf">selectAll</span><span class="p">(</span><span class="dl">"</span><span class="s2">svg</span><span class="dl">"</span><span class="p">)</span>
  <span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span>
  <span class="p">.</span><span class="nf">enter</span><span class="p">()</span>
  <span class="p">.</span><span class="nf">append</span><span class="p">(</span><span class="dl">"</span><span class="s2">svg</span><span class="dl">"</span><span class="p">)</span>
  <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">class</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">box</span><span class="dl">"</span><span class="p">)</span>
  <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">width</span><span class="dl">"</span><span class="p">,</span> <span class="nx">width</span> <span class="o">+</span> <span class="nx">margin</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="nx">margin</span><span class="p">.</span><span class="nx">right</span><span class="p">)</span>
  <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">height</span><span class="dl">"</span><span class="p">,</span> <span class="nx">height</span> <span class="o">+</span> <span class="nx">margin</span><span class="p">.</span><span class="nx">bottom</span> <span class="o">+</span> <span class="nx">margin</span><span class="p">.</span><span class="nx">top</span><span class="p">)</span>
  <span class="p">.</span><span class="nf">append</span><span class="p">(</span><span class="dl">"</span><span class="s2">g</span><span class="dl">"</span><span class="p">)</span>
  <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">transform</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">translate(</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">margin</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">,</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">margin</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">)</span><span class="dl">"</span><span class="p">)</span>
  <span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nx">chart</span><span class="p">);</span>

<span class="c1">// Returns a function to compute the interquartile range.</span>
<span class="kd">function</span> <span class="nf">iqr</span><span class="p">(</span><span class="nx">k</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="k">return</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">,</span> <span class="nx">i</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">q1</span> <span class="o">=</span> <span class="nx">d</span><span class="p">.</span><span class="nx">quartiles</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span>
      <span class="nx">q3</span> <span class="o">=</span> <span class="nx">d</span><span class="p">.</span><span class="nx">quartiles</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span>
      <span class="nx">iqr</span> <span class="o">=</span> <span class="p">(</span><span class="nx">q3</span> <span class="o">-</span> <span class="nx">q1</span><span class="p">)</span> <span class="o">*</span> <span class="nx">k</span><span class="p">,</span>
      <span class="nx">i</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span>
      <span class="nx">j</span> <span class="o">=</span> <span class="nx">d</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>
    <span class="k">while </span><span class="p">(</span><span class="nx">d</span><span class="p">[</span><span class="o">++</span><span class="nx">i</span><span class="p">]</span> <span class="o">&lt;</span> <span class="nx">q1</span> <span class="o">-</span> <span class="nx">iqr</span><span class="p">);</span>
    <span class="k">while </span><span class="p">(</span><span class="nx">d</span><span class="p">[</span><span class="o">--</span><span class="nx">j</span><span class="p">]</span> <span class="o">&gt;</span> <span class="nx">q3</span> <span class="o">+</span> <span class="nx">iqr</span><span class="p">);</span>
    <span class="k">return</span> <span class="p">[</span><span class="nx">i</span><span class="p">,</span> <span class="nx">j</span><span class="p">];</span>
  <span class="p">&#125;;</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/tfuj5bcp/21/">original jsfiddle post</a></p>
