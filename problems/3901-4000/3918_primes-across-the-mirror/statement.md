# Primes Across The Mirror

## Description

You are given an integer `n`.

Reflect `n` in the digit mirror: `r` is the number whose digits are `n`'s
digits in reverse order (a reversed leading zero simply disappears, so 120
reflects to 21).

Return the total of every prime that lies between `min(n, r)` and
`max(n, r)`, counting both endpoints.

### Example 1

```text
Input: n = 25
Output: 228
Explanation:
    The mirror image of 25 is 52, so the span is [25, 52].
    The primes inside it are 29, 31, 37, 41, 43, and 47.
    Their total is 29 + 31 + 37 + 41 + 43 + 47 = 228.
```

### Example 2

```text
Input: n = 120
Output: 1516
Explanation:
    Reversed, 120 reads 021, which is just 21. The span therefore runs from
    21 up to 120, and the primes in that span add up to 1516.
```

### Example 3

```text
Input: n = 100
Output: 1060
Explanation:
    The mirror image of 100 is 1. Every prime from 2 through 97 falls in
    [1, 100], and they total 1060.
```

### Constraints

- `1 <= n <= 1000`

## Hints

### Hint 1

A tiny sieve over the full value domain answers every primality question
in advance.

### Hint 2

Build the reversed number digit by digit — peeling the last digit of `n`
and appending it — and let the numeric parse discard the stray leading
zero for you.

### Hint 3

With a prefix sum over the sieve, each query is one subtraction between
the two endpoints.
