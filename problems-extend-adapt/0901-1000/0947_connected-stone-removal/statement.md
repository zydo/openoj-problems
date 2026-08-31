# Connected Stone Removal

## Description

Each entry in `stones` is an integer coordinate `[xi, yi]` occupied by one
stone on a plane, and no coordinate is repeated. In a move, you may remove a
stone only if another stone still on the plane shares its row or its column.
Stones never move, so a move can change which later removals remain legal.

Return the largest number of stones that can be removed.

### Example 1

```text
Input: stones = [[0,0],[0,2],[4,2],[5,7]]
Output: 2
Explanation: The first three stones form one row-or-column-connected group,
so two of them can be removed; [5,7] is isolated and must remain.
```

### Example 2

```text
Input: stones = [[1,1],[2,2]]
Output: 0
Explanation: The two stones share neither a row nor a column, so neither move
is legal.
```

### Constraints

- `1 <= stones.length <= 1000`
- `0 <= xi, yi <= 10⁴`
- No two stones are at the same coordinate point.
