---
title: "canvas stuff"
date: "2017-04-18T14:14:30.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css","javascript","canvas"]
permalink: "/post/jsfiddle-e4dxrug2/"
source_id: "e4dxrug2"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/e4dxrug2/"
source_revision: 2
---
<iframe class="code-demo" src="{{ '/content/media/2017/2017-04-18-jsfiddle-e4dxrug2-demo.html' | relative_url }}" title="canvas stuff" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>hmm</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://rawgithub.com/kangax/fabric.js/master/dist/fabric.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;canvas</span> <span class="na">id=</span><span class="s">"c"</span> <span class="na">width=</span><span class="s">"600"</span> <span class="na">height=</span><span class="s">"600"</span><span class="nt">&gt;&lt;/canvas&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">html</span><span class="o">,</span>
<span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nt">canvas</span> <span class="p">&#123;</span>
  <span class="nl">border</span><span class="p">:</span> <span class="m">1px</span> <span class="nb">solid</span> <span class="nx">#ccc</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="kd">var</span> <span class="nx">canvas</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">fabric</span><span class="p">.</span><span class="nc">Canvas</span><span class="p">(</span><span class="dl">"</span><span class="s2">c</span><span class="dl">"</span><span class="p">,</span> <span class="p">&#123;</span>
  <span class="na">selection</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
<span class="p">&#125;);</span>

<span class="kd">var</span> <span class="nx">boardSize</span> <span class="o">=</span> <span class="mi">600</span><span class="p">;</span>
<span class="k">if </span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">innerWidth</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nb">window</span><span class="p">.</span><span class="nx">innerWidth</span> <span class="o">&lt;</span> <span class="nb">window</span><span class="p">.</span><span class="nx">innerHeight</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">boardSize</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">innerWidth</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="kd">var</span> <span class="nx">grid</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">floor</span><span class="p">(</span><span class="nx">boardSize</span> <span class="o">/</span> <span class="mi">8</span><span class="p">);</span>

<span class="c1">// create board grid linez</span>
<span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="mi">8</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">canvas</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span>
    <span class="k">new</span> <span class="nx">fabric</span><span class="p">.</span><span class="nc">Line</span><span class="p">([</span><span class="nx">i</span> <span class="o">*</span> <span class="nx">grid</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">i</span> <span class="o">*</span> <span class="nx">grid</span><span class="p">,</span> <span class="nx">boardSize</span><span class="p">],</span> <span class="p">&#123;</span>
      <span class="na">stroke</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#ccc</span><span class="dl">"</span><span class="p">,</span>
      <span class="na">selectable</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
    <span class="p">&#125;),</span>
  <span class="p">);</span>
  <span class="nx">canvas</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span>
    <span class="k">new</span> <span class="nx">fabric</span><span class="p">.</span><span class="nc">Line</span><span class="p">([</span><span class="mi">0</span><span class="p">,</span> <span class="nx">i</span> <span class="o">*</span> <span class="nx">grid</span><span class="p">,</span> <span class="nx">boardSize</span><span class="p">,</span> <span class="nx">i</span> <span class="o">*</span> <span class="nx">grid</span><span class="p">],</span> <span class="p">&#123;</span>
      <span class="na">stroke</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#ccc</span><span class="dl">"</span><span class="p">,</span>
      <span class="na">selectable</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
    <span class="p">&#125;),</span>
  <span class="p">);</span>
<span class="p">&#125;</span>

<span class="kd">var</span> <span class="nx">createPiece</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">col</span><span class="p">,</span> <span class="nx">row</span><span class="p">,</span> <span class="nx">color</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="kd">var</span> <span class="nx">circle</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">fabric</span><span class="p">.</span><span class="nc">Circle</span><span class="p">(&#123;</span>
    <span class="na">left</span><span class="p">:</span> <span class="nx">row</span> <span class="o">*</span> <span class="nx">grid</span><span class="p">,</span>
    <span class="na">top</span><span class="p">:</span> <span class="nx">col</span> <span class="o">*</span> <span class="nx">grid</span><span class="p">,</span>
    <span class="na">radius</span><span class="p">:</span> <span class="nx">grid</span> <span class="o">/</span> <span class="mi">2</span><span class="p">,</span>
    <span class="na">fill</span><span class="p">:</span> <span class="nx">color</span><span class="p">,</span> <span class="c1">//'#faa'</span>
    <span class="na">originX</span><span class="p">:</span> <span class="dl">"</span><span class="s2">left</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">originY</span><span class="p">:</span> <span class="dl">"</span><span class="s2">top</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">centeredRotation</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
  <span class="p">&#125;);</span>
  <span class="c1">// disable resize/rotate controls</span>
  <span class="nx">circle</span><span class="p">.</span><span class="nf">setControlsVisibility</span><span class="p">(&#123;</span>
    <span class="na">mt</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
    <span class="na">mb</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
    <span class="na">ml</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
    <span class="na">mr</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
    <span class="na">bl</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
    <span class="na">br</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
    <span class="na">tl</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
    <span class="na">tr</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
    <span class="na">mtr</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
  <span class="p">&#125;);</span>
  <span class="nx">canvas</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span><span class="nx">circle</span><span class="p">);</span>
<span class="p">&#125;;</span>

<span class="kd">var</span> <span class="nx">squareColor</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">col</span><span class="p">,</span> <span class="nx">row</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="k">return </span><span class="p">(</span><span class="nx">col</span> <span class="o">+</span> <span class="nx">row</span><span class="p">)</span> <span class="o">%</span> <span class="mi">2</span> <span class="o">==</span> <span class="mi">0</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">red</span><span class="dl">"</span> <span class="p">:</span> <span class="dl">"</span><span class="s2">black</span><span class="dl">"</span><span class="p">;</span>
<span class="p">&#125;;</span>

<span class="c1">// add objectz</span>
<span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">c</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">c</span> <span class="o">&lt;</span> <span class="mi">8</span><span class="p">;</span> <span class="nx">c</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">r</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">r</span> <span class="o">&lt;</span> <span class="mi">8</span><span class="p">;</span> <span class="nx">r</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="c1">//this.board[c][r] = &#123; color: squareColor(c,r) &#125;;</span>
    <span class="k">if </span><span class="p">(</span><span class="nf">squareColor</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="nx">r</span><span class="p">)</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">black</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">c</span> <span class="o">&gt;=</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">c</span> <span class="o">&lt;</span> <span class="mi">3</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="c1">//this.board[c][r].piece = &#123;color: 'red', king: false&#125;;</span>
        <span class="nf">createPiece</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="nx">r</span><span class="p">,</span> <span class="dl">"</span><span class="s2">red</span><span class="dl">"</span><span class="p">);</span>
      <span class="p">&#125;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">c</span> <span class="o">&gt;</span> <span class="mi">4</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="c1">//this.board[c][r].piece = &#123;color: 'white', king: false&#125;;</span>
        <span class="nf">createPiece</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="nx">r</span><span class="p">,</span> <span class="dl">"</span><span class="s2">black</span><span class="dl">"</span><span class="p">);</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>
<span class="p">&#125;</span> <span class="c1">//end col for</span>

<span class="c1">// snap to grid</span>
<span class="nx">canvas</span><span class="p">.</span><span class="nf">on</span><span class="p">(</span><span class="dl">"</span><span class="s2">object:moving</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="kd">var</span> <span class="nx">_left</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">round</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">left</span> <span class="o">/</span> <span class="nx">grid</span><span class="p">)</span> <span class="o">*</span> <span class="nx">grid</span><span class="p">;</span>
  <span class="kd">var</span> <span class="nx">_top</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">round</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">top</span> <span class="o">/</span> <span class="nx">grid</span><span class="p">)</span> <span class="o">*</span> <span class="nx">grid</span><span class="p">;</span>
  <span class="c1">//try to keep shit from falling off the canvas/board.</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">_left</span> <span class="o">&gt;=</span> <span class="nx">boardSize</span> <span class="o">-</span> <span class="nx">grid</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">_left</span> <span class="o">=</span> <span class="nx">boardSize</span> <span class="o">-</span> <span class="nx">grid</span><span class="p">;</span>
  <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">_left</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">_left</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
  <span class="p">&#125;</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">_top</span> <span class="o">&gt;</span> <span class="nx">boardSize</span> <span class="o">-</span> <span class="nx">grid</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">_top</span> <span class="o">=</span> <span class="nx">boardSize</span> <span class="o">-</span> <span class="nx">grid</span><span class="p">;</span>
  <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">_top</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">_top</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
  <span class="p">&#125;</span>
  <span class="nx">options</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nf">set</span><span class="p">(&#123;</span>
    <span class="na">left</span><span class="p">:</span> <span class="nx">_left</span><span class="p">,</span>
    <span class="na">top</span><span class="p">:</span> <span class="nx">_top</span><span class="p">,</span>
  <span class="p">&#125;);</span>
<span class="p">&#125;);</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/e4dxrug2/">original jsfiddle post</a></p>
