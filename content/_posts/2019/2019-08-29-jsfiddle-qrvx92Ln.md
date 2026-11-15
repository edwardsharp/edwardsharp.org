---
title: "these chainz of promise"
date: "2019-08-29T15:26:08.000Z"
date_precision: "second"
tags: ["jsfiddle","code","css","javascript"]
permalink: "/post/jsfiddle-qrvx92Ln/"
source_id: "qrvx92Ln"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/qrvx92Ln/10/"
source_revision: 10
---
<iframe class="code-demo" src="{{ '/content/media/2019/2019-08-29-jsfiddle-qrvx92Ln-demo.html' | relative_url }}" title="these chainz of promise" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>come to me, cover me, hold me
together we'll break these chains of promise
don't give up, don't give up
together with me and my baby
break the chains of promise</p>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">white</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">black</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="nx">log</span> <span class="o">=</span> <span class="p">(</span><span class="nx">msg</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">&#123;</span>
  <span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">+=</span> <span class="s2">`&lt;pre&gt;</span><span class="p">$&#123;</span><span class="nx">msg</span><span class="p">&#125;</span><span class="s2">&lt;/pre&gt;`</span><span class="p">;</span>
  <span class="k">return</span> <span class="nx">msg</span><span class="p">;</span>
<span class="p">&#125;;</span>

<span class="nx">aPromise</span> <span class="o">=</span> <span class="p">(</span><span class="nx">timeout</span><span class="p">,</span> <span class="nx">fail</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">&#123;</span>
  <span class="k">return</span> <span class="k">new</span> <span class="nc">Promise</span><span class="p">((</span><span class="nx">resolve</span><span class="p">,</span> <span class="nx">reject</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">&#123;</span>
    <span class="nf">setTimeout</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">fail</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nf">reject</span><span class="p">();</span>
      <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
        <span class="nf">resolve</span><span class="p">();</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;,</span> <span class="nx">timeout</span><span class="p">);</span>
  <span class="p">&#125;);</span>
<span class="p">&#125;;</span>

<span class="nx">fetchStuff</span> <span class="o">=</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">&#123;</span>
  <span class="k">return</span> <span class="k">new</span> <span class="nc">Promise</span><span class="p">((</span><span class="nx">resolve</span><span class="p">,</span> <span class="nx">reject</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">&#123;</span>
    <span class="nb">Promise</span><span class="p">.</span><span class="nf">all</span><span class="p">([</span>
      <span class="nf">aPromise</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="kc">false</span><span class="p">).</span><span class="nf">then</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="nf">log</span><span class="p">(</span><span class="mi">1</span><span class="p">)),</span>
      <span class="nf">aPromise</span><span class="p">(</span><span class="mi">50</span><span class="p">,</span> <span class="kc">false</span><span class="p">).</span><span class="nf">then</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="nf">log</span><span class="p">(</span><span class="mi">2</span><span class="p">)),</span>
      <span class="kc">false</span><span class="p">,</span>
      <span class="nf">aPromise</span><span class="p">(</span><span class="mi">100</span><span class="p">,</span> <span class="kc">true</span><span class="p">)</span>
        <span class="p">.</span><span class="nf">then</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="nf">log</span><span class="p">(</span><span class="mi">3</span><span class="p">))</span>
        <span class="p">.</span><span class="k">catch</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">WARN! 3 caught</span><span class="dl">"</span><span class="p">)),</span>
      <span class="nf">aPromise</span><span class="p">(</span><span class="mi">150</span><span class="p">,</span> <span class="kc">false</span><span class="p">).</span><span class="nf">then</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="nf">log</span><span class="p">(</span><span class="mi">4</span><span class="p">)),</span>
    <span class="p">]).</span><span class="nf">then</span><span class="p">((</span><span class="nx">stuff</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="nf">resolve</span><span class="p">(</span><span class="nx">stuff</span><span class="p">));</span>
  <span class="p">&#125;);</span>
<span class="p">&#125;;</span>

<span class="nf">fetchStuff</span><span class="p">()</span>
  <span class="p">.</span><span class="nf">then</span><span class="p">((</span><span class="nx">stuff</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">fetchd stuff: </span><span class="dl">"</span> <span class="o">+</span> <span class="nx">stuff</span><span class="p">))</span>
  <span class="p">.</span><span class="k">catch</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">WARN! fetchStuff caught!</span><span class="dl">"</span><span class="p">));</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/qrvx92Ln/10/">original jsfiddle post</a></p>
