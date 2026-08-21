# Solutions — First Pattern Match in a Bit Stream

## Rolling bit window

The channel hands over each bit exactly once, in order, so the only state
worth carrying is the last `m` bits — the sole candidates for a match ending
at the current position. Maintain them as a window: on every `next()`, slide
the new bit in and drop the oldest. After the `t`-th read the window holds
bits `[t − m, t − 1]` (0-indexed), so comparing it with the pattern after
every arrival tests each possible start exactly once, and the first hit is
by construction the first occurrence.

The Python port packs the window into a single integer — shift left, OR the
new bit in, mask down to `m` bits — so each step is O(1) arithmetic on a
number below 2¹⁰⁰ and the comparison is one `==`. The other ports cannot
hold 100 bits in a native integer, so they keep a circular buffer of the
last `m` bits and compare up to `m` entries per step, exiting on the first
mismatch; across a prefix of at most 10⁵ bits that is at most 10⁷ elementary
comparisons, comfortably inside the time budget.

Both variants call `next()` exactly `first_index + m` times and stop — the
match is guaranteed to begin inside the recorded prefix, so the channel
never runs dry under a correct solution.

**Complexity:** `O(n · m)` time in the worst case for the circular-buffer
ports (`O(n)` arithmetic steps for the Python integer window), `O(m)` space,
where `n` is the number of bits read before the first match.
