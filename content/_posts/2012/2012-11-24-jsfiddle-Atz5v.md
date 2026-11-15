---
title: "jsfiddle / Atz5v"
date: "2012-11-24T23:43:08.000Z"
date_precision: "second"
tags: ["jsfiddle","code","mootools","html","css","javascript","svg"]
permalink: "/post/jsfiddle-Atz5v/"
source_id: "Atz5v"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/Atz5v/"
source_revision: 0
---
<iframe class="code-demo" src="{{ '/content/media/2012/2012-11-24-jsfiddle-Atz5v-demo.html' | relative_url }}" title="jsfiddle / Atz5v" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="cp">&lt;!DOCTYPE html&gt;</span>
<span class="nt">&lt;meta</span> <span class="na">charset=</span><span class="s">"utf-8"</span> <span class="nt">/&gt;</span>

<span class="nt">&lt;body&gt;</span>
  <span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"http://d3js.org/d3.v2.min.js?2.10.1"</span><span class="nt">&gt;&lt;/script&gt;</span>
  <span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://raw.github.com/d3/d3-plugins/master/hexbin/hexbin.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
  <span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://raw.github.com/d3/d3-plugins/master/interpolate-zoom/interpolate-zoom.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;/body&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nc">.mesh</span> <span class="p">&#123;</span>
  <span class="py">fill</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
  <span class="py">stroke</span><span class="p">:</span> <span class="nx">#000</span><span class="p">;</span>
  <span class="py">stroke-width</span><span class="p">:</span> <span class="m">0.25px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.start</span> <span class="p">&#123;</span>
  <span class="py">fill</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
  <span class="py">stroke</span><span class="p">:</span> <span class="nx">brown</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.end</span> <span class="p">&#123;</span>
  <span class="py">fill</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
  <span class="py">stroke</span><span class="p">:</span> <span class="nx">steelblue</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="kd">var</span> <span class="nx">width</span> <span class="o">=</span> <span class="mi">960</span><span class="p">,</span>
  <span class="nx">height</span> <span class="o">=</span> <span class="mi">500</span><span class="p">,</span>
  <span class="nx">radius</span> <span class="o">=</span> <span class="mi">10</span><span class="p">;</span>

<span class="kd">var</span> <span class="nx">p0</span> <span class="o">=</span> <span class="p">[</span><span class="mi">250</span><span class="p">,</span> <span class="mi">200</span><span class="p">,</span> <span class="mi">60</span><span class="p">],</span>
  <span class="nx">p1</span> <span class="o">=</span> <span class="p">[</span><span class="mi">560</span><span class="p">,</span> <span class="mi">300</span><span class="p">,</span> <span class="mi">120</span><span class="p">];</span>

<span class="kd">var</span> <span class="nx">svg</span> <span class="o">=</span> <span class="nx">d3</span>
  <span class="p">.</span><span class="nf">select</span><span class="p">(</span><span class="dl">"</span><span class="s2">body</span><span class="dl">"</span><span class="p">)</span>
  <span class="p">.</span><span class="nf">append</span><span class="p">(</span><span class="dl">"</span><span class="s2">svg</span><span class="dl">"</span><span class="p">)</span>
  <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">width</span><span class="dl">"</span><span class="p">,</span> <span class="nx">width</span><span class="p">)</span>
  <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">height</span><span class="dl">"</span><span class="p">,</span> <span class="nx">height</span><span class="p">)</span>
  <span class="p">.</span><span class="nf">append</span><span class="p">(</span><span class="dl">"</span><span class="s2">g</span><span class="dl">"</span><span class="p">)</span>
  <span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nx">transition</span><span class="p">,</span> <span class="nx">p0</span><span class="p">,</span> <span class="nx">p1</span><span class="p">);</span>

<span class="nx">svg</span>
  <span class="p">.</span><span class="nf">append</span><span class="p">(</span><span class="dl">"</span><span class="s2">path</span><span class="dl">"</span><span class="p">)</span>
  <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">class</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">mesh</span><span class="dl">"</span><span class="p">)</span>
  <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">d</span><span class="dl">"</span><span class="p">,</span> <span class="nx">d3</span><span class="p">.</span><span class="nx">hexbin</span><span class="p">.</span><span class="nf">mesh</span><span class="p">(</span><span class="nx">width</span><span class="p">,</span> <span class="nx">height</span><span class="p">,</span> <span class="nx">radius</span><span class="p">));</span>

<span class="nx">svg</span>
  <span class="p">.</span><span class="nf">selectAll</span><span class="p">(</span><span class="dl">"</span><span class="s2">circle</span><span class="dl">"</span><span class="p">)</span>
  <span class="p">.</span><span class="nf">data</span><span class="p">([</span><span class="nx">p0</span><span class="p">,</span> <span class="nx">p1</span><span class="p">])</span>
  <span class="p">.</span><span class="nf">enter</span><span class="p">()</span>
  <span class="p">.</span><span class="nf">append</span><span class="p">(</span><span class="dl">"</span><span class="s2">circle</span><span class="dl">"</span><span class="p">)</span>
  <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">class</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">,</span> <span class="nx">i</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">return</span> <span class="nx">i</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">end</span><span class="dl">"</span> <span class="p">:</span> <span class="dl">"</span><span class="s2">start</span><span class="dl">"</span><span class="p">;</span>
  <span class="p">&#125;)</span>
  <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">cx</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">return</span> <span class="nx">d</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span>
  <span class="p">&#125;)</span>
  <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">cy</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">return</span> <span class="nx">d</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span>
  <span class="p">&#125;)</span>
  <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">r</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">return</span> <span class="nx">d</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">/</span> <span class="mi">2</span> <span class="o">-</span> <span class="mf">0.5</span><span class="p">;</span>
  <span class="p">&#125;);</span>

<span class="kd">function</span> <span class="nf">transition</span><span class="p">(</span><span class="nx">svg</span><span class="p">,</span> <span class="nx">start</span><span class="p">,</span> <span class="nx">end</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="kd">var</span> <span class="nx">center</span> <span class="o">=</span> <span class="p">[</span><span class="nx">width</span> <span class="o">/</span> <span class="mi">2</span><span class="p">,</span> <span class="nx">height</span> <span class="o">/</span> <span class="mi">2</span><span class="p">],</span>
    <span class="nx">i</span> <span class="o">=</span> <span class="nx">d3</span><span class="p">.</span><span class="nf">interpolateZoom</span><span class="p">(</span><span class="nx">start</span><span class="p">,</span> <span class="nx">end</span><span class="p">);</span>

  <span class="nx">svg</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">transform</span><span class="dl">"</span><span class="p">,</span> <span class="nf">transform</span><span class="p">(</span><span class="nx">start</span><span class="p">))</span>
    <span class="p">.</span><span class="nf">transition</span><span class="p">()</span>
    <span class="p">.</span><span class="nf">delay</span><span class="p">(</span><span class="mi">250</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">duration</span><span class="p">(</span><span class="nx">i</span><span class="p">.</span><span class="nx">duration</span> <span class="o">*</span> <span class="mi">2</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">attrTween</span><span class="p">(</span><span class="dl">"</span><span class="s2">transform</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nf">function </span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">return</span> <span class="nf">transform</span><span class="p">(</span><span class="nf">i</span><span class="p">(</span><span class="nx">t</span><span class="p">));</span>
      <span class="p">&#125;;</span>
    <span class="p">&#125;)</span>
    <span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="dl">"</span><span class="s2">end</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="nx">d3</span><span class="p">.</span><span class="nf">select</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nf">call</span><span class="p">(</span><span class="nx">transition</span><span class="p">,</span> <span class="nx">end</span><span class="p">,</span> <span class="nx">start</span><span class="p">);</span>
    <span class="p">&#125;);</span>

  <span class="kd">function</span> <span class="nf">transform</span><span class="p">(</span><span class="nx">p</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">k</span> <span class="o">=</span> <span class="nx">height</span> <span class="o">/</span> <span class="nx">p</span><span class="p">[</span><span class="mi">2</span><span class="p">];</span>
    <span class="k">return </span><span class="p">(</span>
      <span class="dl">"</span><span class="s2">translate(</span><span class="dl">"</span> <span class="o">+</span>
      <span class="p">(</span><span class="nx">center</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">-</span> <span class="nx">p</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">*</span> <span class="nx">k</span><span class="p">)</span> <span class="o">+</span>
      <span class="dl">"</span><span class="s2">,</span><span class="dl">"</span> <span class="o">+</span>
      <span class="p">(</span><span class="nx">center</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">-</span> <span class="nx">p</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">*</span> <span class="nx">k</span><span class="p">)</span> <span class="o">+</span>
      <span class="dl">"</span><span class="s2">)scale(</span><span class="dl">"</span> <span class="o">+</span>
      <span class="nx">k</span> <span class="o">+</span>
      <span class="dl">"</span><span class="s2">)</span><span class="dl">"</span>
    <span class="p">);</span>
  <span class="p">&#125;</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/Atz5v/">original jsfiddle post</a></p>
