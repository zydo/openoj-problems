# The Cheapest Prime Sum

## Description

You are given two integers, `n` and `m`.

Consider the first `m` prime numbers — 2, 3, 5, and so on. Build a
collection of these primes, repetitions allowed, whose values add up to
exactly `n`.

Return the smallest number of primes such a collection can contain, or `-1`
when no collection of them reaches `n` exactly.

### Example 1

```text
Input: n = 26, m = 3
Output: 6
Explanation: The first 3 primes are [2, 3, 5]. The total 26 is reached by
5 + 5 + 5 + 5 + 3 + 3, which uses 6 primes, and no selection uses fewer.
```

### Example 2

```text
Input: n = 30, m = 4
Output: 5
Explanation: The first 4 primes are [2, 3, 5, 7]. The total 30 is reached
by 7 + 7 + 7 + 7 + 2, which uses 5 primes, and nothing cheaper exists.
```

### Example 3

```text
Input: n = 9, m = 1
Output: -1
Explanation: The only prime offered is 2, and every sum of 2s is even, so
the odd total 9 can never be formed.
```

### Example 4

```text
Input: n = 12, m = 1
Output: 6
Explanation: With 2 as the only prime, the total 12 needs six copies of it.
```

### Constraints

- `1 <= n <= 1000`
- `1 <= m <= 1000`

## Hints

### Hint 1

Only the count of primes matters, not which copies are used — this is the
shape of a coin-change problem and yields to dynamic programming.

### Hint 2

Build the first `m` primes first; a prime above `n` can never take part in
a sum of `n`.

### Hint 3

Let `dp[i]` be the fewest primes that total exactly `i`. Fill it from
smaller totals upward, trying every allowed prime as the last term.
