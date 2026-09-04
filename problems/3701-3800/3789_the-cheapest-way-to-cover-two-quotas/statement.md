# The Cheapest Way To Cover Two Quotas

## Description

Five integers are handed over: `cost1`, `cost2`, `costBoth`, `need1`, and
`need2`. Items come in three types:

- a type 1 item costs `cost1` and covers one unit of quota 1;
- a type 2 item costs `cost2` and covers one unit of quota 2;
- a joint item costs `costBoth` and covers one unit of each quota at once.

Assemble a purchase whose coverage reaches at least `need1` units of quota 1
and at least `need2` units of quota 2, and make the total price as small as
possible. Return that smallest total price.

### Example 1

```text
Input: cost1 = 2, cost2 = 6, costBoth = 4, need1 = 3, need2 = 3
Output: 12
Explanation: Three joint items cover both quotas exactly: 3 * 4 = 12.
Pairing singles instead prices each shared unit at 2 + 6 = 8, so nothing
beats 12.
```

### Example 2

```text
Input: cost1 = 7, cost2 = 9, costBoth = 5, need1 = 1, need2 = 4
Output: 20
Explanation: One joint item covers the shared unit for 5, and the three
remaining quota-2 units each cost min(5, 9) = 5 as joints whose spare
coverage is wasted: 5 + 3 * 5 = 20.
```

### Example 3

```text
Input: cost1 = 4, cost2 = 6, costBoth = 100, need1 = 0, need2 = 2
Output: 12
Explanation: Quota 1 asks for nothing, and joints are priced out of the
market, so two type 2 items at 6 apiece settle it: 2 * 6 = 12.
```

### Constraints

- `1 <= cost1, cost2, costBoth <= 10⁶`
- `0 <= need1, need2 <= 10⁹`

## Hints

### Hint 1

The `min(need1, need2)` units the two quotas share are cheapest at
`min(costBoth, cost1 + cost2)` apiece.

### Hint 2

Each leftover unit of quota 1 then costs `min(costBoth, cost1)` — a joint
item can impersonate a single.

### Hint 3

Treat quota 2's leftovers the same way with `min(costBoth, cost2)`, and add
the three prices up.
