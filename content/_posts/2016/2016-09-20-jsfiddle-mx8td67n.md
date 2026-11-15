---
title: "Material Floating Labels"
description: "form labels float above their fields on focus and stay there when the fields contain text."
date: "2016-09-20T20:45:25.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-mx8td67n/"
source_id: "mx8td67n"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/mx8td67n/6/"
source_revision: 6
---
<iframe class="code-demo" src="{{ '/content/media/2016/2016-09-20-jsfiddle-mx8td67n-demo.html' | relative_url }}" title="Material Floating Labels" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;link</span> <span class="na">rel=</span><span class="s">"stylesheet"</span> <span class="na">href=</span><span class="s">"http://bootswatch.com/paper/bootstrap.css"</span> <span class="nt">/&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"control-label"</span> <span class="na">for=</span><span class="s">"inputNormal"</span><span class="nt">&gt;</span>Normal input<span class="nt">&lt;/label&gt;</span>
  <span class="nt">&lt;input</span>
    <span class="na">type=</span><span class="s">"text"</span>
    <span class="na">class=</span><span class="s">"form-control"</span>
    <span class="na">id=</span><span class="s">"inputNormal"</span>
    <span class="na">placeholder=</span><span class="s">"Placeholder text"</span>
  <span class="nt">/&gt;</span>
<span class="nt">&lt;/div&gt;</span>

<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"control-label"</span> <span class="na">for=</span><span class="s">"textArea"</span><span class="nt">&gt;</span>Text area<span class="nt">&lt;/label&gt;</span>
  <span class="nt">&lt;textarea</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">id=</span><span class="s">"textArea"</span><span class="nt">&gt;&lt;/textarea&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">20px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="c">/* --- material floating label --- */</span>

<span class="nc">.form-group</span> <span class="p">&#123;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">flex</span><span class="p">;</span>
  <span class="nl">min-height</span><span class="p">:</span> <span class="m">55px</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.form-group</span> <span class="nt">textarea</span> <span class="p">&#123;</span>
  <span class="nl">margin-top</span><span class="p">:</span> <span class="m">15px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.control-label</span> <span class="p">&#123;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">16px</span><span class="p">;</span>
  <span class="nl">font-weight</span><span class="p">:</span> <span class="m">400</span><span class="p">;</span>
  <span class="nl">opacity</span><span class="p">:</span> <span class="m">0.4</span><span class="p">;</span>
  <span class="nl">pointer-events</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">transform</span><span class="p">:</span> <span class="nf">translate3d</span><span class="p">(</span><span class="m">0</span><span class="p">,</span> <span class="m">22px</span><span class="p">,</span> <span class="m">0</span><span class="p">)</span> <span class="nf">scale</span><span class="p">(</span><span class="m">1</span><span class="p">);</span>
  <span class="nl">transform-origin</span><span class="p">:</span> <span class="nb">left</span> <span class="nb">top</span><span class="p">;</span>
  <span class="nl">transition</span><span class="p">:</span> <span class="m">240ms</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.form-group.focused</span> <span class="nc">.control-label</span> <span class="p">&#123;</span>
  <span class="nl">opacity</span><span class="p">:</span> <span class="m">1</span><span class="p">;</span>
  <span class="nl">transform</span><span class="p">:</span> <span class="nf">scale</span><span class="p">(</span><span class="m">0.75</span><span class="p">);</span>
<span class="p">&#125;</span>

<span class="nc">.form-control</span> <span class="p">&#123;</span>
  <span class="nl">align-self</span><span class="p">:</span> <span class="nb">flex-end</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.form-control</span><span class="nd">::-webkit-input-placeholder</span> <span class="p">&#123;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nb">transparent</span><span class="p">;</span>
  <span class="nl">transition</span><span class="p">:</span> <span class="m">240ms</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.form-control</span><span class="nd">::-mox-placeholder</span> <span class="p">&#123;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nb">transparent</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.form-control</span><span class="nd">:focus::-webkit-input-placeholder</span> <span class="p">&#123;</span>
  <span class="nl">transition</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.form-control</span><span class="dl">"</span><span class="p">)</span>
  <span class="p">.</span><span class="nf">on</span><span class="p">(</span><span class="dl">"</span><span class="s2">focus blur</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">)</span>
      <span class="p">.</span><span class="nf">parents</span><span class="p">(</span><span class="dl">"</span><span class="s2">.form-group</span><span class="dl">"</span><span class="p">)</span>
      <span class="p">.</span><span class="nf">toggleClass</span><span class="p">(</span><span class="dl">"</span><span class="s2">focused</span><span class="dl">"</span><span class="p">,</span> <span class="nx">e</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">focus</span><span class="dl">"</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">value</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">);</span>
  <span class="p">&#125;)</span>
  <span class="p">.</span><span class="nf">trigger</span><span class="p">(</span><span class="dl">"</span><span class="s2">blur</span><span class="dl">"</span><span class="p">);</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/mx8td67n/6/">original jsfiddle post</a></p>
