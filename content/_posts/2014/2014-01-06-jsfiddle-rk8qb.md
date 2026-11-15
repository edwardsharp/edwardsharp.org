---
title: "youtube looper tester"
date: "2014-01-06T17:42:52.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css","javascript"]
permalink: "/post/jsfiddle-rk8qb/"
source_id: "rk8qb"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/rk8qb/4/"
source_revision: 4
---
<iframe class="code-demo" src="{{ '/content/media/2014/2014-01-06-jsfiddle-rk8qb-demo.html' | relative_url }}" title="youtube looper tester" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>testing out the youtube js api</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"video1"</span><span class="nt">&gt;&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"clicker"</span><span class="nt">&gt;</span>CHANGE IT<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">html</span><span class="o">,</span>
<span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#video1</span> <span class="p">&#123;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span> <span class="nb">auto</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">600px</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">283px</span><span class="p">;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">block</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#clicker</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">100px</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#ff6600</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">white</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">15px</span> <span class="nb">auto</span><span class="p">;</span>
  <span class="nl">padding-top</span><span class="p">:</span> <span class="m">50px</span><span class="p">;</span>
  <span class="nl">text-align</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="c1">// "mini library" starts here</span>
<span class="kd">var</span> <span class="nx">youTubeAPILoaded</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>

<span class="kd">function</span> <span class="nf">loadYouTubeAPI</span><span class="p">(</span><span class="nx">callBack</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">youTubeAPILoaded</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">tag</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">script</span><span class="dl">"</span><span class="p">);</span>
    <span class="nx">tag</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">https://www.youtube.com/player_api</span><span class="dl">"</span><span class="p">;</span>
    <span class="kd">var</span> <span class="nx">firstScriptTag</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementsByTagName</span><span class="p">(</span><span class="dl">"</span><span class="s2">script</span><span class="dl">"</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span>
    <span class="nx">firstScriptTag</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nf">insertBefore</span><span class="p">(</span><span class="nx">tag</span><span class="p">,</span> <span class="nx">firstScriptTag</span><span class="p">);</span>

    <span class="nb">window</span><span class="p">.</span><span class="nx">onYouTubePlayerAPIReady</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="nx">youTubeAPILoaded</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
      <span class="nf">callBack</span><span class="p">();</span>
    <span class="p">&#125;;</span>
  <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
    <span class="nf">callBack</span><span class="p">();</span>
  <span class="p">&#125;</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">showVideoByID</span><span class="p">(</span><span class="nx">domElement</span><span class="p">,</span> <span class="nx">videoID</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nf">loadYouTubeAPI</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">domElement</span><span class="p">.</span><span class="nx">player</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">domElement</span><span class="p">.</span><span class="nx">player</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">YT</span><span class="p">.</span><span class="nc">Player</span><span class="p">(</span><span class="nx">domElement</span><span class="p">,</span> <span class="p">&#123;</span>
        <span class="na">height</span><span class="p">:</span> <span class="dl">"</span><span class="s2">283</span><span class="dl">"</span><span class="p">,</span>
        <span class="na">width</span><span class="p">:</span> <span class="dl">"</span><span class="s2">600</span><span class="dl">"</span><span class="p">,</span>
        <span class="na">videoId</span><span class="p">:</span> <span class="nx">videoID</span><span class="p">,</span>
        <span class="na">playerVars</span><span class="p">:</span> <span class="p">&#123;</span>
          <span class="na">rel</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
          <span class="na">autoplay</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
          <span class="na">loop</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
          <span class="na">playlist</span><span class="p">:</span> <span class="nx">videoID</span><span class="p">,</span>
          <span class="na">controls</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
          <span class="na">showinfo</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
          <span class="na">modestbranding</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
          <span class="na">wmode</span><span class="p">:</span> <span class="dl">"</span><span class="s2">opaque</span><span class="dl">"</span><span class="p">,</span>
        <span class="p">&#125;,</span>
        <span class="na">events</span><span class="p">:</span> <span class="p">&#123;</span>
          <span class="na">onStateChange</span><span class="p">:</span> <span class="nx">onPlayerStateChange</span><span class="p">,</span>
        <span class="p">&#125;,</span>
      <span class="p">&#125;);</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
      <span class="c1">//player.loadVideoById(&#123;videoId:String, startSeconds:Number, endSeconds:Number, suggestedQuality:String&#125;):Void</span>
      <span class="nx">domElement</span><span class="p">.</span><span class="nx">player</span><span class="p">.</span><span class="nf">loadVideoById</span><span class="p">(</span><span class="nx">videoID</span><span class="p">);</span>
    <span class="p">&#125;</span>
    <span class="nx">nowPlaying</span> <span class="o">=</span> <span class="nx">player</span><span class="p">;</span>
    <span class="nx">currentPopup</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">previousLanguage</span> <span class="o">=</span> <span class="nx">language</span><span class="p">;</span>
  <span class="p">&#125;);</span>
<span class="p">&#125;</span>
<span class="c1">// end of "mini library"</span>

<span class="kd">var</span> <span class="nx">videoContainer</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">video1</span><span class="dl">"</span><span class="p">);</span>
<span class="nf">showVideoByID</span><span class="p">(</span><span class="nx">videoContainer</span><span class="p">,</span> <span class="dl">"</span><span class="s2">NoDTqebi860</span><span class="dl">"</span><span class="p">);</span>

<span class="kd">var</span> <span class="nx">clicker</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">clicker</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">clicker</span><span class="p">.</span><span class="nx">onclick</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nf">showVideoByID</span><span class="p">(</span><span class="nx">videoContainer</span><span class="p">,</span> <span class="dl">"</span><span class="s2">fWZHAy8zOOA</span><span class="dl">"</span><span class="p">);</span>
<span class="p">&#125;;</span>

<span class="c1">// when video ends</span>
<span class="kd">function</span> <span class="nf">onPlayerStateChange</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">data</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nf">playVideo</span><span class="p">();</span>
  <span class="p">&#125;</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/rk8qb/4/">original jsfiddle post</a></p>
