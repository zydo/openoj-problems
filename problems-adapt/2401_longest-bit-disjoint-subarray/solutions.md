# Solutions — Longest Bit-Disjoint Subarray

## Sliding window on a running OR mask

A block is bit-disjoint precisely when no two members share a set bit — which
is the same as saying the OR of the entire block is disjoint from every member,
and hence from any candidate about to join. That restatement replaces the
all-pairs AND test with a single test per step: the value `v` may enter the
window if and only if `window_or & v == 0`.

The window is the usual two-pointer arrangement. Advance the right end; while
the incoming value clashes with the mask, retire members from the left.
Members joined the mask through `|`, and because their bits are private
(disjointness!), retiring one is exact: `window_or ^= value_out` clears
precisely the bits that member contributed and nothing else. Once the clash
clears, fold the new value in with `|` and note the window's length.

For `nums = [2,9,32,5]` the mask over the first three members is
`2 | 9 | 32 = 43`; the incoming `5` shares a bit with it, so 2 then 9 retire
until the mask is 32 and 5 enters beside it — the longest window seen stays 3.

Every element enters and leaves the window once, so the sweep is linear.
Length-1 blocks are always disjoint, and the initial `best = 1` with an empty
mask (`0`, disjoint from everything) covers them without special-casing. The
30-bit ceiling on answers mentioned in the hints is a consequence the algorithm
never needs.

**Complexity:** `O(n)` time, `O(1)` space.
