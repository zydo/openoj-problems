# Leveling The Factors

## Description

Two integers `n` and `k` are given. Write `n` as a product of exactly `k`
positive integers.

Among all ways to do that, find one whose largest and smallest numbers
are as close together as possible — the gap `max - min` must be the
smallest any split of `n` into `k` factors can achieve.

So that a unique answer can be checked, output the `k` numbers in
nondecreasing order, and when several splits reach the same smallest gap,
output the lexicographically smallest of those sequences.

### Example 1

```text
Input: n = 60, k = 3
Output: [3,4,5]
Explanation: 3 * 4 * 5 = 60 and the spread is 5 - 3 = 2. No split of 60
into three factors brings its largest and smallest numbers any closer.
```

### Example 2

```text
Input: n = 12, k = 2
Output: [3,4]
Explanation: [3,4] multiplies to 12 with a gap of 1, while the other
splits [2,6] and [1,12] sit 4 and 11 apart.
```

### Example 3

```text
Input: n = 210, k = 4
Output: [2,3,5,7]
Explanation: 2 * 3 * 5 * 7 = 210, and every factor lies within 5 of the
smallest one.
```

### Constraints

- `4 <= n <= 10⁵`
- `2 <= k <= 5`
- `k` is strictly smaller than the number of positive divisors of `n`.

## Hints

### Hint 1

Every factor a split can use divides `n`, so collect the divisor list
once — trial division up to `sqrt(n)` gathers each pair `(d, n // d)` —
and sort it.

### Hint 2

Build splits with a depth-first search: choose each next factor from the
sorted divisor list, never before the previous pick, multiplying as you
go. Splits then complete in nondecreasing, lexicographic order.

### Hint 3

Track the split that minimizes last-minus-first along the way; replacing
the best only on a strict improvement automatically keeps the
lexicographically smallest of any tied splits.
