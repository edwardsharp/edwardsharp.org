---
title: "Acceleration Ball Bounce"
date: "2017-04-21T06:37:25.000Z"
date_precision: "second"
tags: ["jsfiddle","code","processing.js","html","javascript","canvas"]
permalink: "/post/jsfiddle-kj6temtf/"
source_id: "kj6temtf"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/kj6temtf/"
source_revision: 0
---
<iframe class="code-demo" src="{{ '/content/media/2017/2017-04-21-jsfiddle-kj6temtf-demo.html' | relative_url }}" title="Acceleration Ball Bounce" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>https://p5js.org/examples/mobile-acceleration-ball-bounce.html</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.4.23/p5.min.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="c1">// Position Variables</span>
<span class="kd">var</span> <span class="nx">x</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">y</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>

<span class="c1">// Speed - Velocity</span>
<span class="kd">var</span> <span class="nx">vx</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">vy</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>

<span class="c1">// Acceleration</span>
<span class="kd">var</span> <span class="nx">ax</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">ay</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>

<span class="kd">var</span> <span class="nx">vMultiplier</span> <span class="o">=</span> <span class="mf">0.007</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">bMultiplier</span> <span class="o">=</span> <span class="mf">0.6</span><span class="p">;</span>

<span class="kd">function</span> <span class="nf">setup</span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nf">createCanvas</span><span class="p">(</span><span class="nx">displayWidth</span><span class="p">,</span> <span class="nx">displayHeight</span><span class="p">);</span>
  <span class="nf">fill</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">draw</span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nf">background</span><span class="p">(</span><span class="mi">255</span><span class="p">);</span>
  <span class="nf">ballMove</span><span class="p">();</span>
  <span class="nf">ellipse</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">,</span> <span class="mi">30</span><span class="p">,</span> <span class="mi">30</span><span class="p">);</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">ballMove</span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nx">ax</span> <span class="o">=</span> <span class="nx">accelerationX</span><span class="p">;</span>
  <span class="nx">ay</span> <span class="o">=</span> <span class="nx">accelerationY</span><span class="p">;</span>

  <span class="nx">vx</span> <span class="o">=</span> <span class="nx">vx</span> <span class="o">+</span> <span class="nx">ay</span><span class="p">;</span>
  <span class="nx">vy</span> <span class="o">=</span> <span class="nx">vy</span> <span class="o">+</span> <span class="nx">ax</span><span class="p">;</span>
  <span class="nx">y</span> <span class="o">=</span> <span class="nx">y</span> <span class="o">+</span> <span class="nx">vy</span> <span class="o">*</span> <span class="nx">vMultiplier</span><span class="p">;</span>
  <span class="nx">x</span> <span class="o">=</span> <span class="nx">x</span> <span class="o">+</span> <span class="nx">vx</span> <span class="o">*</span> <span class="nx">vMultiplier</span><span class="p">;</span>

  <span class="c1">// Bounce when touch the edge of the canvas</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">x</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">x</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
    <span class="nx">vx</span> <span class="o">=</span> <span class="o">-</span><span class="nx">vx</span> <span class="o">*</span> <span class="nx">bMultiplier</span><span class="p">;</span>
  <span class="p">&#125;</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">y</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">y</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
    <span class="nx">vy</span> <span class="o">=</span> <span class="o">-</span><span class="nx">vy</span> <span class="o">*</span> <span class="nx">bMultiplier</span><span class="p">;</span>
  <span class="p">&#125;</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">x</span> <span class="o">&gt;</span> <span class="nx">width</span> <span class="o">-</span> <span class="mi">20</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">x</span> <span class="o">=</span> <span class="nx">width</span> <span class="o">-</span> <span class="mi">20</span><span class="p">;</span>
    <span class="nx">vx</span> <span class="o">=</span> <span class="o">-</span><span class="nx">vx</span> <span class="o">*</span> <span class="nx">bMultiplier</span><span class="p">;</span>
  <span class="p">&#125;</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">y</span> <span class="o">&gt;</span> <span class="nx">height</span> <span class="o">-</span> <span class="mi">20</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">y</span> <span class="o">=</span> <span class="nx">height</span> <span class="o">-</span> <span class="mi">20</span><span class="p">;</span>
    <span class="nx">vy</span> <span class="o">=</span> <span class="o">-</span><span class="nx">vy</span> <span class="o">*</span> <span class="nx">bMultiplier</span><span class="p">;</span>
  <span class="p">&#125;</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/kj6temtf/">original jsfiddle post</a></p>
