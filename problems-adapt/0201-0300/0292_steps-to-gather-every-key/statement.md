# Steps to Gather Every Key

## Description

You are handed a rectangular floor plan as an array of equal-length strings,
`grid`, one string per row. Every character says what stands on that square:

- `'.'` — open floor.
- `'#'` — solid wall.
- `'@'` — where you begin; there is exactly one of these.
- a lowercase letter — a key lying on the floor.
- an uppercase letter — a door, opened only by the key of the same letter.

Each step moves you to a square sharing an edge with the current one. You may
never step off the plan, never step into a wall, and never step into a door
whose key you are not already carrying. Stepping onto a key picks it up, and
you keep it for the rest of the walk.

Return the fewest steps needed until you carry every key on the plan, or `-1`
if no walk collects them all.

### Example 1

```text
Input: grid = ["@#b.",".#A.","a...","##B."]
Output: 6
Explanation: Two steps straight down reach key a. Four more — right, right,
up, up — pass through door A, which key a now opens, and land on key b.
```

### Example 2

```text
Input: grid = ["@..B.b",".#.#..","a.A..."]
Output: 9
Explanation: Two steps down the left edge collect key a. Walking right along
the bottom row through door A and then up the right edge reaches key b in
seven more steps. Door B is never worth entering.
```

### Example 3

```text
Input: grid = ["@.A","###","a.."]
Output: -1
Explanation: The wall row seals off the bottom, and door A leads nowhere,
so key a can never be picked up.
```

### Constraints

- `m == grid.length` and `n == grid[i].length`, with `1 <= m, n <= 30`.
- Each `grid[i][j]` is `'.'`, `'#'`, `'@'`, or an English letter.
- Exactly one square holds `'@'`.
- The plan holds `k` keys for some `1 <= k <= 6`: the lowercase letters are
  the first `k` letters of the alphabet, each appearing once, and each has
  exactly one matching uppercase door.

## Hints

### Hint 1

A square is not a state on its own — whether you may stand on a door depends
on what you are carrying, so the same square behaves differently at different
moments. What distinguishes those moments is only the set of keys held, and
with at most six keys that set is six bits.

### Hint 2

Search the pairs (square, keys held) rather than the squares. From a pair,
each of the four neighbours is reachable unless it is off the plan, a wall, or
a door whose bit is clear; landing on a key sets its bit, producing a
different pair from the same square. Every move costs one step, so breadth-first
order visits pairs in increasing distance.

### Hint 3

Mark a pair visited the first time it is dequeued or enqueued — revisiting a
square is fine and often necessary, revisiting it with the same keys never
helps. The answer is the distance of the first pair whose bit set is complete;
if the queue empties first, no walk exists and the answer is `-1`.
