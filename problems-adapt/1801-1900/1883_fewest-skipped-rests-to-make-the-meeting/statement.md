# Fewest Skipped Rests to Make the Meeting

## Description

A meeting begins in `hoursBefore` hours, and a chain of `n` roads stands
between you and it. Road `i` is `dist[i]` kilometers long, and you cover
every road at the same `speed`, given in km/h.

After finishing any road except the last, you must pause until the next
whole hour before starting the next one. A leg that takes exactly a
whole hour needs no pause; one that takes 1.4 hours leaves you idling
until the 2-hour mark.

You are allowed to forfeit some of those pauses and drive on
immediately. Forfeiting shifts later alignments too: two consecutive
legs of 1.4 and 0.6 hours with the first pause skipped finish together
exactly on the 2-hour mark, so the leg after them starts on a whole-hour
boundary anyway.

Return the fewest number of pauses you must forfeit to reach the meeting
within `hoursBefore` hours, or `-1` if even forfeiting every pause is
too slow.

### Example 1

```text
Input: dist = [2,4,1,3], speed = 3, hoursBefore = 5
Output: 0
Explanation: The legs take 2/3, 4/3, 1/3, and 1 hours. Pausing after
each of the first three roads: the marks land at 2/3, 7/3, and 10/3, the
pauses push the departures to hours 1, 3, and 4, and the last leg ends
at hour 5 — exactly on time, so nothing needs to be skipped.
```

### Example 2

```text
Input: dist = [5,2,7,1,4], speed = 6, hoursBefore = 4
Output: 2
Explanation: Pausing after every road but the last drags the trip out to
34/6 hours, past the budget. Skip the pauses after roads 1 and 2: the
arrival marks run 5/6, 4/3, 15/6, and 8/3 hours (the last pause still
rounds up to hour 3), so the final leg ends at 11/3 hours, inside the
budget — and no single skip suffices.
```

### Example 3

```text
Input: dist = [3,8,6,2,5,1], speed = 2, hoursBefore = 18
Output: 0
Explanation: Even pausing after every road, the trip finishes in 27/2
hours (the pauses sit at hours 2, 6, 9, 10, and 13), comfortably inside
the 18-hour budget.
```

### Constraints

- `dist.length == n`
- `1 <= n <= 1000`
- `1 <= dist[i] <= 10⁵`
- `1 <= speed <= 10⁶`
- `1 <= hoursBefore <= 10⁷`

## Hints

### Hint 1

For every count of pauses forfeited so far, keep the earliest moment you
could have finished the current road.

### Hint 2

Ceiling arithmetic on fractional hours is where precision goes to die;
scale every time value by `speed` and the whole computation stays in
integers.
