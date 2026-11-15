---
title: "finding an object with reduce"
description: "a small array-reduce experiment that picks out an object with a matching property."
date: "2019-08-27T18:34:45.000Z"
date_precision: "second"
tags: ["jsfiddle","code","javascript"]
permalink: "/post/jsfiddle-g86Lov9q/"
source_id: "g86Lov9q"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/g86Lov9q/1/"
source_revision: 1
---
<iframe class="code-demo" src="{{ '/content/media/2019/2019-08-27-jsfiddle-g86Lov9q-demo.html' | relative_url }}" title="jsfiddle / g86Lov9q" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="nx">log</span> <span class="o">=</span> <span class="p">(</span><span class="nx">msg</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">&#123;</span>
  <span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">+=</span> <span class="s2">`&lt;pre&gt;</span><span class="p">$&#123;</span><span class="nx">msg</span><span class="p">&#125;</span><span class="s2">&lt;/pre&gt;`</span><span class="p">;</span>
<span class="p">&#125;;</span>

<span class="nx">foo</span> <span class="o">=</span> <span class="p">[</span><span class="dl">"</span><span class="s2">zomg</span><span class="dl">"</span><span class="p">,</span> <span class="mi">666</span><span class="p">,</span> <span class="p">&#123;</span> <span class="na">zork</span><span class="p">:</span> <span class="dl">"</span><span class="s2">beep</span><span class="dl">"</span> <span class="p">&#125;];</span>

<span class="nx">out</span> <span class="o">=</span> <span class="nx">foo</span><span class="p">.</span><span class="nf">reduce</span><span class="p">((</span><span class="nx">acc</span><span class="p">,</span> <span class="nx">val</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">&#123;</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">val</span><span class="p">.</span><span class="nx">zork</span> <span class="o">&amp;&amp;</span> <span class="nx">val</span><span class="p">.</span><span class="nx">zork</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">beep</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">return</span> <span class="nx">val</span><span class="p">;</span>
  <span class="p">&#125;</span>
<span class="p">&#125;);</span>
<span class="nf">log</span><span class="p">(</span><span class="nx">out</span><span class="p">);</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/g86Lov9q/1/">original jsfiddle post</a></p>
