# Smoothing The Row

## Description

You are given an integer array `nums`, and you may repeat the following
move as many times as you like:

- Pick any prefix of the array — a stretch that starts at index `0` and
  reaches some position of your choice.
- Pick an integer `k`, which may be negative, and add `k` to every element
  of that prefix.

Return the fewest moves needed so that every element of the array holds
the same value.

### Example 1

```text
Input: nums = [3,3,7,7,1]
Output: 2
Explanation: Add 4 to the prefix of length 2, giving `[7,7,7,7,1]`; then
add -6 to the prefix of length 4, giving `[1,1,1,1,1]`. Two moves smooth
the row, and one move can never do it.
```

### Example 2

```text
Input: nums = [-4,-4,-4,-4]
Output: 0
Explanation: The row is already flat — every element agrees — so no move
is needed.
```

### Example 3

```text
Input: nums = [9,1]
Output: 1
Explanation: Add -8 to the prefix of length 1, turning the array into
`[1,1]`.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`

## Hints

### Hint 1

Read the row as a chain of neighboring boundaries. A move that adds `k` to
a prefix shifts many elements together, so it disturbs exactly one
boundary — the one sitting at the prefix's end.

### Hint 2

A boundary whose two sides already agree needs no work at all; each of the
others can be settled by its own single move, with `k` chosen to cancel
that boundary's difference.
