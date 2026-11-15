---
title: "simple angular json request"
date: "2015-03-10T19:12:49.000Z"
date_precision: "second"
tags: ["jsfiddle","code","angularjs","html","javascript"]
permalink: "/post/jsfiddle-uep1d3j4/"
source_id: "uep1d3j4"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/uep1d3j4/"
source_revision: 5
---
<iframe class="code-demo" src="{{ '/content/media/2015/2015-03-10-jsfiddle-uep1d3j4-demo.html' | relative_url }}" title="simple angular json request" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p data-import-note="">an API key was removed from this archived example; some features need a replacement key.</p>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"http://momentjs.com/downloads/moment.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;div</span> <span class="na">ng-app=</span><span class="s">""</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">ng-controller=</span><span class="s">"FetchCtrl"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;button</span> <span class="na">ng-click=</span><span class="s">"updateModel('GET', 'http-hello.html')"</span><span class="nt">&gt;</span>Sample GET<span class="nt">&lt;/button&gt;</span>
    <span class="nt">&lt;button</span> <span class="na">ng-click=</span><span class="s">"updateModel('GET', googleCalUrl())"</span><span class="nt">&gt;</span>GoogleCal<span class="nt">&lt;/button&gt;</span>
    <span class="nt">&lt;button</span>
      <span class="na">ng-click=</span><span class="s">"updateModel('JSONP', 'http://angularjs.org/greet.php?callback=JSON_CALLBACK&amp;name=Super%20Hero')"</span>
    <span class="nt">&gt;</span>
      Sample JSONP
    <span class="nt">&lt;/button&gt;</span>
    <span class="nt">&lt;button</span>
      <span class="na">ng-click=</span><span class="s">"updateModel('JSONP', 'http://angularjs.org/doesntexist&amp;callback=JSON_CALLBACK')"</span>
    <span class="nt">&gt;</span>
      Invalid JSONP
    <span class="nt">&lt;/button&gt;</span>
    <span class="nt">&lt;br</span> <span class="nt">/&gt;</span>
    <span class="nt">&lt;select</span> <span class="na">ng-model=</span><span class="s">"method"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;option&gt;</span>GET<span class="nt">&lt;/option&gt;</span>
      <span class="nt">&lt;option&gt;</span>JSON<span class="nt">&lt;/option&gt;</span>
      <span class="nt">&lt;option&gt;</span>JSONP<span class="nt">&lt;/option&gt;</span>
    <span class="nt">&lt;/select&gt;</span>
    <span class="nt">&lt;br</span> <span class="nt">/&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">ng-model=</span><span class="s">"url"</span> <span class="na">size=</span><span class="s">"80"</span> <span class="nt">/&gt;</span>
    <span class="nt">&lt;button</span> <span class="na">ng-click=</span><span class="s">"fetch()"</span><span class="nt">&gt;</span>fetch<span class="nt">&lt;/button&gt;&lt;br</span> <span class="nt">/&gt;</span>

    <span class="nt">&lt;pre&gt;</span>http status code: &#123;&#123;status&#125;&#125;<span class="nt">&lt;/pre&gt;</span>
    <span class="nt">&lt;pre&gt;</span>http response data: &#123;&#123;data&#125;&#125;<span class="nt">&lt;/pre&gt;</span>
  <span class="nt">&lt;/div&gt;</span>

  <span class="c">&lt;!-- http-hello.html --&gt;</span>
  <span class="nt">&lt;script </span><span class="na">type=</span><span class="s">"text/ng-template"</span> <span class="na">id=</span><span class="s">"http-hello.html"</span><span class="nt">&gt;</span>
    <span class="nx">Hello</span><span class="p">,</span> <span class="nx">$http</span><span class="o">!</span> <span class="p">(</span><span class="k">in</span><span class="o">-</span><span class="nx">line</span> <span class="nx">templates</span> <span class="nx">r</span> <span class="nx">kool</span><span class="o">!</span><span class="p">)</span>
  <span class="nt">&lt;/script&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="kd">function</span> <span class="nf">FetchCtrl</span><span class="p">(</span><span class="nx">$scope</span><span class="p">,</span> <span class="nx">$http</span><span class="p">,</span> <span class="nx">$templateCache</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="nx">$scope</span><span class="p">.</span><span class="nx">method</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">JSONP</span><span class="dl">"</span><span class="p">;</span>
  <span class="nx">$scope</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">http://ec2-54-225-22-193.compute-1.amazonaws.com/api/search</span><span class="dl">"</span><span class="p">;</span>

  <span class="nx">$scope</span><span class="p">.</span><span class="nx">fetch</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="nx">$scope</span><span class="p">.</span><span class="nx">code</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
    <span class="nx">$scope</span><span class="p">.</span><span class="nx">response</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>

    <span class="nf">$http</span><span class="p">(&#123;</span> <span class="na">method</span><span class="p">:</span> <span class="nx">$scope</span><span class="p">.</span><span class="nx">method</span><span class="p">,</span> <span class="na">url</span><span class="p">:</span> <span class="nx">$scope</span><span class="p">.</span><span class="nx">url</span><span class="p">,</span> <span class="na">cache</span><span class="p">:</span> <span class="nx">$templateCache</span> <span class="p">&#125;)</span>
      <span class="p">.</span><span class="nf">success</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">status</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">$scope</span><span class="p">.</span><span class="nx">status</span> <span class="o">=</span> <span class="nx">status</span><span class="p">;</span>
        <span class="nx">$scope</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="nx">data</span><span class="p">;</span>
      <span class="p">&#125;)</span>
      <span class="p">.</span><span class="nf">error</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">status</span><span class="p">)</span> <span class="p">&#123;</span>
        <span class="nx">$scope</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="nx">data</span> <span class="o">||</span> <span class="dl">"</span><span class="s2">Request failed</span><span class="dl">"</span><span class="p">;</span>
        <span class="nx">$scope</span><span class="p">.</span><span class="nx">status</span> <span class="o">=</span> <span class="nx">status</span><span class="p">;</span>
      <span class="p">&#125;);</span>
  <span class="p">&#125;;</span>

  <span class="nx">$scope</span><span class="p">.</span><span class="nx">updateModel</span> <span class="o">=</span> <span class="nf">function </span><span class="p">(</span><span class="nx">method</span><span class="p">,</span> <span class="nx">url</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="nx">$scope</span><span class="p">.</span><span class="nx">method</span> <span class="o">=</span> <span class="nx">method</span><span class="p">;</span>
    <span class="nx">$scope</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">;</span>
  <span class="p">&#125;;</span>

  <span class="nx">$scope</span><span class="p">.</span><span class="nx">googleCalUrl</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">start_date</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">Date</span><span class="p">();</span>
    <span class="kd">var</span> <span class="nx">end_date</span> <span class="o">=</span> <span class="nf">moment</span><span class="p">(</span><span class="k">new</span> <span class="nc">Date</span><span class="p">(</span><span class="nx">start_date</span><span class="p">)).</span><span class="nf">add</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="dl">"</span><span class="s2">days</span><span class="dl">"</span><span class="p">);</span>
    <span class="kd">var</span> <span class="nx">cal_id</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">edward%40edwardsharp.net</span><span class="dl">"</span><span class="p">;</span>
    <span class="kd">var</span> <span class="nx">cal_api_key</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">REDACTED_API_KEY</span><span class="dl">"</span><span class="p">;</span>
    <span class="nx">console</span><span class="p">.</span><span class="nf">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">hey</span><span class="dl">"</span><span class="p">);</span>
    <span class="k">return </span><span class="p">(</span>
      <span class="dl">"</span><span class="s2">https://www.googleapis.com/calendar/v3/calendars/</span><span class="dl">"</span> <span class="o">+</span>
      <span class="nx">cal_id</span> <span class="o">+</span>
      <span class="dl">"</span><span class="s2">/events?singleEvents=true&amp;orderBy=startTime&amp;timeMin=</span><span class="dl">"</span> <span class="o">+</span>
      <span class="nx">start_date</span><span class="p">.</span><span class="nf">toISOString</span><span class="p">()</span> <span class="o">+</span>
      <span class="dl">"</span><span class="s2">&amp;timeMax=</span><span class="dl">"</span> <span class="o">+</span>
      <span class="nx">end_date</span><span class="p">.</span><span class="nf">toISOString</span><span class="p">()</span> <span class="o">+</span>
      <span class="dl">"</span><span class="s2">&amp;key=</span><span class="dl">"</span> <span class="o">+</span>
      <span class="nx">cal_api_key</span>
    <span class="p">);</span>
  <span class="p">&#125;;</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/uep1d3j4/">original jsfiddle post</a></p>
