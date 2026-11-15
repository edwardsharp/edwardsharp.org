---
title: "a mobile news reader"
description: "a jquery mobile news reader fetches headlines, updates an item count, and offers a refresh button."
date: "2012-09-06T20:39:49.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript","animation"]
permalink: "/post/jsfiddle-FYLHp/"
source_id: "FYLHp"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/FYLHp/"
source_revision: 0
---
<iframe class="code-demo" src="{{ '/content/media/2012/2012-09-06-jsfiddle-FYLHp-demo.html' | relative_url }}" title="jsfiddle / FYLHp" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"http://code.jquery.com/mobile/1.0a3/jquery.mobile-1.0a3.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;link</span>
  <span class="na">rel=</span><span class="s">"stylesheet"</span>
  <span class="na">href=</span><span class="s">"http://code.jquery.com/mobile/1.0a3/jquery.mobile-1.0a3.css"</span>
<span class="nt">/&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"http://ajax.microsoft.com/ajax/jquery.templates/beta1/jquery.tmpl.min.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://github.com/appendto/amplify/raw/master/core/amplify.core.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;div</span> <span class="na">data-role=</span><span class="s">"page"</span> <span class="na">id=</span><span class="s">"hackerNews"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">data-role=</span><span class="s">"header"</span> <span class="na">data-backbtn=</span><span class="s">"false"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;a</span> <span class="na">id=</span><span class="s">"btnRefresh"</span> <span class="na">href=</span><span class="s">"#"</span> <span class="na">data-icon=</span><span class="s">"refresh"</span><span class="nt">&gt;</span>Refresh<span class="nt">&lt;/a&gt;</span>
    <span class="nt">&lt;h1&gt;</span>
      Hacker News <span class="ni">&amp;nbsp;</span><span class="nt">&lt;span</span>
        <span class="na">id=</span><span class="s">"itemCount"</span>
        <span class="na">class=</span><span class="s">"count ui-btn-up-c ui-btn-corner-all"</span>
        <span class="nt">&gt;</span>0<span class="nt">&lt;/span</span>
      <span class="nt">&gt;</span>
    <span class="nt">&lt;/h1&gt;</span>
  <span class="nt">&lt;/div&gt;</span>

  <span class="nt">&lt;div</span> <span class="na">id=</span><span class="s">"content"</span> <span class="na">data-role=</span><span class="s">"content"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;ol</span> <span class="na">class=</span><span class="s">"newsList"</span> <span class="na">data-role=</span><span class="s">"listview"</span><span class="nt">&gt;&lt;/ol&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>

<span class="nt">&lt;script </span><span class="na">id=</span><span class="s">"newsItem"</span> <span class="na">type=</span><span class="s">"text/x-jquery-tmpl"</span><span class="nt">&gt;</span>
  <span class="o">&lt;</span><span class="nx">li</span> <span class="nx">data</span><span class="o">-</span><span class="nx">messageId</span><span class="o">=</span><span class="dl">"</span><span class="s2">$&#123;id&#125;</span><span class="dl">"</span> <span class="kd">class</span><span class="o">=</span><span class="dl">"</span><span class="s2">newsItem</span><span class="dl">"</span><span class="o">&gt;</span>
      <span class="o">&lt;</span><span class="nx">h3</span><span class="o">&gt;&lt;</span><span class="nx">a</span> <span class="nx">href</span><span class="o">=</span><span class="dl">"</span><span class="s2">$&#123;url&#125;</span><span class="dl">"</span><span class="o">&gt;</span><span class="nx">$</span><span class="p">&#123;</span><span class="nx">title</span><span class="p">&#125;</span><span class="o">&lt;</span><span class="sr">/a&gt;&lt;/</span><span class="nx">h3</span><span class="o">&gt;</span>
      <span class="o">&lt;</span><span class="nx">p</span> <span class="kd">class</span><span class="o">=</span><span class="dl">"</span><span class="s2">subItem</span><span class="dl">"</span><span class="o">&gt;&lt;</span><span class="nx">strong</span><span class="o">&gt;</span><span class="nx">$</span><span class="p">&#123;</span><span class="nx">postedAgo</span><span class="p">&#125;</span> <span class="nx">by</span> <span class="nx">$</span><span class="p">&#123;</span><span class="nx">postedBy</span><span class="p">&#125;</span> <span class="o">&lt;</span><span class="sr">/strong&gt;&lt;/</span><span class="nx">p</span><span class="o">&gt;</span>
      <span class="o">&lt;</span><span class="nx">div</span> <span class="kd">class</span><span class="o">=</span><span class="dl">"</span><span class="s2">ui-li-aside</span><span class="dl">"</span><span class="o">&gt;</span>
          <span class="o">&lt;</span><span class="nx">p</span><span class="o">&gt;&lt;</span><span class="nx">strong</span><span class="o">&gt;</span><span class="nx">$</span><span class="p">&#123;</span><span class="nx">points</span><span class="p">&#125;</span> <span class="nx">points</span><span class="o">&lt;</span><span class="sr">/strong&gt;&lt;/</span><span class="nx">p</span><span class="o">&gt;</span>
          <span class="o">&lt;</span><span class="nx">p</span><span class="o">&gt;</span><span class="nx">$</span><span class="p">&#123;</span><span class="nx">commentCount</span><span class="p">&#125;</span> <span class="nx">comments</span><span class="o">&lt;</span><span class="sr">/p</span><span class="err">&gt;
</span>      <span class="o">&lt;</span><span class="sr">/div</span><span class="err">&gt;
</span>  <span class="o">&lt;</span><span class="sr">/li</span><span class="err">&gt;
</span><span class="nt">&lt;/script&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nc">.count</span> <span class="p">&#123;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">11px</span><span class="p">;</span>
  <span class="nl">font-weight</span><span class="p">:</span> <span class="nb">bold</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">0.2em</span> <span class="m">0.5em</span><span class="p">;</span>
  <span class="nl">top</span><span class="p">:</span> <span class="m">50%</span><span class="p">;</span>
  <span class="nl">margin-top</span><span class="p">:</span> <span class="m">-1em</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.ui-li-aside</span> <span class="p">&#123;</span>
  <span class="nl">float</span><span class="p">:</span> <span class="nb">right</span><span class="p">;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">50%</span><span class="p">;</span>
  <span class="nl">text-align</span><span class="p">:</span> <span class="nb">right</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">1.4em</span> <span class="m">0px</span> <span class="m">0px</span> <span class="m">0px</span> <span class="cp">!important</span><span class="p">;</span>
  <span class="nl">position</span><span class="p">:</span> <span class="nb">absolute</span><span class="p">;</span>
  <span class="nl">right</span><span class="p">:</span> <span class="m">25px</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.ui-li-heading</span><span class="o">,</span>
<span class="nc">.ui-li-desc</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">90%</span><span class="p">;</span>
  <span class="nl">text-overflow</span><span class="p">:</span> <span class="n">ellipsis</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nt">strong</span> <span class="p">&#123;</span>
  <span class="nl">font-style</span><span class="p">:</span> <span class="nb">bold</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<h2>javascript</h2>
<pre class="highlight"><code class="language-javascript"><span class="kd">var</span> <span class="nx">hackerNews</span> <span class="o">=</span> <span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">$</span><span class="p">,</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">&#123;</span>
  <span class="kd">var</span> <span class="nx">pub</span> <span class="o">=</span> <span class="p">&#123;&#125;;</span>

  <span class="nx">pub</span><span class="p">.</span><span class="nx">init</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="c1">//Refresh news when btnRefresh is clicked</span>
    <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#btnRefresh</span><span class="dl">"</span><span class="p">).</span><span class="nf">live</span><span class="p">(</span><span class="dl">"</span><span class="s2">click</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="nx">pub</span><span class="p">.</span><span class="nf">getAndDisplayNews</span><span class="p">();</span>
    <span class="p">&#125;);</span>

    <span class="c1">//When news updated, display items in list</span>
    <span class="nx">amplify</span><span class="p">.</span><span class="nf">subscribe</span><span class="p">(</span><span class="dl">"</span><span class="s2">news.updated</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">news</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nf">displayNews</span><span class="p">(</span><span class="nx">news</span><span class="p">);</span>
    <span class="p">&#125;);</span>

    <span class="c1">//When news updated, then set item count</span>
    <span class="nx">amplify</span><span class="p">.</span><span class="nf">subscribe</span><span class="p">(</span><span class="dl">"</span><span class="s2">news.updated</span><span class="dl">"</span><span class="p">,</span> <span class="nf">function </span><span class="p">(</span><span class="nx">news</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#itemCount</span><span class="dl">"</span><span class="p">).</span><span class="nf">text</span><span class="p">(</span><span class="nx">news</span><span class="p">.</span><span class="nx">items</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span>
    <span class="p">&#125;);</span>
  <span class="p">&#125;;</span>

  <span class="nx">pub</span><span class="p">.</span><span class="nx">getAndDisplayNews</span> <span class="o">=</span> <span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="c1">//Starting loading animation</span>
    <span class="nx">$</span><span class="p">.</span><span class="nx">mobile</span><span class="p">.</span><span class="nf">pageLoading</span><span class="p">();</span>

    <span class="c1">//Get news and add success callback using then</span>
    <span class="nf">getNews</span><span class="p">().</span><span class="nf">then</span><span class="p">(</span><span class="nf">function </span><span class="p">()</span> <span class="p">&#123;</span>
      <span class="c1">//Stop loading animation on success</span>
      <span class="nx">$</span><span class="p">.</span><span class="nx">mobile</span><span class="p">.</span><span class="nf">pageLoading</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span>
    <span class="p">&#125;);</span>
  <span class="p">&#125;;</span>

  <span class="kd">function</span> <span class="nf">getNews</span><span class="p">()</span> <span class="p">&#123;</span>
    <span class="c1">//Get news via ajax and return jqXhr</span>
    <span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nf">ajax</span><span class="p">(&#123;</span>
      <span class="na">url</span><span class="p">:</span> <span class="dl">"</span><span class="s2">http://api.ihackernews.com/page?format=jsonp</span><span class="dl">"</span><span class="p">,</span>
      <span class="na">dataType</span><span class="p">:</span> <span class="dl">"</span><span class="s2">jsonp</span><span class="dl">"</span><span class="p">,</span>
    <span class="p">&#125;).</span><span class="nf">then</span><span class="p">(</span><span class="nf">function </span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">textStatus</span><span class="p">,</span> <span class="nx">jqXHR</span><span class="p">)</span> <span class="p">&#123;</span>
      <span class="c1">//Publish that news has been updated &amp; allow</span>
      <span class="c1">//the 2 subscribers to update the UI content</span>
      <span class="nx">amplify</span><span class="p">.</span><span class="nf">publish</span><span class="p">(</span><span class="dl">"</span><span class="s2">news.updated</span><span class="dl">"</span><span class="p">,</span> <span class="nx">data</span><span class="p">);</span>
    <span class="p">&#125;);</span>
  <span class="p">&#125;</span>

  <span class="kd">function</span> <span class="nf">displayNews</span><span class="p">(</span><span class="nx">news</span><span class="p">)</span> <span class="p">&#123;</span>
    <span class="kd">var</span> <span class="nx">newsList</span> <span class="o">=</span> <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#hackerNews</span><span class="dl">"</span><span class="p">).</span><span class="nf">find</span><span class="p">(</span><span class="dl">"</span><span class="s2">.newsList</span><span class="dl">"</span><span class="p">);</span>

    <span class="c1">//Empty current list</span>
    <span class="nx">newsList</span><span class="p">.</span><span class="nf">empty</span><span class="p">();</span>

    <span class="c1">//Use template to create items &amp; add to list</span>
    <span class="nf">$</span><span class="p">(</span><span class="dl">"</span><span class="s2">#newsItem</span><span class="dl">"</span><span class="p">).</span><span class="nf">tmpl</span><span class="p">(</span><span class="nx">news</span><span class="p">.</span><span class="nx">items</span><span class="p">).</span><span class="nf">appendTo</span><span class="p">(</span><span class="nx">newsList</span><span class="p">);</span>

    <span class="c1">//Call the listview jQuery UI Widget after adding</span>
    <span class="c1">//items to the list allowing correct rendering</span>
    <span class="nx">newsList</span><span class="p">.</span><span class="nf">listview</span><span class="p">(</span><span class="dl">"</span><span class="s2">refresh</span><span class="dl">"</span><span class="p">);</span>
  <span class="p">&#125;</span>

  <span class="k">return</span> <span class="nx">pub</span><span class="p">;</span>
<span class="p">&#125;)(</span><span class="nx">jQuery</span><span class="p">);</span>

<span class="nx">hackerNews</span><span class="p">.</span><span class="nf">init</span><span class="p">();</span>
<span class="nx">hackerNews</span><span class="p">.</span><span class="nf">getAndDisplayNews</span><span class="p">();</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/FYLHp/">original jsfiddle post</a></p>
