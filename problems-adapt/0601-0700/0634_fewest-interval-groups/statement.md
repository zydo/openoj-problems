# Fewest Interval Groups

## Description

You are given a list `intervals` of inclusive ranges, `intervals[i] =
[left_i, right_i]`.

Split the ranges into groups so that each range belongs to exactly one group
and no two ranges in the same group share a point. Two ranges share a point
when some number belongs to both — `[1, 5]` and `[5, 9]` share the point 5, so
they may not sit together.

Return the fewest groups such a split needs.

### Example 1

```text
Input: intervals = [[1,4],[3,6],[8,9],[9,12],[2,11]]
Output: 3
Explanation: Three groups suffice:
- Group 1: [1,4] and [8,9].
- Group 2: [3,6] and [9,12].
- Group 3: [2,11] on its own.
Three is also a floor: at the point 3 the ranges [1,4], [3,6], and [2,11] all
coincide, and any point covered by d ranges forces d separate groups.
```

### Example 2

```text
Input: intervals = [[2,4],[6,7],[9,11]]
Output: 1
Explanation: The ranges never touch one another, so one group holds all three.
```

### Example 3

```text
Input: intervals = [[1,5],[5,9]]
Output: 2
Explanation: Both ranges cover the point 5 — inclusive endpoints make them
intersect — so each needs its own group.
```

### Constraints

- `1 <= intervals.length <= 10⁵`
- each range is a pair: `intervals[i].length == 2`
- `1 <= left_i <= right_i <= 10⁶`

## Hints

### Hint 1

A point covered by `d` ranges forces `d` groups, since those ranges pairwise
intersect there. What is the largest such `d`, and why does it also suffice as
a group count?

### Hint 2

Pull the start points and the end points into two separately sorted arrays and
sweep both with two pointers — openings raise the running depth, closings lower
it.

### Hint 3

Watch the comparison at the tie: a start exactly equal to an end must count as
an opening first, or inclusive touch would be scored as disjoint.
