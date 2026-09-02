# Guard Count Valleys

## Description

A security team logs how many guards are on duty each day: `security[i]` is
that count for day `i`, with days numbered from `0`. You are also given an
integer `time`.

Day `i` counts as a valley day when the staffing eases into it and builds
back out of it:

- at least `time` days lie on either side of day `i`,
- across the `time` days before it, the counts are non-increasing, and
- across the `time` days after it, the counts are non-decreasing.

Formally, day `i` qualifies exactly when
`security[i - time] >= security[i - time + 1] >= ... >= security[i] <= ... <= security[i + time - 1] <= security[i + time]`.

Return every day that qualifies. Any order is accepted; the examples list
days in increasing order merely for stable display.

### Example 1

```text
Input: security = [9,7,5,3,4,6,8], time = 3
Output: [3]
Explanation: Day 3 sits at the bottom of the dip — staffing falls
9 → 7 → 5 → 3 into it and recovers 3 → 4 → 6 → 8 out of it, three steps of
descent and three of climb, exactly what time = 3 demands.
```

### Example 2

```text
Input: security = [5,5,5,4,5,5,5], time = 2
Output: [3]
Explanation: Equal neighbors are both non-increasing and non-decreasing, so
the runs 5 → 5 → 5 → 4 and 4 → 5 → 5 → 5 satisfy day 3 despite the plateaus.
```

### Example 3

```text
Input: security = [2,9,4], time = 0
Output: [0,1,2]
Explanation: With time at zero no neighborhood is required, so every day
qualifies.
```

### Example 4

```text
Input: security = [1,2,3,4], time = 1
Output: []
Explanation: The counts only ever rise, so not a single day has even one
non-increasing step leading into it.
```

### Constraints

- `1 <= security.length <= 10⁵`
- `0 <= security[i], time <= 10⁵`

## Hints

### Hint 1

Checking a whole window of `time` days around every single day repeats the
same comparisons again and again. What could you measure once per day
instead?

### Hint 2

One left-to-right pass and one right-to-left pass can each maintain a running
tally for every day.

### Hint 3

Track how many consecutive non-increasing steps end at each day, and how many
consecutive non-decreasing steps start there — each tally either extends its
neighbor's or resets to zero. A day qualifies when both tallies reach `time`.
