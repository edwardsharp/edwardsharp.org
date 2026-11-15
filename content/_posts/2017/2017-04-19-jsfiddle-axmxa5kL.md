---
title: "JS: canvas Drag 'n Drop"
date: "2017-04-19T00:02:00.000Z"
date_precision: "second"
tags: ["jsfiddle","code","css","javascript","canvas"]
permalink: "/post/jsfiddle-axmxa5kL/"
source_id: "axmxa5kL"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/axmxa5kL/"
source_revision: 0
---
<iframe class="code-demo" src="{{ '/content/media/2017/2017-04-19-jsfiddle-axmxa5kL-demo.html' | relative_url }}" title="JS: canvas Drag 'n Drop" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>more at:
http://codepen.io/jackrugile/pen/yfJBK</p>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">html</span><span class="o">,</span>
<span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nt">canvas</span> <span class="p">&#123;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">block</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="nb">Number</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">clamp</span> <span class="o">=</span>
  <span class="nb">Number</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">clamp</span> <span class="o">||</span>
  <span class="nf">function </span><span class="p">(</span><span class="nx">min</span><span class="p">,</span> <span class="nx">max</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">return</span> <span class="k">this</span> <span class="o">&lt;</span> <span class="nx">min</span> <span class="p">?</span> <span class="nx">min</span> <span class="p">:</span> <span class="k">this</span> <span class="o">&gt;</span> <span class="nx">max</span> <span class="p">?</span> <span class="nx">max</span> <span class="p">:</span> <span class="k">this</span><span class="p">;</span>
  <span class="p">&#125;;</span>

<span class="kd">var</span> <span class="nx">canvas</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">canvas</span><span class="dl">"</span><span class="p">),</span>
  <span class="nx">ctx</span> <span class="o">=</span> <span class="nx">canvas</span><span class="p">.</span><span class="nf">getContext</span><span class="p">(</span><span class="dl">"</span><span class="s2">2d</span><span class="dl">"</span><span class="p">),</span>
  <span class="nx">width</span> <span class="o">=</span> <span class="p">(</span><span class="nx">canvas</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">innerWidth</span><span class="p">),</span>
  <span class="nx">height</span> <span class="o">=</span> <span class="p">(</span><span class="nx">canvas</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">innerHeight</span><span class="p">);</span>

<span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">canvas</span><span class="p">);</span>

<span class="kd">var</span> <span class="nx">mouse</span> <span class="o">=</span> <span class="p">&#123;</span>
  <span class="na">x</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
  <span class="na">y</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
  <span class="na">down</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
  <span class="na">hover</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">rect</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">return </span><span class="p">(</span>
      <span class="k">this</span><span class="p">.</span><span class="nx">x</span> <span class="o">&gt;</span> <span class="nx">rect</span><span class="p">.</span><span class="nx">x</span> <span class="o">&amp;&amp;</span>
      <span class="k">this</span><span class="p">.</span><span class="nx">x</span> <span class="o">&lt;</span> <span class="nx">rect</span><span class="p">.</span><span class="nx">x</span> <span class="o">+</span> <span class="nx">rect</span><span class="p">.</span><span class="nx">w</span> <span class="o">&amp;&amp;</span>
      <span class="k">this</span><span class="p">.</span><span class="nx">y</span> <span class="o">&gt;</span> <span class="nx">rect</span><span class="p">.</span><span class="nx">y</span> <span class="o">&amp;&amp;</span>
      <span class="k">this</span><span class="p">.</span><span class="nx">y</span> <span class="o">&lt;</span> <span class="nx">rect</span><span class="p">.</span><span class="nx">y</span> <span class="o">+</span> <span class="nx">rect</span><span class="p">.</span><span class="nx">h</span>
    <span class="p">);</span>
  <span class="p">&#125;,</span>
<span class="p">&#125;;</span>

<span class="kd">var</span> <span class="nx">shape</span> <span class="o">=</span> <span class="p">&#123;</span>
  <span class="na">w</span><span class="p">:</span> <span class="mi">100</span><span class="p">,</span>
  <span class="na">h</span><span class="p">:</span> <span class="mi">100</span><span class="p">,</span>
  <span class="na">x</span><span class="p">:</span> <span class="nx">width</span> <span class="o">/</span> <span class="mi">2</span> <span class="o">-</span> <span class="mi">50</span><span class="p">,</span>
  <span class="na">y</span><span class="p">:</span> <span class="nx">height</span> <span class="o">/</span> <span class="mi">2</span> <span class="o">-</span> <span class="mi">50</span><span class="p">,</span>
  <span class="na">xOff</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
  <span class="na">yOff</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
  <span class="na">hover</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
<span class="p">&#125;;</span>

<span class="kd">function</span> <span class="nf">clear</span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nx">ctx</span><span class="p">.</span><span class="nf">clearRect</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">width</span><span class="p">,</span> <span class="nx">height</span><span class="p">);</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">update</span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nx">shape</span><span class="p">.</span><span class="nx">hover</span> <span class="o">=</span> <span class="nx">mouse</span><span class="p">.</span><span class="nf">hover</span><span class="p">(</span><span class="nx">shape</span><span class="p">);</span>

  <span class="k">if </span><span class="p">(</span><span class="nx">shape</span><span class="p">.</span><span class="nx">hover</span> <span class="o">&amp;&amp;</span> <span class="nx">mouse</span><span class="p">.</span><span class="nx">down</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">shape</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="nx">mouse</span><span class="p">.</span><span class="nx">x</span> <span class="o">-</span> <span class="nx">shape</span><span class="p">.</span><span class="nx">xOff</span><span class="p">;</span>
    <span class="nx">shape</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="nx">mouse</span><span class="p">.</span><span class="nx">y</span> <span class="o">-</span> <span class="nx">shape</span><span class="p">.</span><span class="nx">yOff</span><span class="p">;</span>
  <span class="p">&#125;</span>

  <span class="nx">shape</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="nx">shape</span><span class="p">.</span><span class="nx">x</span><span class="p">.</span><span class="nf">clamp</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">width</span> <span class="o">-</span> <span class="nx">shape</span><span class="p">.</span><span class="nx">w</span><span class="p">);</span>
  <span class="nx">shape</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="nx">shape</span><span class="p">.</span><span class="nx">y</span><span class="p">.</span><span class="nf">clamp</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">height</span> <span class="o">-</span> <span class="nx">shape</span><span class="p">.</span><span class="nx">h</span><span class="p">);</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">draw</span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="kd">var</span> <span class="nx">hover</span> <span class="o">=</span> <span class="nx">shape</span><span class="p">.</span><span class="nx">hover</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">#222</span><span class="dl">"</span> <span class="p">:</span> <span class="dl">"</span><span class="s2">#000</span><span class="dl">"</span><span class="p">;</span>
  <span class="nx">ctx</span><span class="p">.</span><span class="nx">fillStyle</span> <span class="o">=</span> <span class="nx">mouse</span><span class="p">.</span><span class="nx">down</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">#444</span><span class="dl">"</span> <span class="p">:</span> <span class="nx">hover</span><span class="p">;</span>
  <span class="nx">ctx</span><span class="p">.</span><span class="nf">fillRect</span><span class="p">(</span><span class="nx">shape</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="nx">shape</span><span class="p">.</span><span class="nx">y</span><span class="p">,</span> <span class="nx">shape</span><span class="p">.</span><span class="nx">w</span><span class="p">,</span> <span class="nx">shape</span><span class="p">.</span><span class="nx">h</span><span class="p">);</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">mousemove</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">mouse</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">pageX</span> <span class="o">-</span> <span class="nx">canvas</span><span class="p">.</span><span class="nx">offsetLeft</span><span class="p">;</span>
  <span class="nx">mouse</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">pageY</span> <span class="o">-</span> <span class="nx">canvas</span><span class="p">.</span><span class="nx">offsetTop</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">mousedown</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">mouse</span><span class="p">.</span><span class="nx">down</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">mousedown</span><span class="dl">"</span><span class="p">;</span>
  <span class="nx">shape</span><span class="p">.</span><span class="nx">xOff</span> <span class="o">=</span> <span class="nx">mouse</span><span class="p">.</span><span class="nx">x</span> <span class="o">-</span> <span class="nx">shape</span><span class="p">.</span><span class="nx">x</span><span class="p">;</span>
  <span class="nx">shape</span><span class="p">.</span><span class="nx">yOff</span> <span class="o">=</span> <span class="nx">mouse</span><span class="p">.</span><span class="nx">y</span> <span class="o">-</span> <span class="nx">shape</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="p">(</span><span class="kd">function</span> <span class="nf">loop</span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nf">clear</span><span class="p">();</span>
  <span class="nf">update</span><span class="p">();</span>
  <span class="nf">draw</span><span class="p">();</span>
  <span class="nf">setTimeout</span><span class="p">(</span><span class="nx">loop</span><span class="p">,</span> <span class="mi">20</span><span class="p">);</span>
<span class="p">&#125;)();</span>

<span class="nb">document</span><span class="p">.</span><span class="nx">onmousemove</span> <span class="o">=</span> <span class="nx">mousemove</span><span class="p">;</span>
<span class="nb">document</span><span class="p">.</span><span class="nx">onmousedown</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">onmouseup</span> <span class="o">=</span> <span class="nx">mousedown</span><span class="p">;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/axmxa5kL/">original jsfiddle post</a></p>
