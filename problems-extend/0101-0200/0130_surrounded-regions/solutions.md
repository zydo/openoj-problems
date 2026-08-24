# Solutions — Surrounded Regions

## Border-seeded flood fill (reverse capture)

Enclosure is awkward to test cell by cell, because a region's fate is a property of the whole region, not of any single cell. Invert the question and it becomes easy: a region keeps its `'O'`s exactly when at least one of its cells sits on the border, so the survivors are precisely the cells reachable from some border `'O'` through orthogonal `'O'` steps — and every other `'O'` is enclosed by definition. Capturing then needs no region detection at all.

The method seeds a stack with every `'O'` on the four edges and flood-fills, stamping each reached cell `'#'` as it is discovered. The stamp doubles as the visited flag, and neither `'X'` nor `'O'` can collide with it. The fill runs on an explicit stack rather than recursion because a safe region can span all forty thousand cells of a `200 x 200` board, deeper than a call stack allows. One closing sweep reverts `'#'` to `'O'` and turns every remaining `'O'` into `'X'` — that leftover set is exactly the surrounded regions, so no second pass or extra bookkeeping is needed.

Edge shapes fall out of the seeding alone: a single row or column, an all-`'O'` board, and Example 1's bottom-edge `'O'` are nothing but border-connected cells, so nothing is captured. The rewrite happens inside the input allocation; the method returns the same `board` it received, now captured, which is what the judge compares.

**Complexity:** `O(mn)` time, `O(mn)` space in the worst case (the stack).
