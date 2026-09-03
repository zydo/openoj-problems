# Widest Same-Group Gap

## Description

A collection of points lives on the plane: `points[i] = [xi, yi]` gives the
location of the ith one.

Measure any two of them with the Manhattan distance, the sum of the two
coordinate gaps: for `points[i] = [xi, yi]` and `points[j] = [xj, yj]` that
is `|xi - xj| + |yi - yj|`.

Your job is to deal all the points into two groups, each required to hold at
least one point. Once the deal is done, look inside each group and find the
closest pair it contains — measured, again, with the Manhattan distance. The
narrowest such closest pair across the two groups is the split's gap: a
group holding a single point has no pair to offer and places no limit.

Return the widest gap any split can achieve. With exactly two points the
deal is forced and neither group has a pair, so the answer is 0.

### Example 1

```text
Input: points = [[0,0],[6,0],[0,6],[6,6]]
Output: 12
Explanation: Group the points by diagonal — {[0,0],[6,6]} and
{[6,0],[0,6]}. Each group's only pair sits 12 apart
(|0 - 6| + |0 - 6| = 12), so the gap is min(12, 12) = 12 and nothing
wider is possible.
```

### Example 2

```text
Input: points = [[2,4],[8,2],[5,9]]
Output: 10
Explanation: Keep [8,2] and [5,9] together — their distance is
|8 - 5| + |2 - 9| = 10 — and let [2,4] form the other group on its own.
The lone point contributes no pair, so the gap is 10.
```

### Example 3

```text
Input: points = [[-3,1],[4,-2]]
Output: 0
Explanation: Both groups are singletons, so no intra-group pair exists
and the gap is 0 by definition.
```

### Constraints

- `2 <= points.length <= 500`
- `points[i].length == 2`
- `-10⁸ <= xi, yi <= 10⁸`

## Hints

### Hint 1

Think of a target gap D and ask a yes/no question: can some split keep
every same-group pair at distance D or more?

### Hint 2

That yes/no question gets harder as D grows, so the answers form a
monotone staircase — one that binary search can climb.

### Hint 3

Fix a candidate D. Any two points closer than D are forbidden from
sharing a group; draw an edge for each such forbidden pair.

### Hint 4

The split exists exactly when every edge joins points on opposite sides —
in other words, when the forbidden-pair graph admits a valid
two-coloring.
