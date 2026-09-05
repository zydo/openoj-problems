# Conflict-Free Schedule

## Description

You are given an array `intervals` of booked time slots, where
`intervals[i] = [starti, endi]`.

The schedule is **conflict-free** if no two slots overlap. A slot that
ends exactly when another begins does not count as an overlap — back-to-
back bookings are fine.

Return `true` if the schedule is conflict-free, and `false` otherwise.

### Example 1

```text
Input: intervals = [[1,20],[3,8],[10,15]]
Output: false
```

### Example 2

```text
Input: intervals = [[3,5],[6,8]]
Output: true
```

### Constraints

- `0 <= intervals.length <= 10⁴`
- `intervals[i].length == 2`
- `0 <= starti < endi <= 10⁶`

## Hints

### Hint 1

Sort the slots by start time first. Once they're in that order, any
overlap has to show up between two neighboring slots, so a single pass
comparing each slot against the one right before it is enough.
