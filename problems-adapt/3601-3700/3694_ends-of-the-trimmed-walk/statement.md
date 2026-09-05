# Ends Of The Trimmed Walk

## Description

You are given a string `s` whose letters are unit steps of a walk on an
unbounded two-dimensional grid, taken from left to right:

```text
'U': (x, y) -> (x, y + 1)
'D': (x, y) -> (x, y - 1)
'L': (x, y) -> (x - 1, y)
'R': (x, y) -> (x + 1, y)
```

You are also given a positive integer `k`. Trim the walk by cutting out
exactly one contiguous stretch of exactly `k` letters, then replay the
surviving letters in order, starting from `(0, 0)`. Which stretch you cut
changes where the trimmed walk finishes. Return how many distinct finishing
coordinates can be produced by choosing among all possible stretches.

### Example 1

```text
Input: s = "RRUL", k = 1
Output: 3
Explanation: Cutting the first or second 'R' leaves "RUL", which ends at
(0, 1); cutting the 'U' leaves "RRL", ending at (1, 0); cutting the 'L'
leaves "RRU", ending at (2, 1). Three distinct coordinates appear.
```

### Example 2

```text
Input: s = "UUDD", k = 2
Output: 3
Explanation: The possible cuts leave "DD", "UD", or "UU", which finish at
(0, -2), (0, 0), and (0, 2) respectively — three distinct endings.
```

### Example 3

```text
Input: s = "RL", k = 1
Output: 2
Explanation: Cutting one letter leaves "L" or "R", which finish at
(-1, 0) and (1, 0).
```

### Example 4

```text
Input: s = "RR", k = 2
Output: 1
Explanation: The only possible cut removes everything, so the trimmed
walk has no steps and stays at (0, 0).
```

### Constraints

- `1 <= s.length <= 10^5`
- `s` consists of only `'U'`, `'D'`, `'L'`, and `'R'`.
- `1 <= k <= s.length`

## Hints

### Hint 1

Accumulate running sums of the x- and y-displacement along `s` from the
left.

### Hint 2

Those running sums hand you any length-`k` stretch's displacement in
constant time; the endpoint after cutting it is the full walk's
displacement minus the stretch's.
