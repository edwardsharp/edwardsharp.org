---
title: "jsfiddle / 25s6dLfy"
date: "2018-07-12T19:07:31.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css","javascript"]
permalink: "/post/jsfiddle-25s6dLfy/"
source_id: "25s6dLfy"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/25s6dLfy/36/"
source_revision: 36
---
<iframe class="code-demo" src="{{ '/content/media/2018/2018-07-12-jsfiddle-25s6dLfy-demo.html' | relative_url }}" title="jsfiddle / 25s6dLfy" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"light"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"red"</span><span class="nt">&gt;&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"yellow"</span><span class="nt">&gt;&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"green"</span><span class="nt">&gt;&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"light"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"red"</span><span class="nt">&gt;&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"yellow"</span><span class="nt">&gt;&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"green"</span><span class="nt">&gt;&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nc">.light</span> <span class="p">&#123;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">135px</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">54px</span><span class="p">;</span>
  <span class="nl">border</span><span class="p">:</span> <span class="nb">thin</span> <span class="nb">solid</span> <span class="nx">black</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">5px</span><span class="p">;</span>
  <span class="nl">box-sizing</span><span class="p">:</span> <span class="nb">border-box</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.red</span><span class="o">,</span>
<span class="nc">.yellow</span><span class="o">,</span>
<span class="nc">.green</span> <span class="p">&#123;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">33px</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">33px</span><span class="p">;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">33px</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">5px</span><span class="p">;</span>
  <span class="nl">border</span><span class="p">:</span> <span class="nb">thin</span> <span class="nb">solid</span> <span class="nx">black</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="c1">//es6</span>
<span class="c1">//make a stoplight</span>
<span class="c1">//box around three lights red, yellow, green</span>
<span class="c1">//click light will go to next one red -&gt; green -&gt; yellow -&gt; red</span>

<span class="kd">let</span> <span class="nx">light</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementsByClassName</span><span class="p">(</span><span class="dl">"</span><span class="s2">light</span><span class="dl">"</span><span class="p">);</span>
<span class="kd">let</span> <span class="nx">lights</span> <span class="o">=</span> <span class="p">&#123;&#125;;</span>

<span class="kd">let</span> <span class="nx">changeLight</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">l</span><span class="p">,</span> <span class="nx">red</span><span class="p">,</span> <span class="nx">yellow</span><span class="p">,</span> <span class="nx">green</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">l:</span><span class="dl">"</span><span class="p">,</span> <span class="nx">l</span><span class="p">);</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">lights</span><span class="p">[</span><span class="nx">l</span><span class="p">]</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">red</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">red</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">backgroundColor</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">white</span><span class="dl">"</span><span class="p">;</span>
    <span class="nx">green</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">backgroundColor</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">green</span><span class="dl">"</span><span class="p">;</span>
    <span class="nx">lights</span><span class="p">[</span><span class="nx">l</span><span class="p">]</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">green</span><span class="dl">"</span><span class="p">;</span>
  <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">lights</span><span class="p">[</span><span class="nx">l</span><span class="p">]</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">green</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">green</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">backgroundColor</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">white</span><span class="dl">"</span><span class="p">;</span>
    <span class="nx">yellow</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">backgroundColor</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">yellow</span><span class="dl">"</span><span class="p">;</span>
    <span class="nx">lights</span><span class="p">[</span><span class="nx">l</span><span class="p">]</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">yellow</span><span class="dl">"</span><span class="p">;</span>
  <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">lights</span><span class="p">[</span><span class="nx">l</span><span class="p">]</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">yellow</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">yellow</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">backgroundColor</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">white</span><span class="dl">"</span><span class="p">;</span>
    <span class="nx">red</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">backgroundColor</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">red</span><span class="dl">"</span><span class="p">;</span>
    <span class="nx">lights</span><span class="p">[</span><span class="nx">l</span><span class="p">]</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">red</span><span class="dl">"</span><span class="p">;</span>
  <span class="p">&#125;</span>
<span class="p">&#125;;</span>

<span class="k">for </span><span class="p">(</span><span class="kd">const</span> <span class="nx">l</span> <span class="k">in</span> <span class="nx">light</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="kd">let</span> <span class="nx">red</span> <span class="o">=</span> <span class="nx">light</span><span class="p">[</span><span class="nx">l</span><span class="p">].</span><span class="nf">querySelector</span><span class="p">(</span><span class="dl">"</span><span class="s2">.red</span><span class="dl">"</span><span class="p">);</span>
  <span class="kd">let</span> <span class="nx">yellow</span> <span class="o">=</span> <span class="nx">light</span><span class="p">[</span><span class="nx">l</span><span class="p">].</span><span class="nf">querySelector</span><span class="p">(</span><span class="dl">"</span><span class="s2">.yellow</span><span class="dl">"</span><span class="p">);</span>
  <span class="kd">let</span> <span class="nx">green</span> <span class="o">=</span> <span class="nx">light</span><span class="p">[</span><span class="nx">l</span><span class="p">].</span><span class="nf">querySelector</span><span class="p">(</span><span class="dl">"</span><span class="s2">.green</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">red:</span><span class="dl">"</span><span class="p">,</span> <span class="nx">red</span><span class="p">);</span>
  <span class="nx">red</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">backgroundColor</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">red</span><span class="dl">"</span><span class="p">;</span>
  <span class="nx">lights</span><span class="p">[</span><span class="nx">l</span><span class="p">]</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">red</span><span class="dl">"</span><span class="p">;</span>

  <span class="nx">red</span><span class="p">.</span><span class="nf">addEventListener</span><span class="p">(</span><span class="dl">"</span><span class="s2">click</span><span class="dl">"</span><span class="p">,</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="nf">changeLight</span><span class="p">(</span><span class="nx">l</span><span class="p">,</span> <span class="nx">red</span><span class="p">,</span> <span class="nx">yellow</span><span class="p">,</span> <span class="nx">green</span><span class="p">));</span>
  <span class="nx">green</span><span class="p">.</span><span class="nf">addEventListener</span><span class="p">(</span><span class="dl">"</span><span class="s2">click</span><span class="dl">"</span><span class="p">,</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="nf">changeLight</span><span class="p">(</span><span class="nx">l</span><span class="p">,</span> <span class="nx">red</span><span class="p">,</span> <span class="nx">yellow</span><span class="p">,</span> <span class="nx">green</span><span class="p">));</span>
  <span class="nx">yellow</span><span class="p">.</span><span class="nf">addEventListener</span><span class="p">(</span><span class="dl">"</span><span class="s2">click</span><span class="dl">"</span><span class="p">,</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="nf">changeLight</span><span class="p">(</span><span class="nx">l</span><span class="p">,</span> <span class="nx">red</span><span class="p">,</span> <span class="nx">yellow</span><span class="p">,</span> <span class="nx">green</span><span class="p">));</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/25s6dLfy/36/">original jsfiddle post</a></p>
