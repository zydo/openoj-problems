# Counting Monotone Splits I

## Description

Given an array `nums` of `n` positive integers, count the ways to split
it into two arrays `(arr1, arr2)` of non-negative integers, both of
length `n`, such that:

- `arr1` never decreases: `arr1[0] <= arr1[1] <= ... <= arr1[n - 1]`;
- `arr2` never increases: `arr2[0] >= arr2[1] >= ... >= arr2[n - 1]`;
- the two arrays add back to the input everywhere:
  `arr1[i] + arr2[i] == nums[i]` for every `0 <= i < n`.

Return how many such splits exist, modulo `10⁹ + 7`.

### Example 1

```text
Input: nums = [3,1,4]
Output: 4
Explanation: The four splits are:
([0, 0, 3], [3, 1, 1])
([0, 0, 4], [3, 1, 0])
([0, 1, 4], [3, 0, 0])
([1, 1, 4], [2, 0, 0])
```

### Example 2

```text
Input: nums = [2,5,5]
Output: 10
```

### Constraints

- `1 <= n == nums.length <= 2000`
- `1 <= nums[i] <= 50`

## Hints

### Hint 1

Scan left to right and let `dp[i][s]` count the splits of the first `i`
entries whose `arr1[i - 1]` equals `s`.

### Hint 2

Once `arr1[i - 1] = s` is fixed, `arr2[i - 1]` has no freedom left: it
is `nums[i - 1] - s`.

### Hint 3

When extending a prefix, verify the candidate last values against both
monotonicity rules before adding it to the count.
