# The Lightest Positive Window

## Description

You are given an integer array `nums` together with two bounds `l` and
`r`.

Look at every window — a contiguous, non-empty run of elements — whose
length falls between `l` and `r`, inclusive, and whose element sum is
strictly above zero. Among those qualifying windows, find the one
carrying the smallest sum.

Return that smallest positive sum, or `-1` when no window of an allowed
length sums to something positive.

### Example 1

```text
Input: nums = [5,-3,2,-1], l = 1, r = 2
Output: 1
Explanation: Qualifying windows include [5] with sum 5, [5,-3] with sum
2, [2] with sum 2, and [2,-1] with sum 1. The lightest positive sum is
1, coming from [2,-1].
```

### Example 2

```text
Input: nums = [4,-7,6], l = 2, r = 2
Output: -1
Explanation: The only windows of length 2 are [4,-7] with sum -3 and
[-7,6] with sum -1. Neither is positive, so the answer is -1.
```

### Example 3

```text
Input: nums = [-2,3,-4,5], l = 1, r = 3
Output: 1
Explanation: Positive windows exist in several lengths — [3] and [5]
as single elements, [-2,3] and [-4,5] as pairs with sum 1 each, and
[3,-4,5] as a triple with sum 4 — so the smallest positive sum is 1.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= l <= r <= nums.length`
- `-1000 <= nums[i] <= 1000`

## Hints

### Hint 1

The array is tiny, so measuring every (start, length) pair directly is
fast enough.
