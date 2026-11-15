---
title: "jQuery UI Slider - Multiple sliders"
description: "a horizontal master slider sits above a bank of vertical sliders styled like an equalizer."
date: "2015-12-29T12:28:30.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-mMzmq/"
source_id: "mMzmq"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/mMzmq/1/"
source_revision: 1
---
<iframe class="code-demo" src="{{ '/content/media/2015/2015-12-29-jsfiddle-mMzmq-demo.html' | relative_url }}" title="jQuery UI Slider - Multiple sliders" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;link</span>
  <span class="na">rel=</span><span class="s">"stylesheet"</span>
  <span class="na">href=</span><span class="s">"//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css"</span>
<span class="nt">/&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"//code.jquery.com/jquery-1.10.2.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"//code.jquery.com/ui/1.10.4/jquery-ui.js"</span><span class="nt">&gt;&lt;/script&gt;</span>

<span class="nt">&lt;span</span>
  <span class="na">class=</span><span class="s">"ui-icon ui-icon-volume-on"</span>
  <span class="na">style=</span><span class="s">"float: left; margin: -2px 5px 0 0"</span>
<span class="nt">&gt;&lt;/span&gt;</span>
Master volume

<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"master"</span> <span class="na">style=</span><span class="s">"width: 260px; margin: 15px"</span><span class="nt">&gt;&lt;/div&gt;</span>

<span class="nt">&lt;span</span>
  <span class="na">class=</span><span class="s">"ui-icon ui-icon-signal"</span>
  <span class="na">style=</span><span class="s">"float: left; margin: -2px 5px 0 0"</span>
<span class="nt">&gt;&lt;/span&gt;</span>
Graphic EQ

<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"eq"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;span&gt;</span>88<span class="nt">&lt;/span&gt;</span>
  <span class="nt">&lt;span&gt;</span>77<span class="nt">&lt;/span&gt;</span>
  <span class="nt">&lt;span&gt;</span>55<span class="nt">&lt;/span&gt;</span>
  <span class="nt">&lt;span&gt;</span>33<span class="nt">&lt;/span&gt;</span>
  <span class="nt">&lt;span&gt;</span>40<span class="nt">&lt;/span&gt;</span>
  <span class="nt">&lt;span&gt;</span>45<span class="nt">&lt;/span&gt;</span>
  <span class="nt">&lt;span&gt;</span>70<span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nf">#eq</span> <span class="nt">span</span> <span class="p">&#123;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">120px</span><span class="p">;</span>
  <span class="nl">float</span><span class="p">:</span> <span class="nb">left</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">15px</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="nf">$</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="c1">// setup master volume</span>
  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#master</span><span class="dl">"</span><span class="p">).</span><span class="nf">slider</span><span class="p">(&#123;</span>
    <span class="na">value</span><span class="p">:</span> <span class="mi">60</span><span class="p">,</span>
    <span class="na">orientation</span><span class="p">:</span> <span class="dl">"</span><span class="s2">horizontal</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">range</span><span class="p">:</span> <span class="dl">"</span><span class="s2">min</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">animate</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
  <span class="p">&#125;);</span>
  <span class="c1">// setup graphic EQ</span>
  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#eq &gt; span</span><span class="dl">"</span><span class="p">).</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="c1">// read initial values from markup and remove that</span>
    <span class="kd">var</span> <span class="nx">value</span> <span class="o">=</span> <span class="nf">parseInt</span><span class="p">(</span><span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nf">text</span><span class="p">(),</span> <span class="mi">10</span><span class="p">);</span>
    <span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nf">empty</span><span class="p">().</span><span class="nf">slider</span><span class="p">(&#123;</span>
      <span class="na">value</span><span class="p">:</span> <span class="nx">value</span><span class="p">,</span>
      <span class="na">range</span><span class="p">:</span> <span class="dl">"</span><span class="s2">min</span><span class="dl">"</span><span class="p">,</span>
      <span class="na">animate</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
      <span class="na">orientation</span><span class="p">:</span> <span class="dl">"</span><span class="s2">vertical</span><span class="dl">"</span><span class="p">,</span>
    <span class="p">&#125;);</span>
  <span class="p">&#125;);</span>
<span class="p">&#125;);</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/mMzmq/1/">original jsfiddle post</a></p>
