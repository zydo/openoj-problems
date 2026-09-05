# Run-Limited Binary Arrays II

## Description

A binary array is run-limited with budget `limit` when neither symbol
ever repeats more than `limit` times consecutively — every subarray
longer than `limit` is then guaranteed to hold both a `0` and a `1`.

Given three positive integers `zero`, `one`, and `limit`, count the
binary arrays whose totals of `0`s and `1`s are exactly `zero` and
`one` and which are run-limited with budget `limit`. The count grows
fast, so report it modulo 10^9 + 7.

### Example 1

```text
Input: zero = 1, one = 3, limit = 2
Output: 2
Explanation: The lone 0 must split the three 1s into runs of at most
two, which allows only [1,1,0,1] and [1,0,1,1].
```

### Example 2

```text
Input: zero = 3, one = 2, limit = 1
Output: 1
Explanation: Equal neighbors are banned outright, so five cells must
strictly alternate, and only [0,1,0,1,0] carries three 0s.
```

### Example 3

```text
Input: zero = 4, one = 4, limit = 3
Output: 62
Explanation: For instance, [0,0,0,1,1,0,1,1] qualifies because no run
exceeds 3, while [1,1,1,1,0,0,0,0] does not.
```

### Constraints

- `1 <= zero, one, limit <= 1000`

## Hints

### Hint 1

Let dp[x][y][d] count the run-limited arrays holding exactly x zeros
and y ones whose last bit is d. The requested value is
dp[zero][one][0] + dp[zero][one][1].

### Hint 2

Extend a state by appending a whole block of `k = 1..limit` copies of
the opposite bit, which makes each transition a sum over a window of
`limit` neighbouring states.

### Hint 3

Keep rolling window sums — prefix totals along one axis, a running
total along the other — so every transition costs O(1) even at these
bounds.
