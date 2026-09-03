# Stock Trading With Short Selling

## Description

You are given an integer array `prices`, where `prices[i]` is the price
of one share, in dollars, on day `i`, and an integer `k`.

You may complete at most `k` trades, and a trade may run in either
direction:

- A purchase trade: buy a share on day `i` and sell it on a strictly
  later day `j`, earning `prices[j] - prices[i]`.
- A short trade: sell a share on day `i` and buy it back on a strictly
  later day `j`, earning `prices[i] - prices[j]`.

As always, one trade at a time — a trade must finish before the next one
starts, and the day a trade ends cannot also host the first step of the
following trade.

Return the largest total profit you can earn using at most `k` trades. A
plan that never trades earns `0`.

### Example 1

```text
Input: prices = [5,1,2,10,1], k = 2
Output: 13
Explanation:
Two short trades do the work: sell at 5 on day 0 and buy back at 1 on
day 1 for +4, then sell at 10 on day 3 and buy back at 1 on day 4 for
+9 — 4 + 9 = 13 in all.
```

### Example 2

```text
Input: prices = [9,7,4,1], k = 2
Output: 8
Explanation:
The market only falls, so purchases can never profit. One short trade
— sell at 9 on day 0, buy back at 1 on day 3 — earns 8, and there is no
room left on the calendar for a second trade.
```

### Example 3

```text
Input: prices = [3,3,3], k = 1
Output: 0
Explanation:
The price never moves, so every trade earns nothing and waiting is the
best plan.
```

### Constraints

- `2 <= prices.length <= 10³`
- `1 <= prices[i] <= 10⁹`
- `1 <= k <= prices.length / 2`

## Hints

### Hint 1

Work day by day with dynamic programming: the states worth carrying are
how many trades have finished and what, if anything, is currently held.

### Hint 2

Three flavors of state suffice — flat, holding a bought share, and
holding a shorted share — and each day either opens or closes exactly
one of them.

### Hint 3

Handle the no-same-day rule with update order: apply closes using
yesterday's open states, then apply opens using the flat totals from
before today's closes. That way a trade cannot end and hand off to the
next one on a single day.
