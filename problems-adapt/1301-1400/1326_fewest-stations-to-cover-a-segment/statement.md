# Fewest Stations to Cover a Segment

## Description

A straight segment runs from point `0` to point `n`. A station stands at
every integer point `0, 1, ..., n`, and station `i` has reach `radii[i]`:
switched on, it covers the whole interval
`[i - radii[i], i + radii[i]]`.

Return the minimum number of stations to switch on so that every point of
the segment `[0, n]` is covered. If the segment cannot be fully covered,
return `-1`.

### Example 1

```text
Input: n = 6, radii = [1,2,0,3,0,0,1]
Output: 1
Explanation: Station 3 has reach 3 and covers [0, 6] by itself, so it is
enough. Station 0 covers [-1,1], station 1 covers [-1,3], station 2 only the
point 2, and station 6 covers [5,7].
```

![Stations on a number line from -1 to 7 with their reach drawn as bars; station 3's reach [0, 6] alone spans the whole segment.](figures/example-1.svg)

### Example 2

```text
Input: n = 8, radii = [2,0,2,0,3,0,2,0,2]
Output: 2
Explanation: The stations with positive reach cover [0,2], [0,4], [1,7],
[4,8] and [6,8]. No single one spans all of [0,8], but station 2 reaches
from 0 to 4 and station 6 takes over from 4 through to 8, so two stations
suffice.
```

### Example 3

```text
Input: n = 4, radii = [1,0,0,0,1]
Output: -1
Explanation: Only the two ends have any reach, covering [0,1] and [3,4].
The stretch between 1 and 3 stays uncovered no matter what is switched on.
```

### Constraints

- `1 <= n <= 10^4`
- `radii.length == n + 1`
- `0 <= radii[i] <= 100`

## Hints

### Hint 1

Turn each station into the interval `[i - radii[i], i + radii[i]]` trimmed
to `[0, n]` — coverage spilled past the ends is wasted, not helpful. Sort
the intervals by where they begin.

### Hint 2

Grow a covered prefix starting at `0`. Of all intervals that begin at or
before the end of that prefix, keep the one that stretches furthest right,
and count one station.

### Hint 3

When every interval reaching into the prefix stops at the same place, none
crosses the boundary ahead and a gap will stay uncovered: the answer is
`-1`.
