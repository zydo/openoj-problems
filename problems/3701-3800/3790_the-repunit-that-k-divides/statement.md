# The Repunit That k Divides

## Description

A positive integer `k` is given. Call a number a repunit when its decimal
writing is nothing but 1s — 1, 11, 111, and so on. Find the smallest
repunit that `k` divides evenly, and return how many digits it has. Should
`k` divide no repunit at all, return `-1`.

### Example 1

```text
Input: k = 9
Output: 9
Explanation: 111111111 is the first repunit divisible by 9 — every shorter
one has a digit sum below 9. Its length is 9.
```

### Example 2

```text
Input: k = 13
Output: 6
Explanation: 111111 = 13 * 8547, and none of 1, 11, 111, 1111, 11111 is a
multiple of 13. Its length is 6.
```

### Example 3

```text
Input: k = 6
Output: -1
Explanation: Every repunit ends in the digit 1, so no repunit is even, and
6 can never divide one.
```

### Constraints

- `2 <= k <= 10⁵`

## Hints

### Hint 1

Only the running value mod `k` matters — the real answer can be far too
long to build.

### Hint 2

Append one digit at a time in modular arithmetic: from remainder `rem`, the
next repunit's remainder is `(rem * 10 + 1) mod k`, starting from `1 mod k`.

### Hint 3

Stop when the remainder hits 0; if a remainder ever repeats first, the
sequence is trapped in a cycle and the answer is `-1`.
