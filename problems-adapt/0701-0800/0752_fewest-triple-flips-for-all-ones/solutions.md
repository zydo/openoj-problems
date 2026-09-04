# Solutions — Fewest Triple Flips for All Ones

## Greedy left-to-right flips

Position 0 is covered by a single window — the one over positions 0, 1, 2 — so
when it holds a `0`, performing that flip is not a choice but an obligation.
After it is done, position 0 is settled forever, and the obligation moves to
position 1: the only remaining flip that can reach it without disturbing
position 0 starts at 1. Repeating the argument walks an obligation across the
whole array, and at each position the running value decides outright whether
one more operation must be paid.

The implementation performs exactly this deterministic walk on a copy of the
input: for `i` from `0` to `n - 3`, a `0` at `arr[i]` costs one operation and
XORs `arr[i]`, `arr[i+1]`, `arr[i+2]`. When the loop finishes, positions
`0 .. n-3` are all `1` by construction, and the final two positions can never
be flipped again — so if either still holds a `0`, the input is unfixable and
the answer is `-1`.

![[1,1,0,1,1,0] through its two forced flips: the flip at 2 leaves a fresh 0 at 3, and the flip at 3 finishes the array.](figures/solution-greedy-flips.svg)

The flipped zero at position 3 in the figure is the whole story of why this
cost can be spread out: one operation can _create_ work for later positions.
It cannot create cheaper work, though. Every flip the sweep counts was forced
at the moment it was taken, so no sequence of operations can pay less, and the
sweep achieves the bound exactly. An all-ones input pays `0`; an all-zeros
input pays roughly one operation per three positions as re-created zeros chain
the windows along.

**Complexity:** `O(n)` time, `O(n)` space.
