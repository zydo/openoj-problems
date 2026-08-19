# Least Swaps to Sort Each Tree Level

## Description

You are given the `root` of a binary tree whose nodes carry distinct values.

One operation picks two nodes that sit on the same level and exchanges their
values. The level of a node is the number of edges between it and the root.

Apply operations until, on every level of the tree, the values read in
strictly increasing order from left to right. Return the smallest number of
operations that achieves this.

### Example 1

```text
Input: root = [6,7,4,8,5,9,2,10,null,null,null,null,null,11]
Output: 3
Explanation:
- Swap 7 and 4. Level 1 now reads [4,7].
- Swap 8 and 2. Level 2 now reads [2,5,9,8].
- Swap 9 and 8. Level 2 now reads [2,5,8,9].
Level 3 reads [10,11] and was in order from the start. Three operations
suffice, and two cannot untangle a level whose values form a three-cycle.
```

### Example 2

```text
Input: root = [5,9,2,12,8,6,3]
Output: 3
Explanation:
- Swap 9 and 2. Level 1 now reads [2,9].
- Swap 12 and 3. Level 2 now reads [3,8,6,12].
- Swap 8 and 6. Level 2 now reads [3,6,8,12].
Both lower levels were reversed in pairs, costing one swap per pair.
```

### Example 3

```text
Input: root = [2,4,7,5,9,11]
Output: 0
Explanation: The levels read [2], [4,7], and [5,9,11] — each already in
increasing order, so nothing needs to move.
```

### Constraints

- The tree has between `1` and `10⁵` nodes.
- `1 <= Node.val <= 10⁵`
- Every value in the tree is distinct.

## Hints

### Hint 1

A swap never moves a value between levels, so each level is its own
self-contained sorting job — handle them one at a time.

### Hint 2

Level by level, the question becomes: given a row of distinct values, how few
pairwise swaps put it in increasing order?

### Hint 3

Mark where each value belongs and follow the resulting cycles: a cycle of
length `c` dissolves in exactly `c - 1` swaps, and fixed points cost nothing.
