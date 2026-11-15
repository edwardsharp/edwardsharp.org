---
title: "jsfiddle / 9pdwgpm4"
date: "2016-01-24T05:23:23.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css","javascript"]
permalink: "/post/jsfiddle-9pdwgpm4/"
source_id: "9pdwgpm4"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/9pdwgpm4/"
source_revision: 0
---
<iframe class="code-demo" src="{{ '/content/media/2016/2016-01-24-jsfiddle-9pdwgpm4-demo.html' | relative_url }}" title="jsfiddle / 9pdwgpm4" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;body&gt;</span>
  <span class="nt">&lt;div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"box"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"box"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"box"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"box"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"box"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"box"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"box"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"box"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"box"</span><span class="nt">&gt;&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/body&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">div</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">500px</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">50px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nt">div</span> <span class="nt">div</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">50px</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">50px</span><span class="p">;</span>
  <span class="nl">outline</span><span class="p">:</span> <span class="m">1px</span> <span class="nb">solid</span><span class="p">;</span>
  <span class="nl">float</span><span class="p">:</span> <span class="nb">left</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="kd">var</span> <span class="nx">box</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">boxArray</span><span class="p">;</span>
<span class="nx">boxArray</span> <span class="o">=</span> <span class="p">[];</span>

<span class="nx">box</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementsByClassName</span><span class="p">(</span><span class="dl">"</span><span class="s2">box</span><span class="dl">"</span><span class="p">);</span>
<span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">box</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span>
  <span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">box</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">onmousemove</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">buttons</span> <span class="o">==</span> <span class="mi">1</span><span class="p">)</span> <span class="nx">box</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">style</span><span class="p">.</span><span class="nx">backgroundColor</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">green</span><span class="dl">"</span><span class="p">;</span>
    <span class="p">&#125;;</span>
  <span class="p">&#125;)(</span><span class="nx">i</span><span class="p">);</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/9pdwgpm4/">original jsfiddle post</a></p>
