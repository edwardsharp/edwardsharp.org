---
title: "jQuery + google maps + Elevation"
date: "2013-02-26T05:25:39.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-w4E9D/"
source_id: "w4E9D"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/w4E9D/"
source_revision: 0
---
<iframe class="code-demo" src="{{ '/content/media/2013/2013-02-26-jsfiddle-w4E9D-demo.html' | relative_url }}" title="jQuery + google maps + Elevation" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p>playing with google maps v3 events, jQuery, icons from http://google-maps-icons.googlecode.com</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"http://maps.google.com/maps/api/js?sensor=false&amp;amp;.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"map"</span><span class="nt">&gt;&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nf">#map</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">450px</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">400px</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="kd">var</span> <span class="nx">map</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">elevator</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">myOptions</span> <span class="o">=</span> <span class="p">&#123;</span>
  <span class="na">zoom</span><span class="p">:</span> <span class="mi">6</span><span class="p">,</span>
  <span class="na">center</span><span class="p">:</span> <span class="k">new</span> <span class="nx">google</span><span class="p">.</span><span class="nx">maps</span><span class="p">.</span><span class="nc">LatLng</span><span class="p">(</span><span class="mf">46.87916</span><span class="p">,</span> <span class="o">-</span><span class="mf">3.3291</span><span class="p">),</span>
  <span class="na">mapTypeId</span><span class="p">:</span> <span class="dl">"</span><span class="s2">terrain</span><span class="dl">"</span><span class="p">,</span>
<span class="p">&#125;;</span>
<span class="nx">map</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">google</span><span class="p">.</span><span class="nx">maps</span><span class="p">.</span><span class="nc">Map</span><span class="p">(</span><span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#map</span><span class="dl">"</span><span class="p">)[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">myOptions</span><span class="p">);</span>
<span class="kd">var</span> <span class="nx">markers</span> <span class="o">=</span> <span class="p">[];</span>

<span class="c1">// Add a listener for idle event and call getElevation on a random set of marker in the bound</span>
<span class="nx">google</span><span class="p">.</span><span class="nx">maps</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nf">addListener</span><span class="p">(</span><span class="nx">map</span><span class="p">,</span> <span class="dl">"</span><span class="s2">idle</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
  <span class="c1">// Create an ElevationService</span>
  <span class="nx">elevator</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">google</span><span class="p">.</span><span class="nx">maps</span><span class="p">.</span><span class="nc">ElevationService</span><span class="p">();</span>
  <span class="nx">$</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nx">markers</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">value</span><span class="p">.</span><span class="nf">setMap</span><span class="p">(</span><span class="kc">null</span><span class="p">);</span>
  <span class="p">&#125;);</span>
  <span class="c1">// getting bounds of current location</span>
  <span class="kd">var</span> <span class="nx">boundBox</span> <span class="o">=</span> <span class="nx">map</span><span class="p">.</span><span class="nf">getBounds</span><span class="p">();</span>
  <span class="kd">var</span> <span class="nx">southWest</span> <span class="o">=</span> <span class="nx">boundBox</span><span class="p">.</span><span class="nf">getSouthWest</span><span class="p">();</span>
  <span class="kd">var</span> <span class="nx">northEast</span> <span class="o">=</span> <span class="nx">boundBox</span><span class="p">.</span><span class="nf">getNorthEast</span><span class="p">();</span>
  <span class="kd">var</span> <span class="nx">lngSpan</span> <span class="o">=</span> <span class="nx">northEast</span><span class="p">.</span><span class="nf">lng</span><span class="p">()</span> <span class="o">-</span> <span class="nx">southWest</span><span class="p">.</span><span class="nf">lng</span><span class="p">();</span>
  <span class="kd">var</span> <span class="nx">latSpan</span> <span class="o">=</span> <span class="nx">northEast</span><span class="p">.</span><span class="nf">lat</span><span class="p">()</span> <span class="o">-</span> <span class="nx">southWest</span><span class="p">.</span><span class="nf">lat</span><span class="p">();</span>
  <span class="c1">// adding 20 markers to the map at random locations</span>
  <span class="kd">var</span> <span class="nx">locations</span> <span class="o">=</span> <span class="p">[];</span>
  <span class="k">for </span><span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="mi">10</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">location</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">google</span><span class="p">.</span><span class="nx">maps</span><span class="p">.</span><span class="nc">LatLng</span><span class="p">(</span>
      <span class="nx">southWest</span><span class="p">.</span><span class="nf">lat</span><span class="p">()</span> <span class="o">+</span> <span class="nx">latSpan</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">random</span><span class="p">(),</span>
      <span class="nx">southWest</span><span class="p">.</span><span class="nf">lng</span><span class="p">()</span> <span class="o">+</span> <span class="nx">lngSpan</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nf">random</span><span class="p">(),</span>
    <span class="p">);</span>
    <span class="nx">locations</span><span class="p">.</span><span class="nf">push</span><span class="p">(</span><span class="nx">location</span><span class="p">);</span>
  <span class="p">&#125;</span>

  <span class="c1">// Create a LocationElevationRequest object using the array's one value</span>
  <span class="kd">var</span> <span class="nx">positionalRequest</span> <span class="o">=</span> <span class="p">&#123;</span>
    <span class="na">locations</span><span class="p">:</span> <span class="nx">locations</span><span class="p">,</span>
  <span class="p">&#125;;</span>

  <span class="nx">elevator</span><span class="p">.</span><span class="nf">getElevationForLocations</span><span class="p">(</span>
    <span class="nx">positionalRequest</span><span class="p">,</span>
    <span class="nf">function </span><span class="p">(</span><span class="nx">results</span><span class="p">,</span> <span class="nx">status</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="k">if </span><span class="p">(</span><span class="nx">status</span> <span class="o">===</span> <span class="nx">google</span><span class="p">.</span><span class="nx">maps</span><span class="p">.</span><span class="nx">ElevationStatus</span><span class="p">.</span><span class="nx">OK</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">$</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="nx">results</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">&#123;</span>
          <span class="k">if </span><span class="p">(</span><span class="nx">value</span><span class="p">.</span><span class="nx">elevation</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">&#123;</span>
            <span class="nx">markers</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">google</span><span class="p">.</span><span class="nx">maps</span><span class="p">.</span><span class="nc">Marker</span><span class="p">(&#123;</span>
              <span class="na">position</span><span class="p">:</span> <span class="nx">value</span><span class="p">.</span><span class="nx">location</span><span class="p">,</span>
              <span class="na">map</span><span class="p">:</span> <span class="nx">map</span><span class="p">,</span>
              <span class="na">icon</span><span class="p">:</span> <span class="dl">"</span><span class="s2">http://google-maps-icons.googlecode.com/files/sailboat-tourism.png</span><span class="dl">"</span><span class="p">,</span>
            <span class="p">&#125;);</span>
          <span class="p">&#125;</span> <span class="k">else</span> <span class="p">&#123;</span>
            <span class="nx">markers</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">google</span><span class="p">.</span><span class="nx">maps</span><span class="p">.</span><span class="nc">Marker</span><span class="p">(&#123;</span>
              <span class="na">position</span><span class="p">:</span> <span class="nx">value</span><span class="p">.</span><span class="nx">location</span><span class="p">,</span>
              <span class="na">map</span><span class="p">:</span> <span class="nx">map</span><span class="p">,</span>
              <span class="na">icon</span><span class="p">:</span>
                <span class="dl">"</span><span class="s2">http://google-maps-icons.googlecode.com/files/red</span><span class="dl">"</span> <span class="o">+</span>
                <span class="p">(</span><span class="dl">"</span><span class="s2">0</span><span class="dl">"</span> <span class="o">+</span> <span class="nx">key</span><span class="p">.</span><span class="nf">toString</span><span class="p">()).</span><span class="nf">slice</span><span class="p">(</span><span class="o">-</span><span class="mi">2</span><span class="p">)</span> <span class="o">+</span>
                <span class="dl">"</span><span class="s2">.png</span><span class="dl">"</span><span class="p">,</span>
            <span class="p">&#125;);</span>
          <span class="p">&#125;</span>
        <span class="p">&#125;);</span>
      <span class="p">&#125;</span>
    <span class="p">&#125;,</span>
  <span class="p">);</span>
<span class="p">&#125;);</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/w4E9D/">original jsfiddle post</a></p>
