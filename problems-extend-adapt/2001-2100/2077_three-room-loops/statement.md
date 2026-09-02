# Three-Room Loops

## Description

A maze floor has `n` rooms numbered `1` to `n`, some pairs of which are
joined by a corridor. You are given the 2D array `corridors`, where
`corridors[i] = [a_i, b_i]` means rooms `a_i` and `b_i` are directly
connected, and a visitor may walk between them in either direction.

Every time three rooms are wired so that a visitor can start in one, walk
through the other two without revisiting anything, and arrive back where
they started, the floor feels more tangled. The tangle count of the maze
is the number of distinct loops that pass through exactly 3 distinct rooms
and return to their start, moving only along corridors.

- For example, `1 → 2 → 3 → 1` is such a loop, but `1 → 2 → 3 → 4` never
  closes and `1 → 2 → 3 → 2 → 1` revisits room 2, so neither qualifies.

Two loops are distinct exactly when the set of rooms one visits differs
from the other's — where the walk starts and which way it runs does not
matter.

Return the tangle count of the maze.

### Example 1

```text
Input: n = 6, corridors = [[1,2],[2,3],[3,1],[4,5],[5,6],[6,4],[2,4]]
Output: 2
Explanation:
Rooms 1, 2, 3 are mutually joined, giving the loop 1 → 2 → 3 → 1, and
rooms 4, 5, 6 likewise give 4 → 5 → 6 → 4. The extra corridor [2,4]
bridges the two trios but closes no new three-room loop.
```

### Example 2

```text
Input: n = 4, corridors = [[1,2],[2,3],[3,4],[4,1]]
Output: 0
Explanation:
The four rooms form one big square. A loop needs exactly three rooms, and
no three of these rooms are mutually joined.
```

### Example 3

```text
Input: n = 3, corridors = [[1,2],[1,3],[2,3]]
Output: 1
Explanation: All three corridors exist, so the rooms form exactly one
loop.
```

### Constraints

- `2 <= n <= 1000`
- `1 <= corridors.length <= 5 * 10⁴`
- `corridors[i].length == 2`
- `1 <= a_i, b_i <= n`
- `a_i != b_i`
- No corridor is listed more than once.

## Hints

### Hint 1

A loop through rooms `a`, `b`, `c` exists exactly when all three pairwise
corridors among them are present — so the task is really counting
three-room sets whose every pair is joined.

### Hint 2

Direct every corridor one way (say from the endpoint with fewer corridors,
breaking ties by room number). A loop anchored at room `u` then looks like
two of `u`'s forward neighbors that are themselves joined in the forward
direction — and each loop is found exactly once this way.
