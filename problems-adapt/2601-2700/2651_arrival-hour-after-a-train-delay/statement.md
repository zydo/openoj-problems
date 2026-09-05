# Arrival Hour After a Train Delay

## Description

A train is due at a station at hour `arrivalTime`, given as a whole
number of hours on a 24-hour clock. The train ends up running
`delayedTime` hours late.

Work out the hour at which the train finally reaches the station,
again expressed on a 24-hour clock.

### Example 1

```text
Input: arrivalTime = 5, delayedTime = 8
Output: 13
Explanation: The train was due at 5:00 and runs 8 hours late, so it
gets in at 5 + 8 = 13 (13:00).
```

### Example 2

```text
Input: arrivalTime = 22, delayedTime = 7
Output: 5
Explanation: The train was due at 22:00 and runs 7 hours late. The sum
22 + 7 = 29 crosses midnight, and on a 24-hour clock that moment is
written 5:00.
```

### Example 3

```text
Input: arrivalTime = 9, delayedTime = 24
Output: 9
Explanation: A delay of 24 hours is one full turn of the clock, so the
train arrives at the very hour it was scheduled: 9:00.
```

### Constraints

- `1 <= arrivalTime < 24`
- `1 <= delayedTime <= 24`

## Hints

### Hint 1

Treat the clock as arithmetic modulo 24: add the scheduled hour and
the delay, then reduce the total back into the range 0 through 23.

### Hint 2

Because the delay can be a whole day, the final hour may land exactly
on the scheduled one — the remainder operation deals with that case by
itself.
