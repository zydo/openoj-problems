# Cycle-Closing Edge

## Description

Take a tree whose `n` nodes are numbered `1` through `n`, then add one more
link between two nodes that were not already joined. The result is handed to
you as `edges`, a list of `n` unordered pairs; `edges[i] = [ai, bi]` means node
`ai` and node `bi` are joined.

Because a tree over `n` nodes carries `n - 1` links, the surplus link leaves the
graph with exactly one cycle. Erasing any single member of that cycle restores a
tree. Report the member that appears **latest** in `edges`.

### Example 1

```text
Input: edges = [[2,4],[4,5],[3,5],[1,2],[2,3]]
Output: [2,3]
Explanation: The cycle runs 2 - 4 - 5 - 3 - 2, and node 1 dangles off node 2.
Of the four links on that cycle, [2,3] is the one written last.
```

![Five nodes joined in a ring of four with one node dangling; the last-written ring link [2,3] is marked for removal.](figures/example-1.svg)

### Example 2

```text
Input: edges = [[1,2],[2,3],[1,3],[3,4],[4,5]]
Output: [1,3]
Explanation: Nodes 1, 2 and 3 form the cycle, so [1,2], [2,3] and [1,3] are all
erasable. The rule picks [1,3], the last of the three, even though two further
pairs follow it in the list.
```

### Example 3

```text
Input: edges = [[1,3],[2,3],[1,4],[1,2]]
Output: [1,2]
Explanation: Nodes 1, 3 and 2 close a triangle once the final pair arrives.
```

### Constraints

- `edges` has exactly `n` entries, and `3 <= n <= 1000`
- each entry is a two-element pair `[ai, bi]` with `1 <= ai < bi <= n`
- `ai` and `bi` are never equal, and the same pair never occurs twice
- the graph drawn by `edges` is connected

## Hints

### Hint 1

Walk the pairs from front to back and picture the graph growing one link at a
time. Which link is the first to join two nodes that some earlier links have
already tied together?

### Hint 2

That first offender is exactly the answer. Every pair before it joined two
separate pieces, so none of them can sit on a cycle; and the cycle is finished
the instant this pair arrives, so nothing after it sits on one either.

### Hint 3

So the whole task reduces to tracking which nodes currently share a component.
A disjoint-set forest answers that in near-constant time per pair, and its
merge step already reports the collision you are looking for.
