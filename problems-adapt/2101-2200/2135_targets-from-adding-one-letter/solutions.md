# Solutions — Targets From Adding One Letter

## 26-Bit Letter Masks with Hash Set Lookup

No letter repeats inside a word, so the 26-bit mask of present letters says
everything about a word — and once shuffling is allowed, position says
nothing. Attach-then-shuffle collapses into a statement about sets: a target
is reachable exactly when its mask is some start mask with one additional bit
set, never the same mask and never two bits more.

Build a hash set holding every start word's mask. For each target, compute
its mask and try clearing each of its set bits; if any cleared result lands
in the set, the target counts and the bit loop stops. Clearing one bit is
the exact inverse of attaching one letter, so the test is tight both ways: a
hit means a genuine start word sits one letter inside the target, and every
reachable target — one bit heavier than its source — will be caught by the
deletion that removes that bit.

The untouched-mask trap falls out for free: a target identical to a start
word never matches, because only one-bit-lighter masks are ever probed —
example 1's "dot". With S start words and T targets of length at most 26,
mask construction walks the characters once and each target probes the set
at most 26 times.

**Complexity:** `O(26·(S + T))` time, `O(S)` space.
