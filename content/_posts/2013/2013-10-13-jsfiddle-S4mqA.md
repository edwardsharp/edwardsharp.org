---
title: "JSONP Google Spreadsheets"
date: "2013-10-13T00:42:13.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-S4mqA/"
source_id: "S4mqA"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/S4mqA/5/"
source_revision: 5
---
<iframe class="code-demo" src="{{ '/content/media/2013/2013-10-13-jsfiddle-S4mqA-demo.html' | relative_url }}" title="JSONP Google Spreadsheets" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>Uses JSONP and Google Spreadsheets to retrieve a spreadsheet of GLLL scores.</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"http://www.google.com/jsapi?fake=.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"http://www.gcmingati.net/wordpress/wp-content/lab/jquery/svwt/js/jquery.slideViewerPro.1.5.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"http://www.gcmingati.net/wordpress/wp-content/lab/jquery/svwt/js/jquery.timers.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"basic"</span> <span class="na">class=</span><span class="s">"svwp"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;ul&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"results"</span><span class="nt">&gt;&lt;/div&gt;</span>
  <span class="nt">&lt;/ul&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nc">.svwp</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">50px</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">20px</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#fff</span><span class="p">;</span>
<span class="p">&#125;</span> <span class="c">/*preloader stuff. do not modify!*/</span>
<span class="nc">.svwp</span> <span class="nt">ul</span> <span class="p">&#123;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">relative</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">-999em</span><span class="p">;</span>
<span class="p">&#125;</span> <span class="c">/*preloader stuff. do not modify!*/</span>
<span class="nc">.slideViewer</span> <span class="p">&#123;</span>
  <span class="c">/*this is the gallery container*/</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">relative</span><span class="p">;</span>
  <span class="nl">overflow</span><span class="p">:</span> <span class="nb">hidden</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#fff</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.slideViewer</span> <span class="nt">ul</span> <span class="p">&#123;</span>
  <span class="c">/*this is your list of images*/</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">relative</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">1%</span><span class="p">;</span>
  <span class="nl">list-style-type</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.slideViewer</span> <span class="nt">ul</span> <span class="nt">li</span> <span class="p">&#123;</span>
  <span class="c">/*each LI item is floated; the whole list is now displayed as if its in one row*/</span>
  <span class="nl">float</span><span class="p">:</span> <span class="nb">left</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="c">/*typographic info*/</span>
<span class="nc">.slideViewer</span> <span class="nt">span</span><span class="nc">.typo</span> <span class="p">&#123;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">6px</span><span class="p">;</span> <span class="c">/* do not modify padding (yet)*/</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#fff</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#000</span><span class="p">;</span>
  <span class="nl">font</span><span class="p">:</span> <span class="nb">normal</span> <span class="m">10px</span> <span class="n">Verdana</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.thumbSlider</span> <span class="p">&#123;</span>
  <span class="c">/*the thumbnails slider contanier*/</span>
  <span class="nl">overflow</span><span class="p">:</span> <span class="nb">hidden</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">1%</span><span class="p">;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nx">#fff</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.thumbSlider</span> <span class="nt">ul</span> <span class="p">&#123;</span>
  <span class="c">/*the thumbnails list of images*/</span>
  <span class="nl">list-style-type</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.thumbSlider</span> <span class="nt">ul</span> <span class="nt">li</span> <span class="p">&#123;</span>
  <span class="nl">float</span><span class="p">:</span> <span class="nb">left</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.thumbSlider</span> <span class="nt">a</span> <span class="p">&#123;</span>
  <span class="c">/*the link wrapped around each thumbnail. dynamically.*/</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#fff</span><span class="p">;</span>
  <span class="nl">text-decoration</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.thumbSlider</span> <span class="nt">a</span> <span class="nt">img</span> <span class="p">&#123;</span>
  <span class="nl">border</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">block</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.thumbSlider</span> <span class="nt">p</span><span class="nc">.tmbrdr</span> <span class="p">&#123;</span>
  <span class="c">/* the border above -not around- each thumb */</span>
  <span class="c">/* width, height and top values are dynamically added by the script. Do not modify. */</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">relative</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">0.01em</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nt">a</span><span class="nc">.left</span><span class="o">,</span>
<span class="nt">a</span><span class="nc">.right</span> <span class="p">&#123;</span>
  <span class="c">/*the left and right buttons (links)*/</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nb">transparent</span><span class="p">;</span> <span class="c">/* could be any color  */</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#ff0000</span><span class="p">;</span>
  <span class="nl">font</span><span class="p">:</span> <span class="nb">bold</span> <span class="m">16px</span> <span class="n">Arial</span><span class="p">;</span>
  <span class="nl">overflow</span><span class="p">:</span> <span class="nb">hidden</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nt">a</span><span class="nc">.left</span> <span class="nt">span</span><span class="o">,</span>
<span class="nt">a</span><span class="nc">.right</span> <span class="nt">span</span> <span class="p">&#123;</span>
<span class="p">&#125;</span>
<span class="nt">a</span><span class="nc">.left</span> <span class="nt">img</span><span class="o">,</span>
<span class="nt">a</span><span class="nc">.right</span> <span class="nt">img</span> <span class="p">&#123;</span>
  <span class="nl">border</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nt">a</span><span class="nc">.l_dis</span><span class="o">,</span>
<span class="nt">a</span><span class="nc">.r_dis</span> <span class="p">&#123;</span>
  <span class="nl">background</span><span class="p">:</span> <span class="nb">transparent</span><span class="p">;</span> <span class="c">/* ALWAYS leave transparent. this is the 'disabled' state of the link !  */</span>
  <span class="nl">cursor</span><span class="p">:</span> <span class="nb">default</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nt">a</span><span class="nc">.l_dis</span> <span class="nt">span</span><span class="o">,</span>
<span class="nt">a</span><span class="nc">.r_dis</span> <span class="nt">span</span> <span class="p">&#123;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nt">a</span><span class="nd">:focus</span> <span class="p">&#123;</span>
  <span class="nl">outline</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="nf">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nf">bind</span><span class="p">(</span><span class="dl">"</span><span class="s2">load</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">div#basic</span><span class="dl">"</span><span class="p">).</span><span class="nf">slideViewerPro</span><span class="p">(&#123;</span>
    <span class="na">thumbs</span><span class="p">:</span> <span class="mi">3</span><span class="p">,</span>
    <span class="na">thumbsPercentReduction</span><span class="p">:</span> <span class="mi">20</span><span class="p">,</span>
    <span class="na">galBorderWidth</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
    <span class="na">galBorderColor</span><span class="p">:</span> <span class="dl">"</span><span class="s2">aqua</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">thumbsTopMargin</span><span class="p">:</span> <span class="mi">10</span><span class="p">,</span>
    <span class="na">thumbsRightMargin</span><span class="p">:</span> <span class="mi">10</span><span class="p">,</span>
    <span class="na">thumbsBorderWidth</span><span class="p">:</span> <span class="mi">5</span><span class="p">,</span>
    <span class="na">thumbsActiveBorderColor</span><span class="p">:</span> <span class="dl">"</span><span class="s2">gold</span><span class="dl">"</span><span class="p">,</span>
    <span class="na">thumbsActiveBorderOpacity</span><span class="p">:</span> <span class="mf">0.8</span><span class="p">,</span>
    <span class="na">thumbsBorderOpacity</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
    <span class="na">buttonsTextColor</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#707070</span><span class="dl">"</span><span class="p">,</span>

    <span class="na">autoslide</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
    <span class="na">typo</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
  <span class="p">&#125;);</span>
<span class="p">&#125;);</span>

<span class="kd">var</span> <span class="nx">url</span> <span class="o">=</span>
  <span class="dl">"</span><span class="s2">https://spreadsheets.google.com/feeds/cells/0Avk2-n_RO4LKdHFvWnpfRG1nMEhKRXpPenR6OF9reXc/1/public/values?alt=json-in-script&amp;callback=?</span><span class="dl">"</span><span class="p">;</span>

<span class="nx">$</span><span class="p">.</span><span class="nf">getJSON</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">cellEntries</span><span class="p">);</span>

<span class="kd">function</span> <span class="nf">cellEntries</span><span class="p">(</span><span class="nx">json</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="kd">var</span> <span class="nx">html</span> <span class="o">=</span> <span class="dl">""</span><span class="p">;</span>
  <span class="kd">var</span> <span class="nx">entries</span> <span class="o">=</span> <span class="nx">json</span><span class="p">.</span><span class="nx">feed</span><span class="p">.</span><span class="nx">entry</span><span class="p">;</span>
  <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">entries</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="c1">//html += entries[i].content.$t + ' ';</span>
    <span class="c1">//if ((i + 1) % 3 == 0) &#123;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">entries</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">gs$cell</span><span class="p">.</span><span class="nx">col</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">2</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">html</span> <span class="o">+=</span> <span class="dl">"</span><span class="s2">&lt;li&gt;</span><span class="dl">"</span><span class="p">;</span>
      <span class="nx">html</span> <span class="o">+=</span> <span class="dl">'</span><span class="s1">&lt;img src="</span><span class="dl">'</span> <span class="o">+</span> <span class="nx">entries</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">content</span><span class="p">.</span><span class="nx">$t</span> <span class="o">+</span> <span class="dl">'</span><span class="s1">" /&gt;</span><span class="dl">'</span><span class="p">;</span>
      <span class="nx">html</span> <span class="o">+=</span> <span class="dl">"</span><span class="s2">&lt;/li&gt;</span><span class="dl">"</span><span class="p">;</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>

  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#results</span><span class="dl">"</span><span class="p">).</span><span class="nf">html</span><span class="p">(</span><span class="nx">html</span><span class="p">);</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/S4mqA/5/">original jsfiddle post</a></p>
