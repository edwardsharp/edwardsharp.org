---
title: "file api thing"
date: "2017-04-13T12:28:50.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css","javascript"]
permalink: "/post/jsfiddle-o2ysoqLe/"
source_id: "o2ysoqLe"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/o2ysoqLe/"
source_revision: 0
---
<iframe class="code-demo" src="{{ '/content/media/2017/2017-04-13-jsfiddle-o2ysoqLe-demo.html' | relative_url }}" title="file api thing" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>js for drag &amp; drop file upload with FileApi</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"holder"</span><span class="nt">&gt;</span>upload shit!<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;p</span> <span class="na">id=</span><span class="s">"status"</span><span class="nt">&gt;</span>File API <span class="ni">&amp;nbsp;</span> FileReader API not supported, sorry! :(<span class="nt">&lt;/p&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nf">#holder</span> <span class="p">&#123;</span>
  <span class="nl">border</span><span class="p">:</span> <span class="m">10px</span> <span class="nb">dashed</span> <span class="nx">#ccc</span><span class="p">;</span>
  <span class="nl">min-width</span><span class="p">:</span> <span class="m">300px</span><span class="p">;</span>
  <span class="nl">max-width</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">150px</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">20px</span> <span class="nb">auto</span><span class="p">;</span>
  <span class="nl">padding-top</span><span class="p">:</span> <span class="m">0.5em</span><span class="p">;</span>
  <span class="nl">text-align</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">3em</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#holder</span><span class="nc">.hover</span> <span class="p">&#123;</span>
  <span class="nl">border</span><span class="p">:</span> <span class="m">10px</span> <span class="nb">dashed</span> <span class="nx">#333</span><span class="p">;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">white</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="kd">var</span> <span class="nx">holder</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">holder</span><span class="dl">"</span><span class="p">),</span>
  <span class="nx">state</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">status</span><span class="dl">"</span><span class="p">);</span>

<span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nb">window</span><span class="p">.</span><span class="nx">FileReader</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">undefined</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">state</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">fail</span><span class="dl">"</span><span class="p">;</span>
<span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
  <span class="nx">state</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">success</span><span class="dl">"</span><span class="p">;</span>
  <span class="nx">state</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="dl">""</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nx">holder</span><span class="p">.</span><span class="nx">ondragover</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="k">this</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">hover</span><span class="dl">"</span><span class="p">;</span>
  <span class="k">this</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">drop here!</span><span class="dl">"</span><span class="p">;</span>
  <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
<span class="p">&#125;;</span>
<span class="nx">holder</span><span class="p">.</span><span class="nx">ondragend</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="k">this</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="dl">""</span><span class="p">;</span>
  <span class="k">this</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">upload shit!</span><span class="dl">"</span><span class="p">;</span>
  <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
<span class="p">&#125;;</span>
<span class="nx">holder</span><span class="p">.</span><span class="nx">ondrop</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="k">this</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="dl">""</span><span class="p">;</span>
  <span class="k">this</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="dl">""</span><span class="p">;</span>
  <span class="nx">e</span><span class="p">.</span><span class="nf">preventDefault</span><span class="p">();</span>

  <span class="kd">var</span> <span class="nx">file</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">dataTransfer</span><span class="p">.</span><span class="nx">files</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span>
    <span class="nx">reader</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">FileReader</span><span class="p">();</span>
  <span class="nx">reader</span><span class="p">.</span><span class="nx">onload</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">);</span>
    <span class="nx">holder</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">background</span> <span class="o">=</span>
      <span class="dl">"</span><span class="s2">url(</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">result</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">) no-repeat center</span><span class="dl">"</span><span class="p">;</span>
  <span class="p">&#125;;</span>
  <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="nx">file</span><span class="p">);</span>
  <span class="nx">reader</span><span class="p">.</span><span class="nf">readAsDataURL</span><span class="p">(</span><span class="nx">file</span><span class="p">);</span>

  <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
<span class="p">&#125;;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/o2ysoqLe/">original jsfiddle post</a></p>
