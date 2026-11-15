---
title: "jsfiddle / pjsdh7qb"
date: "2020-08-06T03:28:44.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css","noise"]
permalink: "/post/jsfiddle-pjsdh7qb/"
source_id: "pjsdh7qb"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/pjsdh7qb/72/"
source_revision: 72
---
<iframe class="code-demo" src="{{ '/content/media/2020/2020-08-06-jsfiddle-pjsdh7qb-demo.html' | relative_url }}" title="jsfiddle / pjsdh7qb" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<h2>html</h2>
<pre class="highlight"><code class="language-html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"SearchHelp"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"icon"</span><span class="nt">&gt;&lt;b&gt;</span>[<span class="nt">&lt;/b&gt;&lt;i&gt;</span>key<span class="nt">&lt;/i&gt;</span> <span class="nt">&lt;i&gt;</span>words<span class="nt">&lt;/i&gt;&lt;b&gt;</span>]<span class="nt">&lt;/b&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"content"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;h1&gt;</span>Basics<span class="nt">&lt;/h1&gt;</span>
      <span class="nt">&lt;p&gt;</span>
        The simplest way to search Emergency INDEX is to just enter a keyword in
        the text box above
        <span class="nt">&lt;span</span> <span class="na">role=</span><span class="s">"img"</span> <span class="na">aria-label=</span><span class="s">"pointing finger up"</span><span class="nt">&gt;</span> ☝ <span class="nt">&lt;/span&gt;</span>
      <span class="nt">&lt;/p&gt;</span>
      <span class="nt">&lt;p&gt;</span>
        <span class="nt">&lt;b&gt;</span>example:<span class="nt">&lt;/b&gt;</span> <span class="nt">&lt;b</span> <span class="na">class=</span><span class="s">"q"</span><span class="nt">&gt;</span>dance<span class="nt">&lt;/b&gt;</span> will find projects that contain
        the keyword <span class="nt">&lt;i&gt;</span>dance<span class="nt">&lt;/i&gt;</span>.
      <span class="nt">&lt;/p&gt;</span>
      <span class="nt">&lt;h2&gt;</span>multiple keywords<span class="nt">&lt;/h2&gt;</span>
      <span class="nt">&lt;p&gt;</span>
        <span class="nt">&lt;b&gt;</span>example:<span class="nt">&lt;/b&gt;</span> <span class="nt">&lt;b</span> <span class="na">class=</span><span class="s">"q"</span><span class="nt">&gt;</span>dance noise<span class="nt">&lt;/b&gt;</span> will find projects that
        contain the keyword <span class="nt">&lt;i&gt;</span>dance<span class="nt">&lt;/i&gt;</span> OR contain the keyword <span class="nt">&lt;i&gt;</span>noise<span class="nt">&lt;/i&gt;</span>.
      <span class="nt">&lt;/p&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>

  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"icon"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;b&gt;</span>[<span class="nt">&lt;/b&gt;</span>
      +<span class="nt">&lt;i&gt;</span>present<span class="nt">&lt;/i&gt;</span>
      <span class="nt">&lt;i&gt;</span>-absent<span class="nt">&lt;/i&gt;</span>
      <span class="nt">&lt;b&gt;</span>]<span class="nt">&lt;/b&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"content"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;h1&gt;</span>Term Presence<span class="nt">&lt;/h1&gt;</span>
      <span class="nt">&lt;p&gt;</span>
        To indicate that the keyword must be present it should be prefixed with
        a plus (<span class="nt">&lt;b&gt;</span>+<span class="nt">&lt;/b&gt;</span>) and to indicate that a keyword must be absent then it
        should be prefixed with a minus (<span class="nt">&lt;b&gt;</span>-<span class="nt">&lt;/b&gt;</span>). Without either <span class="nt">&lt;b&gt;</span>+<span class="nt">&lt;/b&gt;</span> or
        <span class="nt">&lt;b&gt;</span>-<span class="nt">&lt;/b&gt;</span> the term will be optional.
      <span class="nt">&lt;/p&gt;</span>
      <span class="nt">&lt;p&gt;</span>
        <span class="nt">&lt;b&gt;</span>example:<span class="nt">&lt;/b&gt;</span> <span class="nt">&lt;b</span> <span class="na">class=</span><span class="s">"q"</span><span class="nt">&gt;</span>+dance +noise -duration<span class="nt">&lt;/b&gt;</span> will find
        projects that contain the term <span class="nt">&lt;i&gt;</span>dance<span class="nt">&lt;/i&gt;</span> AND <span class="nt">&lt;i&gt;</span>noise<span class="nt">&lt;/i&gt;</span> but will
        not include any projects that contain the term <span class="nt">&lt;i&gt;</span>duration<span class="nt">&lt;/i&gt;</span>.
      <span class="nt">&lt;/p&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>

  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"icon"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;b&gt;</span>[<span class="nt">&lt;/b&gt;</span>
      *
      <span class="nt">&lt;b&gt;</span>]<span class="nt">&lt;/b&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"content"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;h1&gt;</span>Wildcards<span class="nt">&lt;/h1&gt;</span>
      <span class="nt">&lt;p&gt;</span>
        Represented as an asterisk (<span class="nt">&lt;b&gt;</span>*<span class="nt">&lt;/b&gt;</span>) that can appear anywhere in the
        keyword.
      <span class="nt">&lt;/p&gt;</span>
      <span class="nt">&lt;p&gt;</span>
        <span class="nt">&lt;b&gt;</span>example:<span class="nt">&lt;/b&gt;</span> <span class="nt">&lt;b</span> <span class="na">class=</span><span class="s">"q"</span><span class="nt">&gt;</span>key*<span class="nt">&lt;/b&gt;</span> will find projects that contain a
        keyword that starts with <span class="nt">&lt;i&gt;</span>key<span class="nt">&lt;/i&gt;</span> (e.g. <span class="nt">&lt;i&gt;</span>keyword<span class="nt">&lt;/i&gt;</span> or
        <span class="nt">&lt;i&gt;</span>keyring<span class="nt">&lt;/i&gt;</span>).
      <span class="nt">&lt;/p&gt;</span>
      <span class="nt">&lt;p&gt;</span>
        <span class="nt">&lt;b&gt;</span>example:<span class="nt">&lt;/b&gt;</span> <span class="nt">&lt;b</span> <span class="na">class=</span><span class="s">"q"</span><span class="nt">&gt;</span>*key*<span class="nt">&lt;/b&gt;</span> will find projects that contain a
        keyword that contains <span class="nt">&lt;i&gt;</span>key<span class="nt">&lt;/i&gt;</span> anywhere. (e.g. <span class="nt">&lt;i&gt;</span>keyword<span class="nt">&lt;/i&gt;</span> or
        <span class="nt">&lt;i&gt;</span>keyring<span class="nt">&lt;/i&gt;</span> or <span class="nt">&lt;i&gt;</span>monkey<span class="nt">&lt;/i&gt;</span> or <span class="nt">&lt;i&gt;</span>cockeyed<span class="nt">&lt;/i&gt;</span> etc.).
      <span class="nt">&lt;/p&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>

  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"icon"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;b&gt;</span>[<span class="nt">&lt;/b&gt;</span>
      <span class="nt">&lt;i&gt;</span>field: keyword<span class="nt">&lt;/i&gt;</span>
      <span class="nt">&lt;b&gt;</span>]<span class="nt">&lt;/b&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"content"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;h1&gt;</span>Fields<span class="nt">&lt;/h1&gt;</span>
      <span class="nt">&lt;p&gt;</span>
        Prefix the search keyword with a name of a filed followed by a colon
        (<span class="nt">&lt;b&gt;</span>:<span class="nt">&lt;/b&gt;</span>) to find projects that contain the keyword for a specific
        field.
      <span class="nt">&lt;/p&gt;</span>
      <span class="nt">&lt;h2&gt;</span>Available fields<span class="nt">&lt;/h2&gt;</span>
      <span class="nt">&lt;table&gt;</span>
        <span class="nt">&lt;thead&gt;</span>
          <span class="nt">&lt;tr&gt;</span>
            <span class="nt">&lt;td&gt;</span>field<span class="nt">&lt;/td&gt;</span>
            <span class="nt">&lt;td&gt;</span>description<span class="nt">&lt;/td&gt;</span>
          <span class="nt">&lt;/tr&gt;</span>
        <span class="nt">&lt;/thead&gt;</span>
        <span class="nt">&lt;tbody&gt;</span>
          <span class="nt">&lt;tr&gt;</span>
            <span class="nt">&lt;td&gt;</span>contributor<span class="nt">&lt;/td&gt;</span>
            <span class="nt">&lt;td&gt;</span>The name(s) of the creator(s) or group<span class="nt">&lt;/td&gt;</span>
          <span class="nt">&lt;/tr&gt;</span>
          <span class="nt">&lt;tr&gt;</span>
            <span class="nt">&lt;td&gt;</span>title<span class="nt">&lt;/td&gt;</span>
            <span class="nt">&lt;td&gt;&lt;/td&gt;</span>
          <span class="nt">&lt;/tr&gt;</span>
          <span class="nt">&lt;tr&gt;</span>
            <span class="nt">&lt;td&gt;</span>content<span class="nt">&lt;/td&gt;</span>
            <span class="nt">&lt;td&gt;</span>The contributor's description of the performance<span class="nt">&lt;/td&gt;</span>
          <span class="nt">&lt;/tr&gt;</span>

          <span class="nt">&lt;tr&gt;</span>
            <span class="nt">&lt;td&gt;</span>place<span class="nt">&lt;/td&gt;</span>
            <span class="nt">&lt;td&gt;</span>
              Venue, City, Country (or state) where the first performance
              occurred
            <span class="nt">&lt;/td&gt;</span>
          <span class="nt">&lt;/tr&gt;</span>
          <span class="nt">&lt;tr&gt;</span>
            <span class="nt">&lt;td&gt;</span>collaborators<span class="nt">&lt;/td&gt;</span>
            <span class="nt">&lt;td&gt;</span>Names(s) of Other Key Collaborators<span class="nt">&lt;/td&gt;</span>
          <span class="nt">&lt;/tr&gt;</span>
          <span class="nt">&lt;tr&gt;</span>
            <span class="nt">&lt;td&gt;</span>home<span class="nt">&lt;/td&gt;</span>
            <span class="nt">&lt;td&gt;</span>
              Where are the creators based. City, State (if in the US), and
              Country (if outside of the US).
            <span class="nt">&lt;/td&gt;</span>
          <span class="nt">&lt;/tr&gt;</span>
          <span class="nt">&lt;tr&gt;</span>
            <span class="nt">&lt;td&gt;</span>tags<span class="nt">&lt;/td&gt;</span>
            <span class="nt">&lt;td&gt;</span>Terms that the Emergency INDEX editors tagged the project<span class="nt">&lt;/td&gt;</span>
          <span class="nt">&lt;/tr&gt;</span>
          <span class="nt">&lt;tr&gt;</span>
            <span class="nt">&lt;td&gt;</span>volume<span class="nt">&lt;/td&gt;</span>
            <span class="nt">&lt;td&gt;</span>
              The year (annual volume) the project took place (e.g. <span class="nt">&lt;i&gt;</span>2013<span class="nt">&lt;/i&gt;</span>)
            <span class="nt">&lt;/td&gt;</span>
          <span class="nt">&lt;/tr&gt;</span>

          <span class="c">&lt;!-- &lt;tr&gt;
          &lt;td&gt;first_performed&lt;/td&gt;
          &lt;td&gt;Date when first performed&lt;/td&gt;
        &lt;/tr&gt; --&gt;</span>
        <span class="nt">&lt;/tbody&gt;</span>
      <span class="nt">&lt;/table&gt;</span>
      <span class="nt">&lt;p&gt;</span>
        <span class="nt">&lt;b&gt;</span>example:<span class="nt">&lt;/b&gt;</span> <span class="nt">&lt;b</span> <span class="na">class=</span><span class="s">"q"</span><span class="nt">&gt;</span>tags:body<span class="nt">&lt;/b&gt;</span> will find all the projects
        tagged with <span class="nt">&lt;i&gt;</span>body<span class="nt">&lt;/i&gt;</span>.
      <span class="nt">&lt;/p&gt;</span>
      <span class="nt">&lt;p&gt;</span>
        <span class="nt">&lt;b&gt;</span>example<span class="nt">&lt;/b&gt;</span> (requiring term presense):
        <span class="nt">&lt;b</span> <span class="na">class=</span><span class="s">"q"</span><span class="nt">&gt;</span>tags: body +tags:dance -volume:2011<span class="nt">&lt;/b&gt;</span> will find all the
        projects tagged with <span class="nt">&lt;i&gt;</span>body<span class="nt">&lt;/i&gt;</span> AND tagged with <span class="nt">&lt;i&gt;</span>dance<span class="nt">&lt;/i&gt;</span> but will
        not include any projects from Volume 2011.
      <span class="nt">&lt;/p&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</code></pre>
<h2>css</h2>
<pre class="highlight"><code class="language-css"><span class="nc">.SearchHelp</span> <span class="o">&gt;</span> <span class="nc">.row</span> <span class="p">&#123;</span>
  <span class="nl">display</span><span class="p">:</span> <span class="nb">flex</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.SearchHelp</span> <span class="o">&gt;</span> <span class="nc">.row</span> <span class="o">&gt;</span> <span class="nc">.icon</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">25vw</span><span class="p">;</span>
  <span class="nl">align-self</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
  <span class="nl">text-align</span><span class="p">:</span> <span class="nb">center</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.SearchHelp</span> <span class="o">&gt;</span> <span class="nc">.row</span> <span class="o">&gt;</span> <span class="nc">.icon</span> <span class="nt">i</span> <span class="p">&#123;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">1.25em</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.SearchHelp</span> <span class="o">&gt;</span> <span class="nc">.row</span> <span class="o">&gt;</span> <span class="nc">.icon</span> <span class="nt">b</span> <span class="p">&#123;</span>
  <span class="nl">font-size</span><span class="p">:</span> <span class="m">1.5em</span><span class="p">;</span>
  <span class="nl">margin</span><span class="p">:</span> <span class="m">0.5em</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.SearchHelp</span> <span class="o">&gt;</span> <span class="nc">.row</span> <span class="o">&gt;</span> <span class="nc">.content</span> <span class="p">&#123;</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">75vw</span><span class="p">;</span>
<span class="p">&#125;</span>

<span class="nc">.SearchHelp</span> <span class="o">&gt;</span> <span class="nc">.row</span> <span class="o">&gt;</span> <span class="nc">.content</span> <span class="nt">table</span> <span class="o">&gt;</span> <span class="nt">thead</span> <span class="o">&gt;</span> <span class="nt">tr</span> <span class="p">&#123;</span>
  <span class="nl">font-style</span><span class="p">:</span> <span class="nb">italic</span><span class="p">;</span>
  <span class="nl">border-bottom</span><span class="p">:</span> <span class="nb">thin</span> <span class="nb">solid</span> <span class="nx">#ddd</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.SearchHelp</span> <span class="o">&gt;</span> <span class="nc">.row</span> <span class="o">&gt;</span> <span class="nc">.content</span> <span class="nt">tbody</span> <span class="o">&gt;</span> <span class="nt">tr</span> <span class="o">&gt;</span> <span class="nt">td</span><span class="nd">:nth-child</span><span class="o">(</span><span class="err">1</span><span class="o">)</span> <span class="p">&#123;</span>
  <span class="nl">text-align</span><span class="p">:</span> <span class="nb">right</span><span class="p">;</span>
  <span class="nl">font-weight</span><span class="p">:</span> <span class="nb">bold</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.SearchHelp</span> <span class="o">&gt;</span> <span class="nc">.row</span> <span class="o">&gt;</span> <span class="nc">.content</span> <span class="nt">tr</span> <span class="o">&gt;</span> <span class="nt">td</span><span class="nd">:nth-child</span><span class="o">(</span><span class="err">2</span><span class="o">)</span> <span class="p">&#123;</span>
  <span class="nl">padding-left</span><span class="p">:</span> <span class="m">1em</span><span class="p">;</span>
<span class="p">&#125;</span>
<span class="nc">.SearchHelp</span> <span class="nc">.q</span> <span class="p">&#123;</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="nx">#ddd</span><span class="p">;</span>
  <span class="nl">color</span><span class="p">:</span> <span class="nx">#666</span><span class="p">;</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="m">1px.25em</span><span class="p">;</span>
<span class="p">&#125;</span>
</code></pre>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>
<p><a href="https://jsfiddle.net/edwardsharp/pjsdh7qb/72/">original jsfiddle post</a></p>
