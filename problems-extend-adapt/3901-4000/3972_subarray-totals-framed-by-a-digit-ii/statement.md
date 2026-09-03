# Subarray Totals Framed By A Digit II

## Description

For every contiguous block `nums[l..r]`, add up its elements and inspect the
total's two end digits. The block qualifies when both ends show the same
digit `x`:

- the total's most significant digit is `x`, and
- its ones digit is also `x`.

Given the array `nums` and the target digit `x`, return how many contiguous
blocks qualify.

### Example 1

```text
Input: nums = [5,6,100], x = 1
Output: 2
Explanation:
    The qualifying blocks are:
        nums[0..1]: sum = 5 + 6 = 11
        nums[0..2]: sum = 5 + 6 + 100 = 111

    Both totals open and close with the digit 1. The answer is 2.
```

### Example 2

```text
Input: nums = [7], x = 7
Output: 1
Explanation:
    The lone block totals 7, whose first and last digits are both 7.
```

### Example 3

```text
Input: nums = [2,2,7], x = 4
Output: 1
Explanation:
    The totals are 2, 4, 11, 2, 9, and 7. Only 4 is framed by the digit 4,
    so the answer is 1.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `1 <= x <= 9`

## Hints

### Hint 1

All elements are positive, so the array's prefix sums increase strictly.

### Hint 2

A total leads with digit `x` exactly when it lands in one of the decade
ranges `[x * 10ᵖ, (x + 1) * 10ᵖ - 1]`.

### Hint 3

Filter those differences further by residue: the total must equal `x`
modulo 10. Count prefix pairs per decade whose difference falls in the
range and matches the residue.
