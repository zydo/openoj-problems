# Solutions — Happy Number

Both variants stand on the same fact: summing digit squares is a fixed
function of its input, so the sequence it generates from `n` is completely
determined — a tail leading either to the fixed point `1` or into a cycle
that never contains `1`. Deciding happiness is cycle detection on that
sequence. The hash variant remembers every value it has produced and
answers at the first repeat; the Floyd variant sends two runners at
different speeds and remembers nothing.

## Hash Cycle Detect

Summing the squares of a number's digits is a deterministic map on the
positive integers, so from any start the generated sequence must do one of
two things: hit `1`, a fixed point of the map, or slide into a cycle that
avoids `1` entirely. The method just runs the map and drops every produced
value into a `seen` set. Landing on `1` first means the start was happy;
producing a value already in the set means the tail is now looping, and the
answer is false.

One step peels digits off with `divmod(m, 10)`, squaring and adding as it
goes, so its cost is the digit count. Magnitudes collapse fast: a 32-bit
input maps in its first step to at most 810 — ten digits, all nines, give
10 × 81 — and stays under that afterwards, which bounds both the loop
length and the set size no matter how large the start is.

A single test, `while n != 1 and n not in seen`, covers both exits — the
happy exit leaves `n` at 1 and the comparison returns true, the cycling
exit leaves it elsewhere and returns false — and the input `1` itself
returns true before any step runs.

**Complexity:** `O(log n)` time, `O(log n)` space.

## Floyd Cycle

Read the sequence as a linked list — each value points at its one
successor, because the map is fixed — and the question becomes whether
following links from `n` reaches `1`. Tortoise and hare answer it with two
runners instead of a ledger. The tortoise advances one step per round, the
hare two, so the hare gains exactly one position per round; both runners
start on the move (`slow` one step past `n`, `fast` two), so an input
already at `1` never enters the loop at all — the runners are born equal.

From there the chase resolves itself. A happy start parks both runners on
`1`, which maps to itself, and they meet there. An unhappy start funnels
both into the cycle, and inside a cycle a one-position-per-round lead can
only shrink — the hare laps the tortoise, and they collide somewhere on the
loop. Either way the loop exits with `slow == fast`, and the meeting point
decides the verdict: `1` means the start was happy, anything else sits on a
cycle that avoids `1`.

The bookkeeping is the point: no `seen` set, no history — two integers of
state. The chase is also short, because magnitudes collapse below 810 in
one step and the unhappy cycle has length eight, so only a handful of
rounds can pass before the runners meet; the first step's digit peel
dominates the cost.

**Complexity:** `O(log n)` time, `O(1)` space.
