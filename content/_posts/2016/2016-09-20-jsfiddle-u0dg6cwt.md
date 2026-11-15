---
title: "a little beta-label animation"
description: "a beta label flips into place beside a site name when the page is marked as loaded."
date: "2016-09-20T07:23:26.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-u0dg6cwt/"
source_id: "u0dg6cwt"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/u0dg6cwt/1/"
source_revision: 1
---
<iframe class="code-demo" src="{{ '/content/media/2016/2016-09-20-jsfiddle-u0dg6cwt-demo.html' | relative_url }}" title="jsfiddle / u0dg6cwt" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"navbar-header"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;small</span> <span class="na">id=</span><span class="s">"sched-beta"</span><span class="nt">&gt;&lt;i&gt;</span>beta<span class="nt">&lt;/i&gt;&lt;/small&gt;</span>
  <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"navbar-brand"</span> <span class="na">href=</span><span class="s">"/"</span><span class="nt">&gt;</span>Sched<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nf">#sched-beta</span> <span class="p">&#123;</span>
  <span class="nl">float</span><span class="p">:</span> <span class="nb">left</span><span class="p">;</span>
  <span class="nl">margin-top</span><span class="p">:</span> <span class="m">25px</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">relative</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">56px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#sched-beta</span> <span class="p">&#123;</span>
  <span class="nl">-webkit-transform-origin</span><span class="p">:</span> <span class="m">50%</span> <span class="m">0%</span><span class="p">;</span>
  <span class="nl">-o-transform-origin</span><span class="p">:</span> <span class="m">50%</span> <span class="m">0%</span><span class="p">;</span>
  <span class="nl">transform-origin</span><span class="p">:</span> <span class="m">50%</span> <span class="m">0%</span><span class="p">;</span>
  <span class="nl">-webkit-transform</span><span class="p">:</span> <span class="nf">perspective</span><span class="p">(</span><span class="m">350px</span><span class="p">)</span> <span class="nf">rotateX</span><span class="p">(</span><span class="m">-90deg</span><span class="p">);</span>
  <span class="nl">-o-transform</span><span class="p">:</span> <span class="nf">perspective</span><span class="p">(</span><span class="m">350px</span><span class="p">)</span> <span class="nf">rotateX</span><span class="p">(</span><span class="m">-90deg</span><span class="p">);</span>
  <span class="nl">transform</span><span class="p">:</span> <span class="nf">perspective</span><span class="p">(</span><span class="m">350px</span><span class="p">)</span> <span class="nf">rotateX</span><span class="p">(</span><span class="m">-90deg</span><span class="p">);</span>
<span class="p">&#125;</span>

<span class="nc">.loaded</span> <span class="nf">#sched-beta</span> <span class="p">&#123;</span>
  <span class="nl">-webkit-transform</span><span class="p">:</span> <span class="nf">perspective</span><span class="p">(</span><span class="m">350px</span><span class="p">)</span> <span class="nf">rotateX</span><span class="p">(</span><span class="m">0deg</span><span class="p">);</span>
  <span class="nl">-o-transform</span><span class="p">:</span> <span class="nf">perspective</span><span class="p">(</span><span class="m">350px</span><span class="p">)</span> <span class="nf">rotateX</span><span class="p">(</span><span class="m">0deg</span><span class="p">);</span>
  <span class="nl">transform</span><span class="p">:</span> <span class="nf">perspective</span><span class="p">(</span><span class="m">350px</span><span class="p">)</span> <span class="nf">rotateX</span><span class="p">(</span><span class="m">0deg</span><span class="p">);</span>
  <span class="nl">-webkit-transition</span><span class="p">:</span> <span class="m">0.5s</span> <span class="nb">linear</span> <span class="m">0.5s</span><span class="p">;</span>
  <span class="nl">-o-transition</span><span class="p">:</span> <span class="m">0.5s</span> <span class="nb">linear</span> <span class="m">0.5s</span><span class="p">;</span>
  <span class="nl">transition</span><span class="p">:</span> <span class="m">0.5s</span> <span class="nb">linear</span> <span class="m">0.5s</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">body</span><span class="dl">"</span><span class="p">).</span><span class="nf">addClass</span><span class="p">(</span><span class="dl">"</span><span class="s2">loaded</span><span class="dl">"</span><span class="p">);</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/u0dg6cwt/1/">original jsfiddle post</a></p>
