# Largest Island After One Flip

## Description

`grid` is a square matrix with `n` rows and `n` columns whose entries are `0` and
`1`. Call a maximal set of `1` cells that reach one another by steps up, down,
left or right an _island_, and call its cell count its size.

You may turn one `0` entry into a `1`, or decline to change anything. Return the
size of the biggest island the matrix can hold once you have decided.

### Example 1

```text
Input: grid = [[1,0,1],[1,0,1],[0,0,0]]
Output: 5
Explanation: Two islands of size 2 sit in the outer columns. Turning the top
middle cell into a 1 welds them into one island of 5 cells.
```

### Example 2

```text
Input: grid = [[1,1,0],[1,0,0],[0,0,1]]
Output: 4
Explanation: The L of three cells in the top left corner already touches the
centre cell twice, from above and from the left. Filling the centre adds one
cell to that island for a total of 4 — not 7, because the same island is on
both sides.
```

### Example 3

```text
Input: grid = [[1,1,1],[1,1,1],[1,1,1]]
Output: 9
Explanation: There is no `0` to spend the change on, and the single island
already covers everything.
```

### Constraints

- `grid` is square: it has `n` rows, and every row has `n` entries.
- `1 <= n <= 500`
- Each entry is `0` or `1`.

## Hints

### Hint 1

A change cannot invent structure; it can only weld together islands that already
touch the cell being changed. So map the islands first — one traversal per
island, stamping a distinct id into each of its cells and recording how many
cells carry that id.

### Hint 2

Now price every `0` cell: it is worth `1` plus the summed size of the ids that
show up among its four neighbours. Gather those ids in a set before summing. One
island can border the same cell from two directions, and counting it twice
inflates the result.

### Hint 3

Start the running answer at the size of the largest island already present. That
is what a matrix of all `1`s must return, since it offers no `0` to change.
