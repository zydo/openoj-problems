# Non-Decreasing Digit Floor

## Description

Call an integer **non-decreasing** when, read left to right, no digit is
smaller than the digit before it — every adjacent pair `x`, `y` (with `x`
appearing before `y`) satisfies `x <= y`.

Given an integer `n`, find the largest non-decreasing integer that does not
exceed `n`.

### Example 1

```text
Input: n = 20
Output: 19
Explanation: 20 itself is not non-decreasing (2 followed by 0 drops), and
19 is the largest value at or below it whose digits never drop.
```

### Example 2

```text
Input: n = 5678
Output: 5678
Explanation: Each digit is already at least as large as the one before it,
so n is its own answer.
```

### Example 3

```text
Input: n = 9432
Output: 8999
Explanation: The digits drop immediately after the 9, so the leading digit
must come down to 8, and every digit after it can then be pushed up to 9
without exceeding n.
```

### Constraints

- `0 <= n <= 10⁹`

## Hints

### Hint 1

Build the answer digit by digit, choosing the largest digit at each
position that still keeps the whole number less than or equal to `n`.
