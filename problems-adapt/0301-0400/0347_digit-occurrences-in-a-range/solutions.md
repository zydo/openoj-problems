# Solutions — Digit Occurrences in a Range

Both walks dispose of the interval the same way: with `F(x)` denoting the
appearances of `d` among the integers `1..x`, the requested tally is `F(high)`
minus `F(low - 1)`, and all the work lives inside `F`. The digit DP gathers
`F` by traversing the digit positions of `x` under two flags, one holding it
tight against the bound and one marking that the number has begun, with a
memo absorbing the free suffixes the traversal keeps re-entering. The
per-position formula dispenses with the traversal: it asks each digit place
of `x` directly how many numbers up to `x` show `d` there and answers with
arithmetic alone.

## Digit DP With Tight and Leading-Zero States

The prefix total can be gathered instead of derived: walk the digit
positions of `x` and, at each, try every digit the bound still permits. Two
flags steer the walk. `tight` says every digit placed so far matches `x`'s,
which caps the current choice at `x`'s digit there; picking below the cap
frees the whole remaining suffix, picking it keeps the walk on the bound's
spine. `started` says a nonzero digit has been placed; until it flips, a
placed `0` is a leading zero, and since a written number begins at its
first nonzero digit, those positions count for nothing.

Each state returns a pair: how many suffix completions it admits, and how
many appearances of `d` those completions hold. Placing `d` at the current
position adds the completion count once more, because that position shows
`d` in every number below it; summed over the walk, this charges repeated
appearances inside one integer as many times as they occur. The spine of
tight states is a single path, but it keeps shedding the same free
suffixes, so non-tight states are memoized per `(position, started)` and
expanded once each. `d = 0` needs no clause of its own here, and the
all-zero completion, which is the number `0` itself, carries no
appearances; the walk tallies exactly the integers `1..x`.

**Complexity:** `O(10·log high)` time, `O(log high)` space.

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
