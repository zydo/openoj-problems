# Smallest String Reachable by Swaps

## Description

You are given a string `s` of lowercase letters and a list of `pairs` of
positions into it, each entry `[a, b]` naming two positions. You may swap the
letters at any listed pair of positions, as often as you like, in any order.

Return the lexicographically smallest string the swaps can bring about.

### Example 1

```text
Input: s = "zdca", pairs = [[0,2],[1,3]]
Output: "cazd"
Explanation: Positions 0 and 2 trade their letters (z and c), and so do
positions 1 and 3 (d and a): "cazd".
```

### Example 2

```text
Input: s = "zdca", pairs = [[0,2],[1,3],[2,3]]
Output: "acdz"
Explanation: The extra pair links both groups into one, so all four letters
can be rearranged freely — and sorted, "acdz", is as small as they get.
```

### Example 3

```text
Input: s = "topaz", pairs = [[0,1],[1,2]]
Output: "optaz"
Explanation: The chain 0–1–2 makes the first three positions interchangeable,
so t, o, p sort into o, p, t; a and z sit in no pair and stay put.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `0 <= pairs.length <= 10⁵`
- every entry names two positions of `s`
- `s` contains lowercase English letters only

## Hints

### Hint 1

Draw each pair as an edge between two positions; swaps then flow along paths,
not just single edges.

### Hint 2

Follow the chain: if positions `a` and `b` can trade, and `b` and `c` can
trade, then the letters at `a` and `c` can trade too, by way of `b`. What does
one connected cluster of positions end up holding?

### Hint 3

Within one cluster the letters are fixed as a multiset but free as an
arrangement, so the smallest reachable string sorts each cluster's letters
into its own positions, smallest to smallest.
