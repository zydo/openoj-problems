# Minimum Route Speed

## Description

A route consists of `n` segments that must be traversed in the given order.
The integer array `dist` gives their lengths: `dist[i]` is the length of
segment `i`. You travel the whole route at one fixed positive integer
speed, measured in length units per hour.

You may enter a segment only on a whole hour. Each segment therefore
occupies a whole number of hours — its travel time rounded up, with the
idle remainder spent waiting — except the final segment, which has no
successor to wait for and finishes the moment you cross it, taking exactly
`dist[n-1] / speed` hours.

Given the floating-point number `hour` of hours available, return the least
speed that gets you to the end of the route within `hour`, or `-1` if no
speed can.

The tests guarantee the answer never exceeds `10^7` when it exists, and
`hour` carries at most two digits after the decimal point.

### Example 1

```text
Input: dist = [2,4,5], hour = 3.5
Output: 4
Explanation: At speed 4 the first segment is entered at hour 0 and takes
ceil(2/4) = 1 hour; the second is entered at hour 1 and takes ceil(4/4) = 1
hour; the final segment is entered at hour 2 and takes exactly 5/4 = 1.25
hours. Arrival is at 3.25, inside the 3.5-hour budget.
```

### Example 2

```text
Input: dist = [1,1,1], hour = 2.01
Output: 100
Explanation: The first two segments take one hour each at any speed. The
final one needs 1/speed <= 0.01, so speed >= 100.
```

### Example 3

```text
Input: dist = [4,9,6], hour = 2
Output: -1
Explanation: However fast you go, the first two segments consume one whole
hour each, so you can never cross the finish line before hour 2.
```

### Constraints

- `n == dist.length`
- `1 <= n <= 10^5`
- `1 <= dist[i] <= 10^5`
- `1 <= hour <= 10^9`
- `hour` has at most two digits after the decimal point.

## Hints

### Hint 1

At a fixed speed `s`, the finishing time is `ceil(dist[i]/s)` summed over
every segment except the last, plus `dist[n-1]/s` for the last one.

### Hint 2

Speeding up never delays the finish, so the set of speeds that arrive in
time is an upward-closed range — find its left edge with a binary search.
