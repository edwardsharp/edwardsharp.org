---
title: "css hexx"
date: "2014-01-06T17:53:02.000Z"
date_precision: "second"
tags: ["jsfiddle","code","mootools","html","css"]
permalink: "/post/jsfiddle-SYSyN/"
source_id: "SYSyN"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/SYSyN/11/"
source_revision: 11
---
<iframe class="code-demo" src="{{ '/content/media/2014/2014-01-06-jsfiddle-SYSyN-demo.html' | relative_url }}" title="css hexx" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>a neat trick</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hex bump"</span><span class="nt">&gt;</span>0123456789012 3456789012345 6789012345678<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nc">.hex</span><span class="nd">:before</span> <span class="p">&#123;</span>
  <span class="nl">content</span><span class="p">:</span> <span class="s1">" "</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">border-bottom</span><span class="p">:</span> <span class="m">30px</span> <span class="nb">solid</span> <span class="nx">#ff6600</span><span class="p">;</span>
  <span class="nl">border-left</span><span class="p">:</span> <span class="m">52px</span> <span class="nb">solid</span> <span class="nb">transparent</span><span class="p">;</span>
  <span class="nl">border-right</span><span class="p">:</span> <span class="m">52px</span> <span class="nb">solid</span> <span class="nb">transparent</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">-30px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.hex</span> <span class="p">&#123;</span>
  <span class="nl">margin-top</span><span class="p">:</span> <span class="m">30px</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">102px</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">66px</span><span class="p">;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#ff6600</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">relative</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.hex</span><span class="nd">:after</span> <span class="p">&#123;</span>
  <span class="nl">content</span><span class="p">:</span> <span class="s1">""</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">bottom</span><span class="p">:</span> <span class="m">-30px</span><span class="p">;</span>
  <span class="nl">border-top</span><span class="p">:</span> <span class="m">30px</span> <span class="nb">solid</span> <span class="nx">#ff6600</span><span class="p">;</span>
  <span class="nl">border-left</span><span class="p">:</span> <span class="m">52px</span> <span class="nb">solid</span> <span class="nb">transparent</span><span class="p">;</span>
  <span class="nl">border-right</span><span class="p">:</span> <span class="m">52px</span> <span class="nb">solid</span> <span class="nb">transparent</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.bump</span> <span class="p">&#123;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">66px</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/SYSyN/11/">original jsfiddle post</a></p>
