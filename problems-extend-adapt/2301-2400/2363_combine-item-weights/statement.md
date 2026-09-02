# Combine Item Weights

## Description

Two catalogs arrive as 2D integer arrays, `items1` and `items2`. Every
entry is a pair `[valuei, weighti]`: `valuei` identifies the item and
`weighti` is the weight recorded for it. Within one catalog each `valuei`
appears at most once, but the same value may show up in both catalogs.

Merge the two catalogs into one: for every distinct value, its weight in
the result is the total of all weights recorded for that value across
both catalogs. Return the merged entries as a 2D integer array `ret`
where `ret[i] = [valuei, weighti]`, sorted so the values ascend from
left to right.

### Example 1

```text
Input: items1 = [[2,7],[5,3]], items2 = [[2,4],[9,1]]
Output: [[2,11],[5,3],[9,1]]
Explanation: Value 2 is recorded in items1 with weight 7 and in items2
with weight 4, so it merges to 7 + 4 = 11. Value 5 appears only in
items1 and keeps weight 3; value 9 appears only in items2 and keeps
weight 1.
```

### Example 2

```text
Input: items1 = [[10,2],[6,8]], items2 = [[6,8],[10,2]]
Output: [[6,16],[10,4]]
Explanation: Both values occur in both catalogs: 6 totals 8 + 8 = 16,
and 10 totals 2 + 2 = 4.
```

### Example 3

```text
Input: items1 = [[4,1]], items2 = [[1,9],[4,2],[12,5]]
Output: [[1,9],[4,3],[12,5]]
Explanation: Value 4 is the only overlap: 1 from items1 plus 2 from
items2 gives 3. Values 1 and 12 come solely from items2 and pass
through unchanged.
```

### Constraints

- `1 <= items1.length, items2.length <= 1000`
- `items1[i].length == items2[i].length == 2`
- `1 <= valuei, weighti <= 1000`
- No value repeats within `items1`, and no value repeats within `items2`.

## Hints

### Hint 1

A map from value to running weight does the merging: walk both catalogs
and add every weight into the entry for its value.

### Hint 2

The result must be ordered by value, so sort the accumulated entries
before returning them.
