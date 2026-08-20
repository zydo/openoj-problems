# Primes Below N

## Description

You are given an integer `n`. Count how many prime numbers are strictly
smaller than `n`, and return that count.

`n` itself does not count, even when `n` is prime.

### Example 1

```text
Input: n = 12
Output: 5
Explanation: The primes below 12 are 2, 3, 5, 7 and 11.
```

### Example 2

```text
Input: n = 2
Output: 0
Explanation: No prime is smaller than 2, the least of them.
```

### Example 3

```text
Input: n = 30
Output: 10
Explanation: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 lie below 30.
```

### Constraints

- `0 <= n <= 5 × 10⁶`

## Hints

### Hint 1

Testing each integer below `n` on its own repeats the same divisor work many
times over. The bound rules that out — the counting has to be done wholesale.

### Hint 2

Composites outnumber primes by far; the efficient route marks the composites
below `n` collectively rather than probing numbers one by one.

### Hint 3

Sieve of Eratosthenes: each time a prime is identified, cross off its
multiples; whatever is never crossed off is prime. Count the survivors.
