# Letter-for-Letter Dominance

## Description

Two strings `s1` and `s2` of the same length are given. Say that a
string `x` dominates a string `y` — both of length `n` — when the
letters can be lined up so that `x` wins every position: there are
ways to rearrange each string such that `x[i] >= y[i]` alphabetically
for every index `i` from `0` to `n - 1`.

Both sides may rearrange freely before the comparison. Decide whether
either string can dominate the other: some rearrangement of `s1`
dominating some rearrangement of `s2`, or the other way around.

### Example 1

```text
Input: s1 = "tap", s2 = "cat"
Output: true
Explanation: Line up "apt" (a rearrangement of s1) against "act"
(a rearrangement of s2): a >= a, p >= c, t >= t, so s1 dominates.
```

### Example 2

```text
Input: s1 = "cat", s2 = "sun"
Output: true
Explanation: This time the second side wins the lineup: "nsu" against
"act" gives n >= a, s >= c, u >= t at every position.
```

### Example 3

```text
Input: s1 = "bcd", s2 = "ace"
Output: false
Explanation: Whichever side leads the comparison, at least one
position falls short — neither string can dominate the other in any
arrangement.
```

### Constraints

- `s1.length == n`
- `s2.length == n`
- `1 <= n <= 10⁵`
- Both strings consist only of lowercase English letters.

## Hints

### Hint 1

Since both sides may rearrange however they like, the letters' original
order carries no information — sort each string once and the whole
question collapses into one position-by-position comparison.

### Hint 2

Try the sorted comparison in both directions and take the disjunction;
one of the two directions succeeds exactly when some pair of
rearrangements does.
