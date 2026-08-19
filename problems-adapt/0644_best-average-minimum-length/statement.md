# Best Average with Minimum Length

## Description

Among all contiguous subarrays of `nums` having length at least `k`, return the
largest arithmetic mean.

Answers within `10^-5` of the exact value are accepted.

### Example 1

```text
Input: nums = [4,-2,7,1,8,-3], k = 3
Output: 5.333333333333333
Explanation: The subarray [7,1,8] has sum 16 and length 3.
```

### Example 2

```text
Input: nums = [-6,-2,-9], k = 2
Output: -4.0
Explanation: The best allowed subarray is [-6,-2].
```

### Constraints

- `n == nums.length`
- `1 <= k <= n <= 10^4`
- `-10^4 <= nums[i] <= 10^4`

## Hints

### Hint 1

For an exact length, prefix sums give every window sum by subtracting two
prefix values.

### Hint 2

Check every allowed length and retain its largest window sum.

### Hint 3

Compare averages `a / b` and `c / d` exactly with cross multiplication before
performing one final floating-point division.
