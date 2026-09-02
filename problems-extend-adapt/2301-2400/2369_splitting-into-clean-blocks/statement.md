# Splitting Into Clean Blocks

## Description

A 0-indexed integer array `nums` is to be cut into one or more
contiguous blocks. The cut counts as clean when every resulting block
matches one of these shapes:

- exactly two equal elements, e.g. `[7,7]`;
- exactly three equal elements, e.g. `[5,5,5]`;
- exactly three elements rising by one at each step, e.g. `[2,3,4]` —
  `[2,4,6]` does not qualify.

Return `true` if `nums` admits at least one clean cut, and `false`
otherwise.

### Example 1

```text
Input: nums = [6,6,7,8,9]
Output: true
Explanation: Cut after the second element: [6,6] is an equal pair, and
[7,8,9] rises by one per step. Both blocks are clean, so the answer is
true.
```

### Example 2

```text
Input: nums = [3,3,3,3,1,1]
Output: true
Explanation: The array splits into [3,3], [3,3], and [1,1] — three
equal pairs, every one of them clean.
```

### Example 3

```text
Input: nums = [1,2,3,4,4,5]
Output: false
Explanation: The rising run [1,2,3] is the only block that can open a
split. What remains — 4, 4, 5 — forms either [4,4] with the stray [5]
left over, or [4,4,5], which fits no shape. No clean cut exists.
```

### Constraints

- `2 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁶`

## Hints

### Hint 1

Consider the final block of a clean split of some prefix: chopping it
off must again leave an array that splits cleanly.

### Hint 2

Work out, left to right, a boolean for each prefix end — dynamic
programming that bottoms out at the empty prefix.
