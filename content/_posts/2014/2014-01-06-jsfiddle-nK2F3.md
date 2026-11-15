---
title: "micronemez zoomin layout design"
date: "2014-01-06T17:54:55.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript","canvas","animation"]
permalink: "/post/jsfiddle-nK2F3/"
source_id: "nK2F3"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/nK2F3/82/"
source_revision: 82
---
<iframe class="code-demo" src="{{ '/content/media/2014/2014-01-06-jsfiddle-nK2F3-demo.html' | relative_url }}" title="micronemez zoomin layout design" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>testing out various zoomin' hexagon designz</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script </span><span class="na">type=</span><span class="s">"text/javascript"</span><span class="nt">&gt;</span>
  <span class="cm">/*
   * purecssmatrix.js, version 0.10, part of:
   * http://janne.aukia.com/zoomooz
   *
   * 0.10 initial stand-alone version
   *
   * LICENCE INFORMATION:
   *
   * Copyright (c) 2010 Janne Aukia (janne.aukia.com)
   * Dual licensed under the MIT (MIT-LICENSE.txt)
   * and GPL Version 2 (GPL-LICENSE.txt) licenses.
   *
   */</span>

  <span class="nx">PureCSSMatrix</span> <span class="o">=</span> <span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="dl">"</span><span class="s2">use strict</span><span class="dl">"</span><span class="p">;</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  Variables                 ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="kd">var</span> <span class="nx">regexp_is_deg</span> <span class="o">=</span> <span class="sr">/deg$/</span><span class="p">;</span>
    <span class="kd">var</span> <span class="nx">regexp_filter_number</span> <span class="o">=</span> <span class="sr">/</span><span class="se">([</span><span class="sr">0-9.</span><span class="se">\-</span><span class="sr">e</span><span class="se">]</span><span class="sr">+</span><span class="se">)</span><span class="sr">/g</span><span class="p">;</span>
    <span class="kd">var</span> <span class="nx">regexp_trans_splitter</span> <span class="o">=</span> <span class="sr">/</span><span class="se">([</span><span class="sr">a-zA-Z</span><span class="se">]</span><span class="sr">+</span><span class="se">)\(([^\)]</span><span class="sr">+</span><span class="se">)\)</span><span class="sr">/g</span><span class="p">;</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  WebKitCSSMatrix in        ***//</span>
    <span class="c1">//***  pure Javascript           ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="kd">function</span> <span class="nf">cssMatrix</span><span class="p">(</span><span class="nx">trans</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">trans</span> <span class="o">&amp;&amp;</span> <span class="nx">trans</span> <span class="o">!==</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">trans</span> <span class="o">!=</span> <span class="dl">"</span><span class="s2">none</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">trans</span> <span class="k">instanceof</span> <span class="nx">Matrix</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">this</span><span class="p">.</span><span class="nf">setMatrix</span><span class="p">(</span><span class="nx">trans</span><span class="p">);</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
          <span class="k">this</span><span class="p">.</span><span class="nf">setMatrixValue</span><span class="p">(</span><span class="nx">trans</span><span class="p">);</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
        <span class="k">this</span><span class="p">.</span><span class="nx">m</span> <span class="o">=</span> <span class="nx">Matrix</span><span class="p">.</span><span class="nc">I</span><span class="p">(</span><span class="mi">3</span><span class="p">);</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;</span>

    <span class="nx">cssMatrix</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">setMatrix</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">matr</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">this</span><span class="p">.</span><span class="nx">m</span> <span class="o">=</span> <span class="nx">matr</span><span class="p">;</span>
    <span class="p">&#125;;</span>

    <span class="kd">function</span> <span class="nf">rawRotationToRadians</span><span class="p">(</span><span class="nx">raw</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">rot</span> <span class="o">=</span> <span class="nf">parseFloat</span><span class="p">(</span><span class="nf">filterNumber</span><span class="p">(</span><span class="nx">raw</span><span class="p">));</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">raw</span><span class="p">.</span><span class="nf">match</span><span class="p">(</span><span class="nx">regexp_is_deg</span><span class="p">))</span> <span class="p">&#123;</span>
        <span class="nx">rot</span> <span class="o">=</span> <span class="p">(</span><span class="mi">2</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">*</span> <span class="nx">rot</span><span class="p">)</span> <span class="o">/</span> <span class="mf">360.0</span><span class="p">;</span>
      <span class="p">&#125;</span>
      <span class="k">return</span> <span class="nx">rot</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="nx">cssMatrix</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">setMatrixValue</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">transString</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">mtr</span> <span class="o">=</span> <span class="nx">Matrix</span><span class="p">.</span><span class="nc">I</span><span class="p">(</span><span class="mi">3</span><span class="p">);</span>
      <span class="kd">var</span> <span class="nx">items</span><span class="p">;</span>
      <span class="k">while </span><span class="p">((</span><span class="nx">items</span> <span class="o">=</span> <span class="nx">regexp_trans_splitter</span><span class="p">.</span><span class="nf">exec</span><span class="p">(</span><span class="nx">transString</span><span class="p">))</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="kd">var</span> <span class="nx">action</span> <span class="o">=</span> <span class="nx">items</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nf">toLowerCase</span><span class="p">();</span>
        <span class="kd">var</span> <span class="nx">val</span> <span class="o">=</span> <span class="nx">items</span><span class="p">[</span><span class="mi">2</span><span class="p">].</span><span class="nf">split</span><span class="p">(</span><span class="dl">"</span><span class="s2">,</span><span class="dl">"</span><span class="p">);</span>
        <span class="kd">var</span> <span class="nx">trans</span><span class="p">;</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">action</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">matrix</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">trans</span> <span class="o">=</span> <span class="nx">Matrix</span><span class="p">.</span><span class="nf">create</span><span class="p">([</span>
            <span class="p">[</span>
              <span class="nf">parseFloat</span><span class="p">(</span><span class="nx">val</span><span class="p">[</span><span class="mi">0</span><span class="p">]),</span>
              <span class="nf">parseFloat</span><span class="p">(</span><span class="nx">val</span><span class="p">[</span><span class="mi">2</span><span class="p">]),</span>
              <span class="nf">parseFloat</span><span class="p">(</span><span class="nf">filterNumber</span><span class="p">(</span><span class="nx">val</span><span class="p">[</span><span class="mi">4</span><span class="p">])),</span>
            <span class="p">],</span>
            <span class="p">[</span>
              <span class="nf">parseFloat</span><span class="p">(</span><span class="nx">val</span><span class="p">[</span><span class="mi">1</span><span class="p">]),</span>
              <span class="nf">parseFloat</span><span class="p">(</span><span class="nx">val</span><span class="p">[</span><span class="mi">3</span><span class="p">]),</span>
              <span class="nf">parseFloat</span><span class="p">(</span><span class="nf">filterNumber</span><span class="p">(</span><span class="nx">val</span><span class="p">[</span><span class="mi">5</span><span class="p">])),</span>
            <span class="p">],</span>
            <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">],</span>
          <span class="p">]);</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">action</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">translate</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">trans</span> <span class="o">=</span> <span class="nx">Matrix</span><span class="p">.</span><span class="nc">I</span><span class="p">(</span><span class="mi">3</span><span class="p">);</span>
          <span class="nx">trans</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">2</span><span class="p">]</span> <span class="o">=</span> <span class="nf">parseFloat</span><span class="p">(</span><span class="nf">filterNumber</span><span class="p">(</span><span class="nx">val</span><span class="p">[</span><span class="mi">0</span><span class="p">]));</span>
          <span class="nx">trans</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="mi">1</span><span class="p">][</span><span class="mi">2</span><span class="p">]</span> <span class="o">=</span> <span class="nf">parseFloat</span><span class="p">(</span><span class="nf">filterNumber</span><span class="p">(</span><span class="nx">val</span><span class="p">[</span><span class="mi">1</span><span class="p">]));</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">action</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">scale</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="kd">var</span> <span class="nx">sx</span> <span class="o">=</span> <span class="nf">parseFloat</span><span class="p">(</span><span class="nx">val</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span>
          <span class="kd">var</span> <span class="nx">sy</span><span class="p">;</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">val</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">sy</span> <span class="o">=</span> <span class="nf">parseFloat</span><span class="p">(</span><span class="nx">val</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span>
          <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
            <span class="nx">sy</span> <span class="o">=</span> <span class="nx">sx</span><span class="p">;</span>
          <span class="p">&#125;</span>
          <span class="nx">trans</span> <span class="o">=</span> <span class="nx">Matrix</span><span class="p">.</span><span class="nf">create</span><span class="p">([</span>
            <span class="p">[</span><span class="nx">sx</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">],</span>
            <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="nx">sy</span><span class="p">,</span> <span class="mi">0</span><span class="p">],</span>
            <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">],</span>
          <span class="p">]);</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">action</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">rotate</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">trans</span> <span class="o">=</span> <span class="nx">Matrix</span><span class="p">.</span><span class="nc">RotationZ</span><span class="p">(</span><span class="nf">rawRotationToRadians</span><span class="p">(</span><span class="nx">val</span><span class="p">[</span><span class="mi">0</span><span class="p">]));</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">action</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">skew</span><span class="dl">"</span> <span class="o">||</span> <span class="nx">action</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">skewx</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="c1">// TODO: supports only one parameter skew</span>
          <span class="nx">trans</span> <span class="o">=</span> <span class="nx">Matrix</span><span class="p">.</span><span class="nc">I</span><span class="p">(</span><span class="mi">3</span><span class="p">);</span>
          <span class="nx">trans</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">tan</span><span class="p">(</span><span class="nf">rawRotationToRadians</span><span class="p">(</span><span class="nx">val</span><span class="p">[</span><span class="mi">0</span><span class="p">]));</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">action</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">skewy</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="c1">// TODO: test that this works (or unit test them all!)</span>
          <span class="nx">trans</span> <span class="o">=</span> <span class="nx">Matrix</span><span class="p">.</span><span class="nc">I</span><span class="p">(</span><span class="mi">3</span><span class="p">);</span>
          <span class="nx">trans</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="mi">1</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">tan</span><span class="p">(</span><span class="nf">rawRotationToRadians</span><span class="p">(</span><span class="nx">val</span><span class="p">[</span><span class="mi">0</span><span class="p">]));</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
          <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">Problem with setMatrixValue</span><span class="dl">"</span><span class="p">,</span> <span class="nx">action</span><span class="p">,</span> <span class="nx">val</span><span class="p">);</span>
        <span class="p">&#125;</span>

        <span class="nx">mtr</span> <span class="o">=</span> <span class="nx">mtr</span><span class="p">.</span><span class="nf">multiply</span><span class="p">(</span><span class="nx">trans</span><span class="p">);</span>
      <span class="p">&#125;</span>

      <span class="k">this</span><span class="p">.</span><span class="nx">m</span> <span class="o">=</span> <span class="nx">mtr</span><span class="p">;</span>
    <span class="p">&#125;;</span>

    <span class="nx">cssMatrix</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">multiply</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">m2</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="k">new</span> <span class="nf">cssMatrix</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">m</span><span class="p">.</span><span class="nf">multiply</span><span class="p">(</span><span class="nx">m2</span><span class="p">.</span><span class="nx">m</span><span class="p">));</span>
    <span class="p">&#125;;</span>

    <span class="nx">cssMatrix</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">inverse</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nf">abs</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">m</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">0</span><span class="p">])</span> <span class="o">&lt;</span> <span class="mf">0.000001</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="cm">/* fixes a weird displacement problem with 90 deg rotations */</span>
        <span class="k">this</span><span class="p">.</span><span class="nx">m</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
      <span class="p">&#125;</span>
      <span class="k">return</span> <span class="k">new</span> <span class="nf">cssMatrix</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">m</span><span class="p">.</span><span class="nf">inverse</span><span class="p">());</span>
    <span class="p">&#125;;</span>

    <span class="nx">cssMatrix</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">translate</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">trans</span> <span class="o">=</span> <span class="nx">Matrix</span><span class="p">.</span><span class="nc">I</span><span class="p">(</span><span class="mi">3</span><span class="p">);</span>
      <span class="nx">trans</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">2</span><span class="p">]</span> <span class="o">=</span> <span class="nx">x</span><span class="p">;</span>
      <span class="nx">trans</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="mi">1</span><span class="p">][</span><span class="mi">2</span><span class="p">]</span> <span class="o">=</span> <span class="nx">y</span><span class="p">;</span>
      <span class="k">return</span> <span class="k">new</span> <span class="nf">cssMatrix</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">m</span><span class="p">.</span><span class="nf">multiply</span><span class="p">(</span><span class="nx">trans</span><span class="p">));</span>
    <span class="p">&#125;;</span>

    <span class="nx">cssMatrix</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">scale</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">sx</span><span class="p">,</span> <span class="nx">sy</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">trans</span> <span class="o">=</span> <span class="nx">Matrix</span><span class="p">.</span><span class="nf">create</span><span class="p">([</span>
        <span class="p">[</span><span class="nx">sx</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">],</span>
        <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="nx">sy</span><span class="p">,</span> <span class="mi">0</span><span class="p">],</span>
        <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">],</span>
      <span class="p">]);</span>
      <span class="k">return</span> <span class="k">new</span> <span class="nf">cssMatrix</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">m</span><span class="p">.</span><span class="nf">multiply</span><span class="p">(</span><span class="nx">trans</span><span class="p">));</span>
    <span class="p">&#125;;</span>

    <span class="nx">cssMatrix</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">rotate</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">rot</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">trans</span> <span class="o">=</span> <span class="nx">Matrix</span><span class="p">.</span><span class="nc">RotationZ</span><span class="p">(</span><span class="nx">rot</span><span class="p">);</span>
      <span class="k">return</span> <span class="k">new</span> <span class="nf">cssMatrix</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">m</span><span class="p">.</span><span class="nf">multiply</span><span class="p">(</span><span class="nx">trans</span><span class="p">));</span>
    <span class="p">&#125;;</span>

    <span class="nx">cssMatrix</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">e</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">m</span><span class="p">.</span><span class="nx">elements</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">pxstr</span> <span class="o">=</span> <span class="dl">""</span><span class="p">;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">.</span><span class="nx">mozilla</span> <span class="o">||</span> <span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">.</span><span class="nx">opera</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">pxstr</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">px</span><span class="dl">"</span><span class="p">;</span>
      <span class="p">&#125;</span>
      <span class="k">return </span><span class="p">(</span>
        <span class="dl">"</span><span class="s2">matrix(</span><span class="dl">"</span> <span class="o">+</span>
        <span class="nf">printFixedNumber</span><span class="p">(</span><span class="nx">e</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">0</span><span class="p">])</span> <span class="o">+</span>
        <span class="dl">"</span><span class="s2">, </span><span class="dl">"</span> <span class="o">+</span>
        <span class="nf">printFixedNumber</span><span class="p">(</span><span class="nx">e</span><span class="p">[</span><span class="mi">1</span><span class="p">][</span><span class="mi">0</span><span class="p">])</span> <span class="o">+</span>
        <span class="dl">"</span><span class="s2">, </span><span class="dl">"</span> <span class="o">+</span>
        <span class="nf">printFixedNumber</span><span class="p">(</span><span class="nx">e</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">1</span><span class="p">])</span> <span class="o">+</span>
        <span class="dl">"</span><span class="s2">, </span><span class="dl">"</span> <span class="o">+</span>
        <span class="nf">printFixedNumber</span><span class="p">(</span><span class="nx">e</span><span class="p">[</span><span class="mi">1</span><span class="p">][</span><span class="mi">1</span><span class="p">])</span> <span class="o">+</span>
        <span class="dl">"</span><span class="s2">, </span><span class="dl">"</span> <span class="o">+</span>
        <span class="nf">printFixedNumber</span><span class="p">(</span><span class="nx">e</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">2</span><span class="p">])</span> <span class="o">+</span>
        <span class="nx">pxstr</span> <span class="o">+</span>
        <span class="dl">"</span><span class="s2">, </span><span class="dl">"</span> <span class="o">+</span>
        <span class="nf">printFixedNumber</span><span class="p">(</span><span class="nx">e</span><span class="p">[</span><span class="mi">1</span><span class="p">][</span><span class="mi">2</span><span class="p">])</span> <span class="o">+</span>
        <span class="nx">pxstr</span> <span class="o">+</span>
        <span class="dl">"</span><span class="s2">)</span><span class="dl">"</span>
      <span class="p">);</span>
    <span class="p">&#125;;</span>

    <span class="c1">//****************************************//</span>
    <span class="c1">//***  Not part of the WebkitCSSMatrix ***//</span>
    <span class="c1">//***  interface (but used in Zoomooz) ***//</span>
    <span class="c1">//****************************************//</span>

    <span class="nx">cssMatrix</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">elements</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">mv</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">m</span><span class="p">.</span><span class="nx">elements</span><span class="p">;</span>
      <span class="k">return</span> <span class="p">&#123;</span>
        <span class="na">a</span><span class="p">:</span> <span class="nx">mv</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">0</span><span class="p">],</span>
        <span class="na">b</span><span class="p">:</span> <span class="nx">mv</span><span class="p">[</span><span class="mi">1</span><span class="p">][</span><span class="mi">0</span><span class="p">],</span>
        <span class="na">c</span><span class="p">:</span> <span class="nx">mv</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">1</span><span class="p">],</span>
        <span class="na">d</span><span class="p">:</span> <span class="nx">mv</span><span class="p">[</span><span class="mi">1</span><span class="p">][</span><span class="mi">1</span><span class="p">],</span>
        <span class="na">e</span><span class="p">:</span> <span class="nx">mv</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">2</span><span class="p">],</span>
        <span class="na">f</span><span class="p">:</span> <span class="nx">mv</span><span class="p">[</span><span class="mi">1</span><span class="p">][</span><span class="mi">2</span><span class="p">],</span>
      <span class="p">&#125;;</span>
    <span class="p">&#125;;</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  Helpers                   ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="kd">function</span> <span class="nf">filterNumber</span><span class="p">(</span><span class="nx">x</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nx">x</span><span class="p">.</span><span class="nf">match</span><span class="p">(</span><span class="nx">regexp_filter_number</span><span class="p">);</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">printFixedNumber</span><span class="p">(</span><span class="nx">x</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nc">Number</span><span class="p">(</span><span class="nx">x</span><span class="p">).</span><span class="nf">toFixed</span><span class="p">(</span><span class="mi">6</span><span class="p">);</span>
    <span class="p">&#125;</span>

    <span class="k">return</span> <span class="nx">cssMatrix</span><span class="p">;</span>
  <span class="p">&#125;)();</span>
  <span class="cm">/*
   * jquery.zoomooz-helpers.js, part of:
   * http://janne.aukia.com/zoomooz
   *
   * LICENCE INFORMATION:
   *
   * Copyright (c) 2010 Janne Aukia (janne.aukia.com)
   * Dual licensed under the MIT (MIT-LICENSE.txt)
   * and GPL Version 2 (GPL-LICENSE.txt) licenses.
   *
   */</span>

  <span class="cm">/*jslint sub: true */</span>

  <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">$</span><span class="p">.</span><span class="nx">zoomooz</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">$</span><span class="p">.</span><span class="nx">zoomooz</span> <span class="o">=</span> <span class="p">&#123;&#125;;</span>
  <span class="p">&#125;</span>

  <span class="nx">$</span><span class="p">.</span><span class="nx">zoomooz</span><span class="p">.</span><span class="nx">helpers</span> <span class="o">=</span> <span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">$</span><span class="p">,</span> <span class="nx">ns</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="dl">"</span><span class="s2">use strict</span><span class="dl">"</span><span class="p">;</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  Variables                 ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="kd">var</span> <span class="nx">browser_prefixes</span> <span class="o">=</span> <span class="p">[</span><span class="dl">"</span><span class="s2">-moz-</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">-webkit-</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">-o-</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">-ms-</span><span class="dl">"</span><span class="p">];</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  Helpers                   ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="nx">ns</span><span class="p">.</span><span class="nx">forEachPrefix</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">includeNoPrefix</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">browser_prefixes</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nf">func</span><span class="p">(</span><span class="nx">browser_prefixes</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span>
      <span class="p">&#125;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">includeNoPrefix</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nf">func</span><span class="p">(</span><span class="dl">""</span><span class="p">);</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;;</span>

    <span class="nx">ns</span><span class="p">.</span><span class="nx">getElementTransform</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">elem</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">retVal</span><span class="p">;</span>
      <span class="nx">ns</span><span class="p">.</span><span class="nf">forEachPrefix</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">prefix</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">retVal</span> <span class="o">=</span> <span class="nx">retVal</span> <span class="o">||</span> <span class="nf">$</span><span class="p">(</span><span class="nx">elem</span><span class="p">).</span><span class="nf">css</span><span class="p">(</span><span class="nx">prefix</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">transform</span><span class="dl">"</span><span class="p">);</span>
      <span class="p">&#125;,</span> <span class="kc">true</span><span class="p">);</span>
      <span class="k">return</span> <span class="nx">retVal</span><span class="p">;</span>
    <span class="p">&#125;;</span>

    <span class="k">return</span> <span class="nx">ns</span><span class="p">;</span>
  <span class="p">&#125;)(</span><span class="nx">jQuery</span><span class="p">,</span> <span class="p">&#123;&#125;);</span>
  <span class="cm">/*
   * jquery.zoomooz-anim.js, part of:
   * http://janne.aukia.com/zoomooz
   *
   * LICENCE INFORMATION:
   *
   * Copyright (c) 2010 Janne Aukia (janne.aukia.com)
   * Dual licensed under the MIT (MIT-LICENSE.txt)
   * and GPL Version 2 (GPL-LICENSE.txt) licenses.
   *
   * LICENCE INFORMATION FOR DERIVED FUNCTIONS:
   *
   * Functions CubicBezierAtPosition and
   * CubicBezierAtTime are written by Christian Effenberger,
   * and correspond 1:1 to WebKit project functions.
   * "WebCore and JavaScriptCore are available under the
   * Lesser GNU Public License. WebKit is available under
   * a BSD-style license."
   *
   */</span>

  <span class="cm">/*jslint sub: true */</span>

  <span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="dl">"</span><span class="s2">use strict</span><span class="dl">"</span><span class="p">;</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  Variables                 ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="kd">var</span> <span class="nx">animation_start_time</span><span class="p">;</span>
    <span class="kd">var</span> <span class="nx">animation_interval_timer</span><span class="p">;</span>

    <span class="kd">var</span> <span class="nx">regexp_filter_number</span> <span class="o">=</span> <span class="sr">/</span><span class="se">([</span><span class="sr">0-9.</span><span class="se">\-</span><span class="sr">e</span><span class="se">]</span><span class="sr">+</span><span class="se">)</span><span class="sr">/g</span><span class="p">;</span>
    <span class="kd">var</span> <span class="nx">regexp_trans_splitter</span> <span class="o">=</span> <span class="sr">/</span><span class="se">([</span><span class="sr">a-z</span><span class="se">]</span><span class="sr">+</span><span class="se">)\(([^\)]</span><span class="sr">+</span><span class="se">)\)</span><span class="sr">/g</span><span class="p">;</span>
    <span class="kd">var</span> <span class="nx">regexp_is_deg</span> <span class="o">=</span> <span class="sr">/deg$/</span><span class="p">;</span>

    <span class="kd">var</span> <span class="nx">helpers</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">zoomooz</span><span class="p">.</span><span class="nx">helpers</span><span class="p">;</span>

    <span class="kd">var</span> <span class="nx">default_settings</span> <span class="o">=</span> <span class="p">&#123;</span>
      <span class="na">duration</span><span class="p">:</span> <span class="mi">450</span><span class="p">,</span>
      <span class="na">easing</span><span class="p">:</span> <span class="dl">"</span><span class="s2">ease</span><span class="dl">"</span><span class="p">,</span>
      <span class="cm">/* Native animation may cause issues with pixelated content while zooming,
           and there might be other issues with browser compatibility etc. so use
           it with care and test on your target devices/browsers :). */</span>
      <span class="na">nativeanimation</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
    <span class="p">&#125;;</span>

    <span class="kd">var</span> <span class="nx">endCallbackTimeout</span><span class="p">;</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  Setup css hook for IE     ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="nx">jQuery</span><span class="p">.</span><span class="nx">cssHooks</span><span class="p">[</span><span class="dl">"</span><span class="s2">MsTransform</span><span class="dl">"</span><span class="p">]</span> <span class="o">=</span> <span class="p">&#123;</span>
      <span class="na">set</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">elem</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">elem</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">msTransform</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span>
      <span class="p">&#125;,</span>
    <span class="p">&#125;;</span>

    <span class="nx">jQuery</span><span class="p">.</span><span class="nx">cssHooks</span><span class="p">[</span><span class="dl">"</span><span class="s2">MsTransformOrigin</span><span class="dl">"</span><span class="p">]</span> <span class="o">=</span> <span class="p">&#123;</span>
      <span class="na">set</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">elem</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">elem</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">msTransformOrigin</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span>
      <span class="p">&#125;,</span>
    <span class="p">&#125;;</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  jQuery functions          ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">animateTransformation</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span>
      <span class="nx">transformation</span><span class="p">,</span>
      <span class="nx">settings</span><span class="p">,</span>
      <span class="nx">animateEndCallback</span><span class="p">,</span>
      <span class="nx">animateStartedCallback</span><span class="p">,</span>
    <span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">settings</span> <span class="o">=</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nf">extend</span><span class="p">(&#123;&#125;,</span> <span class="nx">default_settings</span><span class="p">,</span> <span class="nx">settings</span><span class="p">);</span>

      <span class="kd">var</span> <span class="nx">useNativeAnim</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">.</span><span class="nx">webkit</span> <span class="o">&amp;&amp;</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">nativeanimation</span><span class="p">;</span>

      <span class="c1">// FIXME: what would be the best way to handle leftover animations?</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">endCallbackTimeout</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nf">clearTimeout</span><span class="p">(</span><span class="nx">endCallbackTimeout</span><span class="p">);</span>
        <span class="nx">endCallbackTimeout</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
      <span class="p">&#125;</span>

      <span class="k">if </span><span class="p">(</span><span class="nx">useNativeAnim</span> <span class="o">&amp;&amp;</span> <span class="nx">animateEndCallback</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">endCallbackTimeout</span> <span class="o">=</span> <span class="nf">setTimeout</span><span class="p">(</span><span class="nx">animateEndCallback</span><span class="p">,</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">duration</span><span class="p">);</span>
      <span class="p">&#125;</span>

      <span class="k">this</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
        <span class="kd">var</span> <span class="nx">$target</span> <span class="o">=</span> <span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span>

        <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">transformation</span><span class="p">)</span> <span class="nx">transformation</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">PureCSSMatrix</span><span class="p">();</span>

        <span class="kd">var</span> <span class="nx">current_affine</span> <span class="o">=</span> <span class="nf">constructAffineFixingRotation</span><span class="p">(</span><span class="nx">$target</span><span class="p">);</span>
        <span class="kd">var</span> <span class="nx">final_affine</span> <span class="o">=</span> <span class="nf">fixRotationToSameLap</span><span class="p">(</span>
          <span class="nx">current_affine</span><span class="p">,</span>
          <span class="nf">affineTransformDecompose</span><span class="p">(</span><span class="nx">transformation</span><span class="p">),</span>
        <span class="p">);</span>

        <span class="k">if </span><span class="p">(</span><span class="nx">useNativeAnim</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">$target</span><span class="p">.</span><span class="nf">css</span><span class="p">(</span>
            <span class="nf">constructZoomRootCssTransform</span><span class="p">(</span>
              <span class="nf">matrixCompose</span><span class="p">(</span><span class="nx">final_affine</span><span class="p">),</span>
              <span class="nx">settings</span><span class="p">.</span><span class="nx">duration</span><span class="p">,</span>
              <span class="nx">settings</span><span class="p">.</span><span class="nx">easing</span><span class="p">,</span>
            <span class="p">),</span>
          <span class="p">);</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">animateStartedCallback</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nf">animateStartedCallback</span><span class="p">();</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
          <span class="nf">animateTransition</span><span class="p">(</span>
            <span class="nx">$target</span><span class="p">,</span>
            <span class="nx">current_affine</span><span class="p">,</span>
            <span class="nx">final_affine</span><span class="p">,</span>
            <span class="nx">settings</span><span class="p">,</span>
            <span class="nx">animateEndCallback</span><span class="p">,</span>
            <span class="nx">animateStartedCallback</span><span class="p">,</span>
          <span class="p">);</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;);</span>
    <span class="p">&#125;;</span>

    <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">setTransformation</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">transformation</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">this</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
        <span class="kd">var</span> <span class="nx">$target</span> <span class="o">=</span> <span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span>
        <span class="kd">var</span> <span class="nx">current_affine</span> <span class="o">=</span> <span class="nf">constructAffineFixingRotation</span><span class="p">(</span><span class="nx">$target</span><span class="p">);</span>
        <span class="kd">var</span> <span class="nx">final_affine</span> <span class="o">=</span> <span class="nf">fixRotationToSameLap</span><span class="p">(</span>
          <span class="nx">current_affine</span><span class="p">,</span>
          <span class="nf">affineTransformDecompose</span><span class="p">(</span><span class="nx">transformation</span><span class="p">),</span>
        <span class="p">);</span>
        <span class="nx">$target</span><span class="p">.</span><span class="nf">css</span><span class="p">(</span><span class="nf">constructZoomRootCssTransform</span><span class="p">(</span><span class="nf">matrixCompose</span><span class="p">(</span><span class="nx">final_affine</span><span class="p">)));</span>
      <span class="p">&#125;);</span>
    <span class="p">&#125;;</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  Element positioning       ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="kd">function</span> <span class="nf">constructZoomRootCssTransform</span><span class="p">(</span><span class="nx">trans</span><span class="p">,</span> <span class="nx">duration</span><span class="p">,</span> <span class="nx">easing</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">propMap</span> <span class="o">=</span> <span class="p">&#123;&#125;;</span>

      <span class="nx">helpers</span><span class="p">.</span><span class="nf">forEachPrefix</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">prefix</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">propMap</span><span class="p">[</span><span class="nx">prefix</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">transform</span><span class="dl">"</span><span class="p">]</span> <span class="o">=</span> <span class="nx">trans</span><span class="p">;</span>
      <span class="p">&#125;,</span> <span class="kc">true</span><span class="p">);</span>

      <span class="k">if </span><span class="p">(</span><span class="nx">duration</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="kd">var</span> <span class="nx">transdur</span> <span class="o">=</span> <span class="nf">roundNumber</span><span class="p">(</span><span class="nx">duration</span> <span class="o">/</span> <span class="mi">1000</span><span class="p">,</span> <span class="mi">6</span><span class="p">)</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">s</span><span class="dl">"</span><span class="p">;</span>
        <span class="nx">propMap</span><span class="p">[</span><span class="dl">"</span><span class="s2">-webkit-transition-duration</span><span class="dl">"</span><span class="p">]</span> <span class="o">=</span> <span class="nx">transdur</span><span class="p">;</span>
        <span class="nx">propMap</span><span class="p">[</span><span class="dl">"</span><span class="s2">-o-transition-duration</span><span class="dl">"</span><span class="p">]</span> <span class="o">=</span> <span class="nx">transdur</span><span class="p">;</span>
        <span class="nx">propMap</span><span class="p">[</span><span class="dl">"</span><span class="s2">-moz-transition-duration</span><span class="dl">"</span><span class="p">]</span> <span class="o">=</span> <span class="nx">transdur</span><span class="p">;</span>
      <span class="p">&#125;</span>

      <span class="k">if </span><span class="p">(</span><span class="nx">easing</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="kd">var</span> <span class="nx">transtiming</span> <span class="o">=</span> <span class="nf">constructEasingCss</span><span class="p">(</span><span class="nx">easing</span><span class="p">);</span>
        <span class="nx">propMap</span><span class="p">[</span><span class="dl">"</span><span class="s2">-webkit-transition-timing-function</span><span class="dl">"</span><span class="p">]</span> <span class="o">=</span> <span class="nx">transtiming</span><span class="p">;</span>
        <span class="nx">propMap</span><span class="p">[</span><span class="dl">"</span><span class="s2">-o-transition-timing-function</span><span class="dl">"</span><span class="p">]</span> <span class="o">=</span> <span class="nx">transtiming</span><span class="p">;</span>
        <span class="nx">propMap</span><span class="p">[</span><span class="dl">"</span><span class="s2">-moz-transition-timing-function</span><span class="dl">"</span><span class="p">]</span> <span class="o">=</span> <span class="nx">transdur</span><span class="p">;</span>
      <span class="p">&#125;</span>

      <span class="k">return</span> <span class="nx">propMap</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  Non-native animation      ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="kd">function</span> <span class="nf">animateTransition</span><span class="p">(</span>
      <span class="nx">$target</span><span class="p">,</span>
      <span class="nx">st</span><span class="p">,</span>
      <span class="nx">et</span><span class="p">,</span>
      <span class="nx">settings</span><span class="p">,</span>
      <span class="nx">animateEndCallback</span><span class="p">,</span>
      <span class="nx">animateStartedCallback</span><span class="p">,</span>
    <span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">st</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">st</span> <span class="o">=</span> <span class="nf">affineTransformDecompose</span><span class="p">(</span><span class="k">new</span> <span class="nc">PureCSSMatrix</span><span class="p">());</span>
      <span class="p">&#125;</span>
      <span class="nx">animation_start_time</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">Date</span><span class="p">().</span><span class="nf">getTime</span><span class="p">();</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">animation_interval_timer</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nf">clearInterval</span><span class="p">(</span><span class="nx">animation_interval_timer</span><span class="p">);</span>
        <span class="nx">animation_interval_timer</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
      <span class="p">&#125;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">easing</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">settings</span><span class="p">.</span><span class="nx">easingfunction</span> <span class="o">=</span> <span class="nf">constructEasingFunction</span><span class="p">(</span>
          <span class="nx">settings</span><span class="p">.</span><span class="nx">easing</span><span class="p">,</span>
          <span class="nx">settings</span><span class="p">.</span><span class="nx">duration</span><span class="p">,</span>
        <span class="p">);</span>
      <span class="p">&#125;</span>

      <span class="c1">// first step</span>
      <span class="nf">animationStep</span><span class="p">(</span><span class="nx">$target</span><span class="p">,</span> <span class="nx">st</span><span class="p">,</span> <span class="nx">et</span><span class="p">,</span> <span class="nx">settings</span><span class="p">,</span> <span class="nx">animateEndCallback</span><span class="p">);</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">animateStartedCallback</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nf">animateStartedCallback</span><span class="p">();</span>
      <span class="p">&#125;</span>

      <span class="nx">animation_interval_timer</span> <span class="o">=</span> <span class="nf">setInterval</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
        <span class="nf">animationStep</span><span class="p">(</span><span class="nx">$target</span><span class="p">,</span> <span class="nx">st</span><span class="p">,</span> <span class="nx">et</span><span class="p">,</span> <span class="nx">settings</span><span class="p">,</span> <span class="nx">animateEndCallback</span><span class="p">);</span>
      <span class="p">&#125;,</span> <span class="mi">1</span><span class="p">);</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">animationStep</span><span class="p">(</span>
      <span class="nx">$target</span><span class="p">,</span>
      <span class="nx">affine_start</span><span class="p">,</span>
      <span class="nx">affine_end</span><span class="p">,</span>
      <span class="nx">settings</span><span class="p">,</span>
      <span class="nx">animateEndCallback</span><span class="p">,</span>
    <span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">current_time</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">Date</span><span class="p">().</span><span class="nf">getTime</span><span class="p">()</span> <span class="o">-</span> <span class="nx">animation_start_time</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">time_value</span><span class="p">;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">easingfunction</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">time_value</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nf">easingfunction</span><span class="p">(</span><span class="nx">current_time</span> <span class="o">/</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">duration</span><span class="p">);</span>
      <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
        <span class="nx">time_value</span> <span class="o">=</span> <span class="nx">current_time</span> <span class="o">/</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">duration</span><span class="p">;</span>
      <span class="p">&#125;</span>

      <span class="nx">$target</span><span class="p">.</span><span class="nf">css</span><span class="p">(</span>
        <span class="nf">constructZoomRootCssTransform</span><span class="p">(</span>
          <span class="nf">matrixCompose</span><span class="p">(</span>
            <span class="nf">interpolateArrays</span><span class="p">(</span><span class="nx">affine_start</span><span class="p">,</span> <span class="nx">affine_end</span><span class="p">,</span> <span class="nx">time_value</span><span class="p">),</span>
          <span class="p">),</span>
        <span class="p">),</span>
      <span class="p">);</span>

      <span class="k">if </span><span class="p">(</span><span class="nx">current_time</span> <span class="o">&gt;</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">duration</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nf">clearInterval</span><span class="p">(</span><span class="nx">animation_interval_timer</span><span class="p">);</span>
        <span class="nx">animation_interval_timer</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
        <span class="nx">time_value</span> <span class="o">=</span> <span class="mf">1.0</span><span class="p">;</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">animateEndCallback</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nf">animateEndCallback</span><span class="p">();</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;</span>

    <span class="cm">/* Based on pseudo-code in:
     * https://bugzilla.mozilla.org/show_bug.cgi?id=531344
     */</span>
    <span class="kd">function</span> <span class="nf">affineTransformDecompose</span><span class="p">(</span><span class="nx">matrix</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">m</span> <span class="o">=</span> <span class="nx">matrix</span><span class="p">.</span><span class="nf">elements</span><span class="p">();</span>
      <span class="kd">var</span> <span class="nx">a</span> <span class="o">=</span> <span class="nx">m</span><span class="p">.</span><span class="nx">a</span><span class="p">,</span>
        <span class="nx">b</span> <span class="o">=</span> <span class="nx">m</span><span class="p">.</span><span class="nx">b</span><span class="p">,</span>
        <span class="nx">c</span> <span class="o">=</span> <span class="nx">m</span><span class="p">.</span><span class="nx">c</span><span class="p">,</span>
        <span class="nx">d</span> <span class="o">=</span> <span class="nx">m</span><span class="p">.</span><span class="nx">d</span><span class="p">,</span>
        <span class="nx">e</span> <span class="o">=</span> <span class="nx">m</span><span class="p">.</span><span class="nx">e</span><span class="p">,</span>
        <span class="nx">f</span> <span class="o">=</span> <span class="nx">m</span><span class="p">.</span><span class="nx">f</span><span class="p">;</span>

      <span class="k">if </span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nf">abs</span><span class="p">(</span><span class="nx">a</span> <span class="o">*</span> <span class="nx">d</span> <span class="o">-</span> <span class="nx">b</span> <span class="o">*</span> <span class="nx">c</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mf">0.01</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">fail!</span><span class="dl">"</span><span class="p">);</span>
        <span class="k">return</span><span class="p">;</span>
      <span class="p">&#125;</span>

      <span class="kd">var</span> <span class="nx">tx</span> <span class="o">=</span> <span class="nx">e</span><span class="p">,</span>
        <span class="nx">ty</span> <span class="o">=</span> <span class="nx">f</span><span class="p">;</span>

      <span class="kd">var</span> <span class="nx">sx</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">sqrt</span><span class="p">(</span><span class="nx">a</span> <span class="o">*</span> <span class="nx">a</span> <span class="o">+</span> <span class="nx">b</span> <span class="o">*</span> <span class="nx">b</span><span class="p">);</span>
      <span class="nx">a</span> <span class="o">=</span> <span class="nx">a</span> <span class="o">/</span> <span class="nx">sx</span><span class="p">;</span>
      <span class="nx">b</span> <span class="o">=</span> <span class="nx">b</span> <span class="o">/</span> <span class="nx">sx</span><span class="p">;</span>

      <span class="kd">var</span> <span class="nx">k</span> <span class="o">=</span> <span class="nx">a</span> <span class="o">*</span> <span class="nx">c</span> <span class="o">+</span> <span class="nx">b</span> <span class="o">*</span> <span class="nx">d</span><span class="p">;</span>
      <span class="nx">c</span> <span class="o">-=</span> <span class="nx">a</span> <span class="o">*</span> <span class="nx">k</span><span class="p">;</span>
      <span class="nx">d</span> <span class="o">-=</span> <span class="nx">b</span> <span class="o">*</span> <span class="nx">k</span><span class="p">;</span>

      <span class="kd">var</span> <span class="nx">sy</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">sqrt</span><span class="p">(</span><span class="nx">c</span> <span class="o">*</span> <span class="nx">c</span> <span class="o">+</span> <span class="nx">d</span> <span class="o">*</span> <span class="nx">d</span><span class="p">);</span>
      <span class="nx">c</span> <span class="o">=</span> <span class="nx">c</span> <span class="o">/</span> <span class="nx">sy</span><span class="p">;</span>
      <span class="nx">d</span> <span class="o">=</span> <span class="nx">d</span> <span class="o">/</span> <span class="nx">sy</span><span class="p">;</span>
      <span class="nx">k</span> <span class="o">=</span> <span class="nx">k</span> <span class="o">/</span> <span class="nx">sy</span><span class="p">;</span>

      <span class="k">if</span> <span class="p">(</span><span class="nx">a</span> <span class="o">*</span> <span class="nx">d</span> <span class="o">-</span> <span class="nx">b</span> <span class="o">*</span> <span class="nx">c</span> <span class="o">&lt;</span> <span class="mf">0.0</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">a</span> <span class="o">=</span> <span class="o">-</span><span class="nx">a</span><span class="p">;</span>
        <span class="nx">b</span> <span class="o">=</span> <span class="o">-</span><span class="nx">b</span><span class="p">;</span>
        <span class="nx">c</span> <span class="o">=</span> <span class="o">-</span><span class="nx">c</span><span class="p">;</span>
        <span class="nx">d</span> <span class="o">=</span> <span class="o">-</span><span class="nx">d</span><span class="p">;</span>
        <span class="nx">sx</span> <span class="o">=</span> <span class="o">-</span><span class="nx">sx</span><span class="p">;</span>
        <span class="nx">sy</span> <span class="o">=</span> <span class="o">-</span><span class="nx">sy</span><span class="p">;</span>
      <span class="p">&#125;</span>

      <span class="kd">var</span> <span class="nx">r</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">atan2</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">a</span><span class="p">);</span>
      <span class="k">return</span> <span class="p">&#123;</span> <span class="na">tx</span><span class="p">:</span> <span class="nx">tx</span><span class="p">,</span> <span class="na">ty</span><span class="p">:</span> <span class="nx">ty</span><span class="p">,</span> <span class="na">r</span><span class="p">:</span> <span class="nx">r</span><span class="p">,</span> <span class="na">k</span><span class="p">:</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">atan</span><span class="p">(</span><span class="nx">k</span><span class="p">),</span> <span class="na">sx</span><span class="p">:</span> <span class="nx">sx</span><span class="p">,</span> <span class="na">sy</span><span class="p">:</span> <span class="nx">sy</span> <span class="p">&#125;;</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">matrixCompose</span><span class="p">(</span><span class="nx">ia</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">ret</span> <span class="o">=</span> <span class="dl">""</span><span class="p">;</span>
      <span class="cm">/* this probably made safari 5.1.1. + os 10.6.8 + non-unibody mac? */</span>
      <span class="c1">//ret += "translateZ(0) ";</span>
      <span class="nx">ret</span> <span class="o">+=</span>
        <span class="dl">"</span><span class="s2">translate(</span><span class="dl">"</span> <span class="o">+</span>
        <span class="nf">roundNumber</span><span class="p">(</span><span class="nx">ia</span><span class="p">.</span><span class="nx">tx</span><span class="p">,</span> <span class="mi">6</span><span class="p">)</span> <span class="o">+</span>
        <span class="dl">"</span><span class="s2">px,</span><span class="dl">"</span> <span class="o">+</span>
        <span class="nf">roundNumber</span><span class="p">(</span><span class="nx">ia</span><span class="p">.</span><span class="nx">ty</span><span class="p">,</span> <span class="mi">6</span><span class="p">)</span> <span class="o">+</span>
        <span class="dl">"</span><span class="s2">px) </span><span class="dl">"</span><span class="p">;</span>
      <span class="nx">ret</span> <span class="o">+=</span>
        <span class="dl">"</span><span class="s2">rotate(</span><span class="dl">"</span> <span class="o">+</span>
        <span class="nf">roundNumber</span><span class="p">(</span><span class="nx">ia</span><span class="p">.</span><span class="nx">r</span><span class="p">,</span> <span class="mi">6</span><span class="p">)</span> <span class="o">+</span>
        <span class="dl">"</span><span class="s2">rad) skewX(</span><span class="dl">"</span> <span class="o">+</span>
        <span class="nf">roundNumber</span><span class="p">(</span><span class="nx">ia</span><span class="p">.</span><span class="nx">k</span><span class="p">,</span> <span class="mi">6</span><span class="p">)</span> <span class="o">+</span>
        <span class="dl">"</span><span class="s2">rad) </span><span class="dl">"</span><span class="p">;</span>
      <span class="nx">ret</span> <span class="o">+=</span>
        <span class="dl">"</span><span class="s2">scale(</span><span class="dl">"</span> <span class="o">+</span> <span class="nf">roundNumber</span><span class="p">(</span><span class="nx">ia</span><span class="p">.</span><span class="nx">sx</span><span class="p">,</span> <span class="mi">6</span><span class="p">)</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">,</span><span class="dl">"</span> <span class="o">+</span> <span class="nf">roundNumber</span><span class="p">(</span><span class="nx">ia</span><span class="p">.</span><span class="nx">sy</span><span class="p">,</span> <span class="mi">6</span><span class="p">)</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">)</span><span class="dl">"</span><span class="p">;</span>
      <span class="k">return</span> <span class="nx">ret</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  Easing functions          ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="kd">function</span> <span class="nf">constructEasingCss</span><span class="p">(</span><span class="nx">input</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">input</span> <span class="k">instanceof</span> <span class="nb">Array</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">return </span><span class="p">(</span>
          <span class="dl">"</span><span class="s2">cubic-bezier(</span><span class="dl">"</span> <span class="o">+</span>
          <span class="nf">roundNumber</span><span class="p">(</span><span class="nx">input</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="mi">6</span><span class="p">)</span> <span class="o">+</span>
          <span class="dl">"</span><span class="s2">,</span><span class="dl">"</span> <span class="o">+</span>
          <span class="nf">roundNumber</span><span class="p">(</span><span class="nx">input</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span> <span class="mi">6</span><span class="p">)</span> <span class="o">+</span>
          <span class="dl">"</span><span class="s2">,</span><span class="dl">"</span> <span class="o">+</span>
          <span class="nf">roundNumber</span><span class="p">(</span><span class="nx">input</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span> <span class="mi">6</span><span class="p">)</span> <span class="o">+</span>
          <span class="dl">"</span><span class="s2">,</span><span class="dl">"</span> <span class="o">+</span>
          <span class="nf">roundNumber</span><span class="p">(</span><span class="nx">input</span><span class="p">[</span><span class="mi">3</span><span class="p">],</span> <span class="mi">6</span><span class="p">)</span> <span class="o">+</span>
          <span class="dl">"</span><span class="s2">)</span><span class="dl">"</span>
        <span class="p">);</span>
      <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
        <span class="k">return</span> <span class="nx">input</span><span class="p">;</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">constructEasingFunction</span><span class="p">(</span><span class="nx">input</span><span class="p">,</span> <span class="nx">dur</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">params</span> <span class="o">=</span> <span class="p">[];</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">input</span> <span class="k">instanceof</span> <span class="nb">Array</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">params</span> <span class="o">=</span> <span class="nx">input</span><span class="p">;</span>
      <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
        <span class="k">switch </span><span class="p">(</span><span class="nx">input</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">case</span> <span class="dl">"</span><span class="s2">linear</span><span class="dl">"</span><span class="p">:</span>
            <span class="nx">params</span> <span class="o">=</span> <span class="p">[</span><span class="mf">0.0</span><span class="p">,</span> <span class="mf">0.0</span><span class="p">,</span> <span class="mf">1.0</span><span class="p">,</span> <span class="mf">1.0</span><span class="p">];</span>
            <span class="k">break</span><span class="p">;</span>
          <span class="k">case</span> <span class="dl">"</span><span class="s2">ease</span><span class="dl">"</span><span class="p">:</span>
            <span class="nx">params</span> <span class="o">=</span> <span class="p">[</span><span class="mf">0.25</span><span class="p">,</span> <span class="mf">0.1</span><span class="p">,</span> <span class="mf">0.25</span><span class="p">,</span> <span class="mf">1.0</span><span class="p">];</span>
            <span class="k">break</span><span class="p">;</span>
          <span class="k">case</span> <span class="dl">"</span><span class="s2">ease-in</span><span class="dl">"</span><span class="p">:</span>
            <span class="nx">params</span> <span class="o">=</span> <span class="p">[</span><span class="mf">0.42</span><span class="p">,</span> <span class="mf">0.0</span><span class="p">,</span> <span class="mf">1.0</span><span class="p">,</span> <span class="mf">1.0</span><span class="p">];</span>
            <span class="k">break</span><span class="p">;</span>
          <span class="k">case</span> <span class="dl">"</span><span class="s2">ease-out</span><span class="dl">"</span><span class="p">:</span>
            <span class="nx">params</span> <span class="o">=</span> <span class="p">[</span><span class="mf">0.0</span><span class="p">,</span> <span class="mf">0.0</span><span class="p">,</span> <span class="mf">0.58</span><span class="p">,</span> <span class="mf">1.0</span><span class="p">];</span>
            <span class="k">break</span><span class="p">;</span>
          <span class="k">case</span> <span class="dl">"</span><span class="s2">ease-in-out</span><span class="dl">"</span><span class="p">:</span>
            <span class="nx">params</span> <span class="o">=</span> <span class="p">[</span><span class="mf">0.42</span><span class="p">,</span> <span class="mf">0.0</span><span class="p">,</span> <span class="mf">0.58</span><span class="p">,</span> <span class="mf">1.0</span><span class="p">];</span>
            <span class="k">break</span><span class="p">;</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span>

      <span class="kd">var</span> <span class="nx">easingFunc</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">return</span> <span class="nc">CubicBezierAtTime</span><span class="p">(</span>
          <span class="nx">t</span><span class="p">,</span>
          <span class="nx">params</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span>
          <span class="nx">params</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span>
          <span class="nx">params</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span>
          <span class="nx">params</span><span class="p">[</span><span class="mi">3</span><span class="p">],</span>
          <span class="nx">dur</span><span class="p">,</span>
        <span class="p">);</span>
      <span class="p">&#125;;</span>

      <span class="k">return</span> <span class="nx">easingFunc</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="c1">// From: http://www.netzgesta.de/dev/cubic-bezier-timing-function.html</span>
    <span class="kd">function</span> <span class="nf">CubicBezierAtPosition</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span> <span class="nx">P1x</span><span class="p">,</span> <span class="nx">P1y</span><span class="p">,</span> <span class="nx">P2x</span><span class="p">,</span> <span class="nx">P2y</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">x</span><span class="p">,</span>
        <span class="nx">y</span><span class="p">,</span>
        <span class="nx">k</span> <span class="o">=</span> <span class="p">(</span><span class="mi">1</span> <span class="o">-</span> <span class="nx">t</span><span class="p">)</span> <span class="o">*</span> <span class="p">(</span><span class="mi">1</span> <span class="o">-</span> <span class="nx">t</span><span class="p">)</span> <span class="o">*</span> <span class="p">(</span><span class="mi">1</span> <span class="o">-</span> <span class="nx">t</span><span class="p">);</span>
      <span class="nx">x</span> <span class="o">=</span> <span class="nx">P1x</span> <span class="o">*</span> <span class="p">(</span><span class="mi">3</span> <span class="o">*</span> <span class="nx">t</span> <span class="o">*</span> <span class="nx">t</span> <span class="o">*</span> <span class="p">(</span><span class="mi">1</span> <span class="o">-</span> <span class="nx">t</span><span class="p">))</span> <span class="o">+</span> <span class="nx">P2x</span> <span class="o">*</span> <span class="p">(</span><span class="mi">3</span> <span class="o">*</span> <span class="nx">t</span> <span class="o">*</span> <span class="p">(</span><span class="mi">1</span> <span class="o">-</span> <span class="nx">t</span><span class="p">)</span> <span class="o">*</span> <span class="p">(</span><span class="mi">1</span> <span class="o">-</span> <span class="nx">t</span><span class="p">))</span> <span class="o">+</span> <span class="nx">k</span><span class="p">;</span>
      <span class="nx">y</span> <span class="o">=</span> <span class="nx">P1y</span> <span class="o">*</span> <span class="p">(</span><span class="mi">3</span> <span class="o">*</span> <span class="nx">t</span> <span class="o">*</span> <span class="nx">t</span> <span class="o">*</span> <span class="p">(</span><span class="mi">1</span> <span class="o">-</span> <span class="nx">t</span><span class="p">))</span> <span class="o">+</span> <span class="nx">P2y</span> <span class="o">*</span> <span class="p">(</span><span class="mi">3</span> <span class="o">*</span> <span class="nx">t</span> <span class="o">*</span> <span class="p">(</span><span class="mi">1</span> <span class="o">-</span> <span class="nx">t</span><span class="p">)</span> <span class="o">*</span> <span class="p">(</span><span class="mi">1</span> <span class="o">-</span> <span class="nx">t</span><span class="p">))</span> <span class="o">+</span> <span class="nx">k</span><span class="p">;</span>
      <span class="k">return</span> <span class="p">&#123;</span> <span class="na">x</span><span class="p">:</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">abs</span><span class="p">(</span><span class="nx">x</span><span class="p">),</span> <span class="na">y</span><span class="p">:</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">abs</span><span class="p">(</span><span class="nx">y</span><span class="p">)</span> <span class="p">&#125;;</span>
    <span class="p">&#125;</span>

    <span class="c1">// From: http://www.netzgesta.de/dev/cubic-bezier-timing-function.html</span>
    <span class="c1">// 1:1 conversion to js from webkit source files</span>
    <span class="c1">// UnitBezier.h, WebCore_animation_AnimationBase.cpp</span>
    <span class="kd">function</span> <span class="nf">CubicBezierAtTime</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span> <span class="nx">p1x</span><span class="p">,</span> <span class="nx">p1y</span><span class="p">,</span> <span class="nx">p2x</span><span class="p">,</span> <span class="nx">p2y</span><span class="p">,</span> <span class="nx">duration</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">ax</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span>
        <span class="nx">bx</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span>
        <span class="nx">cx</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span>
        <span class="nx">ay</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span>
        <span class="nx">by</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span>
        <span class="nx">cy</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
      <span class="c1">// `ax t^3 + bx t^2 + cx t' expanded using Horner's rule.</span>
      <span class="kd">function</span> <span class="nf">sampleCurveX</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">return </span><span class="p">((</span><span class="nx">ax</span> <span class="o">*</span> <span class="nx">t</span> <span class="o">+</span> <span class="nx">bx</span><span class="p">)</span> <span class="o">*</span> <span class="nx">t</span> <span class="o">+</span> <span class="nx">cx</span><span class="p">)</span> <span class="o">*</span> <span class="nx">t</span><span class="p">;</span>
      <span class="p">&#125;</span>
      <span class="kd">function</span> <span class="nf">sampleCurveY</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">return </span><span class="p">((</span><span class="nx">ay</span> <span class="o">*</span> <span class="nx">t</span> <span class="o">+</span> <span class="nx">by</span><span class="p">)</span> <span class="o">*</span> <span class="nx">t</span> <span class="o">+</span> <span class="nx">cy</span><span class="p">)</span> <span class="o">*</span> <span class="nx">t</span><span class="p">;</span>
      <span class="p">&#125;</span>
      <span class="kd">function</span> <span class="nf">sampleCurveDerivativeX</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">return </span><span class="p">(</span><span class="mf">3.0</span> <span class="o">*</span> <span class="nx">ax</span> <span class="o">*</span> <span class="nx">t</span> <span class="o">+</span> <span class="mf">2.0</span> <span class="o">*</span> <span class="nx">bx</span><span class="p">)</span> <span class="o">*</span> <span class="nx">t</span> <span class="o">+</span> <span class="nx">cx</span><span class="p">;</span>
      <span class="p">&#125;</span>
      <span class="c1">// The epsilon value to pass given that the animation is going to run over |dur| seconds. The longer the</span>
      <span class="c1">// animation, the more precision is needed in the timing function result to avoid ugly discontinuities.</span>
      <span class="kd">function</span> <span class="nf">solveEpsilon</span><span class="p">(</span><span class="nx">duration</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">return</span> <span class="mf">1.0</span> <span class="o">/</span> <span class="p">(</span><span class="mf">200.0</span> <span class="o">*</span> <span class="nx">duration</span><span class="p">);</span>
      <span class="p">&#125;</span>
      <span class="kd">function</span> <span class="nf">solve</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">epsilon</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">return</span> <span class="nf">sampleCurveY</span><span class="p">(</span><span class="nf">solveCurveX</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">epsilon</span><span class="p">));</span>
      <span class="p">&#125;</span>
      <span class="c1">// Given an x value, find a parametric value it came from.</span>
      <span class="kd">function</span> <span class="nf">solveCurveX</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">epsilon</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="kd">var</span> <span class="nx">t0</span><span class="p">,</span> <span class="nx">t1</span><span class="p">,</span> <span class="nx">t2</span><span class="p">,</span> <span class="nx">x2</span><span class="p">,</span> <span class="nx">d2</span><span class="p">,</span> <span class="nx">i</span><span class="p">;</span>
        <span class="kd">function</span> <span class="nf">fabs</span><span class="p">(</span><span class="nx">n</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">n</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nx">n</span><span class="p">;</span>
          <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="mi">0</span> <span class="o">-</span> <span class="nx">n</span><span class="p">;</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;</span>
        <span class="c1">// First try a few iterations of Newton's method -- normally very fast.</span>
        <span class="k">for</span> <span class="p">(</span><span class="nx">t2</span> <span class="o">=</span> <span class="nx">x</span><span class="p">,</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="mi">8</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">x2</span> <span class="o">=</span> <span class="nf">sampleCurveX</span><span class="p">(</span><span class="nx">t2</span><span class="p">)</span> <span class="o">-</span> <span class="nx">x</span><span class="p">;</span>
          <span class="k">if </span><span class="p">(</span><span class="nf">fabs</span><span class="p">(</span><span class="nx">x2</span><span class="p">)</span> <span class="o">&lt;</span> <span class="nx">epsilon</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nx">t2</span><span class="p">;</span>
          <span class="p">&#125;</span>
          <span class="nx">d2</span> <span class="o">=</span> <span class="nf">sampleCurveDerivativeX</span><span class="p">(</span><span class="nx">t2</span><span class="p">);</span>
          <span class="k">if </span><span class="p">(</span><span class="nf">fabs</span><span class="p">(</span><span class="nx">d2</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mi">1</span><span class="nx">e</span><span class="o">-</span><span class="mi">6</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">break</span><span class="p">;</span>
          <span class="p">&#125;</span>
          <span class="nx">t2</span> <span class="o">=</span> <span class="nx">t2</span> <span class="o">-</span> <span class="nx">x2</span> <span class="o">/</span> <span class="nx">d2</span><span class="p">;</span>
        <span class="p">&#125;</span>
        <span class="c1">// Fall back to the bisection method for reliability.</span>
        <span class="nx">t0</span> <span class="o">=</span> <span class="mf">0.0</span><span class="p">;</span>
        <span class="nx">t1</span> <span class="o">=</span> <span class="mf">1.0</span><span class="p">;</span>
        <span class="nx">t2</span> <span class="o">=</span> <span class="nx">x</span><span class="p">;</span>
        <span class="k">if</span> <span class="p">(</span><span class="nx">t2</span> <span class="o">&lt;</span> <span class="nx">t0</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">return</span> <span class="nx">t0</span><span class="p">;</span>
        <span class="p">&#125;</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">t2</span> <span class="o">&gt;</span> <span class="nx">t1</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">return</span> <span class="nx">t1</span><span class="p">;</span>
        <span class="p">&#125;</span>
        <span class="k">while</span> <span class="p">(</span><span class="nx">t0</span> <span class="o">&lt;</span> <span class="nx">t1</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">x2</span> <span class="o">=</span> <span class="nf">sampleCurveX</span><span class="p">(</span><span class="nx">t2</span><span class="p">);</span>
          <span class="k">if </span><span class="p">(</span><span class="nf">fabs</span><span class="p">(</span><span class="nx">x2</span> <span class="o">-</span> <span class="nx">x</span><span class="p">)</span> <span class="o">&lt;</span> <span class="nx">epsilon</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nx">t2</span><span class="p">;</span>
          <span class="p">&#125;</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">x</span> <span class="o">&gt;</span> <span class="nx">x2</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">t0</span> <span class="o">=</span> <span class="nx">t2</span><span class="p">;</span>
          <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
            <span class="nx">t1</span> <span class="o">=</span> <span class="nx">t2</span><span class="p">;</span>
          <span class="p">&#125;</span>
          <span class="nx">t2</span> <span class="o">=</span> <span class="p">(</span><span class="nx">t1</span> <span class="o">-</span> <span class="nx">t0</span><span class="p">)</span> <span class="o">*</span> <span class="mf">0.5</span> <span class="o">+</span> <span class="nx">t0</span><span class="p">;</span>
        <span class="p">&#125;</span>
        <span class="k">return</span> <span class="nx">t2</span><span class="p">;</span> <span class="c1">// Failure.</span>
      <span class="p">&#125;</span>
      <span class="c1">// Calculate the polynomial coefficients, implicit first and last control points are (0,0) and (1,1).</span>
      <span class="nx">cx</span> <span class="o">=</span> <span class="mf">3.0</span> <span class="o">*</span> <span class="nx">p1x</span><span class="p">;</span>
      <span class="nx">bx</span> <span class="o">=</span> <span class="mf">3.0</span> <span class="o">*</span> <span class="p">(</span><span class="nx">p2x</span> <span class="o">-</span> <span class="nx">p1x</span><span class="p">)</span> <span class="o">-</span> <span class="nx">cx</span><span class="p">;</span>
      <span class="nx">ax</span> <span class="o">=</span> <span class="mf">1.0</span> <span class="o">-</span> <span class="nx">cx</span> <span class="o">-</span> <span class="nx">bx</span><span class="p">;</span>
      <span class="nx">cy</span> <span class="o">=</span> <span class="mf">3.0</span> <span class="o">*</span> <span class="nx">p1y</span><span class="p">;</span>
      <span class="nx">by</span> <span class="o">=</span> <span class="mf">3.0</span> <span class="o">*</span> <span class="p">(</span><span class="nx">p2y</span> <span class="o">-</span> <span class="nx">p1y</span><span class="p">)</span> <span class="o">-</span> <span class="nx">cy</span><span class="p">;</span>
      <span class="nx">ay</span> <span class="o">=</span> <span class="mf">1.0</span> <span class="o">-</span> <span class="nx">cy</span> <span class="o">-</span> <span class="nx">by</span><span class="p">;</span>
      <span class="c1">// Convert from input time to parametric value in curve, then from that to output time.</span>
      <span class="k">return</span> <span class="nf">solve</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span> <span class="nf">solveEpsilon</span><span class="p">(</span><span class="nx">duration</span><span class="p">));</span>
    <span class="p">&#125;</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  CSS Matrix helpers        ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="kd">function</span> <span class="nf">constructAffineFixingRotation</span><span class="p">(</span><span class="nx">elem</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">rawTrans</span> <span class="o">=</span> <span class="nx">helpers</span><span class="p">.</span><span class="nf">getElementTransform</span><span class="p">(</span><span class="nx">elem</span><span class="p">);</span>
      <span class="kd">var</span> <span class="nx">matr</span><span class="p">;</span>
      <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">rawTrans</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">matr</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">PureCSSMatrix</span><span class="p">();</span>
      <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
        <span class="nx">matr</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">PureCSSMatrix</span><span class="p">(</span><span class="nx">rawTrans</span><span class="p">);</span>
      <span class="p">&#125;</span>
      <span class="kd">var</span> <span class="nx">current_affine</span> <span class="o">=</span> <span class="nf">affineTransformDecompose</span><span class="p">(</span><span class="nx">matr</span><span class="p">);</span>
      <span class="nx">current_affine</span><span class="p">.</span><span class="nx">r</span> <span class="o">=</span> <span class="nf">getTotalRotation</span><span class="p">(</span><span class="nx">rawTrans</span><span class="p">);</span>
      <span class="k">return</span> <span class="nx">current_affine</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">getTotalRotation</span><span class="p">(</span><span class="nx">transString</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">totalRot</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">items</span><span class="p">;</span>
      <span class="k">while </span><span class="p">((</span><span class="nx">items</span> <span class="o">=</span> <span class="nx">regexp_trans_splitter</span><span class="p">.</span><span class="nf">exec</span><span class="p">(</span><span class="nx">transString</span><span class="p">))</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="kd">var</span> <span class="nx">action</span> <span class="o">=</span> <span class="nx">items</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nf">toLowerCase</span><span class="p">();</span>
        <span class="kd">var</span> <span class="nx">val</span> <span class="o">=</span> <span class="nx">items</span><span class="p">[</span><span class="mi">2</span><span class="p">].</span><span class="nf">split</span><span class="p">(</span><span class="dl">"</span><span class="s2">,</span><span class="dl">"</span><span class="p">);</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">action</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">matrix</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="kd">var</span> <span class="nx">recomposedTransItem</span> <span class="o">=</span> <span class="nx">action</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">(</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">items</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">)</span><span class="dl">"</span><span class="p">;</span>
          <span class="nx">totalRot</span> <span class="o">+=</span> <span class="nf">affineTransformDecompose</span><span class="p">(</span>
            <span class="k">new</span> <span class="nc">PureCSSMatrix</span><span class="p">(</span><span class="nx">recomposedTransItem</span><span class="p">),</span>
          <span class="p">).</span><span class="nx">r</span><span class="p">;</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">action</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">rotate</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="kd">var</span> <span class="nx">raw</span> <span class="o">=</span> <span class="nx">val</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span>
          <span class="kd">var</span> <span class="nx">rot</span> <span class="o">=</span> <span class="nf">parseFloat</span><span class="p">(</span><span class="nf">filterNumber</span><span class="p">(</span><span class="nx">raw</span><span class="p">));</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">raw</span><span class="p">.</span><span class="nf">match</span><span class="p">(</span><span class="nx">regexp_is_deg</span><span class="p">))</span> <span class="p">&#123;</span>
            <span class="nx">rot</span> <span class="o">=</span> <span class="p">(</span><span class="mi">2</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">*</span> <span class="nx">rot</span><span class="p">)</span> <span class="o">/</span> <span class="mf">360.0</span><span class="p">;</span>
          <span class="p">&#125;</span>
          <span class="nx">totalRot</span> <span class="o">+=</span> <span class="nx">rot</span><span class="p">;</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span>
      <span class="k">return</span> <span class="nx">totalRot</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="c1">// TODO: use modulo instead of loops</span>
    <span class="kd">function</span> <span class="nf">fixRotationToSameLap</span><span class="p">(</span><span class="nx">current_affine</span><span class="p">,</span> <span class="nx">final_affine</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nf">abs</span><span class="p">(</span><span class="nx">current_affine</span><span class="p">.</span><span class="nx">r</span> <span class="o">-</span> <span class="nx">final_affine</span><span class="p">.</span><span class="nx">r</span><span class="p">)</span> <span class="o">&gt;</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">if</span> <span class="p">(</span><span class="nx">final_affine</span><span class="p">.</span><span class="nx">r</span> <span class="o">&lt;</span> <span class="nx">current_affine</span><span class="p">.</span><span class="nx">r</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">while </span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nf">abs</span><span class="p">(</span><span class="nx">current_affine</span><span class="p">.</span><span class="nx">r</span> <span class="o">-</span> <span class="nx">final_affine</span><span class="p">.</span><span class="nx">r</span><span class="p">)</span> <span class="o">&gt;</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">final_affine</span><span class="p">.</span><span class="nx">r</span> <span class="o">+=</span> <span class="mi">2</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span><span class="p">;</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
          <span class="k">while </span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nf">abs</span><span class="p">(</span><span class="nx">current_affine</span><span class="p">.</span><span class="nx">r</span> <span class="o">-</span> <span class="nx">final_affine</span><span class="p">.</span><span class="nx">r</span><span class="p">)</span> <span class="o">&gt;</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">final_affine</span><span class="p">.</span><span class="nx">r</span> <span class="o">-=</span> <span class="mi">2</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span><span class="p">;</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span>
      <span class="k">return</span> <span class="nx">final_affine</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  Helpers                   ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="kd">function</span> <span class="nf">interpolateArrays</span><span class="p">(</span><span class="nx">st</span><span class="p">,</span> <span class="nx">et</span><span class="p">,</span> <span class="nx">pos</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">it</span> <span class="o">=</span> <span class="p">&#123;&#125;;</span>
      <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="k">in</span> <span class="nx">st</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">st</span><span class="p">.</span><span class="nf">hasOwnProperty</span><span class="p">(</span><span class="nx">i</span><span class="p">))</span> <span class="p">&#123;</span>
          <span class="nx">it</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">st</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">+</span> <span class="p">(</span><span class="nx">et</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">-</span> <span class="nx">st</span><span class="p">[</span><span class="nx">i</span><span class="p">])</span> <span class="o">*</span> <span class="nx">pos</span><span class="p">;</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span>
      <span class="k">return</span> <span class="nx">it</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">roundNumber</span><span class="p">(</span><span class="nx">number</span><span class="p">,</span> <span class="nx">precision</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">precision</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">abs</span><span class="p">(</span><span class="nf">parseInt</span><span class="p">(</span><span class="nx">precision</span><span class="p">,</span> <span class="mi">10</span><span class="p">))</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">coefficient</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">pow</span><span class="p">(</span><span class="mi">10</span><span class="p">,</span> <span class="nx">precision</span><span class="p">);</span>
      <span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">round</span><span class="p">(</span><span class="nx">number</span> <span class="o">*</span> <span class="nx">coefficient</span><span class="p">)</span> <span class="o">/</span> <span class="nx">coefficient</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">filterNumber</span><span class="p">(</span><span class="nx">x</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nx">x</span><span class="p">.</span><span class="nf">match</span><span class="p">(</span><span class="nx">regexp_filter_number</span><span class="p">);</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;)(</span><span class="nx">jQuery</span><span class="p">);</span>
  <span class="cm">/*
   * jquery.zoomooz-core.js, part of:
   * http://janne.aukia.com/zoomooz
   *
   * Version history:
   * 1.04 fixed examples, iphone tuneups, transform offset fix
   * 1.03 added closeclick, code structuring
   * 1.02 bug fix on endcallback resetting for native animation
   * 1.01 declarative syntax and fixes
   * 0.92 working scrolling
   * 0.91 simplifying code base and scrolling for non-body zoom roots
   * 0.90 fixing margin on first body child
   * 0.89 support for jquery 1.7
   * 0.88 fixed a bug with 90 deg rotations
   * 0.87 fixed a bug with settings and a couple of demos
   * 0.86 fixed a bug with non-body zoom root
   * 0.85 basic IE9 support
   * 0.81 basic support for scrolling
   * 0.80 refactored position code to a separate file
   * 0.72 fixed a bug with skew in Webkit
   * 0.71 fixed bugs with FF4
   * 0.70 support for non-body zoom root
   * 0.69 better settings management
   * 0.68 root element tuning
   * 0.67 adjustable zoom origin (not fully working yet)
   * 0.65 zoom origin to center
   * 0.63 basic Opera support
   * 0.61 refactored to use CSSMatrix classes
   * 0.51 initial public version
   *
   * LICENCE INFORMATION:
   *
   * Copyright (c) 2010 Janne Aukia (janne.aukia.com)
   * Dual licensed under the MIT (MIT-LICENSE.txt)
   * and GPL Version 2 (GPL-LICENSE.txt) licenses.
   *
   * LICENCE INFORMATION FOR DERIVED FUNCTIONS:
   *
   * Function computeTotalTransformation based
   * on jquery.fn.offset, copyright John Resig, 2010
   * (MIT and GPL Version 2).
   *
   */</span>

  <span class="cm">/*jslint sub: true */</span>

  <span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="dl">"</span><span class="s2">use strict</span><span class="dl">"</span><span class="p">;</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  Variables                 ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="kd">var</span> <span class="nx">helpers</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">zoomooz</span><span class="p">.</span><span class="nx">helpers</span><span class="p">;</span>

    <span class="kd">var</span> <span class="nx">animationSettings</span> <span class="o">=</span> <span class="p">[</span><span class="dl">"</span><span class="s2">duration</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">easing</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">nativeanimation</span><span class="dl">"</span><span class="p">];</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  Static setup              ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="nf">setupCssStyles</span><span class="p">();</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  jQuery functions          ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">$</span><span class="p">.</span><span class="nx">zoomooz</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">$</span><span class="p">.</span><span class="nx">zoomooz</span> <span class="o">=</span> <span class="p">&#123;&#125;;</span>
    <span class="p">&#125;</span>

    <span class="cm">/* this can be used for setting the default settings for zoomooz explicitly. */</span>
    <span class="nx">$</span><span class="p">.</span><span class="nx">zoomooz</span><span class="p">.</span><span class="nx">setup</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">settings</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">$</span><span class="p">.</span><span class="nx">zoomooz</span><span class="p">.</span><span class="nx">defaultSettings</span> <span class="o">=</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nf">extend</span><span class="p">(</span>
        <span class="nf">constructDefaultSettings</span><span class="p">(),</span>
        <span class="nx">settings</span><span class="p">,</span>
      <span class="p">);</span>
    <span class="p">&#125;;</span>

    <span class="cm">/* returns the zooming settings of a particular element. used by zoomTarget. */</span>
    <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">zoomSettings</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">settings</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">retValue</span><span class="p">;</span>
      <span class="k">this</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
        <span class="kd">var</span> <span class="nx">$elem</span> <span class="o">=</span> <span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span>
        <span class="nx">retValue</span> <span class="o">=</span> <span class="nf">setupElementSettings</span><span class="p">(</span><span class="nx">$elem</span><span class="p">,</span> <span class="nx">settings</span><span class="p">);</span>
      <span class="p">&#125;);</span>
      <span class="k">return</span> <span class="nx">retValue</span><span class="p">;</span>
    <span class="p">&#125;;</span>

    <span class="cm">/* the main zooming method. */</span>
    <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">zoomTo</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">settings</span><span class="p">,</span> <span class="nx">skipElementSettings</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">this</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
        <span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span>

        <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">skipElementSettings</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">settings</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nf">zoomSettings</span><span class="p">(</span><span class="nx">settings</span><span class="p">);</span>
        <span class="p">&#125;</span>

        <span class="nf">zoomTo</span><span class="p">(</span><span class="nx">$this</span><span class="p">,</span> <span class="nx">settings</span><span class="p">);</span>

        <span class="k">if </span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">debug</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">if </span><span class="p">(</span><span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#debug</span><span class="dl">"</span><span class="p">).</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nf">$</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">root</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="dl">'</span><span class="s1">&lt;div id="debug"&gt;&lt;div&gt;</span><span class="dl">'</span><span class="p">);</span>
          <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
            <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#debug</span><span class="dl">"</span><span class="p">).</span><span class="nf">html</span><span class="p">(</span><span class="dl">""</span><span class="p">);</span>
          <span class="p">&#125;</span>
          <span class="nf">showDebug</span><span class="p">(</span><span class="nx">$this</span><span class="p">,</span> <span class="nx">settings</span><span class="p">);</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
          <span class="k">if </span><span class="p">(</span><span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#debug</span><span class="dl">"</span><span class="p">).</span><span class="nx">length</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#debug</span><span class="dl">"</span><span class="p">).</span><span class="nf">html</span><span class="p">(</span><span class="dl">""</span><span class="p">);</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;);</span>

      <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
    <span class="p">&#125;;</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  Setup functions           ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="kd">function</span> <span class="nf">setupElementSettings</span><span class="p">(</span><span class="nx">$elem</span><span class="p">,</span> <span class="nx">baseSettings</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">settings</span> <span class="o">=</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nf">extend</span><span class="p">(&#123;&#125;,</span> <span class="nx">baseSettings</span><span class="p">);</span>

      <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">$</span><span class="p">.</span><span class="nx">zoomooz</span><span class="p">.</span><span class="nx">defaultSettings</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">$</span><span class="p">.</span><span class="nx">zoomooz</span><span class="p">.</span><span class="nf">setup</span><span class="p">();</span>
      <span class="p">&#125;</span>

      <span class="kd">var</span> <span class="nx">defaultSettings</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">zoomooz</span><span class="p">.</span><span class="nx">defaultSettings</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">elementSettings</span> <span class="o">=</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nf">extend</span><span class="p">(&#123;&#125;,</span> <span class="nx">settings</span><span class="p">);</span>

      <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">defaultSettings</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">defaultSettings</span><span class="p">.</span><span class="nf">hasOwnProperty</span><span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">elementSettings</span><span class="p">[</span><span class="nx">key</span><span class="p">])</span> <span class="p">&#123;</span>
          <span class="nx">elementSettings</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">$elem</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">key</span><span class="p">);</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span>

      <span class="c1">// FIXME: it would be better, that the animationSettings</span>
      <span class="c1">// would come from the jquery.zoomooz-anim file somehow</span>
      <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">animationSettings</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="kd">var</span> <span class="nx">key</span> <span class="o">=</span> <span class="nx">animationSettings</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span>
        <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">elementSettings</span><span class="p">[</span><span class="nx">key</span><span class="p">])</span> <span class="p">&#123;</span>
          <span class="nx">elementSettings</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">$elem</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">key</span><span class="p">);</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span>

      <span class="k">return</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nf">extend</span><span class="p">(&#123;&#125;,</span> <span class="nx">defaultSettings</span><span class="p">,</span> <span class="nx">elementSettings</span><span class="p">);</span>
    <span class="p">&#125;</span>

    <span class="cm">/* setup css styles in javascript to not need an extra zoomooz.css file for the user to load.
       having the styles here helps also at keeping the css requirements minimal. */</span>
    <span class="kd">function</span> <span class="nf">setupCssStyles</span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">style</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">style</span><span class="dl">"</span><span class="p">);</span>
      <span class="nx">style</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">text/css</span><span class="dl">"</span><span class="p">;</span>

      <span class="kd">var</span> <span class="nx">transformOrigin</span> <span class="o">=</span> <span class="dl">""</span><span class="p">;</span>
      <span class="nx">helpers</span><span class="p">.</span><span class="nf">forEachPrefix</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">prefix</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">transformOrigin</span> <span class="o">+=</span> <span class="nx">prefix</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">transform-origin: 0 0;</span><span class="dl">"</span><span class="p">;</span>
      <span class="p">&#125;,</span> <span class="kc">true</span><span class="p">);</span>

      <span class="c1">// FIXME: how to remove the html height requirement?</span>
      <span class="c1">// FIXME: how to remove the transform origin?</span>
      <span class="c1">// e# yank'd the noScroll css hack...</span>
      <span class="nx">style</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">html &#123;height:100%;&#125;</span><span class="dl">"</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">* &#123;</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">transformOrigin</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">&#125;</span><span class="dl">"</span><span class="p">;</span>

      <span class="nb">document</span><span class="p">.</span><span class="nf">getElementsByTagName</span><span class="p">(</span><span class="dl">"</span><span class="s2">head</span><span class="dl">"</span><span class="p">)[</span><span class="mi">0</span><span class="p">].</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">style</span><span class="p">);</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">constructDefaultSettings</span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="p">&#123;</span>
        <span class="na">targetsize</span><span class="p">:</span> <span class="mf">0.9</span><span class="p">,</span>
        <span class="na">scalemode</span><span class="p">:</span> <span class="dl">"</span><span class="s2">both</span><span class="dl">"</span><span class="p">,</span>
        <span class="na">root</span><span class="p">:</span> <span class="nf">$</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">),</span>
        <span class="na">debug</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
        <span class="na">animationendcallback</span><span class="p">:</span> <span class="kc">null</span><span class="p">,</span>
        <span class="na">closeclick</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
      <span class="p">&#125;;</span>
    <span class="p">&#125;</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  Main zoom function        ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="kd">function</span> <span class="nf">zoomTo</span><span class="p">(</span><span class="nx">elem</span><span class="p">,</span> <span class="nx">settings</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">scrollData</span> <span class="o">=</span> <span class="nf">handleScrolling</span><span class="p">(</span><span class="nx">elem</span><span class="p">,</span> <span class="nx">settings</span><span class="p">);</span>

      <span class="kd">var</span> <span class="nx">rootTransformation</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">animationendcallback</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>

      <span class="nf">setTransformOrigin</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">root</span><span class="p">);</span>

      <span class="c1">// computeTotalTransformation does not work correctly if the</span>
      <span class="c1">// element and the root are the same</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">elem</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">!==</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">root</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="p">&#123;</span>
        <span class="kd">var</span> <span class="nx">inv</span> <span class="o">=</span> <span class="nf">computeTotalTransformation</span><span class="p">(</span><span class="nx">elem</span><span class="p">,</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">root</span><span class="p">).</span><span class="nf">inverse</span><span class="p">();</span>
        <span class="nx">rootTransformation</span> <span class="o">=</span> <span class="nf">computeViewportTransformation</span><span class="p">(</span><span class="nx">elem</span><span class="p">,</span> <span class="nx">inv</span><span class="p">,</span> <span class="nx">settings</span><span class="p">);</span>

        <span class="k">if </span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">animationendcallback</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">animationendcallback</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="nx">settings</span><span class="p">.</span><span class="nx">animationendcallback</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nx">elem</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span>
          <span class="p">&#125;;</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
        <span class="nx">rootTransformation</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">PureCSSMatrix</span><span class="p">().</span><span class="nf">translate</span><span class="p">(</span>
          <span class="o">-</span><span class="nx">scrollData</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span>
          <span class="o">-</span><span class="nx">scrollData</span><span class="p">.</span><span class="nx">y</span><span class="p">,</span>
        <span class="p">);</span>
        <span class="nx">animationendcallback</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
          <span class="kd">var</span> <span class="nx">$root</span> <span class="o">=</span> <span class="nf">$</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">root</span><span class="p">);</span>
          <span class="kd">var</span> <span class="nx">$scroll</span> <span class="o">=</span> <span class="nx">scrollData</span><span class="p">.</span><span class="nx">elem</span><span class="p">;</span>

          <span class="nx">$scroll</span><span class="p">.</span><span class="nf">removeClass</span><span class="p">(</span><span class="dl">"</span><span class="s2">noScroll</span><span class="dl">"</span><span class="p">);</span>

          <span class="nx">$root</span><span class="p">.</span><span class="nf">setTransformation</span><span class="p">(</span><span class="k">new</span> <span class="nc">PureCSSMatrix</span><span class="p">());</span>
          <span class="nx">$root</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="dl">"</span><span class="s2">original-scroll</span><span class="dl">"</span><span class="p">,</span> <span class="kc">null</span><span class="p">);</span>

          <span class="nf">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nf">off</span><span class="p">(</span><span class="dl">"</span><span class="s2">touchmove</span><span class="dl">"</span><span class="p">);</span>

          <span class="c1">// this needs to be after the setTransformation and</span>
          <span class="c1">// done with window.scrollTo to not have iPhone repaints</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">$scroll</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">==</span> <span class="nb">document</span><span class="p">.</span><span class="nx">body</span> <span class="o">||</span> <span class="nx">$scroll</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">==</span> <span class="nb">window</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nb">window</span><span class="p">.</span><span class="nf">scrollTo</span><span class="p">(</span><span class="nx">scrollData</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="nx">scrollData</span><span class="p">.</span><span class="nx">y</span><span class="p">);</span>
          <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
            <span class="nx">$scroll</span><span class="p">.</span><span class="nf">scrollLeft</span><span class="p">(</span><span class="nx">scrollData</span><span class="p">.</span><span class="nx">x</span><span class="p">);</span>
            <span class="nx">$scroll</span><span class="p">.</span><span class="nf">scrollTop</span><span class="p">(</span><span class="nx">scrollData</span><span class="p">.</span><span class="nx">y</span><span class="p">);</span>
          <span class="p">&#125;</span>

          <span class="k">if </span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">animationendcallback</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">settings</span><span class="p">.</span><span class="nx">animationendcallback</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nx">elem</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;;</span>
      <span class="p">&#125;</span>

      <span class="kd">var</span> <span class="nx">animationstartedcallback</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">scrollData</span> <span class="o">&amp;&amp;</span> <span class="nx">scrollData</span><span class="p">.</span><span class="nx">animationstartedcallback</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">animationstartedcallback</span> <span class="o">=</span> <span class="nx">scrollData</span><span class="p">.</span><span class="nx">animationstartedcallback</span><span class="p">;</span>
      <span class="p">&#125;</span>

      <span class="nf">$</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">root</span><span class="p">).</span><span class="nf">animateTransformation</span><span class="p">(</span>
        <span class="nx">rootTransformation</span><span class="p">,</span>
        <span class="nx">settings</span><span class="p">,</span>
        <span class="nx">animationendcallback</span><span class="p">,</span>
        <span class="nx">animationstartedcallback</span><span class="p">,</span>
      <span class="p">);</span>
    <span class="p">&#125;</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  Handle scrolling          ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="kd">function</span> <span class="nf">handleScrolling</span><span class="p">(</span><span class="nx">elem</span><span class="p">,</span> <span class="nx">settings</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">$root</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">root</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">$scroll</span> <span class="o">=</span> <span class="nx">$root</span><span class="p">.</span><span class="nf">parent</span><span class="p">();</span>

      <span class="k">if </span><span class="p">(</span><span class="nx">elem</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="nx">$root</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="p">&#123;</span>
        <span class="kd">var</span> <span class="nx">scrollData</span> <span class="o">=</span> <span class="nx">$root</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="dl">"</span><span class="s2">original-scroll</span><span class="dl">"</span><span class="p">);</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">scrollData</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">return</span> <span class="nx">scrollData</span><span class="p">;</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
          <span class="k">return</span> <span class="p">&#123;</span> <span class="na">elem</span><span class="p">:</span> <span class="nx">$scroll</span><span class="p">,</span> <span class="na">x</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span> <span class="dl">"</span><span class="s2">y:</span><span class="dl">"</span><span class="p">:</span> <span class="mi">0</span> <span class="p">&#125;;</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">$root</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="dl">"</span><span class="s2">original-scroll</span><span class="dl">"</span><span class="p">))</span> <span class="p">&#123;</span>
        <span class="c1">// safari</span>
        <span class="kd">var</span> <span class="nx">scrollY</span> <span class="o">=</span> <span class="nx">$root</span><span class="p">.</span><span class="nf">scrollTop</span><span class="p">();</span>
        <span class="kd">var</span> <span class="nx">scrollX</span> <span class="o">=</span> <span class="nx">$root</span><span class="p">.</span><span class="nf">scrollLeft</span><span class="p">();</span>
        <span class="kd">var</span> <span class="nx">elem</span> <span class="o">=</span> <span class="nx">$root</span><span class="p">;</span>

        <span class="c1">// moz</span>
        <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">scrollY</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">scrollY</span> <span class="o">=</span> <span class="nx">$scroll</span><span class="p">.</span><span class="nf">scrollTop</span><span class="p">();</span>
          <span class="nx">scrollX</span> <span class="o">=</span> <span class="nx">$scroll</span><span class="p">.</span><span class="nf">scrollLeft</span><span class="p">();</span>
          <span class="nx">elem</span> <span class="o">=</span> <span class="nx">$scroll</span><span class="p">;</span>
        <span class="p">&#125;</span>

        <span class="kd">var</span> <span class="nx">scrollData</span> <span class="o">=</span> <span class="p">&#123;</span> <span class="na">elem</span><span class="p">:</span> <span class="nx">elem</span><span class="p">,</span> <span class="na">x</span><span class="p">:</span> <span class="nx">scrollX</span><span class="p">,</span> <span class="na">y</span><span class="p">:</span> <span class="nx">scrollY</span> <span class="p">&#125;;</span>
        <span class="nx">$root</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="dl">"</span><span class="s2">original-scroll</span><span class="dl">"</span><span class="p">,</span> <span class="nx">scrollData</span><span class="p">);</span>

        <span class="nf">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nf">on</span><span class="p">(</span><span class="dl">"</span><span class="s2">touchmove</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">e</span><span class="p">.</span><span class="nf">preventDefault</span><span class="p">();</span>
        <span class="p">&#125;);</span>

        <span class="kd">var</span> <span class="nx">transformStr</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">translate(-</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">scrollX</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">px,-</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">scrollY</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">px)</span><span class="dl">"</span><span class="p">;</span>
        <span class="nx">helpers</span><span class="p">.</span><span class="nf">forEachPrefix</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">prefix</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">$root</span><span class="p">.</span><span class="nf">css</span><span class="p">(</span><span class="nx">prefix</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">transform</span><span class="dl">"</span><span class="p">,</span> <span class="nx">transformStr</span><span class="p">);</span>
        <span class="p">&#125;);</span>

        <span class="nx">elem</span><span class="p">.</span><span class="nf">addClass</span><span class="p">(</span><span class="dl">"</span><span class="s2">noScroll</span><span class="dl">"</span><span class="p">);</span>

        <span class="nx">scrollData</span><span class="p">.</span><span class="nx">animationstartedcallback</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
          <span class="c1">// this needs to be after the setTransformation and</span>
          <span class="c1">// done with window.scrollTo to not have iPhone repaints</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">elem</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">==</span> <span class="nb">document</span><span class="p">.</span><span class="nx">body</span> <span class="o">||</span> <span class="nx">elem</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">==</span> <span class="nb">document</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nb">window</span><span class="p">.</span><span class="nf">scrollTo</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span>
          <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
            <span class="nx">elem</span><span class="p">.</span><span class="nf">scrollLeft</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span>
            <span class="nx">elem</span><span class="p">.</span><span class="nf">scrollTop</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;;</span>

        <span class="k">return</span> <span class="nx">scrollData</span><span class="p">;</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  Element positioning       ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="kd">function</span> <span class="nf">setTransformOrigin</span><span class="p">(</span><span class="nx">zoomParent</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">zoomViewport</span> <span class="o">=</span> <span class="nf">$</span><span class="p">(</span><span class="nx">zoomParent</span><span class="p">).</span><span class="nf">parent</span><span class="p">();</span>

      <span class="kd">var</span> <span class="nx">dw</span> <span class="o">=</span> <span class="nx">zoomViewport</span><span class="p">.</span><span class="nf">width</span><span class="p">();</span>
      <span class="kd">var</span> <span class="nx">dh</span> <span class="o">=</span> <span class="nx">zoomViewport</span><span class="p">.</span><span class="nf">height</span><span class="p">();</span>

      <span class="kd">var</span> <span class="nx">xrotorigin</span> <span class="o">=</span> <span class="nx">dw</span> <span class="o">/</span> <span class="mf">2.0</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">yrotorigin</span> <span class="o">=</span> <span class="nx">dh</span> <span class="o">/</span> <span class="mf">2.0</span><span class="p">;</span>

      <span class="kd">var</span> <span class="nx">offsetStr</span> <span class="o">=</span>
        <span class="nf">printFixedNumber</span><span class="p">(</span><span class="nx">xrotorigin</span><span class="p">)</span> <span class="o">+</span>
        <span class="dl">"</span><span class="s2">px </span><span class="dl">"</span> <span class="o">+</span>
        <span class="nf">printFixedNumber</span><span class="p">(</span><span class="nx">yrotorigin</span><span class="p">)</span> <span class="o">+</span>
        <span class="dl">"</span><span class="s2">px</span><span class="dl">"</span><span class="p">;</span>

      <span class="nx">helpers</span><span class="p">.</span><span class="nf">forEachPrefix</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">prefix</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">zoomParent</span><span class="p">.</span><span class="nf">css</span><span class="p">(</span><span class="nx">prefix</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">transform-origin</span><span class="dl">"</span><span class="p">,</span> <span class="nx">offsetStr</span><span class="p">);</span>
      <span class="p">&#125;);</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">computeViewportTransformation</span><span class="p">(</span><span class="nx">elem</span><span class="p">,</span> <span class="nx">endtrans</span><span class="p">,</span> <span class="nx">settings</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">zoomAmount</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">targetsize</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">zoomMode</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">scalemode</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">zoomParent</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">root</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">zoomViewport</span> <span class="o">=</span> <span class="nf">$</span><span class="p">(</span><span class="nx">zoomParent</span><span class="p">).</span><span class="nf">parent</span><span class="p">();</span>

      <span class="kd">var</span> <span class="nx">dw</span> <span class="o">=</span> <span class="nx">zoomViewport</span><span class="p">.</span><span class="nf">width</span><span class="p">();</span>
      <span class="kd">var</span> <span class="nx">dh</span> <span class="o">=</span> <span class="nx">zoomViewport</span><span class="p">.</span><span class="nf">height</span><span class="p">();</span>

      <span class="kd">var</span> <span class="nx">relw</span> <span class="o">=</span> <span class="nx">dw</span> <span class="o">/</span> <span class="nx">elem</span><span class="p">.</span><span class="nf">outerWidth</span><span class="p">();</span>
      <span class="kd">var</span> <span class="nx">relh</span> <span class="o">=</span> <span class="nx">dh</span> <span class="o">/</span> <span class="nx">elem</span><span class="p">.</span><span class="nf">outerHeight</span><span class="p">();</span>

      <span class="kd">var</span> <span class="nx">scale</span><span class="p">;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">zoomMode</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">width</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">scale</span> <span class="o">=</span> <span class="nx">zoomAmount</span> <span class="o">*</span> <span class="nx">relw</span><span class="p">;</span>
      <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">zoomMode</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">height</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">scale</span> <span class="o">=</span> <span class="nx">zoomAmount</span> <span class="o">*</span> <span class="nx">relh</span><span class="p">;</span>
      <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">zoomMode</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">both</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">scale</span> <span class="o">=</span> <span class="nx">zoomAmount</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">min</span><span class="p">(</span><span class="nx">relw</span><span class="p">,</span> <span class="nx">relh</span><span class="p">);</span>
      <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">zoomMode</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">scale</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">scale</span> <span class="o">=</span> <span class="nx">zoomAmount</span><span class="p">;</span>
      <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
        <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">wrong zoommode</span><span class="dl">"</span><span class="p">);</span>
        <span class="k">return</span><span class="p">;</span>
      <span class="p">&#125;</span>

      <span class="kd">var</span> <span class="nx">xoffset</span> <span class="o">=</span> <span class="p">(</span><span class="nx">dw</span> <span class="o">-</span> <span class="nx">elem</span><span class="p">.</span><span class="nf">outerWidth</span><span class="p">()</span> <span class="o">*</span> <span class="nx">scale</span><span class="p">)</span> <span class="o">/</span> <span class="mf">2.0</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">yoffset</span> <span class="o">=</span> <span class="p">(</span><span class="nx">dh</span> <span class="o">-</span> <span class="nx">elem</span><span class="p">.</span><span class="nf">outerHeight</span><span class="p">()</span> <span class="o">*</span> <span class="nx">scale</span><span class="p">)</span> <span class="o">/</span> <span class="mf">2.0</span><span class="p">;</span>

      <span class="kd">var</span> <span class="nx">xrotorigin</span> <span class="o">=</span> <span class="nx">dw</span> <span class="o">/</span> <span class="mf">2.0</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">yrotorigin</span> <span class="o">=</span> <span class="nx">dh</span> <span class="o">/</span> <span class="mf">2.0</span><span class="p">;</span>

      <span class="cm">/* fix for body margins, hope that this does not break anything .. */</span>
      <span class="cm">/* see also the part of the fix that is in computeTotalTransformation! */</span>
      <span class="kd">var</span> <span class="nx">xmarginfix</span> <span class="o">=</span> <span class="o">-</span><span class="nf">parseFloat</span><span class="p">(</span><span class="nx">zoomParent</span><span class="p">.</span><span class="nf">css</span><span class="p">(</span><span class="dl">"</span><span class="s2">margin-left</span><span class="dl">"</span><span class="p">))</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">ymarginfix</span> <span class="o">=</span> <span class="o">-</span><span class="nf">parseFloat</span><span class="p">(</span><span class="nx">zoomParent</span><span class="p">.</span><span class="nf">css</span><span class="p">(</span><span class="dl">"</span><span class="s2">margin-top</span><span class="dl">"</span><span class="p">))</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span>

      <span class="kd">var</span> <span class="nx">viewportTransformation</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">PureCSSMatrix</span><span class="p">()</span>
        <span class="p">.</span><span class="nf">translate</span><span class="p">(</span><span class="nx">xmarginfix</span><span class="p">,</span> <span class="nx">ymarginfix</span><span class="p">)</span>
        <span class="p">.</span><span class="nf">translate</span><span class="p">(</span><span class="o">-</span><span class="nx">xrotorigin</span><span class="p">,</span> <span class="o">-</span><span class="nx">yrotorigin</span><span class="p">)</span>
        <span class="p">.</span><span class="nf">translate</span><span class="p">(</span><span class="nx">xoffset</span><span class="p">,</span> <span class="nx">yoffset</span><span class="p">)</span>
        <span class="p">.</span><span class="nf">scale</span><span class="p">(</span><span class="nx">scale</span><span class="p">,</span> <span class="nx">scale</span><span class="p">)</span>
        <span class="p">.</span><span class="nf">multiply</span><span class="p">(</span><span class="nx">endtrans</span><span class="p">)</span>
        <span class="p">.</span><span class="nf">translate</span><span class="p">(</span><span class="nx">xrotorigin</span><span class="p">,</span> <span class="nx">yrotorigin</span><span class="p">);</span>

      <span class="k">return</span> <span class="nx">viewportTransformation</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  Debugging positioning     ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="kd">function</span> <span class="nf">calcPoint</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="p">[</span><span class="nx">e</span><span class="p">.</span><span class="nx">a</span> <span class="o">*</span> <span class="nx">x</span> <span class="o">+</span> <span class="nx">e</span><span class="p">.</span><span class="nx">c</span> <span class="o">*</span> <span class="nx">y</span> <span class="o">+</span> <span class="nx">e</span><span class="p">.</span><span class="nx">e</span><span class="p">,</span> <span class="nx">e</span><span class="p">.</span><span class="nx">b</span> <span class="o">*</span> <span class="nx">x</span> <span class="o">+</span> <span class="nx">e</span><span class="p">.</span><span class="nx">d</span> <span class="o">*</span> <span class="nx">y</span> <span class="o">+</span> <span class="nx">e</span><span class="p">.</span><span class="nx">f</span><span class="p">];</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">showDebug</span><span class="p">(</span><span class="nx">elem</span><span class="p">,</span> <span class="nx">settings</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">e</span> <span class="o">=</span> <span class="nf">computeTotalTransformation</span><span class="p">(</span><span class="nx">elem</span><span class="p">,</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">root</span><span class="p">).</span><span class="nf">elements</span><span class="p">();</span>
      <span class="nf">displayLabel</span><span class="p">(</span><span class="nf">calcPoint</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">));</span>
      <span class="nf">displayLabel</span><span class="p">(</span><span class="nf">calcPoint</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">elem</span><span class="p">.</span><span class="nf">outerHeight</span><span class="p">()));</span>
      <span class="nf">displayLabel</span><span class="p">(</span><span class="nf">calcPoint</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">elem</span><span class="p">.</span><span class="nf">outerWidth</span><span class="p">(),</span> <span class="nx">elem</span><span class="p">.</span><span class="nf">outerHeight</span><span class="p">()));</span>
      <span class="nf">displayLabel</span><span class="p">(</span><span class="nf">calcPoint</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">elem</span><span class="p">.</span><span class="nf">outerWidth</span><span class="p">(),</span> <span class="mi">0</span><span class="p">));</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">displayLabel</span><span class="p">(</span><span class="nx">pos</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">labelStyle</span> <span class="o">=</span>
        <span class="dl">"</span><span class="s2">width:4px;height:4px;background-color:red;position:absolute;margin-left:-2px;margin-top:-2px;</span><span class="dl">"</span><span class="p">;</span>
      <span class="nx">labelStyle</span> <span class="o">+=</span> <span class="dl">"</span><span class="s2">left:</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">pos</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">px;top:</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">pos</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">px;</span><span class="dl">"</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">label</span> <span class="o">=</span> <span class="dl">'</span><span class="s1">&lt;div class="debuglabel" style="</span><span class="dl">'</span> <span class="o">+</span> <span class="nx">labelStyle</span> <span class="o">+</span> <span class="dl">'</span><span class="s1">"&gt;&lt;/div&gt;</span><span class="dl">'</span><span class="p">;</span>
      <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#debug</span><span class="dl">"</span><span class="p">).</span><span class="nf">append</span><span class="p">(</span><span class="nx">label</span><span class="p">);</span>
    <span class="p">&#125;</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  Calculating element       ***//</span>
    <span class="c1">//***  total transformation      ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="cm">/* Based on:
     * jQuery.fn.offset
     */</span>
    <span class="kd">function</span> <span class="nf">computeTotalTransformation</span><span class="p">(</span><span class="nx">input</span><span class="p">,</span> <span class="nx">transformationRootElement</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">elem</span> <span class="o">=</span> <span class="nx">input</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span>
      <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">elem</span> <span class="o">||</span> <span class="o">!</span><span class="nx">elem</span><span class="p">.</span><span class="nx">ownerDocument</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">return</span> <span class="kc">null</span><span class="p">;</span>
      <span class="p">&#125;</span>

      <span class="kd">var</span> <span class="nx">totalTransformation</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">PureCSSMatrix</span><span class="p">();</span>

      <span class="kd">var</span> <span class="nx">trans</span><span class="p">;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">elem</span> <span class="o">===</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">ownerDocument</span><span class="p">.</span><span class="nx">body</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="kd">var</span> <span class="nx">bOffset</span> <span class="o">=</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">offset</span><span class="p">.</span><span class="nf">bodyOffset</span><span class="p">(</span><span class="nx">elem</span><span class="p">);</span>
        <span class="nx">trans</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">PureCSSMatrix</span><span class="p">();</span>
        <span class="nx">trans</span> <span class="o">=</span> <span class="nx">trans</span><span class="p">.</span><span class="nf">translate</span><span class="p">(</span><span class="nx">bOffset</span><span class="p">.</span><span class="nx">left</span><span class="p">,</span> <span class="nx">bOffset</span><span class="p">.</span><span class="nx">top</span><span class="p">);</span>
        <span class="nx">totalTransformation</span> <span class="o">=</span> <span class="nx">totalTransformation</span><span class="p">.</span><span class="nf">multiply</span><span class="p">(</span><span class="nx">trans</span><span class="p">);</span>
        <span class="k">return</span> <span class="nx">totalTransformation</span><span class="p">;</span>
      <span class="p">&#125;</span>

      <span class="kd">var</span> <span class="nx">support</span><span class="p">;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">jQuery</span><span class="p">.</span><span class="nx">offset</span><span class="p">.</span><span class="nx">initialize</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">jQuery</span><span class="p">.</span><span class="nx">offset</span><span class="p">.</span><span class="nf">initialize</span><span class="p">();</span>
        <span class="nx">support</span> <span class="o">=</span> <span class="p">&#123;</span>
          <span class="na">fixedPosition</span><span class="p">:</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">offset</span><span class="p">.</span><span class="nx">supportsFixedPosition</span><span class="p">,</span>
          <span class="na">doesNotAddBorder</span><span class="p">:</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">offset</span><span class="p">.</span><span class="nx">doesNotAddBorder</span><span class="p">,</span>
          <span class="na">doesAddBorderForTableAndCells</span><span class="p">:</span>
            <span class="nx">jQuery</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">doesAddBorderForTableAndCells</span><span class="p">,</span>
          <span class="na">subtractsBorderForOverflowNotVisible</span><span class="p">:</span>
            <span class="nx">jQuery</span><span class="p">.</span><span class="nx">offset</span><span class="p">.</span><span class="nx">subtractsBorderForOverflowNotVisible</span><span class="p">,</span>
        <span class="p">&#125;;</span>
      <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
        <span class="nx">support</span> <span class="o">=</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">support</span><span class="p">;</span>
      <span class="p">&#125;</span>

      <span class="kd">var</span> <span class="nx">offsetParent</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">offsetParent</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">doc</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">ownerDocument</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">computedStyle</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">docElem</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">body</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">body</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">root</span> <span class="o">=</span> <span class="nx">transformationRootElement</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span>
      <span class="kd">var</span> <span class="nx">defaultView</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">defaultView</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">prevComputedStyle</span><span class="p">;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">defaultView</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">prevComputedStyle</span> <span class="o">=</span> <span class="nx">defaultView</span><span class="p">.</span><span class="nf">getComputedStyle</span><span class="p">(</span><span class="nx">elem</span><span class="p">,</span> <span class="kc">null</span><span class="p">);</span>
      <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
        <span class="nx">prevComputedStyle</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">currentStyle</span><span class="p">;</span>
      <span class="p">&#125;</span>

      <span class="cm">/*
        function offsetParentInsideRoot($elem, $root) &#123;
            // FIXME:
            // wondering, should this be $root.closest()
            // or $root.parent().closest...
            var $viewport = $root.parent();
            var $offsetParent = $elem.offsetParent();
            return ($viewport[0]==$offsetParent[0]) || $viewport.closest($offsetParent).length==0;
        &#125;
        
        console.log("inside root",offsetParentInsideRoot(input, transformationRootElement));
        */</span>

      <span class="kd">var</span> <span class="nx">top</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">offsetTop</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">left</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">offsetLeft</span><span class="p">;</span>

      <span class="kd">var</span> <span class="nx">transformation</span> <span class="o">=</span> <span class="nf">constructTransformation</span><span class="p">().</span><span class="nf">translate</span><span class="p">(</span><span class="nx">left</span><span class="p">,</span> <span class="nx">top</span><span class="p">);</span>
      <span class="nx">transformation</span> <span class="o">=</span> <span class="nx">transformation</span><span class="p">.</span><span class="nf">multiply</span><span class="p">(</span><span class="nf">constructTransformation</span><span class="p">(</span><span class="nx">elem</span><span class="p">));</span>
      <span class="nx">totalTransformation</span> <span class="o">=</span> <span class="nx">transformation</span><span class="p">.</span><span class="nf">multiply</span><span class="p">(</span><span class="nx">totalTransformation</span><span class="p">);</span>
      <span class="c1">// loop from node down to root</span>
      <span class="k">while </span><span class="p">((</span><span class="nx">elem</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">elem</span> <span class="o">!==</span> <span class="nx">root</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">top</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
        <span class="nx">left</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">support</span><span class="p">.</span><span class="nx">fixedPosition</span> <span class="o">&amp;&amp;</span> <span class="nx">prevComputedStyle</span><span class="p">.</span><span class="nx">position</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">fixed</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">break</span><span class="p">;</span>
        <span class="p">&#125;</span>
        <span class="nx">computedStyle</span> <span class="o">=</span> <span class="nx">defaultView</span>
          <span class="p">?</span> <span class="nx">defaultView</span><span class="p">.</span><span class="nf">getComputedStyle</span><span class="p">(</span><span class="nx">elem</span><span class="p">,</span> <span class="kc">null</span><span class="p">)</span>
          <span class="p">:</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">currentStyle</span><span class="p">;</span>
        <span class="nx">top</span> <span class="o">-=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">;</span>
        <span class="nx">left</span> <span class="o">-=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">scrollLeft</span><span class="p">;</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">elem</span> <span class="o">===</span> <span class="nx">offsetParent</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">top</span> <span class="o">+=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">offsetTop</span><span class="p">;</span>
          <span class="nx">left</span> <span class="o">+=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">offsetLeft</span><span class="p">;</span>
          <span class="k">if </span><span class="p">(</span>
            <span class="nx">support</span><span class="p">.</span><span class="nx">doesNotAddBorder</span> <span class="o">&amp;&amp;</span>
            <span class="o">!</span><span class="p">(</span>
              <span class="nx">support</span><span class="p">.</span><span class="nx">doesAddBorderForTableAndCells</span> <span class="o">&amp;&amp;</span>
              <span class="sr">/^t</span><span class="se">(</span><span class="sr">able|d|h</span><span class="se">)</span><span class="sr">$/i</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">elem</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">)</span>
            <span class="p">)</span>
          <span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">top</span> <span class="o">+=</span> <span class="nf">parseFloat</span><span class="p">(</span><span class="nx">computedStyle</span><span class="p">.</span><span class="nx">borderTopWidth</span><span class="p">)</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span>
            <span class="nx">left</span> <span class="o">+=</span> <span class="nf">parseFloat</span><span class="p">(</span><span class="nx">computedStyle</span><span class="p">.</span><span class="nx">borderLeftWidth</span><span class="p">)</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span>
          <span class="p">&#125;</span>
          <span class="nx">offsetParent</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">offsetParent</span><span class="p">;</span>
        <span class="p">&#125;</span>
        <span class="k">if </span><span class="p">(</span>
          <span class="nx">support</span><span class="p">.</span><span class="nx">subtractsBorderForOverflowNotVisible</span> <span class="o">&amp;&amp;</span>
          <span class="nx">computedStyle</span><span class="p">.</span><span class="nx">overflow</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">visible</span><span class="dl">"</span>
        <span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">top</span> <span class="o">+=</span> <span class="nf">parseFloat</span><span class="p">(</span><span class="nx">computedStyle</span><span class="p">.</span><span class="nx">borderTopWidth</span><span class="p">)</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span>
          <span class="nx">left</span> <span class="o">+=</span> <span class="nf">parseFloat</span><span class="p">(</span><span class="nx">computedStyle</span><span class="p">.</span><span class="nx">borderLeftWidth</span><span class="p">)</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span>
        <span class="p">&#125;</span>
        <span class="nx">prevComputedStyle</span> <span class="o">=</span> <span class="nx">computedStyle</span><span class="p">;</span>

        <span class="k">if </span><span class="p">(</span><span class="nx">elem</span><span class="p">.</span><span class="nx">offsetParent</span> <span class="o">==</span> <span class="nx">root</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">top</span> <span class="o">-=</span> <span class="nf">parseFloat</span><span class="p">(</span><span class="nf">$</span><span class="p">(</span><span class="nx">elem</span><span class="p">.</span><span class="nx">offsetParent</span><span class="p">).</span><span class="nf">css</span><span class="p">(</span><span class="dl">"</span><span class="s2">margin-top</span><span class="dl">"</span><span class="p">))</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span>
          <span class="nx">left</span> <span class="o">-=</span> <span class="nf">parseFloat</span><span class="p">(</span><span class="nf">$</span><span class="p">(</span><span class="nx">elem</span><span class="p">.</span><span class="nx">offsetParent</span><span class="p">).</span><span class="nf">css</span><span class="p">(</span><span class="dl">"</span><span class="s2">margin-left</span><span class="dl">"</span><span class="p">))</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span>
        <span class="p">&#125;</span>

        <span class="nx">transformation</span> <span class="o">=</span> <span class="nf">constructTransformation</span><span class="p">().</span><span class="nf">translate</span><span class="p">(</span><span class="nx">left</span><span class="p">,</span> <span class="nx">top</span><span class="p">);</span>
        <span class="nx">transformation</span> <span class="o">=</span> <span class="nx">transformation</span><span class="p">.</span><span class="nf">multiply</span><span class="p">(</span><span class="nf">constructTransformation</span><span class="p">(</span><span class="nx">elem</span><span class="p">));</span>
        <span class="nx">totalTransformation</span> <span class="o">=</span> <span class="nx">transformation</span><span class="p">.</span><span class="nf">multiply</span><span class="p">(</span><span class="nx">totalTransformation</span><span class="p">);</span>
      <span class="p">&#125;</span>

      <span class="nx">top</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
      <span class="nx">left</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>

      <span class="c1">// fixme: should disable these for non-body roots?</span>
      <span class="k">if </span><span class="p">(</span>
        <span class="nx">prevComputedStyle</span><span class="p">.</span><span class="nx">position</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">relative</span><span class="dl">"</span> <span class="o">||</span>
        <span class="nx">prevComputedStyle</span><span class="p">.</span><span class="nx">position</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">static</span><span class="dl">"</span>
      <span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">top</span> <span class="o">+=</span> <span class="nx">body</span><span class="p">.</span><span class="nx">offsetTop</span><span class="p">;</span>
        <span class="nx">left</span> <span class="o">+=</span> <span class="nx">body</span><span class="p">.</span><span class="nx">offsetLeft</span><span class="p">;</span>
      <span class="p">&#125;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">support</span><span class="p">.</span><span class="nx">fixedPosition</span> <span class="o">&amp;&amp;</span> <span class="nx">prevComputedStyle</span><span class="p">.</span><span class="nx">position</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">fixed</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">top</span> <span class="o">+=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">max</span><span class="p">(</span><span class="nx">docElem</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">,</span> <span class="nx">body</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">);</span>
        <span class="nx">left</span> <span class="o">+=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">max</span><span class="p">(</span><span class="nx">docElem</span><span class="p">.</span><span class="nx">scrollLeft</span><span class="p">,</span> <span class="nx">body</span><span class="p">.</span><span class="nx">scrollLeft</span><span class="p">);</span>
      <span class="p">&#125;</span>

      <span class="kd">var</span> <span class="nx">itertrans</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">PureCSSMatrix</span><span class="p">().</span><span class="nf">translate</span><span class="p">(</span><span class="nx">left</span><span class="p">,</span> <span class="nx">top</span><span class="p">);</span>
      <span class="nx">totalTransformation</span> <span class="o">=</span> <span class="nx">totalTransformation</span><span class="p">.</span><span class="nf">multiply</span><span class="p">(</span><span class="nx">itertrans</span><span class="p">);</span>

      <span class="k">return</span> <span class="nx">totalTransformation</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  Helpers                   ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="kd">function</span> <span class="nf">printFixedNumber</span><span class="p">(</span><span class="nx">x</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nc">Number</span><span class="p">(</span><span class="nx">x</span><span class="p">).</span><span class="nf">toFixed</span><span class="p">(</span><span class="mi">6</span><span class="p">);</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">constructTransformation</span><span class="p">(</span><span class="nx">elem</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">rawTrans</span> <span class="o">=</span> <span class="nx">helpers</span><span class="p">.</span><span class="nf">getElementTransform</span><span class="p">(</span><span class="nx">elem</span><span class="p">);</span>
      <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">rawTrans</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">return</span> <span class="k">new</span> <span class="nc">PureCSSMatrix</span><span class="p">();</span>
      <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
        <span class="k">return</span> <span class="k">new</span> <span class="nc">PureCSSMatrix</span><span class="p">(</span><span class="nx">rawTrans</span><span class="p">);</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;)(</span><span class="nx">jQuery</span><span class="p">);</span>
  <span class="cm">/*
   * jquery.zoomooz-zoomtarget.js, part of:
   * http://janne.aukia.com/zoomooz
   *
   * LICENCE INFORMATION:
   *
   * Copyright (c) 2010 Janne Aukia (janne.aukia.com)
   * Dual licensed under the MIT (MIT-LICENSE.txt)
   * and GPL Version 2 (GPL-LICENSE.txt) licenses.
   *
   */</span>

  <span class="cm">/*jslint sub: true */</span>

  <span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="dl">"</span><span class="s2">use strict</span><span class="dl">"</span><span class="p">;</span>

    <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">$</span><span class="p">.</span><span class="nx">zoomooz</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">$</span><span class="p">.</span><span class="nx">zoomooz</span> <span class="o">=</span> <span class="p">&#123;&#125;;</span>
    <span class="p">&#125;</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  Variables                 ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="kd">var</span> <span class="nx">helpers</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">zoomooz</span><span class="p">.</span><span class="nx">helpers</span><span class="p">;</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  jQuery functions          ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">zoomTarget</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">baseSettings</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">this</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
        <span class="kd">var</span> <span class="nx">settings</span> <span class="o">=</span> <span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nf">zoomSettings</span><span class="p">(</span><span class="nx">baseSettings</span><span class="p">);</span>
        <span class="nf">setupClickHandler</span><span class="p">(</span><span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span> <span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span> <span class="nx">settings</span><span class="p">);</span>
      <span class="p">&#125;);</span>
    <span class="p">&#125;;</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  Helper functions          ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="kd">function</span> <span class="nf">setupClickHandler</span><span class="p">(</span><span class="nx">clickTarget</span><span class="p">,</span> <span class="nx">zoomTarget</span><span class="p">,</span> <span class="nx">settings</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">clickTarget</span><span class="p">.</span><span class="nf">addClass</span><span class="p">(</span><span class="dl">"</span><span class="s2">zoomTarget</span><span class="dl">"</span><span class="p">);</span>

      <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">settings</span><span class="p">.</span><span class="nx">animationendcallback</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">settings</span><span class="p">.</span><span class="nx">closeclick</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">settings</span><span class="p">.</span><span class="nx">animationendcallback</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.selectedZoomTarget</span><span class="dl">"</span><span class="p">).</span><span class="nf">removeClass</span><span class="p">(</span>
              <span class="dl">"</span><span class="s2">selectedZoomTarget zoomNotClickable</span><span class="dl">"</span><span class="p">,</span>
            <span class="p">);</span>
            <span class="nx">clickTarget</span><span class="p">.</span><span class="nf">addClass</span><span class="p">(</span><span class="dl">"</span><span class="s2">selectedZoomTarget zoomNotClickable</span><span class="dl">"</span><span class="p">);</span>
          <span class="p">&#125;;</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
          <span class="nx">settings</span><span class="p">.</span><span class="nx">animationendcallback</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.selectedZoomTarget</span><span class="dl">"</span><span class="p">).</span><span class="nf">removeClass</span><span class="p">(</span>
              <span class="dl">"</span><span class="s2">selectedZoomTarget zoomNotClickable</span><span class="dl">"</span><span class="p">,</span>
            <span class="p">);</span>
            <span class="nx">clickTarget</span><span class="p">.</span><span class="nf">addClass</span><span class="p">(</span><span class="dl">"</span><span class="s2">selectedZoomTarget</span><span class="dl">"</span><span class="p">);</span>
          <span class="p">&#125;;</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span>

      <span class="kd">var</span> <span class="nx">zoomContainer</span> <span class="o">=</span> <span class="nx">zoomTarget</span><span class="p">.</span><span class="nf">closest</span><span class="p">(</span><span class="dl">"</span><span class="s2">.zoomContainer</span><span class="dl">"</span><span class="p">);</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">zoomContainer</span><span class="p">.</span><span class="nx">length</span> <span class="o">!=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">settings</span><span class="p">.</span><span class="nx">root</span> <span class="o">=</span> <span class="nx">zoomContainer</span><span class="p">;</span>
      <span class="p">&#125;</span>

      <span class="kd">var</span> <span class="nx">$root</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">root</span><span class="p">;</span>

      <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">$root</span><span class="p">.</span><span class="nf">hasClass</span><span class="p">(</span><span class="dl">"</span><span class="s2">zoomTarget</span><span class="dl">"</span><span class="p">))</span> <span class="p">&#123;</span>
        <span class="kd">var</span> <span class="nx">rootSettings</span> <span class="o">=</span> <span class="nx">$root</span><span class="p">.</span><span class="nf">zoomSettings</span><span class="p">(&#123;&#125;);</span>

        <span class="nx">rootSettings</span><span class="p">.</span><span class="nx">animationendcallback</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
          <span class="kd">var</span> <span class="nx">$elem</span> <span class="o">=</span> <span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span>
          <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.selectedZoomTarget</span><span class="dl">"</span><span class="p">).</span><span class="nf">removeClass</span><span class="p">(</span>
            <span class="dl">"</span><span class="s2">selectedZoomTarget zoomNotClickable</span><span class="dl">"</span><span class="p">,</span>
          <span class="p">);</span>
          <span class="nx">$elem</span><span class="p">.</span><span class="nf">addClass</span><span class="p">(</span><span class="dl">"</span><span class="s2">selectedZoomTarget zoomNotClickable</span><span class="dl">"</span><span class="p">);</span>
          <span class="nx">$elem</span><span class="p">.</span><span class="nf">parent</span><span class="p">().</span><span class="nf">addClass</span><span class="p">(</span><span class="dl">"</span><span class="s2">selectedZoomTarget zoomNotClickable</span><span class="dl">"</span><span class="p">);</span>
        <span class="p">&#125;;</span>

        <span class="nf">setupClickHandler</span><span class="p">(</span><span class="nx">$root</span><span class="p">,</span> <span class="nx">$root</span><span class="p">,</span> <span class="nx">rootSettings</span><span class="p">);</span>
        <span class="nf">setupClickHandler</span><span class="p">(</span><span class="nx">$root</span><span class="p">.</span><span class="nf">parent</span><span class="p">(),</span> <span class="nx">$root</span><span class="p">,</span> <span class="nx">rootSettings</span><span class="p">);</span>

        <span class="c1">// FIXME: there could be many of these called simultaneously,</span>
        <span class="c1">// don't know what would happen then</span>
        <span class="nx">$root</span><span class="p">.</span><span class="nf">click</span><span class="p">();</span>
      <span class="p">&#125;</span>

      <span class="nx">clickTarget</span><span class="p">.</span><span class="nf">on</span><span class="p">(</span><span class="dl">"</span><span class="s2">click</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">evt</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="c1">// closeclick not available here...</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">closeclick</span> <span class="o">&amp;&amp;</span> <span class="nx">zoomTarget</span><span class="p">.</span><span class="nf">hasClass</span><span class="p">(</span><span class="dl">"</span><span class="s2">selectedZoomTarget</span><span class="dl">"</span><span class="p">))</span> <span class="p">&#123;</span>
          <span class="nx">settings</span><span class="p">.</span><span class="nx">root</span><span class="p">.</span><span class="nf">click</span><span class="p">();</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
          <span class="nx">zoomTarget</span><span class="p">.</span><span class="nf">zoomTo</span><span class="p">(</span><span class="nx">settings</span><span class="p">);</span>
        <span class="p">&#125;</span>
        <span class="nx">evt</span><span class="p">.</span><span class="nf">stopPropagation</span><span class="p">();</span>
      <span class="p">&#125;);</span>
    <span class="p">&#125;</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  Setup functions           ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="cm">/* setup css styles in javascript to not need an extra zoomooz.css file for the user to load.
       having the styles here helps also at keeping the css requirements minimal. */</span>
    <span class="kd">function</span> <span class="nf">setupCssStyles</span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">style</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">style</span><span class="dl">"</span><span class="p">);</span>
      <span class="nx">style</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">text/css</span><span class="dl">"</span><span class="p">;</span>

      <span class="kd">function</span> <span class="nf">setupSelectionCss</span><span class="p">(</span><span class="nx">enabled</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="kd">var</span> <span class="nx">selectionString</span> <span class="o">=</span>
          <span class="dl">"</span><span class="s2">-webkit-touch-callout: </span><span class="dl">"</span> <span class="o">+</span> <span class="p">(</span><span class="nx">enabled</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">default</span><span class="dl">"</span> <span class="p">:</span> <span class="dl">"</span><span class="s2">none</span><span class="dl">"</span><span class="p">)</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">;</span><span class="dl">"</span><span class="p">;</span>
        <span class="nx">helpers</span><span class="p">.</span><span class="nf">forEachPrefix</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">prefix</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">selectionString</span> <span class="o">+=</span>
            <span class="nx">prefix</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">user-select:</span><span class="dl">"</span> <span class="o">+</span> <span class="p">(</span><span class="nx">enabled</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">text</span><span class="dl">"</span> <span class="p">:</span> <span class="dl">"</span><span class="s2">none</span><span class="dl">"</span><span class="p">)</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">;</span><span class="dl">"</span><span class="p">;</span>
        <span class="p">&#125;,</span> <span class="kc">true</span><span class="p">);</span>
        <span class="k">return</span> <span class="nx">selectionString</span><span class="p">;</span>
      <span class="p">&#125;</span>

      <span class="c1">// FIXME: how to remove the html height requirement?</span>
      <span class="c1">// FIXME: how to remove the transform origin?</span>
      <span class="nx">style</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span>
        <span class="dl">"</span><span class="s2">.zoomTarget&#123;</span><span class="dl">"</span> <span class="o">+</span>
        <span class="nf">setupSelectionCss</span><span class="p">(</span><span class="kc">false</span><span class="p">)</span> <span class="o">+</span>
        <span class="dl">"</span><span class="s2">&#125;</span><span class="dl">"</span> <span class="o">+</span>
        <span class="dl">"</span><span class="s2">.zoomTarget:hover&#123;cursor:pointer!important;&#125;</span><span class="dl">"</span> <span class="o">+</span>
        <span class="dl">"</span><span class="s2">.zoomNotClickable&#123;</span><span class="dl">"</span> <span class="o">+</span>
        <span class="nf">setupSelectionCss</span><span class="p">(</span><span class="kc">true</span><span class="p">)</span> <span class="o">+</span>
        <span class="dl">"</span><span class="s2">&#125;</span><span class="dl">"</span> <span class="o">+</span>
        <span class="dl">"</span><span class="s2">.zoomNotClickable:hover&#123;cursor:auto!important;&#125;</span><span class="dl">"</span> <span class="o">+</span>
        <span class="cm">/* padding to fix margin collapse issues */</span>
        <span class="dl">"</span><span class="s2">.zoomContainer&#123;position:relative;padding:1px;margin:-1px;&#125;</span><span class="dl">"</span><span class="p">;</span>

      <span class="nb">document</span><span class="p">.</span><span class="nf">getElementsByTagName</span><span class="p">(</span><span class="dl">"</span><span class="s2">head</span><span class="dl">"</span><span class="p">)[</span><span class="mi">0</span><span class="p">].</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">style</span><span class="p">);</span>
    <span class="p">&#125;</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  Static setup              ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="nf">setupCssStyles</span><span class="p">();</span>

    <span class="c1">// make all elements with the zoomTarget class zooming</span>
    <span class="nf">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nf">ready</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="c1">// this needs to be after the "$.fn.zoomTarget" has been initialized</span>
      <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.zoomTarget</span><span class="dl">"</span><span class="p">).</span><span class="nf">zoomTarget</span><span class="p">();</span>
    <span class="p">&#125;);</span>
  <span class="p">&#125;)(</span><span class="nx">jQuery</span><span class="p">);</span>

  <span class="cm">/*
   * jquery.zoomooz-container.js, part of:
   * http://janne.aukia.com/zoomooz
   *
   * LICENCE INFORMATION:
   *
   * Copyright (c) 2010 Janne Aukia (janne.aukia.com)
   * Dual licensed under the MIT (MIT-LICENSE.txt)
   * and GPL Version 2 (GPL-LICENSE.txt) licenses.
   *
   */</span>

  <span class="cm">/*jslint sub: true */</span>

  <span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="dl">"</span><span class="s2">use strict</span><span class="dl">"</span><span class="p">;</span>

    <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">$</span><span class="p">.</span><span class="nx">zoomooz</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">$</span><span class="p">.</span><span class="nx">zoomooz</span> <span class="o">=</span> <span class="p">&#123;&#125;;</span>
    <span class="p">&#125;</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  Variables                 ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="c1">//var helpers = $.zoomooz.helpers;</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  jQuery functions          ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">zoomContainer</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">settings</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="c1">// add next and previous calls to the canvas</span>
      <span class="c1">// (auto detect next and previous buttons)</span>
    <span class="p">&#125;;</span>

    <span class="c1">//**********************************//</span>
    <span class="c1">//***  Static setup              ***//</span>
    <span class="c1">//**********************************//</span>

    <span class="c1">// FIXME: move zoomContainer styling here?</span>
    <span class="c1">//setupCssStyles();</span>

    <span class="c1">// make all elements with the zoomContainer class zooming containers</span>
    <span class="nf">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nf">ready</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="c1">// this needs to be after the "$.fn.zoomContainer" has been initialized</span>
      <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.zoomContainer</span><span class="dl">"</span><span class="p">).</span><span class="nf">zoomContainer</span><span class="p">();</span>
    <span class="p">&#125;);</span>
  <span class="p">&#125;)(</span><span class="nx">jQuery</span><span class="p">);</span>

  <span class="c1">// Everything but the relevant parts stripped out by Janne Aukia</span>
  <span class="c1">// for Zoomooz on April 4 2012 by using jscoverage coverage analysis tool.</span>

  <span class="c1">// === Sylvester ===</span>
  <span class="c1">// Vector and Matrix mathematics modules for JavaScript</span>
  <span class="c1">// Copyright (c) 2007 James Coglan</span>
  <span class="c1">//</span>
  <span class="c1">// Permission is hereby granted, free of charge, to any person obtaining</span>
  <span class="c1">// a copy of this software and associated documentation files (the "Software"),</span>
  <span class="c1">// to deal in the Software without restriction, including without limitation</span>
  <span class="c1">// the rights to use, copy, modify, merge, publish, distribute, sublicense,</span>
  <span class="c1">// and/or sell copies of the Software, and to permit persons to whom the</span>
  <span class="c1">// Software is furnished to do so, subject to the following conditions:</span>
  <span class="c1">//</span>
  <span class="c1">// The above copyright notice and this permission notice shall be included</span>
  <span class="c1">// in all copies or substantial portions of the Software.</span>
  <span class="c1">//</span>
  <span class="c1">// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS</span>
  <span class="c1">// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,</span>
  <span class="c1">// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL</span>
  <span class="c1">// THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER</span>
  <span class="c1">// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING</span>
  <span class="c1">// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER</span>
  <span class="c1">// DEALINGS IN THE SOFTWARE.</span>

  <span class="kd">var</span> <span class="nx">Sylvester</span> <span class="o">=</span> <span class="p">&#123;</span>
    <span class="na">version</span><span class="p">:</span> <span class="dl">"</span><span class="s2">0.1.3</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">precision</span><span class="p">:</span> <span class="mi">1</span><span class="nx">e</span><span class="o">-</span><span class="mi">6</span><span class="p">,</span>
  <span class="p">&#125;;</span>

  <span class="kd">function</span> <span class="nf">Matrix</span><span class="p">()</span> <span class="p">&#123;&#125;</span>
  <span class="nx">Matrix</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">&#123;</span>
    <span class="c1">// Returns a copy of the matrix</span>
    <span class="na">dup</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nx">Matrix</span><span class="p">.</span><span class="nf">create</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">elements</span><span class="p">);</span>
    <span class="p">&#125;,</span>

    <span class="c1">// Maps the matrix to another matrix (of the same dimensions) according to the given function</span>
    <span class="cm">/*map: function(fn) &#123;
    var els = [], ni = this.elements.length, ki = ni, i, nj, kj = this.elements[0].length, j;
    do &#123; i = ki - ni;
      nj = kj;
      els[i] = [];
      do &#123; j = kj - nj;
        els[i][j] = fn(this.elements[i][j], i + 1, j + 1);
      &#125; while (--nj);
    &#125; while (--ni);
    return Matrix.create(els);
  &#125;,*/</span>

    <span class="c1">// Returns true iff the matrix can multiply the argument from the left</span>
    <span class="na">canMultiplyFromLeft</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">matrix</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">M</span> <span class="o">=</span> <span class="nx">matrix</span><span class="p">.</span><span class="nx">elements</span> <span class="o">||</span> <span class="nx">matrix</span><span class="p">;</span>
      <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">M</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">undefined</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">M</span> <span class="o">=</span> <span class="nx">Matrix</span><span class="p">.</span><span class="nf">create</span><span class="p">(</span><span class="nx">M</span><span class="p">).</span><span class="nx">elements</span><span class="p">;</span>
      <span class="p">&#125;</span>
      <span class="c1">// this.columns should equal matrix.rows</span>
      <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span> <span class="o">==</span> <span class="nx">M</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>
    <span class="p">&#125;,</span>

    <span class="c1">// Returns the result of multiplying the matrix from the right by the argument.</span>
    <span class="c1">// If the argument is a scalar then just multiply all the elements. If the argument is</span>
    <span class="c1">// a vector, a vector is returned, which saves you having to remember calling</span>
    <span class="c1">// col(1) on the result.</span>
    <span class="na">multiply</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">matrix</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="cm">/*if (!matrix.elements) &#123;
      return this.map(function(x) &#123; return x * matrix; &#125;);
    &#125;*/</span>
      <span class="kd">var</span> <span class="nx">returnVector</span> <span class="o">=</span> <span class="nx">matrix</span><span class="p">.</span><span class="nx">modulus</span> <span class="p">?</span> <span class="kc">true</span> <span class="p">:</span> <span class="kc">false</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">M</span> <span class="o">=</span> <span class="nx">matrix</span><span class="p">.</span><span class="nx">elements</span> <span class="o">||</span> <span class="nx">matrix</span><span class="p">;</span>
      <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">M</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">undefined</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">M</span> <span class="o">=</span> <span class="nx">Matrix</span><span class="p">.</span><span class="nf">create</span><span class="p">(</span><span class="nx">M</span><span class="p">).</span><span class="nx">elements</span><span class="p">;</span>
      <span class="p">&#125;</span>
      <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nf">canMultiplyFromLeft</span><span class="p">(</span><span class="nx">M</span><span class="p">))</span> <span class="p">&#123;</span>
        <span class="k">return</span> <span class="kc">null</span><span class="p">;</span>
      <span class="p">&#125;</span>
      <span class="kd">var</span> <span class="nx">ni</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">elements</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span>
        <span class="nx">ki</span> <span class="o">=</span> <span class="nx">ni</span><span class="p">,</span>
        <span class="nx">i</span><span class="p">,</span>
        <span class="nx">nj</span><span class="p">,</span>
        <span class="nx">kj</span> <span class="o">=</span> <span class="nx">M</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">,</span>
        <span class="nx">j</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">cols</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">,</span>
        <span class="nx">elements</span> <span class="o">=</span> <span class="p">[],</span>
        <span class="nx">sum</span><span class="p">,</span>
        <span class="nx">nc</span><span class="p">,</span>
        <span class="nx">c</span><span class="p">;</span>
      <span class="k">do</span> <span class="p">&#123;</span>
        <span class="nx">i</span> <span class="o">=</span> <span class="nx">ki</span> <span class="o">-</span> <span class="nx">ni</span><span class="p">;</span>
        <span class="nx">elements</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="p">[];</span>
        <span class="nx">nj</span> <span class="o">=</span> <span class="nx">kj</span><span class="p">;</span>
        <span class="k">do</span> <span class="p">&#123;</span>
          <span class="nx">j</span> <span class="o">=</span> <span class="nx">kj</span> <span class="o">-</span> <span class="nx">nj</span><span class="p">;</span>
          <span class="nx">sum</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
          <span class="nx">nc</span> <span class="o">=</span> <span class="nx">cols</span><span class="p">;</span>
          <span class="k">do</span> <span class="p">&#123;</span>
            <span class="nx">c</span> <span class="o">=</span> <span class="nx">cols</span> <span class="o">-</span> <span class="nx">nc</span><span class="p">;</span>
            <span class="nx">sum</span> <span class="o">+=</span> <span class="k">this</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">c</span><span class="p">]</span> <span class="o">*</span> <span class="nx">M</span><span class="p">[</span><span class="nx">c</span><span class="p">][</span><span class="nx">j</span><span class="p">];</span>
          <span class="p">&#125;</span> <span class="k">while </span><span class="p">(</span><span class="o">--</span><span class="nx">nc</span><span class="p">);</span>
          <span class="nx">elements</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">j</span><span class="p">]</span> <span class="o">=</span> <span class="nx">sum</span><span class="p">;</span>
        <span class="p">&#125;</span> <span class="k">while </span><span class="p">(</span><span class="o">--</span><span class="nx">nj</span><span class="p">);</span>
      <span class="p">&#125;</span> <span class="k">while </span><span class="p">(</span><span class="o">--</span><span class="nx">ni</span><span class="p">);</span>
      <span class="kd">var</span> <span class="nx">M</span> <span class="o">=</span> <span class="nx">Matrix</span><span class="p">.</span><span class="nf">create</span><span class="p">(</span><span class="nx">elements</span><span class="p">);</span>
      <span class="k">return</span> <span class="nx">returnVector</span> <span class="p">?</span> <span class="nx">M</span><span class="p">.</span><span class="nf">col</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span> <span class="p">:</span> <span class="nx">M</span><span class="p">;</span>
    <span class="p">&#125;,</span>

    <span class="c1">// Returns true iff the matrix is square</span>
    <span class="na">isSquare</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">elements</span><span class="p">.</span><span class="nx">length</span> <span class="o">==</span> <span class="k">this</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">;</span>
    <span class="p">&#125;,</span>

    <span class="c1">// Make the matrix upper (right) triangular by Gaussian elimination.</span>
    <span class="c1">// This method only adds multiples of rows to other rows. No rows are</span>
    <span class="c1">// scaled up or switched, and the determinant is preserved.</span>
    <span class="na">toRightTriangular</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">M</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nf">dup</span><span class="p">(),</span>
        <span class="nx">els</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">n</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">elements</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span>
        <span class="nx">k</span> <span class="o">=</span> <span class="nx">n</span><span class="p">,</span>
        <span class="nx">i</span><span class="p">,</span>
        <span class="nx">np</span><span class="p">,</span>
        <span class="nx">kp</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">,</span>
        <span class="nx">p</span><span class="p">;</span>
      <span class="k">do</span> <span class="p">&#123;</span>
        <span class="nx">i</span> <span class="o">=</span> <span class="nx">k</span> <span class="o">-</span> <span class="nx">n</span><span class="p">;</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">i</span><span class="p">]</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">for</span> <span class="p">(</span><span class="nx">j</span> <span class="o">=</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">k</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="nx">i</span><span class="p">]</span> <span class="o">!=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">els</span> <span class="o">=</span> <span class="p">[];</span>
              <span class="nx">np</span> <span class="o">=</span> <span class="nx">kp</span><span class="p">;</span>
              <span class="k">do</span> <span class="p">&#123;</span>
                <span class="nx">p</span> <span class="o">=</span> <span class="nx">kp</span> <span class="o">-</span> <span class="nx">np</span><span class="p">;</span>
                <span class="nx">els</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">p</span><span class="p">]</span> <span class="o">+</span> <span class="nx">M</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="nx">p</span><span class="p">]);</span>
              <span class="p">&#125;</span> <span class="k">while </span><span class="p">(</span><span class="o">--</span><span class="nx">np</span><span class="p">);</span>
              <span class="nx">M</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">els</span><span class="p">;</span>
              <span class="k">break</span><span class="p">;</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">i</span><span class="p">]</span> <span class="o">!=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">for</span> <span class="p">(</span><span class="nx">j</span> <span class="o">=</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">k</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">multiplier</span> <span class="o">=</span> <span class="nx">M</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="nx">i</span><span class="p">]</span> <span class="o">/</span> <span class="nx">M</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">i</span><span class="p">];</span>
            <span class="nx">els</span> <span class="o">=</span> <span class="p">[];</span>
            <span class="nx">np</span> <span class="o">=</span> <span class="nx">kp</span><span class="p">;</span>
            <span class="k">do</span> <span class="p">&#123;</span>
              <span class="nx">p</span> <span class="o">=</span> <span class="nx">kp</span> <span class="o">-</span> <span class="nx">np</span><span class="p">;</span>
              <span class="c1">// Elements with column numbers up to an including the number</span>
              <span class="c1">// of the row that we're subtracting can safely be set straight to</span>
              <span class="c1">// zero, since that's the point of this routine and it avoids having</span>
              <span class="c1">// to loop over and correct rounding errors later</span>
              <span class="nx">els</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span>
                <span class="nx">p</span> <span class="o">&lt;=</span> <span class="nx">i</span> <span class="p">?</span> <span class="mi">0</span> <span class="p">:</span> <span class="nx">M</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="nx">p</span><span class="p">]</span> <span class="o">-</span> <span class="nx">M</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">p</span><span class="p">]</span> <span class="o">*</span> <span class="nx">multiplier</span><span class="p">,</span>
              <span class="p">);</span>
            <span class="p">&#125;</span> <span class="k">while </span><span class="p">(</span><span class="o">--</span><span class="nx">np</span><span class="p">);</span>
            <span class="nx">M</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="nx">j</span><span class="p">]</span> <span class="o">=</span> <span class="nx">els</span><span class="p">;</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span> <span class="k">while </span><span class="p">(</span><span class="o">--</span><span class="nx">n</span><span class="p">);</span>
      <span class="k">return</span> <span class="nx">M</span><span class="p">;</span>
    <span class="p">&#125;,</span>

    <span class="c1">// Returns the determinant for square matrices</span>
    <span class="na">determinant</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nf">isSquare</span><span class="p">())</span> <span class="p">&#123;</span>
        <span class="k">return</span> <span class="kc">null</span><span class="p">;</span>
      <span class="p">&#125;</span>
      <span class="kd">var</span> <span class="nx">M</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nf">toRightTriangular</span><span class="p">();</span>
      <span class="kd">var</span> <span class="nx">det</span> <span class="o">=</span> <span class="nx">M</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">0</span><span class="p">],</span>
        <span class="nx">n</span> <span class="o">=</span> <span class="nx">M</span><span class="p">.</span><span class="nx">elements</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">,</span>
        <span class="nx">k</span> <span class="o">=</span> <span class="nx">n</span><span class="p">,</span>
        <span class="nx">i</span><span class="p">;</span>
      <span class="k">do</span> <span class="p">&#123;</span>
        <span class="nx">i</span> <span class="o">=</span> <span class="nx">k</span> <span class="o">-</span> <span class="nx">n</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span>
        <span class="nx">det</span> <span class="o">=</span> <span class="nx">det</span> <span class="o">*</span> <span class="nx">M</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">i</span><span class="p">];</span>
      <span class="p">&#125;</span> <span class="k">while </span><span class="p">(</span><span class="o">--</span><span class="nx">n</span><span class="p">);</span>
      <span class="k">return</span> <span class="nx">det</span><span class="p">;</span>
    <span class="p">&#125;,</span>

    <span class="c1">// Returns true iff the matrix is singular</span>
    <span class="na">isSingular</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">isSquare</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nf">determinant</span><span class="p">()</span> <span class="o">===</span> <span class="mi">0</span><span class="p">;</span>
    <span class="p">&#125;,</span>

    <span class="c1">// Returns the result of attaching the given argument to the right-hand side of the matrix</span>
    <span class="na">augment</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">matrix</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">M</span> <span class="o">=</span> <span class="nx">matrix</span><span class="p">.</span><span class="nx">elements</span> <span class="o">||</span> <span class="nx">matrix</span><span class="p">;</span>
      <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">M</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">undefined</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">M</span> <span class="o">=</span> <span class="nx">Matrix</span><span class="p">.</span><span class="nf">create</span><span class="p">(</span><span class="nx">M</span><span class="p">).</span><span class="nx">elements</span><span class="p">;</span>
      <span class="p">&#125;</span>
      <span class="kd">var</span> <span class="nx">T</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nf">dup</span><span class="p">(),</span>
        <span class="nx">cols</span> <span class="o">=</span> <span class="nx">T</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">ni</span> <span class="o">=</span> <span class="nx">T</span><span class="p">.</span><span class="nx">elements</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span>
        <span class="nx">ki</span> <span class="o">=</span> <span class="nx">ni</span><span class="p">,</span>
        <span class="nx">i</span><span class="p">,</span>
        <span class="nx">nj</span><span class="p">,</span>
        <span class="nx">kj</span> <span class="o">=</span> <span class="nx">M</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">,</span>
        <span class="nx">j</span><span class="p">;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">ni</span> <span class="o">!=</span> <span class="nx">M</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">return</span> <span class="kc">null</span><span class="p">;</span>
      <span class="p">&#125;</span>
      <span class="k">do</span> <span class="p">&#123;</span>
        <span class="nx">i</span> <span class="o">=</span> <span class="nx">ki</span> <span class="o">-</span> <span class="nx">ni</span><span class="p">;</span>
        <span class="nx">nj</span> <span class="o">=</span> <span class="nx">kj</span><span class="p">;</span>
        <span class="k">do</span> <span class="p">&#123;</span>
          <span class="nx">j</span> <span class="o">=</span> <span class="nx">kj</span> <span class="o">-</span> <span class="nx">nj</span><span class="p">;</span>
          <span class="nx">T</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">cols</span> <span class="o">+</span> <span class="nx">j</span><span class="p">]</span> <span class="o">=</span> <span class="nx">M</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">j</span><span class="p">];</span>
        <span class="p">&#125;</span> <span class="k">while </span><span class="p">(</span><span class="o">--</span><span class="nx">nj</span><span class="p">);</span>
      <span class="p">&#125;</span> <span class="k">while </span><span class="p">(</span><span class="o">--</span><span class="nx">ni</span><span class="p">);</span>
      <span class="k">return</span> <span class="nx">T</span><span class="p">;</span>
    <span class="p">&#125;,</span>

    <span class="c1">// Returns the inverse (if one exists) using Gauss-Jordan</span>
    <span class="na">inverse</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nf">isSquare</span><span class="p">()</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nf">isSingular</span><span class="p">())</span> <span class="p">&#123;</span>
        <span class="k">return</span> <span class="kc">null</span><span class="p">;</span>
      <span class="p">&#125;</span>
      <span class="kd">var</span> <span class="nx">ni</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">elements</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span>
        <span class="nx">ki</span> <span class="o">=</span> <span class="nx">ni</span><span class="p">,</span>
        <span class="nx">i</span><span class="p">,</span>
        <span class="nx">j</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">M</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nf">augment</span><span class="p">(</span><span class="nx">Matrix</span><span class="p">.</span><span class="nc">I</span><span class="p">(</span><span class="nx">ni</span><span class="p">)).</span><span class="nf">toRightTriangular</span><span class="p">();</span>
      <span class="kd">var</span> <span class="nx">np</span><span class="p">,</span>
        <span class="nx">kp</span> <span class="o">=</span> <span class="nx">M</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">,</span>
        <span class="nx">p</span><span class="p">,</span>
        <span class="nx">els</span><span class="p">,</span>
        <span class="nx">divisor</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">inverse_elements</span> <span class="o">=</span> <span class="p">[],</span>
        <span class="nx">new_element</span><span class="p">;</span>
      <span class="c1">// Matrix is non-singular so there will be no zeros on the diagonal</span>
      <span class="c1">// Cycle through rows from last to first</span>
      <span class="k">do</span> <span class="p">&#123;</span>
        <span class="nx">i</span> <span class="o">=</span> <span class="nx">ni</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span>
        <span class="c1">// First, normalise diagonal elements to 1</span>
        <span class="nx">els</span> <span class="o">=</span> <span class="p">[];</span>
        <span class="nx">np</span> <span class="o">=</span> <span class="nx">kp</span><span class="p">;</span>
        <span class="nx">inverse_elements</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="p">[];</span>
        <span class="nx">divisor</span> <span class="o">=</span> <span class="nx">M</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">i</span><span class="p">];</span>
        <span class="k">do</span> <span class="p">&#123;</span>
          <span class="nx">p</span> <span class="o">=</span> <span class="nx">kp</span> <span class="o">-</span> <span class="nx">np</span><span class="p">;</span>
          <span class="nx">new_element</span> <span class="o">=</span> <span class="nx">M</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">p</span><span class="p">]</span> <span class="o">/</span> <span class="nx">divisor</span><span class="p">;</span>
          <span class="nx">els</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">new_element</span><span class="p">);</span>
          <span class="c1">// Shuffle of the current row of the right hand side into the results</span>
          <span class="c1">// array as it will not be modified by later runs through this loop</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">p</span> <span class="o">&gt;=</span> <span class="nx">ki</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">inverse_elements</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nf">push</span><span class="p">(</span><span class="nx">new_element</span><span class="p">);</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;</span> <span class="k">while </span><span class="p">(</span><span class="o">--</span><span class="nx">np</span><span class="p">);</span>
        <span class="nx">M</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">els</span><span class="p">;</span>
        <span class="c1">// Then, subtract this row from those above it to</span>
        <span class="c1">// give the identity matrix on the left hand side</span>
        <span class="k">for</span> <span class="p">(</span><span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">i</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">els</span> <span class="o">=</span> <span class="p">[];</span>
          <span class="nx">np</span> <span class="o">=</span> <span class="nx">kp</span><span class="p">;</span>
          <span class="k">do</span> <span class="p">&#123;</span>
            <span class="nx">p</span> <span class="o">=</span> <span class="nx">kp</span> <span class="o">-</span> <span class="nx">np</span><span class="p">;</span>
            <span class="nx">els</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="nx">p</span><span class="p">]</span> <span class="o">-</span> <span class="nx">M</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">p</span><span class="p">]</span> <span class="o">*</span> <span class="nx">M</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="nx">j</span><span class="p">][</span><span class="nx">i</span><span class="p">]);</span>
          <span class="p">&#125;</span> <span class="k">while </span><span class="p">(</span><span class="o">--</span><span class="nx">np</span><span class="p">);</span>
          <span class="nx">M</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="nx">j</span><span class="p">]</span> <span class="o">=</span> <span class="nx">els</span><span class="p">;</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span> <span class="k">while </span><span class="p">(</span><span class="o">--</span><span class="nx">ni</span><span class="p">);</span>
      <span class="k">return</span> <span class="nx">Matrix</span><span class="p">.</span><span class="nf">create</span><span class="p">(</span><span class="nx">inverse_elements</span><span class="p">);</span>
    <span class="p">&#125;,</span>

    <span class="c1">// Set the matrix's elements from an array. If the argument passed</span>
    <span class="c1">// is a vector, the resulting matrix will be a single column.</span>
    <span class="na">setElements</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">els</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">i</span><span class="p">,</span>
        <span class="nx">elements</span> <span class="o">=</span> <span class="nx">els</span><span class="p">.</span><span class="nx">elements</span> <span class="o">||</span> <span class="nx">els</span><span class="p">;</span>
      <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">elements</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span> <span class="o">!=</span> <span class="dl">"</span><span class="s2">undefined</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="kd">var</span> <span class="nx">ni</span> <span class="o">=</span> <span class="nx">elements</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span>
          <span class="nx">ki</span> <span class="o">=</span> <span class="nx">ni</span><span class="p">,</span>
          <span class="nx">nj</span><span class="p">,</span>
          <span class="nx">kj</span><span class="p">,</span>
          <span class="nx">j</span><span class="p">;</span>
        <span class="k">this</span><span class="p">.</span><span class="nx">elements</span> <span class="o">=</span> <span class="p">[];</span>
        <span class="k">do</span> <span class="p">&#123;</span>
          <span class="nx">i</span> <span class="o">=</span> <span class="nx">ki</span> <span class="o">-</span> <span class="nx">ni</span><span class="p">;</span>
          <span class="nx">nj</span> <span class="o">=</span> <span class="nx">elements</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">length</span><span class="p">;</span>
          <span class="nx">kj</span> <span class="o">=</span> <span class="nx">nj</span><span class="p">;</span>
          <span class="k">this</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="p">[];</span>
          <span class="k">do</span> <span class="p">&#123;</span>
            <span class="nx">j</span> <span class="o">=</span> <span class="nx">kj</span> <span class="o">-</span> <span class="nx">nj</span><span class="p">;</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">j</span><span class="p">]</span> <span class="o">=</span> <span class="nx">elements</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">j</span><span class="p">];</span>
          <span class="p">&#125;</span> <span class="k">while </span><span class="p">(</span><span class="o">--</span><span class="nx">nj</span><span class="p">);</span>
        <span class="p">&#125;</span> <span class="k">while </span><span class="p">(</span><span class="o">--</span><span class="nx">ni</span><span class="p">);</span>
        <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
      <span class="p">&#125;</span>
      <span class="kd">var</span> <span class="nx">n</span> <span class="o">=</span> <span class="nx">elements</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span>
        <span class="nx">k</span> <span class="o">=</span> <span class="nx">n</span><span class="p">;</span>
      <span class="k">this</span><span class="p">.</span><span class="nx">elements</span> <span class="o">=</span> <span class="p">[];</span>
      <span class="k">do</span> <span class="p">&#123;</span>
        <span class="nx">i</span> <span class="o">=</span> <span class="nx">k</span> <span class="o">-</span> <span class="nx">n</span><span class="p">;</span>
        <span class="k">this</span><span class="p">.</span><span class="nx">elements</span><span class="p">.</span><span class="nf">push</span><span class="p">([</span><span class="nx">elements</span><span class="p">[</span><span class="nx">i</span><span class="p">]]);</span>
      <span class="p">&#125;</span> <span class="k">while </span><span class="p">(</span><span class="o">--</span><span class="nx">n</span><span class="p">);</span>
      <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
    <span class="p">&#125;,</span>
  <span class="p">&#125;;</span>

  <span class="c1">// Constructor function</span>
  <span class="nx">Matrix</span><span class="p">.</span><span class="nx">create</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">elements</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">M</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">Matrix</span><span class="p">();</span>
    <span class="k">return</span> <span class="nx">M</span><span class="p">.</span><span class="nf">setElements</span><span class="p">(</span><span class="nx">elements</span><span class="p">);</span>
  <span class="p">&#125;;</span>

  <span class="c1">// Identity matrix of size n</span>
  <span class="nx">Matrix</span><span class="p">.</span><span class="nx">I</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">n</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">els</span> <span class="o">=</span> <span class="p">[],</span>
      <span class="nx">k</span> <span class="o">=</span> <span class="nx">n</span><span class="p">,</span>
      <span class="nx">i</span><span class="p">,</span>
      <span class="nx">nj</span><span class="p">,</span>
      <span class="nx">j</span><span class="p">;</span>
    <span class="k">do</span> <span class="p">&#123;</span>
      <span class="nx">i</span> <span class="o">=</span> <span class="nx">k</span> <span class="o">-</span> <span class="nx">n</span><span class="p">;</span>
      <span class="nx">els</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="p">[];</span>
      <span class="nx">nj</span> <span class="o">=</span> <span class="nx">k</span><span class="p">;</span>
      <span class="k">do</span> <span class="p">&#123;</span>
        <span class="nx">j</span> <span class="o">=</span> <span class="nx">k</span> <span class="o">-</span> <span class="nx">nj</span><span class="p">;</span>
        <span class="nx">els</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="nx">j</span><span class="p">]</span> <span class="o">=</span> <span class="nx">i</span> <span class="o">==</span> <span class="nx">j</span> <span class="p">?</span> <span class="mi">1</span> <span class="p">:</span> <span class="mi">0</span><span class="p">;</span>
      <span class="p">&#125;</span> <span class="k">while </span><span class="p">(</span><span class="o">--</span><span class="nx">nj</span><span class="p">);</span>
    <span class="p">&#125;</span> <span class="k">while </span><span class="p">(</span><span class="o">--</span><span class="nx">n</span><span class="p">);</span>
    <span class="k">return</span> <span class="nx">Matrix</span><span class="p">.</span><span class="nf">create</span><span class="p">(</span><span class="nx">els</span><span class="p">);</span>
  <span class="p">&#125;;</span>
<span class="nt">&lt;/script&gt;</span>
<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"cluster"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex-row row1"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex_connector"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex zoomTarget"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;br</span> <span class="nt">/&gt;</span>
        <span class="nt">&lt;h1&gt;</span><span class="ni">&amp;nbsp;</span>FUTURE<span class="nt">&lt;/h1&gt;</span>
      <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex_connector"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex-row even row2"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex_connector northeast"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle"</span><span class="nt">&gt;&lt;br</span> <span class="nt">/&gt;</span>▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫<span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex-row row3"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex zoomTarget"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle info"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"title"</span><span class="nt">&gt;</span>MICRONEMEZ<span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"subtitle"</span> <span class="na">title=</span><span class="s">"--marvin minisky"</span><span class="nt">&gt;</span>
          those inner mental context clues that shade our minds<span class="ni">&amp;#039;</span> activities
          in ways we can rarely express.
        <span class="nt">&lt;/p&gt;</span>
      <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex_connector east"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle"</span><span class="nt">&gt;&lt;br</span> <span class="nt">/&gt;</span>▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪<span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex zoomTarget"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;br</span> <span class="nt">/&gt;</span>
        <span class="nt">&lt;h1&gt;</span>CURRENT<span class="nt">&lt;/h1&gt;</span>
      <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex none"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle zoomTarget"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex-row even row4"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex_connector southeast"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle"</span><span class="nt">&gt;&lt;br</span> <span class="nt">/&gt;</span>━━━━━━━━━━━━━<span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex-row row5"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex_connector"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex zoomTarget"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;br</span> <span class="nt">/&gt;</span>
        <span class="nt">&lt;h1</span> <span class="na">style=</span><span class="s">"padding-left: 7px"</span><span class="nt">&gt;</span>ARCHIVE<span class="nt">&lt;/h1&gt;</span>
      <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex_connector"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"top"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle"</span><span class="nt">&gt;&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"bottom"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#000</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">overflow-x</span><span class="p">:</span> <span class="nb">hidden</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">6px</span><span class="p">;</span>
  <span class="nl">font-family</span><span class="p">:</span> <span class="nb">Sans-Serif</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nt">p</span><span class="nc">.title</span> <span class="p">&#123;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">14px</span><span class="p">;</span>
  <span class="nl">line-height</span><span class="p">:</span> <span class="m">19px</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nt">p</span><span class="nc">.subtitle</span> <span class="p">&#123;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">6px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#cluster</span> <span class="p">&#123;</span>
<span class="p">&#125;</span>

<span class="c">/* GENERIC HEX PROPERTIEZ */</span>
<span class="nc">.hex</span><span class="o">,</span>
<span class="nc">.hex_connector</span> <span class="p">&#123;</span>
  <span class="nl">float</span><span class="p">:</span> <span class="nb">left</span><span class="p">;</span>

  <span class="nl">margin-bottom</span><span class="p">:</span> <span class="m">-28px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.hex-row</span> <span class="p">&#123;</span>
  <span class="nl">clear</span><span class="p">:</span> <span class="nb">left</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.hex-row.even</span> <span class="p">&#123;</span>
  <span class="nl">margin-left</span><span class="p">:</span> <span class="m">52px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.none</span> <span class="p">&#123;</span>
  <span class="nl">visibility</span><span class="p">:</span> <span class="nb">hidden</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.middle</span> <span class="nt">h1</span><span class="o">,</span>
<span class="nc">.middle</span> <span class="nt">p</span> <span class="p">&#123;</span>
  <span class="nl">padding-left</span><span class="p">:</span> <span class="m">3px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.middle</span> <span class="nt">h1</span> <span class="p">&#123;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">20px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="c">/* HEX (CONTENT) */</span>
<span class="nc">.hex</span><span class="nd">:hover</span> <span class="nc">.top</span><span class="o">,</span>
<span class="nc">.hex</span><span class="nd">:hover</span> <span class="nc">.bottom</span> <span class="p">&#123;</span>
  <span class="nl">filter</span><span class="p">:</span> <span class="nb">alpha</span><span class="p">(</span><span class="nf">opacity</span><span class="err">=</span><span class="m">50</span><span class="p">);</span>
  <span class="nl">-khtml-opacity</span><span class="p">:</span> <span class="m">0.5</span><span class="p">;</span>
  <span class="nl">-moz-opacity</span><span class="p">:</span> <span class="m">0.5</span><span class="p">;</span>
  <span class="nl">opacity</span><span class="p">:</span> <span class="m">0.5</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.hex</span> <span class="nc">.middle</span><span class="nd">:hover</span> <span class="p">&#123;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#000</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#ff6600</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.hex</span> <span class="nc">.top</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">border-bottom</span><span class="p">:</span> <span class="m">29px</span> <span class="nb">solid</span> <span class="nx">#ff6600</span><span class="p">;</span>
  <span class="nl">border-left</span><span class="p">:</span> <span class="m">52px</span> <span class="nb">solid</span> <span class="nb">transparent</span><span class="p">;</span>
  <span class="nl">border-right</span><span class="p">:</span> <span class="m">52px</span> <span class="nb">solid</span> <span class="nb">transparent</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.hex</span> <span class="nc">.middle</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">103px</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">58px</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#ff6600</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#000</span><span class="p">;</span>
  <span class="nl">overflow</span><span class="p">:</span> <span class="nb">hidden</span><span class="p">;</span>
  <span class="nl">overflow-y</span><span class="p">:</span> <span class="nb">auto</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.hex</span> <span class="nc">.bottom</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">border-top</span><span class="p">:</span> <span class="m">29px</span> <span class="nb">solid</span> <span class="nx">#ff6600</span><span class="p">;</span>
  <span class="nl">border-left</span><span class="p">:</span> <span class="m">52px</span> <span class="nb">solid</span> <span class="nb">transparent</span><span class="p">;</span>
  <span class="nl">border-right</span><span class="p">:</span> <span class="m">52px</span> <span class="nb">solid</span> <span class="nb">transparent</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.hex</span> <span class="nc">.no-background</span> <span class="p">&#123;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#000</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#ff6600</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="c">/* HEX_CONNECTOR */</span>
<span class="nc">.hex_connector</span> <span class="nc">.top</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">border-bottom</span><span class="p">:</span> <span class="m">29px</span> <span class="nb">solid</span> <span class="nx">#121212</span><span class="p">;</span>
  <span class="nl">border-left</span><span class="p">:</span> <span class="m">52px</span> <span class="nb">solid</span> <span class="nb">transparent</span><span class="p">;</span>
  <span class="nl">border-right</span><span class="p">:</span> <span class="m">52px</span> <span class="nb">solid</span> <span class="nb">transparent</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.hex_connector</span> <span class="nc">.middle</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">103px</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">58px</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#121212</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#ff6600</span><span class="p">;</span>
  <span class="nl">overflow</span><span class="p">:</span> <span class="nb">hidden</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">16px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.hex_connector</span> <span class="nc">.bottom</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">border-top</span><span class="p">:</span> <span class="m">29px</span> <span class="nb">solid</span> <span class="nx">#121212</span><span class="p">;</span>
  <span class="nl">border-left</span><span class="p">:</span> <span class="m">52px</span> <span class="nb">solid</span> <span class="nb">transparent</span><span class="p">;</span>
  <span class="nl">border-right</span><span class="p">:</span> <span class="m">52px</span> <span class="nb">solid</span> <span class="nb">transparent</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.northeast</span> <span class="p">&#123;</span>
  <span class="nl">-webkit-transform-origin</span><span class="p">:</span> <span class="m">50%</span> <span class="m">50%</span><span class="p">;</span>
  <span class="nl">-webkit-transform</span><span class="p">:</span> <span class="nf">rotate</span><span class="p">(</span><span class="m">-60deg</span><span class="p">);</span>
  <span class="nl">-moz-transform-origin</span><span class="p">:</span> <span class="m">50%</span> <span class="m">50%</span><span class="p">;</span>
  <span class="nl">-moz-transform</span><span class="p">:</span> <span class="nf">rotate</span><span class="p">(</span><span class="m">-60deg</span><span class="p">);</span>
  <span class="nl">-ms-transform</span><span class="p">:</span> <span class="nf">rotate</span><span class="p">(</span><span class="m">-60deg</span><span class="p">);</span>
  <span class="nl">-ms-transform-origin</span><span class="p">:</span> <span class="m">50%</span> <span class="m">50%</span><span class="p">;</span>
  <span class="nl">-o-transform</span><span class="p">:</span> <span class="nf">rotate</span><span class="p">(</span><span class="m">-60deg</span><span class="p">);</span>
  <span class="nl">-o-transform-origin</span><span class="p">:</span> <span class="m">50%</span> <span class="m">50%</span><span class="p">;</span>
  <span class="nl">transform</span><span class="p">:</span> <span class="nf">rotate</span><span class="p">(</span><span class="m">-60deg</span><span class="p">);</span>
  <span class="nl">transform-origin</span><span class="p">:</span> <span class="m">50%</span> <span class="m">50%</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.hex_east</span> <span class="p">&#123;</span>
<span class="p">&#125;</span>

<span class="nc">.southeast</span> <span class="p">&#123;</span>
  <span class="nl">-webkit-transform-origin</span><span class="p">:</span> <span class="m">50%</span> <span class="m">50%</span><span class="p">;</span>
  <span class="nl">-webkit-transform</span><span class="p">:</span> <span class="nf">rotate</span><span class="p">(</span><span class="m">60deg</span><span class="p">);</span>
  <span class="nl">-moz-transform-origin</span><span class="p">:</span> <span class="m">50%</span> <span class="m">50%</span><span class="p">;</span>
  <span class="nl">-moz-transform</span><span class="p">:</span> <span class="nf">rotate</span><span class="p">(</span><span class="m">60deg</span><span class="p">);</span>
  <span class="nl">-ms-transform-origin</span><span class="p">:</span> <span class="m">50%</span> <span class="m">50%</span><span class="p">;</span>
  <span class="nl">-ms-transform</span><span class="p">:</span> <span class="nf">rotate</span><span class="p">(</span><span class="m">60deg</span><span class="p">);</span>
  <span class="nl">-o-transform-origin</span><span class="p">:</span> <span class="m">50%</span> <span class="m">50%</span><span class="p">;</span>
  <span class="nl">-o-transform</span><span class="p">:</span> <span class="nf">rotate</span><span class="p">(</span><span class="m">60deg</span><span class="p">);</span>
  <span class="nl">transform-origin</span><span class="p">:</span> <span class="m">50%</span> <span class="m">50%</span><span class="p">;</span>
  <span class="nl">transform</span><span class="p">:</span> <span class="nf">rotate</span><span class="p">(</span><span class="m">60deg</span><span class="p">);</span>
<span class="p">&#125;</span>

<span class="c">/* END HEXX */</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="c1">//FAKE_JAX</span>
<span class="nf">$</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.info</span><span class="dl">"</span><span class="p">).</span><span class="nf">on</span><span class="p">(</span><span class="dl">"</span><span class="s2">click</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">e</span><span class="p">.</span><span class="nf">preventDefault</span><span class="p">();</span>
    <span class="k">if </span><span class="p">(</span><span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nf">hasClass</span><span class="p">(</span><span class="dl">"</span><span class="s2">info_clicked_once</span><span class="dl">"</span><span class="p">))</span> <span class="p">&#123;</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
      <span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nf">addClass</span><span class="p">(</span><span class="dl">"</span><span class="s2">info_clicked_once</span><span class="dl">"</span><span class="p">);</span>
      <span class="c1">// ajax request</span>
      <span class="nx">$</span><span class="p">.</span><span class="nf">ajax</span><span class="p">(&#123;</span>
        <span class="na">async</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
        <span class="na">cache</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
        <span class="na">type</span><span class="p">:</span> <span class="dl">"</span><span class="s2">post</span><span class="dl">"</span><span class="p">,</span>
        <span class="na">url</span><span class="p">:</span> <span class="dl">"</span><span class="s2">/echo/html/</span><span class="dl">"</span><span class="p">,</span>
        <span class="na">data</span><span class="p">:</span> <span class="p">&#123;</span>
          <span class="na">html</span><span class="p">:</span> <span class="dl">"</span><span class="s2">&lt;p&gt;THIS IS A REALLY LONG LINE OF HTML THAT HAS BEEN INJECTED VIA AJAX FOOBAR &lt;br/&gt;THIS IS A REALLY LONG LINE OF HTML THAT HAS BEEN INJECTED VIA AJAX FOOBAR &lt;br/&gt;THIS IS A REALLY LONG LINE OF HTML THAT HAS BEEN INJECTED VIA AJAX FOOBAR &lt;br/&gt;&lt;/p&gt;</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">delay</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
        <span class="p">&#125;,</span>
        <span class="na">dataType</span><span class="p">:</span> <span class="dl">"</span><span class="s2">html</span><span class="dl">"</span><span class="p">,</span>
        <span class="na">beforeSend</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
          <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">Fired prior to the request</span><span class="dl">"</span><span class="p">);</span>
        <span class="p">&#125;,</span>
        <span class="na">success</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">Fired when the request is successfull</span><span class="dl">"</span><span class="p">);</span>
          <span class="c1">//$('.info p').toggle();</span>
          <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.info</span><span class="dl">"</span><span class="p">).</span><span class="nf">append</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span>
        <span class="p">&#125;,</span>
        <span class="na">complete</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
          <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">Fired when the request is complete</span><span class="dl">"</span><span class="p">);</span>
        <span class="p">&#125;,</span>
      <span class="p">&#125;);</span>
    <span class="p">&#125;</span> <span class="c1">//endif</span>
  <span class="p">&#125;);</span>
<span class="p">&#125;);</span> <span class="c1">//FAKE_JAX</span>

<span class="nf">jQuery</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nf">ready</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">settings</span> <span class="o">=</span> <span class="p">&#123;</span>
    <span class="c1">// zoomed size relative to the container element</span>
    <span class="c1">// 0.0-1.0</span>
    <span class="na">targetsize</span><span class="p">:</span> <span class="mf">1.0</span><span class="p">,</span>
    <span class="c1">// scale content to screen based on their size</span>
    <span class="c1">// "width"|"height"|"both"</span>
    <span class="na">scalemode</span><span class="p">:</span> <span class="dl">"</span><span class="s2">both</span><span class="dl">"</span><span class="p">,</span>
    <span class="c1">// animation duration</span>
    <span class="na">duration</span><span class="p">:</span> <span class="mi">450</span><span class="p">,</span>
    <span class="c1">// easing of animation, similar to css transition params</span>
    <span class="c1">// "linear"|"ease"|"ease-in"|"ease-out"|"ease-in-out"|[p1,p2,p3,p4]</span>
    <span class="c1">// [p1,p2,p3,p4] refer to cubic-bezier curve params</span>
    <span class="na">easing</span><span class="p">:</span> <span class="dl">"</span><span class="s2">ease</span><span class="dl">"</span><span class="p">,</span>
    <span class="c1">// use browser native animation in webkit, provides faster and nicer</span>
    <span class="c1">// animations but on some older machines, the content that is zoomed</span>
    <span class="c1">// may show up as pixelated.</span>
    <span class="na">nativeanimation</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
    <span class="c1">// root element to zoom relative to</span>
    <span class="c1">// (this element needs to be positioned)</span>
    <span class="na">root</span><span class="p">:</span> <span class="nf">$</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">),</span>
    <span class="c1">// show debug points in element corners. helps</span>
    <span class="c1">// at debugging when zoomooz positioning fails</span>
    <span class="na">debug</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
    <span class="c1">// this function is called with the element that is zoomed to in this</span>
    <span class="c1">// when animation ends</span>
    <span class="na">animationendcallback</span><span class="p">:</span> <span class="kc">null</span><span class="p">,</span>
    <span class="c1">// this specifies, that clicking an element that is zoomed to zooms</span>
    <span class="c1">// back out</span>
    <span class="na">closeclick</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
  <span class="p">&#125;;</span>
  <span class="c1">// settings can be set for both the zoomTo and zoomTarget calls:</span>
  <span class="c1">//$("#cluster").zoomTo(settings);</span>

  <span class="c1">//$(window).bind('resize', function() &#123; setTimeout( function() &#123; $("#cluster").zoomTo(settings);  &#125;, 500); &#125;);</span>

  <span class="cm">/*
   clone = $('.hex_bot').clone();
    
    $('body').after(clone);
    $(clone).addClass('bump_left');
    $(clone).hide();
    

    offset = $('.hex_bot').offset();
    var fromtop = offset.top;

    $(document).scroll(function() &#123;
        doc = $(this);
        dist = $(this).scrollTop();

        if (dist &gt;= fromtop) &#123;
            $(clone).show();
            $('.hex_bot').css(&#123;
                'position': 'fixed',
                'top': '0',

            &#125;);

        &#125; else &#123;
            $('.hex_bot').css(&#123;
                'position': 'relative'
            &#125;);
            $(clone).hide();
        &#125;
    &#125;);

    $('.hex_bot').click(function() &#123;
        $('body,html').animate(&#123;
            scrollTop: 0
        &#125;, 800);
        return false;
    &#125;);*/</span>

  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.middle</span><span class="dl">"</span><span class="p">).</span><span class="nf">click</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nf">addClass</span><span class="p">(</span><span class="dl">"</span><span class="s2">no-background</span><span class="dl">"</span><span class="p">);</span>
    <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">body</span><span class="dl">"</span><span class="p">).</span><span class="nf">css</span><span class="p">(</span><span class="dl">"</span><span class="s2">background</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">#121212</span><span class="dl">"</span><span class="p">);</span>
  <span class="p">&#125;);</span>

  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">body</span><span class="dl">"</span><span class="p">).</span><span class="nf">click</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.no-background</span><span class="dl">"</span><span class="p">).</span><span class="nf">removeClass</span><span class="p">(</span><span class="dl">"</span><span class="s2">.no-background</span><span class="dl">"</span><span class="p">);</span>
    <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">body</span><span class="dl">"</span><span class="p">).</span><span class="nf">css</span><span class="p">(</span><span class="dl">"</span><span class="s2">background</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">#000</span><span class="dl">"</span><span class="p">);</span>
  <span class="p">&#125;);</span>
<span class="p">&#125;);</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/nK2F3/82/">original jsfiddle post</a></p>
