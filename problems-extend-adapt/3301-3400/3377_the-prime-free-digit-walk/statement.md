# The Prime-Free Digit Walk

## Description

Two integers `n` and `m` are given, written with the same number of
digits. In one move you may pick any single digit of `n` and nudge it
one step — upward if it is below `9`, downward if it is above `0`.

Two rules bind the whole walk. Every value `n` takes along the way must
be non-prime — no prime may ever appear, the starting `n` included — and
no value may lose a leading digit, so the digit count never changes.

The cost of a walk is the sum of every value `n` holds from start to
finish, the original `n` and the final `m` both counted. Return the
smallest cost that reaches `m`, or `-1` if `m` can never be reached.

### Example 1

```text
Input: n = 10, m = 30
Output: 60
Explanation: Only the tens digit moves: 10 becomes 20, then 30. All
three values are non-prime, and 10 + 20 + 30 = 60.
```

### Example 2

```text
Input: n = 55, m = 77
Output: 330
Explanation: Lift the units to 6, cross the tens to 7, then finish the
units: 55 + 56 + 66 + 76 + 77 = 330. Prime waypoints such as 57 are
never touched.
```

### Example 3

```text
Input: n = 4, m = 6
Output: -1
Explanation: One move from 4 can only reach 3 or 5, and both are prime,
so `m` is unreachable.
```

### Constraints

- `1 <= n, m < 10⁴`
- `n` and `m` are written with the same number of digits.

## Hints

### Hint 1

Read the values as nodes of a graph: an edge joins two values that
differ by a single ±1 digit nudge, and only non-prime values may be
stood on.

### Hint 2

A sieve marks the forbidden values up front. Stepping into a value costs
that value, so a shortest-path pass with a min-heap from `n` settles the
answer.
