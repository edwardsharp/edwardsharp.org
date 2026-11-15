---
title: "jQuery UI slider theming customization"
date: "2013-01-20T05:36:57.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-RVdFj/"
source_id: "RVdFj"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/RVdFj/"
source_revision: 0
---
<iframe class="code-demo" src="{{ '/content/media/2013/2013-01-20-jsfiddle-RVdFj-demo.html' | relative_url }}" title="jQuery UI slider theming customization" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>http://forum.jquery.com/topic/ui-slider-interface-for-ui-horizontal-range-slider-does-not-make-sense</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;link</span>
  <span class="na">rel=</span><span class="s">"stylesheet"</span>
  <span class="na">href=</span><span class="s">"http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.11/themes/base/jquery-ui.css"</span>
<span class="nt">/&gt;</span>
<span class="nt">&lt;br</span> <span class="nt">/&gt;</span>

<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"default"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"slider"</span><span class="nt">&gt;&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">font</span><span class="p">:</span>
    <span class="m">62.5%</span> <span class="n">Verdana</span><span class="p">,</span>
    <span class="n">Arial</span><span class="p">,</span>
    <span class="nb">sans-serif</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.default</span><span class="o">,</span>
<span class="nc">.alt</span> <span class="p">&#123;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">1em</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">1em</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.a</span> <span class="nc">.ui-slider</span> <span class="p">&#123;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.a</span> <span class="nc">.ui-slider-handle</span> <span class="p">&#123;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.b</span> <span class="nc">.ui-slider</span> <span class="p">&#123;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">1.1em</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.b</span> <span class="nc">.ui-slider-handle</span> <span class="p">&#123;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">0.1em</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">0.75em</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.c</span> <span class="nc">.ui-slider</span> <span class="p">&#123;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">2px</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.c</span> <span class="nc">.ui-slider-handle</span> <span class="p">&#123;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">4px</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">0.4em</span><span class="p">;</span>
  <span class="nl">margin-left</span><span class="p">:</span> <span class="m">-0.2em</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.d</span> <span class="nc">.ui-slider</span> <span class="p">&#123;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">0.3em</span><span class="p">;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">10px</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.d</span> <span class="nc">.ui-slider-handle</span> <span class="p">&#123;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">1em</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">-0.45em</span><span class="p">;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">0.5em</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">1em</span><span class="p">;</span>
  <span class="nl">margin-left</span><span class="p">:</span> <span class="m">-0.5em</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.e</span> <span class="nc">.ui-slider</span> <span class="p">&#123;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">2px</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">0.3em</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.e</span> <span class="nc">.ui-slider-handle</span> <span class="p">&#123;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">1.4em</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">-0.55em</span><span class="p">;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">0</span> <span class="m">0</span> <span class="m">16px</span> <span class="m">16px</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">0.7em</span><span class="p">;</span>
  <span class="nl">margin-left</span><span class="p">:</span> <span class="m">-0.35em</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.dafuq</span> <span class="p">&#123;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">-15px</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.slider</span><span class="dl">"</span><span class="p">).</span><span class="nf">slider</span><span class="p">(&#123;</span>
  <span class="na">min</span><span class="p">:</span> <span class="o">-</span><span class="mi">40</span><span class="p">,</span>
  <span class="na">max</span><span class="p">:</span> <span class="mi">100</span><span class="p">,</span>
  <span class="na">values</span><span class="p">:</span> <span class="p">[</span><span class="o">-</span><span class="mi">40</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">35</span><span class="p">,</span> <span class="mi">55</span><span class="p">,</span> <span class="mi">75</span><span class="p">,</span> <span class="mi">100</span><span class="p">],</span>
  <span class="na">step</span><span class="p">:</span> <span class="mi">5</span><span class="p">,</span>
  <span class="na">slide</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">ui</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span>
      <span class="nx">ui</span><span class="p">.</span><span class="nx">handle</span><span class="p">.</span><span class="nx">children</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">id</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">sliderLabel0</span><span class="dl">"</span> <span class="o">||</span>
      <span class="nx">ui</span><span class="p">.</span><span class="nx">handle</span><span class="p">.</span><span class="nx">children</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">id</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">sliderLabel5</span><span class="dl">"</span>
    <span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
    <span class="p">&#125;</span>
    <span class="nf">updateSliderLabels</span><span class="p">(</span><span class="nx">ui</span><span class="p">.</span><span class="nx">values</span><span class="p">);</span>
  <span class="p">&#125;,</span>
<span class="p">&#125;);</span>

<span class="kd">function</span> <span class="nf">createSliderLabels</span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="kd">var</span> <span class="nx">sliders</span> <span class="o">=</span> <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.ui-slider-handle</span><span class="dl">"</span><span class="p">);</span>
  <span class="k">for </span><span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">sliders</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.ui-slider-handle</span><span class="dl">"</span><span class="p">)</span>
      <span class="p">.</span><span class="nf">eq</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span>
      <span class="p">.</span><span class="nf">html</span><span class="p">(</span><span class="dl">"</span><span class="s2">&lt;div class='dafuq' id='sliderLabel</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">i</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">' &gt;&lt;div&gt;</span><span class="dl">"</span><span class="p">);</span>
  <span class="p">&#125;</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">updateSliderLabels</span><span class="p">(</span><span class="nx">values</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="kd">var</span> <span class="nx">sliders</span> <span class="o">=</span> <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.ui-slider-handle</span><span class="dl">"</span><span class="p">);</span>
  <span class="k">for </span><span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">sliders</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#sliderLabel</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">i</span><span class="p">).</span><span class="nf">html</span><span class="p">(</span><span class="nx">values</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span>
    <span class="c1">//$("#sliderLabel"+i).html($(".slider").slider("values")[i]);</span>
  <span class="p">&#125;</span>
<span class="p">&#125;</span>

<span class="nf">createSliderLabels</span><span class="p">();</span>
<span class="nf">updateSliderLabels</span><span class="p">(</span><span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.slider</span><span class="dl">"</span><span class="p">).</span><span class="nf">slider</span><span class="p">(</span><span class="dl">"</span><span class="s2">values</span><span class="dl">"</span><span class="p">));</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/RVdFj/">original jsfiddle post</a></p>
