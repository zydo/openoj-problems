# Dominant Value Index

## Description

You are given an integer array `nums` whose largest value occurs exactly
once — no ties for the top spot.

Check whether that largest value is at least double every other value in
the array. If it is, return the index where the largest value sits;
otherwise return `-1`.

### Example 1

```text
Input: nums = [5,10,2,1]
Output: 1
Explanation: 10 is the largest value, and it is at least twice every other
entry (10 >= 2*5, 10 >= 2*2, 10 >= 2*1). It sits at index 1, so 1 is
returned.
```

### Example 2

```text
Input: nums = [2,3,4,5]
Output: -1
Explanation: 5 is the largest value, but it is less than twice 4 (5 < 8),
so no index is returned.
```

### Constraints

- `2 <= nums.length <= 50`
- `0 <= nums[i] <= 100`
- The largest element in `nums` is unique.

## Hints

### Hint 1

Find the unique largest value `m` and remember its index. Then scan again:
if any other value `x` satisfies `m < 2*x`, the answer is `-1`; otherwise
it is the remembered index.
