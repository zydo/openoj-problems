# Least Moves to Sort Into the Blank

## Description

A row of `n` cells holds each of the values `0` to `n - 1` exactly once. The
value `0` plays a special role: it is not an item but the marker of the one
empty cell. The remaining values `1` to `n - 1` are items.

One operation is available: pick any item and move it into the empty cell. The
cell the item just left becomes empty in its place.

The row counts as sorted when the items appear in ascending order and the
empty cell is at one of the two ends. For `n = 4`, the sorted rows are exactly
`[0,1,2,3]` and `[1,2,3,0]`.

Return the smallest number of operations that turns `nums` into a sorted row.

### Example 1

```text
Input: nums = [2,1,0,3]
Output: 1
Explanation: Moving item 2 into the empty cell gives [0,1,2,3] — the empty
cell lands on the left end and every item is in ascending order.
```

### Example 2

```text
Input: nums = [1,2,3,0]
Output: 0
Explanation: The items already ascend and the empty cell closes the row on
the right, so nothing needs to move.
```

### Example 3

```text
Input: nums = [2,3,0,1,5,4]
Output: 4
Explanation:
- Move item 3 into the empty cell: nums = [2,0,3,1,5,4].
- Move item 2 into the empty cell: nums = [0,2,3,1,5,4].
- Move item 1 into the empty cell: nums = [1,2,3,0,5,4].
- Move item 4 into the empty cell: nums = [1,2,3,4,5,0].
Four operations finish the job. Item 5 was already home, but every other item
plus the empty cell belonged to one interlocked loop of five cells, and
walking the empty cell around such a loop costs one move per item it releases.
```

### Constraints

- `n == nums.length`
- `2 <= n <= 10⁵`
- `0 <= nums[i] < n`
- No two cells hold the same value.

## Hints

### Hint 1

There are two acceptable final rows — empty cell on the left or on the right.
Neither dominates the other, so price out both and keep the cheaper one.

### Hint 2

Fix one final row. While the empty cell sits away from its destination,
exactly one move is ever useful: bring in the item destined for the cell the
empty cell occupies. Following those obligations splits the row into loops.

### Hint 3

If the empty cell is already where it belongs but items are still stranded,
one extra move is unavoidable — pull a stranded item onto the empty cell's
final position first, then walk the empty cell back through its loop.
