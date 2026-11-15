---
title: "tubeslide"
date: "2015-12-31T10:46:55.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-q3jq6ztm/"
source_id: "q3jq6ztm"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/q3jq6ztm/"
source_revision: 7
---
<iframe class="code-demo" src="{{ '/content/media/2015/2015-12-31-jsfiddle-q3jq6ztm-demo.html' | relative_url }}" title="tubeslide" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"//cdn.jsdelivr.net/jquery.scrollto/2.1.2/jquery.scrollTo.min.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;button</span> <span class="na">id=</span><span class="s">"new_elem"</span><span class="nt">&gt;</span>new elem<span class="nt">&lt;/button&gt;</span>
<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"parent"</span> <span class="na">class=</span><span class="s">"parent"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"list"</span> <span class="na">class=</span><span class="s">"list"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"item"</span><span class="nt">&gt;</span>A<span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"item"</span><span class="nt">&gt;</span>B<span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"item"</span><span class="nt">&gt;</span>C<span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"item"</span><span class="nt">&gt;</span>D<span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"item"</span><span class="nt">&gt;</span>E<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nc">.parent</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.list</span> <span class="p">&#123;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#d0d0d0</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">white</span><span class="p">;</span>
  <span class="nl">white-space</span><span class="p">:</span> <span class="nb">nowrap</span><span class="p">;</span>
  <span class="nl">overflow-x</span><span class="p">:</span> <span class="nb">scroll</span><span class="p">;</span>
  <span class="nl">overflow-y</span><span class="p">:</span> <span class="nb">hidden</span><span class="p">;</span>
  <span class="c">/*text-align:left;*/</span>
<span class="p">&#125;</span>

<span class="nc">.item</span> <span class="p">&#123;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#404040</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">270px</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">320px</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span> <span class="m">4px</span> <span class="m">8px</span> <span class="m">4px</span><span class="p">;</span>
  <span class="nl">cursor</span><span class="p">:</span> <span class="nb">pointer</span><span class="p">;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">inline-block</span><span class="p">;</span>
  <span class="c">/*float:left;*/</span>
  <span class="c">/*float:none;*/</span>
  <span class="c">/*clear:both;*/</span>
<span class="p">&#125;</span>

<span class="nc">.placeholder</span> <span class="p">&#123;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">270px</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">60px</span><span class="p">;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">inline-block</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">10px</span><span class="p">;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">yellow</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="kd">function</span> <span class="nf">nextLetter</span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nx">s</span> <span class="o">=</span> <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#list .item</span><span class="dl">"</span><span class="p">).</span><span class="nf">last</span><span class="p">().</span><span class="nf">html</span><span class="p">();</span>
  <span class="k">return</span> <span class="nx">s</span><span class="p">.</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/</span><span class="se">([</span><span class="sr">a-zA-Z</span><span class="se">])[^</span><span class="sr">a-zA-Z</span><span class="se">]</span><span class="sr">*$/</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">a</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">c</span> <span class="o">=</span> <span class="nx">a</span><span class="p">.</span><span class="nf">charCodeAt</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span>
    <span class="k">switch </span><span class="p">(</span><span class="nx">c</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">case</span> <span class="mi">90</span><span class="p">:</span>
        <span class="k">return</span> <span class="dl">"</span><span class="s2">A</span><span class="dl">"</span><span class="p">;</span>
      <span class="k">case</span> <span class="mi">122</span><span class="p">:</span>
        <span class="k">return</span> <span class="dl">"</span><span class="s2">a</span><span class="dl">"</span><span class="p">;</span>
      <span class="nl">default</span><span class="p">:</span>
        <span class="k">return</span> <span class="nb">String</span><span class="p">.</span><span class="nf">fromCharCode</span><span class="p">(</span><span class="o">++</span><span class="nx">c</span><span class="p">);</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;);</span>
<span class="p">&#125;</span>

<span class="nf">$</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#list</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">disableSelection</span><span class="p">()</span>
    <span class="p">.</span><span class="nf">sortable</span><span class="p">(&#123;</span>
      <span class="na">scroll</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
      <span class="na">placeholder</span><span class="p">:</span> <span class="dl">"</span><span class="s2">placeholder</span><span class="dl">"</span><span class="p">,</span>
      <span class="na">start</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">ui</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">ui</span><span class="p">.</span><span class="nx">placeholder</span><span class="p">.</span><span class="nf">html</span><span class="p">(</span><span class="dl">"</span><span class="s2">&amp;nbsp;</span><span class="dl">"</span><span class="p">);</span>
      <span class="p">&#125;,</span>
      <span class="na">axis</span><span class="p">:</span> <span class="dl">"</span><span class="s2">x</span><span class="dl">"</span><span class="p">,</span>
    <span class="p">&#125;);</span>

  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#new_elem</span><span class="dl">"</span><span class="p">).</span><span class="nf">click</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">&lt;div/&gt;</span><span class="dl">"</span><span class="p">,</span> <span class="p">&#123;</span>
      <span class="na">class</span><span class="p">:</span> <span class="dl">"</span><span class="s2">item</span><span class="dl">"</span><span class="p">,</span>
      <span class="na">text</span><span class="p">:</span> <span class="nf">nextLetter</span><span class="p">(),</span>
    <span class="p">&#125;).</span><span class="nf">appendTo</span><span class="p">(</span><span class="dl">"</span><span class="s2">#list</span><span class="dl">"</span><span class="p">);</span>
    <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#list</span><span class="dl">"</span><span class="p">).</span><span class="nf">sortable</span><span class="p">(</span><span class="dl">"</span><span class="s2">refresh</span><span class="dl">"</span><span class="p">);</span>
    <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#list</span><span class="dl">"</span><span class="p">).</span><span class="nf">scrollTo</span><span class="p">(</span><span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#list .item</span><span class="dl">"</span><span class="p">).</span><span class="nf">last</span><span class="p">(),</span> <span class="mi">800</span><span class="p">);</span>
  <span class="p">&#125;);</span>
<span class="p">&#125;);</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/q3jq6ztm/">original jsfiddle post</a></p>
