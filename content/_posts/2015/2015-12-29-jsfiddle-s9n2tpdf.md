---
title: "youtube segment player"
date: "2015-12-29T12:26:27.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css","javascript"]
permalink: "/post/jsfiddle-s9n2tpdf/"
source_id: "s9n2tpdf"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/s9n2tpdf/"
source_revision: 0
---
<iframe class="code-demo" src="{{ '/content/media/2015/2015-12-29-jsfiddle-s9n2tpdf-demo.html' | relative_url }}" title="youtube segment player" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"clicker"</span><span class="nt">&gt;&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"player"</span><span class="nt">&gt;&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">html</span><span class="o">,</span>
<span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#clicker</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">100px</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#000</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">white</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span> <span class="nb">auto</span><span class="p">;</span>
  <span class="nl">padding-top</span><span class="p">:</span> <span class="m">50px</span><span class="p">;</span>
  <span class="nl">text-align</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="c1">// 2. This code loads the IFrame Player API code asynchronously.</span>
<span class="kd">var</span> <span class="nx">tag</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">script</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">tag</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">//www.youtube.com/iframe_api</span><span class="dl">"</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">firstScriptTag</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementsByTagName</span><span class="p">(</span><span class="dl">"</span><span class="s2">script</span><span class="dl">"</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span>
<span class="nx">firstScriptTag</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nf">insertBefore</span><span class="p">(</span><span class="nx">tag</span><span class="p">,</span> <span class="nx">firstScriptTag</span><span class="p">);</span>

<span class="c1">// 3. This function creates an &lt;iframe&gt; (and YouTube player)</span>
<span class="c1">//    after the API code downloads.</span>
<span class="kd">var</span> <span class="nx">player</span><span class="p">;</span>

<span class="kd">function</span> <span class="nf">onYouTubeIframeAPIReady</span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nx">player</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">YT</span><span class="p">.</span><span class="nc">Player</span><span class="p">(</span><span class="dl">"</span><span class="s2">player</span><span class="dl">"</span><span class="p">,</span> <span class="p">&#123;</span>
    <span class="na">height</span><span class="p">:</span> <span class="dl">"</span><span class="s2">390</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">width</span><span class="p">:</span> <span class="dl">"</span><span class="s2">640</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">events</span><span class="p">:</span> <span class="p">&#123;</span>
      <span class="na">onReady</span><span class="p">:</span> <span class="nx">onPlayerReady</span><span class="p">,</span>
      <span class="na">onStateChange</span><span class="p">:</span> <span class="nx">onPlayerStateChange</span><span class="p">,</span>
    <span class="p">&#125;,</span>
  <span class="p">&#125;);</span>
<span class="p">&#125;</span>

<span class="kd">var</span> <span class="nx">videos</span> <span class="o">=</span> <span class="p">[</span>
  <span class="p">&#123;</span>
    <span class="na">vid</span><span class="p">:</span> <span class="dl">"</span><span class="s2">0Lu_WHn2tks</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">startSeconds</span><span class="p">:</span> <span class="mi">10</span><span class="p">,</span>
    <span class="na">endSeconds</span><span class="p">:</span> <span class="mf">10.9</span><span class="p">,</span>
  <span class="p">&#125;,</span>
  <span class="p">&#123;</span>
    <span class="na">vid</span><span class="p">:</span> <span class="dl">"</span><span class="s2">0Lu_WHn2tks</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">startSeconds</span><span class="p">:</span> <span class="mi">150</span><span class="p">,</span>
    <span class="na">endSeconds</span><span class="p">:</span> <span class="mi">151</span><span class="p">,</span>
  <span class="p">&#125;,</span>
  <span class="p">&#123;</span>
    <span class="na">vid</span><span class="p">:</span> <span class="dl">"</span><span class="s2">0Lu_WHn2tks</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">startSeconds</span><span class="p">:</span> <span class="mi">666</span><span class="p">,</span>
    <span class="na">endSeconds</span><span class="p">:</span> <span class="mf">666.6</span><span class="p">,</span>
  <span class="p">&#125;,</span>
  <span class="p">&#123;</span>
    <span class="na">vid</span><span class="p">:</span> <span class="dl">"</span><span class="s2">0Lu_WHn2tks</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">startSeconds</span><span class="p">:</span> <span class="mi">671</span><span class="p">,</span>
    <span class="na">endSeconds</span><span class="p">:</span> <span class="mi">672</span><span class="p">,</span>
  <span class="p">&#125;,</span>
<span class="p">];</span>
<span class="kd">var</span> <span class="nx">index</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
<span class="c1">// 4. The API will call this function when the video player is ready.</span>
<span class="kd">function</span> <span class="nf">onPlayerReady</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nf">cueVideoById</span><span class="p">(&#123;</span>
    <span class="na">videoId</span><span class="p">:</span> <span class="nx">videos</span><span class="p">[</span><span class="nx">index</span><span class="p">].</span><span class="nx">vid</span><span class="p">,</span>
    <span class="na">startSeconds</span><span class="p">:</span> <span class="nx">videos</span><span class="p">[</span><span class="nx">index</span><span class="p">].</span><span class="nx">startSeconds</span><span class="p">,</span>
    <span class="na">endSeconds</span><span class="p">:</span> <span class="nx">videos</span><span class="p">[</span><span class="nx">index</span><span class="p">].</span><span class="nx">endSeconds</span><span class="p">,</span>
  <span class="p">&#125;);</span>
  <span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nf">playVideo</span><span class="p">();</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">onPlayerStateChange</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">State change: </span><span class="dl">"</span> <span class="o">+</span> <span class="nx">event</span><span class="p">.</span><span class="nx">data</span> <span class="o">+</span> <span class="dl">"</span><span class="s2"> for index: </span><span class="dl">"</span> <span class="o">+</span> <span class="nx">index</span><span class="p">);</span>

  <span class="k">if </span><span class="p">(</span>
    <span class="nx">event</span><span class="p">.</span><span class="nx">data</span> <span class="o">===</span> <span class="nx">YT</span><span class="p">.</span><span class="nx">PlayerState</span><span class="p">.</span><span class="nx">ENDED</span> <span class="o">&amp;&amp;</span>
    <span class="nx">player</span><span class="p">.</span><span class="nf">getVideoLoadedFraction</span><span class="p">()</span> <span class="o">&gt;</span> <span class="mi">0</span>
  <span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="nx">index</span><span class="p">);</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">index</span> <span class="o">&lt;</span> <span class="nx">videos</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">index</span><span class="o">++</span><span class="p">;</span>
      <span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nf">loadVideoById</span><span class="p">(&#123;</span>
        <span class="na">videoId</span><span class="p">:</span> <span class="nx">videos</span><span class="p">[</span><span class="nx">index</span><span class="p">].</span><span class="nx">vid</span><span class="p">,</span>
        <span class="na">startSeconds</span><span class="p">:</span> <span class="nx">videos</span><span class="p">[</span><span class="nx">index</span><span class="p">].</span><span class="nx">startSeconds</span><span class="p">,</span>
        <span class="na">endSeconds</span><span class="p">:</span> <span class="nx">videos</span><span class="p">[</span><span class="nx">index</span><span class="p">].</span><span class="nx">endSeconds</span><span class="p">,</span>
      <span class="p">&#125;);</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>
<span class="p">&#125;</span>

<span class="kd">var</span> <span class="nx">clicker</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">clicker</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">clicker</span><span class="p">.</span><span class="nx">onclick</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">hey hey</span><span class="dl">"</span><span class="p">);</span>
<span class="p">&#125;;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/s9n2tpdf/">original jsfiddle post</a></p>
