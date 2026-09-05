# How Much Cargo Fits On Deck

## Description

A ship's cargo deck is an `n x n` grid; every cell can hold at most one
container, and every container weighs exactly `w`.

The containers actually loaded may weigh no more in total than the
ship's carrying limit `maxWeight`.

What is the largest number of containers that can go on board?

### Example 1

```text
Input: n = 4, w = 6, maxWeight = 80
Output: 13
Explanation: The grid offers 16 cells, but 13 containers already weigh
13 * 6 = 78, and a 14th would push the total to 84 — past the limit.
So 13 containers load.
```

### Example 2

```text
Input: n = 1, w = 9, maxWeight = 100
Output: 1
Explanation: The budget could afford eleven containers, but a 1 x 1
deck holds only one cell.
```

### Example 3

```text
Input: n = 10, w = 1, maxWeight = 57
Output: 57
Explanation: There is plenty of room — 100 cells — yet each unit of
weight budget admits just one container, so 57 of them load.
```

### Constraints

- `1 <= n <= 1000`
- `1 <= w <= 1000`
- `1 <= maxWeight <= 1000000000`

## Hints

### Hint 1

Two separate ceilings cap the load: the number of cells on the deck,
and how many units of weight `w` the budget pays for.

### Hint 2

The answer is the smaller of `n * n` and `maxWeight / w`, rounded down
to a whole container.
