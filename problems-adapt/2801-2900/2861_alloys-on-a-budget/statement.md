# Alloys On A Budget

## Description

A foundry produces alloys by blending `n` kinds of metal, and it owns
`k` machines able to do the blending. Each machine has its own recipe:
to forge one alloy, machine `i` consumes `composition[i][j]` units of
metal `j`.

The foundry starts with `stock[j]` units of metal `j` on hand, and any
additional unit of metal `j` can be bought for `cost[j]` coins.

You are given the integers `n`, `k`, and `budget`, together with the
2D array `composition` and the arrays `stock` and `cost`. Every alloy
must come off the same machine. What is the largest number of alloys
the foundry can produce without spending more than `budget` coins in
total?

### Example 1

```text
Input: n = 2, k = 2, budget = 9, composition = [[1,2],[2,1]], stock = [3,3], cost = [1,1]
Output: 5
Explanation: Either machine can manage 5: the first machine then needs
2 extra units of the first metal and 7 extra units of the second, which
costs 2 + 7 = 9 coins.
```

### Example 2

```text
Input: n = 1, k = 1, budget = 7, composition = [[3]], stock = [5], cost = [2]
Output: 2
Explanation: Three alloys would consume 9 units, so 4 units must be
bought at 2 coins each — 8 coins, over the budget. Two alloys need only
1 purchased unit, or 2 coins.
```

### Example 3

```text
Input: n = 2, k = 2, budget = 6, composition = [[4,1],[1,1]], stock = [0,0], cost = [1,1]
Output: 3
Explanation: Nothing is in stock, so the second machine's 2-unit recipe
wins: three alloys cost exactly 6 coins, while the first machine's
recipe allows only one.
```

### Constraints

- `1 <= n, k <= 100`
- `0 <= budget <= 10⁸`
- `composition.length == k`
- `composition[i].length == n`
- `1 <= composition[i][j] <= 100`
- `stock.length == cost.length == n`
- `0 <= stock[i] <= 10⁸`
- `1 <= cost[i] <= 100`

## Hints

### Hint 1

For a fixed machine, ask "can `x` alloys be produced within budget?"
and search for the largest such `x`.

### Hint 2

The cost of `x` alloys on one machine grows with `x` and never drops,
so affordability is monotone — once it turns false it stays false.

### Hint 3

Evaluate that question for every machine at each probed count and keep
the best result; a tight upper bound for the count keeps the search
range small.
