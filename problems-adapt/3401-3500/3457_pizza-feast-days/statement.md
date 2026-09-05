# Pizza Feast Days

## Description

You are given an integer array `pizzas` of length `n`, where `pizzas[i]` is
the weight of the `ith` pizza. The feast runs for several days, and you
finish exactly four pizzas per day. Your metabolism is peculiar: eating four
pizzas of weights `W`, `X`, `Y`, `Z` with `W <= X <= Y <= Z` adds the weight
of just one pizza to you.

- On odd-numbered days (counted from 1), the added weight is `Z`, the
  heaviest pizza of that day.
- On even-numbered days, the added weight is `Y`, the second-heaviest pizza
  of that day.

Decide which four pizzas you eat on each day so that the total weight you
gain is as large as possible.

Note: `n` is a multiple of 4, and every pizza is eaten on exactly one day.

### Example 1

```text
Input: pizzas = [7,3,9,1,12,4,8,2]
Output: 20
Explanation:
    On day 1 (odd), eat the pizzas of weights [1, 2, 3, 12]. You gain 12.
    On day 2 (even), eat the pizzas of weights [4, 7, 8, 9]. You gain 8.
    The total weight gained over the feast is 12 + 8 = 20.
```

### Example 2

```text
Input: pizzas = [5,5,5,5]
Output: 5
Explanation:
    The feast is a single odd-numbered day, so eating all four pizzas of
    weight 5 gains you 5.
```

### Example 3

```text
Input: pizzas = [10,20,30,40,50,60,70,80,90,100,110,120]
Output: 320
Explanation:
    On day 1 (odd), eat the pizzas of weights [10, 20, 30, 120]. You gain 120.
    On day 2 (even), eat the pizzas of weights [40, 50, 100, 110]. You gain 110.
    On day 3 (odd), eat the pizzas of weights [60, 70, 80, 90]. You gain 90.
    The total weight gained over the feast is 120 + 110 + 90 = 320.
```

### Constraints

- `4 <= n == pizzas.length <= 2 * 10⁵`
- `1 <= pizzas[i] <= 10⁵`
- `n` is a multiple of 4.

## Hints

### Hint 1

Only a day's position decides which of its four pizzas counts, so sort the
weights and think about which pizzas should be the counted ones.

### Hint 2

An odd day counts only its heaviest pizza, so its other three slots are free
to absorb the lightest pizzas that remain.

### Hint 3

With `d = n / 4` days there are `ceil(d / 2)` odd days; hand each of them one
of the top `ceil(d / 2)` weights.

### Hint 4

Give the even days the next weights two at a time: an even day counts its
second-heaviest, so consecutive pairs from the top let every second pizza of
that block be the counted one.
