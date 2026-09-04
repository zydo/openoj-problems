# Split Into Equal-Sum Halves

## Description

Given an integer array `nums`, decide whether its elements can be divided into
two groups so that the two groups have equal sums. Every element goes into
exactly one group.

Return `true` when such a division exists and `false` otherwise.

### Example 1

```text
Input: nums = [3,1,7,3,2]
Output: true
Explanation: 7 + 1 = 8, and the remaining elements 3 + 3 + 2 = 8.
```

### Example 2

```text
Input: nums = [4,4,9]
Output: false
Explanation: The elements total 17, and an odd total cannot be split into two
equal integer sums.
```

### Example 3

```text
Input: nums = [2,2,2,12]
Output: false
Explanation: The total is 18, so each group would need 9 — but every element is
even, and a sum of even numbers never reaches 9.
```

### Constraints

- `1 <= nums.length <= 200`
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

If a division exists, each group holds exactly half the total. When is that
half not even an integer?

### Hint 2

With an even total, one group suffices to reason about: find a selection of
elements adding up to exactly `total / 2`, and everything left over forms the
other group on its own.

### Hint 3

Process the elements one at a time and record which sums up to `total / 2` can
be built from those seen so far. Each element joins a selection or stays out —
never both — and never twice.
