---
title: "scramble'r"
date: "2014-01-06T17:54:20.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css","javascript","jquery"]
permalink: "/post/jsfiddle-BxJ6P/"
source_id: "BxJ6P"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/BxJ6P/2/"
source_revision: 2
---
<iframe class="code-demo" src="{{ '/content/media/2014/2014-01-06-jsfiddle-BxJ6P-demo.html' | relative_url }}" title="scramble'r" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>fuck it up, pigface!</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="cp">&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"&gt;</span>
<span class="nt">&lt;html&gt;</span>
  <span class="nt">&lt;head&gt;</span>
    <span class="nt">&lt;meta</span> <span class="na">http-equiv=</span><span class="s">"Content-Type"</span> <span class="na">content=</span><span class="s">"text/html; charset=utf-8"</span> <span class="nt">/&gt;</span>
    <span class="nt">&lt;title&gt;</span>███ ███<span class="nt">&lt;/title&gt;</span>
    =
    <span class="nt">&lt;script </span><span class="na">type=</span><span class="s">"text/javascript"</span><span class="nt">&gt;</span>
      <span class="cm">/*
       * jQuery JavaScript Library v1.3.2
       * http://jquery.com/
       *
       * Copyright (c) 2009 John Resig
       * Dual licensed under the MIT and GPL licenses.
       * http://docs.jquery.com/License
       *
       * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
       * Revision: 6246
       */</span>
      <span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
        <span class="kd">var</span> <span class="nx">l</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span>
          <span class="nx">g</span><span class="p">,</span>
          <span class="nx">y</span> <span class="o">=</span> <span class="nx">l</span><span class="p">.</span><span class="nx">jQuery</span><span class="p">,</span>
          <span class="nx">p</span> <span class="o">=</span> <span class="nx">l</span><span class="p">.</span><span class="nx">$</span><span class="p">,</span>
          <span class="nx">o</span> <span class="o">=</span>
            <span class="p">(</span><span class="nx">l</span><span class="p">.</span><span class="nx">jQuery</span> <span class="o">=</span>
            <span class="nx">l</span><span class="p">.</span><span class="nx">$</span> <span class="o">=</span>
              <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="k">new</span> <span class="nx">o</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nf">init</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">F</span><span class="p">);</span>
              <span class="p">&#125;),</span>
          <span class="nx">D</span> <span class="o">=</span> <span class="sr">/^</span><span class="se">[^</span><span class="sr">&lt;</span><span class="se">]</span><span class="sr">*</span><span class="se">(</span><span class="sr">&lt;</span><span class="se">(</span><span class="sr">.|</span><span class="se">\s)</span><span class="sr">+&gt;</span><span class="se">)[^</span><span class="sr">&gt;</span><span class="se">]</span><span class="sr">*$|^#</span><span class="se">([\w</span><span class="sr">-</span><span class="se">]</span><span class="sr">+</span><span class="se">)</span><span class="sr">$/</span><span class="p">,</span>
          <span class="nx">f</span> <span class="o">=</span> <span class="sr">/^.</span><span class="se">[^</span><span class="sr">:#</span><span class="se">\[\.</span><span class="sr">,</span><span class="se">]</span><span class="sr">*$/</span><span class="p">;</span>
        <span class="nx">o</span><span class="p">.</span><span class="nx">fn</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">&#123;</span>
          <span class="na">init</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">H</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">E</span> <span class="o">=</span> <span class="nx">E</span> <span class="o">||</span> <span class="nb">document</span><span class="p">;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">E</span><span class="p">.</span><span class="nx">nodeType</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">=</span> <span class="nx">E</span><span class="p">;</span>
              <span class="k">this</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span>
              <span class="k">this</span><span class="p">.</span><span class="nx">context</span> <span class="o">=</span> <span class="nx">E</span><span class="p">;</span>
              <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">E</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">string</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">G</span> <span class="o">=</span> <span class="nx">D</span><span class="p">.</span><span class="nf">exec</span><span class="p">(</span><span class="nx">E</span><span class="p">);</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">G</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">G</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">||</span> <span class="o">!</span><span class="nx">H</span><span class="p">))</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">G</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span> <span class="p">&#123;</span>
                  <span class="nx">E</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">clean</span><span class="p">([</span><span class="nx">G</span><span class="p">[</span><span class="mi">1</span><span class="p">]],</span> <span class="nx">H</span><span class="p">);</span>
                <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                  <span class="kd">var</span> <span class="nx">I</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="nx">G</span><span class="p">[</span><span class="mi">3</span><span class="p">]);</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">I</span> <span class="o">&amp;&amp;</span> <span class="nx">I</span><span class="p">.</span><span class="nx">id</span> <span class="o">!=</span> <span class="nx">G</span><span class="p">[</span><span class="mi">3</span><span class="p">])</span> <span class="p">&#123;</span>
                    <span class="k">return</span> <span class="nf">o</span><span class="p">().</span><span class="nf">find</span><span class="p">(</span><span class="nx">E</span><span class="p">);</span>
                  <span class="p">&#125;</span>
                  <span class="kd">var</span> <span class="nx">F</span> <span class="o">=</span> <span class="nf">o</span><span class="p">(</span><span class="nx">I</span> <span class="o">||</span> <span class="p">[]);</span>
                  <span class="nx">F</span><span class="p">.</span><span class="nx">context</span> <span class="o">=</span> <span class="nb">document</span><span class="p">;</span>
                  <span class="nx">F</span><span class="p">.</span><span class="nx">selector</span> <span class="o">=</span> <span class="nx">E</span><span class="p">;</span>
                  <span class="k">return</span> <span class="nx">F</span><span class="p">;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="nf">o</span><span class="p">(</span><span class="nx">H</span><span class="p">).</span><span class="nf">find</span><span class="p">(</span><span class="nx">E</span><span class="p">);</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">isFunction</span><span class="p">(</span><span class="nx">E</span><span class="p">))</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="nf">o</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nf">ready</span><span class="p">(</span><span class="nx">E</span><span class="p">);</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">E</span><span class="p">.</span><span class="nx">selector</span> <span class="o">&amp;&amp;</span> <span class="nx">E</span><span class="p">.</span><span class="nx">context</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">this</span><span class="p">.</span><span class="nx">selector</span> <span class="o">=</span> <span class="nx">E</span><span class="p">.</span><span class="nx">selector</span><span class="p">;</span>
              <span class="k">this</span><span class="p">.</span><span class="nx">context</span> <span class="o">=</span> <span class="nx">E</span><span class="p">.</span><span class="nx">context</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">setArray</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">isArray</span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">?</span> <span class="nx">E</span> <span class="p">:</span> <span class="nx">o</span><span class="p">.</span><span class="nf">makeArray</span><span class="p">(</span><span class="nx">E</span><span class="p">));</span>
          <span class="p">&#125;,</span>
          <span class="na">selector</span><span class="p">:</span> <span class="dl">""</span><span class="p">,</span>
          <span class="na">jquery</span><span class="p">:</span> <span class="dl">"</span><span class="s2">1.3.2</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">size</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">get</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nx">E</span> <span class="o">===</span> <span class="nx">g</span> <span class="p">?</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="k">this</span><span class="p">)</span> <span class="p">:</span> <span class="k">this</span><span class="p">[</span><span class="nx">E</span><span class="p">];</span>
          <span class="p">&#125;,</span>
          <span class="na">pushStack</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">H</span><span class="p">,</span> <span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">G</span> <span class="o">=</span> <span class="nf">o</span><span class="p">(</span><span class="nx">F</span><span class="p">);</span>
            <span class="nx">G</span><span class="p">.</span><span class="nx">prevObject</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span>
            <span class="nx">G</span><span class="p">.</span><span class="nx">context</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">context</span><span class="p">;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">H</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">find</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">G</span><span class="p">.</span><span class="nx">selector</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">selector</span> <span class="o">+</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">selector</span> <span class="p">?</span> <span class="dl">"</span><span class="s2"> </span><span class="dl">"</span> <span class="p">:</span> <span class="dl">""</span><span class="p">)</span> <span class="o">+</span> <span class="nx">E</span><span class="p">;</span>
            <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">H</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">G</span><span class="p">.</span><span class="nx">selector</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">selector</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">.</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">H</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">(</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">E</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">)</span><span class="dl">"</span><span class="p">;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">G</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">setArray</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
            <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">push</span><span class="p">.</span><span class="nf">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">E</span><span class="p">);</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">each</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">F</span><span class="p">,</span> <span class="nx">E</span><span class="p">);</span>
          <span class="p">&#125;,</span>
          <span class="na">index</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nf">inArray</span><span class="p">(</span><span class="nx">E</span> <span class="o">&amp;&amp;</span> <span class="nx">E</span><span class="p">.</span><span class="nx">jquery</span> <span class="p">?</span> <span class="nx">E</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="p">:</span> <span class="nx">E</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span>
          <span class="p">&#125;,</span>
          <span class="na">attr</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">H</span><span class="p">,</span> <span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="nx">F</span><span class="p">;</span>
            <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">F</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">string</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">H</span> <span class="o">===</span> <span class="nx">g</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">o</span><span class="p">[</span><span class="nx">G</span> <span class="o">||</span> <span class="dl">"</span><span class="s2">attr</span><span class="dl">"</span><span class="p">](</span><span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">F</span><span class="p">);</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                <span class="nx">E</span> <span class="o">=</span> <span class="p">&#123;&#125;;</span>
                <span class="nx">E</span><span class="p">[</span><span class="nx">F</span><span class="p">]</span> <span class="o">=</span> <span class="nx">H</span><span class="p">;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">I</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">for </span><span class="p">(</span><span class="nx">F</span> <span class="k">in</span> <span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">o</span><span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="nx">G</span> <span class="p">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">style</span> <span class="p">:</span> <span class="k">this</span><span class="p">,</span> <span class="nx">F</span><span class="p">,</span> <span class="nx">o</span><span class="p">.</span><span class="nf">prop</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">E</span><span class="p">[</span><span class="nx">F</span><span class="p">],</span> <span class="nx">G</span><span class="p">,</span> <span class="nx">I</span><span class="p">,</span> <span class="nx">F</span><span class="p">));</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;);</span>
          <span class="p">&#125;,</span>
          <span class="na">css</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">((</span><span class="nx">E</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">width</span><span class="dl">"</span> <span class="o">||</span> <span class="nx">E</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">height</span><span class="dl">"</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nf">parseFloat</span><span class="p">(</span><span class="nx">F</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">F</span> <span class="o">=</span> <span class="nx">g</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">F</span><span class="p">,</span> <span class="dl">"</span><span class="s2">curCSS</span><span class="dl">"</span><span class="p">);</span>
          <span class="p">&#125;,</span>
          <span class="na">text</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">F</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">object</span><span class="dl">"</span> <span class="o">&amp;&amp;</span> <span class="nx">F</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">empty</span><span class="p">().</span><span class="nf">append</span><span class="p">(</span>
                <span class="p">((</span><span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">ownerDocument</span><span class="p">)</span> <span class="o">||</span> <span class="nb">document</span><span class="p">).</span><span class="nf">createTextNode</span><span class="p">(</span>
                  <span class="nx">F</span><span class="p">,</span>
                <span class="p">),</span>
              <span class="p">);</span>
            <span class="p">&#125;</span>
            <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="dl">""</span><span class="p">;</span>
            <span class="nx">o</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nx">F</span> <span class="o">||</span> <span class="k">this</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="nx">o</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">childNodes</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">!=</span> <span class="mi">8</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">E</span> <span class="o">+=</span> <span class="k">this</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">!=</span> <span class="mi">1</span> <span class="p">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">nodeValue</span> <span class="p">:</span> <span class="nx">o</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nf">text</span><span class="p">([</span><span class="k">this</span><span class="p">]);</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;);</span>
            <span class="p">&#125;);</span>
            <span class="k">return</span> <span class="nx">E</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">wrapAll</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">F</span> <span class="o">=</span> <span class="nf">o</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">ownerDocument</span><span class="p">).</span><span class="nf">clone</span><span class="p">();</span>
              <span class="k">if </span><span class="p">(</span><span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">parentNode</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">F</span><span class="p">.</span><span class="nf">insertBefore</span><span class="p">(</span><span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span>
              <span class="p">&#125;</span>
              <span class="nx">F</span><span class="p">.</span><span class="nf">map</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
                <span class="kd">var</span> <span class="nx">G</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span>
                <span class="k">while </span><span class="p">(</span><span class="nx">G</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">G</span> <span class="o">=</span> <span class="nx">G</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="k">return</span> <span class="nx">G</span><span class="p">;</span>
              <span class="p">&#125;).</span><span class="nf">append</span><span class="p">(</span><span class="k">this</span><span class="p">);</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">wrapInner</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="nf">o</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nf">contents</span><span class="p">().</span><span class="nf">wrapAll</span><span class="p">(</span><span class="nx">E</span><span class="p">);</span>
            <span class="p">&#125;);</span>
          <span class="p">&#125;,</span>
          <span class="na">wrap</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="nf">o</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nf">wrapAll</span><span class="p">(</span><span class="nx">E</span><span class="p">);</span>
            <span class="p">&#125;);</span>
          <span class="p">&#125;,</span>
          <span class="na">append</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">domManip</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="kc">true</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">==</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">this</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">E</span><span class="p">);</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;);</span>
          <span class="p">&#125;,</span>
          <span class="na">prepend</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">domManip</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="kc">true</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">==</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">this</span><span class="p">.</span><span class="nf">insertBefore</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">);</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;);</span>
          <span class="p">&#125;,</span>
          <span class="na">before</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">domManip</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="kc">false</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">this</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nf">insertBefore</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span>
            <span class="p">&#125;);</span>
          <span class="p">&#125;,</span>
          <span class="na">after</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">domManip</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="kc">false</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">this</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nf">insertBefore</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">nextSibling</span><span class="p">);</span>
            <span class="p">&#125;);</span>
          <span class="p">&#125;,</span>
          <span class="na">end</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">prevObject</span> <span class="o">||</span> <span class="nf">o</span><span class="p">([]);</span>
          <span class="p">&#125;,</span>
          <span class="na">push</span><span class="p">:</span> <span class="p">[].</span><span class="nx">push</span><span class="p">,</span>
          <span class="na">sort</span><span class="p">:</span> <span class="p">[].</span><span class="nx">sort</span><span class="p">,</span>
          <span class="na">splice</span><span class="p">:</span> <span class="p">[].</span><span class="nx">splice</span><span class="p">,</span>
          <span class="na">find</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">F</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nf">pushStack</span><span class="p">([],</span> <span class="dl">"</span><span class="s2">find</span><span class="dl">"</span><span class="p">,</span> <span class="nx">E</span><span class="p">);</span>
              <span class="nx">F</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
              <span class="nx">o</span><span class="p">.</span><span class="nf">find</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">F</span><span class="p">);</span>
              <span class="k">return</span> <span class="nx">F</span><span class="p">;</span>
            <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">pushStack</span><span class="p">(</span>
                <span class="nx">o</span><span class="p">.</span><span class="nf">unique</span><span class="p">(</span>
                  <span class="nx">o</span><span class="p">.</span><span class="nf">map</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nf">find</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">G</span><span class="p">);</span>
                  <span class="p">&#125;),</span>
                <span class="p">),</span>
                <span class="dl">"</span><span class="s2">find</span><span class="dl">"</span><span class="p">,</span>
                <span class="nx">E</span><span class="p">,</span>
              <span class="p">);</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;,</span>
          <span class="na">clone</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nf">map</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">noCloneEvent</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nf">isXMLDoc</span><span class="p">(</span><span class="k">this</span><span class="p">))</span> <span class="p">&#123;</span>
                <span class="kd">var</span> <span class="nx">I</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">outerHTML</span><span class="p">;</span>
                <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">I</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="kd">var</span> <span class="nx">J</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">ownerDocument</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">div</span><span class="dl">"</span><span class="p">);</span>
                  <span class="nx">J</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nf">cloneNode</span><span class="p">(</span><span class="kc">true</span><span class="p">));</span>
                  <span class="nx">I</span> <span class="o">=</span> <span class="nx">J</span><span class="p">.</span><span class="nx">innerHTML</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nf">clean</span><span class="p">([</span>
                  <span class="nx">I</span><span class="p">.</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/ jQuery</span><span class="se">\d</span><span class="sr">+="</span><span class="se">(?:\d</span><span class="sr">+|null</span><span class="se">)</span><span class="sr">"/g</span><span class="p">,</span> <span class="dl">""</span><span class="p">).</span><span class="nf">replace</span><span class="p">(</span>
                    <span class="sr">/^</span><span class="se">\s</span><span class="sr">*/</span><span class="p">,</span>
                    <span class="dl">""</span><span class="p">,</span>
                  <span class="p">),</span>
                <span class="p">])[</span><span class="mi">0</span><span class="p">];</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">cloneNode</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;);</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">G</span> <span class="o">===</span> <span class="kc">true</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">H</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nf">find</span><span class="p">(</span><span class="dl">"</span><span class="s2">*</span><span class="dl">"</span><span class="p">).</span><span class="nf">andSelf</span><span class="p">(),</span>
                <span class="nx">F</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
              <span class="nx">E</span><span class="p">.</span><span class="nf">find</span><span class="p">(</span><span class="dl">"</span><span class="s2">*</span><span class="dl">"</span><span class="p">)</span>
                <span class="p">.</span><span class="nf">andSelf</span><span class="p">()</span>
                <span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
                  <span class="k">if </span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">nodeName</span> <span class="o">!==</span> <span class="nx">H</span><span class="p">[</span><span class="nx">F</span><span class="p">].</span><span class="nx">nodeName</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="k">return</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                  <span class="kd">var</span> <span class="nx">I</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">H</span><span class="p">[</span><span class="nx">F</span><span class="p">],</span> <span class="dl">"</span><span class="s2">events</span><span class="dl">"</span><span class="p">);</span>
                  <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">K</span> <span class="k">in</span> <span class="nx">I</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">J</span> <span class="k">in</span> <span class="nx">I</span><span class="p">[</span><span class="nx">K</span><span class="p">])</span> <span class="p">&#123;</span>
                      <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">K</span><span class="p">,</span> <span class="nx">I</span><span class="p">[</span><span class="nx">K</span><span class="p">][</span><span class="nx">J</span><span class="p">],</span> <span class="nx">I</span><span class="p">[</span><span class="nx">K</span><span class="p">][</span><span class="nx">J</span><span class="p">].</span><span class="nx">data</span><span class="p">);</span>
                    <span class="p">&#125;</span>
                  <span class="p">&#125;</span>
                  <span class="nx">F</span><span class="o">++</span><span class="p">;</span>
                <span class="p">&#125;);</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">E</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">filter</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">pushStack</span><span class="p">(</span>
              <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">isFunction</span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="o">&amp;&amp;</span>
                <span class="nx">o</span><span class="p">.</span><span class="nf">grep</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">return</span> <span class="nx">E</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="nx">F</span><span class="p">);</span>
                <span class="p">&#125;))</span> <span class="o">||</span>
                <span class="nx">o</span><span class="p">.</span><span class="nf">multiFilter</span><span class="p">(</span>
                  <span class="nx">E</span><span class="p">,</span>
                  <span class="nx">o</span><span class="p">.</span><span class="nf">grep</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="k">return</span> <span class="nx">F</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span><span class="p">;</span>
                  <span class="p">&#125;),</span>
                <span class="p">),</span>
              <span class="dl">"</span><span class="s2">filter</span><span class="dl">"</span><span class="p">,</span>
              <span class="nx">E</span><span class="p">,</span>
            <span class="p">);</span>
          <span class="p">&#125;,</span>
          <span class="na">closest</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">G</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">expr</span><span class="p">.</span><span class="nx">match</span><span class="p">.</span><span class="nx">POS</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">?</span> <span class="nf">o</span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">:</span> <span class="kc">null</span><span class="p">,</span>
              <span class="nx">F</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">map</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">H</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span>
              <span class="k">while </span><span class="p">(</span><span class="nx">H</span> <span class="o">&amp;&amp;</span> <span class="nx">H</span><span class="p">.</span><span class="nx">ownerDocument</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">G</span> <span class="p">?</span> <span class="nx">G</span><span class="p">.</span><span class="nf">index</span><span class="p">(</span><span class="nx">H</span><span class="p">)</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span> <span class="p">:</span> <span class="nf">o</span><span class="p">(</span><span class="nx">H</span><span class="p">).</span><span class="nf">is</span><span class="p">(</span><span class="nx">E</span><span class="p">))</span> <span class="p">&#123;</span>
                  <span class="nx">o</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">H</span><span class="p">,</span> <span class="dl">"</span><span class="s2">closest</span><span class="dl">"</span><span class="p">,</span> <span class="nx">F</span><span class="p">);</span>
                  <span class="k">return</span> <span class="nx">H</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="nx">H</span> <span class="o">=</span> <span class="nx">H</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">;</span>
                <span class="nx">F</span><span class="o">++</span><span class="p">;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;);</span>
          <span class="p">&#125;,</span>
          <span class="na">not</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">E</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">string</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">E</span><span class="p">))</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">pushStack</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">multiFilter</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="kc">true</span><span class="p">),</span> <span class="dl">"</span><span class="s2">not</span><span class="dl">"</span><span class="p">,</span> <span class="nx">E</span><span class="p">);</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                <span class="nx">E</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">multiFilter</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="kd">var</span> <span class="nx">F</span> <span class="o">=</span> <span class="nx">E</span><span class="p">.</span><span class="nx">length</span> <span class="o">&amp;&amp;</span> <span class="nx">E</span><span class="p">[</span><span class="nx">E</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">]</span> <span class="o">!==</span> <span class="nx">g</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">E</span><span class="p">.</span><span class="nx">nodeType</span><span class="p">;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">filter</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="nx">F</span> <span class="p">?</span> <span class="nx">o</span><span class="p">.</span><span class="nf">inArray</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">E</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="p">:</span> <span class="k">this</span> <span class="o">!=</span> <span class="nx">E</span><span class="p">;</span>
            <span class="p">&#125;);</span>
          <span class="p">&#125;,</span>
          <span class="na">add</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">pushStack</span><span class="p">(</span>
              <span class="nx">o</span><span class="p">.</span><span class="nf">unique</span><span class="p">(</span>
                <span class="nx">o</span><span class="p">.</span><span class="nf">merge</span><span class="p">(</span>
                  <span class="k">this</span><span class="p">.</span><span class="nf">get</span><span class="p">(),</span>
                  <span class="k">typeof</span> <span class="nx">E</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">string</span><span class="dl">"</span> <span class="p">?</span> <span class="nf">o</span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">:</span> <span class="nx">o</span><span class="p">.</span><span class="nf">makeArray</span><span class="p">(</span><span class="nx">E</span><span class="p">),</span>
                <span class="p">),</span>
              <span class="p">),</span>
            <span class="p">);</span>
          <span class="p">&#125;,</span>
          <span class="na">is</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="o">!!</span><span class="nx">E</span> <span class="o">&amp;&amp;</span> <span class="nx">o</span><span class="p">.</span><span class="nf">multiFilter</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="k">this</span><span class="p">).</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">hasClass</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="o">!!</span><span class="nx">E</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nf">is</span><span class="p">(</span><span class="dl">"</span><span class="s2">.</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">E</span><span class="p">);</span>
          <span class="p">&#125;,</span>
          <span class="na">val</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">K</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">K</span> <span class="o">===</span> <span class="nx">g</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">nodeName</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="dl">"</span><span class="s2">option</span><span class="dl">"</span><span class="p">))</span> <span class="p">&#123;</span>
                  <span class="k">return </span><span class="p">(</span><span class="nx">E</span><span class="p">.</span><span class="nx">attributes</span><span class="p">.</span><span class="nx">value</span> <span class="o">||</span> <span class="p">&#123;&#125;).</span><span class="nx">specified</span>
                    <span class="p">?</span> <span class="nx">E</span><span class="p">.</span><span class="nx">value</span>
                    <span class="p">:</span> <span class="nx">E</span><span class="p">.</span><span class="nx">text</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">nodeName</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="dl">"</span><span class="s2">select</span><span class="dl">"</span><span class="p">))</span> <span class="p">&#123;</span>
                  <span class="kd">var</span> <span class="nx">I</span> <span class="o">=</span> <span class="nx">E</span><span class="p">.</span><span class="nx">selectedIndex</span><span class="p">,</span>
                    <span class="nx">L</span> <span class="o">=</span> <span class="p">[],</span>
                    <span class="nx">M</span> <span class="o">=</span> <span class="nx">E</span><span class="p">.</span><span class="nx">options</span><span class="p">,</span>
                    <span class="nx">H</span> <span class="o">=</span> <span class="nx">E</span><span class="p">.</span><span class="nx">type</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">select-one</span><span class="dl">"</span><span class="p">;</span>
                  <span class="k">if</span> <span class="p">(</span><span class="nx">I</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="k">return</span> <span class="kc">null</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                  <span class="k">for</span> <span class="p">(</span>
                    <span class="kd">var</span> <span class="nx">F</span> <span class="o">=</span> <span class="nx">H</span> <span class="p">?</span> <span class="nx">I</span> <span class="p">:</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">J</span> <span class="o">=</span> <span class="nx">H</span> <span class="p">?</span> <span class="nx">I</span> <span class="o">+</span> <span class="mi">1</span> <span class="p">:</span> <span class="nx">M</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>
                    <span class="nx">F</span> <span class="o">&lt;</span> <span class="nx">J</span><span class="p">;</span>
                    <span class="nx">F</span><span class="o">++</span>
                  <span class="p">)</span> <span class="p">&#123;</span>
                    <span class="kd">var</span> <span class="nx">G</span> <span class="o">=</span> <span class="nx">M</span><span class="p">[</span><span class="nx">F</span><span class="p">];</span>
                    <span class="k">if </span><span class="p">(</span><span class="nx">G</span><span class="p">.</span><span class="nx">selected</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="nx">K</span> <span class="o">=</span> <span class="nf">o</span><span class="p">(</span><span class="nx">G</span><span class="p">).</span><span class="nf">val</span><span class="p">();</span>
                      <span class="k">if </span><span class="p">(</span><span class="nx">H</span><span class="p">)</span> <span class="p">&#123;</span>
                        <span class="k">return</span> <span class="nx">K</span><span class="p">;</span>
                      <span class="p">&#125;</span>
                      <span class="nx">L</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">K</span><span class="p">);</span>
                    <span class="p">&#125;</span>
                  <span class="p">&#125;</span>
                  <span class="k">return</span> <span class="nx">L</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="k">return </span><span class="p">(</span><span class="nx">E</span><span class="p">.</span><span class="nx">value</span> <span class="o">||</span> <span class="dl">""</span><span class="p">).</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/</span><span class="se">\r</span><span class="sr">/g</span><span class="p">,</span> <span class="dl">""</span><span class="p">);</span>
              <span class="p">&#125;</span>
              <span class="k">return</span> <span class="nx">g</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">K</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">number</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">K</span> <span class="o">+=</span> <span class="dl">""</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">!=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span><span class="p">;</span>
              <span class="p">&#125;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">isArray</span><span class="p">(</span><span class="nx">K</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="sr">/radio|checkbox/</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">type</span><span class="p">))</span> <span class="p">&#123;</span>
                <span class="k">this</span><span class="p">.</span><span class="nx">checked</span> <span class="o">=</span>
                  <span class="nx">o</span><span class="p">.</span><span class="nf">inArray</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">value</span><span class="p">,</span> <span class="nx">K</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mi">0</span> <span class="o">||</span> <span class="nx">o</span><span class="p">.</span><span class="nf">inArray</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span> <span class="nx">K</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">;</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">nodeName</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="dl">"</span><span class="s2">select</span><span class="dl">"</span><span class="p">))</span> <span class="p">&#123;</span>
                  <span class="kd">var</span> <span class="nx">N</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">makeArray</span><span class="p">(</span><span class="nx">K</span><span class="p">);</span>
                  <span class="nf">o</span><span class="p">(</span><span class="dl">"</span><span class="s2">option</span><span class="dl">"</span><span class="p">,</span> <span class="k">this</span><span class="p">).</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
                    <span class="k">this</span><span class="p">.</span><span class="nx">selected</span> <span class="o">=</span>
                      <span class="nx">o</span><span class="p">.</span><span class="nf">inArray</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">value</span><span class="p">,</span> <span class="nx">N</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mi">0</span> <span class="o">||</span>
                      <span class="nx">o</span><span class="p">.</span><span class="nf">inArray</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">text</span><span class="p">,</span> <span class="nx">N</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">;</span>
                  <span class="p">&#125;);</span>
                  <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">N</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="k">this</span><span class="p">.</span><span class="nx">selectedIndex</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                  <span class="k">this</span><span class="p">.</span><span class="nx">value</span> <span class="o">=</span> <span class="nx">K</span><span class="p">;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;);</span>
          <span class="p">&#125;,</span>
          <span class="na">html</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nx">E</span> <span class="o">===</span> <span class="nx">g</span>
              <span class="p">?</span> <span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span>
                <span class="p">?</span> <span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">innerHTML</span><span class="p">.</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/ jQuery</span><span class="se">\d</span><span class="sr">+="</span><span class="se">(?:\d</span><span class="sr">+|null</span><span class="se">)</span><span class="sr">"/g</span><span class="p">,</span> <span class="dl">""</span><span class="p">)</span>
                <span class="p">:</span> <span class="kc">null</span>
              <span class="p">:</span> <span class="k">this</span><span class="p">.</span><span class="nf">empty</span><span class="p">().</span><span class="nf">append</span><span class="p">(</span><span class="nx">E</span><span class="p">);</span>
          <span class="p">&#125;,</span>
          <span class="na">replaceWith</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">after</span><span class="p">(</span><span class="nx">E</span><span class="p">).</span><span class="nf">remove</span><span class="p">();</span>
          <span class="p">&#125;,</span>
          <span class="na">eq</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">slice</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="o">+</span><span class="nx">E</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span>
          <span class="p">&#125;,</span>
          <span class="na">slice</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">pushStack</span><span class="p">(</span>
              <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nf">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">),</span>
              <span class="dl">"</span><span class="s2">slice</span><span class="dl">"</span><span class="p">,</span>
              <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">).</span><span class="nf">join</span><span class="p">(</span><span class="dl">"</span><span class="s2">,</span><span class="dl">"</span><span class="p">),</span>
            <span class="p">);</span>
          <span class="p">&#125;,</span>
          <span class="na">map</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">pushStack</span><span class="p">(</span>
              <span class="nx">o</span><span class="p">.</span><span class="nf">map</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="nx">E</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="nx">F</span><span class="p">,</span> <span class="nx">G</span><span class="p">);</span>
              <span class="p">&#125;),</span>
            <span class="p">);</span>
          <span class="p">&#125;,</span>
          <span class="na">andSelf</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">prevObject</span><span class="p">);</span>
          <span class="p">&#125;,</span>
          <span class="na">domManip</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">J</span><span class="p">,</span> <span class="nx">M</span><span class="p">,</span> <span class="nx">L</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">I</span> <span class="o">=</span> <span class="p">(</span>
                  <span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">ownerDocument</span> <span class="o">||</span> <span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span>
                <span class="p">).</span><span class="nf">createDocumentFragment</span><span class="p">(),</span>
                <span class="nx">F</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">clean</span><span class="p">(</span><span class="nx">J</span><span class="p">,</span> <span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">ownerDocument</span> <span class="o">||</span> <span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">I</span><span class="p">),</span>
                <span class="nx">H</span> <span class="o">=</span> <span class="nx">I</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">H</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">G</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">E</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">G</span> <span class="o">&lt;</span> <span class="nx">E</span><span class="p">;</span> <span class="nx">G</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">L</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span>
                    <span class="nc">K</span><span class="p">(</span><span class="k">this</span><span class="p">[</span><span class="nx">G</span><span class="p">],</span> <span class="nx">H</span><span class="p">),</span>
                    <span class="k">this</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">1</span> <span class="o">||</span> <span class="nx">G</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="p">?</span> <span class="nx">I</span><span class="p">.</span><span class="nf">cloneNode</span><span class="p">(</span><span class="kc">true</span><span class="p">)</span> <span class="p">:</span> <span class="nx">I</span><span class="p">,</span>
                  <span class="p">);</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">o</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">z</span><span class="p">);</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
            <span class="kd">function</span> <span class="nf">K</span><span class="p">(</span><span class="nx">N</span><span class="p">,</span> <span class="nx">O</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="nx">M</span> <span class="o">&amp;&amp;</span> <span class="nx">o</span><span class="p">.</span><span class="nf">nodeName</span><span class="p">(</span><span class="nx">N</span><span class="p">,</span> <span class="dl">"</span><span class="s2">table</span><span class="dl">"</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">o</span><span class="p">.</span><span class="nf">nodeName</span><span class="p">(</span><span class="nx">O</span><span class="p">,</span> <span class="dl">"</span><span class="s2">tr</span><span class="dl">"</span><span class="p">)</span>
                <span class="p">?</span> <span class="nx">N</span><span class="p">.</span><span class="nf">getElementsByTagName</span><span class="p">(</span><span class="dl">"</span><span class="s2">tbody</span><span class="dl">"</span><span class="p">)[</span><span class="mi">0</span><span class="p">]</span> <span class="o">||</span>
                    <span class="nx">N</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">N</span><span class="p">.</span><span class="nx">ownerDocument</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">tbody</span><span class="dl">"</span><span class="p">))</span>
                <span class="p">:</span> <span class="nx">N</span><span class="p">;</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;,</span>
        <span class="p">&#125;;</span>
        <span class="nx">o</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">init</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">fn</span><span class="p">;</span>
        <span class="kd">function</span> <span class="nf">z</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">F</span><span class="p">.</span><span class="nx">src</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">o</span><span class="p">.</span><span class="nf">ajax</span><span class="p">(&#123;</span> <span class="na">url</span><span class="p">:</span> <span class="nx">F</span><span class="p">.</span><span class="nx">src</span><span class="p">,</span> <span class="na">async</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span> <span class="na">dataType</span><span class="p">:</span> <span class="dl">"</span><span class="s2">script</span><span class="dl">"</span> <span class="p">&#125;);</span>
          <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
            <span class="nx">o</span><span class="p">.</span><span class="nf">globalEval</span><span class="p">(</span><span class="nx">F</span><span class="p">.</span><span class="nx">text</span> <span class="o">||</span> <span class="nx">F</span><span class="p">.</span><span class="nx">textContent</span> <span class="o">||</span> <span class="nx">F</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">||</span> <span class="dl">""</span><span class="p">);</span>
          <span class="p">&#125;</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">F</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">F</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nf">removeChild</span><span class="p">(</span><span class="nx">F</span><span class="p">);</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;</span>
        <span class="kd">function</span> <span class="nf">e</span><span class="p">()</span> <span class="p">&#123;</span>
          <span class="k">return</span> <span class="o">+</span><span class="k">new</span> <span class="nc">Date</span><span class="p">();</span>
        <span class="p">&#125;</span>
        <span class="nx">o</span><span class="p">.</span><span class="nx">extend</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">extend</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
          <span class="kd">var</span> <span class="nx">J</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">||</span> <span class="p">&#123;&#125;,</span>
            <span class="nx">H</span> <span class="o">=</span> <span class="mi">1</span><span class="p">,</span>
            <span class="nx">I</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span>
            <span class="nx">E</span> <span class="o">=</span> <span class="kc">false</span><span class="p">,</span>
            <span class="nx">G</span><span class="p">;</span>
          <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">J</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">boolean</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">E</span> <span class="o">=</span> <span class="nx">J</span><span class="p">;</span>
            <span class="nx">J</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">||</span> <span class="p">&#123;&#125;;</span>
            <span class="nx">H</span> <span class="o">=</span> <span class="mi">2</span><span class="p">;</span>
          <span class="p">&#125;</span>
          <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">J</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">object</span><span class="dl">"</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nf">isFunction</span><span class="p">(</span><span class="nx">J</span><span class="p">))</span> <span class="p">&#123;</span>
            <span class="nx">J</span> <span class="o">=</span> <span class="p">&#123;&#125;;</span>
          <span class="p">&#125;</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">I</span> <span class="o">==</span> <span class="nx">H</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">J</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span>
            <span class="o">--</span><span class="nx">H</span><span class="p">;</span>
          <span class="p">&#125;</span>
          <span class="k">for</span> <span class="p">(;</span> <span class="nx">H</span> <span class="o">&lt;</span> <span class="nx">I</span><span class="p">;</span> <span class="nx">H</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">((</span><span class="nx">G</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">[</span><span class="nx">H</span><span class="p">])</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">F</span> <span class="k">in</span> <span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="kd">var</span> <span class="nx">K</span> <span class="o">=</span> <span class="nx">J</span><span class="p">[</span><span class="nx">F</span><span class="p">],</span>
                  <span class="nx">L</span> <span class="o">=</span> <span class="nx">G</span><span class="p">[</span><span class="nx">F</span><span class="p">];</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">J</span> <span class="o">===</span> <span class="nx">L</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">continue</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">E</span> <span class="o">&amp;&amp;</span> <span class="nx">L</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">L</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">object</span><span class="dl">"</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">L</span><span class="p">.</span><span class="nx">nodeType</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">J</span><span class="p">[</span><span class="nx">F</span><span class="p">]</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">extend</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">K</span> <span class="o">||</span> <span class="p">(</span><span class="nx">L</span><span class="p">.</span><span class="nx">length</span> <span class="o">!=</span> <span class="kc">null</span> <span class="p">?</span> <span class="p">[]</span> <span class="p">:</span> <span class="p">&#123;&#125;),</span> <span class="nx">L</span><span class="p">);</span>
                <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">L</span> <span class="o">!==</span> <span class="nx">g</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nx">J</span><span class="p">[</span><span class="nx">F</span><span class="p">]</span> <span class="o">=</span> <span class="nx">L</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;</span>
          <span class="k">return</span> <span class="nx">J</span><span class="p">;</span>
        <span class="p">&#125;;</span>
        <span class="kd">var</span> <span class="nx">b</span> <span class="o">=</span> <span class="sr">/z-</span><span class="se">?</span><span class="sr">index|font-</span><span class="se">?</span><span class="sr">weight|opacity|zoom|line-</span><span class="se">?</span><span class="sr">height/i</span><span class="p">,</span>
          <span class="nx">q</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">defaultView</span> <span class="o">||</span> <span class="p">&#123;&#125;,</span>
          <span class="nx">s</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span><span class="p">;</span>
        <span class="nx">o</span><span class="p">.</span><span class="nf">extend</span><span class="p">(&#123;</span>
          <span class="na">noConflict</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">l</span><span class="p">.</span><span class="nx">$</span> <span class="o">=</span> <span class="nx">p</span><span class="p">;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">l</span><span class="p">.</span><span class="nx">jQuery</span> <span class="o">=</span> <span class="nx">y</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">o</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">isFunction</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nx">s</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">[object Function]</span><span class="dl">"</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">isArray</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nx">s</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">[object Array]</span><span class="dl">"</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">isXMLDoc</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return </span><span class="p">(</span>
              <span class="p">(</span><span class="nx">E</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">9</span> <span class="o">&amp;&amp;</span> <span class="nx">E</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">.</span><span class="nx">nodeName</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">HTML</span><span class="dl">"</span><span class="p">)</span> <span class="o">||</span>
              <span class="p">(</span><span class="o">!!</span><span class="nx">E</span><span class="p">.</span><span class="nx">ownerDocument</span> <span class="o">&amp;&amp;</span> <span class="nx">o</span><span class="p">.</span><span class="nf">isXMLDoc</span><span class="p">(</span><span class="nx">E</span><span class="p">.</span><span class="nx">ownerDocument</span><span class="p">))</span>
            <span class="p">);</span>
          <span class="p">&#125;,</span>
          <span class="na">globalEval</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">G</span> <span class="o">&amp;&amp;</span> <span class="sr">/</span><span class="se">\S</span><span class="sr">/</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">G</span><span class="p">))</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">F</span> <span class="o">=</span>
                  <span class="nb">document</span><span class="p">.</span><span class="nf">getElementsByTagName</span><span class="p">(</span><span class="dl">"</span><span class="s2">head</span><span class="dl">"</span><span class="p">)[</span><span class="mi">0</span><span class="p">]</span> <span class="o">||</span>
                  <span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">,</span>
                <span class="nx">E</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">script</span><span class="dl">"</span><span class="p">);</span>
              <span class="nx">E</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">text/javascript</span><span class="dl">"</span><span class="p">;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">scriptEval</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">E</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nf">createTextNode</span><span class="p">(</span><span class="nx">G</span><span class="p">));</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                <span class="nx">E</span><span class="p">.</span><span class="nx">text</span> <span class="o">=</span> <span class="nx">G</span><span class="p">;</span>
              <span class="p">&#125;</span>
              <span class="nx">F</span><span class="p">.</span><span class="nf">insertBefore</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">F</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">);</span>
              <span class="nx">F</span><span class="p">.</span><span class="nf">removeChild</span><span class="p">(</span><span class="nx">E</span><span class="p">);</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;,</span>
          <span class="na">nodeName</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nx">F</span><span class="p">.</span><span class="nx">nodeName</span> <span class="o">&amp;&amp;</span> <span class="nx">F</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">.</span><span class="nf">toUpperCase</span><span class="p">()</span> <span class="o">==</span> <span class="nx">E</span><span class="p">.</span><span class="nf">toUpperCase</span><span class="p">();</span>
          <span class="p">&#125;,</span>
          <span class="na">each</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="nx">K</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">E</span><span class="p">,</span>
              <span class="nx">H</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span>
              <span class="nx">I</span> <span class="o">=</span> <span class="nx">G</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">I</span> <span class="o">===</span> <span class="nx">g</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">for </span><span class="p">(</span><span class="nx">E</span> <span class="k">in</span> <span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">K</span><span class="p">.</span><span class="nf">apply</span><span class="p">(</span><span class="nx">G</span><span class="p">[</span><span class="nx">E</span><span class="p">],</span> <span class="nx">F</span><span class="p">)</span> <span class="o">===</span> <span class="kc">false</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="k">break</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                <span class="k">for</span> <span class="p">(;</span> <span class="nx">H</span> <span class="o">&lt;</span> <span class="nx">I</span><span class="p">;)</span> <span class="p">&#123;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">K</span><span class="p">.</span><span class="nf">apply</span><span class="p">(</span><span class="nx">G</span><span class="p">[</span><span class="nx">H</span><span class="o">++</span><span class="p">],</span> <span class="nx">F</span><span class="p">)</span> <span class="o">===</span> <span class="kc">false</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="k">break</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">I</span> <span class="o">===</span> <span class="nx">g</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">for </span><span class="p">(</span><span class="nx">E</span> <span class="k">in</span> <span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">K</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nx">G</span><span class="p">[</span><span class="nx">E</span><span class="p">],</span> <span class="nx">E</span><span class="p">,</span> <span class="nx">G</span><span class="p">[</span><span class="nx">E</span><span class="p">])</span> <span class="o">===</span> <span class="kc">false</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="k">break</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                <span class="k">for</span> <span class="p">(</span>
                  <span class="kd">var</span> <span class="nx">J</span> <span class="o">=</span> <span class="nx">G</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span>
                  <span class="nx">H</span> <span class="o">&lt;</span> <span class="nx">I</span> <span class="o">&amp;&amp;</span> <span class="nx">K</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nx">J</span><span class="p">,</span> <span class="nx">H</span><span class="p">,</span> <span class="nx">J</span><span class="p">)</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">;</span>
                  <span class="nx">J</span> <span class="o">=</span> <span class="nx">G</span><span class="p">[</span><span class="o">++</span><span class="nx">H</span><span class="p">]</span>
                <span class="p">)</span> <span class="p">&#123;&#125;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">G</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">prop</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">H</span><span class="p">,</span> <span class="nx">I</span><span class="p">,</span> <span class="nx">G</span><span class="p">,</span> <span class="nx">F</span><span class="p">,</span> <span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">isFunction</span><span class="p">(</span><span class="nx">I</span><span class="p">))</span> <span class="p">&#123;</span>
              <span class="nx">I</span> <span class="o">=</span> <span class="nx">I</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nx">H</span><span class="p">,</span> <span class="nx">F</span><span class="p">);</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="k">typeof</span> <span class="nx">I</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">number</span><span class="dl">"</span> <span class="o">&amp;&amp;</span> <span class="nx">G</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">curCSS</span><span class="dl">"</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">b</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">E</span><span class="p">)</span>
              <span class="p">?</span> <span class="nx">I</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">px</span><span class="dl">"</span>
              <span class="p">:</span> <span class="nx">I</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">className</span><span class="p">:</span> <span class="p">&#123;</span>
            <span class="na">add</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">o</span><span class="p">.</span><span class="nf">each</span><span class="p">((</span><span class="nx">F</span> <span class="o">||</span> <span class="dl">""</span><span class="p">).</span><span class="nf">split</span><span class="p">(</span><span class="sr">/</span><span class="se">\s</span><span class="sr">+/</span><span class="p">),</span> <span class="nf">function </span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="nx">H</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">E</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">==</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">className</span><span class="p">.</span><span class="nf">has</span><span class="p">(</span><span class="nx">E</span><span class="p">.</span><span class="nx">className</span><span class="p">,</span> <span class="nx">H</span><span class="p">))</span> <span class="p">&#123;</span>
                  <span class="nx">E</span><span class="p">.</span><span class="nx">className</span> <span class="o">+=</span> <span class="p">(</span><span class="nx">E</span><span class="p">.</span><span class="nx">className</span> <span class="p">?</span> <span class="dl">"</span><span class="s2"> </span><span class="dl">"</span> <span class="p">:</span> <span class="dl">""</span><span class="p">)</span> <span class="o">+</span> <span class="nx">H</span><span class="p">;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;);</span>
            <span class="p">&#125;,</span>
            <span class="na">remove</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">E</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">==</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">E</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span>
                  <span class="nx">F</span> <span class="o">!==</span> <span class="nx">g</span>
                    <span class="p">?</span> <span class="nx">o</span>
                        <span class="p">.</span><span class="nf">grep</span><span class="p">(</span><span class="nx">E</span><span class="p">.</span><span class="nx">className</span><span class="p">.</span><span class="nf">split</span><span class="p">(</span><span class="sr">/</span><span class="se">\s</span><span class="sr">+/</span><span class="p">),</span> <span class="nf">function </span><span class="p">(</span><span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
                          <span class="k">return</span> <span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">className</span><span class="p">.</span><span class="nf">has</span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">G</span><span class="p">);</span>
                        <span class="p">&#125;)</span>
                        <span class="p">.</span><span class="nf">join</span><span class="p">(</span><span class="dl">"</span><span class="s2"> </span><span class="dl">"</span><span class="p">)</span>
                    <span class="p">:</span> <span class="dl">""</span><span class="p">;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;,</span>
            <span class="na">has</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return </span><span class="p">(</span>
                <span class="nx">F</span> <span class="o">&amp;&amp;</span>
                <span class="nx">o</span><span class="p">.</span><span class="nf">inArray</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="p">(</span><span class="nx">F</span><span class="p">.</span><span class="nx">className</span> <span class="o">||</span> <span class="nx">F</span><span class="p">).</span><span class="nf">toString</span><span class="p">().</span><span class="nf">split</span><span class="p">(</span><span class="sr">/</span><span class="se">\s</span><span class="sr">+/</span><span class="p">))</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span>
              <span class="p">);</span>
            <span class="p">&#125;,</span>
          <span class="p">&#125;,</span>
          <span class="na">swap</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">H</span><span class="p">,</span> <span class="nx">G</span><span class="p">,</span> <span class="nx">I</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="p">&#123;&#125;;</span>
            <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">F</span> <span class="k">in</span> <span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">E</span><span class="p">[</span><span class="nx">F</span><span class="p">]</span> <span class="o">=</span> <span class="nx">H</span><span class="p">.</span><span class="nx">style</span><span class="p">[</span><span class="nx">F</span><span class="p">];</span>
              <span class="nx">H</span><span class="p">.</span><span class="nx">style</span><span class="p">[</span><span class="nx">F</span><span class="p">]</span> <span class="o">=</span> <span class="nx">G</span><span class="p">[</span><span class="nx">F</span><span class="p">];</span>
            <span class="p">&#125;</span>
            <span class="nx">I</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nx">H</span><span class="p">);</span>
            <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">F</span> <span class="k">in</span> <span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">H</span><span class="p">.</span><span class="nx">style</span><span class="p">[</span><span class="nx">F</span><span class="p">]</span> <span class="o">=</span> <span class="nx">E</span><span class="p">[</span><span class="nx">F</span><span class="p">];</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;,</span>
          <span class="na">css</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">H</span><span class="p">,</span> <span class="nx">F</span><span class="p">,</span> <span class="nx">J</span><span class="p">,</span> <span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">F</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">width</span><span class="dl">"</span> <span class="o">||</span> <span class="nx">F</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">height</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">L</span><span class="p">,</span>
                <span class="nx">G</span> <span class="o">=</span> <span class="p">&#123;</span>
                  <span class="na">position</span><span class="p">:</span> <span class="dl">"</span><span class="s2">absolute</span><span class="dl">"</span><span class="p">,</span>
                  <span class="na">visibility</span><span class="p">:</span> <span class="dl">"</span><span class="s2">hidden</span><span class="dl">"</span><span class="p">,</span>
                  <span class="na">display</span><span class="p">:</span> <span class="dl">"</span><span class="s2">block</span><span class="dl">"</span><span class="p">,</span>
                <span class="p">&#125;,</span>
                <span class="nx">K</span> <span class="o">=</span> <span class="nx">F</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">width</span><span class="dl">"</span> <span class="p">?</span> <span class="p">[</span><span class="dl">"</span><span class="s2">Left</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">Right</span><span class="dl">"</span><span class="p">]</span> <span class="p">:</span> <span class="p">[</span><span class="dl">"</span><span class="s2">Top</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">Bottom</span><span class="dl">"</span><span class="p">];</span>
              <span class="kd">function</span> <span class="nf">I</span><span class="p">()</span> <span class="p">&#123;</span>
                <span class="nx">L</span> <span class="o">=</span> <span class="nx">F</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">width</span><span class="dl">"</span> <span class="p">?</span> <span class="nx">H</span><span class="p">.</span><span class="nx">offsetWidth</span> <span class="p">:</span> <span class="nx">H</span><span class="p">.</span><span class="nx">offsetHeight</span><span class="p">;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">E</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">border</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">return</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="nx">o</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nx">K</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
                  <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nx">L</span> <span class="o">-=</span> <span class="nf">parseFloat</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">curCSS</span><span class="p">(</span><span class="nx">H</span><span class="p">,</span> <span class="dl">"</span><span class="s2">padding</span><span class="dl">"</span> <span class="o">+</span> <span class="k">this</span><span class="p">,</span> <span class="kc">true</span><span class="p">))</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">E</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">margin</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nx">L</span> <span class="o">+=</span> <span class="nf">parseFloat</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">curCSS</span><span class="p">(</span><span class="nx">H</span><span class="p">,</span> <span class="dl">"</span><span class="s2">margin</span><span class="dl">"</span> <span class="o">+</span> <span class="k">this</span><span class="p">,</span> <span class="kc">true</span><span class="p">))</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span>
                  <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                    <span class="nx">L</span> <span class="o">-=</span>
                      <span class="nf">parseFloat</span><span class="p">(</span>
                        <span class="nx">o</span><span class="p">.</span><span class="nf">curCSS</span><span class="p">(</span><span class="nx">H</span><span class="p">,</span> <span class="dl">"</span><span class="s2">border</span><span class="dl">"</span> <span class="o">+</span> <span class="k">this</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">Width</span><span class="dl">"</span><span class="p">,</span> <span class="kc">true</span><span class="p">),</span>
                      <span class="p">)</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;);</span>
              <span class="p">&#125;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">H</span><span class="p">.</span><span class="nx">offsetWidth</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nc">I</span><span class="p">();</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                <span class="nx">o</span><span class="p">.</span><span class="nf">swap</span><span class="p">(</span><span class="nx">H</span><span class="p">,</span> <span class="nx">G</span><span class="p">,</span> <span class="nx">I</span><span class="p">);</span>
              <span class="p">&#125;</span>
              <span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">max</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">round</span><span class="p">(</span><span class="nx">L</span><span class="p">));</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nf">curCSS</span><span class="p">(</span><span class="nx">H</span><span class="p">,</span> <span class="nx">F</span><span class="p">,</span> <span class="nx">J</span><span class="p">);</span>
          <span class="p">&#125;,</span>
          <span class="na">curCSS</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">I</span><span class="p">,</span> <span class="nx">F</span><span class="p">,</span> <span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">L</span><span class="p">,</span>
              <span class="nx">E</span> <span class="o">=</span> <span class="nx">I</span><span class="p">.</span><span class="nx">style</span><span class="p">;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">F</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">opacity</span><span class="dl">"</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">opacity</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">L</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="dl">"</span><span class="s2">opacity</span><span class="dl">"</span><span class="p">);</span>
              <span class="k">return</span> <span class="nx">L</span> <span class="o">==</span> <span class="dl">""</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">1</span><span class="dl">"</span> <span class="p">:</span> <span class="nx">L</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">F</span><span class="p">.</span><span class="nf">match</span><span class="p">(</span><span class="sr">/float/i</span><span class="p">))</span> <span class="p">&#123;</span>
              <span class="nx">F</span> <span class="o">=</span> <span class="nx">w</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">G</span> <span class="o">&amp;&amp;</span> <span class="nx">E</span> <span class="o">&amp;&amp;</span> <span class="nx">E</span><span class="p">[</span><span class="nx">F</span><span class="p">])</span> <span class="p">&#123;</span>
              <span class="nx">L</span> <span class="o">=</span> <span class="nx">E</span><span class="p">[</span><span class="nx">F</span><span class="p">];</span>
            <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">q</span><span class="p">.</span><span class="nx">getComputedStyle</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">F</span><span class="p">.</span><span class="nf">match</span><span class="p">(</span><span class="sr">/float/i</span><span class="p">))</span> <span class="p">&#123;</span>
                  <span class="nx">F</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">float</span><span class="dl">"</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="nx">F</span> <span class="o">=</span> <span class="nx">F</span><span class="p">.</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/</span><span class="se">([</span><span class="sr">A-Z</span><span class="se">])</span><span class="sr">/g</span><span class="p">,</span> <span class="dl">"</span><span class="s2">-$1</span><span class="dl">"</span><span class="p">).</span><span class="nf">toLowerCase</span><span class="p">();</span>
                <span class="kd">var</span> <span class="nx">M</span> <span class="o">=</span> <span class="nx">q</span><span class="p">.</span><span class="nf">getComputedStyle</span><span class="p">(</span><span class="nx">I</span><span class="p">,</span> <span class="kc">null</span><span class="p">);</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">M</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">L</span> <span class="o">=</span> <span class="nx">M</span><span class="p">.</span><span class="nf">getPropertyValue</span><span class="p">(</span><span class="nx">F</span><span class="p">);</span>
                <span class="p">&#125;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">F</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">opacity</span><span class="dl">"</span> <span class="o">&amp;&amp;</span> <span class="nx">L</span> <span class="o">==</span> <span class="dl">""</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">L</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">1</span><span class="dl">"</span><span class="p">;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">I</span><span class="p">.</span><span class="nx">currentStyle</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="kd">var</span> <span class="nx">J</span> <span class="o">=</span> <span class="nx">F</span><span class="p">.</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/</span><span class="se">\-(\w)</span><span class="sr">/g</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">N</span><span class="p">,</span> <span class="nx">O</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="k">return</span> <span class="nx">O</span><span class="p">.</span><span class="nf">toUpperCase</span><span class="p">();</span>
                  <span class="p">&#125;);</span>
                  <span class="nx">L</span> <span class="o">=</span> <span class="nx">I</span><span class="p">.</span><span class="nx">currentStyle</span><span class="p">[</span><span class="nx">F</span><span class="p">]</span> <span class="o">||</span> <span class="nx">I</span><span class="p">.</span><span class="nx">currentStyle</span><span class="p">[</span><span class="nx">J</span><span class="p">];</span>
                  <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="sr">/^</span><span class="se">\d</span><span class="sr">+</span><span class="se">(</span><span class="sr">px</span><span class="se">)?</span><span class="sr">$/i</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">L</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="sr">/^</span><span class="se">\d</span><span class="sr">/</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">L</span><span class="p">))</span> <span class="p">&#123;</span>
                    <span class="kd">var</span> <span class="nx">H</span> <span class="o">=</span> <span class="nx">E</span><span class="p">.</span><span class="nx">left</span><span class="p">,</span>
                      <span class="nx">K</span> <span class="o">=</span> <span class="nx">I</span><span class="p">.</span><span class="nx">runtimeStyle</span><span class="p">.</span><span class="nx">left</span><span class="p">;</span>
                    <span class="nx">I</span><span class="p">.</span><span class="nx">runtimeStyle</span><span class="p">.</span><span class="nx">left</span> <span class="o">=</span> <span class="nx">I</span><span class="p">.</span><span class="nx">currentStyle</span><span class="p">.</span><span class="nx">left</span><span class="p">;</span>
                    <span class="nx">E</span><span class="p">.</span><span class="nx">left</span> <span class="o">=</span> <span class="nx">L</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span>
                    <span class="nx">L</span> <span class="o">=</span> <span class="nx">E</span><span class="p">.</span><span class="nx">pixelLeft</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">px</span><span class="dl">"</span><span class="p">;</span>
                    <span class="nx">E</span><span class="p">.</span><span class="nx">left</span> <span class="o">=</span> <span class="nx">H</span><span class="p">;</span>
                    <span class="nx">I</span><span class="p">.</span><span class="nx">runtimeStyle</span><span class="p">.</span><span class="nx">left</span> <span class="o">=</span> <span class="nx">K</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">L</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">clean</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">K</span><span class="p">,</span> <span class="nx">I</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">K</span> <span class="o">=</span> <span class="nx">K</span> <span class="o">||</span> <span class="nb">document</span><span class="p">;</span>
            <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">K</span><span class="p">.</span><span class="nx">createElement</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">undefined</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">K</span> <span class="o">=</span> <span class="nx">K</span><span class="p">.</span><span class="nx">ownerDocument</span> <span class="o">||</span> <span class="p">(</span><span class="nx">K</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">K</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">ownerDocument</span><span class="p">)</span> <span class="o">||</span> <span class="nb">document</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">I</span> <span class="o">&amp;&amp;</span> <span class="nx">F</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">F</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">string</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">H</span> <span class="o">=</span> <span class="sr">/^&lt;</span><span class="se">(\w</span><span class="sr">+</span><span class="se">)\s</span><span class="sr">*</span><span class="se">\/?</span><span class="sr">&gt;$/</span><span class="p">.</span><span class="nf">exec</span><span class="p">(</span><span class="nx">F</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">H</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="p">[</span><span class="nx">K</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="nx">H</span><span class="p">[</span><span class="mi">1</span><span class="p">])];</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="kd">var</span> <span class="nx">G</span> <span class="o">=</span> <span class="p">[],</span>
              <span class="nx">E</span> <span class="o">=</span> <span class="p">[],</span>
              <span class="nx">L</span> <span class="o">=</span> <span class="nx">K</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">div</span><span class="dl">"</span><span class="p">);</span>
            <span class="nx">o</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">P</span><span class="p">,</span> <span class="nx">S</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">S</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">number</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">S</span> <span class="o">+=</span> <span class="dl">""</span><span class="p">;</span>
              <span class="p">&#125;</span>
              <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">S</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span><span class="p">;</span>
              <span class="p">&#125;</span>
              <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">S</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">string</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">S</span> <span class="o">=</span> <span class="nx">S</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/</span><span class="se">(</span><span class="sr">&lt;</span><span class="se">(\w</span><span class="sr">+</span><span class="se">)[^</span><span class="sr">&gt;</span><span class="se">]</span><span class="sr">*</span><span class="se">?)\/</span><span class="sr">&gt;/g</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">U</span><span class="p">,</span> <span class="nx">V</span><span class="p">,</span> <span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">return</span> <span class="nx">T</span><span class="p">.</span><span class="nf">match</span><span class="p">(</span>
                    <span class="sr">/^</span><span class="se">(</span><span class="sr">abbr|br|col|img|input|link|meta|param|hr|area|embed</span><span class="se">)</span><span class="sr">$/i</span><span class="p">,</span>
                  <span class="p">)</span>
                    <span class="p">?</span> <span class="nx">U</span>
                    <span class="p">:</span> <span class="nx">V</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">&gt;&lt;/</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">T</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">&gt;</span><span class="dl">"</span><span class="p">;</span>
                <span class="p">&#125;);</span>
                <span class="kd">var</span> <span class="nx">O</span> <span class="o">=</span> <span class="nx">S</span><span class="p">.</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/^</span><span class="se">\s</span><span class="sr">+/</span><span class="p">,</span> <span class="dl">""</span><span class="p">).</span><span class="nf">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">10</span><span class="p">).</span><span class="nf">toLowerCase</span><span class="p">();</span>
                <span class="kd">var</span> <span class="nx">Q</span> <span class="o">=</span> <span class="p">(</span><span class="o">!</span><span class="nx">O</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="dl">"</span><span class="s2">&lt;opt</span><span class="dl">"</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">[</span>
                  <span class="mi">1</span><span class="p">,</span>
                  <span class="dl">"</span><span class="s2">&lt;select multiple='multiple'&gt;</span><span class="dl">"</span><span class="p">,</span>
                  <span class="dl">"</span><span class="s2">&lt;/select&gt;</span><span class="dl">"</span><span class="p">,</span>
                <span class="p">])</span> <span class="o">||</span>
                  <span class="p">(</span><span class="o">!</span><span class="nx">O</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="dl">"</span><span class="s2">&lt;leg</span><span class="dl">"</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="dl">"</span><span class="s2">&lt;fieldset&gt;</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">&lt;/fieldset&gt;</span><span class="dl">"</span><span class="p">])</span> <span class="o">||</span>
                  <span class="p">(</span><span class="nx">O</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^&lt;</span><span class="se">(</span><span class="sr">thead|tbody|tfoot|colg|cap</span><span class="se">)</span><span class="sr">/</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">[</span>
                    <span class="mi">1</span><span class="p">,</span>
                    <span class="dl">"</span><span class="s2">&lt;table&gt;</span><span class="dl">"</span><span class="p">,</span>
                    <span class="dl">"</span><span class="s2">&lt;/table&gt;</span><span class="dl">"</span><span class="p">,</span>
                  <span class="p">])</span> <span class="o">||</span>
                  <span class="p">(</span><span class="o">!</span><span class="nx">O</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="dl">"</span><span class="s2">&lt;tr</span><span class="dl">"</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">[</span>
                    <span class="mi">2</span><span class="p">,</span>
                    <span class="dl">"</span><span class="s2">&lt;table&gt;&lt;tbody&gt;</span><span class="dl">"</span><span class="p">,</span>
                    <span class="dl">"</span><span class="s2">&lt;/tbody&gt;&lt;/table&gt;</span><span class="dl">"</span><span class="p">,</span>
                  <span class="p">])</span> <span class="o">||</span>
                  <span class="p">((</span><span class="o">!</span><span class="nx">O</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="dl">"</span><span class="s2">&lt;td</span><span class="dl">"</span><span class="p">)</span> <span class="o">||</span> <span class="o">!</span><span class="nx">O</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="dl">"</span><span class="s2">&lt;th</span><span class="dl">"</span><span class="p">))</span> <span class="o">&amp;&amp;</span> <span class="p">[</span>
                    <span class="mi">3</span><span class="p">,</span>
                    <span class="dl">"</span><span class="s2">&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;</span><span class="dl">"</span><span class="p">,</span>
                    <span class="dl">"</span><span class="s2">&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;</span><span class="dl">"</span><span class="p">,</span>
                  <span class="p">])</span> <span class="o">||</span>
                  <span class="p">(</span><span class="o">!</span><span class="nx">O</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="dl">"</span><span class="s2">&lt;col</span><span class="dl">"</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">[</span>
                    <span class="mi">2</span><span class="p">,</span>
                    <span class="dl">"</span><span class="s2">&lt;table&gt;&lt;tbody&gt;&lt;/tbody&gt;&lt;colgroup&gt;</span><span class="dl">"</span><span class="p">,</span>
                    <span class="dl">"</span><span class="s2">&lt;/colgroup&gt;&lt;/table&gt;</span><span class="dl">"</span><span class="p">,</span>
                  <span class="p">])</span> <span class="o">||</span>
                  <span class="p">(</span><span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">htmlSerialize</span> <span class="o">&amp;&amp;</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="dl">"</span><span class="s2">div&lt;div&gt;</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">&lt;/div&gt;</span><span class="dl">"</span><span class="p">])</span> <span class="o">||</span> <span class="p">[</span>
                    <span class="mi">0</span><span class="p">,</span>
                    <span class="dl">""</span><span class="p">,</span>
                    <span class="dl">""</span><span class="p">,</span>
                  <span class="p">];</span>
                <span class="nx">L</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="nx">Q</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">+</span> <span class="nx">S</span> <span class="o">+</span> <span class="nx">Q</span><span class="p">[</span><span class="mi">2</span><span class="p">];</span>
                <span class="k">while </span><span class="p">(</span><span class="nx">Q</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">--</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">L</span> <span class="o">=</span> <span class="nx">L</span><span class="p">.</span><span class="nx">lastChild</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">tbody</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="kd">var</span> <span class="nx">R</span> <span class="o">=</span> <span class="sr">/&lt;tbody/i</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">S</span><span class="p">),</span>
                    <span class="nx">N</span> <span class="o">=</span>
                      <span class="o">!</span><span class="nx">O</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="dl">"</span><span class="s2">&lt;table</span><span class="dl">"</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">R</span>
                        <span class="p">?</span> <span class="nx">L</span><span class="p">.</span><span class="nx">firstChild</span> <span class="o">&amp;&amp;</span> <span class="nx">L</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">.</span><span class="nx">childNodes</span>
                        <span class="p">:</span> <span class="nx">Q</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">&lt;table&gt;</span><span class="dl">"</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">R</span>
                          <span class="p">?</span> <span class="nx">L</span><span class="p">.</span><span class="nx">childNodes</span>
                          <span class="p">:</span> <span class="p">[];</span>
                  <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">M</span> <span class="o">=</span> <span class="nx">N</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">M</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">;</span> <span class="o">--</span><span class="nx">M</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="k">if </span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">nodeName</span><span class="p">(</span><span class="nx">N</span><span class="p">[</span><span class="nx">M</span><span class="p">],</span> <span class="dl">"</span><span class="s2">tbody</span><span class="dl">"</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">N</span><span class="p">[</span><span class="nx">M</span><span class="p">].</span><span class="nx">childNodes</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="nx">N</span><span class="p">[</span><span class="nx">M</span><span class="p">].</span><span class="nx">parentNode</span><span class="p">.</span><span class="nf">removeChild</span><span class="p">(</span><span class="nx">N</span><span class="p">[</span><span class="nx">M</span><span class="p">]);</span>
                    <span class="p">&#125;</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span>
                <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">leadingWhitespace</span> <span class="o">&amp;&amp;</span> <span class="sr">/^</span><span class="se">\s</span><span class="sr">/</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">S</span><span class="p">))</span> <span class="p">&#123;</span>
                  <span class="nx">L</span><span class="p">.</span><span class="nf">insertBefore</span><span class="p">(</span>
                    <span class="nx">K</span><span class="p">.</span><span class="nf">createTextNode</span><span class="p">(</span><span class="nx">S</span><span class="p">.</span><span class="nf">match</span><span class="p">(</span><span class="sr">/^</span><span class="se">\s</span><span class="sr">*/</span><span class="p">)[</span><span class="mi">0</span><span class="p">]),</span>
                    <span class="nx">L</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">,</span>
                  <span class="p">);</span>
                <span class="p">&#125;</span>
                <span class="nx">S</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">makeArray</span><span class="p">(</span><span class="nx">L</span><span class="p">.</span><span class="nx">childNodes</span><span class="p">);</span>
              <span class="p">&#125;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">S</span><span class="p">.</span><span class="nx">nodeType</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">G</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">S</span><span class="p">);</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                <span class="nx">G</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">merge</span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="nx">S</span><span class="p">);</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;);</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">I</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">J</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">G</span><span class="p">[</span><span class="nx">J</span><span class="p">];</span> <span class="nx">J</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span>
                  <span class="nx">o</span><span class="p">.</span><span class="nf">nodeName</span><span class="p">(</span><span class="nx">G</span><span class="p">[</span><span class="nx">J</span><span class="p">],</span> <span class="dl">"</span><span class="s2">script</span><span class="dl">"</span><span class="p">)</span> <span class="o">&amp;&amp;</span>
                  <span class="p">(</span><span class="o">!</span><span class="nx">G</span><span class="p">[</span><span class="nx">J</span><span class="p">].</span><span class="nx">type</span> <span class="o">||</span> <span class="nx">G</span><span class="p">[</span><span class="nx">J</span><span class="p">].</span><span class="nx">type</span><span class="p">.</span><span class="nf">toLowerCase</span><span class="p">()</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">text/javascript</span><span class="dl">"</span><span class="p">)</span>
                <span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">E</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
                    <span class="nx">G</span><span class="p">[</span><span class="nx">J</span><span class="p">].</span><span class="nx">parentNode</span> <span class="p">?</span> <span class="nx">G</span><span class="p">[</span><span class="nx">J</span><span class="p">].</span><span class="nx">parentNode</span><span class="p">.</span><span class="nf">removeChild</span><span class="p">(</span><span class="nx">G</span><span class="p">[</span><span class="nx">J</span><span class="p">])</span> <span class="p">:</span> <span class="nx">G</span><span class="p">[</span><span class="nx">J</span><span class="p">],</span>
                  <span class="p">);</span>
                <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">G</span><span class="p">[</span><span class="nx">J</span><span class="p">].</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nx">G</span><span class="p">.</span><span class="nx">splice</span><span class="p">.</span><span class="nf">apply</span><span class="p">(</span>
                      <span class="nx">G</span><span class="p">,</span>
                      <span class="p">[</span><span class="nx">J</span> <span class="o">+</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">].</span><span class="nf">concat</span><span class="p">(</span>
                        <span class="nx">o</span><span class="p">.</span><span class="nf">makeArray</span><span class="p">(</span><span class="nx">G</span><span class="p">[</span><span class="nx">J</span><span class="p">].</span><span class="nf">getElementsByTagName</span><span class="p">(</span><span class="dl">"</span><span class="s2">script</span><span class="dl">"</span><span class="p">)),</span>
                      <span class="p">),</span>
                    <span class="p">);</span>
                  <span class="p">&#125;</span>
                  <span class="nx">I</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">G</span><span class="p">[</span><span class="nx">J</span><span class="p">]);</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
              <span class="k">return</span> <span class="nx">E</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">G</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">attr</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">J</span><span class="p">,</span> <span class="nx">G</span><span class="p">,</span> <span class="nx">K</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">J</span> <span class="o">||</span> <span class="nx">J</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">==</span> <span class="mi">3</span> <span class="o">||</span> <span class="nx">J</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">==</span> <span class="mi">8</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="nx">g</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="kd">var</span> <span class="nx">H</span> <span class="o">=</span> <span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nf">isXMLDoc</span><span class="p">(</span><span class="nx">J</span><span class="p">),</span>
              <span class="nx">L</span> <span class="o">=</span> <span class="nx">K</span> <span class="o">!==</span> <span class="nx">g</span><span class="p">;</span>
            <span class="nx">G</span> <span class="o">=</span> <span class="p">(</span><span class="nx">H</span> <span class="o">&amp;&amp;</span> <span class="nx">o</span><span class="p">.</span><span class="nx">props</span><span class="p">[</span><span class="nx">G</span><span class="p">])</span> <span class="o">||</span> <span class="nx">G</span><span class="p">;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">J</span><span class="p">.</span><span class="nx">tagName</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">F</span> <span class="o">=</span> <span class="sr">/href|src|style/</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">G</span><span class="p">);</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">G</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">selected</span><span class="dl">"</span> <span class="o">&amp;&amp;</span> <span class="nx">J</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">J</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">selectedIndex</span><span class="p">;</span>
              <span class="p">&#125;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">G</span> <span class="k">in</span> <span class="nx">J</span> <span class="o">&amp;&amp;</span> <span class="nx">H</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">L</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">G</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">type</span><span class="dl">"</span> <span class="o">&amp;&amp;</span> <span class="nx">o</span><span class="p">.</span><span class="nf">nodeName</span><span class="p">(</span><span class="nx">J</span><span class="p">,</span> <span class="dl">"</span><span class="s2">input</span><span class="dl">"</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">J</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="k">throw</span> <span class="dl">"</span><span class="s2">type property can't be changed</span><span class="dl">"</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                  <span class="nx">J</span><span class="p">[</span><span class="nx">G</span><span class="p">]</span> <span class="o">=</span> <span class="nx">K</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">nodeName</span><span class="p">(</span><span class="nx">J</span><span class="p">,</span> <span class="dl">"</span><span class="s2">form</span><span class="dl">"</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">J</span><span class="p">.</span><span class="nf">getAttributeNode</span><span class="p">(</span><span class="nx">G</span><span class="p">))</span> <span class="p">&#123;</span>
                  <span class="k">return</span> <span class="nx">J</span><span class="p">.</span><span class="nf">getAttributeNode</span><span class="p">(</span><span class="nx">G</span><span class="p">).</span><span class="nx">nodeValue</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">G</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">tabIndex</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="kd">var</span> <span class="nx">I</span> <span class="o">=</span> <span class="nx">J</span><span class="p">.</span><span class="nf">getAttributeNode</span><span class="p">(</span><span class="dl">"</span><span class="s2">tabIndex</span><span class="dl">"</span><span class="p">);</span>
                  <span class="k">return</span> <span class="nx">I</span> <span class="o">&amp;&amp;</span> <span class="nx">I</span><span class="p">.</span><span class="nx">specified</span>
                    <span class="p">?</span> <span class="nx">I</span><span class="p">.</span><span class="nx">value</span>
                    <span class="p">:</span> <span class="nx">J</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">.</span><span class="nf">match</span><span class="p">(</span><span class="sr">/</span><span class="se">(</span><span class="sr">button|input|object|select|textarea</span><span class="se">)</span><span class="sr">/i</span><span class="p">)</span>
                      <span class="p">?</span> <span class="mi">0</span>
                      <span class="p">:</span> <span class="nx">J</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">.</span><span class="nf">match</span><span class="p">(</span><span class="sr">/^</span><span class="se">(</span><span class="sr">a|area</span><span class="se">)</span><span class="sr">$/i</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">J</span><span class="p">.</span><span class="nx">href</span>
                        <span class="p">?</span> <span class="mi">0</span>
                        <span class="p">:</span> <span class="nx">g</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="k">return</span> <span class="nx">J</span><span class="p">[</span><span class="nx">G</span><span class="p">];</span>
              <span class="p">&#125;</span>
              <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">style</span> <span class="o">&amp;&amp;</span> <span class="nx">H</span> <span class="o">&amp;&amp;</span> <span class="nx">G</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">style</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="nx">J</span><span class="p">.</span><span class="nx">style</span><span class="p">,</span> <span class="dl">"</span><span class="s2">cssText</span><span class="dl">"</span><span class="p">,</span> <span class="nx">K</span><span class="p">);</span>
              <span class="p">&#125;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">L</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">J</span><span class="p">.</span><span class="nf">setAttribute</span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="dl">""</span> <span class="o">+</span> <span class="nx">K</span><span class="p">);</span>
              <span class="p">&#125;</span>
              <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span>
                <span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">hrefNormalized</span> <span class="o">&amp;&amp;</span> <span class="nx">H</span> <span class="o">&amp;&amp;</span> <span class="nx">F</span>
                  <span class="p">?</span> <span class="nx">J</span><span class="p">.</span><span class="nf">getAttribute</span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="mi">2</span><span class="p">)</span>
                  <span class="p">:</span> <span class="nx">J</span><span class="p">.</span><span class="nf">getAttribute</span><span class="p">(</span><span class="nx">G</span><span class="p">);</span>
              <span class="k">return</span> <span class="nx">E</span> <span class="o">===</span> <span class="kc">null</span> <span class="p">?</span> <span class="nx">g</span> <span class="p">:</span> <span class="nx">E</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">opacity</span> <span class="o">&amp;&amp;</span> <span class="nx">G</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">opacity</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">L</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">J</span><span class="p">.</span><span class="nx">zoom</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span>
                <span class="nx">J</span><span class="p">.</span><span class="nx">filter</span> <span class="o">=</span>
                  <span class="p">(</span><span class="nx">J</span><span class="p">.</span><span class="nx">filter</span> <span class="o">||</span> <span class="dl">""</span><span class="p">).</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/alpha</span><span class="se">\([^</span><span class="sr">)</span><span class="se">]</span><span class="sr">*</span><span class="se">\)</span><span class="sr">/</span><span class="p">,</span> <span class="dl">""</span><span class="p">)</span> <span class="o">+</span>
                  <span class="p">(</span><span class="nf">parseInt</span><span class="p">(</span><span class="nx">K</span><span class="p">)</span> <span class="o">+</span> <span class="dl">""</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">NaN</span><span class="dl">"</span>
                    <span class="p">?</span> <span class="dl">""</span>
                    <span class="p">:</span> <span class="dl">"</span><span class="s2">alpha(opacity=</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">K</span> <span class="o">*</span> <span class="mi">100</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">)</span><span class="dl">"</span><span class="p">);</span>
              <span class="p">&#125;</span>
              <span class="k">return</span> <span class="nx">J</span><span class="p">.</span><span class="nx">filter</span> <span class="o">&amp;&amp;</span> <span class="nx">J</span><span class="p">.</span><span class="nx">filter</span><span class="p">.</span><span class="nf">indexOf</span><span class="p">(</span><span class="dl">"</span><span class="s2">opacity=</span><span class="dl">"</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mi">0</span>
                <span class="p">?</span> <span class="nf">parseFloat</span><span class="p">(</span><span class="nx">J</span><span class="p">.</span><span class="nx">filter</span><span class="p">.</span><span class="nf">match</span><span class="p">(</span><span class="sr">/opacity=</span><span class="se">([^</span><span class="sr">)</span><span class="se">]</span><span class="sr">*</span><span class="se">)</span><span class="sr">/</span><span class="p">)[</span><span class="mi">1</span><span class="p">])</span> <span class="o">/</span> <span class="mi">100</span> <span class="o">+</span> <span class="dl">""</span>
                <span class="p">:</span> <span class="dl">""</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="nx">G</span> <span class="o">=</span> <span class="nx">G</span><span class="p">.</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/-</span><span class="se">([</span><span class="sr">a-z</span><span class="se">])</span><span class="sr">/gi</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">M</span><span class="p">,</span> <span class="nx">N</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="nx">N</span><span class="p">.</span><span class="nf">toUpperCase</span><span class="p">();</span>
            <span class="p">&#125;);</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">L</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">J</span><span class="p">[</span><span class="nx">G</span><span class="p">]</span> <span class="o">=</span> <span class="nx">K</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">J</span><span class="p">[</span><span class="nx">G</span><span class="p">];</span>
          <span class="p">&#125;,</span>
          <span class="na">trim</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return </span><span class="p">(</span><span class="nx">E</span> <span class="o">||</span> <span class="dl">""</span><span class="p">).</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/^</span><span class="se">\s</span><span class="sr">+|</span><span class="se">\s</span><span class="sr">+$/g</span><span class="p">,</span> <span class="dl">""</span><span class="p">);</span>
          <span class="p">&#125;,</span>
          <span class="na">makeArray</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="p">[];</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">G</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">F</span> <span class="o">=</span> <span class="nx">G</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>
              <span class="k">if </span><span class="p">(</span>
                <span class="nx">F</span> <span class="o">==</span> <span class="kc">null</span> <span class="o">||</span>
                <span class="k">typeof</span> <span class="nx">G</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">string</span><span class="dl">"</span> <span class="o">||</span>
                <span class="nx">o</span><span class="p">.</span><span class="nf">isFunction</span><span class="p">(</span><span class="nx">G</span><span class="p">)</span> <span class="o">||</span>
                <span class="nx">G</span><span class="p">.</span><span class="nx">setInterval</span>
              <span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">E</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">=</span> <span class="nx">G</span><span class="p">;</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                <span class="k">while </span><span class="p">(</span><span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">E</span><span class="p">[</span><span class="o">--</span><span class="nx">F</span><span class="p">]</span> <span class="o">=</span> <span class="nx">G</span><span class="p">[</span><span class="nx">F</span><span class="p">];</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">E</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">inArray</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="nx">H</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">F</span> <span class="o">=</span> <span class="nx">H</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">E</span> <span class="o">&lt;</span> <span class="nx">F</span><span class="p">;</span> <span class="nx">E</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">H</span><span class="p">[</span><span class="nx">E</span><span class="p">]</span> <span class="o">===</span> <span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="nx">E</span><span class="p">;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">merge</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">H</span><span class="p">,</span> <span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">F</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span>
              <span class="nx">G</span><span class="p">,</span>
              <span class="nx">I</span> <span class="o">=</span> <span class="nx">H</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">getAll</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">while </span><span class="p">((</span><span class="nx">G</span> <span class="o">=</span> <span class="nx">E</span><span class="p">[</span><span class="nx">F</span><span class="o">++</span><span class="p">])</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">G</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">!=</span> <span class="mi">8</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">H</span><span class="p">[</span><span class="nx">I</span><span class="o">++</span><span class="p">]</span> <span class="o">=</span> <span class="nx">G</span><span class="p">;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
              <span class="k">while </span><span class="p">((</span><span class="nx">G</span> <span class="o">=</span> <span class="nx">E</span><span class="p">[</span><span class="nx">F</span><span class="o">++</span><span class="p">])</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">H</span><span class="p">[</span><span class="nx">I</span><span class="o">++</span><span class="p">]</span> <span class="o">=</span> <span class="nx">G</span><span class="p">;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">H</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">unique</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">K</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">F</span> <span class="o">=</span> <span class="p">[],</span>
              <span class="nx">E</span> <span class="o">=</span> <span class="p">&#123;&#125;;</span>
            <span class="k">try</span> <span class="p">&#123;</span>
              <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">G</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">H</span> <span class="o">=</span> <span class="nx">K</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">G</span> <span class="o">&lt;</span> <span class="nx">H</span><span class="p">;</span> <span class="nx">G</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="kd">var</span> <span class="nx">J</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">K</span><span class="p">[</span><span class="nx">G</span><span class="p">]);</span>
                <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">E</span><span class="p">[</span><span class="nx">J</span><span class="p">])</span> <span class="p">&#123;</span>
                  <span class="nx">E</span><span class="p">[</span><span class="nx">J</span><span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
                  <span class="nx">F</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">K</span><span class="p">[</span><span class="nx">G</span><span class="p">]);</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span> <span class="k">catch </span><span class="p">(</span><span class="nx">I</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">F</span> <span class="o">=</span> <span class="nx">K</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">F</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">grep</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">J</span><span class="p">,</span> <span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">G</span> <span class="o">=</span> <span class="p">[];</span>
            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">H</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">I</span> <span class="o">=</span> <span class="nx">F</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">H</span> <span class="o">&lt;</span> <span class="nx">I</span><span class="p">;</span> <span class="nx">H</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">E</span> <span class="o">!=</span> <span class="o">!</span><span class="nc">J</span><span class="p">(</span><span class="nx">F</span><span class="p">[</span><span class="nx">H</span><span class="p">],</span> <span class="nx">H</span><span class="p">))</span> <span class="p">&#123;</span>
                <span class="nx">G</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">F</span><span class="p">[</span><span class="nx">H</span><span class="p">]);</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">G</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">map</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">J</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">F</span> <span class="o">=</span> <span class="p">[];</span>
            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">G</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">H</span> <span class="o">=</span> <span class="nx">E</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">G</span> <span class="o">&lt;</span> <span class="nx">H</span><span class="p">;</span> <span class="nx">G</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">I</span> <span class="o">=</span> <span class="nc">J</span><span class="p">(</span><span class="nx">E</span><span class="p">[</span><span class="nx">G</span><span class="p">],</span> <span class="nx">G</span><span class="p">);</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">I</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">F</span><span class="p">[</span><span class="nx">F</span><span class="p">.</span><span class="nx">length</span><span class="p">]</span> <span class="o">=</span> <span class="nx">I</span><span class="p">;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">F</span><span class="p">.</span><span class="nx">concat</span><span class="p">.</span><span class="nf">apply</span><span class="p">([],</span> <span class="nx">F</span><span class="p">);</span>
          <span class="p">&#125;,</span>
        <span class="p">&#125;);</span>
        <span class="kd">var</span> <span class="nx">C</span> <span class="o">=</span> <span class="nb">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">.</span><span class="nf">toLowerCase</span><span class="p">();</span>
        <span class="nx">o</span><span class="p">.</span><span class="nx">browser</span> <span class="o">=</span> <span class="p">&#123;</span>
          <span class="na">version</span><span class="p">:</span> <span class="p">(</span><span class="nx">C</span><span class="p">.</span><span class="nf">match</span><span class="p">(</span><span class="sr">/.+</span><span class="se">(?:</span><span class="sr">rv|it|ra|ie</span><span class="se">)[\/</span><span class="sr">: </span><span class="se">]([\d</span><span class="sr">.</span><span class="se">]</span><span class="sr">+</span><span class="se">)</span><span class="sr">/</span><span class="p">)</span> <span class="o">||</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="dl">"</span><span class="s2">0</span><span class="dl">"</span><span class="p">])[</span><span class="mi">1</span><span class="p">],</span>
          <span class="na">safari</span><span class="p">:</span> <span class="sr">/webkit/</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">C</span><span class="p">),</span>
          <span class="na">opera</span><span class="p">:</span> <span class="sr">/opera/</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">C</span><span class="p">),</span>
          <span class="na">msie</span><span class="p">:</span> <span class="sr">/msie/</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">C</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="sr">/opera/</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">C</span><span class="p">),</span>
          <span class="na">mozilla</span><span class="p">:</span> <span class="sr">/mozilla/</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">C</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="sr">/</span><span class="se">(</span><span class="sr">compatible|webkit</span><span class="se">)</span><span class="sr">/</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">C</span><span class="p">),</span>
        <span class="p">&#125;;</span>
        <span class="nx">o</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span>
          <span class="p">&#123;</span>
            <span class="na">parent</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="nx">E</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">;</span>
            <span class="p">&#125;,</span>
            <span class="na">parents</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nf">dir</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="dl">"</span><span class="s2">parentNode</span><span class="dl">"</span><span class="p">);</span>
            <span class="p">&#125;,</span>
            <span class="na">next</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nf">nth</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="dl">"</span><span class="s2">nextSibling</span><span class="dl">"</span><span class="p">);</span>
            <span class="p">&#125;,</span>
            <span class="na">prev</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nf">nth</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="dl">"</span><span class="s2">previousSibling</span><span class="dl">"</span><span class="p">);</span>
            <span class="p">&#125;,</span>
            <span class="na">nextAll</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nf">dir</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="dl">"</span><span class="s2">nextSibling</span><span class="dl">"</span><span class="p">);</span>
            <span class="p">&#125;,</span>
            <span class="na">prevAll</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nf">dir</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="dl">"</span><span class="s2">previousSibling</span><span class="dl">"</span><span class="p">);</span>
            <span class="p">&#125;,</span>
            <span class="na">siblings</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nf">sibling</span><span class="p">(</span><span class="nx">E</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">,</span> <span class="nx">E</span><span class="p">);</span>
            <span class="p">&#125;,</span>
            <span class="na">children</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nf">sibling</span><span class="p">(</span><span class="nx">E</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">);</span>
            <span class="p">&#125;,</span>
            <span class="na">contents</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nf">nodeName</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="dl">"</span><span class="s2">iframe</span><span class="dl">"</span><span class="p">)</span>
                <span class="p">?</span> <span class="nx">E</span><span class="p">.</span><span class="nx">contentDocument</span> <span class="o">||</span> <span class="nx">E</span><span class="p">.</span><span class="nx">contentWindow</span><span class="p">.</span><span class="nb">document</span>
                <span class="p">:</span> <span class="nx">o</span><span class="p">.</span><span class="nf">makeArray</span><span class="p">(</span><span class="nx">E</span><span class="p">.</span><span class="nx">childNodes</span><span class="p">);</span>
            <span class="p">&#125;,</span>
          <span class="p">&#125;,</span>
          <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">o</span><span class="p">.</span><span class="nx">fn</span><span class="p">[</span><span class="nx">E</span><span class="p">]</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">H</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">map</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">F</span><span class="p">);</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">G</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">G</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">string</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">H</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">multiFilter</span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="nx">H</span><span class="p">);</span>
              <span class="p">&#125;</span>
              <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">pushStack</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">unique</span><span class="p">(</span><span class="nx">H</span><span class="p">),</span> <span class="nx">E</span><span class="p">,</span> <span class="nx">G</span><span class="p">);</span>
            <span class="p">&#125;;</span>
          <span class="p">&#125;,</span>
        <span class="p">);</span>
        <span class="nx">o</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span>
          <span class="p">&#123;</span>
            <span class="na">appendTo</span><span class="p">:</span> <span class="dl">"</span><span class="s2">append</span><span class="dl">"</span><span class="p">,</span>
            <span class="na">prependTo</span><span class="p">:</span> <span class="dl">"</span><span class="s2">prepend</span><span class="dl">"</span><span class="p">,</span>
            <span class="na">insertBefore</span><span class="p">:</span> <span class="dl">"</span><span class="s2">before</span><span class="dl">"</span><span class="p">,</span>
            <span class="na">insertAfter</span><span class="p">:</span> <span class="dl">"</span><span class="s2">after</span><span class="dl">"</span><span class="p">,</span>
            <span class="na">replaceAll</span><span class="p">:</span> <span class="dl">"</span><span class="s2">replaceWith</span><span class="dl">"</span><span class="p">,</span>
          <span class="p">&#125;,</span>
          <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">o</span><span class="p">.</span><span class="nx">fn</span><span class="p">[</span><span class="nx">E</span><span class="p">]</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">J</span> <span class="o">=</span> <span class="p">[],</span>
                <span class="nx">L</span> <span class="o">=</span> <span class="nf">o</span><span class="p">(</span><span class="nx">G</span><span class="p">);</span>
              <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">K</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">H</span> <span class="o">=</span> <span class="nx">L</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">K</span> <span class="o">&lt;</span> <span class="nx">H</span><span class="p">;</span> <span class="nx">K</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="kd">var</span> <span class="nx">I</span> <span class="o">=</span> <span class="p">(</span><span class="nx">K</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="p">?</span> <span class="k">this</span><span class="p">.</span><span class="nf">clone</span><span class="p">(</span><span class="kc">true</span><span class="p">)</span> <span class="p">:</span> <span class="k">this</span><span class="p">).</span><span class="nf">get</span><span class="p">();</span>
                <span class="nx">o</span><span class="p">.</span><span class="nx">fn</span><span class="p">[</span><span class="nx">F</span><span class="p">].</span><span class="nf">apply</span><span class="p">(</span><span class="nf">o</span><span class="p">(</span><span class="nx">L</span><span class="p">[</span><span class="nx">K</span><span class="p">]),</span> <span class="nx">I</span><span class="p">);</span>
                <span class="nx">J</span> <span class="o">=</span> <span class="nx">J</span><span class="p">.</span><span class="nf">concat</span><span class="p">(</span><span class="nx">I</span><span class="p">);</span>
              <span class="p">&#125;</span>
              <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">pushStack</span><span class="p">(</span><span class="nx">J</span><span class="p">,</span> <span class="nx">E</span><span class="p">,</span> <span class="nx">G</span><span class="p">);</span>
            <span class="p">&#125;;</span>
          <span class="p">&#125;,</span>
        <span class="p">);</span>
        <span class="nx">o</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span>
          <span class="p">&#123;</span>
            <span class="na">removeAttr</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">o</span><span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">E</span><span class="p">,</span> <span class="dl">""</span><span class="p">);</span>
              <span class="k">if </span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">==</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">this</span><span class="p">.</span><span class="nf">removeAttribute</span><span class="p">(</span><span class="nx">E</span><span class="p">);</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;,</span>
            <span class="na">addClass</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">o</span><span class="p">.</span><span class="nx">className</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">E</span><span class="p">);</span>
            <span class="p">&#125;,</span>
            <span class="na">removeClass</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">o</span><span class="p">.</span><span class="nx">className</span><span class="p">.</span><span class="nf">remove</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">E</span><span class="p">);</span>
            <span class="p">&#125;,</span>
            <span class="na">toggleClass</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">E</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">boolean</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">E</span> <span class="o">=</span> <span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">className</span><span class="p">.</span><span class="nf">has</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">F</span><span class="p">);</span>
              <span class="p">&#125;</span>
              <span class="nx">o</span><span class="p">.</span><span class="nx">className</span><span class="p">[</span><span class="nx">E</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">add</span><span class="dl">"</span> <span class="p">:</span> <span class="dl">"</span><span class="s2">remove</span><span class="dl">"</span><span class="p">](</span><span class="k">this</span><span class="p">,</span> <span class="nx">F</span><span class="p">);</span>
            <span class="p">&#125;,</span>
            <span class="na">remove</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">E</span> <span class="o">||</span> <span class="nx">o</span><span class="p">.</span><span class="nf">filter</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="p">[</span><span class="k">this</span><span class="p">]).</span><span class="nx">length</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nf">o</span><span class="p">(</span><span class="dl">"</span><span class="s2">*</span><span class="dl">"</span><span class="p">,</span> <span class="k">this</span><span class="p">)</span>
                  <span class="p">.</span><span class="nf">add</span><span class="p">([</span><span class="k">this</span><span class="p">])</span>
                  <span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
                    <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">remove</span><span class="p">(</span><span class="k">this</span><span class="p">);</span>
                    <span class="nx">o</span><span class="p">.</span><span class="nf">removeData</span><span class="p">(</span><span class="k">this</span><span class="p">);</span>
                  <span class="p">&#125;);</span>
                <span class="k">if </span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">this</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nf">removeChild</span><span class="p">(</span><span class="k">this</span><span class="p">);</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;,</span>
            <span class="na">empty</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="nf">o</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nf">children</span><span class="p">().</span><span class="nf">remove</span><span class="p">();</span>
              <span class="k">while </span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">this</span><span class="p">.</span><span class="nf">removeChild</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">);</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;,</span>
          <span class="p">&#125;,</span>
          <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">o</span><span class="p">.</span><span class="nx">fn</span><span class="p">[</span><span class="nx">E</span><span class="p">]</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span>
            <span class="p">&#125;;</span>
          <span class="p">&#125;,</span>
        <span class="p">);</span>
        <span class="kd">function</span> <span class="nf">j</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">return </span><span class="p">(</span><span class="nx">E</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nf">parseInt</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">curCSS</span><span class="p">(</span><span class="nx">E</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">F</span><span class="p">,</span> <span class="kc">true</span><span class="p">),</span> <span class="mi">10</span><span class="p">))</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span>
        <span class="p">&#125;</span>
        <span class="kd">var</span> <span class="nx">h</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">jQuery</span><span class="dl">"</span> <span class="o">+</span> <span class="nf">e</span><span class="p">(),</span>
          <span class="nx">v</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span>
          <span class="nx">A</span> <span class="o">=</span> <span class="p">&#123;&#125;;</span>
        <span class="nx">o</span><span class="p">.</span><span class="nf">extend</span><span class="p">(&#123;</span>
          <span class="na">cache</span><span class="p">:</span> <span class="p">&#123;&#125;,</span>
          <span class="na">data</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">E</span><span class="p">,</span> <span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">F</span> <span class="o">=</span> <span class="nx">F</span> <span class="o">==</span> <span class="nx">l</span> <span class="p">?</span> <span class="nx">A</span> <span class="p">:</span> <span class="nx">F</span><span class="p">;</span>
            <span class="kd">var</span> <span class="nx">H</span> <span class="o">=</span> <span class="nx">F</span><span class="p">[</span><span class="nx">h</span><span class="p">];</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">H</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">H</span> <span class="o">=</span> <span class="nx">F</span><span class="p">[</span><span class="nx">h</span><span class="p">]</span> <span class="o">=</span> <span class="o">++</span><span class="nx">v</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">E</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">cache</span><span class="p">[</span><span class="nx">H</span><span class="p">])</span> <span class="p">&#123;</span>
              <span class="nx">o</span><span class="p">.</span><span class="nx">cache</span><span class="p">[</span><span class="nx">H</span><span class="p">]</span> <span class="o">=</span> <span class="p">&#123;&#125;;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">G</span> <span class="o">!==</span> <span class="nx">g</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">o</span><span class="p">.</span><span class="nx">cache</span><span class="p">[</span><span class="nx">H</span><span class="p">][</span><span class="nx">E</span><span class="p">]</span> <span class="o">=</span> <span class="nx">G</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">E</span> <span class="p">?</span> <span class="nx">o</span><span class="p">.</span><span class="nx">cache</span><span class="p">[</span><span class="nx">H</span><span class="p">][</span><span class="nx">E</span><span class="p">]</span> <span class="p">:</span> <span class="nx">H</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">removeData</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">F</span> <span class="o">=</span> <span class="nx">F</span> <span class="o">==</span> <span class="nx">l</span> <span class="p">?</span> <span class="nx">A</span> <span class="p">:</span> <span class="nx">F</span><span class="p">;</span>
            <span class="kd">var</span> <span class="nx">H</span> <span class="o">=</span> <span class="nx">F</span><span class="p">[</span><span class="nx">h</span><span class="p">];</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">cache</span><span class="p">[</span><span class="nx">H</span><span class="p">])</span> <span class="p">&#123;</span>
                <span class="k">delete</span> <span class="nx">o</span><span class="p">.</span><span class="nx">cache</span><span class="p">[</span><span class="nx">H</span><span class="p">][</span><span class="nx">E</span><span class="p">];</span>
                <span class="nx">E</span> <span class="o">=</span> <span class="dl">""</span><span class="p">;</span>
                <span class="k">for </span><span class="p">(</span><span class="nx">E</span> <span class="k">in</span> <span class="nx">o</span><span class="p">.</span><span class="nx">cache</span><span class="p">[</span><span class="nx">H</span><span class="p">])</span> <span class="p">&#123;</span>
                  <span class="k">break</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">o</span><span class="p">.</span><span class="nf">removeData</span><span class="p">(</span><span class="nx">F</span><span class="p">);</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
              <span class="k">try</span> <span class="p">&#123;</span>
                <span class="k">delete</span> <span class="nx">F</span><span class="p">[</span><span class="nx">h</span><span class="p">];</span>
              <span class="p">&#125;</span> <span class="k">catch </span><span class="p">(</span><span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">F</span><span class="p">.</span><span class="nx">removeAttribute</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">F</span><span class="p">.</span><span class="nf">removeAttribute</span><span class="p">(</span><span class="nx">h</span><span class="p">);</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
              <span class="k">delete</span> <span class="nx">o</span><span class="p">.</span><span class="nx">cache</span><span class="p">[</span><span class="nx">H</span><span class="p">];</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;,</span>
          <span class="na">queue</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">E</span><span class="p">,</span> <span class="nx">H</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">E</span> <span class="o">=</span> <span class="p">(</span><span class="nx">E</span> <span class="o">||</span> <span class="dl">"</span><span class="s2">fx</span><span class="dl">"</span><span class="p">)</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">queue</span><span class="dl">"</span><span class="p">;</span>
              <span class="kd">var</span> <span class="nx">G</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">E</span><span class="p">);</span>
              <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">G</span> <span class="o">||</span> <span class="nx">o</span><span class="p">.</span><span class="nf">isArray</span><span class="p">(</span><span class="nx">H</span><span class="p">))</span> <span class="p">&#123;</span>
                <span class="nx">G</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">E</span><span class="p">,</span> <span class="nx">o</span><span class="p">.</span><span class="nf">makeArray</span><span class="p">(</span><span class="nx">H</span><span class="p">));</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">H</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">G</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">H</span><span class="p">);</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">G</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">dequeue</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">H</span><span class="p">,</span> <span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">queue</span><span class="p">(</span><span class="nx">H</span><span class="p">,</span> <span class="nx">G</span><span class="p">),</span>
              <span class="nx">F</span> <span class="o">=</span> <span class="nx">E</span><span class="p">.</span><span class="nf">shift</span><span class="p">();</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">G</span> <span class="o">||</span> <span class="nx">G</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">fx</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">F</span> <span class="o">=</span> <span class="nx">E</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">F</span> <span class="o">!==</span> <span class="nx">g</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">F</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nx">H</span><span class="p">);</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;,</span>
        <span class="p">&#125;);</span>
        <span class="nx">o</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nf">extend</span><span class="p">(&#123;</span>
          <span class="na">data</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">H</span> <span class="o">=</span> <span class="nx">E</span><span class="p">.</span><span class="nf">split</span><span class="p">(</span><span class="dl">"</span><span class="s2">.</span><span class="dl">"</span><span class="p">);</span>
            <span class="nx">H</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">H</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">.</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">H</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="p">:</span> <span class="dl">""</span><span class="p">;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">G</span> <span class="o">===</span> <span class="nx">g</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">F</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nf">triggerHandler</span><span class="p">(</span><span class="dl">"</span><span class="s2">getData</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">H</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">!</span><span class="dl">"</span><span class="p">,</span> <span class="p">[</span><span class="nx">H</span><span class="p">[</span><span class="mi">0</span><span class="p">]]);</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">F</span> <span class="o">===</span> <span class="nx">g</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">F</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">E</span><span class="p">);</span>
              <span class="p">&#125;</span>
              <span class="k">return</span> <span class="nx">F</span> <span class="o">===</span> <span class="nx">g</span> <span class="o">&amp;&amp;</span> <span class="nx">H</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="p">?</span> <span class="k">this</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">H</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="p">:</span> <span class="nx">F</span><span class="p">;</span>
            <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">trigger</span><span class="p">(</span><span class="dl">"</span><span class="s2">setData</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">H</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">!</span><span class="dl">"</span><span class="p">,</span> <span class="p">[</span><span class="nx">H</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">G</span><span class="p">]).</span><span class="nf">each</span><span class="p">(</span>
                <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
                  <span class="nx">o</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">E</span><span class="p">,</span> <span class="nx">G</span><span class="p">);</span>
                <span class="p">&#125;,</span>
              <span class="p">);</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;,</span>
          <span class="na">removeData</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="nx">o</span><span class="p">.</span><span class="nf">removeData</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">E</span><span class="p">);</span>
            <span class="p">&#125;);</span>
          <span class="p">&#125;,</span>
          <span class="na">queue</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">E</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">string</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">F</span> <span class="o">=</span> <span class="nx">E</span><span class="p">;</span>
              <span class="nx">E</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">fx</span><span class="dl">"</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">F</span> <span class="o">===</span> <span class="nx">g</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nf">queue</span><span class="p">(</span><span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">E</span><span class="p">);</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">G</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">queue</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">E</span><span class="p">,</span> <span class="nx">F</span><span class="p">);</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">E</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">fx</span><span class="dl">"</span> <span class="o">&amp;&amp;</span> <span class="nx">G</span><span class="p">.</span><span class="nx">length</span> <span class="o">==</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">G</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nf">call</span><span class="p">(</span><span class="k">this</span><span class="p">);</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;);</span>
          <span class="p">&#125;,</span>
          <span class="na">dequeue</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="nx">o</span><span class="p">.</span><span class="nf">dequeue</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">E</span><span class="p">);</span>
            <span class="p">&#125;);</span>
          <span class="p">&#125;,</span>
        <span class="p">&#125;);</span>
        <span class="cm">/*
         * Sizzle CSS Selector Engine - v0.9.3
         *  Copyright 2009, The Dojo Foundation
         *  Released under the MIT, BSD, and GPL Licenses.
         *  More information: http://sizzlejs.com/
         */</span>
        <span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
          <span class="kd">var</span> <span class="nx">R</span> <span class="o">=</span>
              <span class="sr">/</span><span class="se">((?:\((?:\([^</span><span class="sr">()</span><span class="se">]</span><span class="sr">+</span><span class="se">\)</span><span class="sr">|</span><span class="se">[^</span><span class="sr">()</span><span class="se">]</span><span class="sr">+</span><span class="se">)</span><span class="sr">+</span><span class="se">\)</span><span class="sr">|</span><span class="se">\[(?:\[[^</span><span class="sr">[</span><span class="se">\]]</span><span class="sr">*</span><span class="se">\]</span><span class="sr">|</span><span class="se">[</span><span class="sr">'"</span><span class="se">][^</span><span class="sr">'"</span><span class="se">]</span><span class="sr">*</span><span class="se">[</span><span class="sr">'"</span><span class="se">]</span><span class="sr">|</span><span class="se">[^</span><span class="sr">[</span><span class="se">\]</span><span class="sr">'"</span><span class="se">]</span><span class="sr">+</span><span class="se">)</span><span class="sr">+</span><span class="se">\]</span><span class="sr">|</span><span class="se">\\</span><span class="sr">.|</span><span class="se">[^</span><span class="sr"> &gt;+~,(</span><span class="se">\[\\]</span><span class="sr">+</span><span class="se">)</span><span class="sr">+|</span><span class="se">[</span><span class="sr">&gt;+~</span><span class="se">])(\s</span><span class="sr">*,</span><span class="se">\s</span><span class="sr">*</span><span class="se">)?</span><span class="sr">/g</span><span class="p">,</span>
            <span class="nx">L</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span>
            <span class="nx">H</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span><span class="p">;</span>
          <span class="kd">var</span> <span class="nx">F</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">Y</span><span class="p">,</span> <span class="nx">U</span><span class="p">,</span> <span class="nx">ab</span><span class="p">,</span> <span class="nx">ac</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">ab</span> <span class="o">=</span> <span class="nx">ab</span> <span class="o">||</span> <span class="p">[];</span>
            <span class="nx">U</span> <span class="o">=</span> <span class="nx">U</span> <span class="o">||</span> <span class="nb">document</span><span class="p">;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">U</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">!==</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">U</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">!==</span> <span class="mi">9</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="p">[];</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">Y</span> <span class="o">||</span> <span class="k">typeof</span> <span class="nx">Y</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">string</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="nx">ab</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="kd">var</span> <span class="nx">Z</span> <span class="o">=</span> <span class="p">[],</span>
              <span class="nx">W</span><span class="p">,</span>
              <span class="nx">af</span><span class="p">,</span>
              <span class="nx">ai</span><span class="p">,</span>
              <span class="nx">T</span><span class="p">,</span>
              <span class="nx">ad</span><span class="p">,</span>
              <span class="nx">V</span><span class="p">,</span>
              <span class="nx">X</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
            <span class="nx">R</span><span class="p">.</span><span class="nx">lastIndex</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
            <span class="k">while </span><span class="p">((</span><span class="nx">W</span> <span class="o">=</span> <span class="nx">R</span><span class="p">.</span><span class="nf">exec</span><span class="p">(</span><span class="nx">Y</span><span class="p">))</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">Z</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">W</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">W</span><span class="p">[</span><span class="mi">2</span><span class="p">])</span> <span class="p">&#123;</span>
                <span class="nx">V</span> <span class="o">=</span> <span class="nb">RegExp</span><span class="p">.</span><span class="nx">rightContext</span><span class="p">;</span>
                <span class="k">break</span><span class="p">;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">Z</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">M</span><span class="p">.</span><span class="nf">exec</span><span class="p">(</span><span class="nx">Y</span><span class="p">))</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">Z</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">2</span> <span class="o">&amp;&amp;</span> <span class="nx">I</span><span class="p">.</span><span class="nx">relative</span><span class="p">[</span><span class="nx">Z</span><span class="p">[</span><span class="mi">0</span><span class="p">]])</span> <span class="p">&#123;</span>
                <span class="nx">af</span> <span class="o">=</span> <span class="nc">J</span><span class="p">(</span><span class="nx">Z</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">+</span> <span class="nx">Z</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span> <span class="nx">U</span><span class="p">);</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                <span class="nx">af</span> <span class="o">=</span> <span class="nx">I</span><span class="p">.</span><span class="nx">relative</span><span class="p">[</span><span class="nx">Z</span><span class="p">[</span><span class="mi">0</span><span class="p">]]</span> <span class="p">?</span> <span class="p">[</span><span class="nx">U</span><span class="p">]</span> <span class="p">:</span> <span class="nc">F</span><span class="p">(</span><span class="nx">Z</span><span class="p">.</span><span class="nf">shift</span><span class="p">(),</span> <span class="nx">U</span><span class="p">);</span>
                <span class="k">while </span><span class="p">(</span><span class="nx">Z</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">Y</span> <span class="o">=</span> <span class="nx">Z</span><span class="p">.</span><span class="nf">shift</span><span class="p">();</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">I</span><span class="p">.</span><span class="nx">relative</span><span class="p">[</span><span class="nx">Y</span><span class="p">])</span> <span class="p">&#123;</span>
                    <span class="nx">Y</span> <span class="o">+=</span> <span class="nx">Z</span><span class="p">.</span><span class="nf">shift</span><span class="p">();</span>
                  <span class="p">&#125;</span>
                  <span class="nx">af</span> <span class="o">=</span> <span class="nc">J</span><span class="p">(</span><span class="nx">Y</span><span class="p">,</span> <span class="nx">af</span><span class="p">);</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">ae</span> <span class="o">=</span> <span class="nx">ac</span>
                <span class="p">?</span> <span class="p">&#123;</span> <span class="na">expr</span><span class="p">:</span> <span class="nx">Z</span><span class="p">.</span><span class="nf">pop</span><span class="p">(),</span> <span class="na">set</span><span class="p">:</span> <span class="nc">E</span><span class="p">(</span><span class="nx">ac</span><span class="p">)</span> <span class="p">&#125;</span>
                <span class="p">:</span> <span class="nx">F</span><span class="p">.</span><span class="nf">find</span><span class="p">(</span>
                    <span class="nx">Z</span><span class="p">.</span><span class="nf">pop</span><span class="p">(),</span>
                    <span class="nx">Z</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">U</span><span class="p">.</span><span class="nx">parentNode</span> <span class="p">?</span> <span class="nx">U</span><span class="p">.</span><span class="nx">parentNode</span> <span class="p">:</span> <span class="nx">U</span><span class="p">,</span>
                    <span class="nc">Q</span><span class="p">(</span><span class="nx">U</span><span class="p">),</span>
                  <span class="p">);</span>
              <span class="nx">af</span> <span class="o">=</span> <span class="nx">F</span><span class="p">.</span><span class="nf">filter</span><span class="p">(</span><span class="nx">ae</span><span class="p">.</span><span class="nx">expr</span><span class="p">,</span> <span class="nx">ae</span><span class="p">.</span><span class="kd">set</span><span class="p">);</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">Z</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">ai</span> <span class="o">=</span> <span class="nc">E</span><span class="p">(</span><span class="nx">af</span><span class="p">);</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                <span class="nx">X</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
              <span class="p">&#125;</span>
              <span class="k">while </span><span class="p">(</span><span class="nx">Z</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="kd">var</span> <span class="nx">ah</span> <span class="o">=</span> <span class="nx">Z</span><span class="p">.</span><span class="nf">pop</span><span class="p">(),</span>
                  <span class="nx">ag</span> <span class="o">=</span> <span class="nx">ah</span><span class="p">;</span>
                <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">I</span><span class="p">.</span><span class="nx">relative</span><span class="p">[</span><span class="nx">ah</span><span class="p">])</span> <span class="p">&#123;</span>
                  <span class="nx">ah</span> <span class="o">=</span> <span class="dl">""</span><span class="p">;</span>
                <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                  <span class="nx">ag</span> <span class="o">=</span> <span class="nx">Z</span><span class="p">.</span><span class="nf">pop</span><span class="p">();</span>
                <span class="p">&#125;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">ag</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">ag</span> <span class="o">=</span> <span class="nx">U</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="nx">I</span><span class="p">.</span><span class="nx">relative</span><span class="p">[</span><span class="nx">ah</span><span class="p">](</span><span class="nx">ai</span><span class="p">,</span> <span class="nx">ag</span><span class="p">,</span> <span class="nc">Q</span><span class="p">(</span><span class="nx">U</span><span class="p">));</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">ai</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">ai</span> <span class="o">=</span> <span class="nx">af</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">ai</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">throw</span> <span class="dl">"</span><span class="s2">Syntax error, unrecognized expression: </span><span class="dl">"</span> <span class="o">+</span> <span class="p">(</span><span class="nx">ah</span> <span class="o">||</span> <span class="nx">Y</span><span class="p">);</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">H</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nx">ai</span><span class="p">)</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">[object Array]</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">X</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">ab</span><span class="p">.</span><span class="nx">push</span><span class="p">.</span><span class="nf">apply</span><span class="p">(</span><span class="nx">ab</span><span class="p">,</span> <span class="nx">ai</span><span class="p">);</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">U</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">aa</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">ai</span><span class="p">[</span><span class="nx">aa</span><span class="p">]</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">;</span> <span class="nx">aa</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="k">if </span><span class="p">(</span>
                      <span class="nx">ai</span><span class="p">[</span><span class="nx">aa</span><span class="p">]</span> <span class="o">&amp;&amp;</span>
                      <span class="p">(</span><span class="nx">ai</span><span class="p">[</span><span class="nx">aa</span><span class="p">]</span> <span class="o">===</span> <span class="kc">true</span> <span class="o">||</span>
                        <span class="p">(</span><span class="nx">ai</span><span class="p">[</span><span class="nx">aa</span><span class="p">].</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nc">K</span><span class="p">(</span><span class="nx">U</span><span class="p">,</span> <span class="nx">ai</span><span class="p">[</span><span class="nx">aa</span><span class="p">])))</span>
                    <span class="p">)</span> <span class="p">&#123;</span>
                      <span class="nx">ab</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">af</span><span class="p">[</span><span class="nx">aa</span><span class="p">]);</span>
                    <span class="p">&#125;</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                  <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">aa</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">ai</span><span class="p">[</span><span class="nx">aa</span><span class="p">]</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">;</span> <span class="nx">aa</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="k">if </span><span class="p">(</span><span class="nx">ai</span><span class="p">[</span><span class="nx">aa</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">ai</span><span class="p">[</span><span class="nx">aa</span><span class="p">].</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="nx">ab</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">af</span><span class="p">[</span><span class="nx">aa</span><span class="p">]);</span>
                    <span class="p">&#125;</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
              <span class="nc">E</span><span class="p">(</span><span class="nx">ai</span><span class="p">,</span> <span class="nx">ab</span><span class="p">);</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">V</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nc">F</span><span class="p">(</span><span class="nx">V</span><span class="p">,</span> <span class="nx">U</span><span class="p">,</span> <span class="nx">ab</span><span class="p">,</span> <span class="nx">ac</span><span class="p">);</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">hasDuplicate</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
                <span class="nx">ab</span><span class="p">.</span><span class="nf">sort</span><span class="p">(</span><span class="nx">G</span><span class="p">);</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">hasDuplicate</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">aa</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">aa</span> <span class="o">&lt;</span> <span class="nx">ab</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">aa</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="k">if </span><span class="p">(</span><span class="nx">ab</span><span class="p">[</span><span class="nx">aa</span><span class="p">]</span> <span class="o">===</span> <span class="nx">ab</span><span class="p">[</span><span class="nx">aa</span> <span class="o">-</span> <span class="mi">1</span><span class="p">])</span> <span class="p">&#123;</span>
                      <span class="nx">ab</span><span class="p">.</span><span class="nf">splice</span><span class="p">(</span><span class="nx">aa</span><span class="o">--</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span>
                    <span class="p">&#125;</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">ab</span><span class="p">;</span>
          <span class="p">&#125;;</span>
          <span class="nx">F</span><span class="p">.</span><span class="nx">matches</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">,</span> <span class="nx">U</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nc">F</span><span class="p">(</span><span class="nx">T</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">U</span><span class="p">);</span>
          <span class="p">&#125;;</span>
          <span class="nx">F</span><span class="p">.</span><span class="nx">find</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">aa</span><span class="p">,</span> <span class="nx">T</span><span class="p">,</span> <span class="nx">ab</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">Z</span><span class="p">,</span> <span class="nx">X</span><span class="p">;</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">aa</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="p">[];</span>
            <span class="p">&#125;</span>
            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">W</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">V</span> <span class="o">=</span> <span class="nx">I</span><span class="p">.</span><span class="nx">order</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">W</span> <span class="o">&lt;</span> <span class="nx">V</span><span class="p">;</span> <span class="nx">W</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">Y</span> <span class="o">=</span> <span class="nx">I</span><span class="p">.</span><span class="nx">order</span><span class="p">[</span><span class="nx">W</span><span class="p">],</span>
                <span class="nx">X</span><span class="p">;</span>
              <span class="k">if </span><span class="p">((</span><span class="nx">X</span> <span class="o">=</span> <span class="nx">I</span><span class="p">.</span><span class="nx">match</span><span class="p">[</span><span class="nx">Y</span><span class="p">].</span><span class="nf">exec</span><span class="p">(</span><span class="nx">aa</span><span class="p">)))</span> <span class="p">&#123;</span>
                <span class="kd">var</span> <span class="nx">U</span> <span class="o">=</span> <span class="nb">RegExp</span><span class="p">.</span><span class="nx">leftContext</span><span class="p">;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">U</span><span class="p">.</span><span class="nf">substr</span><span class="p">(</span><span class="nx">U</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span> <span class="o">!==</span> <span class="dl">"</span><span class="se">\\</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">X</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="p">(</span><span class="nx">X</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">||</span> <span class="dl">""</span><span class="p">).</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/</span><span class="se">\\</span><span class="sr">/g</span><span class="p">,</span> <span class="dl">""</span><span class="p">);</span>
                  <span class="nx">Z</span> <span class="o">=</span> <span class="nx">I</span><span class="p">.</span><span class="nx">find</span><span class="p">[</span><span class="nx">Y</span><span class="p">](</span><span class="nx">X</span><span class="p">,</span> <span class="nx">T</span><span class="p">,</span> <span class="nx">ab</span><span class="p">);</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">Z</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nx">aa</span> <span class="o">=</span> <span class="nx">aa</span><span class="p">.</span><span class="nf">replace</span><span class="p">(</span><span class="nx">I</span><span class="p">.</span><span class="nx">match</span><span class="p">[</span><span class="nx">Y</span><span class="p">],</span> <span class="dl">""</span><span class="p">);</span>
                    <span class="k">break</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">Z</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">Z</span> <span class="o">=</span> <span class="nx">T</span><span class="p">.</span><span class="nf">getElementsByTagName</span><span class="p">(</span><span class="dl">"</span><span class="s2">*</span><span class="dl">"</span><span class="p">);</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="p">&#123;</span> <span class="na">set</span><span class="p">:</span> <span class="nx">Z</span><span class="p">,</span> <span class="na">expr</span><span class="p">:</span> <span class="nx">aa</span> <span class="p">&#125;;</span>
          <span class="p">&#125;;</span>
          <span class="nx">F</span><span class="p">.</span><span class="nx">filter</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">ad</span><span class="p">,</span> <span class="nx">ac</span><span class="p">,</span> <span class="nx">ag</span><span class="p">,</span> <span class="nx">W</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">V</span> <span class="o">=</span> <span class="nx">ad</span><span class="p">,</span>
              <span class="nx">ai</span> <span class="o">=</span> <span class="p">[],</span>
              <span class="nx">aa</span> <span class="o">=</span> <span class="nx">ac</span><span class="p">,</span>
              <span class="nx">Y</span><span class="p">,</span>
              <span class="nx">T</span><span class="p">,</span>
              <span class="nx">Z</span> <span class="o">=</span> <span class="nx">ac</span> <span class="o">&amp;&amp;</span> <span class="nx">ac</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nc">Q</span><span class="p">(</span><span class="nx">ac</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span>
            <span class="k">while </span><span class="p">(</span><span class="nx">ad</span> <span class="o">&amp;&amp;</span> <span class="nx">ac</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">ab</span> <span class="k">in</span> <span class="nx">I</span><span class="p">.</span><span class="nx">filter</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">((</span><span class="nx">Y</span> <span class="o">=</span> <span class="nx">I</span><span class="p">.</span><span class="nx">match</span><span class="p">[</span><span class="nx">ab</span><span class="p">].</span><span class="nf">exec</span><span class="p">(</span><span class="nx">ad</span><span class="p">))</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="kd">var</span> <span class="nx">U</span> <span class="o">=</span> <span class="nx">I</span><span class="p">.</span><span class="nx">filter</span><span class="p">[</span><span class="nx">ab</span><span class="p">],</span>
                    <span class="nx">ah</span><span class="p">,</span>
                    <span class="nx">af</span><span class="p">;</span>
                  <span class="nx">T</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">aa</span> <span class="o">==</span> <span class="nx">ai</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nx">ai</span> <span class="o">=</span> <span class="p">[];</span>
                  <span class="p">&#125;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">I</span><span class="p">.</span><span class="nx">preFilter</span><span class="p">[</span><span class="nx">ab</span><span class="p">])</span> <span class="p">&#123;</span>
                    <span class="nx">Y</span> <span class="o">=</span> <span class="nx">I</span><span class="p">.</span><span class="nx">preFilter</span><span class="p">[</span><span class="nx">ab</span><span class="p">](</span><span class="nx">Y</span><span class="p">,</span> <span class="nx">aa</span><span class="p">,</span> <span class="nx">ag</span><span class="p">,</span> <span class="nx">ai</span><span class="p">,</span> <span class="nx">W</span><span class="p">,</span> <span class="nx">Z</span><span class="p">);</span>
                    <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">Y</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="nx">T</span> <span class="o">=</span> <span class="nx">ah</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
                    <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                      <span class="k">if </span><span class="p">(</span><span class="nx">Y</span> <span class="o">===</span> <span class="kc">true</span><span class="p">)</span> <span class="p">&#123;</span>
                        <span class="k">continue</span><span class="p">;</span>
                      <span class="p">&#125;</span>
                    <span class="p">&#125;</span>
                  <span class="p">&#125;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">Y</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">X</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="p">(</span><span class="nx">af</span> <span class="o">=</span> <span class="nx">aa</span><span class="p">[</span><span class="nx">X</span><span class="p">])</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">;</span> <span class="nx">X</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="k">if </span><span class="p">(</span><span class="nx">af</span><span class="p">)</span> <span class="p">&#123;</span>
                        <span class="nx">ah</span> <span class="o">=</span> <span class="nc">U</span><span class="p">(</span><span class="nx">af</span><span class="p">,</span> <span class="nx">Y</span><span class="p">,</span> <span class="nx">X</span><span class="p">,</span> <span class="nx">aa</span><span class="p">);</span>
                        <span class="kd">var</span> <span class="nx">ae</span> <span class="o">=</span> <span class="nx">W</span> <span class="o">^</span> <span class="o">!!</span><span class="nx">ah</span><span class="p">;</span>
                        <span class="k">if </span><span class="p">(</span><span class="nx">ag</span> <span class="o">&amp;&amp;</span> <span class="nx">ah</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">&#123;</span>
                          <span class="k">if </span><span class="p">(</span><span class="nx">ae</span><span class="p">)</span> <span class="p">&#123;</span>
                            <span class="nx">T</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
                          <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                            <span class="nx">aa</span><span class="p">[</span><span class="nx">X</span><span class="p">]</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
                          <span class="p">&#125;</span>
                        <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                          <span class="k">if </span><span class="p">(</span><span class="nx">ae</span><span class="p">)</span> <span class="p">&#123;</span>
                            <span class="nx">ai</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">af</span><span class="p">);</span>
                            <span class="nx">T</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
                          <span class="p">&#125;</span>
                        <span class="p">&#125;</span>
                      <span class="p">&#125;</span>
                    <span class="p">&#125;</span>
                  <span class="p">&#125;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">ah</span> <span class="o">!==</span> <span class="nx">g</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">ag</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="nx">aa</span> <span class="o">=</span> <span class="nx">ai</span><span class="p">;</span>
                    <span class="p">&#125;</span>
                    <span class="nx">ad</span> <span class="o">=</span> <span class="nx">ad</span><span class="p">.</span><span class="nf">replace</span><span class="p">(</span><span class="nx">I</span><span class="p">.</span><span class="nx">match</span><span class="p">[</span><span class="nx">ab</span><span class="p">],</span> <span class="dl">""</span><span class="p">);</span>
                    <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="k">return</span> <span class="p">[];</span>
                    <span class="p">&#125;</span>
                    <span class="k">break</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">ad</span> <span class="o">==</span> <span class="nx">V</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">T</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">throw</span> <span class="dl">"</span><span class="s2">Syntax error, unrecognized expression: </span><span class="dl">"</span> <span class="o">+</span> <span class="nx">ad</span><span class="p">;</span>
                <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                  <span class="k">break</span><span class="p">;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
              <span class="nx">V</span> <span class="o">=</span> <span class="nx">ad</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">aa</span><span class="p">;</span>
          <span class="p">&#125;;</span>
          <span class="kd">var</span> <span class="nx">I</span> <span class="o">=</span> <span class="p">(</span><span class="nx">F</span><span class="p">.</span><span class="nx">selectors</span> <span class="o">=</span> <span class="p">&#123;</span>
            <span class="na">order</span><span class="p">:</span> <span class="p">[</span><span class="dl">"</span><span class="s2">ID</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">NAME</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">TAG</span><span class="dl">"</span><span class="p">],</span>
            <span class="na">match</span><span class="p">:</span> <span class="p">&#123;</span>
              <span class="na">ID</span><span class="p">:</span> <span class="sr">/#</span><span class="se">((?:[\w\u</span><span class="sr">00c0-</span><span class="se">\u</span><span class="sr">FFFF_-</span><span class="se">]</span><span class="sr">|</span><span class="se">\\</span><span class="sr">.</span><span class="se">)</span><span class="sr">+</span><span class="se">)</span><span class="sr">/</span><span class="p">,</span>
              <span class="na">CLASS</span><span class="p">:</span> <span class="sr">/</span><span class="se">\.((?:[\w\u</span><span class="sr">00c0-</span><span class="se">\u</span><span class="sr">FFFF_-</span><span class="se">]</span><span class="sr">|</span><span class="se">\\</span><span class="sr">.</span><span class="se">)</span><span class="sr">+</span><span class="se">)</span><span class="sr">/</span><span class="p">,</span>
              <span class="na">NAME</span><span class="p">:</span> <span class="sr">/</span><span class="se">\[</span><span class="sr">name=</span><span class="se">[</span><span class="sr">'"</span><span class="se">]</span><span class="sr">*</span><span class="se">((?:[\w\u</span><span class="sr">00c0-</span><span class="se">\u</span><span class="sr">FFFF_-</span><span class="se">]</span><span class="sr">|</span><span class="se">\\</span><span class="sr">.</span><span class="se">)</span><span class="sr">+</span><span class="se">)[</span><span class="sr">'"</span><span class="se">]</span><span class="sr">*</span><span class="se">\]</span><span class="sr">/</span><span class="p">,</span>
              <span class="na">ATTR</span><span class="p">:</span> <span class="sr">/</span><span class="se">\[\s</span><span class="sr">*</span><span class="se">((?:[\w\u</span><span class="sr">00c0-</span><span class="se">\u</span><span class="sr">FFFF_-</span><span class="se">]</span><span class="sr">|</span><span class="se">\\</span><span class="sr">.</span><span class="se">)</span><span class="sr">+</span><span class="se">)\s</span><span class="sr">*</span><span class="se">(?:(\S?</span><span class="sr">=</span><span class="se">)\s</span><span class="sr">*</span><span class="se">([</span><span class="sr">'"</span><span class="se">]</span><span class="sr">*</span><span class="se">)(</span><span class="sr">.*</span><span class="se">?)\3</span><span class="sr">|</span><span class="se">)\s</span><span class="sr">*</span><span class="se">\]</span><span class="sr">/</span><span class="p">,</span>
              <span class="na">TAG</span><span class="p">:</span> <span class="sr">/^</span><span class="se">((?:[\w\u</span><span class="sr">00c0-</span><span class="se">\u</span><span class="sr">FFFF</span><span class="se">\*</span><span class="sr">_-</span><span class="se">]</span><span class="sr">|</span><span class="se">\\</span><span class="sr">.</span><span class="se">)</span><span class="sr">+</span><span class="se">)</span><span class="sr">/</span><span class="p">,</span>
              <span class="na">CHILD</span><span class="p">:</span> <span class="sr">/:</span><span class="se">(</span><span class="sr">only|nth|last|first</span><span class="se">)</span><span class="sr">-child</span><span class="se">(?:\((</span><span class="sr">even|odd|</span><span class="se">[\d</span><span class="sr">n+-</span><span class="se">]</span><span class="sr">*</span><span class="se">)\))?</span><span class="sr">/</span><span class="p">,</span>
              <span class="na">POS</span><span class="p">:</span> <span class="sr">/:</span><span class="se">(</span><span class="sr">nth|eq|gt|lt|first|last|even|odd</span><span class="se">)(?:\((\d</span><span class="sr">*</span><span class="se">)\))?(?=[^</span><span class="sr">-</span><span class="se">]</span><span class="sr">|$</span><span class="se">)</span><span class="sr">/</span><span class="p">,</span>
              <span class="na">PSEUDO</span><span class="p">:</span>
                <span class="sr">/:</span><span class="se">((?:[\w\u</span><span class="sr">00c0-</span><span class="se">\u</span><span class="sr">FFFF_-</span><span class="se">]</span><span class="sr">|</span><span class="se">\\</span><span class="sr">.</span><span class="se">)</span><span class="sr">+</span><span class="se">)(?:\(([</span><span class="sr">'"</span><span class="se">]</span><span class="sr">*</span><span class="se">)((?:\([^\)]</span><span class="sr">+</span><span class="se">\)</span><span class="sr">|</span><span class="se">[^\2\(\)]</span><span class="sr">*</span><span class="se">)</span><span class="sr">+</span><span class="se">)\2\))?</span><span class="sr">/</span><span class="p">,</span>
            <span class="p">&#125;,</span>
            <span class="na">attrMap</span><span class="p">:</span> <span class="p">&#123;</span> <span class="na">class</span><span class="p">:</span> <span class="dl">"</span><span class="s2">className</span><span class="dl">"</span><span class="p">,</span> <span class="na">for</span><span class="p">:</span> <span class="dl">"</span><span class="s2">htmlFor</span><span class="dl">"</span> <span class="p">&#125;,</span>
            <span class="na">attrHandle</span><span class="p">:</span> <span class="p">&#123;</span>
              <span class="na">href</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="nx">T</span><span class="p">.</span><span class="nf">getAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">href</span><span class="dl">"</span><span class="p">);</span>
              <span class="p">&#125;,</span>
            <span class="p">&#125;,</span>
            <span class="na">relative</span><span class="p">:</span> <span class="p">&#123;</span>
              <span class="dl">"</span><span class="s2">+</span><span class="dl">"</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">aa</span><span class="p">,</span> <span class="nx">T</span><span class="p">,</span> <span class="nx">Z</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="kd">var</span> <span class="nx">X</span> <span class="o">=</span> <span class="k">typeof</span> <span class="nx">T</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">string</span><span class="dl">"</span><span class="p">,</span>
                  <span class="nx">ab</span> <span class="o">=</span> <span class="nx">X</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="sr">/</span><span class="se">\W</span><span class="sr">/</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">T</span><span class="p">),</span>
                  <span class="nx">Y</span> <span class="o">=</span> <span class="nx">X</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">ab</span><span class="p">;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">ab</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">Z</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">T</span> <span class="o">=</span> <span class="nx">T</span><span class="p">.</span><span class="nf">toUpperCase</span><span class="p">();</span>
                <span class="p">&#125;</span>
                <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">W</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">V</span> <span class="o">=</span> <span class="nx">aa</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span> <span class="nx">U</span><span class="p">;</span> <span class="nx">W</span> <span class="o">&lt;</span> <span class="nx">V</span><span class="p">;</span> <span class="nx">W</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">if </span><span class="p">((</span><span class="nx">U</span> <span class="o">=</span> <span class="nx">aa</span><span class="p">[</span><span class="nx">W</span><span class="p">]))</span> <span class="p">&#123;</span>
                    <span class="k">while </span><span class="p">((</span><span class="nx">U</span> <span class="o">=</span> <span class="nx">U</span><span class="p">.</span><span class="nx">previousSibling</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">U</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">!==</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;&#125;</span>
                    <span class="nx">aa</span><span class="p">[</span><span class="nx">W</span><span class="p">]</span> <span class="o">=</span> <span class="nx">Y</span> <span class="o">||</span> <span class="p">(</span><span class="nx">U</span> <span class="o">&amp;&amp;</span> <span class="nx">U</span><span class="p">.</span><span class="nx">nodeName</span> <span class="o">===</span> <span class="nx">T</span><span class="p">)</span> <span class="p">?</span> <span class="nx">U</span> <span class="o">||</span> <span class="kc">false</span> <span class="p">:</span> <span class="nx">U</span> <span class="o">===</span> <span class="nx">T</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">Y</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">F</span><span class="p">.</span><span class="nf">filter</span><span class="p">(</span><span class="nx">T</span><span class="p">,</span> <span class="nx">aa</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;,</span>
              <span class="dl">"</span><span class="s2">&gt;</span><span class="dl">"</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">Z</span><span class="p">,</span> <span class="nx">U</span><span class="p">,</span> <span class="nx">aa</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="kd">var</span> <span class="nx">X</span> <span class="o">=</span> <span class="k">typeof</span> <span class="nx">U</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">string</span><span class="dl">"</span><span class="p">;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">X</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="sr">/</span><span class="se">\W</span><span class="sr">/</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">U</span><span class="p">))</span> <span class="p">&#123;</span>
                  <span class="nx">U</span> <span class="o">=</span> <span class="nx">aa</span> <span class="p">?</span> <span class="nx">U</span> <span class="p">:</span> <span class="nx">U</span><span class="p">.</span><span class="nf">toUpperCase</span><span class="p">();</span>
                  <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">V</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">T</span> <span class="o">=</span> <span class="nx">Z</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">V</span> <span class="o">&lt;</span> <span class="nx">T</span><span class="p">;</span> <span class="nx">V</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="kd">var</span> <span class="nx">Y</span> <span class="o">=</span> <span class="nx">Z</span><span class="p">[</span><span class="nx">V</span><span class="p">];</span>
                    <span class="k">if </span><span class="p">(</span><span class="nx">Y</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="kd">var</span> <span class="nx">W</span> <span class="o">=</span> <span class="nx">Y</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">;</span>
                      <span class="nx">Z</span><span class="p">[</span><span class="nx">V</span><span class="p">]</span> <span class="o">=</span> <span class="nx">W</span><span class="p">.</span><span class="nx">nodeName</span> <span class="o">===</span> <span class="nx">U</span> <span class="p">?</span> <span class="nx">W</span> <span class="p">:</span> <span class="kc">false</span><span class="p">;</span>
                    <span class="p">&#125;</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                  <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">V</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">T</span> <span class="o">=</span> <span class="nx">Z</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">V</span> <span class="o">&lt;</span> <span class="nx">T</span><span class="p">;</span> <span class="nx">V</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="kd">var</span> <span class="nx">Y</span> <span class="o">=</span> <span class="nx">Z</span><span class="p">[</span><span class="nx">V</span><span class="p">];</span>
                    <span class="k">if </span><span class="p">(</span><span class="nx">Y</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="nx">Z</span><span class="p">[</span><span class="nx">V</span><span class="p">]</span> <span class="o">=</span> <span class="nx">X</span> <span class="p">?</span> <span class="nx">Y</span><span class="p">.</span><span class="nx">parentNode</span> <span class="p">:</span> <span class="nx">Y</span><span class="p">.</span><span class="nx">parentNode</span> <span class="o">===</span> <span class="nx">U</span><span class="p">;</span>
                    <span class="p">&#125;</span>
                  <span class="p">&#125;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">X</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nx">F</span><span class="p">.</span><span class="nf">filter</span><span class="p">(</span><span class="nx">U</span><span class="p">,</span> <span class="nx">Z</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;,</span>
              <span class="dl">""</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">W</span><span class="p">,</span> <span class="nx">U</span><span class="p">,</span> <span class="nx">Y</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="kd">var</span> <span class="nx">V</span> <span class="o">=</span> <span class="nx">L</span><span class="o">++</span><span class="p">,</span>
                  <span class="nx">T</span> <span class="o">=</span> <span class="nx">S</span><span class="p">;</span>
                <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">U</span><span class="p">.</span><span class="nf">match</span><span class="p">(</span><span class="sr">/</span><span class="se">\W</span><span class="sr">/</span><span class="p">))</span> <span class="p">&#123;</span>
                  <span class="kd">var</span> <span class="nx">X</span> <span class="o">=</span> <span class="p">(</span><span class="nx">U</span> <span class="o">=</span> <span class="nx">Y</span> <span class="p">?</span> <span class="nx">U</span> <span class="p">:</span> <span class="nx">U</span><span class="p">.</span><span class="nf">toUpperCase</span><span class="p">());</span>
                  <span class="nx">T</span> <span class="o">=</span> <span class="nx">P</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="nc">T</span><span class="p">(</span><span class="dl">"</span><span class="s2">parentNode</span><span class="dl">"</span><span class="p">,</span> <span class="nx">U</span><span class="p">,</span> <span class="nx">V</span><span class="p">,</span> <span class="nx">W</span><span class="p">,</span> <span class="nx">X</span><span class="p">,</span> <span class="nx">Y</span><span class="p">);</span>
              <span class="p">&#125;,</span>
              <span class="dl">"</span><span class="s2">~</span><span class="dl">"</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">W</span><span class="p">,</span> <span class="nx">U</span><span class="p">,</span> <span class="nx">Y</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="kd">var</span> <span class="nx">V</span> <span class="o">=</span> <span class="nx">L</span><span class="o">++</span><span class="p">,</span>
                  <span class="nx">T</span> <span class="o">=</span> <span class="nx">S</span><span class="p">;</span>
                <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">U</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">string</span><span class="dl">"</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">U</span><span class="p">.</span><span class="nf">match</span><span class="p">(</span><span class="sr">/</span><span class="se">\W</span><span class="sr">/</span><span class="p">))</span> <span class="p">&#123;</span>
                  <span class="kd">var</span> <span class="nx">X</span> <span class="o">=</span> <span class="p">(</span><span class="nx">U</span> <span class="o">=</span> <span class="nx">Y</span> <span class="p">?</span> <span class="nx">U</span> <span class="p">:</span> <span class="nx">U</span><span class="p">.</span><span class="nf">toUpperCase</span><span class="p">());</span>
                  <span class="nx">T</span> <span class="o">=</span> <span class="nx">P</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="nc">T</span><span class="p">(</span><span class="dl">"</span><span class="s2">previousSibling</span><span class="dl">"</span><span class="p">,</span> <span class="nx">U</span><span class="p">,</span> <span class="nx">V</span><span class="p">,</span> <span class="nx">W</span><span class="p">,</span> <span class="nx">X</span><span class="p">,</span> <span class="nx">Y</span><span class="p">);</span>
              <span class="p">&#125;,</span>
            <span class="p">&#125;,</span>
            <span class="na">find</span><span class="p">:</span> <span class="p">&#123;</span>
              <span class="na">ID</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">U</span><span class="p">,</span> <span class="nx">V</span><span class="p">,</span> <span class="nx">W</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">V</span><span class="p">.</span><span class="nx">getElementById</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">undefined</span><span class="dl">"</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">W</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="kd">var</span> <span class="nx">T</span> <span class="o">=</span> <span class="nx">V</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="nx">U</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span>
                  <span class="k">return</span> <span class="nx">T</span> <span class="p">?</span> <span class="p">[</span><span class="nx">T</span><span class="p">]</span> <span class="p">:</span> <span class="p">[];</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;,</span>
              <span class="na">NAME</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">V</span><span class="p">,</span> <span class="nx">Y</span><span class="p">,</span> <span class="nx">Z</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">Y</span><span class="p">.</span><span class="nx">getElementsByName</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">undefined</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="kd">var</span> <span class="nx">U</span> <span class="o">=</span> <span class="p">[],</span>
                    <span class="nx">X</span> <span class="o">=</span> <span class="nx">Y</span><span class="p">.</span><span class="nf">getElementsByName</span><span class="p">(</span><span class="nx">V</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span>
                  <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">W</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">T</span> <span class="o">=</span> <span class="nx">X</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">W</span> <span class="o">&lt;</span> <span class="nx">T</span><span class="p">;</span> <span class="nx">W</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="k">if </span><span class="p">(</span><span class="nx">X</span><span class="p">[</span><span class="nx">W</span><span class="p">].</span><span class="nf">getAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">name</span><span class="dl">"</span><span class="p">)</span> <span class="o">===</span> <span class="nx">V</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span> <span class="p">&#123;</span>
                      <span class="nx">U</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">X</span><span class="p">[</span><span class="nx">W</span><span class="p">]);</span>
                    <span class="p">&#125;</span>
                  <span class="p">&#125;</span>
                  <span class="k">return</span> <span class="nx">U</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span> <span class="p">?</span> <span class="kc">null</span> <span class="p">:</span> <span class="nx">U</span><span class="p">;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;,</span>
              <span class="na">TAG</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">,</span> <span class="nx">U</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="nx">U</span><span class="p">.</span><span class="nf">getElementsByTagName</span><span class="p">(</span><span class="nx">T</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span>
              <span class="p">&#125;,</span>
            <span class="p">&#125;,</span>
            <span class="na">preFilter</span><span class="p">:</span> <span class="p">&#123;</span>
              <span class="na">CLASS</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">W</span><span class="p">,</span> <span class="nx">U</span><span class="p">,</span> <span class="nx">V</span><span class="p">,</span> <span class="nx">T</span><span class="p">,</span> <span class="nx">Z</span><span class="p">,</span> <span class="nx">aa</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">W</span> <span class="o">=</span> <span class="dl">"</span><span class="s2"> </span><span class="dl">"</span> <span class="o">+</span> <span class="nx">W</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/</span><span class="se">\\</span><span class="sr">/g</span><span class="p">,</span> <span class="dl">""</span><span class="p">)</span> <span class="o">+</span> <span class="dl">"</span><span class="s2"> </span><span class="dl">"</span><span class="p">;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">aa</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">return</span> <span class="nx">W</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">X</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">Y</span><span class="p">;</span> <span class="p">(</span><span class="nx">Y</span> <span class="o">=</span> <span class="nx">U</span><span class="p">[</span><span class="nx">X</span><span class="p">])</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">;</span> <span class="nx">X</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">Y</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="k">if </span><span class="p">(</span>
                      <span class="nx">Z</span> <span class="o">^</span>
                      <span class="p">(</span><span class="nx">Y</span><span class="p">.</span><span class="nx">className</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="dl">"</span><span class="s2"> </span><span class="dl">"</span> <span class="o">+</span> <span class="nx">Y</span><span class="p">.</span><span class="nx">className</span> <span class="o">+</span> <span class="dl">"</span><span class="s2"> </span><span class="dl">"</span><span class="p">).</span><span class="nf">indexOf</span><span class="p">(</span><span class="nx">W</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span>
                    <span class="p">)</span> <span class="p">&#123;</span>
                      <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">V</span><span class="p">)</span> <span class="p">&#123;</span>
                        <span class="nx">T</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">Y</span><span class="p">);</span>
                      <span class="p">&#125;</span>
                    <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                      <span class="k">if </span><span class="p">(</span><span class="nx">V</span><span class="p">)</span> <span class="p">&#123;</span>
                        <span class="nx">U</span><span class="p">[</span><span class="nx">X</span><span class="p">]</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
                      <span class="p">&#125;</span>
                    <span class="p">&#125;</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span>
                <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">ID</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="nx">T</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/</span><span class="se">\\</span><span class="sr">/g</span><span class="p">,</span> <span class="dl">""</span><span class="p">);</span>
              <span class="p">&#125;,</span>
              <span class="na">TAG</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">U</span><span class="p">,</span> <span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">V</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">T</span><span class="p">[</span><span class="nx">V</span><span class="p">]</span> <span class="o">===</span> <span class="kc">false</span><span class="p">;</span> <span class="nx">V</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;&#125;</span>
                <span class="k">return</span> <span class="nx">T</span><span class="p">[</span><span class="nx">V</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nc">Q</span><span class="p">(</span><span class="nx">T</span><span class="p">[</span><span class="nx">V</span><span class="p">])</span> <span class="p">?</span> <span class="nx">U</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="p">:</span> <span class="nx">U</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nf">toUpperCase</span><span class="p">();</span>
              <span class="p">&#125;,</span>
              <span class="na">CHILD</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">T</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">nth</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="kd">var</span> <span class="nx">U</span> <span class="o">=</span> <span class="sr">/</span><span class="se">(</span><span class="sr">-</span><span class="se">?)(\d</span><span class="sr">*</span><span class="se">)</span><span class="sr">n</span><span class="se">((?:\+</span><span class="sr">|-</span><span class="se">)?\d</span><span class="sr">*</span><span class="se">)</span><span class="sr">/</span><span class="p">.</span><span class="nf">exec</span><span class="p">(</span>
                    <span class="p">(</span><span class="nx">T</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">even</span><span class="dl">"</span> <span class="o">&amp;&amp;</span> <span class="dl">"</span><span class="s2">2n</span><span class="dl">"</span><span class="p">)</span> <span class="o">||</span>
                      <span class="p">(</span><span class="nx">T</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">odd</span><span class="dl">"</span> <span class="o">&amp;&amp;</span> <span class="dl">"</span><span class="s2">2n+1</span><span class="dl">"</span><span class="p">)</span> <span class="o">||</span>
                      <span class="p">(</span><span class="o">!</span><span class="sr">/</span><span class="se">\D</span><span class="sr">/</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">T</span><span class="p">[</span><span class="mi">2</span><span class="p">])</span> <span class="o">&amp;&amp;</span> <span class="dl">"</span><span class="s2">0n+</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">T</span><span class="p">[</span><span class="mi">2</span><span class="p">])</span> <span class="o">||</span>
                      <span class="nx">T</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span>
                  <span class="p">);</span>
                  <span class="nx">T</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">=</span> <span class="nx">U</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">+</span> <span class="p">(</span><span class="nx">U</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">||</span> <span class="mi">1</span><span class="p">)</span> <span class="o">-</span> <span class="mi">0</span><span class="p">;</span>
                  <span class="nx">T</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span> <span class="o">=</span> <span class="nx">U</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span> <span class="o">-</span> <span class="mi">0</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="nx">T</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">=</span> <span class="nx">L</span><span class="o">++</span><span class="p">;</span>
                <span class="k">return</span> <span class="nx">T</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">ATTR</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">X</span><span class="p">,</span> <span class="nx">U</span><span class="p">,</span> <span class="nx">V</span><span class="p">,</span> <span class="nx">T</span><span class="p">,</span> <span class="nx">Y</span><span class="p">,</span> <span class="nx">Z</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="kd">var</span> <span class="nx">W</span> <span class="o">=</span> <span class="nx">X</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/</span><span class="se">\\</span><span class="sr">/g</span><span class="p">,</span> <span class="dl">""</span><span class="p">);</span>
                <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">Z</span> <span class="o">&amp;&amp;</span> <span class="nx">I</span><span class="p">.</span><span class="nx">attrMap</span><span class="p">[</span><span class="nx">W</span><span class="p">])</span> <span class="p">&#123;</span>
                  <span class="nx">X</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">I</span><span class="p">.</span><span class="nx">attrMap</span><span class="p">[</span><span class="nx">W</span><span class="p">];</span>
                <span class="p">&#125;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">X</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">~=</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">X</span><span class="p">[</span><span class="mi">4</span><span class="p">]</span> <span class="o">=</span> <span class="dl">"</span><span class="s2"> </span><span class="dl">"</span> <span class="o">+</span> <span class="nx">X</span><span class="p">[</span><span class="mi">4</span><span class="p">]</span> <span class="o">+</span> <span class="dl">"</span><span class="s2"> </span><span class="dl">"</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="k">return</span> <span class="nx">X</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">PSEUDO</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">X</span><span class="p">,</span> <span class="nx">U</span><span class="p">,</span> <span class="nx">V</span><span class="p">,</span> <span class="nx">T</span><span class="p">,</span> <span class="nx">Y</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">X</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">not</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">X</span><span class="p">[</span><span class="mi">3</span><span class="p">].</span><span class="nf">match</span><span class="p">(</span><span class="nx">R</span><span class="p">).</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">1</span> <span class="o">||</span> <span class="sr">/^</span><span class="se">\w</span><span class="sr">/</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">X</span><span class="p">[</span><span class="mi">3</span><span class="p">]))</span> <span class="p">&#123;</span>
                    <span class="nx">X</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span> <span class="o">=</span> <span class="nc">F</span><span class="p">(</span><span class="nx">X</span><span class="p">[</span><span class="mi">3</span><span class="p">],</span> <span class="kc">null</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">U</span><span class="p">);</span>
                  <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                    <span class="kd">var</span> <span class="nx">W</span> <span class="o">=</span> <span class="nx">F</span><span class="p">.</span><span class="nf">filter</span><span class="p">(</span><span class="nx">X</span><span class="p">[</span><span class="mi">3</span><span class="p">],</span> <span class="nx">U</span><span class="p">,</span> <span class="nx">V</span><span class="p">,</span> <span class="kc">true</span> <span class="o">^</span> <span class="nx">Y</span><span class="p">);</span>
                    <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">V</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="nx">T</span><span class="p">.</span><span class="nx">push</span><span class="p">.</span><span class="nf">apply</span><span class="p">(</span><span class="nx">T</span><span class="p">,</span> <span class="nx">W</span><span class="p">);</span>
                    <span class="p">&#125;</span>
                    <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">I</span><span class="p">.</span><span class="nx">match</span><span class="p">.</span><span class="nx">POS</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">X</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="o">||</span> <span class="nx">I</span><span class="p">.</span><span class="nx">match</span><span class="p">.</span><span class="nx">CHILD</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">X</span><span class="p">[</span><span class="mi">0</span><span class="p">]))</span> <span class="p">&#123;</span>
                    <span class="k">return</span> <span class="kc">true</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span>
                <span class="k">return</span> <span class="nx">X</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">POS</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">T</span><span class="p">.</span><span class="nf">unshift</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span>
                <span class="k">return</span> <span class="nx">T</span><span class="p">;</span>
              <span class="p">&#125;,</span>
            <span class="p">&#125;,</span>
            <span class="na">filters</span><span class="p">:</span> <span class="p">&#123;</span>
              <span class="na">enabled</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="nx">T</span><span class="p">.</span><span class="nx">disabled</span> <span class="o">===</span> <span class="kc">false</span> <span class="o">&amp;&amp;</span> <span class="nx">T</span><span class="p">.</span><span class="nx">type</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">hidden</span><span class="dl">"</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">disabled</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="nx">T</span><span class="p">.</span><span class="nx">disabled</span> <span class="o">===</span> <span class="kc">true</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">checked</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="nx">T</span><span class="p">.</span><span class="nx">checked</span> <span class="o">===</span> <span class="kc">true</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">selected</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">T</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">selectedIndex</span><span class="p">;</span>
                <span class="k">return</span> <span class="nx">T</span><span class="p">.</span><span class="nx">selected</span> <span class="o">===</span> <span class="kc">true</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">parent</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="o">!!</span><span class="nx">T</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">empty</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="o">!</span><span class="nx">T</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">has</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">V</span><span class="p">,</span> <span class="nx">U</span><span class="p">,</span> <span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="o">!!</span><span class="nc">F</span><span class="p">(</span><span class="nx">T</span><span class="p">[</span><span class="mi">3</span><span class="p">],</span> <span class="nx">V</span><span class="p">).</span><span class="nx">length</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">header</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="sr">/h</span><span class="se">\d</span><span class="sr">/i</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">T</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">);</span>
              <span class="p">&#125;,</span>
              <span class="na">text</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="dl">"</span><span class="s2">text</span><span class="dl">"</span> <span class="o">===</span> <span class="nx">T</span><span class="p">.</span><span class="nx">type</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">radio</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="dl">"</span><span class="s2">radio</span><span class="dl">"</span> <span class="o">===</span> <span class="nx">T</span><span class="p">.</span><span class="nx">type</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">checkbox</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="dl">"</span><span class="s2">checkbox</span><span class="dl">"</span> <span class="o">===</span> <span class="nx">T</span><span class="p">.</span><span class="nx">type</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">file</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="dl">"</span><span class="s2">file</span><span class="dl">"</span> <span class="o">===</span> <span class="nx">T</span><span class="p">.</span><span class="nx">type</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">password</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="dl">"</span><span class="s2">password</span><span class="dl">"</span> <span class="o">===</span> <span class="nx">T</span><span class="p">.</span><span class="nx">type</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">submit</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="dl">"</span><span class="s2">submit</span><span class="dl">"</span> <span class="o">===</span> <span class="nx">T</span><span class="p">.</span><span class="nx">type</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">image</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="dl">"</span><span class="s2">image</span><span class="dl">"</span> <span class="o">===</span> <span class="nx">T</span><span class="p">.</span><span class="nx">type</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">reset</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="dl">"</span><span class="s2">reset</span><span class="dl">"</span> <span class="o">===</span> <span class="nx">T</span><span class="p">.</span><span class="nx">type</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">button</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return </span><span class="p">(</span>
                  <span class="dl">"</span><span class="s2">button</span><span class="dl">"</span> <span class="o">===</span> <span class="nx">T</span><span class="p">.</span><span class="nx">type</span> <span class="o">||</span> <span class="nx">T</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">.</span><span class="nf">toUpperCase</span><span class="p">()</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">BUTTON</span><span class="dl">"</span>
                <span class="p">);</span>
              <span class="p">&#125;,</span>
              <span class="na">input</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="sr">/input|select|textarea|button/i</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">T</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">);</span>
              <span class="p">&#125;,</span>
            <span class="p">&#125;,</span>
            <span class="na">setFilters</span><span class="p">:</span> <span class="p">&#123;</span>
              <span class="na">first</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">U</span><span class="p">,</span> <span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="nx">T</span> <span class="o">===</span> <span class="mi">0</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">last</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">V</span><span class="p">,</span> <span class="nx">U</span><span class="p">,</span> <span class="nx">T</span><span class="p">,</span> <span class="nx">W</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="nx">U</span> <span class="o">===</span> <span class="nx">W</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">even</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">U</span><span class="p">,</span> <span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="nx">T</span> <span class="o">%</span> <span class="mi">2</span> <span class="o">===</span> <span class="mi">0</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">odd</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">U</span><span class="p">,</span> <span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="nx">T</span> <span class="o">%</span> <span class="mi">2</span> <span class="o">===</span> <span class="mi">1</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">lt</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">V</span><span class="p">,</span> <span class="nx">U</span><span class="p">,</span> <span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="nx">U</span> <span class="o">&lt;</span> <span class="nx">T</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span> <span class="o">-</span> <span class="mi">0</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">gt</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">V</span><span class="p">,</span> <span class="nx">U</span><span class="p">,</span> <span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="nx">U</span> <span class="o">&gt;</span> <span class="nx">T</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span> <span class="o">-</span> <span class="mi">0</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">nth</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">V</span><span class="p">,</span> <span class="nx">U</span><span class="p">,</span> <span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="nx">T</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span> <span class="o">-</span> <span class="mi">0</span> <span class="o">==</span> <span class="nx">U</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">eq</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">V</span><span class="p">,</span> <span class="nx">U</span><span class="p">,</span> <span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="nx">T</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span> <span class="o">-</span> <span class="mi">0</span> <span class="o">==</span> <span class="nx">U</span><span class="p">;</span>
              <span class="p">&#125;,</span>
            <span class="p">&#125;,</span>
            <span class="na">filter</span><span class="p">:</span> <span class="p">&#123;</span>
              <span class="na">PSEUDO</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">Z</span><span class="p">,</span> <span class="nx">V</span><span class="p">,</span> <span class="nx">W</span><span class="p">,</span> <span class="nx">aa</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="kd">var</span> <span class="nx">U</span> <span class="o">=</span> <span class="nx">V</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span>
                  <span class="nx">X</span> <span class="o">=</span> <span class="nx">I</span><span class="p">.</span><span class="nx">filters</span><span class="p">[</span><span class="nx">U</span><span class="p">];</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">X</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">return</span> <span class="nc">X</span><span class="p">(</span><span class="nx">Z</span><span class="p">,</span> <span class="nx">W</span><span class="p">,</span> <span class="nx">V</span><span class="p">,</span> <span class="nx">aa</span><span class="p">);</span>
                <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">U</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">contains</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="k">return </span><span class="p">(</span>
                      <span class="p">(</span><span class="nx">Z</span><span class="p">.</span><span class="nx">textContent</span> <span class="o">||</span> <span class="nx">Z</span><span class="p">.</span><span class="nx">innerText</span> <span class="o">||</span> <span class="dl">""</span><span class="p">).</span><span class="nf">indexOf</span><span class="p">(</span><span class="nx">V</span><span class="p">[</span><span class="mi">3</span><span class="p">])</span> <span class="o">&gt;=</span> <span class="mi">0</span>
                    <span class="p">);</span>
                  <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                    <span class="k">if </span><span class="p">(</span><span class="nx">U</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">not</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="kd">var</span> <span class="nx">Y</span> <span class="o">=</span> <span class="nx">V</span><span class="p">[</span><span class="mi">3</span><span class="p">];</span>
                      <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">W</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">T</span> <span class="o">=</span> <span class="nx">Y</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">W</span> <span class="o">&lt;</span> <span class="nx">T</span><span class="p">;</span> <span class="nx">W</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
                        <span class="k">if </span><span class="p">(</span><span class="nx">Y</span><span class="p">[</span><span class="nx">W</span><span class="p">]</span> <span class="o">===</span> <span class="nx">Z</span><span class="p">)</span> <span class="p">&#123;</span>
                          <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
                        <span class="p">&#125;</span>
                      <span class="p">&#125;</span>
                      <span class="k">return</span> <span class="kc">true</span><span class="p">;</span>
                    <span class="p">&#125;</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;,</span>
              <span class="na">CHILD</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">,</span> <span class="nx">W</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="kd">var</span> <span class="nx">Z</span> <span class="o">=</span> <span class="nx">W</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span>
                  <span class="nx">U</span> <span class="o">=</span> <span class="nx">T</span><span class="p">;</span>
                <span class="k">switch </span><span class="p">(</span><span class="nx">Z</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">case</span> <span class="dl">"</span><span class="s2">only</span><span class="dl">"</span><span class="p">:</span>
                  <span class="k">case</span> <span class="dl">"</span><span class="s2">first</span><span class="dl">"</span><span class="p">:</span>
                    <span class="k">while </span><span class="p">((</span><span class="nx">U</span> <span class="o">=</span> <span class="nx">U</span><span class="p">.</span><span class="nx">previousSibling</span><span class="p">))</span> <span class="p">&#123;</span>
                      <span class="k">if </span><span class="p">(</span><span class="nx">U</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
                        <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
                      <span class="p">&#125;</span>
                    <span class="p">&#125;</span>
                    <span class="k">if </span><span class="p">(</span><span class="nx">Z</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">first</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="k">return</span> <span class="kc">true</span><span class="p">;</span>
                    <span class="p">&#125;</span>
                    <span class="nx">U</span> <span class="o">=</span> <span class="nx">T</span><span class="p">;</span>
                  <span class="k">case</span> <span class="dl">"</span><span class="s2">last</span><span class="dl">"</span><span class="p">:</span>
                    <span class="k">while </span><span class="p">((</span><span class="nx">U</span> <span class="o">=</span> <span class="nx">U</span><span class="p">.</span><span class="nx">nextSibling</span><span class="p">))</span> <span class="p">&#123;</span>
                      <span class="k">if </span><span class="p">(</span><span class="nx">U</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
                        <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
                      <span class="p">&#125;</span>
                    <span class="p">&#125;</span>
                    <span class="k">return</span> <span class="kc">true</span><span class="p">;</span>
                  <span class="k">case</span> <span class="dl">"</span><span class="s2">nth</span><span class="dl">"</span><span class="p">:</span>
                    <span class="kd">var</span> <span class="nx">V</span> <span class="o">=</span> <span class="nx">W</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span>
                      <span class="nx">ac</span> <span class="o">=</span> <span class="nx">W</span><span class="p">[</span><span class="mi">3</span><span class="p">];</span>
                    <span class="k">if </span><span class="p">(</span><span class="nx">V</span> <span class="o">==</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">ac</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="k">return</span> <span class="kc">true</span><span class="p">;</span>
                    <span class="p">&#125;</span>
                    <span class="kd">var</span> <span class="nx">Y</span> <span class="o">=</span> <span class="nx">W</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span>
                      <span class="nx">ab</span> <span class="o">=</span> <span class="nx">T</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">;</span>
                    <span class="k">if </span><span class="p">(</span><span class="nx">ab</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">ab</span><span class="p">.</span><span class="nx">sizcache</span> <span class="o">!==</span> <span class="nx">Y</span> <span class="o">||</span> <span class="o">!</span><span class="nx">T</span><span class="p">.</span><span class="nx">nodeIndex</span><span class="p">))</span> <span class="p">&#123;</span>
                      <span class="kd">var</span> <span class="nx">X</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
                      <span class="k">for </span><span class="p">(</span><span class="nx">U</span> <span class="o">=</span> <span class="nx">ab</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">;</span> <span class="nx">U</span><span class="p">;</span> <span class="nx">U</span> <span class="o">=</span> <span class="nx">U</span><span class="p">.</span><span class="nx">nextSibling</span><span class="p">)</span> <span class="p">&#123;</span>
                        <span class="k">if </span><span class="p">(</span><span class="nx">U</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
                          <span class="nx">U</span><span class="p">.</span><span class="nx">nodeIndex</span> <span class="o">=</span> <span class="o">++</span><span class="nx">X</span><span class="p">;</span>
                        <span class="p">&#125;</span>
                      <span class="p">&#125;</span>
                      <span class="nx">ab</span><span class="p">.</span><span class="nx">sizcache</span> <span class="o">=</span> <span class="nx">Y</span><span class="p">;</span>
                    <span class="p">&#125;</span>
                    <span class="kd">var</span> <span class="nx">aa</span> <span class="o">=</span> <span class="nx">T</span><span class="p">.</span><span class="nx">nodeIndex</span> <span class="o">-</span> <span class="nx">ac</span><span class="p">;</span>
                    <span class="k">if </span><span class="p">(</span><span class="nx">V</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="k">return</span> <span class="nx">aa</span> <span class="o">==</span> <span class="mi">0</span><span class="p">;</span>
                    <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                      <span class="k">return</span> <span class="nx">aa</span> <span class="o">%</span> <span class="nx">V</span> <span class="o">==</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">aa</span> <span class="o">/</span> <span class="nx">V</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">;</span>
                    <span class="p">&#125;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;,</span>
              <span class="na">ID</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">U</span><span class="p">,</span> <span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="nx">U</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">U</span><span class="p">.</span><span class="nf">getAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">id</span><span class="dl">"</span><span class="p">)</span> <span class="o">===</span> <span class="nx">T</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">TAG</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">U</span><span class="p">,</span> <span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return </span><span class="p">(</span><span class="nx">T</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">*</span><span class="dl">"</span> <span class="o">&amp;&amp;</span> <span class="nx">U</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="o">||</span> <span class="nx">U</span><span class="p">.</span><span class="nx">nodeName</span> <span class="o">===</span> <span class="nx">T</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">CLASS</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">U</span><span class="p">,</span> <span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return </span><span class="p">(</span>
                  <span class="p">(</span>
                    <span class="dl">"</span><span class="s2"> </span><span class="dl">"</span> <span class="o">+</span>
                    <span class="p">(</span><span class="nx">U</span><span class="p">.</span><span class="nx">className</span> <span class="o">||</span> <span class="nx">U</span><span class="p">.</span><span class="nf">getAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">class</span><span class="dl">"</span><span class="p">))</span> <span class="o">+</span>
                    <span class="dl">"</span><span class="s2"> </span><span class="dl">"</span>
                  <span class="p">).</span><span class="nf">indexOf</span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span>
                <span class="p">);</span>
              <span class="p">&#125;,</span>
              <span class="na">ATTR</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">Y</span><span class="p">,</span> <span class="nx">W</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="kd">var</span> <span class="nx">V</span> <span class="o">=</span> <span class="nx">W</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span>
                  <span class="nx">T</span> <span class="o">=</span> <span class="nx">I</span><span class="p">.</span><span class="nx">attrHandle</span><span class="p">[</span><span class="nx">V</span><span class="p">]</span>
                    <span class="p">?</span> <span class="nx">I</span><span class="p">.</span><span class="nx">attrHandle</span><span class="p">[</span><span class="nx">V</span><span class="p">](</span><span class="nx">Y</span><span class="p">)</span>
                    <span class="p">:</span> <span class="nx">Y</span><span class="p">[</span><span class="nx">V</span><span class="p">]</span> <span class="o">!=</span> <span class="kc">null</span>
                      <span class="p">?</span> <span class="nx">Y</span><span class="p">[</span><span class="nx">V</span><span class="p">]</span>
                      <span class="p">:</span> <span class="nx">Y</span><span class="p">.</span><span class="nf">getAttribute</span><span class="p">(</span><span class="nx">V</span><span class="p">),</span>
                  <span class="nx">Z</span> <span class="o">=</span> <span class="nx">T</span> <span class="o">+</span> <span class="dl">""</span><span class="p">,</span>
                  <span class="nx">X</span> <span class="o">=</span> <span class="nx">W</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span>
                  <span class="nx">U</span> <span class="o">=</span> <span class="nx">W</span><span class="p">[</span><span class="mi">4</span><span class="p">];</span>
                <span class="k">return</span> <span class="nx">T</span> <span class="o">==</span> <span class="kc">null</span>
                  <span class="p">?</span> <span class="nx">X</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">!=</span><span class="dl">"</span>
                  <span class="p">:</span> <span class="nx">X</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">=</span><span class="dl">"</span>
                    <span class="p">?</span> <span class="nx">Z</span> <span class="o">===</span> <span class="nx">U</span>
                    <span class="p">:</span> <span class="nx">X</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">*=</span><span class="dl">"</span>
                      <span class="p">?</span> <span class="nx">Z</span><span class="p">.</span><span class="nf">indexOf</span><span class="p">(</span><span class="nx">U</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mi">0</span>
                      <span class="p">:</span> <span class="nx">X</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">~=</span><span class="dl">"</span>
                        <span class="p">?</span> <span class="p">(</span><span class="dl">"</span><span class="s2"> </span><span class="dl">"</span> <span class="o">+</span> <span class="nx">Z</span> <span class="o">+</span> <span class="dl">"</span><span class="s2"> </span><span class="dl">"</span><span class="p">).</span><span class="nf">indexOf</span><span class="p">(</span><span class="nx">U</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mi">0</span>
                        <span class="p">:</span> <span class="o">!</span><span class="nx">U</span>
                          <span class="p">?</span> <span class="nx">Z</span> <span class="o">&amp;&amp;</span> <span class="nx">T</span> <span class="o">!==</span> <span class="kc">false</span>
                          <span class="p">:</span> <span class="nx">X</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">!=</span><span class="dl">"</span>
                            <span class="p">?</span> <span class="nx">Z</span> <span class="o">!=</span> <span class="nx">U</span>
                            <span class="p">:</span> <span class="nx">X</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">^=</span><span class="dl">"</span>
                              <span class="p">?</span> <span class="nx">Z</span><span class="p">.</span><span class="nf">indexOf</span><span class="p">(</span><span class="nx">U</span><span class="p">)</span> <span class="o">===</span> <span class="mi">0</span>
                              <span class="p">:</span> <span class="nx">X</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">$=</span><span class="dl">"</span>
                                <span class="p">?</span> <span class="nx">Z</span><span class="p">.</span><span class="nf">substr</span><span class="p">(</span><span class="nx">Z</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="nx">U</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="o">===</span> <span class="nx">U</span>
                                <span class="p">:</span> <span class="nx">X</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">|=</span><span class="dl">"</span>
                                  <span class="p">?</span> <span class="nx">Z</span> <span class="o">===</span> <span class="nx">U</span> <span class="o">||</span>
                                    <span class="nx">Z</span><span class="p">.</span><span class="nf">substr</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">U</span><span class="p">.</span><span class="nx">length</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">===</span> <span class="nx">U</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">-</span><span class="dl">"</span>
                                  <span class="p">:</span> <span class="kc">false</span><span class="p">;</span>
              <span class="p">&#125;,</span>
              <span class="na">POS</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">X</span><span class="p">,</span> <span class="nx">U</span><span class="p">,</span> <span class="nx">V</span><span class="p">,</span> <span class="nx">Y</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="kd">var</span> <span class="nx">T</span> <span class="o">=</span> <span class="nx">U</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span>
                  <span class="nx">W</span> <span class="o">=</span> <span class="nx">I</span><span class="p">.</span><span class="nx">setFilters</span><span class="p">[</span><span class="nx">T</span><span class="p">];</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">W</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">return</span> <span class="nc">W</span><span class="p">(</span><span class="nx">X</span><span class="p">,</span> <span class="nx">V</span><span class="p">,</span> <span class="nx">U</span><span class="p">,</span> <span class="nx">Y</span><span class="p">);</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;,</span>
            <span class="p">&#125;,</span>
          <span class="p">&#125;);</span>
          <span class="kd">var</span> <span class="nx">M</span> <span class="o">=</span> <span class="nx">I</span><span class="p">.</span><span class="nx">match</span><span class="p">.</span><span class="nx">POS</span><span class="p">;</span>
          <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">O</span> <span class="k">in</span> <span class="nx">I</span><span class="p">.</span><span class="nx">match</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">I</span><span class="p">.</span><span class="nx">match</span><span class="p">[</span><span class="nx">O</span><span class="p">]</span> <span class="o">=</span> <span class="nc">RegExp</span><span class="p">(</span>
              <span class="nx">I</span><span class="p">.</span><span class="nx">match</span><span class="p">[</span><span class="nx">O</span><span class="p">].</span><span class="nx">source</span> <span class="o">+</span> <span class="sr">/</span><span class="se">(?![^\[]</span><span class="sr">*</span><span class="se">\])(?![^\(]</span><span class="sr">*</span><span class="se">\))</span><span class="sr">/</span><span class="p">.</span><span class="nx">source</span><span class="p">,</span>
            <span class="p">);</span>
          <span class="p">&#125;</span>
          <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">U</span><span class="p">,</span> <span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">U</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nx">U</span><span class="p">);</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">T</span><span class="p">.</span><span class="nx">push</span><span class="p">.</span><span class="nf">apply</span><span class="p">(</span><span class="nx">T</span><span class="p">,</span> <span class="nx">U</span><span class="p">);</span>
              <span class="k">return</span> <span class="nx">T</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">U</span><span class="p">;</span>
          <span class="p">&#125;;</span>
          <span class="k">try</span> <span class="p">&#123;</span>
            <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">.</span><span class="nx">childNodes</span><span class="p">);</span>
          <span class="p">&#125;</span> <span class="k">catch </span><span class="p">(</span><span class="nx">N</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">E</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">X</span><span class="p">,</span> <span class="nx">W</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">U</span> <span class="o">=</span> <span class="nx">W</span> <span class="o">||</span> <span class="p">[];</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">H</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nx">X</span><span class="p">)</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">[object Array]</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">push</span><span class="p">.</span><span class="nf">apply</span><span class="p">(</span><span class="nx">U</span><span class="p">,</span> <span class="nx">X</span><span class="p">);</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">X</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">number</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">V</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">T</span> <span class="o">=</span> <span class="nx">X</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">V</span> <span class="o">&lt;</span> <span class="nx">T</span><span class="p">;</span> <span class="nx">V</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nx">U</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">X</span><span class="p">[</span><span class="nx">V</span><span class="p">]);</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                  <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">V</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">X</span><span class="p">[</span><span class="nx">V</span><span class="p">];</span> <span class="nx">V</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nx">U</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">X</span><span class="p">[</span><span class="nx">V</span><span class="p">]);</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
              <span class="k">return</span> <span class="nx">U</span><span class="p">;</span>
            <span class="p">&#125;;</span>
          <span class="p">&#125;</span>
          <span class="kd">var</span> <span class="nx">G</span><span class="p">;</span>
          <span class="k">if </span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">.</span><span class="nx">compareDocumentPosition</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">G</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">U</span><span class="p">,</span> <span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">V</span> <span class="o">=</span> <span class="nx">U</span><span class="p">.</span><span class="nf">compareDocumentPosition</span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mi">4</span> <span class="p">?</span> <span class="o">-</span><span class="mi">1</span> <span class="p">:</span> <span class="nx">U</span> <span class="o">===</span> <span class="nx">T</span> <span class="p">?</span> <span class="mi">0</span> <span class="p">:</span> <span class="mi">1</span><span class="p">;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">V</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">hasDuplicate</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
              <span class="p">&#125;</span>
              <span class="k">return</span> <span class="nx">V</span><span class="p">;</span>
            <span class="p">&#125;;</span>
          <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="dl">"</span><span class="s2">sourceIndex</span><span class="dl">"</span> <span class="k">in</span> <span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">G</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">U</span><span class="p">,</span> <span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="kd">var</span> <span class="nx">V</span> <span class="o">=</span> <span class="nx">U</span><span class="p">.</span><span class="nx">sourceIndex</span> <span class="o">-</span> <span class="nx">T</span><span class="p">.</span><span class="nx">sourceIndex</span><span class="p">;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">V</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">hasDuplicate</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="k">return</span> <span class="nx">V</span><span class="p">;</span>
              <span class="p">&#125;;</span>
            <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">createRange</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">G</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">W</span><span class="p">,</span> <span class="nx">U</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="kd">var</span> <span class="nx">V</span> <span class="o">=</span> <span class="nx">W</span><span class="p">.</span><span class="nx">ownerDocument</span><span class="p">.</span><span class="nf">createRange</span><span class="p">(),</span>
                    <span class="nx">T</span> <span class="o">=</span> <span class="nx">U</span><span class="p">.</span><span class="nx">ownerDocument</span><span class="p">.</span><span class="nf">createRange</span><span class="p">();</span>
                  <span class="nx">V</span><span class="p">.</span><span class="nf">selectNode</span><span class="p">(</span><span class="nx">W</span><span class="p">);</span>
                  <span class="nx">V</span><span class="p">.</span><span class="nf">collapse</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span>
                  <span class="nx">T</span><span class="p">.</span><span class="nf">selectNode</span><span class="p">(</span><span class="nx">U</span><span class="p">);</span>
                  <span class="nx">T</span><span class="p">.</span><span class="nf">collapse</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span>
                  <span class="kd">var</span> <span class="nx">X</span> <span class="o">=</span> <span class="nx">V</span><span class="p">.</span><span class="nf">compareBoundaryPoints</span><span class="p">(</span><span class="nx">Range</span><span class="p">.</span><span class="nx">START_TO_END</span><span class="p">,</span> <span class="nx">T</span><span class="p">);</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">X</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nx">hasDuplicate</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                  <span class="k">return</span> <span class="nx">X</span><span class="p">;</span>
                <span class="p">&#125;;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;</span>
          <span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">U</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">form</span><span class="dl">"</span><span class="p">),</span>
              <span class="nx">V</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">script</span><span class="dl">"</span> <span class="o">+</span> <span class="k">new</span> <span class="nc">Date</span><span class="p">().</span><span class="nf">getTime</span><span class="p">();</span>
            <span class="nx">U</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">&lt;input name='</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">V</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">'/&gt;</span><span class="dl">"</span><span class="p">;</span>
            <span class="kd">var</span> <span class="nx">T</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">;</span>
            <span class="nx">T</span><span class="p">.</span><span class="nf">insertBefore</span><span class="p">(</span><span class="nx">U</span><span class="p">,</span> <span class="nx">T</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">);</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!!</span><span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="nx">V</span><span class="p">))</span> <span class="p">&#123;</span>
              <span class="nx">I</span><span class="p">.</span><span class="nx">find</span><span class="p">.</span><span class="nx">ID</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">X</span><span class="p">,</span> <span class="nx">Y</span><span class="p">,</span> <span class="nx">Z</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">Y</span><span class="p">.</span><span class="nx">getElementById</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">undefined</span><span class="dl">"</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">Z</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="kd">var</span> <span class="nx">W</span> <span class="o">=</span> <span class="nx">Y</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="nx">X</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span>
                  <span class="k">return</span> <span class="nx">W</span>
                    <span class="p">?</span> <span class="nx">W</span><span class="p">.</span><span class="nx">id</span> <span class="o">===</span> <span class="nx">X</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">||</span>
                      <span class="p">(</span><span class="k">typeof</span> <span class="nx">W</span><span class="p">.</span><span class="nx">getAttributeNode</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">undefined</span><span class="dl">"</span> <span class="o">&amp;&amp;</span>
                        <span class="nx">W</span><span class="p">.</span><span class="nf">getAttributeNode</span><span class="p">(</span><span class="dl">"</span><span class="s2">id</span><span class="dl">"</span><span class="p">).</span><span class="nx">nodeValue</span> <span class="o">===</span> <span class="nx">X</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span>
                      <span class="p">?</span> <span class="p">[</span><span class="nx">W</span><span class="p">]</span>
                      <span class="p">:</span> <span class="nx">g</span>
                    <span class="p">:</span> <span class="p">[];</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;;</span>
              <span class="nx">I</span><span class="p">.</span><span class="nx">filter</span><span class="p">.</span><span class="nx">ID</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">Y</span><span class="p">,</span> <span class="nx">W</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="kd">var</span> <span class="nx">X</span> <span class="o">=</span>
                  <span class="k">typeof</span> <span class="nx">Y</span><span class="p">.</span><span class="nx">getAttributeNode</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">undefined</span><span class="dl">"</span> <span class="o">&amp;&amp;</span>
                  <span class="nx">Y</span><span class="p">.</span><span class="nf">getAttributeNode</span><span class="p">(</span><span class="dl">"</span><span class="s2">id</span><span class="dl">"</span><span class="p">);</span>
                <span class="k">return</span> <span class="nx">Y</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">X</span> <span class="o">&amp;&amp;</span> <span class="nx">X</span><span class="p">.</span><span class="nx">nodeValue</span> <span class="o">===</span> <span class="nx">W</span><span class="p">;</span>
              <span class="p">&#125;;</span>
            <span class="p">&#125;</span>
            <span class="nx">T</span><span class="p">.</span><span class="nf">removeChild</span><span class="p">(</span><span class="nx">U</span><span class="p">);</span>
          <span class="p">&#125;)();</span>
          <span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">T</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">div</span><span class="dl">"</span><span class="p">);</span>
            <span class="nx">T</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nf">createComment</span><span class="p">(</span><span class="dl">""</span><span class="p">));</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">T</span><span class="p">.</span><span class="nf">getElementsByTagName</span><span class="p">(</span><span class="dl">"</span><span class="s2">*</span><span class="dl">"</span><span class="p">).</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">I</span><span class="p">.</span><span class="nx">find</span><span class="p">.</span><span class="nx">TAG</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">U</span><span class="p">,</span> <span class="nx">Y</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="kd">var</span> <span class="nx">X</span> <span class="o">=</span> <span class="nx">Y</span><span class="p">.</span><span class="nf">getElementsByTagName</span><span class="p">(</span><span class="nx">U</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">U</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">*</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="kd">var</span> <span class="nx">W</span> <span class="o">=</span> <span class="p">[];</span>
                  <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">V</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">X</span><span class="p">[</span><span class="nx">V</span><span class="p">];</span> <span class="nx">V</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="k">if </span><span class="p">(</span><span class="nx">X</span><span class="p">[</span><span class="nx">V</span><span class="p">].</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="nx">W</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">X</span><span class="p">[</span><span class="nx">V</span><span class="p">]);</span>
                    <span class="p">&#125;</span>
                  <span class="p">&#125;</span>
                  <span class="nx">X</span> <span class="o">=</span> <span class="nx">W</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="k">return</span> <span class="nx">X</span><span class="p">;</span>
              <span class="p">&#125;;</span>
            <span class="p">&#125;</span>
            <span class="nx">T</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">&lt;a href='#'&gt;&lt;/a&gt;</span><span class="dl">"</span><span class="p">;</span>
            <span class="k">if </span><span class="p">(</span>
              <span class="nx">T</span><span class="p">.</span><span class="nx">firstChild</span> <span class="o">&amp;&amp;</span>
              <span class="k">typeof</span> <span class="nx">T</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">.</span><span class="nx">getAttribute</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">undefined</span><span class="dl">"</span> <span class="o">&amp;&amp;</span>
              <span class="nx">T</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">.</span><span class="nf">getAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">href</span><span class="dl">"</span><span class="p">)</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">#</span><span class="dl">"</span>
            <span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">I</span><span class="p">.</span><span class="nx">attrHandle</span><span class="p">.</span><span class="nx">href</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">U</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="nx">U</span><span class="p">.</span><span class="nf">getAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">href</span><span class="dl">"</span><span class="p">,</span> <span class="mi">2</span><span class="p">);</span>
              <span class="p">&#125;;</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;)();</span>
          <span class="k">if </span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">querySelectorAll</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">T</span> <span class="o">=</span> <span class="nx">F</span><span class="p">,</span>
                <span class="nx">U</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">div</span><span class="dl">"</span><span class="p">);</span>
              <span class="nx">U</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">&lt;p class='TEST'&gt;&lt;/p&gt;</span><span class="dl">"</span><span class="p">;</span>
              <span class="k">if </span><span class="p">(</span>
                <span class="nx">U</span><span class="p">.</span><span class="nx">querySelectorAll</span> <span class="o">&amp;&amp;</span>
                <span class="nx">U</span><span class="p">.</span><span class="nf">querySelectorAll</span><span class="p">(</span><span class="dl">"</span><span class="s2">.TEST</span><span class="dl">"</span><span class="p">).</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span>
              <span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span><span class="p">;</span>
              <span class="p">&#125;</span>
              <span class="nx">F</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">Y</span><span class="p">,</span> <span class="nx">X</span><span class="p">,</span> <span class="nx">V</span><span class="p">,</span> <span class="nx">W</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">X</span> <span class="o">=</span> <span class="nx">X</span> <span class="o">||</span> <span class="nb">document</span><span class="p">;</span>
                <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">W</span> <span class="o">&amp;&amp;</span> <span class="nx">X</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">9</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nc">Q</span><span class="p">(</span><span class="nx">X</span><span class="p">))</span> <span class="p">&#123;</span>
                  <span class="k">try</span> <span class="p">&#123;</span>
                    <span class="k">return</span> <span class="nc">E</span><span class="p">(</span><span class="nx">X</span><span class="p">.</span><span class="nf">querySelectorAll</span><span class="p">(</span><span class="nx">Y</span><span class="p">),</span> <span class="nx">V</span><span class="p">);</span>
                  <span class="p">&#125;</span> <span class="k">catch </span><span class="p">(</span><span class="nx">Z</span><span class="p">)</span> <span class="p">&#123;&#125;</span>
                <span class="p">&#125;</span>
                <span class="k">return</span> <span class="nc">T</span><span class="p">(</span><span class="nx">Y</span><span class="p">,</span> <span class="nx">X</span><span class="p">,</span> <span class="nx">V</span><span class="p">,</span> <span class="nx">W</span><span class="p">);</span>
              <span class="p">&#125;;</span>
              <span class="nx">F</span><span class="p">.</span><span class="nx">find</span> <span class="o">=</span> <span class="nx">T</span><span class="p">.</span><span class="nx">find</span><span class="p">;</span>
              <span class="nx">F</span><span class="p">.</span><span class="nx">filter</span> <span class="o">=</span> <span class="nx">T</span><span class="p">.</span><span class="nx">filter</span><span class="p">;</span>
              <span class="nx">F</span><span class="p">.</span><span class="nx">selectors</span> <span class="o">=</span> <span class="nx">T</span><span class="p">.</span><span class="nx">selectors</span><span class="p">;</span>
              <span class="nx">F</span><span class="p">.</span><span class="nx">matches</span> <span class="o">=</span> <span class="nx">T</span><span class="p">.</span><span class="nx">matches</span><span class="p">;</span>
            <span class="p">&#125;)();</span>
          <span class="p">&#125;</span>
          <span class="k">if </span><span class="p">(</span>
            <span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByClassName</span> <span class="o">&amp;&amp;</span>
            <span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">.</span><span class="nx">getElementsByClassName</span>
          <span class="p">)</span> <span class="p">&#123;</span>
            <span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">T</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">div</span><span class="dl">"</span><span class="p">);</span>
              <span class="nx">T</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span>
                <span class="dl">"</span><span class="s2">&lt;div class='test e'&gt;&lt;/div&gt;&lt;div class='test'&gt;&lt;/div&gt;</span><span class="dl">"</span><span class="p">;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">T</span><span class="p">.</span><span class="nf">getElementsByClassName</span><span class="p">(</span><span class="dl">"</span><span class="s2">e</span><span class="dl">"</span><span class="p">).</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span><span class="p">;</span>
              <span class="p">&#125;</span>
              <span class="nx">T</span><span class="p">.</span><span class="nx">lastChild</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">e</span><span class="dl">"</span><span class="p">;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">T</span><span class="p">.</span><span class="nf">getElementsByClassName</span><span class="p">(</span><span class="dl">"</span><span class="s2">e</span><span class="dl">"</span><span class="p">).</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span><span class="p">;</span>
              <span class="p">&#125;</span>
              <span class="nx">I</span><span class="p">.</span><span class="nx">order</span><span class="p">.</span><span class="nf">splice</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="dl">"</span><span class="s2">CLASS</span><span class="dl">"</span><span class="p">);</span>
              <span class="nx">I</span><span class="p">.</span><span class="nx">find</span><span class="p">.</span><span class="nx">CLASS</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">U</span><span class="p">,</span> <span class="nx">V</span><span class="p">,</span> <span class="nx">W</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">V</span><span class="p">.</span><span class="nx">getElementsByClassName</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">undefined</span><span class="dl">"</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">W</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">return</span> <span class="nx">V</span><span class="p">.</span><span class="nf">getElementsByClassName</span><span class="p">(</span><span class="nx">U</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;;</span>
            <span class="p">&#125;)();</span>
          <span class="p">&#125;</span>
          <span class="kd">function</span> <span class="nf">P</span><span class="p">(</span><span class="nx">U</span><span class="p">,</span> <span class="nx">Z</span><span class="p">,</span> <span class="nx">Y</span><span class="p">,</span> <span class="nx">ad</span><span class="p">,</span> <span class="nx">aa</span><span class="p">,</span> <span class="nx">ac</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">ab</span> <span class="o">=</span> <span class="nx">U</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">previousSibling</span><span class="dl">"</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">ac</span><span class="p">;</span>
            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">W</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">V</span> <span class="o">=</span> <span class="nx">ad</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">W</span> <span class="o">&lt;</span> <span class="nx">V</span><span class="p">;</span> <span class="nx">W</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">T</span> <span class="o">=</span> <span class="nx">ad</span><span class="p">[</span><span class="nx">W</span><span class="p">];</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">ab</span> <span class="o">&amp;&amp;</span> <span class="nx">T</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">T</span><span class="p">.</span><span class="nx">sizcache</span> <span class="o">=</span> <span class="nx">Y</span><span class="p">;</span>
                  <span class="nx">T</span><span class="p">.</span><span class="nx">sizset</span> <span class="o">=</span> <span class="nx">W</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="nx">T</span> <span class="o">=</span> <span class="nx">T</span><span class="p">[</span><span class="nx">U</span><span class="p">];</span>
                <span class="kd">var</span> <span class="nx">X</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
                <span class="k">while </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">T</span><span class="p">.</span><span class="nx">sizcache</span> <span class="o">===</span> <span class="nx">Y</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nx">X</span> <span class="o">=</span> <span class="nx">ad</span><span class="p">[</span><span class="nx">T</span><span class="p">.</span><span class="nx">sizset</span><span class="p">];</span>
                    <span class="k">break</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">T</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">ac</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nx">T</span><span class="p">.</span><span class="nx">sizcache</span> <span class="o">=</span> <span class="nx">Y</span><span class="p">;</span>
                    <span class="nx">T</span><span class="p">.</span><span class="nx">sizset</span> <span class="o">=</span> <span class="nx">W</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">T</span><span class="p">.</span><span class="nx">nodeName</span> <span class="o">===</span> <span class="nx">Z</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nx">X</span> <span class="o">=</span> <span class="nx">T</span><span class="p">;</span>
                    <span class="k">break</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                  <span class="nx">T</span> <span class="o">=</span> <span class="nx">T</span><span class="p">[</span><span class="nx">U</span><span class="p">];</span>
                <span class="p">&#125;</span>
                <span class="nx">ad</span><span class="p">[</span><span class="nx">W</span><span class="p">]</span> <span class="o">=</span> <span class="nx">X</span><span class="p">;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;</span>
          <span class="kd">function</span> <span class="nf">S</span><span class="p">(</span><span class="nx">U</span><span class="p">,</span> <span class="nx">Z</span><span class="p">,</span> <span class="nx">Y</span><span class="p">,</span> <span class="nx">ad</span><span class="p">,</span> <span class="nx">aa</span><span class="p">,</span> <span class="nx">ac</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">ab</span> <span class="o">=</span> <span class="nx">U</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">previousSibling</span><span class="dl">"</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">ac</span><span class="p">;</span>
            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">W</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">V</span> <span class="o">=</span> <span class="nx">ad</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">W</span> <span class="o">&lt;</span> <span class="nx">V</span><span class="p">;</span> <span class="nx">W</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">T</span> <span class="o">=</span> <span class="nx">ad</span><span class="p">[</span><span class="nx">W</span><span class="p">];</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">ab</span> <span class="o">&amp;&amp;</span> <span class="nx">T</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">T</span><span class="p">.</span><span class="nx">sizcache</span> <span class="o">=</span> <span class="nx">Y</span><span class="p">;</span>
                  <span class="nx">T</span><span class="p">.</span><span class="nx">sizset</span> <span class="o">=</span> <span class="nx">W</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="nx">T</span> <span class="o">=</span> <span class="nx">T</span><span class="p">[</span><span class="nx">U</span><span class="p">];</span>
                <span class="kd">var</span> <span class="nx">X</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
                <span class="k">while </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">T</span><span class="p">.</span><span class="nx">sizcache</span> <span class="o">===</span> <span class="nx">Y</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nx">X</span> <span class="o">=</span> <span class="nx">ad</span><span class="p">[</span><span class="nx">T</span><span class="p">.</span><span class="nx">sizset</span><span class="p">];</span>
                    <span class="k">break</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">T</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">ac</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="nx">T</span><span class="p">.</span><span class="nx">sizcache</span> <span class="o">=</span> <span class="nx">Y</span><span class="p">;</span>
                      <span class="nx">T</span><span class="p">.</span><span class="nx">sizset</span> <span class="o">=</span> <span class="nx">W</span><span class="p">;</span>
                    <span class="p">&#125;</span>
                    <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">Z</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">string</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="k">if </span><span class="p">(</span><span class="nx">T</span> <span class="o">===</span> <span class="nx">Z</span><span class="p">)</span> <span class="p">&#123;</span>
                        <span class="nx">X</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
                        <span class="k">break</span><span class="p">;</span>
                      <span class="p">&#125;</span>
                    <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                      <span class="k">if </span><span class="p">(</span><span class="nx">F</span><span class="p">.</span><span class="nf">filter</span><span class="p">(</span><span class="nx">Z</span><span class="p">,</span> <span class="p">[</span><span class="nx">T</span><span class="p">]).</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
                        <span class="nx">X</span> <span class="o">=</span> <span class="nx">T</span><span class="p">;</span>
                        <span class="k">break</span><span class="p">;</span>
                      <span class="p">&#125;</span>
                    <span class="p">&#125;</span>
                  <span class="p">&#125;</span>
                  <span class="nx">T</span> <span class="o">=</span> <span class="nx">T</span><span class="p">[</span><span class="nx">U</span><span class="p">];</span>
                <span class="p">&#125;</span>
                <span class="nx">ad</span><span class="p">[</span><span class="nx">W</span><span class="p">]</span> <span class="o">=</span> <span class="nx">X</span><span class="p">;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;</span>
          <span class="kd">var</span> <span class="nx">K</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">compareDocumentPosition</span>
            <span class="p">?</span> <span class="nf">function </span><span class="p">(</span><span class="nx">U</span><span class="p">,</span> <span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="nx">U</span><span class="p">.</span><span class="nf">compareDocumentPosition</span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mi">16</span><span class="p">;</span>
              <span class="p">&#125;</span>
            <span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">U</span><span class="p">,</span> <span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="nx">U</span> <span class="o">!==</span> <span class="nx">T</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">U</span><span class="p">.</span><span class="nx">contains</span> <span class="p">?</span> <span class="nx">U</span><span class="p">.</span><span class="nf">contains</span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">:</span> <span class="kc">true</span><span class="p">);</span>
              <span class="p">&#125;;</span>
          <span class="kd">var</span> <span class="nx">Q</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return </span><span class="p">(</span>
              <span class="p">(</span><span class="nx">T</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">9</span> <span class="o">&amp;&amp;</span> <span class="nx">T</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">.</span><span class="nx">nodeName</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">HTML</span><span class="dl">"</span><span class="p">)</span> <span class="o">||</span>
              <span class="p">(</span><span class="o">!!</span><span class="nx">T</span><span class="p">.</span><span class="nx">ownerDocument</span> <span class="o">&amp;&amp;</span> <span class="nc">Q</span><span class="p">(</span><span class="nx">T</span><span class="p">.</span><span class="nx">ownerDocument</span><span class="p">))</span>
            <span class="p">);</span>
          <span class="p">&#125;;</span>
          <span class="kd">var</span> <span class="nx">J</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">,</span> <span class="nx">aa</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">W</span> <span class="o">=</span> <span class="p">[],</span>
              <span class="nx">X</span> <span class="o">=</span> <span class="dl">""</span><span class="p">,</span>
              <span class="nx">Y</span><span class="p">,</span>
              <span class="nx">V</span> <span class="o">=</span> <span class="nx">aa</span><span class="p">.</span><span class="nx">nodeType</span> <span class="p">?</span> <span class="p">[</span><span class="nx">aa</span><span class="p">]</span> <span class="p">:</span> <span class="nx">aa</span><span class="p">;</span>
            <span class="k">while </span><span class="p">((</span><span class="nx">Y</span> <span class="o">=</span> <span class="nx">I</span><span class="p">.</span><span class="nx">match</span><span class="p">.</span><span class="nx">PSEUDO</span><span class="p">.</span><span class="nf">exec</span><span class="p">(</span><span class="nx">T</span><span class="p">)))</span> <span class="p">&#123;</span>
              <span class="nx">X</span> <span class="o">+=</span> <span class="nx">Y</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span>
              <span class="nx">T</span> <span class="o">=</span> <span class="nx">T</span><span class="p">.</span><span class="nf">replace</span><span class="p">(</span><span class="nx">I</span><span class="p">.</span><span class="nx">match</span><span class="p">.</span><span class="nx">PSEUDO</span><span class="p">,</span> <span class="dl">""</span><span class="p">);</span>
            <span class="p">&#125;</span>
            <span class="nx">T</span> <span class="o">=</span> <span class="nx">I</span><span class="p">.</span><span class="nx">relative</span><span class="p">[</span><span class="nx">T</span><span class="p">]</span> <span class="p">?</span> <span class="nx">T</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">*</span><span class="dl">"</span> <span class="p">:</span> <span class="nx">T</span><span class="p">;</span>
            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">Z</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">U</span> <span class="o">=</span> <span class="nx">V</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">Z</span> <span class="o">&lt;</span> <span class="nx">U</span><span class="p">;</span> <span class="nx">Z</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nc">F</span><span class="p">(</span><span class="nx">T</span><span class="p">,</span> <span class="nx">V</span><span class="p">[</span><span class="nx">Z</span><span class="p">],</span> <span class="nx">W</span><span class="p">);</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">F</span><span class="p">.</span><span class="nf">filter</span><span class="p">(</span><span class="nx">X</span><span class="p">,</span> <span class="nx">W</span><span class="p">);</span>
          <span class="p">&#125;;</span>
          <span class="nx">o</span><span class="p">.</span><span class="nx">find</span> <span class="o">=</span> <span class="nx">F</span><span class="p">;</span>
          <span class="nx">o</span><span class="p">.</span><span class="nx">filter</span> <span class="o">=</span> <span class="nx">F</span><span class="p">.</span><span class="nx">filter</span><span class="p">;</span>
          <span class="nx">o</span><span class="p">.</span><span class="nx">expr</span> <span class="o">=</span> <span class="nx">F</span><span class="p">.</span><span class="nx">selectors</span><span class="p">;</span>
          <span class="nx">o</span><span class="p">.</span><span class="nx">expr</span><span class="p">[</span><span class="dl">"</span><span class="s2">:</span><span class="dl">"</span><span class="p">]</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">expr</span><span class="p">.</span><span class="nx">filters</span><span class="p">;</span>
          <span class="nx">F</span><span class="p">.</span><span class="nx">selectors</span><span class="p">.</span><span class="nx">filters</span><span class="p">.</span><span class="nx">hidden</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nx">T</span><span class="p">.</span><span class="nx">offsetWidth</span> <span class="o">===</span> <span class="mi">0</span> <span class="o">||</span> <span class="nx">T</span><span class="p">.</span><span class="nx">offsetHeight</span> <span class="o">===</span> <span class="mi">0</span><span class="p">;</span>
          <span class="p">&#125;;</span>
          <span class="nx">F</span><span class="p">.</span><span class="nx">selectors</span><span class="p">.</span><span class="nx">filters</span><span class="p">.</span><span class="nx">visible</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nx">T</span><span class="p">.</span><span class="nx">offsetWidth</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">||</span> <span class="nx">T</span><span class="p">.</span><span class="nx">offsetHeight</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">;</span>
          <span class="p">&#125;;</span>
          <span class="nx">F</span><span class="p">.</span><span class="nx">selectors</span><span class="p">.</span><span class="nx">filters</span><span class="p">.</span><span class="nx">animated</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nf">grep</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">timers</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">U</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="nx">T</span> <span class="o">===</span> <span class="nx">U</span><span class="p">.</span><span class="nx">elem</span><span class="p">;</span>
            <span class="p">&#125;).</span><span class="nx">length</span><span class="p">;</span>
          <span class="p">&#125;;</span>
          <span class="nx">o</span><span class="p">.</span><span class="nx">multiFilter</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">V</span><span class="p">,</span> <span class="nx">T</span><span class="p">,</span> <span class="nx">U</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">U</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">V</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">:not(</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">V</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">)</span><span class="dl">"</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">F</span><span class="p">.</span><span class="nf">matches</span><span class="p">(</span><span class="nx">V</span><span class="p">,</span> <span class="nx">T</span><span class="p">);</span>
          <span class="p">&#125;;</span>
          <span class="nx">o</span><span class="p">.</span><span class="nx">dir</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">V</span><span class="p">,</span> <span class="nx">U</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">T</span> <span class="o">=</span> <span class="p">[],</span>
              <span class="nx">W</span> <span class="o">=</span> <span class="nx">V</span><span class="p">[</span><span class="nx">U</span><span class="p">];</span>
            <span class="k">while </span><span class="p">(</span><span class="nx">W</span> <span class="o">&amp;&amp;</span> <span class="nx">W</span> <span class="o">!=</span> <span class="nb">document</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">W</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">==</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">T</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">W</span><span class="p">);</span>
              <span class="p">&#125;</span>
              <span class="nx">W</span> <span class="o">=</span> <span class="nx">W</span><span class="p">[</span><span class="nx">U</span><span class="p">];</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">T</span><span class="p">;</span>
          <span class="p">&#125;;</span>
          <span class="nx">o</span><span class="p">.</span><span class="nx">nth</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">X</span><span class="p">,</span> <span class="nx">T</span><span class="p">,</span> <span class="nx">V</span><span class="p">,</span> <span class="nx">W</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">T</span> <span class="o">=</span> <span class="nx">T</span> <span class="o">||</span> <span class="mi">1</span><span class="p">;</span>
            <span class="kd">var</span> <span class="nx">U</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
            <span class="k">for </span><span class="p">(;</span> <span class="nx">X</span><span class="p">;</span> <span class="nx">X</span> <span class="o">=</span> <span class="nx">X</span><span class="p">[</span><span class="nx">V</span><span class="p">])</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">X</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">==</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="o">++</span><span class="nx">U</span> <span class="o">==</span> <span class="nx">T</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">break</span><span class="p">;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">X</span><span class="p">;</span>
          <span class="p">&#125;;</span>
          <span class="nx">o</span><span class="p">.</span><span class="nx">sibling</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">V</span><span class="p">,</span> <span class="nx">U</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">T</span> <span class="o">=</span> <span class="p">[];</span>
            <span class="k">for </span><span class="p">(;</span> <span class="nx">V</span><span class="p">;</span> <span class="nx">V</span> <span class="o">=</span> <span class="nx">V</span><span class="p">.</span><span class="nx">nextSibling</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">V</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">==</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">V</span> <span class="o">!=</span> <span class="nx">U</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">T</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">V</span><span class="p">);</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">T</span><span class="p">;</span>
          <span class="p">&#125;;</span>
          <span class="k">return</span><span class="p">;</span>
          <span class="nx">l</span><span class="p">.</span><span class="nx">Sizzle</span> <span class="o">=</span> <span class="nx">F</span><span class="p">;</span>
        <span class="p">&#125;)();</span>
        <span class="nx">o</span><span class="p">.</span><span class="nx">event</span> <span class="o">=</span> <span class="p">&#123;</span>
          <span class="na">add</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">I</span><span class="p">,</span> <span class="nx">F</span><span class="p">,</span> <span class="nx">H</span><span class="p">,</span> <span class="nx">K</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">I</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">==</span> <span class="mi">3</span> <span class="o">||</span> <span class="nx">I</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">==</span> <span class="mi">8</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">I</span><span class="p">.</span><span class="nx">setInterval</span> <span class="o">&amp;&amp;</span> <span class="nx">I</span> <span class="o">!=</span> <span class="nx">l</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">I</span> <span class="o">=</span> <span class="nx">l</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">H</span><span class="p">.</span><span class="nx">guid</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">H</span><span class="p">.</span><span class="nx">guid</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">guid</span><span class="o">++</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">K</span> <span class="o">!==</span> <span class="nx">g</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">G</span> <span class="o">=</span> <span class="nx">H</span><span class="p">;</span>
              <span class="nx">H</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nf">proxy</span><span class="p">(</span><span class="nx">G</span><span class="p">);</span>
              <span class="nx">H</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="nx">K</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">I</span><span class="p">,</span> <span class="dl">"</span><span class="s2">events</span><span class="dl">"</span><span class="p">)</span> <span class="o">||</span> <span class="nx">o</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">I</span><span class="p">,</span> <span class="dl">"</span><span class="s2">events</span><span class="dl">"</span><span class="p">,</span> <span class="p">&#123;&#125;),</span>
              <span class="nx">J</span> <span class="o">=</span>
                <span class="nx">o</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">I</span><span class="p">,</span> <span class="dl">"</span><span class="s2">handle</span><span class="dl">"</span><span class="p">)</span> <span class="o">||</span>
                <span class="nx">o</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">I</span><span class="p">,</span> <span class="dl">"</span><span class="s2">handle</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
                  <span class="k">return</span> <span class="k">typeof</span> <span class="nx">o</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">undefined</span><span class="dl">"</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">triggered</span>
                    <span class="p">?</span> <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">handle</span><span class="p">.</span><span class="nf">apply</span><span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">.</span><span class="nx">elem</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span>
                    <span class="p">:</span> <span class="nx">g</span><span class="p">;</span>
                <span class="p">&#125;);</span>
            <span class="nx">J</span><span class="p">.</span><span class="nx">elem</span> <span class="o">=</span> <span class="nx">I</span><span class="p">;</span>
            <span class="nx">o</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nx">F</span><span class="p">.</span><span class="nf">split</span><span class="p">(</span><span class="sr">/</span><span class="se">\s</span><span class="sr">+/</span><span class="p">),</span> <span class="nf">function </span><span class="p">(</span><span class="nx">M</span><span class="p">,</span> <span class="nx">N</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">O</span> <span class="o">=</span> <span class="nx">N</span><span class="p">.</span><span class="nf">split</span><span class="p">(</span><span class="dl">"</span><span class="s2">.</span><span class="dl">"</span><span class="p">);</span>
              <span class="nx">N</span> <span class="o">=</span> <span class="nx">O</span><span class="p">.</span><span class="nf">shift</span><span class="p">();</span>
              <span class="nx">H</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="nx">O</span><span class="p">.</span><span class="nf">slice</span><span class="p">().</span><span class="nf">sort</span><span class="p">().</span><span class="nf">join</span><span class="p">(</span><span class="dl">"</span><span class="s2">.</span><span class="dl">"</span><span class="p">);</span>
              <span class="kd">var</span> <span class="nx">L</span> <span class="o">=</span> <span class="nx">E</span><span class="p">[</span><span class="nx">N</span><span class="p">];</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">specialAll</span><span class="p">[</span><span class="nx">N</span><span class="p">])</span> <span class="p">&#123;</span>
                <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">specialAll</span><span class="p">[</span><span class="nx">N</span><span class="p">].</span><span class="nx">setup</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nx">I</span><span class="p">,</span> <span class="nx">K</span><span class="p">,</span> <span class="nx">O</span><span class="p">);</span>
              <span class="p">&#125;</span>
              <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">L</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">L</span> <span class="o">=</span> <span class="nx">E</span><span class="p">[</span><span class="nx">N</span><span class="p">]</span> <span class="o">=</span> <span class="p">&#123;&#125;;</span>
                <span class="k">if </span><span class="p">(</span>
                  <span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">special</span><span class="p">[</span><span class="nx">N</span><span class="p">]</span> <span class="o">||</span>
                  <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">special</span><span class="p">[</span><span class="nx">N</span><span class="p">].</span><span class="nx">setup</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nx">I</span><span class="p">,</span> <span class="nx">K</span><span class="p">,</span> <span class="nx">O</span><span class="p">)</span> <span class="o">===</span> <span class="kc">false</span>
                <span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">I</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nx">I</span><span class="p">.</span><span class="nf">addEventListener</span><span class="p">(</span><span class="nx">N</span><span class="p">,</span> <span class="nx">J</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span>
                  <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                    <span class="k">if </span><span class="p">(</span><span class="nx">I</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="nx">I</span><span class="p">.</span><span class="nf">attachEvent</span><span class="p">(</span><span class="dl">"</span><span class="s2">on</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">N</span><span class="p">,</span> <span class="nx">J</span><span class="p">);</span>
                    <span class="p">&#125;</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
              <span class="nx">L</span><span class="p">[</span><span class="nx">H</span><span class="p">.</span><span class="nx">guid</span><span class="p">]</span> <span class="o">=</span> <span class="nx">H</span><span class="p">;</span>
              <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nb">global</span><span class="p">[</span><span class="nx">N</span><span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
            <span class="p">&#125;);</span>
            <span class="nx">I</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">guid</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
          <span class="na">global</span><span class="p">:</span> <span class="p">&#123;&#125;,</span>
          <span class="na">remove</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">K</span><span class="p">,</span> <span class="nx">H</span><span class="p">,</span> <span class="nx">J</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">K</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">==</span> <span class="mi">3</span> <span class="o">||</span> <span class="nx">K</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">==</span> <span class="mi">8</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="kd">var</span> <span class="nx">G</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">K</span><span class="p">,</span> <span class="dl">"</span><span class="s2">events</span><span class="dl">"</span><span class="p">),</span>
              <span class="nx">F</span><span class="p">,</span>
              <span class="nx">E</span><span class="p">;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">H</span> <span class="o">===</span> <span class="nx">g</span> <span class="o">||</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">H</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">string</span><span class="dl">"</span> <span class="o">&amp;&amp;</span> <span class="nx">H</span><span class="p">.</span><span class="nf">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">.</span><span class="dl">"</span><span class="p">))</span> <span class="p">&#123;</span>
                <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">I</span> <span class="k">in</span> <span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">this</span><span class="p">.</span><span class="nf">remove</span><span class="p">(</span><span class="nx">K</span><span class="p">,</span> <span class="nx">I</span> <span class="o">+</span> <span class="p">(</span><span class="nx">H</span> <span class="o">||</span> <span class="dl">""</span><span class="p">));</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">H</span><span class="p">.</span><span class="nx">type</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">J</span> <span class="o">=</span> <span class="nx">H</span><span class="p">.</span><span class="nx">handler</span><span class="p">;</span>
                  <span class="nx">H</span> <span class="o">=</span> <span class="nx">H</span><span class="p">.</span><span class="nx">type</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="nx">o</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nx">H</span><span class="p">.</span><span class="nf">split</span><span class="p">(</span><span class="sr">/</span><span class="se">\s</span><span class="sr">+/</span><span class="p">),</span> <span class="nf">function </span><span class="p">(</span><span class="nx">M</span><span class="p">,</span> <span class="nx">O</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="kd">var</span> <span class="nx">Q</span> <span class="o">=</span> <span class="nx">O</span><span class="p">.</span><span class="nf">split</span><span class="p">(</span><span class="dl">"</span><span class="s2">.</span><span class="dl">"</span><span class="p">);</span>
                  <span class="nx">O</span> <span class="o">=</span> <span class="nx">Q</span><span class="p">.</span><span class="nf">shift</span><span class="p">();</span>
                  <span class="kd">var</span> <span class="nx">N</span> <span class="o">=</span> <span class="nc">RegExp</span><span class="p">(</span>
                    <span class="dl">"</span><span class="s2">(^|</span><span class="se">\\</span><span class="s2">.)</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">Q</span><span class="p">.</span><span class="nf">slice</span><span class="p">().</span><span class="nf">sort</span><span class="p">().</span><span class="nf">join</span><span class="p">(</span><span class="dl">"</span><span class="s2">.*</span><span class="se">\\</span><span class="s2">.</span><span class="dl">"</span><span class="p">)</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">(</span><span class="se">\\</span><span class="s2">.|$)</span><span class="dl">"</span><span class="p">,</span>
                  <span class="p">);</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">G</span><span class="p">[</span><span class="nx">O</span><span class="p">])</span> <span class="p">&#123;</span>
                    <span class="k">if </span><span class="p">(</span><span class="nx">J</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="k">delete</span> <span class="nx">G</span><span class="p">[</span><span class="nx">O</span><span class="p">][</span><span class="nx">J</span><span class="p">.</span><span class="nx">guid</span><span class="p">];</span>
                    <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                      <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">P</span> <span class="k">in</span> <span class="nx">G</span><span class="p">[</span><span class="nx">O</span><span class="p">])</span> <span class="p">&#123;</span>
                        <span class="k">if </span><span class="p">(</span><span class="nx">N</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">G</span><span class="p">[</span><span class="nx">O</span><span class="p">][</span><span class="nx">P</span><span class="p">].</span><span class="nx">type</span><span class="p">))</span> <span class="p">&#123;</span>
                          <span class="k">delete</span> <span class="nx">G</span><span class="p">[</span><span class="nx">O</span><span class="p">][</span><span class="nx">P</span><span class="p">];</span>
                        <span class="p">&#125;</span>
                      <span class="p">&#125;</span>
                    <span class="p">&#125;</span>
                    <span class="k">if </span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">specialAll</span><span class="p">[</span><span class="nx">O</span><span class="p">])</span> <span class="p">&#123;</span>
                      <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">specialAll</span><span class="p">[</span><span class="nx">O</span><span class="p">].</span><span class="nx">teardown</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nx">K</span><span class="p">,</span> <span class="nx">Q</span><span class="p">);</span>
                    <span class="p">&#125;</span>
                    <span class="k">for </span><span class="p">(</span><span class="nx">F</span> <span class="k">in</span> <span class="nx">G</span><span class="p">[</span><span class="nx">O</span><span class="p">])</span> <span class="p">&#123;</span>
                      <span class="k">break</span><span class="p">;</span>
                    <span class="p">&#125;</span>
                    <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="k">if </span><span class="p">(</span>
                        <span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">special</span><span class="p">[</span><span class="nx">O</span><span class="p">]</span> <span class="o">||</span>
                        <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">special</span><span class="p">[</span><span class="nx">O</span><span class="p">].</span><span class="nx">teardown</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nx">K</span><span class="p">,</span> <span class="nx">Q</span><span class="p">)</span> <span class="o">===</span> <span class="kc">false</span>
                      <span class="p">)</span> <span class="p">&#123;</span>
                        <span class="k">if </span><span class="p">(</span><span class="nx">K</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">)</span> <span class="p">&#123;</span>
                          <span class="nx">K</span><span class="p">.</span><span class="nf">removeEventListener</span><span class="p">(</span><span class="nx">O</span><span class="p">,</span> <span class="nx">o</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">K</span><span class="p">,</span> <span class="dl">"</span><span class="s2">handle</span><span class="dl">"</span><span class="p">),</span> <span class="kc">false</span><span class="p">);</span>
                        <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                          <span class="k">if </span><span class="p">(</span><span class="nx">K</span><span class="p">.</span><span class="nx">detachEvent</span><span class="p">)</span> <span class="p">&#123;</span>
                            <span class="nx">K</span><span class="p">.</span><span class="nf">detachEvent</span><span class="p">(</span><span class="dl">"</span><span class="s2">on</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">O</span><span class="p">,</span> <span class="nx">o</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">K</span><span class="p">,</span> <span class="dl">"</span><span class="s2">handle</span><span class="dl">"</span><span class="p">));</span>
                          <span class="p">&#125;</span>
                        <span class="p">&#125;</span>
                      <span class="p">&#125;</span>
                      <span class="nx">F</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
                      <span class="k">delete</span> <span class="nx">G</span><span class="p">[</span><span class="nx">O</span><span class="p">];</span>
                    <span class="p">&#125;</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;);</span>
              <span class="p">&#125;</span>
              <span class="k">for </span><span class="p">(</span><span class="nx">F</span> <span class="k">in</span> <span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">break</span><span class="p">;</span>
              <span class="p">&#125;</span>
              <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="kd">var</span> <span class="nx">L</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">K</span><span class="p">,</span> <span class="dl">"</span><span class="s2">handle</span><span class="dl">"</span><span class="p">);</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">L</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">L</span><span class="p">.</span><span class="nx">elem</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="nx">o</span><span class="p">.</span><span class="nf">removeData</span><span class="p">(</span><span class="nx">K</span><span class="p">,</span> <span class="dl">"</span><span class="s2">events</span><span class="dl">"</span><span class="p">);</span>
                <span class="nx">o</span><span class="p">.</span><span class="nf">removeData</span><span class="p">(</span><span class="nx">K</span><span class="p">,</span> <span class="dl">"</span><span class="s2">handle</span><span class="dl">"</span><span class="p">);</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;,</span>
          <span class="na">trigger</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">I</span><span class="p">,</span> <span class="nx">K</span><span class="p">,</span> <span class="nx">H</span><span class="p">,</span> <span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">G</span> <span class="o">=</span> <span class="nx">I</span><span class="p">.</span><span class="nx">type</span> <span class="o">||</span> <span class="nx">I</span><span class="p">;</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">I</span> <span class="o">=</span>
                <span class="k">typeof</span> <span class="nx">I</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">object</span><span class="dl">"</span>
                  <span class="p">?</span> <span class="nx">I</span><span class="p">[</span><span class="nx">h</span><span class="p">]</span>
                    <span class="p">?</span> <span class="nx">I</span>
                    <span class="p">:</span> <span class="nx">o</span><span class="p">.</span><span class="nf">extend</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nc">Event</span><span class="p">(</span><span class="nx">G</span><span class="p">),</span> <span class="nx">I</span><span class="p">)</span>
                  <span class="p">:</span> <span class="nx">o</span><span class="p">.</span><span class="nc">Event</span><span class="p">(</span><span class="nx">G</span><span class="p">);</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">G</span><span class="p">.</span><span class="nf">indexOf</span><span class="p">(</span><span class="dl">"</span><span class="s2">!</span><span class="dl">"</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">I</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="nx">G</span> <span class="o">=</span> <span class="nx">G</span><span class="p">.</span><span class="nf">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">);</span>
                <span class="nx">I</span><span class="p">.</span><span class="nx">exclusive</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
              <span class="p">&#125;</span>
              <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">H</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">I</span><span class="p">.</span><span class="nf">stopPropagation</span><span class="p">();</span>
                <span class="k">if </span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nb">global</span><span class="p">[</span><span class="nx">G</span><span class="p">])</span> <span class="p">&#123;</span>
                  <span class="nx">o</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">cache</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
                    <span class="k">if </span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">events</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">events</span><span class="p">[</span><span class="nx">G</span><span class="p">])</span> <span class="p">&#123;</span>
                      <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">trigger</span><span class="p">(</span><span class="nx">I</span><span class="p">,</span> <span class="nx">K</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">handle</span><span class="p">.</span><span class="nx">elem</span><span class="p">);</span>
                    <span class="p">&#125;</span>
                  <span class="p">&#125;);</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
              <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">H</span> <span class="o">||</span> <span class="nx">H</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">==</span> <span class="mi">3</span> <span class="o">||</span> <span class="nx">H</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">==</span> <span class="mi">8</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="nx">g</span><span class="p">;</span>
              <span class="p">&#125;</span>
              <span class="nx">I</span><span class="p">.</span><span class="nx">result</span> <span class="o">=</span> <span class="nx">g</span><span class="p">;</span>
              <span class="nx">I</span><span class="p">.</span><span class="nx">target</span> <span class="o">=</span> <span class="nx">H</span><span class="p">;</span>
              <span class="nx">K</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">makeArray</span><span class="p">(</span><span class="nx">K</span><span class="p">);</span>
              <span class="nx">K</span><span class="p">.</span><span class="nf">unshift</span><span class="p">(</span><span class="nx">I</span><span class="p">);</span>
            <span class="p">&#125;</span>
            <span class="nx">I</span><span class="p">.</span><span class="nx">currentTarget</span> <span class="o">=</span> <span class="nx">H</span><span class="p">;</span>
            <span class="kd">var</span> <span class="nx">J</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">H</span><span class="p">,</span> <span class="dl">"</span><span class="s2">handle</span><span class="dl">"</span><span class="p">);</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">J</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">J</span><span class="p">.</span><span class="nf">apply</span><span class="p">(</span><span class="nx">H</span><span class="p">,</span> <span class="nx">K</span><span class="p">);</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span>
              <span class="p">(</span><span class="o">!</span><span class="nx">H</span><span class="p">[</span><span class="nx">G</span><span class="p">]</span> <span class="o">||</span> <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">nodeName</span><span class="p">(</span><span class="nx">H</span><span class="p">,</span> <span class="dl">"</span><span class="s2">a</span><span class="dl">"</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">G</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">click</span><span class="dl">"</span><span class="p">))</span> <span class="o">&amp;&amp;</span>
              <span class="nx">H</span><span class="p">[</span><span class="dl">"</span><span class="s2">on</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">G</span><span class="p">]</span> <span class="o">&amp;&amp;</span>
              <span class="nx">H</span><span class="p">[</span><span class="dl">"</span><span class="s2">on</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">G</span><span class="p">].</span><span class="nf">apply</span><span class="p">(</span><span class="nx">H</span><span class="p">,</span> <span class="nx">K</span><span class="p">)</span> <span class="o">===</span> <span class="kc">false</span>
            <span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">I</span><span class="p">.</span><span class="nx">result</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span>
              <span class="o">!</span><span class="nx">E</span> <span class="o">&amp;&amp;</span>
              <span class="nx">H</span><span class="p">[</span><span class="nx">G</span><span class="p">]</span> <span class="o">&amp;&amp;</span>
              <span class="o">!</span><span class="nx">I</span><span class="p">.</span><span class="nf">isDefaultPrevented</span><span class="p">()</span> <span class="o">&amp;&amp;</span>
              <span class="o">!</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">nodeName</span><span class="p">(</span><span class="nx">H</span><span class="p">,</span> <span class="dl">"</span><span class="s2">a</span><span class="dl">"</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">G</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">click</span><span class="dl">"</span><span class="p">)</span>
            <span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">this</span><span class="p">.</span><span class="nx">triggered</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
              <span class="k">try</span> <span class="p">&#123;</span>
                <span class="nx">H</span><span class="p">[</span><span class="nx">G</span><span class="p">]();</span>
              <span class="p">&#125;</span> <span class="k">catch </span><span class="p">(</span><span class="nx">L</span><span class="p">)</span> <span class="p">&#123;&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">triggered</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">I</span><span class="p">.</span><span class="nf">isPropagationStopped</span><span class="p">())</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">F</span> <span class="o">=</span> <span class="nx">H</span><span class="p">.</span><span class="nx">parentNode</span> <span class="o">||</span> <span class="nx">H</span><span class="p">.</span><span class="nx">ownerDocument</span><span class="p">;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">trigger</span><span class="p">(</span><span class="nx">I</span><span class="p">,</span> <span class="nx">K</span><span class="p">,</span> <span class="nx">F</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;,</span>
          <span class="na">handle</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">K</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">J</span><span class="p">,</span> <span class="nx">E</span><span class="p">;</span>
            <span class="nx">K</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">fix</span><span class="p">(</span><span class="nx">K</span> <span class="o">||</span> <span class="nx">l</span><span class="p">.</span><span class="nx">event</span><span class="p">);</span>
            <span class="nx">K</span><span class="p">.</span><span class="nx">currentTarget</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span>
            <span class="kd">var</span> <span class="nx">L</span> <span class="o">=</span> <span class="nx">K</span><span class="p">.</span><span class="nx">type</span><span class="p">.</span><span class="nf">split</span><span class="p">(</span><span class="dl">"</span><span class="s2">.</span><span class="dl">"</span><span class="p">);</span>
            <span class="nx">K</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="nx">L</span><span class="p">.</span><span class="nf">shift</span><span class="p">();</span>
            <span class="nx">J</span> <span class="o">=</span> <span class="o">!</span><span class="nx">L</span><span class="p">.</span><span class="nx">length</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">K</span><span class="p">.</span><span class="nx">exclusive</span><span class="p">;</span>
            <span class="kd">var</span> <span class="nx">I</span> <span class="o">=</span> <span class="nc">RegExp</span><span class="p">(</span>
              <span class="dl">"</span><span class="s2">(^|</span><span class="se">\\</span><span class="s2">.)</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">L</span><span class="p">.</span><span class="nf">slice</span><span class="p">().</span><span class="nf">sort</span><span class="p">().</span><span class="nf">join</span><span class="p">(</span><span class="dl">"</span><span class="s2">.*</span><span class="se">\\</span><span class="s2">.</span><span class="dl">"</span><span class="p">)</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">(</span><span class="se">\\</span><span class="s2">.|$)</span><span class="dl">"</span><span class="p">,</span>
            <span class="p">);</span>
            <span class="nx">E</span> <span class="o">=</span> <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="dl">"</span><span class="s2">events</span><span class="dl">"</span><span class="p">)</span> <span class="o">||</span> <span class="p">&#123;&#125;)[</span><span class="nx">K</span><span class="p">.</span><span class="nx">type</span><span class="p">];</span>
            <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">G</span> <span class="k">in</span> <span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">H</span> <span class="o">=</span> <span class="nx">E</span><span class="p">[</span><span class="nx">G</span><span class="p">];</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">J</span> <span class="o">||</span> <span class="nx">I</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">H</span><span class="p">.</span><span class="nx">type</span><span class="p">))</span> <span class="p">&#123;</span>
                <span class="nx">K</span><span class="p">.</span><span class="nx">handler</span> <span class="o">=</span> <span class="nx">H</span><span class="p">;</span>
                <span class="nx">K</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="nx">H</span><span class="p">.</span><span class="nx">data</span><span class="p">;</span>
                <span class="kd">var</span> <span class="nx">F</span> <span class="o">=</span> <span class="nx">H</span><span class="p">.</span><span class="nf">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">F</span> <span class="o">!==</span> <span class="nx">g</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">K</span><span class="p">.</span><span class="nx">result</span> <span class="o">=</span> <span class="nx">F</span><span class="p">;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">F</span> <span class="o">===</span> <span class="kc">false</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nx">K</span><span class="p">.</span><span class="nf">preventDefault</span><span class="p">();</span>
                    <span class="nx">K</span><span class="p">.</span><span class="nf">stopPropagation</span><span class="p">();</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">K</span><span class="p">.</span><span class="nf">isImmediatePropagationStopped</span><span class="p">())</span> <span class="p">&#123;</span>
                  <span class="k">break</span><span class="p">;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;,</span>
          <span class="na">props</span><span class="p">:</span>
            <span class="dl">"</span><span class="s2">altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which</span><span class="dl">"</span><span class="p">.</span><span class="nf">split</span><span class="p">(</span>
              <span class="dl">"</span><span class="s2"> </span><span class="dl">"</span><span class="p">,</span>
            <span class="p">),</span>
          <span class="na">fix</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">H</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">H</span><span class="p">[</span><span class="nx">h</span><span class="p">])</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="nx">H</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="kd">var</span> <span class="nx">F</span> <span class="o">=</span> <span class="nx">H</span><span class="p">;</span>
            <span class="nx">H</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nc">Event</span><span class="p">(</span><span class="nx">F</span><span class="p">);</span>
            <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">G</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">props</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span> <span class="nx">J</span><span class="p">;</span> <span class="nx">G</span><span class="p">;)</span> <span class="p">&#123;</span>
              <span class="nx">J</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">props</span><span class="p">[</span><span class="o">--</span><span class="nx">G</span><span class="p">];</span>
              <span class="nx">H</span><span class="p">[</span><span class="nx">J</span><span class="p">]</span> <span class="o">=</span> <span class="nx">F</span><span class="p">[</span><span class="nx">J</span><span class="p">];</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">H</span><span class="p">.</span><span class="nx">target</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">H</span><span class="p">.</span><span class="nx">target</span> <span class="o">=</span> <span class="nx">H</span><span class="p">.</span><span class="nx">srcElement</span> <span class="o">||</span> <span class="nb">document</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">H</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">==</span> <span class="mi">3</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">H</span><span class="p">.</span><span class="nx">target</span> <span class="o">=</span> <span class="nx">H</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">H</span><span class="p">.</span><span class="nx">relatedTarget</span> <span class="o">&amp;&amp;</span> <span class="nx">H</span><span class="p">.</span><span class="nx">fromElement</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">H</span><span class="p">.</span><span class="nx">relatedTarget</span> <span class="o">=</span>
                <span class="nx">H</span><span class="p">.</span><span class="nx">fromElement</span> <span class="o">==</span> <span class="nx">H</span><span class="p">.</span><span class="nx">target</span> <span class="p">?</span> <span class="nx">H</span><span class="p">.</span><span class="nx">toElement</span> <span class="p">:</span> <span class="nx">H</span><span class="p">.</span><span class="nx">fromElement</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">H</span><span class="p">.</span><span class="nx">pageX</span> <span class="o">==</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">H</span><span class="p">.</span><span class="nx">clientX</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">I</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">,</span>
                <span class="nx">E</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">;</span>
              <span class="nx">H</span><span class="p">.</span><span class="nx">pageX</span> <span class="o">=</span>
                <span class="nx">H</span><span class="p">.</span><span class="nx">clientX</span> <span class="o">+</span>
                <span class="p">((</span><span class="nx">I</span> <span class="o">&amp;&amp;</span> <span class="nx">I</span><span class="p">.</span><span class="nx">scrollLeft</span><span class="p">)</span> <span class="o">||</span> <span class="p">(</span><span class="nx">E</span> <span class="o">&amp;&amp;</span> <span class="nx">E</span><span class="p">.</span><span class="nx">scrollLeft</span><span class="p">)</span> <span class="o">||</span> <span class="mi">0</span><span class="p">)</span> <span class="o">-</span>
                <span class="p">(</span><span class="nx">I</span><span class="p">.</span><span class="nx">clientLeft</span> <span class="o">||</span> <span class="mi">0</span><span class="p">);</span>
              <span class="nx">H</span><span class="p">.</span><span class="nx">pageY</span> <span class="o">=</span>
                <span class="nx">H</span><span class="p">.</span><span class="nx">clientY</span> <span class="o">+</span>
                <span class="p">((</span><span class="nx">I</span> <span class="o">&amp;&amp;</span> <span class="nx">I</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">)</span> <span class="o">||</span> <span class="p">(</span><span class="nx">E</span> <span class="o">&amp;&amp;</span> <span class="nx">E</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">)</span> <span class="o">||</span> <span class="mi">0</span><span class="p">)</span> <span class="o">-</span>
                <span class="p">(</span><span class="nx">I</span><span class="p">.</span><span class="nx">clientTop</span> <span class="o">||</span> <span class="mi">0</span><span class="p">);</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span>
              <span class="o">!</span><span class="nx">H</span><span class="p">.</span><span class="nx">which</span> <span class="o">&amp;&amp;</span>
              <span class="p">(</span><span class="nx">H</span><span class="p">.</span><span class="nx">charCode</span> <span class="o">||</span> <span class="nx">H</span><span class="p">.</span><span class="nx">charCode</span> <span class="o">===</span> <span class="mi">0</span> <span class="p">?</span> <span class="nx">H</span><span class="p">.</span><span class="nx">charCode</span> <span class="p">:</span> <span class="nx">H</span><span class="p">.</span><span class="nx">keyCode</span><span class="p">)</span>
            <span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">H</span><span class="p">.</span><span class="nx">which</span> <span class="o">=</span> <span class="nx">H</span><span class="p">.</span><span class="nx">charCode</span> <span class="o">||</span> <span class="nx">H</span><span class="p">.</span><span class="nx">keyCode</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">H</span><span class="p">.</span><span class="nx">metaKey</span> <span class="o">&amp;&amp;</span> <span class="nx">H</span><span class="p">.</span><span class="nx">ctrlKey</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">H</span><span class="p">.</span><span class="nx">metaKey</span> <span class="o">=</span> <span class="nx">H</span><span class="p">.</span><span class="nx">ctrlKey</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">H</span><span class="p">.</span><span class="nx">which</span> <span class="o">&amp;&amp;</span> <span class="nx">H</span><span class="p">.</span><span class="nx">button</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">H</span><span class="p">.</span><span class="nx">which</span> <span class="o">=</span>
                <span class="nx">H</span><span class="p">.</span><span class="nx">button</span> <span class="o">&amp;</span> <span class="mi">1</span> <span class="p">?</span> <span class="mi">1</span> <span class="p">:</span> <span class="nx">H</span><span class="p">.</span><span class="nx">button</span> <span class="o">&amp;</span> <span class="mi">2</span> <span class="p">?</span> <span class="mi">3</span> <span class="p">:</span> <span class="nx">H</span><span class="p">.</span><span class="nx">button</span> <span class="o">&amp;</span> <span class="mi">4</span> <span class="p">?</span> <span class="mi">2</span> <span class="p">:</span> <span class="mi">0</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">H</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">proxy</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">E</span> <span class="o">=</span>
              <span class="nx">E</span> <span class="o">||</span>
              <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
                <span class="k">return</span> <span class="nx">F</span><span class="p">.</span><span class="nf">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span>
              <span class="p">&#125;;</span>
            <span class="nx">E</span><span class="p">.</span><span class="nx">guid</span> <span class="o">=</span> <span class="nx">F</span><span class="p">.</span><span class="nx">guid</span> <span class="o">=</span> <span class="nx">F</span><span class="p">.</span><span class="nx">guid</span> <span class="o">||</span> <span class="nx">E</span><span class="p">.</span><span class="nx">guid</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">guid</span><span class="o">++</span><span class="p">;</span>
            <span class="k">return</span> <span class="nx">E</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">special</span><span class="p">:</span> <span class="p">&#123;</span> <span class="na">ready</span><span class="p">:</span> <span class="p">&#123;</span> <span class="na">setup</span><span class="p">:</span> <span class="nx">B</span><span class="p">,</span> <span class="na">teardown</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;&#125;</span> <span class="p">&#125;</span> <span class="p">&#125;,</span>
          <span class="na">specialAll</span><span class="p">:</span> <span class="p">&#123;</span>
            <span class="na">live</span><span class="p">:</span> <span class="p">&#123;</span>
              <span class="na">setup</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">F</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">c</span><span class="p">);</span>
              <span class="p">&#125;,</span>
              <span class="na">teardown</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">G</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span>
                    <span class="nx">F</span> <span class="o">=</span> <span class="nc">RegExp</span><span class="p">(</span><span class="dl">"</span><span class="s2">(^|</span><span class="se">\\</span><span class="s2">.)</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">G</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">(</span><span class="se">\\</span><span class="s2">.|$)</span><span class="dl">"</span><span class="p">);</span>
                  <span class="nx">o</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="dl">"</span><span class="s2">events</span><span class="dl">"</span><span class="p">).</span><span class="nx">live</span> <span class="o">||</span> <span class="p">&#123;&#125;,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
                    <span class="k">if </span><span class="p">(</span><span class="nx">F</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">type</span><span class="p">))</span> <span class="p">&#123;</span>
                      <span class="nx">E</span><span class="o">++</span><span class="p">;</span>
                    <span class="p">&#125;</span>
                  <span class="p">&#125;);</span>
                  <span class="k">if</span> <span class="p">(</span><span class="nx">E</span> <span class="o">&lt;</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">remove</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">G</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">c</span><span class="p">);</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;,</span>
            <span class="p">&#125;,</span>
          <span class="p">&#125;,</span>
        <span class="p">&#125;;</span>
        <span class="nx">o</span><span class="p">.</span><span class="nx">Event</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="k">new</span> <span class="nx">o</span><span class="p">.</span><span class="nc">Event</span><span class="p">(</span><span class="nx">E</span><span class="p">);</span>
          <span class="p">&#125;</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">E</span> <span class="o">&amp;&amp;</span> <span class="nx">E</span><span class="p">.</span><span class="nx">type</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">originalEvent</span> <span class="o">=</span> <span class="nx">E</span><span class="p">;</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="nx">E</span><span class="p">.</span><span class="nx">type</span><span class="p">;</span>
          <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="nx">E</span><span class="p">;</span>
          <span class="p">&#125;</span>
          <span class="k">this</span><span class="p">.</span><span class="nx">timeStamp</span> <span class="o">=</span> <span class="nf">e</span><span class="p">();</span>
          <span class="k">this</span><span class="p">[</span><span class="nx">h</span><span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
        <span class="p">&#125;;</span>
        <span class="kd">function</span> <span class="nf">k</span><span class="p">()</span> <span class="p">&#123;</span>
          <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
        <span class="p">&#125;</span>
        <span class="kd">function</span> <span class="nf">u</span><span class="p">()</span> <span class="p">&#123;</span>
          <span class="k">return</span> <span class="kc">true</span><span class="p">;</span>
        <span class="p">&#125;</span>
        <span class="nx">o</span><span class="p">.</span><span class="nx">Event</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">&#123;</span>
          <span class="na">preventDefault</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">isDefaultPrevented</span> <span class="o">=</span> <span class="nx">u</span><span class="p">;</span>
            <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">originalEvent</span><span class="p">;</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">E</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">E</span><span class="p">.</span><span class="nf">preventDefault</span><span class="p">();</span>
            <span class="p">&#125;</span>
            <span class="nx">E</span><span class="p">.</span><span class="nx">returnValue</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">stopPropagation</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">isPropagationStopped</span> <span class="o">=</span> <span class="nx">u</span><span class="p">;</span>
            <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">originalEvent</span><span class="p">;</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">E</span><span class="p">.</span><span class="nx">stopPropagation</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">E</span><span class="p">.</span><span class="nf">stopPropagation</span><span class="p">();</span>
            <span class="p">&#125;</span>
            <span class="nx">E</span><span class="p">.</span><span class="nx">cancelBubble</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">stopImmediatePropagation</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">isImmediatePropagationStopped</span> <span class="o">=</span> <span class="nx">u</span><span class="p">;</span>
            <span class="k">this</span><span class="p">.</span><span class="nf">stopPropagation</span><span class="p">();</span>
          <span class="p">&#125;,</span>
          <span class="na">isDefaultPrevented</span><span class="p">:</span> <span class="nx">k</span><span class="p">,</span>
          <span class="na">isPropagationStopped</span><span class="p">:</span> <span class="nx">k</span><span class="p">,</span>
          <span class="na">isImmediatePropagationStopped</span><span class="p">:</span> <span class="nx">k</span><span class="p">,</span>
        <span class="p">&#125;;</span>
        <span class="kd">var</span> <span class="nx">a</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="nx">F</span><span class="p">.</span><span class="nx">relatedTarget</span><span class="p">;</span>
          <span class="k">while </span><span class="p">(</span><span class="nx">E</span> <span class="o">&amp;&amp;</span> <span class="nx">E</span> <span class="o">!=</span> <span class="k">this</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">try</span> <span class="p">&#123;</span>
              <span class="nx">E</span> <span class="o">=</span> <span class="nx">E</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">;</span>
            <span class="p">&#125;</span> <span class="k">catch </span><span class="p">(</span><span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">E</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">E</span> <span class="o">!=</span> <span class="k">this</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">F</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="nx">F</span><span class="p">.</span><span class="nx">data</span><span class="p">;</span>
            <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">handle</span><span class="p">.</span><span class="nf">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;;</span>
        <span class="nx">o</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span>
          <span class="p">&#123;</span> <span class="na">mouseover</span><span class="p">:</span> <span class="dl">"</span><span class="s2">mouseenter</span><span class="dl">"</span><span class="p">,</span> <span class="na">mouseout</span><span class="p">:</span> <span class="dl">"</span><span class="s2">mouseleave</span><span class="dl">"</span> <span class="p">&#125;,</span>
          <span class="nf">function </span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">special</span><span class="p">[</span><span class="nx">E</span><span class="p">]</span> <span class="o">=</span> <span class="p">&#123;</span>
              <span class="na">setup</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
                <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">F</span><span class="p">,</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">E</span><span class="p">);</span>
              <span class="p">&#125;,</span>
              <span class="na">teardown</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
                <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">remove</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">F</span><span class="p">,</span> <span class="nx">a</span><span class="p">);</span>
              <span class="p">&#125;,</span>
            <span class="p">&#125;;</span>
          <span class="p">&#125;,</span>
        <span class="p">);</span>
        <span class="nx">o</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nf">extend</span><span class="p">(&#123;</span>
          <span class="na">bind</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">G</span><span class="p">,</span> <span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nx">F</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">unload</span><span class="dl">"</span>
              <span class="p">?</span> <span class="k">this</span><span class="p">.</span><span class="nf">one</span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">G</span><span class="p">,</span> <span class="nx">E</span><span class="p">)</span>
              <span class="p">:</span> <span class="k">this</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
                  <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">F</span><span class="p">,</span> <span class="nx">E</span> <span class="o">||</span> <span class="nx">G</span><span class="p">,</span> <span class="nx">E</span> <span class="o">&amp;&amp;</span> <span class="nx">G</span><span class="p">);</span>
                <span class="p">&#125;);</span>
          <span class="p">&#125;,</span>
          <span class="na">one</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="nx">H</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">proxy</span><span class="p">(</span><span class="nx">F</span> <span class="o">||</span> <span class="nx">H</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">I</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nf">o</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nf">unbind</span><span class="p">(</span><span class="nx">I</span><span class="p">,</span> <span class="nx">E</span><span class="p">);</span>
              <span class="k">return </span><span class="p">(</span><span class="nx">F</span> <span class="o">||</span> <span class="nx">H</span><span class="p">).</span><span class="nf">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span>
            <span class="p">&#125;);</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">G</span><span class="p">,</span> <span class="nx">E</span><span class="p">,</span> <span class="nx">F</span> <span class="o">&amp;&amp;</span> <span class="nx">H</span><span class="p">);</span>
            <span class="p">&#125;);</span>
          <span class="p">&#125;,</span>
          <span class="na">unbind</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">remove</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">F</span><span class="p">,</span> <span class="nx">E</span><span class="p">);</span>
            <span class="p">&#125;);</span>
          <span class="p">&#125;,</span>
          <span class="na">trigger</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">trigger</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">F</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span>
            <span class="p">&#125;);</span>
          <span class="p">&#125;,</span>
          <span class="na">triggerHandler</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">F</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nc">Event</span><span class="p">(</span><span class="nx">E</span><span class="p">);</span>
              <span class="nx">F</span><span class="p">.</span><span class="nf">preventDefault</span><span class="p">();</span>
              <span class="nx">F</span><span class="p">.</span><span class="nf">stopPropagation</span><span class="p">();</span>
              <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">trigger</span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">G</span><span class="p">,</span> <span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span>
              <span class="k">return</span> <span class="nx">F</span><span class="p">.</span><span class="nx">result</span><span class="p">;</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;,</span>
          <span class="na">toggle</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">,</span>
              <span class="nx">F</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span>
            <span class="k">while</span> <span class="p">(</span><span class="nx">F</span> <span class="o">&lt;</span> <span class="nx">E</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">proxy</span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="nx">E</span><span class="p">[</span><span class="nx">F</span><span class="o">++</span><span class="p">]);</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">click</span><span class="p">(</span>
              <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">proxy</span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">H</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">this</span><span class="p">.</span><span class="nx">lastToggle</span> <span class="o">=</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">lastToggle</span> <span class="o">||</span> <span class="mi">0</span><span class="p">)</span> <span class="o">%</span> <span class="nx">F</span><span class="p">;</span>
                <span class="nx">H</span><span class="p">.</span><span class="nf">preventDefault</span><span class="p">();</span>
                <span class="k">return</span> <span class="nx">E</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">lastToggle</span><span class="o">++</span><span class="p">].</span><span class="nf">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span> <span class="o">||</span> <span class="kc">false</span><span class="p">;</span>
              <span class="p">&#125;),</span>
            <span class="p">);</span>
          <span class="p">&#125;,</span>
          <span class="na">hover</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">mouseenter</span><span class="p">(</span><span class="nx">E</span><span class="p">).</span><span class="nf">mouseleave</span><span class="p">(</span><span class="nx">F</span><span class="p">);</span>
          <span class="p">&#125;,</span>
          <span class="na">ready</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nc">B</span><span class="p">();</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">isReady</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">E</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nb">document</span><span class="p">,</span> <span class="nx">o</span><span class="p">);</span>
            <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
              <span class="nx">o</span><span class="p">.</span><span class="nx">readyList</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">E</span><span class="p">);</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">live</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">proxy</span><span class="p">(</span><span class="nx">F</span><span class="p">);</span>
            <span class="nx">E</span><span class="p">.</span><span class="nx">guid</span> <span class="o">+=</span> <span class="k">this</span><span class="p">.</span><span class="nx">selector</span> <span class="o">+</span> <span class="nx">G</span><span class="p">;</span>
            <span class="nf">o</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nf">bind</span><span class="p">(</span><span class="nf">i</span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">selector</span><span class="p">),</span> <span class="k">this</span><span class="p">.</span><span class="nx">selector</span><span class="p">,</span> <span class="nx">E</span><span class="p">);</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">die</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nf">o</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nf">unbind</span><span class="p">(</span>
              <span class="nf">i</span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">selector</span><span class="p">),</span>
              <span class="nx">E</span> <span class="p">?</span> <span class="p">&#123;</span> <span class="na">guid</span><span class="p">:</span> <span class="nx">E</span><span class="p">.</span><span class="nx">guid</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">selector</span> <span class="o">+</span> <span class="nx">F</span> <span class="p">&#125;</span> <span class="p">:</span> <span class="kc">null</span><span class="p">,</span>
            <span class="p">);</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
          <span class="p">&#125;,</span>
        <span class="p">&#125;);</span>
        <span class="kd">function</span> <span class="nf">c</span><span class="p">(</span><span class="nx">H</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="nc">RegExp</span><span class="p">(</span><span class="dl">"</span><span class="s2">(^|</span><span class="se">\\</span><span class="s2">.)</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">H</span><span class="p">.</span><span class="nx">type</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">(</span><span class="se">\\</span><span class="s2">.|$)</span><span class="dl">"</span><span class="p">),</span>
            <span class="nx">G</span> <span class="o">=</span> <span class="kc">true</span><span class="p">,</span>
            <span class="nx">F</span> <span class="o">=</span> <span class="p">[];</span>
          <span class="nx">o</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="dl">"</span><span class="s2">events</span><span class="dl">"</span><span class="p">).</span><span class="nx">live</span> <span class="o">||</span> <span class="p">[],</span> <span class="nf">function </span><span class="p">(</span><span class="nx">I</span><span class="p">,</span> <span class="nx">J</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">E</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">J</span><span class="p">.</span><span class="nx">type</span><span class="p">))</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">K</span> <span class="o">=</span> <span class="nf">o</span><span class="p">(</span><span class="nx">H</span><span class="p">.</span><span class="nx">target</span><span class="p">).</span><span class="nf">closest</span><span class="p">(</span><span class="nx">J</span><span class="p">.</span><span class="nx">data</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">K</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">F</span><span class="p">.</span><span class="nf">push</span><span class="p">(&#123;</span> <span class="na">elem</span><span class="p">:</span> <span class="nx">K</span><span class="p">,</span> <span class="na">fn</span><span class="p">:</span> <span class="nx">J</span> <span class="p">&#125;);</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;);</span>
          <span class="nx">F</span><span class="p">.</span><span class="nf">sort</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">J</span><span class="p">,</span> <span class="nx">I</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">J</span><span class="p">.</span><span class="nx">elem</span><span class="p">,</span> <span class="dl">"</span><span class="s2">closest</span><span class="dl">"</span><span class="p">)</span> <span class="o">-</span> <span class="nx">o</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">I</span><span class="p">.</span><span class="nx">elem</span><span class="p">,</span> <span class="dl">"</span><span class="s2">closest</span><span class="dl">"</span><span class="p">);</span>
          <span class="p">&#125;);</span>
          <span class="nx">o</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">,</span> <span class="nx">H</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">data</span><span class="p">)</span> <span class="o">===</span> <span class="kc">false</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return </span><span class="p">(</span><span class="nx">G</span> <span class="o">=</span> <span class="kc">false</span><span class="p">);</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;);</span>
          <span class="k">return</span> <span class="nx">G</span><span class="p">;</span>
        <span class="p">&#125;</span>
        <span class="kd">function</span> <span class="nf">i</span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">return</span> <span class="p">[</span><span class="dl">"</span><span class="s2">live</span><span class="dl">"</span><span class="p">,</span> <span class="nx">F</span><span class="p">,</span> <span class="nx">E</span><span class="p">.</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/</span><span class="se">\.</span><span class="sr">/g</span><span class="p">,</span> <span class="dl">"</span><span class="s2">`</span><span class="dl">"</span><span class="p">).</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/ /g</span><span class="p">,</span> <span class="dl">"</span><span class="s2">|</span><span class="dl">"</span><span class="p">)].</span><span class="nf">join</span><span class="p">(</span>
            <span class="dl">"</span><span class="s2">.</span><span class="dl">"</span><span class="p">,</span>
          <span class="p">);</span>
        <span class="p">&#125;</span>
        <span class="nx">o</span><span class="p">.</span><span class="nf">extend</span><span class="p">(&#123;</span>
          <span class="na">isReady</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
          <span class="na">readyList</span><span class="p">:</span> <span class="p">[],</span>
          <span class="na">ready</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">isReady</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">o</span><span class="p">.</span><span class="nx">isReady</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">readyList</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">o</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">readyList</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
                  <span class="k">this</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nb">document</span><span class="p">,</span> <span class="nx">o</span><span class="p">);</span>
                <span class="p">&#125;);</span>
                <span class="nx">o</span><span class="p">.</span><span class="nx">readyList</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
              <span class="p">&#125;</span>
              <span class="nf">o</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nf">triggerHandler</span><span class="p">(</span><span class="dl">"</span><span class="s2">ready</span><span class="dl">"</span><span class="p">);</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;,</span>
        <span class="p">&#125;);</span>
        <span class="kd">var</span> <span class="nx">x</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
        <span class="kd">function</span> <span class="nf">B</span><span class="p">()</span> <span class="p">&#123;</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">x</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span><span class="p">;</span>
          <span class="p">&#125;</span>
          <span class="nx">x</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
          <span class="k">if </span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nb">document</span><span class="p">.</span><span class="nf">addEventListener</span><span class="p">(</span>
              <span class="dl">"</span><span class="s2">DOMContentLoaded</span><span class="dl">"</span><span class="p">,</span>
              <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
                <span class="nb">document</span><span class="p">.</span><span class="nf">removeEventListener</span><span class="p">(</span>
                  <span class="dl">"</span><span class="s2">DOMContentLoaded</span><span class="dl">"</span><span class="p">,</span>
                  <span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">,</span>
                  <span class="kc">false</span><span class="p">,</span>
                <span class="p">);</span>
                <span class="nx">o</span><span class="p">.</span><span class="nf">ready</span><span class="p">();</span>
              <span class="p">&#125;,</span>
              <span class="kc">false</span><span class="p">,</span>
            <span class="p">);</span>
          <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nb">document</span><span class="p">.</span><span class="nf">attachEvent</span><span class="p">(</span><span class="dl">"</span><span class="s2">onreadystatechange</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">complete</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nb">document</span><span class="p">.</span><span class="nf">detachEvent</span><span class="p">(</span><span class="dl">"</span><span class="s2">onreadystatechange</span><span class="dl">"</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">);</span>
                  <span class="nx">o</span><span class="p">.</span><span class="nf">ready</span><span class="p">();</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;);</span>
              <span class="k">if </span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">.</span><span class="nx">doScroll</span> <span class="o">&amp;&amp;</span> <span class="nx">l</span> <span class="o">==</span> <span class="nx">l</span><span class="p">.</span><span class="nx">top</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">isReady</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="k">return</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                  <span class="k">try</span> <span class="p">&#123;</span>
                    <span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">.</span><span class="nf">doScroll</span><span class="p">(</span><span class="dl">"</span><span class="s2">left</span><span class="dl">"</span><span class="p">);</span>
                  <span class="p">&#125;</span> <span class="k">catch </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nf">setTimeout</span><span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span>
                    <span class="k">return</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                  <span class="nx">o</span><span class="p">.</span><span class="nf">ready</span><span class="p">();</span>
                <span class="p">&#125;)();</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;</span>
          <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span><span class="nx">l</span><span class="p">,</span> <span class="dl">"</span><span class="s2">load</span><span class="dl">"</span><span class="p">,</span> <span class="nx">o</span><span class="p">.</span><span class="nx">ready</span><span class="p">);</span>
        <span class="p">&#125;</span>
        <span class="nx">o</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span>
          <span class="dl">"</span><span class="s2">blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error</span><span class="dl">"</span><span class="p">.</span><span class="nf">split</span><span class="p">(</span>
            <span class="dl">"</span><span class="s2">,</span><span class="dl">"</span><span class="p">,</span>
          <span class="p">),</span>
          <span class="nf">function </span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">o</span><span class="p">.</span><span class="nx">fn</span><span class="p">[</span><span class="nx">E</span><span class="p">]</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="nx">G</span> <span class="p">?</span> <span class="k">this</span><span class="p">.</span><span class="nf">bind</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">G</span><span class="p">)</span> <span class="p">:</span> <span class="k">this</span><span class="p">.</span><span class="nf">trigger</span><span class="p">(</span><span class="nx">E</span><span class="p">);</span>
            <span class="p">&#125;;</span>
          <span class="p">&#125;,</span>
        <span class="p">);</span>
        <span class="nf">o</span><span class="p">(</span><span class="nx">l</span><span class="p">).</span><span class="nf">bind</span><span class="p">(</span><span class="dl">"</span><span class="s2">unload</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
          <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">E</span> <span class="k">in</span> <span class="nx">o</span><span class="p">.</span><span class="nx">cache</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">E</span> <span class="o">!=</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">o</span><span class="p">.</span><span class="nx">cache</span><span class="p">[</span><span class="nx">E</span><span class="p">].</span><span class="nx">handle</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">remove</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">cache</span><span class="p">[</span><span class="nx">E</span><span class="p">].</span><span class="nx">handle</span><span class="p">.</span><span class="nx">elem</span><span class="p">);</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;);</span>
        <span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
          <span class="nx">o</span><span class="p">.</span><span class="nx">support</span> <span class="o">=</span> <span class="p">&#123;&#125;;</span>
          <span class="kd">var</span> <span class="nx">F</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">,</span>
            <span class="nx">G</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">script</span><span class="dl">"</span><span class="p">),</span>
            <span class="nx">K</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">div</span><span class="dl">"</span><span class="p">),</span>
            <span class="nx">J</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">script</span><span class="dl">"</span> <span class="o">+</span> <span class="k">new</span> <span class="nc">Date</span><span class="p">().</span><span class="nf">getTime</span><span class="p">();</span>
          <span class="nx">K</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">none</span><span class="dl">"</span><span class="p">;</span>
          <span class="nx">K</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span>
            <span class="dl">'</span><span class="s1">   &lt;link/&gt;&lt;table&gt;&lt;/table&gt;&lt;a href="/a" style="color:red;float:left;opacity:.5;"&gt;a&lt;/a&gt;&lt;select&gt;&lt;option&gt;text&lt;/option&gt;&lt;/select&gt;&lt;object&gt;&lt;param/&gt;&lt;/object&gt;</span><span class="dl">'</span><span class="p">;</span>
          <span class="kd">var</span> <span class="nx">H</span> <span class="o">=</span> <span class="nx">K</span><span class="p">.</span><span class="nf">getElementsByTagName</span><span class="p">(</span><span class="dl">"</span><span class="s2">*</span><span class="dl">"</span><span class="p">),</span>
            <span class="nx">E</span> <span class="o">=</span> <span class="nx">K</span><span class="p">.</span><span class="nf">getElementsByTagName</span><span class="p">(</span><span class="dl">"</span><span class="s2">a</span><span class="dl">"</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span>
          <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">H</span> <span class="o">||</span> <span class="o">!</span><span class="nx">H</span><span class="p">.</span><span class="nx">length</span> <span class="o">||</span> <span class="o">!</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span><span class="p">;</span>
          <span class="p">&#125;</span>
          <span class="nx">o</span><span class="p">.</span><span class="nx">support</span> <span class="o">=</span> <span class="p">&#123;</span>
            <span class="na">leadingWhitespace</span><span class="p">:</span> <span class="nx">K</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">==</span> <span class="mi">3</span><span class="p">,</span>
            <span class="na">tbody</span><span class="p">:</span> <span class="o">!</span><span class="nx">K</span><span class="p">.</span><span class="nf">getElementsByTagName</span><span class="p">(</span><span class="dl">"</span><span class="s2">tbody</span><span class="dl">"</span><span class="p">).</span><span class="nx">length</span><span class="p">,</span>
            <span class="na">objectAll</span><span class="p">:</span>
              <span class="o">!!</span><span class="nx">K</span><span class="p">.</span><span class="nf">getElementsByTagName</span><span class="p">(</span><span class="dl">"</span><span class="s2">object</span><span class="dl">"</span><span class="p">)[</span><span class="mi">0</span><span class="p">].</span><span class="nf">getElementsByTagName</span><span class="p">(</span><span class="dl">"</span><span class="s2">*</span><span class="dl">"</span><span class="p">)</span>
                <span class="p">.</span><span class="nx">length</span><span class="p">,</span>
            <span class="na">htmlSerialize</span><span class="p">:</span> <span class="o">!!</span><span class="nx">K</span><span class="p">.</span><span class="nf">getElementsByTagName</span><span class="p">(</span><span class="dl">"</span><span class="s2">link</span><span class="dl">"</span><span class="p">).</span><span class="nx">length</span><span class="p">,</span>
            <span class="na">style</span><span class="p">:</span> <span class="sr">/red/</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">E</span><span class="p">.</span><span class="nf">getAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">style</span><span class="dl">"</span><span class="p">)),</span>
            <span class="na">hrefNormalized</span><span class="p">:</span> <span class="nx">E</span><span class="p">.</span><span class="nf">getAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">href</span><span class="dl">"</span><span class="p">)</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">/a</span><span class="dl">"</span><span class="p">,</span>
            <span class="na">opacity</span><span class="p">:</span> <span class="nx">E</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">opacity</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">0.5</span><span class="dl">"</span><span class="p">,</span>
            <span class="na">cssFloat</span><span class="p">:</span> <span class="o">!!</span><span class="nx">E</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">cssFloat</span><span class="p">,</span>
            <span class="na">scriptEval</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
            <span class="na">noCloneEvent</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
            <span class="na">boxModel</span><span class="p">:</span> <span class="kc">null</span><span class="p">,</span>
          <span class="p">&#125;;</span>
          <span class="nx">G</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">text/javascript</span><span class="dl">"</span><span class="p">;</span>
          <span class="k">try</span> <span class="p">&#123;</span>
            <span class="nx">G</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nf">createTextNode</span><span class="p">(</span><span class="dl">"</span><span class="s2">window.</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">J</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">=1;</span><span class="dl">"</span><span class="p">));</span>
          <span class="p">&#125;</span> <span class="k">catch </span><span class="p">(</span><span class="nx">I</span><span class="p">)</span> <span class="p">&#123;&#125;</span>
          <span class="nx">F</span><span class="p">.</span><span class="nf">insertBefore</span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="nx">F</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">);</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">l</span><span class="p">[</span><span class="nx">J</span><span class="p">])</span> <span class="p">&#123;</span>
            <span class="nx">o</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">scriptEval</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
            <span class="k">delete</span> <span class="nx">l</span><span class="p">[</span><span class="nx">J</span><span class="p">];</span>
          <span class="p">&#125;</span>
          <span class="nx">F</span><span class="p">.</span><span class="nf">removeChild</span><span class="p">(</span><span class="nx">G</span><span class="p">);</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">K</span><span class="p">.</span><span class="nx">attachEvent</span> <span class="o">&amp;&amp;</span> <span class="nx">K</span><span class="p">.</span><span class="nx">fireEvent</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">K</span><span class="p">.</span><span class="nf">attachEvent</span><span class="p">(</span><span class="dl">"</span><span class="s2">onclick</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="nx">o</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">noCloneEvent</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
              <span class="nx">K</span><span class="p">.</span><span class="nf">detachEvent</span><span class="p">(</span><span class="dl">"</span><span class="s2">onclick</span><span class="dl">"</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">);</span>
            <span class="p">&#125;);</span>
            <span class="nx">K</span><span class="p">.</span><span class="nf">cloneNode</span><span class="p">(</span><span class="kc">true</span><span class="p">).</span><span class="nf">fireEvent</span><span class="p">(</span><span class="dl">"</span><span class="s2">onclick</span><span class="dl">"</span><span class="p">);</span>
          <span class="p">&#125;</span>
          <span class="nf">o</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">L</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">div</span><span class="dl">"</span><span class="p">);</span>
            <span class="nx">L</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="nx">L</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">paddingLeft</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">1px</span><span class="dl">"</span><span class="p">;</span>
            <span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">L</span><span class="p">);</span>
            <span class="nx">o</span><span class="p">.</span><span class="nx">boxModel</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">boxModel</span> <span class="o">=</span> <span class="nx">L</span><span class="p">.</span><span class="nx">offsetWidth</span> <span class="o">===</span> <span class="mi">2</span><span class="p">;</span>
            <span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nf">removeChild</span><span class="p">(</span><span class="nx">L</span><span class="p">).</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">none</span><span class="dl">"</span><span class="p">;</span>
          <span class="p">&#125;);</span>
        <span class="p">&#125;)();</span>
        <span class="kd">var</span> <span class="nx">w</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">cssFloat</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">cssFloat</span><span class="dl">"</span> <span class="p">:</span> <span class="dl">"</span><span class="s2">styleFloat</span><span class="dl">"</span><span class="p">;</span>
        <span class="nx">o</span><span class="p">.</span><span class="nx">props</span> <span class="o">=</span> <span class="p">&#123;</span>
          <span class="na">for</span><span class="p">:</span> <span class="dl">"</span><span class="s2">htmlFor</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">class</span><span class="p">:</span> <span class="dl">"</span><span class="s2">className</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">float</span><span class="p">:</span> <span class="nx">w</span><span class="p">,</span>
          <span class="na">cssFloat</span><span class="p">:</span> <span class="nx">w</span><span class="p">,</span>
          <span class="na">styleFloat</span><span class="p">:</span> <span class="nx">w</span><span class="p">,</span>
          <span class="na">readonly</span><span class="p">:</span> <span class="dl">"</span><span class="s2">readOnly</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">maxlength</span><span class="p">:</span> <span class="dl">"</span><span class="s2">maxLength</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">cellspacing</span><span class="p">:</span> <span class="dl">"</span><span class="s2">cellSpacing</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">rowspan</span><span class="p">:</span> <span class="dl">"</span><span class="s2">rowSpan</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">tabindex</span><span class="p">:</span> <span class="dl">"</span><span class="s2">tabIndex</span><span class="dl">"</span><span class="p">,</span>
        <span class="p">&#125;;</span>
        <span class="nx">o</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nf">extend</span><span class="p">(&#123;</span>
          <span class="na">_load</span><span class="p">:</span> <span class="nx">o</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">load</span><span class="p">,</span>
          <span class="na">load</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="nx">J</span><span class="p">,</span> <span class="nx">K</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">G</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">string</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">_load</span><span class="p">(</span><span class="nx">G</span><span class="p">);</span>
            <span class="p">&#125;</span>
            <span class="kd">var</span> <span class="nx">I</span> <span class="o">=</span> <span class="nx">G</span><span class="p">.</span><span class="nf">indexOf</span><span class="p">(</span><span class="dl">"</span><span class="s2"> </span><span class="dl">"</span><span class="p">);</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">I</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="nx">G</span><span class="p">.</span><span class="nf">slice</span><span class="p">(</span><span class="nx">I</span><span class="p">,</span> <span class="nx">G</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span>
              <span class="nx">G</span> <span class="o">=</span> <span class="nx">G</span><span class="p">.</span><span class="nf">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">I</span><span class="p">);</span>
            <span class="p">&#125;</span>
            <span class="kd">var</span> <span class="nx">H</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">GET</span><span class="dl">"</span><span class="p">;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">J</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">isFunction</span><span class="p">(</span><span class="nx">J</span><span class="p">))</span> <span class="p">&#123;</span>
                <span class="nx">K</span> <span class="o">=</span> <span class="nx">J</span><span class="p">;</span>
                <span class="nx">J</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">J</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">object</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">J</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">param</span><span class="p">(</span><span class="nx">J</span><span class="p">);</span>
                  <span class="nx">H</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">POST</span><span class="dl">"</span><span class="p">;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="kd">var</span> <span class="nx">F</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span>
            <span class="nx">o</span><span class="p">.</span><span class="nf">ajax</span><span class="p">(&#123;</span>
              <span class="na">url</span><span class="p">:</span> <span class="nx">G</span><span class="p">,</span>
              <span class="na">type</span><span class="p">:</span> <span class="nx">H</span><span class="p">,</span>
              <span class="na">dataType</span><span class="p">:</span> <span class="dl">"</span><span class="s2">html</span><span class="dl">"</span><span class="p">,</span>
              <span class="na">data</span><span class="p">:</span> <span class="nx">J</span><span class="p">,</span>
              <span class="na">complete</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">M</span><span class="p">,</span> <span class="nx">L</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">L</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">success</span><span class="dl">"</span> <span class="o">||</span> <span class="nx">L</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">notmodified</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">F</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span>
                    <span class="nx">E</span>
                      <span class="p">?</span> <span class="nx">o</span><span class="p">(</span><span class="dl">"</span><span class="s2">&lt;div/&gt;</span><span class="dl">"</span><span class="p">)</span>
                          <span class="p">.</span><span class="nx">append</span><span class="p">(</span>
                            <span class="nx">M</span><span class="p">.</span><span class="nx">responseText</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span>
                              <span class="sr">/&lt;script</span><span class="se">(</span><span class="sr">.|</span><span class="se">\s)</span><span class="sr">*</span><span class="se">?\/</span><span class="sr">script&gt;/g</span><span class="p">,</span>
                              <span class="dl">""</span><span class="p">,</span>
                            <span class="p">),</span>
                          <span class="p">)</span>
                          <span class="p">.</span><span class="nf">find</span><span class="p">(</span><span class="nx">E</span><span class="p">)</span>
                      <span class="p">:</span> <span class="nx">M</span><span class="p">.</span><span class="nx">responseText</span><span class="p">,</span>
                  <span class="p">);</span>
                <span class="p">&#125;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">K</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">F</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nx">K</span><span class="p">,</span> <span class="p">[</span><span class="nx">M</span><span class="p">.</span><span class="nx">responseText</span><span class="p">,</span> <span class="nx">L</span><span class="p">,</span> <span class="nx">M</span><span class="p">]);</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;,</span>
            <span class="p">&#125;);</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">serialize</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nf">param</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nf">serializeArray</span><span class="p">());</span>
          <span class="p">&#125;,</span>
          <span class="na">serializeArray</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">map</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">elements</span> <span class="p">?</span> <span class="nx">o</span><span class="p">.</span><span class="nf">makeArray</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">elements</span><span class="p">)</span> <span class="p">:</span> <span class="k">this</span><span class="p">;</span>
            <span class="p">&#125;)</span>
              <span class="p">.</span><span class="nf">filter</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
                <span class="k">return </span><span class="p">(</span>
                  <span class="k">this</span><span class="p">.</span><span class="nx">name</span> <span class="o">&amp;&amp;</span>
                  <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">disabled</span> <span class="o">&amp;&amp;</span>
                  <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">checked</span> <span class="o">||</span>
                    <span class="sr">/select|textarea/i</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">)</span> <span class="o">||</span>
                    <span class="sr">/text|hidden|password|search/i</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">type</span><span class="p">))</span>
                <span class="p">);</span>
              <span class="p">&#125;)</span>
              <span class="p">.</span><span class="nf">map</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="kd">var</span> <span class="nx">G</span> <span class="o">=</span> <span class="nf">o</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nf">val</span><span class="p">();</span>
                <span class="k">return</span> <span class="nx">G</span> <span class="o">==</span> <span class="kc">null</span>
                  <span class="p">?</span> <span class="kc">null</span>
                  <span class="p">:</span> <span class="nx">o</span><span class="p">.</span><span class="nf">isArray</span><span class="p">(</span><span class="nx">G</span><span class="p">)</span>
                    <span class="p">?</span> <span class="nx">o</span><span class="p">.</span><span class="nf">map</span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">I</span><span class="p">,</span> <span class="nx">H</span><span class="p">)</span> <span class="p">&#123;</span>
                        <span class="k">return</span> <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="nx">F</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span> <span class="na">value</span><span class="p">:</span> <span class="nx">I</span> <span class="p">&#125;;</span>
                      <span class="p">&#125;)</span>
                    <span class="p">:</span> <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="nx">F</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span> <span class="na">value</span><span class="p">:</span> <span class="nx">G</span> <span class="p">&#125;;</span>
              <span class="p">&#125;)</span>
              <span class="p">.</span><span class="nf">get</span><span class="p">();</span>
          <span class="p">&#125;,</span>
        <span class="p">&#125;);</span>
        <span class="nx">o</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span>
          <span class="dl">"</span><span class="s2">ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend</span><span class="dl">"</span><span class="p">.</span><span class="nf">split</span><span class="p">(</span>
            <span class="dl">"</span><span class="s2">,</span><span class="dl">"</span><span class="p">,</span>
          <span class="p">),</span>
          <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">o</span><span class="p">.</span><span class="nx">fn</span><span class="p">[</span><span class="nx">F</span><span class="p">]</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">bind</span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">G</span><span class="p">);</span>
            <span class="p">&#125;;</span>
          <span class="p">&#125;,</span>
        <span class="p">);</span>
        <span class="kd">var</span> <span class="nx">r</span> <span class="o">=</span> <span class="nf">e</span><span class="p">();</span>
        <span class="nx">o</span><span class="p">.</span><span class="nf">extend</span><span class="p">(&#123;</span>
          <span class="na">get</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">G</span><span class="p">,</span> <span class="nx">H</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">isFunction</span><span class="p">(</span><span class="nx">G</span><span class="p">))</span> <span class="p">&#123;</span>
              <span class="nx">H</span> <span class="o">=</span> <span class="nx">G</span><span class="p">;</span>
              <span class="nx">G</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nf">ajax</span><span class="p">(&#123;</span>
              <span class="na">type</span><span class="p">:</span> <span class="dl">"</span><span class="s2">GET</span><span class="dl">"</span><span class="p">,</span>
              <span class="na">url</span><span class="p">:</span> <span class="nx">E</span><span class="p">,</span>
              <span class="na">data</span><span class="p">:</span> <span class="nx">G</span><span class="p">,</span>
              <span class="na">success</span><span class="p">:</span> <span class="nx">H</span><span class="p">,</span>
              <span class="na">dataType</span><span class="p">:</span> <span class="nx">F</span><span class="p">,</span>
            <span class="p">&#125;);</span>
          <span class="p">&#125;,</span>
          <span class="na">getScript</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nf">get</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">F</span><span class="p">,</span> <span class="dl">"</span><span class="s2">script</span><span class="dl">"</span><span class="p">);</span>
          <span class="p">&#125;,</span>
          <span class="na">getJSON</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">F</span><span class="p">,</span> <span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nf">get</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">F</span><span class="p">,</span> <span class="nx">G</span><span class="p">,</span> <span class="dl">"</span><span class="s2">json</span><span class="dl">"</span><span class="p">);</span>
          <span class="p">&#125;,</span>
          <span class="na">post</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">G</span><span class="p">,</span> <span class="nx">H</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">isFunction</span><span class="p">(</span><span class="nx">G</span><span class="p">))</span> <span class="p">&#123;</span>
              <span class="nx">H</span> <span class="o">=</span> <span class="nx">G</span><span class="p">;</span>
              <span class="nx">G</span> <span class="o">=</span> <span class="p">&#123;&#125;;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nf">ajax</span><span class="p">(&#123;</span>
              <span class="na">type</span><span class="p">:</span> <span class="dl">"</span><span class="s2">POST</span><span class="dl">"</span><span class="p">,</span>
              <span class="na">url</span><span class="p">:</span> <span class="nx">E</span><span class="p">,</span>
              <span class="na">data</span><span class="p">:</span> <span class="nx">G</span><span class="p">,</span>
              <span class="na">success</span><span class="p">:</span> <span class="nx">H</span><span class="p">,</span>
              <span class="na">dataType</span><span class="p">:</span> <span class="nx">F</span><span class="p">,</span>
            <span class="p">&#125;);</span>
          <span class="p">&#125;,</span>
          <span class="na">ajaxSetup</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">o</span><span class="p">.</span><span class="nf">extend</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">ajaxSettings</span><span class="p">,</span> <span class="nx">E</span><span class="p">);</span>
          <span class="p">&#125;,</span>
          <span class="na">ajaxSettings</span><span class="p">:</span> <span class="p">&#123;</span>
            <span class="na">url</span><span class="p">:</span> <span class="nx">location</span><span class="p">.</span><span class="nx">href</span><span class="p">,</span>
            <span class="na">global</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
            <span class="na">type</span><span class="p">:</span> <span class="dl">"</span><span class="s2">GET</span><span class="dl">"</span><span class="p">,</span>
            <span class="na">contentType</span><span class="p">:</span> <span class="dl">"</span><span class="s2">application/x-www-form-urlencoded</span><span class="dl">"</span><span class="p">,</span>
            <span class="na">processData</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
            <span class="na">async</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
            <span class="na">xhr</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="nx">l</span><span class="p">.</span><span class="nx">ActiveXObject</span>
                <span class="p">?</span> <span class="k">new</span> <span class="nc">ActiveXObject</span><span class="p">(</span><span class="dl">"</span><span class="s2">Microsoft.XMLHTTP</span><span class="dl">"</span><span class="p">)</span>
                <span class="p">:</span> <span class="k">new</span> <span class="nc">XMLHttpRequest</span><span class="p">();</span>
            <span class="p">&#125;,</span>
            <span class="na">accepts</span><span class="p">:</span> <span class="p">&#123;</span>
              <span class="na">xml</span><span class="p">:</span> <span class="dl">"</span><span class="s2">application/xml, text/xml</span><span class="dl">"</span><span class="p">,</span>
              <span class="na">html</span><span class="p">:</span> <span class="dl">"</span><span class="s2">text/html</span><span class="dl">"</span><span class="p">,</span>
              <span class="na">script</span><span class="p">:</span> <span class="dl">"</span><span class="s2">text/javascript, application/javascript</span><span class="dl">"</span><span class="p">,</span>
              <span class="na">json</span><span class="p">:</span> <span class="dl">"</span><span class="s2">application/json, text/javascript</span><span class="dl">"</span><span class="p">,</span>
              <span class="na">text</span><span class="p">:</span> <span class="dl">"</span><span class="s2">text/plain</span><span class="dl">"</span><span class="p">,</span>
              <span class="na">_default</span><span class="p">:</span> <span class="dl">"</span><span class="s2">*/*</span><span class="dl">"</span><span class="p">,</span>
            <span class="p">&#125;,</span>
          <span class="p">&#125;,</span>
          <span class="na">lastModified</span><span class="p">:</span> <span class="p">&#123;&#125;,</span>
          <span class="na">ajax</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">M</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">M</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">extend</span><span class="p">(</span><span class="kc">true</span><span class="p">,</span> <span class="nx">M</span><span class="p">,</span> <span class="nx">o</span><span class="p">.</span><span class="nf">extend</span><span class="p">(</span><span class="kc">true</span><span class="p">,</span> <span class="p">&#123;&#125;,</span> <span class="nx">o</span><span class="p">.</span><span class="nx">ajaxSettings</span><span class="p">,</span> <span class="nx">M</span><span class="p">));</span>
            <span class="kd">var</span> <span class="nx">W</span><span class="p">,</span>
              <span class="nx">F</span> <span class="o">=</span> <span class="sr">/=</span><span class="se">\?(</span><span class="sr">&amp;|$</span><span class="se">)</span><span class="sr">/g</span><span class="p">,</span>
              <span class="nx">R</span><span class="p">,</span>
              <span class="nx">V</span><span class="p">,</span>
              <span class="nx">G</span> <span class="o">=</span> <span class="nx">M</span><span class="p">.</span><span class="nx">type</span><span class="p">.</span><span class="nf">toUpperCase</span><span class="p">();</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">data</span> <span class="o">&amp;&amp;</span> <span class="nx">M</span><span class="p">.</span><span class="nx">processData</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">M</span><span class="p">.</span><span class="nx">data</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">string</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">M</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">param</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">data</span><span class="p">);</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">dataType</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">jsonp</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">G</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">GET</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">M</span><span class="p">.</span><span class="nx">url</span><span class="p">.</span><span class="nf">match</span><span class="p">(</span><span class="nx">F</span><span class="p">))</span> <span class="p">&#123;</span>
                  <span class="nx">M</span><span class="p">.</span><span class="nx">url</span> <span class="o">+=</span>
                    <span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">url</span><span class="p">.</span><span class="nf">match</span><span class="p">(</span><span class="sr">/</span><span class="se">\?</span><span class="sr">/</span><span class="p">)</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">&amp;</span><span class="dl">"</span> <span class="p">:</span> <span class="dl">"</span><span class="s2">?</span><span class="dl">"</span><span class="p">)</span> <span class="o">+</span>
                    <span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">jsonp</span> <span class="o">||</span> <span class="dl">"</span><span class="s2">callback</span><span class="dl">"</span><span class="p">)</span> <span class="o">+</span>
                    <span class="dl">"</span><span class="s2">=?</span><span class="dl">"</span><span class="p">;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">M</span><span class="p">.</span><span class="nx">data</span> <span class="o">||</span> <span class="o">!</span><span class="nx">M</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nf">match</span><span class="p">(</span><span class="nx">F</span><span class="p">))</span> <span class="p">&#123;</span>
                  <span class="nx">M</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span>
                    <span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">data</span> <span class="p">?</span> <span class="nx">M</span><span class="p">.</span><span class="nx">data</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">&amp;</span><span class="dl">"</span> <span class="p">:</span> <span class="dl">""</span><span class="p">)</span> <span class="o">+</span>
                    <span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">jsonp</span> <span class="o">||</span> <span class="dl">"</span><span class="s2">callback</span><span class="dl">"</span><span class="p">)</span> <span class="o">+</span>
                    <span class="dl">"</span><span class="s2">=?</span><span class="dl">"</span><span class="p">;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
              <span class="nx">M</span><span class="p">.</span><span class="nx">dataType</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">json</span><span class="dl">"</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span>
              <span class="nx">M</span><span class="p">.</span><span class="nx">dataType</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">json</span><span class="dl">"</span> <span class="o">&amp;&amp;</span>
              <span class="p">((</span><span class="nx">M</span><span class="p">.</span><span class="nx">data</span> <span class="o">&amp;&amp;</span> <span class="nx">M</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nf">match</span><span class="p">(</span><span class="nx">F</span><span class="p">))</span> <span class="o">||</span> <span class="nx">M</span><span class="p">.</span><span class="nx">url</span><span class="p">.</span><span class="nf">match</span><span class="p">(</span><span class="nx">F</span><span class="p">))</span>
            <span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">W</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">jsonp</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">r</span><span class="o">++</span><span class="p">;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">data</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">M</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">data</span> <span class="o">+</span> <span class="dl">""</span><span class="p">).</span><span class="nf">replace</span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="dl">"</span><span class="s2">=</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">W</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">$1</span><span class="dl">"</span><span class="p">);</span>
              <span class="p">&#125;</span>
              <span class="nx">M</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="nx">M</span><span class="p">.</span><span class="nx">url</span><span class="p">.</span><span class="nf">replace</span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="dl">"</span><span class="s2">=</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">W</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">$1</span><span class="dl">"</span><span class="p">);</span>
              <span class="nx">M</span><span class="p">.</span><span class="nx">dataType</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">script</span><span class="dl">"</span><span class="p">;</span>
              <span class="nx">l</span><span class="p">[</span><span class="nx">W</span><span class="p">]</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">X</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">V</span> <span class="o">=</span> <span class="nx">X</span><span class="p">;</span>
                <span class="nc">I</span><span class="p">();</span>
                <span class="nc">L</span><span class="p">();</span>
                <span class="nx">l</span><span class="p">[</span><span class="nx">W</span><span class="p">]</span> <span class="o">=</span> <span class="nx">g</span><span class="p">;</span>
                <span class="k">try</span> <span class="p">&#123;</span>
                  <span class="k">delete</span> <span class="nx">l</span><span class="p">[</span><span class="nx">W</span><span class="p">];</span>
                <span class="p">&#125;</span> <span class="k">catch </span><span class="p">(</span><span class="nx">Y</span><span class="p">)</span> <span class="p">&#123;&#125;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">H</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">H</span><span class="p">.</span><span class="nf">removeChild</span><span class="p">(</span><span class="nx">T</span><span class="p">);</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">dataType</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">script</span><span class="dl">"</span> <span class="o">&amp;&amp;</span> <span class="nx">M</span><span class="p">.</span><span class="nx">cache</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">M</span><span class="p">.</span><span class="nx">cache</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">cache</span> <span class="o">===</span> <span class="kc">false</span> <span class="o">&amp;&amp;</span> <span class="nx">G</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">GET</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="nf">e</span><span class="p">();</span>
              <span class="kd">var</span> <span class="nx">U</span> <span class="o">=</span> <span class="nx">M</span><span class="p">.</span><span class="nx">url</span><span class="p">.</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/</span><span class="se">(\?</span><span class="sr">|&amp;</span><span class="se">)</span><span class="sr">_=.*</span><span class="se">?(</span><span class="sr">&amp;|$</span><span class="se">)</span><span class="sr">/</span><span class="p">,</span> <span class="dl">"</span><span class="s2">$1_=</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">E</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">$2</span><span class="dl">"</span><span class="p">);</span>
              <span class="nx">M</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span>
                <span class="nx">U</span> <span class="o">+</span>
                <span class="p">(</span><span class="nx">U</span> <span class="o">==</span> <span class="nx">M</span><span class="p">.</span><span class="nx">url</span> <span class="p">?</span> <span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">url</span><span class="p">.</span><span class="nf">match</span><span class="p">(</span><span class="sr">/</span><span class="se">\?</span><span class="sr">/</span><span class="p">)</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">&amp;</span><span class="dl">"</span> <span class="p">:</span> <span class="dl">"</span><span class="s2">?</span><span class="dl">"</span><span class="p">)</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">_=</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">E</span> <span class="p">:</span> <span class="dl">""</span><span class="p">);</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">data</span> <span class="o">&amp;&amp;</span> <span class="nx">G</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">GET</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">M</span><span class="p">.</span><span class="nx">url</span> <span class="o">+=</span> <span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">url</span><span class="p">.</span><span class="nf">match</span><span class="p">(</span><span class="sr">/</span><span class="se">\?</span><span class="sr">/</span><span class="p">)</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">&amp;</span><span class="dl">"</span> <span class="p">:</span> <span class="dl">"</span><span class="s2">?</span><span class="dl">"</span><span class="p">)</span> <span class="o">+</span> <span class="nx">M</span><span class="p">.</span><span class="nx">data</span><span class="p">;</span>
              <span class="nx">M</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nb">global</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">active</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">trigger</span><span class="p">(</span><span class="dl">"</span><span class="s2">ajaxStart</span><span class="dl">"</span><span class="p">);</span>
            <span class="p">&#125;</span>
            <span class="kd">var</span> <span class="nx">Q</span> <span class="o">=</span> <span class="sr">/^</span><span class="se">(\w</span><span class="sr">+:</span><span class="se">)?\/\/([^\/</span><span class="sr">?#</span><span class="se">]</span><span class="sr">+</span><span class="se">)</span><span class="sr">/</span><span class="p">.</span><span class="nf">exec</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">url</span><span class="p">);</span>
            <span class="k">if </span><span class="p">(</span>
              <span class="nx">M</span><span class="p">.</span><span class="nx">dataType</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">script</span><span class="dl">"</span> <span class="o">&amp;&amp;</span>
              <span class="nx">G</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">GET</span><span class="dl">"</span> <span class="o">&amp;&amp;</span>
              <span class="nx">Q</span> <span class="o">&amp;&amp;</span>
              <span class="p">((</span><span class="nx">Q</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">Q</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">!=</span> <span class="nx">location</span><span class="p">.</span><span class="nx">protocol</span><span class="p">)</span> <span class="o">||</span> <span class="nx">Q</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">!=</span> <span class="nx">location</span><span class="p">.</span><span class="nx">host</span><span class="p">)</span>
            <span class="p">)</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">H</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementsByTagName</span><span class="p">(</span><span class="dl">"</span><span class="s2">head</span><span class="dl">"</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span>
              <span class="kd">var</span> <span class="nx">T</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">script</span><span class="dl">"</span><span class="p">);</span>
              <span class="nx">T</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="nx">M</span><span class="p">.</span><span class="nx">url</span><span class="p">;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">scriptCharset</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">T</span><span class="p">.</span><span class="nx">charset</span> <span class="o">=</span> <span class="nx">M</span><span class="p">.</span><span class="nx">scriptCharset</span><span class="p">;</span>
              <span class="p">&#125;</span>
              <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">W</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="kd">var</span> <span class="nx">O</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
                <span class="nx">T</span><span class="p">.</span><span class="nx">onload</span> <span class="o">=</span> <span class="nx">T</span><span class="p">.</span><span class="nx">onreadystatechange</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
                  <span class="k">if </span><span class="p">(</span>
                    <span class="o">!</span><span class="nx">O</span> <span class="o">&amp;&amp;</span>
                    <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">||</span>
                      <span class="k">this</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">loaded</span><span class="dl">"</span> <span class="o">||</span>
                      <span class="k">this</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">complete</span><span class="dl">"</span><span class="p">)</span>
                  <span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nx">O</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
                    <span class="nc">I</span><span class="p">();</span>
                    <span class="nc">L</span><span class="p">();</span>
                    <span class="nx">T</span><span class="p">.</span><span class="nx">onload</span> <span class="o">=</span> <span class="nx">T</span><span class="p">.</span><span class="nx">onreadystatechange</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
                    <span class="nx">H</span><span class="p">.</span><span class="nf">removeChild</span><span class="p">(</span><span class="nx">T</span><span class="p">);</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;;</span>
              <span class="p">&#125;</span>
              <span class="nx">H</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">T</span><span class="p">);</span>
              <span class="k">return</span> <span class="nx">g</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="kd">var</span> <span class="nx">K</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
            <span class="kd">var</span> <span class="nx">J</span> <span class="o">=</span> <span class="nx">M</span><span class="p">.</span><span class="nf">xhr</span><span class="p">();</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">username</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">J</span><span class="p">.</span><span class="nf">open</span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="nx">M</span><span class="p">.</span><span class="nx">url</span><span class="p">,</span> <span class="nx">M</span><span class="p">.</span><span class="k">async</span><span class="p">,</span> <span class="nx">M</span><span class="p">.</span><span class="nx">username</span><span class="p">,</span> <span class="nx">M</span><span class="p">.</span><span class="nx">password</span><span class="p">);</span>
            <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
              <span class="nx">J</span><span class="p">.</span><span class="nf">open</span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="nx">M</span><span class="p">.</span><span class="nx">url</span><span class="p">,</span> <span class="nx">M</span><span class="p">.</span><span class="k">async</span><span class="p">);</span>
            <span class="p">&#125;</span>
            <span class="k">try</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">data</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">J</span><span class="p">.</span><span class="nf">setRequestHeader</span><span class="p">(</span><span class="dl">"</span><span class="s2">Content-Type</span><span class="dl">"</span><span class="p">,</span> <span class="nx">M</span><span class="p">.</span><span class="nx">contentType</span><span class="p">);</span>
              <span class="p">&#125;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">ifModified</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">J</span><span class="p">.</span><span class="nf">setRequestHeader</span><span class="p">(</span>
                  <span class="dl">"</span><span class="s2">If-Modified-Since</span><span class="dl">"</span><span class="p">,</span>
                  <span class="nx">o</span><span class="p">.</span><span class="nx">lastModified</span><span class="p">[</span><span class="nx">M</span><span class="p">.</span><span class="nx">url</span><span class="p">]</span> <span class="o">||</span> <span class="dl">"</span><span class="s2">Thu, 01 Jan 1970 00:00:00 GMT</span><span class="dl">"</span><span class="p">,</span>
                <span class="p">);</span>
              <span class="p">&#125;</span>
              <span class="nx">J</span><span class="p">.</span><span class="nf">setRequestHeader</span><span class="p">(</span><span class="dl">"</span><span class="s2">X-Requested-With</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">XMLHttpRequest</span><span class="dl">"</span><span class="p">);</span>
              <span class="nx">J</span><span class="p">.</span><span class="nf">setRequestHeader</span><span class="p">(</span>
                <span class="dl">"</span><span class="s2">Accept</span><span class="dl">"</span><span class="p">,</span>
                <span class="nx">M</span><span class="p">.</span><span class="nx">dataType</span> <span class="o">&amp;&amp;</span> <span class="nx">M</span><span class="p">.</span><span class="nx">accepts</span><span class="p">[</span><span class="nx">M</span><span class="p">.</span><span class="nx">dataType</span><span class="p">]</span>
                  <span class="p">?</span> <span class="nx">M</span><span class="p">.</span><span class="nx">accepts</span><span class="p">[</span><span class="nx">M</span><span class="p">.</span><span class="nx">dataType</span><span class="p">]</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">, */*</span><span class="dl">"</span>
                  <span class="p">:</span> <span class="nx">M</span><span class="p">.</span><span class="nx">accepts</span><span class="p">.</span><span class="nx">_default</span><span class="p">,</span>
              <span class="p">);</span>
            <span class="p">&#125;</span> <span class="k">catch </span><span class="p">(</span><span class="nx">S</span><span class="p">)</span> <span class="p">&#123;&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">beforeSend</span> <span class="o">&amp;&amp;</span> <span class="nx">M</span><span class="p">.</span><span class="nf">beforeSend</span><span class="p">(</span><span class="nx">J</span><span class="p">,</span> <span class="nx">M</span><span class="p">)</span> <span class="o">===</span> <span class="kc">false</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nb">global</span> <span class="o">&amp;&amp;</span> <span class="o">!--</span><span class="nx">o</span><span class="p">.</span><span class="nx">active</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">trigger</span><span class="p">(</span><span class="dl">"</span><span class="s2">ajaxStop</span><span class="dl">"</span><span class="p">);</span>
              <span class="p">&#125;</span>
              <span class="nx">J</span><span class="p">.</span><span class="nf">abort</span><span class="p">();</span>
              <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nb">global</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">trigger</span><span class="p">(</span><span class="dl">"</span><span class="s2">ajaxSend</span><span class="dl">"</span><span class="p">,</span> <span class="p">[</span><span class="nx">J</span><span class="p">,</span> <span class="nx">M</span><span class="p">]);</span>
            <span class="p">&#125;</span>
            <span class="kd">var</span> <span class="nx">N</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">X</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">J</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">P</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nf">clearInterval</span><span class="p">(</span><span class="nx">P</span><span class="p">);</span>
                  <span class="nx">P</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nb">global</span> <span class="o">&amp;&amp;</span> <span class="o">!--</span><span class="nx">o</span><span class="p">.</span><span class="nx">active</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">trigger</span><span class="p">(</span><span class="dl">"</span><span class="s2">ajaxStop</span><span class="dl">"</span><span class="p">);</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">K</span> <span class="o">&amp;&amp;</span> <span class="nx">J</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">J</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">==</span> <span class="mi">4</span> <span class="o">||</span> <span class="nx">X</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">timeout</span><span class="dl">"</span><span class="p">))</span> <span class="p">&#123;</span>
                  <span class="nx">K</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">P</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nf">clearInterval</span><span class="p">(</span><span class="nx">P</span><span class="p">);</span>
                    <span class="nx">P</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                  <span class="nx">R</span> <span class="o">=</span>
                    <span class="nx">X</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">timeout</span><span class="dl">"</span>
                      <span class="p">?</span> <span class="dl">"</span><span class="s2">timeout</span><span class="dl">"</span>
                      <span class="p">:</span> <span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nf">httpSuccess</span><span class="p">(</span><span class="nx">J</span><span class="p">)</span>
                        <span class="p">?</span> <span class="dl">"</span><span class="s2">error</span><span class="dl">"</span>
                        <span class="p">:</span> <span class="nx">M</span><span class="p">.</span><span class="nx">ifModified</span> <span class="o">&amp;&amp;</span> <span class="nx">o</span><span class="p">.</span><span class="nf">httpNotModified</span><span class="p">(</span><span class="nx">J</span><span class="p">,</span> <span class="nx">M</span><span class="p">.</span><span class="nx">url</span><span class="p">)</span>
                          <span class="p">?</span> <span class="dl">"</span><span class="s2">notmodified</span><span class="dl">"</span>
                          <span class="p">:</span> <span class="dl">"</span><span class="s2">success</span><span class="dl">"</span><span class="p">;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">R</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">success</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="k">try</span> <span class="p">&#123;</span>
                      <span class="nx">V</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">httpData</span><span class="p">(</span><span class="nx">J</span><span class="p">,</span> <span class="nx">M</span><span class="p">.</span><span class="nx">dataType</span><span class="p">,</span> <span class="nx">M</span><span class="p">);</span>
                    <span class="p">&#125;</span> <span class="k">catch </span><span class="p">(</span><span class="nx">Z</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="nx">R</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">parsererror</span><span class="dl">"</span><span class="p">;</span>
                    <span class="p">&#125;</span>
                  <span class="p">&#125;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">R</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">success</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="kd">var</span> <span class="nx">Y</span><span class="p">;</span>
                    <span class="k">try</span> <span class="p">&#123;</span>
                      <span class="nx">Y</span> <span class="o">=</span> <span class="nx">J</span><span class="p">.</span><span class="nf">getResponseHeader</span><span class="p">(</span><span class="dl">"</span><span class="s2">Last-Modified</span><span class="dl">"</span><span class="p">);</span>
                    <span class="p">&#125;</span> <span class="k">catch </span><span class="p">(</span><span class="nx">Z</span><span class="p">)</span> <span class="p">&#123;&#125;</span>
                    <span class="k">if </span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">ifModified</span> <span class="o">&amp;&amp;</span> <span class="nx">Y</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="nx">o</span><span class="p">.</span><span class="nx">lastModified</span><span class="p">[</span><span class="nx">M</span><span class="p">.</span><span class="nx">url</span><span class="p">]</span> <span class="o">=</span> <span class="nx">Y</span><span class="p">;</span>
                    <span class="p">&#125;</span>
                    <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">W</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="nc">I</span><span class="p">();</span>
                    <span class="p">&#125;</span>
                  <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                    <span class="nx">o</span><span class="p">.</span><span class="nf">handleError</span><span class="p">(</span><span class="nx">M</span><span class="p">,</span> <span class="nx">J</span><span class="p">,</span> <span class="nx">R</span><span class="p">);</span>
                  <span class="p">&#125;</span>
                  <span class="nc">L</span><span class="p">();</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">X</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nx">J</span><span class="p">.</span><span class="nf">abort</span><span class="p">();</span>
                  <span class="p">&#125;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="k">async</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nx">J</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="k">async</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">P</span> <span class="o">=</span> <span class="nf">setInterval</span><span class="p">(</span><span class="nx">N</span><span class="p">,</span> <span class="mi">13</span><span class="p">);</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">timeout</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nf">setTimeout</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">J</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">K</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nc">N</span><span class="p">(</span><span class="dl">"</span><span class="s2">timeout</span><span class="dl">"</span><span class="p">);</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;,</span> <span class="nx">M</span><span class="p">.</span><span class="nx">timeout</span><span class="p">);</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">try</span> <span class="p">&#123;</span>
              <span class="nx">J</span><span class="p">.</span><span class="nf">send</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">data</span><span class="p">);</span>
            <span class="p">&#125;</span> <span class="k">catch </span><span class="p">(</span><span class="nx">S</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">o</span><span class="p">.</span><span class="nf">handleError</span><span class="p">(</span><span class="nx">M</span><span class="p">,</span> <span class="nx">J</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">S</span><span class="p">);</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">M</span><span class="p">.</span><span class="k">async</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nc">N</span><span class="p">();</span>
            <span class="p">&#125;</span>
            <span class="kd">function</span> <span class="nf">I</span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">success</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">M</span><span class="p">.</span><span class="nf">success</span><span class="p">(</span><span class="nx">V</span><span class="p">,</span> <span class="nx">R</span><span class="p">);</span>
              <span class="p">&#125;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nb">global</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">trigger</span><span class="p">(</span><span class="dl">"</span><span class="s2">ajaxSuccess</span><span class="dl">"</span><span class="p">,</span> <span class="p">[</span><span class="nx">J</span><span class="p">,</span> <span class="nx">M</span><span class="p">]);</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="kd">function</span> <span class="nf">L</span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">complete</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">M</span><span class="p">.</span><span class="nf">complete</span><span class="p">(</span><span class="nx">J</span><span class="p">,</span> <span class="nx">R</span><span class="p">);</span>
              <span class="p">&#125;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nb">global</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">trigger</span><span class="p">(</span><span class="dl">"</span><span class="s2">ajaxComplete</span><span class="dl">"</span><span class="p">,</span> <span class="p">[</span><span class="nx">J</span><span class="p">,</span> <span class="nx">M</span><span class="p">]);</span>
              <span class="p">&#125;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nb">global</span> <span class="o">&amp;&amp;</span> <span class="o">!--</span><span class="nx">o</span><span class="p">.</span><span class="nx">active</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">trigger</span><span class="p">(</span><span class="dl">"</span><span class="s2">ajaxStop</span><span class="dl">"</span><span class="p">);</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">J</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">handleError</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">H</span><span class="p">,</span> <span class="nx">E</span><span class="p">,</span> <span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">F</span><span class="p">.</span><span class="nx">error</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">F</span><span class="p">.</span><span class="nf">error</span><span class="p">(</span><span class="nx">H</span><span class="p">,</span> <span class="nx">E</span><span class="p">,</span> <span class="nx">G</span><span class="p">);</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">F</span><span class="p">.</span><span class="nb">global</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">o</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">trigger</span><span class="p">(</span><span class="dl">"</span><span class="s2">ajaxError</span><span class="dl">"</span><span class="p">,</span> <span class="p">[</span><span class="nx">H</span><span class="p">,</span> <span class="nx">F</span><span class="p">,</span> <span class="nx">G</span><span class="p">]);</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;,</span>
          <span class="na">active</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
          <span class="na">httpSuccess</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">try</span> <span class="p">&#123;</span>
              <span class="k">return </span><span class="p">(</span>
                <span class="p">(</span><span class="o">!</span><span class="nx">F</span><span class="p">.</span><span class="nx">status</span> <span class="o">&amp;&amp;</span> <span class="nx">location</span><span class="p">.</span><span class="nx">protocol</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">file:</span><span class="dl">"</span><span class="p">)</span> <span class="o">||</span>
                <span class="p">(</span><span class="nx">F</span><span class="p">.</span><span class="nx">status</span> <span class="o">&gt;=</span> <span class="mi">200</span> <span class="o">&amp;&amp;</span> <span class="nx">F</span><span class="p">.</span><span class="nx">status</span> <span class="o">&lt;</span> <span class="mi">300</span><span class="p">)</span> <span class="o">||</span>
                <span class="nx">F</span><span class="p">.</span><span class="nx">status</span> <span class="o">==</span> <span class="mi">304</span> <span class="o">||</span>
                <span class="nx">F</span><span class="p">.</span><span class="nx">status</span> <span class="o">==</span> <span class="mi">1223</span>
              <span class="p">);</span>
            <span class="p">&#125;</span> <span class="k">catch </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;&#125;</span>
            <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">httpNotModified</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">try</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">H</span> <span class="o">=</span> <span class="nx">G</span><span class="p">.</span><span class="nf">getResponseHeader</span><span class="p">(</span><span class="dl">"</span><span class="s2">Last-Modified</span><span class="dl">"</span><span class="p">);</span>
              <span class="k">return</span> <span class="nx">G</span><span class="p">.</span><span class="nx">status</span> <span class="o">==</span> <span class="mi">304</span> <span class="o">||</span> <span class="nx">H</span> <span class="o">==</span> <span class="nx">o</span><span class="p">.</span><span class="nx">lastModified</span><span class="p">[</span><span class="nx">E</span><span class="p">];</span>
            <span class="p">&#125;</span> <span class="k">catch </span><span class="p">(</span><span class="nx">F</span><span class="p">)</span> <span class="p">&#123;&#125;</span>
            <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">httpData</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">J</span><span class="p">,</span> <span class="nx">H</span><span class="p">,</span> <span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">F</span> <span class="o">=</span> <span class="nx">J</span><span class="p">.</span><span class="nf">getResponseHeader</span><span class="p">(</span><span class="dl">"</span><span class="s2">content-type</span><span class="dl">"</span><span class="p">),</span>
              <span class="nx">E</span> <span class="o">=</span> <span class="nx">H</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">xml</span><span class="dl">"</span> <span class="o">||</span> <span class="p">(</span><span class="o">!</span><span class="nx">H</span> <span class="o">&amp;&amp;</span> <span class="nx">F</span> <span class="o">&amp;&amp;</span> <span class="nx">F</span><span class="p">.</span><span class="nf">indexOf</span><span class="p">(</span><span class="dl">"</span><span class="s2">xml</span><span class="dl">"</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">),</span>
              <span class="nx">I</span> <span class="o">=</span> <span class="nx">E</span> <span class="p">?</span> <span class="nx">J</span><span class="p">.</span><span class="nx">responseXML</span> <span class="p">:</span> <span class="nx">J</span><span class="p">.</span><span class="nx">responseText</span><span class="p">;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">E</span> <span class="o">&amp;&amp;</span> <span class="nx">I</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">.</span><span class="nx">tagName</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">parsererror</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">throw</span> <span class="dl">"</span><span class="s2">parsererror</span><span class="dl">"</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">G</span> <span class="o">&amp;&amp;</span> <span class="nx">G</span><span class="p">.</span><span class="nx">dataFilter</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">I</span> <span class="o">=</span> <span class="nx">G</span><span class="p">.</span><span class="nf">dataFilter</span><span class="p">(</span><span class="nx">I</span><span class="p">,</span> <span class="nx">H</span><span class="p">);</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">I</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">string</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">H</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">script</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">o</span><span class="p">.</span><span class="nf">globalEval</span><span class="p">(</span><span class="nx">I</span><span class="p">);</span>
              <span class="p">&#125;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">H</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">json</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">I</span> <span class="o">=</span> <span class="nx">l</span><span class="p">[</span><span class="dl">"</span><span class="s2">eval</span><span class="dl">"</span><span class="p">](</span><span class="dl">"</span><span class="s2">(</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">I</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">)</span><span class="dl">"</span><span class="p">);</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">I</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">param</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">G</span> <span class="o">=</span> <span class="p">[];</span>
            <span class="kd">function</span> <span class="nf">H</span><span class="p">(</span><span class="nx">I</span><span class="p">,</span> <span class="nx">J</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">G</span><span class="p">[</span><span class="nx">G</span><span class="p">.</span><span class="nx">length</span><span class="p">]</span> <span class="o">=</span> <span class="nf">encodeURIComponent</span><span class="p">(</span><span class="nx">I</span><span class="p">)</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">=</span><span class="dl">"</span> <span class="o">+</span> <span class="nf">encodeURIComponent</span><span class="p">(</span><span class="nx">J</span><span class="p">);</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">isArray</span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="o">||</span> <span class="nx">E</span><span class="p">.</span><span class="nx">jquery</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">o</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
                <span class="nc">H</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">value</span><span class="p">);</span>
              <span class="p">&#125;);</span>
            <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
              <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">F</span> <span class="k">in</span> <span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">isArray</span><span class="p">(</span><span class="nx">E</span><span class="p">[</span><span class="nx">F</span><span class="p">]))</span> <span class="p">&#123;</span>
                  <span class="nx">o</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nx">E</span><span class="p">[</span><span class="nx">F</span><span class="p">],</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
                    <span class="nc">H</span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span>
                  <span class="p">&#125;);</span>
                <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                  <span class="nc">H</span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">o</span><span class="p">.</span><span class="nf">isFunction</span><span class="p">(</span><span class="nx">E</span><span class="p">[</span><span class="nx">F</span><span class="p">])</span> <span class="p">?</span> <span class="nx">E</span><span class="p">[</span><span class="nx">F</span><span class="p">]()</span> <span class="p">:</span> <span class="nx">E</span><span class="p">[</span><span class="nx">F</span><span class="p">]);</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">G</span><span class="p">.</span><span class="nf">join</span><span class="p">(</span><span class="dl">"</span><span class="s2">&amp;</span><span class="dl">"</span><span class="p">).</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/%20/g</span><span class="p">,</span> <span class="dl">"</span><span class="s2">+</span><span class="dl">"</span><span class="p">);</span>
          <span class="p">&#125;,</span>
        <span class="p">&#125;);</span>
        <span class="kd">var</span> <span class="nx">m</span> <span class="o">=</span> <span class="p">&#123;&#125;,</span>
          <span class="nx">n</span><span class="p">,</span>
          <span class="nx">d</span> <span class="o">=</span> <span class="p">[</span>
            <span class="p">[</span>
              <span class="dl">"</span><span class="s2">height</span><span class="dl">"</span><span class="p">,</span>
              <span class="dl">"</span><span class="s2">marginTop</span><span class="dl">"</span><span class="p">,</span>
              <span class="dl">"</span><span class="s2">marginBottom</span><span class="dl">"</span><span class="p">,</span>
              <span class="dl">"</span><span class="s2">paddingTop</span><span class="dl">"</span><span class="p">,</span>
              <span class="dl">"</span><span class="s2">paddingBottom</span><span class="dl">"</span><span class="p">,</span>
            <span class="p">],</span>
            <span class="p">[</span>
              <span class="dl">"</span><span class="s2">width</span><span class="dl">"</span><span class="p">,</span>
              <span class="dl">"</span><span class="s2">marginLeft</span><span class="dl">"</span><span class="p">,</span>
              <span class="dl">"</span><span class="s2">marginRight</span><span class="dl">"</span><span class="p">,</span>
              <span class="dl">"</span><span class="s2">paddingLeft</span><span class="dl">"</span><span class="p">,</span>
              <span class="dl">"</span><span class="s2">paddingRight</span><span class="dl">"</span><span class="p">,</span>
            <span class="p">],</span>
            <span class="p">[</span><span class="dl">"</span><span class="s2">opacity</span><span class="dl">"</span><span class="p">],</span>
          <span class="p">];</span>
        <span class="kd">function</span> <span class="nf">t</span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="kd">var</span> <span class="nx">G</span> <span class="o">=</span> <span class="p">&#123;&#125;;</span>
          <span class="nx">o</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">concat</span><span class="p">.</span><span class="nf">apply</span><span class="p">([],</span> <span class="nx">d</span><span class="p">.</span><span class="nf">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">E</span><span class="p">)),</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="nx">G</span><span class="p">[</span><span class="k">this</span><span class="p">]</span> <span class="o">=</span> <span class="nx">F</span><span class="p">;</span>
          <span class="p">&#125;);</span>
          <span class="k">return</span> <span class="nx">G</span><span class="p">;</span>
        <span class="p">&#125;</span>
        <span class="nx">o</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nf">extend</span><span class="p">(&#123;</span>
          <span class="na">show</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">J</span><span class="p">,</span> <span class="nx">L</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">J</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">animate</span><span class="p">(</span><span class="nf">t</span><span class="p">(</span><span class="dl">"</span><span class="s2">show</span><span class="dl">"</span><span class="p">,</span> <span class="mi">3</span><span class="p">),</span> <span class="nx">J</span><span class="p">,</span> <span class="nx">L</span><span class="p">);</span>
            <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
              <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">H</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">F</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">H</span> <span class="o">&lt;</span> <span class="nx">F</span><span class="p">;</span> <span class="nx">H</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="k">this</span><span class="p">[</span><span class="nx">H</span><span class="p">],</span> <span class="dl">"</span><span class="s2">olddisplay</span><span class="dl">"</span><span class="p">);</span>
                <span class="k">this</span><span class="p">[</span><span class="nx">H</span><span class="p">].</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span> <span class="o">=</span> <span class="nx">E</span> <span class="o">||</span> <span class="dl">""</span><span class="p">;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">css</span><span class="p">(</span><span class="k">this</span><span class="p">[</span><span class="nx">H</span><span class="p">],</span> <span class="dl">"</span><span class="s2">display</span><span class="dl">"</span><span class="p">)</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">none</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="kd">var</span> <span class="nx">G</span> <span class="o">=</span> <span class="k">this</span><span class="p">[</span><span class="nx">H</span><span class="p">].</span><span class="nx">tagName</span><span class="p">,</span>
                    <span class="nx">K</span><span class="p">;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">m</span><span class="p">[</span><span class="nx">G</span><span class="p">])</span> <span class="p">&#123;</span>
                    <span class="nx">K</span> <span class="o">=</span> <span class="nx">m</span><span class="p">[</span><span class="nx">G</span><span class="p">];</span>
                  <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                    <span class="kd">var</span> <span class="nx">I</span> <span class="o">=</span> <span class="nx">o</span><span class="p">(</span><span class="dl">"</span><span class="s2">&lt;</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">G</span> <span class="o">+</span> <span class="dl">"</span><span class="s2"> /&gt;</span><span class="dl">"</span><span class="p">).</span><span class="nf">appendTo</span><span class="p">(</span><span class="dl">"</span><span class="s2">body</span><span class="dl">"</span><span class="p">);</span>
                    <span class="nx">K</span> <span class="o">=</span> <span class="nx">I</span><span class="p">.</span><span class="nf">css</span><span class="p">(</span><span class="dl">"</span><span class="s2">display</span><span class="dl">"</span><span class="p">);</span>
                    <span class="k">if </span><span class="p">(</span><span class="nx">K</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">none</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="nx">K</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">block</span><span class="dl">"</span><span class="p">;</span>
                    <span class="p">&#125;</span>
                    <span class="nx">I</span><span class="p">.</span><span class="nf">remove</span><span class="p">();</span>
                    <span class="nx">m</span><span class="p">[</span><span class="nx">G</span><span class="p">]</span> <span class="o">=</span> <span class="nx">K</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                  <span class="nx">o</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="k">this</span><span class="p">[</span><span class="nx">H</span><span class="p">],</span> <span class="dl">"</span><span class="s2">olddisplay</span><span class="dl">"</span><span class="p">,</span> <span class="nx">K</span><span class="p">);</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
              <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">H</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">F</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">H</span> <span class="o">&lt;</span> <span class="nx">F</span><span class="p">;</span> <span class="nx">H</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">this</span><span class="p">[</span><span class="nx">H</span><span class="p">].</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="k">this</span><span class="p">[</span><span class="nx">H</span><span class="p">],</span> <span class="dl">"</span><span class="s2">olddisplay</span><span class="dl">"</span><span class="p">)</span> <span class="o">||</span> <span class="dl">""</span><span class="p">;</span>
              <span class="p">&#125;</span>
              <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;,</span>
          <span class="na">hide</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">H</span><span class="p">,</span> <span class="nx">I</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">H</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">animate</span><span class="p">(</span><span class="nf">t</span><span class="p">(</span><span class="dl">"</span><span class="s2">hide</span><span class="dl">"</span><span class="p">,</span> <span class="mi">3</span><span class="p">),</span> <span class="nx">H</span><span class="p">,</span> <span class="nx">I</span><span class="p">);</span>
            <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
              <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">G</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">F</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">G</span> <span class="o">&lt;</span> <span class="nx">F</span><span class="p">;</span> <span class="nx">G</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="k">this</span><span class="p">[</span><span class="nx">G</span><span class="p">],</span> <span class="dl">"</span><span class="s2">olddisplay</span><span class="dl">"</span><span class="p">);</span>
                <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">E</span> <span class="o">&amp;&amp;</span> <span class="nx">E</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">none</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">o</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="k">this</span><span class="p">[</span><span class="nx">G</span><span class="p">],</span> <span class="dl">"</span><span class="s2">olddisplay</span><span class="dl">"</span><span class="p">,</span> <span class="nx">o</span><span class="p">.</span><span class="nf">css</span><span class="p">(</span><span class="k">this</span><span class="p">[</span><span class="nx">G</span><span class="p">],</span> <span class="dl">"</span><span class="s2">display</span><span class="dl">"</span><span class="p">));</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
              <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">G</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">F</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">G</span> <span class="o">&lt;</span> <span class="nx">F</span><span class="p">;</span> <span class="nx">G</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">this</span><span class="p">[</span><span class="nx">G</span><span class="p">].</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">none</span><span class="dl">"</span><span class="p">;</span>
              <span class="p">&#125;</span>
              <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;,</span>
          <span class="na">_toggle</span><span class="p">:</span> <span class="nx">o</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">toggle</span><span class="p">,</span>
          <span class="na">toggle</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="k">typeof</span> <span class="nx">G</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">boolean</span><span class="dl">"</span><span class="p">;</span>
            <span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nf">isFunction</span><span class="p">(</span><span class="nx">G</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">o</span><span class="p">.</span><span class="nf">isFunction</span><span class="p">(</span><span class="nx">F</span><span class="p">)</span>
              <span class="p">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">_toggle</span><span class="p">.</span><span class="nf">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span>
              <span class="p">:</span> <span class="nx">G</span> <span class="o">==</span> <span class="kc">null</span> <span class="o">||</span> <span class="nx">E</span>
                <span class="p">?</span> <span class="k">this</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
                    <span class="kd">var</span> <span class="nx">H</span> <span class="o">=</span> <span class="nx">E</span> <span class="p">?</span> <span class="nx">G</span> <span class="p">:</span> <span class="nf">o</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nf">is</span><span class="p">(</span><span class="dl">"</span><span class="s2">:hidden</span><span class="dl">"</span><span class="p">);</span>
                    <span class="nf">o</span><span class="p">(</span><span class="k">this</span><span class="p">)[</span><span class="nx">H</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">show</span><span class="dl">"</span> <span class="p">:</span> <span class="dl">"</span><span class="s2">hide</span><span class="dl">"</span><span class="p">]();</span>
                  <span class="p">&#125;)</span>
                <span class="p">:</span> <span class="k">this</span><span class="p">.</span><span class="nf">animate</span><span class="p">(</span><span class="nf">t</span><span class="p">(</span><span class="dl">"</span><span class="s2">toggle</span><span class="dl">"</span><span class="p">,</span> <span class="mi">3</span><span class="p">),</span> <span class="nx">G</span><span class="p">,</span> <span class="nx">F</span><span class="p">);</span>
          <span class="p">&#125;,</span>
          <span class="na">fadeTo</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">G</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">animate</span><span class="p">(&#123;</span> <span class="na">opacity</span><span class="p">:</span> <span class="nx">G</span> <span class="p">&#125;,</span> <span class="nx">E</span><span class="p">,</span> <span class="nx">F</span><span class="p">);</span>
          <span class="p">&#125;,</span>
          <span class="na">animate</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">I</span><span class="p">,</span> <span class="nx">F</span><span class="p">,</span> <span class="nx">H</span><span class="p">,</span> <span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">speed</span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">H</span><span class="p">,</span> <span class="nx">G</span><span class="p">);</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">[</span><span class="nx">E</span><span class="p">.</span><span class="nx">queue</span> <span class="o">===</span> <span class="kc">false</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">each</span><span class="dl">"</span> <span class="p">:</span> <span class="dl">"</span><span class="s2">queue</span><span class="dl">"</span><span class="p">](</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">K</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">extend</span><span class="p">(&#123;&#125;,</span> <span class="nx">E</span><span class="p">),</span>
                <span class="nx">M</span><span class="p">,</span>
                <span class="nx">L</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">==</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nf">o</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nf">is</span><span class="p">(</span><span class="dl">"</span><span class="s2">:hidden</span><span class="dl">"</span><span class="p">),</span>
                <span class="nx">J</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span>
              <span class="k">for </span><span class="p">(</span><span class="nx">M</span> <span class="k">in</span> <span class="nx">I</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">((</span><span class="nx">I</span><span class="p">[</span><span class="nx">M</span><span class="p">]</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">hide</span><span class="dl">"</span> <span class="o">&amp;&amp;</span> <span class="nx">L</span><span class="p">)</span> <span class="o">||</span> <span class="p">(</span><span class="nx">I</span><span class="p">[</span><span class="nx">M</span><span class="p">]</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">show</span><span class="dl">"</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">L</span><span class="p">))</span> <span class="p">&#123;</span>
                  <span class="k">return</span> <span class="nx">K</span><span class="p">.</span><span class="nx">complete</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="k">this</span><span class="p">);</span>
                <span class="p">&#125;</span>
                <span class="k">if </span><span class="p">((</span><span class="nx">M</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">height</span><span class="dl">"</span> <span class="o">||</span> <span class="nx">M</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">width</span><span class="dl">"</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">style</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">K</span><span class="p">.</span><span class="nx">display</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">css</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="dl">"</span><span class="s2">display</span><span class="dl">"</span><span class="p">);</span>
                  <span class="nx">K</span><span class="p">.</span><span class="nx">overflow</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">overflow</span><span class="p">;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">K</span><span class="p">.</span><span class="nx">overflow</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">this</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">overflow</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">hidden</span><span class="dl">"</span><span class="p">;</span>
              <span class="p">&#125;</span>
              <span class="nx">K</span><span class="p">.</span><span class="nx">curAnim</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">extend</span><span class="p">(&#123;&#125;,</span> <span class="nx">I</span><span class="p">);</span>
              <span class="nx">o</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nx">I</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">O</span><span class="p">,</span> <span class="nx">S</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="kd">var</span> <span class="nx">R</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">o</span><span class="p">.</span><span class="nf">fx</span><span class="p">(</span><span class="nx">J</span><span class="p">,</span> <span class="nx">K</span><span class="p">,</span> <span class="nx">O</span><span class="p">);</span>
                <span class="k">if </span><span class="p">(</span><span class="sr">/toggle|show|hide/</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">S</span><span class="p">))</span> <span class="p">&#123;</span>
                  <span class="nx">R</span><span class="p">[</span><span class="nx">S</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">toggle</span><span class="dl">"</span> <span class="p">?</span> <span class="p">(</span><span class="nx">L</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">show</span><span class="dl">"</span> <span class="p">:</span> <span class="dl">"</span><span class="s2">hide</span><span class="dl">"</span><span class="p">)</span> <span class="p">:</span> <span class="nx">S</span><span class="p">](</span><span class="nx">I</span><span class="p">);</span>
                <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                  <span class="kd">var</span> <span class="nx">Q</span> <span class="o">=</span> <span class="nx">S</span><span class="p">.</span><span class="nf">toString</span><span class="p">().</span><span class="nf">match</span><span class="p">(</span><span class="sr">/^</span><span class="se">([</span><span class="sr">+-</span><span class="se">]</span><span class="sr">=</span><span class="se">)?([\d</span><span class="sr">+-.</span><span class="se">]</span><span class="sr">+</span><span class="se">)(</span><span class="sr">.*</span><span class="se">)</span><span class="sr">$/</span><span class="p">),</span>
                    <span class="nx">T</span> <span class="o">=</span> <span class="nx">R</span><span class="p">.</span><span class="nf">cur</span><span class="p">(</span><span class="kc">true</span><span class="p">)</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">Q</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="kd">var</span> <span class="nx">N</span> <span class="o">=</span> <span class="nf">parseFloat</span><span class="p">(</span><span class="nx">Q</span><span class="p">[</span><span class="mi">2</span><span class="p">]),</span>
                      <span class="nx">P</span> <span class="o">=</span> <span class="nx">Q</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span> <span class="o">||</span> <span class="dl">"</span><span class="s2">px</span><span class="dl">"</span><span class="p">;</span>
                    <span class="k">if </span><span class="p">(</span><span class="nx">P</span> <span class="o">!=</span> <span class="dl">"</span><span class="s2">px</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="nx">J</span><span class="p">.</span><span class="nx">style</span><span class="p">[</span><span class="nx">O</span><span class="p">]</span> <span class="o">=</span> <span class="p">(</span><span class="nx">N</span> <span class="o">||</span> <span class="mi">1</span><span class="p">)</span> <span class="o">+</span> <span class="nx">P</span><span class="p">;</span>
                      <span class="nx">T</span> <span class="o">=</span> <span class="p">((</span><span class="nx">N</span> <span class="o">||</span> <span class="mi">1</span><span class="p">)</span> <span class="o">/</span> <span class="nx">R</span><span class="p">.</span><span class="nf">cur</span><span class="p">(</span><span class="kc">true</span><span class="p">))</span> <span class="o">*</span> <span class="nx">T</span><span class="p">;</span>
                      <span class="nx">J</span><span class="p">.</span><span class="nx">style</span><span class="p">[</span><span class="nx">O</span><span class="p">]</span> <span class="o">=</span> <span class="nx">T</span> <span class="o">+</span> <span class="nx">P</span><span class="p">;</span>
                    <span class="p">&#125;</span>
                    <span class="k">if </span><span class="p">(</span><span class="nx">Q</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span> <span class="p">&#123;</span>
                      <span class="nx">N</span> <span class="o">=</span> <span class="p">(</span><span class="nx">Q</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">-=</span><span class="dl">"</span> <span class="p">?</span> <span class="o">-</span><span class="mi">1</span> <span class="p">:</span> <span class="mi">1</span><span class="p">)</span> <span class="o">*</span> <span class="nx">N</span> <span class="o">+</span> <span class="nx">T</span><span class="p">;</span>
                    <span class="p">&#125;</span>
                    <span class="nx">R</span><span class="p">.</span><span class="nf">custom</span><span class="p">(</span><span class="nx">T</span><span class="p">,</span> <span class="nx">N</span><span class="p">,</span> <span class="nx">P</span><span class="p">);</span>
                  <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                    <span class="nx">R</span><span class="p">.</span><span class="nf">custom</span><span class="p">(</span><span class="nx">T</span><span class="p">,</span> <span class="nx">S</span><span class="p">,</span> <span class="dl">""</span><span class="p">);</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;);</span>
              <span class="k">return</span> <span class="kc">true</span><span class="p">;</span>
            <span class="p">&#125;);</span>
          <span class="p">&#125;,</span>
          <span class="na">stop</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">G</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">timers</span><span class="p">;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">this</span><span class="p">.</span><span class="nf">queue</span><span class="p">([]);</span>
            <span class="p">&#125;</span>
            <span class="k">this</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">H</span> <span class="o">=</span> <span class="nx">G</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">H</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">H</span><span class="o">--</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">G</span><span class="p">[</span><span class="nx">H</span><span class="p">].</span><span class="nx">elem</span> <span class="o">==</span> <span class="k">this</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nx">G</span><span class="p">[</span><span class="nx">H</span><span class="p">](</span><span class="kc">true</span><span class="p">);</span>
                  <span class="p">&#125;</span>
                  <span class="nx">G</span><span class="p">.</span><span class="nf">splice</span><span class="p">(</span><span class="nx">H</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;);</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">this</span><span class="p">.</span><span class="nf">dequeue</span><span class="p">();</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
          <span class="p">&#125;,</span>
        <span class="p">&#125;);</span>
        <span class="nx">o</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span>
          <span class="p">&#123;</span>
            <span class="na">slideDown</span><span class="p">:</span> <span class="nf">t</span><span class="p">(</span><span class="dl">"</span><span class="s2">show</span><span class="dl">"</span><span class="p">,</span> <span class="mi">1</span><span class="p">),</span>
            <span class="na">slideUp</span><span class="p">:</span> <span class="nf">t</span><span class="p">(</span><span class="dl">"</span><span class="s2">hide</span><span class="dl">"</span><span class="p">,</span> <span class="mi">1</span><span class="p">),</span>
            <span class="na">slideToggle</span><span class="p">:</span> <span class="nf">t</span><span class="p">(</span><span class="dl">"</span><span class="s2">toggle</span><span class="dl">"</span><span class="p">,</span> <span class="mi">1</span><span class="p">),</span>
            <span class="na">fadeIn</span><span class="p">:</span> <span class="p">&#123;</span> <span class="na">opacity</span><span class="p">:</span> <span class="dl">"</span><span class="s2">show</span><span class="dl">"</span> <span class="p">&#125;,</span>
            <span class="na">fadeOut</span><span class="p">:</span> <span class="p">&#123;</span> <span class="na">opacity</span><span class="p">:</span> <span class="dl">"</span><span class="s2">hide</span><span class="dl">"</span> <span class="p">&#125;,</span>
          <span class="p">&#125;,</span>
          <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">o</span><span class="p">.</span><span class="nx">fn</span><span class="p">[</span><span class="nx">E</span><span class="p">]</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="nx">H</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">animate</span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">G</span><span class="p">,</span> <span class="nx">H</span><span class="p">);</span>
            <span class="p">&#125;;</span>
          <span class="p">&#125;,</span>
        <span class="p">);</span>
        <span class="nx">o</span><span class="p">.</span><span class="nf">extend</span><span class="p">(&#123;</span>
          <span class="na">speed</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="nx">H</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span>
              <span class="k">typeof</span> <span class="nx">G</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">object</span><span class="dl">"</span>
                <span class="p">?</span> <span class="nx">G</span>
                <span class="p">:</span> <span class="p">&#123;</span>
                    <span class="na">complete</span><span class="p">:</span> <span class="nx">F</span> <span class="o">||</span> <span class="p">(</span><span class="o">!</span><span class="nx">F</span> <span class="o">&amp;&amp;</span> <span class="nx">H</span><span class="p">)</span> <span class="o">||</span> <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">isFunction</span><span class="p">(</span><span class="nx">G</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">G</span><span class="p">),</span>
                    <span class="na">duration</span><span class="p">:</span> <span class="nx">G</span><span class="p">,</span>
                    <span class="na">easing</span><span class="p">:</span> <span class="p">(</span><span class="nx">F</span> <span class="o">&amp;&amp;</span> <span class="nx">H</span><span class="p">)</span> <span class="o">||</span> <span class="p">(</span><span class="nx">H</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nf">isFunction</span><span class="p">(</span><span class="nx">H</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">H</span><span class="p">),</span>
                  <span class="p">&#125;;</span>
            <span class="nx">E</span><span class="p">.</span><span class="nx">duration</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">fx</span><span class="p">.</span><span class="nx">off</span>
              <span class="p">?</span> <span class="mi">0</span>
              <span class="p">:</span> <span class="k">typeof</span> <span class="nx">E</span><span class="p">.</span><span class="nx">duration</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">number</span><span class="dl">"</span>
                <span class="p">?</span> <span class="nx">E</span><span class="p">.</span><span class="nx">duration</span>
                <span class="p">:</span> <span class="nx">o</span><span class="p">.</span><span class="nx">fx</span><span class="p">.</span><span class="nx">speeds</span><span class="p">[</span><span class="nx">E</span><span class="p">.</span><span class="nx">duration</span><span class="p">]</span> <span class="o">||</span> <span class="nx">o</span><span class="p">.</span><span class="nx">fx</span><span class="p">.</span><span class="nx">speeds</span><span class="p">.</span><span class="nx">_default</span><span class="p">;</span>
            <span class="nx">E</span><span class="p">.</span><span class="nx">old</span> <span class="o">=</span> <span class="nx">E</span><span class="p">.</span><span class="nx">complete</span><span class="p">;</span>
            <span class="nx">E</span><span class="p">.</span><span class="nx">complete</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">E</span><span class="p">.</span><span class="nx">queue</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nf">o</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nf">dequeue</span><span class="p">();</span>
              <span class="p">&#125;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">isFunction</span><span class="p">(</span><span class="nx">E</span><span class="p">.</span><span class="nx">old</span><span class="p">))</span> <span class="p">&#123;</span>
                <span class="nx">E</span><span class="p">.</span><span class="nx">old</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="k">this</span><span class="p">);</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;;</span>
            <span class="k">return</span> <span class="nx">E</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">easing</span><span class="p">:</span> <span class="p">&#123;</span>
            <span class="na">linear</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="nx">H</span><span class="p">,</span> <span class="nx">E</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="nx">E</span> <span class="o">+</span> <span class="nx">F</span> <span class="o">*</span> <span class="nx">G</span><span class="p">;</span>
            <span class="p">&#125;,</span>
            <span class="na">swing</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="nx">H</span><span class="p">,</span> <span class="nx">E</span><span class="p">,</span> <span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return </span><span class="p">(</span><span class="o">-</span><span class="nb">Math</span><span class="p">.</span><span class="nf">cos</span><span class="p">(</span><span class="nx">G</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span><span class="p">)</span> <span class="o">/</span> <span class="mi">2</span> <span class="o">+</span> <span class="mf">0.5</span><span class="p">)</span> <span class="o">*</span> <span class="nx">F</span> <span class="o">+</span> <span class="nx">E</span><span class="p">;</span>
            <span class="p">&#125;,</span>
          <span class="p">&#125;,</span>
          <span class="na">timers</span><span class="p">:</span> <span class="p">[],</span>
          <span class="na">fx</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">E</span><span class="p">,</span> <span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">options</span> <span class="o">=</span> <span class="nx">E</span><span class="p">;</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">elem</span> <span class="o">=</span> <span class="nx">F</span><span class="p">;</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">prop</span> <span class="o">=</span> <span class="nx">G</span><span class="p">;</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">E</span><span class="p">.</span><span class="nx">orig</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">E</span><span class="p">.</span><span class="nx">orig</span> <span class="o">=</span> <span class="p">&#123;&#125;;</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;,</span>
        <span class="p">&#125;);</span>
        <span class="nx">o</span><span class="p">.</span><span class="nx">fx</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">&#123;</span>
          <span class="na">update</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">step</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">step</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">now</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span>
            <span class="p">&#125;</span>
            <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">fx</span><span class="p">.</span><span class="nx">step</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">prop</span><span class="p">]</span> <span class="o">||</span> <span class="nx">o</span><span class="p">.</span><span class="nx">fx</span><span class="p">.</span><span class="nx">step</span><span class="p">.</span><span class="nx">_default</span><span class="p">)(</span><span class="k">this</span><span class="p">);</span>
            <span class="k">if </span><span class="p">(</span>
              <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">prop</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">height</span><span class="dl">"</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">prop</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">width</span><span class="dl">"</span><span class="p">)</span> <span class="o">&amp;&amp;</span>
              <span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">style</span>
            <span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">block</span><span class="dl">"</span><span class="p">;</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;,</span>
          <span class="na">cur</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">F</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span>
              <span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">prop</span><span class="p">]</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span>
              <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">style</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">style</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">prop</span><span class="p">]</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span>
            <span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">prop</span><span class="p">];</span>
            <span class="p">&#125;</span>
            <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="nf">parseFloat</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">css</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">prop</span><span class="p">,</span> <span class="nx">F</span><span class="p">));</span>
            <span class="k">return</span> <span class="nx">E</span> <span class="o">&amp;&amp;</span> <span class="nx">E</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">10000</span>
              <span class="p">?</span> <span class="nx">E</span>
              <span class="p">:</span> <span class="nf">parseFloat</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">curCSS</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">prop</span><span class="p">))</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">custom</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">I</span><span class="p">,</span> <span class="nx">H</span><span class="p">,</span> <span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">startTime</span> <span class="o">=</span> <span class="nf">e</span><span class="p">();</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">start</span> <span class="o">=</span> <span class="nx">I</span><span class="p">;</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">end</span> <span class="o">=</span> <span class="nx">H</span><span class="p">;</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">unit</span> <span class="o">=</span> <span class="nx">G</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">unit</span> <span class="o">||</span> <span class="dl">"</span><span class="s2">px</span><span class="dl">"</span><span class="p">;</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">now</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">start</span><span class="p">;</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">pos</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">state</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
            <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span>
            <span class="kd">function</span> <span class="nf">F</span><span class="p">(</span><span class="nx">J</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="nx">E</span><span class="p">.</span><span class="nf">step</span><span class="p">(</span><span class="nx">J</span><span class="p">);</span>
            <span class="p">&#125;</span>
            <span class="nx">F</span><span class="p">.</span><span class="nx">elem</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">;</span>
            <span class="k">if </span><span class="p">(</span><span class="nc">F</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="nx">o</span><span class="p">.</span><span class="nx">timers</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">F</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">n</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">n</span> <span class="o">=</span> <span class="nf">setInterval</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
                <span class="kd">var</span> <span class="nx">K</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">timers</span><span class="p">;</span>
                <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">J</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">J</span> <span class="o">&lt;</span> <span class="nx">K</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">J</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">K</span><span class="p">[</span><span class="nx">J</span><span class="p">]())</span> <span class="p">&#123;</span>
                    <span class="nx">K</span><span class="p">.</span><span class="nf">splice</span><span class="p">(</span><span class="nx">J</span><span class="o">--</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span>
                <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">K</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nf">clearInterval</span><span class="p">(</span><span class="nx">n</span><span class="p">);</span>
                  <span class="nx">n</span> <span class="o">=</span> <span class="nx">g</span><span class="p">;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;,</span> <span class="mi">13</span><span class="p">);</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;,</span>
          <span class="na">show</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">orig</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">prop</span><span class="p">]</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">style</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">prop</span><span class="p">);</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">show</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
            <span class="k">this</span><span class="p">.</span><span class="nf">custom</span><span class="p">(</span>
              <span class="k">this</span><span class="p">.</span><span class="nx">prop</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">width</span><span class="dl">"</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">prop</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">height</span><span class="dl">"</span> <span class="p">?</span> <span class="mi">1</span> <span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
              <span class="k">this</span><span class="p">.</span><span class="nf">cur</span><span class="p">(),</span>
            <span class="p">);</span>
            <span class="nf">o</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">).</span><span class="nf">show</span><span class="p">();</span>
          <span class="p">&#125;,</span>
          <span class="na">hide</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">orig</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">prop</span><span class="p">]</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">style</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">prop</span><span class="p">);</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">hide</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
            <span class="k">this</span><span class="p">.</span><span class="nf">custom</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nf">cur</span><span class="p">(),</span> <span class="mi">0</span><span class="p">);</span>
          <span class="p">&#125;,</span>
          <span class="na">step</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">H</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">G</span> <span class="o">=</span> <span class="nf">e</span><span class="p">();</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">H</span> <span class="o">||</span> <span class="nx">G</span> <span class="o">&gt;=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">duration</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">startTime</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">this</span><span class="p">.</span><span class="nx">now</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">end</span><span class="p">;</span>
              <span class="k">this</span><span class="p">.</span><span class="nx">pos</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">state</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span>
              <span class="k">this</span><span class="p">.</span><span class="nf">update</span><span class="p">();</span>
              <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">curAnim</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">prop</span><span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
              <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
              <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">F</span> <span class="k">in</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">curAnim</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">curAnim</span><span class="p">[</span><span class="nx">F</span><span class="p">]</span> <span class="o">!==</span> <span class="kc">true</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">E</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">display</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">overflow</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">overflow</span><span class="p">;</span>
                  <span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">display</span><span class="p">;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">css</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">,</span> <span class="dl">"</span><span class="s2">display</span><span class="dl">"</span><span class="p">)</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">none</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">block</span><span class="dl">"</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span>
                <span class="k">if </span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">hide</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nf">o</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">).</span><span class="nf">hide</span><span class="p">();</span>
                <span class="p">&#125;</span>
                <span class="k">if </span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">hide</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">show</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">I</span> <span class="k">in</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">curAnim</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nx">o</span><span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">style</span><span class="p">,</span> <span class="nx">I</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">orig</span><span class="p">[</span><span class="nx">I</span><span class="p">]);</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span>
                <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">complete</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">);</span>
              <span class="p">&#125;</span>
              <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
            <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">J</span> <span class="o">=</span> <span class="nx">G</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">startTime</span><span class="p">;</span>
              <span class="k">this</span><span class="p">.</span><span class="nx">state</span> <span class="o">=</span> <span class="nx">J</span> <span class="o">/</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">duration</span><span class="p">;</span>
              <span class="k">this</span><span class="p">.</span><span class="nx">pos</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">easing</span><span class="p">[</span>
                <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">easing</span> <span class="o">||</span> <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">easing</span><span class="p">.</span><span class="nx">swing</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">swing</span><span class="dl">"</span> <span class="p">:</span> <span class="dl">"</span><span class="s2">linear</span><span class="dl">"</span><span class="p">)</span>
              <span class="p">](</span><span class="k">this</span><span class="p">.</span><span class="nx">state</span><span class="p">,</span> <span class="nx">J</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">duration</span><span class="p">);</span>
              <span class="k">this</span><span class="p">.</span><span class="nx">now</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">start</span> <span class="o">+</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">end</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">start</span><span class="p">)</span> <span class="o">*</span> <span class="k">this</span><span class="p">.</span><span class="nx">pos</span><span class="p">;</span>
              <span class="k">this</span><span class="p">.</span><span class="nf">update</span><span class="p">();</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="kc">true</span><span class="p">;</span>
          <span class="p">&#125;,</span>
        <span class="p">&#125;;</span>
        <span class="nx">o</span><span class="p">.</span><span class="nf">extend</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">fx</span><span class="p">,</span> <span class="p">&#123;</span>
          <span class="na">speeds</span><span class="p">:</span> <span class="p">&#123;</span> <span class="na">slow</span><span class="p">:</span> <span class="mi">600</span><span class="p">,</span> <span class="na">fast</span><span class="p">:</span> <span class="mi">200</span><span class="p">,</span> <span class="na">_default</span><span class="p">:</span> <span class="mi">400</span> <span class="p">&#125;,</span>
          <span class="na">step</span><span class="p">:</span> <span class="p">&#123;</span>
            <span class="na">opacity</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">o</span><span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="nx">E</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">style</span><span class="p">,</span> <span class="dl">"</span><span class="s2">opacity</span><span class="dl">"</span><span class="p">,</span> <span class="nx">E</span><span class="p">.</span><span class="nx">now</span><span class="p">);</span>
            <span class="p">&#125;,</span>
            <span class="na">_default</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">E</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">style</span> <span class="o">&amp;&amp;</span> <span class="nx">E</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">style</span><span class="p">[</span><span class="nx">E</span><span class="p">.</span><span class="nx">prop</span><span class="p">]</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">E</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">style</span><span class="p">[</span><span class="nx">E</span><span class="p">.</span><span class="nx">prop</span><span class="p">]</span> <span class="o">=</span> <span class="nx">E</span><span class="p">.</span><span class="nx">now</span> <span class="o">+</span> <span class="nx">E</span><span class="p">.</span><span class="nx">unit</span><span class="p">;</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                <span class="nx">E</span><span class="p">.</span><span class="nx">elem</span><span class="p">[</span><span class="nx">E</span><span class="p">.</span><span class="nx">prop</span><span class="p">]</span> <span class="o">=</span> <span class="nx">E</span><span class="p">.</span><span class="nx">now</span><span class="p">;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;,</span>
          <span class="p">&#125;,</span>
        <span class="p">&#125;);</span>
        <span class="k">if </span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">.</span><span class="nx">getBoundingClientRect</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">o</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">offset</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="p">&#123;</span> <span class="na">top</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span> <span class="na">left</span><span class="p">:</span> <span class="mi">0</span> <span class="p">&#125;;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">ownerDocument</span><span class="p">.</span><span class="nx">body</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nx">offset</span><span class="p">.</span><span class="nf">bodyOffset</span><span class="p">(</span><span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span>
            <span class="p">&#125;</span>
            <span class="kd">var</span> <span class="nx">G</span> <span class="o">=</span> <span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nf">getBoundingClientRect</span><span class="p">(),</span>
              <span class="nx">J</span> <span class="o">=</span> <span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">ownerDocument</span><span class="p">,</span>
              <span class="nx">F</span> <span class="o">=</span> <span class="nx">J</span><span class="p">.</span><span class="nx">body</span><span class="p">,</span>
              <span class="nx">E</span> <span class="o">=</span> <span class="nx">J</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">,</span>
              <span class="nx">L</span> <span class="o">=</span> <span class="nx">E</span><span class="p">.</span><span class="nx">clientTop</span> <span class="o">||</span> <span class="nx">F</span><span class="p">.</span><span class="nx">clientTop</span> <span class="o">||</span> <span class="mi">0</span><span class="p">,</span>
              <span class="nx">K</span> <span class="o">=</span> <span class="nx">E</span><span class="p">.</span><span class="nx">clientLeft</span> <span class="o">||</span> <span class="nx">F</span><span class="p">.</span><span class="nx">clientLeft</span> <span class="o">||</span> <span class="mi">0</span><span class="p">,</span>
              <span class="nx">I</span> <span class="o">=</span>
                <span class="nx">G</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span>
                <span class="p">(</span><span class="nb">self</span><span class="p">.</span><span class="nx">pageYOffset</span> <span class="o">||</span>
                  <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">boxModel</span> <span class="o">&amp;&amp;</span> <span class="nx">E</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">)</span> <span class="o">||</span>
                  <span class="nx">F</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">)</span> <span class="o">-</span>
                <span class="nx">L</span><span class="p">,</span>
              <span class="nx">H</span> <span class="o">=</span>
                <span class="nx">G</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span>
                <span class="p">(</span><span class="nb">self</span><span class="p">.</span><span class="nx">pageXOffset</span> <span class="o">||</span>
                  <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">boxModel</span> <span class="o">&amp;&amp;</span> <span class="nx">E</span><span class="p">.</span><span class="nx">scrollLeft</span><span class="p">)</span> <span class="o">||</span>
                  <span class="nx">F</span><span class="p">.</span><span class="nx">scrollLeft</span><span class="p">)</span> <span class="o">-</span>
                <span class="nx">K</span><span class="p">;</span>
            <span class="k">return</span> <span class="p">&#123;</span> <span class="na">top</span><span class="p">:</span> <span class="nx">I</span><span class="p">,</span> <span class="na">left</span><span class="p">:</span> <span class="nx">H</span> <span class="p">&#125;;</span>
          <span class="p">&#125;;</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
          <span class="nx">o</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">offset</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="p">&#123;</span> <span class="na">top</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span> <span class="na">left</span><span class="p">:</span> <span class="mi">0</span> <span class="p">&#125;;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">ownerDocument</span><span class="p">.</span><span class="nx">body</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nx">offset</span><span class="p">.</span><span class="nf">bodyOffset</span><span class="p">(</span><span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span>
            <span class="p">&#125;</span>
            <span class="nx">o</span><span class="p">.</span><span class="nx">offset</span><span class="p">.</span><span class="nx">initialized</span> <span class="o">||</span> <span class="nx">o</span><span class="p">.</span><span class="nx">offset</span><span class="p">.</span><span class="nf">initialize</span><span class="p">();</span>
            <span class="kd">var</span> <span class="nx">J</span> <span class="o">=</span> <span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span>
              <span class="nx">G</span> <span class="o">=</span> <span class="nx">J</span><span class="p">.</span><span class="nx">offsetParent</span><span class="p">,</span>
              <span class="nx">F</span> <span class="o">=</span> <span class="nx">J</span><span class="p">,</span>
              <span class="nx">O</span> <span class="o">=</span> <span class="nx">J</span><span class="p">.</span><span class="nx">ownerDocument</span><span class="p">,</span>
              <span class="nx">M</span><span class="p">,</span>
              <span class="nx">H</span> <span class="o">=</span> <span class="nx">O</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">,</span>
              <span class="nx">K</span> <span class="o">=</span> <span class="nx">O</span><span class="p">.</span><span class="nx">body</span><span class="p">,</span>
              <span class="nx">L</span> <span class="o">=</span> <span class="nx">O</span><span class="p">.</span><span class="nx">defaultView</span><span class="p">,</span>
              <span class="nx">E</span> <span class="o">=</span> <span class="nx">L</span><span class="p">.</span><span class="nf">getComputedStyle</span><span class="p">(</span><span class="nx">J</span><span class="p">,</span> <span class="kc">null</span><span class="p">),</span>
              <span class="nx">N</span> <span class="o">=</span> <span class="nx">J</span><span class="p">.</span><span class="nx">offsetTop</span><span class="p">,</span>
              <span class="nx">I</span> <span class="o">=</span> <span class="nx">J</span><span class="p">.</span><span class="nx">offsetLeft</span><span class="p">;</span>
            <span class="k">while </span><span class="p">((</span><span class="nx">J</span> <span class="o">=</span> <span class="nx">J</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">J</span> <span class="o">!==</span> <span class="nx">K</span> <span class="o">&amp;&amp;</span> <span class="nx">J</span> <span class="o">!==</span> <span class="nx">H</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">M</span> <span class="o">=</span> <span class="nx">L</span><span class="p">.</span><span class="nf">getComputedStyle</span><span class="p">(</span><span class="nx">J</span><span class="p">,</span> <span class="kc">null</span><span class="p">);</span>
              <span class="p">((</span><span class="nx">N</span> <span class="o">-=</span> <span class="nx">J</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">),</span> <span class="p">(</span><span class="nx">I</span> <span class="o">-=</span> <span class="nx">J</span><span class="p">.</span><span class="nx">scrollLeft</span><span class="p">));</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">J</span> <span class="o">===</span> <span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="p">((</span><span class="nx">N</span> <span class="o">+=</span> <span class="nx">J</span><span class="p">.</span><span class="nx">offsetTop</span><span class="p">),</span> <span class="p">(</span><span class="nx">I</span> <span class="o">+=</span> <span class="nx">J</span><span class="p">.</span><span class="nx">offsetLeft</span><span class="p">));</span>
                <span class="k">if </span><span class="p">(</span>
                  <span class="nx">o</span><span class="p">.</span><span class="nx">offset</span><span class="p">.</span><span class="nx">doesNotAddBorder</span> <span class="o">&amp;&amp;</span>
                  <span class="o">!</span><span class="p">(</span>
                    <span class="nx">o</span><span class="p">.</span><span class="nx">offset</span><span class="p">.</span><span class="nx">doesAddBorderForTableAndCells</span> <span class="o">&amp;&amp;</span>
                    <span class="sr">/^t</span><span class="se">(</span><span class="sr">able|d|h</span><span class="se">)</span><span class="sr">$/i</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">J</span><span class="p">.</span><span class="nx">tagName</span><span class="p">)</span>
                  <span class="p">)</span>
                <span class="p">)</span> <span class="p">&#123;</span>
                  <span class="p">((</span><span class="nx">N</span> <span class="o">+=</span> <span class="nf">parseInt</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">borderTopWidth</span><span class="p">,</span> <span class="mi">10</span><span class="p">)</span> <span class="o">||</span> <span class="mi">0</span><span class="p">),</span>
                    <span class="p">(</span><span class="nx">I</span> <span class="o">+=</span> <span class="nf">parseInt</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">borderLeftWidth</span><span class="p">,</span> <span class="mi">10</span><span class="p">)</span> <span class="o">||</span> <span class="mi">0</span><span class="p">));</span>
                <span class="p">&#125;</span>
                <span class="p">((</span><span class="nx">F</span> <span class="o">=</span> <span class="nx">G</span><span class="p">),</span> <span class="p">(</span><span class="nx">G</span> <span class="o">=</span> <span class="nx">J</span><span class="p">.</span><span class="nx">offsetParent</span><span class="p">));</span>
              <span class="p">&#125;</span>
              <span class="k">if </span><span class="p">(</span>
                <span class="nx">o</span><span class="p">.</span><span class="nx">offset</span><span class="p">.</span><span class="nx">subtractsBorderForOverflowNotVisible</span> <span class="o">&amp;&amp;</span>
                <span class="nx">M</span><span class="p">.</span><span class="nx">overflow</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">visible</span><span class="dl">"</span>
              <span class="p">)</span> <span class="p">&#123;</span>
                <span class="p">((</span><span class="nx">N</span> <span class="o">+=</span> <span class="nf">parseInt</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">borderTopWidth</span><span class="p">,</span> <span class="mi">10</span><span class="p">)</span> <span class="o">||</span> <span class="mi">0</span><span class="p">),</span>
                  <span class="p">(</span><span class="nx">I</span> <span class="o">+=</span> <span class="nf">parseInt</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">borderLeftWidth</span><span class="p">,</span> <span class="mi">10</span><span class="p">)</span> <span class="o">||</span> <span class="mi">0</span><span class="p">));</span>
              <span class="p">&#125;</span>
              <span class="nx">E</span> <span class="o">=</span> <span class="nx">M</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">E</span><span class="p">.</span><span class="nx">position</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">relative</span><span class="dl">"</span> <span class="o">||</span> <span class="nx">E</span><span class="p">.</span><span class="nx">position</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">static</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="p">((</span><span class="nx">N</span> <span class="o">+=</span> <span class="nx">K</span><span class="p">.</span><span class="nx">offsetTop</span><span class="p">),</span> <span class="p">(</span><span class="nx">I</span> <span class="o">+=</span> <span class="nx">K</span><span class="p">.</span><span class="nx">offsetLeft</span><span class="p">));</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">E</span><span class="p">.</span><span class="nx">position</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">fixed</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="p">((</span><span class="nx">N</span> <span class="o">+=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">max</span><span class="p">(</span><span class="nx">H</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">,</span> <span class="nx">K</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">)),</span>
                <span class="p">(</span><span class="nx">I</span> <span class="o">+=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">max</span><span class="p">(</span><span class="nx">H</span><span class="p">.</span><span class="nx">scrollLeft</span><span class="p">,</span> <span class="nx">K</span><span class="p">.</span><span class="nx">scrollLeft</span><span class="p">)));</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="p">&#123;</span> <span class="na">top</span><span class="p">:</span> <span class="nx">N</span><span class="p">,</span> <span class="na">left</span><span class="p">:</span> <span class="nx">I</span> <span class="p">&#125;;</span>
          <span class="p">&#125;;</span>
        <span class="p">&#125;</span>
        <span class="nx">o</span><span class="p">.</span><span class="nx">offset</span> <span class="o">=</span> <span class="p">&#123;</span>
          <span class="na">initialize</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">initialized</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="kd">var</span> <span class="nx">L</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">,</span>
              <span class="nx">F</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">div</span><span class="dl">"</span><span class="p">),</span>
              <span class="nx">H</span><span class="p">,</span>
              <span class="nx">G</span><span class="p">,</span>
              <span class="nx">N</span><span class="p">,</span>
              <span class="nx">I</span><span class="p">,</span>
              <span class="nx">M</span><span class="p">,</span>
              <span class="nx">E</span><span class="p">,</span>
              <span class="nx">J</span> <span class="o">=</span> <span class="nx">L</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">marginTop</span><span class="p">,</span>
              <span class="nx">K</span> <span class="o">=</span>
                <span class="dl">'</span><span class="s1">&lt;div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"&gt;&lt;div&gt;&lt;/div&gt;&lt;/div&gt;&lt;table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"&gt;&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;</span><span class="dl">'</span><span class="p">;</span>
            <span class="nx">M</span> <span class="o">=</span> <span class="p">&#123;</span>
              <span class="na">position</span><span class="p">:</span> <span class="dl">"</span><span class="s2">absolute</span><span class="dl">"</span><span class="p">,</span>
              <span class="na">top</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
              <span class="na">left</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
              <span class="na">margin</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
              <span class="na">border</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
              <span class="na">width</span><span class="p">:</span> <span class="dl">"</span><span class="s2">1px</span><span class="dl">"</span><span class="p">,</span>
              <span class="na">height</span><span class="p">:</span> <span class="dl">"</span><span class="s2">1px</span><span class="dl">"</span><span class="p">,</span>
              <span class="na">visibility</span><span class="p">:</span> <span class="dl">"</span><span class="s2">hidden</span><span class="dl">"</span><span class="p">,</span>
            <span class="p">&#125;;</span>
            <span class="k">for </span><span class="p">(</span><span class="nx">E</span> <span class="k">in</span> <span class="nx">M</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">F</span><span class="p">.</span><span class="nx">style</span><span class="p">[</span><span class="nx">E</span><span class="p">]</span> <span class="o">=</span> <span class="nx">M</span><span class="p">[</span><span class="nx">E</span><span class="p">];</span>
            <span class="p">&#125;</span>
            <span class="nx">F</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="nx">K</span><span class="p">;</span>
            <span class="nx">L</span><span class="p">.</span><span class="nf">insertBefore</span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">L</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">);</span>
            <span class="p">((</span><span class="nx">H</span> <span class="o">=</span> <span class="nx">F</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">),</span>
              <span class="p">(</span><span class="nx">G</span> <span class="o">=</span> <span class="nx">H</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">),</span>
              <span class="p">(</span><span class="nx">I</span> <span class="o">=</span> <span class="nx">H</span><span class="p">.</span><span class="nx">nextSibling</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">));</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">doesNotAddBorder</span> <span class="o">=</span> <span class="nx">G</span><span class="p">.</span><span class="nx">offsetTop</span> <span class="o">!==</span> <span class="mi">5</span><span class="p">;</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">doesAddBorderForTableAndCells</span> <span class="o">=</span> <span class="nx">I</span><span class="p">.</span><span class="nx">offsetTop</span> <span class="o">===</span> <span class="mi">5</span><span class="p">;</span>
            <span class="p">((</span><span class="nx">H</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">overflow</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">hidden</span><span class="dl">"</span><span class="p">),</span> <span class="p">(</span><span class="nx">H</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">position</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">relative</span><span class="dl">"</span><span class="p">));</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">subtractsBorderForOverflowNotVisible</span> <span class="o">=</span> <span class="nx">G</span><span class="p">.</span><span class="nx">offsetTop</span> <span class="o">===</span> <span class="o">-</span><span class="mi">5</span><span class="p">;</span>
            <span class="nx">L</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">marginTop</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">1px</span><span class="dl">"</span><span class="p">;</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">doesNotIncludeMarginInBodyOffset</span> <span class="o">=</span> <span class="nx">L</span><span class="p">.</span><span class="nx">offsetTop</span> <span class="o">===</span> <span class="mi">0</span><span class="p">;</span>
            <span class="nx">L</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">marginTop</span> <span class="o">=</span> <span class="nx">J</span><span class="p">;</span>
            <span class="nx">L</span><span class="p">.</span><span class="nf">removeChild</span><span class="p">(</span><span class="nx">F</span><span class="p">);</span>
            <span class="k">this</span><span class="p">.</span><span class="nx">initialized</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">bodyOffset</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">o</span><span class="p">.</span><span class="nx">offset</span><span class="p">.</span><span class="nx">initialized</span> <span class="o">||</span> <span class="nx">o</span><span class="p">.</span><span class="nx">offset</span><span class="p">.</span><span class="nf">initialize</span><span class="p">();</span>
            <span class="kd">var</span> <span class="nx">G</span> <span class="o">=</span> <span class="nx">E</span><span class="p">.</span><span class="nx">offsetTop</span><span class="p">,</span>
              <span class="nx">F</span> <span class="o">=</span> <span class="nx">E</span><span class="p">.</span><span class="nx">offsetLeft</span><span class="p">;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">offset</span><span class="p">.</span><span class="nx">doesNotIncludeMarginInBodyOffset</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="p">((</span><span class="nx">G</span> <span class="o">+=</span> <span class="nf">parseInt</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">curCSS</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="dl">"</span><span class="s2">marginTop</span><span class="dl">"</span><span class="p">,</span> <span class="kc">true</span><span class="p">),</span> <span class="mi">10</span><span class="p">)</span> <span class="o">||</span> <span class="mi">0</span><span class="p">),</span>
                <span class="p">(</span><span class="nx">F</span> <span class="o">+=</span> <span class="nf">parseInt</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nf">curCSS</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="dl">"</span><span class="s2">marginLeft</span><span class="dl">"</span><span class="p">,</span> <span class="kc">true</span><span class="p">),</span> <span class="mi">10</span><span class="p">)</span> <span class="o">||</span> <span class="mi">0</span><span class="p">));</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="p">&#123;</span> <span class="na">top</span><span class="p">:</span> <span class="nx">G</span><span class="p">,</span> <span class="na">left</span><span class="p">:</span> <span class="nx">F</span> <span class="p">&#125;;</span>
          <span class="p">&#125;,</span>
        <span class="p">&#125;;</span>
        <span class="nx">o</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nf">extend</span><span class="p">(&#123;</span>
          <span class="na">position</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">I</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span>
              <span class="nx">H</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span>
              <span class="nx">F</span><span class="p">;</span>
            <span class="k">if </span><span class="p">(</span><span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">G</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nf">offsetParent</span><span class="p">(),</span>
                <span class="nx">J</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nf">offset</span><span class="p">(),</span>
                <span class="nx">E</span> <span class="o">=</span> <span class="sr">/^body|html$/i</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">G</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">tagName</span><span class="p">)</span>
                  <span class="p">?</span> <span class="p">&#123;</span> <span class="na">top</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span> <span class="na">left</span><span class="p">:</span> <span class="mi">0</span> <span class="p">&#125;</span>
                  <span class="p">:</span> <span class="nx">G</span><span class="p">.</span><span class="nf">offset</span><span class="p">();</span>
              <span class="nx">J</span><span class="p">.</span><span class="nx">top</span> <span class="o">-=</span> <span class="nf">j</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="dl">"</span><span class="s2">marginTop</span><span class="dl">"</span><span class="p">);</span>
              <span class="nx">J</span><span class="p">.</span><span class="nx">left</span> <span class="o">-=</span> <span class="nf">j</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="dl">"</span><span class="s2">marginLeft</span><span class="dl">"</span><span class="p">);</span>
              <span class="nx">E</span><span class="p">.</span><span class="nx">top</span> <span class="o">+=</span> <span class="nf">j</span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="dl">"</span><span class="s2">borderTopWidth</span><span class="dl">"</span><span class="p">);</span>
              <span class="nx">E</span><span class="p">.</span><span class="nx">left</span> <span class="o">+=</span> <span class="nf">j</span><span class="p">(</span><span class="nx">G</span><span class="p">,</span> <span class="dl">"</span><span class="s2">borderLeftWidth</span><span class="dl">"</span><span class="p">);</span>
              <span class="nx">F</span> <span class="o">=</span> <span class="p">&#123;</span> <span class="na">top</span><span class="p">:</span> <span class="nx">J</span><span class="p">.</span><span class="nx">top</span> <span class="o">-</span> <span class="nx">E</span><span class="p">.</span><span class="nx">top</span><span class="p">,</span> <span class="na">left</span><span class="p">:</span> <span class="nx">J</span><span class="p">.</span><span class="nx">left</span> <span class="o">-</span> <span class="nx">E</span><span class="p">.</span><span class="nx">left</span> <span class="p">&#125;;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">F</span><span class="p">;</span>
          <span class="p">&#125;,</span>
          <span class="na">offsetParent</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">offsetParent</span> <span class="o">||</span> <span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">;</span>
            <span class="k">while </span><span class="p">(</span>
              <span class="nx">E</span> <span class="o">&amp;&amp;</span>
              <span class="o">!</span><span class="sr">/^body|html$/i</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">E</span><span class="p">.</span><span class="nx">tagName</span><span class="p">)</span> <span class="o">&amp;&amp;</span>
              <span class="nx">o</span><span class="p">.</span><span class="nf">css</span><span class="p">(</span><span class="nx">E</span><span class="p">,</span> <span class="dl">"</span><span class="s2">position</span><span class="dl">"</span><span class="p">)</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">static</span><span class="dl">"</span>
            <span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">E</span> <span class="o">=</span> <span class="nx">E</span><span class="p">.</span><span class="nx">offsetParent</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nf">o</span><span class="p">(</span><span class="nx">E</span><span class="p">);</span>
          <span class="p">&#125;,</span>
        <span class="p">&#125;);</span>
        <span class="nx">o</span><span class="p">.</span><span class="nf">each</span><span class="p">([</span><span class="dl">"</span><span class="s2">Left</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">Top</span><span class="dl">"</span><span class="p">],</span> <span class="nf">function </span><span class="p">(</span><span class="nx">F</span><span class="p">,</span> <span class="nx">E</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="kd">var</span> <span class="nx">G</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">scroll</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">E</span><span class="p">;</span>
          <span class="nx">o</span><span class="p">.</span><span class="nx">fn</span><span class="p">[</span><span class="nx">G</span><span class="p">]</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">H</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="kc">null</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">return</span> <span class="nx">H</span> <span class="o">!==</span> <span class="nx">g</span>
              <span class="p">?</span> <span class="k">this</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
                  <span class="k">this</span> <span class="o">==</span> <span class="nx">l</span> <span class="o">||</span> <span class="k">this</span> <span class="o">==</span> <span class="nb">document</span>
                    <span class="p">?</span> <span class="nx">l</span><span class="p">.</span><span class="nf">scrollTo</span><span class="p">(</span>
                        <span class="o">!</span><span class="nx">F</span> <span class="p">?</span> <span class="nx">H</span> <span class="p">:</span> <span class="nf">o</span><span class="p">(</span><span class="nx">l</span><span class="p">).</span><span class="nf">scrollLeft</span><span class="p">(),</span>
                        <span class="nx">F</span> <span class="p">?</span> <span class="nx">H</span> <span class="p">:</span> <span class="nf">o</span><span class="p">(</span><span class="nx">l</span><span class="p">).</span><span class="nf">scrollTop</span><span class="p">(),</span>
                      <span class="p">)</span>
                    <span class="p">:</span> <span class="p">(</span><span class="k">this</span><span class="p">[</span><span class="nx">G</span><span class="p">]</span> <span class="o">=</span> <span class="nx">H</span><span class="p">);</span>
                <span class="p">&#125;)</span>
              <span class="p">:</span> <span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">==</span> <span class="nx">l</span> <span class="o">||</span> <span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">==</span> <span class="nb">document</span>
                <span class="p">?</span> <span class="nb">self</span><span class="p">[</span><span class="nx">F</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">pageYOffset</span><span class="dl">"</span> <span class="p">:</span> <span class="dl">"</span><span class="s2">pageXOffset</span><span class="dl">"</span><span class="p">]</span> <span class="o">||</span>
                  <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">boxModel</span> <span class="o">&amp;&amp;</span> <span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">[</span><span class="nx">G</span><span class="p">])</span> <span class="o">||</span>
                  <span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">[</span><span class="nx">G</span><span class="p">]</span>
                <span class="p">:</span> <span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="nx">G</span><span class="p">];</span>
          <span class="p">&#125;;</span>
        <span class="p">&#125;);</span>
        <span class="nx">o</span><span class="p">.</span><span class="nf">each</span><span class="p">([</span><span class="dl">"</span><span class="s2">Height</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">Width</span><span class="dl">"</span><span class="p">],</span> <span class="nf">function </span><span class="p">(</span><span class="nx">I</span><span class="p">,</span> <span class="nx">G</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="kd">var</span> <span class="nx">E</span> <span class="o">=</span> <span class="nx">I</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">Left</span><span class="dl">"</span> <span class="p">:</span> <span class="dl">"</span><span class="s2">Top</span><span class="dl">"</span><span class="p">,</span>
            <span class="nx">H</span> <span class="o">=</span> <span class="nx">I</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">Right</span><span class="dl">"</span> <span class="p">:</span> <span class="dl">"</span><span class="s2">Bottom</span><span class="dl">"</span><span class="p">,</span>
            <span class="nx">F</span> <span class="o">=</span> <span class="nx">G</span><span class="p">.</span><span class="nf">toLowerCase</span><span class="p">();</span>
          <span class="nx">o</span><span class="p">.</span><span class="nx">fn</span><span class="p">[</span><span class="dl">"</span><span class="s2">inner</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">G</span><span class="p">]</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="p">?</span> <span class="nx">o</span><span class="p">.</span><span class="nf">css</span><span class="p">(</span><span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">F</span><span class="p">,</span> <span class="kc">false</span><span class="p">,</span> <span class="dl">"</span><span class="s2">padding</span><span class="dl">"</span><span class="p">)</span> <span class="p">:</span> <span class="kc">null</span><span class="p">;</span>
          <span class="p">&#125;;</span>
          <span class="nx">o</span><span class="p">.</span><span class="nx">fn</span><span class="p">[</span><span class="dl">"</span><span class="s2">outer</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">G</span><span class="p">]</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">K</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span>
              <span class="p">?</span> <span class="nx">o</span><span class="p">.</span><span class="nf">css</span><span class="p">(</span><span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">F</span><span class="p">,</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">K</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">margin</span><span class="dl">"</span> <span class="p">:</span> <span class="dl">"</span><span class="s2">border</span><span class="dl">"</span><span class="p">)</span>
              <span class="p">:</span> <span class="kc">null</span><span class="p">;</span>
          <span class="p">&#125;;</span>
          <span class="kd">var</span> <span class="nx">J</span> <span class="o">=</span> <span class="nx">G</span><span class="p">.</span><span class="nf">toLowerCase</span><span class="p">();</span>
          <span class="nx">o</span><span class="p">.</span><span class="nx">fn</span><span class="p">[</span><span class="nx">J</span><span class="p">]</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">K</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">return</span> <span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">==</span> <span class="nx">l</span>
              <span class="p">?</span> <span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">compatMode</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">CSS1Compat</span><span class="dl">"</span> <span class="o">&amp;&amp;</span>
                  <span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">[</span><span class="dl">"</span><span class="s2">client</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">G</span><span class="p">])</span> <span class="o">||</span>
                  <span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">[</span><span class="dl">"</span><span class="s2">client</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">G</span><span class="p">]</span>
              <span class="p">:</span> <span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">==</span> <span class="nb">document</span>
                <span class="p">?</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">max</span><span class="p">(</span>
                    <span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">[</span><span class="dl">"</span><span class="s2">client</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">G</span><span class="p">],</span>
                    <span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">[</span><span class="dl">"</span><span class="s2">scroll</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">G</span><span class="p">],</span>
                    <span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">[</span><span class="dl">"</span><span class="s2">scroll</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">G</span><span class="p">],</span>
                    <span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">[</span><span class="dl">"</span><span class="s2">offset</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">G</span><span class="p">],</span>
                    <span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">[</span><span class="dl">"</span><span class="s2">offset</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">G</span><span class="p">],</span>
                  <span class="p">)</span>
                <span class="p">:</span> <span class="nx">K</span> <span class="o">===</span> <span class="nx">g</span>
                  <span class="p">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">length</span>
                    <span class="p">?</span> <span class="nx">o</span><span class="p">.</span><span class="nf">css</span><span class="p">(</span><span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">J</span><span class="p">)</span>
                    <span class="p">:</span> <span class="kc">null</span>
                  <span class="p">:</span> <span class="k">this</span><span class="p">.</span><span class="nf">css</span><span class="p">(</span><span class="nx">J</span><span class="p">,</span> <span class="k">typeof</span> <span class="nx">K</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">string</span><span class="dl">"</span> <span class="p">?</span> <span class="nx">K</span> <span class="p">:</span> <span class="nx">K</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">px</span><span class="dl">"</span><span class="p">);</span>
          <span class="p">&#125;;</span>
        <span class="p">&#125;);</span>
      <span class="p">&#125;)();</span>

      <span class="c1">//timer</span>
      <span class="cm">/**
       * jQuery.timers - Timer abstractions for jQuery
       * Written by Blair Mitchelmore (blair DOT mitchelmore AT gmail DOT com)
       * Licensed under the WTFPL (http://sam.zoy.org/wtfpl/).
       * Date: 2009/08/13
       *
       * @author Blair Mitchelmore
       * @version 1.1.3
       *
       **/</span>

      <span class="nx">jQuery</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nf">extend</span><span class="p">(&#123;</span>
        <span class="na">everyTime</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">interval</span><span class="p">,</span> <span class="nx">label</span><span class="p">,</span> <span class="nx">fn</span><span class="p">,</span> <span class="nx">times</span><span class="p">,</span> <span class="nx">belay</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="nx">jQuery</span><span class="p">.</span><span class="nx">timer</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">interval</span><span class="p">,</span> <span class="nx">label</span><span class="p">,</span> <span class="nx">fn</span><span class="p">,</span> <span class="nx">times</span><span class="p">,</span> <span class="nx">belay</span><span class="p">);</span>
          <span class="p">&#125;);</span>
        <span class="p">&#125;,</span>
        <span class="na">oneTime</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">interval</span><span class="p">,</span> <span class="nx">label</span><span class="p">,</span> <span class="nx">fn</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="nx">jQuery</span><span class="p">.</span><span class="nx">timer</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">interval</span><span class="p">,</span> <span class="nx">label</span><span class="p">,</span> <span class="nx">fn</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span>
          <span class="p">&#125;);</span>
        <span class="p">&#125;,</span>
        <span class="na">stopTime</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">label</span><span class="p">,</span> <span class="nx">fn</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="nx">jQuery</span><span class="p">.</span><span class="nx">timer</span><span class="p">.</span><span class="nf">remove</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">label</span><span class="p">,</span> <span class="nx">fn</span><span class="p">);</span>
          <span class="p">&#125;);</span>
        <span class="p">&#125;,</span>
      <span class="p">&#125;);</span>

      <span class="nx">jQuery</span><span class="p">.</span><span class="nf">extend</span><span class="p">(&#123;</span>
        <span class="na">timer</span><span class="p">:</span> <span class="p">&#123;</span>
          <span class="na">global</span><span class="p">:</span> <span class="p">[],</span>
          <span class="na">guid</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
          <span class="na">dataKey</span><span class="p">:</span> <span class="dl">"</span><span class="s2">jQuery.timer</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">regex</span><span class="p">:</span> <span class="sr">/^</span><span class="se">([</span><span class="sr">0-9</span><span class="se">]</span><span class="sr">+</span><span class="se">(?:\.[</span><span class="sr">0-9</span><span class="se">]</span><span class="sr">*</span><span class="se">)?)\s</span><span class="sr">*</span><span class="se">(</span><span class="sr">.*s</span><span class="se">)?</span><span class="sr">$/</span><span class="p">,</span>
          <span class="na">powers</span><span class="p">:</span> <span class="p">&#123;</span>
            <span class="c1">// Yeah this is major overkill...</span>
            <span class="na">ms</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
            <span class="na">cs</span><span class="p">:</span> <span class="mi">10</span><span class="p">,</span>
            <span class="na">ds</span><span class="p">:</span> <span class="mi">100</span><span class="p">,</span>
            <span class="na">s</span><span class="p">:</span> <span class="mi">1000</span><span class="p">,</span>
            <span class="na">das</span><span class="p">:</span> <span class="mi">10000</span><span class="p">,</span>
            <span class="na">hs</span><span class="p">:</span> <span class="mi">100000</span><span class="p">,</span>
            <span class="na">ks</span><span class="p">:</span> <span class="mi">1000000</span><span class="p">,</span>
          <span class="p">&#125;,</span>
          <span class="na">timeParse</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">value</span> <span class="o">==</span> <span class="kc">undefined</span> <span class="o">||</span> <span class="nx">value</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="kc">null</span><span class="p">;</span>
            <span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nf">exec</span><span class="p">(</span><span class="nx">jQuery</span><span class="p">.</span><span class="nf">trim</span><span class="p">(</span><span class="nx">value</span><span class="p">.</span><span class="nf">toString</span><span class="p">()));</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">result</span><span class="p">[</span><span class="mi">2</span><span class="p">])</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">num</span> <span class="o">=</span> <span class="nf">parseFloat</span><span class="p">(</span><span class="nx">result</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span>
              <span class="kd">var</span> <span class="nx">mult</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">powers</span><span class="p">[</span><span class="nx">result</span><span class="p">[</span><span class="mi">2</span><span class="p">]]</span> <span class="o">||</span> <span class="mi">1</span><span class="p">;</span>
              <span class="k">return</span> <span class="nx">num</span> <span class="o">*</span> <span class="nx">mult</span><span class="p">;</span>
            <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="nx">value</span><span class="p">;</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;,</span>
          <span class="na">add</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">interval</span><span class="p">,</span> <span class="nx">label</span><span class="p">,</span> <span class="nx">fn</span><span class="p">,</span> <span class="nx">times</span><span class="p">,</span> <span class="nx">belay</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">counter</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>

            <span class="k">if </span><span class="p">(</span><span class="nx">jQuery</span><span class="p">.</span><span class="nf">isFunction</span><span class="p">(</span><span class="nx">label</span><span class="p">))</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">times</span><span class="p">)</span> <span class="nx">times</span> <span class="o">=</span> <span class="nx">fn</span><span class="p">;</span>
              <span class="nx">fn</span> <span class="o">=</span> <span class="nx">label</span><span class="p">;</span>
              <span class="nx">label</span> <span class="o">=</span> <span class="nx">interval</span><span class="p">;</span>
            <span class="p">&#125;</span>

            <span class="nx">interval</span> <span class="o">=</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">timer</span><span class="p">.</span><span class="nf">timeParse</span><span class="p">(</span><span class="nx">interval</span><span class="p">);</span>

            <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">interval</span> <span class="o">!=</span> <span class="dl">"</span><span class="s2">number</span><span class="dl">"</span> <span class="o">||</span> <span class="nf">isNaN</span><span class="p">(</span><span class="nx">interval</span><span class="p">)</span> <span class="o">||</span> <span class="nx">interval</span> <span class="o">&lt;=</span> <span class="mi">0</span><span class="p">)</span>
              <span class="k">return</span><span class="p">;</span>

            <span class="k">if </span><span class="p">(</span><span class="nx">times</span> <span class="o">&amp;&amp;</span> <span class="nx">times</span><span class="p">.</span><span class="kd">constructor</span> <span class="o">!=</span> <span class="nb">Number</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">belay</span> <span class="o">=</span> <span class="o">!!</span><span class="nx">times</span><span class="p">;</span>
              <span class="nx">times</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
            <span class="p">&#125;</span>

            <span class="nx">times</span> <span class="o">=</span> <span class="nx">times</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span>
            <span class="nx">belay</span> <span class="o">=</span> <span class="nx">belay</span> <span class="o">||</span> <span class="kc">false</span><span class="p">;</span>

            <span class="kd">var</span> <span class="nx">timers</span> <span class="o">=</span>
              <span class="nx">jQuery</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">dataKey</span><span class="p">)</span> <span class="o">||</span>
              <span class="nx">jQuery</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">dataKey</span><span class="p">,</span> <span class="p">&#123;&#125;);</span>

            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">timers</span><span class="p">[</span><span class="nx">label</span><span class="p">])</span> <span class="nx">timers</span><span class="p">[</span><span class="nx">label</span><span class="p">]</span> <span class="o">=</span> <span class="p">&#123;&#125;;</span>

            <span class="nx">fn</span><span class="p">.</span><span class="nx">timerID</span> <span class="o">=</span> <span class="nx">fn</span><span class="p">.</span><span class="nx">timerID</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">guid</span><span class="o">++</span><span class="p">;</span>

            <span class="kd">var</span> <span class="nx">handler</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">belay</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">inProgress</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span>
              <span class="k">this</span><span class="p">.</span><span class="nx">inProgress</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
              <span class="k">if </span><span class="p">(</span>
                <span class="p">(</span><span class="o">++</span><span class="nx">counter</span> <span class="o">&gt;</span> <span class="nx">times</span> <span class="o">&amp;&amp;</span> <span class="nx">times</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span> <span class="o">||</span>
                <span class="nx">fn</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">counter</span><span class="p">)</span> <span class="o">===</span> <span class="kc">false</span>
              <span class="p">)</span>
                <span class="nx">jQuery</span><span class="p">.</span><span class="nx">timer</span><span class="p">.</span><span class="nf">remove</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">label</span><span class="p">,</span> <span class="nx">fn</span><span class="p">);</span>
              <span class="k">this</span><span class="p">.</span><span class="nx">inProgress</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
            <span class="p">&#125;;</span>

            <span class="nx">handler</span><span class="p">.</span><span class="nx">timerID</span> <span class="o">=</span> <span class="nx">fn</span><span class="p">.</span><span class="nx">timerID</span><span class="p">;</span>

            <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">timers</span><span class="p">[</span><span class="nx">label</span><span class="p">][</span><span class="nx">fn</span><span class="p">.</span><span class="nx">timerID</span><span class="p">])</span>
              <span class="nx">timers</span><span class="p">[</span><span class="nx">label</span><span class="p">][</span><span class="nx">fn</span><span class="p">.</span><span class="nx">timerID</span><span class="p">]</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nf">setInterval</span><span class="p">(</span><span class="nx">handler</span><span class="p">,</span> <span class="nx">interval</span><span class="p">);</span>

            <span class="k">this</span><span class="p">.</span><span class="nb">global</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">element</span><span class="p">);</span>
          <span class="p">&#125;,</span>
          <span class="na">remove</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">label</span><span class="p">,</span> <span class="nx">fn</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">timers</span> <span class="o">=</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">dataKey</span><span class="p">),</span>
              <span class="nx">ret</span><span class="p">;</span>

            <span class="k">if </span><span class="p">(</span><span class="nx">timers</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">label</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">for </span><span class="p">(</span><span class="nx">label</span> <span class="k">in</span> <span class="nx">timers</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nf">remove</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">label</span><span class="p">,</span> <span class="nx">fn</span><span class="p">);</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">timers</span><span class="p">[</span><span class="nx">label</span><span class="p">])</span> <span class="p">&#123;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">fn</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">fn</span><span class="p">.</span><span class="nx">timerID</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nb">window</span><span class="p">.</span><span class="nf">clearInterval</span><span class="p">(</span><span class="nx">timers</span><span class="p">[</span><span class="nx">label</span><span class="p">][</span><span class="nx">fn</span><span class="p">.</span><span class="nx">timerID</span><span class="p">]);</span>
                    <span class="k">delete</span> <span class="nx">timers</span><span class="p">[</span><span class="nx">label</span><span class="p">][</span><span class="nx">fn</span><span class="p">.</span><span class="nx">timerID</span><span class="p">];</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                  <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">fn</span> <span class="k">in</span> <span class="nx">timers</span><span class="p">[</span><span class="nx">label</span><span class="p">])</span> <span class="p">&#123;</span>
                    <span class="nb">window</span><span class="p">.</span><span class="nf">clearInterval</span><span class="p">(</span><span class="nx">timers</span><span class="p">[</span><span class="nx">label</span><span class="p">][</span><span class="nx">fn</span><span class="p">]);</span>
                    <span class="k">delete</span> <span class="nx">timers</span><span class="p">[</span><span class="nx">label</span><span class="p">][</span><span class="nx">fn</span><span class="p">];</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span>

                <span class="k">for </span><span class="p">(</span><span class="nx">ret</span> <span class="k">in</span> <span class="nx">timers</span><span class="p">[</span><span class="nx">label</span><span class="p">])</span> <span class="k">break</span><span class="p">;</span>
                <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">ret</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">ret</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
                  <span class="k">delete</span> <span class="nx">timers</span><span class="p">[</span><span class="nx">label</span><span class="p">];</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>

              <span class="k">for </span><span class="p">(</span><span class="nx">ret</span> <span class="k">in</span> <span class="nx">timers</span><span class="p">)</span> <span class="k">break</span><span class="p">;</span>
              <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">ret</span><span class="p">)</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nf">removeData</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">dataKey</span><span class="p">);</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;,</span>
        <span class="p">&#125;,</span>
      <span class="p">&#125;);</span>

      <span class="nf">jQuery</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nf">bind</span><span class="p">(</span><span class="dl">"</span><span class="s2">unload</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
        <span class="nx">jQuery</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nx">jQuery</span><span class="p">.</span><span class="nx">timer</span><span class="p">.</span><span class="nb">global</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">index</span><span class="p">,</span> <span class="nx">item</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">jQuery</span><span class="p">.</span><span class="nx">timer</span><span class="p">.</span><span class="nf">remove</span><span class="p">(</span><span class="nx">item</span><span class="p">);</span>
        <span class="p">&#125;);</span>
      <span class="p">&#125;);</span>

      <span class="c1">//SCRAMBLR</span>
      <span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="kd">function</span> <span class="nf">shuffle</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">a</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span>
            <span class="nx">j</span><span class="p">;</span>
          <span class="k">while </span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">floor</span><span class="p">(</span><span class="nx">i</span><span class="o">--</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">random</span><span class="p">());</span>
            <span class="kd">var</span> <span class="nx">t</span> <span class="o">=</span> <span class="nx">a</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span>
            <span class="nx">a</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">a</span><span class="p">[</span><span class="nx">j</span><span class="p">];</span>
            <span class="nx">a</span><span class="p">[</span><span class="nx">j</span><span class="p">]</span> <span class="o">=</span> <span class="nx">t</span><span class="p">;</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;</span>

        <span class="kd">function</span> <span class="nf">randomAlphaNum</span><span class="p">()</span> <span class="p">&#123;</span>
          <span class="kd">var</span> <span class="nx">rnd</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">floor</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nf">random</span><span class="p">()</span> <span class="o">*</span> <span class="mi">62</span><span class="p">);</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">rnd</span> <span class="o">&gt;=</span> <span class="mi">52</span><span class="p">)</span> <span class="k">return</span> <span class="nb">String</span><span class="p">.</span><span class="nf">fromCharCode</span><span class="p">(</span><span class="nx">rnd</span> <span class="o">-</span> <span class="mi">4</span><span class="p">);</span>
          <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">rnd</span> <span class="o">&gt;=</span> <span class="mi">26</span><span class="p">)</span> <span class="k">return</span> <span class="nb">String</span><span class="p">.</span><span class="nf">fromCharCode</span><span class="p">(</span><span class="nx">rnd</span> <span class="o">+</span> <span class="mi">71</span><span class="p">);</span>
          <span class="k">else</span> <span class="k">return</span> <span class="nb">String</span><span class="p">.</span><span class="nf">fromCharCode</span><span class="p">(</span><span class="nx">rnd</span> <span class="o">+</span> <span class="mi">65</span><span class="p">);</span>
        <span class="p">&#125;</span>

        <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">rot13</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
          <span class="k">this</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nf">text</span><span class="p">(</span>
              <span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">)</span>
                <span class="p">.</span><span class="nf">text</span><span class="p">()</span>
                <span class="p">.</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/</span><span class="se">[</span><span class="sr">a-z0-9</span><span class="se">]</span><span class="sr">/gi</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">chr</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="kd">var</span> <span class="nx">cc</span> <span class="o">=</span> <span class="nx">chr</span><span class="p">.</span><span class="nf">charCodeAt</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span>
                  <span class="k">if</span> <span class="p">(</span><span class="nx">cc</span> <span class="o">&gt;=</span> <span class="mi">65</span> <span class="o">&amp;&amp;</span> <span class="nx">cc</span> <span class="o">&lt;=</span> <span class="mi">90</span><span class="p">)</span> <span class="nx">cc</span> <span class="o">=</span> <span class="mi">65</span> <span class="o">+</span> <span class="p">((</span><span class="nx">cc</span> <span class="o">-</span> <span class="mi">52</span><span class="p">)</span> <span class="o">%</span> <span class="mi">26</span><span class="p">);</span>
                  <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">cc</span> <span class="o">&gt;=</span> <span class="mi">97</span> <span class="o">&amp;&amp;</span> <span class="nx">cc</span> <span class="o">&lt;=</span> <span class="mi">122</span><span class="p">)</span> <span class="nx">cc</span> <span class="o">=</span> <span class="mi">97</span> <span class="o">+</span> <span class="p">((</span><span class="nx">cc</span> <span class="o">-</span> <span class="mi">84</span><span class="p">)</span> <span class="o">%</span> <span class="mi">26</span><span class="p">);</span>
                  <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">cc</span> <span class="o">&gt;=</span> <span class="mi">48</span> <span class="o">&amp;&amp;</span> <span class="nx">cc</span> <span class="o">&lt;=</span> <span class="mi">57</span><span class="p">)</span> <span class="nx">cc</span> <span class="o">=</span> <span class="mi">48</span> <span class="o">+</span> <span class="p">((</span><span class="nx">cc</span> <span class="o">-</span> <span class="mi">43</span><span class="p">)</span> <span class="o">%</span> <span class="mi">10</span><span class="p">);</span>
                  <span class="k">return</span> <span class="nb">String</span><span class="p">.</span><span class="nf">fromCharCode</span><span class="p">(</span><span class="nx">cc</span><span class="p">);</span>
                <span class="p">&#125;),</span>
            <span class="p">);</span>
          <span class="p">&#125;);</span>
          <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
        <span class="p">&#125;;</span>

        <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">scrambledWriter</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
          <span class="k">this</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">$ele</span> <span class="o">=</span> <span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span>
              <span class="nx">str</span> <span class="o">=</span> <span class="nx">$ele</span><span class="p">.</span><span class="nf">text</span><span class="p">(),</span>
              <span class="nx">progress</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span>
              <span class="nx">replace</span> <span class="o">=</span> <span class="sr">/</span><span class="se">[^\s]</span><span class="sr">/g</span><span class="p">,</span>
              <span class="nx">random</span> <span class="o">=</span> <span class="nx">randomAlphaNum</span><span class="p">,</span>
              <span class="nx">inc</span> <span class="o">=</span> <span class="mi">3</span><span class="p">;</span>
            <span class="nx">$ele</span><span class="p">.</span><span class="nf">text</span><span class="p">(</span><span class="dl">""</span><span class="p">);</span>
            <span class="kd">var</span> <span class="nx">timer</span> <span class="o">=</span> <span class="nf">setInterval</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="nx">$ele</span><span class="p">.</span><span class="nf">text</span><span class="p">(</span>
                <span class="nx">str</span><span class="p">.</span><span class="nf">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">progress</span><span class="p">)</span> <span class="o">+</span>
                  <span class="nx">str</span>
                    <span class="p">.</span><span class="nf">substring</span><span class="p">(</span><span class="nx">progress</span><span class="p">,</span> <span class="nx">str</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span>
                    <span class="p">.</span><span class="nf">replace</span><span class="p">(</span><span class="nx">replace</span><span class="p">,</span> <span class="nx">random</span><span class="p">),</span>
              <span class="p">);</span>
              <span class="nx">progress</span> <span class="o">+=</span> <span class="nx">inc</span><span class="p">;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">progress</span> <span class="o">&gt;=</span> <span class="nx">str</span><span class="p">.</span><span class="nx">length</span> <span class="o">+</span> <span class="nx">inc</span><span class="p">)</span> <span class="nf">clearInterval</span><span class="p">(</span><span class="nx">timer</span><span class="p">);</span>
            <span class="p">&#125;,</span> <span class="mi">100</span><span class="p">);</span>
          <span class="p">&#125;);</span>
          <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
        <span class="p">&#125;;</span>

        <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">typewriter</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
          <span class="k">this</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">$ele</span> <span class="o">=</span> <span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span>
              <span class="nx">str</span> <span class="o">=</span> <span class="nx">$ele</span><span class="p">.</span><span class="nf">text</span><span class="p">(),</span>
              <span class="nx">progress</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
            <span class="nx">$ele</span><span class="p">.</span><span class="nf">text</span><span class="p">(</span><span class="dl">""</span><span class="p">);</span>
            <span class="kd">var</span> <span class="nx">timer</span> <span class="o">=</span> <span class="nf">setInterval</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="nx">$ele</span><span class="p">.</span><span class="nf">text</span><span class="p">(</span>
                <span class="nx">str</span><span class="p">.</span><span class="nf">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">progress</span><span class="o">++</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="nx">progress</span> <span class="o">&amp;</span> <span class="mi">1</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">_</span><span class="dl">"</span> <span class="p">:</span> <span class="dl">""</span><span class="p">),</span>
              <span class="p">);</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">progress</span> <span class="o">&gt;=</span> <span class="nx">str</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="nf">clearInterval</span><span class="p">(</span><span class="nx">timer</span><span class="p">);</span>
            <span class="p">&#125;,</span> <span class="mi">100</span><span class="p">);</span>
          <span class="p">&#125;);</span>
          <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
        <span class="p">&#125;;</span>

        <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">unscramble</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
          <span class="k">this</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">$ele</span> <span class="o">=</span> <span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span>
              <span class="nx">str</span> <span class="o">=</span> <span class="nx">$ele</span><span class="p">.</span><span class="nf">text</span><span class="p">(),</span>
              <span class="nx">replace</span> <span class="o">=</span> <span class="sr">/</span><span class="se">[^\s]</span><span class="sr">/</span><span class="p">,</span>
              <span class="nx">state</span> <span class="o">=</span> <span class="p">[],</span>
              <span class="nx">choose</span> <span class="o">=</span> <span class="p">[],</span>
              <span class="nx">reveal</span> <span class="o">=</span> <span class="mi">25</span><span class="p">,</span>
              <span class="nx">random</span> <span class="o">=</span> <span class="nx">randomAlphaNum</span><span class="p">;</span>

            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">str</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">str</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nf">match</span><span class="p">(</span><span class="nx">replace</span><span class="p">))</span> <span class="p">&#123;</span>
                <span class="nx">state</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nf">random</span><span class="p">());</span>
                <span class="nx">choose</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">i</span><span class="p">);</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                <span class="nx">state</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">str</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>

            <span class="nf">shuffle</span><span class="p">(</span><span class="nx">choose</span><span class="p">);</span>
            <span class="nx">$ele</span><span class="p">.</span><span class="nf">text</span><span class="p">(</span><span class="nx">state</span><span class="p">.</span><span class="nf">join</span><span class="p">(</span><span class="dl">""</span><span class="p">));</span>

            <span class="kd">var</span> <span class="nx">timer</span> <span class="o">=</span> <span class="nf">setInterval</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">i</span><span class="p">,</span>
                <span class="nx">r</span> <span class="o">=</span> <span class="nx">reveal</span><span class="p">;</span>
              <span class="k">while </span><span class="p">(</span><span class="nx">r</span><span class="o">--</span> <span class="o">&amp;&amp;</span> <span class="nx">choose</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">i</span> <span class="o">=</span> <span class="nx">choose</span><span class="p">.</span><span class="nf">pop</span><span class="p">();</span>
                <span class="nx">state</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">str</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span>
              <span class="p">&#125;</span>
              <span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">choose</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="nx">state</span><span class="p">[</span><span class="nx">choose</span><span class="p">[</span><span class="nx">i</span><span class="p">]]</span> <span class="o">=</span> <span class="nf">random</span><span class="p">();</span>
              <span class="nx">$ele</span><span class="p">.</span><span class="nf">text</span><span class="p">(</span><span class="nx">state</span><span class="p">.</span><span class="nf">join</span><span class="p">(</span><span class="dl">""</span><span class="p">));</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">choose</span><span class="p">.</span><span class="nx">length</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="nf">clearInterval</span><span class="p">(</span><span class="nx">timer</span><span class="p">);</span>
            <span class="p">&#125;,</span> <span class="mi">100</span><span class="p">);</span>
          <span class="p">&#125;);</span>
          <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
        <span class="p">&#125;;</span>
      <span class="p">&#125;)(</span><span class="nx">jQuery</span><span class="p">);</span>
    <span class="nt">&lt;/script&gt;</span>
  <span class="nt">&lt;/head&gt;</span>
  <span class="nt">&lt;body&gt;</span>
    <span class="nt">&lt;div&gt;</span>
      <span class="nt">&lt;input</span> <span class="na">id=</span><span class="s">"play"</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">value=</span><span class="s">"█"</span> <span class="nt">/&gt;</span>
      <span class="nt">&lt;span</span> <span class="na">style=</span><span class="s">"display: none"</span> <span class="na">id=</span><span class="s">"duration"</span><span class="nt">&gt;</span> <span class="nt">&lt;/span&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div&gt;</span>
      <span class="nt">&lt;input</span>
        <span class="na">style=</span><span class="s">"display: none"</span>
        <span class="na">disabled=</span><span class="s">"true"</span>
        <span class="na">id=</span><span class="s">"volume"</span>
        <span class="na">type=</span><span class="s">"range"</span>
        <span class="na">min=</span><span class="s">"0"</span>
        <span class="na">max=</span><span class="s">"10"</span>
        <span class="na">value=</span><span class="s">"5"</span>
      <span class="nt">/&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;p&gt;</span>███<span class="nt">&lt;/p&gt;</span>

    <span class="nt">&lt;pre</span> <span class="na">class=</span><span class="s">"scrmblr"</span><span class="nt">&gt;</span>
██
████████████████████████████████████████████████████████████████████████████████████
████████████████████████████████████████████████████████████████████████████████████
████████████████████████████████████████████████████████████████████████████████████
█
████████████████████████████████████████████████████████████████████████████████████
████████████████████████████████████████████████████████████████████████████████████
     ███

     █████ █ █ ██ █ █ █  ███ █ ██ ██ █ ███ █ █ █ ██ ██ █ ██ █ █ ████████
     █████████
     ███████ █ ██ █ █ ███ █ █ █ █  █ █ █ █ █ █ █ █ █ █ ██ █ █ ███
     ███████████
              ███████████████████████ █ █ █ █ █ █ █ █ ██ █ █ █ 
              ███████████
     ████████████████████████████████████
      ███████████
     ██████████████ █ █ █ ███ █ ██ ██ ██ ██  ████ ███
     █████████████████████

  ███

     █████████
     ████████ █ █ █ █
     ████           █████ █ █ █
     ████           ████████
     ████           █████

     █████████
    ████████          ████
      ██           ████
      ██████
    █████ █ █ █ █ █ ██
   █████████

 █████           ████
 ██ █ █ █ █ █ █ █ ██ █ 
 █ ██ ██ ██   █ █ █ █  █
   ████████████
             ████████████
  ████████████
████████    ██████████
████████████   ██████
████████████████████████████████████████████████████████████████████████████████████
████████████████████████████████████████████████████████████████████████████████████
████████████████████████████████████████████████████████████████████████████████████
████████████████████████████████████████████████████████████████████████████████████
████████████████████████████████████████████████████████████████████████████████████
████████████████████████████████████████████████████████████████████████████████████
████████████████████████████████████████████████████████████████████████████████████
████████████████████████████████████████████████████████████████████████████████████
████████████████████████████████████████████████████████████████████████████████████
████████████████████████████████████████████████████████████████████████████████████
████████████████████████████████████████████████████████████████████████████████████


██████

█
█

█
<span class="nt">&lt;/pre&gt;</span>
  <span class="nt">&lt;/body&gt;</span>
<span class="nt">&lt;/html&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#ff6600</span> <span class="cp">!important</span><span class="p">;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#000</span> <span class="cp">!important</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nt">input</span> <span class="p">&#123;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">66px</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="nf">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nf">ready</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="c1">// ████████████████████████</span>
  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.scrmblr</span><span class="dl">"</span><span class="p">).</span><span class="nf">scrambledWriter</span><span class="p">();</span>
  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">body</span><span class="dl">"</span><span class="p">).</span><span class="nf">everyTime</span><span class="p">(</span>
    <span class="mi">66666</span><span class="p">,</span>
    <span class="dl">"</span><span class="s2">pmp</span><span class="dl">"</span><span class="p">,</span>
    <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.scrmblr</span><span class="dl">"</span><span class="p">).</span><span class="nf">scrambledWriter</span><span class="p">();</span>
    <span class="p">&#125;,</span>
    <span class="mi">66</span><span class="p">,</span>
  <span class="p">);</span>

  <span class="c1">//aud</span>
  <span class="kd">var</span> <span class="nx">audio</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">Audio</span><span class="p">(</span><span class="dl">"</span><span class="s2">http://f-dt.com/SOPA.ogg</span><span class="dl">"</span><span class="p">);</span>

  <span class="kd">var</span> <span class="nx">play</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">play</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">play</span><span class="p">.</span><span class="nf">addEventListener</span><span class="p">(</span>
    <span class="dl">"</span><span class="s2">click</span><span class="dl">"</span><span class="p">,</span>
    <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="nx">audio</span><span class="p">.</span><span class="nf">play</span><span class="p">();</span>
    <span class="p">&#125;,</span>
    <span class="kc">false</span><span class="p">,</span>
  <span class="p">);</span>

  <span class="kd">var</span> <span class="nx">volume</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">volume</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">volume</span><span class="p">.</span><span class="nf">addEventListener</span><span class="p">(</span>
    <span class="dl">"</span><span class="s2">change</span><span class="dl">"</span><span class="p">,</span>
    <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="nx">audio</span><span class="p">.</span><span class="nx">volume</span> <span class="o">=</span> <span class="nf">parseFloat</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">value</span> <span class="o">/</span> <span class="mi">10</span><span class="p">);</span>
    <span class="p">&#125;,</span>
    <span class="kc">false</span><span class="p">,</span>
  <span class="p">);</span>

  <span class="nx">audio</span><span class="p">.</span><span class="nf">addEventListener</span><span class="p">(</span>
    <span class="dl">"</span><span class="s2">timeupdate</span><span class="dl">"</span><span class="p">,</span>
    <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">duration</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">duration</span><span class="dl">"</span><span class="p">);</span>
      <span class="kd">var</span> <span class="nx">s</span> <span class="o">=</span> <span class="nf">parseInt</span><span class="p">(</span><span class="nx">audio</span><span class="p">.</span><span class="nx">currentTime</span> <span class="o">%</span> <span class="mi">60</span><span class="p">);</span>
      <span class="kd">var</span> <span class="nx">m</span> <span class="o">=</span> <span class="nf">parseInt</span><span class="p">((</span><span class="nx">audio</span><span class="p">.</span><span class="nx">currentTime</span> <span class="o">/</span> <span class="mi">60</span><span class="p">)</span> <span class="o">%</span> <span class="mi">60</span><span class="p">);</span>
      <span class="nx">duration</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="nx">m</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">.</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">s</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">sec</span><span class="dl">"</span><span class="p">;</span>
    <span class="p">&#125;,</span>
    <span class="kc">false</span><span class="p">,</span>
  <span class="p">);</span>

  <span class="nf">jQuery</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nf">keyup</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">==</span> <span class="mi">51</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nf">alert</span><span class="p">(</span><span class="dl">"</span><span class="s2">TO SPEAK WITH AN OPERATOR PRESS 0</span><span class="dl">"</span><span class="p">);</span>
    <span class="p">&#125;</span> <span class="c1">// 3</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">==</span> <span class="mi">48</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nf">jQuery</span><span class="p">(</span><span class="dl">"</span><span class="s2">#audio_button</span><span class="dl">"</span><span class="p">).</span><span class="nf">click</span><span class="p">();</span>
    <span class="p">&#125;</span> <span class="c1">// 0</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">==</span> <span class="mi">80</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nf">jQuery</span><span class="p">(</span><span class="dl">"</span><span class="s2">#audio_button</span><span class="dl">"</span><span class="p">).</span><span class="nf">click</span><span class="p">();</span>
    <span class="p">&#125;</span> <span class="c1">// p</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">==</span> <span class="mi">83</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nf">jQuery</span><span class="p">(</span><span class="dl">"</span><span class="s2">#audio_button</span><span class="dl">"</span><span class="p">).</span><span class="nf">click</span><span class="p">();</span>
    <span class="p">&#125;</span> <span class="c1">// s</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">==</span> <span class="mi">27</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nf">jQuery</span><span class="p">(</span><span class="dl">"</span><span class="s2">#copzGonnaCloseItDown</span><span class="dl">"</span><span class="p">).</span><span class="nf">click</span><span class="p">();</span>
    <span class="p">&#125;</span> <span class="c1">//27 esc</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">==</span> <span class="mi">39</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nf">jQuery</span><span class="p">(</span><span class="dl">"</span><span class="s2">.nav-previous &gt; a</span><span class="dl">"</span><span class="p">).</span><span class="nf">click</span><span class="p">();</span>
    <span class="p">&#125;</span> <span class="c1">//right arrow</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">==</span> <span class="mi">37</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nf">jQuery</span><span class="p">(</span><span class="dl">"</span><span class="s2">.nav-next &gt; a</span><span class="dl">"</span><span class="p">).</span><span class="nf">click</span><span class="p">();</span>
    <span class="p">&#125;</span> <span class="c1">//left arrow</span>
  <span class="p">&#125;);</span>
<span class="p">&#125;);</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/BxJ6P/2/">original jsfiddle post</a></p>
