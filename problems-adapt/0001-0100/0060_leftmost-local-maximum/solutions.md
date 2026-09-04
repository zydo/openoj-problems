# Solutions — Leftmost Local Maximum

## Linear Scan for the First Descent

Because adjacent entries are never equal, the earliest qualifying index has a
sharp description: it is the first index `i` whose entry exceeds the one after
it. Every index before `i` was still climbing — each beat its predecessor on
the way — so when index `i` finally drops on its right, it is beating both
sides at once. The ends need no separate rule: an end entry has one neighbour
only, so index `0` qualifies the moment it drops from the start, and the last
index qualifies whenever nothing before it did.

The scan tests indices in order with the two obvious comparisons, each
guarded so it reads as true at the boundary where the neighbour does not
exist, and returns the first index passing both. That ordering is the whole
content of "leftmost": the test is applied earliest-first, so the earliest
qualifier wins.

If the array climbs throughout, no index ever fails the right-hand test, the
loop runs off the end of the climbs, and the final index — which passes its
right-hand test vacuously and its left-hand test strictly — is returned. That
is what happens for `[-8,-3,0,6]`. The descending mirror `[7,5,2,-1]` returns
index `0` on the very first iteration. A single-entry array has no neighbours
at all and returns `0` immediately; the fallback return after the loop is
unreachable, because with no equal adjacencies some index always qualifies.

The deliberate choice here is linearity. Halving the interval finds _a_
qualifying index in `O(log n)` probes, but which one it lands on depends on
where the probes happen to fall, so it cannot be trusted to produce the
earliest — and this problem's judging compares the index exactly. A pass that
stops at the first descent is the honest way to meet the specification.

**Complexity:** `O(n)` time, `O(1)` space.
