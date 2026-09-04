# Mountain Slope Sums

## Description

An array shaped like a mountain rises strictly to one summit and then falls
strictly to the end. Cut it at that summit into two slopes:

- the **uphill slope** — everything from the first element through the summit;
- the **downhill slope** — everything from the summit through the last
  element.

The summit itself counts for both slopes. Weigh the two sides: return `0`
when the uphill slope is heavier, `1` when the downhill slope is heavier,
and `-1` when the two sums balance exactly.

### Example 1

```text
Input: nums = [7,20,3]
Output: 0
Explanation: The summit is 20. Uphill = [7,20] sums to 27; downhill =
[20,3] sums to 23. The uphill side wins, so the answer is 0.
```

### Example 2

```text
Input: nums = [3,8,5]
Output: 1
Explanation: The summit is 8. Uphill = [3,8] sums to 11; downhill = [8,5]
sums to 13. The downhill side is heavier, so the answer is 1.
```

### Example 3

```text
Input: nums = [4,6,10,8,2]
Output: -1
Explanation: The summit is 10. Uphill = [4,6,10] sums to 20 and downhill =
[10,8,2] also sums to 20, so the sides tie and the answer is -1.
```

### Example 4

```text
Input: nums = [6,7,8,3]
Output: 0
Explanation: The summit is 8. Uphill = [6,7,8] sums to 21; downhill = [8,3]
sums to 11, so the answer is 0.
```

### Constraints

- `3 <= n == nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `nums` rises strictly to a single summit, then falls strictly.

## Hints

### Hint 1

One left-to-right pass is enough: while each element still exceeds its
predecessor you are still climbing, and the first failure marks the summit.

### Hint 2

Keep a running total of everything. The uphill sum is what you collect during
the climb; the rest of the total, with the summit added back, is the downhill
sum — no second pass needed.
