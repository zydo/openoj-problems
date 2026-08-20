# Solutions — Collapse Every Run of k Equal Letters

## Run-length stack

A collapse welds the text on the block's left to the text on its right and
touches nothing else, so survivors never change relative order during the
whole cascade. That invariance lets a stack of `(letter, run length)` pairs
replay every collapse in a single left-to-right pass: the stack always holds
the compressed prefix that no collapse has consumed yet.

Each letter either extends the run on top — its count ticks up — or starts a
fresh pair at count 1. The moment a count reaches exactly `k`, the pair is
dropped. Dropping can leave the run below touching the letters that follow,
equal to them, and those merge by themselves over the next steps, since every
equality test reads the current top after the drop. The chain reaction
replays without the string ever being rescanned.

Comparing against the top pair alone (never the top `k` letters) is what
keeps the pass linear — the count does the bookkeeping a naive version would
redo `k` times per position. The answer falls out by expanding each surviving
pair, so a string with no run of length `k` — `"mammal"` at `k = 3` — comes
back untouched.

`"aabbba"` at `k = 3` shows the cascade: the `b` pair climbs to 3 and drops;
the `a` pair beneath, now at 2, absorbs the final `a`, reaches 3, and drops
too — the stack empties and the answer is the empty string.

**Complexity:** `O(n)` time, `O(n)` space.
