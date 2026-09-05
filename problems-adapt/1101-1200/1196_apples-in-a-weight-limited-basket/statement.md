# Apples in a Weight-Limited Basket

## Description

A basket can hold at most 5000 units of weight before it gives out. You
are given an array `weight`, where `weight[i]` is the weight of the i-th
apple in a pile beside the basket.

Carry away as many apples as the basket allows: pick apples, one at a
time, so that their combined weight never exceeds the 5000-unit limit.
Return the largest count of apples that can be carried this way.

### Example 1

```text
Input: weight = [300, 4500, 100, 250]
Output: 3
Explanation: The three apples weighing 100, 250, and 300 together weigh
650; adding the 4500-unit apple would overflow the basket.
```

### Example 2

```text
Input: weight = [1000, 1000, 1000, 1000, 1000, 1000]
Output: 5
Explanation: Five apples weigh exactly 5000, and the sixth would exceed
the limit.
```

### Example 3

```text
Input: weight = [4800, 200, 199]
Output: 2
Explanation: The two lighter apples fit (399 total); any packing that
includes the 4800-unit apple has room for nothing else.
```

### Constraints

- `1 <= weight.length <= 10³`
- `1 <= weight[i] <= 10³`

## Hints

### Hint 1

When the goal is a count rather than a total value, which apples are the
safest ones to commit to?

### Hint 2

Swapping any chosen apple for a lighter one frees capacity without
reducing the count — so some optimal choice uses the lightest apples.

### Hint 3

Sort by weight and keep taking the next-lightest apple until the next one
would push the running total past 5000.
