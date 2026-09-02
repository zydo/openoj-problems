# Fewest Advances to Set the Clock

## Description

Two strings `current` and `correct` hold 24-hour clock readings in
`"HH:MM"` form — hours run from `00` to `23`, minutes from `00` to `59`,
so a day spans `00:00` through `23:59`.

A single move pushes the clock forward by `1`, `5`, `15`, or `60`
minutes. Moves may be applied any number of times, in any order.

Return the fewest moves that carry `current` up to `correct`.

### Example 1

```text
Input: current = "09:41", correct = "10:02"
Output: 3
Explanation:
The readings are 21 minutes apart: advance 15 minutes, then 5, then 1.
No mix of allowed advances covers 21 minutes in fewer than 3 moves.
```

### Example 2

```text
Input: current = "18:20", correct = "20:44"
Output: 8
Explanation:
The gap is 144 minutes: two 60-minute advances reach 20:20, then 15 and
5 more minutes reach 20:40, and four 1-minute advances finish the job —
8 moves in all.
```

### Example 3

```text
Input: current = "13:59", correct = "14:00"
Output: 1
Explanation:
A single 1-minute advance is exactly enough.
```

### Constraints

- `current` and `correct` are valid `"HH:MM"` 24-hour times
- `current <= correct`

## Hints

### Hint 1

Work in minutes: parse each reading into minutes past midnight, and only
the difference between the two matters.

### Hint 2

Take as many 60-minute advances as fit, then 15s, then 5s, leaving only
single minutes. This greedy is exact because each allowed advance divides
the next smaller one evenly.
