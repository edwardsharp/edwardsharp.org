---
title: "slim.js web component"
description: "a minimal slim.js custom element that renders a short greeting from its own template."
date: "2018-07-03T17:31:41.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","javascript"]
permalink: "/post/jsfiddle-j78a5yre/"
source_id: "j78a5yre"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/j78a5yre/2/"
source_revision: 2
---
<iframe class="code-demo" src="{{ '/content/media/2018/2018-07-03-jsfiddle-j78a5yre-demo.html' | relative_url }}" title="slim.js web component" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://cdnjs.cloudflare.com/ajax/libs/slim.js/3.3.0/Slim.min.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;my-tag&gt;&lt;/my-tag&gt;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="nx">Slim</span><span class="p">.</span><span class="nf">tag</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">my-tag</span><span class="dl">"</span><span class="p">,</span>
  <span class="s2">`&lt;div&gt;Hello, i am a custom element&lt;/div&gt;`</span><span class="p">,</span>
  <span class="kd">class</span> <span class="nc">MyTag</span> <span class="kd">extends</span> <span class="nc">Slim</span> <span class="p">&#123;</span>
    <span class="c1">// your code here</span>
  <span class="p">&#125;,</span>
<span class="p">);</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/j78a5yre/2/">original jsfiddle post</a></p>
