# Stacking Primes From The Bottom

## Description

An integer `n` is given. Start from the smallest prime, `2`, and keep
stacking the next prime in line on top: `2`, then `2 + 3`, then
`2 + 3 + 5`, and so on — every level of the stack extends the previous
one by exactly the next prime. Stop the moment adding a prime would push
the running total past `n`.

Among the levels that fit within `n`, some totals are themselves prime.
Return the largest of them, or `0` if no level qualifies.

### Example 1

```text
Input: n = 100
Output: 41
Explanation: The running totals are 2, 5, 10, 17, 28, 41, 58, 77, 100 —
the next prime, 103, would overshoot 100. Of those totals, 2, 5, 17,
and 41 are prime, and 41 is the largest.
```

### Example 2

```text
Input: n = 6
Output: 5
Explanation: The totals that fit are 2 and 5; both are prime, so the
answer is 5.
```

### Example 3

```text
Input: n = 1
Output: 0
Explanation: Even the first total, 2, overshoots 1, so no level fits
and the answer is 0.
```

### Constraints

- `1 <= n <= 5 * 10⁵`

## Hints

### Hint 1

A sieve up to `n` settles primality once for every value the stack can
ever produce.

### Hint 2

The stack is just the sequence of prefix sums of the primes — and with
roughly `n / ln n` primes below `n`, only a few hundred levels can ever
fit.

### Hint 3

Totals only grow, so the walk halts as soon as the stack passes `n`, and
the last prime total seen along the way is already the answer.
