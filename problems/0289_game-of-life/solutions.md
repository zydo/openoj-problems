# Solutions — Game of Life

## In-Place State Encoding

The simultaneity requirement is the crux: every cell's next state must be derived from the _old_ states of its neighbors, yet the solution must work in place. It resolves this with two intermediate markers — `2` means "was live, will die" and `3` means "was dead, will live". While scanning, a cell's original state can still be recovered: values `1` and `2` both mean the cell was live, `0` and `3` both mean it was dead.

The first pass walks every cell and counts live neighbors among its eight surroundings, treating cells outside the board as dead (bounds checks on the neighbor indices). A live cell (`1`) with fewer than 2 or more than 3 live neighbors becomes `2`; a dead cell (`0`) with exactly 3 becomes `3`. Cells that keep their state are left untouched. Because neighbor counting only looks for `1` or `2`, a cell already rewritten to `3` still correctly reads as "was dead" to later scans in the same pass.

A second pass normalizes the board: `1` and `3` become `1`, everything else becomes `0`. After this the board holds exactly the next generation, and the transformed board is returned.

Edge cases fall out naturally: single-row or single-column boards simply have most neighbors out of bounds, a 1×1 board counts zero live neighbors and dies, and the 2×2 all-live block survives because each cell sees exactly three live neighbors. The follow-ups are addressed directly — the encoding makes the update in-place with `O(1)` extra memory, and only integer arithmetic is involved, so the representation extends to larger or sparser boards without changes to the logic.

**Complexity:** `O(m·n)` time, `O(1)` space.
