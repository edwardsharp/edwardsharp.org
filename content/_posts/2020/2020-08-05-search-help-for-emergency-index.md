---
kind: "code"
title: "search help for emergency index"
date: "2020-08-06T03:28:44.000Z"
date_precision: "second"
description: "a search-help layout for emergency index, with examples arranged beside oversized query symbols."
source: "https://jsfiddle.net/edwardsharp/pjsdh7qb/72/"
tags: ["jsfiddle","code","html","css","noise"]
---

<iframe class="code-demo" src="{{ '/content/media/2020/2020-08-05-search-help-for-emergency-index-demo.html' | relative_url }}" title="jsfiddle / pjsdh7qb" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<div class="SearchHelp">
  <div class="row">
    <div class="icon"><b>[</b><i>key</i> <i>words</i><b>]</b></div>
    <div class="content">
      <h1>Basics</h1>
      <p>
        The simplest way to search Emergency INDEX is to just enter a keyword in
        the text box above
        <span role="img" aria-label="pointing finger up"> ☝ </span>
      </p>
      <p>
        <b>example:</b> <b class="q">dance</b> will find projects that contain
        the keyword <i>dance</i>.
      </p>
      <h2>multiple keywords</h2>
      <p>
        <b>example:</b> <b class="q">dance noise</b> will find projects that
        contain the keyword <i>dance</i> OR contain the keyword <i>noise</i>.
      </p>
    </div>
  </div>

  <div class="row">
    <div class="icon">
      <b>[</b>
      +<i>present</i>
      <i>-absent</i>
      <b>]</b>
    </div>
    <div class="content">
      <h1>Term Presence</h1>
      <p>
        To indicate that the keyword must be present it should be prefixed with
        a plus (<b>+</b>) and to indicate that a keyword must be absent then it
        should be prefixed with a minus (<b>-</b>). Without either <b>+</b> or
        <b>-</b> the term will be optional.
      </p>
      <p>
        <b>example:</b> <b class="q">+dance +noise -duration</b> will find
        projects that contain the term <i>dance</i> AND <i>noise</i> but will
        not include any projects that contain the term <i>duration</i>.
      </p>
    </div>
  </div>

  <div class="row">
    <div class="icon">
      <b>[</b>
      *
      <b>]</b>
    </div>
    <div class="content">
      <h1>Wildcards</h1>
      <p>
        Represented as an asterisk (<b>*</b>) that can appear anywhere in the
        keyword.
      </p>
      <p>
        <b>example:</b> <b class="q">key*</b> will find projects that contain a
        keyword that starts with <i>key</i> (e.g. <i>keyword</i> or
        <i>keyring</i>).
      </p>
      <p>
        <b>example:</b> <b class="q">*key*</b> will find projects that contain a
        keyword that contains <i>key</i> anywhere. (e.g. <i>keyword</i> or
        <i>keyring</i> or <i>monkey</i> or <i>cockeyed</i> etc.).
      </p>
    </div>
  </div>

  <div class="row">
    <div class="icon">
      <b>[</b>
      <i>field: keyword</i>
      <b>]</b>
    </div>
    <div class="content">
      <h1>Fields</h1>
      <p>
        Prefix the search keyword with a name of a filed followed by a colon
        (<b>:</b>) to find projects that contain the keyword for a specific
        field.
      </p>
      <h2>Available fields</h2>
      <table>
        <thead>
          <tr>
            <td>field</td>
            <td>description</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>contributor</td>
            <td>The name(s) of the creator(s) or group</td>
          </tr>
          <tr>
            <td>title</td>
            <td></td>
          </tr>
          <tr>
            <td>content</td>
            <td>The contributor's description of the performance</td>
          </tr>

          <tr>
            <td>place</td>
            <td>
              Venue, City, Country (or state) where the first performance
              occurred
            </td>
          </tr>
          <tr>
            <td>collaborators</td>
            <td>Names(s) of Other Key Collaborators</td>
          </tr>
          <tr>
            <td>home</td>
            <td>
              Where are the creators based. City, State (if in the US), and
              Country (if outside of the US).
            </td>
          </tr>
          <tr>
            <td>tags</td>
            <td>Terms that the Emergency INDEX editors tagged the project</td>
          </tr>
          <tr>
            <td>volume</td>
            <td>
              The year (annual volume) the project took place (e.g. <i>2013</i>)
            </td>
          </tr>

          <!-- <tr>
          <td>first_performed</td>
          <td>Date when first performed</td>
        </tr> -->
        </tbody>
      </table>
      <p>
        <b>example:</b> <b class="q">tags:body</b> will find all the projects
        tagged with <i>body</i>.
      </p>
      <p>
        <b>example</b> (requiring term presense):
        <b class="q">tags: body +tags:dance -volume:2011</b> will find all the
        projects tagged with <i>body</i> AND tagged with <i>dance</i> but will
        not include any projects from Volume 2011.
      </p>
    </div>
  </div>
</div>
```

## css

```css
.SearchHelp > .row {
  display: flex;
}

.SearchHelp > .row > .icon {
  width: 25vw;
  align-self: center;
  text-align: center;
}

.SearchHelp > .row > .icon i {
  font-size: 1.25em;
}

.SearchHelp > .row > .icon b {
  font-size: 1.5em;
  margin: 0.5em;
}

.SearchHelp > .row > .content {
  width: 75vw;
}

.SearchHelp > .row > .content table > thead > tr {
  font-style: italic;
  border-bottom: thin solid #ddd;
}
.SearchHelp > .row > .content tbody > tr > td:nth-child(1) {
  text-align: right;
  font-weight: bold;
}
.SearchHelp > .row > .content tr > td:nth-child(2) {
  padding-left: 1em;
}
.SearchHelp .q {
  background-color: #ddd;
  color: #666;
  padding: 1px.25em;
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/pjsdh7qb/72/)
