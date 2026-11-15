---
title: "rebelcricket"
date: "2016-10-22T08:20:47.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css"]
permalink: "/post/jsfiddle-kaebnbk2/"
source_id: "kaebnbk2"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/kaebnbk2/2/"
source_revision: 2
---
<iframe class="code-demo" src="{{ '/content/media/2016/2016-10-22-jsfiddle-kaebnbk2-demo.html' | relative_url }}" title="rebelcricket" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>screen prints</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"rebelcricket-logo-container"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"rebelcricket-logo"</span><span class="nt">&gt;</span>
    REBEL
    <span class="nt">&lt;br</span> <span class="nt">/&gt;</span>
    CRICKET <span class="nt">&lt;br</span> <span class="nt">/&gt;</span>
    SCREEN <span class="nt">&lt;br</span> <span class="nt">/&gt;</span>
    PRINTS
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"cross"</span><span class="nt">&gt;&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nc">.cross</span> <span class="p">&#123;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">-35px</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">55vw</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">55vw</span><span class="p">;</span>
  <span class="nl">max-height</span><span class="p">:</span> <span class="m">500px</span><span class="p">;</span>
  <span class="nl">max-width</span><span class="p">:</span> <span class="m">500px</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">white</span><span class="p">;</span>
  <span class="nl">z-index</span><span class="p">:</span> <span class="m">1</span><span class="p">;</span>
  <span class="nl">-webkit-clip-path</span><span class="p">:</span> <span class="nf">polygon</span><span class="p">(</span>
    <span class="m">0</span> <span class="m">48%</span><span class="p">,</span>
    <span class="m">48%</span> <span class="m">48%</span><span class="p">,</span>
    <span class="m">48%</span> <span class="m">0</span><span class="p">,</span>
    <span class="m">52%</span> <span class="m">0</span><span class="p">,</span>
    <span class="m">52%</span> <span class="m">48%</span><span class="p">,</span>
    <span class="m">100%</span> <span class="m">48%</span><span class="p">,</span>
    <span class="m">100%</span> <span class="m">52%</span><span class="p">,</span>
    <span class="m">52%</span> <span class="m">52%</span><span class="p">,</span>
    <span class="m">52%</span> <span class="m">100%</span><span class="p">,</span>
    <span class="m">48%</span> <span class="m">100%</span><span class="p">,</span>
    <span class="m">48%</span> <span class="m">52%</span><span class="p">,</span>
    <span class="m">0</span> <span class="m">52%</span>
  <span class="p">);</span>
  <span class="nl">clip-path</span><span class="p">:</span> <span class="nf">polygon</span><span class="p">(</span>
    <span class="m">0</span> <span class="m">48%</span><span class="p">,</span>
    <span class="m">48%</span> <span class="m">48%</span><span class="p">,</span>
    <span class="m">48%</span> <span class="m">0</span><span class="p">,</span>
    <span class="m">52%</span> <span class="m">0</span><span class="p">,</span>
    <span class="m">52%</span> <span class="m">48%</span><span class="p">,</span>
    <span class="m">100%</span> <span class="m">48%</span><span class="p">,</span>
    <span class="m">100%</span> <span class="m">52%</span><span class="p">,</span>
    <span class="m">52%</span> <span class="m">52%</span><span class="p">,</span>
    <span class="m">52%</span> <span class="m">100%</span><span class="p">,</span>
    <span class="m">48%</span> <span class="m">100%</span><span class="p">,</span>
    <span class="m">48%</span> <span class="m">52%</span><span class="p">,</span>
    <span class="m">0</span> <span class="m">52%</span>
  <span class="p">);</span>
<span class="p">&#125;</span>

<span class="nc">.rebelcricket-logo-container</span> <span class="p">&#123;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">50px</span><span class="p">;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="o">-</span><span class="n">ms-flexbox</span><span class="p">;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="o">-</span><span class="n">webkit-flex</span><span class="p">;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">flex</span><span class="p">;</span>
  <span class="nl">-ms-flex-direction</span><span class="p">:</span> <span class="nb">row</span><span class="p">;</span>
  <span class="nl">-webkit-flex-direction</span><span class="p">:</span> <span class="nb">row</span><span class="p">;</span>
  <span class="nl">flex-direction</span><span class="p">:</span> <span class="nb">row</span><span class="p">;</span>
  <span class="nl">-ms-flex-pack</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
  <span class="nl">-webkit-justify-content</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
  <span class="nl">justify-content</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
  <span class="nl">box-shadow</span><span class="p">:</span> <span class="m">0</span> <span class="m">0</span> <span class="m">2px</span> <span class="m">10px</span> <span class="nx">white</span><span class="p">;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">9999px</span><span class="p">;</span>
  <span class="nl">-moz-border-radius</span><span class="p">:</span> <span class="m">9999px</span><span class="p">;</span>
  <span class="nl">-webkit-border-radius</span><span class="p">:</span> <span class="m">9999px</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">40vw</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">40vw</span><span class="p">;</span>
  <span class="nl">max-height</span><span class="p">:</span> <span class="m">400px</span><span class="p">;</span>
  <span class="nl">max-width</span><span class="p">:</span> <span class="m">400px</span><span class="p">;</span>
  <span class="nl">z-index</span><span class="p">:</span> <span class="m">2</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.rebelcricket-logo</span> <span class="p">&#123;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">-15px</span><span class="p">;</span>
  <span class="nl">line-height</span><span class="p">:</span> <span class="m">1em</span><span class="p">;</span>
  <span class="nl">z-index</span><span class="p">:</span> <span class="m">3</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">white</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">3.8em</span><span class="p">;</span>
  <span class="nl">font-family</span><span class="p">:</span> <span class="n">avenir</span><span class="p">;</span>
  <span class="nl">font-weight</span><span class="p">:</span> <span class="nb">bold</span><span class="p">;</span>
  <span class="nl">-webkit-text-fill-color</span><span class="p">:</span> <span class="nx">black</span><span class="p">;</span>
  <span class="nl">-webkit-text-stroke-width</span><span class="p">:</span> <span class="m">2px</span><span class="p">;</span>
  <span class="nl">-webkit-text-stroke-color</span><span class="p">:</span> <span class="nx">white</span><span class="p">;</span>
  <span class="nl">transform</span><span class="p">:</span> <span class="nf">rotateZ</span><span class="p">(</span><span class="m">-3deg</span><span class="p">);</span>
  <span class="nl">margin-left</span><span class="p">:</span> <span class="m">10px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="c">/* center shit */</span>

<span class="nt">html</span><span class="o">,</span>
<span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">flex</span><span class="p">;</span>
  <span class="nl">justify-content</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
  <span class="nl">align-items</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">black</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/kaebnbk2/2/">original jsfiddle post</a></p>
