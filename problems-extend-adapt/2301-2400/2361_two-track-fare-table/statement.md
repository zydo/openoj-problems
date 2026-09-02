# Two-Track Fare Table

## Description

A rail line runs through `n + 1` stops numbered `0` to `n` and carries two
parallel tracks: a local track and a fast track. You begin at stop `0`
riding the local track.

The ride is described by two 1-indexed arrays, `regular` and `express`,
each of length `n`: `regular[i]` is the fare for riding the local track
from stop `i - 1` to stop `i`, and `express[i]` is the fare for the same
hop on the fast track. Switching tracks is asymmetric:

- Moving from the fast track back to the local track is free.
- Every switch from the local track onto the fast track costs an added
  `expressCost`, charged each and every time you make that switch.
- Riding along the fast track from stop to stop costs nothing beyond the
  per-hop `express` fares.

Build the 1-indexed array `costs` of length `n` whose entry `costs[i]` is
the least money that gets you from stop `0` to stop `i`. Arriving by
either track counts as reaching the stop.

### Example 1

![diagram](figures/2361-1.svg)

```text
Input: regular = [1,6,9,5], express = [5,2,3,10], expressCost = 8
Output: [1,7,14,19]
Explanation: One cheap way to ride the whole line:
- Ride the local track from stop 0 to stop 1, paying 1.
- Switch to the fast track and ride to stop 2, paying 8 + 2 = 10.
- Stay on the fast track to stop 3, paying 3.
- Drop back to the local track for the hop to stop 4, paying 5.
That itinerary costs 1 + 10 + 3 + 5 = 19, and each intermediate stop is
reached at its own cheapest price along the way.
```

### Example 2

![diagram](figures/2361-2.svg)

```text
Input: regular = [11,5,13], express = [7,10,6], expressCost = 3
Output: [10,15,24]
Explanation:
- Board the fast track at stop 0 and ride to stop 1, paying 3 + 7 = 10.
- Switch down to the local track for the hop to stop 2, paying 5.
- Pay the switch fee again to reboard the fast track to stop 3,
  paying 3 + 6 = 9.
The full ride costs 10 + 5 + 9 = 24 — note the second boarding pays the
expressCost once more.
```

### Constraints

- `1 <= n == regular.length == express.length <= 10⁵`
- `1 <= regular[i], express[i], expressCost <= 10⁵`

## Hints

### Hint 1

Only two things matter per stop: the cheapest way to stand there on the
local track and the cheapest way to stand there on the fast track.

### Hint 2

Riding onward from the fast track, either track serves the next hop with
no switch fee; only boarding the fast track from the local side triggers
the fee.

### Hint 3

A single left-to-right pass, extending two running values per stop, fills
the whole fare table.
