# Cube Sums Reached Two Ways

## Description

You are given an integer `n`.

Call a positive integer `x` shared when it can be written as `a³ + b³` for
at least two different pairs `(a, b)` of positive integers with `a <= b`.
Two pairs count as different as soon as they differ in either entry.

Return every shared integer that does not exceed `n`, listed from smallest
to largest.

### Example 1

```text
Input: n = 13832
Output: [1729,4104,13832]
Explanation: 1729 = 1³ + 12³ = 9³ + 10³, 4104 = 2³ + 16³ = 9³ + 15³,
and 13832 = 2³ + 24³ = 18³ + 20³. No other integer up to 13832 has two
pairings, so the answer is [1729, 4104, 13832].
```

### Example 2

```text
Input: n = 1728
Output: []
Explanation: The smallest integer with two pairings is 1729, so nothing
at or below 1728 qualifies.
```

### Example 3

```text
Input: n = 60000
Output: [1729,4104,13832,20683,32832,39312,40033,46683]
Explanation: These eight integers each admit at least two pairings and
none above 46683 does before 60000.
```

### Constraints

- `1 <= n <= 10⁹`

## Hints

### Hint 1

`n <= 10⁹` caps each base at `1000`, so the number of pairs
`(a, b)` worth checking is modest.

### Hint 2

Walk every pair with `a <= b` whose cube sum stays within `n`, and tally
how many pairs land on each sum.

### Hint 3

The sums whose tally reaches two are exactly the shared integers; sort
them before returning.
