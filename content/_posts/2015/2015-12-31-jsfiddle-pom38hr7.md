---
title: "sortable portlet2"
date: "2015-12-31T11:22:07.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-pom38hr7/"
source_id: "pom38hr7"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/pom38hr7/"
source_revision: 1
---
<iframe class="code-demo" src="{{ '/content/media/2015/2015-12-31-jsfiddle-pom38hr7-demo.html' | relative_url }}" title="sortable portlet2" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"column"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"portlet"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"portlet-header"</span><span class="nt">&gt;</span>Feeds<span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"portlet-content"</span><span class="nt">&gt;</span>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>

  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"portlet"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"portlet-header"</span><span class="nt">&gt;</span>News<span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"portlet-content"</span><span class="nt">&gt;</span>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>

<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"column"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"portlet"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"portlet-header"</span><span class="nt">&gt;</span>Shopping<span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"portlet-content"</span><span class="nt">&gt;</span>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>

<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"column"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"portlet"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"portlet-header"</span><span class="nt">&gt;</span>Links<span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"portlet-content"</span><span class="nt">&gt;</span>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>

  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"portlet"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"portlet-header"</span><span class="nt">&gt;</span>Images<span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"portlet-content"</span><span class="nt">&gt;</span>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">min-width</span><span class="p">:</span> <span class="m">520px</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.column</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">170px</span><span class="p">;</span>
  <span class="nl">float</span><span class="p">:</span> <span class="nb">left</span><span class="p">;</span>
  <span class="nl">padding-bottom</span><span class="p">:</span> <span class="m">100px</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.portlet</span> <span class="p">&#123;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span> <span class="m">1em</span> <span class="m">1em</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">0.3em</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.portlet-header</span> <span class="p">&#123;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">0.2em</span> <span class="m">0.3em</span><span class="p">;</span>
  <span class="nl">margin-bottom</span><span class="p">:</span> <span class="m">0.5em</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">relative</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.portlet-toggle</span> <span class="p">&#123;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">50%</span><span class="p">;</span>
  <span class="nl">right</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">margin-top</span><span class="p">:</span> <span class="m">-8px</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.portlet-content</span> <span class="p">&#123;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">0.4em</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.portlet-placeholder</span> <span class="p">&#123;</span>
  <span class="nl">border</span><span class="p">:</span> <span class="m">1px</span> <span class="nb">dotted</span> <span class="nx">black</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span> <span class="m">1em</span> <span class="m">1em</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">50px</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="nf">$</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.column</span><span class="dl">"</span><span class="p">).</span><span class="nf">sortable</span><span class="p">(&#123;</span>
    <span class="na">connectWith</span><span class="p">:</span> <span class="dl">"</span><span class="s2">.column</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">handle</span><span class="p">:</span> <span class="dl">"</span><span class="s2">.portlet-header</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">placeholder</span><span class="p">:</span> <span class="dl">"</span><span class="s2">portlet-placeholder ui-corner-all</span><span class="dl">"</span><span class="p">,</span>
  <span class="p">&#125;);</span>

  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.portlet</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">addClass</span><span class="p">(</span><span class="dl">"</span><span class="s2">ui-widget ui-widget-content ui-helper-clearfix ui-corner-all</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">find</span><span class="p">(</span><span class="dl">"</span><span class="s2">.portlet-header</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">addClass</span><span class="p">(</span><span class="dl">"</span><span class="s2">ui-widget-header ui-corner-all</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">prepend</span><span class="p">(</span><span class="dl">"</span><span class="s2">&lt;span class='ui-icon ui-icon-minusthick portlet-toggle'&gt;&lt;/span&gt;</span><span class="dl">"</span><span class="p">);</span>

  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.portlet-toggle</span><span class="dl">"</span><span class="p">).</span><span class="nf">click</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">icon</span> <span class="o">=</span> <span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span>
    <span class="nx">icon</span><span class="p">.</span><span class="nf">toggleClass</span><span class="p">(</span><span class="dl">"</span><span class="s2">ui-icon-minusthick ui-icon-plusthick</span><span class="dl">"</span><span class="p">);</span>
    <span class="nx">icon</span><span class="p">.</span><span class="nf">closest</span><span class="p">(</span><span class="dl">"</span><span class="s2">.portlet</span><span class="dl">"</span><span class="p">).</span><span class="nf">find</span><span class="p">(</span><span class="dl">"</span><span class="s2">.portlet-content</span><span class="dl">"</span><span class="p">).</span><span class="nf">toggle</span><span class="p">();</span>
  <span class="p">&#125;);</span>
<span class="p">&#125;);</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/pom38hr7/">original jsfiddle post</a></p>
