# Water Pooled On A Grid

## Description

`heights` describes an `m x n` block of terrain: `heights[i][j]` unit cubes are
stacked in the cell at row `i`, column `j`. Rain falls on the terrain until it
is saturated. Water resting above a cell stays only if every step-by-step route
from that cell to the outside of the grid — moving between edge-adjacent cells —
crosses ground at least as high as the water's surface; the rest drains away.

Return the number of unit cubes of water the terrain keeps.

### Example 1

```text
Input: heights = [[5,5,5,5],[5,2,6,5],[5,6,2,5],[5,5,5,5]]
Output: 6
Explanation: Each of the two 2-cells is walled in: the cheapest escape climbs
over a 5, so water stands 3 cubes deep above both of them. The two 6-cells
overlook their surroundings and hold nothing.
```

### Example 2

```text
Input: heights = [[4,4,4,4,4],[4,1,1,1,4],[4,1,3,1,4],[4,4,4,4,4]]
Output: 16
Explanation: The rim of 4s seals the interior. The five 1-cells fill to level 4,
keeping 3 cubes each, and the 3-cell in the middle — taller than its neighbors,
yet still below the water line — keeps one more.
```

### Example 3

```text
Input: heights = [[2,9,4,7]]
Output: 0
Explanation: Every cell of a single-row grid touches the edge, so all water
runs straight off.
```

### Constraints

- `m == heights.length`
- `n == heights[i].length`
- `1 <= m, n <= 200`
- `0 <= heights[i][j] <= 2 * 10⁴`

## Hints

### Hint 1

Anything placed on a border cell spills off the grid, so the amount kept above
an interior cell is decided by the lowest barrier along some route from that
cell to the border.

### Hint 2

Process cells in the order of that lowest barrier: grow a frontier inward from
the whole border at once, and always expand at the frontier's lowest cell — a
min-heap keyed by height hands you exactly that cell.

### Hint 3

When the frontier's lowest cell comes off the heap, each unvisited neighbor can
be settled for good: a lower one keeps the difference as water, a higher one
becomes part of the wall. Push the neighbor back with the effective height
`max(popped, neighbor)` so the frontier keeps tracking the water line as it
moves inward.
