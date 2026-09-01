# Flavor in Reach by Day

## Description

A pantry keeps `n` flavors of preserves in a fixed line, `stock[i]` jars
of flavor `i`, to be eaten strictly in order: flavor `i` is off limits
until the last jar of flavor `i - 1` is finished. You begin on day 0,
and until the pantry runs dry you eat at least one jar every day —
though several flavors may share one day, provided the order rule still
holds.

Every query is a triple `[t, day, cap]` asking whether some legal
schedule could have you eating a jar of flavor `t` on `day` — days are
counted from 0 — while eating no more than `cap` jars on any single day.
Each query is answered independently, but always against the same
stocking.

Return a boolean array of the same length as `queries` whose `i`-th
entry is `true` exactly when query `i` is possible.

### Example 1

```text
Input: stock = [4,2,7], queries = [[0,0,1],[1,0,5],[2,0,3]]
Output: [true,true,false]
Explanation: A jar of flavor 0 on day 0 is fine at any cap. With cap 5
you can finish all four flavor-0 jars and start flavor 1 on that same
day 0. Flavor 2 under cap 3 needs at least two full days (6 earlier
jars / 3 per day) before it is reachable, so day 0 fails.
```

### Example 2

```text
Input: stock = [3,1,4], queries = [[1,9,2],[2,1,100],[2,0,1]]
Output: [false,true,false]
Explanation: Flavor 1 is gone by day 3 at the latest, so day 9 is too
late. With a huge cap, flavor 2 can be reached by day 1; with cap 1,
the four earlier jars push its earliest day to 4.
```

### Example 3

```text
Input: stock = [5], queries = [[0,4,1],[0,5,1]]
Output: [true,false]
Explanation: One jar a day finishes the pantry on day 4; nothing is
left to eat on day 5.
```

### Constraints

- `1 <= stock.length <= 10^5`
- `1 <= stock[i] <= 10^5`
- `1 <= queries.length <= 10^5`
- `queries[i].length == 3`
- `0 <= queries[i][0] < stock.length`
- `0 <= queries[i][1] <= 10^9`
- `1 <= queries[i][2] <= 10^9`

## Hints

### Hint 1

A query succeeds exactly when `day` falls between the earliest and the
latest day flavor `t` can be touched.

### Hint 2

The earliest day comes from eating `cap` jars every day; the latest
comes from eating one jar every day.

### Hint 3

The latest day is one less than the total number of jars in flavors up
to and including `t`.

### Hint 4

The earliest day is the count of jars in flavors before `t`, divided by
`cap` (floor).
