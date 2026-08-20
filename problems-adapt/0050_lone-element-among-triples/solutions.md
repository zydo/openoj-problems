# Solutions — Lone Element Among Triples

Two constant-space exploitations of the mod-3 structure: visit each bit
position separately, or run all 32 counters inside two registers at once.

## bit_count

Triples defeat XOR, because three copies of a bit do not cancel. But a triple
still contributes either 0 or 3 set bits at any given position — always a
multiple of three — while the lone value contributes exactly 0 or 1 there.
So the set-bit count at one position, reduced mod 3, is precisely that bit of
the answer.

The code walks the 32 positions, totalling `(value >> i) & 1` across the
array for each, and switches bit `i` on whenever the total fails to divide by
three. In `[4, 4, 4, 7]`, position 2 collects three bits from the 4s plus one
from the 7; `4 mod 3 = 1`, so the bit stays set, and the rebuilt pattern is
`111` = 7. A repair step closes the method out: Python integers do not wrap,
so a pattern with bit 31 set assembles as a large positive number and must be
reinterpreted by subtracting `2³²` — the fixed-width ports simply let their
native 32-bit type do that silently.

Thirty-two passes over the data is still linear time, the constant 32 being
independent of `n`, and the only storage is a few scalars — the
constant-space requirement that rules out the obvious counting map.

**Complexity:** `O(n)` time, `O(1)` space.

## state_automaton

All 32 counters can advance together if their state is compressed into two
registers. Picture each bit position as a little machine stepped once per
value: cleared at the start, promoted into `ones` on the first sighting, into
`twos` on the second, cleared again on the third — a mod-3 cycle
`00 -> ones -> twos -> 00`. The whole-word updates are
`ones = (ones ^ v) & ~twos`, toggling membership while the old `twos` acts as
a gate (a bit already sitting in `twos` is on its way out and must not slip
back into `ones`), then `twos = (twos ^ v) & ~ones`, the mirror update
against the freshly written `ones`.

After the sweep, any bit arriving a multiple of three times has cycled back
to clear in both registers, so `ones` holds exactly the bits of the
once-arriving value. No assembly loop, no sign repair, no per-position pass —
one trip through the array with a fixed handful of word operations per
element.

**Complexity:** `O(n)` time, `O(1)` space.
