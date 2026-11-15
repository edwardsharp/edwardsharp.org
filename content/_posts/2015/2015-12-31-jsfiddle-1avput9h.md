---
title: "3sort"
date: "2015-12-31T11:21:34.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-1avput9h/"
source_id: "1avput9h"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/1avput9h/"
source_revision: 1
---
<iframe class="code-demo" src="{{ '/content/media/2015/2015-12-31-jsfiddle-1avput9h-demo.html' | relative_url }}" title="3sort" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;ul</span> <span class="na">id=</span><span class="s">"sortable1"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"ui-state-default"</span><span class="nt">&gt;</span>Item 3<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"ui-state-default"</span><span class="nt">&gt;</span>Item 4<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"ui-state-default"</span><span class="nt">&gt;</span>Item 5<span class="nt">&lt;/li&gt;</span>
<span class="nt">&lt;/ul&gt;</span>

<span class="nt">&lt;ul</span> <span class="na">id=</span><span class="s">"sortable2"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"ui-state-highlight"</span><span class="nt">&gt;</span>Item A<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"ui-state-highlight"</span><span class="nt">&gt;</span>Item B<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"ui-state-highlight"</span><span class="nt">&gt;</span>Item C<span class="nt">&lt;/li&gt;</span>
<span class="nt">&lt;/ul&gt;</span>

<span class="nt">&lt;ul</span> <span class="na">id=</span><span class="s">"sortable3"</span> <span class="na">class=</span><span class="s">"droptrue"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"ui-state-highlight"</span><span class="nt">&gt;</span>Item 31<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"ui-state-highlight"</span><span class="nt">&gt;</span>Item 32<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"ui-state-highlight"</span><span class="nt">&gt;</span>Item 33<span class="nt">&lt;/li&gt;</span>
<span class="nt">&lt;/ul&gt;</span>

<span class="nt">&lt;br</span> <span class="na">style=</span><span class="s">"clear: both"</span> <span class="nt">/&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nf">#sortable1</span><span class="o">,</span>
<span class="nf">#sortable2</span><span class="o">,</span>
<span class="nf">#sortable3</span> <span class="p">&#123;</span>
  <span class="nl">list-style-type</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">float</span><span class="p">:</span> <span class="nb">left</span><span class="p">;</span>
  <span class="nl">margin-right</span><span class="p">:</span> <span class="m">10px</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#eee</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">5px</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">143px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#sortable1</span> <span class="nt">li</span><span class="o">,</span>
<span class="nf">#sortable2</span> <span class="nt">li</span><span class="o">,</span>
<span class="nf">#sortable3</span> <span class="nt">li</span> <span class="p">&#123;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">5px</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">5px</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">1.2em</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">120px</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="nf">$</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">ul#sortable1</span><span class="dl">"</span><span class="p">).</span><span class="nf">sortable</span><span class="p">(&#123;&#125;);</span>

  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">ul#sortable2</span><span class="dl">"</span><span class="p">).</span><span class="nf">sortable</span><span class="p">(&#123;&#125;);</span>

  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">ul#sortable3</span><span class="dl">"</span><span class="p">).</span><span class="nf">sortable</span><span class="p">(&#123;&#125;);</span>
  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#sortable1, #sortable2, #sortable3</span><span class="dl">"</span><span class="p">).</span><span class="nf">disableSelection</span><span class="p">();</span>
<span class="p">&#125;);</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/1avput9h/">original jsfiddle post</a></p>
