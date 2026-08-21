# Solutions — Expand Bracket Repeats

## A stack of parked frames

Nesting is what makes `k[group]` hard: halfway through unrolling an inner
group, the outer group's half-built text and its still-pending count must
survive somewhere, and be picked back up in order when the inner group
closes. A stack of `(outer_text, count)` frames — one entry per bracket not
yet closed — is exactly that somewhere, mirroring the bracket structure at
any depth.

One pass classifies each character. A digit folds into the pending count
with `repeat = repeat * 10 + int(ch)`, which is what assembles multi-digit
counts such as the `10` in `10[ab]`. On `[`, the text built so far and its
count are parked on the stack and both accumulators reset for the fresh
inner segment. On `]`, the top frame comes off and the finished inner
segment is written out onto the restored outer text:
`current = previous + current * times`. Bare letters append to the running
segment. Since the encoding is well-formed, the scan ends with an empty
stack and the running segment is the whole expansion.

Tracing `s = "2[x3[y]z]"` shows the frames working:

1. `2` folds into `repeat = 2`.
2. `[` parks `("", 2)` and resets; the inner segment starts empty.
3. `x` builds `current = "x"`. Then `3` sets `repeat = 3`, and the second
   `[` parks `("x", 3)`, starting the innermost segment fresh.
4. `y` builds `current = "y"`; the first `]` pops `("x", 3)` and sets
   `current = "x" + "y" * 3 = "xyyy"`.
5. `z` appends: `current = "xyyyz"`. The last `]` pops `("", 2)` and sets
   `current = "" + "xyyyz" * 2 = "xyyyzxyyyz"` — the answer.

Nothing built is ever thrown away — each frame's text is absorbed wholesale
into its parent — so the characters copied are bounded by the expanded
length times the nesting depth, and both stay small under the input bounds
(at most 30 encoded characters). Well-formedness is guaranteed, so the loop
carries no error handling.

**Complexity:** `O(n + m)` time, with `n` the encoded length and `m` the
expanded length; `O(n + m)` space.
