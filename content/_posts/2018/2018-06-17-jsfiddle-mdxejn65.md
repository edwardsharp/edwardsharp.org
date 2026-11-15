---
title: "jsfiddle / mdxejn65"
date: "2018-06-17T22:06:00.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css","javascript"]
permalink: "/post/jsfiddle-mdxejn65/"
source_id: "mdxejn65"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/mdxejn65/68/"
source_revision: 68
---
<iframe class="code-demo" src="{{ '/content/media/2018/2018-06-17-jsfiddle-mdxejn65-demo.html' | relative_url }}" title="jsfiddle / mdxejn65" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://cdnjs.cloudflare.com/ajax/libs/three.js/93/three.min.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://cdnjs.cloudflare.com/ajax/libs/stats.js/r16/Stats.min.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://threejs.org/examples/js/controls/OrbitControls.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">black</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="kd">var</span> <span class="nx">scene</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nc">Scene</span><span class="p">();</span>

<span class="kd">var</span> <span class="nx">width</span> <span class="o">=</span> <span class="mi">600</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">height</span> <span class="o">=</span> <span class="mi">400</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">aspect</span> <span class="o">=</span> <span class="nx">width</span> <span class="o">/</span> <span class="nx">height</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">near</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">far</span> <span class="o">=</span> <span class="mi">1500</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">angle</span> <span class="o">=</span> <span class="mi">45</span><span class="p">;</span> <span class="c1">//19</span>

<span class="kd">var</span> <span class="nx">camera</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nc">PerspectiveCamera</span><span class="p">(</span><span class="nx">angle</span><span class="p">,</span> <span class="nx">aspect</span><span class="p">,</span> <span class="nx">near</span><span class="p">,</span> <span class="nx">far</span><span class="p">);</span>
<span class="c1">//camera.position.y=-100;</span>
<span class="nx">camera</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">z</span> <span class="o">=</span> <span class="mi">900</span><span class="p">;</span>

<span class="kd">var</span> <span class="nx">light</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nc">PointLight</span><span class="p">(</span><span class="mh">0xffffff</span><span class="p">);</span>
<span class="nx">light</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
<span class="nx">light</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
<span class="nx">light</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nx">z</span> <span class="o">=</span> <span class="mi">100</span><span class="p">;</span>
<span class="nx">scene</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span><span class="nx">light</span><span class="p">);</span>

<span class="kd">var</span> <span class="nx">renderer</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nc">WebGLRenderer</span><span class="p">();</span>
<span class="nx">renderer</span><span class="p">.</span><span class="nf">setSize</span><span class="p">(</span><span class="nx">width</span><span class="p">,</span> <span class="nx">height</span><span class="p">);</span>
<span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">renderer</span><span class="p">.</span><span class="nx">domElement</span><span class="p">);</span>

<span class="c1">// controls</span>
<span class="kd">var</span> <span class="nx">controls</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nc">OrbitControls</span><span class="p">(</span><span class="nx">camera</span><span class="p">,</span> <span class="nx">renderer</span><span class="p">.</span><span class="nx">domElement</span><span class="p">);</span>
<span class="nx">controls</span><span class="p">.</span><span class="nx">maxPolarAngle</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">*</span> <span class="mf">0.5</span><span class="p">;</span>
<span class="nx">controls</span><span class="p">.</span><span class="nx">minDistance</span> <span class="o">=</span> <span class="mi">100</span><span class="p">;</span>
<span class="nx">controls</span><span class="p">.</span><span class="nx">maxDistance</span> <span class="o">=</span> <span class="mi">1000</span><span class="p">;</span>

<span class="kd">var</span> <span class="nx">stats</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">Stats</span><span class="p">();</span>
<span class="nx">stats</span><span class="p">.</span><span class="nx">domElement</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">position</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">absolute</span><span class="dl">"</span><span class="p">;</span>
<span class="nx">stats</span><span class="p">.</span><span class="nx">domElement</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">bottom</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">0px</span><span class="dl">"</span><span class="p">;</span>
<span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">stats</span><span class="p">.</span><span class="nx">domElement</span><span class="p">);</span>

<span class="kd">var</span> <span class="nx">terrain</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">rotX</span> <span class="o">=</span> <span class="mi">90</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">rotZ</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">vertz</span> <span class="o">=</span> <span class="mi">175</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">geometry</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nc">PlaneGeometry</span><span class="p">(</span><span class="mi">600</span><span class="p">,</span> <span class="mi">600</span><span class="p">,</span> <span class="nx">vertz</span><span class="p">,</span> <span class="nx">vertz</span><span class="p">);</span>
<span class="c1">//random z verticies:</span>
<span class="cm">/* for(var index=0;index&lt;geometry.vertices.length;index++)&#123;
    geometry.vertices[index].z = Math.floor((Math.random()*10)+1);
&#125; */</span>

<span class="kd">var</span> <span class="nx">material</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nc">MeshBasicMaterial</span><span class="p">(&#123;</span>
  <span class="na">wireframe</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
  <span class="na">color</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#2ed2d8</span><span class="dl">"</span><span class="p">,</span>
<span class="p">&#125;);</span>

<span class="nx">terrain</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nc">Mesh</span><span class="p">(</span><span class="nx">geometry</span><span class="p">,</span> <span class="nx">material</span><span class="p">);</span>
<span class="nx">terrain</span><span class="p">.</span><span class="nx">overdraw</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
<span class="nx">terrain</span><span class="p">.</span><span class="nx">rotation</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="nx">rotX</span><span class="p">;</span>
<span class="nx">terrain</span><span class="p">.</span><span class="nx">rotation</span><span class="p">.</span><span class="nx">z</span> <span class="o">=</span> <span class="nx">rotZ</span><span class="p">;</span>
<span class="nx">scene</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span><span class="nx">terrain</span><span class="p">);</span>

<span class="kd">var</span> <span class="nx">spehere</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">ballPosition</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nc">Vector3</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">45</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span>
<span class="kd">var</span> <span class="nx">ballSize</span> <span class="o">=</span> <span class="mi">40</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">ballGeo</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nc">SphereBufferGeometry</span><span class="p">(</span><span class="nx">ballSize</span><span class="p">,</span> <span class="mi">32</span><span class="p">,</span> <span class="mi">16</span><span class="p">);</span>
<span class="kd">var</span> <span class="nx">ballMaterial</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nc">MeshLambertMaterial</span><span class="p">();</span>
<span class="nx">sphere</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nc">Mesh</span><span class="p">(</span><span class="nx">ballGeo</span><span class="p">,</span> <span class="nx">ballMaterial</span><span class="p">);</span>
<span class="nx">scene</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span><span class="nx">sphere</span><span class="p">);</span>

<span class="kd">var</span> <span class="nx">animate</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nf">requestAnimationFrame</span><span class="p">(</span><span class="nx">animate</span><span class="p">);</span>

  <span class="kd">var</span> <span class="nx">diff</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nc">Vector3</span><span class="p">();</span>
  <span class="nx">ballPosition</span><span class="p">.</span><span class="nx">z</span> <span class="o">=</span> <span class="o">-</span><span class="nb">Math</span><span class="p">.</span><span class="nf">sin</span><span class="p">(</span><span class="nb">Date</span><span class="p">.</span><span class="nf">now</span><span class="p">()</span> <span class="o">/</span> <span class="mi">600</span><span class="p">)</span> <span class="o">*</span> <span class="mi">90</span><span class="p">;</span> <span class="c1">//+ 40;</span>
  <span class="nx">ballPosition</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">cos</span><span class="p">(</span><span class="nb">Date</span><span class="p">.</span><span class="nf">now</span><span class="p">()</span> <span class="o">/</span> <span class="mi">400</span><span class="p">)</span> <span class="o">*</span> <span class="mi">70</span><span class="p">;</span>
  <span class="k">for </span><span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">terrain</span><span class="p">.</span><span class="nx">geometry</span><span class="p">.</span><span class="nx">vertices</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="c1">//var vertClone = terrain.geometry.vertices[i].clone();</span>
    <span class="kd">var</span> <span class="nx">pos</span> <span class="o">=</span> <span class="nx">terrain</span><span class="p">.</span><span class="nx">geometry</span><span class="p">.</span><span class="nx">vertices</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span>
    <span class="nx">diff</span><span class="p">.</span><span class="nf">subVectors</span><span class="p">(</span><span class="nx">pos</span><span class="p">,</span> <span class="nx">ballPosition</span><span class="p">);</span>

    <span class="k">if </span><span class="p">(</span><span class="nx">diff</span><span class="p">.</span><span class="nf">length</span><span class="p">()</span> <span class="o">&lt;</span> <span class="nx">ballSize</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="c1">// collided</span>
      <span class="nx">diff</span><span class="p">.</span><span class="nf">normalize</span><span class="p">().</span><span class="nf">multiplyScalar</span><span class="p">(</span><span class="nx">ballSize</span><span class="p">);</span>
      <span class="nx">pos</span><span class="p">.</span><span class="nf">copy</span><span class="p">(</span><span class="nx">ballPosition</span><span class="p">).</span><span class="nf">add</span><span class="p">(</span><span class="nx">diff</span><span class="p">);</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>
  <span class="nx">terrain</span><span class="p">.</span><span class="nx">geometry</span><span class="p">.</span><span class="nx">verticesNeedUpdate</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
  <span class="c1">//terrain.geometry.normalsNeedUpdate = true;</span>
  <span class="nx">sphere</span><span class="p">.</span><span class="nx">position</span><span class="p">.</span><span class="nf">copy</span><span class="p">(</span><span class="nx">ballPosition</span><span class="p">);</span>

  <span class="nx">renderer</span><span class="p">.</span><span class="nf">render</span><span class="p">(</span><span class="nx">scene</span><span class="p">,</span> <span class="nx">camera</span><span class="p">);</span>
  <span class="nx">stats</span><span class="p">.</span><span class="nf">update</span><span class="p">();</span>
<span class="p">&#125;;</span>

<span class="nf">animate</span><span class="p">();</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/mdxejn65/68/">original jsfiddle post</a></p>
