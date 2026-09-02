# Loot The Tree, Keep Every Path Alive

## Description

An undirected tree holds `n` nodes labeled `0` through `n - 1` and is
rooted at node 0. It arrives as an array `edges` of `n - 1` pairs,
where `edges[i] = [ai, bi]` joins nodes `ai` and `bi`, together with an
array `values` of length `n` giving each node's value.

Your score starts at 0. One operation picks a node `i`, adds
`values[i]` to your score, and sets `values[i]` to `0`.

Call the tree sound when the values on the path from the root to every
leaf still sum to something other than zero.

Return the largest score reachable by running any number of these
operations while leaving the tree sound.

### Example 1

![diagram](figures/2925-1.svg)

```text
Input: edges = [[0,1],[0,2],[0,3],[2,4],[4,5]], values = [5,2,5,2,1,1]
Output: 11
Explanation: Take every node except the root — nodes 1, 2, 3, 4, and
5 — for a score of 2 + 5 + 2 + 1 + 1 = 11.
The root's 5 survives on every root-to-leaf path, so each path still
sums above zero and the tree stays sound.
No plan earns more than 11.
```

### Example 2

![diagram](figures/2925-2.svg)

```text
Input: edges = [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]],
values = [20,10,9,7,4,3,5]
Output: 40
Explanation: Take nodes 0, 2, 3, and 4, scoring 20 + 9 + 7 + 4 = 40.
Sparing node 1 keeps both left paths alive: the root-to-leaf paths
through 3 and through 4 each still carry node 1's 10, while the paths
to leaves 5 and 6 rely on their own un-taken values and sum to 3 and
5.
Every root-to-leaf path keeps a nonzero total, and 40 is the largest
score any sound plan reaches.
```

### Constraints

- `2 <= n <= 2 * 10⁴`
- `edges.length == n - 1`
- `edges[i].length == 2`
- `0 <= ai, bi < n`
- `values.length == n`
- `1 <= values[i] <= 10⁹`
- The given `edges` always form a valid tree.

## Hints

### Hint 1

Every value is at least 1, so a root-to-leaf path keeps a positive
total exactly as long as at least one node on it is never taken — one
spared node per path is all soundness demands.

### Hint 2

Let `dp[x]` be the best score obtainable inside `x`'s subtree when
every path from `x` down to a leaf still owes an un-taken node, and
let `sum[x]` be the total value stored in `x`'s subtree.

### Hint 3

Node `x` faces a two-sided choice: spare `x`, discharging the debt for
every path through it and leaving all descendants free to take — the
children's subtree sums; or take `values[x]` and push the debt down,
letting each child's subtree solve it for itself — the children's
`dp`.

### Hint 4

That is `dp[x] = max(values[x] + Σ dp[y], Σ sum[y])` over direct
children `y`, with a leaf forced to spare itself (`dp = 0`); the answer
is `dp[0]`, since the root's debt is precisely the soundness of the
whole tree.
