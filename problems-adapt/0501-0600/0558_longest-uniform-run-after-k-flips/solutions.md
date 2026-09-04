# Solutions — Longest Uniform Run After k Flips

## Sliding window on the minority count

When can a stretch of consecutive positions be turned into one uniform run?
Precisely when its minority symbol occurs at most `k` times: rewriting every
minority occurrence into the majority symbol costs one change each, and
nothing cheaper exists. Write it as `min(countT, countF) <= k` — one
inequality covering both choices of the final symbol at once, because
whichever symbol is the minority is the one the budget pays for.

That condition is exactly what a two-pointer sweep maintains. The right end
advances one position at a time; whenever _both_ counts exceed `k` — the
same as the minority count exceeding it — the left end advances until the
window is valid again. The largest window length seen anywhere during the
sweep is the answer.

Shrinking from the left alone never loses a candidate because validity is
monotone in window size: a window that violates the inequality is contained
in windows that violate it too, so the left pointer has no reason ever to
retreat. Nothing in the window records which symbol will end up the
majority; the min-based test settles both futures simultaneously.

Each position enters and leaves the window at most once, making the pass
linear, and the state is just two counters. The degenerate case `k >= n`
takes care of itself: the shrink never triggers, and the whole string is
the answer. For `s = "FFTFFTF"` with `k = 1`, the sweep reaches positions
`0..4`, a window holding four `F` and one `T` — minority count `1 <= 1`,
length `5` — and no later window beats it.

**Complexity:** `O(n)` time, `O(1)` space.
