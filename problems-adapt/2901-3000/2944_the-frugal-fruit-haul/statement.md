# The Frugal Fruit Haul

## Description

You are given a 0-indexed integer array `prices`, where `prices[i]` is how
many coins the (i + 1)th fruit costs.

The stall runs one promotion, and it attaches to every fruit:

- Pay `prices[i]` coins for the (i + 1)th fruit and you may then take any
  number of the next `i` fruits at no charge.

A fruit you are entitled to take for free can still be bought outright for
`prices[j - 1]` coins — buying it collects its own promotion, which is
sometimes the cheaper overall play.

Return the smallest number of coins that acquires every fruit.

### Example 1

```text
Input: prices = [2,1,3]
Output: 3
Explanation: Buy fruit 1 for 2 coins — fruit 2 may then be taken free.
Buy fruit 2 anyway for 1 coin, because its promotion covers fruit 3,
which is then taken free. The total is 2 + 1 = 3.
```

### Example 2

```text
Input: prices = [1,4,1,1,5]
Output: 2
Explanation: Buy fruit 1 for 1 coin, making fruit 2 free. Buy fruit 3
for 1 coin — its promotion reaches fruits 4 and 5, so the whole haul
costs 2 coins.
```

### Example 3

```text
Input: prices = [5,3,4,2,6,1]
Output: 9
Explanation: Buy fruit 1 for 5 coins, covering fruit 2. Buy fruit 3 for
4 coins, whose promotion stretches across fruits 4, 5, and 6. Nothing
else needs paying: 5 + 4 = 9.
```

### Constraints

- `1 <= prices.length <= 1000`
- `1 <= prices[i] <= 10⁵`

## Hints

### Hint 1

Dynamic programming is the natural frame for this one.

### Hint 2

Let `dp[i]` be the fewest coins that finish the array when fruit `i` is
bought and everything from `i` onward ends up acquired.

### Hint 3

Buying fruit `i` frees the window that follows it, so the next purchase
lands somewhere in `[i + 1, 2i + 2]` — take the cheapest `dp` value in
that span.
