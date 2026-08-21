# Solutions — Transit Trip Log

## Two maps: pending taps and per-pair totals

A journey spends its life in two states, and each state wants its own
key. While the card is traveling, everything known is where and when the tap
happened — `checkins` holds one such record per card, keyed by card id. The
instant the tap-out arrives, the journey shrinks to a single duration, and the
identity that matters is no longer the card but the ordered stop pair.

`tapOut` therefore removes the pending record and folds `t - t_in` into a
per-pair bucket holding nothing but a running sum and a count. No list of
durations is ever kept: `averageTrip` returns `sum / count` straight from the
bucket, in constant time. Consuming the pending record at tap-out also frees
the card id to start a new journey right away.

The direction split — Harbor → Museum averaging separately from Museum →
Harbor — costs nothing extra because the pair is an ordered key. In Example 2
the Docks → Central journey of 9 lands in a different bucket and never
disturbs the 5.0 average of the Central → Docks pair.

Stop names are alphanumeric, so the Java canonical solution packs each
ordered pair into the composite string key `from + "->" + to` with `long`
accumulators — up to `2 * 10^4` journeys of `10^6` time units each — while
the Python one keys on the tuple `(from, to)` directly. Both return the exact
IEEE-754 quotient, which the tolerance-based comparison accepts.

**Complexity:** `O(1)` average time per call, `O(p + s^2)` space for `p`
pending journeys and the distinct stop pairs seen (`s^2` in theory, at most
`2 * 10^4` pairs in practice).
