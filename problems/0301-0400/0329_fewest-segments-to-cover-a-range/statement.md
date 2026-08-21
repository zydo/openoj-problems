# Fewest Segments to Cover a Range

## Description

You are given `segments`, a list in which `segments[i] = [start, end]` stands
for the closed interval from `start` to `end` on the number line, and an
integer `span`.

Pick as few of these intervals as you can so that together they leave no point
of `[0, span]` uncovered, and return how many you picked. Intervals may overlap
freely, and two of them meeting at a shared endpoint leave no gap between them.
Return `-1` when no choice of intervals covers the whole of `[0, span]`.

### Example 1

```text
Input: segments = [[0,6],[0,2],[5,9],[3,4]], span = 9
Output: 2
Explanation: [0,6] and [5,9] together reach from 0 to 9. One interval alone
never gets that far, so two is the best possible.
```

### Example 2

```text
Input: segments = [[0,3],[2,5],[4,10],[7,9],[1,2]], span = 10
Output: 3
Explanation: [0,3], then [2,5], then [4,10]. Each one begins inside what is
already covered and pushes the covered part further right.
```

### Example 3

```text
Input: segments = [[0,2],[3,6]], span = 6
Output: -1
Explanation: Nothing covers the points between 2 and 3, so [0,6] cannot be
completed.
```

### Constraints

- `segments` holds between 1 and 100 intervals.
- `0 <= start <= end <= 100` for every interval.
- `1 <= span <= 100`.

## Hints

### Hint 1

Think of the covered part as a prefix `[0, c]` that grows. Only an interval
whose start is at most `c` can extend it, and among those the one ending
farthest to the right is never a worse pick.

### Hint 2

Sort by start, then sweep: repeatedly look at every interval starting at or
before the current `c`, remember the largest end you saw, and jump `c` there.
Each jump costs one interval.

### Hint 3

If the largest end you can reach equals `c` itself, the sweep is stuck at a
point nothing crosses, and no interval further along can help — report failure.
A single cursor into the sorted list is enough, since it never has to go back.
