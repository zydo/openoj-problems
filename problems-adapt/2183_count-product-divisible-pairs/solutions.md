# Solutions — Count Product-Divisible Pairs

## Pairing gcd groups

Divisibility by `k` ignores most of each number: if `g = gcd(v, k)`, the
factors of `v` that do not meet `k` cannot help the product reach a multiple
of `k`, and the ones that do are exactly `g`. So `v · w` is a multiple of
`k` precisely when `(g_v · g_w) % k == 0`. Each `g` is a divisor of `k`,
which means the whole array collapses into at most `d(k)` buckets — no more
than 128 labels for `k <= 10^5`, whatever the array's length.

The sweep builds that bucket table first: one pass computing
`gcd(num, k)` per element and tallying. It then walks every unordered pair
of buckets, a bucket with itself included. Distinct buckets whose labels
multiply to a multiple of `k` contribute the product of their tallies; a
bucket paired with itself contributes `c · (c − 1) / 2`, the number of index
pairs `i < j` living inside it.

Take `nums = [3, 6, 2, 8, 4]` with `k = 6`: the gcds are 3, 6, 2, 2, 2, so
the buckets read `{3: 1, 6: 1, 2: 3}`. Labels 3 and 2 pair (3 · 2 = 6) for
1 · 3 = 3 element pairs; label 6 pairs with label 3 and with label 2 —
18 and 12 are both multiples of 6 — for 1 + 3 = 4 more. Label 6 against
itself contributes `C(1, 2) = 0`, and the pairings 3 · 3 = 9 and 2 · 2 = 4
fall short. The total is 7, matching a direct count.

Bucket-level arithmetic replaces the quadratic element scan; the cost is
one gcd per element plus a quadratic walk over bucket labels, and the label
set is bounded by the divisor count of `k`.

**Complexity:** `O(n log k + d(k)²)` time, `O(d(k))` space.
