# Open Days On A Booked Calendar

## Description

A worker's calendar spans `days` consecutive days, numbered from `1` through
`days`. A list of `meetings` bookings sits on top of it, where
`meetings[i] = [start_i, end_i]` reserves every day from `start_i` through
`end_i`, both ends included. Bookings are free to overlap one another.

Count the calendar days that carry no booking at all.

### Example 1

```text
Input: days = 14, meetings = [[3,4],[12,13],[6,7]]
Output: 8
Explanation: Days 3, 4, 6, 7, 12 and 13 are booked, so the eight remaining
days (1, 2, 5, 8 through 11, and 14) are open.
```

### Example 2

```text
Input: days = 8, meetings = [[2,5]]
Output: 4
```

### Example 3

```text
Input: days = 3, meetings = [[1,1],[2,2],[3,3]]
Output: 0
```

### Constraints

- `1 <= days <= 10⁹`
- `1 <= meetings.length <= 10⁵`
- `meetings[i].length == 2`
- `1 <= meetings[i][0] <= meetings[i][1] <= days`

## Hints

### Hint 1

Collapse the bookings into their union: after ordering the intervals by
start day, merge every run that overlaps or touches.

### Hint 2

Each gap between the end of one merged block and the start of the next is a
stretch of open days; total those gaps together with the days before the
first block and after the last one.
