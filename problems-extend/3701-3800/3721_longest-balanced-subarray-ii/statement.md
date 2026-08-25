# Longest Balanced Subarray II

## Description

You are given an integer array `nums`.

A subarray is called balanced if the number of distinct even numbers in the
subarray is equal to the number of distinct odd numbers.

Return the length of the longest balanced subarray.

### Example 1

```text
Input: nums = [2,5,4,3]
Output: 4
Explanation: The longest balanced subarray is [2, 5, 4, 3]. It has 2
distinct even numbers [2, 4] and 2 distinct odd numbers [5, 3], so the
answer is 4.
```

### Example 2

```text
Input: nums = [3,2,2,5,4]
Output: 5
Explanation: The longest balanced subarray is [3, 2, 2, 5, 4]. It has 2
distinct even numbers [2, 4] and 2 distinct odd numbers [3, 5], so the
answer is 5.
```

### Example 3

```text
Input: nums = [1,2,3,2]
Output: 3
Explanation: The longest balanced subarray is [2, 3, 2]. It has 1 distinct
even number [2] and 1 distinct odd number [3], so the answer is 3.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

Store the first (or all) occurrences for each value in `pos[val]`.

### Hint 2

Build a lazy segment tree over start indices `l` in `[0..n-1]` that supports
range add and can tell if any index has value 0 (keep mn/mx).

### Hint 3

Use `sign = +1` for odd values and `sign = -1` for even values.

### Hint 4

Initialize by adding each value's contribution with `update(p, n-1, sign)`
where `p` is its current first occurrence.

### Hint 5

Slide left `l`: pop `pos[nums[l]]`, let `next` be the next occurrence or `n`,
do `update(0, next-1, -sign)`, then query for any `r >= l` with value 0 and
update `ans = max(ans, r-l+1)`.
