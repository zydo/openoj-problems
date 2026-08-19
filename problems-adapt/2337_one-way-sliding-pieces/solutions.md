# Solutions — One-Way Sliding Pieces

## Lockstep Piece Matching Under Direction Rules

Slides happen one step at a time and only into blanks, so two pieces can
never cross: their left-to-right order is an invariant of the whole process.
That single fact does most of the work. Strip the blanks from `start` and
from `target`; the two remaining character sequences must be identical —
if the piece counts differ, or an `L` sits where an `R` should, no sequence
of moves can help.

What survives the strip-down is only the question of position. An `L` slides
strictly leftward, so the `L` matched at index `i` in `start` must land at
some index `j <= i` in `target`; an `R` slides strictly rightward, forcing
`j >= i`. These inequalities are sufficient as well as necessary: with the
order fixed, a piece never blocks its peers — an `L` traveling left moves
into space that pieces matched further left have already vacated, and an `R`
traveling right is headed for space the pieces to its right will have
vacated by the time it arrives. Moving the leftmost not-yet-home `L` and the
rightmost not-yet-home `R` repeatedly therefore delivers every piece, so
there is never a reason to simulate moves.

The implementation gathers `(index, character)` pairs of the non-blank cells
from each string, rejects unequal lengths, and then walks the two pair lists
in lockstep checking character equality and the direction-dependent index
inequality. An `L` that would need ground to its right, or an `R` that would
need ground to its left, fails immediately; two all-blank strings pass
trivially. Everything is one pass per string, which keeps `n = 10⁵`
comfortable.

On `start = "__LR___"`, `target = "L_____R"`: the L goes from index 2 to 0
(leftward, allowed) and the R from 3 to 6 (rightward, allowed), so the
answer is true — while `"_RL_"` versus `"LR__"` fails at the first step of
the argument, since the pieces come out in opposite orders.

**Complexity:** `O(n)` time, `O(n)` space.
