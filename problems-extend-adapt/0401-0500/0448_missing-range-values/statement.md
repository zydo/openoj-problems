# Missing Range Values

## Description

An array `nums` of length `n` holds integers in the range `1` through `n`.
Some values may repeat, leaving others absent.

Return, in ascending order, every value in `[1, n]` that does not appear in
`nums`.

### Example 1

```text
Input: nums = [3,1,1,4,2]
Output: [5]
```

### Example 2

```text
Input: nums = [3,3,1]
Output: [2]
```

### Example 3

```text
Input: nums = [1,2,3,4]
Output: []
```

### Constraints

- `n == nums.length`, with `1 <= n <= 10⁵`.
- Each `nums[i]` lies in `[1, n]`.

### Follow-up

Can you find the missing values in `O(n)` time without extra space, ignoring
the returned list?
