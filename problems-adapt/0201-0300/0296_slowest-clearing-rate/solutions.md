# Solutions — Slowest Clearing Rate

## Binary Search on the Answer

Nothing about the input suggests an order to exploit, so the useful move is to
stop searching the batches and start searching the answer. Fix a candidate rate
`r` and the cost is completely determined: batch `b` occupies `ceil(b / r)`
hours, and one pass adds those up. Call that total `cost(r)`.

`cost` is non-increasing in `r` — raising the rate can only shorten a batch's
stay, never lengthen it — so the predicate `cost(r) <= h` flips from false to
true exactly once as `r` climbs, and never flips back. A predicate with that
shape is what bisection is for. The bracket runs from 1 up to the largest
batch: at the largest batch every batch is gone after a single hour, costing
`n` hours, and the promise `n <= h` makes the top of the bracket feasible.

The loop is the standard lower-bound form. While `lo < hi`, evaluate the
midpoint; if it fits, the first feasible rate is the midpoint or something
below it, so pull `hi` down to the midpoint; if it does not fit, push `lo` past
it. The two meet at the first rate that fits.

Two implementation traps are worth naming. The hour total can reach
`10^4 * 10^9`, which overruns a 32-bit accumulator, so the sum wants a 64-bit
type in the fixed-width languages. And the per-batch ceiling should be written
as `(b + r - 1) / r` in integers rather than routed through a float divide,
where values near `10^9` start losing exactness.

**Complexity:** `O(n log M)` time for the largest batch `M`, `O(1)` space.
