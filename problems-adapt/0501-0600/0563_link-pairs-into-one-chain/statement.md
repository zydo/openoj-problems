# Link Pairs Into One Chain

## Description

You are given an array `pairs` of two-value entries, where `pairs[i] =
[from_i, to_i]`. Entries are pairwise distinct, and `from_i != to_i`
always.

Put **all** of the entries into one order forming a chain: reading left to
right, the `to` of each entry equals the `from` of the entry after it.

Return any ordering that forms such a chain. The input is guaranteed to
have one.

### Example 1

```text
Input: pairs = [[8,2],[2,5],[7,3],[3,8]]
Output: [[7,3],[3,8],[8,2],[2,5]]
Explanation: 7 → 3 → 8 → 2 → 5. Each entry hands its `to` value to the
next entry's `from`.
```

### Example 2

```text
Input: pairs = [[2,4],[4,6],[6,2]]
Output: [[2,4],[4,6],[6,2]]
Explanation: The chain closes a loop: the last `to` returns to the first
`from`, so the input order itself already works.
```

### Example 3

```text
Input: pairs = [[5,9],[5,3],[3,5],[9,5]]
Output: [[5,3],[3,5],[5,9],[9,5]]
Explanation: The value 5 fronts two entries; both belong to the chain,
visited one after the other.
```

### Constraints

- `1 <= pairs.length <= 10⁵`
- `pairs[i].length == 2`
- `0 <= from_i, to_i <= 10⁹`
- `from_i != to_i`
- no two entries are identical
- a chaining order exists

## Hints

### Hint 1

Call each value a node and each entry a directed edge. A chain that uses
every entry exactly once is a well-known graph object — which one?

### Hint 2

Where can such a walk start? Compare, for each node, how many edges leave
it with how many enter it.

### Hint 3

Walk greedily, consuming unused edges, and push nodes on a stack; when the
top node is stuck, move it to the output. Reversing the output at the end
straightens everything out.
