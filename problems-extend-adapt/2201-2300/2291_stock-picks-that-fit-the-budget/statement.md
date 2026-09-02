# Stock Picks That Fit the Budget

## Description

You are handed two equally long arrays, `present` and `future`: the item
at index `i` costs `present[i]` today and will sell for `future[i]` one
year from now. Each pick can be made at most once, and you start with
`budget` money to spend.

Purchases may not exceed `budget` in total cost. Return the largest
total return — the sum of sale prices minus purchase prices — you can
lock in.

### Example 1

```text
Input: present = [4,5,3], future = [6,5,9], budget = 7
Output: 8
Explanation: Buy the picks costing 3 and 4 for a total of 7, which the
budget just covers. They sell for 9 and 6, i.e. 15 in all, leaving a
return of 15 - 7 = 8. No other affordable selection does better.
```

### Example 2

```text
Input: present = [10], future = [9], budget = 100
Output: 0
Explanation: The only pick would sell for less than it costs, so the
best move is to buy nothing and finish with a return of 0.
```

### Example 3

```text
Input: present = [1,2,3], future = [2,3,4], budget = 3
Output: 2
Explanation: All three picks together cost 6, over the budget. Buying
the picks that cost 1 and 2 earns 1 + 1 = 2, which beats any single
purchase.
```

### Constraints

- `n == present.length == future.length`
- `1 <= n <= 1000`
- `0 <= present[i], future[i] <= 100`
- `0 <= budget <= 1000`

## Hints

### Hint 1

This is a 0/1 knapsack in disguise.

### Hint 2

Treat pick `i` as a knapsack item whose weight is `present[i]` and whose
value is `future[i] - present[i]`.
