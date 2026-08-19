# Solutions — Digit Occurrences in a Range

## Per-Position Counting Against a Prefix

The interval is disposed of first: with `F(x)` denoting the appearances of
`d` among the integers `1..x`, the requested tally is `F(high)` minus
`F(low - 1)`. Nothing ever iterates the interval — `F` is computed by
looking at the digits of `x`, one position at a time.

Fix a position, writing `x` as `above · 10^p + digit · 10^p + below`, with
`digit` the figure sitting at the position. Numbers whose part above the
position is smaller than `x`'s are free below it: they add `above · 10^p`
placements of `d`, and when `digit > d` the numbers matching `x` above the
position also qualify with any suffix, adding one more full block of
`10^p`. When `digit == d` the matching block is cut short — only suffixes
up to `below` keep the property — and that restriction is the extra
`below + 1`. Summing over positions charges each appearance once,
including repeated appearances inside one integer.

Zeros need the extra clause. A written number begins at its first nonzero
digit, so a position whose `above` part is zero can never show a 0 that
counts; for `above >= 1` the code gives `above · 10^p` placements when
`digit > 0` and `(above - 1) · 10^p + below + 1` when `digit == 0`, the
subtraction discounting the forbidden leading zero at the position itself.
Each position costs work proportional to the digit count of `x`, so both
prefix calls finish in microseconds even at the top of the range.

**Complexity:** `O(log² high)` time, `O(log high)` space.
