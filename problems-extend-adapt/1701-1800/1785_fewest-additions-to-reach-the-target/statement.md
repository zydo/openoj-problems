# Fewest Additions to Reach the Target

## Description

You are given an integer array `nums` and two integers `limit` and `goal`.
Every element of `nums` lies within the bound `abs(nums[i]) <= limit`, and
every value you append must respect the same bound.

Return the fewest values that must be appended to `nums` so that the
array's total becomes exactly `goal`.

### Example 1

```text
Input: nums = [2,-3,4], limit = 5, goal = -14
Output: 4
Explanation: The current total is 3, so the appended values must sum to
-17. Appending -5, -5, -5, -2 works, and three values cannot cover a gap
of 17 since each contributes at most 5.
```

### Example 2

```text
Input: nums = [1,2], limit = 3, goal = 6
Output: 1
Explanation: The total is 3; appending the value 3 reaches the target.
```

### Example 3

```text
Input: nums = [3,-3,7], limit = 4, goal = 7
Output: 0
Explanation: The array already sums to the target, so nothing needs to be
added.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= limit <= 10⁶`
- `-limit <= nums[i] <= limit`
- `-10⁹ <= goal <= 10⁹`

## Hints

### Hint 1

The individual elements are irrelevant — only the array's current total
versus `goal` matters.

### Hint 2

A single appended value can shift the total by any amount in
`[-limit, limit]`, so the strongest possible contribution toward closing a
gap of `g` is `±limit`. That makes the answer `ceil(g / limit)`.
