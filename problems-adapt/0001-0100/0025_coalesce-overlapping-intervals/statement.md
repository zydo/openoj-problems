# Coalesce Overlapping Intervals

## Description

`intervals` holds closed ranges on a number line, each written `intervals[i] =
[start_i, end_i]` and covering every point from its start to its end
inclusive. Replace the collection with the fewest ranges that cover exactly
the same points: wherever ranges overlap or touch, join them into one.

Return the resulting ranges. Two ranges must be joined when one starts at or
before the other ends, so `[2,6]` and `[6,9]` become `[2,9]`; a range lying
entirely inside another simply disappears into it.

### Example 1

```text
Input: intervals = [[9,12],[3,5],[4,7]]
Output: [[3,7],[9,12]]
Explanation: [3,5] and [4,7] share the points 4 and 5, so they join into
[3,7]. [9,12] touches nothing and survives alone. The input need not be
sorted.
```

### Example 2

```text
Input: intervals = [[2,6],[6,9]]
Output: [[2,9]]
Explanation: The two ranges meet at the single point 6, and meeting counts.
```

### Example 3

```text
Input: intervals = [[0,10],[3,4],[8,9]]
Output: [[0,10]]
Explanation: [3,4] and [8,9] each lie wholly inside [0,10], so all three
collapse to the outer range.
```

### Constraints

- `1 <= intervals.length <= 10^4`
- `intervals[i].length == 2`
- `0 <= start_i <= end_i <= 10^4`

## Hints

### Hint 1

In an unordered pile, a range can overlap anything. Order the ranges by their
left ends and a range can only ever overlap something near it in that order.

### Hint 2

Walking the ordered ranges, carry just the span currently being built. A range
that begins at or before that span's right end joins it; anything later starts
a fresh span.

### Hint 3

Joining only ever moves the right end outward — the left end is settled the
moment the span opens, because nothing later in the walk can start earlier.
