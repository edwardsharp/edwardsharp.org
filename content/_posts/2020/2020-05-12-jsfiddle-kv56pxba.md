---
title: "jsfiddle / kv56pxba"
date: "2020-05-12T16:40:15.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","javascript"]
permalink: "/post/jsfiddle-kv56pxba/"
source_id: "kv56pxba"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/kv56pxba/6/"
source_revision: 6
---
<iframe class="code-demo" src="{{ '/content/media/2020/2020-05-12-jsfiddle-kv56pxba-demo.html' | relative_url }}" title="jsfiddle / kv56pxba" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"test"</span><span class="nt">&gt;&lt;/div&gt;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="p">(</span><span class="k">async</span> <span class="kd">function</span> <span class="nf">main</span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="kd">const</span> <span class="nx">data</span> <span class="o">=</span> <span class="k">await</span> <span class="nf">fetch</span><span class="p">(</span><span class="dl">"</span><span class="s2">http://echo.jsontest.com/foo/bar/baz/beep</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">then</span><span class="p">((</span><span class="nx">res</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="nx">res</span><span class="p">.</span><span class="nf">json</span><span class="p">())</span>
    <span class="p">.</span><span class="k">catch</span><span class="p">((</span><span class="nx">err</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="nx">console</span><span class="p">.</span><span class="nf">error</span><span class="p">(</span><span class="nx">err</span><span class="p">));</span>

  <span class="kd">const</span> <span class="nx">test</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">test</span><span class="dl">"</span><span class="p">);</span>

  <span class="nx">test</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">foo</span><span class="p">;</span>
<span class="p">&#125;)();</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/kv56pxba/6/">original jsfiddle post</a></p>
