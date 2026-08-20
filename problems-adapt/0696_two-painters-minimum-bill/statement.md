# Two Painters, Minimum Bill

## Description

You are given two integer arrays `cost` and `time` of length `n`, describing
`n` walls: painting wall `i` with the paid painter takes `time[i]` units of
time and costs `cost[i]`.

Two painters are available:

- A paid painter, who paints wall `i` in `time[i]` units of time for
  `cost[i]` money.
- A free painter, who paints any wall in 1 unit of time at no cost — but
  works only while the paid painter is busy.

Return the least money for which all `n` walls get painted.

### Example 1

```text
Input: cost = [6,2,8], time = [2,1,1]
Output: 6
Explanation: Hire the paid painter for wall 0 alone. During its 2 time
units, the free painter paints walls 1 and 2 — one unit each — so the bill
is 6.
```

### Example 2

```text
Input: cost = [5,2,6,9], time = [2,2,1,1]
Output: 7
Explanation: Hire the paid painter for walls 0 and 1, which takes 4 time
units and costs 5 + 2 = 7; the free painter paints walls 2 and 3 during that
window. No cheaper hiring covers every wall.
```

### Example 3

```text
Input: cost = [4,2,7,1,5,3], time = [1,1,1,1,1,1]
Output: 6
Explanation: Every job lasts 1 unit, so each paid wall lets the free painter
finish exactly one other wall; three of the six walls must be paid for. The
cheapest three are 1 + 2 + 3 = 6.
```

### Constraints

- `1 <= cost.length <= 500`
- `cost.length == time.length`
- `1 <= cost[i] <= 10^6`
- `1 <= time[i] <= 500`

## Hints

### Hint 1

While the paid painter works one wall, the free painter can finish up to
`time[i]` other walls. So hiring wall `i` on the paid side really buys
coverage of how many walls?

### Hint 2

A selection of paid walls succeeds when the sum of `(time[i] + 1)` over the
selection reaches `n`. Minimize total cost subject to that.

### Hint 3

That is a 0/1 knapsack over coverage: `dp[j]` the cheapest selection
covering `j` walls, updated with `j` running downward so each wall is hired
at most once.
