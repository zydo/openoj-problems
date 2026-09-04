# Longest Affordable Consecutive Stretch

## Description

You are given two integer arrays of length `n`: `startCosts` and `usageCosts`,
and an integer `budget`. The arrays describe `n` consecutive slots; slot `i`
carries a one-time cost `startCosts[i]` and a per-use cost `usageCosts[i]`,
and every cost is positive.

Taking `k` consecutive slots together costs

```text
max(startCosts in the block) + k * sum(usageCosts in the block)
```

— the largest one-time cost in the block, plus the block's per-use total scaled
by its length.

Return the length of the longest block of consecutive slots whose total cost
stays within `budget`. If no single slot is affordable, the answer is `0`.

### Example 1

```text
Input: startCosts = [4,9,2,5,8], usageCosts = [3,1,2,2,4], budget = 40
Output: 3
Explanation: Slots 0-2 cost max(4,9,2) + 3 * (3+1+2) = 9 + 18 = 27, which fits.
Slots 0-3 would cost 9 + 4 * 8 = 41, one unit over, and so does every block of
four or five slots, so 3 is the longest affordable stretch.
```

### Example 2

```text
Input: startCosts = [7,7], usageCosts = [5,5], budget = 9
Output: 0
Explanation: A single slot already costs 7 + 1 * 5 = 12 > 9, so nothing fits
and the answer is 0.
```

### Example 3

```text
Input: startCosts = [2,3,1], usageCosts = [1,1,1], budget = 50
Output: 3
Explanation: The whole array costs 3 + 3 * 3 = 12, well within budget.
```

### Constraints

- `startCosts.length == usageCosts.length == n`
- `1 <= n <= 5 * 10⁴`
- `1 <= startCosts[i], usageCosts[i] <= 10⁵`
- `1 <= budget <= 10¹⁵`

## Hints

### Hint 1

Fix the block's right end and let the left end move. What happens to the total
cost as the block only ever grows, given every cost is positive?

### Hint 2

That monotonicity licenses a two-pointer sweep: extend on the right, retreat on
the left while over budget, and remember the best length.

### Hint 3

The per-use total is a running sum, but the block's maximum one-time cost needs
a structure that admits and evicts ends quickly — a deque of decreasing values
does it.
