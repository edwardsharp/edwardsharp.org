---
title: "collapse table col"
description: "clicking a table heading toggles the visibility of the cells in that column."
date: "2015-08-26T05:41:52.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","javascript"]
permalink: "/post/jsfiddle-ed8hca6b/"
source_id: "ed8hca6b"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/ed8hca6b/"
source_revision: 2
---
<iframe class="code-demo" src="{{ '/content/media/2015/2015-08-26-jsfiddle-ed8hca6b-demo.html' | relative_url }}" title="collapse table col" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;table</span> <span class="na">id=</span><span class="s">"tableone"</span> <span class="na">border=</span><span class="s">"1"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;thead&gt;</span>
        <span class="nt">&lt;tr&gt;</span>
            <span class="nt">&lt;th&gt;</span>0<span class="nt">&lt;/th&gt;</span>
            <span class="nt">&lt;th&gt;</span>1<span class="nt">&lt;/th&gt;</span>
            <span class="nt">&lt;th&gt;</span>2<span class="nt">&lt;/th&gt;</span>
        <span class="nt">&lt;/tr&gt;</span>
    <span class="nt">&lt;/thead&gt;</span>
    <span class="nt">&lt;tody&gt;</span>
    <span class="nt">&lt;tr</span> <span class="na">class=</span><span class="s">"del"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;td&gt;</span>Row 0 Column 0<span class="nt">&lt;/td&gt;</span>
        <span class="nt">&lt;td</span> <span class="nt">&gt;</span>Row 0 Column 1<span class="nt">&lt;/td&gt;</span>
        <span class="nt">&lt;td</span> <span class="nt">&gt;</span>Row 0 Column 2<span class="nt">&lt;/td&gt;</span>
    <span class="nt">&lt;/tr&gt;</span>
    <span class="nt">&lt;tr</span> <span class="na">class=</span><span class="s">"del"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;td&gt;</span>Row 1 Column 0<span class="nt">&lt;/td&gt;</span>
        <span class="nt">&lt;td&gt;</span>Row 1 Column 1<span class="nt">&lt;/td&gt;</span>
        <span class="nt">&lt;td&gt;</span>Row 1 Column 2<span class="nt">&lt;/td&gt;</span>
    <span class="nt">&lt;/tr&gt;</span>
    <span class="nt">&lt;tr</span> <span class="na">class=</span><span class="s">"del"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;td&gt;</span>Row 2 Column 0<span class="nt">&lt;/td&gt;</span>
        <span class="nt">&lt;td&gt;</span>Row 2 Column 1<span class="nt">&lt;/td&gt;</span>
        <span class="nt">&lt;td&gt;</span>Row 2 Column 2<span class="nt">&lt;/td&gt;</span>
    <span class="nt">&lt;/tr&gt;</span>
    <span class="nt">&lt;tr</span> <span class="na">class=</span><span class="s">"del"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;td&gt;</span>Row 3 Column 0<span class="nt">&lt;/td&gt;</span>
        <span class="nt">&lt;td&gt;</span>Row 3 Column 1<span class="nt">&lt;/td&gt;</span>
        <span class="nt">&lt;td&gt;</span>Row 3 Column 2<span class="nt">&lt;/td&gt;</span>
    <span class="nt">&lt;/tr&gt;</span>
     <span class="nt">&lt;tr</span> <span class="na">class=</span><span class="s">"del"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;td&gt;</span>Row 4 Column 0<span class="nt">&lt;/td&gt;</span>
        <span class="nt">&lt;td&gt;</span>Row 4 Column 1<span class="nt">&lt;/td&gt;</span>
        <span class="nt">&lt;td&gt;</span>Row 4 Column 2<span class="nt">&lt;/td&gt;</span>
    <span class="nt">&lt;/tr&gt;</span>
     <span class="nt">&lt;tr</span> <span class="na">class=</span><span class="s">"del"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;td&gt;</span>Row 5 Column 0<span class="nt">&lt;/td&gt;</span>
        <span class="nt">&lt;td&gt;</span>Row 5 Column 1<span class="nt">&lt;/td&gt;</span>
        <span class="nt">&lt;td&gt;</span>Row 5 Column 2<span class="nt">&lt;/td&gt;</span>
    <span class="nt">&lt;/tr&gt;</span>
    <span class="nt">&lt;/tbody&gt;</span>
    
<span class="nt">&lt;/table&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">id=</span><span class="s">"btnHide"</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">value=</span><span class="s">"Hide Column 2"</span><span class="nt">/&gt;</span>


<span class="nt">&lt;/html&gt;</span>

 </code></pre><p data-import-note="">html snippet could not be formatted; original code is shown</p>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="nf">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nf">ready</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">thead tr th</span><span class="dl">"</span><span class="p">).</span><span class="nf">click</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">index</span> <span class="o">=</span> <span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nf">index</span><span class="p">()</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span>
    <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">td:nth-child(</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">index</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">)</span><span class="dl">"</span><span class="p">).</span><span class="nf">toggle</span><span class="p">();</span>
    <span class="c1">//$('td:nth-child(2),th:nth-child(2)').hide();</span>
  <span class="p">&#125;);</span>
<span class="p">&#125;);</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/ed8hca6b/">original jsfiddle post</a></p>
