# Solutions — Updatable Range Sums

## Fenwick Tree (Binary Indexed Tree)

Neither obvious layout survives a mixed workload. Keeping the entries as they
are makes `setValue` a single store but forces `rangeSum` to walk the stretch;
keeping running totals inverts the cost, since one write invalidates every
total from that position onward. The way out is to store totals of *pieces*
chosen so that both a prefix and a single position are covered by only a
handful of them.

`UpdatableRanges` numbers slots from `1` and lets slot `i` own the block of
`i & -i` consecutive entries finishing at `i`. Slot `0` is deliberately never
used: its lowest set bit is nothing, and a walk that reaches it would never
move again. Under this layout, subtracting the lowest set bit repeatedly
(`count -= count & -count`) visits a set of blocks that tile the first `count`
entries without overlap, and adding it repeatedly
(`position += position & -position`) visits every block that a given position
lies inside. Both walks shed or gain one bit per step, so both are logarithmic.

A stretch total is then a subtraction of two of those walks, since everything
before `left` is counted by both and cancels. A write is applied as a
difference rather than a value: the class keeps the current entries in a plain
array so `setValue(index, value)` can compute how far the entry moved, add
that amount to each block containing the position, and record the new entry so
the next write measures from the right place.

Take Example 1's `[4, -1, 6, 2]`. The blocks hold `4`, `3`, `6`, `11` — slot
`2` owning the first pair and slot `4` owning all four. So `rangeSum(0, 3)`
reads slot `4` alone and reports `11`. Then `setValue(2, -5)` moves the third
entry by `-11`, which lands on slots `3` and `4`, leaving `4`, `3`, `-5`, `0`;
the same query now reads `0`, and `rangeSum(1, 2)` computes
`(-5 + 3) - 4 = -6` from three slot reads.

Construction avoids doing `n` separate writes. Sweeping left to right, once a
slot has collected its whole block the value is pushed once into the slot that
contains it, which assembles the entire structure in linear time. The Java
port accumulates into `long`; with entries bounded by `100` and at most
`3 * 10⁴` of them a 32-bit total would in fact fit, but the wider accumulator
costs nothing and removes the question.

Each of the up-to-`5 * 10⁴` calls therefore touches around fifteen slots,
which is the follow-up's logarithmic bound.

**Complexity:** `O(n)` construction, `O(log n)` per `setValue` and per
`rangeSum`, `O(n)` extra space.
