---
title: "jsfiddle / kx2r1yf6"
date: "2020-08-07T03:35:41.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css"]
permalink: "/post/jsfiddle-kx2r1yf6/"
source_id: "kx2r1yf6"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/kx2r1yf6/12/"
source_revision: 12
---
<iframe class="code-demo" src="{{ '/content/media/2020/2020-08-07-jsfiddle-kx2r1yf6-demo.html' | relative_url }}" title="jsfiddle / kx2r1yf6" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;label</span> <span class="na">id=</span><span class="s">"exactMatchLabel"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"checkbox"</span> <span class="nt">/&gt;</span>
  <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"check"</span><span class="nt">&gt;&lt;/span&gt;</span>
  <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"label"</span><span class="nt">&gt;</span>Checkbox label text<span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;/label&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nf">#exactMatchLabel</span> <span class="p">&#123;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">flex</span><span class="p">;</span>
  <span class="nl">align-items</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#exactMatchLabel</span> <span class="nt">input</span> <span class="p">&#123;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#exactMatchLabel</span> <span class="nt">span</span><span class="nc">.check</span> <span class="p">&#123;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">30px</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">30px</span><span class="p">;</span>
  <span class="nl">border</span><span class="p">:</span> <span class="m">1px</span> <span class="nb">solid</span> <span class="n">grey</span><span class="p">;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">inline-block</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">relative</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#exactMatchLabel</span> <span class="o">[</span><span class="nt">type</span><span class="o">=</span><span class="s1">"checkbox"</span><span class="o">]</span><span class="nd">:checked</span> <span class="o">+</span> <span class="nt">span</span><span class="nc">.check</span><span class="nd">:before</span> <span class="p">&#123;</span>
  <span class="nl">content</span><span class="p">:</span> <span class="s1">"\00d7"</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">-14px</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">2px</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">45px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#exactMatchLabel</span> <span class="nt">span</span><span class="nc">.label</span> <span class="p">&#123;</span>
  <span class="nl">margin-left</span><span class="p">:</span> <span class="m">0.5em</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/kx2r1yf6/12/">original jsfiddle post</a></p>
