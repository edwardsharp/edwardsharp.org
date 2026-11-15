---
title: "checkerboard drag and drop"
description: "a javascript checkerboard experiment with alternating squares and draggable pieces."
date: "2017-04-12T13:31:40.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css","javascript","jquery"]
permalink: "/post/jsfiddle-5ph3j5ve/"
source_id: "5ph3j5ve"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/5ph3j5ve/5/"
source_revision: 5
---
<iframe class="code-demo" src="{{ '/content/media/2017/2017-04-12-jsfiddle-5ph3j5ve-demo.html' | relative_url }}" title="jsfiddle / 5ph3j5ve" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"board"</span><span class="nt">&gt;&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"info"</span><span class="nt">&gt;&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">square</span> <span class="p">&#123;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">25px</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">25px</span><span class="p">;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">inline-block</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nt">piece</span> <span class="p">&#123;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">inline-block</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">15px</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">15px</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">5px</span><span class="p">;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">999px</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nt">piece</span><span class="nd">:hover</span> <span class="p">&#123;</span>
  <span class="nl">cursor</span><span class="p">:</span> <span class="n">grab</span><span class="p">;</span>
  <span class="nl">cursor</span><span class="p">:</span> <span class="o">-</span><span class="n">moz-grab</span><span class="p">;</span>
  <span class="nl">cursor</span><span class="p">:</span> <span class="o">-</span><span class="n">webkit-grab</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nt">piece</span><span class="nc">.grabbing</span> <span class="p">&#123;</span>
  <span class="nl">cursor</span><span class="p">:</span> <span class="n">grabbing</span><span class="p">;</span>
  <span class="nl">cursor</span><span class="p">:</span> <span class="o">-</span><span class="n">moz-grabbing</span><span class="p">;</span>
  <span class="nl">cursor</span><span class="p">:</span> <span class="o">-</span><span class="n">webkit-grabbing</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.row</span> <span class="p">&#123;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">25px</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.red</span> <span class="p">&#123;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">red</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.black</span> <span class="p">&#123;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">black</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.white</span> <span class="p">&#123;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">white</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.highlight</span> <span class="p">&#123;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nf">rgba</span><span class="p">(</span><span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0.5</span><span class="p">);</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="c1">//utility each method.</span>
<span class="kd">var</span> <span class="nx">forEach</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">callback</span><span class="p">,</span> <span class="nx">scope</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">array</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">callback</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nx">scope</span><span class="p">,</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">array</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span>
  <span class="p">&#125;</span>
<span class="p">&#125;;</span>

<span class="kd">var</span> <span class="nx">checkerz</span> <span class="o">=</span> <span class="p">&#123;</span>
  <span class="cm">/*
   * board is an 2d array, so basically just a placeholder ([[]])
   * here until we use 2 loops to initialize it, we'll be able to reference
   * each square of the board with 2 integers (a column and a row)
   * for example: checkerz.board[0,0] would be the square in the top-left corner
   * and would have a color property like such: board[0,0].color == 'red'
   */</span>
  <span class="na">board</span><span class="p">:</span> <span class="p">[[]],</span>
  <span class="cm">/*
   * so i looked at another javascript checkerz script and found this neat trick:
   * if you add the column &amp; row, and if that can be evenly divided by 2, then it's red,
   * otherwise black.
   */</span>
  <span class="na">color</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">col</span><span class="p">,</span> <span class="nx">row</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">return </span><span class="p">(</span><span class="nx">col</span> <span class="o">+</span> <span class="nx">row</span><span class="p">)</span> <span class="o">%</span> <span class="mi">2</span> <span class="o">==</span> <span class="mi">0</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">red</span><span class="dl">"</span> <span class="p">:</span> <span class="dl">"</span><span class="s2">black</span><span class="dl">"</span><span class="p">;</span>
  <span class="p">&#125;,</span>
  <span class="na">setup</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">c</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">c</span> <span class="o">&lt;</span> <span class="mi">8</span><span class="p">;</span> <span class="nx">c</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">this</span><span class="p">.</span><span class="nx">board</span><span class="p">[</span><span class="nx">c</span><span class="p">]</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">Array</span><span class="p">(</span><span class="mi">8</span><span class="p">);</span>
      <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">r</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">r</span> <span class="o">&lt;</span> <span class="mi">8</span><span class="p">;</span> <span class="nx">r</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">this</span><span class="p">.</span><span class="nx">board</span><span class="p">[</span><span class="nx">c</span><span class="p">][</span><span class="nx">r</span><span class="p">]</span> <span class="o">=</span> <span class="p">&#123;</span> <span class="na">color</span><span class="p">:</span> <span class="k">this</span><span class="p">.</span><span class="nf">color</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="nx">r</span><span class="p">)</span> <span class="p">&#125;;</span>

        <span class="k">if </span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nf">color</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="nx">r</span><span class="p">)</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">black</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">c</span> <span class="o">&gt;=</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">c</span> <span class="o">&lt;</span> <span class="mi">3</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">board</span><span class="p">[</span><span class="nx">c</span><span class="p">][</span><span class="nx">r</span><span class="p">].</span><span class="nx">piece</span> <span class="o">=</span> <span class="p">&#123;</span> <span class="na">color</span><span class="p">:</span> <span class="dl">"</span><span class="s2">red</span><span class="dl">"</span><span class="p">,</span> <span class="na">king</span><span class="p">:</span> <span class="kc">false</span> <span class="p">&#125;;</span>
          <span class="p">&#125;</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">c</span> <span class="o">&gt;</span> <span class="mi">4</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">board</span><span class="p">[</span><span class="nx">c</span><span class="p">][</span><span class="nx">r</span><span class="p">].</span><span class="nx">piece</span> <span class="o">=</span> <span class="p">&#123;</span> <span class="na">color</span><span class="p">:</span> <span class="dl">"</span><span class="s2">white</span><span class="dl">"</span><span class="p">,</span> <span class="na">king</span><span class="p">:</span> <span class="kc">false</span> <span class="p">&#125;;</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;</span> <span class="c1">//end col for</span>
    <span class="c1">// console.log('setup board:',this.board);</span>
    <span class="k">this</span><span class="p">.</span><span class="nf">drawBoard</span><span class="p">();</span>

    <span class="c1">//note, mouseup getz lost if mouse moves away from the element that caused the mousedown event. so a catch all here:</span>
    <span class="c1">// #TODO: touch eventz.</span>
    <span class="nb">window</span><span class="p">.</span><span class="nf">addEventListener</span><span class="p">(</span><span class="dl">"</span><span class="s2">mouseup</span><span class="dl">"</span><span class="p">,</span> <span class="nx">checkerz</span><span class="p">.</span><span class="nx">pieceDown</span><span class="p">);</span>
  <span class="p">&#125;,</span>
  <span class="cm">/*
   * instead of using jQuery's $('board') we can use this.boardElement()
   */</span>
  <span class="na">boardElement</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="k">return</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">board</span><span class="dl">"</span><span class="p">);</span>
  <span class="p">&#125;,</span>
  <span class="na">infoElement</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="k">return</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">info</span><span class="dl">"</span><span class="p">);</span>
  <span class="p">&#125;,</span>
  <span class="cm">/*
   * click handler for when a &lt;piece&gt; is clicked. mousedown.
   * note: mousedown is desktop browsers only.
   */</span>
  <span class="na">pieceUp</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">piece</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">;</span>
    <span class="kd">var</span> <span class="nx">square</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">parentElement</span><span class="p">;</span>
    <span class="nx">checkerz</span><span class="p">.</span><span class="nf">infoElement</span><span class="p">().</span><span class="nx">innerHTML</span> <span class="o">=</span>
      <span class="nx">piece</span><span class="p">.</span><span class="nf">getAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">data-color</span><span class="dl">"</span><span class="p">)</span> <span class="o">+</span>
      <span class="dl">"</span><span class="s2"> [</span><span class="dl">"</span> <span class="o">+</span>
      <span class="nx">square</span><span class="p">.</span><span class="nf">getAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">data-col</span><span class="dl">"</span><span class="p">)</span> <span class="o">+</span>
      <span class="dl">"</span><span class="s2">, </span><span class="dl">"</span> <span class="o">+</span>
      <span class="nx">square</span><span class="p">.</span><span class="nf">getAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">data-row</span><span class="dl">"</span><span class="p">)</span> <span class="o">+</span>
      <span class="dl">"</span><span class="s2">]</span><span class="dl">"</span><span class="p">;</span>

    <span class="nx">piece</span><span class="p">.</span><span class="nx">classList</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span><span class="dl">"</span><span class="s2">grabbing</span><span class="dl">"</span><span class="p">);</span>
    <span class="nx">checkerz</span><span class="p">.</span><span class="nf">removeClass</span><span class="p">(</span><span class="dl">"</span><span class="s2">highlight</span><span class="dl">"</span><span class="p">);</span>
    <span class="nx">checkerz</span><span class="p">.</span><span class="nf">getAvailableMovez</span><span class="p">(&#123;</span>
      <span class="na">color</span><span class="p">:</span> <span class="nx">piece</span><span class="p">.</span><span class="nf">getAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">data-color</span><span class="dl">"</span><span class="p">),</span>
      <span class="na">col</span><span class="p">:</span> <span class="nx">square</span><span class="p">.</span><span class="nf">getAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">data-col</span><span class="dl">"</span><span class="p">),</span>
      <span class="na">row</span><span class="p">:</span> <span class="nx">square</span><span class="p">.</span><span class="nf">getAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">data-row</span><span class="dl">"</span><span class="p">),</span>
    <span class="p">&#125;);</span>
  <span class="p">&#125;,</span>
  <span class="cm">/*
   * event handler for when a piece has moved. mouseup.
   * #TODO: determine what square, if it's available,
   *   if there's any jumpz, &amp; then update the
   *   checkerz.board piecez and redraw.
   */</span>
  <span class="na">pieceDown</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">pieceDown e:</span><span class="dl">"</span><span class="p">,</span> <span class="nx">e</span><span class="p">);</span>
    <span class="nx">checkerz</span><span class="p">.</span><span class="nf">infoElement</span><span class="p">().</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="dl">""</span><span class="p">;</span>
    <span class="nx">checkerz</span><span class="p">.</span><span class="nf">removeClass</span><span class="p">(</span><span class="dl">"</span><span class="s2">grabbing</span><span class="dl">"</span><span class="p">);</span>
    <span class="nx">checkerz</span><span class="p">.</span><span class="nf">removeClass</span><span class="p">(</span><span class="dl">"</span><span class="s2">highlight</span><span class="dl">"</span><span class="p">);</span>
  <span class="p">&#125;,</span>
  <span class="cm">/*
   * draw the contents of the board data.
   * using non-traditional elements &lt;square&gt; and &lt;piece&gt; (could use span or div or whatever).
   * set the column &amp; row number for later use.
   */</span>
  <span class="na">drawBoard</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="k">this</span><span class="p">.</span><span class="nf">boardElement</span><span class="p">().</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="dl">""</span><span class="p">;</span>
    <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">c</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">c</span> <span class="o">&lt;</span> <span class="mi">8</span><span class="p">;</span> <span class="nx">c</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">row</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">div</span><span class="dl">"</span><span class="p">);</span>
      <span class="nx">row</span><span class="p">.</span><span class="nx">classList</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span><span class="dl">"</span><span class="s2">row</span><span class="dl">"</span><span class="p">);</span>
      <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">r</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">r</span> <span class="o">&lt;</span> <span class="mi">8</span><span class="p">;</span> <span class="nx">r</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="kd">var</span> <span class="nx">square</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">square</span><span class="dl">"</span><span class="p">);</span>
        <span class="nx">square</span><span class="p">.</span><span class="nf">setAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">data-col</span><span class="dl">"</span><span class="p">,</span> <span class="nx">c</span><span class="p">);</span>
        <span class="nx">square</span><span class="p">.</span><span class="nf">setAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">data-row</span><span class="dl">"</span><span class="p">,</span> <span class="nx">r</span><span class="p">);</span>
        <span class="nx">square</span><span class="p">.</span><span class="nx">classList</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">board</span><span class="p">[</span><span class="nx">c</span><span class="p">][</span><span class="nx">r</span><span class="p">].</span><span class="nx">color</span><span class="p">);</span>
        <span class="k">if </span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">board</span><span class="p">[</span><span class="nx">c</span><span class="p">][</span><span class="nx">r</span><span class="p">].</span><span class="nx">piece</span> <span class="o">!=</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="kd">var</span> <span class="nx">piece</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">piece</span><span class="dl">"</span><span class="p">);</span>
          <span class="nx">piece</span><span class="p">.</span><span class="nx">classList</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">board</span><span class="p">[</span><span class="nx">c</span><span class="p">][</span><span class="nx">r</span><span class="p">].</span><span class="nx">piece</span><span class="p">.</span><span class="nx">color</span><span class="p">);</span>
          <span class="nx">piece</span><span class="p">.</span><span class="nf">setAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">data-color</span><span class="dl">"</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">board</span><span class="p">[</span><span class="nx">c</span><span class="p">][</span><span class="nx">r</span><span class="p">].</span><span class="nx">piece</span><span class="p">.</span><span class="nx">color</span><span class="p">);</span>
          <span class="c1">// #TODO: touch eventz.</span>
          <span class="nx">piece</span><span class="p">.</span><span class="nf">addEventListener</span><span class="p">(</span><span class="dl">"</span><span class="s2">mousedown</span><span class="dl">"</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">pieceUp</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span>
          <span class="nx">square</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">piece</span><span class="p">);</span>
        <span class="p">&#125;</span>
        <span class="nx">row</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">square</span><span class="p">);</span>
      <span class="p">&#125;</span>
      <span class="k">this</span><span class="p">.</span><span class="nf">boardElement</span><span class="p">().</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">row</span><span class="p">);</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;,</span>
  <span class="cm">/* 
  notez for opening movez, assuming no kingz:
	[col,row] -&gt; [col,row], [col,row]
	red back row (pieces in the way)
	[0,1] -&gt; [1,0], [1,2]
	[0,3] -&gt; [1,2], [1,4]
	[0,5] -&gt; [1,4], [1,6]
	[0,7] -&gt; [1,6]

	red front row
	[2,1] -&gt; [3,0], [3,2]
	[2,3] -&gt; [3,2], [3,4]
	[2,5] -&gt; [3,4], [3,6]
	[2,7] -&gt; [3,6]

	white back row (pieces in the way)
	[7,0] -&gt; [6,1]
	[7,2] -&gt; [6,1], [6,3]
	[7,4] -&gt; [6,3], [6,5]
	[7,6] -&gt; [6,5], [6,7]

	white front row
	[5,0] -&gt; [4,1]
	[5,2] -&gt; [4,1], [4,3]
	[5,4] -&gt; [4,3], [4,5]
	[5,6] -&gt; [4,5], [4,7]
  
  so if a red piece at square [col,row] wantz to move, 
  the 2 possible squarez would be [col+1,row-1] and [col+1,row+1], 
  given these two squarez are both on the board and not currently occupied with a piece.
	*/</span>
  <span class="na">getAvailableMovez</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">getAvailableMovez options:</span><span class="dl">"</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span>
    <span class="nx">options</span><span class="p">.</span><span class="nx">col</span> <span class="o">=</span> <span class="nf">parseInt</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">col</span><span class="p">);</span>
    <span class="nx">options</span><span class="p">.</span><span class="nx">row</span> <span class="o">=</span> <span class="nf">parseInt</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">row</span><span class="p">);</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">color</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">red</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">this</span><span class="p">.</span><span class="nf">highlightSquare</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">col</span> <span class="o">+</span> <span class="mi">1</span><span class="p">,</span> <span class="nx">options</span><span class="p">.</span><span class="nx">row</span> <span class="o">-</span> <span class="mi">1</span><span class="p">);</span>
      <span class="k">this</span><span class="p">.</span><span class="nf">highlightSquare</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">col</span> <span class="o">+</span> <span class="mi">1</span><span class="p">,</span> <span class="nx">options</span><span class="p">.</span><span class="nx">row</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
      <span class="k">this</span><span class="p">.</span><span class="nf">highlightSquare</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">col</span> <span class="o">-</span> <span class="mi">1</span><span class="p">,</span> <span class="nx">options</span><span class="p">.</span><span class="nx">row</span> <span class="o">-</span> <span class="mi">1</span><span class="p">);</span>
      <span class="k">this</span><span class="p">.</span><span class="nf">highlightSquare</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">col</span> <span class="o">-</span> <span class="mi">1</span><span class="p">,</span> <span class="nx">options</span><span class="p">.</span><span class="nx">row</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;,</span>
  <span class="na">highlightSquare</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">col</span><span class="p">,</span> <span class="nx">row</span><span class="p">,</span> <span class="nx">isKing</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="c1">//console.log('highlightSquare!');</span>
    <span class="c1">//check if col &amp; row exist on the board and if there's currently a piece in the square</span>
    <span class="k">if </span><span class="p">(</span>
      <span class="nx">checkerz</span><span class="p">.</span><span class="nx">board</span><span class="p">[</span><span class="nx">col</span><span class="p">]</span> <span class="o">&amp;&amp;</span>
      <span class="nx">checkerz</span><span class="p">.</span><span class="nx">board</span><span class="p">[</span><span class="nx">col</span><span class="p">][</span><span class="nx">row</span><span class="p">]</span> <span class="o">&amp;&amp;</span>
      <span class="nx">checkerz</span><span class="p">.</span><span class="nx">board</span><span class="p">[</span><span class="nx">col</span><span class="p">][</span><span class="nx">row</span><span class="p">].</span><span class="nx">piece</span> <span class="o">==</span> <span class="kc">undefined</span>
    <span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">_square</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">querySelector</span><span class="p">(</span>
        <span class="dl">'</span><span class="s1">[data-col="</span><span class="dl">'</span> <span class="o">+</span> <span class="nx">col</span> <span class="o">+</span> <span class="dl">'</span><span class="s1">"][data-row="</span><span class="dl">'</span> <span class="o">+</span> <span class="nx">row</span> <span class="o">+</span> <span class="dl">'</span><span class="s1">"]</span><span class="dl">'</span><span class="p">,</span>
      <span class="p">);</span>
      <span class="c1">//console.log('_square? ',_square);</span>
      <span class="nx">_square</span><span class="p">.</span><span class="nx">classList</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span><span class="dl">"</span><span class="s2">highlight</span><span class="dl">"</span><span class="p">);</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;,</span>
  <span class="cm">/*
   * handy utility for removing classes from any element that currently has that class.
   */</span>
  <span class="na">removeClass</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">className</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nf">forEach</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nf">querySelectorAll</span><span class="p">(</span><span class="dl">"</span><span class="s2">.</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">className</span><span class="p">),</span> <span class="nf">function </span><span class="p">(</span><span class="nx">idx</span><span class="p">,</span> <span class="nx">elem</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">elem</span><span class="p">.</span><span class="nx">classList</span><span class="p">.</span><span class="nf">remove</span><span class="p">(</span><span class="nx">className</span><span class="p">);</span>
    <span class="p">&#125;);</span>
  <span class="p">&#125;,</span>
<span class="p">&#125;;</span>

<span class="nx">checkerz</span><span class="p">.</span><span class="nf">setup</span><span class="p">();</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/5ph3j5ve/5/">original jsfiddle post</a></p>
