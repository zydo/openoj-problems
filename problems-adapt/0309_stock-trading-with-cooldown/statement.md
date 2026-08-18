# Stock Trading With Cooldown

## Description

You are given an array `prices`; `prices[i]` is the price of one share on
day `i`.

You may trade as often as you like: each trade buys a share on some day and
sells it on a strictly later day, and you never hold more than one share —
every sale must come before the next purchase.

One restriction applies: after selling, you cannot buy again on the next day.
That day is a forced cooldown.

Return the largest total profit you can earn. A plan that never trades earns
`0`.

### Example 1

```text
Input: prices = [1,3,2,4]
Output: 3
Explanation: Without the cooldown, selling at 3 and re-buying at 2 to sell at
4 would earn (3 - 1) + (4 - 2) = 4. But that sale forces a cooldown exactly
when 2 is on offer, so the plan is illegal; the best legal plan is the single
trade from 1 to 4, earning 3.
```

### Example 2

```text
Input: prices = [7]
Output: 0
Explanation: There is nothing to sell into, so no trade is possible.
```

### Constraints

- `1 <= prices.length <= 5000`
- `0 <= prices[i] <= 1000`

### Follow-up

Can you decide this with one forward sweep and a fixed handful of variables?

## Hints

### Hint 1

End each day in one of three positions: owing a share, fresh from a sale, or
idle with no share and free to buy.

### Hint 2

One pass, carrying the best wealth for each position. The delicate move is
entering the owing position: only yesterday's idle wealth may fund a
purchase, because a sale yesterday forces the pause today.

### Hint 3

Park yesterday's sale wealth aside before refreshing anything, so idle wealth
only takes in sales made at least two days back.
