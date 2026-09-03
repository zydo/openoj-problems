# Switchback Arrays III

## Description

You are given three integers `n`, `l`, and `r`.

An array of length `n` is a _switchback array_ when every entry is an
integer in the inclusive window `[l, r]`, no entry repeats the one
immediately before it, and no three consecutive entries move in one
direction only — climbing twice in a row is forbidden and so is falling
twice in a row, so the steps alternate between rising and falling.

Count the switchback arrays of length `n` over the window `[l, r]`, and
report the total modulo `10⁹ + 7`. Compared with the earlier versions, the
array length stays modest while the value window can span a billion
integers.

### Example 1

```text
Input: n = 3, l = 6, r = 7
Output: 2
Explanation: With only the values 6 and 7 available, the two valid arrays
of length 3 are:

    [6, 7, 6]
    [7, 6, 7]
```

### Example 2

```text
Input: n = 3, l = 2, r = 5
Output: 28
Explanation: A length-3 switchback either rises then falls, or falls then
rises. If it rises then falls through a middle value `v`, both ends must be
chosen from below `v`, giving `(v - l)²` options; summing over `v` gives
0 + 1 + 4 + 9 = 14. The mirrored shape contributes the same 14, so the
total is 28.
```

### Example 3

```text
Input: n = 4, l = 1, r = 3
Output: 16
Explanation: A length-4 switchback rises-falls-rises or falls-rises-falls.
For the first shape, fix the middle pair as `b` then `c` with `b > c`; the
opener has `b - 1` options and the closer has `3 - c`. The falling pairs
give 2 + 4 + 2 = 8 arrays, and the mirrored shape adds the same 8, for a
total of 16.
```

### Constraints

- `3 <= n <= 200`
- `1 <= l < r <= 10⁹`

## Hints

### Hint 1

Only the width `m = r - l + 1` of the window matters — the actual values
are interchangeable.

### Hint 2

For a fixed `n`, the count is a polynomial in `m` whose degree is at most
`n`, so its values at a handful of small widths pin down the answer even
for a billion-wide window.

### Hint 3

Run a DP over `dp[i][j][dir]` — arrays of length `i` ending at the `j`-th
smallest value with the last step rising or falling — and slide prefix and
suffix sums to make every width's total cost `O(n²)` overall.

### Hint 4

With the polynomial tabulated at the consecutive widths `1, 2, ..., n + 1`,
Lagrange interpolation evaluates it at the true width in one linear pass.
