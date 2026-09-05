# Counting Monotone Splits II

## Description

This is the wider-range version of Counting Monotone Splits I — the
splitting rule is unchanged, but the entries of `nums` can be much
larger.

Given an array `nums` of `n` positive integers, a split of it is a pair
of non-negative integer arrays `(arr1, arr2)`, both of length `n`, such
that:

- `arr1` is non-decreasing from left to right:
  `arr1[0] <= arr1[1] <= ... <= arr1[n - 1]`;
- `arr2` is non-increasing from left to right:
  `arr2[0] >= arr2[1] >= ... >= arr2[n - 1]`;
- at every index the two halves reassemble the input:
  `arr1[i] + arr2[i] == nums[i]`.

Return the number of distinct splits, taken modulo `10⁹ + 7`.

### Example 1

```text
Input: nums = [400,1000,650]
Output: 23426
```

### Example 2

```text
Input: nums = [999,999]
Output: 500500
Explanation: Every unit handed to arr1 comes out of arr2, so with
both entries equal the two monotonicity rules coincide: a split is
just a choice of two values `0 <= arr1[0] <= arr1[1] <= 999`, of
which there are 500500.
```

### Constraints

- `1 <= n == nums.length <= 2000`
- `1 <= nums[i] <= 1000`

## Hints

### Hint 1

Track the count of prefixes by their final `arr1` value; everything
about `arr2` follows from the per-index sum.

### Hint 2

Moving from one index to the next, a rise in `nums` forces `arr1` to
grow by at least that rise; a drop forces nothing.

### Hint 3

Prefix sums over the value dimension turn each transition into a range
lookup, which is what the enlarged values demand.
