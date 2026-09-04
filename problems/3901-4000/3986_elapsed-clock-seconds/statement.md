# Elapsed Clock Seconds

## Description

A stopwatch is read twice within a single day. Each reading arrives as a
string — `startTime` and `endTime` — written in the everyday `"HH:MM:SS"`
form: two digits of hour, then two of minute, then two of second, separated
by colons.

Work out how many seconds pass between the first reading and the second one.

### Example 1

```text
Input: startTime = "09:15:30", endTime = "10:00:00"

Output: 2670

Explanation:

From 09:15:30 to 10:00:00 is 44 minutes and 30 seconds, and
44 × 60 + 30 = 2670.
```

### Example 2

```text
Input: startTime = "22:10:05", endTime = "22:10:06"

Output: 1

Explanation:

The two readings differ by exactly one second.
```

### Example 3

```text
Input: startTime = "06:00:00", endTime = "07:30:45"

Output: 5445

Explanation:

One hour, thirty minutes, and forty-five seconds amounts to
3600 + 1800 + 45 = 5445 seconds.
```

### Constraints

- `startTime` and `endTime` are each exactly 8 characters long
- Both strings are well-formed `"HH:MM:SS"` times within one calendar day
- The hour field runs from `00` to `23`; the minute and second fields each
  run from `00` to `59`
- `endTime` never falls before `startTime`

## Hints

### Hint 1

Turn each reading into one number: its count of seconds since midnight.

### Hint 2

The answer is just the end count minus the start count.
