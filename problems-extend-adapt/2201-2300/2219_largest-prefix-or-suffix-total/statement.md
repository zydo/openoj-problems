# Largest Prefix or Suffix Total

## Description

You are given a 0-indexed integer array `nums` of length `n`.

For each index `i`, form two totals that anchor at opposite ends of the
array: the sum of the first `i + 1` elements, and the sum of the last
`n - i` elements. The anchor total at index `i` is whichever of those two
sums is larger.

Return the largest anchor total found over all `n` indices.

### Example 1

```text
Input: nums = [2,-1,6,3]
Output: 10
Explanation:
The anchor totals are:
- index 0: max(2, 2 + -1 + 6 + 3) = max(2, 10) = 10
- index 1: max(2 + -1, -1 + 6 + 3) = max(1, 8) = 8
- index 2: max(2 + -1 + 6, 6 + 3) = max(7, 9) = 9
- index 3: max(2 + -1 + 6 + 3, 3) = max(10, 3) = 10
The largest of them is 10.
```

### Example 2

```text
Input: nums = [-8,5,-2]
Output: 3
Explanation:
The anchor totals are max(-8, 3) = 3, max(-3, 3) = 3, and
max(-5, -2) = -2, so the answer is 3.
```

### Example 3

```text
Input: nums = [-6,-2,9,-1,7]
Output: 15
Explanation:
No prefix total here exceeds 7, the sum of the whole array. The suffix
that starts at index 2 sums to `9 + -1 + 7 = 15`, and no anchor total
beats it.
```

### Constraints

- `n == nums.length`
- `1 <= n <= 10⁵`
- `-10⁵ <= nums[i] <= 10⁵`

## Hints

### Hint 1

Evaluating both sums from scratch at every index costs quadratic time.
What quantity stays almost unchanged as the index advances by one?

### Hint 2

Carry a running prefix sum as you scan; the back sum beginning at index
`i` equals the array total minus the prefix sum through `i - 1`. A single
pass that tracks the running maximum of both candidates is enough.
