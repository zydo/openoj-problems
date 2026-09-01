# Primes on Prime Positions

## Description

Take the integers `1` through `n` and line them up in some order, filling
positions numbered `1` through `n`, each integer used exactly once. The
lineup is **valid** when every prime-valued integer lands on a
prime-numbered position. (Recall that `1` is not prime, and that a prime is
an integer greater than `1` whose only divisors are `1` and itself.)

How many valid lineups are there? The count can be enormous, so return it
modulo `10^9 + 7`.

### Example 1

```text
Input: n = 6
Output: 36
Explanation: The primes among 1..6 are 2, 3, and 5, and the prime positions
are exactly 2, 3, and 5. Those three primes can be scattered over those
three positions in 3! ways, and the remaining values 1, 4, 6 fill the other
three positions in 3! ways, giving 3! · 3! = 36.
```

### Example 2

```text
Input: n = 10
Output: 17280
Explanation: Four primes (2, 3, 5, 7) go into the four prime positions in
4! ways, and the six remaining values fill the rest in 6! ways:
4! · 6! = 17280.
```

### Example 3

```text
Input: n = 20
Output: 344376809
```

### Constraints

- `1 <= n <= 100`

## Hints

### Hint 1

Only two groups matter: the prime values and everything else.

### Hint 2

The primes may be ordered among the prime positions however you like, and
independently the rest may be ordered among the remaining positions.

### Hint 3

Counting the primes up to `n` is a classic sieve; the two group orderings
are factorials.
