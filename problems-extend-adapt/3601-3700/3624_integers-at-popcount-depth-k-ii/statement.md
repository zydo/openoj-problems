# Integers at Popcount Depth K II

## Description

Recall the popcount depth of a positive integer: applying `popcount`
repeatedly — each step replaces the value by the number of its 1-bits —
always lands on 1 eventually, and the depth is how many steps that takes.
For instance 7, binary `111`, walks 7 → 3 → 2 → 1 and sits at depth 3.

This time the values live in an array `nums`, and the ground can shift
under them. You also receive a list `queries`, where each entry is one
of:

- `[1, l, r, k]` — count the positions `j` inside `l <= j <= r` whose
  current array value has popcount depth exactly `k`.
- `[2, idx, val]` — overwrite `nums[idx]` with `val`.

Return the answers to all counting queries, in order.

### Example 1

```text
Input: nums = [4,6,8,1], queries = [[1,0,3,1],[2,3,7],[1,0,3,1],[1,2,3,0]]
Output: [2,2,0]
Explanation: The depths of [4,6,8,1] are [1,2,1,0].
Query 0 ([1,0,3,1]): indices 0 and 2 hold depth-1 values, so the count
    over [0, 3] is 2.
Query 1 ([2,3,7]): nums becomes [4,6,8,7], whose depths are [1,2,1,3].
Query 2 ([1,0,3,1]): again indices 0 and 2 carry depth 1, giving 2.
Query 3 ([1,2,3,0]): over indices [2, 3] the depths are [1,3]; neither
    has depth 0.
```

### Example 2

```text
Input: nums = [5,1,9,2], queries = [[1,1,3,2],[2,1,3],[1,0,3,2],[2,3,10],[1,0,3,1]]
Output: [1,3,0]
Explanation: The depths of [5,1,9,2] are [2,0,2,1].
Query 0 ([1,1,3,2]): index 2 is the only depth-2 value in [1, 3].
Query 1 ([2,1,3]): nums becomes [5,3,9,2] with depths [2,2,2,1].
Query 2 ([1,0,3,2]): indices 0, 1 and 2 all hold depth-2 values now.
Query 3 ([2,3,10]): nums becomes [5,3,9,10], every value at depth 2.
Query 4 ([1,0,3,1]): no depth-1 value remains, so the count is 0.
```

### Example 3

```text
Input: nums = [1,2,4,8], queries = [[1,0,3,0]]
Output: [1]
Explanation: The depths are [0,1,1,1]; only the value 1 is itself the
chain's endpoint, so exactly one index has depth 0.
```

### Constraints

- The array holds between `1` and `10⁵` values, each between `1` and
  `10¹⁵`.
- There are between `1` and `10⁵` queries, each with `3` or `4` entries:
  `[1, l, r, k]` or `[2, idx, val]`.
- `0 <= l <= r <= n - 1` and `0 <= idx <= n - 1`, where `n` is the array
  length.
- `0 <= k <= 5`
- `1 <= val <= 10¹⁵`

## Hints

### Hint 1

A value's depth costs only a few `popcount` steps to compute — a number
up to `10¹⁵` has at most 50 bits, and past that first step the chain
collapses through small numbers.

### Hint 2

Keep one Fenwick tree per depth class, six in all; tree `d` marks every
index whose current value has depth `d`.

### Hint 3

An overwrite retires the index from its old depth's tree and registers it
in the new one; a counting query is a prefix-difference on the tree of
the asked-for depth.
