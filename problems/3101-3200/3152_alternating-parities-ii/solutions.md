# Solutions — Alternating Parities II

## Parity-alternating run starts

A window is parity-alternating exactly when it contains no same-parity
adjacent pair, and same-parity pairs are position-local facts:
`nums[start_i..end_i]` alternates iff the longest parity-alternating run ending
at `end_i` begins at or before `start_i`. One linear pass computes that
start for every index — `reach[i]` extends `reach[i - 1]` when
`nums[i - 1], nums[i]` differ in parity, and collapses to `i` when they
do not. A query `[start_i, end_i]` then reduces to a single comparison:
the window is parity-alternating exactly when `reach[end_i] <= start_i`, since any
parity break inside `[start_i..end_i]` would push the run start past
`start_i`.

Each query costs O(1) after the O(n) preprocessing pass, so the whole
work is linear in the input size regardless of how the query windows
overlap. The answers are collected in order into the boolean result
array.

**Complexity:** `O(n + m)` time, `O(n)` space (m = number of queries).
