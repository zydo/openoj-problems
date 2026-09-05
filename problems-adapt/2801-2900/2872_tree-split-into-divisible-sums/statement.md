# Tree Split into Divisible Sums

## Description

An undirected tree has `n` nodes labeled `0` to `n - 1`, given by the array
`edges` of length `n - 1`, where `edges[i] = [ai, bi]` joins nodes `ai` and
`bi`. Node `i` carries the value `values[i]`, and you are also given the
integer `k`. The total of all values is a multiple of `k`.

You may delete any set of tree edges — possibly none. A deletion set is
_admissible_ when every connected component left behind has a node-value sum
divisible by `k`.

Return the largest number of components an admissible deletion set can leave.

### Example 1

```text
Input: n = 5, edges = [[0,1],[1,2],[1,3],[0,4]], values = [6,3,2,1,6], k = 6
Output: 3
Explanation: Delete the edges 0-1 and 0-4. The components are {1,2,3} with
sum 3 + 2 + 1 = 6, {4} with sum 6, and {0} with sum 6 — all multiples of 6.
Cutting anything else forces a component whose sum is not a multiple of 6.
```

### Example 2

```text
Input: n = 6, edges = [[0,1],[0,2],[1,3],[1,4],[2,5]], values = [4,1,3,3,0,5], k = 4
Output: 4
Explanation: Delete the edges 0-1, 0-2 and 1-4. The components are {1,3}
with sum 4, {4} with sum 0, {2,5} with sum 8, and {0} with sum 4. Node 4's
value of 0 is itself a multiple of 4, so it can stand alone.
```

### Example 3

```text
Input: n = 4, edges = [[0,1],[1,2],[2,3]], values = [4,0,0,8], k = 4
Output: 4
Explanation: Every single node's value is a multiple of 4, so deleting all
three edges of the chain shatters the tree into four admissible components.
```

### Constraints

- `1 <= n <= 3 * 10^4`
- `edges.length == n - 1`
- `edges[i].length == 2`
- `0 <= ai, bi < n`
- `values.length == n`
- `0 <= values[i] <= 10^9`
- `1 <= k <= 10^9`
- The sum of all values is divisible by `k`.
- The edges form a valid tree.

## Hints

### Hint 1

Root the tree anywhere and compute subtree sums from the leaves upward.

### Hint 2

The moment a finished subtree's sum is a multiple of `k`, separating it from
the rest can never cost you a better split later — why not? (The rest of the
tree then also has a multiple-of-`k` total, since the grand total is one.)

### Hint 3

If the subtree sum is not a multiple, no admissible split can ever cut
inside or above it at that point: carry the sum up to the parent instead,
and count one component per cut plus the root piece that remains.
