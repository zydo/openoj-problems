# Clashing Time Windows

## Description

Two events on the same day are each described by an inclusive start/end pair
in 24-hour `HH:MM` form. They clash when they share at least one moment — the
instant one ends counts as shared with the instant another begins.

Given `event1 = [start1, end1]` and `event2 = [start2, end2]`, report whether
the two events clash.

### Example 1

```text
Input: event1 = ["08:30","09:30"], event2 = ["09:30","10:30"]
Output: true
Explanation: Both events contain the moment 09:30, so they intersect there.
```

### Example 2

```text
Input: event1 = ["10:00","11:00"], event2 = ["14:00","15:00"]
Output: false
Explanation: The second window starts three hours after the first ends.
```

### Example 3

```text
Input: event1 = ["12:30","13:30"], event2 = ["12:45","12:50"]
Output: true
Explanation: The second window sits entirely inside the first.
```

### Constraints

- `event1.length == event2.length == 2`
- `event1[i].length == event2[i].length == 5`
- `start1 <= end1` and `start2 <= end2`
- All times are valid `HH:MM` values.

## Hints

### Hint 1

Convert each `HH:MM` time to minutes since midnight and compare integer
ranges.

### Hint 2

Two inclusive ranges overlap exactly when each one's start is no later than
the other's end.
