# Subarrays With Differing Neighbors

## Description

You are handed an array `nums` whose entries are only `0` and `1`. A
subarray (a non-empty, contiguous stretch of the array) is _balanced
locally_ when no two entries sitting next to each other inside it are
equal — every adjacent pair within the stretch is a `0` followed by a
`1` or a `1` followed by a `0`.

Count how many subarrays of `nums` have this property.

### Example 1

```text
Input: nums = [1,1,0,1,0,0]
Output: 12
Explanation: The array breaks at the two places where neighbors repeat,
leaving the alternating stretches [1], [1,0,1,0] and [0]. Every valid
subarray lives inside one stretch, and a stretch of length L holds
L × (L + 1) / 2 of them, so the total is 1 + 10 + 1 = 12.
```

### Example 2

```text
Input: nums = [0,1,0,1,0,1,0,1]
Output: 36
Explanation: Adjacent entries differ everywhere, so all 8 × 9 / 2 = 36
subarrays of the array qualify.
```

### Example 3

```text
Input: nums = [1,0,1,1,0,1,0,0,1]
Output: 19
Explanation: The alternating stretches [1,0,1], [1,0,1,0] and [0,1]
hold 6, 10 and 3 valid subarrays respectively, which sums to 19.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- Each `nums[i]` is `0` or `1`.

## Hints

### Hint 1

No valid subarray can cross a position where `nums[i] == nums[i - 1]`,
so treat each maximal alternating stretch independently.

### Hint 2

A stretch of length L contributes one valid subarray for each of its
possible right endpoints: 1 + 2 + ... + L in total. Equivalently, sweep
once keeping the length of the longest valid subarray that ends at the
current index, and add that length to a running answer.
