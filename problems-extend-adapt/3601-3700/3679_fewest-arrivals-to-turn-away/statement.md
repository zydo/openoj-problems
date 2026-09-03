# Fewest Arrivals To Turn Away

## Description

A depot receives exactly one shipment every day. The array `arrivals` tells
the story day by day: `arrivals[i]` is the item type delivered on day `i`,
counting days from 1. Two integers `w` and `m` complete the setup.

Each delivery is either stocked or turned away, and the call is made once —
a shipment can be refused only on the day it shows up. Balance is defined
over sliding windows: for every day `i`, look at the `w` most recent days,
`[max(1, i - w + 1), i]`; within that window no single item type may account
for more than `m` stocked deliveries. A delivery of a type that has already
been stocked `m` times inside its day's window therefore has to be refused.

Return the smallest number of deliveries that must be turned away so that
every such window respects the cap.

### Example 1

```text
Input: arrivals = [2,2,2,1], w = 2, m = 1
Output: 1
Explanation: Days 1 and 2 both deliver type 2 inside one shared 2-day
window whose cap is 1, so the day-2 delivery is refused. By day 3 the
window has moved past day 1 and a type-2 delivery fits again, and day 4's
type-1 delivery is the first of its kind. One refusal suffices.
```

### Example 2

```text
Input: arrivals = [4,4,4,4], w = 3, m = 2
Output: 1
Explanation: Days 1 and 2 stock the first two type-4 items. Day 3 would put
three of them inside the window covering days 1-3, so it is refused. The
window then slides: on day 4 it spans days 2-4 and, after day 3's refusal,
holds two stocked items, which the cap still permits. One refusal in total.
```

### Example 3

```text
Input: arrivals = [1,2,1,2], w = 2, m = 1
Output: 0
Explanation: The types alternate, so every 2-day window holds at most one
delivery of each type. Nothing has to be refused.
```

### Constraints

- `1 <= arrivals.length <= 10⁵`
- `1 <= arrivals[i] <= 10⁵`
- `1 <= w <= arrivals.length`
- `1 <= m <= w`

## Hints

### Hint 1

Walk the days once, left to right, maintaining the window of the trailing
`w` days with two indices.

### Hint 2

Track, per item type, how many stocked deliveries currently sit inside the
window; day `i`'s decision needs only its own type's number.

### Hint 3

When the window's left edge passes day `i - w`, subtract that day's
contribution — but only when that delivery was actually stocked; refused
ones never entered the tallies.

### Hint 4

If the arriving type's tally already reads `m`, refuse the delivery and
count one more turnaway; otherwise stock it and raise the tally.
