---
title: "get selected input text"
description: "a button reports the selected part of a text area, or lets you know when nothing is selected."
date: "2015-12-31T08:58:47.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","javascript"]
permalink: "/post/jsfiddle-2qhz43eo/"
source_id: "2qhz43eo"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/2qhz43eo/"
source_revision: 4
---
<iframe class="code-demo" src="{{ '/content/media/2015/2015-12-31-jsfiddle-2qhz43eo-demo.html' | relative_url }}" title="get selected input text" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;textarea</span> <span class="na">id=</span><span class="s">"test"</span> <span class="na">rows=</span><span class="s">"10"</span> <span class="na">cols=</span><span class="s">"50"</span><span class="nt">&gt;</span>Some text, yo!<span class="nt">&lt;/textarea&gt;</span>
<span class="nt">&lt;br</span> <span class="nt">/&gt;</span>
<span class="nt">&lt;input</span>
  <span class="na">type=</span><span class="s">"button"</span>
  <span class="na">onmousedown=</span><span class="s">"alert(isTextSelected(document.getElementById('test')))"</span>
  <span class="na">value=</span><span class="s">"What's Selected?"</span>
<span class="nt">/&gt;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="kd">function</span> <span class="nf">isTextSelected</span><span class="p">(</span><span class="nx">input</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">input</span><span class="p">.</span><span class="nx">selectionStart</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">number</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">input</span><span class="p">.</span><span class="nx">selectionEnd</span> <span class="o">-</span> <span class="nx">input</span><span class="p">.</span><span class="nx">selectionStart</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">text</span> <span class="o">=</span> <span class="nx">input</span><span class="p">.</span><span class="nx">value</span><span class="p">;</span>
      <span class="k">return</span> <span class="nx">text</span><span class="p">.</span><span class="nf">substring</span><span class="p">(</span><span class="nx">input</span><span class="p">.</span><span class="nx">selectionStart</span><span class="p">,</span> <span class="nx">input</span><span class="p">.</span><span class="nx">selectionEnd</span><span class="p">);</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="dl">"</span><span class="s2">N0THING!</span><span class="dl">"</span><span class="p">;</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>
  <span class="c1">//else if (typeof document.selection != "undefined") &#123;</span>
  <span class="c1">//    input.focus();</span>
  <span class="c1">//    return document.selection.createRange().text == input.value;</span>
  <span class="c1">//&#125;</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/2qhz43eo/">original jsfiddle post</a></p>
