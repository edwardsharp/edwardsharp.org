---
title: "tiny lil'carousel"
date: "2020-10-11T02:52:30.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css","javascript"]
permalink: "/post/jsfiddle-pm1a0hq9/"
source_id: "pm1a0hq9"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/pm1a0hq9/38/"
source_revision: 38
---
<iframe class="code-demo" src="{{ '/content/media/2020/2020-10-11-jsfiddle-pm1a0hq9-demo.html' | relative_url }}" title="tiny lil'carousel" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>checkitout! just a little prototype that uses tiny-slider (http://ganlanyuan.github.io/tiny-slider) lib to make a mouse/keyboard friendly full window (fullscreen) carousel slider thingy.
see: https://jsfiddle.net/edwardsharp/pm1a0hq9/show</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;link</span>
  <span class="na">rel=</span><span class="s">"stylesheet"</span>
  <span class="na">href=</span><span class="s">"https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css"</span>
<span class="nt">/&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="c">&lt;!-- &lt;head&gt;
  &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css"&gt;
  [if (lt IE 9)]&gt;&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.helper.ie8.js"&gt;&lt;/script&gt;&lt;![endif]
  &lt;script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js"&gt;&lt;/script&gt;

&lt;/head&gt; --&gt;</span>

<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"carousel"</span> <span class="na">tabindex=</span><span class="s">"0"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"item"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;img</span>
      <span class="na">src=</span><span class="s">"https://source.unsplash.com/collection/993239/600x320"</span>
      <span class="na">width=</span><span class="s">"600"</span>
      <span class="na">height=</span><span class="s">"320"</span>
      <span class="na">alt=</span><span class="s">""</span>
    <span class="nt">/&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"item"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;img</span>
      <span class="na">src=</span><span class="s">"https://source.unsplash.com/collection/1673600/500x300"</span>
      <span class="na">width=</span><span class="s">"500"</span>
      <span class="na">height=</span><span class="s">"300"</span>
      <span class="na">alt=</span><span class="s">""</span>
    <span class="nt">/&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"item"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;img</span>
      <span class="na">src=</span><span class="s">"https://source.unsplash.com/collection/1513994/200x310"</span>
      <span class="na">width=</span><span class="s">"200"</span>
      <span class="na">height=</span><span class="s">"310"</span>
      <span class="na">alt=</span><span class="s">""</span>
    <span class="nt">/&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"item"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;img</span>
      <span class="na">src=</span><span class="s">"https://source.unsplash.com/collection/502925/400x330"</span>
      <span class="na">width=</span><span class="s">"400"</span>
      <span class="na">height=</span><span class="s">"330"</span>
      <span class="na">alt=</span><span class="s">""</span>
    <span class="nt">/&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"item"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;img</span>
      <span class="na">src=</span><span class="s">"https://source.unsplash.com/collection/1891993/640x300"</span>
      <span class="na">width=</span><span class="s">"640"</span>
      <span class="na">height=</span><span class="s">"300"</span>
      <span class="na">alt=</span><span class="s">""</span>
    <span class="nt">/&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"item"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;img</span>
      <span class="na">src=</span><span class="s">"https://source.unsplash.com/collection/1103088/360x240"</span>
      <span class="na">width=</span><span class="s">"360"</span>
      <span class="na">height=</span><span class="s">"240"</span>
      <span class="na">alt=</span><span class="s">""</span>
    <span class="nt">/&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"item"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;img</span>
      <span class="na">src=</span><span class="s">"https://source.unsplash.com/collection/548245/460x280"</span>
      <span class="na">width=</span><span class="s">"460"</span>
      <span class="na">height=</span><span class="s">"280"</span>
      <span class="na">alt=</span><span class="s">""</span>
    <span class="nt">/&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>

<span class="nt">&lt;div&gt;</span>
  <span class="nt">&lt;h1&gt;</span>zomg<span class="nt">&lt;/h1&gt;</span>
  <span class="nt">&lt;p&gt;</span>some other txt here!<span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;p&gt;</span>and yet another thing, here; wowowowowow!<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">html</span><span class="o">,</span>
<span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">black</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">white</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="o">*</span><span class="nd">:focus</span> <span class="p">&#123;</span>
  <span class="nl">outline</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.carousel</span> <span class="o">&gt;</span> <span class="nc">.item</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">100vw</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">100vh</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.carousel</span> <span class="o">&gt;</span> <span class="nc">.item</span> <span class="o">&gt;</span> <span class="nt">img</span> <span class="p">&#123;</span>
  <span class="nl">object-fit</span><span class="p">:</span> <span class="nb">cover</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="kd">var</span> <span class="nx">slider</span> <span class="o">=</span> <span class="nf">tns</span><span class="p">(&#123;</span>
    <span class="na">container</span><span class="p">:</span> <span class="dl">"</span><span class="s2">.carousel</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">items</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
    <span class="na">slideBy</span><span class="p">:</span> <span class="dl">"</span><span class="s2">page</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">autoplay</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
    <span class="na">controls</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
    <span class="na">arrowKeys</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
    <span class="na">mouseDrag</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
    <span class="na">autoplayButtonOutput</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
    <span class="na">nav</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
  <span class="p">&#125;);</span>
  <span class="kd">var</span> <span class="nx">carousel</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">querySelector</span><span class="p">(</span><span class="dl">"</span><span class="s2">.carousel</span><span class="dl">"</span><span class="p">);</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">carousel</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">carousel</span><span class="p">.</span><span class="nf">focus</span><span class="p">();</span>
  <span class="p">&#125;</span>
<span class="p">&#125;)();</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/pm1a0hq9/38/">original jsfiddle post</a></p>
