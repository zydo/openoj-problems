# Picking Disjoint Weighted Intervals

## Description

You are given a 2D integer array `intervals`, where
`intervals[i] = [left, right, weight]`: interval `i` spans the positions
from `left` through `right` and carries a value of `weight`.

Pick at most 4 of the intervals so that no two picked intervals share any
point — two intervals that touch at an endpoint also count as sharing. The
score of a pick is the sum of the picked intervals' weights.

Return the lexicographically smallest list of at most 4 original indices
whose intervals are pairwise disjoint and reach the maximum possible score.

### Example 1

```text
Input: intervals = [[2,4,3],[5,7,4],[1,3,2],[8,10,5],[6,8,1],[9,12,4]]
Output: [0,1,3]
Explanation: Intervals 0, 1, and 3 carry weights 3, 4, and 5. They are
pairwise disjoint and no disjoint pick scores more than 3 + 4 + 5 = 12.
```

### Example 2

```text
Input: intervals = [[1,2,10],[2,3,10],[3,4,10],[4,5,10]]
Output: [0,2]
Explanation: Touching endpoints already overlap, so interval 1 clashes
with both neighbors and intervals 0 and 2 are as much as can be combined:
10 + 10 = 20.
```

### Example 3

```text
Input: intervals = [[1,5,2],[3,8,9],[7,10,2],[12,15,4],[9,11,8]]
Output: [1,3,4]
Explanation: Intervals 1, 4, and 3 carry weights 9, 8, and 4 and end
before their successors begin, so the score 9 + 8 + 4 = 21 is achievable
and maximal.
```

### Constraints

- `1 <= intervals.length <= 5 * 10⁴`
- `intervals[i].length == 3`
- `intervals[i] = [left, right, weight]`
- `1 <= left <= right <= 10⁹`
- `1 <= weight <= 10⁹`

## Hints

### Hint 1

Count how many intervals you have picked so far and process the intervals
in increasing order of right endpoint — a dynamic programming table over
that count covers all possibilities.

### Hint 2

When you take an interval, everything before it must end strictly to the
left of its left endpoint; in the right-endpoint order that predecessor
set is a prefix, locatable with a binary search.

### Hint 3

Keep the chosen index tuple inside each state. Adding the current index in
sorted position keeps the tuple ascending, and comparing tuples
lexicographically settles ties between equal scores.
