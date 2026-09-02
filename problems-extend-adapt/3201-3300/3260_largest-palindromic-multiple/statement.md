# Largest Palindromic Multiple

## Description

You are given two positive integers `n` and `k`.

Find the largest integer that has exactly `n` digits, reads the same
forwards and backwards, and is a multiple of `k`. Return it as a string.

The answer never has a leading zero, and it always exists.

### Example 1

```text
Input: n = 3, k = 7
Output: "959"
Explanation: 959 = 7 x 137, and no larger three-digit palindrome is a
multiple of 7.
```

### Example 2

```text
Input: n = 2, k = 4
Output: "88"
Explanation: 88 = 4 x 22 beats the only other candidate, 44.
```

### Example 3

```text
Input: n = 4, k = 6
Output: "8778"
Explanation: 8778 = 6 x 1463 is the greatest four-digit palindrome that 6
divides.
```

### Constraints

- `1 <= n <= 10⁵`
- `1 <= k <= 9`

## Hints

### Hint 1

A palindrome of length `n` is fixed by its first half, and only its
remainder mod `k` matters — never the full number, which is far too large
to build.

### Hint 2

Each half-position `j` contributes `d × (10^(n-1-j) + 10^j)` for its digit
`d`, with the middle digit of an odd length counted once; reduce all these
weights mod `k`.

### Hint 3

Work from the left picking the largest digit that can still be completed:
precompute, for every suffix of the half, the set of residues its free
digits can still add, and keep the total at zero at the end.
