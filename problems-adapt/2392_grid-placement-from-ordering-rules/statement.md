# Grid Placement From Ordering Rules

## Description

You are given a positive integer `k` and two lists of pairwise rules over the
numbers `1` through `k`:

- `rowConditions`, where each entry `[a, b]` demands that `a` sit in some row
  strictly above `b`'s row;
- `colConditions`, where each entry `[l, r]` demands that `l` sit in some
  column strictly left of `r`'s column.

Build a `k x k` matrix containing each number from `1` to `k` exactly once and
`0` in every other cell, so that both rule lists hold. Several matrices can
satisfy the rules; any one of them is a correct answer. If no matrix can, return
an empty matrix.

### Example 1

```text
Input: k = 3, rowConditions = [[2,1],[1,3]], colConditions = [[1,3],[2,3]]
Output: [[0,2,0],[1,0,0],[0,0,3]]
Explanation: Reading top to bottom, the rows hold 2, 1, 3 — so 2 is above 1 and
1 is above 3, exactly as the row rules ask. Reading left to right, the columns
hold 1, 2, 3 — so both 1 and 2 sit left of 3, as the column rules ask. Other
matrices satisfy the same rules.
```

### Example 2

```text
Input: k = 2, rowConditions = [[2,1]], colConditions = [[1,2]]
Output: [[0,2],[1,0]]
Explanation: The two rules act on different axes: 2 goes in a row above 1's
row, and 1 goes in a column left of 2's column. Putting 2 in the top row's
right cell and 1 in the bottom row's left cell satisfies both at once.
```

### Example 3

```text
Input: k = 4, rowConditions = [[2,3],[3,4],[4,2]], colConditions = [[1,4]]
Output: []
Explanation: The row rules ask for 2 above 3 above 4 above 2 — a cycle no
placement can realize, regardless of the columns, so the answer is the empty
matrix.
```

### Constraints

- `2 <= k <= 400`
- `1 <= rowConditions.length, colConditions.length <= 10⁴`
- every rule is a pair: `rowConditions[i].length == colConditions[i].length == 2`
- the entries of both lists lie in `[1, k]`
- within a rule the two numbers differ.

## Hints

### Hint 1

Each axis is its own puzzle: the row rules never mention columns and the column
rules never mention rows. What does each list, alone, ask for?

### Hint 2

Read each list as edges of a directed graph. When does such a graph let you
line up all `k` numbers, and which orderings does it admit?

### Hint 3

With a viable ordering per axis, where does number `v` go, and why can the two
orderings be combined without conflict?
