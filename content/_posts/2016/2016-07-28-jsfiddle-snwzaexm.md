---
title: "youtube shit"
date: "2016-07-28T20:25:07.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","javascript"]
permalink: "/post/jsfiddle-snwzaexm/"
source_id: "snwzaexm"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/snwzaexm/7/"
source_revision: 7
---
<iframe class="code-demo" src="{{ '/content/media/2016/2016-07-28-jsfiddle-snwzaexm-demo.html' | relative_url }}" title="youtube shit" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>for alex</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="c">&lt;!-- 1. The &lt;iframe&gt; (and video player) will replace this &lt;div&gt; tag. --&gt;</span>
<span class="nt">&lt;body&gt;</span>
  <span class="nt">&lt;div&gt;</span>hey just writing a thing<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"player"</span><span class="nt">&gt;&lt;/div&gt;</span>
<span class="nt">&lt;/body&gt;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="c1">// 2. This code loads the IFrame Player API code asynchronously.</span>
<span class="kd">var</span> <span class="nx">tag</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">script</span><span class="dl">"</span><span class="p">);</span>

<span class="nx">tag</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">https://www.youtube.com/iframe_api</span><span class="dl">"</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">firstScriptTag</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementsByTagName</span><span class="p">(</span><span class="dl">"</span><span class="s2">script</span><span class="dl">"</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span>
<span class="nx">firstScriptTag</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nf">insertBefore</span><span class="p">(</span><span class="nx">tag</span><span class="p">,</span> <span class="nx">firstScriptTag</span><span class="p">);</span>

<span class="c1">// 3. This function creates an &lt;iframe&gt; (and YouTube player)</span>
<span class="c1">//    after the API code downloads.</span>
<span class="kd">var</span> <span class="nx">player</span><span class="p">;</span>
<span class="kd">function</span> <span class="nf">onYouTubeIframeAPIReady</span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nx">player</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">YT</span><span class="p">.</span><span class="nc">Player</span><span class="p">(</span><span class="dl">"</span><span class="s2">player</span><span class="dl">"</span><span class="p">,</span> <span class="p">&#123;</span>
    <span class="na">height</span><span class="p">:</span> <span class="dl">"</span><span class="s2">390</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">width</span><span class="p">:</span> <span class="dl">"</span><span class="s2">640</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">videoId</span><span class="p">:</span> <span class="dl">"</span><span class="s2">8_dXp0eF8s0</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">playerVars</span><span class="p">:</span> <span class="p">&#123;</span>
      <span class="c1">//  'autoplay': 1,</span>
      <span class="na">controls</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
      <span class="na">autohide</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
      <span class="na">wmode</span><span class="p">:</span> <span class="dl">"</span><span class="s2">opaque</span><span class="dl">"</span><span class="p">,</span>
      <span class="na">showinfo</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
      <span class="na">loop</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
      <span class="na">mute</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
      <span class="na">playlist</span><span class="p">:</span> <span class="dl">"</span><span class="s2">8_dXp0eF8s0</span><span class="dl">"</span><span class="p">,</span>
    <span class="p">&#125;,</span>
    <span class="na">events</span><span class="p">:</span> <span class="p">&#123;</span>
      <span class="na">onReady</span><span class="p">:</span> <span class="nx">onPlayerReady</span><span class="p">,</span>
    <span class="p">&#125;,</span>
  <span class="p">&#125;);</span>
<span class="p">&#125;</span>

<span class="c1">// 4. The API will call this function when the video player is ready.</span>
<span class="kd">function</span> <span class="nf">onPlayerReady</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="c1">//event.target.playVideo();</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">stopVideo</span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nx">player</span><span class="p">.</span><span class="nf">stopVideo</span><span class="p">();</span>
<span class="p">&#125;</span>

<span class="c1">//could consider using an event handler function to re-play (loop) the video.</span>

<span class="nb">document</span><span class="p">.</span><span class="nf">getElementsByTagName</span><span class="p">(</span><span class="dl">"</span><span class="s2">body</span><span class="dl">"</span><span class="p">)[</span><span class="mi">0</span><span class="p">].</span><span class="nf">addEventListener</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">touchstart</span><span class="dl">"</span><span class="p">,</span>
  <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="nx">player</span><span class="p">.</span><span class="nf">playVideo</span><span class="p">();</span>
    <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">HEY</span><span class="dl">"</span><span class="p">);</span>
  <span class="p">&#125;,</span>
  <span class="kc">false</span><span class="p">,</span>
<span class="p">);</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/snwzaexm/7/">original jsfiddle post</a></p>
