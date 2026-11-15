---
title: "a key-icon login button"
description: "a large key icon and stacked text share a css-styled login button."
date: "2013-06-27T19:41:31.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css"]
permalink: "/post/jsfiddle-CRdJa/"
source_id: "CRdJa"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/CRdJa/"
source_revision: 3
---
<iframe class="code-demo" src="{{ '/content/media/2013/2013-06-27-jsfiddle-CRdJa-demo.html' | relative_url }}" title="jsfiddle / CRdJa" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;link</span>
  <span class="na">rel=</span><span class="s">"stylesheet"</span>
  <span class="na">href=</span><span class="s">"http://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css"</span>
<span class="nt">/&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"btn btn-large btn-danger"</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"icon-key icon-3x pull-left way_left"</span><span class="nt">&gt;&lt;/i&gt;</span>
  click to<span class="nt">&lt;br</span> <span class="nt">/&gt;&lt;span</span> <span class="na">class=</span><span class="s">"button_txt_login"</span><span class="nt">&gt;</span>login<span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;/a&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nc">.btn</span> <span class="p">&#123;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">inline-block</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">5px</span> <span class="m">20px</span><span class="p">;</span>
  <span class="nl">margin-bottom</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">15px</span><span class="p">;</span>
  <span class="nl">font-family</span><span class="p">:</span> <span class="n">Arial</span><span class="p">,</span> <span class="n">Helvetica</span><span class="p">,</span> <span class="nb">sans-serif</span><span class="p">;</span>
  <span class="nl">line-height</span><span class="p">:</span> <span class="m">20px</span><span class="p">;</span>
  <span class="nl">text-align</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
  <span class="nl">vertical-align</span><span class="p">:</span> <span class="nb">middle</span><span class="p">;</span>
  <span class="nl">text-transform</span><span class="p">:</span> <span class="nb">uppercase</span><span class="p">;</span>
  <span class="nl">cursor</span><span class="p">:</span> <span class="nb">pointer</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#333333</span><span class="p">;</span>
  <span class="nl">text-shadow</span><span class="p">:</span> <span class="m">0</span> <span class="m">2px</span> <span class="m">2px</span> <span class="nf">rgba</span><span class="p">(</span><span class="m">255</span><span class="p">,</span> <span class="m">255</span><span class="p">,</span> <span class="m">255</span><span class="p">,</span> <span class="m">0.75</span><span class="p">);</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#f5f5f5</span><span class="p">;</span>
  <span class="nl">background-image</span><span class="p">:</span> <span class="o">-</span><span class="n">moz-linear-gradient</span><span class="p">(</span><span class="nb">top</span><span class="p">,</span> <span class="nx">#ffffff</span><span class="p">,</span> <span class="nx">#e6e6e6</span><span class="p">);</span>
  <span class="nl">background-image</span><span class="p">:</span> <span class="o">-</span><span class="n">webkit-gradient</span><span class="p">(</span>
    <span class="nb">linear</span><span class="p">,</span>
    <span class="m">0</span> <span class="m">0</span><span class="p">,</span>
    <span class="m">0</span> <span class="m">100%</span><span class="p">,</span>
    <span class="n">from</span><span class="p">(</span><span class="nx">#ffffff</span><span class="p">),</span>
    <span class="n">to</span><span class="p">(</span><span class="nx">#e6e6e6</span><span class="p">)</span>
  <span class="p">);</span>
  <span class="nl">background-image</span><span class="p">:</span> <span class="o">-</span><span class="n">webkit-linear-gradient</span><span class="p">(</span><span class="nb">top</span><span class="p">,</span> <span class="nx">#ffffff</span><span class="p">,</span> <span class="nx">#e6e6e6</span><span class="p">);</span>
  <span class="nl">background-image</span><span class="p">:</span> <span class="o">-</span><span class="n">o-linear-gradient</span><span class="p">(</span><span class="nb">top</span><span class="p">,</span> <span class="nx">#ffffff</span><span class="p">,</span> <span class="nx">#e6e6e6</span><span class="p">);</span>
  <span class="nl">background-image</span><span class="p">:</span> <span class="nf">linear-gradient</span><span class="p">(</span><span class="n">to</span> <span class="nb">bottom</span><span class="p">,</span> <span class="nx">#ffffff</span><span class="p">,</span> <span class="nx">#e6e6e6</span><span class="p">);</span>
  <span class="nl">background-repeat</span><span class="p">:</span> <span class="nb">repeat-x</span><span class="p">;</span>
  <span class="nl">filter</span><span class="p">:</span> <span class="n">progid</span><span class="p">:</span><span class="n">DXImageTransform</span><span class="p">.</span><span class="n">Microsoft</span><span class="p">.</span><span class="n">gradient</span><span class="p">(</span><span class="n">startColorstr</span><span class="err">=</span><span class="s2">'#ffffffff'</span><span class="p">,</span> <span class="n">endColorstr</span><span class="err">=</span><span class="s2">'#ffe6e6e6'</span><span class="p">,</span> <span class="n">GradientType</span><span class="err">=</span><span class="m">0</span><span class="p">);</span>
  <span class="nl">border-color</span><span class="p">:</span> <span class="nx">#e6e6e6</span> <span class="nx">#e6e6e6</span> <span class="nx">#bfbfbf</span><span class="p">;</span>
  <span class="nl">border-color</span><span class="p">:</span> <span class="nf">rgba</span><span class="p">(</span><span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0.1</span><span class="p">)</span> <span class="nf">rgba</span><span class="p">(</span><span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0.1</span><span class="p">)</span> <span class="nf">rgba</span><span class="p">(</span><span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0.25</span><span class="p">);</span>
  <span class="nl">filter</span><span class="p">:</span> <span class="n">progid</span><span class="p">:</span><span class="n">DXImageTransform</span><span class="p">.</span><span class="n">Microsoft</span><span class="p">.</span><span class="n">gradient</span><span class="p">(</span><span class="n">enabled</span><span class="err">=</span><span class="no">false</span><span class="p">);</span>
  <span class="nl">border</span><span class="p">:</span> <span class="m">1px</span> <span class="nb">solid</span> <span class="nx">#bbbbbb</span><span class="p">;</span>
  <span class="nl">border-bottom-color</span><span class="p">:</span> <span class="nx">#a2a2a2</span><span class="p">;</span>
  <span class="nl">-webkit-border-radius</span><span class="p">:</span> <span class="m">30px</span><span class="p">;</span>
  <span class="nl">-moz-border-radius</span><span class="p">:</span> <span class="m">30px</span><span class="p">;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">30px</span><span class="p">;</span>
  <span class="nl">-webkit-box-shadow</span><span class="p">:</span>
    <span class="nb">inset</span> <span class="m">0</span> <span class="m">1px</span> <span class="m">0</span> <span class="nf">rgba</span><span class="p">(</span><span class="m">255</span><span class="p">,</span> <span class="m">255</span><span class="p">,</span> <span class="m">255</span><span class="p">,</span> <span class="m">0.2</span><span class="p">),</span>
    <span class="m">0</span> <span class="m">1px</span> <span class="m">2px</span> <span class="nf">rgba</span><span class="p">(</span><span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0.05</span><span class="p">);</span>
  <span class="nl">-moz-box-shadow</span><span class="p">:</span>
    <span class="nb">inset</span> <span class="m">0</span> <span class="m">1px</span> <span class="m">0</span> <span class="nf">rgba</span><span class="p">(</span><span class="m">255</span><span class="p">,</span> <span class="m">255</span><span class="p">,</span> <span class="m">255</span><span class="p">,</span> <span class="m">0.2</span><span class="p">),</span>
    <span class="m">0</span> <span class="m">1px</span> <span class="m">2px</span> <span class="nf">rgba</span><span class="p">(</span><span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0.05</span><span class="p">);</span>
  <span class="nl">box-shadow</span><span class="p">:</span>
    <span class="nb">inset</span> <span class="m">0</span> <span class="m">1px</span> <span class="m">0</span> <span class="nf">rgba</span><span class="p">(</span><span class="m">255</span><span class="p">,</span> <span class="m">255</span><span class="p">,</span> <span class="m">255</span><span class="p">,</span> <span class="m">0.2</span><span class="p">),</span>
    <span class="m">0</span> <span class="m">1px</span> <span class="m">2px</span> <span class="nf">rgba</span><span class="p">(</span><span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0.05</span><span class="p">);</span>
<span class="p">&#125;</span>
<span class="nc">.btn</span><span class="nd">:hover</span> <span class="p">&#123;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#818181</span><span class="p">;</span>
  <span class="nl">background-image</span><span class="p">:</span> <span class="o">-</span><span class="n">o-linear-gradient</span><span class="p">(</span><span class="nb">top</span><span class="p">,</span> <span class="nx">#ffffff</span><span class="p">,</span> <span class="nx">#818181</span><span class="p">);</span>
  <span class="nl">background-image</span><span class="p">:</span> <span class="nf">linear-gradient</span><span class="p">(</span><span class="n">to</span> <span class="nb">bottom</span><span class="p">,</span> <span class="nx">#ffffff</span><span class="p">,</span> <span class="nx">#818181</span><span class="p">);</span>
  <span class="nl">background-repeat</span><span class="p">:</span> <span class="nb">repeat-x</span><span class="p">;</span>
  <span class="nl">filter</span><span class="p">:</span> <span class="n">progid</span><span class="p">:</span><span class="n">DXImageTransform</span><span class="p">.</span><span class="n">Microsoft</span><span class="p">.</span><span class="n">gradient</span><span class="p">(</span><span class="n">startColorstr</span><span class="err">=</span><span class="s2">'#ffffffff'</span><span class="p">,</span> <span class="n">endColorstr</span><span class="err">=</span><span class="s2">'#ff818181'</span><span class="p">,</span> <span class="n">GradientType</span><span class="err">=</span><span class="m">0</span><span class="p">);</span>
<span class="p">&#125;</span>
<span class="nc">.way_left</span> <span class="p">&#123;</span>
  <span class="nl">padding-right</span><span class="p">:</span> <span class="m">7px</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.button_txt_login</span> <span class="p">&#123;</span>
  <span class="nl">font-weight</span><span class="p">:</span> <span class="nb">bold</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">1.3em</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nt">a</span> <span class="p">&#123;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#c83025</span><span class="p">;</span>
  <span class="nl">text-decoration</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/CRdJa/">original jsfiddle post</a></p>
