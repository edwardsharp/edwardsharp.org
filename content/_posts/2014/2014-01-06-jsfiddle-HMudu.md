---
title: "d3 force layout example"
date: "2014-01-06T17:56:04.000Z"
date_precision: "second"
tags: ["jsfiddle","code","mootools","html","javascript","svg"]
permalink: "/post/jsfiddle-HMudu/"
source_id: "HMudu"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/HMudu/1/"
source_revision: 1
---
<iframe class="code-demo" src="{{ '/content/media/2014/2014-01-06-jsfiddle-HMudu-demo.html' | relative_url }}" title="d3 force layout example" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>mostly stolen.</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="cp">&lt;!DOCTYPE html&gt;</span>
<span class="nt">&lt;html&gt;</span>
  <span class="nt">&lt;head&gt;</span>
    <span class="nt">&lt;title&gt;</span>Force-Directed Layout (Dynamic)<span class="nt">&lt;/title&gt;</span>
    <span class="nt">&lt;script
      </span><span class="na">type=</span><span class="s">"text/javascript"</span>
      <span class="na">src=</span><span class="s">"http://mbostock.github.com/d3/d3.min.js"</span>
    <span class="nt">&gt;&lt;/script&gt;</span>
    <span class="nt">&lt;script
      </span><span class="na">type=</span><span class="s">"text/javascript"</span>
      <span class="na">src=</span><span class="s">"http://mbostock.github.com/d3/d3.geom.min.js"</span>
    <span class="nt">&gt;&lt;/script&gt;</span>
    <span class="nt">&lt;script
      </span><span class="na">type=</span><span class="s">"text/javascript"</span>
      <span class="na">src=</span><span class="s">"http://mbostock.github.com/d3/d3.layout.min.js"</span>
    <span class="nt">&gt;&lt;/script&gt;</span>
    <span class="nt">&lt;style </span><span class="na">type=</span><span class="s">"text/css"</span><span class="nt">&gt;</span>
      <span class="nt">html</span><span class="o">,</span>
      <span class="nt">body</span> <span class="p">&#123;</span>
        <span class="nl">width</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
        <span class="nl">height</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
        <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
        <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
      <span class="p">&#125;</span>

      <span class="nt">rect</span> <span class="p">&#123;</span>
        <span class="py">fill</span><span class="p">:</span> <span class="nx">#fff</span><span class="p">;</span>
      <span class="p">&#125;</span>

      <span class="nc">.node</span> <span class="p">&#123;</span>
        <span class="py">fill</span><span class="p">:</span> <span class="nx">#000</span><span class="p">;</span>
      <span class="p">&#125;</span>

      <span class="nc">.cursor</span> <span class="p">&#123;</span>
        <span class="py">fill</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
        <span class="py">stroke</span><span class="p">:</span> <span class="nx">brown</span><span class="p">;</span>
        <span class="nl">pointer-events</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
      <span class="p">&#125;</span>

      <span class="nc">.link</span> <span class="p">&#123;</span>
        <span class="py">stroke</span><span class="p">:</span> <span class="nx">#999</span><span class="p">;</span>
      <span class="p">&#125;</span>
    <span class="nt">&lt;/style&gt;</span>
  <span class="nt">&lt;/head&gt;</span>
  <span class="nt">&lt;body&gt;</span>
    <span class="nt">&lt;script </span><span class="na">type=</span><span class="s">"text/javascript"</span><span class="nt">&gt;</span>
      <span class="kd">var</span> <span class="nx">w</span> <span class="o">=</span> <span class="mi">300</span><span class="p">,</span>
        <span class="nx">h</span> <span class="o">=</span> <span class="mi">300</span><span class="p">,</span>
        <span class="nx">fill</span> <span class="o">=</span> <span class="nx">d3</span><span class="p">.</span><span class="nx">scale</span><span class="p">.</span><span class="nf">category20</span><span class="p">(),</span>
        <span class="nx">nodes</span> <span class="o">=</span> <span class="p">[],</span>
        <span class="nx">links</span> <span class="o">=</span> <span class="p">[];</span>

      <span class="kd">var</span> <span class="nx">vis</span> <span class="o">=</span> <span class="nx">d3</span>
        <span class="p">.</span><span class="nf">select</span><span class="p">(</span><span class="dl">"</span><span class="s2">body</span><span class="dl">"</span><span class="p">)</span>
        <span class="p">.</span><span class="nf">append</span><span class="p">(</span><span class="dl">"</span><span class="s2">svg:svg</span><span class="dl">"</span><span class="p">)</span>
        <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">viewBox</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">0 0 </span><span class="dl">"</span> <span class="o">+</span> <span class="nx">w</span> <span class="o">+</span> <span class="dl">"</span><span class="s2"> </span><span class="dl">"</span> <span class="o">+</span> <span class="nx">h</span><span class="p">)</span>
        <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">preserveAspectRatio</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">xMinYMin</span><span class="dl">"</span><span class="p">);</span>

      <span class="nx">vis</span><span class="p">.</span><span class="nf">append</span><span class="p">(</span><span class="dl">"</span><span class="s2">svg:rect</span><span class="dl">"</span><span class="p">).</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">width</span><span class="dl">"</span><span class="p">,</span> <span class="nx">w</span><span class="p">).</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">height</span><span class="dl">"</span><span class="p">,</span> <span class="nx">h</span><span class="p">);</span>

      <span class="kd">var</span> <span class="nx">force</span> <span class="o">=</span> <span class="nx">d3</span><span class="p">.</span><span class="nx">layout</span><span class="p">.</span><span class="nf">force</span><span class="p">().</span><span class="nf">nodes</span><span class="p">(</span><span class="nx">nodes</span><span class="p">).</span><span class="nf">links</span><span class="p">(</span><span class="nx">links</span><span class="p">).</span><span class="nf">size</span><span class="p">([</span><span class="nx">w</span><span class="p">,</span> <span class="nx">h</span><span class="p">]);</span>

      <span class="kd">var</span> <span class="nx">cursor</span> <span class="o">=</span> <span class="nx">vis</span>
        <span class="p">.</span><span class="nf">append</span><span class="p">(</span><span class="dl">"</span><span class="s2">svg:circle</span><span class="dl">"</span><span class="p">)</span>
        <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">r</span><span class="dl">"</span><span class="p">,</span> <span class="mi">30</span><span class="p">)</span>
        <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">transform</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">translate(-100,-100)</span><span class="dl">"</span><span class="p">)</span>
        <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">class</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">cursor</span><span class="dl">"</span><span class="p">);</span>

      <span class="nx">force</span><span class="p">.</span><span class="nf">on</span><span class="p">(</span><span class="dl">"</span><span class="s2">tick</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
        <span class="nx">vis</span>
          <span class="p">.</span><span class="nf">selectAll</span><span class="p">(</span><span class="dl">"</span><span class="s2">line.link</span><span class="dl">"</span><span class="p">)</span>
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

        <span class="nx">vis</span>
          <span class="p">.</span><span class="nf">selectAll</span><span class="p">(</span><span class="dl">"</span><span class="s2">circle.node</span><span class="dl">"</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">cx</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">x</span><span class="p">;</span>
          <span class="p">&#125;)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">cy</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span>
          <span class="p">&#125;);</span>
      <span class="p">&#125;);</span>

      <span class="nx">vis</span><span class="p">.</span><span class="nf">on</span><span class="p">(</span><span class="dl">"</span><span class="s2">mousemove</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
        <span class="nx">cursor</span><span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">transform</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">translate(</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">d3</span><span class="p">.</span><span class="nx">svg</span><span class="p">.</span><span class="nf">mouse</span><span class="p">(</span><span class="k">this</span><span class="p">)</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">)</span><span class="dl">"</span><span class="p">);</span>
      <span class="p">&#125;);</span>

      <span class="nx">vis</span><span class="p">.</span><span class="nf">on</span><span class="p">(</span><span class="dl">"</span><span class="s2">mousedown</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
        <span class="kd">var</span> <span class="nx">point</span> <span class="o">=</span> <span class="nx">d3</span><span class="p">.</span><span class="nx">svg</span><span class="p">.</span><span class="nf">mouse</span><span class="p">(</span><span class="k">this</span><span class="p">),</span>
          <span class="nx">node</span> <span class="o">=</span> <span class="p">&#123;</span> <span class="na">x</span><span class="p">:</span> <span class="nx">point</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="na">y</span><span class="p">:</span> <span class="nx">point</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="p">&#125;,</span>
          <span class="nx">n</span> <span class="o">=</span> <span class="nx">nodes</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">node</span><span class="p">);</span>

        <span class="c1">// add links to any nearby nodes</span>
        <span class="nx">nodes</span><span class="p">.</span><span class="nf">forEach</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">target</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="kd">var</span> <span class="nx">x</span> <span class="o">=</span> <span class="nx">target</span><span class="p">.</span><span class="nx">x</span> <span class="o">-</span> <span class="nx">node</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span>
            <span class="nx">y</span> <span class="o">=</span> <span class="nx">target</span><span class="p">.</span><span class="nx">y</span> <span class="o">-</span> <span class="nx">node</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span>
          <span class="k">if </span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nf">sqrt</span><span class="p">(</span><span class="nx">x</span> <span class="o">*</span> <span class="nx">x</span> <span class="o">+</span> <span class="nx">y</span> <span class="o">*</span> <span class="nx">y</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mi">30</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">links</span><span class="p">.</span><span class="nf">push</span><span class="p">(&#123;</span> <span class="na">source</span><span class="p">:</span> <span class="nx">node</span><span class="p">,</span> <span class="na">target</span><span class="p">:</span> <span class="nx">target</span> <span class="p">&#125;);</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;);</span>

        <span class="nf">restart</span><span class="p">();</span>
      <span class="p">&#125;);</span>

      <span class="nf">restart</span><span class="p">();</span>

      <span class="kd">function</span> <span class="nf">restart</span><span class="p">()</span> <span class="p">&#123;</span>
        <span class="nx">vis</span>
          <span class="p">.</span><span class="nf">selectAll</span><span class="p">(</span><span class="dl">"</span><span class="s2">line.link</span><span class="dl">"</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">links</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">enter</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">insert</span><span class="p">(</span><span class="dl">"</span><span class="s2">svg:line</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">circle.node</span><span class="dl">"</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">class</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">link</span><span class="dl">"</span><span class="p">)</span>
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

        <span class="nx">vis</span>
          <span class="p">.</span><span class="nf">selectAll</span><span class="p">(</span><span class="dl">"</span><span class="s2">circle.node</span><span class="dl">"</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">nodes</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">enter</span><span class="p">()</span>
          <span class="p">.</span><span class="nf">insert</span><span class="p">(</span><span class="dl">"</span><span class="s2">svg:circle</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">circle.cursor</span><span class="dl">"</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">class</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">node</span><span class="dl">"</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">cx</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">x</span><span class="p">;</span>
          <span class="p">&#125;)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">cy</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span>
          <span class="p">&#125;)</span>
          <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">r</span><span class="dl">"</span><span class="p">,</span> <span class="mi">5</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nx">force</span><span class="p">.</span><span class="nx">drag</span><span class="p">);</span>

        <span class="nx">force</span><span class="p">.</span><span class="nf">start</span><span class="p">();</span>
      <span class="p">&#125;</span>
    <span class="nt">&lt;/script&gt;</span>
  <span class="nt">&lt;/body&gt;</span>
<span class="nt">&lt;/html&gt;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/HMudu/1/">original jsfiddle post</a></p>
