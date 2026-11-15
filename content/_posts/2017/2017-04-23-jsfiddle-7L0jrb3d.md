---
title: "diagonal stripes"
description: "red, gold, and green stripes run diagonally behind a circle in a simple css composition."
date: "2017-04-23T08:39:37.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css"]
permalink: "/post/jsfiddle-7L0jrb3d/"
source_id: "7L0jrb3d"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/7L0jrb3d/1/"
source_revision: 1
---
<iframe class="code-demo" src="{{ '/content/media/2017/2017-04-23-jsfiddle-7L0jrb3d-demo.html' | relative_url }}" title="jsfiddle / 7L0jrb3d" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"stripeContainer"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"red stripe"</span><span class="nt">&gt;</span><span class="ni">&amp;nbsp;</span><span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"gold stripe"</span><span class="nt">&gt;</span><span class="ni">&amp;nbsp;</span><span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"green stripe"</span><span class="nt">&gt;</span><span class="ni">&amp;nbsp;</span><span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"circle"</span><span class="nt">&gt;</span><span class="ni">&amp;nbsp;</span><span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nc">.stripeContainer</span> <span class="p">&#123;</span>
  <span class="nl">transform</span><span class="p">:</span> <span class="nf">rotateZ</span><span class="p">(</span><span class="m">-45deg</span><span class="p">);</span>
  <span class="nl">overflow</span><span class="p">:</span> <span class="nb">hidden</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">fixed</span><span class="p">;</span>
  <span class="nl">z-index</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">200vw</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">right</span><span class="p">:</span> <span class="m">-200px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.stripe</span> <span class="p">&#123;</span>
  <span class="nl">min-height</span><span class="p">:</span> <span class="m">66px</span><span class="p">;</span>
  <span class="nl">margin-bottom</span><span class="p">:</span> <span class="m">66px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.red</span> <span class="p">&#123;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">red</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">white</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.gold</span> <span class="p">&#123;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">gold</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">white</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.green</span> <span class="p">&#123;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">seagreen</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">white</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.circle</span> <span class="p">&#123;</span>
  <span class="nl">box-shadow</span><span class="p">:</span> <span class="m">0</span> <span class="m">0</span> <span class="m">2px</span> <span class="m">20px</span> <span class="nx">black</span><span class="p">;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">black</span><span class="p">;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">9999px</span><span class="p">;</span>
  <span class="nl">-moz-border-radius</span><span class="p">:</span> <span class="m">9999px</span><span class="p">;</span>
  <span class="nl">-webkit-border-radius</span><span class="p">:</span> <span class="m">9999px</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">300px</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">300px</span><span class="p">;</span>
  <span class="nl">z-index</span><span class="p">:</span> <span class="m">1</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">fixed</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">121px</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">121px</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/7L0jrb3d/1/">original jsfiddle post</a></p>
