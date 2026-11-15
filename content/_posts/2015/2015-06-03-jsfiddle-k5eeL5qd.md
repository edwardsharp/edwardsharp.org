---
title: "Angular Sortable Demo"
date: "2015-06-03T02:49:57.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-k5eeL5qd/"
source_id: "k5eeL5qd"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/k5eeL5qd/"
source_revision: 1
---
<iframe class="code-demo" src="{{ '/content/media/2015/2015-06-03-jsfiddle-k5eeL5qd-demo.html' | relative_url }}" title="Angular Sortable Demo" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"http://code.angularjs.org/1.0.0rc10/angular-1.0.0rc10.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;div</span> <span class="na">ng-controller=</span><span class="s">"SortableCTRL"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;ul</span> <span class="na">id=</span><span class="s">"sortable"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">ng-repeat=</span><span class="s">"item in sortableArray"</span> <span class="na">ng-bind=</span><span class="s">"item"</span><span class="nt">&gt;&lt;/li&gt;</span>
  <span class="nt">&lt;/ul&gt;</span>

  <span class="nt">&lt;button</span> <span class="na">ng-click=</span><span class="s">"add()"</span><span class="nt">&gt;</span>Add<span class="nt">&lt;/button&gt;</span>
  <span class="nt">&lt;hr</span> <span class="nt">/&gt;</span>
  <span class="nt">&lt;pre</span> <span class="na">ng-bind=</span><span class="s">"sortableArray|json"</span><span class="nt">&gt;&lt;/pre&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">li</span> <span class="p">&#123;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">5px</span><span class="p">;</span>
  <span class="nl">border</span><span class="p">:</span> <span class="m">1px</span> <span class="nb">solid</span> <span class="nx">#999</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#eee</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">5px</span><span class="p">;</span>
  <span class="nl">cursor</span><span class="p">:</span> <span class="n">move</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="kd">function</span> <span class="nf">SortableCTRL</span><span class="p">(</span><span class="nx">$scope</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="kd">var</span> <span class="nx">sortableEle</span><span class="p">;</span>

  <span class="nx">$scope</span><span class="p">.</span><span class="nx">sortableArray</span> <span class="o">=</span> <span class="p">[</span><span class="dl">"</span><span class="s2">Zero</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">One</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">Two</span><span class="dl">"</span><span class="p">];</span>

  <span class="nx">$scope</span><span class="p">.</span><span class="nx">add</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="nx">$scope</span><span class="p">.</span><span class="nx">sortableArray</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">Item: </span><span class="dl">"</span> <span class="o">+</span> <span class="nx">$scope</span><span class="p">.</span><span class="nx">sortableArray</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span>

    <span class="nx">sortableEle</span><span class="p">.</span><span class="nf">refresh</span><span class="p">();</span>
  <span class="p">&#125;;</span>

  <span class="nx">$scope</span><span class="p">.</span><span class="nx">dragStart</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">ui</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">ui</span><span class="p">.</span><span class="nx">item</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="dl">"</span><span class="s2">start</span><span class="dl">"</span><span class="p">,</span> <span class="nx">ui</span><span class="p">.</span><span class="nx">item</span><span class="p">.</span><span class="nf">index</span><span class="p">());</span>
  <span class="p">&#125;;</span>
  <span class="nx">$scope</span><span class="p">.</span><span class="nx">dragEnd</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">ui</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">start</span> <span class="o">=</span> <span class="nx">ui</span><span class="p">.</span><span class="nx">item</span><span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="dl">"</span><span class="s2">start</span><span class="dl">"</span><span class="p">),</span>
      <span class="nx">end</span> <span class="o">=</span> <span class="nx">ui</span><span class="p">.</span><span class="nx">item</span><span class="p">.</span><span class="nf">index</span><span class="p">();</span>

    <span class="nx">$scope</span><span class="p">.</span><span class="nx">sortableArray</span><span class="p">.</span><span class="nf">splice</span><span class="p">(</span>
      <span class="nx">end</span><span class="p">,</span>
      <span class="mi">0</span><span class="p">,</span>
      <span class="nx">$scope</span><span class="p">.</span><span class="nx">sortableArray</span><span class="p">.</span><span class="nf">splice</span><span class="p">(</span><span class="nx">start</span><span class="p">,</span> <span class="mi">1</span><span class="p">)[</span><span class="mi">0</span><span class="p">],</span>
    <span class="p">);</span>

    <span class="nx">$scope</span><span class="p">.</span><span class="nf">$apply</span><span class="p">();</span>
  <span class="p">&#125;;</span>

  <span class="nx">sortableEle</span> <span class="o">=</span> <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#sortable</span><span class="dl">"</span><span class="p">).</span><span class="nf">sortable</span><span class="p">(&#123;</span>
    <span class="na">start</span><span class="p">:</span> <span class="nx">$scope</span><span class="p">.</span><span class="nx">dragStart</span><span class="p">,</span>
    <span class="na">update</span><span class="p">:</span> <span class="nx">$scope</span><span class="p">.</span><span class="nx">dragEnd</span><span class="p">,</span>
  <span class="p">&#125;);</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/k5eeL5qd/">original jsfiddle post</a></p>
