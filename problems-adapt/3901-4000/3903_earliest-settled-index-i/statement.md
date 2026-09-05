# Earliest Settled Index I

## Description

You are given an integer array `nums` of length `n` and an integer `k`.

Give every index `i` a spread value built from two scans:

- `max(nums[0..i])`, the largest value from the start of the array through
  `i`;
- `min(nums[i..n - 1])`, the smallest value from `i` through the end.

The spread value of `i` is the difference of those two numbers. An index is
_settled_ when its spread value is at most `k` — the heaviest element up to
and including `i` outweighs the lightest element from `i` onward by no more
than `k`.

Return the smallest settled index, or `-1` if no index is settled.

### Example 1

```text
Input: nums = [9,3,6,2,7], k = 5
Output: 4
Explanation:
    Index 0: max = 9, min = 2, spread = 7.
    Index 1: max = 9, min = 2, spread = 7.
    Index 2: max = 9, min = 2, spread = 7.
    Index 3: max = 9, min = 2, spread = 7.
    Index 4: max = 9, min = 7, spread = 2, which is at most k = 5.
    Index 4 is the first settled index, so the answer is 4.
```

### Example 2

```text
Input: nums = [10,1,8], k = 2
Output: 2
Explanation:
    Index 0: max = 10, min = 1, spread = 9.
    Index 1: max = 10, min = 1, spread = 9.
    Index 2: max = 10, min = 8, spread = 2, which is at most k = 2.
    The answer is 2.
```

### Example 3

```text
Input: nums = [4,4,4], k = 0
Output: 0
Explanation: At index 0, max = 4 and min = 4, so the spread is 0, which is
at most k = 0. The answer is 0.
```

### Example 4

```text
Input: nums = [3,1,2], k = 0
Output: -1
Explanation: The spread values are 2, 2, and 1 — every one of them exceeds
k = 0, so no index is settled and the answer is -1.
```

### Constraints

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 10⁹`
- `0 <= k <= 10⁹`

## Hints

### Hint 1

Walk the indices from the left; the first one that qualifies is the answer,
so you can stop as soon as you find it.

### Hint 2

For a candidate index, one scan over its left side gives the running maximum
and one scan over its right side gives the running minimum — the spread is
just their difference.
