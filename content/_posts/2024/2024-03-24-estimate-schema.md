---
kind: "code"
title: "estimate-schema"
date: "2024-03-24T21:05:45.000Z"
date_precision: "second"
location_name: "nyc"
source: "https://github.com/edwardsharp/estimate-schema"
render_with_liquid: false
tags: ["typescript", "javascript", "fp", "zod"]
---

a fp-inspired utility for generating schema estimates with a bunch of sample input data. useful for generating zod (or similar) schemas.

## example

say some api (of Star-Trek characters, for example) returns data like:

```json
[
  { "name": "Geordi", "position": 3 },
  { "name": "Tasha", "position": 4 },
  { "name": "Q" }
]
```

run `node dist/cli.cjs example/trek.json` and then it will output an ideal object:

```json
{
  "name": {
    "__stats": {
      "sum": 3,
      "types": ["string"],
      "enums": { "values": ["Geordi", "Tasha", "Q"], "sum_uniq": 3 },
      "freq": 100
    }
  },
  "position": {
    "__stats": {
      "sum": 2,
      "types": ["number", "undefined"],
      "enums": { "values": [3, 4, null], "sum_uniq": 3 },
      "freq": 66
    }
  }
}
```

this ideal object would be a single object that has all the object keys as the input objects plus a `__stats` property with some helpful information that will guide the creation of a schema.

in the case here we see:

1. a `name` property that has `"freq": 100` which means it appeared in all example input, so it's not optional! it also has a single type `"types": ["string"],` of string.
2. a `position` property that has `"freq": 66`, so some objects from the api are missing this, so it's optional. it also appears to be a number type `"types": ["number", "undefined"],`.

so then a zod schema like this could be constructed:

```js
import { z } from "zod";

const trekSchema = z.array(
  z.object({
    name: z.string(),
    position: z.number().optional(),
  }),
);
```
