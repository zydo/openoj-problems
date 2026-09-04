# Peak Altitude of the Ride

## Description

A cyclist sets out along a route that visits `n + 1` landmarks, each at
its own height above sea level. The ride starts at landmark 0, whose
height is exactly 0.

You receive an integer array `gain` of length `n`: for every
`0 <= i < n`, `gain[i]` is the net change in height between landmark `i`
and landmark `i + 1`. Return the greatest height the ride ever reaches.

### Example 1

```text
Input: gain = [3,2,-4,-1]
Output: 5
Explanation: The heights along the ride are [0,3,5,1,0]; the top is 5.
```

### Example 2

```text
Input: gain = [-3,2,-6]
Output: 0
Explanation: The heights along the ride are [0,-3,-1,-7]; the ride never
climbs above its start, so the top is 0.
```

### Constraints

- `n == gain.length`
- `1 <= n <= 100`
- `-100 <= gain[i] <= 100`

## Hints

### Hint 1

Each landmark's height is the running total of every net change recorded
before it, starting from the initial height of 0.

### Hint 2

Tracking that running total in one variable while noting the largest
value it takes — including the starting 0 — answers the question
without building the whole height profile.
