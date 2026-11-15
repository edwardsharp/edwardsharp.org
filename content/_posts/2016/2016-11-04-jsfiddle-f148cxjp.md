---
title: "canvas game"
date: "2016-11-04T06:05:41.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript","canvas"]
permalink: "/post/jsfiddle-f148cxjp/"
source_id: "f148cxjp"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/f148cxjp/1/"
source_revision: 1
---
<iframe class="code-demo" src="{{ '/content/media/2016/2016-11-04-jsfiddle-f148cxjp-demo.html' | relative_url }}" title="canvas game" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>i don't have up or down arrow keyz programm'd!</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.4.8/fabric.min.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;button</span> <span class="na">id=</span><span class="s">"toggleAnimation"</span><span class="nt">&gt;</span>toggle<span class="nt">&lt;/button&gt;</span>
<span class="nt">&lt;canvas</span> <span class="na">id=</span><span class="s">"c"</span> <span class="na">height=</span><span class="s">"5000"</span> <span class="na">width=</span><span class="s">"5000"</span><span class="nt">&gt;&lt;/canvas&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">html</span><span class="o">,</span>
<span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nf">#c</span> <span class="p">&#123;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">5000px</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">5000px</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">hotpink</span><span class="p">;</span>
  <span class="nl">overflow</span><span class="p">:</span> <span class="nb">scroll</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nf">#toggleAnimation</span> <span class="p">&#123;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">z-index</span><span class="p">:</span> <span class="m">1</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nf">#room1</span> <span class="p">&#123;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">100px</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">500px</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">500px</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">500px</span><span class="p">;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">black</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#rooom2</span> <span class="p">&#123;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">300px</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">1000px</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">250px</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">250px</span><span class="p">;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">black</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="kd">var</span> <span class="nx">canvas</span> <span class="o">=</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">__canvas</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">fabric</span><span class="p">.</span><span class="nc">StaticCanvas</span><span class="p">(</span><span class="dl">"</span><span class="s2">c</span><span class="dl">"</span><span class="p">));</span>

  <span class="nx">canvas</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span>
    <span class="k">new</span> <span class="nx">fabric</span><span class="p">.</span><span class="nc">Rect</span><span class="p">(&#123;</span>
      <span class="na">top</span><span class="p">:</span> <span class="mi">100</span><span class="p">,</span>
      <span class="na">left</span><span class="p">:</span> <span class="mi">100</span><span class="p">,</span>
      <span class="na">width</span><span class="p">:</span> <span class="mi">50</span><span class="p">,</span>
      <span class="na">height</span><span class="p">:</span> <span class="mi">50</span><span class="p">,</span>
      <span class="na">fill</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#f55</span><span class="dl">"</span><span class="p">,</span>
    <span class="p">&#125;),</span>
    <span class="k">new</span> <span class="nx">fabric</span><span class="p">.</span><span class="nc">Circle</span><span class="p">(&#123;</span> <span class="na">top</span><span class="p">:</span> <span class="mi">140</span><span class="p">,</span> <span class="na">left</span><span class="p">:</span> <span class="mi">230</span><span class="p">,</span> <span class="na">radius</span><span class="p">:</span> <span class="mi">75</span><span class="p">,</span> <span class="na">fill</span><span class="p">:</span> <span class="dl">"</span><span class="s2">green</span><span class="dl">"</span> <span class="p">&#125;),</span>
    <span class="k">new</span> <span class="nx">fabric</span><span class="p">.</span><span class="nc">Triangle</span><span class="p">(&#123;</span>
      <span class="na">top</span><span class="p">:</span> <span class="mi">300</span><span class="p">,</span>
      <span class="na">left</span><span class="p">:</span> <span class="mi">210</span><span class="p">,</span>
      <span class="na">width</span><span class="p">:</span> <span class="mi">100</span><span class="p">,</span>
      <span class="na">height</span><span class="p">:</span> <span class="mi">100</span><span class="p">,</span>
      <span class="na">fill</span><span class="p">:</span> <span class="dl">"</span><span class="s2">blue</span><span class="dl">"</span><span class="p">,</span>
    <span class="p">&#125;),</span>
  <span class="p">);</span>

  <span class="kd">var</span> <span class="nx">isAnimating</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>

  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#toggleAnimation</span><span class="dl">"</span><span class="p">).</span><span class="nf">click</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">isAnimating</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">isAnimating</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
      <span class="nx">isAnimating</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
      <span class="nf">animate</span><span class="p">();</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;);</span>

  <span class="nf">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nf">keyup</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">_offset</span> <span class="o">=</span> <span class="mi">50</span><span class="p">,</span>
      <span class="nx">_duration</span> <span class="o">=</span> <span class="mi">50</span><span class="p">;</span>

    <span class="k">if </span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">key</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">ArrowRight</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">canvas</span><span class="p">.</span><span class="nf">item</span><span class="p">(</span><span class="mi">1</span><span class="p">).</span><span class="nf">animate</span><span class="p">(</span><span class="dl">"</span><span class="s2">left</span><span class="dl">"</span><span class="p">,</span> <span class="nx">canvas</span><span class="p">.</span><span class="nf">item</span><span class="p">(</span><span class="mi">1</span><span class="p">).</span><span class="nf">getLeft</span><span class="p">()</span> <span class="o">+</span> <span class="nx">_offset</span><span class="p">,</span> <span class="p">&#123;</span>
        <span class="na">duration</span><span class="p">:</span> <span class="nx">_duration</span><span class="p">,</span>
        <span class="na">onChange</span><span class="p">:</span> <span class="nx">canvas</span><span class="p">.</span><span class="nx">renderAll</span><span class="p">.</span><span class="nf">bind</span><span class="p">(</span><span class="nx">canvas</span><span class="p">),</span>
      <span class="p">&#125;);</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">key</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">ArrowLeft</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">canvas</span><span class="p">.</span><span class="nf">item</span><span class="p">(</span><span class="mi">1</span><span class="p">).</span><span class="nf">animate</span><span class="p">(</span><span class="dl">"</span><span class="s2">left</span><span class="dl">"</span><span class="p">,</span> <span class="nx">canvas</span><span class="p">.</span><span class="nf">item</span><span class="p">(</span><span class="mi">1</span><span class="p">).</span><span class="nf">getLeft</span><span class="p">()</span> <span class="o">-</span> <span class="nx">_offset</span><span class="p">,</span> <span class="p">&#123;</span>
        <span class="na">duration</span><span class="p">:</span> <span class="nx">_duration</span><span class="p">,</span>
        <span class="na">onChange</span><span class="p">:</span> <span class="nx">canvas</span><span class="p">.</span><span class="nx">renderAll</span><span class="p">.</span><span class="nf">bind</span><span class="p">(</span><span class="nx">canvas</span><span class="p">),</span>
      <span class="p">&#125;);</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;);</span>

  <span class="kd">function</span> <span class="nf">animate</span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">isAnimating</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">canvas</span>
        <span class="p">.</span><span class="nf">item</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span>
        <span class="p">.</span><span class="nf">animate</span><span class="p">(</span><span class="dl">"</span><span class="s2">top</span><span class="dl">"</span><span class="p">,</span> <span class="nx">canvas</span><span class="p">.</span><span class="nf">item</span><span class="p">(</span><span class="mi">0</span><span class="p">).</span><span class="nf">getTop</span><span class="p">()</span> <span class="o">===</span> <span class="mi">500</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">100</span><span class="dl">"</span> <span class="p">:</span> <span class="dl">"</span><span class="s2">500</span><span class="dl">"</span><span class="p">,</span> <span class="p">&#123;</span>
          <span class="na">duration</span><span class="p">:</span> <span class="mi">1000</span><span class="p">,</span>
          <span class="na">onChange</span><span class="p">:</span> <span class="nx">canvas</span><span class="p">.</span><span class="nx">renderAll</span><span class="p">.</span><span class="nf">bind</span><span class="p">(</span><span class="nx">canvas</span><span class="p">),</span>
          <span class="na">onComplete</span><span class="p">:</span> <span class="nx">animate</span><span class="p">,</span>
        <span class="p">&#125;);</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>
<span class="p">&#125;)();</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/f148cxjp/1/">original jsfiddle post</a></p>
