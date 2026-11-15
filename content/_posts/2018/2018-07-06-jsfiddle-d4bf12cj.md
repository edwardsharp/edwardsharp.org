---
title: "an a-player embed"
description: "a custom video-player element supplied with a stream, a poster image, and a caption file."
date: "2018-07-06T20:35:01.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css"]
permalink: "/post/jsfiddle-d4bf12cj/"
source_id: "d4bf12cj"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/d4bf12cj/8/"
source_revision: 8
---
<iframe class="code-demo" src="{{ '/content/media/2018/2018-07-06-jsfiddle-d4bf12cj-demo.html' | relative_url }}" title="jsfiddle / d4bf12cj" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://content.jwplatform.com/libraries/IDzF9Zmk.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://unpkg.com/@webcomponents/webcomponentsjs@2.0.0/webcomponents-bundle.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://unpkg.com/@edwardsharp/a-player@0.0.5/dist/main.bundle.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;a-player</span>
  <span class="na">height=</span><span class="s">"225"</span>
  <span class="na">width=</span><span class="s">"400"</span>
  <span class="na">file=</span><span class="s">"https://player.vimeo.com/external/274956993.m3u8?s=b1d06838d9eb645d303020011d447c8fe69acf72"</span>
  <span class="na">image=</span><span class="s">"https://i.vimeocdn.com/video/707121198.webp"</span>
  <span class="na">captions-file=</span><span class="s">"https://edwardsharp.github.io/a-player/How_do_I_answer_and_end_calls.vtt"</span>
<span class="nt">&gt;&lt;/a-player&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css">  <span class="nt">background</span><span class="o">:</span> <span class="err">#0095</span><span class="nt">D6</span><span class="o">;</span>
      <span class="nt">color</span><span class="o">:</span> <span class="nt">white</span><span class="o">;</span>
    <span class="err">&#125;</span>
    <span class="nc">.transcript</span> <span class="nt">span</span><span class="nd">:not</span><span class="o">(</span><span class="nc">.current</span><span class="o">)</span><span class="nd">:hover</span> <span class="p">&#123;</span>
      <span class="nl">color</span><span class="p">:</span> <span class="nx">#0095D6</span><span class="p">;</span>
    <span class="p">&#125;</span>
    <span class="nc">.searchbox</span> <span class="nt">input</span> <span class="p">&#123;</span>
      <span class="nl">border</span><span class="p">:</span> <span class="nb">thin</span> <span class="nb">solid</span> <span class="nx">gray</span><span class="p">;</span>
    <span class="p">&#125;</span>
    <span class="c">/* search results */</span>
    <span class="nc">.transcript</span> <span class="nt">span</span> <span class="nt">em</span><span class="nc">.current</span> <span class="p">&#123;</span>
      <span class="nl">background</span><span class="p">:</span> <span class="nx">red</span><span class="p">;</span>
      <span class="nl">color</span><span class="p">:</span> <span class="nx">white</span><span class="p">;</span>
    <span class="p">&#125;</span></code></pre><p data-import-note="">css snippet could not be formatted; original code is shown</p>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/d4bf12cj/8/">original jsfiddle post</a></p>
