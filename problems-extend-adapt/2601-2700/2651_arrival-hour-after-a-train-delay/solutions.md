# Solutions — Arrival Hour After a Train Delay

## Modulo-24 Arithmetic

The 24-hour clock wraps exactly once here — `arrivalTime` stays below 24
and `delayedTime` can push the sum to at most `23 + 24 = 47` — and that
wrap is precisely what the modulo operator computes. Adding the two times
and taking the remainder by 24 maps `5 + 8` to `13`, `22 + 7` down to
`5`, and any overshoot like `23 + 2` into the valid hour range.

Both operands are positive, so no negative-remainder caveats apply in any
of the seven languages; each `%` behaves identically on this domain.

**Complexity:** `O(1)` time, `O(1)` space.
