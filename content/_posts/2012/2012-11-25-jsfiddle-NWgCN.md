---
title: "jsfiddle / NWgCN"
date: "2012-11-25T00:48:56.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-NWgCN/"
source_id: "NWgCN"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/NWgCN/2/"
source_revision: 2
---
<iframe class="code-demo" src="{{ '/content/media/2012/2012-11-25-jsfiddle-NWgCN-demo.html' | relative_url }}" title="jsfiddle / NWgCN" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="cp">&lt;!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt;</span>
<span class="nt">&lt;html&gt;</span>
  <span class="nt">&lt;head&gt;</span>
    <span class="nt">&lt;title&gt;</span>Isometric test<span class="nt">&lt;/title&gt;</span>
    <span class="nt">&lt;link</span> <span class="na">rel=</span><span class="s">"stylesheet"</span> <span class="na">href=</span><span class="s">"style.css"</span> <span class="na">type=</span><span class="s">"text/css"</span> <span class="na">media=</span><span class="s">"screen"</span> <span class="nt">/&gt;</span>

    <span class="nt">&lt;script
      </span><span class="na">type=</span><span class="s">"text/javascript"</span>
      <span class="na">src=</span><span class="s">"http://janne.aukia.com/zoomooz/jquery.zoomooz.min.js"</span>
    <span class="nt">&gt;&lt;/script&gt;</span>

    <span class="nt">&lt;script </span><span class="na">type=</span><span class="s">"text/javascript"</span><span class="nt">&gt;</span>
      <span class="nf">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nf">ready</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
        <span class="nx">$</span><span class="p">.</span><span class="nx">zoomooz</span><span class="p">.</span><span class="nf">setup</span><span class="p">(&#123;</span> <span class="na">nativeanimation</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span> <span class="na">debug</span><span class="p">:</span> <span class="kc">false</span> <span class="p">&#125;);</span>

        <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.cover</span><span class="dl">"</span><span class="p">).</span><span class="nf">click</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">evt</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">evt</span><span class="p">.</span><span class="nf">stopPropagation</span><span class="p">();</span>
          <span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nf">zoomTo</span><span class="p">();</span>
          <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.cover</span><span class="dl">"</span><span class="p">).</span><span class="nf">not</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nf">show</span><span class="p">();</span>
          <span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nf">hide</span><span class="p">();</span>
        <span class="p">&#125;);</span>

        <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.box</span><span class="dl">"</span><span class="p">).</span><span class="nf">click</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">evt</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">evt</span><span class="p">.</span><span class="nf">stopPropagation</span><span class="p">();</span>
          <span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nf">zoomTo</span><span class="p">(&#123;</span> <span class="na">targetsize</span><span class="p">:</span> <span class="mf">0.7</span> <span class="p">&#125;);</span>
        <span class="p">&#125;);</span>

        <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.face</span><span class="dl">"</span><span class="p">).</span><span class="nf">click</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">evt</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">evt</span><span class="p">.</span><span class="nf">stopPropagation</span><span class="p">();</span>
          <span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nf">zoomTo</span><span class="p">();</span>
        <span class="p">&#125;);</span>

        <span class="nf">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nf">click</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">evt</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">evt</span><span class="p">.</span><span class="nf">stopPropagation</span><span class="p">();</span>
          <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">body</span><span class="dl">"</span><span class="p">).</span><span class="nf">zoomTo</span><span class="p">(&#123;</span> <span class="na">targetsize</span><span class="p">:</span> <span class="mf">1.0</span> <span class="p">&#125;);</span>
          <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">.cover</span><span class="dl">"</span><span class="p">).</span><span class="nf">show</span><span class="p">();</span>
        <span class="p">&#125;);</span>
      <span class="p">&#125;);</span>
    <span class="nt">&lt;/script&gt;</span>
  <span class="nt">&lt;/head&gt;</span>
  <span class="nt">&lt;body&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"container"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"cube"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"face"</span> <span class="na">id=</span><span class="s">"f1"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"cover"</span><span class="nt">&gt;&lt;/div&gt;</span>
          <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"facecontent"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"box"</span><span class="nt">&gt;</span>
              Fusce luctus vestibulum tincidunt. Sed sed enim arcu, et placerat
              odio. Aenean sodales, diam a viverra volutpat, odio ipsum molestie
              ipsum, quis tristique lacus orci accumsan elit. Suspendisse
              potenti.
            <span class="nt">&lt;/div&gt;</span>
            <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"box"</span><span class="nt">&gt;</span>
              Ut viverra porttitor orci eget mattis. Ut posuere lectus sed sem
              viverra id pulvinar leo varius. Vivamus lectus nisl, facilisis id
              elementum at, vestibulum eu ante. Cras sem erat, suscipit a
              ultrices in.
            <span class="nt">&lt;/div&gt;</span>
            <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"box"</span><span class="nt">&gt;</span>
              Aenean posuere facilisis ligula et interdum. Nulla facilisi.
              Quisque faucibus semper mauris, vitae bibendum sapien adipiscing
              et. Morbi ornare gravida metus in ullamcorper. Nullam vel nibh
              lacus. Donec ut.
            <span class="nt">&lt;/div&gt;</span>
            <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"box"</span><span class="nt">&gt;</span>
              Nulla non dolor iaculis ante semper tempus ac ac leo. Praesent
              interdum, velit in mollis aliquam, leo leo condimentum nisl, at
              ultrices magna velit eget tellus. Vestibulum nec risus ut orci
              lacinia tempor.
            <span class="nt">&lt;/div&gt;</span>
          <span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"face"</span> <span class="na">id=</span><span class="s">"f2"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"cover"</span><span class="nt">&gt;&lt;/div&gt;</span>
          <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"facecontent"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"box"</span><span class="nt">&gt;</span>
              Fusce luctus vestibulum tincidunt. Sed sed enim arcu, et placerat
              odio. Aenean sodales, diam a viverra volutpat, odio ipsum molestie
              ipsum, quis tristique lacus orci accumsan elit. Suspendisse
              potenti.
            <span class="nt">&lt;/div&gt;</span>
            <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"box"</span><span class="nt">&gt;</span>
              Ut viverra porttitor orci eget mattis. Ut posuere lectus sed sem
              viverra id pulvinar leo varius. Vivamus lectus nisl, facilisis id
              elementum at, vestibulum eu ante. Cras sem erat, suscipit a
              ultrices in.
            <span class="nt">&lt;/div&gt;</span>
            <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"box"</span><span class="nt">&gt;</span>
              Aenean posuere facilisis ligula et interdum. Nulla facilisi.
              Quisque faucibus semper mauris, vitae bibendum sapien adipiscing
              et. Morbi ornare gravida metus in ullamcorper. Nullam vel nibh
              lacus. Donec ut.
            <span class="nt">&lt;/div&gt;</span>
            <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"box"</span><span class="nt">&gt;</span>
              Nulla non dolor iaculis ante semper tempus ac ac leo. Praesent
              interdum, velit in mollis aliquam, leo leo condimentum nisl, at
              ultrices magna velit eget tellus. Vestibulum nec risus ut orci
              lacinia tempor.
            <span class="nt">&lt;/div&gt;</span>
          <span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"face"</span> <span class="na">id=</span><span class="s">"f3"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"cover"</span><span class="nt">&gt;&lt;/div&gt;</span>
          <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"facecontent"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"box"</span><span class="nt">&gt;</span>
              Fusce luctus vestibulum tincidunt. Sed sed enim arcu, et placerat
              odio. Aenean sodales, diam a viverra volutpat, odio ipsum molestie
              ipsum, quis tristique lacus orci accumsan elit. Suspendisse
              potenti.
            <span class="nt">&lt;/div&gt;</span>
            <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"box"</span><span class="nt">&gt;</span>
              Ut viverra porttitor orci eget mattis. Ut posuere lectus sed sem
              viverra id pulvinar leo varius. Vivamus lectus nisl, facilisis id
              elementum at, vestibulum eu ante. Cras sem erat, suscipit a
              ultrices in.
            <span class="nt">&lt;/div&gt;</span>
            <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"box"</span><span class="nt">&gt;</span>
              Aenean posuere facilisis ligula et interdum. Nulla facilisi.
              Quisque faucibus semper mauris, vitae bibendum sapien adipiscing
              et. Morbi ornare gravida metus in ullamcorper. Nullam vel nibh
              lacus. Donec ut.
            <span class="nt">&lt;/div&gt;</span>
            <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"box"</span><span class="nt">&gt;</span>
              Nulla non dolor iaculis ante semper tempus ac ac leo. Praesent
              interdum, velit in mollis aliquam, leo leo condimentum nisl, at
              ultrices magna velit eget tellus. Vestibulum nec risus ut orci
              lacinia tempor.
            <span class="nt">&lt;/div&gt;</span>
          <span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/body&gt;</span>
<span class="nt">&lt;/html&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="c">/* these are not necessary */</span>

<span class="nt">html</span> <span class="p">&#123;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">black</span><span class="p">;</span>
  <span class="nl">font-family</span><span class="p">:</span> <span class="n">Helvetica</span><span class="p">,</span> <span class="n">Arial</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">16px</span><span class="p">;</span>
  <span class="nl">overflow</span><span class="p">:</span> <span class="nb">hidden</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="c">/* i thought this wasn't needed anymore? */</span>
<span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#container</span> <span class="p">&#123;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.face</span> <span class="p">&#123;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">200px</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">200px</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">40px</span><span class="p">;</span>
  <span class="nl">border</span><span class="p">:</span> <span class="m">1px</span> <span class="nb">solid</span> <span class="nx">black</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.box</span> <span class="p">&#123;</span>
  <span class="nl">float</span><span class="p">:</span> <span class="nb">left</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">90px</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">90px</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">2px</span><span class="p">;</span>
  <span class="nl">overflow</span><span class="p">:</span> <span class="nb">hidden</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">8px</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">3px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.box</span><span class="nd">:first-letter</span> <span class="p">&#123;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">292%</span><span class="p">;</span>
  <span class="nl">float</span><span class="p">:</span> <span class="nb">left</span><span class="p">;</span>
  <span class="nl">margin-right</span><span class="p">:</span> <span class="m">3px</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">yellow</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.cover</span><span class="nd">:hover</span><span class="o">,</span>
<span class="nc">.box</span><span class="nd">:hover</span> <span class="p">&#123;</span>
  <span class="nl">cursor</span><span class="p">:</span> <span class="nb">pointer</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#f1</span> <span class="nc">.box</span> <span class="p">&#123;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#ff6600</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#f2</span> <span class="nc">.box</span> <span class="p">&#123;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#ff6600</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#f3</span> <span class="nc">.box</span> <span class="p">&#123;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#ff6600</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#cube</span> <span class="p">&#123;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">relative</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">50%</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">50%</span><span class="p">;</span>
  <span class="nl">-webkit-transform</span><span class="p">:</span> <span class="nf">rotate</span><span class="p">(</span><span class="m">-30deg</span><span class="p">);</span>
  <span class="nl">-moz-transform</span><span class="p">:</span> <span class="nf">rotate</span><span class="p">(</span><span class="m">-30deg</span><span class="p">);</span>
<span class="p">&#125;</span>

<span class="nf">#f1</span> <span class="p">&#123;</span>
  <span class="nl">-webkit-transform</span><span class="p">:</span> <span class="n">skew</span><span class="p">(</span><span class="m">-30deg</span><span class="p">,</span> <span class="m">0deg</span><span class="p">)</span> <span class="nf">scale</span><span class="p">(</span><span class="m">1</span><span class="p">,</span> <span class="m">0.864</span><span class="p">);</span>
  <span class="nl">-moz-transform</span><span class="p">:</span> <span class="n">skew</span><span class="p">(</span><span class="m">-30deg</span><span class="p">,</span> <span class="m">0deg</span><span class="p">)</span> <span class="nf">scale</span><span class="p">(</span><span class="m">1</span><span class="p">,</span> <span class="m">0.864</span><span class="p">);</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#999</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#f2</span> <span class="p">&#123;</span>
  <span class="nl">-webkit-transform</span><span class="p">:</span> <span class="nf">rotate</span><span class="p">(</span><span class="m">120deg</span><span class="p">)</span> <span class="n">skew</span><span class="p">(</span><span class="m">-30deg</span><span class="p">,</span> <span class="m">0deg</span><span class="p">)</span> <span class="nf">scale</span><span class="p">(</span><span class="m">1</span><span class="p">,</span> <span class="m">0.864</span><span class="p">);</span>
  <span class="nl">-moz-transform</span><span class="p">:</span> <span class="nf">rotate</span><span class="p">(</span><span class="m">120deg</span><span class="p">)</span> <span class="n">skew</span><span class="p">(</span><span class="m">-30deg</span><span class="p">,</span> <span class="m">0deg</span><span class="p">)</span> <span class="nf">scale</span><span class="p">(</span><span class="m">1</span><span class="p">,</span> <span class="m">0.864</span><span class="p">);</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#ccc</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#f3</span> <span class="p">&#123;</span>
  <span class="nl">-webkit-transform</span><span class="p">:</span> <span class="nf">rotate</span><span class="p">(</span><span class="m">240deg</span><span class="p">)</span> <span class="n">skew</span><span class="p">(</span><span class="m">-30deg</span><span class="p">,</span> <span class="m">0deg</span><span class="p">)</span> <span class="nf">scale</span><span class="p">(</span><span class="m">1</span><span class="p">,</span> <span class="m">0.864</span><span class="p">);</span>
  <span class="nl">-moz-transform</span><span class="p">:</span> <span class="nf">rotate</span><span class="p">(</span><span class="m">240deg</span><span class="p">)</span> <span class="n">skew</span><span class="p">(</span><span class="m">-30deg</span><span class="p">,</span> <span class="m">0deg</span><span class="p">)</span> <span class="nf">scale</span><span class="p">(</span><span class="m">1</span><span class="p">,</span> <span class="m">0.864</span><span class="p">);</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#eee</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.cover</span> <span class="p">&#123;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">100%</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">z-index</span><span class="p">:</span> <span class="o">+</span><span class="m">1</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.facecontent</span> <span class="p">&#123;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">200px</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">200px</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">40px</span><span class="p">;</span>
  <span class="nl">left</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">z-index</span><span class="p">:</span> <span class="m">-1</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/NWgCN/2/">original jsfiddle post</a></p>
