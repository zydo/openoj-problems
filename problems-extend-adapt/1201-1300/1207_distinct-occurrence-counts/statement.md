# Distinct Occurrence Counts

## Description

Tally an integer array `arr`: every distinct value in it occurs some number
of times. Report `true` when those occurrence counts are pairwise different —
no two distinct values may appear equally often — and `false` as soon as any
two of the counts match.

### Example 1

```text
Input: arr = [4,4,7,7,7,11]
Output: true
Explanation: 4 occurs twice, 7 three times, and 11 once — the counts 2, 3,
and 1 are all different.
```

### Example 2

```text
Input: arr = [5,5,8,8]
Output: false
Explanation: Both 5 and 8 occur exactly twice, so two values share a count.
```

### Example 3

```text
Input: arr = [-6,3,3,-6,9,3]
Output: true
Explanation: The tallies are 2 for -6, 3 for 3, and 1 for 9 — pairwise
different, so the answer is true.
```

### Constraints

- `1 <= arr.length <= 1000`
- `-1000 <= arr[i] <= 1000`

## Hints

### Hint 1

Count how often each value appears — a hash map keyed by the value settles
this in one pass.

### Hint 2

The counts themselves must not repeat, so compare them against each other
with a second hash structure (or a set) and look for a collision.
