# Distinct Gap Array

## Description

For a 0-indexed array `nums` of length `n`, define its distinct gap array
`diff` of the same length this way: `diff[i]` counts the distinct values in
the prefix `nums[0, ..., i]`, then subtracts the count of distinct values in
the suffix `nums[i + 1, ..., n - 1]`.

Here `nums[i, ..., j]` denotes the subarray running from index `i` through
index `j` inclusive; when `i` is greater than `j` it denotes an empty
subarray. Return the distinct gap array of `nums`.

### Example 1

```text
Input: nums = [5,1,5,2]
Output: [-2,0,1,3]
Explanation: At i = 0 the prefix {5} holds 1 distinct value while the suffix
{1,5,2} holds 3, so diff[0] = 1 - 3 = -2. At i = 1 the prefix {5,1} holds 2
and the suffix {5,2} holds 2, so diff[1] = 0. At i = 2 the prefix still holds
2 distinct values against 1 in the suffix {2}, so diff[2] = 1. At i = 3 the
prefix {5,1,2} holds 3 and the suffix is empty, so diff[3] = 3.
```

### Example 2

```text
Input: nums = [10,9,8,9,10]
Output: [-2,-1,1,2,3]
Explanation: At i = 2 the prefix {10,9,8} contains 3 distinct values and the
suffix {9,10} contains 2, so diff[2] = 1. Repeated values never inflate
either count, which is why diff[0] compares 1 distinct value on the left with
3 on the right.
```

### Example 3

```text
Input: nums = [6]
Output: [1]
Explanation: The prefix through the only index holds one distinct value and
the suffix after it is empty, so the gap is 1 - 0 = 1.
```

### Constraints

- `1 <= n == nums.length <= 50`
- `1 <= nums[i] <= 50`

## Hints

### Hint 1

A set that remembers which values have already been counted keeps each
side's distinct count cheap to maintain.

### Hint 2

Record every suffix's distinct count in one right-to-left pass, then grow a
prefix set in a second pass and subtract — no nested rescans needed.
