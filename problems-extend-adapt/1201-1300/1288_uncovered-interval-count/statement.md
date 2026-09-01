# Uncovered Interval Count

## Description

Each entry of the array `intervals` is a pair `[left_i, right_i]`
describing the half-open span of every `x` with `left_i <= x < right_i`.
One span `[a, b)` is swallowed by another span `[c, d)` exactly when
`c <= a` and `b <= d` — the second reaches at least as far to the left
and at least as far to the right.

Discard every span that some other span in the array swallows, and
report how many spans remain.

### Example 1

```text
Input: intervals = [[8,10],[3,7],[3,5],[1,9],[12,13]]
Output: 3
Explanation: [3,7], [3,5] both sit inside [1,9], so only [1,9],
[8,10], and [12,13] survive.
```

### Example 2

```text
Input: intervals = [[6,8],[6,5],[6,9]]
Output: 1
Explanation: All three share a start, so the widest one covers the
other two.
```

### Example 3

```text
Input: intervals = [[1,2],[3,4],[5,6]]
Output: 3
Explanation: Nothing covers anything else.
```

### Constraints

- `1 <= intervals.length <= 1000`
- `intervals[i].length == 2`
- `0 <= left_i < right_i <= 10^5`
- No two given spans are identical.

## Hints

### Hint 1

Turn the swallowing rule into endpoint comparisons: what must be true
about two pairs of numbers for one span to hold the other?

### Hint 2

Sort by start (break ties by the longer span first); then one pass that
remembers the largest end seen so far settles every span in turn.
