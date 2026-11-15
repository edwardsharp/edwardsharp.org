---
title: "polyfiddle"
date: "2016-10-20T11:15:55.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css","canvas"]
permalink: "/post/jsfiddle-9foteodx/"
source_id: "9foteodx"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/9foteodx/"
source_revision: 8
---
<iframe class="code-demo" src="{{ '/content/media/2016/2016-10-20-jsfiddle-9foteodx-demo.html' | relative_url }}" title="polyfiddle" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>query selector troubles :/</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.4.8/fabric.min.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;base</span> <span class="na">href=</span><span class="s">"https://polygit.org/components/"</span> <span class="nt">/&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"webcomponentsjs/webcomponents-lite.min.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;link</span> <span class="na">href=</span><span class="s">"polymer/polymer.html"</span> <span class="na">rel=</span><span class="s">"import"</span> <span class="nt">/&gt;</span>

<span class="nt">&lt;dom-module</span> <span class="na">id=</span><span class="s">"x-example"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;template&gt;</span>
    <span class="nt">&lt;h1&gt;</span>polyfiddle<span class="nt">&lt;/h1&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"objectTools"</span> <span class="na">hidden</span><span class="err">$="&#123;&#123;</span><span class="na">objectToolsHidden</span><span class="err">&#125;&#125;"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;h1&gt;</span>object toolz!<span class="nt">&lt;/h1&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;canvas</span> <span class="na">id=</span><span class="s">"c"</span> <span class="na">width=</span><span class="s">"400"</span> <span class="na">height=</span><span class="s">"400"</span><span class="nt">&gt;&lt;/canvas&gt;</span>
  <span class="nt">&lt;/template&gt;</span>
  <span class="nt">&lt;script&gt;</span>
    <span class="nc">Polymer</span><span class="p">(&#123;</span>
      <span class="na">is</span><span class="p">:</span> <span class="dl">"</span><span class="s2">x-example</span><span class="dl">"</span><span class="p">,</span>
      <span class="na">properties</span><span class="p">:</span> <span class="p">&#123;</span>
        <span class="na">canvas</span><span class="p">:</span> <span class="nb">Object</span><span class="p">,</span>
        <span class="na">objectToolsHidden</span><span class="p">:</span> <span class="p">&#123;</span>
          <span class="na">type</span><span class="p">:</span> <span class="nb">Boolean</span><span class="p">,</span>
          <span class="na">notify</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
          <span class="na">value</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
        <span class="p">&#125;,</span>
      <span class="p">&#125;,</span>
      <span class="na">_onObjectSelected</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="c1">//hmm, this is the canvas elem... (???)</span>
        <span class="k">this</span><span class="p">.</span><span class="nf">set</span><span class="p">(</span><span class="dl">"</span><span class="s2">objectToolsHidden</span><span class="dl">"</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span>
      <span class="p">&#125;,</span>
      <span class="na">_onSelectionCleared</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">this</span><span class="p">.</span><span class="nf">set</span><span class="p">(</span><span class="dl">"</span><span class="s2">objectToolsHidden</span><span class="dl">"</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span>
      <span class="p">&#125;,</span>
      <span class="na">ready</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
        <span class="k">this</span><span class="p">.</span><span class="nx">canvas</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">fabric</span><span class="p">.</span><span class="nc">Canvas</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$</span><span class="p">.</span><span class="nx">c</span><span class="p">);</span>
        <span class="kd">var</span> <span class="nx">rect</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">fabric</span><span class="p">.</span><span class="nc">Rect</span><span class="p">(&#123;</span>
          <span class="na">top</span><span class="p">:</span> <span class="mi">100</span><span class="p">,</span>
          <span class="na">left</span><span class="p">:</span> <span class="mi">100</span><span class="p">,</span>
          <span class="na">width</span><span class="p">:</span> <span class="mi">60</span><span class="p">,</span>
          <span class="na">height</span><span class="p">:</span> <span class="mi">70</span><span class="p">,</span>
          <span class="na">fill</span><span class="p">:</span> <span class="dl">"</span><span class="s2">black</span><span class="dl">"</span><span class="p">,</span>
        <span class="p">&#125;);</span>

        <span class="k">this</span><span class="p">.</span><span class="nx">canvas</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span><span class="nx">rect</span><span class="p">);</span>

        <span class="k">this</span><span class="p">.</span><span class="nx">canvas</span><span class="p">.</span><span class="nf">on</span><span class="p">(&#123;</span>
          <span class="dl">"</span><span class="s2">object:selected</span><span class="dl">"</span><span class="p">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">_onObjectSelected</span><span class="p">.</span><span class="nf">bind</span><span class="p">(</span><span class="k">this</span><span class="p">),</span>
          <span class="dl">"</span><span class="s2">selection:cleared</span><span class="dl">"</span><span class="p">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">_onSelectionCleared</span><span class="p">.</span><span class="nf">bind</span><span class="p">(</span><span class="k">this</span><span class="p">),</span>
        <span class="p">&#125;);</span>
      <span class="p">&#125;,</span>
    <span class="p">&#125;);</span>
  <span class="nt">&lt;/script&gt;</span>
<span class="nt">&lt;/dom-module&gt;</span>

<span class="nt">&lt;x-example&gt;&lt;/x-example&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">font-family</span><span class="p">:</span> <span class="nb">sans-serif</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/9foteodx/">original jsfiddle post</a></p>
