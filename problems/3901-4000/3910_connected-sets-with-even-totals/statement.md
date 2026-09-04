# Connected Sets With Even Totals

## Description

You have an undirected graph on `n` nodes numbered `0` to `n - 1`, where node
`i` carries the value `nums[i]` — always a `0` or a `1`. The connections are
listed in `edges`, whose entry `edges[i] = [ui, vi]` joins node `ui` with node
`vi`.

For any non-empty set of nodes, its **induced** graph keeps exactly those
nodes and only the edges whose two ends both belong to the set.

Count the non-empty node sets whose induced graph is connected **and** whose
node values add up to an even number. Return that count.

### Example 1

```text
Input: nums = [0,1,0], edges = [[0,1],[1,2]]
Output: 2
Explanation: The chain 0-1-2 offers seven non-empty sets. Node 1 carries an
odd value, so every set containing it — including the whole chain — totals
to an odd number, and {0} and {2} are not adjacent. Only the lone nodes {0}
and {2} are connected with an even total, so the answer is 2.
```

### Example 2

```text
Input: nums = [1,1], edges = [[0,1]]
Output: 1
Explanation: Both single nodes have odd values. The pair {0,1} is connected
and its values total 2, so it is the only set that counts.
```

### Example 3

```text
Input: nums = [0,0,0], edges = []
Output: 3
Explanation: With no edges, a set is connected only when it holds a single
node. All three values are 0 — even — so each lone node counts.
```

### Example 4

```text
Input: nums = [0,1,0,1], edges = [[0,1],[2,3]]
Output: 2
Explanation: The graph splits into the pairs 0-1 and 2-3. Every even-valued
node is a valid set on its own ({0} and {2}), while both pairs hold one
odd value each and the full set is not connected, so nothing larger counts.
```

### Constraints

- `1 <= n == nums.length <= 13`
- `nums[i]` is `0` or `1`.
- `0 <= edges.length <= n * (n - 1) / 2`
- `edges[i] = [ui, vi]` with `0 <= ui < vi < n`
- All edges are distinct.

## Hints

### Hint 1

With `n` at most thirteen, each node set fits in one integer as a bitmask, so
every possible set can be visited directly.

### Hint 2

For a candidate mask, grow a traversal from one of its bits, hopping only
along edges that stay inside the set — connectivity means the traversal
reaches every bit of the mask.

### Hint 3

XOR the values of the chosen nodes to get the parity of their total; only a
zero parity with a connected mask adds to the answer.
