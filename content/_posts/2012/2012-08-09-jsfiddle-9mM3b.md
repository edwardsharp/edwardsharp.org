---
title: "jsfiddle / 9mM3b"
date: "2012-08-09T06:13:29.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","javascript"]
permalink: "/post/jsfiddle-9mM3b/"
source_id: "9mM3b"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/9mM3b/"
source_revision: 0
---
<iframe class="code-demo" src="{{ '/content/media/2012/2012-08-09-jsfiddle-9mM3b-demo.html' | relative_url }}" title="jsfiddle / 9mM3b" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"http://popcornjs.org/code/dist/popcorn-complete.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"container-id"</span><span class="nt">&gt;&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"foo"</span><span class="nt">&gt;&lt;/div&gt;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="c1">// create our sequence</span>
<span class="kd">var</span> <span class="nx">sequence</span> <span class="o">=</span> <span class="nx">Popcorn</span><span class="p">.</span><span class="nf">sequence</span><span class="p">(</span><span class="dl">"</span><span class="s2">container-id</span><span class="dl">"</span><span class="p">,</span> <span class="p">[</span>
  <span class="p">&#123;</span>
    <span class="na">src</span><span class="p">:</span> <span class="dl">"</span><span class="s2">http://videos.mozilla.org/serv/webmademovies/atultroll.webm</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">in</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
    <span class="na">out</span><span class="p">:</span> <span class="mi">3</span><span class="p">,</span>
  <span class="p">&#125;,</span>
  <span class="p">&#123;</span>
    <span class="na">src</span><span class="p">:</span> <span class="dl">"</span><span class="s2">http://videos.mozilla.org/serv/webmademovies/justintime.ogv</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">in</span><span class="p">:</span> <span class="mi">174</span><span class="p">,</span>
    <span class="na">out</span><span class="p">:</span> <span class="mi">180</span><span class="p">,</span>
  <span class="p">&#125;,</span>
  <span class="p">&#123;</span>
    <span class="na">src</span><span class="p">:</span> <span class="dl">"</span><span class="s2">http://videos.mozilla.org/serv/webmademovies/popcornplug.ogv</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">in</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
    <span class="na">out</span><span class="p">:</span> <span class="mi">6</span><span class="p">,</span>
  <span class="p">&#125;,</span>
<span class="p">]);</span>

<span class="c1">// play popcorn</span>
<span class="nx">sequence</span><span class="p">.</span><span class="nf">play</span><span class="p">();</span>

<span class="nx">sequence</span><span class="p">.</span><span class="nf">footnote</span><span class="p">(&#123;</span>
  <span class="na">start</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
  <span class="na">end</span><span class="p">:</span> <span class="mi">2</span><span class="p">,</span>
  <span class="na">text</span><span class="p">:</span> <span class="dl">"</span><span class="s2">footnote</span><span class="dl">"</span><span class="p">,</span>
  <span class="na">target</span><span class="p">:</span> <span class="dl">"</span><span class="s2">foo</span><span class="dl">"</span><span class="p">,</span>
<span class="p">&#125;);</span>

<span class="c1">// get popcorn object of first video</span>
<span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="nx">sequence</span><span class="p">.</span><span class="nf">eq</span><span class="p">(</span><span class="mi">0</span><span class="p">));</span>

<span class="c1">//exec something at 4 seconds</span>
<span class="nx">sequence</span><span class="p">.</span><span class="nf">exec</span><span class="p">(</span><span class="mi">4</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">AT 4 SECONDS</span><span class="dl">"</span><span class="p">);</span>
<span class="p">&#125;);</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/9mM3b/">original jsfiddle post</a></p>
