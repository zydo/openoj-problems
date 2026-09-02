# One-Line Stock Picks

## Description

A stock's price on day `i` is `prices[i]`, with days numbered from 1.
You choose a set of days, keeping their order — the choice is written as
a 1-indexed array `indexes` of length `k`, a subsequence of
`[1, 2, ..., n]`.

The choice is called **aligned** when every consecutive pair of picked
days rises (or falls) in price by exactly as much as the days are apart:

- For every `1 < j <= k`,
  `prices[indexes[j]] - prices[indexes[j - 1]] == indexes[j] - indexes[j - 1]`.

The value of a choice is the total of its picked prices,
`prices[indexes[1]] + prices[indexes[2]] + ... + prices[indexes[k]]`.

Return the largest value an aligned choice can reach.

### Example 1

```text
Input: prices = [3,4,8,9,2]
Output: 17
Explanation: Days 3 and 4 rise 1 over a gap of 1 day, so they align and
are worth 8 + 9 = 17. Growing the choice breaks it: from day 2 to 3 the
price gains 4 in a single day, and from day 4 to 5 it drops 7. Days
[1,2] align too, but they sum to only 7.
```

### Example 2

```text
Input: prices = [10,11,12]
Output: 33
Explanation: Every day the price climbs exactly 1 while the day number
climbs exactly 1, so all three days form one aligned choice worth
10 + 11 + 12 = 33.
```

### Example 3

```text
Input: prices = [9,3,4,5,1]
Output: 12
Explanation: Days 2, 3, and 4 step up by 1 apiece — 3, then 4, then 5 —
so they align and sum to 12. Day 1 cannot join them: from day 1 to 2
the price drops 6 over a gap of 1.
```

### Constraints

- `1 <= prices.length <= 10⁵`
- `1 <= prices[i] <= 10⁹`

## Hints

### Hint 1

Rearrange the alignment condition: it says `prices[i] - i` must take
the same value at every picked day, since both sides of the equation
cancel the day gap.

### Hint 2

Give each day the offset `prices[i] - i`. A set of picked days is
aligned exactly when all of them share one offset.

### Hint 3

Every price is positive, so once a day is picked, adding more days
with the same offset never hurts. Total the prices offset by offset
and report the largest total.
