---
title: "jsfiddle / gPPNc"
date: "2013-11-29T01:20:37.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","javascript"]
permalink: "/post/jsfiddle-gPPNc/"
source_id: "gPPNc"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/gPPNc/"
source_revision: 1
---
<iframe class="code-demo" src="{{ '/content/media/2013/2013-11-29-jsfiddle-gPPNc-demo.html' | relative_url }}" title="jsfiddle / gPPNc" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"http://code.createjs.com/soundjs-0.5.0.min.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"http://code.createjs.com/preloadjs-0.3.0.min.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;button</span> <span class="na">id=</span><span class="s">"play"</span><span class="nt">&gt;</span>Play<span class="nt">&lt;/button&gt;</span>
<span class="nt">&lt;button</span> <span class="na">id=</span><span class="s">"stop"</span><span class="nt">&gt;</span>Stop<span class="nt">&lt;/button&gt;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="kd">var</span> <span class="nx">manifest</span> <span class="o">=</span> <span class="p">[</span>
  <span class="p">&#123;</span> <span class="na">id</span><span class="p">:</span> <span class="dl">"</span><span class="s2">waiting</span><span class="dl">"</span><span class="p">,</span> <span class="na">src</span><span class="p">:</span> <span class="dl">"</span><span class="s2">http://futuredeathtoll.com/upload/filez/djhrn.mp3</span><span class="dl">"</span> <span class="p">&#125;,</span>
<span class="p">];</span>
<span class="kd">var</span> <span class="nx">preload</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">createjs</span><span class="p">.</span><span class="nc">LoadQueue</span><span class="p">();</span>
<span class="nx">preload</span><span class="p">.</span><span class="nf">installPlugin</span><span class="p">(</span><span class="nx">createjs</span><span class="p">.</span><span class="nx">Sound</span><span class="p">);</span>
<span class="nx">preload</span><span class="p">.</span><span class="nf">loadManifest</span><span class="p">(</span><span class="nx">manifest</span><span class="p">);</span>

<span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#play</span><span class="dl">"</span><span class="p">).</span><span class="nf">on</span><span class="p">(</span><span class="dl">"</span><span class="s2">click</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nx">createjs</span><span class="p">.</span><span class="nx">Sound</span><span class="p">.</span><span class="nf">play</span><span class="p">(</span><span class="dl">"</span><span class="s2">waiting</span><span class="dl">"</span><span class="p">,</span> <span class="nx">createjs</span><span class="p">.</span><span class="nx">Sound</span><span class="p">.</span><span class="nx">INTERRUPT_NONE</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span>
<span class="p">&#125;);</span>
<span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#stop</span><span class="dl">"</span><span class="p">).</span><span class="nf">on</span><span class="p">(</span><span class="dl">"</span><span class="s2">click</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nx">createjs</span><span class="p">.</span><span class="nx">Sound</span><span class="p">.</span><span class="nf">stop</span><span class="p">();</span>
<span class="p">&#125;);</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/gPPNc/">original jsfiddle post</a></p>
