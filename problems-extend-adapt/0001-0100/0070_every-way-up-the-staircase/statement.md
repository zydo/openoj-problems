# Every Way Up The Staircase

## Description

A staircase has `n` steps, and you start on the ground below step 1.
Each move carries you up either `1` step or `2` steps.

Count the distinct move sequences that land you exactly on step `n` —
two sequences differ as soon as any move differs, even if the same
steps get covered.

### Example 1

```text
Input: n = 5
Output: 8
```

The eight sequences are all-ones, the four positions for a single 2
among 1s, and the three positions for the lone 1 between two 2s.

### Example 2

```text
Input: n = 12
Output: 233
```

### Example 3

```text
Input: n = 35
Output: 14930352
```

### Constraints

- `1 <= n <= 45`

### Hints

- Any sequence reaching step `n` ends with a final move of 1 or 2; ask
  where each choice must have come from.
- Grouping the sequences by that last move ties step `n`'s count to the
  counts of the two steps just below it.
