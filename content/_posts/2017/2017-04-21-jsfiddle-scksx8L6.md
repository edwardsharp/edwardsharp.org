---
title: "HELLO"
date: "2017-04-21T05:46:15.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css"]
permalink: "/post/jsfiddle-scksx8L6/"
source_id: "scksx8L6"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/scksx8L6/"
source_revision: 2
---
<iframe class="code-demo" src="{{ '/content/media/2017/2017-04-21-jsfiddle-scksx8L6-demo.html' | relative_url }}" title="HELLO" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>my name is</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"card"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"cardHeader"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"hello"</span><span class="nt">&gt;</span>HELLO<span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"mynameis"</span><span class="nt">&gt;</span>my name is<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"cardBody"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="nt">/&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"cardFooter"</span><span class="nt">&gt;</span><span class="ni">&amp;nbsp;</span><span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="k">@import</span> <span class="nf">url</span><span class="p">(</span><span class="s1">"https://fonts.googleapis.com/css?family=Permanent+Marker|Raleway"</span><span class="p">);</span>

<span class="nc">.card</span> <span class="p">&#123;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">10px</span><span class="p">;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">black</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">white</span><span class="p">;</span>
  <span class="nl">text-align</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">75vw</span><span class="p">;</span>
  <span class="nl">min-width</span><span class="p">:</span> <span class="m">370px</span><span class="p">;</span>
  <span class="nl">max-width</span><span class="p">:</span> <span class="m">470px</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span> <span class="nb">auto</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.card</span> <span class="nc">.cardHeader</span> <span class="p">&#123;</span>
  <span class="nl">font-family</span><span class="p">:</span> <span class="s1">"Raleway"</span><span class="p">,</span> <span class="nb">monospace</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">0.5em</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.card</span> <span class="nc">.cardHeader</span> <span class="nc">.hello</span> <span class="p">&#123;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">2em</span><span class="p">;</span>
  <span class="nl">font</span><span class="p">:</span> <span class="nb">monospace</span><span class="p">;</span>
  <span class="nl">letter-spacing</span><span class="p">:</span> <span class="m">5px</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.card</span> <span class="nc">.cardHeader</span> <span class="nc">.mynameis</span> <span class="p">&#123;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">1.2em</span><span class="p">;</span>
  <span class="nl">font</span><span class="p">:</span> <span class="nb">monospace</span><span class="p">;</span>
  <span class="nl">letter-spacing</span><span class="p">:</span> <span class="m">2px</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.card</span> <span class="nc">.cardBody</span> <span class="p">&#123;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">white</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">black</span><span class="p">;</span>
  <span class="nl">min-height</span><span class="p">:</span> <span class="m">3em</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">1em</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.card</span> <span class="nc">.cardBody</span> <span class="nt">input</span> <span class="p">&#123;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">2em</span><span class="p">;</span>
  <span class="nl">font-family</span><span class="p">:</span> <span class="s1">"Permanent Marker"</span><span class="p">,</span> <span class="nb">cursive</span><span class="p">;</span>
  <span class="nl">border</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
  <span class="nl">border-bottom</span><span class="p">:</span> <span class="m">3px</span> <span class="nb">solid</span> <span class="nx">black</span><span class="p">;</span>
  <span class="nl">text-align</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/scksx8L6/">original jsfiddle post</a></p>
