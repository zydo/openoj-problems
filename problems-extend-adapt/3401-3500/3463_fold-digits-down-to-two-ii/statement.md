# Fold Digits Down To Two II

## Description

The digit-folding process from the easy version now runs on a string that
can be six orders of magnitude longer. You are given a string `s` made
entirely of digits. One fold scans `s` left to right and turns every
overlapping pair of adjacent digits `(a, b)` into the single digit
`(a + b) mod 10`; `s` then becomes the sequence of digits produced, in
scan order, so each fold shortens the string by exactly one. Fold
repeatedly until only two digits remain, and report whether those two
survivors are equal.

### Example 1

```text
Input: s = "7126"
Output: true
Explanation: The folds run "7126" -> "838" -> "11". The first fold takes
(7+1) mod 10 = 8, (1+2) mod 10 = 3, (2+6) mod 10 = 8; the second takes
(8+3) mod 10 = 1 and (3+8) mod 10 = 1. The two survivors are equal.
```

### Example 2

```text
Input: s = "6091"
Output: false
Explanation: The first fold gives "690" and the second gives "59". The
final digits 5 and 9 differ.
```

### Example 3

```text
Input: s = "4488"
Output: false
Explanation: The folds run "4488" -> "826" -> "08". The survivors are the
digits 0 and 8, so the answer is false.
```

### Constraints

- `3 <= s.length <= 10⁵`
- `s` consists of digit characters only.

## Hints

### Hint 1

Folding directly performs one fewer addition on every pass — roughly
`n² / 2` single-digit additions when `n` approaches `10⁵`. Ask instead
which of the original digits can still reach the final two positions.

### Hint 2

A fold is the linear update `d[i] <- d[i] + d[i+1]` over Z/10. After
`t = n - 2` folds, survivor `k` equals `Σ C(t, j)·d[k+j] mod 10`: a slice
of Pascal's triangle weights the original digits.

### Hint 3

Only the coefficients modulo 10 matter, and `10 = 2 × 5`. Lucas' theorem
gives `C(t, j)` mod 2 from bit subsets and mod 5 from base-5 digit
products; the Chinese remainder theorem reassembles each digit.
