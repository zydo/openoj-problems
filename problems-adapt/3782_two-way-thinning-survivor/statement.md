# Two-Way Thinning Survivor

## Description

Write the integers `1` to `n` in a row, then thin the row with alternating
passes until a single number is left. The first pass sweeps from the left end,
the next from the right, and the two directions keep alternating:

- A **left sweep** walks left to right and crosses out every second number —
  the first number survives, the next is crossed out, the one after that
  survives, and so on.
- A **right sweep** does the mirror image from the right end — the last number
  survives, the one before it is crossed out, and so on.

Return the number that survives every pass.

### Example 1

```text
Input: n = 11
Output: 11
Explanation:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] — left sweep leaves [1, 3, 5, 7, 9, 11].
[1, 3, 5, 7, 9, 11] — right sweep leaves [3, 7, 11].
[3, 7, 11] — left sweep leaves [3, 11].
[3, 11] — right sweep leaves [11]. The row began and ended at 11.
```

### Example 2

```text
Input: n = 14
Output: 9
Explanation:
[1, 2, ..., 14] — left sweep leaves the odd numbers [1, 3, 5, 7, 9, 11, 13].
[1, 3, 5, 7, 9, 11, 13] — right sweep leaves [1, 5, 9, 13].
[1, 5, 9, 13] — left sweep leaves [1, 9].
[1, 9] — right sweep leaves [9].
```

### Example 3

```text
Input: n = 20
Output: 3
Explanation:
Left sweep: [1, 3, 5, ..., 19]. Right sweep on those ten: [3, 7, 11, 15, 19].
Left sweep: [3, 11, 19]. Right sweep: [3, 11]. Left sweep: [3].
```

### Constraints

- `1 <= n <= 10^15`

## Hints

### Hint 1

Never write the row down. After each pass the survivors form an arithmetic
run, so its first term, its gap, its length, and the direction of the next
pass describe everything there is to know.

### Hint 2

A left sweep always keeps the run's first term. A right sweep keeps it only
when the length is odd — an even length means the leftmost survivor sits in a
crossed-out position, and the first term moves up by one gap.

### Hint 3

Each pass keeps about half the run (rounding up) and doubles the gap, so the
process ends after roughly `log2(n)` passes — quick even at the top of the
range.
