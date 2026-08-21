# Solutions — Sell Tokens From Shrinking Stacks

## Greedy band selling

Revenue is maximized by always handing over a token from a tallest stack, so
the sale strips the price profile in horizontal bands. Sort the stacks
tallest-first and append a 0 sentinel. Walking down the distinct levels, when
the top `width` stacks (all standing at level `h`, with the next distinct
level at `low`) are levelled together, the whole band between `low` and `h`
brings in the arithmetic series
`width × (h + low + 1) × (h - low) / 2`.

The walk skips runs of equal heights so `width` swallows duplicates, then
either takes the entire band — while `orders` still covers it — and carries
the remainder downward, or halts inside the band: `full` complete layers of
`width` tokens sell as a series from `h` downward, topped up by `rem` single
tokens at the next price `h - full`. Stripping whole bands from the top is
safe because any token below the current crest is worth strictly less than a
token on it — the walk never sells from a short stack while a taller one
still stands.

Python's big integers keep the intermediate totals exact, and the
`10⁹ + 7` reduction happens once, at the end. The `remaining = 0` exit with
the `i < n - 1` bound also covers an order count that consumes a band
exactly, and the sentinel forces the last genuine level to compare against 0
rather than run off the array. For `stacks = [3,6]` and `orders = 5`, the
band above 3 gives `6 + 5 + 4`, then the two levelled stacks each give 3.

**Complexity:** `O(n log n)` time, `O(n)` space.
