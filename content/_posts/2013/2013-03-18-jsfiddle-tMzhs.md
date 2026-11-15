---
title: "jsfiddle / tMzhs"
date: "2013-03-18T21:42:42.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-tMzhs/"
source_id: "tMzhs"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/tMzhs/"
source_revision: 4
---
<iframe class="code-demo" src="{{ '/content/media/2013/2013-03-18-jsfiddle-tMzhs-demo.html' | relative_url }}" title="jsfiddle / tMzhs" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;title&gt;</span>jQuery UI Sortable<span class="nt">&lt;/title&gt;</span>
<span class="nt">&lt;body&gt;</span>
  <span class="nt">&lt;ul</span> <span class="na">class=</span><span class="s">"sortable"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"ui-state-default ui-state-disabled"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"ui-icon ui-icon-arrowthick-2-n-s"</span><span class="nt">&gt;&lt;/span&gt;</span>Header 1
    <span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"ui-state-default"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"ui-icon ui-icon-arrowthick-2-n-s"</span><span class="nt">&gt;&lt;/span&gt;</span>Item 2
    <span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"ui-state-default"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"ui-icon ui-icon-arrowthick-2-n-s"</span><span class="nt">&gt;&lt;/span&gt;</span>Item 3
    <span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"ui-state-default"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"ui-icon ui-icon-arrowthick-2-n-s"</span><span class="nt">&gt;&lt;/span&gt;</span>Item 4
    <span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"ui-state-default ui-state-disabled"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"ui-icon ui-icon-arrowthick-2-n-s"</span><span class="nt">&gt;&lt;/span&gt;</span>Header 2
    <span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"ui-state-default"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"ui-icon ui-icon-arrowthick-2-n-s"</span><span class="nt">&gt;&lt;/span&gt;</span>Item 5
    <span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"ui-state-default"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"ui-icon ui-icon-arrowthick-2-n-s"</span><span class="nt">&gt;&lt;/span&gt;</span>Item 6
    <span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;/ul&gt;</span>
<span class="nt">&lt;/body&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nc">.sortable</span> <span class="p">&#123;</span>
  <span class="nl">list-style-type</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">60%</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.sortable</span> <span class="nt">li</span> <span class="p">&#123;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span> <span class="m">3px</span> <span class="m">3px</span> <span class="m">3px</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">0.4em</span><span class="p">;</span>
  <span class="nl">padding-left</span><span class="p">:</span> <span class="m">1.5em</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">1.4em</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">18px</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.sortable</span> <span class="nt">li</span> <span class="nt">span</span> <span class="p">&#123;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">margin-left</span><span class="p">:</span> <span class="m">-1.3em</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="nf">$</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.sortable</span><span class="dl">"</span><span class="p">).</span><span class="nf">sortable</span><span class="p">(&#123;</span>
    <span class="na">items</span><span class="p">:</span> <span class="dl">"</span><span class="s2">li:not(.ui-state-disabled)</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">placeholder</span><span class="p">:</span> <span class="dl">"</span><span class="s2">ui-state-highlight</span><span class="dl">"</span><span class="p">,</span>
  <span class="p">&#125;);</span>
  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.sortable</span><span class="dl">"</span><span class="p">).</span><span class="nf">disableSelection</span><span class="p">();</span>
<span class="p">&#125;);</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/tMzhs/">original jsfiddle post</a></p>
