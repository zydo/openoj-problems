# Count Negative Numbers in a Sorted Matrix

## Approach: Staircase walk

The negatives form a staircase: in each row the negatives are a suffix
(rows are non-increasing), and moving down a column the boundary can only
move left (columns are non-increasing). Walking the rows top to bottom
while a single column pointer slides monotonically left — advance it
while it points at a negative — counts each row's negative suffix as
`n - 1 - pointer`, and the pointer never moves right again, giving one
pass of at most m + n steps.

Each matrix cell is examined at most once by the pointer, and each row's
contribution is computed in O(1) from the pointer position.

**Complexity:** O(m + n) time, O(1) space.
