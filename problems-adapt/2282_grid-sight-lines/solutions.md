# Solutions — Grid Sight Lines

## Monotonic stacks per row and column

The count at a cell splits into two independent halves: how many people
it sees to the right, plus how many it sees below. Add the two passes and
the grid is done. For one half, walk the line backwards — right to left
for a row, bottom to top for a column — and keep a stack of heights that
are still in view from the frontier. From bottom to top that stack is
strictly decreasing: anyone shorter than a stack member is hidden behind
it.

When the sweep reaches height `x`, each entry the stack pops (those
strictly below `x`) is one person `x` sees — every person between them
and `x` is shorter still. If anything survives the popping, its top is
the first height at least `x`, and that person is visible too, because
the in-between people were all just popped as strictly shorter than `x`.
Then comes the detail equal heights force: the count credits a `>=` top,
but the cleanup that follows pops entries `<= x`, so an equal-height
neighbour is counted once and then removed from view — nobody further
back can be seen *through* them.

In the row `[3, 6, 2, 7, 5]` the sweep reaches the 6 with `[7]` left on
the stack: nothing pops, the 7 is counted alongside the popped 2, and
after the cleanup the stack reads `[7, 6]` — which is why the 3 that
arrives next sees only the 6.

Rows use their own stack, columns theirs; both drop their counts into
the same cell of the result grid. A height is pushed and popped at most
once per pass, so the whole computation is linear in the grid size, with
the stacks holding no more than one row or one column at a time.

**Complexity:** `O(mn)` time, `O(m + n)` space.
