# Minimum Interval Removals

## Description

Given a collection of closed endpoint pairs `[start, end]`, remove as few
intervals as possible so that no two remaining intervals overlap. Intervals
that meet only at an endpoint are compatible.

Return the minimum number removed.

### Example 1

```text
Input: intervals = [[-2,1],[1,4],[4,7],[-2,4]]
Output: 1
Explanation: Removing [-2,4] leaves three intervals that only touch at their endpoints.
```

### Example 2

```text
Input: intervals = [[5,9],[5,9],[5,9],[5,9]]
Output: 3
Explanation: At most one copy can remain.
```

### Example 3

```text
Input: intervals = [[-5,-2],[-2,0],[0,6]]
Output: 0
Explanation: Consecutive intervals meet but do not overlap.
```

### Constraints

- `1 <= intervals.length <= 10^5`
- Every entry in `intervals` contains exactly two integers.
- `-5 * 10^4 <= start < end <= 5 * 10^4` for each interval.

## Hints

### Hint 1

Minimizing removals is equivalent to retaining as many mutually compatible
intervals as possible.

### Hint 2

Sort by right endpoint and keep the next interval whose start is at least the
last retained endpoint.

### Hint 3

Subtract the number retained by that greedy sweep from the input size.
