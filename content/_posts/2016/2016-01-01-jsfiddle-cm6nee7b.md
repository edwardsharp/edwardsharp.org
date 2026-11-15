---
title: "Angular Sortable Demo"
description: "an angular sortable list logs its item order during dragging and again when sorting stops."
date: "2016-01-01T05:39:28.000Z"
date_precision: "second"
tags: ["jsfiddle","code","angularjs","html","css","javascript","jquery"]
permalink: "/post/jsfiddle-cm6nee7b/"
source_id: "cm6nee7b"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/cm6nee7b/1/"
source_revision: 1
---
<iframe class="code-demo" src="{{ '/content/media/2016/2016-01-01-jsfiddle-cm6nee7b-demo.html' | relative_url }}" title="Angular Sortable Demo" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"//rawgithub.com/angular-ui/ui-sortable/master/src/sortable.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;div</span> <span class="na">ng-app=</span><span class="s">"sortableApp"</span> <span class="na">ng-controller=</span><span class="s">"sortableController"</span> <span class="na">class=</span><span class="s">"container"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;h2&gt;</span>ui.sortable demo<span class="nt">&lt;/h2&gt;</span>

  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"floatleft"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;ul</span> <span class="na">ui-sortable=</span><span class="s">"sortableOptions"</span> <span class="na">ng-model=</span><span class="s">"list"</span> <span class="na">class=</span><span class="s">"list"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;li</span> <span class="na">ng-repeat=</span><span class="s">"item in list"</span> <span class="na">class=</span><span class="s">"item"</span><span class="nt">&gt;</span>&#123;&#123;item.text&#125;&#125;<span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;/ul&gt;</span>
  <span class="nt">&lt;/div&gt;</span>

  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"floatleft"</span> <span class="na">style=</span><span class="s">"margin-left: 20px"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;ul</span> <span class="na">class=</span><span class="s">"list logList"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;li</span> <span class="na">ng-repeat=</span><span class="s">"entry in sortingLog track by $index"</span> <span class="na">class=</span><span class="s">"logItem"</span><span class="nt">&gt;</span>
        &#123;&#123;entry&#125;&#125;
      <span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;/ul&gt;</span>
  <span class="nt">&lt;/div&gt;</span>

  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"clear"</span><span class="nt">&gt;&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nc">.list</span> <span class="p">&#123;</span>
  <span class="nl">list-style</span><span class="p">:</span> <span class="nb">none</span> <span class="nb">outside</span> <span class="nb">none</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">10px</span> <span class="m">0</span> <span class="m">30px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.item</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">200px</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">5px</span> <span class="m">10px</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">5px</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">border</span><span class="p">:</span> <span class="m">2px</span> <span class="nb">solid</span> <span class="nx">#444</span><span class="p">;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">5px</span><span class="p">;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#ea8a8a</span><span class="p">;</span>

  <span class="nl">font-size</span><span class="p">:</span> <span class="m">1.1em</span><span class="p">;</span>
  <span class="nl">font-weight</span><span class="p">:</span> <span class="nb">bold</span><span class="p">;</span>
  <span class="nl">text-align</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
  <span class="nl">cursor</span><span class="p">:</span> <span class="n">move</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="c">/***  Extra ***/</span>

<span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">font-family</span><span class="p">:</span> <span class="n">Verdana</span><span class="p">,</span> <span class="s1">"Trebuchet ms"</span><span class="p">,</span> <span class="n">Tahoma</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.logList</span> <span class="p">&#123;</span>
  <span class="nl">margin-top</span><span class="p">:</span> <span class="m">20px</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">250px</span><span class="p">;</span>
  <span class="nl">min-height</span><span class="p">:</span> <span class="m">200px</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">5px</span> <span class="m">15px</span><span class="p">;</span>
  <span class="nl">border</span><span class="p">:</span> <span class="m">5px</span> <span class="nb">solid</span> <span class="nx">#000</span><span class="p">;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">15px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.logList</span><span class="nd">:before</span> <span class="p">&#123;</span>
  <span class="nl">content</span><span class="p">:</span> <span class="s1">"log"</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span> <span class="m">5px</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">relative</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">-1.1em</span><span class="p">;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#fff</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.container</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">600px</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="nb">auto</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nt">h2</span> <span class="p">&#123;</span>
  <span class="nl">text-align</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.floatleft</span> <span class="p">&#123;</span>
  <span class="nl">float</span><span class="p">:</span> <span class="nb">left</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.clear</span> <span class="p">&#123;</span>
  <span class="nl">clear</span><span class="p">:</span> <span class="nb">both</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="kd">var</span> <span class="nx">myapp</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nf">module</span><span class="p">(</span><span class="dl">"</span><span class="s2">sortableApp</span><span class="dl">"</span><span class="p">,</span> <span class="p">[</span><span class="dl">"</span><span class="s2">ui.sortable</span><span class="dl">"</span><span class="p">]);</span>

<span class="nx">myapp</span><span class="p">.</span><span class="nf">controller</span><span class="p">(</span><span class="dl">"</span><span class="s2">sortableController</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">$scope</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="kd">var</span> <span class="nx">tmpList</span> <span class="o">=</span> <span class="p">[];</span>

  <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;=</span> <span class="mi">6</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">tmpList</span><span class="p">.</span><span class="nf">push</span><span class="p">(&#123;</span>
      <span class="na">text</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Item </span><span class="dl">"</span> <span class="o">+</span> <span class="nx">i</span><span class="p">,</span>
      <span class="na">value</span><span class="p">:</span> <span class="nx">i</span><span class="p">,</span>
    <span class="p">&#125;);</span>
  <span class="p">&#125;</span>

  <span class="nx">$scope</span><span class="p">.</span><span class="nx">list</span> <span class="o">=</span> <span class="nx">tmpList</span><span class="p">;</span>

  <span class="nx">$scope</span><span class="p">.</span><span class="nx">sortingLog</span> <span class="o">=</span> <span class="p">[];</span>

  <span class="nx">$scope</span><span class="p">.</span><span class="nx">sortableOptions</span> <span class="o">=</span> <span class="p">&#123;</span>
    <span class="na">update</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">ui</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">logEntry</span> <span class="o">=</span> <span class="nx">tmpList</span>
        <span class="p">.</span><span class="nf">map</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">return</span> <span class="nx">i</span><span class="p">.</span><span class="nx">value</span><span class="p">;</span>
        <span class="p">&#125;)</span>
        <span class="p">.</span><span class="nf">join</span><span class="p">(</span><span class="dl">"</span><span class="s2">, </span><span class="dl">"</span><span class="p">);</span>
      <span class="nx">$scope</span><span class="p">.</span><span class="nx">sortingLog</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">Update: </span><span class="dl">"</span> <span class="o">+</span> <span class="nx">logEntry</span><span class="p">);</span>
    <span class="p">&#125;,</span>
    <span class="na">stop</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">ui</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="c1">// this callback has the changed model</span>
      <span class="kd">var</span> <span class="nx">logEntry</span> <span class="o">=</span> <span class="nx">tmpList</span>
        <span class="p">.</span><span class="nf">map</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">return</span> <span class="nx">i</span><span class="p">.</span><span class="nx">value</span><span class="p">;</span>
        <span class="p">&#125;)</span>
        <span class="p">.</span><span class="nf">join</span><span class="p">(</span><span class="dl">"</span><span class="s2">, </span><span class="dl">"</span><span class="p">);</span>
      <span class="nx">$scope</span><span class="p">.</span><span class="nx">sortingLog</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">Stop: </span><span class="dl">"</span> <span class="o">+</span> <span class="nx">logEntry</span><span class="p">);</span>
    <span class="p">&#125;,</span>
  <span class="p">&#125;;</span>
<span class="p">&#125;);</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/cm6nee7b/1/">original jsfiddle post</a></p>
