---
title: "animated svg dividers"
description: "thin svg lines slide into place at different speeds, making a shifting banner divider."
date: "2019-03-19T02:47:58.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css","svg","animation"]
permalink: "/post/jsfiddle-v8k4wbjn/"
source_id: "v8k4wbjn"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/v8k4wbjn/30/"
source_revision: 30
---
<iframe class="code-demo" src="{{ '/content/media/2019/2019-03-19-jsfiddle-v8k4wbjn-demo.html' | relative_url }}" title="jsfiddle / v8k4wbjn" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;svg</span> <span class="na">class=</span><span class="s">"project-banner-separator"</span> <span class="na">viewBox=</span><span class="s">"0 0 440 35"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;line</span> <span class="na">x1=</span><span class="s">"0"</span> <span class="na">y1=</span><span class="s">"-10"</span> <span class="na">x2=</span><span class="s">"440"</span> <span class="na">y2=</span><span class="s">"-10"</span> <span class="na">stroke=</span><span class="s">"white"</span> <span class="na">stroke-width=</span><span class="s">"0.5"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;animate</span> <span class="na">attributeName=</span><span class="s">"y1"</span> <span class="na">dur=</span><span class="s">"100ms"</span> <span class="na">to=</span><span class="s">"30"</span> <span class="na">fill=</span><span class="s">"freeze"</span> <span class="nt">/&gt;</span>
    <span class="nt">&lt;animate</span> <span class="na">attributeName=</span><span class="s">"y2"</span> <span class="na">dur=</span><span class="s">"200ms"</span> <span class="na">to=</span><span class="s">"5"</span> <span class="na">fill=</span><span class="s">"freeze"</span> <span class="nt">/&gt;</span>
  <span class="nt">&lt;/line&gt;</span>
  <span class="nt">&lt;line</span> <span class="na">x1=</span><span class="s">"0"</span> <span class="na">y1=</span><span class="s">"-10"</span> <span class="na">x2=</span><span class="s">"440"</span> <span class="na">y2=</span><span class="s">"-10"</span> <span class="na">stroke=</span><span class="s">"white"</span> <span class="na">stroke-width=</span><span class="s">"0.5"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;animate</span> <span class="na">attributeName=</span><span class="s">"y1"</span> <span class="na">dur=</span><span class="s">"300ms"</span> <span class="na">to=</span><span class="s">"25"</span> <span class="na">fill=</span><span class="s">"freeze"</span> <span class="nt">/&gt;</span>
    <span class="nt">&lt;animate</span> <span class="na">attributeName=</span><span class="s">"y2"</span> <span class="na">dur=</span><span class="s">"400ms"</span> <span class="na">to=</span><span class="s">"20"</span> <span class="na">fill=</span><span class="s">"freeze"</span> <span class="nt">/&gt;</span>
  <span class="nt">&lt;/line&gt;</span>
  <span class="nt">&lt;line</span> <span class="na">x1=</span><span class="s">"0"</span> <span class="na">y1=</span><span class="s">"-10"</span> <span class="na">x2=</span><span class="s">"440"</span> <span class="na">y2=</span><span class="s">"-10"</span> <span class="na">stroke=</span><span class="s">"white"</span> <span class="na">stroke-width=</span><span class="s">"0.5"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;animate</span> <span class="na">attributeName=</span><span class="s">"y1"</span> <span class="na">dur=</span><span class="s">"500ms"</span> <span class="na">to=</span><span class="s">"5"</span> <span class="na">fill=</span><span class="s">"freeze"</span> <span class="nt">/&gt;</span>
    <span class="nt">&lt;animate</span> <span class="na">attributeName=</span><span class="s">"y2"</span> <span class="na">dur=</span><span class="s">"600ms"</span> <span class="na">to=</span><span class="s">"35"</span> <span class="na">fill=</span><span class="s">"freeze"</span> <span class="nt">/&gt;</span>
  <span class="nt">&lt;/line&gt;</span>
<span class="nt">&lt;/svg&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">margin-top</span><span class="p">:</span> <span class="m">50px</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">black</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="c">/* .project-banner-separator line&#123;
  animation: slidein 2s ease-in;
&#125;
.project-banner-separator:nth-child(2)&#123;
  animation-delay: 0.3s;
&#125;
.project-banner-separator:nth-child(3)&#123;
  animation-delay: 0.5s;
&#125;
@keyframes slidein &#123;
  from &#123;
    transform: translateY(-200px);
  &#125;
  
  to &#123;
    transform: translateY(0);
  &#125;
&#125; */</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/v8k4wbjn/30/">original jsfiddle post</a></p>
