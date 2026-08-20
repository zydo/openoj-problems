# Earliest Day for m Bouquets

## Description

A garden holds `n` flowers in a row. Flower `i` opens on day `openDay[i]`
and remains open from that day on; once a flower is cut it cannot be used
by another bouquet.

One bouquet is `k` adjacent flowers that are all open, and you must cut all
`m` bouquets on one and the same day.

Return the earliest day on which the row supplies `m` such bouquets. If no
day ever does, return `-1`.

### Example 1

```text
Input: openDay = [5,12,4,12,3], m = 3, k = 1
Output: 5
Explanation: Bouquets of one flower need any three open blooms.
On day 4 the row reads [_, _, x, _, x] — two flowers, one bouquet short.
On day 5 it reads [x, _, x, _, x] and the third bouquet appears.
```

### Example 2

```text
Input: openDay = [4,8,15,8,4], m = 2, k = 3
Output: -1
Explanation: Two bouquets of 3 flowers need 6 flowers; the row has 5.
No day can change the count, so the task is impossible.
```

### Example 3

```text
Input: openDay = [2,7,3,4,3], m = 1, k = 2
Output: 4
Explanation: A bouquet needs two adjacent open flowers.
On day 3 the row reads [x, _, x, _, x] — open blooms, but never side by side.
On day 4 it reads [x, _, x, x, x]: the block at the right end is 3 long,
which hands over the required adjacent pair.
```

### Constraints

- `openDay.length == n`
- `1 <= n <= 100,000`
- `1 <= openDay[i] <= 1,000,000,000`
- `1 <= m <= 1,000,000`
- `1 <= k <= n`

## Hints

### Hint 1

Whatever can be cut on day `d` can still be cut on any later day — flowers
only accumulate. What shape does that give the set of workable days?

### Hint 2

To score one candidate day, sweep the row once: count the open flowers
since the last closed one, and whenever that streak reaches `k`, one
bouquet is banked and the streak restarts. This banks `L div k` bouquets
from every maximal open block of length `L`, which is the most any
arrangement can do — a bouquet cannot reach across a closed flower.

### Hint 3

With scoring cheap and monotone, the answer is a binary search between the
smallest and the largest entry of `openDay`.
