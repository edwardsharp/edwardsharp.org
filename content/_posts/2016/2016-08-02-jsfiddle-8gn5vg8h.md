---
title: "jsfiddle / 8gn5vg8h"
date: "2016-08-02T07:40:13.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","javascript"]
permalink: "/post/jsfiddle-8gn5vg8h/"
source_id: "8gn5vg8h"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/8gn5vg8h/"
source_revision: 0
---
<iframe class="code-demo" src="{{ '/content/media/2016/2016-08-02-jsfiddle-8gn5vg8h-demo.html' | relative_url }}" title="jsfiddle / 8gn5vg8h" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">id=</span><span class="s">"surroundButton"</span> <span class="na">value=</span><span class="s">"Surround"</span> <span class="na">unselectable=</span><span class="s">"on"</span> <span class="nt">/&gt;</span>
<span class="nt">&lt;div</span> <span class="na">contenteditable=</span><span class="s">"true"</span> <span class="na">id=</span><span class="s">"editor"</span><span class="nt">&gt;</span>
  Select some text in here and press the button to surround it in BBCode
<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="kd">function</span> <span class="nf">surroundSelection</span><span class="p">(</span><span class="nx">textBefore</span><span class="p">,</span> <span class="nx">textAfter</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="k">if </span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">getSelection</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">sel</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nf">getSelection</span><span class="p">();</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">sel</span><span class="p">.</span><span class="nx">rangeCount</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">range</span> <span class="o">=</span> <span class="nx">sel</span><span class="p">.</span><span class="nf">getRangeAt</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span>
      <span class="kd">var</span> <span class="nx">startNode</span> <span class="o">=</span> <span class="nx">range</span><span class="p">.</span><span class="nx">startContainer</span><span class="p">,</span>
        <span class="nx">startOffset</span> <span class="o">=</span> <span class="nx">range</span><span class="p">.</span><span class="nx">startOffset</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">boundaryRange</span> <span class="o">=</span> <span class="nx">range</span><span class="p">.</span><span class="nf">cloneRange</span><span class="p">();</span>
      <span class="kd">var</span> <span class="nx">startTextNode</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createTextNode</span><span class="p">(</span><span class="nx">textBefore</span><span class="p">);</span>
      <span class="kd">var</span> <span class="nx">endTextNode</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createTextNode</span><span class="p">(</span><span class="nx">textAfter</span><span class="p">);</span>
      <span class="nx">boundaryRange</span><span class="p">.</span><span class="nf">collapse</span><span class="p">(</span><span class="kc">false</span><span class="p">);</span>
      <span class="nx">boundaryRange</span><span class="p">.</span><span class="nf">insertNode</span><span class="p">(</span><span class="nx">endTextNode</span><span class="p">);</span>
      <span class="nx">boundaryRange</span><span class="p">.</span><span class="nf">setStart</span><span class="p">(</span><span class="nx">startNode</span><span class="p">,</span> <span class="nx">startOffset</span><span class="p">);</span>
      <span class="nx">boundaryRange</span><span class="p">.</span><span class="nf">collapse</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span>
      <span class="nx">boundaryRange</span><span class="p">.</span><span class="nf">insertNode</span><span class="p">(</span><span class="nx">startTextNode</span><span class="p">);</span>

      <span class="c1">// Reselect the original text</span>
      <span class="nx">range</span><span class="p">.</span><span class="nf">setStartAfter</span><span class="p">(</span><span class="nx">startTextNode</span><span class="p">);</span>
      <span class="nx">range</span><span class="p">.</span><span class="nf">setEndBefore</span><span class="p">(</span><span class="nx">endTextNode</span><span class="p">);</span>
      <span class="nx">sel</span><span class="p">.</span><span class="nf">removeAllRanges</span><span class="p">();</span>
      <span class="nx">sel</span><span class="p">.</span><span class="nf">addRange</span><span class="p">(</span><span class="nx">range</span><span class="p">);</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">surroundSelectionInBbcode</span><span class="p">(</span><span class="nx">tagName</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nf">surroundSelection</span><span class="p">(</span><span class="dl">"</span><span class="s2">[</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">tagName</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">]</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">[/</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">tagName</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">]</span><span class="dl">"</span><span class="p">);</span>
<span class="p">&#125;</span>

<span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">surroundButton</span><span class="dl">"</span><span class="p">).</span><span class="nx">onclick</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">editor</span><span class="dl">"</span><span class="p">).</span><span class="nf">focus</span><span class="p">();</span>
  <span class="nf">surroundSelectionInBbcode</span><span class="p">(</span><span class="dl">"</span><span class="s2">b</span><span class="dl">"</span><span class="p">);</span>
  <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
<span class="p">&#125;;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/8gn5vg8h/">original jsfiddle post</a></p>
