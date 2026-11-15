---
title: "a coffee consumption chart"
description: "a google charts experiment queries a fusion table for yearly coffee consumption by country."
date: "2013-10-12T06:30:39.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","javascript"]
permalink: "/post/jsfiddle-TxUKU/"
source_id: "TxUKU"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/TxUKU/1/"
source_revision: 1
---
<iframe class="code-demo" src="{{ '/content/media/2013/2013-10-12-jsfiddle-TxUKU-demo.html' | relative_url }}" title="jsfiddle / TxUKU" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"http://www.google.com/jsapi?fake=.js"</span><span class="nt">&gt;&lt;/script&gt;</span>

<span class="nt">&lt;body</span> <span class="na">style=</span><span class="s">"font-family: Arial; border: 0 none"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"visualization_div"</span> <span class="na">style=</span><span class="s">"width: 600px; height: 400px"</span><span class="nt">&gt;&lt;/div&gt;</span>
<span class="nt">&lt;/body&gt;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="nx">google</span><span class="p">.</span><span class="nf">load</span><span class="p">(</span><span class="dl">"</span><span class="s2">visualization</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">1</span><span class="dl">"</span><span class="p">,</span> <span class="p">&#123;</span> <span class="na">packages</span><span class="p">:</span> <span class="p">[</span><span class="dl">"</span><span class="s2">corechart</span><span class="dl">"</span><span class="p">]</span> <span class="p">&#125;);</span>
<span class="kd">function</span> <span class="nf">drawVisualization</span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="kd">var</span> <span class="nx">queryText</span> <span class="o">=</span> <span class="nf">encodeURIComponent</span><span class="p">(</span>
    <span class="dl">"</span><span class="s2">SELECT Year, Austria, Bulgaria, Denmark, Greece FROM 641716</span><span class="dl">"</span><span class="p">,</span>
  <span class="p">);</span>
  <span class="nx">google</span><span class="p">.</span><span class="nx">visualization</span><span class="p">.</span><span class="nf">drawChart</span><span class="p">(&#123;</span>
    <span class="na">containerId</span><span class="p">:</span> <span class="dl">"</span><span class="s2">visualization_div</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">dataSourceUrl</span><span class="p">:</span> <span class="dl">"</span><span class="s2">https://www.google.com/fusiontables/gvizdata?tq=</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">query</span><span class="p">:</span> <span class="dl">"</span><span class="s2">SELECT Year, Austria, Bulgaria, Denmark, Greece FROM 641716</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">refreshInterval</span><span class="p">:</span> <span class="mi">5</span><span class="p">,</span>
    <span class="na">chartType</span><span class="p">:</span> <span class="dl">"</span><span class="s2">BarChart</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">options</span><span class="p">:</span> <span class="p">&#123;</span>
      <span class="na">title</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Yearly Coffee Consumption by Country</span><span class="dl">"</span><span class="p">,</span>
      <span class="na">vAxis</span><span class="p">:</span> <span class="p">&#123;</span> <span class="na">title</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Year</span><span class="dl">"</span> <span class="p">&#125;,</span>
      <span class="na">hAxis</span><span class="p">:</span> <span class="p">&#123;</span> <span class="na">title</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Cups</span><span class="dl">"</span> <span class="p">&#125;,</span>
    <span class="p">&#125;,</span>
  <span class="p">&#125;);</span>
<span class="p">&#125;</span>

<span class="nx">google</span><span class="p">.</span><span class="nf">setOnLoadCallback</span><span class="p">(</span><span class="nx">drawVisualization</span><span class="p">);</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/TxUKU/1/">original jsfiddle post</a></p>
