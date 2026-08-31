# Exact Square Check

## Description

You are given a positive integer `num`. Determine whether `num` is the
square of some integer, and return `true` if it is, `false` otherwise.

In other words, decide whether there exists an integer `r` such that
`r * r` equals `num` exactly.

Solve it without calling a built-in square-root or power function — use
only ordinary arithmetic.

### Example 1

```text
Input: num = 25
Output: true
Explanation: 5 * 5 = 25, and 5 is an integer, so 25 is an exact square.
```

### Example 2

```text
Input: num = 26
Output: false
Explanation: No integer squares to 26 — 5 * 5 = 25 and 6 * 6 = 36 both
miss it.
```

### Constraints

- `1 <= num <= 2³¹ - 1`
