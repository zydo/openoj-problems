# Triplet Sum Below Target

## Description

You are given an array of `n` integers `nums` and an integer `target`.
Count how many index triplets `(i, j, k)` with `0 <= i < j < k < n`
have `nums[i] + nums[j] + nums[k] < target`, and return that count.

### Example 1

```text
Input: nums = [-3,1,2,4], target = 3
Output: 2
Explanation: The qualifying triplets are [-3,1,2] (sum 0) and [-3,1,4]
(sum 2); [-3,2,4] sums to exactly 3, which does not count.
```

### Example 2

```text
Input: nums = [], target = 5
Output: 0
```

### Example 3

```text
Input: nums = [7], target = 10
Output: 0
```

### Constraints

- `n == nums.length`
- `0 <= n <= 3500`
- `-100 <= nums[i] <= 100`
- `-100 <= target <= 100`
- The input is generated such that the answer is less than or equal to `10⁹`.
