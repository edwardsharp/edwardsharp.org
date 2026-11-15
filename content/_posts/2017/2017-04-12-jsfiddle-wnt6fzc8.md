---
title: "drag & drop"
date: "2017-04-12T01:34:20.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css","javascript"]
permalink: "/post/jsfiddle-wnt6fzc8/"
source_id: "wnt6fzc8"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/wnt6fzc8/"
source_revision: 0
---
<iframe class="code-demo" src="{{ '/content/media/2017/2017-04-12-jsfiddle-wnt6fzc8-demo.html' | relative_url }}" title="drag &amp; drop" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>using DataTransfer example from mdn</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;h1&gt;</span>Drag and Drop: Copy and Move elements with <span class="nt">&lt;code&gt;</span>DataTransfer<span class="nt">&lt;/code&gt;&lt;/h1&gt;</span>
<span class="nt">&lt;div</span>
  <span class="na">draggable=</span><span class="s">"true"</span>
  <span class="na">id=</span><span class="s">"src_copy"</span>
  <span class="na">ondragstart=</span><span class="s">"dragstart_handler(event)"</span>
  <span class="na">ondragend=</span><span class="s">"dragend_handler(event)"</span>
<span class="nt">&gt;</span>
  Select this element and drag to the <span class="nt">&lt;strong&gt;</span>Copy Drop Zone<span class="nt">&lt;/strong&gt;</span>.
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span>
  <span class="na">id=</span><span class="s">"dest_copy"</span>
  <span class="na">ondrop=</span><span class="s">"drop_handler(event)"</span>
  <span class="na">ondragover=</span><span class="s">"dragover_handler(event)"</span>
<span class="nt">&gt;</span>
  <span class="nt">&lt;strong&gt;</span>Copy Drop Zone<span class="nt">&lt;/strong&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span>
  <span class="na">draggable=</span><span class="s">"true"</span>
  <span class="na">id=</span><span class="s">"src_move"</span>
  <span class="na">ondragstart=</span><span class="s">"dragstart_handler(event)"</span>
  <span class="na">ondragend=</span><span class="s">"dragend_handler(event)"</span>
<span class="nt">&gt;</span>
  Select this element and drag to the <span class="nt">&lt;strong&gt;</span>Move Drop Zone<span class="nt">&lt;/strong&gt;</span>.
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span>
  <span class="na">id=</span><span class="s">"dest_move"</span>
  <span class="na">ondrop=</span><span class="s">"drop_handler(event)"</span>
  <span class="na">ondragover=</span><span class="s">"dragover_handler(event)"</span>
<span class="nt">&gt;</span>
  <span class="nt">&lt;strong&gt;</span>Move Drop Zone<span class="nt">&lt;/strong&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">div</span> <span class="p">&#123;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0em</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">2em</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nf">#src_copy</span><span class="o">,</span>
<span class="nf">#src_move</span> <span class="p">&#123;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">blue</span><span class="p">;</span>
  <span class="nl">border</span><span class="p">:</span> <span class="m">5px</span> <span class="nb">solid</span> <span class="nx">black</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">300px</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">50</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nf">#dest_copy</span><span class="o">,</span>
<span class="nf">#dest_move</span> <span class="p">&#123;</span>
  <span class="nl">border</span><span class="p">:</span> <span class="m">5px</span> <span class="nb">solid</span> <span class="nx">blue</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">300px</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">50</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="c1">//source: view-source:https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransfer.html</span>
<span class="kd">function</span> <span class="nf">dragstart_handler</span><span class="p">(</span><span class="nx">ev</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">dragStart</span><span class="dl">"</span><span class="p">);</span>
  <span class="c1">// Change the source element's background color to signify drag has started</span>
  <span class="nx">ev</span><span class="p">.</span><span class="nx">currentTarget</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">border</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">dashed</span><span class="dl">"</span><span class="p">;</span>
  <span class="c1">// Add the id of the drag source element to the drag data payload so</span>
  <span class="c1">// it is available when the drop event is fired</span>
  <span class="nx">ev</span><span class="p">.</span><span class="nx">dataTransfer</span><span class="p">.</span><span class="nf">setData</span><span class="p">(</span><span class="dl">"</span><span class="s2">text</span><span class="dl">"</span><span class="p">,</span> <span class="nx">ev</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">id</span><span class="p">);</span>
  <span class="c1">// Tell the browser both copy and move are possible</span>
  <span class="nx">ev</span><span class="p">.</span><span class="nx">effectAllowed</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">copyMove</span><span class="dl">"</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="kd">function</span> <span class="nf">dragover_handler</span><span class="p">(</span><span class="nx">ev</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">dragOver</span><span class="dl">"</span><span class="p">);</span>
  <span class="c1">// Change the target element's border to signify a drag over event</span>
  <span class="c1">// has occurred</span>
  <span class="nx">ev</span><span class="p">.</span><span class="nx">currentTarget</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">background</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">lightblue</span><span class="dl">"</span><span class="p">;</span>
  <span class="nx">ev</span><span class="p">.</span><span class="nf">preventDefault</span><span class="p">();</span>
<span class="p">&#125;</span>
<span class="kd">function</span> <span class="nf">drop_handler</span><span class="p">(</span><span class="nx">ev</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">Drop</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">ev</span><span class="p">.</span><span class="nf">preventDefault</span><span class="p">();</span>
  <span class="c1">// Get the id of drag source element (that was added to the drag data</span>
  <span class="c1">// payload by the dragstart event handler)</span>
  <span class="kd">var</span> <span class="nx">id</span> <span class="o">=</span> <span class="nx">ev</span><span class="p">.</span><span class="nx">dataTransfer</span><span class="p">.</span><span class="nf">getData</span><span class="p">(</span><span class="dl">"</span><span class="s2">text</span><span class="dl">"</span><span class="p">);</span>
  <span class="c1">// Only Move the element if the source and destination ids are both "move"</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">id</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">src_move</span><span class="dl">"</span> <span class="o">&amp;&amp;</span> <span class="nx">ev</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">id</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">dest_move</span><span class="dl">"</span><span class="p">)</span>
    <span class="nx">ev</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="nx">id</span><span class="p">));</span>
  <span class="c1">// Copy the element if the source and destination ids are both "copy"</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">id</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">src_copy</span><span class="dl">"</span> <span class="o">&amp;&amp;</span> <span class="nx">ev</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">id</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">dest_copy</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">nodeCopy</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="nx">id</span><span class="p">).</span><span class="nf">cloneNode</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span>
    <span class="nx">nodeCopy</span><span class="p">.</span><span class="nx">id</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">newId</span><span class="dl">"</span><span class="p">;</span>
    <span class="nx">ev</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">nodeCopy</span><span class="p">);</span>
  <span class="p">&#125;</span>
<span class="p">&#125;</span>
<span class="kd">function</span> <span class="nf">dragend_handler</span><span class="p">(</span><span class="nx">ev</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">dragEnd</span><span class="dl">"</span><span class="p">);</span>
  <span class="c1">// Restore source's border</span>
  <span class="nx">ev</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">border</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">solid black</span><span class="dl">"</span><span class="p">;</span>
  <span class="c1">// Remove all of the drag data</span>
  <span class="nx">ev</span><span class="p">.</span><span class="nx">dataTransfer</span><span class="p">.</span><span class="nf">clearData</span><span class="p">();</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/wnt6fzc8/">original jsfiddle post</a></p>
