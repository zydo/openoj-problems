# Two-Type Harvest Run III

## Description

Two integer arrays of equal length `n` are given: `fruits`, where
`fruits[i]` is the quantity of the `i`th fruit type, and `baskets`, where
`baskets[j]` is the capacity of the `j`th basket. The fruit types are
processed strictly in order, one at a time, under three rules:

- A fruit type goes into the leftmost still-empty basket whose capacity
  is at least the fruit quantity.
- A basket holds at most one fruit type; once filled it is spent.
- A fruit type that fits no remaining basket stays unplaced.

Return how many fruit types remain unplaced once every type has had its
turn. At this input scale the placement decision must be found
efficiently rather than by rescanning every basket each time.

### Example 1

```text
Input: fruits = [8,3,10,4], baskets = [9,4,5,10]
Output: 0
Explanation: The 8 takes basket 9, the 3 takes basket 4, the 10 skips
the too-small 5 for basket 10, and the 4 fits the free basket 5. All
four types are placed.
```

### Example 2

```text
Input: fruits = [7,7,7,2], baskets = [7,8,1,9]
Output: 1
Explanation: The first two 7s fill baskets 7 and 8, the third hops over
the 1 into basket 9. The 2 then finds only the spent baskets and the
too-small 1, so it stays unplaced.
```

### Example 3

```text
Input: fruits = [5], baskets = [4]
Output: 1
Explanation: The single basket holds less than 5, so the fruit type is
never placed.
```

### Example 4

```text
Input: fruits = [1,1,1], baskets = [2]
Output: 2
Explanation: The first 1 fills the lone basket; the remaining two types
have nowhere to go.
```

### Constraints

- `n == fruits.length == baskets.length`
- `1 <= n <= 10⁵`
- `1 <= fruits[i], baskets[i] <= 10⁹`

## Hints

### Hint 1

Rank the baskets by capacity, remembering where each sits in the original
order.

### Hint 2

For each fruit in order, a capacity-sorted view lets you jump straight to
the baskets that can hold it.

### Hint 3

Among those candidates you need the smallest original index that is
still free — a structure that answers "leftmost index with value at
least q" over the basket array updates as baskets get spent.

### Hint 4

Spending a basket is a point update: retire that position and refresh
the aggregates above it.
