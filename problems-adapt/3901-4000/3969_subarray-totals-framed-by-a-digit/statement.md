# Subarray Totals Framed By A Digit

## Description

Given an integer array `nums` and a single digit `x`, look at every
contiguous run `nums[l..r]` and add its elements up. Call such a run good
when the total is framed by `x` on both sides:

- the sum's leading digit is `x`, and
- the sum's trailing (ones) digit is `x` too.

Count how many contiguous runs are good.

### Example 1

```text
Input: nums = [7,4,7], x = 1
Output: 2
Explanation:
    The good runs are:
        nums[0..1]: sum = 7 + 4 = 11
        nums[1..2]: sum = 4 + 7 = 11

    Both totals read 11 — they begin and end with the digit 1. The answer
    is 2.
```

### Example 2

```text
Input: nums = [5,6], x = 6
Output: 1
Explanation:
    The runs and their totals are 5, 11, and 6. Only 6 both starts and ends
    with the digit 6, so the answer is 1.
```

### Example 3

```text
Input: nums = [23], x = 2
Output: 0
Explanation:
    The only total is 23. It starts with 2 but ends with 3, and a good run
    needs both — so the answer is 0.
```

### Constraints

- `1 <= nums.length <= 1500`
- `1 <= nums[i] <= 10⁹`
- `1 <= x <= 9`

## Hints

### Hint 1

With `n` at most 1500, visiting every `(left, right)` pair is small enough:
roughly 10⁶ runs in total.

### Hint 2

Fix the left end and grow the right end one element at a time, keeping a
running total — that makes each run's sum a single addition.

### Hint 3

A total's last digit is `total % 10`; peel digits off with `// 10` until one
digit remains to read off the leading one. Good runs match `x` on both ends.
