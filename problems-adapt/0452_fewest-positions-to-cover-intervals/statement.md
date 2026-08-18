# Fewest Positions To Cover Intervals

## Description

You are given a list of closed intervals, where `intervals[i] = [start, end]`
spans every real position from `start` through `end`, both ends included.

A position `x` covers an interval when it lies inside it: `start <= x <=
end`. Pick a set of positions that covers every interval, using as few
positions as possible, and return that smallest count.

One position may serve many intervals at once, and intervals that merely
touch at a shared endpoint — one ending exactly where the next begins — can
be covered by that single shared position.

### Example 1

```text
Input: intervals = [[3,9],[1,4],[6,11],[2,5]]
Output: 2
Explanation: The position 4 sits inside [1,4], [2,5], and [3,9] at once.
The position 11 handles [6,11]. Two positions are enough, and [6,11] forces
the second one — it touches none of the others.
```

### Example 2

```text
Input: intervals = [[2,5],[7,9],[12,14],[18,20]]
Output: 4
Explanation: No two intervals overlap, so each needs its own position.
```

### Example 3

```text
Input: intervals = [[-6,-2],[-3,1],[0,4]]
Output: 2
Explanation: -3 lies in both [-6,-2] and [-3,1]; 0 lies in both [-3,1] and
[0,4]. Endpoints are inclusive, and coordinates may be negative.
```

### Constraints

- `1 <= intervals.length <= 10^5`
- `intervals[i].length == 2`
- `-2^31 <= start < end <= 2^31 - 1`

## Hints

### Hint 1

Order the intervals by where they end. The interval that ends first is the
most urgent: any position covering it cannot lie beyond that right end.

### Hint 2

Among positions covering the earliest-ending interval, its right end is never
worse than any other — sliding a position rightward can only reach more
intervals whose starts lie at or before it.

### Hint 3

Sweep the sorted list remembering the last position chosen. Skip every
interval that already contains it; when one does not, choose that interval's
right end next. The count of chosen positions is the answer.
