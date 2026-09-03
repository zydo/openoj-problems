# Slotting In One Interval

## Description

You receive a list `intervals` of pairwise disjoint ranges, each written
`[start, end]`, already ordered by `start`. A second range
`newInterval = [start, end]` has to join them.

Two ranges count as overlapping when they have even a single point in
common — touching at an endpoint is enough.

Return the list after `newInterval` has been slotted in: still ordered by
`start`, and still free of overlaps, with any ranges that overlap the new
one fused into it. Building a fresh list to return is fine; nothing needs to
be done in place.

### Example 1

```text
Input: intervals = [[2,4],[9,12],[15,19]], newInterval = [5,8]
Output: [[2,4],[5,8],[9,12],[15,19]]
Explanation: `[5,8]` overlaps nothing already present, so it simply takes
its place between `[2,4]` and `[9,12]`.
```

### Example 2

```text
Input: intervals = [[1,4],[7,9],[13,18],[20,24]], newInterval = [8,15]
Output: [[1,4],[7,18],[20,24]]
Explanation: `[8,15]` shares points with `[7,9]` and `[13,18]`, so the three
fuse into one range `[7,18]`.
```

### Constraints

- `intervals` holds between `0` and `10⁴` ranges, each exactly two values.
- Within every range, `0 <= start <= end <= 10⁵`.
- `intervals` is sorted ascending by start and its ranges never overlap.
- `newInterval` holds exactly two values with `0 <= start <= end <= 10⁵`.

## Hints

### Hint 1

The list is sorted — the ranges the new one cannot touch all sit to its
left or its right, in two clean groups.

### Hint 2

Fuse as you go: widen the new range's own ends every time you meet a range
that shares a point with it, and emit the widened range once the run ends.

### Hint 3

The split tests are asymmetric: a range belongs entirely to the left group
when its end lands strictly below the new start, and still joins the fusion
when its start reaches exactly the new end.
