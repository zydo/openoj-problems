# Consecutive Triple Sum

## Description

Center any integer `m` and look at the three neighboring integers
`m - 1`, `m`, and `m + 1`. Given a nonnegative integer `num`, decide
whether some center makes that triple total exactly `num`. If one does,
return the three integers in ascending order; if no center works, return
an empty array.

### Example 1

```text
Input: num = 48
Output: [15,16,17]
Explanation:
15 + 16 + 17 == 48, and the three values run consecutively, so the
triple centered at 16 answers the question.
```

### Example 2

```text
Input: num = 10
Output: []
Explanation:
A centered triple always totals a multiple of 3, and 10 is not one, so
no triple can hit it exactly.
```

### Example 3

```text
Input: num = 999999999999999
Output: [333333333333332,333333333333333,333333333333334]
Explanation:
The center is num / 3, and the two neighbors flank it one step on each
side.
```

### Constraints

- `0 <= num <= 10¹⁵`

## Hints

### Hint 1

Name the middle value `m` and write the other two through it; watch how
the offsets cancel once the three values are added.

### Hint 2

The triple `m - 1, m, m + 1` sums to exactly `3m`, so the whole question
is whether `num` splits evenly by 3 — and if it does, `num / 3` is the
center.
