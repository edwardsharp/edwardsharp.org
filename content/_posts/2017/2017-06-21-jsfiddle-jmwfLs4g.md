---
title: "chat window thing"
date: "2017-06-21T05:59:06.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css"]
permalink: "/post/jsfiddle-jmwfLs4g/"
source_id: "jmwfLs4g"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/jmwfLs4g/2/"
source_revision: 2
---
<iframe class="code-demo" src="{{ '/content/media/2017/2017-06-21-jsfiddle-jmwfLs4g-demo.html' | relative_url }}" title="chat window thing" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"messenger"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"messenger_headerWrap"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"messenger-header"</span><span class="nt">&gt;</span>eeddee<span class="nt">&lt;/span&gt;</span>
    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"messenger-actions"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"uiCloseSmall"</span><span class="nt">&gt;</span><span class="err">&amp;</span>times<span class="nt">&lt;/span&gt;</span>
    <span class="nt">&lt;/span&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"tbox"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"msgWrap_n"</span><span class="nt">&gt;&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"textareaWrap"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;textarea</span> <span class="na">class=</span><span class="s">"nobr"</span> <span class="na">name=</span><span class="s">"chat"</span><span class="nt">&gt;&lt;/textarea&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">font-family</span><span class="p">:</span> <span class="s1">"Segoe UI"</span><span class="p">,</span> <span class="s1">"Lucida Grande"</span><span class="p">,</span> <span class="s1">"Helvetica Neue"</span><span class="p">,</span> <span class="nb">sans-serif</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.messenger</span> <span class="p">&#123;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">350px</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">270px</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#fff</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">fixed</span><span class="p">;</span>
  <span class="nl">bottom</span><span class="p">:</span> <span class="m">50px</span><span class="p">;</span>
  <span class="nl">right</span><span class="p">:</span> <span class="m">20px</span><span class="p">;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">0</span> <span class="m">0</span> <span class="m">4px</span> <span class="m">4px</span><span class="p">;</span>
  <span class="nl">-moz-border-radius</span><span class="p">:</span> <span class="m">0</span> <span class="m">0</span> <span class="m">4px</span> <span class="m">4px</span><span class="p">;</span>
  <span class="nl">-webkit-border-radius</span><span class="p">:</span> <span class="m">0</span> <span class="m">0</span> <span class="m">4px</span> <span class="m">4px</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.messenger</span><span class="nd">:before</span> <span class="p">&#123;</span>
  <span class="nl">content</span><span class="p">:</span> <span class="s1">""</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">100.1%</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">214px</span><span class="p">;</span>
  <span class="nl">border-style</span><span class="p">:</span> <span class="nb">solid</span><span class="p">;</span>
  <span class="nl">border-width</span><span class="p">:</span> <span class="m">15px</span> <span class="m">13px</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">border-color</span><span class="p">:</span> <span class="nx">#a3a3a3</span> <span class="nb">transparent</span><span class="p">;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">block</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">z-index</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.messenger</span><span class="nd">:after</span> <span class="p">&#123;</span>
  <span class="nl">content</span><span class="p">:</span> <span class="s1">""</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">bottom</span><span class="p">:</span> <span class="m">-14.4px</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">215px</span><span class="p">;</span>
  <span class="nl">border-style</span><span class="p">:</span> <span class="nb">solid</span><span class="p">;</span>
  <span class="nl">border-width</span><span class="p">:</span> <span class="m">15px</span> <span class="m">12px</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">border-color</span><span class="p">:</span> <span class="nx">#f0f0f0</span> <span class="nb">transparent</span><span class="p">;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">block</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">z-index</span><span class="p">:</span> <span class="m">1</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.messenger_headerWrap</span> <span class="p">&#123;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">35px</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#fff</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">15px</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#333</span><span class="p">;</span>
  <span class="nl">vertical-align</span><span class="p">:</span> <span class="nb">middle</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.messenger-header</span> <span class="p">&#123;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">7px</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">7px</span><span class="p">;</span>
  <span class="nl">max-width</span><span class="p">:</span> <span class="m">200px</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.messenger-actions</span> <span class="p">&#123;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">right</span><span class="p">:</span> <span class="m">7px</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.tbox</span> <span class="p">&#123;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">78.2%</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">268px</span><span class="p">;</span>
  <span class="nl">border</span><span class="p">:</span> <span class="m">1px</span> <span class="nb">solid</span> <span class="nx">#a3a3a3</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#fff</span><span class="p">;</span>
  <span class="nl">border-bottom</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">14px</span><span class="p">;</span>
  <span class="nl">overflow</span><span class="p">:</span> <span class="nb">auto</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.msgWrap_n</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">238px</span><span class="p">;</span>
  <span class="nl">max-height</span><span class="p">:</span> <span class="m">245px</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">10px</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">relative</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">5px</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.picWrap_u</span> <span class="p">&#123;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">35px</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">35px</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#444</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">bottom</span><span class="p">:</span> <span class="m">15px</span><span class="p">;</span>
  <span class="nl">right</span><span class="p">:</span> <span class="m">20px</span><span class="p">;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">inline-block</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.msgWrap_u</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">180px</span><span class="p">;</span>
  <span class="nl">min-height</span><span class="p">:</span> <span class="m">20px</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#fff</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">relative</span><span class="p">;</span>
  <span class="nl">word-wrap</span><span class="p">:</span> <span class="n">break-word</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.UIgBubble</span> <span class="p">&#123;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">5px</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#0099cc</span><span class="p">;</span>
  <span class="nl">border</span><span class="p">:</span> <span class="nx">#1874cd</span> <span class="nb">solid</span> <span class="m">1px</span><span class="p">;</span>
  <span class="nl">-webkit-border-radius</span><span class="p">:</span> <span class="m">3px</span><span class="p">;</span>
  <span class="nl">-moz-border-radius</span><span class="p">:</span> <span class="m">3px</span><span class="p">;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">3px</span><span class="p">;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">inline-block</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.UIgBubble</span><span class="nd">:before</span> <span class="p">&#123;</span>
  <span class="nl">content</span><span class="p">:</span> <span class="s1">""</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">bottom</span><span class="p">:</span> <span class="m">5px</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
  <span class="nl">border-style</span><span class="p">:</span> <span class="nb">solid</span><span class="p">;</span>
  <span class="nl">border-width</span><span class="p">:</span> <span class="m">7px</span> <span class="m">0</span> <span class="m">7px</span> <span class="m">10px</span><span class="p">;</span>
  <span class="nl">border-color</span><span class="p">:</span> <span class="nb">transparent</span> <span class="nx">#1874cd</span><span class="p">;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">block</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">z-index</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.UIgBubble</span><span class="nd">:after</span> <span class="p">&#123;</span>
  <span class="nl">content</span><span class="p">:</span> <span class="s1">""</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">bottom</span><span class="p">:</span> <span class="m">5px</span><span class="p">;</span>
  <span class="nl">right</span><span class="p">:</span> <span class="m">-7px</span><span class="p">;</span>
  <span class="nl">border-style</span><span class="p">:</span> <span class="nb">solid</span><span class="p">;</span>
  <span class="nl">border-width</span><span class="p">:</span> <span class="m">7px</span> <span class="m">0</span> <span class="m">7px</span> <span class="m">10px</span><span class="p">;</span>
  <span class="nl">border-color</span><span class="p">:</span> <span class="nb">transparent</span> <span class="nx">#0099cc</span><span class="p">;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">block</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">z-index</span><span class="p">:</span> <span class="m">1</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.textareaWrap</span> <span class="p">&#123;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">35px</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">268px</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nb">transparent</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.messenger-header</span><span class="o">,</span>
<span class="nc">.uiCloseSmall</span><span class="nd">:hover</span> <span class="p">&#123;</span>
  <span class="nl">cursor</span><span class="p">:</span> <span class="nb">pointer</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nt">textarea</span><span class="o">[</span><span class="nt">name</span><span class="o">=</span><span class="s1">"chat"</span><span class="o">]</span> <span class="p">&#123;</span>
  <span class="nl">resize</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">24px</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">254px</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">7px</span><span class="p">;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">block</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">14px</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#f0f0f0</span><span class="p">;</span>
  <span class="nl">border-bottom-right-radius</span><span class="p">:</span> <span class="m">4px</span><span class="p">;</span>
  <span class="nl">border-bottom-left-radius</span><span class="p">:</span> <span class="m">4px</span><span class="p">;</span>
  <span class="nl">border-top</span><span class="p">:</span> <span class="m">1px</span> <span class="nb">solid</span> <span class="nx">#d3d3d3</span><span class="p">;</span>
  <span class="nl">border-left</span><span class="p">:</span> <span class="m">1px</span> <span class="nb">solid</span> <span class="nx">#a3a3a3</span><span class="p">;</span>
  <span class="nl">border-bottom</span><span class="p">:</span> <span class="m">1px</span> <span class="nb">solid</span> <span class="nx">#a3a3a3</span><span class="p">;</span>
  <span class="nl">border-right</span><span class="p">:</span> <span class="m">1px</span> <span class="nb">solid</span> <span class="nx">#a3a3a3</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nt">textarea</span><span class="nd">:hover</span> <span class="p">&#123;</span>
  <span class="nl">outline</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
  <span class="nl">border-color</span><span class="p">:</span> <span class="nx">#668cff</span><span class="p">;</span>
  <span class="nl">box-shadow</span><span class="p">:</span> <span class="m">0</span> <span class="m">0</span> <span class="m">1px</span> <span class="nx">#668cff</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nt">textarea</span><span class="nd">:focus</span> <span class="p">&#123;</span>
  <span class="nl">outline</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
  <span class="nl">border-color</span><span class="p">:</span> <span class="nx">#4d79ff</span><span class="p">;</span>
  <span class="nl">box-shadow</span><span class="p">:</span> <span class="m">0</span> <span class="m">0</span> <span class="m">2px</span> <span class="nx">#4d79ff</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/jmwfLs4g/2/">original jsfiddle post</a></p>
