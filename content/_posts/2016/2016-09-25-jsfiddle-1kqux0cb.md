---
title: "been said"
date: "2016-09-25T07:34:45.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-1kqux0cb/"
source_id: "1kqux0cb"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/1kqux0cb/"
source_revision: 19
---
<iframe class="code-demo" src="{{ '/content/media/2016/2016-09-25-jsfiddle-1kqux0cb-demo.html' | relative_url }}" title="been said" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>a youtube segment looper using the youtube iframe api &amp; jquery ui slider</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;link</span>
  <span class="na">rel=</span><span class="s">"stylesheet"</span>
  <span class="na">href=</span><span class="s">"//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css"</span>
<span class="nt">/&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"//code.jquery.com/jquery-1.10.2.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"//code.jquery.com/ui/1.10.4/jquery-ui.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;pre</span> <span class="na">class=</span><span class="s">"jumb0"</span><span class="nt">&gt;</span>
 _                                _     _ 
| |                              (_)   | |
| |__   ___  ___ _ __   ___  __ _ _  __| |
| '_ \ / _ \/ _ \ '_ \ / __|/ _` | |/ _` |
| |_) |  __/  __/ | | |\__ \ (_| | | (_| |
|_.__/ \___|\___|_| |_||___/\__,_|_|\__,_|
<span class="nt">&lt;/pre&gt;</span>

<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"video_well"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"clicker"</span> <span class="na">class=</span><span class="s">"jumb0"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;table&gt;</span>
      <span class="nt">&lt;thead&gt;</span>
        <span class="nt">&lt;tr&gt;</span>
          <span class="nt">&lt;td&gt;</span>phrase<span class="nt">&lt;/td&gt;</span>
          <span class="nt">&lt;td&gt;</span>range<span class="nt">&lt;/td&gt;</span>
          <span class="nt">&lt;td&gt;</span>video id<span class="nt">&lt;/td&gt;</span>
          <span class="nt">&lt;td&gt;</span>loop<span class="nt">&lt;/td&gt;</span>
        <span class="nt">&lt;/tr&gt;</span>
      <span class="nt">&lt;/thead&gt;</span>
      <span class="nt">&lt;tbody&gt;</span>
        <span class="nt">&lt;tr&gt;</span>
          <span class="nt">&lt;td&gt;</span>
            <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">id=</span><span class="s">"phrase"</span> <span class="na">title=</span><span class="s">"phrase"</span> <span class="na">readonly</span> <span class="nt">/&gt;</span>
          <span class="nt">&lt;/td&gt;</span>
          <span class="nt">&lt;td&gt;</span>
            <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">id=</span><span class="s">"range"</span> <span class="na">title=</span><span class="s">"time range"</span> <span class="na">readonly</span> <span class="nt">/&gt;</span>
          <span class="nt">&lt;/td&gt;</span>
          <span class="nt">&lt;td&gt;</span>
            <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">id=</span><span class="s">"video_id"</span> <span class="na">title=</span><span class="s">"youtube video id"</span> <span class="nt">/&gt;</span>
          <span class="nt">&lt;/td&gt;</span>
          <span class="nt">&lt;td&gt;</span>
            <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"checkbox"</span> <span class="na">id=</span><span class="s">"loop"</span> <span class="na">checked</span> <span class="nt">/&gt;</span>
          <span class="nt">&lt;/td&gt;</span>
        <span class="nt">&lt;/tr&gt;</span>
      <span class="nt">&lt;/tbody&gt;</span>
    <span class="nt">&lt;/table&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"slider-range"</span><span class="nt">&gt;&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"player"</span><span class="nt">&gt;&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">html</span><span class="o">,</span>
<span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#000</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">white</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.video_well</span> <span class="p">&#123;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">10px</span> <span class="nb">auto</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">335px</span><span class="p">;</span>
  <span class="nl">border</span><span class="p">:</span> <span class="nb">thin</span> <span class="nb">solid</span> <span class="nx">white</span><span class="p">;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">5px</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">5px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.jumb0</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">320px</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span> <span class="nb">auto</span><span class="p">;</span>
  <span class="nl">text-align</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nt">iframe</span> <span class="p">&#123;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span> <span class="nb">auto</span><span class="p">;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">block</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#video_id</span><span class="o">,</span>
<span class="nf">#range</span><span class="o">,</span>
<span class="nf">#phrase</span> <span class="p">&#123;</span>
  <span class="nl">border</span><span class="p">:</span> <span class="nb">thin</span> <span class="nb">solid</span> <span class="nx">white</span><span class="p">;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">2px</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#fff</span><span class="p">;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#000</span><span class="p">;</span>
  <span class="nl">font-weight</span><span class="p">:</span> <span class="nb">bold</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">2px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#phrase</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">100px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#video_id</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">80px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#range</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">85px</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="c1">// This code loads the IFrame Player API code asynchronously.</span>
<span class="kd">var</span> <span class="nx">tag</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">script</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">tag</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">//www.youtube.com/iframe_api</span><span class="dl">"</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">firstScriptTag</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementsByTagName</span><span class="p">(</span><span class="dl">"</span><span class="s2">script</span><span class="dl">"</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span>
<span class="nx">firstScriptTag</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nf">insertBefore</span><span class="p">(</span><span class="nx">tag</span><span class="p">,</span> <span class="nx">firstScriptTag</span><span class="p">);</span>

<span class="kd">var</span> <span class="nx">vid</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">6LFY0q484rc</span><span class="dl">"</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">startSeconds</span> <span class="o">=</span> <span class="mf">107.8</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">endSeconds</span> <span class="o">=</span> <span class="mf">110.8</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">duration</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">phrase</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">lookin straight at me with sassy/saucy look on her face.</span><span class="dl">"</span><span class="p">;</span>

<span class="c1">// This function creates an &lt;iframe&gt; (and YouTube player)</span>
<span class="c1">//    after the API code downloads.</span>
<span class="kd">var</span> <span class="nx">player</span><span class="p">;</span>

<span class="kd">function</span> <span class="nf">onYouTubeIframeAPIReady</span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nx">player</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">YT</span><span class="p">.</span><span class="nc">Player</span><span class="p">(</span><span class="dl">"</span><span class="s2">player</span><span class="dl">"</span><span class="p">,</span> <span class="p">&#123;</span>
    <span class="na">height</span><span class="p">:</span> <span class="dl">"</span><span class="s2">195</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">width</span><span class="p">:</span> <span class="dl">"</span><span class="s2">320</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">playerVars</span><span class="p">:</span> <span class="p">&#123;</span>
      <span class="na">rel</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
      <span class="na">controls</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
      <span class="na">showinfo</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
      <span class="na">modestbranding</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
      <span class="na">wmode</span><span class="p">:</span> <span class="dl">"</span><span class="s2">opaque</span><span class="dl">"</span><span class="p">,</span>
    <span class="p">&#125;,</span>
    <span class="na">events</span><span class="p">:</span> <span class="p">&#123;</span>
      <span class="na">onReady</span><span class="p">:</span> <span class="nx">onPlayerReady</span><span class="p">,</span>
      <span class="na">onStateChange</span><span class="p">:</span> <span class="nx">onPlayerStateChange</span><span class="p">,</span>
    <span class="p">&#125;,</span>
  <span class="p">&#125;);</span>
<span class="p">&#125;</span>

<span class="c1">// The API will call this function when the video player is ready.</span>
<span class="kd">function</span> <span class="nf">onPlayerReady</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#video_id</span><span class="dl">"</span><span class="p">).</span><span class="nf">val</span><span class="p">(</span><span class="nx">vid</span><span class="p">);</span>
  <span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nf">cueVideoById</span><span class="p">(&#123;</span>
    <span class="na">videoId</span><span class="p">:</span> <span class="nx">vid</span><span class="p">,</span>
    <span class="na">startSeconds</span><span class="p">:</span> <span class="nx">startSeconds</span><span class="p">,</span>
    <span class="na">endSeconds</span><span class="p">:</span> <span class="nx">endSeconds</span><span class="p">,</span>
  <span class="p">&#125;);</span>
  <span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nf">playVideo</span><span class="p">();</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">onPlayerStateChange</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">State change: </span><span class="dl">"</span> <span class="o">+</span> <span class="nx">event</span><span class="p">.</span><span class="nx">data</span><span class="p">);</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nf">getDuration</span><span class="p">())</span> <span class="p">&#123;</span>
    <span class="nx">duration</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nf">getDuration</span><span class="p">();</span>
    <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">duration:</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">duration</span><span class="p">);</span>
    <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#slider-range</span><span class="dl">"</span><span class="p">).</span><span class="nf">slider</span><span class="p">(</span><span class="dl">"</span><span class="s2">option</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">max</span><span class="dl">"</span><span class="p">,</span> <span class="nx">duration</span><span class="p">);</span>
  <span class="p">&#125;</span>

  <span class="k">if </span><span class="p">(</span>
    <span class="nx">event</span><span class="p">.</span><span class="nx">data</span> <span class="o">===</span> <span class="nx">YT</span><span class="p">.</span><span class="nx">PlayerState</span><span class="p">.</span><span class="nx">ENDED</span> <span class="o">&amp;&amp;</span>
    <span class="nx">player</span><span class="p">.</span><span class="nf">getVideoLoadedFraction</span><span class="p">()</span> <span class="o">&gt;</span> <span class="mi">0</span>
  <span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">loop</span><span class="dl">"</span><span class="p">).</span><span class="nx">checked</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nf">seekTo</span><span class="p">(</span><span class="nx">startSeconds</span><span class="p">);</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>
<span class="p">&#125;</span>

<span class="nf">$</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#loop</span><span class="dl">"</span><span class="p">).</span><span class="nf">click</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span><span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nf">is</span><span class="p">(</span><span class="dl">"</span><span class="s2">:checked</span><span class="dl">"</span><span class="p">))</span> <span class="p">&#123;</span>
      <span class="nx">player</span><span class="p">.</span><span class="nf">seekTo</span><span class="p">(</span><span class="nx">startSeconds</span><span class="p">);</span>
      <span class="nx">player</span><span class="p">.</span><span class="nf">playVideo</span><span class="p">();</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;);</span>

  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#video_id</span><span class="dl">"</span><span class="p">).</span><span class="nf">focusout</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">vid</span> <span class="o">!=</span> <span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nf">val</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nf">val</span><span class="p">())</span> <span class="p">&#123;</span>
      <span class="nx">vid</span> <span class="o">=</span> <span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nf">val</span><span class="p">();</span>
      <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#phrase</span><span class="dl">"</span><span class="p">).</span><span class="nf">val</span><span class="p">(</span><span class="dl">""</span><span class="p">);</span>
      <span class="nx">player</span><span class="p">.</span><span class="nf">loadVideoById</span><span class="p">(&#123;</span>
        <span class="na">videoId</span><span class="p">:</span> <span class="nx">vid</span><span class="p">,</span>
      <span class="p">&#125;);</span>
      <span class="nx">player</span><span class="p">.</span><span class="nf">playVideo</span><span class="p">();</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;);</span>

  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#phrase</span><span class="dl">"</span><span class="p">).</span><span class="nf">val</span><span class="p">(</span><span class="nx">phrase</span><span class="p">);</span>
  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#slider-range</span><span class="dl">"</span><span class="p">).</span><span class="nf">slider</span><span class="p">(&#123;</span>
    <span class="na">range</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
    <span class="na">min</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
    <span class="na">max</span><span class="p">:</span> <span class="nx">duration</span><span class="p">,</span>
    <span class="na">step</span><span class="p">:</span> <span class="mf">0.1</span><span class="p">,</span>
    <span class="na">values</span><span class="p">:</span> <span class="p">[</span><span class="nx">startSeconds</span><span class="p">,</span> <span class="nx">endSeconds</span><span class="p">],</span>
    <span class="na">slide</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">ui</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#range</span><span class="dl">"</span><span class="p">).</span><span class="nf">val</span><span class="p">(</span><span class="nx">ui</span><span class="p">.</span><span class="nx">values</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">+</span> <span class="dl">"</span><span class="s2"> - </span><span class="dl">"</span> <span class="o">+</span> <span class="nx">ui</span><span class="p">.</span><span class="nx">values</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span>
    <span class="p">&#125;,</span>
    <span class="na">stop</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">ui</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">startSeconds</span> <span class="o">=</span> <span class="nx">ui</span><span class="p">.</span><span class="nx">values</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span>
      <span class="nx">endSeconds</span> <span class="o">=</span> <span class="nx">ui</span><span class="p">.</span><span class="nx">values</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span>
      <span class="nx">player</span><span class="p">.</span><span class="nf">loadVideoById</span><span class="p">(&#123;</span>
        <span class="na">videoId</span><span class="p">:</span> <span class="nx">vid</span><span class="p">,</span>
        <span class="na">startSeconds</span><span class="p">:</span> <span class="nx">startSeconds</span><span class="p">,</span>
        <span class="na">endSeconds</span><span class="p">:</span> <span class="nx">endSeconds</span><span class="p">,</span>
      <span class="p">&#125;);</span>
      <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#range</span><span class="dl">"</span><span class="p">).</span><span class="nf">val</span><span class="p">(</span><span class="nx">startSeconds</span> <span class="o">+</span> <span class="dl">"</span><span class="s2"> - </span><span class="dl">"</span> <span class="o">+</span> <span class="nx">endSeconds</span><span class="p">);</span>
    <span class="p">&#125;,</span>
  <span class="p">&#125;);</span>
  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#range</span><span class="dl">"</span><span class="p">).</span><span class="nf">val</span><span class="p">(</span><span class="nx">startSeconds</span> <span class="o">+</span> <span class="dl">"</span><span class="s2"> - </span><span class="dl">"</span> <span class="o">+</span> <span class="nx">endSeconds</span><span class="p">);</span>
<span class="p">&#125;);</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/1kqux0cb/">original jsfiddle post</a></p>
