# Balancing Fruit Baskets

## Description

Two stalls each keep a basket of fruit; `basket1` and `basket2` list the
prices of the fruits in each, and both baskets hold the same number of
fruits. Call the baskets equivalent when, after sorting the prices inside
each one, the two lists agree.

In one move you may take any fruit from the first basket and any fruit
from the second and trade their places; the move costs the cheaper of the
two traded fruits. Moves are unlimited.

Return the least total cost over all moves needed to make the baskets
equivalent, or `-1` when no sequence of moves can.

### Example 1

```text
Input: basket1 = [3,3,3,1], basket2 = [1,1,3,1]
Output: 1
Explanation: Trade the 3 in basket1 for the 1 in basket2 at a cost of 1.
Both baskets then hold 1,1,3,3.
```

### Example 2

```text
Input: basket1 = [10,10,50,50], basket2 = [10,10,60,60]
Output: 20
Explanation: Trading a 50 with a 60 directly would cost 50. Instead route
each side of the exchange through a 10: swap the 10 in basket1 with a 60,
then swap a 50 with that returned 10 — 10 + 10 = 20 total.
```

### Example 3

```text
Input: basket1 = [8,8,3], basket2 = [3,8,3]
Output: -1
Explanation: The price 8 occurs three times across both baskets, so no
split gives each basket the same number of them.
```

### Constraints

- Both arrays share the same length `n`.
- `1 <= n <= 10⁵`
- `1 <= basket1[i], basket2[i] <= 10⁹`

## Hints

### Hint 1

Tally how many times every price occurs across the two baskets combined,
and keep track of the smallest price seen anywhere.

### Hint 2

A price whose combined count is odd can never end up split evenly between
the baskets — that alone decides the `-1`.

### Hint 3

For each price, half of the imbalance between the two counts is forced to
switch baskets; collect all such copies into one list.

### Hint 4

After sorting that list, only its cheaper half truly needs to travel; the
dear half rides along inside swaps paid for by the cheap half.

### Hint 5

A crossing priced above twice the global cheapest fruit is better executed
as two detours through that cheapest fruit, so charge each crossing
`min(ticket, 2 * cheapest)`.
