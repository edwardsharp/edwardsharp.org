---
title: "sixTimer"
date: "2013-11-29T01:48:38.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-mQKSa/"
source_id: "mQKSa"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/mQKSa/20/"
source_revision: 20
---
<iframe class="code-demo" src="{{ '/content/media/2013/2013-11-29-jsfiddle-mQKSa-demo.html' | relative_url }}" title="sixTimer" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>SHOW A STATUS BAR EVERY SIX MINUTES</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"http://code.jquery.com/ui/1.10.3/jquery-ui.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;link</span>
  <span class="na">rel=</span><span class="s">"stylesheet"</span>
  <span class="na">href=</span><span class="s">"http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css"</span>
<span class="nt">/&gt;</span>
<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"sixr"</span> <span class="na">style=</span><span class="s">"display: none"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"time"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"hour"</span><span class="nt">&gt;&lt;/span&gt;</span> <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"minute"</span><span class="nt">&gt;&lt;/span&gt;</span>
    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"second"</span><span class="nt">&gt;&lt;/span&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"progressbar"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"progress-label"</span><span class="nt">&gt;&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"dTxt"</span><span class="nt">&gt;&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nc">.ui-progressbar</span> <span class="p">&#123;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">relative</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.progress-label</span> <span class="p">&#123;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#fff</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">50%</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">4px</span><span class="p">;</span>
  <span class="nl">font-weight</span><span class="p">:</span> <span class="nb">bold</span><span class="p">;</span>
  <span class="nl">text-shadow</span><span class="p">:</span> <span class="m">0px</span> <span class="m">0px</span> <span class="m">10px</span> <span class="nx">#000</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.ui-widget-header</span> <span class="p">&#123;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">gray</span><span class="p">;</span>
  <span class="nl">border-color</span><span class="p">:</span> <span class="nx">gray</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nf">#sixr</span> <span class="p">&#123;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="kd">var</span> <span class="nx">boolCycle</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">secToNextCycle</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">arr6</span> <span class="o">=</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">6</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">18</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">30</span><span class="p">,</span> <span class="mi">36</span><span class="p">,</span> <span class="mi">42</span><span class="p">,</span> <span class="mi">48</span><span class="p">,</span> <span class="mi">54</span><span class="p">];</span>
<span class="kd">var</span> <span class="nx">arr</span> <span class="o">=</span> <span class="p">[];</span>
<span class="kd">var</span> <span class="nx">timez</span> <span class="o">=</span> <span class="p">&#123;&#125;;</span>
<span class="c1">//init the time schedule as an array of objz</span>
<span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">h</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">h</span> <span class="o">&lt;</span> <span class="mi">13</span><span class="p">;</span> <span class="nx">h</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">m</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">m</span> <span class="o">&lt;</span> <span class="mi">10</span><span class="p">;</span> <span class="nx">m</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">arr</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nf">zPad</span><span class="p">(</span><span class="nx">h</span><span class="p">.</span><span class="nf">toString</span><span class="p">())</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">:</span><span class="dl">"</span> <span class="o">+</span> <span class="nf">zPad</span><span class="p">(</span><span class="nx">arr6</span><span class="p">[</span><span class="nx">m</span><span class="p">].</span><span class="nf">toString</span><span class="p">()));</span>
  <span class="p">&#125;</span>
<span class="p">&#125;</span>

<span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="nx">arr</span><span class="p">);</span>
<span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="nx">arr</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span>

<span class="c1">//zero-zero-based");</span>
<span class="nx">displayTxtItems</span> <span class="o">=</span> <span class="mi">120</span><span class="p">;</span>
<span class="nx">displayTxt</span> <span class="o">=</span> <span class="p">[];</span>

<span class="nf">$</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#progressbar</span><span class="dl">"</span><span class="p">).</span><span class="nf">progressbar</span><span class="p">(&#123;</span>
    <span class="na">value</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
  <span class="p">&#125;);</span>
<span class="p">&#125;);</span>

<span class="kd">function</span> <span class="nf">zPad</span><span class="p">(</span><span class="nx">num</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">num</span> <span class="o">&lt;</span> <span class="mi">10</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">return</span> <span class="dl">"</span><span class="s2">0</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">num</span><span class="p">;</span>
  <span class="p">&#125;</span>
  <span class="k">return</span> <span class="nx">num</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">sixTimer</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="kd">function</span> <span class="nf">getTime</span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">date</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">Date</span><span class="p">();</span>
      <span class="k">return</span> <span class="p">&#123;</span>
        <span class="na">zPhour</span><span class="p">:</span> <span class="nf">twelveHr</span><span class="p">(</span><span class="nx">date</span><span class="p">.</span><span class="nf">getHours</span><span class="p">()),</span>
        <span class="na">zPminute</span><span class="p">:</span> <span class="nf">zeroPad</span><span class="p">(</span><span class="nx">date</span><span class="p">.</span><span class="nf">getMinutes</span><span class="p">()),</span>
        <span class="na">zPsecond</span><span class="p">:</span> <span class="nf">zeroPad</span><span class="p">(</span><span class="nx">date</span><span class="p">.</span><span class="nf">getSeconds</span><span class="p">()),</span>
        <span class="na">hour</span><span class="p">:</span> <span class="nf">twelveHr</span><span class="p">(</span><span class="nx">date</span><span class="p">.</span><span class="nf">getHours</span><span class="p">()),</span>
        <span class="na">minute</span><span class="p">:</span> <span class="nx">date</span><span class="p">.</span><span class="nf">getMinutes</span><span class="p">(),</span>
        <span class="na">second</span><span class="p">:</span> <span class="nx">date</span><span class="p">.</span><span class="nf">getSeconds</span><span class="p">(),</span>
      <span class="p">&#125;;</span>
    <span class="p">&#125;</span>
    <span class="kd">function</span> <span class="nf">twelveHr</span><span class="p">(</span><span class="nx">h</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">h</span> <span class="o">&gt;</span> <span class="mi">12</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">h</span> <span class="o">=</span> <span class="nx">h</span> <span class="o">-</span> <span class="mi">12</span><span class="p">;</span>
      <span class="p">&#125;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">h</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">h</span> <span class="o">=</span> <span class="mi">12</span><span class="p">;</span>
      <span class="p">&#125;</span>
      <span class="k">return</span> <span class="nx">h</span><span class="p">;</span>
    <span class="p">&#125;</span>
    <span class="kd">function</span> <span class="nf">zeroPad</span><span class="p">(</span><span class="nx">num</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">num</span> <span class="o">&lt;</span> <span class="mi">10</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">return</span> <span class="dl">"</span><span class="s2">_0</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">num</span><span class="p">;</span>
      <span class="p">&#125;</span>
      <span class="k">return</span> <span class="dl">"</span><span class="s2">_</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">num</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">timeInterval</span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">now</span> <span class="o">=</span> <span class="nf">getTime</span><span class="p">();</span>

      <span class="kd">var</span> <span class="nx">progVal</span> <span class="o">=</span> <span class="p">(((</span><span class="nx">now</span><span class="p">.</span><span class="nx">minute</span> <span class="o">%</span> <span class="mi">6</span><span class="p">)</span> <span class="o">*</span> <span class="mi">60</span> <span class="o">+</span> <span class="nx">now</span><span class="p">.</span><span class="nx">second</span><span class="p">)</span> <span class="o">/</span> <span class="mi">360</span><span class="p">)</span> <span class="o">*</span> <span class="mi">100</span><span class="p">;</span>

      <span class="kd">var</span> <span class="nx">minutes</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">floor</span><span class="p">((</span><span class="mi">360</span> <span class="o">*</span> <span class="p">(</span><span class="nx">progVal</span> <span class="o">/</span> <span class="mi">100</span><span class="p">))</span> <span class="o">/</span> <span class="mi">60</span><span class="p">);</span>
      <span class="kd">var</span> <span class="nx">seconds</span> <span class="o">=</span> <span class="mi">360</span> <span class="o">*</span> <span class="p">(</span><span class="nx">progVal</span> <span class="o">/</span> <span class="mi">100</span><span class="p">)</span> <span class="o">-</span> <span class="nx">minutes</span> <span class="o">*</span> <span class="mi">60</span><span class="p">;</span>
      <span class="kd">var</span> <span class="nx">pLabel</span> <span class="o">=</span>
        <span class="nb">Math</span><span class="p">.</span><span class="nf">abs</span><span class="p">(</span><span class="nx">minutes</span><span class="p">.</span><span class="nf">toFixed</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span> <span class="o">-</span> <span class="mi">5</span><span class="p">)</span> <span class="o">+</span>
        <span class="dl">"</span><span class="s2">:</span><span class="dl">"</span> <span class="o">+</span>
        <span class="nf">zPad</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nf">abs</span><span class="p">(</span><span class="nx">seconds</span><span class="p">.</span><span class="nf">toFixed</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span> <span class="o">-</span> <span class="mi">60</span><span class="p">));</span>
      <span class="c1">//BLAM! magic nearest MOD</span>
      <span class="kd">var</span> <span class="nx">pLabelR</span> <span class="o">=</span> <span class="nx">arr6</span><span class="p">.</span><span class="nf">reduce</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">prev</span><span class="p">,</span> <span class="nx">curr</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">abs</span><span class="p">(</span><span class="nx">now</span><span class="p">.</span><span class="nx">minute</span> <span class="o">%</span> <span class="mi">6</span><span class="p">)</span> <span class="o">&lt;</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">abs</span><span class="p">(</span><span class="nx">prev</span> <span class="o">-</span> <span class="nx">now</span><span class="p">.</span><span class="nx">minute</span><span class="p">)</span>
          <span class="p">?</span> <span class="nx">curr</span>
          <span class="p">:</span> <span class="nx">prev</span><span class="p">;</span>
      <span class="p">&#125;);</span>

      <span class="kd">var</span> <span class="nx">pLabel2</span> <span class="o">=</span> <span class="nf">zPad</span><span class="p">(</span><span class="nx">now</span><span class="p">.</span><span class="nx">zPhour</span><span class="p">)</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">:</span><span class="dl">"</span> <span class="o">+</span> <span class="nf">zPad</span><span class="p">(</span><span class="nx">pLabelR</span><span class="p">);</span>
      <span class="kd">var</span> <span class="nx">myIndex</span> <span class="o">=</span> <span class="nx">arr</span><span class="p">.</span><span class="nf">indexOf</span><span class="p">(</span><span class="nx">pLabel2</span><span class="p">);</span>
      <span class="c1">//good thing we've got arrays of times and values to display of the same length!</span>
      <span class="c1">// console.log(pLabel2);</span>
      <span class="c1">// console.log(displayTxt[arr.indexOf(pLabel2)]);</span>
      <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#dTxt</span><span class="dl">"</span><span class="p">).</span><span class="nf">html</span><span class="p">(</span><span class="nx">displayTxt</span><span class="p">[</span><span class="nx">myIndex</span><span class="p">]);</span>

      <span class="c1">//  console.log(arr.indexOf(pLabel2));</span>

      <span class="c1">//console.log(minutes.toFixed(0), seconds.toFixed(0));</span>
      <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.progress-label</span><span class="dl">"</span><span class="p">).</span><span class="nf">text</span><span class="p">(</span><span class="nx">pLabel</span><span class="p">);</span>

      <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#time</span><span class="dl">"</span><span class="p">).</span><span class="nf">html</span><span class="p">(</span>
        <span class="dl">"</span><span class="s2">&lt;span class='hour'&gt;</span><span class="dl">"</span> <span class="o">+</span>
          <span class="nx">now</span><span class="p">.</span><span class="nx">zPhour</span> <span class="o">+</span>
          <span class="dl">"</span><span class="s2">&lt;/span&gt;</span><span class="dl">"</span> <span class="o">+</span>
          <span class="dl">"</span><span class="s2">&lt;span class='minute'&gt;</span><span class="dl">"</span> <span class="o">+</span>
          <span class="nx">now</span><span class="p">.</span><span class="nx">zPminute</span> <span class="o">+</span>
          <span class="dl">"</span><span class="s2">&lt;/span&gt;</span><span class="dl">"</span> <span class="o">+</span>
          <span class="dl">"</span><span class="s2">&lt;span class='second'&gt;</span><span class="dl">"</span> <span class="o">+</span>
          <span class="nx">now</span><span class="p">.</span><span class="nx">zPsecond</span> <span class="o">+</span>
          <span class="dl">"</span><span class="s2"> </span><span class="dl">"</span> <span class="o">+</span>
          <span class="nx">pLabel2</span> <span class="o">+</span>
          <span class="dl">"</span><span class="s2"> </span><span class="dl">"</span> <span class="o">+</span>
          <span class="nx">myIndex</span> <span class="o">+</span>
          <span class="dl">"</span><span class="s2">&lt;/span&gt;</span><span class="dl">"</span><span class="p">,</span>
      <span class="p">);</span>

      <span class="c1">//update progressbar</span>
      <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#progressbar</span><span class="dl">"</span><span class="p">).</span><span class="nf">progressbar</span><span class="p">(</span><span class="dl">"</span><span class="s2">option</span><span class="dl">"</span><span class="p">,</span> <span class="p">&#123;</span>
        <span class="na">value</span><span class="p">:</span> <span class="nx">progVal</span><span class="p">,</span>
      <span class="p">&#125;);</span>

      <span class="c1">//this if logic seems like it could be prone to errors...</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">arr6</span><span class="p">.</span><span class="nf">indexOf</span><span class="p">(</span><span class="nx">now</span><span class="p">.</span><span class="nx">minute</span><span class="p">)</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="p">(</span><span class="nx">now</span><span class="p">.</span><span class="nx">second</span> <span class="o">%</span> <span class="mi">60</span><span class="p">))</span> <span class="p">&#123;</span>
        <span class="nx">boolCycle</span> <span class="o">=</span> <span class="nx">boolCycle</span> <span class="p">?</span> <span class="kc">false</span> <span class="p">:</span> <span class="kc">true</span><span class="p">;</span>
        <span class="c1">//console.log(boolCycle);</span>
      <span class="p">&#125;</span>
      <span class="nx">bg</span> <span class="o">=</span> <span class="dl">""</span><span class="p">;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">boolCycle</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">bg</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">#ffff00</span><span class="dl">"</span><span class="p">;</span>
      <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
        <span class="nx">bg</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">#ff6600</span><span class="dl">"</span><span class="p">;</span>
      <span class="p">&#125;</span>
      <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#progressbar</span><span class="dl">"</span><span class="p">).</span><span class="nf">css</span><span class="p">(&#123;</span>
        <span class="na">background</span><span class="p">:</span> <span class="nx">bg</span><span class="p">,</span>
      <span class="p">&#125;);</span>
    <span class="p">&#125;</span>

    <span class="nf">timeInterval</span><span class="p">();</span>
    <span class="nf">setInterval</span><span class="p">(</span><span class="nx">timeInterval</span><span class="p">,</span> <span class="mi">1000</span><span class="p">);</span>
  <span class="p">&#125;;</span>
<span class="p">&#125;)(</span><span class="nx">jQuery</span><span class="p">);</span>

<span class="nf">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nf">ready</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#sixr</span><span class="dl">"</span><span class="p">).</span><span class="nf">sixTimer</span><span class="p">();</span>
<span class="p">&#125;);</span>

<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">1. sprinkle glitter</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">2. 6 plastic bagz in the mouth</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">3. take off your shirt and pantz and put them back on backwardz</span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">4. write 6 checkz for 6.66</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">5. read 6 linez of text</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">6. put your shirt over your head and move around the space</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">7. write six wordz on a body</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">8. $666 website shopping cart</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">9. read a #TEXT</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">10. nothing</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">11. shake</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">12. say PDX housing ad price/desc.</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">13. contact mic air bag</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">14. contact mic floor</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">15. drink water</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">16. body scan put me in coach</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">17. say BKLYN housing ad price/desc.</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">18. write 3m read 3m</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">19. yell and be louder than those around you</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">20. yell freely and without presupposition or doubt</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">21. yell along with the wind and the sea and the roar gasoline enginez</span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">22. hum along with the power generator</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">23. move diagonally through the space</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">24. resemble the movement of a telephone pole</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">25. bag shake</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">26. say sorry into a bag</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">27. yell along with your refrigerator, yell alongside your local authority, yell alongside your politician </span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">28. maintain a sense of purpose</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">29. fill bag with air</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">30. whisper sorry into a bag</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">31. rip off shirt’s arm, sew back on</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">32. notice the architecture</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">33. look out a window</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">34. eat food</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">35. changed into pure seeing, I will absorb, as before, the proportions of human bodies, the color of irises, a Paris street in June at dawn, all of it incomprehensible, incomprehensible the multitude of visible things.</span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">36. say random lines of #TEXT to someone else</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">37. go outside &amp; say random lines of #TEXT</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">38. march in a line</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">39. read #TEXT quietly to someone else</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">40. read 3m baghead remember 3m</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">41. baghead walk in sq. pattern</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">42. lean over</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">43. alternate falling into someone’s arms</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">44. jump while the contact mic is on floor</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">45. make breathing audible</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">46. move very slowly in a large circular pattern</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">47. observe things in the space around you. let those observations guide your movement</span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">48. say aloud childhood memories while walking backwards</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">49. say aloud memories having to do with getting something for free</span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">50. wander around space rotating arms in circles</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">51. stand on one leg</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">52. lay on floor, cover mouth, say confession</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">53. remember a painting &amp; move</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">54. autograph a chest</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">55. wave a receipt in the air</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">56. (ballgag your mouth)/(contact mic mouth) and sing new york, new york</span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">57. point your finger accusingly</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">58. handcuff your handz</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">59. handcuff your leggz</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">60. handcuff your hand to another person’s hand</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">61. handcuff yourself to a chair</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">62. handcuff your legs, ballgag/contactmic your mouth, and crawl around the room on your stomach</span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">63. your ear, your eye, your shoulder, and your leg</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">64. with one or more objects create a line on the ground cross back and forth over it again and again</span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">65. take off your bootz put one back one and walk around the room</span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">66. put bag on head &amp; tape someone else </span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">67. trade clothes several times</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">68. write a word on the bottom on one of your feet write an antonym to that word on the bottom of other foot </span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">69. ask yourself how you are doing today respond to yourself</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">70. high kick</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">71. whip the floor with the non buckle side of your belt</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">72. whip the walls with the non buckle side of your belt</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">73. whip your backside with the non buckle side of your belt</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">74. apply lipstick and kiss the parts of your body to can reach with your mouth</span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">75. paint your finger/toe nails black. say “open, close”</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">76. apply mascara. say “send, receive”</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">77. mumble to yourself starting softly and getting progressively louder</span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">78. continuously take off and put on your shirt </span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">79. move specifically in response to sounds around you</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">80. make noises with your mouth closed</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">81. have a conversation with someone else about predator drones</span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">82. sing from the lowest to the highest pitch you can </span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">83. gradually but determinedly avoid being present</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">84. stand in a corner of the room</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">85. put both your arms above head, rotate head forwards and backwards</span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">86. locate a can of trash and stare into the abyss</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">87. take the PWR MESH and place it on various objectz in the space, explain how these objects have now </span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">changed</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">88. The rib cage can move by itself from side to side on a plane parallel to the floor</span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">89. light a sage smudge stick and walk around the space</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">90. plug your ears, move elbows and knees in synchronization </span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">91. move about the room and say aloud the things you see</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">92. say as many street names as you can think </span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">93. move around the space and say text that can be read </span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">94. talk with someone else about how filming the police may reduce harassment </span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">95. rotate your pelvis forward &amp; back 6 times, side to side 6 times</span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">96. untie and retie your shoez</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">97. gradually but determinedly become more present</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">98. take 66 steps, describe the object nearest to you when you complete </span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">99. interact with an inanimate object</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">100. have a conversation with yourself</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">101. exit the space and look back in through the windows </span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">102. call someone on the phone, ask them to describe their movements, recreate these </span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">103. have a conversation with an inanimate object</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">104. try to calm a crowd</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">105. dance like no one is watching</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">106. stick out your tongue moving it around the perimeter of your mouth and open your eyes as wide as your can</span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">107. tape your mouth shut. you are now a statue</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">108. intersect the lines that divide or delineate space around you</span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">109. pretend there is a helicopter chasing you</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">110. pretend there is a ghost chasing you </span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">111. laying with your back on the floor with your legz slightly apart and your armz slightly away from your body close your eyes and transfer energy back and forth from your body and the floor </span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">112. laying with your back on the floor lift your right leg into the air a few inches from the floor the drop it  </span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">lift your left leg into the air a few inches from the floor the drop it</span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">lift your right arm into the air a few inches from the floor the drop it</span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">lift your left arm into the air a few inches from the floor the drop it</span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">lift your  shoulder blades into the air a few inches from the floor the drop it</span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">lift your head into the air a few inches from the floor the drop it</span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">113. attempt to hallucinant </span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">114. take shelter under something</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">115. individually tell everyone around that they are an authority </span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">116. tell someone about your ideal job</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">117. crawl around on all fours like you are looking for something you lost</span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">118. ask someone for their telephone number, walk outside and call them to describe what you see </span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">119. attempt to look at the entire surface area of your body</span><span class="dl">"</span><span class="p">);</span>
<span class="nx">displayTxt</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span>
  <span class="dl">"</span><span class="s2">120. ask someone to show the content of their pockets, describe those contents aloud</span><span class="dl">"</span><span class="p">,</span>
<span class="p">);</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/mQKSa/20/">original jsfiddle post</a></p>
