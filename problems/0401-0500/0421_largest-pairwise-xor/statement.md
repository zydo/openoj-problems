# Largest Pairwise XOR

## Description

Choose two positions `i` and `j` from `nums`, where choosing the same position
twice is allowed. Return the largest value of `nums[i] XOR nums[j]`.

### Example 1

```text
Input: nums = [6,11,20,25]
Output: 31
Explanation: 6 XOR 25 equals 31.
```

### Example 2

```text
Input: nums = [0,1,2,4,8]
Output: 12
Explanation: 4 XOR 8 equals 12.
```

### Constraints

- `1 <= nums.length <= 2 * 10^5`
- `0 <= nums[i] <= 2^31 - 1`

## Hints

### Hint 1

Determine the result from its most significant bit toward its least
significant bit.

### Hint 2

For each bit position, collect the prefixes of all numbers under a mask that
keeps the bits considered so far.

### Hint 3

A proposed result prefix is possible exactly when two stored prefixes XOR to
it; test this with hash-set membership.
