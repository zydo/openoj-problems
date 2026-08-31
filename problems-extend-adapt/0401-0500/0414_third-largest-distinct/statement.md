# Third Largest Distinct

## Description

Given an integer array `nums`, return the third largest value among the
distinct values present. If fewer than three distinct values exist, return
the largest value instead.

### Example 1

```text
Input: nums = [5,2,2,4,8]
Output: 4
Explanation: The distinct values in order of size are 8, 5, 4, 2. The third
largest is 4.
```

### Example 2

```text
Input: nums = [1,2]
Output: 2
Explanation: There are only two distinct values, so the largest (2) is
returned instead of a third maximum.
```

### Example 3

```text
Input: nums = [7,7,7,3]
Output: 7
Explanation: The only distinct values are 7 and 3, so the largest (7) is
returned.
```

### Constraints

- `1 <= nums.length <= 10⁴`
- `-2³¹ <= nums[i] <= 2³¹ - 1`

### Follow-up

Can you find an `O(n)` solution?
