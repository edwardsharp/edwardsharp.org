---
title: "Gantt Chart Example"
date: "2016-09-30T11:35:50.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","javascript"]
permalink: "/post/jsfiddle-svmw6taj/"
source_id: "svmw6taj"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/svmw6taj/"
source_revision: 0
---
<iframe class="code-demo" src="{{ '/content/media/2016/2016-09-30-jsfiddle-svmw6taj-demo.html' | relative_url }}" title="Gantt Chart Example" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>An example of a Google Gantt Chart.</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script
  </span><span class="na">type=</span><span class="s">"text/javascript"</span>
  <span class="na">src=</span><span class="s">"https://www.gstatic.com/charts/loader.js"</span>
<span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"chart_div"</span><span class="nt">&gt;&lt;/div&gt;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="nx">google</span><span class="p">.</span><span class="nx">charts</span><span class="p">.</span><span class="nf">load</span><span class="p">(</span><span class="dl">"</span><span class="s2">current</span><span class="dl">"</span><span class="p">,</span> <span class="p">&#123;</span> <span class="na">packages</span><span class="p">:</span> <span class="p">[</span><span class="dl">"</span><span class="s2">gantt</span><span class="dl">"</span><span class="p">]</span> <span class="p">&#125;);</span>
<span class="nx">google</span><span class="p">.</span><span class="nx">charts</span><span class="p">.</span><span class="nf">setOnLoadCallback</span><span class="p">(</span><span class="nx">drawChart</span><span class="p">);</span>

<span class="kd">function</span> <span class="nf">daysToMilliseconds</span><span class="p">(</span><span class="nx">days</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="k">return</span> <span class="nx">days</span> <span class="o">*</span> <span class="mi">24</span> <span class="o">*</span> <span class="mi">60</span> <span class="o">*</span> <span class="mi">60</span> <span class="o">*</span> <span class="mi">1000</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">drawChart</span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">google</span><span class="p">.</span><span class="nx">visualization</span><span class="p">.</span><span class="nc">DataTable</span><span class="p">();</span>
  <span class="nx">data</span><span class="p">.</span><span class="nf">addColumn</span><span class="p">(</span><span class="dl">"</span><span class="s2">string</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">Task ID</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">data</span><span class="p">.</span><span class="nf">addColumn</span><span class="p">(</span><span class="dl">"</span><span class="s2">string</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">Task Name</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">data</span><span class="p">.</span><span class="nf">addColumn</span><span class="p">(</span><span class="dl">"</span><span class="s2">string</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">Resource</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">data</span><span class="p">.</span><span class="nf">addColumn</span><span class="p">(</span><span class="dl">"</span><span class="s2">date</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">Start Date</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">data</span><span class="p">.</span><span class="nf">addColumn</span><span class="p">(</span><span class="dl">"</span><span class="s2">date</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">End Date</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">data</span><span class="p">.</span><span class="nf">addColumn</span><span class="p">(</span><span class="dl">"</span><span class="s2">number</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">Duration</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">data</span><span class="p">.</span><span class="nf">addColumn</span><span class="p">(</span><span class="dl">"</span><span class="s2">number</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">Percent Complete</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">data</span><span class="p">.</span><span class="nf">addColumn</span><span class="p">(</span><span class="dl">"</span><span class="s2">string</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">Dependencies</span><span class="dl">"</span><span class="p">);</span>

  <span class="nx">data</span><span class="p">.</span><span class="nf">addRows</span><span class="p">([</span>
    <span class="p">[</span>
      <span class="dl">"</span><span class="s2">Research</span><span class="dl">"</span><span class="p">,</span>
      <span class="dl">"</span><span class="s2">Find sources</span><span class="dl">"</span><span class="p">,</span>
      <span class="kc">null</span><span class="p">,</span>
      <span class="k">new</span> <span class="nc">Date</span><span class="p">(</span><span class="mi">2015</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">),</span>
      <span class="k">new</span> <span class="nc">Date</span><span class="p">(</span><span class="mi">2015</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">5</span><span class="p">),</span>
      <span class="kc">null</span><span class="p">,</span>
      <span class="mi">100</span><span class="p">,</span>
      <span class="kc">null</span><span class="p">,</span>
    <span class="p">],</span>
    <span class="p">[</span>
      <span class="dl">"</span><span class="s2">Write</span><span class="dl">"</span><span class="p">,</span>
      <span class="dl">"</span><span class="s2">Write paper</span><span class="dl">"</span><span class="p">,</span>
      <span class="dl">"</span><span class="s2">write</span><span class="dl">"</span><span class="p">,</span>
      <span class="kc">null</span><span class="p">,</span>
      <span class="k">new</span> <span class="nc">Date</span><span class="p">(</span><span class="mi">2015</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">9</span><span class="p">),</span>
      <span class="nf">daysToMilliseconds</span><span class="p">(</span><span class="mi">3</span><span class="p">),</span>
      <span class="mi">25</span><span class="p">,</span>
      <span class="dl">"</span><span class="s2">Research,Outline</span><span class="dl">"</span><span class="p">,</span>
    <span class="p">],</span>
    <span class="p">[</span>
      <span class="dl">"</span><span class="s2">Cite</span><span class="dl">"</span><span class="p">,</span>
      <span class="dl">"</span><span class="s2">Create bibliography</span><span class="dl">"</span><span class="p">,</span>
      <span class="dl">"</span><span class="s2">write</span><span class="dl">"</span><span class="p">,</span>
      <span class="kc">null</span><span class="p">,</span>
      <span class="k">new</span> <span class="nc">Date</span><span class="p">(</span><span class="mi">2015</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">7</span><span class="p">),</span>
      <span class="nf">daysToMilliseconds</span><span class="p">(</span><span class="mi">1</span><span class="p">),</span>
      <span class="mi">20</span><span class="p">,</span>
      <span class="dl">"</span><span class="s2">Research</span><span class="dl">"</span><span class="p">,</span>
    <span class="p">],</span>
    <span class="p">[</span>
      <span class="dl">"</span><span class="s2">Complete</span><span class="dl">"</span><span class="p">,</span>
      <span class="dl">"</span><span class="s2">Hand in paper</span><span class="dl">"</span><span class="p">,</span>
      <span class="dl">"</span><span class="s2">complete</span><span class="dl">"</span><span class="p">,</span>
      <span class="kc">null</span><span class="p">,</span>
      <span class="k">new</span> <span class="nc">Date</span><span class="p">(</span><span class="mi">2015</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">10</span><span class="p">),</span>
      <span class="nf">daysToMilliseconds</span><span class="p">(</span><span class="mi">1</span><span class="p">),</span>
      <span class="mi">0</span><span class="p">,</span>
      <span class="dl">"</span><span class="s2">Cite,Write</span><span class="dl">"</span><span class="p">,</span>
    <span class="p">],</span>
    <span class="p">[</span>
      <span class="dl">"</span><span class="s2">Outline</span><span class="dl">"</span><span class="p">,</span>
      <span class="dl">"</span><span class="s2">Outline paper</span><span class="dl">"</span><span class="p">,</span>
      <span class="dl">"</span><span class="s2">write</span><span class="dl">"</span><span class="p">,</span>
      <span class="kc">null</span><span class="p">,</span>
      <span class="k">new</span> <span class="nc">Date</span><span class="p">(</span><span class="mi">2015</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">6</span><span class="p">),</span>
      <span class="nf">daysToMilliseconds</span><span class="p">(</span><span class="mi">1</span><span class="p">),</span>
      <span class="mi">100</span><span class="p">,</span>
      <span class="dl">"</span><span class="s2">Research</span><span class="dl">"</span><span class="p">,</span>
    <span class="p">],</span>
  <span class="p">]);</span>

  <span class="kd">var</span> <span class="nx">options</span> <span class="o">=</span> <span class="p">&#123;</span>
    <span class="na">height</span><span class="p">:</span> <span class="mi">275</span><span class="p">,</span>
    <span class="na">gantt</span><span class="p">:</span> <span class="p">&#123;</span>
      <span class="na">criticalPathEnabled</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span> <span class="c1">// Critical path arrows will be the same as other arrows.</span>
      <span class="na">arrow</span><span class="p">:</span> <span class="p">&#123;</span>
        <span class="na">angle</span><span class="p">:</span> <span class="mi">100</span><span class="p">,</span>
        <span class="na">width</span><span class="p">:</span> <span class="mi">5</span><span class="p">,</span>
        <span class="na">color</span><span class="p">:</span> <span class="dl">"</span><span class="s2">green</span><span class="dl">"</span><span class="p">,</span>
        <span class="na">radius</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
      <span class="p">&#125;,</span>
    <span class="p">&#125;,</span>
  <span class="p">&#125;;</span>

  <span class="kd">var</span> <span class="nx">chart</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">google</span><span class="p">.</span><span class="nx">visualization</span><span class="p">.</span><span class="nc">Gantt</span><span class="p">(</span>
    <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">chart_div</span><span class="dl">"</span><span class="p">),</span>
  <span class="p">);</span>

  <span class="nx">chart</span><span class="p">.</span><span class="nf">draw</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/svmw6taj/">original jsfiddle post</a></p>
