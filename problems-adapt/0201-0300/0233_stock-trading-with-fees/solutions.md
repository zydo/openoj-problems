# Solutions — Stock Trading With Fees

## State-Machine Dynamic Programming

Model a trading plan as a walk through two positions. Write `cash` for the best
profit reachable with nothing in hand at the close of the current day, and
`hold` for the best profit reachable while one share is in hand. Advancing a
day, each figure either stands or is replaced by a move out of the other: going
from `hold` to `cash` means selling, which credits `price` and debits `fee`;
going from `cash` to `hold` means buying, which debits `price`. Writing both
updates as one tuple assignment guarantees each right-hand side reads the
previous day's pair, so a share cannot be bought and sold within a single step.

The starting values encode the rules. `cash` opens at `0`, the profit of a plan
that does nothing. `hold` opens at a large negative sentinel, because there is
no way to be holding a share before the first price is known; any route that
passes through the sentinel stays hopelessly below every genuine plan and can
never win a maximum. Charging `fee` on the sell leg alone bills each round trip
exactly once, which is why the profit of a buy at `p` followed by a sell at `q`
comes out as `q - p - fee`.

Correctness follows by induction over the days: every legal plan is a walk
through these two positions, and each figure is the best profit over all walks
of the days seen so far that finish in the corresponding position. Since both
figures always retain the stand-still option, a fee that outweighs every gap
leaves `cash` at `0`. Finishing while still holding a share is never an
advantage — the share is worth nothing unsold — so the final `cash` is the
answer.

**Complexity:** `O(n)` time, `O(1)` space.
