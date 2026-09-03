# Tiered Overdue Charges

## Description

A lending desk fines every overdue item under a three-bracket schedule. You
are given an integer array `daysLate` where `daysLate[i]` counts how many
days late item `i` came back. The charge for one item is:

- `1` for an item brought back exactly one day late;
- `2 * daysLate[i]` for two up through five days late;
- `3 * daysLate[i]` once an item is more than five days late.

Return the combined charge across every item.

### Example 1

```text
Input: daysLate = [3,8,1]
Output: 31
Explanation: The first item sits in the middle bracket and owes 2 * 3 = 6,
the second crossed the top bracket for 3 * 8 = 24, and the last owes the
flat 1. Together that is 6 + 24 + 1 = 31.
```

### Example 2

```text
Input: daysLate = [6,6]
Output: 36
Explanation: Both items were six days late, past the five-day line, so
each owes 3 * 6 = 18 and the pair totals 36.
```

### Example 3

```text
Input: daysLate = [2,4,9,1]
Output: 40
Explanation: The charges are 2 * 2 = 4, 2 * 4 = 8, 3 * 9 = 27 and the flat
1, which sum to 40.
```

### Constraints

- `1 <= daysLate.length <= 100`
- `1 <= daysLate[i] <= 100`

## Hints

### Hint 1

Each item is priced on its own: one comparison chain places its late-day
count in the right bracket, and the bracket's rate does the rest. Add the
per-item results as you go.
