---
title: "interview puzzle"
date: "2019-08-16T22:45:25.000Z"
date_precision: "second"
tags: ["jsfiddle","code","css","javascript"]
permalink: "/post/jsfiddle-ozxhtdkn/"
source_id: "ozxhtdkn"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/ozxhtdkn/68/"
source_revision: 68
---
<iframe class="code-demo" src="{{ '/content/media/2019/2019-08-16-jsfiddle-ozxhtdkn-demo.html' | relative_url }}" title="interview puzzle" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>sum the number of connected segments of this matrix.</p>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">font-family</span><span class="p">:</span> <span class="n">san-serrif</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="cm">/* so i failed this interview question; but i'm stubborn, tho.
 * :/
 * given the matrix below
 * find the 1 values that are clustered together:
 * either next to (left or right) or above or below.
 * then replace those 1 values with how many are clustered.
 */</span>

<span class="kd">const</span> <span class="nx">matrix</span> <span class="o">=</span> <span class="p">[</span>
  <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">],</span>
  <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">],</span>
  <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">],</span>
  <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">],</span>
  <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">],</span>
  <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">],</span>
<span class="p">];</span>
<span class="kd">let</span> <span class="nx">clusters</span> <span class="o">=</span> <span class="p">[];</span>
<span class="kd">let</span> <span class="nx">vertz</span> <span class="o">=</span> <span class="p">&#123;&#125;;</span>

<span class="kd">function</span> <span class="nf">yyC</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span> <span class="nx">i</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">k</span> <span class="o">=</span> <span class="nf">parseInt</span><span class="p">(</span><span class="nx">k</span><span class="p">);</span>
  <span class="nx">i</span> <span class="o">=</span> <span class="nf">parseInt</span><span class="p">(</span><span class="nx">i</span><span class="p">);</span>
  <span class="c1">//forward</span>
  <span class="k">for </span><span class="p">(</span><span class="kd">let</span> <span class="nx">z</span> <span class="o">=</span> <span class="nx">i</span><span class="p">;</span> <span class="nx">z</span> <span class="o">&lt;</span> <span class="mi">10</span><span class="p">;</span> <span class="nx">z</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">matrix</span><span class="p">[</span><span class="nx">k</span><span class="p">][</span><span class="nx">z</span><span class="p">])</span> <span class="p">&#123;</span>
      <span class="nx">vertz</span><span class="p">[</span><span class="s2">`</span><span class="p">$&#123;</span><span class="nx">k</span><span class="p">&#125;</span><span class="s2">:</span><span class="p">$&#123;</span><span class="nx">z</span><span class="p">&#125;</span><span class="s2">`</span><span class="p">]</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
      <span class="k">break</span><span class="p">;</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>
  <span class="c1">//backward</span>
  <span class="k">for </span><span class="p">(</span><span class="kd">let</span> <span class="nx">z</span> <span class="o">=</span> <span class="nx">i</span><span class="p">;</span> <span class="nx">z</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span> <span class="nx">z</span><span class="o">--</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">matrix</span><span class="p">[</span><span class="nx">k</span><span class="p">][</span><span class="nx">z</span><span class="p">])</span> <span class="p">&#123;</span>
      <span class="nx">vertz</span><span class="p">[</span><span class="s2">`</span><span class="p">$&#123;</span><span class="nx">k</span><span class="p">&#125;</span><span class="s2">:</span><span class="p">$&#123;</span><span class="nx">z</span><span class="p">&#125;</span><span class="s2">`</span><span class="p">]</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
      <span class="k">break</span><span class="p">;</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">zC</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">i</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="c1">//go up</span>
  <span class="k">for </span><span class="p">(</span><span class="kd">let</span> <span class="nx">k</span> <span class="o">=</span> <span class="nx">x</span><span class="p">;</span> <span class="nx">k</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span> <span class="nx">k</span><span class="o">--</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">matrix</span><span class="p">[</span><span class="nx">k</span><span class="p">][</span><span class="nx">i</span><span class="p">])</span> <span class="p">&#123;</span>
      <span class="nx">vertz</span><span class="p">[</span><span class="s2">`</span><span class="p">$&#123;</span><span class="nx">k</span><span class="p">&#125;</span><span class="s2">:</span><span class="p">$&#123;</span><span class="nx">i</span><span class="p">&#125;</span><span class="s2">`</span><span class="p">]</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span>
      <span class="nf">yyC</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span> <span class="nx">i</span><span class="p">);</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
      <span class="k">break</span><span class="p">;</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>
  <span class="c1">//go down</span>
  <span class="k">for </span><span class="p">(</span><span class="kd">let</span> <span class="nx">k</span> <span class="o">=</span> <span class="nx">x</span><span class="p">;</span> <span class="nx">k</span> <span class="o">&lt;</span> <span class="mi">6</span><span class="p">;</span> <span class="nx">k</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">matrix</span><span class="p">[</span><span class="nx">k</span><span class="p">][</span><span class="nx">i</span><span class="p">])</span> <span class="p">&#123;</span>
      <span class="nx">vertz</span><span class="p">[</span><span class="s2">`</span><span class="p">$&#123;</span><span class="nx">k</span><span class="p">&#125;</span><span class="s2">:</span><span class="p">$&#123;</span><span class="nx">i</span><span class="p">&#125;</span><span class="s2">`</span><span class="p">]</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span>
      <span class="nf">yyC</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span> <span class="nx">i</span><span class="p">);</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
      <span class="k">break</span><span class="p">;</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">yC</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span> <span class="nx">i</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">k</span> <span class="o">=</span> <span class="nf">parseInt</span><span class="p">(</span><span class="nx">k</span><span class="p">);</span>
  <span class="nx">i</span> <span class="o">=</span> <span class="nf">parseInt</span><span class="p">(</span><span class="nx">i</span><span class="p">);</span>
  <span class="c1">//forward</span>
  <span class="k">for </span><span class="p">(</span><span class="kd">let</span> <span class="nx">z</span> <span class="o">=</span> <span class="nx">i</span><span class="p">;</span> <span class="nx">z</span> <span class="o">&lt;</span> <span class="mi">10</span><span class="p">;</span> <span class="nx">z</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">matrix</span><span class="p">[</span><span class="nx">k</span><span class="p">][</span><span class="nx">z</span><span class="p">])</span> <span class="p">&#123;</span>
      <span class="nx">vertz</span><span class="p">[</span><span class="s2">`</span><span class="p">$&#123;</span><span class="nx">k</span><span class="p">&#125;</span><span class="s2">:</span><span class="p">$&#123;</span><span class="nx">z</span><span class="p">&#125;</span><span class="s2">`</span><span class="p">]</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span>
      <span class="nf">zC</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span> <span class="nx">z</span><span class="p">);</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
      <span class="k">break</span><span class="p">;</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>
  <span class="c1">//backward</span>
  <span class="k">for </span><span class="p">(</span><span class="kd">let</span> <span class="nx">z</span> <span class="o">=</span> <span class="nx">i</span><span class="p">;</span> <span class="nx">z</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span> <span class="nx">z</span><span class="o">--</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">matrix</span><span class="p">[</span><span class="nx">k</span><span class="p">][</span><span class="nx">z</span><span class="p">])</span> <span class="p">&#123;</span>
      <span class="nx">vertz</span><span class="p">[</span><span class="s2">`</span><span class="p">$&#123;</span><span class="nx">k</span><span class="p">&#125;</span><span class="s2">:</span><span class="p">$&#123;</span><span class="nx">z</span><span class="p">&#125;</span><span class="s2">`</span><span class="p">]</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span>
      <span class="nf">zC</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span> <span class="nx">z</span><span class="p">);</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
      <span class="k">break</span><span class="p">;</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">xC</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">i</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="c1">//go up</span>
  <span class="k">for </span><span class="p">(</span><span class="kd">let</span> <span class="nx">k</span> <span class="o">=</span> <span class="nx">x</span><span class="p">;</span> <span class="nx">k</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span> <span class="nx">k</span><span class="o">--</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">matrix</span><span class="p">[</span><span class="nx">k</span><span class="p">][</span><span class="nx">i</span><span class="p">])</span> <span class="p">&#123;</span>
      <span class="nx">vertz</span><span class="p">[</span><span class="s2">`</span><span class="p">$&#123;</span><span class="nx">k</span><span class="p">&#125;</span><span class="s2">:</span><span class="p">$&#123;</span><span class="nx">i</span><span class="p">&#125;</span><span class="s2">`</span><span class="p">]</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span>
      <span class="c1">//also go forward/backward.</span>
      <span class="nf">yC</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span> <span class="nx">i</span><span class="p">);</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
      <span class="k">break</span><span class="p">;</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>
  <span class="c1">//go down</span>
  <span class="k">for </span><span class="p">(</span><span class="kd">let</span> <span class="nx">k</span> <span class="o">=</span> <span class="nx">x</span><span class="p">;</span> <span class="nx">k</span> <span class="o">&lt;</span> <span class="mi">6</span><span class="p">;</span> <span class="nx">k</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">matrix</span><span class="p">[</span><span class="nx">k</span><span class="p">][</span><span class="nx">i</span><span class="p">])</span> <span class="p">&#123;</span>
      <span class="nx">vertz</span><span class="p">[</span><span class="s2">`</span><span class="p">$&#123;</span><span class="nx">k</span><span class="p">&#125;</span><span class="s2">:</span><span class="p">$&#123;</span><span class="nx">i</span><span class="p">&#125;</span><span class="s2">`</span><span class="p">]</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span>
      <span class="c1">//also go forward/backward.</span>
      <span class="nf">yC</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span> <span class="nx">i</span><span class="p">);</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
      <span class="k">break</span><span class="p">;</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">nC</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">x</span> <span class="o">=</span> <span class="nf">parseInt</span><span class="p">(</span><span class="nx">x</span><span class="p">);</span>
  <span class="nx">y</span> <span class="o">=</span> <span class="nf">parseInt</span><span class="p">(</span><span class="nx">y</span><span class="p">);</span>
  <span class="nx">vertz</span> <span class="o">=</span> <span class="p">&#123;&#125;;</span>

  <span class="c1">//check here &amp; go forward.</span>
  <span class="k">for </span><span class="p">(</span><span class="kd">let</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">y</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="mi">10</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">matrix</span><span class="p">[</span><span class="nx">x</span><span class="p">][</span><span class="nx">i</span><span class="p">])</span> <span class="p">&#123;</span>
      <span class="nx">vertz</span><span class="p">[</span><span class="s2">`</span><span class="p">$&#123;</span><span class="nx">x</span><span class="p">&#125;</span><span class="s2">:</span><span class="p">$&#123;</span><span class="nx">i</span><span class="p">&#125;</span><span class="s2">`</span><span class="p">]</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span>
      <span class="nf">xC</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">i</span><span class="p">);</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
      <span class="k">break</span><span class="p">;</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>
  <span class="c1">//go backward.</span>
  <span class="k">for </span><span class="p">(</span><span class="kd">let</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">y</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span> <span class="nx">i</span><span class="o">--</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">matrix</span><span class="p">[</span><span class="nx">x</span><span class="p">][</span><span class="nx">i</span><span class="p">])</span> <span class="p">&#123;</span>
      <span class="nx">vertz</span><span class="p">[</span><span class="s2">`</span><span class="p">$&#123;</span><span class="nx">x</span><span class="p">&#125;</span><span class="s2">:</span><span class="p">$&#123;</span><span class="nx">i</span><span class="p">&#125;</span><span class="s2">`</span><span class="p">]</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span>
      <span class="nf">xC</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">i</span><span class="p">);</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
      <span class="k">break</span><span class="p">;</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>

  <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="s2">`</span><span class="p">$&#123;</span><span class="nx">x</span><span class="p">&#125;</span><span class="s2">:</span><span class="p">$&#123;</span><span class="nx">y</span><span class="p">&#125;</span><span class="s2"> </span><span class="p">$&#123;</span><span class="nb">Object</span><span class="p">.</span><span class="nf">keys</span><span class="p">(</span><span class="nx">vertz</span><span class="p">).</span><span class="nx">length</span><span class="p">&#125;</span><span class="s2"> vertz:`</span><span class="p">,</span> <span class="nx">vertz</span><span class="p">);</span>
  <span class="k">return</span> <span class="nb">Object</span><span class="p">.</span><span class="nf">keys</span><span class="p">(</span><span class="nx">vertz</span><span class="p">).</span><span class="nx">length</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="k">for </span><span class="p">(</span><span class="kd">const</span> <span class="nx">x</span> <span class="k">in</span> <span class="nx">matrix</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">clusters</span><span class="p">[</span><span class="nx">x</span><span class="p">]</span> <span class="o">=</span> <span class="p">[];</span>
  <span class="k">for </span><span class="p">(</span><span class="kd">const</span> <span class="nx">y</span> <span class="k">in</span> <span class="nx">matrix</span><span class="p">[</span><span class="nx">x</span><span class="p">])</span> <span class="p">&#123;</span>
    <span class="nx">clusters</span><span class="p">[</span><span class="nx">x</span><span class="p">][</span><span class="nx">y</span><span class="p">]</span> <span class="o">=</span> <span class="nx">matrix</span><span class="p">[</span><span class="nx">x</span><span class="p">][</span><span class="nx">y</span><span class="p">]</span> <span class="o">===</span> <span class="mi">1</span> <span class="p">?</span> <span class="nf">nC</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">)</span> <span class="p">:</span> <span class="mi">0</span><span class="p">;</span>
  <span class="p">&#125;</span>
<span class="p">&#125;</span>
<span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="nx">clusters</span><span class="p">);</span>
<span class="k">for </span><span class="p">(</span><span class="kd">let</span> <span class="nx">item</span> <span class="k">of</span> <span class="nx">matrix</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">+=</span> <span class="s2">`&lt;div&gt;</span><span class="p">$&#123;</span><span class="nx">JSON</span><span class="p">.</span><span class="nf">stringify</span><span class="p">(</span><span class="nx">item</span><span class="p">)&#125;</span><span class="s2">&lt;/div&gt;`</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">+=</span> <span class="dl">"</span><span class="s2">&lt;hr&gt;</span><span class="dl">"</span><span class="p">;</span>
<span class="k">for </span><span class="p">(</span><span class="kd">let</span> <span class="nx">fuck</span> <span class="k">of</span> <span class="nx">clusters</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">+=</span> <span class="s2">`&lt;div&gt;</span><span class="p">$&#123;</span><span class="nx">JSON</span><span class="p">.</span><span class="nf">stringify</span><span class="p">(</span><span class="nx">fuck</span><span class="p">)&#125;</span><span class="s2">&lt;/div&gt;`</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/ozxhtdkn/68/">original jsfiddle post</a></p>
