---
title: "collapse table col"
description: "clicking a table heading toggles the visibility of the cells in that column."
date: "2015-08-26T05:41:52.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","javascript"]
permalink: "/post/jsfiddle-ed8hca6b/"
source_id: "ed8hca6b"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/ed8hca6b/"
source_revision: 2
---

<iframe class="code-demo" src="{{ '/content/media/2015/2015-08-26-jsfiddle-ed8hca6b-demo.html' | relative_url }}" title="collapse table col" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<table id="tableone" border="1">
    <thead>
        <tr>
            <th>0</th>
            <th>1</th>
            <th>2</th>
        </tr>
    </thead>
    <tody>
    <tr class="del">
        <td>Row 0 Column 0</td>
        <td >Row 0 Column 1</td>
        <td >Row 0 Column 2</td>
    </tr>
    <tr class="del">
        <td>Row 1 Column 0</td>
        <td>Row 1 Column 1</td>
        <td>Row 1 Column 2</td>
    </tr>
    <tr class="del">
        <td>Row 2 Column 0</td>
        <td>Row 2 Column 1</td>
        <td>Row 2 Column 2</td>
    </tr>
    <tr class="del">
        <td>Row 3 Column 0</td>
        <td>Row 3 Column 1</td>
        <td>Row 3 Column 2</td>
    </tr>
     <tr class="del">
        <td>Row 4 Column 0</td>
        <td>Row 4 Column 1</td>
        <td>Row 4 Column 2</td>
    </tr>
     <tr class="del">
        <td>Row 5 Column 0</td>
        <td>Row 5 Column 1</td>
        <td>Row 5 Column 2</td>
    </tr>
    </tbody>
    
</table>
    <input id="btnHide" type="button" value="Hide Column 2"/>


</html>

 
```

<p data-import-note="">html snippet could not be formatted; original code is shown</p>

## javascript

```javascript
$(document).ready(function () {
  $("thead tr th").click(function () {
    var index = $(this).index() + 1;
    $("td:nth-child(" + index + ")").toggle();
    //$('td:nth-child(2),th:nth-child(2)').hide();
  });
});
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/ed8hca6b/)
