# Counting Deluxe Numbers Between Two Bounds

## Description

You are given two integers `l` and `r`.

Call an integer **sleek** when its decimal digits march strictly in one
direction — each digit strictly greater than the one before it, or each
digit strictly less than the one before it. Every single-digit integer is
sleek.

Call an integer **deluxe** when it is sleek, or when the sum of its digits
is a sleek number.

Return how many deluxe integers lie in the inclusive range `[l, r]`.

### Example 1

```text
Input: l = 200, r = 230
Output: 28
Explanation: The only integers in the range that are not deluxe are 209,
218, and 227: each has digits that neither strictly rise nor strictly
fall, and each has digit sum 11, whose own digits [1, 1] are not strictly
monotone either. Every other integer in the range is sleek or has a sleek
digit sum, so the answer is 31 - 3 = 28.
```

### Example 2

```text
Input: l = 227, r = 228
Output: 1
Explanation: 227 has digits [2, 2, 7], which are not strictly monotone,
and digit sum 11, whose digits [1, 1] are not strictly monotone either —
not deluxe. 228 also fails the digit test with [2, 2, 8], but its digit
sum is 12, whose digits [1, 2] strictly increase, so 228 is deluxe. The
answer is 1.
```

### Example 3

```text
Input: l = 888884, r = 888884
Output: 0
Explanation: The digits [8, 8, 8, 8, 8, 4] do not move strictly in one
direction, and the digit sum 44 has digits [4, 4], which are not strictly
monotone either. So the integer is not deluxe, and the answer is 0.
```

### Constraints

- `1 <= l <= r <= 10¹⁵`

## Hints

### Hint 1

A sleek number never repeats a digit, so there are only a few hundred of
them — enumerate them all by picking a subset of the digits and arranging
it in increasing or decreasing order.

### Hint 2

The digit sum of any integer up to `10¹⁵` is at most `144`, so the sleek
digit sums are exactly the sleek numbers in `[1, 144]`.

### Hint 3

To count the integers up to a bound whose digit sum is sleek, walk the
bound's digits: each time you place a digit smaller than the bound's own,
the remaining tail becomes unconstrained, and a precomputed table of how
many digit strings of a given length sum to each total answers it at once.

### Hint 4

Combine the counts with inclusion–exclusion — numbers with a sleek digit
sum, plus sleek numbers, minus the sleek numbers whose digit sum is also
sleek — and evaluate that at `r` and at `l - 1`.
