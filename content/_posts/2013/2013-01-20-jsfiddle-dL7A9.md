---
title: "Default jQEditRangeSlider"
date: "2013-01-20T05:31:48.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-dL7A9/"
source_id: "dL7A9"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/dL7A9/"
source_revision: 0
---
<iframe class="code-demo" src="{{ '/content/media/2013/2013-01-20-jsfiddle-dL7A9-demo.html' | relative_url }}" title="Default jQEditRangeSlider" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>If you want to reproduce bugs on editRangeSlider !</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://raw.github.com/ghusse/jQRangeSlider/master/jQRangeSliderMouseTouch.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://raw.github.com/ghusse/jQRangeSlider/master/jQRangeSliderDraggable.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://raw.github.com/ghusse/jQRangeSlider/master/jQRangeSliderBar.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://raw.github.com/ghusse/jQRangeSlider/master/jQRangeSliderHandle.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://raw.github.com/ghusse/jQRangeSlider/master/jQRangeSliderLabel.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://raw.github.com/ghusse/jQRangeSlider/master/jQEditRangeSliderLabel.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://raw.github.com/ghusse/jQRangeSlider/master/jQRangeSlider.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://raw.github.com/ghusse/jQRangeSlider/master/jQEditRangeSlider.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;link</span>
  <span class="na">rel=</span><span class="s">"stylesheet"</span>
  <span class="na">href=</span><span class="s">"https://raw.github.com/ghusse/jQRangeSlider/master/css/iThing.css"</span>
<span class="nt">/&gt;</span>
<span class="nt">&lt;article</span> <span class="na">style=</span><span class="s">"padding: 50px"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"slider"</span><span class="nt">&gt;&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"slider02"</span><span class="nt">&gt;&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"slider03"</span><span class="nt">&gt;&lt;/div&gt;</span>
<span class="nt">&lt;/article&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="c">/**
 * Theme for jQRangeSlider
 * Inspired by http://cssdeck.com/item/381/itunes-10-storage-bar
 *        and http://cssdeck.com/item/276/pure-css-arrow-with-border-tooltip
 */</span>

<span class="nc">.ui-rangeSlider-withArrows</span> <span class="nc">.ui-rangeSlider-container</span> <span class="p">&#123;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span> <span class="m">15px</span><span class="p">;</span>
  <span class="nl">-webkit-box-shadow</span><span class="p">:</span> <span class="nb">inset</span> <span class="m">0px</span> <span class="m">4px</span> <span class="m">6px</span> <span class="m">-2px</span> <span class="nf">RGBA</span><span class="p">(</span><span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0.5</span><span class="p">);</span>
  <span class="nl">-moz-box-shadow</span><span class="p">:</span> <span class="nb">inset</span> <span class="m">0px</span> <span class="m">4px</span> <span class="m">6px</span> <span class="m">-2px</span> <span class="nf">RGBA</span><span class="p">(</span><span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0.5</span><span class="p">);</span>
  <span class="nl">box-shadow</span><span class="p">:</span> <span class="nb">inset</span> <span class="m">0px</span> <span class="m">4px</span> <span class="m">6px</span> <span class="m">-2px</span> <span class="nf">RGBA</span><span class="p">(</span><span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0.5</span><span class="p">);</span>
<span class="p">&#125;</span>

<span class="nc">.ui-rangeSlider-noArrow</span> <span class="nc">.ui-rangeSlider-container</span> <span class="p">&#123;</span>
  <span class="nl">-moz-border-radius</span><span class="p">:</span> <span class="m">4px</span><span class="p">;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">4px</span><span class="p">;</span>
  <span class="nl">border-left</span><span class="p">:</span> <span class="nb">solid</span> <span class="m">1px</span> <span class="nx">#515862</span><span class="p">;</span>
  <span class="nl">border-right</span><span class="p">:</span> <span class="nb">solid</span> <span class="m">1px</span> <span class="nx">#515862</span><span class="p">;</span>

  <span class="nl">-webkit-box-shadow</span><span class="p">:</span> <span class="nb">inset</span> <span class="m">0px</span> <span class="m">4px</span> <span class="m">6px</span> <span class="m">-2px</span> <span class="nf">RGBA</span><span class="p">(</span><span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0.5</span><span class="p">);</span>
  <span class="nl">-moz-box-shadow</span><span class="p">:</span> <span class="nb">inset</span> <span class="m">0px</span> <span class="m">4px</span> <span class="m">6px</span> <span class="m">-2px</span> <span class="nf">RGBA</span><span class="p">(</span><span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0.5</span><span class="p">);</span>
  <span class="nl">box-shadow</span><span class="p">:</span> <span class="nb">inset</span> <span class="m">0px</span> <span class="m">4px</span> <span class="m">6px</span> <span class="m">-2px</span> <span class="nf">RGBA</span><span class="p">(</span><span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0.5</span><span class="p">);</span>
<span class="p">&#125;</span>

<span class="nc">.ui-rangeSlider-container</span> <span class="p">&#123;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">30px</span><span class="p">;</span>
  <span class="nl">border-top</span><span class="p">:</span> <span class="nb">solid</span> <span class="m">1px</span> <span class="nx">#232a32</span><span class="p">;</span>
  <span class="nl">border-bottom</span><span class="p">:</span> <span class="nb">solid</span> <span class="m">1px</span> <span class="nx">#6a7179</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#67707f</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="o">-</span><span class="n">moz-linear-gradient</span><span class="p">(</span><span class="nb">top</span><span class="p">,</span> <span class="nx">#67707f</span> <span class="m">0%</span><span class="p">,</span> <span class="nx">#888da0</span> <span class="m">100%</span><span class="p">);</span>
  <span class="nl">background</span><span class="p">:</span> <span class="o">-</span><span class="n">webkit-gradient</span><span class="p">(</span>
    <span class="nb">linear</span><span class="p">,</span>
    <span class="nb">left</span> <span class="nb">top</span><span class="p">,</span>
    <span class="nb">left</span> <span class="nb">bottom</span><span class="p">,</span>
    <span class="n">color-stop</span><span class="p">(</span><span class="m">0%</span><span class="p">,</span> <span class="nx">#67707f</span><span class="p">),</span>
    <span class="n">color-stop</span><span class="p">(</span><span class="m">100%</span><span class="p">,</span> <span class="nx">#888da0</span><span class="p">)</span>
  <span class="p">);</span>
<span class="p">&#125;</span>

<span class="nc">.ui-rangeSlider-arrow</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">14px</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">30px</span><span class="p">;</span>
  <span class="nl">border-top</span><span class="p">:</span> <span class="nb">solid</span> <span class="m">1px</span> <span class="nx">#232a32</span><span class="p">;</span>
  <span class="nl">border-bottom</span><span class="p">:</span> <span class="nb">solid</span> <span class="m">1px</span> <span class="nx">#6a7179</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#67707f</span><span class="p">;</span>
  <span class="nl">cursor</span><span class="p">:</span> <span class="nb">pointer</span><span class="p">;</span>

  <span class="nl">box-shadow</span><span class="p">:</span> <span class="nb">inset</span> <span class="m">0px</span> <span class="m">4px</span> <span class="m">6px</span> <span class="m">-2px</span> <span class="nf">RGBA</span><span class="p">(</span><span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0.5</span><span class="p">);</span>
  <span class="nl">-webkit-box-shadow</span><span class="p">:</span> <span class="nb">inset</span> <span class="m">0px</span> <span class="m">4px</span> <span class="m">6px</span> <span class="m">-2px</span> <span class="nf">RGBA</span><span class="p">(</span><span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0.5</span><span class="p">);</span>
  <span class="nl">-moz-box-shadow</span><span class="p">:</span> <span class="nb">inset</span> <span class="m">0px</span> <span class="m">4px</span> <span class="m">6px</span> <span class="m">-2px</span> <span class="nf">RGBA</span><span class="p">(</span><span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0.5</span><span class="p">);</span>
  <span class="nl">background</span><span class="p">:</span> <span class="o">-</span><span class="n">moz-linear-gradient</span><span class="p">(</span><span class="nb">top</span><span class="p">,</span> <span class="nx">#67707f</span> <span class="m">0%</span><span class="p">,</span> <span class="nx">#888da0</span> <span class="m">100%</span><span class="p">);</span>
  <span class="nl">background</span><span class="p">:</span> <span class="o">-</span><span class="n">webkit-gradient</span><span class="p">(</span>
    <span class="nb">linear</span><span class="p">,</span>
    <span class="nb">left</span> <span class="nb">top</span><span class="p">,</span>
    <span class="nb">left</span> <span class="nb">bottom</span><span class="p">,</span>
    <span class="n">color-stop</span><span class="p">(</span><span class="m">0%</span><span class="p">,</span> <span class="nx">#67707f</span><span class="p">),</span>
    <span class="n">color-stop</span><span class="p">(</span><span class="m">100%</span><span class="p">,</span> <span class="nx">#888da0</span><span class="p">)</span>
  <span class="p">);</span>
<span class="p">&#125;</span>

<span class="nc">.ui-rangeSlider-leftArrow</span> <span class="p">&#123;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">4px</span> <span class="m">0</span> <span class="m">0</span> <span class="m">4px</span><span class="p">;</span>
  <span class="nl">border-left</span><span class="p">:</span> <span class="nb">solid</span> <span class="m">1px</span> <span class="nx">#515862</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.ui-rangeSlider-rightArrow</span> <span class="p">&#123;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">0</span> <span class="m">4px</span> <span class="m">4px</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">border-right</span><span class="p">:</span> <span class="nb">solid</span> <span class="m">1px</span> <span class="nx">#515862</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.ui-rangeSlider-arrow-inner</span> <span class="p">&#123;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">50%</span><span class="p">;</span>
  <span class="nl">border</span><span class="p">:</span> <span class="m">10px</span> <span class="nb">solid</span> <span class="nb">transparent</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>

  <span class="nl">margin-top</span><span class="p">:</span> <span class="m">-10px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.ui-rangeSlider-leftArrow</span> <span class="nc">.ui-rangeSlider-arrow-inner</span> <span class="p">&#123;</span>
  <span class="nl">border-right</span><span class="p">:</span> <span class="m">10px</span> <span class="nb">solid</span> <span class="nx">#a4a8b7</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">margin-left</span><span class="p">:</span> <span class="m">-8px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.ui-rangeSlider-leftArrow</span><span class="nd">:hover</span> <span class="nc">.ui-rangeSlider-arrow-inner</span> <span class="p">&#123;</span>
  <span class="nl">border-right</span><span class="p">:</span> <span class="m">10px</span> <span class="nb">solid</span> <span class="nx">#b3b6c2</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.ui-rangeSlider-rightArrow</span> <span class="nc">.ui-rangeSlider-arrow-inner</span> <span class="p">&#123;</span>
  <span class="nl">border-left</span><span class="p">:</span> <span class="m">10px</span> <span class="nb">solid</span> <span class="nx">#a4a8b7</span><span class="p">;</span>
  <span class="nl">right</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">margin-right</span><span class="p">:</span> <span class="m">-8px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.ui-rangeSlider-rightArrow</span><span class="nd">:hover</span> <span class="nc">.ui-rangeSlider-arrow-inner</span> <span class="p">&#123;</span>
  <span class="nl">border-left</span><span class="p">:</span> <span class="m">10px</span> <span class="nb">solid</span> <span class="nx">#b3b6c2</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.ui-rangeSlider-innerBar</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">110%</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">-10px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.ui-rangeSlider-bar</span> <span class="p">&#123;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#68a1d6</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">29px</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">1px</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">-moz-border-radius</span><span class="p">:</span> <span class="m">4px</span><span class="p">;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">4px</span><span class="p">;</span>
  <span class="nl">cursor</span><span class="p">:</span> <span class="n">move</span><span class="p">;</span>
  <span class="nl">cursor</span><span class="p">:</span> <span class="n">grab</span><span class="p">;</span>
  <span class="nl">cursor</span><span class="p">:</span> <span class="o">-</span><span class="n">moz-grab</span><span class="p">;</span>

  <span class="nl">-webkit-box-shadow</span><span class="p">:</span> <span class="nb">inset</span> <span class="m">0</span> <span class="m">2px</span> <span class="m">6px</span> <span class="nf">RGBA</span><span class="p">(</span><span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0.5</span><span class="p">);</span>
  <span class="nl">-moz-box-shadow</span><span class="p">:</span> <span class="nb">inset</span> <span class="m">0</span> <span class="m">2px</span> <span class="m">6px</span> <span class="nf">RGBA</span><span class="p">(</span><span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0.5</span><span class="p">);</span>
  <span class="nl">box-shadow</span><span class="p">:</span> <span class="nb">inset</span> <span class="m">0</span> <span class="m">2px</span> <span class="m">6px</span> <span class="nf">RGBA</span><span class="p">(</span><span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0.5</span><span class="p">);</span>
<span class="p">&#125;</span>

<span class="nc">.ui-rangeSlider-handle</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">10px</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">30px</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nb">transparent</span><span class="p">;</span>
  <span class="nl">cursor</span><span class="p">:</span> <span class="n">col-resize</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.ui-rangeSlider-label</span> <span class="p">&#123;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#888da0</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="o">-</span><span class="n">moz-linear-gradient</span><span class="p">(</span><span class="nb">top</span><span class="p">,</span> <span class="nx">#67707f</span> <span class="m">0%</span><span class="p">,</span> <span class="nx">#888da0</span> <span class="m">100%</span><span class="p">);</span>
  <span class="nl">background</span><span class="p">:</span> <span class="o">-</span><span class="n">webkit-gradient</span><span class="p">(</span>
    <span class="nb">linear</span><span class="p">,</span>
    <span class="nb">left</span> <span class="nb">top</span><span class="p">,</span>
    <span class="nb">left</span> <span class="nb">bottom</span><span class="p">,</span>
    <span class="n">color-stop</span><span class="p">(</span><span class="m">0%</span><span class="p">,</span> <span class="nx">#67707f</span><span class="p">),</span>
    <span class="n">color-stop</span><span class="p">(</span><span class="m">100%</span><span class="p">,</span> <span class="nx">#888da0</span><span class="p">)</span>
  <span class="p">);</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">5px</span> <span class="m">10px</span><span class="p">;</span>
  <span class="nl">bottom</span><span class="p">:</span> <span class="m">10px</span><span class="p">;</span>

  <span class="nl">-moz-border-radius</span><span class="p">:</span> <span class="m">4px</span><span class="p">;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">4px</span><span class="p">;</span>

  <span class="nl">-webkit-box-shadow</span><span class="p">:</span> <span class="m">0px</span> <span class="m">1px</span> <span class="m">0px</span> <span class="nx">#c2c5d6</span><span class="p">;</span>
  <span class="nl">-moz-box-shadow</span><span class="p">:</span> <span class="m">0px</span> <span class="m">1px</span> <span class="m">0px</span> <span class="nx">#c2c5d6</span><span class="p">;</span>
  <span class="nl">box-shadow</span><span class="p">:</span> <span class="m">0px</span> <span class="m">1px</span> <span class="m">0px</span> <span class="nx">#c2c5d6</span><span class="p">;</span>

  <span class="nl">color</span><span class="p">:</span> <span class="nx">white</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">15px</span><span class="p">;</span>

  <span class="nl">cursor</span><span class="p">:</span> <span class="n">col-resize</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.ui-editRangeSlider</span> <span class="nc">.ui-rangeSlider-label</span> <span class="p">&#123;</span>
<span class="p">&#125;</span>

<span class="nc">.ui-rangeSlider-label-inner</span> <span class="p">&#123;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">50%</span><span class="p">;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">block</span><span class="p">;</span>
  <span class="nl">z-index</span><span class="p">:</span> <span class="m">99</span><span class="p">;</span>
  <span class="nl">border-left</span><span class="p">:</span> <span class="m">10px</span> <span class="nb">solid</span> <span class="nb">transparent</span><span class="p">;</span>
  <span class="nl">border-right</span><span class="p">:</span> <span class="m">10px</span> <span class="nb">solid</span> <span class="nb">transparent</span><span class="p">;</span>

  <span class="nl">margin-left</span><span class="p">:</span> <span class="m">-10px</span><span class="p">;</span>
  <span class="nl">border-top</span><span class="p">:</span> <span class="m">10px</span> <span class="nb">solid</span> <span class="nx">#888da0</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.ui-editRangeSlider-inputValue</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">2em</span><span class="p">;</span>
  <span class="nl">text-align</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">15px</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#slider</span><span class="dl">"</span><span class="p">).</span><span class="nf">rangeSlider</span><span class="p">(&#123;&#125;);</span>
<span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#slider02</span><span class="dl">"</span><span class="p">).</span><span class="nf">editRangeSlider</span><span class="p">(&#123;&#125;);</span>

<span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#slider03</span><span class="dl">"</span><span class="p">).</span><span class="nf">editRangeSlider</span><span class="p">(&#123;&#125;);</span>

<span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#slider</span><span class="dl">"</span><span class="p">).</span><span class="nf">rangeSlider</span><span class="p">(&#123;</span>
  <span class="na">bounds</span><span class="p">:</span> <span class="p">&#123;</span> <span class="na">min</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span> <span class="na">max</span><span class="p">:</span> <span class="mi">100</span> <span class="p">&#125;,</span>
<span class="p">&#125;);</span>
<span class="c1">// Change options after slider creation</span>
<span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#slider</span><span class="dl">"</span><span class="p">).</span><span class="nf">rangeSlider</span><span class="p">(</span><span class="dl">"</span><span class="s2">option</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">bounds</span><span class="dl">"</span><span class="p">,</span> <span class="p">&#123;</span> <span class="na">min</span><span class="p">:</span> <span class="mi">10</span><span class="p">,</span> <span class="na">max</span><span class="p">:</span> <span class="mi">90</span> <span class="p">&#125;);</span>
<span class="c1">// Get option value</span>
<span class="kd">var</span> <span class="nx">bounds</span> <span class="o">=</span> <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#slider</span><span class="dl">"</span><span class="p">).</span><span class="nf">rangeSlider</span><span class="p">(</span><span class="dl">"</span><span class="s2">option</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">bounds</span><span class="dl">"</span><span class="p">,</span> <span class="p">&#123;</span> <span class="na">min</span><span class="p">:</span> <span class="mi">60</span><span class="p">,</span> <span class="na">max</span><span class="p">:</span> <span class="mi">70</span> <span class="p">&#125;);</span>
<span class="c1">// Set date option</span>
<span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#dateSlider</span><span class="dl">"</span><span class="p">).</span><span class="nf">dateRangeSlider</span><span class="p">(</span><span class="dl">"</span><span class="s2">option</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">bounds</span><span class="dl">"</span><span class="p">,</span> <span class="p">&#123;</span>
  <span class="na">min</span><span class="p">:</span> <span class="k">new</span> <span class="nc">Date</span><span class="p">(</span><span class="mi">2012</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">),</span>
  <span class="na">max</span><span class="p">:</span> <span class="k">new</span> <span class="nc">Date</span><span class="p">(</span><span class="mi">2012</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">31</span><span class="p">),</span>
<span class="p">&#125;);</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/dL7A9/">original jsfiddle post</a></p>
