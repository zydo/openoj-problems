# Server Upgrade Budgets

## Description

You operate `n` data centers and want to modernize as many of their
servers as possible. Four arrays of length `n` describe the fleet:

- `count[i]` — the servers at center `i`
- `upgrade[i]` — what it costs to modernize one server there
- `sell[i]` — what a server there fetches if you sell it
- `money[i]` — the cash that center holds

Each center is its own economy: money held at one center can never pay
for work at another, and any server you choose not to upgrade may be
sold instead, with the proceeds joining that same center's budget.

Return an array `answer` whose `i`-th element is the largest number of
servers center `i` can modernize.

### Example 1

```text
Input: count = [5,2], upgrade = [4,10], sell = [3,1], money = [7,20]
Output: [3,2]
Explanation: At the first center, selling two of the five servers lifts
the budget to 7 + 6 = 13, which covers the other three at 4 apiece. A
fourth upgrade would cost 16, and selling down to one server leaves
only 10. The second center's 20 on hand already pays for both of its
servers at 10 each.
```

### Example 2

```text
Input: count = [6], upgrade = [2], sell = [5], money = [3]
Output: [4]
Explanation: Skipping the two servers you sell raises the budget to
3 + 10 = 13, enough for four upgrades at 2 apiece. A fifth would cost
10 while selling down to one server leaves just 8.
```

### Example 3

```text
Input: count = [3,1], upgrade = [100,1], sell = [10,1], money = [5,100]
Output: [0,1]
Explanation: The first center cannot afford its upgrade even after
selling everything: 5 + 30 = 35 falls short of 100. The second center
modernizes its only server outright.
```

### Constraints

- `1 <= count.length == upgrade.length == sell.length == money.length <= 10⁵`
- `1 <= count[i], upgrade[i], sell[i], money[i] <= 10⁵`

## Hints

### Hint 1

Handle each center on its own. Its usable budget is `money[i]` plus the
sale price of every server you decide not to upgrade.

### Hint 2

Upgrading `u` servers is feasible exactly when `u * upgrade[i]` fits in
that budget — equivalently, when the servers that must be sold to cover
any shortfall still leave `u` of the `count[i]` servers un-sold.

### Hint 3

Feasibility holds at zero upgrades and can flip from possible to
impossible only once as `u` grows, so a binary search on `u` lands on
the largest affordable count.
