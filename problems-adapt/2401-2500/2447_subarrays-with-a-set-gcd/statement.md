# Subarrays With a Set GCD

## Description

An array's greatest common divisor is the largest integer that divides every
one of its elements evenly. Given `nums` and an integer `k`, count the
subarrays of `nums` — contiguous, non-empty slices — whose GCD is exactly `k`.

### Example 1

```text
Input: nums = [6,10,3], k = 3
Output: 1
Explanation: Only the single-element subarray [3] has GCD 3; every other
subarray includes 6 or 10, which drag its GCD down to 2 or 1.
```

### Example 2

```text
Input: nums = [12,15,18,5], k = 3
Output: 3
Explanation: [12,15,18], [12,15], and [15,18] each have GCD 3; the longer
slices that reach the 5 fall to GCD 1, and single elements keep their own
value as their GCD.
```

### Example 3

```text
Input: nums = [4], k = 7
Output: 0
Explanation: No subarray has 7 as its GCD.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i], k <= 10⁹`

## Hints

### Hint 1

The length bound is small enough to inspect every subarray directly.

### Hint 2

Build each subarray's GCD incrementally — extending a slice only ever
shrinks (or preserves) its GCD, never grows it.
