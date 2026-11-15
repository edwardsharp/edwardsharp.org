---
title: "VOL PITCH webkitAudioContext Oscillator"
date: "2013-12-27T00:07:03.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","javascript","web audio","osc"]
permalink: "/post/jsfiddle-nAYLr/"
source_id: "nAYLr"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/nAYLr/9/"
source_revision: 9
---
<iframe class="code-demo" src="{{ '/content/media/2013/2013-12-27-jsfiddle-nAYLr-demo.html' | relative_url }}" title="VOL PITCH webkitAudioContext Oscillator" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>simple volume and pitch osc, n33t0!</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"http://cwilso.github.io/webkitAudioContext-MonkeyPatch/webkitAudioContextMonkeyPatch.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;input</span> <span class="na">id=</span><span class="s">"volume"</span> <span class="na">type=</span><span class="s">"range"</span> <span class="na">min=</span><span class="s">"0"</span> <span class="na">max=</span><span class="s">"1"</span> <span class="na">step=</span><span class="s">"0.1"</span> <span class="na">value=</span><span class="s">"0.1"</span> <span class="nt">/&gt;</span>VOL
<span class="nt">&lt;br</span> <span class="nt">/&gt;</span>
<span class="nt">&lt;input</span> <span class="na">id=</span><span class="s">"pitch"</span> <span class="na">type=</span><span class="s">"range"</span> <span class="na">min=</span><span class="s">"0"</span> <span class="na">max=</span><span class="s">"999"</span> <span class="na">step=</span><span class="s">"0.01"</span> <span class="na">value=</span><span class="s">"666"</span> <span class="nt">/&gt;</span>PITCH
<span class="nt">&lt;br</span> <span class="nt">/&gt;</span>
<span class="nt">&lt;input</span> <span class="na">id=</span><span class="s">"io"</span> <span class="na">class=</span><span class="s">"io"</span> <span class="na">type=</span><span class="s">"checkbox"</span> <span class="nt">/&gt;</span>ON/OFF
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="kd">var</span> <span class="nx">ctx</span> <span class="o">=</span> <span class="k">new</span> <span class="nf">webkitAudioContext</span><span class="p">(),</span>
  <span class="nx">osc</span> <span class="o">=</span> <span class="nx">ctx</span><span class="p">.</span><span class="nf">createOscillator</span><span class="p">(),</span>
  <span class="nx">vol</span> <span class="o">=</span> <span class="nx">ctx</span><span class="p">.</span><span class="nf">createGainNode</span><span class="p">();</span>

<span class="c1">// some defaultz</span>
<span class="nx">osc</span><span class="p">.</span><span class="nx">frequency</span><span class="p">.</span><span class="nx">value</span> <span class="o">=</span> <span class="mi">666</span><span class="p">;</span>
<span class="nx">vol</span><span class="p">.</span><span class="nx">gain</span><span class="p">.</span><span class="nx">value</span> <span class="o">=</span> <span class="mf">0.1</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">chk</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">last_vol</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>

<span class="c1">// route the signal</span>
<span class="nx">osc</span><span class="p">.</span><span class="nf">connect</span><span class="p">(</span><span class="nx">vol</span><span class="p">);</span>
<span class="nx">vol</span><span class="p">.</span><span class="nf">connect</span><span class="p">(</span><span class="nx">ctx</span><span class="p">.</span><span class="nx">destination</span><span class="p">);</span>

<span class="c1">// UI</span>
<span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">volume</span><span class="dl">"</span><span class="p">).</span><span class="nf">addEventListener</span><span class="p">(</span><span class="dl">"</span><span class="s2">change</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">chk</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">vol</span><span class="p">.</span><span class="nx">gain</span><span class="p">.</span><span class="nx">value</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">value</span><span class="p">;</span>
    <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">io</span><span class="dl">"</span><span class="p">).</span><span class="nx">checked</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
  <span class="p">&#125;</span>
<span class="p">&#125;);</span>

<span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">pitch</span><span class="dl">"</span><span class="p">).</span><span class="nf">addEventListener</span><span class="p">(</span><span class="dl">"</span><span class="s2">change</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nx">osc</span><span class="p">.</span><span class="nx">frequency</span><span class="p">.</span><span class="nx">value</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">value</span><span class="p">;</span>
<span class="p">&#125;);</span>

<span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">io</span><span class="dl">"</span><span class="p">).</span><span class="nf">addEventListener</span><span class="p">(</span><span class="dl">"</span><span class="s2">change</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="k">if </span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">checked</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">chk</span> <span class="o">&amp;&amp;</span> <span class="nx">last_vol</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="c1">//set the vol to whatever was prev set</span>
      <span class="nx">vol</span><span class="p">.</span><span class="nx">gain</span><span class="p">.</span><span class="nx">value</span> <span class="o">=</span> <span class="nx">last_vol</span><span class="p">;</span>
      <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">volume</span><span class="dl">"</span><span class="p">).</span><span class="nx">value</span> <span class="o">=</span> <span class="nx">last_vol</span><span class="p">;</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">chk</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="c1">//if no prev set yet use the slider val</span>
      <span class="nx">vol</span><span class="p">.</span><span class="nx">gain</span><span class="p">.</span><span class="nx">value</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">volume</span><span class="dl">"</span><span class="p">).</span><span class="nx">value</span><span class="p">;</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
      <span class="c1">//or this is the first time, turn the osc on!</span>
      <span class="nx">osc</span><span class="p">.</span><span class="nf">noteOn</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span>
      <span class="nx">chk</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
    <span class="c1">//be lazy and turn vol to 0 instead of noteOff cuz the ctx will need to be recreated!</span>
    <span class="c1">//grab the value so it can be set later...</span>
    <span class="nx">last_vol</span> <span class="o">=</span> <span class="nx">vol</span><span class="p">.</span><span class="nx">gain</span><span class="p">.</span><span class="nx">value</span><span class="p">;</span>
    <span class="nx">vol</span><span class="p">.</span><span class="nx">gain</span><span class="p">.</span><span class="nx">value</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
    <span class="c1">//sync the slider.</span>
    <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">volume</span><span class="dl">"</span><span class="p">).</span><span class="nx">value</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
    <span class="c1">//osc.noteOff(0);</span>
  <span class="p">&#125;</span>
<span class="p">&#125;);</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/nAYLr/9/">original jsfiddle post</a></p>
