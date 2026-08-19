# Shared Gaps Across Timelines

## Description

`timelines` contains several lists of occupied intervals. Within each list,
the intervals are sorted and do not overlap.

Return every finite, positive-length interval that is unoccupied across all
timelines. Sort the returned gaps by their start. Intervals that meet at one
endpoint leave no gap between them.

### Example 1

```text
Input: timelines = [[[2,4],[9,11]],[[0,3]],[[5,8]]]
Output: [[4,5],[8,9]]
Explanation: Pooling all occupied time produces the blocks [0,4], [5,8],
and [9,11].
```

### Example 2

```text
Input: timelines = [[[0,2],[7,9]],[[2,6]],[[11,13]]]
Output: [[6,7],[9,11]]
Explanation: [0,2] and [2,6] touch, so they form one continuous occupied
block rather than exposing a zero-length gap.
```

### Constraints

- `1 <= timelines.length, timelines[i].length <= 50`
- `0 <= timelines[i][j][0] < timelines[i][j][1] <= 10^8`
- Each individual timeline is sorted by start and contains no overlapping
  intervals.

## Hints

### Hint 1

Only the union of occupied intervals matters; their timeline of origin does
not affect the shared gaps.

### Hint 2

Pool and sort all intervals, then sweep while maintaining the furthest end of
the current occupied block.

### Hint 3

Emit a gap only when the next start is strictly greater than that running
end. Gaps before the first block and after the last are not finite.

### Follow-up

How could a heap merge the already sorted timelines without sorting the full
pooled list?
