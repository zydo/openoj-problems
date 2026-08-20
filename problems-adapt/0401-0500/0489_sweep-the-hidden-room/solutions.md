# Solutions — Sweep the Hidden Room

## Spiral traversal with backtracking

The machine is blind; the bookkeeping is not. Cells are recorded relative
to the start `(0, 0)`, and the heading is known at every instant because
the code itself commands each pivot. From each cell the traversal tries
the four directions in clockwise order, descending into every unvisited
open cell and backing out of it before moving on — the classic
wall-following spiral.

The invariant that carries the driving: iteration `i` of a cell's frame
begins with the machine facing `(entry + i) % 4`, where `entry` is the
heading it arrived on. Every iteration ends with exactly one `turnRight`
— paid immediately when the cell ahead is blocked or already visited, or
deferred when the traversal descends. When a child frame is exhausted,
the sequence _turnRight, turnRight, move, turnRight, turnRight_ turns the
machine about, retraces the step, and restores the child's arrival
heading; one further `turnRight` then pays the parent's deferred turn,
landing the machine precisely where its next iteration expects it. The
physical machine and the algorithm therefore never disagree.

The recursion is spelled out as an explicit frame stack (`[row, col,
entry, index]`), which matters here: a 100 x 200 room admits traversal
paths ten thousand cells deep, past the recursion limits of every
language in the bank. Each cell is cleaned once, entered at most once,
and probed at most once from each side, so a whole run costs a bounded
number of operations per cell — comfortably inside the 200 000-operation
budget for the largest rooms. The visited check runs _before_ `move()`,
so probes toward already-explored cells are free.

**Complexity:** `O(mn)` time and space — a constant number of machine
calls per cell plus a fixed five-call retreat per tree edge.
