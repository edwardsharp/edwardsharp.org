---
title: "d3 graphing test"
date: "2014-01-06T17:51:42.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript","svg","animation"]
permalink: "/post/jsfiddle-uNt99/"
source_id: "uNt99"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/uNt99/2/"
source_revision: 2
---
<iframe class="code-demo" src="{{ '/content/media/2014/2014-01-06-jsfiddle-uNt99-demo.html' | relative_url }}" title="d3 graphing test" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>just testing out the d3 js framework</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"http://d3js.org/d3.v2.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;form&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">value=</span><span class="s">"Graph"</span> <span class="na">id=</span><span class="s">"graph_submit"</span> <span class="nt">/&gt;</span>
<span class="nt">&lt;/form&gt;</span>
<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"chart"</span><span class="nt">&gt;&lt;div&gt;&lt;/div&gt;&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nc">.link</span> <span class="nt">line</span> <span class="p">&#123;</span>
  <span class="py">stroke</span><span class="p">:</span> <span class="nx">#32cd32</span><span class="p">;</span>
  <span class="py">stroke-width</span><span class="p">:</span> <span class="m">2</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="kd">var</span> <span class="nx">data_nodes</span><span class="p">,</span> <span class="nx">data_links</span><span class="p">,</span> <span class="nx">svg_nodes</span><span class="p">,</span> <span class="nx">svg_links</span><span class="p">,</span> <span class="nx">svg_root</span><span class="p">;</span>

<span class="c1">// array for chart size [width, height]</span>
<span class="kd">var</span> <span class="nx">chart_size</span> <span class="o">=</span> <span class="p">[];</span>

<span class="nx">chart_size</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="mi">600</span><span class="p">);</span>
<span class="nx">chart_size</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="mi">600</span><span class="p">);</span>

<span class="c1">// create new force directed graph</span>
<span class="kd">var</span> <span class="nx">force</span> <span class="o">=</span> <span class="nx">d3</span><span class="p">.</span><span class="nx">layout</span>
  <span class="p">.</span><span class="nf">force</span><span class="p">()</span>
  <span class="p">.</span><span class="nf">size</span><span class="p">(</span><span class="nx">chart_size</span><span class="p">)</span>
  <span class="p">.</span><span class="nf">linkDistance</span><span class="p">(</span><span class="mi">150</span><span class="p">)</span>
  <span class="p">.</span><span class="nf">charge</span><span class="p">(</span><span class="o">-</span><span class="mi">1000</span><span class="p">)</span>
  <span class="p">.</span><span class="nf">friction</span><span class="p">(</span><span class="mf">0.3</span><span class="p">);</span>

<span class="c1">// set tick handler for force graph animation</span>
<span class="nx">force</span><span class="p">.</span><span class="nf">on</span><span class="p">(</span><span class="dl">"</span><span class="s2">tick</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="c1">// all links get an x and y coordinate for their end points</span>
  <span class="nx">svg_root</span>
    <span class="p">.</span><span class="nf">selectAll</span><span class="p">(</span><span class="dl">"</span><span class="s2">g.link line</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">x1</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">source</span><span class="p">.</span><span class="nx">x</span><span class="p">;</span>
    <span class="p">&#125;)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y1</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">source</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span>
    <span class="p">&#125;)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">x2</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">x</span><span class="p">;</span>
    <span class="p">&#125;)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y2</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span>
    <span class="p">&#125;);</span>

  <span class="c1">// all nodes get a SVG transform attribute</span>
  <span class="c1">// http://www.w3.org/TR/SVG/coords.html#TransformAttribute</span>
  <span class="nx">svg_root</span><span class="p">.</span><span class="nf">selectAll</span><span class="p">(</span><span class="dl">"</span><span class="s2">g.node</span><span class="dl">"</span><span class="p">).</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">transform</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">return</span> <span class="dl">"</span><span class="s2">translate(</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">d</span><span class="p">.</span><span class="nx">x</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">,</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">d</span><span class="p">.</span><span class="nx">y</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">)</span><span class="dl">"</span><span class="p">;</span>
  <span class="p">&#125;);</span>
<span class="p">&#125;);</span>

<span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#graph_submit</span><span class="dl">"</span><span class="p">).</span><span class="nf">click</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="c1">// remove inner div</span>
  <span class="nx">d3</span><span class="p">.</span><span class="nf">select</span><span class="p">(</span><span class="dl">"</span><span class="s2">#chart div</span><span class="dl">"</span><span class="p">).</span><span class="nf">remove</span><span class="p">();</span>

  <span class="c1">// create new inner div and svg element with a configurable size</span>
  <span class="nx">svg_root</span> <span class="o">=</span> <span class="nx">d3</span>
    <span class="p">.</span><span class="nf">select</span><span class="p">(</span><span class="dl">"</span><span class="s2">#chart</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">append</span><span class="p">(</span><span class="dl">"</span><span class="s2">div</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">append</span><span class="p">(</span><span class="dl">"</span><span class="s2">svg</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">width</span><span class="dl">"</span><span class="p">,</span> <span class="nx">chart_size</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">height</span><span class="dl">"</span><span class="p">,</span> <span class="nx">chart_size</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span>
    <span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nx">d3</span><span class="p">.</span><span class="nx">behavior</span><span class="p">.</span><span class="nf">zoom</span><span class="p">().</span><span class="nf">on</span><span class="p">(</span><span class="dl">"</span><span class="s2">zoom</span><span class="dl">"</span><span class="p">,</span> <span class="nx">redraw</span><span class="p">))</span>
    <span class="p">.</span><span class="nf">append</span><span class="p">(</span><span class="dl">"</span><span class="s2">svg:g</span><span class="dl">"</span><span class="p">);</span>

  <span class="c1">// fill rect which is same size as while SVG element</span>
  <span class="nx">svg_root</span>
    <span class="p">.</span><span class="nf">append</span><span class="p">(</span><span class="dl">"</span><span class="s2">svg:rect</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">width</span><span class="dl">"</span><span class="p">,</span> <span class="nx">chart_size</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">height</span><span class="dl">"</span><span class="p">,</span> <span class="nx">chart_size</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">fill</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">#F2F0E3</span><span class="dl">"</span><span class="p">);</span>

  <span class="c1">// zoom handler</span>
  <span class="kd">function</span> <span class="nf">redraw</span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="nx">svg_root</span><span class="p">.</span><span class="nf">attr</span><span class="p">(</span>
      <span class="dl">"</span><span class="s2">transform</span><span class="dl">"</span><span class="p">,</span>
      <span class="dl">"</span><span class="s2">translate(</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">d3</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">translate</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">) scale(</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">d3</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">scale</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">)</span><span class="dl">"</span><span class="p">,</span>
    <span class="p">);</span>
  <span class="p">&#125;</span>

  <span class="c1">// start from scratch with empty nodes and links</span>
  <span class="nx">data_nodes</span> <span class="o">=</span> <span class="p">[&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">ROOT</span><span class="dl">"</span> <span class="p">&#125;,</span> <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">NODE1</span><span class="dl">"</span> <span class="p">&#125;,</span> <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">NODE2</span><span class="dl">"</span> <span class="p">&#125;];</span>
  <span class="nx">data_links</span> <span class="o">=</span> <span class="p">[</span>
    <span class="p">&#123;</span> <span class="na">source</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span> <span class="na">target</span><span class="p">:</span> <span class="mi">0</span> <span class="p">&#125;,</span>
    <span class="p">&#123;</span> <span class="na">source</span><span class="p">:</span> <span class="mi">2</span><span class="p">,</span> <span class="na">target</span><span class="p">:</span> <span class="mi">0</span> <span class="p">&#125;,</span>
  <span class="p">];</span>

  <span class="nf">update_graph</span><span class="p">();</span>
<span class="p">&#125;);</span>

<span class="kd">function</span> <span class="nf">update_graph</span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="c1">// update SVG links and assign proper attributes</span>
  <span class="nx">svg_links</span> <span class="o">=</span> <span class="nx">svg_root</span>
    <span class="p">.</span><span class="nf">selectAll</span><span class="p">(</span><span class="dl">"</span><span class="s2">g.link</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">data_links</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">enter</span><span class="p">()</span>
    <span class="p">.</span><span class="nf">insert</span><span class="p">(</span><span class="dl">"</span><span class="s2">svg:g</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">.node</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">class</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">link</span><span class="dl">"</span><span class="p">);</span>

  <span class="nx">svg_links</span>
    <span class="p">.</span><span class="nf">append</span><span class="p">(</span><span class="dl">"</span><span class="s2">svg:line</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">x1</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">source</span><span class="p">.</span><span class="nx">x</span><span class="p">;</span>
    <span class="p">&#125;)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y1</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">source</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span>
    <span class="p">&#125;)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">x2</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">x</span><span class="p">;</span>
    <span class="p">&#125;)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y2</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span>
    <span class="p">&#125;);</span>

  <span class="c1">// update SVG nodes</span>
  <span class="nx">svg_nodes</span> <span class="o">=</span> <span class="nx">svg_root</span>
    <span class="p">.</span><span class="nf">selectAll</span><span class="p">(</span><span class="dl">"</span><span class="s2">g.node</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">data_nodes</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">enter</span><span class="p">()</span>
    <span class="p">.</span><span class="nf">insert</span><span class="p">(</span><span class="dl">"</span><span class="s2">svg:g</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">class</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">node</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nx">force</span><span class="p">.</span><span class="nx">drag</span><span class="p">);</span>

  <span class="c1">// set SVG nodes attributes for position and look/feel</span>
  <span class="nx">svg_nodes</span>
    <span class="p">.</span><span class="nf">append</span><span class="p">(</span><span class="dl">"</span><span class="s2">svg:rect</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">x</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="o">-</span><span class="mi">8</span> <span class="o">*</span> <span class="nx">d</span><span class="p">.</span><span class="nx">name</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>
    <span class="p">&#125;)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y</span><span class="dl">"</span><span class="p">,</span> <span class="o">-</span><span class="mi">20</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">rx</span><span class="dl">"</span><span class="p">,</span> <span class="mi">7</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">stroke</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">blue</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">stroke-width</span><span class="dl">"</span><span class="p">,</span> <span class="mi">2</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">width</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">name</span><span class="p">.</span><span class="nx">length</span> <span class="o">*</span> <span class="mi">15</span><span class="p">;</span>
    <span class="p">&#125;)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">height</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="mi">30</span><span class="p">;</span>
    <span class="p">&#125;)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">fill</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">id</span> <span class="o">==</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">return</span> <span class="dl">"</span><span class="s2">red</span><span class="dl">"</span><span class="p">;</span>
      <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
        <span class="k">return</span> <span class="dl">"</span><span class="s2">lightblue</span><span class="dl">"</span><span class="p">;</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;);</span>

  <span class="c1">// set SVG node text</span>
  <span class="nx">svg_nodes</span>
    <span class="p">.</span><span class="nf">append</span><span class="p">(</span><span class="dl">"</span><span class="s2">svg:text</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">text-anchor</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">middle</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">text</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">name</span><span class="p">;</span>
    <span class="p">&#125;);</span>

  <span class="c1">// set SVG click handler</span>
  <span class="nx">svg_nodes</span><span class="p">.</span><span class="nf">on</span><span class="p">(</span><span class="dl">"</span><span class="s2">click</span><span class="dl">"</span><span class="p">,</span> <span class="nx">node_event_handler</span><span class="p">);</span>
  <span class="c1">// set SVG touch handler (iPad needs this)</span>
  <span class="nx">svg_nodes</span><span class="p">.</span><span class="nf">on</span><span class="p">(</span><span class="dl">"</span><span class="s2">touchstart</span><span class="dl">"</span><span class="p">,</span> <span class="nx">node_event_handler</span><span class="p">);</span>

  <span class="kd">function</span> <span class="nf">node_event_handler</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">data_nodes</span><span class="p">.</span><span class="nf">push</span><span class="p">(&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="nx">d</span><span class="p">.</span><span class="nx">name</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">_X</span><span class="dl">"</span> <span class="p">&#125;);</span>
    <span class="nx">data_links</span><span class="p">.</span><span class="nf">push</span><span class="p">(&#123;</span> <span class="na">target</span><span class="p">:</span> <span class="nx">d</span><span class="p">.</span><span class="nx">index</span><span class="p">,</span> <span class="na">source</span><span class="p">:</span> <span class="nx">data_nodes</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span> <span class="p">&#125;);</span>
    <span class="nf">update_graph</span><span class="p">();</span>
  <span class="p">&#125;</span>

  <span class="c1">// render graph</span>
  <span class="nx">force</span><span class="p">.</span><span class="nf">links</span><span class="p">(</span><span class="nx">data_links</span><span class="p">).</span><span class="nf">nodes</span><span class="p">(</span><span class="nx">data_nodes</span><span class="p">).</span><span class="nf">start</span><span class="p">();</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/uNt99/2/">original jsfiddle post</a></p>
