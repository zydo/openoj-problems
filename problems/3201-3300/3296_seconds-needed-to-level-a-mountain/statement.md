# Seconds Needed to Level a Mountain

## Description

A mountain stands `mountainHeight` units tall. You are given the integer
`mountainHeight` and the integer array `workerTimes`, where
`workerTimes[i]` is the base time, in seconds, of the `i`-th worker on
the crew sent to level it.

The workers dig at the same time, each on its own share of the height,
and digging slows down as it goes: the `j`-th unit removed by worker `i`
costs that worker `workerTimes[i] * j` seconds. So removing `x` units in
total takes

`workerTimes[i] * 1 + workerTimes[i] * 2 + ... + workerTimes[i] * x`

seconds of that worker's time.

The mountain is leveled once the workers have removed `mountainHeight`
units between them, and because they dig simultaneously, the elapsed
time is the largest time spent by any one worker.

Return the fewest seconds in which the crew can level the mountain.

### Example 1

```text
Input: mountainHeight = 5, workerTimes = [3,1,2]
Output: 6
Explanation: The 1-second worker removes three units for 1 + 2 + 3 = 6
seconds and the 2-second worker removes two units for 2 + 4 = 6 seconds,
while the 3-second worker rests. The elapsed time is max(6, 6, 0) = 6.
A 5-second deadline is not enough: under it the crew could clear only
2 + 1 + 1 = 4 units.
```

### Example 2

```text
Input: mountainHeight = 9, workerTimes = [4,4]
Output: 60
Explanation: Nine units cannot be split evenly. One worker takes five,
costing 4 * (1 + 2 + 3 + 4 + 5) = 60 seconds, and the other takes four,
costing 4 * 10 = 40 seconds. The elapsed time is 60.
```

### Example 3

```text
Input: mountainHeight = 6, workerTimes = [5]
Output: 105
Explanation: One worker must remove everything: 5 * (1 + 2 + 3 + 4 + 5 + 6)
is 105.
```

### Constraints

- `1 <= mountainHeight <= 10⁵`
- `1 <= workerTimes.length <= 10⁴`
- `1 <= workerTimes[i] <= 10⁶`

## Hints

### Hint 1

If the crew can finish within `T` seconds, it can finish within any
larger deadline too. What kind of search does that monotonicity invite?

### Hint 2

Fix a deadline `T`. A worker with base time `wt` that removes `x` units
spends `wt · x(x+1)/2` seconds — so its whole capacity within the
deadline is the largest `x` with `x(x+1) <= 2T / wt`.

### Hint 3

Units are interchangeable, so a deadline is achievable exactly when the
sum of all worker capacities reaches `mountainHeight`. Count capacities,
compare, and descend the binary search accordingly.
