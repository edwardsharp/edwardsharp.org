---
title: "React"
date: "2020-04-21T04:55:42.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css","javascript","react"]
permalink: "/post/jsfiddle-wjosmxyg/"
source_id: "wjosmxyg"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/wjosmxyg/"
source_revision: 12
---
<iframe class="code-demo" src="{{ '/content/media/2020/2020-04-21-jsfiddle-wjosmxyg-demo.html' | relative_url }}" title="React" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"app"</span><span class="nt">&gt;&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#666</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">20px</span><span class="p">;</span>
  <span class="nl">font-family</span><span class="p">:</span> <span class="n">sans-serrif</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">2em</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">white</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nt">button</span> <span class="p">&#123;</span>
  <span class="nl">margin-left</span><span class="p">:</span> <span class="m">1em</span><span class="p">;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#000</span><span class="p">;</span>
  <span class="nl">border-color</span><span class="p">:</span> <span class="nx">#000</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">white</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">1em</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nt">button</span><span class="nd">:hover</span> <span class="p">&#123;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#eeddee</span><span class="p">;</span>
  <span class="nl">border</span><span class="p">:</span> <span class="nb">inset</span> <span class="m">1px</span> <span class="nx">#eeddee</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="kd">function</span> <span class="nf">HelloWorld</span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="p">[</span><span class="nx">counter</span><span class="p">,</span> <span class="nx">setCounter</span><span class="p">]</span> <span class="o">=</span> <span class="nx">React</span><span class="p">.</span><span class="nf">useState</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span>

  <span class="kd">const</span> <span class="nx">increment</span> <span class="o">=</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">&#123;</span>
    <span class="nf">setCounter</span><span class="p">((</span><span class="nx">oldVal</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="nx">oldVal</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span>
    <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">counter was</span><span class="dl">"</span><span class="p">,</span> <span class="nx">counter</span><span class="p">);</span>
  <span class="p">&#125;;</span>

  <span class="k">return </span><span class="p">(</span>
    <span class="o">&lt;</span><span class="nx">div</span><span class="o">&gt;</span>
      <span class="p">&#123;</span><span class="nx">counter</span><span class="p">&#125;</span>
      <span class="o">&lt;</span><span class="nx">button</span> <span class="nx">onClick</span><span class="o">=</span><span class="p">&#123;</span><span class="nx">increment</span><span class="p">&#125;</span><span class="o">&gt;</span><span class="nx">increment</span><span class="o">&lt;</span><span class="sr">/button</span><span class="err">&gt;
</span>    <span class="o">&lt;</span><span class="sr">/div</span><span class="err">&gt;
</span>  <span class="p">);</span>
<span class="p">&#125;</span>

<span class="nx">ReactDOM</span><span class="p">.</span><span class="nf">render</span><span class="p">(</span><span class="o">&lt;</span><span class="nx">HelloWorld</span> <span class="o">/&gt;</span><span class="p">,</span> <span class="nb">document</span><span class="p">.</span><span class="nf">querySelector</span><span class="p">(</span><span class="dl">"</span><span class="s2">#app</span><span class="dl">"</span><span class="p">));</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/wjosmxyg/">original jsfiddle post</a></p>
