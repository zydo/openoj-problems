# Nearest Prime Pair in a Range

## Description

You are given a closed integer window `[left, right]`. Find the two
primes `p < q` that both sit in the window and minimize the gap
`q - p` over every qualifying pair, and return them as `[p, q]`. If
several pairs share the smallest gap, answer with the one whose smaller
member `p` is lowest. A window holding fewer than two primes offers no
pair at all — return `[-1, -1]` in that case.

### Example 1

```text
Input: left = 1, right = 20
Output: [2,3]
Explanation: The primes in the window are 2, 3, 5, 7, 11, 13, 17, and
19. The tightest gap anywhere is the single unit between 2 and 3, so
that pair is the answer.
```

### Example 2

```text
Input: left = 14, right = 16
Output: [-1,-1]
Explanation: None of 14, 15, or 16 is prime, so the window cannot
supply two primes.
```

### Example 3

```text
Input: left = 340, right = 420
Output: [347,349]
Explanation: The window's primes open with 347, 349, 353, and no other
adjacent gap in the range is smaller than the 2 between 347 and 349.
```

### Constraints

- `1 <= left <= right <= 10⁶`

## Hints

### Hint 1

Sieve of Eratosthenes up to `right` flags every prime in the window in
one global pass — no per-number primality testing required.

### Hint 2

Sweep the window in ascending order while remembering the previous prime
seen. Because a pair with another prime strictly between its members can
never beat the adjacent gaps inside it, the best answer is always the
narrowest gap between adjacent primes; refusing to replace on equal gaps
keeps the earliest `p` among ties.
