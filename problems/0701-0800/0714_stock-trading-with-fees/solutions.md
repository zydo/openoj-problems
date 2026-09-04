# Solutions — Stock Trading With Fees

Both sweeps run one pass with a fixed handful of figures — no tables, no
history. The state machine is the general engine: it names the two positions
a trader can occupy and prices every legal move between them, letting the
maximum sort the plans. The greedy is the refined shortcut instead: it folds
the fee into the buy price, banks every rise that clears the threshold on the
spot, and rests its optimality on a local exchange argument rather than an
enumeration of plans.

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

## Greedy with Fee-Adjusted Effective Buy

Fold the fee into the entry price and the optimal plan assembles itself. The
code carries two figures: `total`, the profit already banked, and `basis`, the
fee-adjusted effective buy — the entry the next sale will be judged against.
`basis` opens beyond every price, so the first day always sets the entry.
Thereafter each day reads one of three ways. A price above `basis + fee`
clears a whole round trip: the surplus `price - basis - fee` is banked at once
and the basis re-anchors at `price - fee`, handing the fee just charged back
as a discount on the next entry. A price below `basis` is a strictly cheaper
entry and replaces it for free. A price in between is noise — too low to
clear the fee, too high to improve the entry — and the day passes without
action.

The rebate is what makes banking early safe. After banking at `p` the basis
sits at `p - fee`; if the price then climbs to `q`, the next banking adds
`q - (p - fee) - fee = q - p`, and the two together total `q - b - fee` — one
uninterrupted trade from the original entry `b`, charged a single fee.
Selling and immediately re-buying at the same price would normally burn a
second fee; the rebate waives it, so slicing a long rise into successive
bankings costs nothing against holding straight through.

Read as a whole, the ledger is itself a legal plan: between two dips the
bankings compose into one trade charged a single fee, and every dip opens the
next trade only after the previous one has closed, so the banked total is
achievable. That it cannot be beaten is the exchange: a purchase can always
be slid down to the running minimum since the last sale — which is precisely
what `basis` holds — and a sale that clears `basis + fee` can be cut at any
intermediate rise without disturbing the composed total, since the rebate
makes the cut free. An optimal plan pushed through these exchanges lands on
the ledger with its profit intact, so the banked total is the optimum. And
because only banked profit counts — nothing is left at risk in an open
position — a fee that swallows every gap simply leaves `total` at `0`.

**Complexity:** `O(n)` time, `O(1)` space.
