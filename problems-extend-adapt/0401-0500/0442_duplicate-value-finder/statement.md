# Duplicate Value Finder

## Description

An array `nums` has length `n`, holds integers from `1` through `n`, and every
value appears either once or twice. Collect the values that occur twice,
returning them in ascending order.

The algorithm must run in `O(n)` time using only constant auxiliary space;
the returned list is not counted toward that space budget.

### Example 1

```text
Input: nums = [3,5,5,1,2,2,4]
Output: [2,5]
```

### Example 2

```text
Input: nums = [1,1,2,3,3]
Output: [1,3]
```

### Example 3

```text
Input: nums = [1,2,3,4]
Output: []
```

### Constraints

- `n == nums.length`, with `1 <= n <= 10⁵`.
- Each `nums[i]` lies in `[1, n]`.
- Every value in `nums` appears at most twice.
