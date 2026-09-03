# Smallest Missing Integer Above The Mean

## Description

Given an integer array `nums`, let its mean be the exact quantity
`sum(nums) / n` for `n = nums.length`. Among the positive integers that are
strictly larger than that mean and never occur in `nums`, return the
smallest one.

Both conditions bind exactly. A mean that lands on a whole number rules
that whole number out — "strictly larger" skips it — and a fractional mean
disqualifies every integer up through its floor as well. Array values may
be negative and can drag the mean below 1, yet the answer itself must be
positive, so 1 is the lowest candidate ever examined.

### Example 1

```text
Input: nums = [1,3,5,7]
Output: 6
Explanation: The mean is 16 / 4 = 4, so the first integer eligible on size
alone is 5. But 5 occurs in nums, and the next one up, 6, does not — the
answer is 6.
```

### Example 2

```text
Input: nums = [6,2]
Output: 5
Explanation: The mean is exactly (6 + 2) / 2 = 4. Because the comparison is
strict, 4 itself is skipped; 5 clears the mean and never appears in nums,
so the answer is 5.
```

### Example 3

```text
Input: nums = [-3,0,9]
Output: 3
Explanation: The mean is (-3 + 0 + 9) / 3 = 2, so the search begins at 3.
No element equals 3, and the answer is 3.
```

### Constraints

- `1 <= nums.length <= 100`
- `-100 <= nums[i] <= 100`

## Hints

### Hint 1

The first integer that beats the mean is `floor(mean) + 1`; if that lands
at or below zero, begin at 1 instead, since the answer cannot be
non-positive.

### Hint 2

Step upward one integer at a time from that starting point and stop at the
first value the array never contains.
