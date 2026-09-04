# Distinct Value Triplets

## Description

You are given a 0-indexed array `nums` of positive integers.

A distinct triplet is a choice of three indices `(i, j, k)` that satisfies:

- `0 <= i < j < k < nums.length`
- The three values `nums[i]`, `nums[j]`, and `nums[k]` are pairwise
  distinct, meaning `nums[i] != nums[j]`, `nums[i] != nums[k]`, and
  `nums[j] != nums[k]`.

Return the number of distinct triplets.

### Example 1

```text
Input: nums = [1,2,2,3,3,3]
Output: 6
Explanation: The array holds one 1, two 2s, and three 3s. Every valid
triplet uses one of each distinct value, and any such choice of positions
orders uniquely by index, giving 1 * 2 * 3 = 6 triplets.
```

### Example 2

```text
Input: nums = [1,1,1,1,2,2,3]
Output: 8
Explanation: There are four 1s, two 2s, and one 3, so the count is
4 * 2 * 1 = 8.
```

### Example 3

```text
Input: nums = [5,5,5]
Output: 0
Explanation: Only one distinct value appears, so no triplet can have three
pairwise distinct values.
```

### Constraints

- `3 <= nums.length <= 100`
- `1 <= nums[i] <= 1000`

## Hints

### Hint 1

The index order `i < j < k` is automatic once three distinct positions are
chosen — the positions sort into exactly one increasing order.

### Hint 2

Count the frequency of each value, then multiply frequencies across three
distinct values.

### Hint 3

For each value treated as the value-sorted middle of a triplet, the count
is the product of the number of elements with a smaller value, the value's
own frequency, and the number of elements with a larger value.
