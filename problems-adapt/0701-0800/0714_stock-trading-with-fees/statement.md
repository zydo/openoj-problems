# Stock Trading With Fees

## Description

You are given an array `prices`; `prices[i]` is the price of one share on day
`i`. You are also given an integer `fee`, the broker's charge for one round
trip.

You may trade as often as you like. A trade buys a share on some day and sells
it on a strictly later day, you never hold more than one share at a time, and
each completed trade costs `fee` on top of the price you paid — so a trade that
buys at `p` and sells at `q` nets `q - p - fee`.

Return the largest total profit available. A plan that never trades earns `0`.

### Example 1

```text
Input: prices = [4,2,9,3,7,1,6], fee = 2
Output: 10
Explanation: Three trades pay off: 2 → 9 nets 5, 3 → 7 nets 2, and 1 → 6 nets
3, for 10 in total. Each of them clears the fee on its own.
```

### Example 2

```text
Input: prices = [5,11,6,12], fee = 8
Output: 0
Explanation: The widest gap anywhere in the list is 12 - 5 = 7, which the fee
of 8 more than swallows. Sitting out beats every trade, so the answer is 0.
```

### Example 3

```text
Input: prices = [3,8,2,10], fee = 1
Output: 11
Explanation: 3 → 8 nets 4 and 2 → 10 nets 7. Holding through the dip instead,
for a single 3 → 10 trade, would net only 6: two fees are cheaper than giving
up the rebound.
```

### Constraints

- `1 <= prices.length <= 5 * 10⁴`
- `1 <= prices[i] < 5 * 10⁴`
- `0 <= fee < 5 * 10⁴`

### Follow-up

One sweep with a fixed number of variables is enough. Where exactly does the
charge enter the recurrence, compared with the fee-free version of unlimited
trading?

## Hints

### Hint 1

At the close of every day your position is one of just two things: a share in
hand, or none. Carry the best profit reachable for each of the two.

### Hint 2

Rolling one day forward, the share-in-hand figure is either yesterday's, or
yesterday's cash minus today's price; the cash figure is either yesterday's, or
yesterday's share sold today. Charge the fee on exactly one leg of the round
trip so it is never counted twice.

### Hint 3

Both figures keep "change nothing" among their options, so an expensive `fee`
lets the cash figure sit at its starting `0` — the recurrence must never oblige
you to trade.
