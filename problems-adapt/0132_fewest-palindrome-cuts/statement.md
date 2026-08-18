# Fewest Palindrome Cuts

## Description

You are given a string `s`. Cut it into consecutive **pieces** so that every
piece reads the same in both directions, and report how few cuts that takes.

A cut falls between two letters, so a string already readable in both
directions needs none.

### Example 1

```text
Input: s = "sever"
Output: 2
Explanation: Cut once before and once after eve, leaving the pieces s, eve, r.
No single cut works, since neither sever nor any two-piece split qualifies.
```

### Example 2

```text
Input: s = "otto"
Output: 0
Explanation: The whole string reads the same in both directions, so it is one
qualifying piece on its own.
```

### Example 3

```text
Input: s = "abcdef"
Output: 5
Explanation: No stretch of two or more letters reads both ways, so every
letter must be its own piece: five cuts for six pieces.
```

### Constraints

- `s` holds between `1` and `2000` lowercase English letters.

### Follow-up

This can be done in `O(n²)` time with only a linear amount of extra memory,
without ever building a table of palindrome verdicts. How?

## Hints

### Hint 1

Let `cut[i]` be the fewest cuts for the first `i` letters. The final piece of
such a partition is some qualifying stretch ending at letter `i`, so `cut[i]`
is the smallest `cut[j] + 1` over every start `j` whose stretch from `j` to
`i` qualifies.

### Hint 2

Testing every stretch from scratch is what makes this feel cubic. Instead walk
every possible centre of a qualifying stretch — a letter, or the gap between
two letters — and widen outward while the ends keep matching: each widening
step hands you one more qualifying stretch at no cost, and it can relax
`cut[r + 1]` with `cut[l] + 1` on the spot.

### Hint 3

Seed `cut[0] = -1`, so that a prefix which is itself one qualifying stretch
lands at zero cuts, and start every other entry at its all-single-letters
value before relaxing anything.
