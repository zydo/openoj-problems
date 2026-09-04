# Solutions — Batching the Backlog

## Count kinds, then divide into 3-batches

Because every pass must handle items of one kind, the kinds are independent:
the answer is the sum over kinds of the minimum number of passes that kind
requires. A frequency count (hash map, or a sort followed by run-length
counting) reduces the problem to one integer per kind — how many passes it
takes to exhaust `c` copies using groups of `2` or `3`.

For a single kind with `c` items, a group of `3` is always the best use of a
pass, so the answer is `ceil(c / 3)`, with one exception: `c = 1` can never
be partitioned into 2s and 3s, so a singleton kind makes the whole input
impossible. The identity `ceil(c / 3) = (c + 2) / 3` holds for every `c`, and
the formula is constructive: when `c` is `0` or `2` mod 3 the remaining `1` or
`2` items take one extra 2-batch, and when `c` is `1` mod 3 (and `c >= 4`) two
2-batches replace one 3-batch, which keeps the count at `(c + 2) / 3`.

The code accumulates this per-kind count and returns `-1` the moment any
kind has a single item. The example `[5,5,5,5,5,5,5,3,3,3,8,8]` has kinds
with counts `7`, `3`, and `2`, contributing `3 + 1 + 1 = 5` passes, while
`[1,2,3]` contains only singleton kinds, so it reports `-1`.

**Complexity:** `O(n)` time, `O(n)` space, where `n` is the number of items.
