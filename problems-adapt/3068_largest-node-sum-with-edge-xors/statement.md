# Largest Node Sum With Edge XORs

## Description

An undirected tree has `n` nodes numbered `0` to `n - 1`, given by the edge
list `edges`, where `edges[i] = [u, v]` joins nodes `u` and `v`. Each node `i`
carries a value `nums[i]`, and a positive integer `k` comes with them.

Any number of times (zero included), you may pick an edge `[u, v]` and XOR both
of its endpoints with `k`, changing `nums[u]` to `nums[u] XOR k` and `nums[v]`
to `nums[v] XOR k`. The same edge may be picked repeatedly.

Return the largest node-value sum reachable this way.

### Example 1

```text
Input: nums = [2,7,2], k = 5, edges = [[0,1],[0,2]]
Output: 21
Explanation: XOR with 5 raises a 2 to a 7 but lowers the 7. One operation on
the edge [0,2] turns nodes 0 and 2 into 7 each, and node 1 keeps its 7: the
values become [7,7,7] with sum 21.
```

![The star with nums = [2,7,2]; operating once on edge [0,2] lifts both 2s to 7s, giving the total 21.](figures/example-1.svg)

### Example 2

```text
Input: nums = [4,1], k = 3, edges = [[0,1]]
Output: 9
Explanation: Both endpoints gain: 4 XOR 3 = 7 and 1 XOR 3 = 2. One operation
on the only edge turns [4,1] into [7,2], summing to 9.
```

### Example 3

```text
Input: nums = [7,7,7,7], k = 1, edges = [[0,1],[1,2],[2,3]]
Output: 28
Explanation: XOR with 1 maps 7 to 6, a loss for every node. The best play is
no operations at all, keeping the sum at 28.
```

### Constraints

- `2 <= n == nums.length <= 2 * 10^4`
- `1 <= k <= 10^9`
- `0 <= nums[i] <= 10^9`
- `edges.length == n - 1`
- `edges[i].length == 2`
- `0 <= edges[i][0], edges[i][1] <= n - 1`
- `edges` forms a valid tree.

## Hints

### Hint 1

Only the parity of XOR applications matters per node. Each operation flips the
parity of exactly two nodes — so which multisets of flipped nodes are
reachable at all?

### Hint 2

On a connected tree, pair up the nodes of any even-sized set and operate along
the path between each pair; interior nodes toggle twice and cancel. So every
even-sized set of flipped nodes is reachable, and the edges stop mattering
beyond connectivity.

### Hint 3

The task becomes: pick an even number of nodes to XOR, maximizing the total.
Each node contributes its delta `(x XOR k) - x`. Which nodes does that argue
for taking?

### Hint 4

Take every positive delta. If their count is odd, one fix is forced — drop the
smallest positive gain, or accept the least-negative non-positive delta —
whichever costs less.
