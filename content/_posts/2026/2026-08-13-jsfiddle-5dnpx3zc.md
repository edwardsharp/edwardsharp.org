---
title: "pointer info"
date: "2026-08-13T16:19:23.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css","javascript","processing"]
permalink: "/post/jsfiddle-5dnpx3zc/"
source_id: "5dnpx3zc"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/5dnpx3zc/8/"
source_revision: 8
---
<iframe class="code-demo" src="{{ '/content/media/2026/2026-08-13-jsfiddle-5dnpx3zc-demo.html' | relative_url }}" title="pointer info" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"app"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"controls"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;button</span> <span class="na">id=</span><span class="s">"clear"</span><span class="nt">&gt;</span>Clear<span class="nt">&lt;/button&gt;</span>
    <span class="nt">&lt;button</span> <span class="na">id=</span><span class="s">"toggleLog"</span><span class="nt">&gt;</span>Toggle Event Log<span class="nt">&lt;/button&gt;</span>
    <span class="nt">&lt;span</span> <span class="na">id=</span><span class="s">"status"</span><span class="nt">&gt;</span>Waiting for pointer...<span class="nt">&lt;/span&gt;</span>
  <span class="nt">&lt;/div&gt;</span>

  <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"testArea"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"crosshair"</span><span class="nt">&gt;&lt;/div&gt;</span>

    <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"output"</span><span class="nt">&gt;&lt;/div&gt;</span>

    <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"log"</span><span class="nt">&gt;&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="o">*</span> <span class="p">&#123;</span>
  <span class="nl">box-sizing</span><span class="p">:</span> <span class="nb">border-box</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nt">html</span><span class="o">,</span>
<span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#111</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#eee</span><span class="p">;</span>
  <span class="nl">font-family</span><span class="p">:</span>
    <span class="o">-</span><span class="n">apple-system</span><span class="p">,</span> <span class="n">BlinkMacSystemFont</span><span class="p">,</span> <span class="s1">"SF Mono"</span><span class="p">,</span> <span class="n">Menlo</span><span class="p">,</span> <span class="n">Monaco</span><span class="p">,</span> <span class="nb">monospace</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">overflow</span><span class="p">:</span> <span class="nb">hidden</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#app</span> <span class="p">&#123;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">flex</span><span class="p">;</span>
  <span class="nl">flex-direction</span><span class="p">:</span> <span class="nb">column</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#controls</span> <span class="p">&#123;</span>
  <span class="nl">flex</span><span class="p">:</span> <span class="m">0</span> <span class="m">0</span> <span class="nb">auto</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">10px</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#222</span><span class="p">;</span>
  <span class="nl">border-bottom</span><span class="p">:</span> <span class="m">1px</span> <span class="nb">solid</span> <span class="nx">#444</span><span class="p">;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">flex</span><span class="p">;</span>
  <span class="nl">gap</span><span class="p">:</span> <span class="m">8px</span><span class="p">;</span>
  <span class="nl">align-items</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
  <span class="nl">flex-wrap</span><span class="p">:</span> <span class="nb">wrap</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nt">button</span> <span class="p">&#123;</span>
  <span class="nl">font</span><span class="p">:</span> <span class="nb">inherit</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">white</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#444</span><span class="p">;</span>
  <span class="nl">border</span><span class="p">:</span> <span class="m">1px</span> <span class="nb">solid</span> <span class="nx">#666</span><span class="p">;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">6px</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">7px</span> <span class="m">12px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nt">button</span><span class="nd">:active</span> <span class="p">&#123;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#666</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#status</span> <span class="p">&#123;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#aaa</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">12px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#testArea</span> <span class="p">&#123;</span>
  <span class="nl">flex</span><span class="p">:</span> <span class="m">1</span> <span class="m">1</span> <span class="nb">auto</span><span class="p">;</span>
  <span class="nl">min-height</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>

  <span class="c">/*
       * Critical for touch/stylus testing:
       * don't let the browser interpret the gesture as scrolling,
       * zooming, navigation, etc.
       */</span>
  <span class="py">touch-action</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>

  <span class="nl">position</span><span class="p">:</span> <span class="nb">relative</span><span class="p">;</span>
  <span class="nl">overflow</span><span class="p">:</span> <span class="nb">hidden</span><span class="p">;</span>

  <span class="nl">background</span><span class="p">:</span>
    <span class="nf">linear-gradient</span><span class="p">(</span><span class="nf">rgba</span><span class="p">(</span><span class="m">255</span><span class="p">,</span> <span class="m">255</span><span class="p">,</span> <span class="m">255</span><span class="p">,</span> <span class="m">0.04</span><span class="p">)</span> <span class="m">1px</span><span class="p">,</span> <span class="nb">transparent</span> <span class="m">1px</span><span class="p">),</span>
    <span class="nf">linear-gradient</span><span class="p">(</span><span class="m">90deg</span><span class="p">,</span> <span class="nf">rgba</span><span class="p">(</span><span class="m">255</span><span class="p">,</span> <span class="m">255</span><span class="p">,</span> <span class="m">255</span><span class="p">,</span> <span class="m">0.04</span><span class="p">)</span> <span class="m">1px</span><span class="p">,</span> <span class="nb">transparent</span> <span class="m">1px</span><span class="p">);</span>
  <span class="nl">background-size</span><span class="p">:</span> <span class="m">25px</span> <span class="m">25px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#crosshair</span> <span class="p">&#123;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">30px</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">30px</span><span class="p">;</span>
  <span class="nl">margin-left</span><span class="p">:</span> <span class="m">-15px</span><span class="p">;</span>
  <span class="nl">margin-top</span><span class="p">:</span> <span class="m">-15px</span><span class="p">;</span>
  <span class="nl">border</span><span class="p">:</span> <span class="m">1px</span> <span class="nb">solid</span> <span class="nx">#0ff</span><span class="p">;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">50%</span><span class="p">;</span>
  <span class="nl">pointer-events</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#crosshair</span><span class="nd">::before</span><span class="o">,</span>
<span class="nf">#crosshair</span><span class="nd">::after</span> <span class="p">&#123;</span>
  <span class="nl">content</span><span class="p">:</span> <span class="s1">""</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#0ff</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#crosshair</span><span class="nd">::before</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">1px</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">44px</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">14px</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">-8px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#crosshair</span><span class="nd">::after</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">44px</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">1px</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">-8px</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">14px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#output</span> <span class="p">&#123;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">inset</span><span class="p">:</span> <span class="m">10px</span><span class="p">;</span>
  <span class="nl">pointer-events</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
  <span class="nl">overflow</span><span class="p">:</span> <span class="nb">hidden</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.event</span> <span class="p">&#123;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">min-width</span><span class="p">:</span> <span class="m">300px</span><span class="p">;</span>
  <span class="nl">max-width</span><span class="p">:</span> <span class="nf">min</span><span class="p">(</span><span class="m">650px</span><span class="p">,</span> <span class="nf">calc</span><span class="p">(</span><span class="m">100vw</span> <span class="o">-</span> <span class="m">20px</span><span class="p">));</span>
  <span class="nl">max-height</span><span class="p">:</span> <span class="nf">calc</span><span class="p">(</span><span class="m">100%</span> <span class="o">-</span> <span class="m">0px</span><span class="p">);</span>
  <span class="nl">overflow</span><span class="p">:</span> <span class="nb">auto</span><span class="p">;</span>

  <span class="nl">padding</span><span class="p">:</span> <span class="m">10px</span><span class="p">;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">8px</span><span class="p">;</span>

  <span class="nl">background</span><span class="p">:</span> <span class="nf">rgba</span><span class="p">(</span><span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0.82</span><span class="p">);</span>
  <span class="nl">border</span><span class="p">:</span> <span class="m">1px</span> <span class="nb">solid</span> <span class="nx">#444</span><span class="p">;</span>

  <span class="nl">font-size</span><span class="p">:</span> <span class="m">12px</span><span class="p">;</span>
  <span class="nl">line-height</span><span class="p">:</span> <span class="m">1.4</span><span class="p">;</span>

  <span class="nl">pointer-events</span><span class="p">:</span> <span class="nb">auto</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.event-title</span> <span class="p">&#123;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#5ff</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">14px</span><span class="p">;</span>
  <span class="nl">font-weight</span><span class="p">:</span> <span class="nb">bold</span><span class="p">;</span>
  <span class="nl">margin-bottom</span><span class="p">:</span> <span class="m">6px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.section</span> <span class="p">&#123;</span>
  <span class="nl">margin-top</span><span class="p">:</span> <span class="m">8px</span><span class="p">;</span>
  <span class="nl">padding-top</span><span class="p">:</span> <span class="m">6px</span><span class="p">;</span>
  <span class="nl">border-top</span><span class="p">:</span> <span class="m">1px</span> <span class="nb">solid</span> <span class="nx">#333</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#aaa</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.row</span> <span class="p">&#123;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">flex</span><span class="p">;</span>
  <span class="nl">gap</span><span class="p">:</span> <span class="m">8px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.key</span> <span class="p">&#123;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#aaa</span><span class="p">;</span>
  <span class="nl">flex</span><span class="p">:</span> <span class="m">0</span> <span class="m">0</span> <span class="m">170px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.value</span> <span class="p">&#123;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#fff</span><span class="p">;</span>
  <span class="nl">overflow-wrap</span><span class="p">:</span> <span class="n">anywhere</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.interesting</span> <span class="p">&#123;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#ffcf5c</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#log</span> <span class="p">&#123;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">right</span><span class="p">:</span> <span class="m">10px</span><span class="p">;</span>
  <span class="nl">bottom</span><span class="p">:</span> <span class="m">10px</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="nf">min</span><span class="p">(</span><span class="m">500px</span><span class="p">,</span> <span class="nf">calc</span><span class="p">(</span><span class="m">100vw</span> <span class="o">-</span> <span class="m">20px</span><span class="p">));</span>
  <span class="nl">max-height</span><span class="p">:</span> <span class="m">40%</span><span class="p">;</span>
  <span class="nl">overflow</span><span class="p">:</span> <span class="nb">auto</span><span class="p">;</span>

  <span class="nl">background</span><span class="p">:</span> <span class="nf">rgba</span><span class="p">(</span><span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0</span><span class="p">,</span> <span class="m">0.8</span><span class="p">);</span>
  <span class="nl">border</span><span class="p">:</span> <span class="m">1px</span> <span class="nb">solid</span> <span class="nx">#333</span><span class="p">;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">8px</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">8px</span><span class="p">;</span>

  <span class="nl">font-size</span><span class="p">:</span> <span class="m">11px</span><span class="p">;</span>
  <span class="nl">pointer-events</span><span class="p">:</span> <span class="nb">auto</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.log-line</span> <span class="p">&#123;</span>
  <span class="nl">white-space</span><span class="p">:</span> <span class="nb">nowrap</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.log-line</span> <span class="nt">span</span><span class="nd">:first-child</span> <span class="p">&#123;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#5ff</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="dl">"</span><span class="s2">use strict</span><span class="dl">"</span><span class="p">;</span>

<span class="kd">const</span> <span class="nx">testArea</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">testArea</span><span class="dl">"</span><span class="p">);</span>
<span class="kd">const</span> <span class="nx">output</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">output</span><span class="dl">"</span><span class="p">);</span>
<span class="kd">const</span> <span class="nx">log</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">log</span><span class="dl">"</span><span class="p">);</span>
<span class="kd">const</span> <span class="nx">crosshair</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">crosshair</span><span class="dl">"</span><span class="p">);</span>
<span class="kd">const</span> <span class="nx">status</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">status</span><span class="dl">"</span><span class="p">);</span>

<span class="kd">const</span> <span class="nx">MAX_LOG_LINES</span> <span class="o">=</span> <span class="mi">100</span><span class="p">;</span>

<span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">clear</span><span class="dl">"</span><span class="p">).</span><span class="nf">addEventListener</span><span class="p">(</span><span class="dl">"</span><span class="s2">click</span><span class="dl">"</span><span class="p">,</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">&#123;</span>
  <span class="nx">output</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="dl">""</span><span class="p">;</span>
  <span class="nx">log</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="dl">""</span><span class="p">;</span>
  <span class="nx">status</span><span class="p">.</span><span class="nx">textContent</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">Cleared</span><span class="dl">"</span><span class="p">;</span>
<span class="p">&#125;);</span>

<span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">toggleLog</span><span class="dl">"</span><span class="p">).</span><span class="nf">addEventListener</span><span class="p">(</span><span class="dl">"</span><span class="s2">click</span><span class="dl">"</span><span class="p">,</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">&#123;</span>
  <span class="nx">log</span><span class="p">.</span><span class="nx">hidden</span> <span class="o">=</span> <span class="o">!</span><span class="nx">log</span><span class="p">.</span><span class="nx">hidden</span><span class="p">;</span>
<span class="p">&#125;);</span>

<span class="cm">/*
 * Properties defined by PointerEvent / MouseEvent / Event.
 *
 * We intentionally probe the properties rather than assuming that
 * every browser implements every one.
 */</span>
<span class="kd">const</span> <span class="nx">EVENT_PROPERTIES</span> <span class="o">=</span> <span class="p">[</span>
  <span class="c1">// Event</span>
  <span class="p">[</span>
    <span class="dl">"</span><span class="s2">Event</span><span class="dl">"</span><span class="p">,</span>
    <span class="p">[</span>
      <span class="dl">"</span><span class="s2">type</span><span class="dl">"</span><span class="p">,</span>
      <span class="c1">// "timeStamp",</span>
      <span class="c1">// "bubbles",</span>
      <span class="c1">// "cancelable",</span>
      <span class="c1">// "defaultPrevented",</span>
      <span class="c1">// "isTrusted",</span>
      <span class="c1">// "composed",</span>
      <span class="c1">// "eventPhase",</span>
    <span class="p">],</span>
  <span class="p">],</span>

  <span class="c1">// Pointer identity</span>
  <span class="p">[</span><span class="dl">"</span><span class="s2">Pointer</span><span class="dl">"</span><span class="p">,</span> <span class="p">[</span><span class="dl">"</span><span class="s2">pointerId</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">pointerType</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">isPrimary</span><span class="dl">"</span><span class="p">]],</span>

  <span class="c1">// Position</span>
  <span class="p">[</span>
    <span class="dl">"</span><span class="s2">Position</span><span class="dl">"</span><span class="p">,</span>
    <span class="p">[</span>
      <span class="c1">// "clientX",</span>
      <span class="c1">// "clientY",</span>
      <span class="c1">// "pageX",</span>
      <span class="c1">// "pageY",</span>
      <span class="c1">// "screenX",</span>
      <span class="c1">// "screenY",</span>
      <span class="c1">// "offsetX",</span>
      <span class="c1">// "offsetY",</span>
      <span class="dl">"</span><span class="s2">movementX</span><span class="dl">"</span><span class="p">,</span>
      <span class="dl">"</span><span class="s2">movementY</span><span class="dl">"</span><span class="p">,</span>
    <span class="p">],</span>
  <span class="p">],</span>

  <span class="c1">// Contact geometry</span>
  <span class="p">[</span><span class="dl">"</span><span class="s2">Contact Geometry</span><span class="dl">"</span><span class="p">,</span> <span class="p">[</span><span class="dl">"</span><span class="s2">width</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">height</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">pressure</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">tangentialPressure</span><span class="dl">"</span><span class="p">]],</span>

  <span class="c1">// Pen orientation</span>
  <span class="p">[</span>
    <span class="dl">"</span><span class="s2">Pen Orientation</span><span class="dl">"</span><span class="p">,</span>
    <span class="p">[</span><span class="dl">"</span><span class="s2">tiltX</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">tiltY</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">twist</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">altitudeAngle</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">azimuthAngle</span><span class="dl">"</span><span class="p">],</span>
  <span class="p">],</span>

  <span class="c1">// Buttons</span>
  <span class="p">[</span><span class="dl">"</span><span class="s2">Buttons</span><span class="dl">"</span><span class="p">,</span> <span class="p">[</span><span class="dl">"</span><span class="s2">button</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">buttons</span><span class="dl">"</span><span class="p">]],</span>

  <span class="c1">// Modifier keys</span>
  <span class="p">[</span><span class="dl">"</span><span class="s2">Modifier Keys</span><span class="dl">"</span><span class="p">,</span> <span class="p">[</span><span class="dl">"</span><span class="s2">ctrlKey</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">shiftKey</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">altKey</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">metaKey</span><span class="dl">"</span><span class="p">]],</span>

  <span class="c1">// Target / capture</span>
  <span class="p">[</span><span class="dl">"</span><span class="s2">Target</span><span class="dl">"</span><span class="p">,</span> <span class="p">[</span><span class="dl">"</span><span class="s2">target</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">currentTarget</span><span class="dl">"</span><span class="p">]],</span>
<span class="p">];</span>

<span class="cm">/*
 * These are the Pointer Events we try to observe.
 *
 * pointerrawupdate is particularly interesting for high-frequency
 * stylus input because it can expose updates before normal pointermove
 * processing/coalescing.
 */</span>
<span class="kd">const</span> <span class="nx">POINTER_EVENTS</span> <span class="o">=</span> <span class="p">[</span>
  <span class="dl">"</span><span class="s2">pointerover</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">pointerenter</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">pointerdown</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">pointermove</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">pointerrawupdate</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">pointerup</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">pointercancel</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">pointerout</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">pointerleave</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">gotpointercapture</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">lostpointercapture</span><span class="dl">"</span><span class="p">,</span>
<span class="p">];</span>

<span class="kd">function</span> <span class="nf">hasProperty</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">name</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="k">return</span> <span class="nx">name</span> <span class="k">in</span> <span class="nx">obj</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">formatNumber</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">value</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">number</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">return</span> <span class="nc">String</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span>
  <span class="p">&#125;</span>

  <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nb">Number</span><span class="p">.</span><span class="nf">isFinite</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">&#123;</span>
    <span class="k">return</span> <span class="nc">String</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span>
  <span class="p">&#125;</span>

  <span class="k">return</span> <span class="nc">Number</span><span class="p">(</span><span class="nx">value</span><span class="p">.</span><span class="nf">toFixed</span><span class="p">(</span><span class="mi">6</span><span class="p">));</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">formatValue</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">value</span> <span class="o">===</span> <span class="kc">null</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">return</span> <span class="dl">"</span><span class="s2">null</span><span class="dl">"</span><span class="p">;</span>
  <span class="p">&#125;</span>

  <span class="k">if </span><span class="p">(</span><span class="nx">value</span> <span class="o">===</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">return</span> <span class="dl">"</span><span class="s2">undefined</span><span class="dl">"</span><span class="p">;</span>
  <span class="p">&#125;</span>

  <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">value</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">number</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">return</span> <span class="nf">formatNumber</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span>
  <span class="p">&#125;</span>

  <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">value</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">boolean</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">return</span> <span class="nx">value</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">true</span><span class="dl">"</span> <span class="p">:</span> <span class="dl">"</span><span class="s2">false</span><span class="dl">"</span><span class="p">;</span>
  <span class="p">&#125;</span>

  <span class="k">if </span><span class="p">(</span><span class="nx">value</span> <span class="k">instanceof</span> <span class="nx">Element</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">return</span> <span class="s2">`&lt;</span><span class="p">$&#123;</span><span class="nx">value</span><span class="p">.</span><span class="nx">tagName</span><span class="p">.</span><span class="nf">toLowerCase</span><span class="p">()&#125;$&#123;</span><span class="nx">value</span><span class="p">.</span><span class="nx">id</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">#</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">value</span><span class="p">.</span><span class="nx">id</span> <span class="p">:</span> <span class="dl">""</span><span class="p">&#125;</span><span class="s2">&gt;`</span><span class="p">;</span>
  <span class="p">&#125;</span>

  <span class="k">return</span> <span class="nc">String</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">makeRow</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">interesting</span> <span class="o">=</span> <span class="kc">false</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="kd">const</span> <span class="nx">row</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">div</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">row</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">row</span><span class="dl">"</span><span class="p">;</span>

  <span class="kd">const</span> <span class="nx">key</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">div</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">key</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">key</span><span class="dl">"</span><span class="p">;</span>
  <span class="nx">key</span><span class="p">.</span><span class="nx">textContent</span> <span class="o">=</span> <span class="nx">name</span><span class="p">;</span>

  <span class="kd">const</span> <span class="nx">val</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">div</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">val</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">value</span><span class="dl">"</span> <span class="o">+</span> <span class="p">(</span><span class="nx">interesting</span> <span class="p">?</span> <span class="dl">"</span><span class="s2"> interesting</span><span class="dl">"</span> <span class="p">:</span> <span class="dl">""</span><span class="p">);</span>
  <span class="nx">val</span><span class="p">.</span><span class="nx">textContent</span> <span class="o">=</span> <span class="nf">formatValue</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span>

  <span class="nx">row</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">key</span><span class="p">);</span>
  <span class="nx">row</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">val</span><span class="p">);</span>

  <span class="k">return</span> <span class="nx">row</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">addSection</span><span class="p">(</span><span class="nx">container</span><span class="p">,</span> <span class="nx">title</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="kd">const</span> <span class="nx">section</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">div</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">section</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">section</span><span class="dl">"</span><span class="p">;</span>
  <span class="nx">section</span><span class="p">.</span><span class="nx">textContent</span> <span class="o">=</span> <span class="nx">title</span><span class="p">;</span>
  <span class="nx">container</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">section</span><span class="p">);</span>
<span class="p">&#125;</span>

<span class="cm">/*
 * Get a compact representation of a PointerEvent.
 */</span>
<span class="kd">function</span> <span class="nf">getEventData</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="kd">const</span> <span class="nx">data</span> <span class="o">=</span> <span class="p">&#123;&#125;;</span>

  <span class="k">for </span><span class="p">(</span><span class="kd">const</span> <span class="p">[,</span> <span class="nx">properties</span><span class="p">]</span> <span class="k">of</span> <span class="nx">EVENT_PROPERTIES</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">for </span><span class="p">(</span><span class="kd">const</span> <span class="nx">property</span> <span class="k">of</span> <span class="nx">properties</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="nf">hasProperty</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">property</span><span class="p">))</span> <span class="p">&#123;</span>
        <span class="k">try</span> <span class="p">&#123;</span>
          <span class="nx">data</span><span class="p">[</span><span class="nx">property</span><span class="p">]</span> <span class="o">=</span> <span class="nx">e</span><span class="p">[</span><span class="nx">property</span><span class="p">];</span>
        <span class="p">&#125;</span> <span class="k">catch</span> <span class="p">&#123;</span>
          <span class="nx">data</span><span class="p">[</span><span class="nx">property</span><span class="p">]</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">&lt;error&gt;</span><span class="dl">"</span><span class="p">;</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>

  <span class="k">return</span> <span class="nx">data</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">showEvent</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="cm">/*
   * Don't create a giant DOM tree for every pointermove.
   * Replace the displayed event with the newest event.
   */</span>
  <span class="nx">output</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="dl">""</span><span class="p">;</span>

  <span class="kd">const</span> <span class="nx">box</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">div</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">box</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">event</span><span class="dl">"</span><span class="p">;</span>

  <span class="kd">const</span> <span class="nx">title</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">div</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">title</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">event-title</span><span class="dl">"</span><span class="p">;</span>
  <span class="nx">title</span><span class="p">.</span><span class="nx">textContent</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">type</span><span class="p">;</span>

  <span class="nx">box</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">title</span><span class="p">);</span>

  <span class="k">for </span><span class="p">(</span><span class="kd">const</span> <span class="p">[</span><span class="nx">sectionName</span><span class="p">,</span> <span class="nx">properties</span><span class="p">]</span> <span class="k">of</span> <span class="nx">EVENT_PROPERTIES</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">const</span> <span class="nx">available</span> <span class="o">=</span> <span class="nx">properties</span><span class="p">.</span><span class="nf">filter</span><span class="p">((</span><span class="nx">p</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="nf">hasProperty</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">p</span><span class="p">));</span>

    <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">available</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">continue</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="nf">addSection</span><span class="p">(</span><span class="nx">box</span><span class="p">,</span> <span class="nx">sectionName</span><span class="p">);</span>

    <span class="k">for </span><span class="p">(</span><span class="kd">const</span> <span class="nx">property</span> <span class="k">of</span> <span class="nx">available</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">let</span> <span class="nx">value</span><span class="p">;</span>

      <span class="k">try</span> <span class="p">&#123;</span>
        <span class="nx">value</span> <span class="o">=</span> <span class="nx">e</span><span class="p">[</span><span class="nx">property</span><span class="p">];</span>
      <span class="p">&#125;</span> <span class="k">catch</span> <span class="p">&#123;</span>
        <span class="nx">value</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">&lt;error&gt;</span><span class="dl">"</span><span class="p">;</span>
      <span class="p">&#125;</span>

      <span class="kd">const</span> <span class="nx">interesting</span> <span class="o">=</span> <span class="p">[</span>
        <span class="dl">"</span><span class="s2">pointerType</span><span class="dl">"</span><span class="p">,</span>
        <span class="dl">"</span><span class="s2">isPrimary</span><span class="dl">"</span><span class="p">,</span>
        <span class="dl">"</span><span class="s2">pressure</span><span class="dl">"</span><span class="p">,</span>
        <span class="dl">"</span><span class="s2">tangentialPressure</span><span class="dl">"</span><span class="p">,</span>
        <span class="dl">"</span><span class="s2">tiltX</span><span class="dl">"</span><span class="p">,</span>
        <span class="dl">"</span><span class="s2">tiltY</span><span class="dl">"</span><span class="p">,</span>
        <span class="dl">"</span><span class="s2">twist</span><span class="dl">"</span><span class="p">,</span>
        <span class="dl">"</span><span class="s2">altitudeAngle</span><span class="dl">"</span><span class="p">,</span>
        <span class="dl">"</span><span class="s2">azimuthAngle</span><span class="dl">"</span><span class="p">,</span>
      <span class="p">].</span><span class="nf">includes</span><span class="p">(</span><span class="nx">property</span><span class="p">);</span>

      <span class="nx">box</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nf">makeRow</span><span class="p">(</span><span class="nx">property</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">interesting</span><span class="p">));</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>

  <span class="cm">/*
   * Feature detection for the newer coalesced/predicted APIs.
   */</span>
  <span class="nf">addSection</span><span class="p">(</span><span class="nx">box</span><span class="p">,</span> <span class="dl">"</span><span class="s2">High-frequency Pointer Data</span><span class="dl">"</span><span class="p">);</span>

  <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">e</span><span class="p">.</span><span class="nx">getCoalescedEvents</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">function</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">const</span> <span class="nx">events</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nf">getCoalescedEvents</span><span class="p">();</span>

    <span class="nx">box</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nf">makeRow</span><span class="p">(</span><span class="dl">"</span><span class="s2">getCoalescedEvents()</span><span class="dl">"</span><span class="p">,</span> <span class="nx">events</span><span class="p">.</span><span class="nx">length</span><span class="p">));</span>

    <span class="k">if </span><span class="p">(</span><span class="nx">events</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">const</span> <span class="nx">last</span> <span class="o">=</span> <span class="nx">events</span><span class="p">[</span><span class="nx">events</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">];</span>

      <span class="nx">box</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span>
        <span class="nf">makeRow</span><span class="p">(</span>
          <span class="dl">"</span><span class="s2">last coalesced</span><span class="dl">"</span><span class="p">,</span>
          <span class="s2">`x=</span><span class="p">$&#123;</span><span class="nf">formatNumber</span><span class="p">(</span><span class="nx">last</span><span class="p">.</span><span class="nx">clientX</span><span class="p">)&#125;</span><span class="s2">, `</span> <span class="o">+</span>
            <span class="s2">`y=</span><span class="p">$&#123;</span><span class="nf">formatNumber</span><span class="p">(</span><span class="nx">last</span><span class="p">.</span><span class="nx">clientY</span><span class="p">)&#125;</span><span class="s2">, `</span> <span class="o">+</span>
            <span class="s2">`pressure=</span><span class="p">$&#123;</span><span class="nf">formatNumber</span><span class="p">(</span><span class="nx">last</span><span class="p">.</span><span class="nx">pressure</span><span class="p">)&#125;</span><span class="s2">, `</span> <span class="o">+</span>
            <span class="s2">`tiltX=</span><span class="p">$&#123;</span><span class="nf">formatNumber</span><span class="p">(</span><span class="nx">last</span><span class="p">.</span><span class="nx">tiltX</span><span class="p">)&#125;</span><span class="s2">, `</span> <span class="o">+</span>
            <span class="s2">`tiltY=</span><span class="p">$&#123;</span><span class="nf">formatNumber</span><span class="p">(</span><span class="nx">last</span><span class="p">.</span><span class="nx">tiltY</span><span class="p">)&#125;</span><span class="s2">`</span><span class="p">,</span>
        <span class="p">),</span>
      <span class="p">);</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
    <span class="nx">box</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nf">makeRow</span><span class="p">(</span><span class="dl">"</span><span class="s2">getCoalescedEvents()</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">NOT SUPPORTED</span><span class="dl">"</span><span class="p">));</span>
  <span class="p">&#125;</span>

  <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">e</span><span class="p">.</span><span class="nx">getPredictedEvents</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">function</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">const</span> <span class="nx">events</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nf">getPredictedEvents</span><span class="p">();</span>

    <span class="nx">box</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nf">makeRow</span><span class="p">(</span><span class="dl">"</span><span class="s2">getPredictedEvents()</span><span class="dl">"</span><span class="p">,</span> <span class="nx">events</span><span class="p">.</span><span class="nx">length</span><span class="p">));</span>

    <span class="k">if </span><span class="p">(</span><span class="nx">events</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">const</span> <span class="nx">last</span> <span class="o">=</span> <span class="nx">events</span><span class="p">[</span><span class="nx">events</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">];</span>

      <span class="nx">box</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span>
        <span class="nf">makeRow</span><span class="p">(</span>
          <span class="dl">"</span><span class="s2">last predicted</span><span class="dl">"</span><span class="p">,</span>
          <span class="s2">`x=</span><span class="p">$&#123;</span><span class="nf">formatNumber</span><span class="p">(</span><span class="nx">last</span><span class="p">.</span><span class="nx">clientX</span><span class="p">)&#125;</span><span class="s2">, `</span> <span class="o">+</span>
            <span class="s2">`y=</span><span class="p">$&#123;</span><span class="nf">formatNumber</span><span class="p">(</span><span class="nx">last</span><span class="p">.</span><span class="nx">clientY</span><span class="p">)&#125;</span><span class="s2">, `</span> <span class="o">+</span>
            <span class="s2">`pressure=</span><span class="p">$&#123;</span><span class="nf">formatNumber</span><span class="p">(</span><span class="nx">last</span><span class="p">.</span><span class="nx">pressure</span><span class="p">)&#125;</span><span class="s2">`</span><span class="p">,</span>
        <span class="p">),</span>
      <span class="p">);</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
    <span class="nx">box</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nf">makeRow</span><span class="p">(</span><span class="dl">"</span><span class="s2">getPredictedEvents()</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">NOT SUPPORTED</span><span class="dl">"</span><span class="p">));</span>
  <span class="p">&#125;</span>

  <span class="cm">/*
   * Show every property actually present on the event prototype.
   * This catches browser-specific/new PointerEvent properties that
   * aren't in our predefined list.
   */</span>
  <span class="nf">addSection</span><span class="p">(</span><span class="nx">box</span><span class="p">,</span> <span class="dl">"</span><span class="s2">Other PointerEvent Properties</span><span class="dl">"</span><span class="p">);</span>

  <span class="kd">const</span> <span class="nx">known</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">Set</span><span class="p">();</span>

  <span class="k">for </span><span class="p">(</span><span class="kd">const</span> <span class="p">[,</span> <span class="nx">properties</span><span class="p">]</span> <span class="k">of</span> <span class="nx">EVENT_PROPERTIES</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">for </span><span class="p">(</span><span class="kd">const</span> <span class="nx">property</span> <span class="k">of</span> <span class="nx">properties</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">known</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span><span class="nx">property</span><span class="p">);</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>

  <span class="kd">let</span> <span class="nx">proto</span> <span class="o">=</span> <span class="nx">e</span><span class="p">;</span>

  <span class="kd">const</span> <span class="nx">discovered</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">Set</span><span class="p">();</span>

  <span class="k">while </span><span class="p">(</span><span class="nx">proto</span> <span class="o">&amp;&amp;</span> <span class="nx">proto</span> <span class="o">!==</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">for </span><span class="p">(</span><span class="kd">const</span> <span class="nx">property</span> <span class="k">of</span> <span class="nb">Object</span><span class="p">.</span><span class="nf">getOwnPropertyNames</span><span class="p">(</span><span class="nx">proto</span><span class="p">))</span> <span class="p">&#123;</span>
      <span class="nx">discovered</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span><span class="nx">property</span><span class="p">);</span>
    <span class="p">&#125;</span>

    <span class="nx">proto</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nf">getPrototypeOf</span><span class="p">(</span><span class="nx">proto</span><span class="p">);</span>
  <span class="p">&#125;</span>

  <span class="kd">const</span> <span class="nx">other</span> <span class="o">=</span> <span class="p">[...</span><span class="nx">discovered</span><span class="p">]</span>
    <span class="p">.</span><span class="nf">filter</span><span class="p">(</span>
      <span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="o">=&gt;</span>
        <span class="o">!</span><span class="nx">known</span><span class="p">.</span><span class="nf">has</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="o">&amp;&amp;</span>
        <span class="nx">name</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">constructor</span><span class="dl">"</span> <span class="o">&amp;&amp;</span>
        <span class="o">!</span><span class="nx">name</span><span class="p">.</span><span class="nf">startsWith</span><span class="p">(</span><span class="dl">"</span><span class="s2">webkit</span><span class="dl">"</span><span class="p">),</span>
    <span class="p">)</span>
    <span class="p">.</span><span class="nf">sort</span><span class="p">();</span>

  <span class="k">for </span><span class="p">(</span><span class="kd">const</span> <span class="nx">property</span> <span class="k">of</span> <span class="nx">other</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">let</span> <span class="nx">value</span><span class="p">;</span>

    <span class="k">try</span> <span class="p">&#123;</span>
      <span class="nx">value</span> <span class="o">=</span> <span class="nx">e</span><span class="p">[</span><span class="nx">property</span><span class="p">];</span>
    <span class="p">&#125;</span> <span class="k">catch</span> <span class="p">&#123;</span>
      <span class="k">continue</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="cm">/*
     * Don't dump methods/functions.
     */</span>
    <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">value</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">function</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">continue</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="nx">box</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nf">makeRow</span><span class="p">(</span><span class="nx">property</span><span class="p">,</span> <span class="nx">value</span><span class="p">));</span>
  <span class="p">&#125;</span>

  <span class="nx">output</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">box</span><span class="p">);</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">updatePointerPosition</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">e</span><span class="p">.</span><span class="nx">clientX</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">number</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">return</span><span class="p">;</span>
  <span class="p">&#125;</span>

  <span class="kd">const</span> <span class="nx">rect</span> <span class="o">=</span> <span class="nx">testArea</span><span class="p">.</span><span class="nf">getBoundingClientRect</span><span class="p">();</span>

  <span class="nx">crosshair</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">left</span> <span class="o">=</span> <span class="s2">`</span><span class="p">$&#123;</span><span class="nx">e</span><span class="p">.</span><span class="nx">clientX</span> <span class="o">-</span> <span class="nx">rect</span><span class="p">.</span><span class="nx">left</span><span class="p">&#125;</span><span class="s2">px`</span><span class="p">;</span>
  <span class="nx">crosshair</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">top</span> <span class="o">=</span> <span class="s2">`</span><span class="p">$&#123;</span><span class="nx">e</span><span class="p">.</span><span class="nx">clientY</span> <span class="o">-</span> <span class="nx">rect</span><span class="p">.</span><span class="nx">top</span><span class="p">&#125;</span><span class="s2">px`</span><span class="p">;</span>
  <span class="nx">crosshair</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">block</span><span class="dl">"</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">addLog</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="kd">const</span> <span class="nx">line</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">div</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">line</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">log-line</span><span class="dl">"</span><span class="p">;</span>

  <span class="kd">const</span> <span class="nx">time</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">Date</span><span class="p">().</span><span class="nf">toLocaleTimeString</span><span class="p">();</span>

  <span class="nx">line</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span>
    <span class="s2">`&lt;span&gt;</span><span class="p">$&#123;</span><span class="nx">time</span><span class="p">&#125;</span><span class="s2">&lt;/span&gt; `</span> <span class="o">+</span>
    <span class="s2">`</span><span class="p">$&#123;</span><span class="nf">escapeHtml</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">type</span><span class="p">)&#125;</span><span class="s2"> `</span> <span class="o">+</span>
    <span class="s2">`id=</span><span class="p">$&#123;</span><span class="nf">escapeHtml</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">pointerId</span><span class="p">)&#125;</span><span class="s2"> `</span> <span class="o">+</span>
    <span class="s2">`type=</span><span class="p">$&#123;</span><span class="nf">escapeHtml</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">pointerType</span><span class="p">)&#125;</span><span class="s2"> `</span> <span class="o">+</span>
    <span class="s2">`primary=</span><span class="p">$&#123;</span><span class="nf">escapeHtml</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">isPrimary</span><span class="p">)&#125;</span><span class="s2"> `</span> <span class="o">+</span>
    <span class="s2">`pressure=</span><span class="p">$&#123;</span><span class="nf">escapeHtml</span><span class="p">(</span><span class="nf">formatNumber</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">pressure</span><span class="p">))&#125;</span><span class="s2">`</span><span class="p">;</span>

  <span class="nx">log</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">line</span><span class="p">);</span>

  <span class="k">while </span><span class="p">(</span><span class="nx">log</span><span class="p">.</span><span class="nx">children</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="nx">MAX_LOG_LINES</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">log</span><span class="p">.</span><span class="nf">removeChild</span><span class="p">(</span><span class="nx">log</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">);</span>
  <span class="p">&#125;</span>

  <span class="nx">log</span><span class="p">.</span><span class="nx">scrollTop</span> <span class="o">=</span> <span class="nx">log</span><span class="p">.</span><span class="nx">scrollHeight</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">escapeHtml</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="k">return</span> <span class="nc">String</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">replaceAll</span><span class="p">(</span><span class="dl">"</span><span class="s2">&amp;</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">&amp;amp;</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">replaceAll</span><span class="p">(</span><span class="dl">"</span><span class="s2">&lt;</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">&amp;lt;</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">replaceAll</span><span class="p">(</span><span class="dl">"</span><span class="s2">&gt;</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">&amp;gt;</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">replaceAll</span><span class="p">(</span><span class="dl">'</span><span class="s1">"</span><span class="dl">'</span><span class="p">,</span> <span class="dl">"</span><span class="s2">&amp;quot;</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">replaceAll</span><span class="p">(</span><span class="dl">"</span><span class="s2">'</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">&amp;#039;</span><span class="dl">"</span><span class="p">);</span>
<span class="p">&#125;</span>

<span class="cm">/*
 * Install every PointerEvent listener.
 */</span>
<span class="k">for </span><span class="p">(</span><span class="kd">const</span> <span class="nx">eventName</span> <span class="k">of</span> <span class="nx">POINTER_EVENTS</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">testArea</span><span class="p">.</span><span class="nf">addEventListener</span><span class="p">(</span>
    <span class="nx">eventName</span><span class="p">,</span>
    <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">&#123;</span>
      <span class="nf">updatePointerPosition</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span>
      <span class="nf">showEvent</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span>
      <span class="nf">addLog</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span>

      <span class="nx">status</span><span class="p">.</span><span class="nx">textContent</span> <span class="o">=</span>
        <span class="s2">`</span><span class="p">$&#123;</span><span class="nx">e</span><span class="p">.</span><span class="nx">type</span><span class="p">&#125;</span><span class="s2"> · `</span> <span class="o">+</span>
        <span class="s2">`pointerType=</span><span class="p">$&#123;</span><span class="nx">e</span><span class="p">.</span><span class="nx">pointerType</span><span class="p">&#125;</span><span class="s2"> · `</span> <span class="o">+</span>
        <span class="s2">`id=</span><span class="p">$&#123;</span><span class="nx">e</span><span class="p">.</span><span class="nx">pointerId</span><span class="p">&#125;</span><span class="s2">`</span><span class="p">;</span>
    <span class="p">&#125;,</span>
    <span class="p">&#123;</span>
      <span class="na">passive</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
    <span class="p">&#125;,</span>
  <span class="p">);</span>
<span class="p">&#125;</span>

<span class="cm">/*
 * Also listen for traditional mouse events.
 *
 * This is useful for seeing whether the browser is producing
 * compatibility mouse events from the Pencil/touch input.
 */</span>
<span class="kd">const</span> <span class="nx">MOUSE_EVENTS</span> <span class="o">=</span> <span class="p">[</span>
  <span class="dl">"</span><span class="s2">mousedown</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">mousemove</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">mouseup</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">click</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">dblclick</span><span class="dl">"</span><span class="p">,</span>
  <span class="dl">"</span><span class="s2">contextmenu</span><span class="dl">"</span><span class="p">,</span>
<span class="p">];</span>

<span class="k">for </span><span class="p">(</span><span class="kd">const</span> <span class="nx">eventName</span> <span class="k">of</span> <span class="nx">MOUSE_EVENTS</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">testArea</span><span class="p">.</span><span class="nf">addEventListener</span><span class="p">(</span>
    <span class="nx">eventName</span><span class="p">,</span>
    <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">&#123;</span>
      <span class="nf">addLog</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span>
    <span class="p">&#125;,</span>
    <span class="p">&#123;</span>
      <span class="na">passive</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
    <span class="p">&#125;,</span>
  <span class="p">);</span>
<span class="p">&#125;</span>

<span class="cm">/*
 * Show whether the browser exposes PointerEvent at all and which
 * properties exist on its prototype.
 */</span>
<span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">PointerEvent supported:</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">PointerEvent</span><span class="dl">"</span> <span class="k">in</span> <span class="nb">window</span><span class="p">);</span>

<span class="k">if </span><span class="p">(</span><span class="dl">"</span><span class="s2">PointerEvent</span><span class="dl">"</span> <span class="k">in</span> <span class="nb">window</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span>
    <span class="dl">"</span><span class="s2">PointerEvent prototype:</span><span class="dl">"</span><span class="p">,</span>
    <span class="nb">Object</span><span class="p">.</span><span class="nf">getOwnPropertyNames</span><span class="p">(</span><span class="nx">PointerEvent</span><span class="p">.</span><span class="nx">prototype</span><span class="p">),</span>
  <span class="p">);</span>

  <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">PointerEvent features:</span><span class="dl">"</span><span class="p">,</span> <span class="p">&#123;</span>
    <span class="na">altitudeAngle</span><span class="p">:</span> <span class="dl">"</span><span class="s2">altitudeAngle</span><span class="dl">"</span> <span class="k">in</span> <span class="nx">PointerEvent</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span>
    <span class="na">azimuthAngle</span><span class="p">:</span> <span class="dl">"</span><span class="s2">azimuthAngle</span><span class="dl">"</span> <span class="k">in</span> <span class="nx">PointerEvent</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span>
    <span class="na">tangentialPressure</span><span class="p">:</span> <span class="dl">"</span><span class="s2">tangentialPressure</span><span class="dl">"</span> <span class="k">in</span> <span class="nx">PointerEvent</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span>
    <span class="na">twist</span><span class="p">:</span> <span class="dl">"</span><span class="s2">twist</span><span class="dl">"</span> <span class="k">in</span> <span class="nx">PointerEvent</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span>
    <span class="na">width</span><span class="p">:</span> <span class="dl">"</span><span class="s2">width</span><span class="dl">"</span> <span class="k">in</span> <span class="nx">PointerEvent</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span>
    <span class="na">height</span><span class="p">:</span> <span class="dl">"</span><span class="s2">height</span><span class="dl">"</span> <span class="k">in</span> <span class="nx">PointerEvent</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span>
    <span class="na">pressure</span><span class="p">:</span> <span class="dl">"</span><span class="s2">pressure</span><span class="dl">"</span> <span class="k">in</span> <span class="nx">PointerEvent</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span>
  <span class="p">&#125;);</span>
<span class="p">&#125;</span>

<span class="cm">/*
 * Initial feature summary.
 */</span>
<span class="nx">status</span><span class="p">.</span><span class="nx">textContent</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">Ready — touch or use Apple Pencil in the area below.</span><span class="dl">"</span><span class="p">;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/5dnpx3zc/8/">original jsfiddle post</a></p>
