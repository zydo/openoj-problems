# Carving A Gap In Booked Time

## Description

You are given a 2D integer array `occupiedIntervals`, where
`occupiedIntervals[i] = [starti, endi]` marks a stretch of time you are
booked, from `starti` through `endi` inclusive. The stretches may pile up on
one another however they like.

Two integers `freeStart` and `freeEnd` describe one window of free time,
from `freeStart` through `freeEnd` inclusive, that has to be carved out.

First fuse every booked stretch that overlaps or touches a neighbor. Two
stretches touch when the second begins exactly one tick after the first
ends — so `[1, 1]` and `[2, 2]` fuse into `[1, 2]`. Then drop every integer
point of that free window from what is left.

Report the surviving stretches sorted by start, overlapping nothing and as
few in number as possible. If no booked point remains, return an empty
list.

### Example 1

```text
Input: occupiedIntervals = [[1,4],[3,7],[9,9],[9,11],[13,15]],
freeStart = 5, freeEnd = 10
Output: [[1,4],[11,11],[13,15]]
Explanation:
    Fusing neighbours first gives the stretches [1, 7], [9, 11] and
    [13, 15].

        [1, 7] loses its points from 5 onward, leaving [1, 4].
        [9, 11] loses everything through 10, leaving [11, 11].
        [13, 15] never meets the free window and survives whole.
```

### Example 2

```text
Input: occupiedIntervals = [[2,2],[3,5]], freeStart = 1, freeEnd = 6
Output: []
Explanation: The two stretches touch — 3 begins one tick after 2 ends — so
they fuse into [2, 5], and the free window [1, 6] swallows every one of
those points.
```

### Example 3

```text
Input: occupiedIntervals = [[4,10]], freeStart = 2, freeEnd = 6
Output: [[7,10]]
Explanation: The single stretch only clips on its early side; points 7
through 10 stay booked.
```

### Constraints

- `1 <= occupiedIntervals.length <= 5 * 10⁴`
- `occupiedIntervals[i].length == 2`
- `1 <= starti <= endi <= 10⁹`
- `1 <= freeStart <= freeEnd <= 10⁹`

## Hints

### Hint 1

Put the booked stretches in order of their starting points before doing
anything else.

### Hint 2

While fusing, join the next stretch onto the current one whenever it starts
no later than one tick past the current stretch's end.

### Hint 3

Each fused stretch can then be cut independently against
`[freeStart, freeEnd]`.

### Hint 4

One stretch may vanish entirely, lose an end, come through untouched, or
break into two pieces.
