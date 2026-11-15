---
title: "jsfiddle / gvL3brcf"
date: "2018-07-11T19:28:15.000Z"
date_precision: "second"
tags: ["jsfiddle","code","javascript"]
permalink: "/post/jsfiddle-gvL3brcf/"
source_id: "gvL3brcf"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/gvL3brcf/62/"
source_revision: 62
---
<iframe class="code-demo" src="{{ '/content/media/2018/2018-07-11-jsfiddle-gvL3brcf-demo.html' | relative_url }}" title="jsfiddle / gvL3brcf" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="c1">//pass a representation of tic tac board</span>
<span class="c1">//does this board have a winner? respond yes/no.</span>

<span class="c1">//does not to be valid state.</span>
<span class="kd">var</span> <span class="nx">board</span> <span class="o">=</span> <span class="p">[</span>
  <span class="p">[</span><span class="dl">"</span><span class="s2">O</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">-</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">-</span><span class="dl">"</span><span class="p">],</span>
  <span class="p">[</span><span class="dl">"</span><span class="s2">X</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">-</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">X</span><span class="dl">"</span><span class="p">],</span>
  <span class="p">[</span><span class="dl">"</span><span class="s2">-</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">X</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">O</span><span class="dl">"</span><span class="p">],</span>
<span class="p">];</span>

<span class="kd">function</span> <span class="nf">checkSpace</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">,</span> <span class="nx">z</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="k">return</span> <span class="nx">board</span><span class="p">[</span><span class="nx">x</span><span class="p">][</span><span class="nx">y</span><span class="p">]</span> <span class="o">==</span> <span class="nx">z</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">checkWin</span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="kd">var</span> <span class="nx">wins</span> <span class="o">=</span> <span class="p">&#123;</span>
    <span class="na">horz</span><span class="p">:</span> <span class="p">&#123;</span> <span class="na">x</span><span class="p">:</span> <span class="p">[],</span> <span class="na">o</span><span class="p">:</span> <span class="p">[]</span> <span class="p">&#125;,</span>
    <span class="na">vert</span><span class="p">:</span> <span class="p">&#123;</span> <span class="na">x</span><span class="p">:</span> <span class="p">[],</span> <span class="na">o</span><span class="p">:</span> <span class="p">[]</span> <span class="p">&#125;,</span>
    <span class="na">diag</span><span class="p">:</span> <span class="p">&#123;</span> <span class="na">x</span><span class="p">:</span> <span class="p">[],</span> <span class="na">o</span><span class="p">:</span> <span class="p">[]</span> <span class="p">&#125;,</span>
  <span class="p">&#125;;</span>
  <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="mi">3</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="mi">3</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="c1">//check horz</span>
      <span class="k">if </span><span class="p">(</span><span class="nf">checkSpace</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">j</span><span class="p">,</span> <span class="dl">"</span><span class="s2">X</span><span class="dl">"</span><span class="p">))</span> <span class="p">&#123;</span>
        <span class="nx">wins</span><span class="p">.</span><span class="nx">horz</span><span class="p">.</span><span class="nx">x</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">win!</span><span class="dl">"</span><span class="p">);</span>
      <span class="p">&#125;</span>
      <span class="k">if </span><span class="p">(</span><span class="nf">checkSpace</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">j</span><span class="p">,</span> <span class="dl">"</span><span class="s2">O</span><span class="dl">"</span><span class="p">))</span> <span class="p">&#123;</span>
        <span class="nx">wins</span><span class="p">.</span><span class="nx">horz</span><span class="p">.</span><span class="nx">o</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">win!</span><span class="dl">"</span><span class="p">);</span>
      <span class="p">&#125;</span>

      <span class="c1">// check vertz</span>
      <span class="k">if </span><span class="p">(</span><span class="nf">checkSpace</span><span class="p">(</span><span class="nx">j</span><span class="p">,</span> <span class="nx">i</span><span class="p">,</span> <span class="dl">"</span><span class="s2">X</span><span class="dl">"</span><span class="p">))</span> <span class="p">&#123;</span>
        <span class="nx">wins</span><span class="p">.</span><span class="nx">vert</span><span class="p">.</span><span class="nx">x</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">win!</span><span class="dl">"</span><span class="p">);</span>
      <span class="p">&#125;</span>
      <span class="k">if </span><span class="p">(</span><span class="nf">checkSpace</span><span class="p">(</span><span class="nx">j</span><span class="p">,</span> <span class="nx">i</span><span class="p">,</span> <span class="dl">"</span><span class="s2">O</span><span class="dl">"</span><span class="p">))</span> <span class="p">&#123;</span>
        <span class="nx">wins</span><span class="p">.</span><span class="nx">vert</span><span class="p">.</span><span class="nx">o</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">win!</span><span class="dl">"</span><span class="p">);</span>
      <span class="p">&#125;</span>

      <span class="cm">/*     if(checkSpace(i,i,'X'))&#123;
        wins.diag.x.push('win!');
      &#125;
      if(checkSpace(i,i,'O'))&#123;
        wins.diag.o.push('win!');
      &#125; */</span>

      <span class="cm">/* if(checkSpace(j,j,'X'))&#123;
        wins.diag.x.push('win!');
      &#125;
      if(checkSpace(j,j,'O'))&#123;
        wins.diag.o.push('win!');
      &#125; */</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>

  <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">wins:</span><span class="dl">"</span><span class="p">,</span> <span class="nx">wins</span><span class="p">);</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">wins</span><span class="p">.</span><span class="nx">horz</span><span class="p">.</span><span class="nx">x</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;=</span> <span class="mi">3</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">return</span> <span class="dl">"</span><span class="s2">win horz X!</span><span class="dl">"</span><span class="p">;</span>
  <span class="p">&#125;</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">wins</span><span class="p">.</span><span class="nx">horz</span><span class="p">.</span><span class="nx">o</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;=</span> <span class="mi">3</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">return</span> <span class="dl">"</span><span class="s2">win horz O!</span><span class="dl">"</span><span class="p">;</span>
  <span class="p">&#125;</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">wins</span><span class="p">.</span><span class="nx">vert</span><span class="p">.</span><span class="nx">x</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;=</span> <span class="mi">3</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">return</span> <span class="dl">"</span><span class="s2">win vert X!</span><span class="dl">"</span><span class="p">;</span>
  <span class="p">&#125;</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">wins</span><span class="p">.</span><span class="nx">vert</span><span class="p">.</span><span class="nx">o</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;=</span> <span class="mi">3</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">return</span> <span class="dl">"</span><span class="s2">win vert O!</span><span class="dl">"</span><span class="p">;</span>
  <span class="p">&#125;</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">wins</span><span class="p">.</span><span class="nx">diag</span><span class="p">.</span><span class="nx">x</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;=</span> <span class="mi">3</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">return</span> <span class="dl">"</span><span class="s2">win diag X!</span><span class="dl">"</span><span class="p">;</span>
  <span class="p">&#125;</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">wins</span><span class="p">.</span><span class="nx">diag</span><span class="p">.</span><span class="nx">o</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;=</span> <span class="mi">3</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">return</span> <span class="dl">"</span><span class="s2">win diag O!</span><span class="dl">"</span><span class="p">;</span>
  <span class="p">&#125;</span>

  <span class="c1">// check diag</span>
  <span class="cm">/*  if( checkSpace(0,0,'X') 
    &amp;&amp; checkSpace(1,1,'X')
    &amp;&amp; checkSpace(2,2,'X')
  )&#123;
    return 'win X! 6';
  &#125;
  
  if( checkSpace(0,0,'O') 
    &amp;&amp; checkSpace(1,1,'O')
    &amp;&amp; checkSpace(2,2,'O')
  )&#123;
    return 'win O! 6';
  &#125;
  
  if( checkSpace(0,2,'X') 
    &amp;&amp; checkSpace(1,1,'X')
    &amp;&amp; checkSpace(2,0,'X')
  )&#123;
    return 'win X! 7';
  &#125;
  
  if( checkSpace(0,2,'O') 
    &amp;&amp; checkSpace(1,1,'O')
    &amp;&amp; checkSpace(2,0,'O')
  )&#123;
    return 'win O! 7';
  &#125;
   */</span>
  <span class="k">return</span> <span class="dl">"</span><span class="s2">no</span><span class="dl">"</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="nf">checkWin</span><span class="p">());</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/gvL3brcf/62/">original jsfiddle post</a></p>
