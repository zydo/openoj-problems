# Solutions — Reachable by Replacing With the Sum

## Reverse simulation with a max-heap

Reasoning forward from all ones goes nowhere, since the index to write is
unknown at every turn. Backward it becomes deterministic: a move replaces
one entry with the total sum, and the total strictly grows, so the maximum
entry of any reachable state must be the one written last. Undoing a move
therefore takes the current maximum `largest` and restores it to
`largest - rest`, with `rest` the sum of the other `n - 1` entries; the
target is reachable exactly when this un-mixing grinds every entry down to 1.

A max-heap (kept as negated values) hands out the maximum while a running
`total` mirrors the current sum, so each undo costs `O(log n)`. Success is
recognized when the popped maximum is 1: every other entry was never larger
and is therefore also 1. Failure is `largest <= rest` — the last write must
have exceeded the rest of the array, so no predecessor exists — and this
test also rejects a zero `rest` before any division happens.

Undoing one `rest` at a time is far too slow near `10^9`, because the same
entry can be un-mixed repeatedly (an input like `[2, 10^9]` shows the gap).
Batch them instead: `steps = (largest - 1) // rest` undos of this entry
apply at once, leaving `prev = largest - steps * rest` — `largest` reduced
modulo `rest`, biased to land in `[1, rest]`. Every jump drops the entry
below the remaining sum, so each entry survives only
`O(log(max target))` jumps before it becomes 1 or the process aborts.

The one-entry array is special-cased up front: with no rest to un-mix
against, the only reachable target is `[1]` itself. Walking `[3, 5, 9]`
backward: `9 - 8 = 1`, then `5 - 4 = 1`, then `3 - 2 = 1`, and the all-ones
state confirms `true`.

**Complexity:** `O(n log n log(max(target)))` time, `O(n)` space.
