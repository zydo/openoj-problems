# Longest Shared Segment

## Description

You are given an integer `n` and a 2D integer array `paths`, where each
`paths[i]` is a sequence of values, each between `0` and `n - 1`. The same
value may appear several times in one sequence, but never in two adjacent
positions.

A _segment_ of a sequence is a contiguous run of one or more of its entries.
Return the length of the longest segment that occurs somewhere inside every
sequence in `paths`, or `0` if the sequences share no segment at all.

### Example 1

```text
Input: n = 6, paths = [[2,5,1,4,0],
                       [0,3,5,1,4],
                       [5,1,4,2]]
Output: 3
Explanation: The segment [5,1,4] appears in all three sequences, and no
segment of length 4 does.
```

### Example 2

```text
Input: n = 4, paths = [[0,1],
                       [2,0],
                       [1,3]]
Output: 0
Explanation: The three sequences have no value in common, so they share no
segment.
```

### Example 3

```text
Input: n = 5, paths = [[0,1,2,4],
                       [2,0,4,1]]
Output: 1
Explanation: Every value occurs in both sequences, but no adjacent pair does,
so the longest shared segment is a single entry.
```

### Constraints

- `1 <= n <= 10⁵`
- `2 <= paths.length <= 10⁵`
- `sum(paths[i].length) <= 10⁵`
- `0 <= paths[i][j] < n`
- `paths[i]` never lists the same value in two consecutive positions.

## Hints

### Hint 1

When every sequence shares a segment of length `x`, each of them also
contains a segment of any length below `x` — chop off entries from the end.

### Hint 2

That monotonicity means the answer can be found by binary search between `0`
and the length of the shortest sequence.

### Hint 3

For one candidate length you must decide whether some identical block of
values occurs in every sequence. Comparing blocks pairwise is too slow —
reduce each block to a hash while sliding across the sequences.
