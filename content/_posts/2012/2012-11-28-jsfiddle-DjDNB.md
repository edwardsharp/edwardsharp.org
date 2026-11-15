---
title: "D3 Force Graph"
description: "a force-directed d3 graph lets branches of a nested dataset expand and collapse when clicked."
date: "2012-11-28T01:17:36.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","javascript","svg"]
permalink: "/post/jsfiddle-DjDNB/"
source_id: "DjDNB"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/DjDNB/1/"
source_revision: 1
---
<iframe class="code-demo" src="{{ '/content/media/2012/2012-11-28-jsfiddle-DjDNB-demo.html' | relative_url }}" title="D3 Force Graph" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://raw.github.com/mbostock/d3/master/d3.v2.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;body&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"chart"</span><span class="nt">&gt;&lt;/div&gt;</span>
<span class="nt">&lt;/body&gt;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="p">&#123;</span>
  <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">flare</span><span class="dl">"</span><span class="p">,</span>
  <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
    <span class="p">&#123;</span>
      <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">analytics</span><span class="dl">"</span><span class="p">,</span>
      <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
        <span class="p">&#123;</span>
          <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">cluster</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">AgglomerativeCluster</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">3938</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">CommunityStructure</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">3812</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">HierarchicalCluster</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">6714</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">MergeEdge</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">743</span> <span class="p">&#125;,</span>
          <span class="p">],</span>
        <span class="p">&#125;,</span>
        <span class="p">&#123;</span>
          <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">graph</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">BetweennessCentrality</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">3534</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">LinkDistance</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">5731</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">MaxFlowMinCut</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">7840</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">ShortestPaths</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">5914</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">SpanningTree</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">3416</span> <span class="p">&#125;,</span>
          <span class="p">],</span>
        <span class="p">&#125;,</span>
        <span class="p">&#123;</span>
          <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">optimization</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">children</span><span class="p">:</span> <span class="p">[&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">AspectRatioBanker</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">7074</span> <span class="p">&#125;],</span>
        <span class="p">&#125;,</span>
      <span class="p">],</span>
    <span class="p">&#125;,</span>
    <span class="p">&#123;</span>
      <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">animate</span><span class="dl">"</span><span class="p">,</span>
      <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Easing</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">17010</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">FunctionSequence</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">5842</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span>
          <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">interpolate</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">ArrayInterpolator</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1983</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">ColorInterpolator</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">2047</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">DateInterpolator</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1375</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Interpolator</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">8746</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">MatrixInterpolator</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">2202</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">NumberInterpolator</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1382</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">ObjectInterpolator</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1629</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">PointInterpolator</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1675</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">RectangleInterpolator</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">2042</span> <span class="p">&#125;,</span>
          <span class="p">],</span>
        <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">ISchedulable</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1041</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Parallel</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">5176</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Pause</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">449</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Scheduler</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">5593</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Sequence</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">5534</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Transition</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">9201</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Transitioner</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">19975</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">TransitionEvent</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1116</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Tween</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">6006</span> <span class="p">&#125;,</span>
      <span class="p">],</span>
    <span class="p">&#125;,</span>
    <span class="p">&#123;</span>
      <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">data</span><span class="dl">"</span><span class="p">,</span>
      <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
        <span class="p">&#123;</span>
          <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">converters</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Converters</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">721</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">DelimitedTextConverter</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">4294</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">GraphMLConverter</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">9800</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">IDataConverter</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1314</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">JSONConverter</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">2220</span> <span class="p">&#125;,</span>
          <span class="p">],</span>
        <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">DataField</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1759</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">DataSchema</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">2165</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">DataSet</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">586</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">DataSource</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">3331</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">DataTable</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">772</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">DataUtil</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">3322</span> <span class="p">&#125;,</span>
      <span class="p">],</span>
    <span class="p">&#125;,</span>
    <span class="p">&#123;</span>
      <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">display</span><span class="dl">"</span><span class="p">,</span>
      <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">DirtySprite</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">8833</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">LineSprite</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1732</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">RectSprite</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">3623</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">TextSprite</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">10066</span> <span class="p">&#125;,</span>
      <span class="p">],</span>
    <span class="p">&#125;,</span>
    <span class="p">&#123;</span>
      <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">flex</span><span class="dl">"</span><span class="p">,</span>
      <span class="na">children</span><span class="p">:</span> <span class="p">[&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">FlareVis</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">4116</span> <span class="p">&#125;],</span>
    <span class="p">&#125;,</span>
    <span class="p">&#123;</span>
      <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">physics</span><span class="dl">"</span><span class="p">,</span>
      <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">DragForce</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1082</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">GravityForce</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1336</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">IForce</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">319</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">NBodyForce</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">10498</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Particle</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">2822</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Simulation</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">9983</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Spring</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">2213</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">SpringForce</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1681</span> <span class="p">&#125;,</span>
      <span class="p">],</span>
    <span class="p">&#125;,</span>
    <span class="p">&#123;</span>
      <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">query</span><span class="dl">"</span><span class="p">,</span>
      <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">AggregateExpression</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1616</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">And</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1027</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Arithmetic</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">3891</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Average</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">891</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">BinaryExpression</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">2893</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Comparison</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">5103</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">CompositeExpression</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">3677</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Count</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">781</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">DateUtil</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">4141</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Distinct</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">933</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Expression</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">5130</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">ExpressionIterator</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">3617</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Fn</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">3240</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">If</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">2732</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">IsA</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">2039</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Literal</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1214</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Match</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">3748</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Maximum</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">843</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span>
          <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">methods</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">add</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">593</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">and</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">330</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">average</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">287</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">count</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">277</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">distinct</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">292</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">div</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">595</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">eq</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">594</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">fn</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">460</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">gt</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">603</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">gte</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">625</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">iff</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">748</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">isa</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">461</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">lt</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">597</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">lte</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">619</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">max</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">283</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">min</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">283</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">mod</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">591</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">mul</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">603</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">neq</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">599</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">not</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">386</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">or</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">323</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">orderby</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">307</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">range</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">772</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">select</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">296</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">stddev</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">363</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">sub</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">600</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">sum</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">280</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">update</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">307</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">variance</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">335</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">where</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">299</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">xor</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">354</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">_</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">264</span> <span class="p">&#125;,</span>
          <span class="p">],</span>
        <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Minimum</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">843</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Not</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1554</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Or</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">970</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Query</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">13896</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Range</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1594</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">StringUtil</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">4130</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Sum</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">791</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Variable</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1124</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Variance</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1876</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Xor</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1101</span> <span class="p">&#125;,</span>
      <span class="p">],</span>
    <span class="p">&#125;,</span>
    <span class="p">&#123;</span>
      <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">scale</span><span class="dl">"</span><span class="p">,</span>
      <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">IScaleMap</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">2105</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">LinearScale</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1316</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">LogScale</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">3151</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">OrdinalScale</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">3770</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">QuantileScale</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">2435</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">QuantitativeScale</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">4839</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">RootScale</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1756</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Scale</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">4268</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">ScaleType</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1821</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">TimeScale</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">5833</span> <span class="p">&#125;,</span>
      <span class="p">],</span>
    <span class="p">&#125;,</span>
    <span class="p">&#123;</span>
      <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">util</span><span class="dl">"</span><span class="p">,</span>
      <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Arrays</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">8258</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Colors</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">10001</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Dates</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">8217</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Displays</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">12555</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Filter</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">2324</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Geometry</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">10993</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span>
          <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">heap</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">FibonacciHeap</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">9354</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">HeapNode</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1233</span> <span class="p">&#125;,</span>
          <span class="p">],</span>
        <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">IEvaluable</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">335</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">IPredicate</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">383</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">IValueProxy</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">874</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span>
          <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">math</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">DenseMatrix</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">3165</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">IMatrix</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">2815</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">SparseMatrix</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">3366</span> <span class="p">&#125;,</span>
          <span class="p">],</span>
        <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Maths</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">17705</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Orientation</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1486</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span>
          <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">palette</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">ColorPalette</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">6367</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Palette</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1229</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">ShapePalette</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">2059</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">SizePalette</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">2291</span> <span class="p">&#125;,</span>
          <span class="p">],</span>
        <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Property</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">5559</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Shapes</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">19118</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Sort</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">6887</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Stats</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">6557</span> <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Strings</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">22026</span> <span class="p">&#125;,</span>
      <span class="p">],</span>
    <span class="p">&#125;,</span>
    <span class="p">&#123;</span>
      <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">vis</span><span class="dl">"</span><span class="p">,</span>
      <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
        <span class="p">&#123;</span>
          <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">axis</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Axes</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1302</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Axis</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">24593</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">AxisGridLine</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">652</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">AxisLabel</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">636</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">CartesianAxes</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">6703</span> <span class="p">&#125;,</span>
          <span class="p">],</span>
        <span class="p">&#125;,</span>
        <span class="p">&#123;</span>
          <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">controls</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">AnchorControl</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">2138</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">ClickControl</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">3824</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Control</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1353</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">ControlList</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">4665</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">DragControl</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">2649</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">ExpandControl</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">2832</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">HoverControl</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">4896</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">IControl</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">763</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">PanZoomControl</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">5222</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">SelectionControl</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">7862</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">TooltipControl</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">8435</span> <span class="p">&#125;,</span>
          <span class="p">],</span>
        <span class="p">&#125;,</span>
        <span class="p">&#123;</span>
          <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">data</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Data</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">20544</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">DataList</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">19788</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">DataSprite</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">10349</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">EdgeSprite</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">3301</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">NodeSprite</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">19382</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span>
              <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">render</span><span class="dl">"</span><span class="p">,</span>
              <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">ArrowType</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">698</span> <span class="p">&#125;,</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">EdgeRenderer</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">5569</span> <span class="p">&#125;,</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">IRenderer</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">353</span> <span class="p">&#125;,</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">ShapeRenderer</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">2247</span> <span class="p">&#125;,</span>
              <span class="p">],</span>
            <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">ScaleBinding</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">11275</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Tree</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">7147</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">TreeBuilder</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">9930</span> <span class="p">&#125;,</span>
          <span class="p">],</span>
        <span class="p">&#125;,</span>
        <span class="p">&#123;</span>
          <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">events</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">DataEvent</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">2313</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">SelectionEvent</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1880</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">TooltipEvent</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1701</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">VisualizationEvent</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1117</span> <span class="p">&#125;,</span>
          <span class="p">],</span>
        <span class="p">&#125;,</span>
        <span class="p">&#123;</span>
          <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">legend</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Legend</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">20859</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">LegendItem</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">4614</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">LegendRange</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">10530</span> <span class="p">&#125;,</span>
          <span class="p">],</span>
        <span class="p">&#125;,</span>
        <span class="p">&#123;</span>
          <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">operator</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">&#123;</span>
              <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">distortion</span><span class="dl">"</span><span class="p">,</span>
              <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">BifocalDistortion</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">4461</span> <span class="p">&#125;,</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Distortion</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">6314</span> <span class="p">&#125;,</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">FisheyeDistortion</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">3444</span> <span class="p">&#125;,</span>
              <span class="p">],</span>
            <span class="p">&#125;,</span>
            <span class="p">&#123;</span>
              <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">encoder</span><span class="dl">"</span><span class="p">,</span>
              <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">ColorEncoder</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">3179</span> <span class="p">&#125;,</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Encoder</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">4060</span> <span class="p">&#125;,</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">PropertyEncoder</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">4138</span> <span class="p">&#125;,</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">ShapeEncoder</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1690</span> <span class="p">&#125;,</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">SizeEncoder</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1830</span> <span class="p">&#125;,</span>
              <span class="p">],</span>
            <span class="p">&#125;,</span>
            <span class="p">&#123;</span>
              <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">filter</span><span class="dl">"</span><span class="p">,</span>
              <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">FisheyeTreeFilter</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">5219</span> <span class="p">&#125;,</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">GraphDistanceFilter</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">3165</span> <span class="p">&#125;,</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">VisibilityFilter</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">3509</span> <span class="p">&#125;,</span>
              <span class="p">],</span>
            <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">IOperator</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">1286</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span>
              <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">label</span><span class="dl">"</span><span class="p">,</span>
              <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Labeler</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">9956</span> <span class="p">&#125;,</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">RadialLabeler</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">3899</span> <span class="p">&#125;,</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">StackedAreaLabeler</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">3202</span> <span class="p">&#125;,</span>
              <span class="p">],</span>
            <span class="p">&#125;,</span>
            <span class="p">&#123;</span>
              <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">layout</span><span class="dl">"</span><span class="p">,</span>
              <span class="na">children</span><span class="p">:</span> <span class="p">[</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">AxisLayout</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">6725</span> <span class="p">&#125;,</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">BundledEdgeRouter</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">3727</span> <span class="p">&#125;,</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">CircleLayout</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">9317</span> <span class="p">&#125;,</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">CirclePackingLayout</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">12003</span> <span class="p">&#125;,</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">DendrogramLayout</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">4853</span> <span class="p">&#125;,</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">ForceDirectedLayout</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">8411</span> <span class="p">&#125;,</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">IcicleTreeLayout</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">4864</span> <span class="p">&#125;,</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">IndentedTreeLayout</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">3174</span> <span class="p">&#125;,</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Layout</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">7881</span> <span class="p">&#125;,</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">NodeLinkTreeLayout</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">12870</span> <span class="p">&#125;,</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">PieLayout</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">2728</span> <span class="p">&#125;,</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">RadialTreeLayout</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">12348</span> <span class="p">&#125;,</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">RandomLayout</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">870</span> <span class="p">&#125;,</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">StackedAreaLayout</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">9121</span> <span class="p">&#125;,</span>
                <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">TreeMapLayout</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">9191</span> <span class="p">&#125;,</span>
              <span class="p">],</span>
            <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Operator</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">2490</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">OperatorList</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">5248</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">OperatorSequence</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">4190</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">OperatorSwitch</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">2581</span> <span class="p">&#125;,</span>
            <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">SortOperator</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">2023</span> <span class="p">&#125;,</span>
          <span class="p">],</span>
        <span class="p">&#125;,</span>
        <span class="p">&#123;</span> <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Visualization</span><span class="dl">"</span><span class="p">,</span> <span class="na">size</span><span class="p">:</span> <span class="mi">16540</span> <span class="p">&#125;,</span>
      <span class="p">],</span>
    <span class="p">&#125;,</span>
  <span class="p">],</span>
<span class="p">&#125;;</span>

<span class="kd">var</span> <span class="nx">w</span> <span class="o">=</span> <span class="mi">960</span><span class="p">,</span>
  <span class="nx">h</span> <span class="o">=</span> <span class="mi">500</span><span class="p">,</span>
  <span class="nx">node</span><span class="p">,</span>
  <span class="nx">link</span><span class="p">,</span>
  <span class="nx">root</span><span class="p">;</span>

<span class="kd">var</span> <span class="nx">force</span> <span class="o">=</span> <span class="nx">d3</span><span class="p">.</span><span class="nx">layout</span><span class="p">.</span><span class="nf">force</span><span class="p">().</span><span class="nf">on</span><span class="p">(</span><span class="dl">"</span><span class="s2">tick</span><span class="dl">"</span><span class="p">,</span> <span class="nx">tick</span><span class="p">).</span><span class="nf">size</span><span class="p">([</span><span class="nx">w</span><span class="p">,</span> <span class="nx">h</span><span class="p">]);</span>

<span class="kd">var</span> <span class="nx">vis</span> <span class="o">=</span> <span class="nx">d3</span>
  <span class="p">.</span><span class="nf">select</span><span class="p">(</span><span class="dl">"</span><span class="s2">#chart</span><span class="dl">"</span><span class="p">)</span>
  <span class="p">.</span><span class="nf">append</span><span class="p">(</span><span class="dl">"</span><span class="s2">svg:svg</span><span class="dl">"</span><span class="p">)</span>
  <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">width</span><span class="dl">"</span><span class="p">,</span> <span class="nx">w</span> <span class="o">+</span> <span class="mi">50</span><span class="p">)</span>
  <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">height</span><span class="dl">"</span><span class="p">,</span> <span class="nx">h</span> <span class="o">+</span> <span class="mi">50</span><span class="p">);</span>

<span class="kd">function</span> <span class="nf">update</span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="kd">var</span> <span class="nx">nodes</span> <span class="o">=</span> <span class="nf">flatten</span><span class="p">(</span><span class="nx">root</span><span class="p">),</span>
    <span class="nx">links</span> <span class="o">=</span> <span class="nx">d3</span><span class="p">.</span><span class="nx">layout</span><span class="p">.</span><span class="nf">tree</span><span class="p">().</span><span class="nf">links</span><span class="p">(</span><span class="nx">nodes</span><span class="p">);</span>

  <span class="c1">// Restart the force layout.</span>
  <span class="nx">force</span><span class="p">.</span><span class="nf">nodes</span><span class="p">(</span><span class="nx">nodes</span><span class="p">).</span><span class="nf">links</span><span class="p">(</span><span class="nx">links</span><span class="p">).</span><span class="nf">start</span><span class="p">();</span>

  <span class="c1">// Update the links…</span>
  <span class="nx">link</span> <span class="o">=</span> <span class="nx">vis</span><span class="p">.</span><span class="nf">selectAll</span><span class="p">(</span><span class="dl">"</span><span class="s2">line.link</span><span class="dl">"</span><span class="p">).</span><span class="nf">data</span><span class="p">(</span><span class="nx">links</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">id</span><span class="p">;</span>
  <span class="p">&#125;);</span>

  <span class="c1">// Enter any new links.</span>
  <span class="nx">link</span>
    <span class="p">.</span><span class="nf">enter</span><span class="p">()</span>
    <span class="p">.</span><span class="nf">insert</span><span class="p">(</span><span class="dl">"</span><span class="s2">svg:line</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">.node</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">class</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">link</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">x1</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">source</span><span class="p">.</span><span class="nx">x</span><span class="p">;</span>
    <span class="p">&#125;)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y1</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">source</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span>
    <span class="p">&#125;)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">x2</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">x</span><span class="p">;</span>
    <span class="p">&#125;)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y2</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span>
    <span class="p">&#125;);</span>

  <span class="c1">// Exit any old links.</span>
  <span class="nx">link</span><span class="p">.</span><span class="nf">exit</span><span class="p">().</span><span class="nf">remove</span><span class="p">();</span>

  <span class="c1">// Update the nodes…</span>
  <span class="nx">node</span> <span class="o">=</span> <span class="nx">vis</span>
    <span class="p">.</span><span class="nf">selectAll</span><span class="p">(</span><span class="dl">"</span><span class="s2">circle.node</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">data</span><span class="p">(</span><span class="nx">nodes</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">id</span><span class="p">;</span>
    <span class="p">&#125;)</span>
    <span class="p">.</span><span class="nf">style</span><span class="p">(</span><span class="dl">"</span><span class="s2">fill</span><span class="dl">"</span><span class="p">,</span> <span class="nx">color</span><span class="p">);</span>

  <span class="c1">// Enter any new nodes.</span>
  <span class="nx">node</span>
    <span class="p">.</span><span class="nf">enter</span><span class="p">()</span>
    <span class="p">.</span><span class="nf">append</span><span class="p">(</span><span class="dl">"</span><span class="s2">svg:circle</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">class</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">node</span><span class="dl">"</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">cx</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">x</span><span class="p">;</span>
    <span class="p">&#125;)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">cy</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span>
    <span class="p">&#125;)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">r</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">sqrt</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">size</span><span class="p">)</span> <span class="o">||</span> <span class="mf">4.5</span><span class="p">;</span>
    <span class="p">&#125;)</span>
    <span class="p">.</span><span class="nf">style</span><span class="p">(</span><span class="dl">"</span><span class="s2">fill</span><span class="dl">"</span><span class="p">,</span> <span class="nx">color</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">on</span><span class="p">(</span><span class="dl">"</span><span class="s2">click</span><span class="dl">"</span><span class="p">,</span> <span class="nx">click</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nx">force</span><span class="p">.</span><span class="nx">drag</span><span class="p">);</span>

  <span class="c1">// Exit any old nodes.</span>
  <span class="nx">node</span><span class="p">.</span><span class="nf">exit</span><span class="p">().</span><span class="nf">remove</span><span class="p">();</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">tick</span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nx">link</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">x1</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">source</span><span class="p">.</span><span class="nx">x</span><span class="p">;</span>
    <span class="p">&#125;)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y1</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">source</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span>
    <span class="p">&#125;)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">x2</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">x</span><span class="p">;</span>
    <span class="p">&#125;)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">y2</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span>
    <span class="p">&#125;);</span>

  <span class="nx">node</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">cx</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">x</span><span class="p">;</span>
    <span class="p">&#125;)</span>
    <span class="p">.</span><span class="nf">attr</span><span class="p">(</span><span class="dl">"</span><span class="s2">cy</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span>
    <span class="p">&#125;);</span>
<span class="p">&#125;</span>

<span class="c1">// Color leaf nodes orange, and packages white or blue.</span>
<span class="kd">function</span> <span class="nf">color</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">_children</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">#3182bd</span><span class="dl">"</span> <span class="p">:</span> <span class="nx">d</span><span class="p">.</span><span class="nx">children</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">#c6dbef</span><span class="dl">"</span> <span class="p">:</span> <span class="dl">"</span><span class="s2">#fd8d3c</span><span class="dl">"</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="c1">// Toggle children on click.</span>
<span class="kd">function</span> <span class="nf">click</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">children</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">d</span><span class="p">.</span><span class="nx">_children</span> <span class="o">=</span> <span class="nx">d</span><span class="p">.</span><span class="nx">children</span><span class="p">;</span>
    <span class="nx">d</span><span class="p">.</span><span class="nx">children</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
  <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
    <span class="nx">d</span><span class="p">.</span><span class="nx">children</span> <span class="o">=</span> <span class="nx">d</span><span class="p">.</span><span class="nx">_children</span><span class="p">;</span>
    <span class="nx">d</span><span class="p">.</span><span class="nx">_children</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
  <span class="p">&#125;</span>
  <span class="nf">update</span><span class="p">();</span>
<span class="p">&#125;</span>

<span class="c1">// Returns a list of all nodes under the root.</span>
<span class="kd">function</span> <span class="nf">flatten</span><span class="p">(</span><span class="nx">root</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="kd">var</span> <span class="nx">nodes</span> <span class="o">=</span> <span class="p">[],</span>
    <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>

  <span class="kd">function</span> <span class="nf">recurse</span><span class="p">(</span><span class="nx">node</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">node</span><span class="p">.</span><span class="nx">children</span><span class="p">)</span> <span class="nx">node</span><span class="p">.</span><span class="nx">children</span><span class="p">.</span><span class="nf">forEach</span><span class="p">(</span><span class="nx">recurse</span><span class="p">);</span>
    <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">node</span><span class="p">.</span><span class="nx">id</span><span class="p">)</span> <span class="nx">node</span><span class="p">.</span><span class="nx">id</span> <span class="o">=</span> <span class="o">++</span><span class="nx">i</span><span class="p">;</span>
    <span class="nx">nodes</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">node</span><span class="p">);</span>
  <span class="p">&#125;</span>

  <span class="nf">recurse</span><span class="p">(</span><span class="nx">root</span><span class="p">);</span>
  <span class="k">return</span> <span class="nx">nodes</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nx">root</span> <span class="o">=</span> <span class="nx">data</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">nodes</span> <span class="o">=</span> <span class="nf">flatten</span><span class="p">(</span><span class="nx">root</span><span class="p">);</span>
<span class="nx">nodes</span><span class="p">.</span><span class="nf">forEach</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">d</span><span class="p">.</span><span class="nx">_children</span> <span class="o">=</span> <span class="nx">d</span><span class="p">.</span><span class="nx">children</span><span class="p">;</span>
  <span class="nx">d</span><span class="p">.</span><span class="nx">children</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
<span class="p">&#125;);</span>
<span class="nf">update</span><span class="p">();</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/DjDNB/1/">original jsfiddle post</a></p>
