# Solutions — Running Median

## Two Heaps Meeting at the Middle

A median query reads exactly two things: the largest value of the lower
half and the smallest of the upper half. So `RunningMedian` never keeps the
collection sorted — it keeps those two halves. Everything at or below the
dividing line lives in a **max-heap** (`low`, simulated in Python by
negation), everything above it in a **min-heap** (`high`), and the two
values a median is built from sit permanently on the two tops.

`add` shuttles every number through both heaps: push onto `low`, transfer
`low`'s maximum into `high`, and if `high` has thereby outgrown `low` by
one, move `high`'s minimum back. The round trip looks wasteful — a number
from the low half travels to `high` and possibly straight back — but it is
what makes the invariants ("every element of `low` ≤ every element of
`high`", "sizes within one") self-restoring wherever the new value truly
belongs. `median` then averages the two tops when the counts are equal, or
returns `low`'s top when `low` carries the extra element — in Example 2,
after `-3, 8, -7, 0` the halves hold `[-7, -3]` and `[0, 8]`, and the tops
`-3` and `0` average to `-1.5`.

Medians of integer streams are integers or exact halves, so binary floating
point represents them exactly. Heap operations cost `O(log n)` each and
`add` performs a fixed handful, which keeps `5 * 10⁴` calls comfortable.

**Complexity:** `O(log n)` per `add`, `O(1)` per `median`, `O(n)` space.
