# Kth Smallest Divisor

## Description

Two positive integers `n` and `k` are given. An integer `i` divides `n`
exactly when `n % i == 0`; such an `i` is a factor of `n`.

Line up every factor of `n` in increasing order and hand back the one
standing at position `k`. When `n` does not have `k` factors in total,
answer `-1` instead.

### Example 1

```text
Input: n = 24, k = 5
Output: 6
Explanation: The factors in order are [1, 2, 3, 4, 6, 8, 12, 24]; the
5th of them is 6.
```

### Example 2

```text
Input: n = 9, k = 3
Output: 9
Explanation: The factors in order are [1, 3, 9]; the 3rd of them is 9.
```

### Example 3

```text
Input: n = 18, k = 7
Output: -1
Explanation: The factors in order are [1, 2, 3, 6, 9, 18] — only six of
them, so a 7th does not exist.
```

### Constraints

- `1 <= k <= n <= 1000`

### Follow up

Can you get there without paying the full `O(n)` scan?

## Hints

### Hint 1

Every factor of `n` lives somewhere in `[1, n]`, so that interval is all
you ever need to search.

### Hint 2

Count your way up through the candidates, keeping each `i` that leaves
no remainder; the `k`-th such value — if the count ever reaches `k` — is
the answer.
