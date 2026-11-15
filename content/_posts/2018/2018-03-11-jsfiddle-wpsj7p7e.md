---
title: "video upload thing"
date: "2018-03-11T22:34:27.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css","javascript"]
permalink: "/post/jsfiddle-wpsj7p7e/"
source_id: "wpsj7p7e"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/wpsj7p7e/27/"
source_revision: 27
---
<iframe class="code-demo" src="{{ '/content/media/2018/2018-03-11-jsfiddle-wpsj7p7e-demo.html' | relative_url }}" title="video upload thing" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>browser video record &amp; upload</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;h1&gt;</span>videoCAPTURE<span class="nt">&lt;/h1&gt;</span>
<span class="nt">&lt;h2</span> <span class="na">id=</span><span class="s">"allowHint"</span> <span class="na">class=</span><span class="s">"hidden"</span><span class="nt">&gt;</span>
  you need to allow your browser to access your webcam <span class="ni">&amp;amp;</span> microphone.
<span class="nt">&lt;/h2&gt;</span>
<span class="nt">&lt;h2</span> <span class="na">id=</span><span class="s">"hint"</span> <span class="na">class=</span><span class="s">"hidden"</span><span class="nt">&gt;</span>
  hint: use the Chrome or FireFox browser to record video on this page using
  your webcam. otherwise, select a video file to upload.
<span class="nt">&lt;/h2&gt;</span>
<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"streamContainer"</span> <span class="na">class=</span><span class="s">"hidden"</span><span class="nt">&gt;</span>
  source:
  <span class="nt">&lt;select</span> <span class="na">id=</span><span class="s">"audioSource"</span><span class="nt">&gt;&lt;/select&gt;</span>
  <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"audioSource"</span><span class="nt">&gt;</span>audio<span class="nt">&lt;/label&gt;</span>
  <span class="nt">&lt;select</span> <span class="na">id=</span><span class="s">"videoSource"</span><span class="nt">&gt;&lt;/select&gt;</span>
  <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"videoSource"</span><span class="nt">&gt;</span>video<span class="nt">&lt;/label&gt;</span>
  <span class="nt">&lt;br</span> <span class="nt">/&gt;</span>
  <span class="nt">&lt;video</span> <span class="na">id=</span><span class="s">"live"</span> <span class="na">width=</span><span class="s">"320"</span><span class="nt">&gt;&lt;/video&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"livePreview"</span><span class="nt">&gt;</span>live preview<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"buttonContainer"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;button</span> <span class="na">id=</span><span class="s">"record"</span> <span class="na">class=</span><span class="s">"hidden"</span><span class="nt">&gt;</span>record<span class="nt">&lt;/button&gt;</span>
    <span class="nt">&lt;button</span> <span class="na">id=</span><span class="s">"stop"</span> <span class="na">class=</span><span class="s">"hidden"</span><span class="nt">&gt;</span>stop<span class="nt">&lt;/button&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;br</span> <span class="nt">/&gt;</span>
  <span class="nt">&lt;video</span> <span class="na">id=</span><span class="s">"recording"</span> <span class="na">controls</span> <span class="na">width=</span><span class="s">"320"</span><span class="nt">&gt;&lt;/video&gt;</span>
  <span class="nt">&lt;br</span> <span class="nt">/&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"recordedClip"</span><span class="nt">&gt;</span>recorded clip<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"buttonContainer"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;button</span> <span class="na">id=</span><span class="s">"uploadStreamButton"</span> <span class="na">class=</span><span class="s">"hidden"</span><span class="nt">&gt;</span>upload<span class="nt">&lt;/button&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;input</span>
  <span class="na">id=</span><span class="s">"upload"</span>
  <span class="na">class=</span><span class="s">"hidden"</span>
  <span class="na">type=</span><span class="s">"file"</span>
  <span class="na">accept=</span><span class="s">"video/*;capture=camcorder"</span>
<span class="nt">/&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nt">html</span><span class="o">,</span>
<span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">0</span><span class="p">;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">black</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">white</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nt">body</span> <span class="p">&#123;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">flex</span><span class="p">;</span>
  <span class="nl">flex-direction</span><span class="p">:</span> <span class="nb">column</span><span class="p">;</span>
  <span class="nl">justify-content</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
  <span class="nl">align-items</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
  <span class="nl">padding-bottom</span><span class="p">:</span> <span class="m">320px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="o">*</span> <span class="p">&#123;</span>
  <span class="nl">font-weight</span><span class="p">:</span> <span class="m">100</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">white</span><span class="p">;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">black</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nt">button</span> <span class="p">&#123;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">2em</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">0.5em</span><span class="p">;</span>
  <span class="nl">border</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#666</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.hidden</span> <span class="p">&#123;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">none</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.buttonContainer</span> <span class="p">&#123;</span>
  <span class="nl">text-align</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#record</span> <span class="p">&#123;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">red</span><span class="p">;</span>
  <span class="nl">border-radius</span><span class="p">:</span> <span class="m">10px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#record</span><span class="nd">:hover</span> <span class="p">&#123;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#990000</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#stop</span><span class="nd">:hover</span> <span class="p">&#123;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#ddd</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nf">#livePreview</span><span class="o">,</span>
<span class="nf">#recordedClip</span><span class="o">,</span>
<span class="nf">#hint</span><span class="o">,</span>
<span class="nf">#allowHint</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">320px</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="kd">var</span> <span class="nx">recordButton</span><span class="p">,</span> <span class="nx">stopButton</span><span class="p">,</span> <span class="nx">recorder</span><span class="p">,</span> <span class="nx">liveStream</span><span class="p">,</span> <span class="nx">constraints</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">audioSelect</span><span class="p">,</span>
  <span class="nx">videoSelect</span><span class="p">,</span>
  <span class="nx">livePreview</span><span class="p">,</span>
  <span class="nx">upload</span><span class="p">,</span>
  <span class="nx">streamContainer</span><span class="p">,</span>
  <span class="nx">uploadStreamButton</span><span class="p">,</span>
  <span class="nx">hint</span><span class="p">,</span>
  <span class="nx">liveVideo</span><span class="p">,</span>
  <span class="nx">video</span><span class="p">;</span>

<span class="nb">window</span><span class="p">.</span><span class="nx">onload</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nx">audioSelect</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">querySelector</span><span class="p">(</span><span class="dl">"</span><span class="s2">select#audioSource</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">videoSelect</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">querySelector</span><span class="p">(</span><span class="dl">"</span><span class="s2">select#videoSource</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">livePreview</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">querySelector</span><span class="p">(</span><span class="dl">"</span><span class="s2">#livePreview</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">upload</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">querySelector</span><span class="p">(</span><span class="dl">"</span><span class="s2">#upload</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">streamContainer</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">querySelector</span><span class="p">(</span><span class="dl">"</span><span class="s2">#streamContainer</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">uploadStreamButton</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">querySelector</span><span class="p">(</span><span class="dl">"</span><span class="s2">#uploadStreamButton</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">hint</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">querySelector</span><span class="p">(</span><span class="dl">"</span><span class="s2">#hint</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">liveVideo</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">live</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">video</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">recording</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">recordButton</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">record</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">stopButton</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">getElementById</span><span class="p">(</span><span class="dl">"</span><span class="s2">stop</span><span class="dl">"</span><span class="p">);</span>

  <span class="k">if </span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">MediaRecorder</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nb">navigator</span><span class="p">.</span><span class="nx">mediaDevices</span>
      <span class="p">.</span><span class="nf">enumerateDevices</span><span class="p">()</span>
      <span class="p">.</span><span class="nf">then</span><span class="p">(</span><span class="nx">gotDevices</span><span class="p">)</span>
      <span class="p">.</span><span class="nf">then</span><span class="p">(</span><span class="nx">getStream</span><span class="p">)</span>
      <span class="p">.</span><span class="k">catch</span><span class="p">(</span><span class="nx">handleError</span><span class="p">);</span>

    <span class="nx">audioSelect</span><span class="p">.</span><span class="nx">onchange</span> <span class="o">=</span> <span class="nx">getStream</span><span class="p">;</span>
    <span class="nx">videoSelect</span><span class="p">.</span><span class="nx">onchange</span> <span class="o">=</span> <span class="nx">getStream</span><span class="p">;</span>
  <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
    <span class="nx">hint</span><span class="p">.</span><span class="nx">classList</span><span class="p">.</span><span class="nf">remove</span><span class="p">(</span><span class="dl">"</span><span class="s2">hidden</span><span class="dl">"</span><span class="p">);</span>
    <span class="nx">upload</span><span class="p">.</span><span class="nx">classList</span><span class="p">.</span><span class="nf">remove</span><span class="p">(</span><span class="dl">"</span><span class="s2">hidden</span><span class="dl">"</span><span class="p">);</span>
  <span class="p">&#125;</span>
<span class="p">&#125;;</span>

<span class="kd">function</span> <span class="nf">gotDevices</span><span class="p">(</span><span class="nx">deviceInfos</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">!==</span> <span class="nx">deviceInfos</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">deviceInfo</span> <span class="o">=</span> <span class="nx">deviceInfos</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span>
    <span class="kd">var</span> <span class="nx">option</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">option</span><span class="dl">"</span><span class="p">);</span>
    <span class="nx">option</span><span class="p">.</span><span class="nx">value</span> <span class="o">=</span> <span class="nx">deviceInfo</span><span class="p">.</span><span class="nx">deviceId</span><span class="p">;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">deviceInfo</span><span class="p">.</span><span class="nx">kind</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">audioinput</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">option</span><span class="p">.</span><span class="nx">text</span> <span class="o">=</span>
        <span class="nx">deviceInfo</span><span class="p">.</span><span class="nx">label</span> <span class="o">||</span> <span class="dl">"</span><span class="s2">microphone </span><span class="dl">"</span> <span class="o">+</span> <span class="p">(</span><span class="nx">audioSelect</span><span class="p">.</span><span class="nx">length</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span>
      <span class="nx">audioSelect</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">option</span><span class="p">);</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">deviceInfo</span><span class="p">.</span><span class="nx">kind</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">videoinput</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">option</span><span class="p">.</span><span class="nx">text</span> <span class="o">=</span> <span class="nx">deviceInfo</span><span class="p">.</span><span class="nx">label</span> <span class="o">||</span> <span class="dl">"</span><span class="s2">camera </span><span class="dl">"</span> <span class="o">+</span> <span class="p">(</span><span class="nx">videoSelect</span><span class="p">.</span><span class="nx">length</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span>
      <span class="nx">videoSelect</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">option</span><span class="p">);</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">getStream</span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">liveStream</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">liveStream</span><span class="p">.</span><span class="nf">getTracks</span><span class="p">().</span><span class="nf">forEach</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">track</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">track</span><span class="p">.</span><span class="nf">stop</span><span class="p">();</span>
    <span class="p">&#125;);</span>
  <span class="p">&#125;</span>

  <span class="nx">constraints</span> <span class="o">=</span> <span class="p">&#123;</span>
    <span class="na">audio</span><span class="p">:</span> <span class="p">&#123;</span>
      <span class="na">deviceId</span><span class="p">:</span> <span class="p">&#123;</span>
        <span class="na">exact</span><span class="p">:</span> <span class="nx">audioSelect</span><span class="p">.</span><span class="nx">value</span><span class="p">,</span>
      <span class="p">&#125;,</span>
    <span class="p">&#125;,</span>
    <span class="na">video</span><span class="p">:</span> <span class="p">&#123;</span>
      <span class="na">deviceId</span><span class="p">:</span> <span class="p">&#123;</span>
        <span class="na">exact</span><span class="p">:</span> <span class="nx">videoSelect</span><span class="p">.</span><span class="nx">value</span><span class="p">,</span>
      <span class="p">&#125;,</span>
    <span class="p">&#125;,</span>
  <span class="p">&#125;;</span>

  <span class="nb">navigator</span><span class="p">.</span><span class="nx">mediaDevices</span>
    <span class="p">.</span><span class="nf">getUserMedia</span><span class="p">(</span><span class="nx">constraints</span><span class="p">)</span>
    <span class="p">.</span><span class="nf">then</span><span class="p">(</span><span class="nx">gotStream</span><span class="p">)</span>
    <span class="p">.</span><span class="k">catch</span><span class="p">(</span><span class="nx">handleError</span><span class="p">);</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">gotStream</span><span class="p">(</span><span class="nx">stream</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">liveStream</span> <span class="o">=</span> <span class="nx">stream</span><span class="p">;</span>
  <span class="c1">// liveVideo.src = URL.createObjectURL(stream);</span>
  <span class="nx">liveVideo</span><span class="p">.</span><span class="nx">srcObject</span> <span class="o">=</span> <span class="nx">stream</span><span class="p">;</span>
  <span class="nx">liveVideo</span><span class="p">.</span><span class="nf">play</span><span class="p">();</span>
  <span class="nx">streamContainer</span><span class="p">.</span><span class="nx">classList</span><span class="p">.</span><span class="nf">remove</span><span class="p">(</span><span class="dl">"</span><span class="s2">hidden</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">recordButton</span><span class="p">.</span><span class="nx">classList</span><span class="p">.</span><span class="nf">remove</span><span class="p">(</span><span class="dl">"</span><span class="s2">hidden</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">recordButton</span><span class="p">.</span><span class="nf">addEventListener</span><span class="p">(</span><span class="dl">"</span><span class="s2">click</span><span class="dl">"</span><span class="p">,</span> <span class="nx">startRecording</span><span class="p">);</span>
  <span class="nx">stopButton</span><span class="p">.</span><span class="nf">addEventListener</span><span class="p">(</span><span class="dl">"</span><span class="s2">click</span><span class="dl">"</span><span class="p">,</span> <span class="nx">stopRecording</span><span class="p">);</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">handleError</span><span class="p">(</span><span class="nx">error</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">console</span><span class="p">.</span><span class="nf">error</span><span class="p">(</span><span class="dl">"</span><span class="s2">Error: </span><span class="dl">"</span><span class="p">,</span> <span class="nx">error</span><span class="p">);</span>
  <span class="k">if </span><span class="p">(</span><span class="nx">error</span><span class="p">.</span><span class="nx">name</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">NotAllowedError</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nb">document</span><span class="p">.</span><span class="nf">querySelector</span><span class="p">(</span><span class="dl">"</span><span class="s2">#allowHint</span><span class="dl">"</span><span class="p">).</span><span class="nx">classList</span><span class="p">.</span><span class="nf">remove</span><span class="p">(</span><span class="dl">"</span><span class="s2">hidden</span><span class="dl">"</span><span class="p">);</span>
  <span class="p">&#125;</span>
  <span class="nx">upload</span><span class="p">.</span><span class="nx">classList</span><span class="p">.</span><span class="nf">remove</span><span class="p">(</span><span class="dl">"</span><span class="s2">hidden</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">hint</span><span class="p">.</span><span class="nx">classList</span><span class="p">.</span><span class="nf">remove</span><span class="p">(</span><span class="dl">"</span><span class="s2">hidden</span><span class="dl">"</span><span class="p">);</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">startRecording</span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="k">try</span> <span class="p">&#123;</span>
    <span class="nx">recorder</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">MediaRecorder</span><span class="p">(</span><span class="nx">liveStream</span><span class="p">);</span>
    <span class="nx">recorder</span><span class="p">.</span><span class="nf">addEventListener</span><span class="p">(</span><span class="dl">"</span><span class="s2">dataavailable</span><span class="dl">"</span><span class="p">,</span> <span class="nx">onRecordingReady</span><span class="p">);</span>
    <span class="nx">livePreview</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">RECORDING!</span><span class="dl">"</span><span class="p">;</span>
    <span class="nx">recordButton</span><span class="p">.</span><span class="nx">classList</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span><span class="dl">"</span><span class="s2">hidden</span><span class="dl">"</span><span class="p">);</span>
    <span class="nx">stopButton</span><span class="p">.</span><span class="nx">classList</span><span class="p">.</span><span class="nf">remove</span><span class="p">(</span><span class="dl">"</span><span class="s2">hidden</span><span class="dl">"</span><span class="p">);</span>
    <span class="nx">uploadStreamButton</span><span class="p">.</span><span class="nx">classList</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span><span class="dl">"</span><span class="s2">hidden</span><span class="dl">"</span><span class="p">);</span>
    <span class="nx">recorder</span><span class="p">.</span><span class="nf">start</span><span class="p">();</span>
  <span class="p">&#125;</span> <span class="k">catch </span><span class="p">(</span><span class="nx">err</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">could not start recording!</span><span class="dl">"</span><span class="p">);</span>
  <span class="p">&#125;</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">stopRecording</span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="nx">recordButton</span><span class="p">.</span><span class="nx">classList</span><span class="p">.</span><span class="nf">remove</span><span class="p">(</span><span class="dl">"</span><span class="s2">hidden</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">stopButton</span><span class="p">.</span><span class="nx">classList</span><span class="p">.</span><span class="nf">add</span><span class="p">(</span><span class="dl">"</span><span class="s2">hidden</span><span class="dl">"</span><span class="p">);</span>
  <span class="nx">livePreview</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">live preview</span><span class="dl">"</span><span class="p">;</span>
  <span class="nx">uploadStreamButton</span><span class="p">.</span><span class="nx">classList</span><span class="p">.</span><span class="nf">remove</span><span class="p">(</span><span class="dl">"</span><span class="s2">hidden</span><span class="dl">"</span><span class="p">);</span>
  <span class="c1">// stopping the recorder will eventually trigger the 'dataavailable' event</span>
  <span class="nx">recorder</span><span class="p">.</span><span class="nf">stop</span><span class="p">();</span>
  <span class="nx">uploadStreamButton</span><span class="p">.</span><span class="nf">scrollIntoView</span><span class="p">();</span>
<span class="p">&#125;</span>

<span class="kd">function</span> <span class="nf">onRecordingReady</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="c1">// e.data contains a blob representing the recording</span>
  <span class="nx">video</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="nx">URL</span><span class="p">.</span><span class="nf">createObjectURL</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">data</span><span class="p">);</span>
  <span class="nx">video</span><span class="p">.</span><span class="nf">play</span><span class="p">();</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/wpsj7p7e/27/">original jsfiddle post</a></p>
