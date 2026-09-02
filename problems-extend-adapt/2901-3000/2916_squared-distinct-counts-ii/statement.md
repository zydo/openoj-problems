# Squared Distinct Counts II

## Description

You are handed a 0-indexed integer array `nums`. Scan every subarray it
contains — a subarray being any contiguous, non-empty run of elements. For
each one, take the number of distinct values it holds, square that number,
and total these squares across the whole array.

The total can grow enormous, so report it modulo `10^9 + 7`.

### Example 1

```text
Input: nums = [1,3,2,3]
Output: 38
Explanation: Score the subarrays by their starting index:
start 0 gives distinct counts 1, 2, 3, 3 → 1² + 2² + 3² + 3² = 23;
start 1 gives 1, 2, 2 → 9; start 2 gives 1, 2 → 5; start 3 gives 1.
The total is 23 + 9 + 5 + 1 = 38.
```

### Example 2

```text
Input: nums = [2,1,2,1,2]
Output: 45
Explanation: Score the subarrays by their starting index:
start 0 gives distinct counts 1, 2, 2, 2, 2 → 17;
start 1 gives 1, 2, 2, 2 → 13; start 2 gives 1, 2, 2 → 9;
start 3 gives 1, 2 → 5; start 4 gives 1.
The total is 17 + 13 + 9 + 5 + 1 = 45.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^5`

## Hints

### Hint 1

Track one running quantity: the sum of squared distinct counts over the
windows ending at the current index. Moving from index `i` to `i + 1`, only
the windows that just gained `nums[i + 1]` as a new value change, each
square rising by `2d + 1`.

### Hint 2

The windows that gain a value form a suffix of the starts, so a structure
supporting range add and range sum over the per-start counts turns each
step into logarithmic work.
