---
title: "an angular jsonp callback"
description: "a small angular experiment requesting wordpress posts through a jsonp callback."
date: "2015-02-09T03:39:38.000Z"
date_precision: "second"
tags: ["jsfiddle","code","angularjs","html","javascript"]
permalink: "/post/jsfiddle-gm4jno57/"
source_id: "gm4jno57"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/gm4jno57/"
source_revision: 1
---
<iframe class="code-demo" src="{{ '/content/media/2015/2015-02-09-jsfiddle-gm4jno57-demo.html' | relative_url }}" title="jsfiddle / gm4jno57" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;div</span> <span class="na">ng-app</span> <span class="na">ng-controller=</span><span class="s">"jsonp_thingy"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">ng-click=</span><span class="s">"doRequest()"</span><span class="nt">&gt;</span>Make JSONP request<span class="nt">&lt;/button&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="c1">// pop open yr console</span>

<span class="kd">function</span> <span class="nf">jsonp_callback</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="c1">// returning from async callbacks is (generally) meaningless</span>
  <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">found</span><span class="p">);</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">jsonp_thingy</span><span class="p">(</span><span class="nx">$scope</span><span class="p">,</span> <span class="nx">$http</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">$scope</span><span class="p">.</span><span class="nx">doRequest</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">url</span> <span class="o">=</span>
      <span class="dl">"</span><span class="s2">http://public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com/posts?callback=jsonp_callback</span><span class="dl">"</span><span class="p">;</span>

    <span class="nx">$http</span><span class="p">.</span><span class="nf">jsonp</span><span class="p">(</span><span class="nx">url</span><span class="p">);</span>
  <span class="p">&#125;;</span>

  <span class="kd">var</span> <span class="nx">url</span> <span class="o">=</span>
    <span class="dl">"</span><span class="s2">http://public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com/posts?callback=jsonp_callback</span><span class="dl">"</span><span class="p">;</span>

  <span class="nx">$http</span><span class="p">.</span><span class="nf">jsonp</span><span class="p">(</span><span class="nx">url</span><span class="p">);</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/gm4jno57/">original jsfiddle post</a></p>
