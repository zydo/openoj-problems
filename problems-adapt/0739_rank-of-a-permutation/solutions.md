# Solutions — Rank of a Permutation

## Lehmer code with a Fenwick tree

A permutation's dictionary position is the sum of its Lehmer digits: at
each slot, every arrangement that plants a smaller still-available value
there comes earlier, so slot `i` adds
`(available values below perm[i]) * (n - 1 - i)!` to the total. Adding
those contributions across all slots counts precisely the arrangements
listed before `perm`, which is its rank — reported modulo `10^9 + 7`.

Factorials through `(n - 1)!` come precomputed modulo `10^9 + 7`. The
per-slot count — available values below the one being placed — is a rank
query that must also support removals, which is a Fenwick tree's exact
job: seed it with a `1` at every value `1..n`; after slot `i` contributes
`query(perm[i] - 1) * fact[n - 1 - i]`, clear the value with a `-1`
update so later slots see only what is left. Because the input really is
a permutation, the tree drains to exactly zero by the final slot.

Walked on `[4,2,1,3]`: the opening `4` sees three smaller available
values, adding `3 * 3! = 18`; the `2` in slot one sees only `1`, adding
`1 * 2! = 2`; slot two's `1` adds nothing; total rank 20. The reversed
input `[4,3,2,1]` maximizes every digit at once, landing on `4! - 1 = 23`
— the last position, as expected — and the identity input collects zero
throughout and ranks 0.

Each slot pays two `O(log n)` tree operations, and the whole pipeline is
one pass over the array.

**Complexity:** `O(n log n)` time, `O(n)` space.
