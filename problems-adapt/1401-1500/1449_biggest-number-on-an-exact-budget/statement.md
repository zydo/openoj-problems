# Biggest Number on an Exact Budget

## Description

You are given an array `cost` of nine integers and an integer `target`.
Writing digit `i + 1` costs `cost[i]` (the array is 0-indexed), every
digit may be written any number of times, and the digit `0` never
appears.

Assemble a number whose digits cost exactly `target` in total. Among
all the numbers that spend the budget exactly, return the largest one.
It can be enormous, so return it as a string; if no number fits the
budget at all, return `"0"`.

### Example 1

```text
Input: cost = [3,1,4,1,5,9,2,6,5], target = 7
Output: "4444444"
Explanation: The cheapest digits here are 2 and 4, each costing 1.
Every digit costs at least 1, so no number can have more than seven
digits, and the largest seven-digit choice writes the bigger of the
two cost-1 digits every time: "4444444".
```

### Example 2

```text
Input: cost = [9,8,7,6,5,4,3,2,1], target = 10
Output: "9999999999"
Explanation: Digit 9 costs 1 here, so writing it ten times spends the
whole budget, and no ten-digit number can beat it.
```

### Example 3

```text
Input: cost = [5,5,5,5,5,5,5,5,5], target = 3
Output: "0"
Explanation: Every digit costs 5, so no number can cost exactly 3.
```

### Constraints

- `cost.length == 9`
- `1 <= cost[i], target <= 5000`

## Hints

### Hint 1

First compute, for every achievable total cost, the largest count of
digits that can cost exactly that much — an unbounded knapsack over
the nine digits.

### Hint 2

Reconstruct the answer greedily from that table: at each step pick the
largest digit whose remaining budget still allows one fewer digit than
the current count requires.
