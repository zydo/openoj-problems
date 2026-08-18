# Solutions — Find Pattern in Infinite Stream I

## Rolling bit window

The stream gives each bit exactly once and in order, so the only state worth keeping is the last `m` bits — the sole candidates for a match ending at the current position. Maintain them as a window: on every `next()`, slide the new bit in and drop the oldest. After the `t`-th read the window holds bits `[t − m, t − 1]` (0-indexed), so comparing it with the pattern after every read tests every possible start exactly once, and the first hit is by construction the first occurrence.

The Python port packs the window into one integer — shift left, OR the new bit, mask to `m` bits — so each step is O(1) big-int work on numbers below 2¹⁰⁰, and the comparison is a single `==`. Java's `long` cannot hold 100 bits, so that port keeps a circular buffer of the last `m` bits and compares up to `m` entries per step (with an early exit on the first mismatch); over a prefix of at most 10⁵ bits that is at most 10⁷ elementary comparisons, well inside the time budget.

Both variants call `next()` exactly `first_index + m` times and stop — the match is guaranteed to begin within the recorded prefix, so the stream never runs dry under a correct solution.

**Complexity:** `O(n · m)` time in the worst case (Java buffer compare; the Python integer window is `O(n)` arithmetic steps), `O(m)` space, where `n` is the number of bits read before the first match.
