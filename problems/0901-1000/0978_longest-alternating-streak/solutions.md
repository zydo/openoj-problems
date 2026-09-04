# Solutions — Longest Alternating Streak

## Single sweep with a running sign state

An alternating streak is a property of consecutive pairs, so such a streak
is exactly a run of the array where the comparison sign flips from pair to
pair — greater, then less, then greater — between each pair of neighbours.
These runs partition the array the way increasing runs do: every position
closes exactly one maximal alternating run, the one ending at it, and the
answer is the longest one. One left-to-right pass sees them all with two
counters — `run`, the alternating run under the cursor, and `best`, the
longest one so far — plus one extra piece of state an increasing-run
counter does not need: the sign of the previous comparison, because a step
continues the run only by flipping that sign.

Each comparison of `arr[i]` against `arr[i - 1]` is classified as rising,
falling, or equal, and the three cases map cleanly. A flip of the previous
sign extends `run` by one. A repeat of it — two rises or two falls in a
row — ends the run, and `run` restarts at 2 on the fresh pair
`arr[i - 1], arr[i]`, which alternates against nothing yet. An equal pair
restarts at 1: a lone element is a streak of length 1, and two equal
neighbours can never sit inside any alternating run. Both counters start
at 1, which is why a one-element array answers 1 without the loop ever
running, and `best` is updated while the run grows — a run reaches its
full length exactly at its closing element, right where the next
comparison fails or the array ends, so updating only on a break would miss
a run that closes at the last element.

Example 1 walks the traps: `[9,9,1,4,2,8,3]` opens with equal 9s that cut
the counter back to 1, then `[9,1,4,2,8,3]` alternates all the way for a
run of 6, so the answer is 6. Example 2's `[3,7,11,15,19]` never flips a
sign, so no run outgrows the opening pair and the answer is 2 — also what
any two unequal elements give. The elements are only ever compared, never
combined, so the constraint's 10⁹ extreme needs no wider arithmetic.

**Complexity:** `O(n)` time, `O(1)` space.
