# Tally Rows by One Field

## Description

Each entry of the array `items` is a three-field row
`items[i] = [typei, colori, namei]` — an item's category, its color,
and its name, in that order. A query arrives as a pair of strings,
`ruleKey` and `ruleValue`, naming one field and the exact value that
field must hold.

An item satisfies the query when the named field equals `ruleValue`:

- `ruleKey == "type"` requires `typei == ruleValue`;
- `ruleKey == "color"` requires `colori == ruleValue`;
- `ruleKey == "name"` requires `namei == ruleValue`.

Only the field the query names is inspected; values sitting in the
other two fields are irrelevant, even if they happen to spell the same
string. Return how many items satisfy the query.

### Example 1

```text
Input: items = [["lamp","red","glow"],["chair","red","oak"],["lamp","green","glow"]], ruleKey = "type", ruleValue = "lamp"
Output: 2
Explanation: The first and third rows are lamps; the chair fails the
query even though its color is also a word in the catalog.
```

### Example 2

```text
Input: items = [["desk","oak","sturdy"],["shelf","steel","oak"]], ruleKey = "name", ruleValue = "oak"
Output: 1
Explanation: Only the shelf is named "oak". The desk has "oak" as its
color, but the query looks at names only.
```

### Example 3

```text
Input: items = [["pen","blue","ink"]], ruleKey = "color", ruleValue = "red"
Output: 0
Explanation: No item is red, so nothing matches.
```

### Constraints

- `1 <= items.length <= 10^4`
- `1 <= typei.length, colori.length, namei.length, ruleValue.length <= 10`
- `ruleKey` is one of `"type"`, `"color"`, `"name"`.
- Every string consists of lowercase letters only.

## Hints

### Hint 1

The query names exactly one of the three fixed fields, so decide once
— before scanning — which position of each row to compare, then count
the rows whose value at that position equals `ruleValue`.
