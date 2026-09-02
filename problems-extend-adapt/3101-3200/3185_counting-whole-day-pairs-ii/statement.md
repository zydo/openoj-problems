# Counting Whole-Day Pairs II

## Description

A logistics planner holds a list of shift lengths, each given in hours.
A pair of shifts covers whole days exactly when their combined length is
a multiple of 24 — one day is 24 hours, two days are 48, and so on. The
planner wants to know how many ways two distinct shifts can be teamed up
that way.

Given an integer array `hours` of shift lengths, count the index pairs
`(i, j)` with `i < j` such that `hours[i] + hours[j]` is divisible by
24, and return that count. The list may be far too long to compare every
pair of shifts directly, so the counting has to be organized around the
remainders the lengths leave after division by 24.

### Example 1

```text
Input: hours = [25,23,47,1]
Output: 4
Explanation:
The qualifying pairs are (0, 1), (0, 2), (1, 3), and (2, 3): 25 + 23,
25 + 47, 23 + 1, and 47 + 1 are each a multiple of 24.
```

### Example 2

```text
Input: hours = [1000000000,8,999999992]
Output: 2
Explanation:
All three lengths are near a billion hours, yet only their remainders
mod 24 matter: 16 + 8 completes a day, so pairs (0, 1) and (0, 2)
qualify.
```

### Example 3

```text
Input: hours = [12,36,12,60,12]
Output: 10
Explanation:
Every length here is a multiple of 12 but not of 24, so any two of them
combine to a multiple of 24 — all 10 pairs qualify.
```

### Constraints

- `1 <= hours.length <= 5 * 10⁵`
- `1 <= hours[i] <= 10⁹`

## Hints

### Hint 1

A pair `(i, j)` qualifies exactly when `(hours[i] + hours[j]) % 24 == 0`,
so only the residue of each length modulo 24 is relevant.

### Hint 2

Sweep left to right with one running count per residue class: when a
length with residue `r` arrives, first add the number of earlier lengths
with residue `(24 - r) % 24`, then record `r` in its own class.
