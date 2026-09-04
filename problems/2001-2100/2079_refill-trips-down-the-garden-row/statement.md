# Refill Trips Down the Garden Row

## Description

A gardener is watering a row of `n` plants with a single watering can. The
plants sit at the integer positions `0` through `n - 1` on a number line,
and the only refill point — a river — sits at position `-1`. Walking one
unit along the line costs one step.

Plant `i` needs `plants[i]` units of water, and the can holds `capacity`
units when full. The gardener starts at the river with a full can and works
strictly left to right:

- Each plant is watered in full before anything else happens; none may be
  skipped or taken out of order.
- Right after watering plant `i`, if what is left in the can cannot cover
  plant `i + 1` in full, the gardener walks back to the river, fills the
  can to `capacity`, and walks forward again to water plant `i + 1`.
- Refilling at any other moment is not allowed.

Return the total number of steps the gardener walks to water the entire
row.

### Example 1

```text
Input: plants = [3,2,4,1,5], capacity = 6
Output: 17
Explanation: The can starts full with 6 units.
- Walk to plant 0 (1 step) and water it. 3 units remain.
- Walk to plant 1 (1 step) and water it. 1 unit remains.
- Plant 2 needs 4 units — not enough. Walk back to the river (2 steps),
  refill, and walk to plant 2 (3 steps). Water it; 2 units remain.
- Walk to plant 3 (1 step) and water it. 1 unit remains.
- Plant 4 needs 5 units — not enough. Walk back (4 steps), refill, and
  walk to plant 4 (5 steps). Water it.
Total steps = 1 + 1 + 2 + 3 + 1 + 4 + 5 = 17.
```

### Example 2

```text
Input: plants = [9,1,1,2], capacity = 10
Output: 8
Explanation:
- Walk to plant 0 (1 step) and water it; only 1 unit remains.
- Walk to plant 1 (1 step) and water it; the can is now empty.
- Plant 2 needs 1 unit — not enough. Walk back to the river (2 steps),
  refill, and walk to plant 2 (3 steps). Water it; 9 units remain.
- Walk to plant 3 (1 step) and water it.
Total steps = 1 + 1 + 2 + 3 + 1 = 8.
```

### Example 3

```text
Input: plants = [2,3,1], capacity = 100
Output: 3
Explanation: The can never runs dry, so each plant costs exactly the one
forward step needed to reach it.
```

### Example 4

```text
Input: plants = [5], capacity = 5
Output: 1
Explanation: The single plant exactly drains a full can, and it sits one
step from the river.
```

### Constraints

- `1 <= plants.length <= 1000`
- `1 <= plants[i] <= 10⁶`
- `capacity` is at least as large as the thirstiest single plant and at
  most `10⁹`, so every plant can always be watered.

## Hints

### Hint 1

Nothing needs to be searched: the refill points are forced by the water
left in the can. Sweep the row once, carrying the remaining supply, and
every leg's length is determined as you reach it.

### Hint 2

When plant `i` needs more than the can holds, charge the there-and-back
detour measured at plant `i`'s position — `2 * i` steps on top of the one
forward step every plant costs — then reset the can to full.
