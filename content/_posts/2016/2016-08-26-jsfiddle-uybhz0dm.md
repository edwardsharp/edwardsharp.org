---
title: "ribbon corner"
date: "2016-08-26T07:08:55.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css"]
permalink: "/post/jsfiddle-uybhz0dm/"
source_id: "uybhz0dm"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/uybhz0dm/"
source_revision: 1
---
<iframe class="code-demo" src="{{ '/content/media/2016/2016-08-26-jsfiddle-uybhz0dm-demo.html' | relative_url }}" title="ribbon corner" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"corner-ribbon bottom-right sticky ornage shadow"</span><span class="nt">&gt;</span>Ribbon!<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="c">/* The ribbons */</span>

<span class="nc">.corner-ribbon</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">200px</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#e43</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">25px</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">-50px</span><span class="p">;</span>
  <span class="nl">text-align</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
  <span class="nl">line-height</span><span class="p">:</span> <span class="m">50px</span><span class="p">;</span>
  <span class="nl">letter-spacing</span><span class="p">:</span> <span class="m">1px</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#f0f0f0</span><span class="p">;</span>
  <span class="nl">transform</span><span class="p">:</span> <span class="nf">rotate</span><span class="p">(</span><span class="m">-45deg</span><span class="p">);</span>
  <span class="nl">-webkit-transform</span><span class="p">:</span> <span class="nf">rotate</span><span class="p">(</span><span class="m">-45deg</span><span class="p">);</span>
<span class="p">&#125;</span>

<span class="c">/* Custom styles */</span>

<span class="nc">.corner-ribbon.sticky</span> <span class="p">&#123;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">fixed</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.corner-ribbon.shadow</span> <span class="p">&#123;</span>
  <span class="nl">box-shadow</span><span class="p">:</span> <span class="m">0</span> <span class="m">0</span> <span class="m">3px</span> <span class="nf">rgba</span><span class="p">(</span><span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0.3</span><span class="p">);</span>
<span class="p">&#125;</span>

<span class="c">/* Different positions */</span>

<span class="nc">.corner-ribbon.top-left</span> <span class="p">&#123;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">25px</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">-50px</span><span class="p">;</span>
  <span class="nl">transform</span><span class="p">:</span> <span class="nf">rotate</span><span class="p">(</span><span class="m">-45deg</span><span class="p">);</span>
  <span class="nl">-webkit-transform</span><span class="p">:</span> <span class="nf">rotate</span><span class="p">(</span><span class="m">-45deg</span><span class="p">);</span>
<span class="p">&#125;</span>

<span class="nc">.corner-ribbon.top-right</span> <span class="p">&#123;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">25px</span><span class="p">;</span>
  <span class="nl">right</span><span class="p">:</span> <span class="m">-50px</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="nb">auto</span><span class="p">;</span>
  <span class="nl">transform</span><span class="p">:</span> <span class="nf">rotate</span><span class="p">(</span><span class="m">45deg</span><span class="p">);</span>
  <span class="nl">-webkit-transform</span><span class="p">:</span> <span class="nf">rotate</span><span class="p">(</span><span class="m">45deg</span><span class="p">);</span>
<span class="p">&#125;</span>

<span class="nc">.corner-ribbon.bottom-left</span> <span class="p">&#123;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="nb">auto</span><span class="p">;</span>
  <span class="nl">bottom</span><span class="p">:</span> <span class="m">25px</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">-50px</span><span class="p">;</span>
  <span class="nl">transform</span><span class="p">:</span> <span class="nf">rotate</span><span class="p">(</span><span class="m">45deg</span><span class="p">);</span>
  <span class="nl">-webkit-transform</span><span class="p">:</span> <span class="nf">rotate</span><span class="p">(</span><span class="m">45deg</span><span class="p">);</span>
<span class="p">&#125;</span>

<span class="nc">.corner-ribbon.bottom-right</span> <span class="p">&#123;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="nb">auto</span><span class="p">;</span>
  <span class="nl">right</span><span class="p">:</span> <span class="m">-50px</span><span class="p">;</span>
  <span class="nl">bottom</span><span class="p">:</span> <span class="m">25px</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="nb">auto</span><span class="p">;</span>
  <span class="nl">transform</span><span class="p">:</span> <span class="nf">rotate</span><span class="p">(</span><span class="m">-45deg</span><span class="p">);</span>
  <span class="nl">-webkit-transform</span><span class="p">:</span> <span class="nf">rotate</span><span class="p">(</span><span class="m">-45deg</span><span class="p">);</span>
<span class="p">&#125;</span>

<span class="c">/* Colors */</span>

<span class="nc">.corner-ribbon.white</span> <span class="p">&#123;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#f0f0f0</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#555</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.corner-ribbon.black</span> <span class="p">&#123;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#333</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.corner-ribbon.grey</span> <span class="p">&#123;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#999</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.corner-ribbon.blue</span> <span class="p">&#123;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#39d</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.corner-ribbon.green</span> <span class="p">&#123;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#2c7</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.corner-ribbon.turquoise</span> <span class="p">&#123;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#1b9</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.corner-ribbon.purple</span> <span class="p">&#123;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#95b</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.corner-ribbon.red</span> <span class="p">&#123;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#e43</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.corner-ribbon.orange</span> <span class="p">&#123;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#e82</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.corner-ribbon.yellow</span> <span class="p">&#123;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#ec0</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/uybhz0dm/">original jsfiddle post</a></p>
