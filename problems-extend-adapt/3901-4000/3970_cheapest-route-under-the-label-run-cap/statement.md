# Cheapest Route Under The Label-Run Cap

## Description

A directed weighted graph has `n` nodes numbered `0` to `n - 1`, described
by `edges`, where `edges[i] = [uᵢ, vᵢ, wᵢ]` is a one-way edge from `uᵢ` to
`vᵢ` costing `wᵢ`.

Node `i` carries the character `labels[i]`, and you are also given an
integer `k`.

Find a walk from node `0` to node `n - 1` whose concatenated node labels
never contain more than `k` equal characters in a row, minimizing the sum of
the edge weights used. Return that minimum total weight, or `-1` when every
walk from `0` to `n - 1` breaks the run limit (or none exists at all).

### Example 1

```text
Input: n = 4, edges = [[0,1,1],[1,3,1],[0,2,5],[2,3,5]], labels = "abcb", k = 1
Output: 10
Explanation:
    The cheap two-hop route 0 -> 1 -> 3 spells "abb", which holds the run
    "bb" — too long for k = 1. The only admissible route is 0 -> 2 -> 3,
    spelling "acb", at a cost of 5 + 5 = 10.
```

### Example 2

```text
Input: n = 4, edges = [[0,1,1],[1,3,1],[0,2,5],[2,3,5]], labels = "abcb", k = 2
Output: 2
Explanation:
    Now a doubled "b" is allowed, so the route 0 -> 1 -> 3 becomes legal and
    costs 1 + 1 = 2.
```

### Example 3

```text
Input: n = 3, edges = [[0,1,1],[1,2,1]], labels = "aaa", k = 2
Output: -1
Explanation:
    The only route spells "aaa" — a run of 3 identical characters, which
    exceeds k = 2. The answer is -1.
```

### Constraints

- `1 <= n == labels.length <= 5 * 10⁴`
- `0 <= edges.length <= 5 * 10⁴`
- `edges[i] == [uᵢ, vᵢ, wᵢ]`
- `0 <= uᵢ, vᵢ <= n - 1`
- `uᵢ != vᵢ`
- `1 <= wᵢ <= 10⁴`
- `labels` consists of lowercase English letters
- `1 <= k <= 50`

## Hints

### Hint 1

Whether a walk is still legal cannot be read off the current node alone —
it also depends on how many copies of that node's character already sit at
the end of the spelled string.

### Hint 2

Run Dijkstra's algorithm over expanded states `(node, run)`, where `run` is
the length of the trailing streak of `labels[node]` along the walk so far.

### Hint 3

Crossing an edge `u -> v` sends `run` to `run + 1` when the two endpoint
labels match and back to `1` otherwise; drop any move that would push `run`
past `k`.

### Hint 4

The answer is the smallest settled distance over every state located at
node `n - 1`.
