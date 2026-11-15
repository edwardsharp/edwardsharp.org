---
title: "a calendar layout"
description: "a calendar mockup with a prominent selected date and a compact month grid."
date: "2016-11-26T10:42:51.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css"]
permalink: "/post/jsfiddle-abx9m4ph/"
source_id: "abx9m4ph"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/abx9m4ph/2/"
source_revision: 2
---
<iframe class="code-demo" src="{{ '/content/media/2016/2016-11-26-jsfiddle-abx9m4ph-demo.html' | relative_url }}" title="jsfiddle / abx9m4ph" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;link</span>
  <span class="na">rel=</span><span class="s">"stylesheet"</span>
  <span class="na">href=</span><span class="s">"//cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css"</span>
<span class="nt">/&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"month"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"current_date"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"selected_weekday"</span><span class="nt">&gt;</span>FRI<span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"selected_month"</span><span class="nt">&gt;</span>NOV<span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"selected_day"</span><span class="nt">&gt;</span>26<span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"selected_year"</span><span class="nt">&gt;</span>2016<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>

  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-xs-1"</span><span class="nt">&gt;</span>❮<span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-xs-10"</span> <span class="na">id=</span><span class="s">"current_month"</span><span class="nt">&gt;</span>NOVEMBER<span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-xs-1"</span><span class="nt">&gt;</span>❯<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>

<span class="nt">&lt;ul</span> <span class="na">class=</span><span class="s">"weekdays"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;li&gt;</span>M<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>T<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>W<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>T<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>F<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>S<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>S<span class="nt">&lt;/li&gt;</span>
<span class="nt">&lt;/ul&gt;</span>

<span class="nt">&lt;ul</span> <span class="na">class=</span><span class="s">"days"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;li&gt;&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>1<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>2<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>3<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>4<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>5<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>6<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>7<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>8<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>9<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>10<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>11<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>12<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>13<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>14<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>15<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>16<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>17<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>18<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>19<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>20<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>21<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>22<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>23<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>24<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>25<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;&lt;span</span> <span class="na">class=</span><span class="s">"active"</span><span class="nt">&gt;</span>26<span class="nt">&lt;/span&gt;&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>27<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>28<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>29<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;</span>30<span class="nt">&lt;/li&gt;</span>
<span class="nt">&lt;/ul&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="o">*</span> <span class="p">&#123;</span>
  <span class="nl">box-sizing</span><span class="p">:</span> <span class="nb">border-box</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nt">ul</span> <span class="p">&#123;</span>
  <span class="nl">list-style-type</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">font-family</span><span class="p">:</span> <span class="nb">sans-serif</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.month</span> <span class="p">&#123;</span>
  <span class="nl">font-family</span><span class="p">:</span> <span class="nb">monospace</span><span class="p">,</span> <span class="nb">sans-serif</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">25px</span> <span class="m">25px</span> <span class="m">10px</span> <span class="m">25px</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#1abc9c</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#current_date</span> <span class="p">&#123;</span>
  <span class="nl">text-align</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
  <span class="nl">margin-bottom</span><span class="p">:</span> <span class="m">1em</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#current_month</span> <span class="p">&#123;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">25px</span><span class="p">;</span>
  <span class="nl">text-align</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.month</span> <span class="p">&#123;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">white</span><span class="p">;</span>
  <span class="nl">text-transform</span><span class="p">:</span> <span class="nb">uppercase</span><span class="p">;</span>
  <span class="nl">letter-spacing</span><span class="p">:</span> <span class="m">3px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#selected_weekday</span> <span class="p">&#123;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">25px</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nf">#selected_month</span> <span class="p">&#123;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">25px</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nf">#selected_day</span> <span class="p">&#123;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">40px</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nf">#selected_year</span> <span class="p">&#123;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">18px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.weekdays</span> <span class="p">&#123;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">10px</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#ddd</span><span class="p">;</span>
  <span class="nl">clear</span><span class="p">:</span> <span class="nb">both</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.weekdays</span> <span class="nt">li</span> <span class="p">&#123;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">inline-block</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">13.6%</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#666</span><span class="p">;</span>
  <span class="nl">text-align</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.days</span> <span class="p">&#123;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">10px</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#eee</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.days</span> <span class="nt">li</span> <span class="p">&#123;</span>
  <span class="nl">list-style-type</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">inline-block</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">13.6%</span><span class="p">;</span>
  <span class="nl">text-align</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
  <span class="nl">margin-bottom</span><span class="p">:</span> <span class="m">5px</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">22px</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#777</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.days</span> <span class="nt">li</span> <span class="nc">.active</span> <span class="p">&#123;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">5px</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#1abc9c</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">white</span> <span class="cp">!important</span><span class="p">;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">9999px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="c">/* Add media queries for smaller screens */</span>
<span class="k">@media</span> <span class="nb">screen</span> <span class="n">and</span> <span class="p">(</span><span class="n">max-width</span><span class="p">:</span> <span class="m">720px</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nc">.weekdays</span> <span class="nt">li</span><span class="o">,</span>
  <span class="nc">.days</span> <span class="nt">li</span> <span class="p">&#123;</span>
    <span class="nl">width</span><span class="p">:</span> <span class="m">13.1%</span><span class="p">;</span>
  <span class="p">&#125;</span>
<span class="p">&#125;</span>

<span class="k">@media</span> <span class="nb">screen</span> <span class="n">and</span> <span class="p">(</span><span class="n">max-width</span><span class="p">:</span> <span class="m">420px</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nc">.weekdays</span> <span class="nt">li</span><span class="o">,</span>
  <span class="nc">.days</span> <span class="nt">li</span> <span class="p">&#123;</span>
    <span class="nl">width</span><span class="p">:</span> <span class="m">12.5%</span><span class="p">;</span>
  <span class="p">&#125;</span>
  <span class="nc">.days</span> <span class="nt">li</span> <span class="nc">.active</span> <span class="p">&#123;</span>
    <span class="nl">padding</span><span class="p">:</span> <span class="m">2px</span><span class="p">;</span>
  <span class="p">&#125;</span>
<span class="p">&#125;</span>

<span class="k">@media</span> <span class="nb">screen</span> <span class="n">and</span> <span class="p">(</span><span class="n">max-width</span><span class="p">:</span> <span class="m">290px</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nc">.weekdays</span> <span class="nt">li</span><span class="o">,</span>
  <span class="nc">.days</span> <span class="nt">li</span> <span class="p">&#123;</span>
    <span class="nl">width</span><span class="p">:</span> <span class="m">12.2%</span><span class="p">;</span>
  <span class="p">&#125;</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/abx9m4ph/2/">original jsfiddle post</a></p>
