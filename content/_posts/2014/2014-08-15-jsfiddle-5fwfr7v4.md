---
title: "the trust button"
description: "an orange trust button scatters shuffled words across the page each time it is pressed."
date: "2014-08-15T06:00:12.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css","javascript"]
permalink: "/post/jsfiddle-5fwfr7v4/"
source_id: "5fwfr7v4"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/5fwfr7v4/"
source_revision: 9
---
<iframe class="code-demo" src="{{ '/content/media/2014/2014-08-15-jsfiddle-5fwfr7v4-demo.html' | relative_url }}" title="jsfiddle / 5fwfr7v4" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"round-button"</span> <span class="na">id=</span><span class="s">"trust-button"</span><span class="nt">&gt;</span>TRUST<span class="nt">&lt;/button&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">html</span> <span class="p">&#123;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">2em</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.round-button</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">50%</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">80%</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
  <span class="nl">padding-bottom</span><span class="p">:</span> <span class="m">10%</span><span class="p">;</span>
  <span class="nl">padding-top</span><span class="p">:</span> <span class="m">8%</span><span class="p">;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">50%</span><span class="p">;</span>
  <span class="nl">border</span><span class="p">:</span> <span class="m">2px</span> <span class="nb">solid</span> <span class="nx">#f5f5f5</span><span class="p">;</span>
  <span class="nl">overflow</span><span class="p">:</span> <span class="nb">hidden</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#ff6600</span><span class="p">;</span>
  <span class="nl">box-shadow</span><span class="p">:</span> <span class="m">0</span> <span class="m">0</span> <span class="m">3px</span> <span class="nx">gray</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.round-button</span><span class="nd">:hover</span> <span class="p">&#123;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#ff6600</span><span class="p">;</span>
  <span class="nl">background-image</span><span class="p">:</span> <span class="o">-</span><span class="n">webkit-gradient</span><span class="p">(</span>
    <span class="nb">linear</span><span class="p">,</span>
    <span class="nb">left</span><span class="p">,</span>
    <span class="nb">right</span><span class="p">,</span>
    <span class="n">from</span><span class="p">(</span><span class="nx">#ff6600</span><span class="p">),</span>
    <span class="n">to</span><span class="p">(</span><span class="nx">#ffff00</span><span class="p">)</span>
  <span class="p">);</span>
  <span class="nl">background-image</span><span class="p">:</span> <span class="o">-</span><span class="n">webkit-linear-gradient</span><span class="p">(</span><span class="nb">top</span><span class="p">,</span> <span class="nx">#ff6600</span><span class="p">,</span> <span class="nx">#ffff00</span><span class="p">);</span>
  <span class="nl">background-image</span><span class="p">:</span> <span class="o">-</span><span class="n">moz-linear-gradient</span><span class="p">(</span><span class="nb">top</span><span class="p">,</span> <span class="nx">#ff6600</span><span class="p">,</span> <span class="nx">#ffff00</span><span class="p">);</span>
  <span class="nl">background-image</span><span class="p">:</span> <span class="o">-</span><span class="n">ms-linear-gradient</span><span class="p">(</span><span class="nb">top</span><span class="p">,</span> <span class="nx">#ff6600</span><span class="p">,</span> <span class="nx">#ffff00</span><span class="p">);</span>
  <span class="nl">background-image</span><span class="p">:</span> <span class="o">-</span><span class="n">o-linear-gradient</span><span class="p">(</span><span class="nb">top</span><span class="p">,</span> <span class="nx">#ff6600</span><span class="p">,</span> <span class="nx">#ffff00</span><span class="p">);</span>
  <span class="nl">background-image</span><span class="p">:</span> <span class="nf">linear-gradient</span><span class="p">(</span><span class="n">to</span> <span class="nb">bottom</span><span class="p">,</span> <span class="nx">#ff6600</span><span class="p">,</span> <span class="nx">#ffff00</span><span class="p">);</span>
  <span class="nl">filter</span><span class="p">:</span> <span class="n">progid</span><span class="p">:</span><span class="n">DXImageTransform</span><span class="p">.</span><span class="n">Microsoft</span><span class="p">.</span><span class="n">gradient</span><span class="p">(</span><span class="n">GradientType</span><span class="err">=</span><span class="m">0</span><span class="p">,</span> <span class="n">startColorstr</span><span class="err">=</span><span class="nx">#FF6600</span><span class="p">,</span> <span class="n">endColorstr</span><span class="err">=</span><span class="nx">#FFFF00</span><span class="p">);</span>
<span class="p">&#125;</span>
<span class="nt">button</span><span class="nd">:focus</span> <span class="p">&#123;</span>
  <span class="nl">outline</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="kd">var</span> <span class="nx">tMots</span> <span class="o">=</span> <span class="p">[</span>
  <span class="dl">"</span><span class="s2">obscure</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">root</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">executable</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">header</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">the</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">problem</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">with</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">universals</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">anti-forensics</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">embedded</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">malware</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">plastic</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">pill</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">jars</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">slamming</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">our</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">doors</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">trapped</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">under</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">the</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">rubble</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">pile</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">the</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">boundaries</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">as</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">my</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">own</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">emotion</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">rocks</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">&amp;</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">dust</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">on</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">my</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">face</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">and</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">where</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">i</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">sleep</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">at</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">night</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">my</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">own</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">private</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">achromatic</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">prison</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">dark</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">alleyways</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">and</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">elevators</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">used</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">as</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">negotiating</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">spaces</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">for</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">my</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">self</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">which</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">is</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">under</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">realistic</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">scrutiny</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">anyway</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">personal</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">property</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">architected</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">on</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">pleasure</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">profit</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">principals</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">do</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">not</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">give</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">that</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">guy</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">money</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">of</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">a</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">situation</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">or</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">condition</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">extremely</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">bad</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">unpleasant</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">and</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">degrading</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">abject</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">poverty</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">synonyms</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">wretched</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">miserable</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">hopeless</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">pathetic</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">pitiful</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">pitiable</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">piteous</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">sorry</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">woeful</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">lamentable</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">degrading</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">appalling</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">atrocious</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">awful</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">abject</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">poverty</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">of</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">an</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">unhappy</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">state</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">of</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">mind</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">experienced</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">to</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">the</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">maximum</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">degree</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">his</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">letter</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">plunged</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">her</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">into</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">abject</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">misery</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">of</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">a</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">person</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">or</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">their</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">behavior</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">completely</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">without</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">pride</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">or</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">dignity</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">self</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">abasing</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">an</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">abject</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">apology</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">synonyms</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">contemptible</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">base</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">low</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">vile</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">worthless</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">debased</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">degraded</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">despicable</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">ignominious</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">mean</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">unworthy</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">ignoble</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">an</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">abject</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">sinner</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">obsequious</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">groveling</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">fawning</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">toadyish</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">servile</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">cringing</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">sycophantic</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">submissive</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">craven</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">an</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">abject</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">apology</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">carbon</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">copy</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">hear</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">tz</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">obscure</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">root</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">executable</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">header</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">the</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">problem</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">with</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">universals</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">anti</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">forensics</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">embedded</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">malware</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">plastic</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">pill</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">jars</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">slamming</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">our</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">doors</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">trapped</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">under</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">the</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">rubble</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">pile</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">the</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">boundaries</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">as</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">my</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">own</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">emotion</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">rocks</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">dust</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">on</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">my</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">face</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">and</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">where</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">i</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">sleep</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">at</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">night</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">my</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">own</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">private</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">achromatic</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">prison</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">dark</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">alleyways</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">and</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">elevators</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">used</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">as</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">negotiating</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">spaces</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">formy</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">self</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">which</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">is</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">under</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">realistic</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">scrutiny</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">anywaypersonal</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">property</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">architected</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">on</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">pleasure</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">profit</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">principals</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">do</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">not</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">give</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">that</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">guy</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">moneydown</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">stream</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">wastesensing</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">a</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">quite</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">exhaustive</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">overhaul</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">coming</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">on</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">to</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">my</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">ideology</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">glitter</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">swirling</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">around</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">in</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">tanks</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">takes</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">power</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">applied</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">to</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">move</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">air</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">particles</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">that</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">collide</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">with</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">small</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">colorful</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">bits</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">of</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">new</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">reality</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">that</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">represent</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">practice</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">and</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">stars</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">and</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">stripe</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">that</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">start</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">again</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">charging</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">charging</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">charging</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">charging</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">for</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">their</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">productivity</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">charging</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">for</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">their</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">scandal</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">not</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">enough</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">violence</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">is</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">what</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">i</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">m</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">toldi</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">turned</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">my</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">hairdryer</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">to</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">it</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">s</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">highest</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">setting</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">napping</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">in</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">the</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">bathroom</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">turn</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">the</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">grill</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">to</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">it</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">s</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">highest</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">setting</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">mark</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">ourselves</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">again</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">and</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">again</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">with</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">the</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">hot</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">knife</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">until</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">we</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">remember</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">our</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">heroines</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">we</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">can</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">show</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">it</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">off</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">without</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">misunderstanding</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">remember</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">what</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">it</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">felt</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">like</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">to</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">do</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">nothing</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">and</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">be</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">fine</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">about</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">nothing</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">challenge</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">the</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">pleasure</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">principal</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">cash</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">out</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">my</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">purest</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">pursuit</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">expectations</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">explode</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">lose</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">your</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">soul</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">for</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">your</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">country</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">yell</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">all</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">along</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">the</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">way</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">home</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">from</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">school</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">reveal</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">structured</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">sub</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">grids</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">that</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">carried</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">power</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">along</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">lines</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">too</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">thin</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">and</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">strung</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">about</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">haphazardly</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">after</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">the</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">sky</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">replaced</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">the</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">order</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">of</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">the</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">telephone</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">poles</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">the</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">becoming</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">and</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">going</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">of</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">structured</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">sub</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">grids</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">that</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">carried</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">power</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">along</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">lines</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">too</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">thin</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">and</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">strung</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">about</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">haphazardly</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">because</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">of</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">the</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">storm</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">all</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">terrain</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">is</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">dodgy</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">in</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">that</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">there</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">is</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">a</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">more</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">efficient</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">way</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">of</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">lighting</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">these</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">bombs</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">off</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">well</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">he</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">shot</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">some</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">stuff</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">up</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">to</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">the</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">moon</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">there</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">s</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">a</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">formal</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">way</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">to</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">fuck</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">it</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">all</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">just</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">do</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">it</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">and</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">apply</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">rigorously</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">daily</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">at</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">regular</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">intervals</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">until</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">swelling</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">abbess</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">rescinds</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">into</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">the</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">depths</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">of</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">direct</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">quotation</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">having</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">nothing</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">at</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">all</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">to</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">do</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">with</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">context</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">but</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">yet</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">somehow</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">linked</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">but</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">U</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">shaped</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">lines</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">over</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">matte</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">the</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">image</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">of</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">your</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">memory</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">the</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">formal</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">way</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">to</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">fuck</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">it</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">all</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">apply</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">rigorously</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">daily</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">at</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">regular</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">intervals</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">until</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">swelling</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">abbess</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">rescinds</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">into</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">depths</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">of</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">direct</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">quotation</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">having</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">nothing</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">at</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">all</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">to</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">do</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">with</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">context</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">but</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">yet</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">somehow</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">linked</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">but</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">U</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">shaped</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">lines</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">over</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">matte</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">the</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">image</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">of</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">memory</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">having</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">nothing</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">at</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">all</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">to</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">do</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">with</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">context</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">but</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">yet</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">somehow</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">linked</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">like</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">K</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">shaped</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">lines</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">over</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">the</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">matte</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">image</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">of</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">memory</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">recumbent</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">growth</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">is</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">to</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">be</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">excepted</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">and</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">anticipation</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">is</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">anguish</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">even</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">though</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">the</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">winters</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">are</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">worse</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">they</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">say</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">it</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">s</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">both</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">coming</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">soon</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">salvation</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">destruction</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">recumbent</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">growth</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">is</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">to</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">be</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">excepted</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">and</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">anticipation</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">is</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">anguish</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">even</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">though</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">the</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">winters</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">are</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">worse</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">coming</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">soon</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">salvation</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">destruction</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">turbulent</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">youth</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">diaries</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">are</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">like</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">clouds</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">they</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">were</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">talking</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">to</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">each</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">other</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">but</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">mouths</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">werenot</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">moving</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">it</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">s</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">handheld</span><span class="dl">"</span><span class="p">,</span>
<span class="p">];</span>

<span class="kd">var</span> <span class="nx">tClone</span> <span class="o">=</span> <span class="p">[];</span>

<span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="kd">function</span> <span class="nf">reverseChildNodes</span><span class="p">(</span><span class="nx">node</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">parentNode</span> <span class="o">=</span> <span class="nx">node</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">,</span>
      <span class="nx">nextSibling</span> <span class="o">=</span> <span class="nx">node</span><span class="p">.</span><span class="nx">nextSibling</span><span class="p">,</span>
      <span class="nx">frag</span> <span class="o">=</span> <span class="nx">node</span><span class="p">.</span><span class="nx">ownerDocument</span><span class="p">.</span><span class="nf">createDocumentFragment</span><span class="p">();</span>
    <span class="nx">parentNode</span><span class="p">.</span><span class="nf">removeChild</span><span class="p">(</span><span class="nx">node</span><span class="p">);</span>
    <span class="k">while </span><span class="p">(</span><span class="nx">node</span><span class="p">.</span><span class="nx">lastChild</span><span class="p">)</span> <span class="nx">frag</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">node</span><span class="p">.</span><span class="nx">lastChild</span><span class="p">);</span>
    <span class="nx">node</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">frag</span><span class="p">);</span>
    <span class="nx">parentNode</span><span class="p">.</span><span class="nf">insertBefore</span><span class="p">(</span><span class="nx">node</span><span class="p">,</span> <span class="nx">nextSibling</span><span class="p">);</span>
    <span class="k">return</span> <span class="nx">node</span><span class="p">;</span>
  <span class="p">&#125;</span>

  <span class="kd">function</span> <span class="nf">shuffle</span><span class="p">(</span><span class="nx">array</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">array</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">--</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">floor</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nf">random</span><span class="p">()</span> <span class="o">*</span> <span class="p">(</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">));</span>
      <span class="kd">var</span> <span class="nx">temp</span> <span class="o">=</span> <span class="nx">array</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span>
      <span class="nx">array</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">array</span><span class="p">[</span><span class="nx">j</span><span class="p">];</span>
      <span class="nx">array</span><span class="p">[</span><span class="nx">j</span><span class="p">]</span> <span class="o">=</span> <span class="nx">temp</span><span class="p">;</span>
    <span class="p">&#125;</span>
    <span class="k">return</span> <span class="nx">array</span><span class="p">;</span>
  <span class="p">&#125;</span>
  <span class="kd">var</span> <span class="nx">foo</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">trust-button</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">foo</span><span class="p">.</span><span class="nf">addEventListener</span><span class="p">(</span>
    <span class="dl">"</span><span class="s2">click</span><span class="dl">"</span><span class="p">,</span>
    <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="nf">showTrust</span><span class="p">();</span>
    <span class="p">&#125;,</span>
    <span class="kc">false</span><span class="p">,</span>
  <span class="p">);</span>

  <span class="kd">function</span> <span class="nf">showTrust</span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">tClone</span><span class="p">.</span><span class="nx">length</span> <span class="o">&lt;</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">tClone</span> <span class="o">=</span> <span class="nx">tMots</span><span class="p">.</span><span class="nf">splice</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span>
      <span class="nf">shuffle</span><span class="p">(</span><span class="nx">tClone</span><span class="p">);</span>
    <span class="p">&#125;</span>

    <span class="kd">var</span> <span class="nx">randMot</span> <span class="o">=</span> <span class="nx">tClone</span><span class="p">[</span><span class="nb">Math</span><span class="p">.</span><span class="nf">floor</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nf">random</span><span class="p">()</span> <span class="o">*</span> <span class="nx">tClone</span><span class="p">.</span><span class="nx">length</span><span class="p">)];</span>
    <span class="kd">var</span> <span class="nx">cutOneOff</span> <span class="o">=</span> <span class="nx">tClone</span><span class="p">.</span><span class="nf">splice</span><span class="p">(</span><span class="nx">tClone</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">);</span>
    <span class="kd">var</span> <span class="nx">p</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">span</span><span class="dl">"</span><span class="p">);</span>
    <span class="nx">p</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="nc">String</span><span class="p">(</span><span class="nx">randMot</span> <span class="o">+</span> <span class="dl">"</span><span class="s2"> </span><span class="dl">"</span><span class="p">);</span>
    <span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">p</span><span class="p">);</span>
    <span class="nf">reverseChildNodes</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">);</span>
    <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">trust-button</span><span class="dl">"</span><span class="p">).</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="nx">cutOneOff</span><span class="p">;</span>
  <span class="p">&#125;</span>
<span class="p">&#125;)();</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/5fwfr7v4/">original jsfiddle post</a></p>
