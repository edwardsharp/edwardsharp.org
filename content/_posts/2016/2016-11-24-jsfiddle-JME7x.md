---
title: "JQuery UI Buttonset"
date: "2016-11-24T16:27:37.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","javascript"]
permalink: "/post/jsfiddle-JME7x/"
source_id: "JME7x"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/z_acharki/JME7x/44/"
source_revision: 44
---
<iframe class="code-demo" src="{{ '/content/media/2016/2016-11-24-jsfiddle-JME7x-demo.html' | relative_url }}" title="JQuery UI Buttonset" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;link</span>
  <span class="na">rel=</span><span class="s">"stylesheet"</span>
  <span class="na">href=</span><span class="s">"http://code.jquery.com/ui/1.8.20/themes/base/jquery-ui.css"</span>
<span class="nt">/&gt;</span>
<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"myRadio"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">id=</span><span class="s">"first"</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">value=</span><span class="s">"1"</span> <span class="na">name=</span><span class="s">"steps"</span> <span class="nt">/&gt;&lt;label</span> <span class="na">for=</span><span class="s">"first"</span>
    <span class="nt">&gt;</span>First<span class="nt">&lt;/label</span>
  <span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">id=</span><span class="s">"second"</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">value=</span><span class="s">"2"</span> <span class="na">name=</span><span class="s">"steps"</span> <span class="nt">/&gt;&lt;label</span> <span class="na">for=</span><span class="s">"second"</span>
    <span class="nt">&gt;</span>Second<span class="nt">&lt;/label</span>
  <span class="nt">&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#myRadio</span><span class="dl">"</span><span class="p">).</span><span class="nf">buttonset</span><span class="p">();</span>

<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">buttonsetIsInitialized</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">hasClass</span><span class="p">(</span><span class="dl">"</span><span class="s2">ui-buttonset</span><span class="dl">"</span><span class="p">);</span>
<span class="p">&#125;;</span>

<span class="k">if </span><span class="p">(</span><span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#myRadio</span><span class="dl">"</span><span class="p">).</span><span class="nf">buttonsetIsInitialized</span><span class="p">())</span> <span class="p">&#123;</span>
  <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">initialized: refresh</span><span class="dl">"</span><span class="p">);</span>
<span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
  <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">Not initialized</span><span class="dl">"</span><span class="p">);</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/z_acharki/JME7x/44/">original jsfiddle post</a></p>
