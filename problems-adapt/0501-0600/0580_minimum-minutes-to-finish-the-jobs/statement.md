# Minimum Minutes to Finish the Jobs

## Description

You are given an integer array `cycles`. Worker `i` takes `cycles[i]`
minutes to finish one job, then starts the next immediately, running its
jobs back to back. Workers operate independently of one another.

You are also given an integer `quota`. Return the fewest minutes after
which the workers have, between them, finished at least `quota` jobs.

### Example 1

```text
Input: cycles = [2,3,4], quota = 7
Output: 8
Explanation: By minute 7 the three workers have finished 3 + 2 + 1 = 6 jobs.
One minute later the first two have both completed another, giving
4 + 2 + 2 = 8, which meets the quota of 7 — so minute 8 is the earliest.
```

### Example 2

```text
Input: cycles = [6], quota = 4
Output: 24
Explanation: A lone worker finishing four six-minute jobs back to back
needs 4 · 6 = 24 minutes.
```

### Example 3

```text
Input: cycles = [1,4], quota = 8
Output: 7
Explanation: The quick worker supplies one job per minute; the slow one
contributes a job at minute 4 and another at minute 7. At minute 7 the
total is 7 + 1 = 8; at minute 6 it is only 6 + 1 = 7.
```

### Constraints

- `1 <= cycles.length <= 10^5`
- `1 <= cycles[i], quota <= 10^7`

## Hints

### Hint 1

Suppose you knew the finishing minute `t`. How many jobs has worker `i`
completed by then — and what is the fleet-wide total?

### Hint 2

That total is `sum(t // cycles[i])`, and it never decreases as `t` grows.
What does that monotonicity let you do to find the first feasible minute?

### Hint 3

Binary search over `t`. An upper bound for the search is
`min(cycles) * quota` — the fastest worker alone can finish everything.
