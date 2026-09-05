# Dishes Worth Cooking

## Description

A cook has rated every dish on the menu with a satisfaction level
`satisfaction[i]`, which may be negative. Cooking any dish takes exactly
one unit of time, and dishes are prepared one after another.

If a dish is the k-th one to be finished, it contributes `k *
satisfaction[i]` to the meal's total score. The cook chooses the cooking
order freely and may skip any dishes entirely.

Return the largest total score the cook can achieve.

### Example 1

```text
Input: satisfaction = [5,2,8]
Output: 36
Explanation: Cook all three dishes in ascending order of satisfaction:
2*1 + 5*2 + 8*3 = 36.
```

### Example 2

```text
Input: satisfaction = [-6,-5,2,9]
Output: 26
Explanation: Cook -5, then 2, then 9: -5*1 + 2*2 + 9*3 = 26, with -6
left out of the plan.
```

### Example 3

```text
Input: satisfaction = [-2,-7]
Output: 0
Explanation: Every dish is unappetizing, so the best plan cooks nothing.
```

### Constraints

- `n == satisfaction.length`
- `1 <= n <= 500`
- `-1000 <= satisfaction[i] <= 1000`

## Hints

### Hint 1

Sort the satisfaction levels ascending. In an optimal plan the chosen
dishes are cooked in that same order, and they always form a suffix of
the sorted array: a dish is only worth cooking when every tastier dish
comes after it.

### Hint 2

Scan from the largest value downward while tracking the sum of the
dishes already chosen. Prepending a new dish pushes every chosen dish
one slot later, so the dish helps exactly when that running sum plus the
new value is positive.
