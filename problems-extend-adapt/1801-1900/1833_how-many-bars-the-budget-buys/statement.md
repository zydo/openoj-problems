# How Many Bars the Budget Buys

## Description

A vendor sells `n` frozen bars, and you arrive with a purse of `coins`
coins. The price of bar `i` is `costs[i]`. You want to walk away with as
many bars as your money allows; the order you buy them in does not matter,
and each bar can be taken at most once.

Return the largest number of bars you can afford.

Solve the problem with counting sort.

### Example 1

```text
Input: costs = [2,7,3,5,3], coins = 12
Output: 3
Explanation: The three cheapest bars cost 2 + 3 + 3 = 8. Adding the next
cheapest, at price 5, would bring the total to 13 — past the purse.
```

### Example 2

```text
Input: costs = [9,9,9], coins = 8
Output: 0
Explanation: Every single bar costs more than the whole budget.
```

### Example 3

```text
Input: costs = [4,2,6,1,3,2,5], coins = 15
Output: 5
Explanation: Taking the five cheapest — 1 + 2 + 2 + 3 + 4 = 12 — leaves
change, but the 3 coins left cannot reach the sixth bar's price of 5.
```

### Constraints

- `1 <= costs.length <= 10⁵`
- `1 <= costs[i] <= 10⁵`
- `1 <= coins <= 10⁸`

## Hints

### Hint 1

A fixed purse buys the most bars when every coin goes to the cheapest bar
still on the table — trading one in for a pricier bar can never help.

### Hint 2

Tally how many bars sit at each price, then sweep prices upward, taking as
many as the remaining budget covers at each stop.
