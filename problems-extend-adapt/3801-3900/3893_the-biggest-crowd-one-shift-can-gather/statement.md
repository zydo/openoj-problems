# The Biggest Crowd One Shift Can Gather

## Description

You are given two integer arrays `startTime` and `endTime`, both of length
`n`. Employee `i` is on the clock for the stretch from `startTime[i]` through
`endTime[i]`, endpoints included.

Two employees can interact when their stretches share even a single moment.
A crowd is any group of employees in which one member interacts with every
other member of the group.

How large can a crowd get? Return that maximum size.

### Example 1

```text
Input: startTime = [1,3,5,2], endTime = [9,8,7,4]
Output: 4
Explanation: Employee 0 stays on the clock from 1 to 9, which swallows
every other stretch — 3-8, 5-7, and 2-4 all lie inside it. One anchor
reaches all three, so all four employees form a crowd.
```

### Example 2

```text
Input: startTime = [10,12,14], endTime = [12,14,16]
Output: 3
Explanation: The middle stretch [12, 14] touches [10, 12] at moment 12 and
[14, 16] at moment 14, so it interacts with both neighbours and anchors a
crowd of 3 — even though the two outer stretches never share a moment with
each other.
```

### Example 3

```text
Input: startTime = [8], endTime = [8]
Output: 1
Explanation: With a single employee there is nobody else to reach, so the
crowd is just that one person.
```

### Constraints

- `1 <= n == startTime.length == endTime.length <= 10⁵`
- `0 <= startTime[i] <= endTime[i] <= 10⁹`

## Hints

### Hint 1

For a fixed anchor stretch, the crowd it gathers is exactly the set of
stretches that overlap it — so the answer is the largest overlap count any
single stretch achieves.

### Hint 2

Stretch `[a, b]` overlaps `[s, e]` precisely when `s <= b` and `a <= e`;
sorted copies of both arrays turn each count into two binary searches.

### Hint 3

Count starts at most `e`, then subtract ends strictly below `s` — the
second set sits entirely inside the first, so the difference is the number
of overlapping stretches, anchor included.
