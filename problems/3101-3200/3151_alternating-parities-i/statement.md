# Alternating Parities I

## Description

Call an array parity-alternating when no two neighboring elements share
their parity — every adjacent pair must consist of one even number and
one odd number.

You are given an array of integers `nums`. Answer `true` when `nums` is
parity-alternating and `false` when it is not.

### Example 1

```text
Input: nums = [7]
Output: true
Explanation:
A lone element has no neighbor to clash with, so the condition holds
vacuously.
```

### Example 2

```text
Input: nums = [10,3,8,5]
Output: true
Explanation:
The neighboring pairs are (10,3), (3,8), and (8,5), and each joins an
even number with an odd one.
```

### Example 3

```text
Input: nums = [6,2,9]
Output: false
Explanation:
The first two elements are both even, so the very first pair already
breaks the alternation.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

Only the low bit of each value matters — even versus odd is all the
condition can see.

### Hint 2

Walk the array once, comparing each element's parity with its left
neighbor's; any match falsifies the whole array.
