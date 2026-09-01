# Complete Interval Coverage

## Description

You are given a 2D integer array `ranges` together with two integers
`left` and `right`. Each `ranges[i] = [start_i, end_i]` describes an
inclusive span of integer points.

Decide whether every integer point between `left` and `right`,
inclusive, lies inside at least one of those spans. A point `x` lies
inside `ranges[i]` when `start_i <= x <= end_i`. Report `true` when the
whole window is blanketed and `false` as soon as some point in it is
left bare.

### Example 1

```text
Input: ranges = [[2,4],[6,9],[3,7]], left = 3, right = 8
Output: true
Explanation: Points 3 and 4 sit in [2,4] (and again in [3,7]), points
5 through 7 sit in [3,7], and points 6 through 8 sit in [6,9], so 3
through 8 are all covered.
```

### Example 2

```text
Input: ranges = [[1,5],[10,15]], left = 6, right = 9
Output: false
Explanation: The window 6 through 9 falls in the gap between the two
spans, so none of its points are covered.
```

### Example 3

```text
Input: ranges = [[12,20],[3,8]], left = 14, right = 14
Output: true
Explanation: A one-point window only needs that single point to sit in
some span, and 14 is inside [12,20].
```

### Constraints

- `1 <= ranges.length <= 50`
- `1 <= start_i <= end_i <= 50`
- `1 <= left <= right <= 50`

## Hints

### Hint 1

The window holds at most 50 points, so simply walk the points from
`left` to `right`.

### Hint 2

A point is safe when some interval starts at or before it and ends at
or after it; alternatively, sweep a difference array over the value
axis and read off where the running count is positive.
