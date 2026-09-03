# Pascal's Staircase

## Description

Given an integer `numRows`, build the first `numRows` rows of Pascal's
staircase and return them top to bottom.

The staircase builds itself out of one rule: every step is the sum of the
two steps standing directly above it, which gives

![diagram](figures/118-1.svg)

Each row starts and ends with a `1` — the outer edges have only one step
above them — and every interior value is the sum of its two upper
neighbors. The result is a list of rows: row `i` holds `i + 1` values.

### Example 1

```text
Input: numRows = 6
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],[1,5,10,10,5,1]]
Explanation: Six rows stack up under the one rule; the bottom row's
interior values 5, 10, 10, 5 each total a diagonal pair from the row
above.
```

### Example 2

```text
Input: numRows = 3
Output: [[1],[1,1],[1,2,1]]
Explanation: The single interior value 2 is the sum of the two 1s in the
row above it.
```

### Example 3

```text
Input: numRows = 2
Output: [[1],[1,1]]
Explanation: The apex plus one two-valued row — no interior sums yet.
```

### Constraints

- `1 <= numRows <= 30`
