# Intervals Covering Each Query

## Description

You are given a 0-indexed 2D integer array `intervals`, where
`intervals[i] = [start_i, end_i]` describes a window that is open from
`start_i` through `end_i`, both ends included.

You are also given a 0-indexed integer array `queries`, where `queries[j]` is
a moment to inspect.

Return an integer array `answer` with the same length as `queries`, where
`answer[j]` is the number of windows still open at moment `queries[j]`.

### Example 1

```text
Input: intervals = [[2,7],[4,9],[10,13],[5,14]], queries = [3,6,9,12]
Output: [1,3,2,2]
Explanation: At moment 3 only [2,7] is open. At 6 the windows [2,7], [4,9] and
[5,14] all overlap, giving 3. At 9 the count is [4,9] and [5,14]; at 12 it is
[10,13] and [5,14].
```

### Example 2

```text
Input: intervals = [[1,8],[3,3]], queries = [3,2,8]
Output: [2,1,1]
Explanation: The instant 3 falls inside both windows — [3,3] is a window of
length one. Moment 2 sits in [1,8] alone, and moment 8 is the closing instant
of [1,8], which still counts as open.
```

### Example 3

```text
Input: intervals = [[6,12]], queries = [5,6,12,13]
Output: [0,1,1,0]
Explanation: The window opens exactly at 6 and closes exactly at 12, so both
of those moments see it open while 5 and 13 do not.
```

### Constraints

- `1 <= intervals.length <= 5 * 10⁴`
- `intervals[i].length == 2`
- `1 <= start_i <= end_i <= 10⁹`
- `1 <= queries.length <= 5 * 10⁴`
- `1 <= queries[j] <= 10⁹`

## Hints

### Hint 1

A window `[start, end]` covers `t` precisely when `start <= t` and `end >= t`.
That splits the count at `t` into two one-sided counts.

### Hint 2

Sort the start values on their own and binary search to learn how many
windows have opened by moment `t`.

### Hint 3

Do the same over the end values to learn how many windows have already closed
strictly before `t` — one closing exactly at `t` is still open.
