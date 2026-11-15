---
title: "lorumipsum glitch"
date: "2013-12-29T05:27:10.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","javascript","svg","canvas","processing","synthesizer","animation"]
permalink: "/post/jsfiddle-3TLjN/"
source_id: "3TLjN"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/3TLjN/"
source_revision: 0
---
<iframe class="code-demo" src="{{ '/content/media/2013/2013-12-29-jsfiddle-3TLjN-demo.html' | relative_url }}" title="lorumipsum glitch" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"example5"</span> <span class="na">class=</span><span class="s">"example"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;h1&gt;</span>Glitch Transition (different size elements)<span class="nt">&lt;/h1&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"source"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;h2&gt;</span>Page 1<span class="nt">&lt;/h2&gt;</span>
    <span class="nt">&lt;p&gt;</span>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    <span class="nt">&lt;/p&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"middle"</span><span class="nt">&gt;&lt;button</span> <span class="na">class=</span><span class="s">"btn"</span><span class="nt">&gt;</span>Glitch<span class="nt">&lt;/button&gt;&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"target"</span><span class="nt">&gt;&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="cm">/**
	@license glitch.js v0.1 &lt;http://www.github.com/sjhewitt/glitch.js&gt;
	Released under MIT License

	Copyright (c) 2012 Simon Hewitt.
	http://www.twitter.com/sjhewitt
	*/</span>
<span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="cm">/*global html2canvas */</span>

  <span class="kd">var</span> <span class="nx">noop</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;&#125;,</span>
    <span class="cm">/**
     * Set default properties on an object
     * @param  &#123;Object&#125; obj      The target object
     * @param  &#123;Object&#125; defaults The default properties
     * @return &#123;Object&#125;          The target obj
     */</span>
    <span class="nx">defaults</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">defaults</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">prop</span> <span class="k">in</span> <span class="nx">defaults</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">obj</span><span class="p">[</span><span class="nx">prop</span><span class="p">]</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">prop</span><span class="p">]</span> <span class="o">=</span> <span class="nx">defaults</span><span class="p">[</span><span class="nx">prop</span><span class="p">];</span>
      <span class="p">&#125;</span>
      <span class="k">return</span> <span class="nx">obj</span><span class="p">;</span>
    <span class="p">&#125;,</span>
    <span class="cm">/**
     * Generates an integer between min and max
     *
     * @param  &#123;Number&#125; min The lower bound
     * @param  &#123;Number&#125; max The upper bound
     * @return &#123;Number&#125;     A random number
     */</span>
    <span class="nx">getRandInt</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">min</span><span class="p">,</span> <span class="nx">max</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">floor</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nf">random</span><span class="p">()</span> <span class="o">*</span> <span class="p">(</span><span class="nx">max</span> <span class="o">-</span> <span class="nx">min</span><span class="p">)</span> <span class="o">+</span> <span class="nx">min</span><span class="p">);</span>
    <span class="p">&#125;;</span>

  <span class="cm">/**
   * Apply the glitch effect to a canvas object
   *
   * @param  &#123;HTMLCanvasElement&#125; canvas  The canvas (or HTMLImageElement) to apply the glitch to
   * @param  &#123;number&#125;            amount  The amount to glitch the canvas (default: 6)
   * @return &#123;HTMLCanvasElement&#125;         A canvas containing a glitched version
   *                                     of the original canvas
   */</span>
  <span class="kd">var</span> <span class="nx">_glitch</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">canvas</span><span class="p">,</span> <span class="nx">amount</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="c1">// cache the width and height of the canvas locally</span>
      <span class="nx">x</span><span class="p">,</span>
      <span class="nx">y</span><span class="p">,</span>
      <span class="nx">w</span> <span class="o">=</span> <span class="nx">canvas</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span>
      <span class="nx">h</span> <span class="o">=</span> <span class="nx">canvas</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span>
      <span class="c1">// _len is an iterator limit, initially storing the number of slices</span>
      <span class="c1">// to create</span>
      <span class="nx">i</span><span class="p">,</span>
      <span class="nx">_len</span> <span class="o">=</span> <span class="nx">amount</span> <span class="o">||</span> <span class="mi">6</span><span class="p">,</span>
      <span class="c1">// pick a random amount to offset the color channel</span>
      <span class="nx">channelOffset</span> <span class="o">=</span>
        <span class="nf">getRandInt</span><span class="p">(</span><span class="o">-</span><span class="nx">_len</span> <span class="o">*</span> <span class="mi">2</span><span class="p">,</span> <span class="nx">_len</span> <span class="o">*</span> <span class="mi">2</span><span class="p">)</span> <span class="o">*</span> <span class="nx">w</span> <span class="o">*</span> <span class="o">+</span><span class="nf">getRandInt</span><span class="p">(</span><span class="o">-</span><span class="nx">_len</span><span class="p">,</span> <span class="nx">_len</span><span class="p">)</span> <span class="o">*</span> <span class="mi">4</span><span class="p">,</span>
      <span class="c1">// the maximum amount to offset a chunk of the image is a function of its width</span>
      <span class="nx">maxOffset</span> <span class="o">=</span> <span class="p">((</span><span class="nx">_len</span> <span class="o">*</span> <span class="nx">_len</span><span class="p">)</span> <span class="o">/</span> <span class="mi">100</span><span class="p">)</span> <span class="o">*</span> <span class="nx">w</span><span class="p">,</span>
      <span class="c1">// vars for the width and height of the chunk that gets offset</span>
      <span class="nx">chunkWidth</span><span class="p">,</span>
      <span class="nx">chunkHeight</span><span class="p">,</span>
      <span class="c1">// create a temporary canvas to hold the image we're working on</span>
      <span class="nx">tempCanvas</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">canvas</span><span class="dl">"</span><span class="p">),</span>
      <span class="nx">tempCtx</span> <span class="o">=</span> <span class="nx">tempCanvas</span><span class="p">.</span><span class="nf">getContext</span><span class="p">(</span><span class="dl">"</span><span class="s2">2d</span><span class="dl">"</span><span class="p">),</span>
      <span class="nx">srcData</span><span class="p">,</span>
      <span class="nx">targetImageData</span><span class="p">,</span>
      <span class="nx">data</span><span class="p">;</span>

    <span class="c1">// set the dimensions of the working canvas</span>
    <span class="nx">tempCanvas</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="nx">w</span><span class="p">;</span>
    <span class="nx">tempCanvas</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="nx">h</span><span class="p">;</span>

    <span class="c1">// draw the initial image onto the working canvas</span>
    <span class="nx">tempCtx</span><span class="p">.</span><span class="nf">drawImage</span><span class="p">(</span><span class="nx">canvas</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">w</span><span class="p">,</span> <span class="nx">h</span><span class="p">);</span>

    <span class="c1">// store the data of the original image for use when offsetting a channel</span>
    <span class="nx">srcData</span> <span class="o">=</span> <span class="nx">tempCtx</span><span class="p">.</span><span class="nf">getImageData</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">w</span><span class="p">,</span> <span class="nx">h</span><span class="p">).</span><span class="nx">data</span><span class="p">;</span>

    <span class="c1">// randomly offset slices horizontally</span>
    <span class="k">for </span><span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">_len</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="c1">// pick a random y coordinate to slice at</span>
      <span class="nx">y</span> <span class="o">=</span> <span class="nf">getRandInt</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">h</span><span class="p">);</span>

      <span class="c1">// pick a random height of the slice</span>
      <span class="nx">chunkHeight</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">min</span><span class="p">(</span><span class="nf">getRandInt</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="nx">h</span> <span class="o">/</span> <span class="mi">4</span><span class="p">),</span> <span class="nx">h</span> <span class="o">-</span> <span class="nx">y</span><span class="p">);</span>

      <span class="c1">// pick a random horizontal distance to offset the slice</span>
      <span class="nx">x</span> <span class="o">=</span> <span class="nf">getRandInt</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="nx">maxOffset</span><span class="p">);</span>
      <span class="nx">chunkWidth</span> <span class="o">=</span> <span class="nx">w</span> <span class="o">-</span> <span class="nx">x</span><span class="p">;</span>

      <span class="c1">// draw the first chunk</span>
      <span class="nx">tempCtx</span><span class="p">.</span><span class="nf">drawImage</span><span class="p">(</span>
        <span class="nx">canvas</span><span class="p">,</span>
        <span class="mi">0</span><span class="p">,</span>
        <span class="nx">y</span><span class="p">,</span>
        <span class="nx">chunkWidth</span><span class="p">,</span>
        <span class="nx">chunkHeight</span><span class="p">,</span>
        <span class="nx">x</span><span class="p">,</span>
        <span class="nx">y</span><span class="p">,</span>
        <span class="nx">chunkWidth</span><span class="p">,</span>
        <span class="nx">chunkHeight</span><span class="p">,</span>
      <span class="p">);</span>

      <span class="c1">// draw the rest</span>
      <span class="nx">tempCtx</span><span class="p">.</span><span class="nf">drawImage</span><span class="p">(</span>
        <span class="nx">canvas</span><span class="p">,</span>
        <span class="nx">chunkWidth</span><span class="p">,</span>
        <span class="nx">y</span><span class="p">,</span>
        <span class="nx">x</span><span class="p">,</span>
        <span class="nx">chunkHeight</span><span class="p">,</span>
        <span class="mi">0</span><span class="p">,</span>
        <span class="nx">y</span><span class="p">,</span>
        <span class="nx">x</span><span class="p">,</span>
        <span class="nx">chunkHeight</span><span class="p">,</span>
      <span class="p">);</span>
    <span class="p">&#125;</span>

    <span class="c1">// get hold of the ImageData for the working image</span>
    <span class="nx">targetImageData</span> <span class="o">=</span> <span class="nx">tempCtx</span><span class="p">.</span><span class="nf">getImageData</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">w</span><span class="p">,</span> <span class="nx">h</span><span class="p">);</span>

    <span class="c1">// and get a local reference to the rgba data array</span>
    <span class="nx">data</span> <span class="o">=</span> <span class="nx">targetImageData</span><span class="p">.</span><span class="nx">data</span><span class="p">;</span>

    <span class="c1">// Copy a random color channel from the original image into</span>
    <span class="c1">// the working canvas, offsetting it by a random amount</span>
    <span class="c1">//</span>
    <span class="c1">// ImageData arrays are a single dimension array that contains</span>
    <span class="c1">// 4 values for each pixel.</span>
    <span class="c1">// so, by initializing `i` to a random number between 0 and 2,</span>
    <span class="c1">// and incrementing by 4 on each iteration, we can replace only</span>
    <span class="c1">// a single channel in the image</span>
    <span class="k">for </span><span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="nf">getRandInt</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">3</span><span class="p">),</span> <span class="nx">_len</span> <span class="o">=</span> <span class="nx">srcData</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">_len</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">4</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">data</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="nx">channelOffset</span><span class="p">]</span> <span class="o">=</span> <span class="nx">srcData</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span>
    <span class="p">&#125;</span>

    <span class="c1">// Make the image brighter by doubling the rgb values</span>
    <span class="k">for </span><span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">_len</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">data</span><span class="p">[</span><span class="nx">i</span><span class="o">++</span><span class="p">]</span> <span class="o">*=</span> <span class="mi">2</span><span class="p">;</span>
      <span class="nx">data</span><span class="p">[</span><span class="nx">i</span><span class="o">++</span><span class="p">]</span> <span class="o">*=</span> <span class="mi">2</span><span class="p">;</span>
      <span class="nx">data</span><span class="p">[</span><span class="nx">i</span><span class="o">++</span><span class="p">]</span> <span class="o">*=</span> <span class="mi">2</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="c1">// TODO: The above loops are the most costly in this function, iterating</span>
    <span class="c1">// over all the pixels in the image twice.</span>
    <span class="c1">// It maybe possible to optimize this by combining both loops into one,</span>
    <span class="c1">// and only processing every other line, as alternate lines are replaced</span>
    <span class="c1">// with black in the 'scan lines' block belop</span>

    <span class="c1">// copy the tweaked ImageData back into the context</span>
    <span class="nx">tempCtx</span><span class="p">.</span><span class="nf">putImageData</span><span class="p">(</span><span class="nx">targetImageData</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span>

    <span class="c1">// add scan lines</span>
    <span class="nx">tempCtx</span><span class="p">.</span><span class="nx">fillStyle</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">rgb(0,0,0)</span><span class="dl">"</span><span class="p">;</span>
    <span class="k">for </span><span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">h</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">2</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">tempCtx</span><span class="p">.</span><span class="nf">fillRect</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">w</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span>
    <span class="p">&#125;</span>

    <span class="k">return</span> <span class="nx">tempCanvas</span><span class="p">;</span>
  <span class="p">&#125;;</span>

  <span class="cm">/**
   * Creates a canvas containing a glitched version of the element
   * @param  &#123;DOMElement&#125; el     The element to glitch
   * @param  &#123;Object&#125;   options  An object containing the complete callback,
   *                             the amount to glitch the image, and any
   *                             html2canvas options
   */</span>
  <span class="kd">var</span> <span class="nx">glitch</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">options</span> <span class="o">=</span> <span class="nf">defaults</span><span class="p">(</span><span class="nx">options</span> <span class="o">||</span> <span class="p">&#123;&#125;,</span> <span class="p">&#123;</span>
      <span class="c1">// the amount to glitch the image</span>
      <span class="na">amount</span><span class="p">:</span> <span class="mi">6</span><span class="p">,</span>
      <span class="c1">// a callback that takes the glitched canvas as its only argument</span>
      <span class="na">complete</span><span class="p">:</span> <span class="nx">noop</span><span class="p">,</span>
    <span class="p">&#125;);</span>

    <span class="c1">// callback for when the element has been rendered</span>
    <span class="nx">options</span><span class="p">.</span><span class="nx">onrendered</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">canvas</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">options</span><span class="p">.</span><span class="nf">complete</span><span class="p">(</span><span class="nf">_glitch</span><span class="p">(</span><span class="nx">canvas</span><span class="p">,</span> <span class="nx">options</span><span class="p">.</span><span class="nx">amount</span><span class="p">));</span>
    <span class="p">&#125;;</span>

    <span class="c1">// render the element onto a canvas</span>
    <span class="nf">html2canvas</span><span class="p">(</span><span class="nx">el</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="p">?</span> <span class="nx">el</span> <span class="p">:</span> <span class="p">[</span><span class="nx">el</span><span class="p">],</span> <span class="nx">options</span><span class="p">);</span>
  <span class="p">&#125;;</span>

  <span class="cm">/**
   * Replace el with a glitched version of it
   * @param  &#123;DOMElement&#125; el  The element to glitch
   * @param  &#123;Object&#125; options An object containing the options for glitch
   */</span>
  <span class="nx">glitch</span><span class="p">.</span><span class="nx">replace</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">||</span> <span class="p">&#123;&#125;;</span>
    <span class="c1">// store a reference to the complete callback so we can use the same</span>
    <span class="c1">// options for the glitch function call</span>
    <span class="kd">var</span> <span class="nx">_complete</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">complete</span><span class="p">;</span>
    <span class="nx">options</span><span class="p">.</span><span class="nx">complete</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">canvas</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">$</span> <span class="o">&amp;&amp;</span> <span class="nx">el</span> <span class="k">instanceof</span> <span class="nx">$</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">el</span><span class="p">.</span><span class="nf">after</span><span class="p">(</span><span class="nx">canvas</span><span class="p">).</span><span class="nf">detach</span><span class="p">();</span>
      <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
        <span class="c1">// no jQuery...</span>
        <span class="nx">el</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nf">insertBefore</span><span class="p">(</span><span class="nx">canvas</span><span class="p">,</span> <span class="nx">el</span><span class="p">);</span>
        <span class="nx">el</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nf">removeChild</span><span class="p">(</span><span class="nx">el</span><span class="p">);</span>
      <span class="p">&#125;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">_complete</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nf">_complete</span><span class="p">();</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;;</span>

    <span class="nf">glitch</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span>
  <span class="p">&#125;;</span>

  <span class="cm">/**
   * Replace `el` with `newEl` by overlaying a glitched version of `el`, then
   * animating it out to reveal `newEl`
   *
   * The animation will take into account elements of different sizes by sliding
   * the container to reveal it, however it looks best if the elements to be
   * transitioned between are of similar sizes
   *
   * @param  &#123;jQuery&#125; el     The original element that will be glitched
   * @param  &#123;jQuery&#125; newEl  The element to show
   * @param  &#123;Object&#125; options An object containing the options for the animation
   *                          and any options for html2canvas
   */</span>
  <span class="nx">glitch</span><span class="p">.</span><span class="nx">transition</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">newEl</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="c1">// set the default options</span>
    <span class="nx">options</span> <span class="o">=</span> <span class="nf">defaults</span><span class="p">(</span><span class="nx">options</span> <span class="o">||</span> <span class="p">&#123;&#125;,</span> <span class="p">&#123;</span>
      <span class="c1">// the amount to glitch the image</span>
      <span class="na">amount</span><span class="p">:</span> <span class="mi">6</span><span class="p">,</span>
      <span class="c1">// A callback when the animation is complete</span>
      <span class="na">complete</span><span class="p">:</span> <span class="nx">noop</span><span class="p">,</span>
      <span class="c1">// The delay after rendering the glitched element until starting the transition</span>
      <span class="na">delay</span><span class="p">:</span> <span class="mi">300</span><span class="p">,</span>
      <span class="c1">// The duration of the transition effect</span>
      <span class="na">duration</span><span class="p">:</span> <span class="mi">500</span><span class="p">,</span>
      <span class="c1">// The z-index to apply to the overlay. You might need to tweak this if</span>
      <span class="c1">// you have things that appear above the element, or are using high</span>
      <span class="c1">// z-indexes in your page</span>
      <span class="na">zIndex</span><span class="p">:</span> <span class="mi">1000</span><span class="p">,</span>
      <span class="c1">// the transition effect to use. This may be "fade" or "slide"</span>
      <span class="na">effect</span><span class="p">:</span> <span class="dl">"</span><span class="s2">fade</span><span class="dl">"</span><span class="p">,</span>
      <span class="c1">// The size of the top border. Set to 0 to disable, only used in slide mode</span>
      <span class="na">borderSize</span><span class="p">:</span> <span class="mi">2</span><span class="p">,</span>
      <span class="c1">// The color of the top border, only used in slide mode</span>
      <span class="na">borderColor</span><span class="p">:</span> <span class="dl">"</span><span class="s2">green</span><span class="dl">"</span><span class="p">,</span>
    <span class="p">&#125;);</span>

    <span class="c1">// add the new element to the dom so we can properly calculate its dimensions</span>
    <span class="nx">newEl</span><span class="p">.</span><span class="nf">insertAfter</span><span class="p">(</span><span class="nx">el</span><span class="p">);</span>

    <span class="c1">// store a reference to the complete callback so we can use the same</span>
    <span class="c1">// options for the glitch function call</span>
    <span class="kd">var</span> <span class="nx">_complete</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">complete</span><span class="p">,</span>
      <span class="c1">// get the dimensions of the elements so we can resize the targetContainer</span>
      <span class="c1">// to reveal all the content after the glitch transition</span>
      <span class="nx">origHeight</span> <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nf">outerHeight</span><span class="p">(</span><span class="kc">true</span><span class="p">),</span>
      <span class="nx">origWidth</span> <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nf">outerWidth</span><span class="p">(</span><span class="kc">true</span><span class="p">),</span>
      <span class="nx">targetHeight</span> <span class="o">=</span> <span class="nx">newEl</span><span class="p">.</span><span class="nf">outerHeight</span><span class="p">(</span><span class="kc">true</span><span class="p">),</span>
      <span class="nx">targetWidth</span> <span class="o">=</span> <span class="nx">newEl</span><span class="p">.</span><span class="nf">outerWidth</span><span class="p">(</span><span class="kc">true</span><span class="p">),</span>
      <span class="nx">origOverflow</span> <span class="o">=</span> <span class="nx">newEl</span><span class="p">.</span><span class="nf">css</span><span class="p">(</span><span class="dl">"</span><span class="s2">overflow</span><span class="dl">"</span><span class="p">);</span>

    <span class="c1">// take the new element out of the dom again</span>
    <span class="nx">newEl</span><span class="p">.</span><span class="nf">detach</span><span class="p">();</span>

    <span class="c1">// create a callback that will</span>
    <span class="nx">options</span><span class="p">.</span><span class="nx">complete</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">canvas</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="c1">// position the canvas absolutely within the container</span>
      <span class="kd">var</span> <span class="nx">$canvas</span> <span class="o">=</span> <span class="nf">$</span><span class="p">(</span><span class="nx">canvas</span><span class="p">).</span><span class="nf">css</span><span class="p">(</span><span class="dl">"</span><span class="s2">position</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">absolute</span><span class="dl">"</span><span class="p">),</span>
        <span class="nx">offset</span> <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nf">offset</span><span class="p">(),</span>
        <span class="c1">// create a container element that contains the canvas and position it</span>
        <span class="c1">// over the element we're replacing</span>
        <span class="nx">container</span> <span class="o">=</span> <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">&lt;div&gt;</span><span class="dl">"</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">css</span><span class="p">(&#123;</span>
            <span class="dl">"</span><span class="s2">border-top</span><span class="dl">"</span><span class="p">:</span> <span class="nx">options</span><span class="p">.</span><span class="nx">borderSize</span>
              <span class="p">?</span> <span class="nx">options</span><span class="p">.</span><span class="nx">borderSize</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">px solid </span><span class="dl">"</span> <span class="o">+</span> <span class="nx">options</span><span class="p">.</span><span class="nx">borderColor</span>
              <span class="p">:</span> <span class="dl">"</span><span class="s2">none</span><span class="dl">"</span><span class="p">,</span>
            <span class="na">position</span><span class="p">:</span> <span class="dl">"</span><span class="s2">absolute</span><span class="dl">"</span><span class="p">,</span>
            <span class="na">left</span><span class="p">:</span> <span class="nx">offset</span><span class="p">.</span><span class="nx">left</span><span class="p">,</span>
            <span class="na">top</span><span class="p">:</span> <span class="nx">offset</span><span class="p">.</span><span class="nx">top</span> <span class="o">-</span> <span class="nx">options</span><span class="p">.</span><span class="nx">borderSize</span><span class="p">,</span>
            <span class="na">width</span><span class="p">:</span> <span class="nx">canvas</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span>
            <span class="na">height</span><span class="p">:</span> <span class="nx">canvas</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span>
            <span class="na">overflow</span><span class="p">:</span> <span class="dl">"</span><span class="s2">hidden</span><span class="dl">"</span><span class="p">,</span>
            <span class="dl">"</span><span class="s2">z-index</span><span class="dl">"</span><span class="p">:</span> <span class="nx">options</span><span class="p">.</span><span class="nx">zIndex</span><span class="p">,</span>
          <span class="p">&#125;)</span>
          <span class="c1">// add the canvas as a child to the container</span>
          <span class="p">.</span><span class="nf">html</span><span class="p">(</span><span class="nx">canvas</span><span class="p">)</span>
          <span class="c1">// add the container to the dom</span>
          <span class="p">.</span><span class="nf">appendTo</span><span class="p">(</span><span class="dl">"</span><span class="s2">body</span><span class="dl">"</span><span class="p">)</span>
          <span class="c1">// delay the animation a bit</span>
          <span class="p">.</span><span class="nf">delay</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">delay</span><span class="p">),</span>
        <span class="nx">targetContainer</span> <span class="o">=</span> <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">&lt;div&gt;</span><span class="dl">"</span><span class="p">)</span>
          <span class="p">.</span><span class="nf">css</span><span class="p">(&#123;</span>
            <span class="na">width</span><span class="p">:</span> <span class="nx">origWidth</span><span class="p">,</span>
            <span class="na">height</span><span class="p">:</span> <span class="nx">origHeight</span><span class="p">,</span>
            <span class="na">overflow</span><span class="p">:</span> <span class="dl">"</span><span class="s2">hidden</span><span class="dl">"</span><span class="p">,</span>
            <span class="na">border</span><span class="p">:</span> <span class="dl">"</span><span class="s2">none</span><span class="dl">"</span><span class="p">,</span>
            <span class="dl">"</span><span class="s2">box-sizing</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">border-box</span><span class="dl">"</span><span class="p">,</span>
          <span class="p">&#125;)</span>
          <span class="p">.</span><span class="nf">html</span><span class="p">(</span><span class="nx">newEl</span><span class="p">),</span>
        <span class="c1">// the default transition effect is to fade out</span>
        <span class="nx">animation</span> <span class="o">=</span> <span class="p">&#123;</span>
          <span class="na">opacity</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
        <span class="p">&#125;,</span>
        <span class="nx">animateOptions</span> <span class="o">=</span> <span class="p">&#123;</span>
          <span class="na">duration</span><span class="p">:</span> <span class="nx">options</span><span class="p">.</span><span class="nx">duration</span><span class="p">,</span>
          <span class="na">complete</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="c1">// when the animation is done:</span>
            <span class="c1">// remove the container from the dom</span>
            <span class="nx">container</span><span class="p">.</span><span class="nf">remove</span><span class="p">();</span>

            <span class="c1">// then animate the height of the new element back to its measured</span>
            <span class="c1">// height and width</span>
            <span class="nx">targetContainer</span><span class="p">.</span><span class="nf">animate</span><span class="p">(</span>
              <span class="p">&#123;</span>
                <span class="na">height</span><span class="p">:</span> <span class="nx">targetHeight</span><span class="p">,</span>
                <span class="na">width</span><span class="p">:</span> <span class="nx">targetWidth</span><span class="p">,</span>
              <span class="p">&#125;,</span>
              <span class="p">&#123;</span>
                <span class="na">duration</span><span class="p">:</span> <span class="mi">100</span><span class="p">,</span>
                <span class="na">complete</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
                  <span class="c1">// take the targetContainer element out of the dom</span>
                  <span class="nx">newEl</span><span class="p">.</span><span class="nf">detach</span><span class="p">().</span><span class="nf">insertAfter</span><span class="p">(</span><span class="nx">targetContainer</span><span class="p">);</span>
                  <span class="nx">targetContainer</span><span class="p">.</span><span class="nf">remove</span><span class="p">();</span>

                  <span class="c1">// call the complete callback</span>
                  <span class="nf">_complete</span><span class="p">();</span>

                  <span class="c1">// and clear all references</span>
                  <span class="nx">options</span> <span class="o">=</span> <span class="nx">$canvas</span> <span class="o">=</span> <span class="nx">container</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
                <span class="p">&#125;,</span>
              <span class="p">&#125;,</span>
            <span class="p">);</span>
          <span class="p">&#125;,</span>
        <span class="p">&#125;;</span>

      <span class="k">if </span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">effect</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">slide</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="c1">// for the slide effect, we move move the container down</span>
        <span class="nx">animation</span> <span class="o">=</span> <span class="p">&#123;</span>
          <span class="na">top</span><span class="p">:</span> <span class="nx">offset</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="nx">canvas</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span>
          <span class="na">height</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
        <span class="p">&#125;;</span>

        <span class="c1">// and on each step of the animation, we need to offset the top so it</span>
        <span class="c1">// remains in the same place on the screen</span>
        <span class="nx">animateOptions</span><span class="p">.</span><span class="nx">step</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">now</span><span class="p">,</span> <span class="nx">fx</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">fx</span><span class="p">.</span><span class="nx">prop</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">top</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">$canvas</span><span class="p">.</span><span class="nf">css</span><span class="p">(</span><span class="dl">"</span><span class="s2">top</span><span class="dl">"</span><span class="p">,</span> <span class="nx">fx</span><span class="p">.</span><span class="nx">start</span> <span class="o">-</span> <span class="nx">now</span><span class="p">);</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;;</span>
      <span class="p">&#125;</span>

      <span class="c1">// apply the animation</span>
      <span class="nx">container</span><span class="p">.</span><span class="nf">animate</span><span class="p">(</span><span class="nx">animation</span><span class="p">,</span> <span class="nx">animateOptions</span><span class="p">);</span>

      <span class="c1">// replace the original element with the new one</span>
      <span class="c1">// we use detatch so that the event handlers on the old</span>
      <span class="c1">// element are retained.</span>
      <span class="nx">targetContainer</span><span class="p">.</span><span class="nf">insertAfter</span><span class="p">(</span><span class="nx">el</span><span class="p">);</span>
      <span class="nx">el</span><span class="p">.</span><span class="nf">detach</span><span class="p">();</span>
    <span class="p">&#125;;</span>

    <span class="c1">// create a glitched version of the start element</span>
    <span class="nf">glitch</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span>
  <span class="p">&#125;;</span>

  <span class="nb">window</span><span class="p">.</span><span class="nx">glitch</span> <span class="o">=</span> <span class="nx">glitch</span><span class="p">;</span>

  <span class="k">if </span><span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="cm">/**
     * jQuery glitch.js plugin
     *
     * This can be called in the following ways:
     *
     * Replace the element with a glitched version
     *     $("#el").glitch()
     *
     * Create a glitched canvas and pass it to a callback function
     *     $("#el").glitch(function(canvas)&#123;&#125;)
     *
     * Transition effect
     *     $("#el").glitch('transition', $("#newEl"), &#123;&#125;)
     */</span>
    <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">glitch</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">method</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">splice</span><span class="p">.</span><span class="nf">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span>
      <span class="nx">method</span> <span class="o">=</span> <span class="nx">method</span> <span class="o">||</span> <span class="dl">"</span><span class="s2">replace</span><span class="dl">"</span><span class="p">;</span>
      <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">method</span> <span class="k">instanceof</span> <span class="nx">$</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">glitch</span><span class="p">.</span><span class="nf">transition</span><span class="p">(</span><span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span> <span class="nx">method</span><span class="p">,</span> <span class="nx">args</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">method</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">function</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="c1">// just a callback passed in</span>
          <span class="nf">glitch</span><span class="p">(</span><span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span> <span class="p">&#123;</span>
            <span class="na">complete</span><span class="p">:</span> <span class="nx">method</span><span class="p">,</span>
          <span class="p">&#125;);</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">method</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">object</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="c1">// an options object passed in</span>
          <span class="nf">glitch</span><span class="p">(</span><span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span> <span class="nx">method</span><span class="p">);</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">glitch</span><span class="p">.</span><span class="nf">hasOwnProperty</span><span class="p">(</span><span class="nx">method</span><span class="p">))</span> <span class="p">&#123;</span>
          <span class="c1">// explicitly call a method</span>
          <span class="nx">glitch</span><span class="p">[</span><span class="nx">method</span><span class="p">].</span><span class="nf">apply</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="p">[</span><span class="nf">$</span><span class="p">(</span><span class="k">this</span><span class="p">)].</span><span class="nf">concat</span><span class="p">(</span><span class="nx">args</span><span class="p">));</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
          <span class="nx">$</span><span class="p">.</span><span class="nf">error</span><span class="p">(</span><span class="dl">"</span><span class="s2">Method </span><span class="dl">"</span> <span class="o">+</span> <span class="nx">method</span> <span class="o">+</span> <span class="dl">"</span><span class="s2"> does not exist on jQuery.glitch</span><span class="dl">"</span><span class="p">);</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;);</span>
    <span class="p">&#125;;</span>
  <span class="p">&#125;</span>
<span class="p">&#125;)(</span><span class="nb">window</span><span class="p">.</span><span class="nx">jQuery</span><span class="p">);</span>

<span class="cm">/*
 * END glich.js
 */</span>

<span class="cm">/*
 * START html2canvas.js
 */</span>

<span class="cm">/**
  @license html2canvas v0.34 &lt;http://html2canvas.hertzen.com&gt;
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
 */</span>
<span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nb">window</span><span class="p">,</span> <span class="nb">document</span><span class="p">,</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="cm">/*
  html2canvas v0.34 &lt;http://html2canvas.hertzen.com&gt;
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
 */</span>
  <span class="dl">"</span><span class="s2">use strict</span><span class="dl">"</span><span class="p">;</span>

  <span class="kd">var</span> <span class="nx">_html2canvas</span> <span class="o">=</span> <span class="p">&#123;&#125;,</span>
    <span class="nx">previousElement</span><span class="p">,</span>
    <span class="nx">computedCSS</span><span class="p">,</span>
    <span class="nx">html2canvas</span><span class="p">;</span>

  <span class="kd">function</span> <span class="nf">h2clog</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">logging</span> <span class="o">&amp;&amp;</span> <span class="nb">window</span><span class="p">.</span><span class="nx">console</span> <span class="o">&amp;&amp;</span> <span class="nb">window</span><span class="p">.</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nb">window</span><span class="p">.</span><span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;</span>

  <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Util</span> <span class="o">=</span> <span class="p">&#123;&#125;;</span>

  <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Util</span><span class="p">.</span><span class="nx">backgroundImage</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">src</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span>
      <span class="sr">/data:image</span><span class="se">\/</span><span class="sr">.*;base64,/i</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">src</span><span class="p">)</span> <span class="o">||</span>
      <span class="sr">/^</span><span class="se">(</span><span class="sr">-webkit|-moz|linear-gradient|-o-</span><span class="se">)</span><span class="sr">/</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">src</span><span class="p">)</span>
    <span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nx">src</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="k">if </span><span class="p">(</span><span class="nx">src</span><span class="p">.</span><span class="nf">toLowerCase</span><span class="p">().</span><span class="nf">substr</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">5</span><span class="p">)</span> <span class="o">===</span> <span class="dl">'</span><span class="s1">url("</span><span class="dl">'</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nf">substr</span><span class="p">(</span><span class="mi">5</span><span class="p">);</span>
      <span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nf">substr</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">src</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">2</span><span class="p">);</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
      <span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nf">substr</span><span class="p">(</span><span class="mi">4</span><span class="p">);</span>
      <span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nf">substr</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">src</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">);</span>
    <span class="p">&#125;</span>

    <span class="k">return</span> <span class="nx">src</span><span class="p">;</span>
  <span class="p">&#125;;</span>

  <span class="kd">function</span> <span class="nf">adjustBounds</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">box</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">win</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">defaultView</span><span class="p">;</span>
    <span class="kd">var</span> <span class="nx">doc</span> <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nx">ownerDocument</span><span class="p">;</span>
    <span class="kd">var</span> <span class="nx">body</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">body</span><span class="p">;</span>
    <span class="kd">var</span> <span class="nx">docElem</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">;</span>
    <span class="kd">var</span> <span class="nx">clientTop</span> <span class="o">=</span> <span class="nx">docElem</span><span class="p">.</span><span class="nx">clientTop</span> <span class="o">||</span> <span class="nx">body</span><span class="p">.</span><span class="nx">clientTop</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span>
    <span class="kd">var</span> <span class="nx">clientLeft</span> <span class="o">=</span> <span class="nx">docElem</span><span class="p">.</span><span class="nx">clientLeft</span> <span class="o">||</span> <span class="nx">body</span><span class="p">.</span><span class="nx">clientLeft</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span>
    <span class="kd">var</span> <span class="nx">scrollTop</span> <span class="o">=</span> <span class="nx">win</span><span class="p">.</span><span class="nx">pageYOffset</span> <span class="o">||</span> <span class="nx">docElem</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">;</span>
    <span class="kd">var</span> <span class="nx">scrollLeft</span> <span class="o">=</span> <span class="nx">win</span><span class="p">.</span><span class="nx">pageXOffset</span> <span class="o">||</span> <span class="nx">docElem</span><span class="p">.</span><span class="nx">scrollLeft</span><span class="p">;</span>
    <span class="kd">var</span> <span class="nx">top</span> <span class="o">=</span> <span class="nx">box</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="nx">scrollTop</span> <span class="o">-</span> <span class="nx">clientTop</span><span class="p">;</span>
    <span class="kd">var</span> <span class="nx">left</span> <span class="o">=</span> <span class="nx">box</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="nx">scrollLeft</span> <span class="o">-</span> <span class="nx">clientLeft</span><span class="p">;</span>

    <span class="k">return</span> <span class="p">&#123;</span>
      <span class="na">top</span><span class="p">:</span> <span class="nx">top</span><span class="p">,</span>
      <span class="na">left</span><span class="p">:</span> <span class="nx">left</span><span class="p">,</span>
      <span class="na">bottom</span><span class="p">:</span> <span class="nx">top</span> <span class="o">+</span> <span class="nx">box</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span>
      <span class="na">height</span><span class="p">:</span> <span class="nx">box</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span>
      <span class="na">width</span><span class="p">:</span> <span class="nx">box</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span>
    <span class="p">&#125;;</span>
  <span class="p">&#125;</span>

  <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Util</span><span class="p">.</span><span class="nx">Bounds</span> <span class="o">=</span> <span class="kd">function</span> <span class="nf">getBounds</span><span class="p">(</span><span class="nx">el</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">clientRect</span><span class="p">,</span>
      <span class="nx">bounds</span> <span class="o">=</span> <span class="p">&#123;&#125;;</span>

    <span class="k">if </span><span class="p">(</span><span class="nx">el</span><span class="p">.</span><span class="nx">getBoundingClientRect</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nf">adjustBounds</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">el</span><span class="p">.</span><span class="nf">getBoundingClientRect</span><span class="p">());</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;;</span>

  <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Util</span><span class="p">.</span><span class="nx">getCSS</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">attribute</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="c1">// return $(el).css(attribute);</span>

    <span class="kd">var</span> <span class="nx">val</span><span class="p">;</span>

    <span class="kd">function</span> <span class="nf">toPX</span><span class="p">(</span><span class="nx">attribute</span><span class="p">,</span> <span class="nx">val</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">rsLeft</span> <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nx">runtimeStyle</span> <span class="o">&amp;&amp;</span> <span class="nx">el</span><span class="p">.</span><span class="nx">runtimeStyle</span><span class="p">[</span><span class="nx">attribute</span><span class="p">],</span>
        <span class="nx">left</span><span class="p">,</span>
        <span class="nx">style</span> <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nx">style</span><span class="p">;</span>

      <span class="c1">// Check if we are not dealing with pixels, (Opera has issues with this)</span>
      <span class="c1">// Ported from jQuery css.js</span>
      <span class="c1">// From the awesome hack by Dean Edwards</span>
      <span class="c1">// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291</span>

      <span class="c1">// If we're not dealing with a regular pixel number</span>
      <span class="c1">// but a number that has a weird ending, we need to convert it to pixels</span>

      <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="sr">/^-</span><span class="se">?[</span><span class="sr">0-9</span><span class="se">]</span><span class="sr">+</span><span class="se">\.?[</span><span class="sr">0-9</span><span class="se">]</span><span class="sr">*</span><span class="se">(?:</span><span class="sr">px</span><span class="se">)?</span><span class="sr">$/i</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="sr">/^-</span><span class="se">?\d</span><span class="sr">/</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">val</span><span class="p">))</span> <span class="p">&#123;</span>
        <span class="c1">// Remember the original values</span>
        <span class="nx">left</span> <span class="o">=</span> <span class="nx">style</span><span class="p">.</span><span class="nx">left</span><span class="p">;</span>

        <span class="c1">// Put in the new values to get a computed value out</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">rsLeft</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">el</span><span class="p">.</span><span class="nx">runtimeStyle</span><span class="p">.</span><span class="nx">left</span> <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nx">currentStyle</span><span class="p">.</span><span class="nx">left</span><span class="p">;</span>
        <span class="p">&#125;</span>
        <span class="nx">style</span><span class="p">.</span><span class="nx">left</span> <span class="o">=</span> <span class="nx">attribute</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">fontSize</span><span class="dl">"</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">1em</span><span class="dl">"</span> <span class="p">:</span> <span class="nx">val</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span>
        <span class="nx">val</span> <span class="o">=</span> <span class="nx">style</span><span class="p">.</span><span class="nx">pixelLeft</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">px</span><span class="dl">"</span><span class="p">;</span>

        <span class="c1">// Revert the changed values</span>
        <span class="nx">style</span><span class="p">.</span><span class="nx">left</span> <span class="o">=</span> <span class="nx">left</span><span class="p">;</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">rsLeft</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">el</span><span class="p">.</span><span class="nx">runtimeStyle</span><span class="p">.</span><span class="nx">left</span> <span class="o">=</span> <span class="nx">rsLeft</span><span class="p">;</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span>

      <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="sr">/^</span><span class="se">(</span><span class="sr">thin|medium|thick</span><span class="se">)</span><span class="sr">$/i</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">val</span><span class="p">))</span> <span class="p">&#123;</span>
        <span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">round</span><span class="p">(</span><span class="nf">parseFloat</span><span class="p">(</span><span class="nx">val</span><span class="p">))</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">px</span><span class="dl">"</span><span class="p">;</span>
      <span class="p">&#125;</span>

      <span class="k">return</span> <span class="nx">val</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="k">if </span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">getComputedStyle</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">previousElement</span> <span class="o">!==</span> <span class="nx">el</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">computedCSS</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">defaultView</span><span class="p">.</span><span class="nf">getComputedStyle</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="kc">null</span><span class="p">);</span>
      <span class="p">&#125;</span>
      <span class="nx">val</span> <span class="o">=</span> <span class="nx">computedCSS</span><span class="p">[</span><span class="nx">attribute</span><span class="p">];</span>

      <span class="k">if </span><span class="p">(</span><span class="nx">attribute</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">backgroundPosition</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">val</span> <span class="o">=</span> <span class="p">(</span><span class="nx">val</span><span class="p">.</span><span class="nf">split</span><span class="p">(</span><span class="dl">"</span><span class="s2">,</span><span class="dl">"</span><span class="p">)[</span><span class="mi">0</span><span class="p">]</span> <span class="o">||</span> <span class="dl">"</span><span class="s2">0 0</span><span class="dl">"</span><span class="p">).</span><span class="nf">split</span><span class="p">(</span><span class="dl">"</span><span class="s2"> </span><span class="dl">"</span><span class="p">);</span>

        <span class="nx">val</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">=</span>
          <span class="nx">val</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nf">indexOf</span><span class="p">(</span><span class="dl">"</span><span class="s2">%</span><span class="dl">"</span><span class="p">)</span> <span class="o">===</span> <span class="o">-</span><span class="mi">1</span> <span class="p">?</span> <span class="nf">toPX</span><span class="p">(</span><span class="nx">attribute</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">X</span><span class="dl">"</span><span class="p">,</span> <span class="nx">val</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="p">:</span> <span class="nx">val</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span>
        <span class="nx">val</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">val</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="p">?</span> <span class="nx">val</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="p">:</span> <span class="nx">val</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span> <span class="c1">// IE 9 doesn't return double digit always</span>
        <span class="nx">val</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">=</span>
          <span class="nx">val</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nf">indexOf</span><span class="p">(</span><span class="dl">"</span><span class="s2">%</span><span class="dl">"</span><span class="p">)</span> <span class="o">===</span> <span class="o">-</span><span class="mi">1</span> <span class="p">?</span> <span class="nf">toPX</span><span class="p">(</span><span class="nx">attribute</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">Y</span><span class="dl">"</span><span class="p">,</span> <span class="nx">val</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span> <span class="p">:</span> <span class="nx">val</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">el</span><span class="p">.</span><span class="nx">currentStyle</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="c1">// IE 9&gt;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">attribute</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">backgroundPosition</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="c1">// Older IE uses -x and -y</span>
        <span class="nx">val</span> <span class="o">=</span> <span class="p">[</span>
          <span class="nf">toPX</span><span class="p">(</span><span class="nx">attribute</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">X</span><span class="dl">"</span><span class="p">,</span> <span class="nx">el</span><span class="p">.</span><span class="nx">currentStyle</span><span class="p">[</span><span class="nx">attribute</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">X</span><span class="dl">"</span><span class="p">]),</span>
          <span class="nf">toPX</span><span class="p">(</span><span class="nx">attribute</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">Y</span><span class="dl">"</span><span class="p">,</span> <span class="nx">el</span><span class="p">.</span><span class="nx">currentStyle</span><span class="p">[</span><span class="nx">attribute</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">Y</span><span class="dl">"</span><span class="p">]),</span>
        <span class="p">];</span>
      <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
        <span class="nx">val</span> <span class="o">=</span> <span class="nf">toPX</span><span class="p">(</span><span class="nx">attribute</span><span class="p">,</span> <span class="nx">el</span><span class="p">.</span><span class="nx">currentStyle</span><span class="p">[</span><span class="nx">attribute</span><span class="p">]);</span>

        <span class="k">if </span><span class="p">(</span>
          <span class="sr">/^</span><span class="se">(</span><span class="sr">border</span><span class="se">)</span><span class="sr">/i</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">attribute</span><span class="p">)</span> <span class="o">&amp;&amp;</span>
          <span class="sr">/^</span><span class="se">(</span><span class="sr">medium|thin|thick</span><span class="se">)</span><span class="sr">$/i</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span>
        <span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">switch </span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">case</span> <span class="dl">"</span><span class="s2">thin</span><span class="dl">"</span><span class="p">:</span>
              <span class="nx">val</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">1px</span><span class="dl">"</span><span class="p">;</span>
              <span class="k">break</span><span class="p">;</span>
            <span class="k">case</span> <span class="dl">"</span><span class="s2">medium</span><span class="dl">"</span><span class="p">:</span>
              <span class="nx">val</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">0px</span><span class="dl">"</span><span class="p">;</span> <span class="c1">// this is wrong, it should be 3px but IE uses medium for no border as well.. TODO find a work around</span>
              <span class="k">break</span><span class="p">;</span>
            <span class="k">case</span> <span class="dl">"</span><span class="s2">thick</span><span class="dl">"</span><span class="p">:</span>
              <span class="nx">val</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">5px</span><span class="dl">"</span><span class="p">;</span>
              <span class="k">break</span><span class="p">;</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;</span>

    <span class="k">return</span> <span class="nx">val</span><span class="p">;</span>

    <span class="c1">//return $(el).css(attribute);</span>
  <span class="p">&#125;;</span>

  <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Util</span><span class="p">.</span><span class="nx">BackgroundPosition</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">bounds</span><span class="p">,</span> <span class="nx">image</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="c1">// TODO add support for multi image backgrounds</span>

    <span class="kd">var</span> <span class="nx">bgposition</span> <span class="o">=</span> <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Util</span><span class="p">.</span><span class="nf">getCSS</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">backgroundPosition</span><span class="dl">"</span><span class="p">),</span>
      <span class="nx">topPos</span><span class="p">,</span>
      <span class="nx">left</span><span class="p">,</span>
      <span class="nx">percentage</span><span class="p">,</span>
      <span class="nx">val</span><span class="p">;</span>

    <span class="k">if </span><span class="p">(</span><span class="nx">bgposition</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">val</span> <span class="o">=</span> <span class="nx">bgposition</span><span class="p">;</span>

      <span class="nx">bgposition</span> <span class="o">=</span> <span class="p">[];</span>

      <span class="nx">bgposition</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">=</span> <span class="nx">val</span><span class="p">;</span>
      <span class="nx">bgposition</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">val</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="k">if </span><span class="p">(</span><span class="nx">bgposition</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nf">toString</span><span class="p">().</span><span class="nf">indexOf</span><span class="p">(</span><span class="dl">"</span><span class="s2">%</span><span class="dl">"</span><span class="p">)</span> <span class="o">!==</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">percentage</span> <span class="o">=</span> <span class="nf">parseFloat</span><span class="p">(</span><span class="nx">bgposition</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="o">/</span> <span class="mi">100</span><span class="p">;</span>
      <span class="nx">left</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span> <span class="o">*</span> <span class="nx">percentage</span> <span class="o">-</span> <span class="nx">image</span><span class="p">.</span><span class="nx">width</span> <span class="o">*</span> <span class="nx">percentage</span><span class="p">;</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
      <span class="nx">left</span> <span class="o">=</span> <span class="nf">parseInt</span><span class="p">(</span><span class="nx">bgposition</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="mi">10</span><span class="p">);</span>
    <span class="p">&#125;</span>

    <span class="k">if </span><span class="p">(</span><span class="nx">bgposition</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nf">toString</span><span class="p">().</span><span class="nf">indexOf</span><span class="p">(</span><span class="dl">"</span><span class="s2">%</span><span class="dl">"</span><span class="p">)</span> <span class="o">!==</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">percentage</span> <span class="o">=</span> <span class="nf">parseFloat</span><span class="p">(</span><span class="nx">bgposition</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span> <span class="o">/</span> <span class="mi">100</span><span class="p">;</span>
      <span class="nx">topPos</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">height</span> <span class="o">*</span> <span class="nx">percentage</span> <span class="o">-</span> <span class="nx">image</span><span class="p">.</span><span class="nx">height</span> <span class="o">*</span> <span class="nx">percentage</span><span class="p">;</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
      <span class="nx">topPos</span> <span class="o">=</span> <span class="nf">parseInt</span><span class="p">(</span><span class="nx">bgposition</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span> <span class="mi">10</span><span class="p">);</span>
    <span class="p">&#125;</span>

    <span class="k">return</span> <span class="p">&#123;</span>
      <span class="na">top</span><span class="p">:</span> <span class="nx">topPos</span><span class="p">,</span>
      <span class="na">left</span><span class="p">:</span> <span class="nx">left</span><span class="p">,</span>
    <span class="p">&#125;;</span>
  <span class="p">&#125;;</span>

  <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Util</span><span class="p">.</span><span class="nx">Extend</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="nx">defaults</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">options</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nf">hasOwnProperty</span><span class="p">(</span><span class="nx">key</span><span class="p">))</span> <span class="p">&#123;</span>
        <span class="nx">defaults</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">options</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;</span>
    <span class="k">return</span> <span class="nx">defaults</span><span class="p">;</span>
  <span class="p">&#125;;</span>

  <span class="cm">/*
   * Derived from jQuery.contents()
   * Copyright 2010, John Resig
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   */</span>
  <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Util</span><span class="p">.</span><span class="nx">Children</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">elem</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">children</span><span class="p">;</span>
    <span class="k">try</span> <span class="p">&#123;</span>
      <span class="nx">children</span> <span class="o">=</span>
        <span class="nx">elem</span><span class="p">.</span><span class="nx">nodeName</span> <span class="o">&amp;&amp;</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">.</span><span class="nf">toUpperCase</span><span class="p">()</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">IFRAME</span><span class="dl">"</span>
          <span class="p">?</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">contentDocument</span> <span class="o">||</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">contentWindow</span><span class="p">.</span><span class="nb">document</span>
          <span class="p">:</span> <span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">array</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="kd">var</span> <span class="nx">ret</span> <span class="o">=</span> <span class="p">[];</span>

              <span class="k">if </span><span class="p">(</span><span class="nx">array</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">first</span><span class="p">,</span> <span class="nx">second</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">first</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span>
                    <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>

                  <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">second</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">number</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">second</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="nx">first</span><span class="p">[</span><span class="nx">i</span><span class="o">++</span><span class="p">]</span> <span class="o">=</span> <span class="nx">second</span><span class="p">[</span><span class="nx">j</span><span class="p">];</span>
                    <span class="p">&#125;</span>
                  <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                    <span class="k">while </span><span class="p">(</span><span class="nx">second</span><span class="p">[</span><span class="nx">j</span><span class="p">]</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="nx">first</span><span class="p">[</span><span class="nx">i</span><span class="o">++</span><span class="p">]</span> <span class="o">=</span> <span class="nx">second</span><span class="p">[</span><span class="nx">j</span><span class="o">++</span><span class="p">];</span>
                    <span class="p">&#125;</span>
                  <span class="p">&#125;</span>

                  <span class="nx">first</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="nx">i</span><span class="p">;</span>

                  <span class="k">return</span> <span class="nx">first</span><span class="p">;</span>
                <span class="p">&#125;)(</span><span class="nx">ret</span><span class="p">,</span> <span class="nx">array</span><span class="p">);</span>
              <span class="p">&#125;</span>

              <span class="k">return</span> <span class="nx">ret</span><span class="p">;</span>
            <span class="p">&#125;)(</span><span class="nx">elem</span><span class="p">.</span><span class="nx">childNodes</span><span class="p">);</span>
    <span class="p">&#125;</span> <span class="k">catch </span><span class="p">(</span><span class="nx">ex</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nf">h2clog</span><span class="p">(</span><span class="dl">"</span><span class="s2">html2canvas.Util.Children failed with exception: </span><span class="dl">"</span> <span class="o">+</span> <span class="nx">ex</span><span class="p">.</span><span class="nx">message</span><span class="p">);</span>
      <span class="nx">children</span> <span class="o">=</span> <span class="p">[];</span>
    <span class="p">&#125;</span>
    <span class="k">return</span> <span class="nx">children</span><span class="p">;</span>
  <span class="p">&#125;;</span>

  <span class="cm">/*
  html2canvas v0.34 &lt;http://html2canvas.hertzen.com&gt;
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Contributor(s):
      Niklas von Hertzen &lt;http://www.twitter.com/niklasvh&gt;
      AndrÃ© Fiedler      &lt;http://www.twitter.com/sonnenkiste&gt;

  Released under MIT License
 */</span>

  <span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Generate</span> <span class="o">=</span> <span class="p">&#123;&#125;;</span>

    <span class="kd">var</span> <span class="nx">reGradients</span> <span class="o">=</span> <span class="p">[</span>
      <span class="sr">/^</span><span class="se">(</span><span class="sr">-webkit-linear-gradient</span><span class="se">)\(([</span><span class="sr">a-z</span><span class="se">\s]</span><span class="sr">+</span><span class="se">)([\w\d\.\s</span><span class="sr">,%</span><span class="se">\(\)]</span><span class="sr">+</span><span class="se">)\)</span><span class="sr">$/</span><span class="p">,</span>
      <span class="sr">/^</span><span class="se">(</span><span class="sr">-o-linear-gradient</span><span class="se">)\(([</span><span class="sr">a-z</span><span class="se">\s]</span><span class="sr">+</span><span class="se">)([\w\d\.\s</span><span class="sr">,%</span><span class="se">\(\)]</span><span class="sr">+</span><span class="se">)\)</span><span class="sr">$/</span><span class="p">,</span>
      <span class="sr">/^</span><span class="se">(</span><span class="sr">-webkit-gradient</span><span class="se">)\((</span><span class="sr">linear|radial</span><span class="se">)</span><span class="sr">,</span><span class="se">\s((?:\d&#123;1,3&#125;</span><span class="sr">%</span><span class="se">?)\s(?:\d&#123;1,3&#125;</span><span class="sr">%</span><span class="se">?)</span><span class="sr">,</span><span class="se">\s(?:\d&#123;1,3&#125;</span><span class="sr">%</span><span class="se">?)\s(?:\d&#123;1,3&#125;</span><span class="sr">%</span><span class="se">?))([\w\d\.\s</span><span class="sr">,%</span><span class="se">\(\)</span><span class="sr">-</span><span class="se">]</span><span class="sr">+</span><span class="se">)\)</span><span class="sr">$/</span><span class="p">,</span>
      <span class="sr">/^</span><span class="se">(</span><span class="sr">-moz-linear-gradient</span><span class="se">)\(((?:\d&#123;1,3&#125;</span><span class="sr">%</span><span class="se">?)\s(?:\d&#123;1,3&#125;</span><span class="sr">%</span><span class="se">?))([\w\d\.\s</span><span class="sr">,%</span><span class="se">\(\)]</span><span class="sr">+</span><span class="se">)\)</span><span class="sr">$/</span><span class="p">,</span>
      <span class="sr">/^</span><span class="se">(</span><span class="sr">-webkit-radial-gradient</span><span class="se">)\(((?:\d&#123;1,3&#125;</span><span class="sr">%</span><span class="se">?)\s(?:\d&#123;1,3&#125;</span><span class="sr">%</span><span class="se">?))</span><span class="sr">,</span><span class="se">\s(\w</span><span class="sr">+</span><span class="se">)\s([</span><span class="sr">a-z-</span><span class="se">]</span><span class="sr">+</span><span class="se">)([\w\d\.\s</span><span class="sr">,%</span><span class="se">\(\)]</span><span class="sr">+</span><span class="se">)\)</span><span class="sr">$/</span><span class="p">,</span>
      <span class="sr">/^</span><span class="se">(</span><span class="sr">-moz-radial-gradient</span><span class="se">)\(((?:\d&#123;1,3&#125;</span><span class="sr">%</span><span class="se">?)\s(?:\d&#123;1,3&#125;</span><span class="sr">%</span><span class="se">?))</span><span class="sr">,</span><span class="se">\s(\w</span><span class="sr">+</span><span class="se">)\s?([</span><span class="sr">a-z-</span><span class="se">]</span><span class="sr">*</span><span class="se">)([\w\d\.\s</span><span class="sr">,%</span><span class="se">\(\)]</span><span class="sr">+</span><span class="se">)\)</span><span class="sr">$/</span><span class="p">,</span>
      <span class="sr">/^</span><span class="se">(</span><span class="sr">-o-radial-gradient</span><span class="se">)\(((?:\d&#123;1,3&#125;</span><span class="sr">%</span><span class="se">?)\s(?:\d&#123;1,3&#125;</span><span class="sr">%</span><span class="se">?))</span><span class="sr">,</span><span class="se">\s(\w</span><span class="sr">+</span><span class="se">)\s([</span><span class="sr">a-z-</span><span class="se">]</span><span class="sr">+</span><span class="se">)([\w\d\.\s</span><span class="sr">,%</span><span class="se">\(\)]</span><span class="sr">+</span><span class="se">)\)</span><span class="sr">$/</span><span class="p">,</span>
    <span class="p">];</span>

    <span class="cm">/*
     * TODO: Add IE10 vendor prefix (-ms) support
     * TODO: Add W3C gradient (linear-gradient) support
     * TODO: Add old Webkit -webkit-gradient(radial, ...) support
     * TODO: Maybe some RegExp optimizations are possible ;o)
     */</span>
    <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Generate</span><span class="p">.</span><span class="nx">parseGradient</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">css</span><span class="p">,</span> <span class="nx">bounds</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">gradient</span><span class="p">,</span>
        <span class="nx">i</span><span class="p">,</span>
        <span class="nx">len</span> <span class="o">=</span> <span class="nx">reGradients</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span>
        <span class="nx">m1</span><span class="p">,</span>
        <span class="nx">stop</span><span class="p">,</span>
        <span class="nx">m2</span><span class="p">,</span>
        <span class="nx">m2Len</span><span class="p">,</span>
        <span class="nx">step</span><span class="p">,</span>
        <span class="nx">m3</span><span class="p">;</span>

      <span class="k">for </span><span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">m1</span> <span class="o">=</span> <span class="nx">css</span><span class="p">.</span><span class="nf">match</span><span class="p">(</span><span class="nx">reGradients</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">m1</span><span class="p">)</span> <span class="k">break</span><span class="p">;</span>
      <span class="p">&#125;</span>

      <span class="k">if </span><span class="p">(</span><span class="nx">m1</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">switch </span><span class="p">(</span><span class="nx">m1</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span> <span class="p">&#123;</span>
          <span class="k">case</span> <span class="dl">"</span><span class="s2">-webkit-linear-gradient</span><span class="dl">"</span><span class="p">:</span>
          <span class="k">case</span> <span class="dl">"</span><span class="s2">-o-linear-gradient</span><span class="dl">"</span><span class="p">:</span>
            <span class="nx">gradient</span> <span class="o">=</span> <span class="p">&#123;</span>
              <span class="na">type</span><span class="p">:</span> <span class="dl">"</span><span class="s2">linear</span><span class="dl">"</span><span class="p">,</span>
              <span class="na">x0</span><span class="p">:</span> <span class="kc">null</span><span class="p">,</span>
              <span class="na">y0</span><span class="p">:</span> <span class="kc">null</span><span class="p">,</span>
              <span class="na">x1</span><span class="p">:</span> <span class="kc">null</span><span class="p">,</span>
              <span class="na">y1</span><span class="p">:</span> <span class="kc">null</span><span class="p">,</span>
              <span class="na">colorStops</span><span class="p">:</span> <span class="p">[],</span>
            <span class="p">&#125;;</span>

            <span class="c1">// get coordinates</span>
            <span class="nx">m2</span> <span class="o">=</span> <span class="nx">m1</span><span class="p">[</span><span class="mi">2</span><span class="p">].</span><span class="nf">match</span><span class="p">(</span><span class="sr">/</span><span class="se">\w</span><span class="sr">+/g</span><span class="p">);</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">m2</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">m2Len</span> <span class="o">=</span> <span class="nx">m2</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>
              <span class="k">for </span><span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">m2Len</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">switch </span><span class="p">(</span><span class="nx">m2</span><span class="p">[</span><span class="nx">i</span><span class="p">])</span> <span class="p">&#123;</span>
                  <span class="k">case</span> <span class="dl">"</span><span class="s2">top</span><span class="dl">"</span><span class="p">:</span>
                    <span class="nx">gradient</span><span class="p">.</span><span class="nx">y0</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
                    <span class="nx">gradient</span><span class="p">.</span><span class="nx">y1</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">height</span><span class="p">;</span>
                    <span class="k">break</span><span class="p">;</span>

                  <span class="k">case</span> <span class="dl">"</span><span class="s2">right</span><span class="dl">"</span><span class="p">:</span>
                    <span class="nx">gradient</span><span class="p">.</span><span class="nx">x0</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span><span class="p">;</span>
                    <span class="nx">gradient</span><span class="p">.</span><span class="nx">x1</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
                    <span class="k">break</span><span class="p">;</span>

                  <span class="k">case</span> <span class="dl">"</span><span class="s2">bottom</span><span class="dl">"</span><span class="p">:</span>
                    <span class="nx">gradient</span><span class="p">.</span><span class="nx">y0</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">height</span><span class="p">;</span>
                    <span class="nx">gradient</span><span class="p">.</span><span class="nx">y1</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
                    <span class="k">break</span><span class="p">;</span>

                  <span class="k">case</span> <span class="dl">"</span><span class="s2">left</span><span class="dl">"</span><span class="p">:</span>
                    <span class="nx">gradient</span><span class="p">.</span><span class="nx">x0</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
                    <span class="nx">gradient</span><span class="p">.</span><span class="nx">x1</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span><span class="p">;</span>
                    <span class="k">break</span><span class="p">;</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">gradient</span><span class="p">.</span><span class="nx">x0</span> <span class="o">===</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">x1</span> <span class="o">===</span> <span class="kc">null</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="c1">// center</span>
              <span class="nx">gradient</span><span class="p">.</span><span class="nx">x0</span> <span class="o">=</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">x1</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span> <span class="o">/</span> <span class="mi">2</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">gradient</span><span class="p">.</span><span class="nx">y0</span> <span class="o">===</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">y1</span> <span class="o">===</span> <span class="kc">null</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="c1">// center</span>
              <span class="nx">gradient</span><span class="p">.</span><span class="nx">y0</span> <span class="o">=</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">y1</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">height</span> <span class="o">/</span> <span class="mi">2</span><span class="p">;</span>
            <span class="p">&#125;</span>

            <span class="c1">// get colors and stops</span>
            <span class="nx">m2</span> <span class="o">=</span> <span class="nx">m1</span><span class="p">[</span><span class="mi">3</span><span class="p">].</span><span class="nf">match</span><span class="p">(</span>
              <span class="sr">/</span><span class="se">((?:</span><span class="sr">rgb|rgba</span><span class="se">)\(\d&#123;1,3&#125;</span><span class="sr">,</span><span class="se">\s\d&#123;1,3&#125;</span><span class="sr">,</span><span class="se">\s\d&#123;1,3&#125;(?:</span><span class="sr">,</span><span class="se">\s[</span><span class="sr">0-9</span><span class="se">\.]</span><span class="sr">+</span><span class="se">)?\)(?:\s\d&#123;1,3&#125;(?:</span><span class="sr">%|px</span><span class="se">))?)</span><span class="sr">+/g</span><span class="p">,</span>
            <span class="p">);</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">m2</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">m2Len</span> <span class="o">=</span> <span class="nx">m2</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>
              <span class="nx">step</span> <span class="o">=</span> <span class="mi">1</span> <span class="o">/</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">max</span><span class="p">(</span><span class="nx">m2Len</span> <span class="o">-</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span>
              <span class="k">for </span><span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">m2Len</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">m3</span> <span class="o">=</span> <span class="nx">m2</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nf">match</span><span class="p">(</span>
                  <span class="sr">/</span><span class="se">((?:</span><span class="sr">rgb|rgba</span><span class="se">)\(\d&#123;1,3&#125;</span><span class="sr">,</span><span class="se">\s\d&#123;1,3&#125;</span><span class="sr">,</span><span class="se">\s\d&#123;1,3&#125;(?:</span><span class="sr">,</span><span class="se">\s[</span><span class="sr">0-9</span><span class="se">\.]</span><span class="sr">+</span><span class="se">)?\))\s</span><span class="sr">*</span><span class="se">(\d&#123;1,3&#125;)?(</span><span class="sr">%|px</span><span class="se">)?</span><span class="sr">/</span><span class="p">,</span>
                <span class="p">);</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">m3</span><span class="p">[</span><span class="mi">2</span><span class="p">])</span> <span class="p">&#123;</span>
                  <span class="nx">stop</span> <span class="o">=</span> <span class="nf">parseFloat</span><span class="p">(</span><span class="nx">m3</span><span class="p">[</span><span class="mi">2</span><span class="p">]);</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">m3</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">%</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nx">stop</span> <span class="o">/=</span> <span class="mi">100</span><span class="p">;</span>
                  <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                    <span class="c1">// px - stupid opera</span>
                    <span class="nx">stop</span> <span class="o">/=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                  <span class="nx">stop</span> <span class="o">=</span> <span class="nx">i</span> <span class="o">*</span> <span class="nx">step</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="nx">gradient</span><span class="p">.</span><span class="nx">colorStops</span><span class="p">.</span><span class="nf">push</span><span class="p">(&#123;</span>
                  <span class="na">color</span><span class="p">:</span> <span class="nx">m3</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span>
                  <span class="na">stop</span><span class="p">:</span> <span class="nx">stop</span><span class="p">,</span>
                <span class="p">&#125;);</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">break</span><span class="p">;</span>

          <span class="k">case</span> <span class="dl">"</span><span class="s2">-webkit-gradient</span><span class="dl">"</span><span class="p">:</span>
            <span class="nx">gradient</span> <span class="o">=</span> <span class="p">&#123;</span>
              <span class="na">type</span><span class="p">:</span> <span class="nx">m1</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">radial</span><span class="dl">"</span> <span class="p">?</span> <span class="dl">"</span><span class="s2">circle</span><span class="dl">"</span> <span class="p">:</span> <span class="nx">m1</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span> <span class="c1">// TODO: Add radial gradient support for older mozilla definitions</span>
              <span class="na">x0</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
              <span class="na">y0</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
              <span class="na">x1</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
              <span class="na">y1</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
              <span class="na">colorStops</span><span class="p">:</span> <span class="p">[],</span>
            <span class="p">&#125;;</span>

            <span class="c1">// get coordinates</span>
            <span class="nx">m2</span> <span class="o">=</span> <span class="nx">m1</span><span class="p">[</span><span class="mi">3</span><span class="p">].</span><span class="nf">match</span><span class="p">(</span>
              <span class="sr">/</span><span class="se">(\d&#123;1,3&#125;)</span><span class="sr">%</span><span class="se">?\s(\d&#123;1,3&#125;)</span><span class="sr">%</span><span class="se">?</span><span class="sr">,</span><span class="se">\s(\d&#123;1,3&#125;)</span><span class="sr">%</span><span class="se">?\s(\d&#123;1,3&#125;)</span><span class="sr">%</span><span class="se">?</span><span class="sr">/</span><span class="p">,</span>
            <span class="p">);</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">m2</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">gradient</span><span class="p">.</span><span class="nx">x0</span> <span class="o">=</span> <span class="p">(</span><span class="nx">m2</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">*</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span><span class="p">)</span> <span class="o">/</span> <span class="mi">100</span><span class="p">;</span>
              <span class="nx">gradient</span><span class="p">.</span><span class="nx">y0</span> <span class="o">=</span> <span class="p">(</span><span class="nx">m2</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">*</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">height</span><span class="p">)</span> <span class="o">/</span> <span class="mi">100</span><span class="p">;</span>
              <span class="nx">gradient</span><span class="p">.</span><span class="nx">x1</span> <span class="o">=</span> <span class="p">(</span><span class="nx">m2</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span> <span class="o">*</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span><span class="p">)</span> <span class="o">/</span> <span class="mi">100</span><span class="p">;</span>
              <span class="nx">gradient</span><span class="p">.</span><span class="nx">y1</span> <span class="o">=</span> <span class="p">(</span><span class="nx">m2</span><span class="p">[</span><span class="mi">4</span><span class="p">]</span> <span class="o">*</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">height</span><span class="p">)</span> <span class="o">/</span> <span class="mi">100</span><span class="p">;</span>
            <span class="p">&#125;</span>

            <span class="c1">// get colors and stops</span>
            <span class="nx">m2</span> <span class="o">=</span> <span class="nx">m1</span><span class="p">[</span><span class="mi">4</span><span class="p">].</span><span class="nf">match</span><span class="p">(</span>
              <span class="sr">/</span><span class="se">((?:</span><span class="sr">from|to|color-stop</span><span class="se">)\((?:[</span><span class="sr">0-9</span><span class="se">\.]</span><span class="sr">+,</span><span class="se">\s)?(?:</span><span class="sr">rgb|rgba</span><span class="se">)\(\d&#123;1,3&#125;</span><span class="sr">,</span><span class="se">\s\d&#123;1,3&#125;</span><span class="sr">,</span><span class="se">\s\d&#123;1,3&#125;(?:</span><span class="sr">,</span><span class="se">\s[</span><span class="sr">0-9</span><span class="se">\.]</span><span class="sr">+</span><span class="se">)?\)\))</span><span class="sr">+/g</span><span class="p">,</span>
            <span class="p">);</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">m2</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">m2Len</span> <span class="o">=</span> <span class="nx">m2</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>
              <span class="k">for </span><span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">m2Len</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">m3</span> <span class="o">=</span> <span class="nx">m2</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nf">match</span><span class="p">(</span>
                  <span class="sr">/</span><span class="se">(</span><span class="sr">from|to|color-stop</span><span class="se">)\(([</span><span class="sr">0-9</span><span class="se">\.]</span><span class="sr">+</span><span class="se">)?(?:</span><span class="sr">,</span><span class="se">\s)?((?:</span><span class="sr">rgb|rgba</span><span class="se">)\(\d&#123;1,3&#125;</span><span class="sr">,</span><span class="se">\s\d&#123;1,3&#125;</span><span class="sr">,</span><span class="se">\s\d&#123;1,3&#125;(?:</span><span class="sr">,</span><span class="se">\s[</span><span class="sr">0-9</span><span class="se">\.]</span><span class="sr">+</span><span class="se">)?\))\)</span><span class="sr">/</span><span class="p">,</span>
                <span class="p">);</span>
                <span class="nx">stop</span> <span class="o">=</span> <span class="nf">parseFloat</span><span class="p">(</span><span class="nx">m3</span><span class="p">[</span><span class="mi">2</span><span class="p">]);</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">m3</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">from</span><span class="dl">"</span><span class="p">)</span> <span class="nx">stop</span> <span class="o">=</span> <span class="mf">0.0</span><span class="p">;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">m3</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">to</span><span class="dl">"</span><span class="p">)</span> <span class="nx">stop</span> <span class="o">=</span> <span class="mf">1.0</span><span class="p">;</span>
                <span class="nx">gradient</span><span class="p">.</span><span class="nx">colorStops</span><span class="p">.</span><span class="nf">push</span><span class="p">(&#123;</span>
                  <span class="na">color</span><span class="p">:</span> <span class="nx">m3</span><span class="p">[</span><span class="mi">3</span><span class="p">],</span>
                  <span class="na">stop</span><span class="p">:</span> <span class="nx">stop</span><span class="p">,</span>
                <span class="p">&#125;);</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">break</span><span class="p">;</span>

          <span class="k">case</span> <span class="dl">"</span><span class="s2">-moz-linear-gradient</span><span class="dl">"</span><span class="p">:</span>
            <span class="nx">gradient</span> <span class="o">=</span> <span class="p">&#123;</span>
              <span class="na">type</span><span class="p">:</span> <span class="dl">"</span><span class="s2">linear</span><span class="dl">"</span><span class="p">,</span>
              <span class="na">x0</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
              <span class="na">y0</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
              <span class="na">x1</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
              <span class="na">y1</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
              <span class="na">colorStops</span><span class="p">:</span> <span class="p">[],</span>
            <span class="p">&#125;;</span>

            <span class="c1">// get coordinates</span>
            <span class="nx">m2</span> <span class="o">=</span> <span class="nx">m1</span><span class="p">[</span><span class="mi">2</span><span class="p">].</span><span class="nf">match</span><span class="p">(</span><span class="sr">/</span><span class="se">(\d&#123;1,3&#125;)</span><span class="sr">%</span><span class="se">?\s(\d&#123;1,3&#125;)</span><span class="sr">%</span><span class="se">?</span><span class="sr">/</span><span class="p">);</span>

            <span class="c1">// m2[1] == 0%   -&gt; left</span>
            <span class="c1">// m2[1] == 50%  -&gt; center</span>
            <span class="c1">// m2[1] == 100% -&gt; right</span>

            <span class="c1">// m2[2] == 0%   -&gt; top</span>
            <span class="c1">// m2[2] == 50%  -&gt; center</span>
            <span class="c1">// m2[2] == 100% -&gt; bottom</span>

            <span class="k">if </span><span class="p">(</span><span class="nx">m2</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">gradient</span><span class="p">.</span><span class="nx">x0</span> <span class="o">=</span> <span class="p">(</span><span class="nx">m2</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">*</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span><span class="p">)</span> <span class="o">/</span> <span class="mi">100</span><span class="p">;</span>
              <span class="nx">gradient</span><span class="p">.</span><span class="nx">y0</span> <span class="o">=</span> <span class="p">(</span><span class="nx">m2</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">*</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">height</span><span class="p">)</span> <span class="o">/</span> <span class="mi">100</span><span class="p">;</span>
              <span class="nx">gradient</span><span class="p">.</span><span class="nx">x1</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span> <span class="o">-</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">x0</span><span class="p">;</span>
              <span class="nx">gradient</span><span class="p">.</span><span class="nx">y1</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">height</span> <span class="o">-</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">y0</span><span class="p">;</span>
            <span class="p">&#125;</span>

            <span class="c1">// get colors and stops</span>
            <span class="nx">m2</span> <span class="o">=</span> <span class="nx">m1</span><span class="p">[</span><span class="mi">3</span><span class="p">].</span><span class="nf">match</span><span class="p">(</span>
              <span class="sr">/</span><span class="se">((?:</span><span class="sr">rgb|rgba</span><span class="se">)\(\d&#123;1,3&#125;</span><span class="sr">,</span><span class="se">\s\d&#123;1,3&#125;</span><span class="sr">,</span><span class="se">\s\d&#123;1,3&#125;(?:</span><span class="sr">,</span><span class="se">\s[</span><span class="sr">0-9</span><span class="se">\.]</span><span class="sr">+</span><span class="se">)?\)(?:\s\d&#123;1,3&#125;</span><span class="sr">%</span><span class="se">)?)</span><span class="sr">+/g</span><span class="p">,</span>
            <span class="p">);</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">m2</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">m2Len</span> <span class="o">=</span> <span class="nx">m2</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>
              <span class="nx">step</span> <span class="o">=</span> <span class="mi">1</span> <span class="o">/</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">max</span><span class="p">(</span><span class="nx">m2Len</span> <span class="o">-</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span>
              <span class="k">for </span><span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">m2Len</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">m3</span> <span class="o">=</span> <span class="nx">m2</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nf">match</span><span class="p">(</span>
                  <span class="sr">/</span><span class="se">((?:</span><span class="sr">rgb|rgba</span><span class="se">)\(\d&#123;1,3&#125;</span><span class="sr">,</span><span class="se">\s\d&#123;1,3&#125;</span><span class="sr">,</span><span class="se">\s\d&#123;1,3&#125;(?:</span><span class="sr">,</span><span class="se">\s[</span><span class="sr">0-9</span><span class="se">\.]</span><span class="sr">+</span><span class="se">)?\))\s</span><span class="sr">*</span><span class="se">(\d&#123;1,3&#125;)?(</span><span class="sr">%</span><span class="se">)?</span><span class="sr">/</span><span class="p">,</span>
                <span class="p">);</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">m3</span><span class="p">[</span><span class="mi">2</span><span class="p">])</span> <span class="p">&#123;</span>
                  <span class="nx">stop</span> <span class="o">=</span> <span class="nf">parseFloat</span><span class="p">(</span><span class="nx">m3</span><span class="p">[</span><span class="mi">2</span><span class="p">]);</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">m3</span><span class="p">[</span><span class="mi">3</span><span class="p">])</span> <span class="p">&#123;</span>
                    <span class="c1">// percentage</span>
                    <span class="nx">stop</span> <span class="o">/=</span> <span class="mi">100</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                  <span class="nx">stop</span> <span class="o">=</span> <span class="nx">i</span> <span class="o">*</span> <span class="nx">step</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="nx">gradient</span><span class="p">.</span><span class="nx">colorStops</span><span class="p">.</span><span class="nf">push</span><span class="p">(&#123;</span>
                  <span class="na">color</span><span class="p">:</span> <span class="nx">m3</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span>
                  <span class="na">stop</span><span class="p">:</span> <span class="nx">stop</span><span class="p">,</span>
                <span class="p">&#125;);</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">break</span><span class="p">;</span>

          <span class="k">case</span> <span class="dl">"</span><span class="s2">-webkit-radial-gradient</span><span class="dl">"</span><span class="p">:</span>
          <span class="k">case</span> <span class="dl">"</span><span class="s2">-moz-radial-gradient</span><span class="dl">"</span><span class="p">:</span>
          <span class="k">case</span> <span class="dl">"</span><span class="s2">-o-radial-gradient</span><span class="dl">"</span><span class="p">:</span>
            <span class="nx">gradient</span> <span class="o">=</span> <span class="p">&#123;</span>
              <span class="na">type</span><span class="p">:</span> <span class="dl">"</span><span class="s2">circle</span><span class="dl">"</span><span class="p">,</span>
              <span class="na">x0</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
              <span class="na">y0</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
              <span class="na">x1</span><span class="p">:</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span>
              <span class="na">y1</span><span class="p">:</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span>
              <span class="na">cx</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
              <span class="na">cy</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
              <span class="na">rx</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
              <span class="na">ry</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
              <span class="na">colorStops</span><span class="p">:</span> <span class="p">[],</span>
            <span class="p">&#125;;</span>

            <span class="c1">// center</span>
            <span class="nx">m2</span> <span class="o">=</span> <span class="nx">m1</span><span class="p">[</span><span class="mi">2</span><span class="p">].</span><span class="nf">match</span><span class="p">(</span><span class="sr">/</span><span class="se">(\d&#123;1,3&#125;)</span><span class="sr">%</span><span class="se">?\s(\d&#123;1,3&#125;)</span><span class="sr">%</span><span class="se">?</span><span class="sr">/</span><span class="p">);</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">m2</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">gradient</span><span class="p">.</span><span class="nx">cx</span> <span class="o">=</span> <span class="p">(</span><span class="nx">m2</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">*</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span><span class="p">)</span> <span class="o">/</span> <span class="mi">100</span><span class="p">;</span>
              <span class="nx">gradient</span><span class="p">.</span><span class="nx">cy</span> <span class="o">=</span> <span class="p">(</span><span class="nx">m2</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">*</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">height</span><span class="p">)</span> <span class="o">/</span> <span class="mi">100</span><span class="p">;</span>
            <span class="p">&#125;</span>

            <span class="c1">// size</span>
            <span class="nx">m2</span> <span class="o">=</span> <span class="nx">m1</span><span class="p">[</span><span class="mi">3</span><span class="p">].</span><span class="nf">match</span><span class="p">(</span><span class="sr">/</span><span class="se">\w</span><span class="sr">+/</span><span class="p">);</span>
            <span class="nx">m3</span> <span class="o">=</span> <span class="nx">m1</span><span class="p">[</span><span class="mi">4</span><span class="p">].</span><span class="nf">match</span><span class="p">(</span><span class="sr">/</span><span class="se">[</span><span class="sr">a-z-</span><span class="se">]</span><span class="sr">*/</span><span class="p">);</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">m2</span> <span class="o">&amp;&amp;</span> <span class="nx">m3</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">switch </span><span class="p">(</span><span class="nx">m3</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="p">&#123;</span>
                <span class="k">case</span> <span class="dl">"</span><span class="s2">farthest-corner</span><span class="dl">"</span><span class="p">:</span>
                <span class="k">case</span> <span class="dl">"</span><span class="s2">cover</span><span class="dl">"</span><span class="p">:</span> <span class="c1">// is equivalent to farthest-corner</span>
                <span class="k">case</span> <span class="dl">""</span><span class="p">:</span> <span class="c1">// mozilla removes "cover" from definition :(</span>
                  <span class="kd">var</span> <span class="nx">tl</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">sqrt</span><span class="p">(</span>
                    <span class="nb">Math</span><span class="p">.</span><span class="nf">pow</span><span class="p">(</span><span class="nx">gradient</span><span class="p">.</span><span class="nx">cx</span><span class="p">,</span> <span class="mi">2</span><span class="p">)</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">pow</span><span class="p">(</span><span class="nx">gradient</span><span class="p">.</span><span class="nx">cy</span><span class="p">,</span> <span class="mi">2</span><span class="p">),</span>
                  <span class="p">);</span>
                  <span class="kd">var</span> <span class="nx">tr</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">sqrt</span><span class="p">(</span>
                    <span class="nb">Math</span><span class="p">.</span><span class="nf">pow</span><span class="p">(</span><span class="nx">gradient</span><span class="p">.</span><span class="nx">cx</span><span class="p">,</span> <span class="mi">2</span><span class="p">)</span> <span class="o">+</span>
                      <span class="nb">Math</span><span class="p">.</span><span class="nf">pow</span><span class="p">(</span><span class="nx">gradient</span><span class="p">.</span><span class="nx">y1</span> <span class="o">-</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">cy</span><span class="p">,</span> <span class="mi">2</span><span class="p">),</span>
                  <span class="p">);</span>
                  <span class="kd">var</span> <span class="nx">br</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">sqrt</span><span class="p">(</span>
                    <span class="nb">Math</span><span class="p">.</span><span class="nf">pow</span><span class="p">(</span><span class="nx">gradient</span><span class="p">.</span><span class="nx">x1</span> <span class="o">-</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">cx</span><span class="p">,</span> <span class="mi">2</span><span class="p">)</span> <span class="o">+</span>
                      <span class="nb">Math</span><span class="p">.</span><span class="nf">pow</span><span class="p">(</span><span class="nx">gradient</span><span class="p">.</span><span class="nx">y1</span> <span class="o">-</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">cy</span><span class="p">,</span> <span class="mi">2</span><span class="p">),</span>
                  <span class="p">);</span>
                  <span class="kd">var</span> <span class="nx">bl</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">sqrt</span><span class="p">(</span>
                    <span class="nb">Math</span><span class="p">.</span><span class="nf">pow</span><span class="p">(</span><span class="nx">gradient</span><span class="p">.</span><span class="nx">x1</span> <span class="o">-</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">cx</span><span class="p">,</span> <span class="mi">2</span><span class="p">)</span> <span class="o">+</span>
                      <span class="nb">Math</span><span class="p">.</span><span class="nf">pow</span><span class="p">(</span><span class="nx">gradient</span><span class="p">.</span><span class="nx">cy</span><span class="p">,</span> <span class="mi">2</span><span class="p">),</span>
                  <span class="p">);</span>
                  <span class="nx">gradient</span><span class="p">.</span><span class="nx">rx</span> <span class="o">=</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">ry</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">max</span><span class="p">(</span><span class="nx">tl</span><span class="p">,</span> <span class="nx">tr</span><span class="p">,</span> <span class="nx">br</span><span class="p">,</span> <span class="nx">bl</span><span class="p">);</span>
                  <span class="k">break</span><span class="p">;</span>
                <span class="k">case</span> <span class="dl">"</span><span class="s2">closest-corner</span><span class="dl">"</span><span class="p">:</span>
                  <span class="kd">var</span> <span class="nx">tl</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">sqrt</span><span class="p">(</span>
                    <span class="nb">Math</span><span class="p">.</span><span class="nf">pow</span><span class="p">(</span><span class="nx">gradient</span><span class="p">.</span><span class="nx">cx</span><span class="p">,</span> <span class="mi">2</span><span class="p">)</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">pow</span><span class="p">(</span><span class="nx">gradient</span><span class="p">.</span><span class="nx">cy</span><span class="p">,</span> <span class="mi">2</span><span class="p">),</span>
                  <span class="p">);</span>
                  <span class="kd">var</span> <span class="nx">tr</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">sqrt</span><span class="p">(</span>
                    <span class="nb">Math</span><span class="p">.</span><span class="nf">pow</span><span class="p">(</span><span class="nx">gradient</span><span class="p">.</span><span class="nx">cx</span><span class="p">,</span> <span class="mi">2</span><span class="p">)</span> <span class="o">+</span>
                      <span class="nb">Math</span><span class="p">.</span><span class="nf">pow</span><span class="p">(</span><span class="nx">gradient</span><span class="p">.</span><span class="nx">y1</span> <span class="o">-</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">cy</span><span class="p">,</span> <span class="mi">2</span><span class="p">),</span>
                  <span class="p">);</span>
                  <span class="kd">var</span> <span class="nx">br</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">sqrt</span><span class="p">(</span>
                    <span class="nb">Math</span><span class="p">.</span><span class="nf">pow</span><span class="p">(</span><span class="nx">gradient</span><span class="p">.</span><span class="nx">x1</span> <span class="o">-</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">cx</span><span class="p">,</span> <span class="mi">2</span><span class="p">)</span> <span class="o">+</span>
                      <span class="nb">Math</span><span class="p">.</span><span class="nf">pow</span><span class="p">(</span><span class="nx">gradient</span><span class="p">.</span><span class="nx">y1</span> <span class="o">-</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">cy</span><span class="p">,</span> <span class="mi">2</span><span class="p">),</span>
                  <span class="p">);</span>
                  <span class="kd">var</span> <span class="nx">bl</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">sqrt</span><span class="p">(</span>
                    <span class="nb">Math</span><span class="p">.</span><span class="nf">pow</span><span class="p">(</span><span class="nx">gradient</span><span class="p">.</span><span class="nx">x1</span> <span class="o">-</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">cx</span><span class="p">,</span> <span class="mi">2</span><span class="p">)</span> <span class="o">+</span>
                      <span class="nb">Math</span><span class="p">.</span><span class="nf">pow</span><span class="p">(</span><span class="nx">gradient</span><span class="p">.</span><span class="nx">cy</span><span class="p">,</span> <span class="mi">2</span><span class="p">),</span>
                  <span class="p">);</span>
                  <span class="nx">gradient</span><span class="p">.</span><span class="nx">rx</span> <span class="o">=</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">ry</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">min</span><span class="p">(</span><span class="nx">tl</span><span class="p">,</span> <span class="nx">tr</span><span class="p">,</span> <span class="nx">br</span><span class="p">,</span> <span class="nx">bl</span><span class="p">);</span>
                  <span class="k">break</span><span class="p">;</span>
                <span class="k">case</span> <span class="dl">"</span><span class="s2">farthest-side</span><span class="dl">"</span><span class="p">:</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">m2</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">circle</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nx">gradient</span><span class="p">.</span><span class="nx">rx</span> <span class="o">=</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">ry</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">max</span><span class="p">(</span>
                      <span class="nx">gradient</span><span class="p">.</span><span class="nx">cx</span><span class="p">,</span>
                      <span class="nx">gradient</span><span class="p">.</span><span class="nx">cy</span><span class="p">,</span>
                      <span class="nx">gradient</span><span class="p">.</span><span class="nx">x1</span> <span class="o">-</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">cx</span><span class="p">,</span>
                      <span class="nx">gradient</span><span class="p">.</span><span class="nx">y1</span> <span class="o">-</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">cy</span><span class="p">,</span>
                    <span class="p">);</span>
                  <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                    <span class="c1">// ellipse</span>

                    <span class="nx">gradient</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="nx">m2</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span>

                    <span class="nx">gradient</span><span class="p">.</span><span class="nx">rx</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">max</span><span class="p">(</span>
                      <span class="nx">gradient</span><span class="p">.</span><span class="nx">cx</span><span class="p">,</span>
                      <span class="nx">gradient</span><span class="p">.</span><span class="nx">x1</span> <span class="o">-</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">cx</span><span class="p">,</span>
                    <span class="p">);</span>
                    <span class="nx">gradient</span><span class="p">.</span><span class="nx">ry</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">max</span><span class="p">(</span>
                      <span class="nx">gradient</span><span class="p">.</span><span class="nx">cy</span><span class="p">,</span>
                      <span class="nx">gradient</span><span class="p">.</span><span class="nx">y1</span> <span class="o">-</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">cy</span><span class="p">,</span>
                    <span class="p">);</span>
                  <span class="p">&#125;</span>
                  <span class="k">break</span><span class="p">;</span>
                <span class="k">case</span> <span class="dl">"</span><span class="s2">closest-side</span><span class="dl">"</span><span class="p">:</span>
                <span class="k">case</span> <span class="dl">"</span><span class="s2">contain</span><span class="dl">"</span><span class="p">:</span> <span class="c1">// is equivalent to closest-side</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">m2</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">circle</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nx">gradient</span><span class="p">.</span><span class="nx">rx</span> <span class="o">=</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">ry</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">min</span><span class="p">(</span>
                      <span class="nx">gradient</span><span class="p">.</span><span class="nx">cx</span><span class="p">,</span>
                      <span class="nx">gradient</span><span class="p">.</span><span class="nx">cy</span><span class="p">,</span>
                      <span class="nx">gradient</span><span class="p">.</span><span class="nx">x1</span> <span class="o">-</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">cx</span><span class="p">,</span>
                      <span class="nx">gradient</span><span class="p">.</span><span class="nx">y1</span> <span class="o">-</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">cy</span><span class="p">,</span>
                    <span class="p">);</span>
                  <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                    <span class="c1">// ellipse</span>

                    <span class="nx">gradient</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="nx">m2</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span>

                    <span class="nx">gradient</span><span class="p">.</span><span class="nx">rx</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">min</span><span class="p">(</span>
                      <span class="nx">gradient</span><span class="p">.</span><span class="nx">cx</span><span class="p">,</span>
                      <span class="nx">gradient</span><span class="p">.</span><span class="nx">x1</span> <span class="o">-</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">cx</span><span class="p">,</span>
                    <span class="p">);</span>
                    <span class="nx">gradient</span><span class="p">.</span><span class="nx">ry</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">min</span><span class="p">(</span>
                      <span class="nx">gradient</span><span class="p">.</span><span class="nx">cy</span><span class="p">,</span>
                      <span class="nx">gradient</span><span class="p">.</span><span class="nx">y1</span> <span class="o">-</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">cy</span><span class="p">,</span>
                    <span class="p">);</span>
                  <span class="p">&#125;</span>
                  <span class="k">break</span><span class="p">;</span>

                <span class="c1">// TODO: add support for "30px 40px" sizes (webkit only)</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>

            <span class="c1">// color stops</span>
            <span class="nx">m2</span> <span class="o">=</span> <span class="nx">m1</span><span class="p">[</span><span class="mi">5</span><span class="p">].</span><span class="nf">match</span><span class="p">(</span>
              <span class="sr">/</span><span class="se">((?:</span><span class="sr">rgb|rgba</span><span class="se">)\(\d&#123;1,3&#125;</span><span class="sr">,</span><span class="se">\s\d&#123;1,3&#125;</span><span class="sr">,</span><span class="se">\s\d&#123;1,3&#125;(?:</span><span class="sr">,</span><span class="se">\s[</span><span class="sr">0-9</span><span class="se">\.]</span><span class="sr">+</span><span class="se">)?\)(?:\s\d&#123;1,3&#125;(?:</span><span class="sr">%|px</span><span class="se">))?)</span><span class="sr">+/g</span><span class="p">,</span>
            <span class="p">);</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">m2</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">m2Len</span> <span class="o">=</span> <span class="nx">m2</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>
              <span class="nx">step</span> <span class="o">=</span> <span class="mi">1</span> <span class="o">/</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">max</span><span class="p">(</span><span class="nx">m2Len</span> <span class="o">-</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span>
              <span class="k">for </span><span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">m2Len</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">m3</span> <span class="o">=</span> <span class="nx">m2</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nf">match</span><span class="p">(</span>
                  <span class="sr">/</span><span class="se">((?:</span><span class="sr">rgb|rgba</span><span class="se">)\(\d&#123;1,3&#125;</span><span class="sr">,</span><span class="se">\s\d&#123;1,3&#125;</span><span class="sr">,</span><span class="se">\s\d&#123;1,3&#125;(?:</span><span class="sr">,</span><span class="se">\s[</span><span class="sr">0-9</span><span class="se">\.]</span><span class="sr">+</span><span class="se">)?\))\s</span><span class="sr">*</span><span class="se">(\d&#123;1,3&#125;)?(</span><span class="sr">%|px</span><span class="se">)?</span><span class="sr">/</span><span class="p">,</span>
                <span class="p">);</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">m3</span><span class="p">[</span><span class="mi">2</span><span class="p">])</span> <span class="p">&#123;</span>
                  <span class="nx">stop</span> <span class="o">=</span> <span class="nf">parseFloat</span><span class="p">(</span><span class="nx">m3</span><span class="p">[</span><span class="mi">2</span><span class="p">]);</span>
                  <span class="k">if </span><span class="p">(</span><span class="nx">m3</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">%</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nx">stop</span> <span class="o">/=</span> <span class="mi">100</span><span class="p">;</span>
                  <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                    <span class="c1">// px - stupid opera</span>
                    <span class="nx">stop</span> <span class="o">/=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                  <span class="nx">stop</span> <span class="o">=</span> <span class="nx">i</span> <span class="o">*</span> <span class="nx">step</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="nx">gradient</span><span class="p">.</span><span class="nx">colorStops</span><span class="p">.</span><span class="nf">push</span><span class="p">(&#123;</span>
                  <span class="na">color</span><span class="p">:</span> <span class="nx">m3</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span>
                  <span class="na">stop</span><span class="p">:</span> <span class="nx">stop</span><span class="p">,</span>
                <span class="p">&#125;);</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">break</span><span class="p">;</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span>

      <span class="k">return</span> <span class="nx">gradient</span><span class="p">;</span>
    <span class="p">&#125;;</span>

    <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Generate</span><span class="p">.</span><span class="nx">Gradient</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">src</span><span class="p">,</span> <span class="nx">bounds</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">canvas</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">canvas</span><span class="dl">"</span><span class="p">),</span>
        <span class="nx">ctx</span> <span class="o">=</span> <span class="nx">canvas</span><span class="p">.</span><span class="nf">getContext</span><span class="p">(</span><span class="dl">"</span><span class="s2">2d</span><span class="dl">"</span><span class="p">),</span>
        <span class="nx">gradient</span><span class="p">,</span>
        <span class="nx">grad</span><span class="p">,</span>
        <span class="nx">i</span><span class="p">,</span>
        <span class="nx">len</span><span class="p">,</span>
        <span class="nx">img</span><span class="p">;</span>

      <span class="nx">canvas</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span><span class="p">;</span>
      <span class="nx">canvas</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">height</span><span class="p">;</span>

      <span class="c1">// TODO: add support for multi defined background gradients (like radial gradient example in background.html)</span>
      <span class="nx">gradient</span> <span class="o">=</span> <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Generate</span><span class="p">.</span><span class="nf">parseGradient</span><span class="p">(</span><span class="nx">src</span><span class="p">,</span> <span class="nx">bounds</span><span class="p">);</span>

      <span class="nx">img</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">Image</span><span class="p">();</span>

      <span class="k">if </span><span class="p">(</span><span class="nx">gradient</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">gradient</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">linear</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">grad</span> <span class="o">=</span> <span class="nx">ctx</span><span class="p">.</span><span class="nf">createLinearGradient</span><span class="p">(</span>
            <span class="nx">gradient</span><span class="p">.</span><span class="nx">x0</span><span class="p">,</span>
            <span class="nx">gradient</span><span class="p">.</span><span class="nx">y0</span><span class="p">,</span>
            <span class="nx">gradient</span><span class="p">.</span><span class="nx">x1</span><span class="p">,</span>
            <span class="nx">gradient</span><span class="p">.</span><span class="nx">y1</span><span class="p">,</span>
          <span class="p">);</span>

          <span class="k">for </span><span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">colorStops</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">try</span> <span class="p">&#123;</span>
              <span class="nx">grad</span><span class="p">.</span><span class="nf">addColorStop</span><span class="p">(</span>
                <span class="nx">gradient</span><span class="p">.</span><span class="nx">colorStops</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">stop</span><span class="p">,</span>
                <span class="nx">gradient</span><span class="p">.</span><span class="nx">colorStops</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">color</span><span class="p">,</span>
              <span class="p">);</span>
            <span class="p">&#125;</span> <span class="k">catch </span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nf">h2clog</span><span class="p">([</span>
                <span class="dl">"</span><span class="s2">failed to add color stop: </span><span class="dl">"</span><span class="p">,</span>
                <span class="nx">e</span><span class="p">,</span>
                <span class="dl">"</span><span class="s2">; tried to add: </span><span class="dl">"</span><span class="p">,</span>
                <span class="nx">gradient</span><span class="p">.</span><span class="nx">colorStops</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span>
                <span class="dl">"</span><span class="s2">; stop: </span><span class="dl">"</span><span class="p">,</span>
                <span class="nx">i</span><span class="p">,</span>
                <span class="dl">"</span><span class="s2">; in: </span><span class="dl">"</span><span class="p">,</span>
                <span class="nx">src</span><span class="p">,</span>
              <span class="p">]);</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;</span>

          <span class="nx">ctx</span><span class="p">.</span><span class="nx">fillStyle</span> <span class="o">=</span> <span class="nx">grad</span><span class="p">;</span>
          <span class="nx">ctx</span><span class="p">.</span><span class="nf">fillRect</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">height</span><span class="p">);</span>

          <span class="nx">img</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="nx">canvas</span><span class="p">.</span><span class="nf">toDataURL</span><span class="p">();</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">gradient</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">circle</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">grad</span> <span class="o">=</span> <span class="nx">ctx</span><span class="p">.</span><span class="nf">createRadialGradient</span><span class="p">(</span>
            <span class="nx">gradient</span><span class="p">.</span><span class="nx">cx</span><span class="p">,</span>
            <span class="nx">gradient</span><span class="p">.</span><span class="nx">cy</span><span class="p">,</span>
            <span class="mi">0</span><span class="p">,</span>
            <span class="nx">gradient</span><span class="p">.</span><span class="nx">cx</span><span class="p">,</span>
            <span class="nx">gradient</span><span class="p">.</span><span class="nx">cy</span><span class="p">,</span>
            <span class="nx">gradient</span><span class="p">.</span><span class="nx">rx</span><span class="p">,</span>
          <span class="p">);</span>

          <span class="k">for </span><span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">colorStops</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">try</span> <span class="p">&#123;</span>
              <span class="nx">grad</span><span class="p">.</span><span class="nf">addColorStop</span><span class="p">(</span>
                <span class="nx">gradient</span><span class="p">.</span><span class="nx">colorStops</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">stop</span><span class="p">,</span>
                <span class="nx">gradient</span><span class="p">.</span><span class="nx">colorStops</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">color</span><span class="p">,</span>
              <span class="p">);</span>
            <span class="p">&#125;</span> <span class="k">catch </span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nf">h2clog</span><span class="p">([</span>
                <span class="dl">"</span><span class="s2">failed to add color stop: </span><span class="dl">"</span><span class="p">,</span>
                <span class="nx">e</span><span class="p">,</span>
                <span class="dl">"</span><span class="s2">; tried to add: </span><span class="dl">"</span><span class="p">,</span>
                <span class="nx">gradient</span><span class="p">.</span><span class="nx">colorStops</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span>
                <span class="dl">"</span><span class="s2">; stop: </span><span class="dl">"</span><span class="p">,</span>
                <span class="nx">i</span><span class="p">,</span>
                <span class="dl">"</span><span class="s2">; in: </span><span class="dl">"</span><span class="p">,</span>
                <span class="nx">src</span><span class="p">,</span>
              <span class="p">]);</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;</span>

          <span class="nx">ctx</span><span class="p">.</span><span class="nx">fillStyle</span> <span class="o">=</span> <span class="nx">grad</span><span class="p">;</span>
          <span class="nx">ctx</span><span class="p">.</span><span class="nf">fillRect</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">height</span><span class="p">);</span>

          <span class="nx">img</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="nx">canvas</span><span class="p">.</span><span class="nf">toDataURL</span><span class="p">();</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">gradient</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">ellipse</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="c1">// draw circle</span>
          <span class="kd">var</span> <span class="nx">canvasRadial</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">canvas</span><span class="dl">"</span><span class="p">),</span>
            <span class="nx">ctxRadial</span> <span class="o">=</span> <span class="nx">canvasRadial</span><span class="p">.</span><span class="nf">getContext</span><span class="p">(</span><span class="dl">"</span><span class="s2">2d</span><span class="dl">"</span><span class="p">),</span>
            <span class="nx">ri</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">max</span><span class="p">(</span><span class="nx">gradient</span><span class="p">.</span><span class="nx">rx</span><span class="p">,</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">ry</span><span class="p">),</span>
            <span class="nx">di</span> <span class="o">=</span> <span class="nx">ri</span> <span class="o">*</span> <span class="mi">2</span><span class="p">,</span>
            <span class="nx">imgRadial</span><span class="p">;</span>

          <span class="nx">canvasRadial</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="nx">canvasRadial</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="nx">di</span><span class="p">;</span>

          <span class="nx">grad</span> <span class="o">=</span> <span class="nx">ctxRadial</span><span class="p">.</span><span class="nf">createRadialGradient</span><span class="p">(</span>
            <span class="nx">gradient</span><span class="p">.</span><span class="nx">rx</span><span class="p">,</span>
            <span class="nx">gradient</span><span class="p">.</span><span class="nx">ry</span><span class="p">,</span>
            <span class="mi">0</span><span class="p">,</span>
            <span class="nx">gradient</span><span class="p">.</span><span class="nx">rx</span><span class="p">,</span>
            <span class="nx">gradient</span><span class="p">.</span><span class="nx">ry</span><span class="p">,</span>
            <span class="nx">ri</span><span class="p">,</span>
          <span class="p">);</span>

          <span class="k">for </span><span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">colorStops</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">try</span> <span class="p">&#123;</span>
              <span class="nx">grad</span><span class="p">.</span><span class="nf">addColorStop</span><span class="p">(</span>
                <span class="nx">gradient</span><span class="p">.</span><span class="nx">colorStops</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">stop</span><span class="p">,</span>
                <span class="nx">gradient</span><span class="p">.</span><span class="nx">colorStops</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">color</span><span class="p">,</span>
              <span class="p">);</span>
            <span class="p">&#125;</span> <span class="k">catch </span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nf">h2clog</span><span class="p">([</span>
                <span class="dl">"</span><span class="s2">failed to add color stop: </span><span class="dl">"</span><span class="p">,</span>
                <span class="nx">e</span><span class="p">,</span>
                <span class="dl">"</span><span class="s2">; tried to add: </span><span class="dl">"</span><span class="p">,</span>
                <span class="nx">gradient</span><span class="p">.</span><span class="nx">colorStops</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span>
                <span class="dl">"</span><span class="s2">; stop: </span><span class="dl">"</span><span class="p">,</span>
                <span class="nx">i</span><span class="p">,</span>
                <span class="dl">"</span><span class="s2">; in: </span><span class="dl">"</span><span class="p">,</span>
                <span class="nx">src</span><span class="p">,</span>
              <span class="p">]);</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;</span>

          <span class="nx">ctxRadial</span><span class="p">.</span><span class="nx">fillStyle</span> <span class="o">=</span> <span class="nx">grad</span><span class="p">;</span>
          <span class="nx">ctxRadial</span><span class="p">.</span><span class="nf">fillRect</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">di</span><span class="p">,</span> <span class="nx">di</span><span class="p">);</span>

          <span class="nx">ctx</span><span class="p">.</span><span class="nx">fillStyle</span> <span class="o">=</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">colorStops</span><span class="p">[</span><span class="nx">i</span> <span class="o">-</span> <span class="mi">1</span><span class="p">].</span><span class="nx">color</span><span class="p">;</span>
          <span class="nx">ctx</span><span class="p">.</span><span class="nf">fillRect</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">canvas</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span> <span class="nx">canvas</span><span class="p">.</span><span class="nx">height</span><span class="p">);</span>

          <span class="nx">imgRadial</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">Image</span><span class="p">();</span>
          <span class="nx">imgRadial</span><span class="p">.</span><span class="nx">onload</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="c1">// wait until the image is filled</span>

            <span class="c1">// transform circle to ellipse</span>
            <span class="nx">ctx</span><span class="p">.</span><span class="nf">drawImage</span><span class="p">(</span>
              <span class="nx">imgRadial</span><span class="p">,</span>
              <span class="nx">gradient</span><span class="p">.</span><span class="nx">cx</span> <span class="o">-</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">rx</span><span class="p">,</span>
              <span class="nx">gradient</span><span class="p">.</span><span class="nx">cy</span> <span class="o">-</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">ry</span><span class="p">,</span>
              <span class="mi">2</span> <span class="o">*</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">rx</span><span class="p">,</span>
              <span class="mi">2</span> <span class="o">*</span> <span class="nx">gradient</span><span class="p">.</span><span class="nx">ry</span><span class="p">,</span>
            <span class="p">);</span>

            <span class="nx">img</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="nx">canvas</span><span class="p">.</span><span class="nf">toDataURL</span><span class="p">();</span>
          <span class="p">&#125;;</span>
          <span class="nx">imgRadial</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="nx">canvasRadial</span><span class="p">.</span><span class="nf">toDataURL</span><span class="p">();</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span>

      <span class="k">return</span> <span class="nx">img</span><span class="p">;</span>
    <span class="p">&#125;;</span>

    <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Generate</span><span class="p">.</span><span class="nx">ListAlpha</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">number</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">tmp</span> <span class="o">=</span> <span class="dl">""</span><span class="p">,</span>
        <span class="nx">modulus</span><span class="p">;</span>

      <span class="k">do</span> <span class="p">&#123;</span>
        <span class="nx">modulus</span> <span class="o">=</span> <span class="nx">number</span> <span class="o">%</span> <span class="mi">26</span><span class="p">;</span>
        <span class="nx">tmp</span> <span class="o">=</span> <span class="nb">String</span><span class="p">.</span><span class="nf">fromCharCode</span><span class="p">(</span><span class="nx">modulus</span> <span class="o">+</span> <span class="mi">64</span><span class="p">)</span> <span class="o">+</span> <span class="nx">tmp</span><span class="p">;</span>
        <span class="nx">number</span> <span class="o">=</span> <span class="nx">number</span> <span class="o">/</span> <span class="mi">26</span><span class="p">;</span>
      <span class="p">&#125;</span> <span class="k">while </span><span class="p">(</span><span class="nx">number</span> <span class="o">*</span> <span class="mi">26</span> <span class="o">&gt;</span> <span class="mi">26</span><span class="p">);</span>

      <span class="k">return</span> <span class="nx">tmp</span><span class="p">;</span>
    <span class="p">&#125;;</span>

    <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Generate</span><span class="p">.</span><span class="nx">ListRoman</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">number</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">romanArray</span> <span class="o">=</span> <span class="p">[</span>
          <span class="dl">"</span><span class="s2">M</span><span class="dl">"</span><span class="p">,</span>
          <span class="dl">"</span><span class="s2">CM</span><span class="dl">"</span><span class="p">,</span>
          <span class="dl">"</span><span class="s2">D</span><span class="dl">"</span><span class="p">,</span>
          <span class="dl">"</span><span class="s2">CD</span><span class="dl">"</span><span class="p">,</span>
          <span class="dl">"</span><span class="s2">C</span><span class="dl">"</span><span class="p">,</span>
          <span class="dl">"</span><span class="s2">XC</span><span class="dl">"</span><span class="p">,</span>
          <span class="dl">"</span><span class="s2">L</span><span class="dl">"</span><span class="p">,</span>
          <span class="dl">"</span><span class="s2">XL</span><span class="dl">"</span><span class="p">,</span>
          <span class="dl">"</span><span class="s2">X</span><span class="dl">"</span><span class="p">,</span>
          <span class="dl">"</span><span class="s2">IX</span><span class="dl">"</span><span class="p">,</span>
          <span class="dl">"</span><span class="s2">V</span><span class="dl">"</span><span class="p">,</span>
          <span class="dl">"</span><span class="s2">IV</span><span class="dl">"</span><span class="p">,</span>
          <span class="dl">"</span><span class="s2">I</span><span class="dl">"</span><span class="p">,</span>
        <span class="p">],</span>
        <span class="nx">decimal</span> <span class="o">=</span> <span class="p">[</span><span class="mi">1000</span><span class="p">,</span> <span class="mi">900</span><span class="p">,</span> <span class="mi">500</span><span class="p">,</span> <span class="mi">400</span><span class="p">,</span> <span class="mi">100</span><span class="p">,</span> <span class="mi">90</span><span class="p">,</span> <span class="mi">50</span><span class="p">,</span> <span class="mi">40</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">1</span><span class="p">],</span>
        <span class="nx">roman</span> <span class="o">=</span> <span class="dl">""</span><span class="p">,</span>
        <span class="nx">v</span><span class="p">,</span>
        <span class="nx">len</span> <span class="o">=</span> <span class="nx">romanArray</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>

      <span class="k">if </span><span class="p">(</span><span class="nx">number</span> <span class="o">&lt;=</span> <span class="mi">0</span> <span class="o">||</span> <span class="nx">number</span> <span class="o">&gt;=</span> <span class="mi">4000</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">return</span> <span class="nx">number</span><span class="p">;</span>
      <span class="p">&#125;</span>

      <span class="k">for </span><span class="p">(</span><span class="nx">v</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">v</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">v</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">while </span><span class="p">(</span><span class="nx">number</span> <span class="o">&gt;=</span> <span class="nx">decimal</span><span class="p">[</span><span class="nx">v</span><span class="p">])</span> <span class="p">&#123;</span>
          <span class="nx">number</span> <span class="o">-=</span> <span class="nx">decimal</span><span class="p">[</span><span class="nx">v</span><span class="p">];</span>
          <span class="nx">roman</span> <span class="o">+=</span> <span class="nx">romanArray</span><span class="p">[</span><span class="nx">v</span><span class="p">];</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span>

      <span class="k">return</span> <span class="nx">roman</span><span class="p">;</span>
    <span class="p">&#125;;</span>
  <span class="p">&#125;)();</span>
  <span class="cm">/*
  html2canvas v0.34 &lt;http://html2canvas.hertzen.com&gt;
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
*/</span>

  <span class="cm">/*
   *  New function for traversing elements
   */</span>

  <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Parse</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">images</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">support</span> <span class="o">=</span> <span class="p">&#123;</span>
        <span class="na">rangeBounds</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
        <span class="na">svgRendering</span><span class="p">:</span>
          <span class="nx">options</span><span class="p">.</span><span class="nx">svgRendering</span> <span class="o">&amp;&amp;</span>
          <span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">img</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">Image</span><span class="p">(),</span>
              <span class="nx">canvas</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">canvas</span><span class="dl">"</span><span class="p">),</span>
              <span class="nx">ctx</span> <span class="o">=</span>
                <span class="nx">canvas</span><span class="p">.</span><span class="nx">getContext</span> <span class="o">===</span> <span class="kc">undefined</span>
                  <span class="p">?</span> <span class="kc">false</span>
                  <span class="p">:</span> <span class="nx">canvas</span><span class="p">.</span><span class="nf">getContext</span><span class="p">(</span><span class="dl">"</span><span class="s2">2d</span><span class="dl">"</span><span class="p">);</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">ctx</span> <span class="o">===</span> <span class="kc">false</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="c1">// browser doesn't support canvas, good luck supporting SVG on canvas</span>
              <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="nx">canvas</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="nx">canvas</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="mi">10</span><span class="p">;</span>
            <span class="nx">img</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="p">[</span>
              <span class="dl">"</span><span class="s2">data:image/svg+xml,</span><span class="dl">"</span><span class="p">,</span>
              <span class="dl">"</span><span class="s2">&lt;svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'&gt;</span><span class="dl">"</span><span class="p">,</span>
              <span class="dl">"</span><span class="s2">&lt;foreignObject width='10' height='10'&gt;</span><span class="dl">"</span><span class="p">,</span>
              <span class="dl">"</span><span class="s2">&lt;div xmlns='http://www.w3.org/1999/xhtml' style='width:10;height:10;'&gt;</span><span class="dl">"</span><span class="p">,</span>
              <span class="dl">"</span><span class="s2">sup</span><span class="dl">"</span><span class="p">,</span>
              <span class="dl">"</span><span class="s2">&lt;/div&gt;</span><span class="dl">"</span><span class="p">,</span>
              <span class="dl">"</span><span class="s2">&lt;/foreignObject&gt;</span><span class="dl">"</span><span class="p">,</span>
              <span class="dl">"</span><span class="s2">&lt;/svg&gt;</span><span class="dl">"</span><span class="p">,</span>
            <span class="p">].</span><span class="nf">join</span><span class="p">(</span><span class="dl">""</span><span class="p">);</span>
            <span class="k">try</span> <span class="p">&#123;</span>
              <span class="nx">ctx</span><span class="p">.</span><span class="nf">drawImage</span><span class="p">(</span><span class="nx">img</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span>
              <span class="nx">canvas</span><span class="p">.</span><span class="nf">toDataURL</span><span class="p">();</span>
            <span class="p">&#125;</span> <span class="k">catch </span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
            <span class="p">&#125;</span>
            <span class="nf">h2clog</span><span class="p">(</span><span class="dl">"</span><span class="s2">html2canvas: Parse: SVG powered rendering available</span><span class="dl">"</span><span class="p">);</span>
            <span class="k">return</span> <span class="kc">true</span><span class="p">;</span>
          <span class="p">&#125;)(),</span>
      <span class="p">&#125;,</span>
      <span class="nx">element</span> <span class="o">=</span>
        <span class="nx">options</span><span class="p">.</span><span class="nx">elements</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="p">?</span> <span class="nb">document</span><span class="p">.</span><span class="nx">body</span> <span class="p">:</span> <span class="nx">options</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="c1">// select body by default</span>
      <span class="nx">needReorder</span> <span class="o">=</span> <span class="kc">false</span><span class="p">,</span>
      <span class="nx">numDraws</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span>
      <span class="nx">fontData</span> <span class="o">=</span> <span class="p">&#123;&#125;,</span>
      <span class="nx">doc</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">ownerDocument</span><span class="p">,</span>
      <span class="nx">ignoreElementsRegExp</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">RegExp</span><span class="p">(</span><span class="dl">"</span><span class="s2">(</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">options</span><span class="p">.</span><span class="nx">ignoreElements</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">)</span><span class="dl">"</span><span class="p">),</span>
      <span class="nx">body</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">body</span><span class="p">,</span>
      <span class="nx">r</span><span class="p">,</span>
      <span class="nx">testElement</span><span class="p">,</span>
      <span class="nx">rangeBounds</span><span class="p">,</span>
      <span class="nx">rangeHeight</span><span class="p">,</span>
      <span class="nx">stack</span><span class="p">,</span>
      <span class="nx">ctx</span><span class="p">,</span>
      <span class="nx">docDim</span><span class="p">,</span>
      <span class="nx">i</span><span class="p">,</span>
      <span class="nx">children</span><span class="p">,</span>
      <span class="nx">childrenLen</span><span class="p">;</span>

    <span class="kd">function</span> <span class="nf">docSize</span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="p">&#123;</span>
        <span class="na">width</span><span class="p">:</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">max</span><span class="p">(</span>
          <span class="nb">Math</span><span class="p">.</span><span class="nf">max</span><span class="p">(</span><span class="nx">doc</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">scrollWidth</span><span class="p">,</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">.</span><span class="nx">scrollWidth</span><span class="p">),</span>
          <span class="nb">Math</span><span class="p">.</span><span class="nf">max</span><span class="p">(</span><span class="nx">doc</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">offsetWidth</span><span class="p">,</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">.</span><span class="nx">offsetWidth</span><span class="p">),</span>
          <span class="nb">Math</span><span class="p">.</span><span class="nf">max</span><span class="p">(</span><span class="nx">doc</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">clientWidth</span><span class="p">,</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">.</span><span class="nx">clientWidth</span><span class="p">),</span>
        <span class="p">),</span>
        <span class="na">height</span><span class="p">:</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">max</span><span class="p">(</span>
          <span class="nb">Math</span><span class="p">.</span><span class="nf">max</span><span class="p">(</span><span class="nx">doc</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">scrollHeight</span><span class="p">,</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">.</span><span class="nx">scrollHeight</span><span class="p">),</span>
          <span class="nb">Math</span><span class="p">.</span><span class="nf">max</span><span class="p">(</span><span class="nx">doc</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">offsetHeight</span><span class="p">,</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">.</span><span class="nx">offsetHeight</span><span class="p">),</span>
          <span class="nb">Math</span><span class="p">.</span><span class="nf">max</span><span class="p">(</span><span class="nx">doc</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">clientHeight</span><span class="p">,</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">.</span><span class="nx">clientHeight</span><span class="p">),</span>
        <span class="p">),</span>
      <span class="p">&#125;;</span>
    <span class="p">&#125;</span>

    <span class="nx">images</span> <span class="o">=</span> <span class="nx">images</span> <span class="o">||</span> <span class="p">&#123;&#125;;</span>

    <span class="c1">// Test whether we can use ranges to measure bounding boxes</span>
    <span class="c1">// Opera doesn't provide valid bounds.height/bottom even though it supports the method.</span>

    <span class="k">if </span><span class="p">(</span><span class="nx">doc</span><span class="p">.</span><span class="nx">createRange</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">r</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nf">createRange</span><span class="p">();</span>
      <span class="c1">//this.support.rangeBounds = new Boolean(r.getBoundingClientRect);</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">r</span><span class="p">.</span><span class="nx">getBoundingClientRect</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">testElement</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">boundtest</span><span class="dl">"</span><span class="p">);</span>
        <span class="nx">testElement</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">123px</span><span class="dl">"</span><span class="p">;</span>
        <span class="nx">testElement</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">block</span><span class="dl">"</span><span class="p">;</span>
        <span class="nx">body</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">testElement</span><span class="p">);</span>

        <span class="nx">r</span><span class="p">.</span><span class="nf">selectNode</span><span class="p">(</span><span class="nx">testElement</span><span class="p">);</span>
        <span class="nx">rangeBounds</span> <span class="o">=</span> <span class="nx">r</span><span class="p">.</span><span class="nf">getBoundingClientRect</span><span class="p">();</span>
        <span class="nx">rangeHeight</span> <span class="o">=</span> <span class="nx">rangeBounds</span><span class="p">.</span><span class="nx">height</span><span class="p">;</span>

        <span class="k">if </span><span class="p">(</span><span class="nx">rangeHeight</span> <span class="o">===</span> <span class="mi">123</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">support</span><span class="p">.</span><span class="nx">rangeBounds</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
        <span class="p">&#125;</span>
        <span class="nx">body</span><span class="p">.</span><span class="nf">removeChild</span><span class="p">(</span><span class="nx">testElement</span><span class="p">);</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;</span>

    <span class="cm">/*
    var rootStack = new this.storageContext($(document).width(),$(document).height());
    rootStack.opacity = this.getCSS(this.element,"opacity");
    var stack = this.newElement(this.element,rootStack);


    this.parseElement(this.element,stack);
     */</span>

    <span class="kd">var</span> <span class="nx">getCSS</span> <span class="o">=</span> <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Util</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">;</span>
    <span class="kd">function</span> <span class="nf">getCSSInt</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">attribute</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">val</span> <span class="o">=</span> <span class="nf">parseInt</span><span class="p">(</span><span class="nf">getCSS</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">attribute</span><span class="p">),</span> <span class="mi">10</span><span class="p">);</span>
      <span class="k">return</span> <span class="nf">isNaN</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">?</span> <span class="mi">0</span> <span class="p">:</span> <span class="nx">val</span><span class="p">;</span> <span class="c1">// borders in old IE are throwing 'medium' for demo.html</span>
    <span class="p">&#125;</span>

    <span class="c1">// Drawing a rectangle</span>
    <span class="kd">function</span> <span class="nf">renderRect</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">,</span> <span class="nx">w</span><span class="p">,</span> <span class="nx">h</span><span class="p">,</span> <span class="nx">bgcolor</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">bgcolor</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">transparent</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">ctx</span><span class="p">.</span><span class="nf">setVariable</span><span class="p">(</span><span class="dl">"</span><span class="s2">fillStyle</span><span class="dl">"</span><span class="p">,</span> <span class="nx">bgcolor</span><span class="p">);</span>
        <span class="nx">ctx</span><span class="p">.</span><span class="nf">fillRect</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">,</span> <span class="nx">w</span><span class="p">,</span> <span class="nx">h</span><span class="p">);</span>
        <span class="nx">numDraws</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">;</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">textTransform</span><span class="p">(</span><span class="nx">text</span><span class="p">,</span> <span class="nx">transform</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">switch </span><span class="p">(</span><span class="nx">transform</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">case</span> <span class="dl">"</span><span class="s2">lowercase</span><span class="dl">"</span><span class="p">:</span>
          <span class="k">return</span> <span class="nx">text</span><span class="p">.</span><span class="nf">toLowerCase</span><span class="p">();</span>

        <span class="k">case</span> <span class="dl">"</span><span class="s2">capitalize</span><span class="dl">"</span><span class="p">:</span>
          <span class="k">return</span> <span class="nx">text</span><span class="p">.</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/</span><span class="se">(</span><span class="sr">^|</span><span class="se">\s</span><span class="sr">|:|-|</span><span class="se">\(</span><span class="sr">|</span><span class="se">\))([</span><span class="sr">a-z</span><span class="se">])</span><span class="sr">/g</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">m</span><span class="p">,</span> <span class="nx">p1</span><span class="p">,</span> <span class="nx">p2</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">m</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">return</span> <span class="nx">p1</span> <span class="o">+</span> <span class="nx">p2</span><span class="p">.</span><span class="nf">toUpperCase</span><span class="p">();</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;);</span>

        <span class="k">case</span> <span class="dl">"</span><span class="s2">uppercase</span><span class="dl">"</span><span class="p">:</span>
          <span class="k">return</span> <span class="nx">text</span><span class="p">.</span><span class="nf">toUpperCase</span><span class="p">();</span>

        <span class="nl">default</span><span class="p">:</span>
          <span class="k">return</span> <span class="nx">text</span><span class="p">;</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">trimText</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">return</span> <span class="nx">text</span><span class="p">.</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/^</span><span class="se">\s</span><span class="sr">*/g</span><span class="p">,</span> <span class="dl">""</span><span class="p">).</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/</span><span class="se">\s</span><span class="sr">*$/g</span><span class="p">,</span> <span class="dl">""</span><span class="p">);</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">fontMetrics</span><span class="p">(</span><span class="nx">font</span><span class="p">,</span> <span class="nx">fontSize</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">fontData</span><span class="p">[</span><span class="nx">font</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">-</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">fontSize</span><span class="p">]</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">return</span> <span class="nx">fontData</span><span class="p">[</span><span class="nx">font</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">-</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">fontSize</span><span class="p">];</span>
      <span class="p">&#125;</span>

      <span class="kd">var</span> <span class="nx">container</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">div</span><span class="dl">"</span><span class="p">),</span>
        <span class="nx">img</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">img</span><span class="dl">"</span><span class="p">),</span>
        <span class="nx">span</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">span</span><span class="dl">"</span><span class="p">),</span>
        <span class="nx">baseline</span><span class="p">,</span>
        <span class="nx">middle</span><span class="p">,</span>
        <span class="nx">metricsObj</span><span class="p">;</span>

      <span class="nx">container</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">visibility</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">hidden</span><span class="dl">"</span><span class="p">;</span>
      <span class="nx">container</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontFamily</span> <span class="o">=</span> <span class="nx">font</span><span class="p">;</span>
      <span class="nx">container</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontSize</span> <span class="o">=</span> <span class="nx">fontSize</span><span class="p">;</span>
      <span class="nx">container</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">margin</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
      <span class="nx">container</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">padding</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>

      <span class="nx">body</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">container</span><span class="p">);</span>

      <span class="c1">// http://probablyprogramming.com/2009/03/15/the-tiniest-gif-ever (handtinywhite.gif)</span>
      <span class="nx">img</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span>
        <span class="dl">"</span><span class="s2">data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=</span><span class="dl">"</span><span class="p">;</span>
      <span class="nx">img</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span>
      <span class="nx">img</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span>

      <span class="nx">img</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">margin</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
      <span class="nx">img</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">padding</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
      <span class="nx">img</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">verticalAlign</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">baseline</span><span class="dl">"</span><span class="p">;</span>

      <span class="nx">span</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontFamily</span> <span class="o">=</span> <span class="nx">font</span><span class="p">;</span>
      <span class="nx">span</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontSize</span> <span class="o">=</span> <span class="nx">fontSize</span><span class="p">;</span>
      <span class="nx">span</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">margin</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
      <span class="nx">span</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">padding</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>

      <span class="nx">span</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">doc</span><span class="p">.</span><span class="nf">createTextNode</span><span class="p">(</span><span class="dl">"</span><span class="s2">Hidden Text</span><span class="dl">"</span><span class="p">));</span>
      <span class="nx">container</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">span</span><span class="p">);</span>
      <span class="nx">container</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">img</span><span class="p">);</span>
      <span class="nx">baseline</span> <span class="o">=</span> <span class="nx">img</span><span class="p">.</span><span class="nx">offsetTop</span> <span class="o">-</span> <span class="nx">span</span><span class="p">.</span><span class="nx">offsetTop</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span>

      <span class="nx">container</span><span class="p">.</span><span class="nf">removeChild</span><span class="p">(</span><span class="nx">span</span><span class="p">);</span>
      <span class="nx">container</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">doc</span><span class="p">.</span><span class="nf">createTextNode</span><span class="p">(</span><span class="dl">"</span><span class="s2">Hidden Text</span><span class="dl">"</span><span class="p">));</span>

      <span class="nx">container</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">lineHeight</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">normal</span><span class="dl">"</span><span class="p">;</span>
      <span class="nx">img</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">verticalAlign</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">super</span><span class="dl">"</span><span class="p">;</span>

      <span class="nx">middle</span> <span class="o">=</span> <span class="nx">img</span><span class="p">.</span><span class="nx">offsetTop</span> <span class="o">-</span> <span class="nx">container</span><span class="p">.</span><span class="nx">offsetTop</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span>
      <span class="nx">metricsObj</span> <span class="o">=</span> <span class="p">&#123;</span>
        <span class="na">baseline</span><span class="p">:</span> <span class="nx">baseline</span><span class="p">,</span>
        <span class="na">lineWidth</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
        <span class="na">middle</span><span class="p">:</span> <span class="nx">middle</span><span class="p">,</span>
      <span class="p">&#125;;</span>

      <span class="nx">fontData</span><span class="p">[</span><span class="nx">font</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">-</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">fontSize</span><span class="p">]</span> <span class="o">=</span> <span class="nx">metricsObj</span><span class="p">;</span>

      <span class="nx">body</span><span class="p">.</span><span class="nf">removeChild</span><span class="p">(</span><span class="nx">container</span><span class="p">);</span>

      <span class="k">return</span> <span class="nx">metricsObj</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">drawText</span><span class="p">(</span><span class="nx">currentText</span><span class="p">,</span> <span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">,</span> <span class="nx">ctx</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="nf">trimText</span><span class="p">(</span><span class="nx">currentText</span><span class="p">).</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">ctx</span><span class="p">.</span><span class="nf">fillText</span><span class="p">(</span><span class="nx">currentText</span><span class="p">,</span> <span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">);</span>
        <span class="nx">numDraws</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">;</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">renderText</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">textNode</span><span class="p">,</span> <span class="nx">stack</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">ctx</span> <span class="o">=</span> <span class="nx">stack</span><span class="p">.</span><span class="nx">ctx</span><span class="p">,</span>
        <span class="nx">family</span> <span class="o">=</span> <span class="nf">getCSS</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">fontFamily</span><span class="dl">"</span><span class="p">),</span>
        <span class="nx">size</span> <span class="o">=</span> <span class="nf">getCSS</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">fontSize</span><span class="dl">"</span><span class="p">),</span>
        <span class="nx">color</span> <span class="o">=</span> <span class="nf">getCSS</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">),</span>
        <span class="nx">text_decoration</span> <span class="o">=</span> <span class="nf">getCSS</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">textDecoration</span><span class="dl">"</span><span class="p">),</span>
        <span class="nx">text_align</span> <span class="o">=</span> <span class="nf">getCSS</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">textAlign</span><span class="dl">"</span><span class="p">),</span>
        <span class="nx">letter_spacing</span> <span class="o">=</span> <span class="nf">getCSS</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">letterSpacing</span><span class="dl">"</span><span class="p">),</span>
        <span class="nx">bounds</span><span class="p">,</span>
        <span class="nx">text</span><span class="p">,</span>
        <span class="nx">metrics</span><span class="p">,</span>
        <span class="nx">renderList</span><span class="p">,</span>
        <span class="nx">listLen</span><span class="p">,</span>
        <span class="nx">bold</span> <span class="o">=</span> <span class="nf">getCSS</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">fontWeight</span><span class="dl">"</span><span class="p">),</span>
        <span class="nx">font_style</span> <span class="o">=</span> <span class="nf">getCSS</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">fontStyle</span><span class="dl">"</span><span class="p">),</span>
        <span class="nx">font_variant</span> <span class="o">=</span> <span class="nf">getCSS</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">fontVariant</span><span class="dl">"</span><span class="p">),</span>
        <span class="nx">align</span> <span class="o">=</span> <span class="kc">false</span><span class="p">,</span>
        <span class="nx">newTextNode</span><span class="p">,</span>
        <span class="nx">textValue</span><span class="p">,</span>
        <span class="nx">textOffset</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span>
        <span class="nx">oldTextNode</span><span class="p">,</span>
        <span class="nx">c</span><span class="p">,</span>
        <span class="nx">range</span><span class="p">,</span>
        <span class="nx">parent</span><span class="p">,</span>
        <span class="nx">wrapElement</span><span class="p">,</span>
        <span class="nx">backupText</span><span class="p">;</span>

      <span class="c1">// apply text-transform:ation to the text</span>

      <span class="nx">textNode</span><span class="p">.</span><span class="nx">nodeValue</span> <span class="o">=</span> <span class="nf">textTransform</span><span class="p">(</span>
        <span class="nx">textNode</span><span class="p">.</span><span class="nx">nodeValue</span><span class="p">,</span>
        <span class="nf">getCSS</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">textTransform</span><span class="dl">"</span><span class="p">),</span>
      <span class="p">);</span>
      <span class="nx">text</span> <span class="o">=</span> <span class="nf">trimText</span><span class="p">(</span><span class="nx">textNode</span><span class="p">.</span><span class="nx">nodeValue</span><span class="p">);</span>

      <span class="k">if </span><span class="p">(</span><span class="nx">text</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">text_decoration</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">none</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">metrics</span> <span class="o">=</span> <span class="nf">fontMetrics</span><span class="p">(</span><span class="nx">family</span><span class="p">,</span> <span class="nx">size</span><span class="p">);</span>
        <span class="p">&#125;</span>

        <span class="nx">text_align</span> <span class="o">=</span> <span class="nx">text_align</span><span class="p">.</span><span class="nf">replace</span><span class="p">([</span><span class="dl">"</span><span class="s2">-webkit-auto</span><span class="dl">"</span><span class="p">],</span> <span class="p">[</span><span class="dl">"</span><span class="s2">auto</span><span class="dl">"</span><span class="p">]);</span>

        <span class="k">if </span><span class="p">(</span>
          <span class="nx">options</span><span class="p">.</span><span class="nx">letterRendering</span> <span class="o">===</span> <span class="kc">false</span> <span class="o">&amp;&amp;</span>
          <span class="sr">/^</span><span class="se">(</span><span class="sr">left|right|justify|auto</span><span class="se">)</span><span class="sr">$/</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">text_align</span><span class="p">)</span> <span class="o">&amp;&amp;</span>
          <span class="sr">/^</span><span class="se">(</span><span class="sr">normal|none</span><span class="se">)</span><span class="sr">$/</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">letter_spacing</span><span class="p">)</span>
        <span class="p">)</span> <span class="p">&#123;</span>
          <span class="c1">// this.setContextVariable(ctx,"textAlign",text_align);</span>
          <span class="nx">renderList</span> <span class="o">=</span> <span class="nx">textNode</span><span class="p">.</span><span class="nx">nodeValue</span><span class="p">.</span><span class="nf">split</span><span class="p">(</span><span class="sr">/</span><span class="se">(\b</span><span class="sr">| </span><span class="se">)</span><span class="sr">/</span><span class="p">);</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
          <span class="c1">//  this.setContextVariable(ctx,"textAlign","left");</span>
          <span class="nx">renderList</span> <span class="o">=</span> <span class="nx">textNode</span><span class="p">.</span><span class="nx">nodeValue</span><span class="p">.</span><span class="nf">split</span><span class="p">(</span><span class="dl">""</span><span class="p">);</span>
        <span class="p">&#125;</span>

        <span class="k">switch </span><span class="p">(</span><span class="nf">parseInt</span><span class="p">(</span><span class="nx">bold</span><span class="p">,</span> <span class="mi">10</span><span class="p">))</span> <span class="p">&#123;</span>
          <span class="k">case</span> <span class="mi">401</span><span class="p">:</span>
            <span class="nx">bold</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">bold</span><span class="dl">"</span><span class="p">;</span>
            <span class="k">break</span><span class="p">;</span>
          <span class="k">case</span> <span class="mi">400</span><span class="p">:</span>
            <span class="nx">bold</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">normal</span><span class="dl">"</span><span class="p">;</span>
            <span class="k">break</span><span class="p">;</span>
        <span class="p">&#125;</span>

        <span class="nx">ctx</span><span class="p">.</span><span class="nf">setVariable</span><span class="p">(</span><span class="dl">"</span><span class="s2">fillStyle</span><span class="dl">"</span><span class="p">,</span> <span class="nx">color</span><span class="p">);</span>

        <span class="cm">/*
              need to be defined in the order as defined in http://www.w3.org/TR/CSS21/fonts.html#font-shorthand
              to properly work in Firefox
            */</span>
        <span class="nx">ctx</span><span class="p">.</span><span class="nf">setVariable</span><span class="p">(</span>
          <span class="dl">"</span><span class="s2">font</span><span class="dl">"</span><span class="p">,</span>
          <span class="nx">font_style</span> <span class="o">+</span>
            <span class="dl">"</span><span class="s2"> </span><span class="dl">"</span> <span class="o">+</span>
            <span class="nx">font_variant</span> <span class="o">+</span>
            <span class="dl">"</span><span class="s2"> </span><span class="dl">"</span> <span class="o">+</span>
            <span class="nx">bold</span> <span class="o">+</span>
            <span class="dl">"</span><span class="s2"> </span><span class="dl">"</span> <span class="o">+</span>
            <span class="nx">size</span> <span class="o">+</span>
            <span class="dl">"</span><span class="s2"> </span><span class="dl">"</span> <span class="o">+</span>
            <span class="nx">family</span><span class="p">,</span>
        <span class="p">);</span>

        <span class="k">if </span><span class="p">(</span><span class="nx">align</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">ctx</span><span class="p">.</span><span class="nf">setVariable</span><span class="p">(</span><span class="dl">"</span><span class="s2">textAlign</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">right</span><span class="dl">"</span><span class="p">);</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
          <span class="nx">ctx</span><span class="p">.</span><span class="nf">setVariable</span><span class="p">(</span><span class="dl">"</span><span class="s2">textAlign</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">left</span><span class="dl">"</span><span class="p">);</span>
        <span class="p">&#125;</span>

        <span class="cm">/*
        if (stack.clip)&#123;
        ctx.rect (stack.clip.left, stack.clip.top, stack.clip.width, stack.clip.height);
        ctx.clip();
        &#125;
             */</span>

        <span class="nx">oldTextNode</span> <span class="o">=</span> <span class="nx">textNode</span><span class="p">;</span>

        <span class="k">for </span><span class="p">(</span><span class="nx">c</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">listLen</span> <span class="o">=</span> <span class="nx">renderList</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">c</span> <span class="o">&lt;</span> <span class="nx">listLen</span><span class="p">;</span> <span class="nx">c</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">textValue</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>

          <span class="k">if </span><span class="p">(</span><span class="nx">support</span><span class="p">.</span><span class="nx">rangeBounds</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="c1">// getBoundingClientRect is supported for ranges</span>
            <span class="k">if </span><span class="p">(</span>
              <span class="nx">text_decoration</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">none</span><span class="dl">"</span> <span class="o">||</span>
              <span class="nf">trimText</span><span class="p">(</span><span class="nx">renderList</span><span class="p">[</span><span class="nx">c</span><span class="p">]).</span><span class="nx">length</span> <span class="o">!==</span> <span class="mi">0</span>
            <span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">textValue</span> <span class="o">=</span> <span class="nx">renderList</span><span class="p">[</span><span class="nx">c</span><span class="p">];</span>
              <span class="k">if </span><span class="p">(</span><span class="nx">doc</span><span class="p">.</span><span class="nx">createRange</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">range</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nf">createRange</span><span class="p">();</span>

                <span class="nx">range</span><span class="p">.</span><span class="nf">setStart</span><span class="p">(</span><span class="nx">textNode</span><span class="p">,</span> <span class="nx">textOffset</span><span class="p">);</span>
                <span class="nx">range</span><span class="p">.</span><span class="nf">setEnd</span><span class="p">(</span><span class="nx">textNode</span><span class="p">,</span> <span class="nx">textOffset</span> <span class="o">+</span> <span class="nx">textValue</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                <span class="c1">// TODO add IE support</span>
                <span class="nx">range</span> <span class="o">=</span> <span class="nx">body</span><span class="p">.</span><span class="nf">createTextRange</span><span class="p">();</span>
              <span class="p">&#125;</span>

              <span class="nx">bounds</span> <span class="o">=</span> <span class="nf">adjustBounds</span><span class="p">(</span><span class="nx">textNode</span><span class="p">,</span> <span class="nx">range</span><span class="p">.</span><span class="nf">getBoundingClientRect</span><span class="p">());</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
            <span class="c1">// it isn't supported, so let's wrap it inside an element instead and get the bounds there</span>

            <span class="c1">// IE 9 bug</span>
            <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">oldTextNode</span><span class="p">.</span><span class="nx">nodeValue</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">string</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">continue</span><span class="p">;</span>
            <span class="p">&#125;</span>

            <span class="nx">newTextNode</span> <span class="o">=</span> <span class="nx">oldTextNode</span><span class="p">.</span><span class="nf">splitText</span><span class="p">(</span><span class="nx">renderList</span><span class="p">[</span><span class="nx">c</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span>

            <span class="nx">parent</span> <span class="o">=</span> <span class="nx">oldTextNode</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">;</span>
            <span class="nx">wrapElement</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">wrapper</span><span class="dl">"</span><span class="p">);</span>
            <span class="nx">backupText</span> <span class="o">=</span> <span class="nx">oldTextNode</span><span class="p">.</span><span class="nf">cloneNode</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span>

            <span class="nx">wrapElement</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">oldTextNode</span><span class="p">.</span><span class="nf">cloneNode</span><span class="p">(</span><span class="kc">true</span><span class="p">));</span>
            <span class="nx">parent</span><span class="p">.</span><span class="nf">replaceChild</span><span class="p">(</span><span class="nx">wrapElement</span><span class="p">,</span> <span class="nx">oldTextNode</span><span class="p">);</span>

            <span class="nx">bounds</span> <span class="o">=</span> <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Util</span><span class="p">.</span><span class="nc">Bounds</span><span class="p">(</span><span class="nx">wrapElement</span><span class="p">);</span>

            <span class="nx">textValue</span> <span class="o">=</span> <span class="nx">oldTextNode</span><span class="p">.</span><span class="nx">nodeValue</span><span class="p">;</span>

            <span class="nx">oldTextNode</span> <span class="o">=</span> <span class="nx">newTextNode</span><span class="p">;</span>
            <span class="nx">parent</span><span class="p">.</span><span class="nf">replaceChild</span><span class="p">(</span><span class="nx">backupText</span><span class="p">,</span> <span class="nx">wrapElement</span><span class="p">);</span>
          <span class="p">&#125;</span>

          <span class="k">if </span><span class="p">(</span><span class="nx">textValue</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nf">drawText</span><span class="p">(</span><span class="nx">textValue</span><span class="p">,</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">left</span><span class="p">,</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">bottom</span><span class="p">,</span> <span class="nx">ctx</span><span class="p">);</span>
          <span class="p">&#125;</span>

          <span class="k">switch </span><span class="p">(</span><span class="nx">text_decoration</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">case</span> <span class="dl">"</span><span class="s2">underline</span><span class="dl">"</span><span class="p">:</span>
              <span class="c1">// Draws a line at the baseline of the font</span>
              <span class="c1">// TODO As some browsers display the line as more than 1px if the font-size is big, need to take that into account both in position and size</span>
              <span class="nf">renderRect</span><span class="p">(</span>
                <span class="nx">ctx</span><span class="p">,</span>
                <span class="nx">bounds</span><span class="p">.</span><span class="nx">left</span><span class="p">,</span>
                <span class="nb">Math</span><span class="p">.</span><span class="nf">round</span><span class="p">(</span><span class="nx">bounds</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="nx">metrics</span><span class="p">.</span><span class="nx">baseline</span> <span class="o">+</span> <span class="nx">metrics</span><span class="p">.</span><span class="nx">lineWidth</span><span class="p">),</span>
                <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span>
                <span class="mi">1</span><span class="p">,</span>
                <span class="nx">color</span><span class="p">,</span>
              <span class="p">);</span>
              <span class="k">break</span><span class="p">;</span>
            <span class="k">case</span> <span class="dl">"</span><span class="s2">overline</span><span class="dl">"</span><span class="p">:</span>
              <span class="nf">renderRect</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">left</span><span class="p">,</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">top</span><span class="p">,</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="nx">color</span><span class="p">);</span>
              <span class="k">break</span><span class="p">;</span>
            <span class="k">case</span> <span class="dl">"</span><span class="s2">line-through</span><span class="dl">"</span><span class="p">:</span>
              <span class="c1">// TODO try and find exact position for line-through</span>
              <span class="nf">renderRect</span><span class="p">(</span>
                <span class="nx">ctx</span><span class="p">,</span>
                <span class="nx">bounds</span><span class="p">.</span><span class="nx">left</span><span class="p">,</span>
                <span class="nb">Math</span><span class="p">.</span><span class="nf">ceil</span><span class="p">(</span><span class="nx">bounds</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="nx">metrics</span><span class="p">.</span><span class="nx">middle</span> <span class="o">+</span> <span class="nx">metrics</span><span class="p">.</span><span class="nx">lineWidth</span><span class="p">),</span>
                <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span>
                <span class="mi">1</span><span class="p">,</span>
                <span class="nx">color</span><span class="p">,</span>
              <span class="p">);</span>
              <span class="k">break</span><span class="p">;</span>
          <span class="p">&#125;</span>

          <span class="nx">textOffset</span> <span class="o">+=</span> <span class="nx">renderList</span><span class="p">[</span><span class="nx">c</span><span class="p">].</span><span class="nx">length</span><span class="p">;</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">listPosition</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">val</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">boundElement</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">boundelement</span><span class="dl">"</span><span class="p">),</span>
        <span class="nx">type</span><span class="p">,</span>
        <span class="nx">bounds</span><span class="p">;</span>

      <span class="nx">boundElement</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">inline</span><span class="dl">"</span><span class="p">;</span>
      <span class="c1">//boundElement.style.width = "1px";</span>
      <span class="c1">//boundElement.style.height = "1px";</span>

      <span class="nx">type</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">listStyleType</span><span class="p">;</span>
      <span class="nx">element</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">listStyleType</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">none</span><span class="dl">"</span><span class="p">;</span>

      <span class="nx">boundElement</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">doc</span><span class="p">.</span><span class="nf">createTextNode</span><span class="p">(</span><span class="nx">val</span><span class="p">));</span>

      <span class="nx">element</span><span class="p">.</span><span class="nf">insertBefore</span><span class="p">(</span><span class="nx">boundElement</span><span class="p">,</span> <span class="nx">element</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">);</span>

      <span class="nx">bounds</span> <span class="o">=</span> <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Util</span><span class="p">.</span><span class="nc">Bounds</span><span class="p">(</span><span class="nx">boundElement</span><span class="p">);</span>
      <span class="nx">element</span><span class="p">.</span><span class="nf">removeChild</span><span class="p">(</span><span class="nx">boundElement</span><span class="p">);</span>
      <span class="nx">element</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">listStyleType</span> <span class="o">=</span> <span class="nx">type</span><span class="p">;</span>
      <span class="k">return</span> <span class="nx">bounds</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">elementIndex</span><span class="p">(</span><span class="nx">el</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span>
        <span class="nx">count</span> <span class="o">=</span> <span class="mi">1</span><span class="p">,</span>
        <span class="nx">childs</span> <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">childNodes</span><span class="p">;</span>

      <span class="k">if </span><span class="p">(</span><span class="nx">el</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">while </span><span class="p">(</span><span class="nx">childs</span><span class="p">[</span><span class="o">++</span><span class="nx">i</span><span class="p">]</span> <span class="o">!==</span> <span class="nx">el</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">childs</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">count</span><span class="o">++</span><span class="p">;</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;</span>
        <span class="k">return</span> <span class="nx">count</span><span class="p">;</span>
      <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
        <span class="k">return</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">renderListItem</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">stack</span><span class="p">,</span> <span class="nx">elBounds</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">position</span> <span class="o">=</span> <span class="nf">getCSS</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="dl">"</span><span class="s2">listStylePosition</span><span class="dl">"</span><span class="p">),</span>
        <span class="nx">x</span><span class="p">,</span>
        <span class="nx">y</span><span class="p">,</span>
        <span class="nx">type</span> <span class="o">=</span> <span class="nf">getCSS</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="dl">"</span><span class="s2">listStyleType</span><span class="dl">"</span><span class="p">),</span>
        <span class="nx">currentIndex</span><span class="p">,</span>
        <span class="nx">text</span><span class="p">,</span>
        <span class="nx">listBounds</span><span class="p">,</span>
        <span class="nx">bold</span> <span class="o">=</span> <span class="nf">getCSS</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="dl">"</span><span class="s2">fontWeight</span><span class="dl">"</span><span class="p">);</span>

      <span class="k">if </span><span class="p">(</span>
        <span class="sr">/^</span><span class="se">(</span><span class="sr">decimal|decimal-leading-zero|upper-alpha|upper-latin|upper-roman|lower-alpha|lower-greek|lower-latin|lower-roman</span><span class="se">)</span><span class="sr">$/i</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span>
          <span class="nx">type</span><span class="p">,</span>
        <span class="p">)</span>
      <span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">currentIndex</span> <span class="o">=</span> <span class="nf">elementIndex</span><span class="p">(</span><span class="nx">element</span><span class="p">);</span>

        <span class="k">switch </span><span class="p">(</span><span class="nx">type</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">case</span> <span class="dl">"</span><span class="s2">decimal</span><span class="dl">"</span><span class="p">:</span>
            <span class="nx">text</span> <span class="o">=</span> <span class="nx">currentIndex</span><span class="p">;</span>
            <span class="k">break</span><span class="p">;</span>
          <span class="k">case</span> <span class="dl">"</span><span class="s2">decimal-leading-zero</span><span class="dl">"</span><span class="p">:</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">currentIndex</span><span class="p">.</span><span class="nf">toString</span><span class="p">().</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">text</span> <span class="o">=</span> <span class="nx">currentIndex</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">0</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">currentIndex</span><span class="p">.</span><span class="nf">toString</span><span class="p">();</span>
            <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
              <span class="nx">text</span> <span class="o">=</span> <span class="nx">currentIndex</span><span class="p">.</span><span class="nf">toString</span><span class="p">();</span>
            <span class="p">&#125;</span>
            <span class="k">break</span><span class="p">;</span>
          <span class="k">case</span> <span class="dl">"</span><span class="s2">upper-roman</span><span class="dl">"</span><span class="p">:</span>
            <span class="nx">text</span> <span class="o">=</span> <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Generate</span><span class="p">.</span><span class="nc">ListRoman</span><span class="p">(</span><span class="nx">currentIndex</span><span class="p">);</span>
            <span class="k">break</span><span class="p">;</span>
          <span class="k">case</span> <span class="dl">"</span><span class="s2">lower-roman</span><span class="dl">"</span><span class="p">:</span>
            <span class="nx">text</span> <span class="o">=</span> <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Generate</span><span class="p">.</span><span class="nc">ListRoman</span><span class="p">(</span><span class="nx">currentIndex</span><span class="p">).</span><span class="nf">toLowerCase</span><span class="p">();</span>
            <span class="k">break</span><span class="p">;</span>
          <span class="k">case</span> <span class="dl">"</span><span class="s2">lower-alpha</span><span class="dl">"</span><span class="p">:</span>
            <span class="nx">text</span> <span class="o">=</span> <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Generate</span><span class="p">.</span><span class="nc">ListAlpha</span><span class="p">(</span><span class="nx">currentIndex</span><span class="p">).</span><span class="nf">toLowerCase</span><span class="p">();</span>
            <span class="k">break</span><span class="p">;</span>
          <span class="k">case</span> <span class="dl">"</span><span class="s2">upper-alpha</span><span class="dl">"</span><span class="p">:</span>
            <span class="nx">text</span> <span class="o">=</span> <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Generate</span><span class="p">.</span><span class="nc">ListAlpha</span><span class="p">(</span><span class="nx">currentIndex</span><span class="p">);</span>
            <span class="k">break</span><span class="p">;</span>
        <span class="p">&#125;</span>

        <span class="nx">text</span> <span class="o">+=</span> <span class="dl">"</span><span class="s2">. </span><span class="dl">"</span><span class="p">;</span>
        <span class="nx">listBounds</span> <span class="o">=</span> <span class="nf">listPosition</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">text</span><span class="p">);</span>

        <span class="k">switch </span><span class="p">(</span><span class="nx">bold</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">case</span> <span class="mi">401</span><span class="p">:</span>
            <span class="nx">bold</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">bold</span><span class="dl">"</span><span class="p">;</span>
            <span class="k">break</span><span class="p">;</span>
          <span class="k">case</span> <span class="mi">400</span><span class="p">:</span>
            <span class="nx">bold</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">normal</span><span class="dl">"</span><span class="p">;</span>
            <span class="k">break</span><span class="p">;</span>
        <span class="p">&#125;</span>

        <span class="nx">ctx</span><span class="p">.</span><span class="nf">setVariable</span><span class="p">(</span><span class="dl">"</span><span class="s2">fillStyle</span><span class="dl">"</span><span class="p">,</span> <span class="nf">getCSS</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">));</span>
        <span class="nx">ctx</span><span class="p">.</span><span class="nf">setVariable</span><span class="p">(</span>
          <span class="dl">"</span><span class="s2">font</span><span class="dl">"</span><span class="p">,</span>
          <span class="nf">getCSS</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="dl">"</span><span class="s2">fontVariant</span><span class="dl">"</span><span class="p">)</span> <span class="o">+</span>
            <span class="dl">"</span><span class="s2"> </span><span class="dl">"</span> <span class="o">+</span>
            <span class="nx">bold</span> <span class="o">+</span>
            <span class="dl">"</span><span class="s2"> </span><span class="dl">"</span> <span class="o">+</span>
            <span class="nf">getCSS</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="dl">"</span><span class="s2">fontStyle</span><span class="dl">"</span><span class="p">)</span> <span class="o">+</span>
            <span class="dl">"</span><span class="s2"> </span><span class="dl">"</span> <span class="o">+</span>
            <span class="nf">getCSS</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="dl">"</span><span class="s2">fontSize</span><span class="dl">"</span><span class="p">)</span> <span class="o">+</span>
            <span class="dl">"</span><span class="s2"> </span><span class="dl">"</span> <span class="o">+</span>
            <span class="nf">getCSS</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="dl">"</span><span class="s2">fontFamily</span><span class="dl">"</span><span class="p">),</span>
        <span class="p">);</span>

        <span class="k">if </span><span class="p">(</span><span class="nx">position</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">inside</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">ctx</span><span class="p">.</span><span class="nf">setVariable</span><span class="p">(</span><span class="dl">"</span><span class="s2">textAlign</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">left</span><span class="dl">"</span><span class="p">);</span>
          <span class="c1">//   this.setFont(stack.ctx, element, false);</span>
          <span class="nx">x</span> <span class="o">=</span> <span class="nx">elBounds</span><span class="p">.</span><span class="nx">left</span><span class="p">;</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
          <span class="k">return</span><span class="p">;</span>
          <span class="cm">/*
                 TODO really need to figure out some more accurate way to try and find the position.
                 as defined in http://www.w3.org/TR/CSS21/generate.html#propdef-list-style-position, it does not even have a specified "correct" position, so each browser
                 may display it whatever way it feels like.
                 "The position of the list-item marker adjacent to floats is undefined in CSS 2.1. CSS 2.1 does not specify the precise location of the marker box or its position in the painting order"

                ctx.setVariable("textAlign", "right");
                //  this.setFont(stack.ctx, element, true);
                x = elBounds.left - 10;
                 */</span>
        <span class="p">&#125;</span>

        <span class="nx">y</span> <span class="o">=</span> <span class="nx">listBounds</span><span class="p">.</span><span class="nx">bottom</span><span class="p">;</span>

        <span class="nf">drawText</span><span class="p">(</span><span class="nx">text</span><span class="p">,</span> <span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">,</span> <span class="nx">ctx</span><span class="p">);</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">loadImage</span><span class="p">(</span><span class="nx">src</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">img</span> <span class="o">=</span> <span class="nx">images</span><span class="p">[</span><span class="nx">src</span><span class="p">];</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">img</span> <span class="o">&amp;&amp;</span> <span class="nx">img</span><span class="p">.</span><span class="nx">succeeded</span> <span class="o">===</span> <span class="kc">true</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">return</span> <span class="nx">img</span><span class="p">.</span><span class="nx">img</span><span class="p">;</span>
      <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
        <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">clipBounds</span><span class="p">(</span><span class="nx">src</span><span class="p">,</span> <span class="nx">dst</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">x</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">max</span><span class="p">(</span><span class="nx">src</span><span class="p">.</span><span class="nx">left</span><span class="p">,</span> <span class="nx">dst</span><span class="p">.</span><span class="nx">left</span><span class="p">),</span>
        <span class="nx">y</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">max</span><span class="p">(</span><span class="nx">src</span><span class="p">.</span><span class="nx">top</span><span class="p">,</span> <span class="nx">dst</span><span class="p">.</span><span class="nx">top</span><span class="p">),</span>
        <span class="nx">x2</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">min</span><span class="p">(</span><span class="nx">src</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="nx">src</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span> <span class="nx">dst</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="nx">dst</span><span class="p">.</span><span class="nx">width</span><span class="p">),</span>
        <span class="nx">y2</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">min</span><span class="p">(</span><span class="nx">src</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="nx">src</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span> <span class="nx">dst</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="nx">dst</span><span class="p">.</span><span class="nx">height</span><span class="p">);</span>

      <span class="k">return</span> <span class="p">&#123;</span>
        <span class="na">left</span><span class="p">:</span> <span class="nx">x</span><span class="p">,</span>
        <span class="na">top</span><span class="p">:</span> <span class="nx">y</span><span class="p">,</span>
        <span class="na">width</span><span class="p">:</span> <span class="nx">x2</span> <span class="o">-</span> <span class="nx">x</span><span class="p">,</span>
        <span class="na">height</span><span class="p">:</span> <span class="nx">y2</span> <span class="o">-</span> <span class="nx">y</span><span class="p">,</span>
      <span class="p">&#125;;</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">setZ</span><span class="p">(</span><span class="nx">zIndex</span><span class="p">,</span> <span class="nx">parentZ</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="c1">// TODO fix static elements overlapping relative/absolute elements under same stack, if they are defined after them</span>
      <span class="kd">var</span> <span class="nx">newContext</span><span class="p">;</span>
      <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">parentZ</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">newContext</span> <span class="o">=</span> <span class="nf">h2czContext</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span>
        <span class="k">return</span> <span class="nx">newContext</span><span class="p">;</span>
      <span class="p">&#125;</span>

      <span class="k">if </span><span class="p">(</span><span class="nx">zIndex</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">auto</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">needReorder</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
        <span class="nx">newContext</span> <span class="o">=</span> <span class="nf">h2czContext</span><span class="p">(</span><span class="nx">zIndex</span><span class="p">);</span>
        <span class="nx">parentZ</span><span class="p">.</span><span class="nx">children</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">newContext</span><span class="p">);</span>
        <span class="k">return</span> <span class="nx">newContext</span><span class="p">;</span>
      <span class="p">&#125;</span>

      <span class="k">return</span> <span class="nx">parentZ</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">renderBorders</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">ctx</span><span class="p">,</span> <span class="nx">bounds</span><span class="p">,</span> <span class="nx">clip</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="cm">/*
       *  TODO add support for different border-style's than solid
       */</span>

      <span class="kd">var</span> <span class="nx">x</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">left</span><span class="p">,</span>
        <span class="nx">y</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">top</span><span class="p">,</span>
        <span class="nx">w</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span>
        <span class="nx">h</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span>
        <span class="nx">borderSide</span><span class="p">,</span>
        <span class="nx">borderData</span><span class="p">,</span>
        <span class="nx">bx</span><span class="p">,</span>
        <span class="nx">by</span><span class="p">,</span>
        <span class="nx">bw</span><span class="p">,</span>
        <span class="nx">bh</span><span class="p">,</span>
        <span class="nx">borderBounds</span><span class="p">,</span>
        <span class="nx">borders</span> <span class="o">=</span> <span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">el</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="kd">var</span> <span class="nx">borders</span> <span class="o">=</span> <span class="p">[],</span>
            <span class="nx">sides</span> <span class="o">=</span> <span class="p">[</span><span class="dl">"</span><span class="s2">Top</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">Right</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">Bottom</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">Left</span><span class="dl">"</span><span class="p">],</span>
            <span class="nx">s</span><span class="p">;</span>

          <span class="k">for </span><span class="p">(</span><span class="nx">s</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">s</span> <span class="o">&lt;</span> <span class="mi">4</span><span class="p">;</span> <span class="nx">s</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">borders</span><span class="p">.</span><span class="nf">push</span><span class="p">(&#123;</span>
              <span class="na">width</span><span class="p">:</span> <span class="nf">getCSSInt</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">border</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">sides</span><span class="p">[</span><span class="nx">s</span><span class="p">]</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">Width</span><span class="dl">"</span><span class="p">),</span>
              <span class="na">color</span><span class="p">:</span> <span class="nf">getCSS</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">border</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">sides</span><span class="p">[</span><span class="nx">s</span><span class="p">]</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">Color</span><span class="dl">"</span><span class="p">),</span>
            <span class="p">&#125;);</span>
          <span class="p">&#125;</span>

          <span class="k">return</span> <span class="nx">borders</span><span class="p">;</span>
        <span class="p">&#125;)(</span><span class="nx">el</span><span class="p">);</span>

      <span class="k">for </span><span class="p">(</span><span class="nx">borderSide</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">borderSide</span> <span class="o">&lt;</span> <span class="mi">4</span><span class="p">;</span> <span class="nx">borderSide</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">borderData</span> <span class="o">=</span> <span class="nx">borders</span><span class="p">[</span><span class="nx">borderSide</span><span class="p">];</span>

        <span class="k">if </span><span class="p">(</span><span class="nx">borderData</span><span class="p">.</span><span class="nx">width</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">bx</span> <span class="o">=</span> <span class="nx">x</span><span class="p">;</span>
          <span class="nx">by</span> <span class="o">=</span> <span class="nx">y</span><span class="p">;</span>
          <span class="nx">bw</span> <span class="o">=</span> <span class="nx">w</span><span class="p">;</span>
          <span class="nx">bh</span> <span class="o">=</span> <span class="nx">h</span> <span class="o">-</span> <span class="nx">borders</span><span class="p">[</span><span class="mi">2</span><span class="p">].</span><span class="nx">width</span><span class="p">;</span>

          <span class="k">switch </span><span class="p">(</span><span class="nx">borderSide</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">case</span> <span class="mi">0</span><span class="p">:</span>
              <span class="c1">// top border</span>
              <span class="nx">bh</span> <span class="o">=</span> <span class="nx">borders</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">width</span><span class="p">;</span>
              <span class="k">break</span><span class="p">;</span>
            <span class="k">case</span> <span class="mi">1</span><span class="p">:</span>
              <span class="c1">// right border</span>
              <span class="nx">bx</span> <span class="o">=</span> <span class="nx">x</span> <span class="o">+</span> <span class="nx">w</span> <span class="o">-</span> <span class="nx">borders</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">width</span><span class="p">;</span>
              <span class="nx">bw</span> <span class="o">=</span> <span class="nx">borders</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">width</span><span class="p">;</span>
              <span class="k">break</span><span class="p">;</span>
            <span class="k">case</span> <span class="mi">2</span><span class="p">:</span>
              <span class="c1">// bottom border</span>
              <span class="nx">by</span> <span class="o">=</span> <span class="nx">by</span> <span class="o">+</span> <span class="nx">h</span> <span class="o">-</span> <span class="nx">borders</span><span class="p">[</span><span class="mi">2</span><span class="p">].</span><span class="nx">width</span><span class="p">;</span>
              <span class="nx">bh</span> <span class="o">=</span> <span class="nx">borders</span><span class="p">[</span><span class="mi">2</span><span class="p">].</span><span class="nx">width</span><span class="p">;</span>
              <span class="k">break</span><span class="p">;</span>
            <span class="k">case</span> <span class="mi">3</span><span class="p">:</span>
              <span class="c1">// left border</span>
              <span class="nx">bw</span> <span class="o">=</span> <span class="nx">borders</span><span class="p">[</span><span class="mi">3</span><span class="p">].</span><span class="nx">width</span><span class="p">;</span>
              <span class="k">break</span><span class="p">;</span>
          <span class="p">&#125;</span>

          <span class="nx">borderBounds</span> <span class="o">=</span> <span class="p">&#123;</span>
            <span class="na">left</span><span class="p">:</span> <span class="nx">bx</span><span class="p">,</span>
            <span class="na">top</span><span class="p">:</span> <span class="nx">by</span><span class="p">,</span>
            <span class="na">width</span><span class="p">:</span> <span class="nx">bw</span><span class="p">,</span>
            <span class="na">height</span><span class="p">:</span> <span class="nx">bh</span><span class="p">,</span>
          <span class="p">&#125;;</span>

          <span class="k">if </span><span class="p">(</span><span class="nx">clip</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">borderBounds</span> <span class="o">=</span> <span class="nf">clipBounds</span><span class="p">(</span><span class="nx">borderBounds</span><span class="p">,</span> <span class="nx">clip</span><span class="p">);</span>
          <span class="p">&#125;</span>

          <span class="k">if </span><span class="p">(</span><span class="nx">borderBounds</span><span class="p">.</span><span class="nx">width</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">borderBounds</span><span class="p">.</span><span class="nx">height</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nf">renderRect</span><span class="p">(</span>
              <span class="nx">ctx</span><span class="p">,</span>
              <span class="nx">bx</span><span class="p">,</span>
              <span class="nx">by</span><span class="p">,</span>
              <span class="nx">borderBounds</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span>
              <span class="nx">borderBounds</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span>
              <span class="nx">borderData</span><span class="p">.</span><span class="nx">color</span><span class="p">,</span>
            <span class="p">);</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span>

      <span class="k">return</span> <span class="nx">borders</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">renderFormValue</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">bounds</span><span class="p">,</span> <span class="nx">stack</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">valueWrap</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">valuewrap</span><span class="dl">"</span><span class="p">),</span>
        <span class="nx">cssArr</span> <span class="o">=</span> <span class="p">[</span>
          <span class="dl">"</span><span class="s2">lineHeight</span><span class="dl">"</span><span class="p">,</span>
          <span class="dl">"</span><span class="s2">textAlign</span><span class="dl">"</span><span class="p">,</span>
          <span class="dl">"</span><span class="s2">fontFamily</span><span class="dl">"</span><span class="p">,</span>
          <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">,</span>
          <span class="dl">"</span><span class="s2">fontSize</span><span class="dl">"</span><span class="p">,</span>
          <span class="dl">"</span><span class="s2">paddingLeft</span><span class="dl">"</span><span class="p">,</span>
          <span class="dl">"</span><span class="s2">paddingTop</span><span class="dl">"</span><span class="p">,</span>
          <span class="dl">"</span><span class="s2">width</span><span class="dl">"</span><span class="p">,</span>
          <span class="dl">"</span><span class="s2">height</span><span class="dl">"</span><span class="p">,</span>
          <span class="dl">"</span><span class="s2">border</span><span class="dl">"</span><span class="p">,</span>
          <span class="dl">"</span><span class="s2">borderLeftWidth</span><span class="dl">"</span><span class="p">,</span>
          <span class="dl">"</span><span class="s2">borderTopWidth</span><span class="dl">"</span><span class="p">,</span>
        <span class="p">],</span>
        <span class="nx">i</span><span class="p">,</span>
        <span class="nx">textValue</span><span class="p">,</span>
        <span class="nx">textNode</span><span class="p">,</span>
        <span class="nx">arrLen</span><span class="p">,</span>
        <span class="nx">style</span><span class="p">;</span>

      <span class="k">for </span><span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">arrLen</span> <span class="o">=</span> <span class="nx">cssArr</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">arrLen</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">style</span> <span class="o">=</span> <span class="nx">cssArr</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span>

        <span class="k">try</span> <span class="p">&#123;</span>
          <span class="nx">valueWrap</span><span class="p">.</span><span class="nx">style</span><span class="p">[</span><span class="nx">style</span><span class="p">]</span> <span class="o">=</span> <span class="nf">getCSS</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">style</span><span class="p">);</span>
        <span class="p">&#125;</span> <span class="k">catch </span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="c1">// Older IE has issues with "border"</span>
          <span class="nf">h2clog</span><span class="p">(</span>
            <span class="dl">"</span><span class="s2">html2canvas: Parse: Exception caught in renderFormValue: </span><span class="dl">"</span> <span class="o">+</span>
              <span class="nx">e</span><span class="p">.</span><span class="nx">message</span><span class="p">,</span>
          <span class="p">);</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span>

      <span class="nx">valueWrap</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">borderColor</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">black</span><span class="dl">"</span><span class="p">;</span>
      <span class="nx">valueWrap</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">borderStyle</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">solid</span><span class="dl">"</span><span class="p">;</span>
      <span class="nx">valueWrap</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">block</span><span class="dl">"</span><span class="p">;</span>
      <span class="nx">valueWrap</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">position</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">absolute</span><span class="dl">"</span><span class="p">;</span>
      <span class="k">if </span><span class="p">(</span>
        <span class="sr">/^</span><span class="se">(</span><span class="sr">submit|reset|button|text|password</span><span class="se">)</span><span class="sr">$/</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">el</span><span class="p">.</span><span class="nx">type</span><span class="p">)</span> <span class="o">||</span>
        <span class="nx">el</span><span class="p">.</span><span class="nx">nodeName</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">SELECT</span><span class="dl">"</span>
      <span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">valueWrap</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">lineHeight</span> <span class="o">=</span> <span class="nf">getCSS</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">height</span><span class="dl">"</span><span class="p">);</span>
      <span class="p">&#125;</span>

      <span class="nx">valueWrap</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">top</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">px</span><span class="dl">"</span><span class="p">;</span>
      <span class="nx">valueWrap</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">left</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">px</span><span class="dl">"</span><span class="p">;</span>

      <span class="k">if </span><span class="p">(</span><span class="nx">el</span><span class="p">.</span><span class="nx">nodeName</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">SELECT</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="c1">// TODO increase accuracy of text position</span>
        <span class="nx">textValue</span> <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nx">options</span><span class="p">[</span><span class="nx">el</span><span class="p">.</span><span class="nx">selectedIndex</span><span class="p">].</span><span class="nx">text</span><span class="p">;</span>
      <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
        <span class="nx">textValue</span> <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nx">value</span><span class="p">;</span>
      <span class="p">&#125;</span>
      <span class="nx">textNode</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nf">createTextNode</span><span class="p">(</span><span class="nx">textValue</span><span class="p">);</span>

      <span class="nx">valueWrap</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">textNode</span><span class="p">);</span>
      <span class="nx">body</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">valueWrap</span><span class="p">);</span>

      <span class="nf">renderText</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">textNode</span><span class="p">,</span> <span class="nx">stack</span><span class="p">);</span>
      <span class="nx">body</span><span class="p">.</span><span class="nf">removeChild</span><span class="p">(</span><span class="nx">valueWrap</span><span class="p">);</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">renderImage</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">image</span><span class="p">,</span> <span class="nx">sx</span><span class="p">,</span> <span class="nx">sy</span><span class="p">,</span> <span class="nx">sw</span><span class="p">,</span> <span class="nx">sh</span><span class="p">,</span> <span class="nx">dx</span><span class="p">,</span> <span class="nx">dy</span><span class="p">,</span> <span class="nx">dw</span><span class="p">,</span> <span class="nx">dh</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">ctx</span><span class="p">.</span><span class="nf">drawImage</span><span class="p">(</span>
        <span class="nx">image</span><span class="p">,</span>
        <span class="nx">sx</span><span class="p">,</span> <span class="c1">//sx</span>
        <span class="nx">sy</span><span class="p">,</span> <span class="c1">//sy</span>
        <span class="nx">sw</span><span class="p">,</span> <span class="c1">//sw</span>
        <span class="nx">sh</span><span class="p">,</span> <span class="c1">//sh</span>
        <span class="nx">dx</span><span class="p">,</span> <span class="c1">//dx</span>
        <span class="nx">dy</span><span class="p">,</span> <span class="c1">// dy</span>
        <span class="nx">dw</span><span class="p">,</span> <span class="c1">//dw</span>
        <span class="nx">dh</span><span class="p">,</span> <span class="c1">//dh</span>
      <span class="p">);</span>
      <span class="nx">numDraws</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">renderBackgroundRepeat</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">image</span><span class="p">,</span> <span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">,</span> <span class="nx">width</span><span class="p">,</span> <span class="nx">height</span><span class="p">,</span> <span class="nx">elx</span><span class="p">,</span> <span class="nx">ely</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">sourceX</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span>
        <span class="nx">sourceY</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">elx</span> <span class="o">-</span> <span class="nx">x</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">sourceX</span> <span class="o">=</span> <span class="nx">elx</span> <span class="o">-</span> <span class="nx">x</span><span class="p">;</span>
      <span class="p">&#125;</span>

      <span class="k">if </span><span class="p">(</span><span class="nx">ely</span> <span class="o">-</span> <span class="nx">y</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">sourceY</span> <span class="o">=</span> <span class="nx">ely</span> <span class="o">-</span> <span class="nx">y</span><span class="p">;</span>
      <span class="p">&#125;</span>

      <span class="nf">renderImage</span><span class="p">(</span>
        <span class="nx">ctx</span><span class="p">,</span>
        <span class="nx">image</span><span class="p">,</span>
        <span class="nx">sourceX</span><span class="p">,</span> <span class="c1">// source X</span>
        <span class="nx">sourceY</span><span class="p">,</span> <span class="c1">// source Y</span>
        <span class="nx">width</span> <span class="o">-</span> <span class="nx">sourceX</span><span class="p">,</span> <span class="c1">// source Width</span>
        <span class="nx">height</span> <span class="o">-</span> <span class="nx">sourceY</span><span class="p">,</span> <span class="c1">// source Height</span>
        <span class="nx">x</span> <span class="o">+</span> <span class="nx">sourceX</span><span class="p">,</span> <span class="c1">// destination X</span>
        <span class="nx">y</span> <span class="o">+</span> <span class="nx">sourceY</span><span class="p">,</span> <span class="c1">// destination Y</span>
        <span class="nx">width</span> <span class="o">-</span> <span class="nx">sourceX</span><span class="p">,</span> <span class="c1">// destination width</span>
        <span class="nx">height</span> <span class="o">-</span> <span class="nx">sourceY</span><span class="p">,</span> <span class="c1">// destination height</span>
      <span class="p">);</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">renderBackgroundRepeatY</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">image</span><span class="p">,</span> <span class="nx">bgp</span><span class="p">,</span> <span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">,</span> <span class="nx">w</span><span class="p">,</span> <span class="nx">h</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">height</span><span class="p">,</span>
        <span class="nx">width</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">min</span><span class="p">(</span><span class="nx">image</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span> <span class="nx">w</span><span class="p">),</span>
        <span class="nx">bgy</span><span class="p">;</span>

      <span class="nx">bgp</span><span class="p">.</span><span class="nx">top</span> <span class="o">=</span> <span class="nx">bgp</span><span class="p">.</span><span class="nx">top</span> <span class="o">-</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">ceil</span><span class="p">(</span><span class="nx">bgp</span><span class="p">.</span><span class="nx">top</span> <span class="o">/</span> <span class="nx">image</span><span class="p">.</span><span class="nx">height</span><span class="p">)</span> <span class="o">*</span> <span class="nx">image</span><span class="p">.</span><span class="nx">height</span><span class="p">;</span>

      <span class="k">for </span><span class="p">(</span><span class="nx">bgy</span> <span class="o">=</span> <span class="nx">y</span> <span class="o">+</span> <span class="nx">bgp</span><span class="p">.</span><span class="nx">top</span><span class="p">;</span> <span class="nx">bgy</span> <span class="o">&lt;</span> <span class="nx">h</span> <span class="o">+</span> <span class="nx">y</span><span class="p">;)</span> <span class="p">&#123;</span>
        <span class="k">if </span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nf">floor</span><span class="p">(</span><span class="nx">bgy</span> <span class="o">+</span> <span class="nx">image</span><span class="p">.</span><span class="nx">height</span><span class="p">)</span> <span class="o">&gt;</span> <span class="nx">h</span> <span class="o">+</span> <span class="nx">y</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">height</span> <span class="o">=</span> <span class="nx">h</span> <span class="o">+</span> <span class="nx">y</span> <span class="o">-</span> <span class="nx">bgy</span><span class="p">;</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
          <span class="nx">height</span> <span class="o">=</span> <span class="nx">image</span><span class="p">.</span><span class="nx">height</span><span class="p">;</span>
        <span class="p">&#125;</span>
        <span class="nf">renderBackgroundRepeat</span><span class="p">(</span>
          <span class="nx">ctx</span><span class="p">,</span>
          <span class="nx">image</span><span class="p">,</span>
          <span class="nx">x</span> <span class="o">+</span> <span class="nx">bgp</span><span class="p">.</span><span class="nx">left</span><span class="p">,</span>
          <span class="nx">bgy</span><span class="p">,</span>
          <span class="nx">width</span><span class="p">,</span>
          <span class="nx">height</span><span class="p">,</span>
          <span class="nx">x</span><span class="p">,</span>
          <span class="nx">y</span><span class="p">,</span>
        <span class="p">);</span>

        <span class="nx">bgy</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">floor</span><span class="p">(</span><span class="nx">bgy</span> <span class="o">+</span> <span class="nx">image</span><span class="p">.</span><span class="nx">height</span><span class="p">);</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">renderBackgroundRepeatX</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">image</span><span class="p">,</span> <span class="nx">bgp</span><span class="p">,</span> <span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">,</span> <span class="nx">w</span><span class="p">,</span> <span class="nx">h</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">height</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">min</span><span class="p">(</span><span class="nx">image</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span> <span class="nx">h</span><span class="p">),</span>
        <span class="nx">width</span><span class="p">,</span>
        <span class="nx">bgx</span><span class="p">;</span>

      <span class="nx">bgp</span><span class="p">.</span><span class="nx">left</span> <span class="o">=</span> <span class="nx">bgp</span><span class="p">.</span><span class="nx">left</span> <span class="o">-</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">ceil</span><span class="p">(</span><span class="nx">bgp</span><span class="p">.</span><span class="nx">left</span> <span class="o">/</span> <span class="nx">image</span><span class="p">.</span><span class="nx">width</span><span class="p">)</span> <span class="o">*</span> <span class="nx">image</span><span class="p">.</span><span class="nx">width</span><span class="p">;</span>

      <span class="k">for </span><span class="p">(</span><span class="nx">bgx</span> <span class="o">=</span> <span class="nx">x</span> <span class="o">+</span> <span class="nx">bgp</span><span class="p">.</span><span class="nx">left</span><span class="p">;</span> <span class="nx">bgx</span> <span class="o">&lt;</span> <span class="nx">w</span> <span class="o">+</span> <span class="nx">x</span><span class="p">;)</span> <span class="p">&#123;</span>
        <span class="k">if </span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nf">floor</span><span class="p">(</span><span class="nx">bgx</span> <span class="o">+</span> <span class="nx">image</span><span class="p">.</span><span class="nx">width</span><span class="p">)</span> <span class="o">&gt;</span> <span class="nx">w</span> <span class="o">+</span> <span class="nx">x</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">width</span> <span class="o">=</span> <span class="nx">w</span> <span class="o">+</span> <span class="nx">x</span> <span class="o">-</span> <span class="nx">bgx</span><span class="p">;</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
          <span class="nx">width</span> <span class="o">=</span> <span class="nx">image</span><span class="p">.</span><span class="nx">width</span><span class="p">;</span>
        <span class="p">&#125;</span>

        <span class="nf">renderBackgroundRepeat</span><span class="p">(</span>
          <span class="nx">ctx</span><span class="p">,</span>
          <span class="nx">image</span><span class="p">,</span>
          <span class="nx">bgx</span><span class="p">,</span>
          <span class="nx">y</span> <span class="o">+</span> <span class="nx">bgp</span><span class="p">.</span><span class="nx">top</span><span class="p">,</span>
          <span class="nx">width</span><span class="p">,</span>
          <span class="nx">height</span><span class="p">,</span>
          <span class="nx">x</span><span class="p">,</span>
          <span class="nx">y</span><span class="p">,</span>
        <span class="p">);</span>

        <span class="nx">bgx</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">floor</span><span class="p">(</span><span class="nx">bgx</span> <span class="o">+</span> <span class="nx">image</span><span class="p">.</span><span class="nx">width</span><span class="p">);</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">renderBackground</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">bounds</span><span class="p">,</span> <span class="nx">ctx</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="c1">// TODO add support for multi background-images</span>
      <span class="kd">var</span> <span class="nx">background_image</span> <span class="o">=</span> <span class="nf">getCSS</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">backgroundImage</span><span class="dl">"</span><span class="p">),</span>
        <span class="nx">background_repeat</span> <span class="o">=</span> <span class="nf">getCSS</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">backgroundRepeat</span><span class="dl">"</span><span class="p">).</span><span class="nf">split</span><span class="p">(</span><span class="dl">"</span><span class="s2">,</span><span class="dl">"</span><span class="p">)[</span><span class="mi">0</span><span class="p">],</span>
        <span class="nx">image</span><span class="p">,</span>
        <span class="nx">bgp</span><span class="p">,</span>
        <span class="nx">bgy</span><span class="p">,</span>
        <span class="nx">bgw</span><span class="p">,</span>
        <span class="nx">bgsx</span><span class="p">,</span>
        <span class="nx">bgsy</span><span class="p">,</span>
        <span class="nx">bgdx</span><span class="p">,</span>
        <span class="nx">bgdy</span><span class="p">,</span>
        <span class="nx">bgh</span><span class="p">,</span>
        <span class="nx">h</span><span class="p">,</span>
        <span class="nx">height</span><span class="p">,</span>
        <span class="nx">add</span><span class="p">;</span>

      <span class="c1">//   if (typeof background_image !== "undefined" &amp;&amp; /^(1|none)$/.test(background_image) === false &amp;&amp; /^(-webkit|-moz|linear-gradient|-o-)/.test(background_image)===false)&#123;</span>

      <span class="k">if </span><span class="p">(</span>
        <span class="o">!</span><span class="sr">/data:image</span><span class="se">\/</span><span class="sr">.*;base64,/i</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">background_image</span><span class="p">)</span> <span class="o">&amp;&amp;</span>
        <span class="o">!</span><span class="sr">/^</span><span class="se">(</span><span class="sr">-webkit|-moz|linear-gradient|-o-</span><span class="se">)</span><span class="sr">/</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">background_image</span><span class="p">)</span>
      <span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">background_image</span> <span class="o">=</span> <span class="nx">background_image</span><span class="p">.</span><span class="nf">split</span><span class="p">(</span><span class="dl">"</span><span class="s2">,</span><span class="dl">"</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span>
      <span class="p">&#125;</span>

      <span class="k">if </span><span class="p">(</span>
        <span class="k">typeof</span> <span class="nx">background_image</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">undefined</span><span class="dl">"</span> <span class="o">&amp;&amp;</span>
        <span class="sr">/^</span><span class="se">(</span><span class="sr">1|none</span><span class="se">)</span><span class="sr">$/</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">background_image</span><span class="p">)</span> <span class="o">===</span> <span class="kc">false</span>
      <span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">background_image</span> <span class="o">=</span> <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Util</span><span class="p">.</span><span class="nf">backgroundImage</span><span class="p">(</span><span class="nx">background_image</span><span class="p">);</span>
        <span class="nx">image</span> <span class="o">=</span> <span class="nf">loadImage</span><span class="p">(</span><span class="nx">background_image</span><span class="p">);</span>

        <span class="nx">bgp</span> <span class="o">=</span> <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Util</span><span class="p">.</span><span class="nc">BackgroundPosition</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">bounds</span><span class="p">,</span> <span class="nx">image</span><span class="p">);</span>

        <span class="c1">// TODO add support for background-origin</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">image</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">switch </span><span class="p">(</span><span class="nx">background_repeat</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">case</span> <span class="dl">"</span><span class="s2">repeat-x</span><span class="dl">"</span><span class="p">:</span>
              <span class="nf">renderBackgroundRepeatX</span><span class="p">(</span>
                <span class="nx">ctx</span><span class="p">,</span>
                <span class="nx">image</span><span class="p">,</span>
                <span class="nx">bgp</span><span class="p">,</span>
                <span class="nx">bounds</span><span class="p">.</span><span class="nx">left</span><span class="p">,</span>
                <span class="nx">bounds</span><span class="p">.</span><span class="nx">top</span><span class="p">,</span>
                <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span>
                <span class="nx">bounds</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span>
              <span class="p">);</span>
              <span class="k">break</span><span class="p">;</span>

            <span class="k">case</span> <span class="dl">"</span><span class="s2">repeat-y</span><span class="dl">"</span><span class="p">:</span>
              <span class="nf">renderBackgroundRepeatY</span><span class="p">(</span>
                <span class="nx">ctx</span><span class="p">,</span>
                <span class="nx">image</span><span class="p">,</span>
                <span class="nx">bgp</span><span class="p">,</span>
                <span class="nx">bounds</span><span class="p">.</span><span class="nx">left</span><span class="p">,</span>
                <span class="nx">bounds</span><span class="p">.</span><span class="nx">top</span><span class="p">,</span>
                <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span>
                <span class="nx">bounds</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span>
              <span class="p">);</span>
              <span class="k">break</span><span class="p">;</span>

            <span class="k">case</span> <span class="dl">"</span><span class="s2">no-repeat</span><span class="dl">"</span><span class="p">:</span>
              <span class="cm">/*
                    this.drawBackgroundRepeat(
                        ctx,
                        image,
                        bgp.left+bounds.left, // sx
                        bgp.top+bounds.top, // sy
                        Math.min(bounds.width,image.width),
                        Math.min(bounds.height,image.height),
                        bounds.left,
                        bounds.top
                        );*/</span>

              <span class="nx">bgw</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span> <span class="o">-</span> <span class="nx">bgp</span><span class="p">.</span><span class="nx">left</span><span class="p">;</span>
              <span class="nx">bgh</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">height</span> <span class="o">-</span> <span class="nx">bgp</span><span class="p">.</span><span class="nx">top</span><span class="p">;</span>
              <span class="nx">bgsx</span> <span class="o">=</span> <span class="nx">bgp</span><span class="p">.</span><span class="nx">left</span><span class="p">;</span>
              <span class="nx">bgsy</span> <span class="o">=</span> <span class="nx">bgp</span><span class="p">.</span><span class="nx">top</span><span class="p">;</span>
              <span class="nx">bgdx</span> <span class="o">=</span> <span class="nx">bgp</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">left</span><span class="p">;</span>
              <span class="nx">bgdy</span> <span class="o">=</span> <span class="nx">bgp</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">top</span><span class="p">;</span>

              <span class="c1">//</span>
              <span class="c1">//     bgw = Math.min(bgw,image.width);</span>
              <span class="c1">//  bgh = Math.min(bgh,image.height);</span>

              <span class="k">if </span><span class="p">(</span><span class="nx">bgsx</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">bgsx</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">abs</span><span class="p">(</span><span class="nx">bgsx</span><span class="p">);</span>
                <span class="nx">bgdx</span> <span class="o">+=</span> <span class="nx">bgsx</span><span class="p">;</span>
                <span class="nx">bgw</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">min</span><span class="p">(</span><span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span> <span class="nx">image</span><span class="p">.</span><span class="nx">width</span> <span class="o">-</span> <span class="nx">bgsx</span><span class="p">);</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                <span class="nx">bgw</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">min</span><span class="p">(</span><span class="nx">bgw</span><span class="p">,</span> <span class="nx">image</span><span class="p">.</span><span class="nx">width</span><span class="p">);</span>
                <span class="nx">bgsx</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
              <span class="p">&#125;</span>

              <span class="k">if </span><span class="p">(</span><span class="nx">bgsy</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">bgsy</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">abs</span><span class="p">(</span><span class="nx">bgsy</span><span class="p">);</span>
                <span class="nx">bgdy</span> <span class="o">+=</span> <span class="nx">bgsy</span><span class="p">;</span>
                <span class="c1">// bgh = bgh-bgsy;</span>
                <span class="nx">bgh</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">min</span><span class="p">(</span><span class="nx">bounds</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span> <span class="nx">image</span><span class="p">.</span><span class="nx">height</span> <span class="o">-</span> <span class="nx">bgsy</span><span class="p">);</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                <span class="nx">bgh</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">min</span><span class="p">(</span><span class="nx">bgh</span><span class="p">,</span> <span class="nx">image</span><span class="p">.</span><span class="nx">height</span><span class="p">);</span>
                <span class="nx">bgsy</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
              <span class="p">&#125;</span>

              <span class="k">if </span><span class="p">(</span><span class="nx">bgh</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">bgw</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="nf">renderImage</span><span class="p">(</span>
                  <span class="nx">ctx</span><span class="p">,</span>
                  <span class="nx">image</span><span class="p">,</span>
                  <span class="nx">bgsx</span><span class="p">,</span> <span class="c1">// source X : 0</span>
                  <span class="nx">bgsy</span><span class="p">,</span> <span class="c1">// source Y : 1695</span>
                  <span class="nx">bgw</span><span class="p">,</span> <span class="c1">// source Width : 18</span>
                  <span class="nx">bgh</span><span class="p">,</span> <span class="c1">// source Height : 1677</span>
                  <span class="nx">bgdx</span><span class="p">,</span> <span class="c1">// destination X :906</span>
                  <span class="nx">bgdy</span><span class="p">,</span> <span class="c1">// destination Y : 1020</span>
                  <span class="nx">bgw</span><span class="p">,</span> <span class="c1">// destination width : 18</span>
                  <span class="nx">bgh</span><span class="p">,</span> <span class="c1">// destination height : 1677</span>
                <span class="p">);</span>
              <span class="p">&#125;</span>
              <span class="k">break</span><span class="p">;</span>
            <span class="nl">default</span><span class="p">:</span>
              <span class="nx">bgp</span><span class="p">.</span><span class="nx">top</span> <span class="o">=</span>
                <span class="nx">bgp</span><span class="p">.</span><span class="nx">top</span> <span class="o">-</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">ceil</span><span class="p">(</span><span class="nx">bgp</span><span class="p">.</span><span class="nx">top</span> <span class="o">/</span> <span class="nx">image</span><span class="p">.</span><span class="nx">height</span><span class="p">)</span> <span class="o">*</span> <span class="nx">image</span><span class="p">.</span><span class="nx">height</span><span class="p">;</span>

              <span class="k">for </span><span class="p">(</span>
                <span class="nx">bgy</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="nx">bgp</span><span class="p">.</span><span class="nx">top</span><span class="p">;</span>
                <span class="nx">bgy</span> <span class="o">&lt;</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">height</span> <span class="o">+</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">top</span><span class="p">;</span>
              <span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">h</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">min</span><span class="p">(</span><span class="nx">image</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">height</span> <span class="o">+</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">top</span> <span class="o">-</span> <span class="nx">bgy</span><span class="p">);</span>

                <span class="k">if </span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nf">floor</span><span class="p">(</span><span class="nx">bgy</span> <span class="o">+</span> <span class="nx">image</span><span class="p">.</span><span class="nx">height</span><span class="p">)</span> <span class="o">&gt;</span> <span class="nx">h</span> <span class="o">+</span> <span class="nx">bgy</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">height</span> <span class="o">=</span> <span class="nx">h</span> <span class="o">+</span> <span class="nx">bgy</span> <span class="o">-</span> <span class="nx">bgy</span><span class="p">;</span>
                <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                  <span class="nx">height</span> <span class="o">=</span> <span class="nx">image</span><span class="p">.</span><span class="nx">height</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="c1">// console.log(height);</span>

                <span class="k">if </span><span class="p">(</span><span class="nx">bgy</span> <span class="o">&lt;</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">top</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">add</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">top</span> <span class="o">-</span> <span class="nx">bgy</span><span class="p">;</span>
                  <span class="nx">bgy</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">top</span><span class="p">;</span>
                <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                  <span class="nx">add</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
                <span class="p">&#125;</span>

                <span class="nf">renderBackgroundRepeatX</span><span class="p">(</span>
                  <span class="nx">ctx</span><span class="p">,</span>
                  <span class="nx">image</span><span class="p">,</span>
                  <span class="nx">bgp</span><span class="p">,</span>
                  <span class="nx">bounds</span><span class="p">.</span><span class="nx">left</span><span class="p">,</span>
                  <span class="nx">bgy</span><span class="p">,</span>
                  <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span>
                  <span class="nx">height</span><span class="p">,</span>
                <span class="p">);</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">add</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">bgp</span><span class="p">.</span><span class="nx">top</span> <span class="o">+=</span> <span class="nx">add</span><span class="p">;</span>
                <span class="p">&#125;</span>
                <span class="nx">bgy</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">floor</span><span class="p">(</span><span class="nx">bgy</span> <span class="o">+</span> <span class="nx">image</span><span class="p">.</span><span class="nx">height</span><span class="p">)</span> <span class="o">-</span> <span class="nx">add</span><span class="p">;</span>
              <span class="p">&#125;</span>
              <span class="k">break</span><span class="p">;</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
          <span class="nf">h2clog</span><span class="p">(</span><span class="dl">"</span><span class="s2">html2canvas: Error loading background:</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">background_image</span><span class="p">);</span>
          <span class="c1">//console.log(images);</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">renderElement</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">parentStack</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">bounds</span> <span class="o">=</span> <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Util</span><span class="p">.</span><span class="nc">Bounds</span><span class="p">(</span><span class="nx">el</span><span class="p">),</span>
        <span class="nx">x</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">left</span><span class="p">,</span>
        <span class="nx">y</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">top</span><span class="p">,</span>
        <span class="nx">w</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span>
        <span class="nx">h</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span>
        <span class="nx">image</span><span class="p">,</span>
        <span class="nx">bgcolor</span> <span class="o">=</span> <span class="nf">getCSS</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">backgroundColor</span><span class="dl">"</span><span class="p">),</span>
        <span class="nx">cssPosition</span> <span class="o">=</span> <span class="nf">getCSS</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">position</span><span class="dl">"</span><span class="p">),</span>
        <span class="nx">zindex</span><span class="p">,</span>
        <span class="nx">opacity</span> <span class="o">=</span> <span class="nf">getCSS</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">opacity</span><span class="dl">"</span><span class="p">),</span>
        <span class="nx">stack</span><span class="p">,</span>
        <span class="nx">stackLength</span><span class="p">,</span>
        <span class="nx">borders</span><span class="p">,</span>
        <span class="nx">ctx</span><span class="p">,</span>
        <span class="nx">bgbounds</span><span class="p">,</span>
        <span class="nx">imgSrc</span><span class="p">,</span>
        <span class="nx">paddingLeft</span><span class="p">,</span>
        <span class="nx">paddingTop</span><span class="p">,</span>
        <span class="nx">paddingRight</span><span class="p">,</span>
        <span class="nx">paddingBottom</span><span class="p">;</span>

      <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">parentStack</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">docDim</span> <span class="o">=</span> <span class="nf">docSize</span><span class="p">();</span>
        <span class="nx">parentStack</span> <span class="o">=</span> <span class="p">&#123;</span>
          <span class="na">opacity</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
        <span class="p">&#125;;</span>
      <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
        <span class="nx">docDim</span> <span class="o">=</span> <span class="p">&#123;&#125;;</span>
      <span class="p">&#125;</span>

      <span class="c1">//var zindex = this.formatZ(this.getCSS(el,"zIndex"),cssPosition,parentStack.zIndex,el.parentNode);</span>

      <span class="nx">zindex</span> <span class="o">=</span> <span class="nf">setZ</span><span class="p">(</span><span class="nf">getCSS</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">zIndex</span><span class="dl">"</span><span class="p">),</span> <span class="nx">parentStack</span><span class="p">.</span><span class="nx">zIndex</span><span class="p">);</span>

      <span class="nx">stack</span> <span class="o">=</span> <span class="p">&#123;</span>
        <span class="na">ctx</span><span class="p">:</span> <span class="nf">h2cRenderContext</span><span class="p">(</span><span class="nx">docDim</span><span class="p">.</span><span class="nx">width</span> <span class="o">||</span> <span class="nx">w</span><span class="p">,</span> <span class="nx">docDim</span><span class="p">.</span><span class="nx">height</span> <span class="o">||</span> <span class="nx">h</span><span class="p">),</span>
        <span class="na">zIndex</span><span class="p">:</span> <span class="nx">zindex</span><span class="p">,</span>
        <span class="na">opacity</span><span class="p">:</span> <span class="nx">opacity</span> <span class="o">*</span> <span class="nx">parentStack</span><span class="p">.</span><span class="nx">opacity</span><span class="p">,</span>
        <span class="na">cssPosition</span><span class="p">:</span> <span class="nx">cssPosition</span><span class="p">,</span>
      <span class="p">&#125;;</span>

      <span class="c1">// TODO correct overflow for absolute content residing under a static position</span>

      <span class="k">if </span><span class="p">(</span><span class="nx">parentStack</span><span class="p">.</span><span class="nx">clip</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">stack</span><span class="p">.</span><span class="nx">clip</span> <span class="o">=</span> <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Util</span><span class="p">.</span><span class="nc">Extend</span><span class="p">(&#123;&#125;,</span> <span class="nx">parentStack</span><span class="p">.</span><span class="nx">clip</span><span class="p">);</span>
        <span class="c1">//stack.clip = parentStack.clip;</span>
        <span class="c1">//   stack.clip.height = stack.clip.height - parentStack.borders[2].width;</span>
      <span class="p">&#125;</span>

      <span class="k">if </span><span class="p">(</span>
        <span class="nx">options</span><span class="p">.</span><span class="nx">useOverflow</span> <span class="o">===</span> <span class="kc">true</span> <span class="o">&amp;&amp;</span>
        <span class="sr">/</span><span class="se">(</span><span class="sr">hidden|scroll|auto</span><span class="se">)</span><span class="sr">/</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nf">getCSS</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">overflow</span><span class="dl">"</span><span class="p">))</span> <span class="o">===</span> <span class="kc">true</span> <span class="o">&amp;&amp;</span>
        <span class="sr">/</span><span class="se">(</span><span class="sr">BODY</span><span class="se">)</span><span class="sr">/i</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">el</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">)</span> <span class="o">===</span> <span class="kc">false</span>
      <span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">stack</span><span class="p">.</span><span class="nx">clip</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">stack</span><span class="p">.</span><span class="nx">clip</span> <span class="o">=</span> <span class="nf">clipBounds</span><span class="p">(</span><span class="nx">stack</span><span class="p">.</span><span class="nx">clip</span><span class="p">,</span> <span class="nx">bounds</span><span class="p">);</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
          <span class="nx">stack</span><span class="p">.</span><span class="nx">clip</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">;</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span>

      <span class="nx">stackLength</span> <span class="o">=</span> <span class="nx">zindex</span><span class="p">.</span><span class="nx">children</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">stack</span><span class="p">);</span>

      <span class="nx">ctx</span> <span class="o">=</span> <span class="nx">zindex</span><span class="p">.</span><span class="nx">children</span><span class="p">[</span><span class="nx">stackLength</span> <span class="o">-</span> <span class="mi">1</span><span class="p">].</span><span class="nx">ctx</span><span class="p">;</span>

      <span class="nx">ctx</span><span class="p">.</span><span class="nf">setVariable</span><span class="p">(</span><span class="dl">"</span><span class="s2">globalAlpha</span><span class="dl">"</span><span class="p">,</span> <span class="nx">stack</span><span class="p">.</span><span class="nx">opacity</span><span class="p">);</span>

      <span class="c1">// draw element borders</span>
      <span class="nx">borders</span> <span class="o">=</span> <span class="nf">renderBorders</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">ctx</span><span class="p">,</span> <span class="nx">bounds</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span>
      <span class="nx">stack</span><span class="p">.</span><span class="nx">borders</span> <span class="o">=</span> <span class="nx">borders</span><span class="p">;</span>

      <span class="c1">// let's modify clip area for child elements, so borders dont get overwritten</span>

      <span class="cm">/*
    if (stack.clip)&#123;
        stack.clip.width = stack.clip.width-(borders[1].width);
        stack.clip.height = stack.clip.height-(borders[2].width);
    &#125;
     */</span>
      <span class="k">if </span><span class="p">(</span>
        <span class="nx">ignoreElementsRegExp</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">el</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">)</span> <span class="o">&amp;&amp;</span>
        <span class="nx">options</span><span class="p">.</span><span class="nx">iframeDefault</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">transparent</span><span class="dl">"</span>
      <span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">iframeDefault</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">default</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">bgcolor</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">#efefef</span><span class="dl">"</span><span class="p">;</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
          <span class="nx">bgcolor</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">iframeDefault</span><span class="p">;</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span>

      <span class="c1">// draw base element bgcolor</span>

      <span class="nx">bgbounds</span> <span class="o">=</span> <span class="p">&#123;</span>
        <span class="na">left</span><span class="p">:</span> <span class="nx">x</span> <span class="o">+</span> <span class="nx">borders</span><span class="p">[</span><span class="mi">3</span><span class="p">].</span><span class="nx">width</span><span class="p">,</span>
        <span class="na">top</span><span class="p">:</span> <span class="nx">y</span> <span class="o">+</span> <span class="nx">borders</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">width</span><span class="p">,</span>
        <span class="na">width</span><span class="p">:</span> <span class="nx">w</span> <span class="o">-</span> <span class="p">(</span><span class="nx">borders</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">width</span> <span class="o">+</span> <span class="nx">borders</span><span class="p">[</span><span class="mi">3</span><span class="p">].</span><span class="nx">width</span><span class="p">),</span>
        <span class="na">height</span><span class="p">:</span> <span class="nx">h</span> <span class="o">-</span> <span class="p">(</span><span class="nx">borders</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">width</span> <span class="o">+</span> <span class="nx">borders</span><span class="p">[</span><span class="mi">2</span><span class="p">].</span><span class="nx">width</span><span class="p">),</span>
      <span class="p">&#125;;</span>

      <span class="c1">//if (this.withinBounds(stack.clip,bgbounds))&#123;</span>

      <span class="k">if </span><span class="p">(</span><span class="nx">stack</span><span class="p">.</span><span class="nx">clip</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">bgbounds</span> <span class="o">=</span> <span class="nf">clipBounds</span><span class="p">(</span><span class="nx">bgbounds</span><span class="p">,</span> <span class="nx">stack</span><span class="p">.</span><span class="nx">clip</span><span class="p">);</span>

        <span class="c1">//&#125;</span>
      <span class="p">&#125;</span>

      <span class="k">if </span><span class="p">(</span><span class="nx">bgbounds</span><span class="p">.</span><span class="nx">height</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">bgbounds</span><span class="p">.</span><span class="nx">width</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nf">renderRect</span><span class="p">(</span>
          <span class="nx">ctx</span><span class="p">,</span>
          <span class="nx">bgbounds</span><span class="p">.</span><span class="nx">left</span><span class="p">,</span>
          <span class="nx">bgbounds</span><span class="p">.</span><span class="nx">top</span><span class="p">,</span>
          <span class="nx">bgbounds</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span>
          <span class="nx">bgbounds</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span>
          <span class="nx">bgcolor</span><span class="p">,</span>
        <span class="p">);</span>

        <span class="nf">renderBackground</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">bgbounds</span><span class="p">,</span> <span class="nx">ctx</span><span class="p">);</span>
      <span class="p">&#125;</span>

      <span class="k">switch </span><span class="p">(</span><span class="nx">el</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">case</span> <span class="dl">"</span><span class="s2">IMG</span><span class="dl">"</span><span class="p">:</span>
          <span class="nx">imgSrc</span> <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nf">getAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">src</span><span class="dl">"</span><span class="p">);</span>
          <span class="nx">image</span> <span class="o">=</span> <span class="nf">loadImage</span><span class="p">(</span><span class="nx">imgSrc</span><span class="p">);</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">image</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">paddingLeft</span> <span class="o">=</span> <span class="nf">getCSSInt</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">paddingLeft</span><span class="dl">"</span><span class="p">);</span>
            <span class="nx">paddingTop</span> <span class="o">=</span> <span class="nf">getCSSInt</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">paddingTop</span><span class="dl">"</span><span class="p">);</span>
            <span class="nx">paddingRight</span> <span class="o">=</span> <span class="nf">getCSSInt</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">paddingRight</span><span class="dl">"</span><span class="p">);</span>
            <span class="nx">paddingBottom</span> <span class="o">=</span> <span class="nf">getCSSInt</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">paddingBottom</span><span class="dl">"</span><span class="p">);</span>

            <span class="nf">renderImage</span><span class="p">(</span>
              <span class="nx">ctx</span><span class="p">,</span>
              <span class="nx">image</span><span class="p">,</span>
              <span class="mi">0</span><span class="p">,</span> <span class="c1">//sx</span>
              <span class="mi">0</span><span class="p">,</span> <span class="c1">//sy</span>
              <span class="nx">image</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span> <span class="c1">//sw</span>
              <span class="nx">image</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span> <span class="c1">//sh</span>
              <span class="nx">x</span> <span class="o">+</span> <span class="nx">paddingLeft</span> <span class="o">+</span> <span class="nx">borders</span><span class="p">[</span><span class="mi">3</span><span class="p">].</span><span class="nx">width</span><span class="p">,</span> <span class="c1">//dx</span>
              <span class="nx">y</span> <span class="o">+</span> <span class="nx">paddingTop</span> <span class="o">+</span> <span class="nx">borders</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">width</span><span class="p">,</span> <span class="c1">// dy</span>
              <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span> <span class="o">-</span>
                <span class="p">(</span><span class="nx">borders</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">width</span> <span class="o">+</span>
                  <span class="nx">borders</span><span class="p">[</span><span class="mi">3</span><span class="p">].</span><span class="nx">width</span> <span class="o">+</span>
                  <span class="nx">paddingLeft</span> <span class="o">+</span>
                  <span class="nx">paddingRight</span><span class="p">),</span> <span class="c1">//dw</span>
              <span class="nx">bounds</span><span class="p">.</span><span class="nx">height</span> <span class="o">-</span>
                <span class="p">(</span><span class="nx">borders</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">width</span> <span class="o">+</span>
                  <span class="nx">borders</span><span class="p">[</span><span class="mi">2</span><span class="p">].</span><span class="nx">width</span> <span class="o">+</span>
                  <span class="nx">paddingTop</span> <span class="o">+</span>
                  <span class="nx">paddingBottom</span><span class="p">),</span> <span class="c1">//dh</span>
            <span class="p">);</span>
          <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
            <span class="nf">h2clog</span><span class="p">(</span><span class="dl">"</span><span class="s2">html2canvas: Error loading &lt;img&gt;:</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">imgSrc</span><span class="p">);</span>
          <span class="p">&#125;</span>
          <span class="k">break</span><span class="p">;</span>
        <span class="k">case</span> <span class="dl">"</span><span class="s2">INPUT</span><span class="dl">"</span><span class="p">:</span>
          <span class="c1">// TODO add all relevant type's, i.e. HTML5 new stuff</span>
          <span class="c1">// todo add support for placeholder attribute for browsers which support it</span>
          <span class="k">if </span><span class="p">(</span>
            <span class="sr">/^</span><span class="se">(</span><span class="sr">text|url|email|submit|button|reset</span><span class="se">)</span><span class="sr">$/</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">el</span><span class="p">.</span><span class="nx">type</span><span class="p">)</span> <span class="o">&amp;&amp;</span>
            <span class="nx">el</span><span class="p">.</span><span class="nx">value</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span>
          <span class="p">)</span> <span class="p">&#123;</span>
            <span class="nf">renderFormValue</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">bounds</span><span class="p">,</span> <span class="nx">stack</span><span class="p">);</span>

            <span class="cm">/*
                 this just doesn't work well enough

                this.newText(el,&#123;
                    nodeValue:el.value,
                    splitText: function()&#123;
                        return this;
                    &#125;,
                    formValue:true
                &#125;,stack);
                 */</span>
          <span class="p">&#125;</span>
          <span class="k">break</span><span class="p">;</span>
        <span class="k">case</span> <span class="dl">"</span><span class="s2">TEXTAREA</span><span class="dl">"</span><span class="p">:</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">el</span><span class="p">.</span><span class="nx">value</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nf">renderFormValue</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">bounds</span><span class="p">,</span> <span class="nx">stack</span><span class="p">);</span>
          <span class="p">&#125;</span>
          <span class="k">break</span><span class="p">;</span>
        <span class="k">case</span> <span class="dl">"</span><span class="s2">SELECT</span><span class="dl">"</span><span class="p">:</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">el</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nf">renderFormValue</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">bounds</span><span class="p">,</span> <span class="nx">stack</span><span class="p">);</span>
          <span class="p">&#125;</span>
          <span class="k">break</span><span class="p">;</span>
        <span class="k">case</span> <span class="dl">"</span><span class="s2">LI</span><span class="dl">"</span><span class="p">:</span>
          <span class="nf">renderListItem</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">stack</span><span class="p">,</span> <span class="nx">bgbounds</span><span class="p">);</span>
          <span class="k">break</span><span class="p">;</span>
        <span class="k">case</span> <span class="dl">"</span><span class="s2">CANVAS</span><span class="dl">"</span><span class="p">:</span>
          <span class="nx">paddingLeft</span> <span class="o">=</span> <span class="nf">getCSSInt</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">paddingLeft</span><span class="dl">"</span><span class="p">);</span>
          <span class="nx">paddingTop</span> <span class="o">=</span> <span class="nf">getCSSInt</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">paddingTop</span><span class="dl">"</span><span class="p">);</span>
          <span class="nx">paddingRight</span> <span class="o">=</span> <span class="nf">getCSSInt</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">paddingRight</span><span class="dl">"</span><span class="p">);</span>
          <span class="nx">paddingBottom</span> <span class="o">=</span> <span class="nf">getCSSInt</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">paddingBottom</span><span class="dl">"</span><span class="p">);</span>
          <span class="nf">renderImage</span><span class="p">(</span>
            <span class="nx">ctx</span><span class="p">,</span>
            <span class="nx">el</span><span class="p">,</span>
            <span class="mi">0</span><span class="p">,</span> <span class="c1">//sx</span>
            <span class="mi">0</span><span class="p">,</span> <span class="c1">//sy</span>
            <span class="nx">el</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span> <span class="c1">//sw</span>
            <span class="nx">el</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span> <span class="c1">//sh</span>
            <span class="nx">x</span> <span class="o">+</span> <span class="nx">paddingLeft</span> <span class="o">+</span> <span class="nx">borders</span><span class="p">[</span><span class="mi">3</span><span class="p">].</span><span class="nx">width</span><span class="p">,</span> <span class="c1">//dx</span>
            <span class="nx">y</span> <span class="o">+</span> <span class="nx">paddingTop</span> <span class="o">+</span> <span class="nx">borders</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">width</span><span class="p">,</span> <span class="c1">// dy</span>
            <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span> <span class="o">-</span>
              <span class="p">(</span><span class="nx">borders</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">width</span> <span class="o">+</span>
                <span class="nx">borders</span><span class="p">[</span><span class="mi">3</span><span class="p">].</span><span class="nx">width</span> <span class="o">+</span>
                <span class="nx">paddingLeft</span> <span class="o">+</span>
                <span class="nx">paddingRight</span><span class="p">),</span> <span class="c1">//dw</span>
            <span class="nx">bounds</span><span class="p">.</span><span class="nx">height</span> <span class="o">-</span>
              <span class="p">(</span><span class="nx">borders</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">width</span> <span class="o">+</span>
                <span class="nx">borders</span><span class="p">[</span><span class="mi">2</span><span class="p">].</span><span class="nx">width</span> <span class="o">+</span>
                <span class="nx">paddingTop</span> <span class="o">+</span>
                <span class="nx">paddingBottom</span><span class="p">),</span> <span class="c1">//dh</span>
          <span class="p">);</span>
          <span class="k">break</span><span class="p">;</span>
      <span class="p">&#125;</span>

      <span class="k">return</span> <span class="nx">zindex</span><span class="p">.</span><span class="nx">children</span><span class="p">[</span><span class="nx">stackLength</span> <span class="o">-</span> <span class="mi">1</span><span class="p">];</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">parseElement</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">stack</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="c1">// skip hidden elements and their children</span>
      <span class="k">if </span><span class="p">(</span>
        <span class="nf">getCSS</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">display</span><span class="dl">"</span><span class="p">)</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">none</span><span class="dl">"</span> <span class="o">&amp;&amp;</span>
        <span class="nf">getCSS</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">visibility</span><span class="dl">"</span><span class="p">)</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">hidden</span><span class="dl">"</span>
      <span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">stack</span> <span class="o">=</span> <span class="nf">renderElement</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">stack</span><span class="p">)</span> <span class="o">||</span> <span class="nx">stack</span><span class="p">;</span>

        <span class="nx">ctx</span> <span class="o">=</span> <span class="nx">stack</span><span class="p">.</span><span class="nx">ctx</span><span class="p">;</span>

        <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">ignoreElementsRegExp</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">el</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">))</span> <span class="p">&#123;</span>
          <span class="kd">var</span> <span class="nx">elementChildren</span> <span class="o">=</span> <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Util</span><span class="p">.</span><span class="nc">Children</span><span class="p">(</span><span class="nx">el</span><span class="p">),</span>
            <span class="nx">i</span><span class="p">,</span>
            <span class="nx">node</span><span class="p">,</span>
            <span class="nx">childrenLen</span><span class="p">;</span>
          <span class="k">for </span><span class="p">(</span>
            <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">childrenLen</span> <span class="o">=</span> <span class="nx">elementChildren</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>
            <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">childrenLen</span><span class="p">;</span>
            <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span>
          <span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">node</span> <span class="o">=</span> <span class="nx">elementChildren</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span>

            <span class="k">if </span><span class="p">(</span><span class="nx">node</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nf">parseElement</span><span class="p">(</span><span class="nx">node</span><span class="p">,</span> <span class="nx">stack</span><span class="p">);</span>
            <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">node</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">3</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nf">renderText</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">node</span><span class="p">,</span> <span class="nx">stack</span><span class="p">);</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;</span>

    <span class="nx">stack</span> <span class="o">=</span> <span class="nf">renderElement</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="kc">null</span><span class="p">);</span>

    <span class="cm">/*
    SVG powered HTML rendering, non-tainted canvas available from FF 11+ onwards
    */</span>

    <span class="k">if </span><span class="p">(</span><span class="nx">support</span><span class="p">.</span><span class="nx">svgRendering</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">body</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="kd">var</span> <span class="nx">img</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">Image</span><span class="p">(),</span>
          <span class="nx">size</span> <span class="o">=</span> <span class="nf">docSize</span><span class="p">(),</span>
          <span class="nx">html</span> <span class="o">=</span> <span class="dl">""</span><span class="p">;</span>

        <span class="kd">function</span> <span class="nf">parseDOM</span><span class="p">(</span><span class="nx">el</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="kd">var</span> <span class="nx">children</span> <span class="o">=</span> <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Util</span><span class="p">.</span><span class="nc">Children</span><span class="p">(</span><span class="nx">el</span><span class="p">),</span>
            <span class="nx">len</span> <span class="o">=</span> <span class="nx">children</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span>
            <span class="nx">attr</span><span class="p">,</span>
            <span class="nx">a</span><span class="p">,</span>
            <span class="nx">alen</span><span class="p">,</span>
            <span class="nx">elm</span><span class="p">,</span>
            <span class="nx">i</span><span class="p">;</span>
          <span class="k">for </span><span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">elm</span> <span class="o">=</span> <span class="nx">children</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">elm</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">3</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="c1">// Text node</span>

              <span class="nx">html</span> <span class="o">+=</span> <span class="nx">elm</span><span class="p">.</span><span class="nx">nodeValue</span>
                <span class="p">.</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/</span><span class="se">\&lt;</span><span class="sr">/g</span><span class="p">,</span> <span class="dl">"</span><span class="s2">&amp;lt;</span><span class="dl">"</span><span class="p">)</span>
                <span class="p">.</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/</span><span class="se">\&gt;</span><span class="sr">/g</span><span class="p">,</span> <span class="dl">"</span><span class="s2">&amp;gt;</span><span class="dl">"</span><span class="p">);</span>
            <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">elm</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="c1">// Element</span>
              <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="sr">/^</span><span class="se">(</span><span class="sr">script|meta|title</span><span class="se">)</span><span class="sr">$/</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">elm</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">.</span><span class="nf">toLowerCase</span><span class="p">()))</span> <span class="p">&#123;</span>
                <span class="nx">html</span> <span class="o">+=</span> <span class="dl">"</span><span class="s2">&lt;</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">elm</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">.</span><span class="nf">toLowerCase</span><span class="p">();</span>

                <span class="c1">// add attributes</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">elm</span><span class="p">.</span><span class="nf">hasAttributes</span><span class="p">())</span> <span class="p">&#123;</span>
                  <span class="nx">attr</span> <span class="o">=</span> <span class="nx">elm</span><span class="p">.</span><span class="nx">attributes</span><span class="p">;</span>
                  <span class="nx">alen</span> <span class="o">=</span> <span class="nx">attr</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>
                  <span class="k">for </span><span class="p">(</span><span class="nx">a</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">a</span> <span class="o">&lt;</span> <span class="nx">alen</span><span class="p">;</span> <span class="nx">a</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
                    <span class="nx">html</span> <span class="o">+=</span> <span class="dl">"</span><span class="s2"> </span><span class="dl">"</span> <span class="o">+</span> <span class="nx">attr</span><span class="p">[</span><span class="nx">a</span><span class="p">].</span><span class="nx">name</span> <span class="o">+</span> <span class="dl">'</span><span class="s1">="</span><span class="dl">'</span> <span class="o">+</span> <span class="nx">attr</span><span class="p">[</span><span class="nx">a</span><span class="p">].</span><span class="nx">value</span> <span class="o">+</span> <span class="dl">'</span><span class="s1">"</span><span class="dl">'</span><span class="p">;</span>
                  <span class="p">&#125;</span>
                <span class="p">&#125;</span>

                <span class="nx">html</span> <span class="o">+=</span> <span class="dl">"</span><span class="s2">&gt;</span><span class="dl">"</span><span class="p">;</span>

                <span class="nf">parseDOM</span><span class="p">(</span><span class="nx">elm</span><span class="p">);</span>

                <span class="nx">html</span> <span class="o">+=</span> <span class="dl">"</span><span class="s2">&lt;/</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">elm</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">.</span><span class="nf">toLowerCase</span><span class="p">()</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">&gt;</span><span class="dl">"</span><span class="p">;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;</span>

        <span class="nf">parseDOM</span><span class="p">(</span><span class="nx">body</span><span class="p">);</span>
        <span class="nx">img</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="p">[</span>
          <span class="dl">"</span><span class="s2">data:image/svg+xml,</span><span class="dl">"</span><span class="p">,</span>
          <span class="dl">"</span><span class="s2">&lt;svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='</span><span class="dl">"</span> <span class="o">+</span>
            <span class="nx">size</span><span class="p">.</span><span class="nx">width</span> <span class="o">+</span>
            <span class="dl">"</span><span class="s2">' height='</span><span class="dl">"</span> <span class="o">+</span>
            <span class="nx">size</span><span class="p">.</span><span class="nx">height</span> <span class="o">+</span>
            <span class="dl">"</span><span class="s2">'&gt;</span><span class="dl">"</span><span class="p">,</span>
          <span class="dl">"</span><span class="s2">&lt;foreignObject width='</span><span class="dl">"</span> <span class="o">+</span>
            <span class="nx">size</span><span class="p">.</span><span class="nx">width</span> <span class="o">+</span>
            <span class="dl">"</span><span class="s2">' height='</span><span class="dl">"</span> <span class="o">+</span>
            <span class="nx">size</span><span class="p">.</span><span class="nx">height</span> <span class="o">+</span>
            <span class="dl">"</span><span class="s2">'&gt;</span><span class="dl">"</span><span class="p">,</span>
          <span class="dl">"</span><span class="s2">&lt;html xmlns='http://www.w3.org/1999/xhtml' style='margin:0;'&gt;</span><span class="dl">"</span><span class="p">,</span>
          <span class="nx">html</span><span class="p">.</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/</span><span class="se">\#</span><span class="sr">/g</span><span class="p">,</span> <span class="dl">"</span><span class="s2">%23</span><span class="dl">"</span><span class="p">),</span>
          <span class="dl">"</span><span class="s2">&lt;/html&gt;</span><span class="dl">"</span><span class="p">,</span>
          <span class="dl">"</span><span class="s2">&lt;/foreignObject&gt;</span><span class="dl">"</span><span class="p">,</span>
          <span class="dl">"</span><span class="s2">&lt;/svg&gt;</span><span class="dl">"</span><span class="p">,</span>
        <span class="p">].</span><span class="nf">join</span><span class="p">(</span><span class="dl">""</span><span class="p">);</span>

        <span class="nx">img</span><span class="p">.</span><span class="nx">onload</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
          <span class="nx">stack</span><span class="p">.</span><span class="nx">svgRender</span> <span class="o">=</span> <span class="nx">img</span><span class="p">;</span>
        <span class="p">&#125;;</span>
      <span class="p">&#125;)(</span><span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">);</span>
    <span class="p">&#125;</span>

    <span class="c1">// parse every child element</span>
    <span class="k">for </span><span class="p">(</span>
      <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">children</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">children</span><span class="p">,</span> <span class="nx">childrenLen</span> <span class="o">=</span> <span class="nx">children</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>
      <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">childrenLen</span><span class="p">;</span>
      <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span>
    <span class="p">)</span> <span class="p">&#123;</span>
      <span class="nf">parseElement</span><span class="p">(</span><span class="nx">children</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="nx">stack</span><span class="p">);</span>
    <span class="p">&#125;</span>

    <span class="nx">stack</span><span class="p">.</span><span class="nx">backgroundColor</span> <span class="o">=</span> <span class="nf">getCSS</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">,</span> <span class="dl">"</span><span class="s2">backgroundColor</span><span class="dl">"</span><span class="p">);</span>

    <span class="k">return</span> <span class="nx">stack</span><span class="p">;</span>
  <span class="p">&#125;;</span>

  <span class="kd">function</span> <span class="nf">h2czContext</span><span class="p">(</span><span class="nx">zindex</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="k">return</span> <span class="p">&#123;</span>
      <span class="na">zindex</span><span class="p">:</span> <span class="nx">zindex</span><span class="p">,</span>
      <span class="na">children</span><span class="p">:</span> <span class="p">[],</span>
    <span class="p">&#125;;</span>
  <span class="p">&#125;</span>

  <span class="cm">/*
  html2canvas v0.34 &lt;http://html2canvas.hertzen.com&gt;
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
 */</span>

  <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Preload</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">images</span> <span class="o">=</span> <span class="p">&#123;</span>
        <span class="na">numLoaded</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span> <span class="c1">// also failed are counted here</span>
        <span class="na">numFailed</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
        <span class="na">numTotal</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
        <span class="na">cleanupDone</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
      <span class="p">&#125;,</span>
      <span class="nx">pageOrigin</span><span class="p">,</span>
      <span class="nx">methods</span><span class="p">,</span>
      <span class="nx">i</span><span class="p">,</span>
      <span class="nx">count</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span>
      <span class="nx">element</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">||</span> <span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">,</span>
      <span class="nx">doc</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">ownerDocument</span><span class="p">,</span>
      <span class="nx">domImages</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">images</span><span class="p">,</span> <span class="c1">// TODO probably should limit it to images present in the element only</span>
      <span class="nx">imgLen</span> <span class="o">=</span> <span class="nx">domImages</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span>
      <span class="nx">link</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">a</span><span class="dl">"</span><span class="p">),</span>
      <span class="nx">supportCORS</span> <span class="o">=</span> <span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">img</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">return</span> <span class="nx">img</span><span class="p">.</span><span class="nx">crossOrigin</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">;</span>
      <span class="p">&#125;)(</span><span class="k">new</span> <span class="nc">Image</span><span class="p">()),</span>
      <span class="nx">timeoutTimer</span><span class="p">;</span>

    <span class="nx">link</span><span class="p">.</span><span class="nx">href</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">href</span><span class="p">;</span>
    <span class="nx">pageOrigin</span> <span class="o">=</span> <span class="nx">link</span><span class="p">.</span><span class="nx">protocol</span> <span class="o">+</span> <span class="nx">link</span><span class="p">.</span><span class="nx">host</span><span class="p">;</span>

    <span class="kd">function</span> <span class="nf">isSameOrigin</span><span class="p">(</span><span class="nx">url</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">link</span><span class="p">.</span><span class="nx">href</span> <span class="o">=</span> <span class="nx">url</span><span class="p">;</span>
      <span class="nx">link</span><span class="p">.</span><span class="nx">href</span> <span class="o">=</span> <span class="nx">link</span><span class="p">.</span><span class="nx">href</span><span class="p">;</span> <span class="c1">// YES, BELIEVE IT OR NOT, that is required for IE9 - http://jsfiddle.net/niklasvh/2e48b/</span>
      <span class="kd">var</span> <span class="nx">origin</span> <span class="o">=</span> <span class="nx">link</span><span class="p">.</span><span class="nx">protocol</span> <span class="o">+</span> <span class="nx">link</span><span class="p">.</span><span class="nx">host</span><span class="p">;</span>
      <span class="k">return</span> <span class="nx">origin</span> <span class="o">===</span> <span class="nx">pageOrigin</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">start</span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="nf">h2clog</span><span class="p">(</span>
        <span class="dl">"</span><span class="s2">html2canvas: start: images: </span><span class="dl">"</span> <span class="o">+</span>
          <span class="nx">images</span><span class="p">.</span><span class="nx">numLoaded</span> <span class="o">+</span>
          <span class="dl">"</span><span class="s2"> / </span><span class="dl">"</span> <span class="o">+</span>
          <span class="nx">images</span><span class="p">.</span><span class="nx">numTotal</span> <span class="o">+</span>
          <span class="dl">"</span><span class="s2"> (failed: </span><span class="dl">"</span> <span class="o">+</span>
          <span class="nx">images</span><span class="p">.</span><span class="nx">numFailed</span> <span class="o">+</span>
          <span class="dl">"</span><span class="s2">)</span><span class="dl">"</span><span class="p">,</span>
      <span class="p">);</span>
      <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">images</span><span class="p">.</span><span class="nx">firstRun</span> <span class="o">&amp;&amp;</span> <span class="nx">images</span><span class="p">.</span><span class="nx">numLoaded</span> <span class="o">&gt;=</span> <span class="nx">images</span><span class="p">.</span><span class="nx">numTotal</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nf">h2clog</span><span class="p">(</span>
          <span class="dl">"</span><span class="s2">Finished loading images: # </span><span class="dl">"</span> <span class="o">+</span>
            <span class="nx">images</span><span class="p">.</span><span class="nx">numTotal</span> <span class="o">+</span>
            <span class="dl">"</span><span class="s2"> (failed: </span><span class="dl">"</span> <span class="o">+</span>
            <span class="nx">images</span><span class="p">.</span><span class="nx">numFailed</span> <span class="o">+</span>
            <span class="dl">"</span><span class="s2">)</span><span class="dl">"</span><span class="p">,</span>
        <span class="p">);</span>

        <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">options</span><span class="p">.</span><span class="nx">complete</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">function</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">options</span><span class="p">.</span><span class="nf">complete</span><span class="p">(</span><span class="nx">images</span><span class="p">);</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;</span>

    <span class="c1">// TODO modify proxy to serve images with CORS enabled, where available</span>
    <span class="kd">function</span> <span class="nf">proxyGetImage</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">img</span><span class="p">,</span> <span class="nx">imageObj</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">callback_name</span><span class="p">,</span>
        <span class="nx">scriptUrl</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">proxy</span><span class="p">,</span>
        <span class="nx">script</span><span class="p">;</span>

      <span class="nx">link</span><span class="p">.</span><span class="nx">href</span> <span class="o">=</span> <span class="nx">url</span><span class="p">;</span>
      <span class="nx">url</span> <span class="o">=</span> <span class="nx">link</span><span class="p">.</span><span class="nx">href</span><span class="p">;</span> <span class="c1">// work around for pages with base href="" set - WARNING: this may change the url</span>

      <span class="nx">callback_name</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">html2canvas_</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">count</span><span class="o">++</span><span class="p">;</span>
      <span class="nx">imageObj</span><span class="p">.</span><span class="nx">callbackname</span> <span class="o">=</span> <span class="nx">callback_name</span><span class="p">;</span>

      <span class="k">if </span><span class="p">(</span><span class="nx">scriptUrl</span><span class="p">.</span><span class="nf">indexOf</span><span class="p">(</span><span class="dl">"</span><span class="s2">?</span><span class="dl">"</span><span class="p">)</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">scriptUrl</span> <span class="o">+=</span> <span class="dl">"</span><span class="s2">&amp;</span><span class="dl">"</span><span class="p">;</span>
      <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
        <span class="nx">scriptUrl</span> <span class="o">+=</span> <span class="dl">"</span><span class="s2">?</span><span class="dl">"</span><span class="p">;</span>
      <span class="p">&#125;</span>
      <span class="nx">scriptUrl</span> <span class="o">+=</span>
        <span class="dl">"</span><span class="s2">url=</span><span class="dl">"</span> <span class="o">+</span> <span class="nf">encodeURIComponent</span><span class="p">(</span><span class="nx">url</span><span class="p">)</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">&amp;callback=</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">callback_name</span><span class="p">;</span>
      <span class="nx">script</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">script</span><span class="dl">"</span><span class="p">);</span>

      <span class="nb">window</span><span class="p">[</span><span class="nx">callback_name</span><span class="p">]</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">a</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nf">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">6</span><span class="p">)</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">error:</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">imageObj</span><span class="p">.</span><span class="nx">succeeded</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
          <span class="nx">images</span><span class="p">.</span><span class="nx">numLoaded</span><span class="o">++</span><span class="p">;</span>
          <span class="nx">images</span><span class="p">.</span><span class="nx">numFailed</span><span class="o">++</span><span class="p">;</span>
          <span class="nf">start</span><span class="p">();</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
          <span class="nf">setImageLoadHandlers</span><span class="p">(</span><span class="nx">img</span><span class="p">,</span> <span class="nx">imageObj</span><span class="p">);</span>
          <span class="nx">img</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="nx">a</span><span class="p">;</span>
        <span class="p">&#125;</span>
        <span class="nb">window</span><span class="p">[</span><span class="nx">callback_name</span><span class="p">]</span> <span class="o">=</span> <span class="kc">undefined</span><span class="p">;</span> <span class="c1">// to work with IE&lt;9  // NOTE: that the undefined callback property-name still exists on the window object (for IE&lt;9)</span>
        <span class="k">try</span> <span class="p">&#123;</span>
          <span class="k">delete</span> <span class="nb">window</span><span class="p">[</span><span class="nx">callback_name</span><span class="p">];</span> <span class="c1">// for all browser that support this</span>
        <span class="p">&#125;</span> <span class="k">catch </span><span class="p">(</span><span class="nx">ex</span><span class="p">)</span> <span class="p">&#123;&#125;</span>
        <span class="nx">script</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nf">removeChild</span><span class="p">(</span><span class="nx">script</span><span class="p">);</span>
        <span class="nx">script</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
        <span class="k">delete</span> <span class="nx">imageObj</span><span class="p">.</span><span class="nx">script</span><span class="p">;</span>
        <span class="k">delete</span> <span class="nx">imageObj</span><span class="p">.</span><span class="nx">callbackname</span><span class="p">;</span>
      <span class="p">&#125;;</span>

      <span class="nx">script</span><span class="p">.</span><span class="nf">setAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">type</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">text/javascript</span><span class="dl">"</span><span class="p">);</span>
      <span class="nx">script</span><span class="p">.</span><span class="nf">setAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">src</span><span class="dl">"</span><span class="p">,</span> <span class="nx">scriptUrl</span><span class="p">);</span>
      <span class="nx">imageObj</span><span class="p">.</span><span class="nx">script</span> <span class="o">=</span> <span class="nx">script</span><span class="p">;</span>
      <span class="nb">window</span><span class="p">.</span><span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">script</span><span class="p">);</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">getImages</span><span class="p">(</span><span class="nx">el</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="c1">// if (!this.ignoreRe.test(el.nodeName))&#123;</span>
      <span class="c1">//</span>

      <span class="kd">var</span> <span class="nx">contents</span> <span class="o">=</span> <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Util</span><span class="p">.</span><span class="nc">Children</span><span class="p">(</span><span class="nx">el</span><span class="p">),</span>
        <span class="nx">i</span><span class="p">,</span>
        <span class="nx">background_image</span><span class="p">,</span>
        <span class="nx">src</span><span class="p">,</span>
        <span class="nx">img</span><span class="p">,</span>
        <span class="nx">elNodeType</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>

      <span class="c1">// Firefox fails with permission denied on pages with iframes</span>
      <span class="k">try</span> <span class="p">&#123;</span>
        <span class="kd">var</span> <span class="nx">contentsLen</span> <span class="o">=</span> <span class="nx">contents</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>
        <span class="k">for </span><span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">contentsLen</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="c1">// var ignRe = new RegExp("("+this.ignoreElements+")");</span>
          <span class="c1">// if (!ignRe.test(element.nodeName))&#123;</span>
          <span class="nf">getImages</span><span class="p">(</span><span class="nx">contents</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span>
          <span class="c1">// &#125;</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span> <span class="k">catch </span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;&#125;</span>

      <span class="c1">// &#125;</span>
      <span class="k">try</span> <span class="p">&#123;</span>
        <span class="nx">elNodeType</span> <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nx">nodeType</span><span class="p">;</span>
      <span class="p">&#125;</span> <span class="k">catch </span><span class="p">(</span><span class="nx">ex</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">elNodeType</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
        <span class="nf">h2clog</span><span class="p">(</span>
          <span class="dl">"</span><span class="s2">html2canvas: failed to access some element's nodeType - Exception: </span><span class="dl">"</span> <span class="o">+</span>
            <span class="nx">ex</span><span class="p">.</span><span class="nx">message</span><span class="p">,</span>
        <span class="p">);</span>
      <span class="p">&#125;</span>

      <span class="k">if </span><span class="p">(</span><span class="nx">elNodeType</span> <span class="o">===</span> <span class="mi">1</span> <span class="o">||</span> <span class="nx">elNodeType</span> <span class="o">===</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="c1">// opera throws exception on external-content.html</span>
        <span class="k">try</span> <span class="p">&#123;</span>
          <span class="nx">background_image</span> <span class="o">=</span> <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Util</span><span class="p">.</span><span class="nf">getCSS</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="dl">"</span><span class="s2">backgroundImage</span><span class="dl">"</span><span class="p">);</span>
        <span class="p">&#125;</span> <span class="k">catch </span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nf">h2clog</span><span class="p">(</span>
            <span class="dl">"</span><span class="s2">html2canvas: failed to get background-image - Exception: </span><span class="dl">"</span> <span class="o">+</span>
              <span class="nx">e</span><span class="p">.</span><span class="nx">message</span><span class="p">,</span>
          <span class="p">);</span>
        <span class="p">&#125;</span>
        <span class="k">if </span><span class="p">(</span>
          <span class="nx">background_image</span> <span class="o">&amp;&amp;</span>
          <span class="nx">background_image</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">1</span><span class="dl">"</span> <span class="o">&amp;&amp;</span>
          <span class="nx">background_image</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">none</span><span class="dl">"</span>
        <span class="p">)</span> <span class="p">&#123;</span>
          <span class="c1">// TODO add multi image background support</span>

          <span class="k">if </span><span class="p">(</span><span class="sr">/^</span><span class="se">(</span><span class="sr">-webkit|-o|-moz|-ms|linear</span><span class="se">)</span><span class="sr">-/</span><span class="p">.</span><span class="nf">test</span><span class="p">(</span><span class="nx">background_image</span><span class="p">))</span> <span class="p">&#123;</span>
            <span class="nx">img</span> <span class="o">=</span> <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Generate</span><span class="p">.</span><span class="nc">Gradient</span><span class="p">(</span>
              <span class="nx">background_image</span><span class="p">,</span>
              <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Util</span><span class="p">.</span><span class="nc">Bounds</span><span class="p">(</span><span class="nx">el</span><span class="p">),</span>
            <span class="p">);</span>

            <span class="k">if </span><span class="p">(</span><span class="nx">img</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">images</span><span class="p">[</span><span class="nx">background_image</span><span class="p">]</span> <span class="o">=</span> <span class="p">&#123;</span>
                <span class="na">img</span><span class="p">:</span> <span class="nx">img</span><span class="p">,</span>
                <span class="na">succeeded</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
              <span class="p">&#125;;</span>
              <span class="nx">images</span><span class="p">.</span><span class="nx">numTotal</span><span class="o">++</span><span class="p">;</span>
              <span class="nx">images</span><span class="p">.</span><span class="nx">numLoaded</span><span class="o">++</span><span class="p">;</span>
              <span class="nf">start</span><span class="p">();</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
            <span class="nx">src</span> <span class="o">=</span> <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Util</span><span class="p">.</span><span class="nf">backgroundImage</span><span class="p">(</span>
              <span class="nx">background_image</span><span class="p">.</span><span class="nf">match</span><span class="p">(</span><span class="sr">/data:image</span><span class="se">\/</span><span class="sr">.*;base64,/i</span><span class="p">)</span>
                <span class="p">?</span> <span class="nx">background_image</span>
                <span class="p">:</span> <span class="nx">background_image</span><span class="p">.</span><span class="nf">split</span><span class="p">(</span><span class="dl">"</span><span class="s2">,</span><span class="dl">"</span><span class="p">)[</span><span class="mi">0</span><span class="p">],</span>
            <span class="p">);</span>
            <span class="nx">methods</span><span class="p">.</span><span class="nf">loadImage</span><span class="p">(</span><span class="nx">src</span><span class="p">);</span>
          <span class="p">&#125;</span>

          <span class="cm">/*
            if (background_image &amp;&amp; background_image !== "1" &amp;&amp; background_image !== "none" &amp;&amp; background_image.substring(0,7) !== "-webkit" &amp;&amp; background_image.substring(0,3)!== "-o-" &amp;&amp; background_image.substring(0,4) !== "-moz")&#123;
                // TODO add multi image background support
                src = _html2canvas.Util.backgroundImage(background_image.split(",")[0]);
                methods.loadImage(src);            */</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;</span>

    <span class="kd">function</span> <span class="nf">setImageLoadHandlers</span><span class="p">(</span><span class="nx">img</span><span class="p">,</span> <span class="nx">imageObj</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">img</span><span class="p">.</span><span class="nx">onload</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">imageObj</span><span class="p">.</span><span class="nx">timer</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="c1">// CORS succeeded</span>
          <span class="nb">window</span><span class="p">.</span><span class="nf">clearTimeout</span><span class="p">(</span><span class="nx">imageObj</span><span class="p">.</span><span class="nx">timer</span><span class="p">);</span>
        <span class="p">&#125;</span>

        <span class="nx">images</span><span class="p">.</span><span class="nx">numLoaded</span><span class="o">++</span><span class="p">;</span>
        <span class="nx">imageObj</span><span class="p">.</span><span class="nx">succeeded</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
        <span class="nx">img</span><span class="p">.</span><span class="nx">onerror</span> <span class="o">=</span> <span class="nx">img</span><span class="p">.</span><span class="nx">onload</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
        <span class="nf">start</span><span class="p">();</span>
      <span class="p">&#125;;</span>
      <span class="nx">img</span><span class="p">.</span><span class="nx">onerror</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">img</span><span class="p">.</span><span class="nx">crossOrigin</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">anonymous</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="c1">// CORS failed</span>
          <span class="nb">window</span><span class="p">.</span><span class="nf">clearTimeout</span><span class="p">(</span><span class="nx">imageObj</span><span class="p">.</span><span class="nx">timer</span><span class="p">);</span>

          <span class="c1">// let's try with proxy instead</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">proxy</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="kd">var</span> <span class="nx">src</span> <span class="o">=</span> <span class="nx">img</span><span class="p">.</span><span class="nx">src</span><span class="p">;</span>
            <span class="nx">img</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">Image</span><span class="p">();</span>
            <span class="nx">imageObj</span><span class="p">.</span><span class="nx">img</span> <span class="o">=</span> <span class="nx">img</span><span class="p">;</span>
            <span class="nx">img</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">;</span>

            <span class="nf">proxyGetImage</span><span class="p">(</span><span class="nx">img</span><span class="p">.</span><span class="nx">src</span><span class="p">,</span> <span class="nx">img</span><span class="p">,</span> <span class="nx">imageObj</span><span class="p">);</span>
            <span class="k">return</span><span class="p">;</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;</span>

        <span class="nx">images</span><span class="p">.</span><span class="nx">numLoaded</span><span class="o">++</span><span class="p">;</span>
        <span class="nx">images</span><span class="p">.</span><span class="nx">numFailed</span><span class="o">++</span><span class="p">;</span>
        <span class="nx">imageObj</span><span class="p">.</span><span class="nx">succeeded</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
        <span class="nx">img</span><span class="p">.</span><span class="nx">onerror</span> <span class="o">=</span> <span class="nx">img</span><span class="p">.</span><span class="nx">onload</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
        <span class="nf">start</span><span class="p">();</span>
      <span class="p">&#125;;</span>

      <span class="c1">// TODO Opera has no load/error event for SVG images</span>

      <span class="c1">// Opera ninja onload's cached images</span>
      <span class="cm">/*
        window.setTimeout(function()&#123;
            if ( img.width !== 0 &amp;&amp; imageObj.succeeded === undefined ) &#123;
                img.onload();
            &#125;
        &#125;, 100); // needs a reflow for base64 encoded images? interestingly timeout of 0 doesn't work but 1 does.
         */</span>
    <span class="p">&#125;</span>

    <span class="nx">methods</span> <span class="o">=</span> <span class="p">&#123;</span>
      <span class="na">loadImage</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">src</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="kd">var</span> <span class="nx">img</span><span class="p">,</span> <span class="nx">imageObj</span><span class="p">;</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">src</span> <span class="o">&amp;&amp;</span> <span class="nx">images</span><span class="p">[</span><span class="nx">src</span><span class="p">]</span> <span class="o">===</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">img</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">Image</span><span class="p">();</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">src</span><span class="p">.</span><span class="nf">match</span><span class="p">(</span><span class="sr">/data:image</span><span class="se">\/</span><span class="sr">.*;base64,/i</span><span class="p">))</span> <span class="p">&#123;</span>
            <span class="nx">img</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nf">replace</span><span class="p">(</span><span class="sr">/url</span><span class="se">\([</span><span class="sr">'"</span><span class="se">]&#123;0,&#125;</span><span class="sr">|</span><span class="se">[</span><span class="sr">'"</span><span class="se">]&#123;0,&#125;\)</span><span class="sr">$/gi</span><span class="p">,</span> <span class="dl">""</span><span class="p">);</span>
            <span class="nx">imageObj</span> <span class="o">=</span> <span class="nx">images</span><span class="p">[</span><span class="nx">src</span><span class="p">]</span> <span class="o">=</span> <span class="p">&#123;</span>
              <span class="na">img</span><span class="p">:</span> <span class="nx">img</span><span class="p">,</span>
            <span class="p">&#125;;</span>
            <span class="nx">images</span><span class="p">.</span><span class="nx">numTotal</span><span class="o">++</span><span class="p">;</span>
            <span class="nf">setImageLoadHandlers</span><span class="p">(</span><span class="nx">img</span><span class="p">,</span> <span class="nx">imageObj</span><span class="p">);</span>
          <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nf">isSameOrigin</span><span class="p">(</span><span class="nx">src</span><span class="p">)</span> <span class="o">||</span> <span class="nx">options</span><span class="p">.</span><span class="nx">allowTaint</span> <span class="o">===</span> <span class="kc">true</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">imageObj</span> <span class="o">=</span> <span class="nx">images</span><span class="p">[</span><span class="nx">src</span><span class="p">]</span> <span class="o">=</span> <span class="p">&#123;</span>
              <span class="na">img</span><span class="p">:</span> <span class="nx">img</span><span class="p">,</span>
            <span class="p">&#125;;</span>
            <span class="nx">images</span><span class="p">.</span><span class="nx">numTotal</span><span class="o">++</span><span class="p">;</span>
            <span class="nf">setImageLoadHandlers</span><span class="p">(</span><span class="nx">img</span><span class="p">,</span> <span class="nx">imageObj</span><span class="p">);</span>
            <span class="nx">img</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">;</span>
          <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">supportCORS</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">allowTaint</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">useCORS</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="c1">// attempt to load with CORS</span>

            <span class="nx">img</span><span class="p">.</span><span class="nx">crossOrigin</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">anonymous</span><span class="dl">"</span><span class="p">;</span>
            <span class="nx">imageObj</span> <span class="o">=</span> <span class="nx">images</span><span class="p">[</span><span class="nx">src</span><span class="p">]</span> <span class="o">=</span> <span class="p">&#123;</span>
              <span class="na">img</span><span class="p">:</span> <span class="nx">img</span><span class="p">,</span>
            <span class="p">&#125;;</span>
            <span class="nx">images</span><span class="p">.</span><span class="nx">numTotal</span><span class="o">++</span><span class="p">;</span>
            <span class="nf">setImageLoadHandlers</span><span class="p">(</span><span class="nx">img</span><span class="p">,</span> <span class="nx">imageObj</span><span class="p">);</span>
            <span class="nx">img</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="nx">src</span><span class="p">;</span>

            <span class="c1">// work around for https://bugs.webkit.org/show_bug.cgi?id=80028</span>
            <span class="nx">img</span><span class="p">.</span><span class="nx">customComplete</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">img</span><span class="p">.</span><span class="nx">complete</span><span class="p">)</span> <span class="p">&#123;</span>
                <span class="k">this</span><span class="p">.</span><span class="nx">timer</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nf">setTimeout</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">img</span><span class="p">.</span><span class="nx">customComplete</span><span class="p">,</span> <span class="mi">100</span><span class="p">);</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                <span class="k">this</span><span class="p">.</span><span class="nx">img</span><span class="p">.</span><span class="nf">onerror</span><span class="p">();</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;.</span><span class="nf">bind</span><span class="p">(</span><span class="nx">imageObj</span><span class="p">);</span>
            <span class="nx">img</span><span class="p">.</span><span class="nf">customComplete</span><span class="p">();</span>
          <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">proxy</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">imageObj</span> <span class="o">=</span> <span class="nx">images</span><span class="p">[</span><span class="nx">src</span><span class="p">]</span> <span class="o">=</span> <span class="p">&#123;</span>
              <span class="na">img</span><span class="p">:</span> <span class="nx">img</span><span class="p">,</span>
            <span class="p">&#125;;</span>
            <span class="nx">images</span><span class="p">.</span><span class="nx">numTotal</span><span class="o">++</span><span class="p">;</span>
            <span class="nf">proxyGetImage</span><span class="p">(</span><span class="nx">src</span><span class="p">,</span> <span class="nx">img</span><span class="p">,</span> <span class="nx">imageObj</span><span class="p">);</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;,</span>
      <span class="na">cleanupDOM</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">cause</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="kd">var</span> <span class="nx">img</span><span class="p">,</span> <span class="nx">src</span><span class="p">;</span>
        <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">images</span><span class="p">.</span><span class="nx">cleanupDone</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">cause</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">cause</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">string</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nf">h2clog</span><span class="p">(</span><span class="dl">"</span><span class="s2">html2canvas: Cleanup because: </span><span class="dl">"</span> <span class="o">+</span> <span class="nx">cause</span><span class="p">);</span>
          <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
            <span class="nf">h2clog</span><span class="p">(</span>
              <span class="dl">"</span><span class="s2">html2canvas: Cleanup after timeout: </span><span class="dl">"</span> <span class="o">+</span> <span class="nx">options</span><span class="p">.</span><span class="nx">timeout</span> <span class="o">+</span> <span class="dl">"</span><span class="s2"> ms.</span><span class="dl">"</span><span class="p">,</span>
            <span class="p">);</span>
          <span class="p">&#125;</span>

          <span class="k">for </span><span class="p">(</span><span class="nx">src</span> <span class="k">in</span> <span class="nx">images</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">images</span><span class="p">.</span><span class="nf">hasOwnProperty</span><span class="p">(</span><span class="nx">src</span><span class="p">))</span> <span class="p">&#123;</span>
              <span class="nx">img</span> <span class="o">=</span> <span class="nx">images</span><span class="p">[</span><span class="nx">src</span><span class="p">];</span>
              <span class="k">if </span><span class="p">(</span>
                <span class="k">typeof</span> <span class="nx">img</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">object</span><span class="dl">"</span> <span class="o">&amp;&amp;</span>
                <span class="nx">img</span><span class="p">.</span><span class="nx">callbackname</span> <span class="o">&amp;&amp;</span>
                <span class="nx">img</span><span class="p">.</span><span class="nx">succeeded</span> <span class="o">===</span> <span class="kc">undefined</span>
              <span class="p">)</span> <span class="p">&#123;</span>
                <span class="c1">// cancel proxy image request</span>
                <span class="nb">window</span><span class="p">[</span><span class="nx">img</span><span class="p">.</span><span class="nx">callbackname</span><span class="p">]</span> <span class="o">=</span> <span class="kc">undefined</span><span class="p">;</span> <span class="c1">// to work with IE&lt;9  // NOTE: that the undefined callback property-name still exists on the window object (for IE&lt;9)</span>
                <span class="k">try</span> <span class="p">&#123;</span>
                  <span class="k">delete</span> <span class="nb">window</span><span class="p">[</span><span class="nx">img</span><span class="p">.</span><span class="nx">callbackname</span><span class="p">];</span> <span class="c1">// for all browser that support this</span>
                <span class="p">&#125;</span> <span class="k">catch </span><span class="p">(</span><span class="nx">ex</span><span class="p">)</span> <span class="p">&#123;&#125;</span>
                <span class="k">if </span><span class="p">(</span><span class="nx">img</span><span class="p">.</span><span class="nx">script</span> <span class="o">&amp;&amp;</span> <span class="nx">img</span><span class="p">.</span><span class="nx">script</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="nx">img</span><span class="p">.</span><span class="nx">script</span><span class="p">.</span><span class="nf">setAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">src</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">about:blank</span><span class="dl">"</span><span class="p">);</span> <span class="c1">// try to cancel running request</span>
                  <span class="nx">img</span><span class="p">.</span><span class="nx">script</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nf">removeChild</span><span class="p">(</span><span class="nx">img</span><span class="p">.</span><span class="nx">script</span><span class="p">);</span>
                <span class="p">&#125;</span>
                <span class="nx">images</span><span class="p">.</span><span class="nx">numLoaded</span><span class="o">++</span><span class="p">;</span>
                <span class="nx">images</span><span class="p">.</span><span class="nx">numFailed</span><span class="o">++</span><span class="p">;</span>
                <span class="nf">h2clog</span><span class="p">(</span>
                  <span class="dl">"</span><span class="s2">html2canvas: Cleaned up failed img: '</span><span class="dl">"</span> <span class="o">+</span>
                    <span class="nx">src</span> <span class="o">+</span>
                    <span class="dl">"</span><span class="s2">' Steps: </span><span class="dl">"</span> <span class="o">+</span>
                    <span class="nx">images</span><span class="p">.</span><span class="nx">numLoaded</span> <span class="o">+</span>
                    <span class="dl">"</span><span class="s2"> / </span><span class="dl">"</span> <span class="o">+</span>
                    <span class="nx">images</span><span class="p">.</span><span class="nx">numTotal</span><span class="p">,</span>
                <span class="p">);</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;</span>

          <span class="c1">// cancel any pending requests</span>
          <span class="k">if </span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">stop</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nb">window</span><span class="p">.</span><span class="nf">stop</span><span class="p">();</span>
          <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">execCommand</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nb">document</span><span class="p">.</span><span class="nf">execCommand</span><span class="p">(</span><span class="dl">"</span><span class="s2">Stop</span><span class="dl">"</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span>
          <span class="p">&#125;</span>
          <span class="k">if </span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">close</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nb">document</span><span class="p">.</span><span class="nf">close</span><span class="p">();</span>
          <span class="p">&#125;</span>
          <span class="nx">images</span><span class="p">.</span><span class="nx">cleanupDone</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
          <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">cause</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">cause</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">string</span><span class="dl">"</span><span class="p">))</span> <span class="p">&#123;</span>
            <span class="nf">start</span><span class="p">();</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;,</span>
      <span class="na">renderingDone</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">timeoutTimer</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nb">window</span><span class="p">.</span><span class="nf">clearTimeout</span><span class="p">(</span><span class="nx">timeoutTimer</span><span class="p">);</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;,</span>
    <span class="p">&#125;;</span>

    <span class="k">if </span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">timeout</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">timeoutTimer</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nf">setTimeout</span><span class="p">(</span><span class="nx">methods</span><span class="p">.</span><span class="nx">cleanupDOM</span><span class="p">,</span> <span class="nx">options</span><span class="p">.</span><span class="nx">timeout</span><span class="p">);</span>
    <span class="p">&#125;</span>
    <span class="nf">h2clog</span><span class="p">(</span><span class="dl">"</span><span class="s2">html2canvas: Preload starts: finding background-images</span><span class="dl">"</span><span class="p">);</span>
    <span class="nx">images</span><span class="p">.</span><span class="nx">firstRun</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>

    <span class="nf">getImages</span><span class="p">(</span><span class="nx">element</span><span class="p">);</span>

    <span class="nf">h2clog</span><span class="p">(</span><span class="dl">"</span><span class="s2">html2canvas: Preload: Finding images</span><span class="dl">"</span><span class="p">);</span>
    <span class="c1">// load &lt;img&gt; images</span>
    <span class="k">for </span><span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">imgLen</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">methods</span><span class="p">.</span><span class="nf">loadImage</span><span class="p">(</span><span class="nx">domImages</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nf">getAttribute</span><span class="p">(</span><span class="dl">"</span><span class="s2">src</span><span class="dl">"</span><span class="p">));</span>
    <span class="p">&#125;</span>

    <span class="nx">images</span><span class="p">.</span><span class="nx">firstRun</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
    <span class="nf">h2clog</span><span class="p">(</span><span class="dl">"</span><span class="s2">html2canvas: Preload: Done.</span><span class="dl">"</span><span class="p">);</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">images</span><span class="p">.</span><span class="nx">numTotal</span> <span class="o">===</span> <span class="nx">images</span><span class="p">.</span><span class="nx">numLoaded</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nf">start</span><span class="p">();</span>
    <span class="p">&#125;</span>

    <span class="k">return</span> <span class="nx">methods</span><span class="p">;</span>
  <span class="p">&#125;;</span>

  <span class="cm">/*
  html2canvas v0.34 &lt;http://html2canvas.hertzen.com&gt;
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
*/</span>
  <span class="kd">function</span> <span class="nf">h2cRenderContext</span><span class="p">(</span><span class="nx">width</span><span class="p">,</span> <span class="nx">height</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">storage</span> <span class="o">=</span> <span class="p">[];</span>
    <span class="k">return</span> <span class="p">&#123;</span>
      <span class="na">storage</span><span class="p">:</span> <span class="nx">storage</span><span class="p">,</span>
      <span class="na">width</span><span class="p">:</span> <span class="nx">width</span><span class="p">,</span>
      <span class="na">height</span><span class="p">:</span> <span class="nx">height</span><span class="p">,</span>
      <span class="na">fillRect</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
        <span class="nx">storage</span><span class="p">.</span><span class="nf">push</span><span class="p">(&#123;</span>
          <span class="na">type</span><span class="p">:</span> <span class="dl">"</span><span class="s2">function</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">fillRect</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">arguments</span><span class="p">:</span> <span class="nx">arguments</span><span class="p">,</span>
        <span class="p">&#125;);</span>
      <span class="p">&#125;,</span>
      <span class="na">drawImage</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
        <span class="nx">storage</span><span class="p">.</span><span class="nf">push</span><span class="p">(&#123;</span>
          <span class="na">type</span><span class="p">:</span> <span class="dl">"</span><span class="s2">function</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">drawImage</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">arguments</span><span class="p">:</span> <span class="nx">arguments</span><span class="p">,</span>
        <span class="p">&#125;);</span>
      <span class="p">&#125;,</span>
      <span class="na">fillText</span><span class="p">:</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
        <span class="nx">storage</span><span class="p">.</span><span class="nf">push</span><span class="p">(&#123;</span>
          <span class="na">type</span><span class="p">:</span> <span class="dl">"</span><span class="s2">function</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">fillText</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">arguments</span><span class="p">:</span> <span class="nx">arguments</span><span class="p">,</span>
        <span class="p">&#125;);</span>
      <span class="p">&#125;,</span>
      <span class="na">setVariable</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">variable</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">storage</span><span class="p">.</span><span class="nf">push</span><span class="p">(&#123;</span>
          <span class="na">type</span><span class="p">:</span> <span class="dl">"</span><span class="s2">variable</span><span class="dl">"</span><span class="p">,</span>
          <span class="na">name</span><span class="p">:</span> <span class="nx">variable</span><span class="p">,</span>
          <span class="na">arguments</span><span class="p">:</span> <span class="nx">value</span><span class="p">,</span>
        <span class="p">&#125;);</span>
      <span class="p">&#125;,</span>
    <span class="p">&#125;;</span>
  <span class="p">&#125;</span>

  <span class="cm">/*
  html2canvas v0.34 &lt;http://html2canvas.hertzen.com&gt;
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
*/</span>
  <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Renderer</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">parseQueue</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">queue</span> <span class="o">=</span> <span class="p">[];</span>

    <span class="kd">function</span> <span class="nf">sortZ</span><span class="p">(</span><span class="nx">zStack</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="kd">var</span> <span class="nx">subStacks</span> <span class="o">=</span> <span class="p">[],</span>
        <span class="nx">stackValues</span> <span class="o">=</span> <span class="p">[],</span>
        <span class="nx">zStackChildren</span> <span class="o">=</span> <span class="nx">zStack</span><span class="p">.</span><span class="nx">children</span><span class="p">,</span>
        <span class="nx">s</span><span class="p">,</span>
        <span class="nx">i</span><span class="p">,</span>
        <span class="nx">stackLen</span><span class="p">,</span>
        <span class="nx">zValue</span><span class="p">,</span>
        <span class="nx">zLen</span><span class="p">,</span>
        <span class="nx">stackChild</span><span class="p">,</span>
        <span class="nx">b</span><span class="p">,</span>
        <span class="nx">subStackLen</span><span class="p">;</span>

      <span class="k">for </span><span class="p">(</span><span class="nx">s</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">zLen</span> <span class="o">=</span> <span class="nx">zStackChildren</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">s</span> <span class="o">&lt;</span> <span class="nx">zLen</span><span class="p">;</span> <span class="nx">s</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">stackChild</span> <span class="o">=</span> <span class="nx">zStackChildren</span><span class="p">[</span><span class="nx">s</span><span class="p">];</span>

        <span class="k">if </span><span class="p">(</span><span class="nx">stackChild</span><span class="p">.</span><span class="nx">children</span> <span class="o">&amp;&amp;</span> <span class="nx">stackChild</span><span class="p">.</span><span class="nx">children</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">subStacks</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">stackChild</span><span class="p">);</span>
          <span class="nx">stackValues</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">stackChild</span><span class="p">.</span><span class="nx">zindex</span><span class="p">);</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
          <span class="nx">queue</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">stackChild</span><span class="p">);</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span>

      <span class="nx">stackValues</span><span class="p">.</span><span class="nf">sort</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">return</span> <span class="nx">a</span> <span class="o">-</span> <span class="nx">b</span><span class="p">;</span>
      <span class="p">&#125;);</span>

      <span class="k">for </span><span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">stackLen</span> <span class="o">=</span> <span class="nx">stackValues</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">stackLen</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">zValue</span> <span class="o">=</span> <span class="nx">stackValues</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span>
        <span class="k">for </span><span class="p">(</span><span class="nx">b</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">subStackLen</span> <span class="o">=</span> <span class="nx">subStacks</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">b</span> <span class="o">&lt;=</span> <span class="nx">subStackLen</span><span class="p">;</span> <span class="nx">b</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">subStacks</span><span class="p">[</span><span class="nx">b</span><span class="p">].</span><span class="nx">zindex</span> <span class="o">===</span> <span class="nx">zValue</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">stackChild</span> <span class="o">=</span> <span class="nx">subStacks</span><span class="p">.</span><span class="nf">splice</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span>
            <span class="nf">sortZ</span><span class="p">(</span><span class="nx">stackChild</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span>
            <span class="k">break</span><span class="p">;</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;</span>

    <span class="nf">sortZ</span><span class="p">(</span><span class="nx">parseQueue</span><span class="p">.</span><span class="nx">zIndex</span><span class="p">);</span>
    <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">options</span><span class="p">.</span><span class="nx">_renderer</span><span class="p">.</span><span class="nx">_create</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">function</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">throw</span> <span class="k">new</span> <span class="nc">Error</span><span class="p">(</span><span class="dl">"</span><span class="s2">Invalid renderer defined</span><span class="dl">"</span><span class="p">);</span>
    <span class="p">&#125;</span>
    <span class="k">return</span> <span class="nx">options</span><span class="p">.</span><span class="nx">_renderer</span><span class="p">.</span><span class="nf">_create</span><span class="p">(</span>
      <span class="nx">parseQueue</span><span class="p">,</span>
      <span class="nx">options</span><span class="p">,</span>
      <span class="nb">document</span><span class="p">,</span>
      <span class="nx">queue</span><span class="p">,</span>
      <span class="nx">_html2canvas</span><span class="p">,</span>
    <span class="p">);</span>
  <span class="p">&#125;;</span>

  <span class="cm">/*
  html2canvas v0.34 &lt;http://html2canvas.hertzen.com&gt;
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
*/</span>

  <span class="nx">html2canvas</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">elements</span><span class="p">,</span> <span class="nx">opts</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">queue</span><span class="p">,</span>
      <span class="nx">canvas</span><span class="p">,</span>
      <span class="nx">options</span> <span class="o">=</span> <span class="p">&#123;</span>
        <span class="c1">// general</span>
        <span class="na">logging</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
        <span class="na">elements</span><span class="p">:</span> <span class="nx">elements</span><span class="p">,</span>

        <span class="c1">// preload options</span>
        <span class="na">proxy</span><span class="p">:</span> <span class="dl">"</span><span class="s2">http://html2canvas.appspot.com/</span><span class="dl">"</span><span class="p">,</span>
        <span class="na">timeout</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span> <span class="c1">// no timeout</span>
        <span class="na">useCORS</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span> <span class="c1">// try to load images as CORS (where available), before falling back to proxy</span>
        <span class="na">allowTaint</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span> <span class="c1">// whether to allow images to taint the canvas, won't need proxy if set to true</span>

        <span class="c1">// parse options</span>
        <span class="na">svgRendering</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span> <span class="c1">// use svg powered rendering where available (FF11+)</span>
        <span class="na">iframeDefault</span><span class="p">:</span> <span class="dl">"</span><span class="s2">default</span><span class="dl">"</span><span class="p">,</span>
        <span class="na">ignoreElements</span><span class="p">:</span> <span class="dl">"</span><span class="s2">IFRAME|OBJECT|PARAM</span><span class="dl">"</span><span class="p">,</span>
        <span class="na">useOverflow</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
        <span class="na">letterRendering</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>

        <span class="c1">// render options</span>

        <span class="na">flashcanvas</span><span class="p">:</span> <span class="kc">undefined</span><span class="p">,</span> <span class="c1">// path to flashcanvas</span>
        <span class="na">width</span><span class="p">:</span> <span class="kc">null</span><span class="p">,</span>
        <span class="na">height</span><span class="p">:</span> <span class="kc">null</span><span class="p">,</span>
        <span class="na">taintTest</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span> <span class="c1">// do a taint test with all images before applying to canvas</span>
        <span class="na">renderer</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Canvas</span><span class="dl">"</span><span class="p">,</span>
      <span class="p">&#125;,</span>
      <span class="nx">renderer</span><span class="p">;</span>

    <span class="nx">options</span> <span class="o">=</span> <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Util</span><span class="p">.</span><span class="nc">Extend</span><span class="p">(</span><span class="nx">opts</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span>

    <span class="k">if </span><span class="p">(</span>
      <span class="k">typeof</span> <span class="nx">options</span><span class="p">.</span><span class="nx">renderer</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">string</span><span class="dl">"</span> <span class="o">&amp;&amp;</span>
      <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Renderer</span><span class="p">[</span><span class="nx">options</span><span class="p">.</span><span class="nx">renderer</span><span class="p">]</span> <span class="o">!==</span> <span class="kc">undefined</span>
    <span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">options</span><span class="p">.</span><span class="nx">_renderer</span> <span class="o">=</span> <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Renderer</span><span class="p">[</span><span class="nx">options</span><span class="p">.</span><span class="nx">renderer</span><span class="p">](</span><span class="nx">options</span><span class="p">);</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">options</span><span class="p">.</span><span class="nx">renderer</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">function</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">options</span><span class="p">.</span><span class="nx">_renderer</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nf">renderer</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
      <span class="k">throw</span> <span class="dl">"</span><span class="s2">Unknown renderer</span><span class="dl">"</span><span class="p">;</span>
    <span class="p">&#125;</span>

    <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">logging</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">logging</span><span class="p">;</span>
    <span class="nx">options</span><span class="p">.</span><span class="nx">complete</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">images</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">options</span><span class="p">.</span><span class="nx">onpreloaded</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">function</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nf">onpreloaded</span><span class="p">(</span><span class="nx">images</span><span class="p">)</span> <span class="o">===</span> <span class="kc">false</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">return</span><span class="p">;</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span>
      <span class="nx">queue</span> <span class="o">=</span> <span class="nx">_html2canvas</span><span class="p">.</span><span class="nc">Parse</span><span class="p">(</span><span class="nx">images</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span>

      <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">options</span><span class="p">.</span><span class="nx">onparsed</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">function</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">if </span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nf">onparsed</span><span class="p">(</span><span class="nx">queue</span><span class="p">)</span> <span class="o">===</span> <span class="kc">false</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">return</span><span class="p">;</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;</span>

      <span class="nx">canvas</span> <span class="o">=</span> <span class="nx">_html2canvas</span><span class="p">.</span><span class="nc">Renderer</span><span class="p">(</span><span class="nx">queue</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span>

      <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nx">options</span><span class="p">.</span><span class="nx">onrendered</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">function</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">options</span><span class="p">.</span><span class="nf">onrendered</span><span class="p">(</span><span class="nx">canvas</span><span class="p">);</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;;</span>

    <span class="c1">// for pages without images, we still want this to be async, i.e. return methods before executing</span>
    <span class="nb">window</span><span class="p">.</span><span class="nf">setTimeout</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="nx">_html2canvas</span><span class="p">.</span><span class="nc">Preload</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span>
    <span class="p">&#125;,</span> <span class="mi">0</span><span class="p">);</span>

    <span class="k">return</span> <span class="p">&#123;</span>
      <span class="na">render</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">queue</span><span class="p">,</span> <span class="nx">opts</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">return</span> <span class="nx">_html2canvas</span><span class="p">.</span><span class="nc">Renderer</span><span class="p">(</span>
          <span class="nx">queue</span><span class="p">,</span>
          <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Util</span><span class="p">.</span><span class="nc">Extend</span><span class="p">(</span><span class="nx">opts</span><span class="p">,</span> <span class="nx">options</span><span class="p">),</span>
        <span class="p">);</span>
      <span class="p">&#125;,</span>
      <span class="na">parse</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">images</span><span class="p">,</span> <span class="nx">opts</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">return</span> <span class="nx">_html2canvas</span><span class="p">.</span><span class="nc">Parse</span><span class="p">(</span>
          <span class="nx">images</span><span class="p">,</span>
          <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Util</span><span class="p">.</span><span class="nc">Extend</span><span class="p">(</span><span class="nx">opts</span><span class="p">,</span> <span class="nx">options</span><span class="p">),</span>
        <span class="p">);</span>
      <span class="p">&#125;,</span>
      <span class="na">preload</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">opts</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">return</span> <span class="nx">_html2canvas</span><span class="p">.</span><span class="nc">Preload</span><span class="p">(</span><span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Util</span><span class="p">.</span><span class="nc">Extend</span><span class="p">(</span><span class="nx">opts</span><span class="p">,</span> <span class="nx">options</span><span class="p">));</span>
      <span class="p">&#125;,</span>
      <span class="na">log</span><span class="p">:</span> <span class="nx">h2clog</span><span class="p">,</span>
    <span class="p">&#125;;</span>
  <span class="p">&#125;;</span>

  <span class="nx">html2canvas</span><span class="p">.</span><span class="nx">log</span> <span class="o">=</span> <span class="nx">h2clog</span><span class="p">;</span> <span class="c1">// for renderers</span>
  <span class="nx">html2canvas</span><span class="p">.</span><span class="nx">Renderer</span> <span class="o">=</span> <span class="p">&#123;</span>
    <span class="na">Canvas</span><span class="p">:</span> <span class="kc">undefined</span><span class="p">,</span> <span class="c1">// We are assuming this will be used</span>
  <span class="p">&#125;;</span>

  <span class="cm">/*
  html2canvas v0.34 &lt;http://html2canvas.hertzen.com&gt;
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
*/</span>

  <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Renderer</span><span class="p">.</span><span class="nx">Canvas</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">||</span> <span class="p">&#123;&#125;;</span>

    <span class="kd">var</span> <span class="nx">doc</span> <span class="o">=</span> <span class="nb">document</span><span class="p">,</span>
      <span class="nx">canvas</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">canvas</span> <span class="o">||</span> <span class="nx">doc</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">canvas</span><span class="dl">"</span><span class="p">),</span>
      <span class="nx">usingFlashcanvas</span> <span class="o">=</span> <span class="kc">false</span><span class="p">,</span>
      <span class="nx">_createCalled</span> <span class="o">=</span> <span class="kc">false</span><span class="p">,</span>
      <span class="nx">canvasReadyToDraw</span> <span class="o">=</span> <span class="kc">false</span><span class="p">,</span>
      <span class="nx">methods</span><span class="p">,</span>
      <span class="nx">flashMaxSize</span> <span class="o">=</span> <span class="mi">2880</span><span class="p">;</span> <span class="c1">// flash bitmap limited to 2880x2880px // http://stackoverflow.com/questions/2033792/argumenterror-error-2015-invalid-bitmapdata</span>

    <span class="k">if </span><span class="p">(</span><span class="nx">canvas</span><span class="p">.</span><span class="nx">getContext</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nf">h2clog</span><span class="p">(</span><span class="dl">"</span><span class="s2">html2canvas: Renderer: using canvas renderer</span><span class="dl">"</span><span class="p">);</span>
      <span class="nx">canvasReadyToDraw</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">flashcanvas</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">usingFlashcanvas</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
      <span class="nf">h2clog</span><span class="p">(</span><span class="dl">"</span><span class="s2">html2canvas: Renderer: canvas not available, using flashcanvas</span><span class="dl">"</span><span class="p">);</span>
      <span class="kd">var</span> <span class="nx">script</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">script</span><span class="dl">"</span><span class="p">);</span>
      <span class="nx">script</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">flashcanvas</span><span class="p">;</span>

      <span class="nx">script</span><span class="p">.</span><span class="nx">onload</span> <span class="o">=</span> <span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">script</span><span class="p">,</span> <span class="nx">func</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="kd">var</span> <span class="nx">intervalFunc</span><span class="p">;</span>

        <span class="k">if </span><span class="p">(</span><span class="nx">script</span><span class="p">.</span><span class="nx">onload</span> <span class="o">===</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="c1">// IE lack of support for script onload</span>

          <span class="k">if </span><span class="p">(</span><span class="nx">script</span><span class="p">.</span><span class="nx">onreadystatechange</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">intervalFunc</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
              <span class="k">if </span><span class="p">(</span>
                <span class="nx">script</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">loaded</span><span class="dl">"</span> <span class="o">&amp;&amp;</span>
                <span class="nx">script</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">complete</span><span class="dl">"</span>
              <span class="p">)</span> <span class="p">&#123;</span>
                <span class="nb">window</span><span class="p">.</span><span class="nf">setTimeout</span><span class="p">(</span><span class="nx">intervalFunc</span><span class="p">,</span> <span class="mi">250</span><span class="p">);</span>
              <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
                <span class="c1">// it is loaded</span>
                <span class="nf">func</span><span class="p">();</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;;</span>

            <span class="nb">window</span><span class="p">.</span><span class="nf">setTimeout</span><span class="p">(</span><span class="nx">intervalFunc</span><span class="p">,</span> <span class="mi">250</span><span class="p">);</span>
          <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
            <span class="nf">h2clog</span><span class="p">(</span>
              <span class="dl">"</span><span class="s2">html2canvas: Renderer: Can't track when flashcanvas is loaded</span><span class="dl">"</span><span class="p">,</span>
            <span class="p">);</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
          <span class="k">return</span> <span class="nx">func</span><span class="p">;</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;)(</span><span class="nx">script</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
        <span class="k">if </span><span class="p">(</span><span class="k">typeof</span> <span class="nb">window</span><span class="p">.</span><span class="nx">FlashCanvas</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">undefined</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nf">h2clog</span><span class="p">(</span><span class="dl">"</span><span class="s2">html2canvas: Renderer: Flashcanvas initialized</span><span class="dl">"</span><span class="p">);</span>
          <span class="nb">window</span><span class="p">.</span><span class="nx">FlashCanvas</span><span class="p">.</span><span class="nf">initElement</span><span class="p">(</span><span class="nx">canvas</span><span class="p">);</span>

          <span class="nx">canvasReadyToDraw</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">_createCalled</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">methods</span><span class="p">.</span><span class="nx">_create</span><span class="p">.</span><span class="nf">apply</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">_createCalled</span><span class="p">);</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;</span>
      <span class="p">&#125;);</span>

      <span class="nx">doc</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nf">appendChild</span><span class="p">(</span><span class="nx">script</span><span class="p">);</span>
    <span class="p">&#125;</span>

    <span class="nx">methods</span> <span class="o">=</span> <span class="p">&#123;</span>
      <span class="na">_create</span><span class="p">:</span> <span class="nf">function </span><span class="p">(</span><span class="nx">zStack</span><span class="p">,</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">doc</span><span class="p">,</span> <span class="nx">queue</span><span class="p">,</span> <span class="nx">_html2canvas</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="k">if </span><span class="p">(</span><span class="o">!</span><span class="nx">canvasReadyToDraw</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="nx">_createCalled</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">;</span>
          <span class="k">return</span> <span class="nx">canvas</span><span class="p">;</span>
        <span class="p">&#125;</span>

        <span class="kd">var</span> <span class="nx">ctx</span> <span class="o">=</span> <span class="nx">canvas</span><span class="p">.</span><span class="nf">getContext</span><span class="p">(</span><span class="dl">"</span><span class="s2">2d</span><span class="dl">"</span><span class="p">),</span>
          <span class="nx">storageContext</span><span class="p">,</span>
          <span class="nx">i</span><span class="p">,</span>
          <span class="nx">queueLen</span><span class="p">,</span>
          <span class="nx">a</span><span class="p">,</span>
          <span class="nx">newCanvas</span><span class="p">,</span>
          <span class="nx">bounds</span><span class="p">,</span>
          <span class="nx">testCanvas</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">canvas</span><span class="dl">"</span><span class="p">),</span>
          <span class="nx">hasCTX</span> <span class="o">=</span> <span class="nx">testCanvas</span><span class="p">.</span><span class="nx">getContext</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">,</span>
          <span class="nx">storageLen</span><span class="p">,</span>
          <span class="nx">renderItem</span><span class="p">,</span>
          <span class="nx">testctx</span> <span class="o">=</span> <span class="nx">hasCTX</span> <span class="p">?</span> <span class="nx">testCanvas</span><span class="p">.</span><span class="nf">getContext</span><span class="p">(</span><span class="dl">"</span><span class="s2">2d</span><span class="dl">"</span><span class="p">)</span> <span class="p">:</span> <span class="p">&#123;&#125;,</span>
          <span class="nx">safeImages</span> <span class="o">=</span> <span class="p">[],</span>
          <span class="nx">fstyle</span><span class="p">;</span>

        <span class="nx">canvas</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="nx">canvas</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="o">!</span><span class="nx">usingFlashcanvas</span>
          <span class="p">?</span> <span class="nx">options</span><span class="p">.</span><span class="nx">width</span> <span class="o">||</span> <span class="nx">zStack</span><span class="p">.</span><span class="nx">ctx</span><span class="p">.</span><span class="nx">width</span>
          <span class="p">:</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">min</span><span class="p">(</span><span class="nx">flashMaxSize</span><span class="p">,</span> <span class="nx">options</span><span class="p">.</span><span class="nx">width</span> <span class="o">||</span> <span class="nx">zStack</span><span class="p">.</span><span class="nx">ctx</span><span class="p">.</span><span class="nx">width</span><span class="p">);</span>
        <span class="nx">canvas</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="nx">canvas</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="o">!</span><span class="nx">usingFlashcanvas</span>
          <span class="p">?</span> <span class="nx">options</span><span class="p">.</span><span class="nx">height</span> <span class="o">||</span> <span class="nx">zStack</span><span class="p">.</span><span class="nx">ctx</span><span class="p">.</span><span class="nx">height</span>
          <span class="p">:</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">min</span><span class="p">(</span><span class="nx">flashMaxSize</span><span class="p">,</span> <span class="nx">options</span><span class="p">.</span><span class="nx">height</span> <span class="o">||</span> <span class="nx">zStack</span><span class="p">.</span><span class="nx">ctx</span><span class="p">.</span><span class="nx">height</span><span class="p">);</span>

        <span class="nx">fstyle</span> <span class="o">=</span> <span class="nx">ctx</span><span class="p">.</span><span class="nx">fillStyle</span><span class="p">;</span>
        <span class="nx">ctx</span><span class="p">.</span><span class="nx">fillStyle</span> <span class="o">=</span> <span class="nx">zStack</span><span class="p">.</span><span class="nx">backgroundColor</span><span class="p">;</span>
        <span class="nx">ctx</span><span class="p">.</span><span class="nf">fillRect</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">canvas</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span> <span class="nx">canvas</span><span class="p">.</span><span class="nx">height</span><span class="p">);</span>
        <span class="nx">ctx</span><span class="p">.</span><span class="nx">fillStyle</span> <span class="o">=</span> <span class="nx">fstyle</span><span class="p">;</span>

        <span class="k">if </span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">svgRendering</span> <span class="o">&amp;&amp;</span> <span class="nx">zStack</span><span class="p">.</span><span class="nx">svgRender</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="c1">// TODO: enable async rendering to support this</span>
          <span class="nx">ctx</span><span class="p">.</span><span class="nf">drawImage</span><span class="p">(</span><span class="nx">zStack</span><span class="p">.</span><span class="nx">svgRender</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span>
        <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
          <span class="k">for </span><span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">queueLen</span> <span class="o">=</span> <span class="nx">queue</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">queueLen</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">storageContext</span> <span class="o">=</span> <span class="nx">queue</span><span class="p">.</span><span class="nf">splice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span>
            <span class="nx">storageContext</span><span class="p">.</span><span class="nx">canvasPosition</span> <span class="o">=</span> <span class="nx">storageContext</span><span class="p">.</span><span class="nx">canvasPosition</span> <span class="o">||</span> <span class="p">&#123;&#125;;</span>

            <span class="c1">//this.canvasRenderContext(storageContext,parentctx);</span>

            <span class="c1">// set common settings for canvas</span>
            <span class="nx">ctx</span><span class="p">.</span><span class="nx">textBaseline</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">bottom</span><span class="dl">"</span><span class="p">;</span>

            <span class="k">if </span><span class="p">(</span><span class="nx">storageContext</span><span class="p">.</span><span class="nx">clip</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">ctx</span><span class="p">.</span><span class="nf">save</span><span class="p">();</span>
              <span class="nx">ctx</span><span class="p">.</span><span class="nf">beginPath</span><span class="p">();</span>
              <span class="c1">// console.log(storageContext);</span>
              <span class="nx">ctx</span><span class="p">.</span><span class="nf">rect</span><span class="p">(</span>
                <span class="nx">storageContext</span><span class="p">.</span><span class="nx">clip</span><span class="p">.</span><span class="nx">left</span><span class="p">,</span>
                <span class="nx">storageContext</span><span class="p">.</span><span class="nx">clip</span><span class="p">.</span><span class="nx">top</span><span class="p">,</span>
                <span class="nx">storageContext</span><span class="p">.</span><span class="nx">clip</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span>
                <span class="nx">storageContext</span><span class="p">.</span><span class="nx">clip</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span>
              <span class="p">);</span>
              <span class="nx">ctx</span><span class="p">.</span><span class="nf">clip</span><span class="p">();</span>
            <span class="p">&#125;</span>

            <span class="k">if </span><span class="p">(</span><span class="nx">storageContext</span><span class="p">.</span><span class="nx">ctx</span><span class="p">.</span><span class="nx">storage</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="k">for </span><span class="p">(</span>
                <span class="nx">a</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">storageLen</span> <span class="o">=</span> <span class="nx">storageContext</span><span class="p">.</span><span class="nx">ctx</span><span class="p">.</span><span class="nx">storage</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>
                <span class="nx">a</span> <span class="o">&lt;</span> <span class="nx">storageLen</span><span class="p">;</span>
                <span class="nx">a</span> <span class="o">+=</span> <span class="mi">1</span>
              <span class="p">)</span> <span class="p">&#123;</span>
                <span class="nx">renderItem</span> <span class="o">=</span> <span class="nx">storageContext</span><span class="p">.</span><span class="nx">ctx</span><span class="p">.</span><span class="nx">storage</span><span class="p">[</span><span class="nx">a</span><span class="p">];</span>

                <span class="k">switch </span><span class="p">(</span><span class="nx">renderItem</span><span class="p">.</span><span class="nx">type</span><span class="p">)</span> <span class="p">&#123;</span>
                  <span class="k">case</span> <span class="dl">"</span><span class="s2">variable</span><span class="dl">"</span><span class="p">:</span>
                    <span class="nx">ctx</span><span class="p">[</span><span class="nx">renderItem</span><span class="p">.</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">renderItem</span><span class="p">[</span><span class="dl">"</span><span class="s2">arguments</span><span class="dl">"</span><span class="p">];</span>
                    <span class="k">break</span><span class="p">;</span>
                  <span class="k">case</span> <span class="dl">"</span><span class="s2">function</span><span class="dl">"</span><span class="p">:</span>
                    <span class="k">if </span><span class="p">(</span><span class="nx">renderItem</span><span class="p">.</span><span class="nx">name</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">fillRect</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="k">if </span><span class="p">(</span>
                        <span class="o">!</span><span class="nx">usingFlashcanvas</span> <span class="o">||</span>
                        <span class="p">(</span><span class="nx">renderItem</span><span class="p">[</span><span class="dl">"</span><span class="s2">arguments</span><span class="dl">"</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span> <span class="o">+</span>
                          <span class="nx">renderItem</span><span class="p">[</span><span class="dl">"</span><span class="s2">arguments</span><span class="dl">"</span><span class="p">][</span><span class="mi">2</span><span class="p">]</span> <span class="o">&lt;</span>
                          <span class="nx">flashMaxSize</span> <span class="o">&amp;&amp;</span>
                          <span class="nx">renderItem</span><span class="p">[</span><span class="dl">"</span><span class="s2">arguments</span><span class="dl">"</span><span class="p">][</span><span class="mi">1</span><span class="p">]</span> <span class="o">+</span>
                            <span class="nx">renderItem</span><span class="p">[</span><span class="dl">"</span><span class="s2">arguments</span><span class="dl">"</span><span class="p">][</span><span class="mi">3</span><span class="p">]</span> <span class="o">&lt;</span>
                            <span class="nx">flashMaxSize</span><span class="p">)</span>
                      <span class="p">)</span> <span class="p">&#123;</span>
                        <span class="nx">ctx</span><span class="p">.</span><span class="nx">fillRect</span><span class="p">.</span><span class="nf">apply</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">renderItem</span><span class="p">[</span><span class="dl">"</span><span class="s2">arguments</span><span class="dl">"</span><span class="p">]);</span>
                      <span class="p">&#125;</span>
                    <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">renderItem</span><span class="p">.</span><span class="nx">name</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">fillText</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="k">if </span><span class="p">(</span>
                        <span class="o">!</span><span class="nx">usingFlashcanvas</span> <span class="o">||</span>
                        <span class="p">(</span><span class="nx">renderItem</span><span class="p">[</span><span class="dl">"</span><span class="s2">arguments</span><span class="dl">"</span><span class="p">][</span><span class="mi">1</span><span class="p">]</span> <span class="o">&lt;</span> <span class="nx">flashMaxSize</span> <span class="o">&amp;&amp;</span>
                          <span class="nx">renderItem</span><span class="p">[</span><span class="dl">"</span><span class="s2">arguments</span><span class="dl">"</span><span class="p">][</span><span class="mi">2</span><span class="p">]</span> <span class="o">&lt;</span> <span class="nx">flashMaxSize</span><span class="p">)</span>
                      <span class="p">)</span> <span class="p">&#123;</span>
                        <span class="nx">ctx</span><span class="p">.</span><span class="nx">fillText</span><span class="p">.</span><span class="nf">apply</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">renderItem</span><span class="p">[</span><span class="dl">"</span><span class="s2">arguments</span><span class="dl">"</span><span class="p">]);</span>
                      <span class="p">&#125;</span>
                    <span class="p">&#125;</span> <span class="k">else</span> <span class="k">if </span><span class="p">(</span><span class="nx">renderItem</span><span class="p">.</span><span class="nx">name</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">drawImage</span><span class="dl">"</span><span class="p">)</span> <span class="p">&#123;</span>
                      <span class="k">if </span><span class="p">(</span>
                        <span class="nx">renderItem</span><span class="p">[</span><span class="dl">"</span><span class="s2">arguments</span><span class="dl">"</span><span class="p">][</span><span class="mi">8</span><span class="p">]</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span>
                        <span class="nx">renderItem</span><span class="p">[</span><span class="dl">"</span><span class="s2">arguments</span><span class="dl">"</span><span class="p">][</span><span class="mi">7</span><span class="p">]</span>
                      <span class="p">)</span> <span class="p">&#123;</span>
                        <span class="k">if </span><span class="p">(</span><span class="nx">hasCTX</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">taintTest</span><span class="p">)</span> <span class="p">&#123;</span>
                          <span class="k">if </span><span class="p">(</span>
                            <span class="nx">safeImages</span><span class="p">.</span><span class="nf">indexOf</span><span class="p">(</span>
                              <span class="nx">renderItem</span><span class="p">[</span><span class="dl">"</span><span class="s2">arguments</span><span class="dl">"</span><span class="p">][</span><span class="mi">0</span><span class="p">].</span><span class="nx">src</span><span class="p">,</span>
                            <span class="p">)</span> <span class="o">===</span> <span class="o">-</span><span class="mi">1</span>
                          <span class="p">)</span> <span class="p">&#123;</span>
                            <span class="nx">testctx</span><span class="p">.</span><span class="nf">drawImage</span><span class="p">(</span><span class="nx">renderItem</span><span class="p">[</span><span class="dl">"</span><span class="s2">arguments</span><span class="dl">"</span><span class="p">][</span><span class="mi">0</span><span class="p">],</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span>
                            <span class="k">try</span> <span class="p">&#123;</span>
                              <span class="nx">testctx</span><span class="p">.</span><span class="nf">getImageData</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span>
                            <span class="p">&#125;</span> <span class="k">catch </span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">&#123;</span>
                              <span class="nx">testCanvas</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">canvas</span><span class="dl">"</span><span class="p">);</span>
                              <span class="nx">testctx</span> <span class="o">=</span> <span class="nx">testCanvas</span><span class="p">.</span><span class="nf">getContext</span><span class="p">(</span><span class="dl">"</span><span class="s2">2d</span><span class="dl">"</span><span class="p">);</span>
                              <span class="k">continue</span><span class="p">;</span>
                            <span class="p">&#125;</span>

                            <span class="nx">safeImages</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">renderItem</span><span class="p">[</span><span class="dl">"</span><span class="s2">arguments</span><span class="dl">"</span><span class="p">][</span><span class="mi">0</span><span class="p">].</span><span class="nx">src</span><span class="p">);</span>
                          <span class="p">&#125;</span>
                        <span class="p">&#125;</span>
                        <span class="nx">ctx</span><span class="p">.</span><span class="nx">drawImage</span><span class="p">.</span><span class="nf">apply</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">renderItem</span><span class="p">[</span><span class="dl">"</span><span class="s2">arguments</span><span class="dl">"</span><span class="p">]);</span>
                      <span class="p">&#125;</span>
                    <span class="p">&#125;</span>

                    <span class="k">break</span><span class="p">;</span>
                  <span class="nl">default</span><span class="p">:</span>
                <span class="p">&#125;</span>
              <span class="p">&#125;</span>
            <span class="p">&#125;</span>
            <span class="k">if </span><span class="p">(</span><span class="nx">storageContext</span><span class="p">.</span><span class="nx">clip</span><span class="p">)</span> <span class="p">&#123;</span>
              <span class="nx">ctx</span><span class="p">.</span><span class="nf">restore</span><span class="p">();</span>
            <span class="p">&#125;</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;</span>

        <span class="nf">h2clog</span><span class="p">(</span>
          <span class="dl">"</span><span class="s2">html2canvas: Renderer: Canvas renderer done - returning canvas obj</span><span class="dl">"</span><span class="p">,</span>
        <span class="p">);</span>

        <span class="nx">queueLen</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">elements</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>

        <span class="k">if </span><span class="p">(</span><span class="nx">queueLen</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">if </span><span class="p">(</span>
            <span class="k">typeof</span> <span class="nx">options</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">object</span><span class="dl">"</span> <span class="o">&amp;&amp;</span>
            <span class="nx">options</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">nodeName</span> <span class="o">!==</span> <span class="dl">"</span><span class="s2">BODY</span><span class="dl">"</span> <span class="o">&amp;&amp;</span>
            <span class="nx">usingFlashcanvas</span> <span class="o">===</span> <span class="kc">false</span>
          <span class="p">)</span> <span class="p">&#123;</span>
            <span class="c1">// crop image to the bounds of selected (single) element</span>
            <span class="nx">bounds</span> <span class="o">=</span> <span class="nx">_html2canvas</span><span class="p">.</span><span class="nx">Util</span><span class="p">.</span><span class="nc">Bounds</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">elements</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span>
            <span class="nx">newCanvas</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nf">createElement</span><span class="p">(</span><span class="dl">"</span><span class="s2">canvas</span><span class="dl">"</span><span class="p">);</span>
            <span class="nx">newCanvas</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span><span class="p">;</span>
            <span class="nx">newCanvas</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">.</span><span class="nx">height</span><span class="p">;</span>
            <span class="nx">ctx</span> <span class="o">=</span> <span class="nx">newCanvas</span><span class="p">.</span><span class="nf">getContext</span><span class="p">(</span><span class="dl">"</span><span class="s2">2d</span><span class="dl">"</span><span class="p">);</span>

            <span class="nx">ctx</span><span class="p">.</span><span class="nf">drawImage</span><span class="p">(</span>
              <span class="nx">canvas</span><span class="p">,</span>
              <span class="nx">bounds</span><span class="p">.</span><span class="nx">left</span><span class="p">,</span>
              <span class="nx">bounds</span><span class="p">.</span><span class="nx">top</span><span class="p">,</span>
              <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span>
              <span class="nx">bounds</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span>
              <span class="mi">0</span><span class="p">,</span>
              <span class="mi">0</span><span class="p">,</span>
              <span class="nx">bounds</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span>
              <span class="nx">bounds</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span>
            <span class="p">);</span>
            <span class="nx">canvas</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
            <span class="k">return</span> <span class="nx">newCanvas</span><span class="p">;</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;</span> <span class="cm">/*else &#123;
        // TODO clip and resize multiple elements

            for ( i = 0; i &lt; queueLen; i+=1 ) &#123;
                if (options.elements[ i ] instanceof Element) &#123;

                &#125;

            &#125;
        &#125;
        */</span>

        <span class="k">return</span> <span class="nx">canvas</span><span class="p">;</span>
      <span class="p">&#125;,</span>
    <span class="p">&#125;;</span>

    <span class="k">return</span> <span class="nx">methods</span><span class="p">;</span>
  <span class="p">&#125;;</span>

  <span class="nb">window</span><span class="p">.</span><span class="nx">html2canvas</span> <span class="o">=</span> <span class="nx">html2canvas</span><span class="p">;</span>
<span class="p">&#125;)(</span><span class="nb">window</span><span class="p">,</span> <span class="nb">document</span><span class="p">);</span>

<span class="cm">/*
 * END html2canvas
 */</span>

<span class="nf">$</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="kd">var</span> <span class="nx">example5a</span> <span class="o">=</span> <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#example5 .source</span><span class="dl">"</span><span class="p">);</span>
  <span class="kd">var</span> <span class="nx">example5b</span> <span class="o">=</span> <span class="nf">$</span><span class="p">(</span>
    <span class="dl">"</span><span class="s2">&lt;div class='source'&gt;&lt;h2&gt;Page 2&lt;/h2&gt;&lt;p&gt;Beard flexitarian semiotics tofu retro. Synth sustainable accusamus hoodie, scenester retro wayfarers occupy. Twee ea marfa nesciunt pickled pork belly. Pop-up fugiat squid, aute brunch viral fingerstache american apparel et cupidatat placeat butcher etsy art party. Mlkshk sriracha delectus, dreamcatcher occaecat freegan esse placeat fugiat williamsburg aliquip nisi cred retro jean shorts. Stumptown mixtape gastropub, you probably haven't heard of them master cleanse laboris sunt scenester post-ironic dreamcatcher ex. Williamsburg sriracha cray high life cillum.&lt;/p&gt;&lt;/div&gt;</span><span class="dl">"</span><span class="p">,</span>
  <span class="p">).</span><span class="nf">width</span><span class="p">(</span><span class="mi">400</span><span class="p">);</span>
  <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#example5 button</span><span class="dl">"</span><span class="p">).</span><span class="nf">click</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="k">if </span><span class="p">(</span><span class="nx">example5a</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">parentNode</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nx">glitch</span><span class="p">.</span><span class="nf">transition</span><span class="p">(</span><span class="nx">example5a</span><span class="p">,</span> <span class="nx">example5b</span><span class="p">);</span>
    <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
      <span class="nx">glitch</span><span class="p">.</span><span class="nf">transition</span><span class="p">(</span><span class="nx">example5b</span><span class="p">,</span> <span class="nx">example5a</span><span class="p">,</span> <span class="p">&#123;</span>
        <span class="na">effect</span><span class="p">:</span> <span class="dl">"</span><span class="s2">slide</span><span class="dl">"</span><span class="p">,</span>
      <span class="p">&#125;);</span>
    <span class="p">&#125;</span>
  <span class="p">&#125;);</span>
<span class="p">&#125;);</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/3TLjN/">original jsfiddle post</a></p>
