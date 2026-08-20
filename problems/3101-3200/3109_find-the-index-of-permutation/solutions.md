# Solutions — Find the Index of Permutation

## Lehmer code with a Fenwick tree

The lexicographic index is the Lehmer-code expansion: for each position `i`, every permutation that places a smaller still-unused value at `i` comes earlier, contributing `(count of unused values below perm[i]) * (n - 1 - i)!` to the index. Summing those contributions over all positions counts exactly the permutations preceding `perm`, so the answer is that sum modulo 10^9 + 7.

Factorials up to `(n-1)!` are precomputed modulo 10^9 + 7. The "unused values below `perm[i]`" count needs dynamic rank queries with point removals: a Fenwick tree is seeded with a 1 at every value `1..n`, and after each position contributes `query(perm[i] - 1) * fact[n - 1 - i]`, the value `perm[i]` is removed with a `-1` update so later positions see only what remains.

Each position costs two O(log n) tree operations, and since `perm` is a permutation, the tree drains to exactly zero by the end. The identity permutation naturally yields 0, and `n = 1` works with a single trivial factor.

**Complexity:** `O(n log n)` time, `O(n)` space.
