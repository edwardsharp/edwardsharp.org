---
title: "outlined text"
description: "large letters lose their fill and keep a thin white outline against black."
date: "2016-10-22T08:21:00.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css"]
permalink: "/post/jsfiddle-a8greenx/"
source_id: "a8greenx"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/a8greenx/"
source_revision: 3
---
<iframe class="code-demo" src="{{ '/content/media/2016/2016-10-22-jsfiddle-a8greenx-demo.html' | relative_url }}" title="jsfiddle / a8greenx" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"outline"</span><span class="nt">&gt;</span>FOOBAR<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">black</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.outline</span> <span class="p">&#123;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">5em</span><span class="p">;</span>
  <span class="nl">font-family</span><span class="p">:</span> <span class="n">avenir</span><span class="p">;</span>
  <span class="nl">font-weight</span><span class="p">:</span> <span class="nb">bold</span><span class="p">;</span>
  <span class="nl">-webkit-text-fill-color</span><span class="p">:</span> <span class="nb">transparent</span><span class="p">;</span>
  <span class="nl">-webkit-text-stroke-width</span><span class="p">:</span> <span class="m">2px</span><span class="p">;</span>
  <span class="nl">-webkit-text-stroke-color</span><span class="p">:</span> <span class="nx">white</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/a8greenx/">original jsfiddle post</a></p>
