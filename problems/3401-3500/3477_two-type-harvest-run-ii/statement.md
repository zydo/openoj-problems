# Two-Type Harvest Run II

## Description

Two integer arrays of equal length `n` are given: `fruits`, where
`fruits[i]` is the quantity of the `i`th fruit type, and `baskets`, where
`baskets[j]` is the capacity of the `j`th basket. The fruit types are
handled strictly in order, one at a time, under three rules:

- A fruit type goes into the leftmost still-empty basket whose capacity
  is at least the fruit quantity.
- A basket holds at most one fruit type; once filled it is out of play.
- A fruit type that fits no remaining basket stays unplaced.

Return how many fruit types remain unplaced once every type has had its
turn.

### Example 1

```text
Input: fruits = [6,1,4], baskets = [2,5,7]
Output: 0
Explanation: The 6 skips the too-small 2 and 5 and lands in basket 7.
The 1 takes basket 2, the leftmost free one, and the 4 takes basket 5.
Every fruit is placed.
```

### Example 2

```text
Input: fruits = [5,5,5], baskets = [5,4,5]
Output: 1
Explanation: The first 5 fills basket 5 at index 0 and the second 5
hops over the too-small 4 into the basket at index 2. The third 5 then
finds every fitting basket occupied and stays unplaced.
```

### Example 3

```text
Input: fruits = [9], baskets = [3,1]
Output: 1
Explanation: No basket reaches capacity 9, so the only fruit type is
never placed.
```

### Example 4

```text
Input: fruits = [1,2,3], baskets = [3,2,1]
Output: 1
Explanation: The 1 takes basket 3 and the 2 takes basket 2, but the 3
fits neither leftover basket — the only free one holds just 1.
```

### Constraints

- `n == fruits.length == baskets.length`
- `1 <= n <= 100`
- `1 <= fruits[i], baskets[i] <= 1000`

## Hints

### Hint 1

Nothing here needs optimization — the rules determine every placement,
so carry them out literally.

### Hint 2

For each fruit in order, sweep the baskets from index 0 and take the
first free one whose capacity covers the quantity.

### Hint 3

Keep a simple "basket is filled" record so the sweep skips occupied
baskets without disturbing them.
