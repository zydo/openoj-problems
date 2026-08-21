# Nearest Subarray OR to a Target

## Description

You are given an array `nums` of positive integers and a target `k`.

Pick any non-empty contiguous stretch `nums[l..r]` and reduce it with bitwise
OR. Return the smallest achievable value of `|k - (nums[l] OR ... OR nums[r])|`.

### Example 1

```text
Input: nums = [2,8,4,16], k = 12
Output: 0
Explanation: The stretch [8,4] reduces to 8 OR 4 = 12, hitting the target
exactly.
```

### Example 2

```text
Input: nums = [6,6,6], k = 5
Output: 1
Explanation: Every stretch consists of sixes, so its OR is 6; the closest
approach to 5 misses by 1.
```

### Example 3

```text
Input: nums = [3], k = 20
Output: 17
Explanation: The only stretch is the single element 3, so the difference is
20 - 3 = 17.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `1 <= k <= 10⁹`

## Hints

### Hint 1

Fix the right end of the stretch and let the left end slide. What happens to
the OR as the stretch grows to the left?

### Hint 2

OR-ing can only turn bits on, never off — so as the left end retreats the
values form a nested, growing chain.

### Hint 3

A value survives in the chain only by switching on a bit none of the larger
stretches had, and values fit in 30 bits, so at most about 31 distinct ORs end
at any fixed right end.
