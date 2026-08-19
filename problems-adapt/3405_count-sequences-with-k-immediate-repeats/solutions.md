# Solutions — Count Sequences With K Immediate Repeats

## Closed form over modular factorials

Build any sequence one entry at a time and watch the decisions multiply. The
first entry is free: `m` options. Every later entry then answers one question
— does it copy its predecessor? A copying entry has a single option, an entry
that breaks away has `m - 1`. So a sequence is determined by choosing which
`k` of the `n - 1` later entries copy, and the count is

    m · C(n - 1, k) · (m - 1)^(n - 1 - k)   (mod 10⁹ + 7).

No two different decision patterns yield the same sequence, because the
pattern reads straight off the finished sequence: compare each entry with the
one before it. That is what makes the product exact rather than a bound.

The binomial comes out of factorials under the modulus. Tabulate
`fact[0..n]`, invert `fact[n]` once with Fermat's little theorem —
`pow(fact[n], MOD - 2, MOD)`, legitimate because the modulus is prime — then
walk downwards filling `inv_fact`. Each `C(a, b)` is then three modular
multiplications, with a `b` outside `[0, a]` collapsing to `0`.

For `n = 4, m = 2, k = 1`: `2 · C(3, 1) · 1² = 6`, the six sequences listed
in the example — the repeat can sit after any of the three later entries, and
with a two-value alphabet a break-away is forced to the other value.

Degenerate inputs come out of the formula without special cases. `k = n - 1`
makes the binomial `C(n-1, n-1) = 1` and leaves `m` constant sequences;
`m = 1` leaves the break-away count `m - 1 = 0`, so the answer is `1` when
every entry must copy (`k = n - 1`) and `0` otherwise, since `0⁰ = 1` under
modular exponentiation; and `n = 1` has no later entries, returning `m`
exactly when `k = 0`.

**Complexity:** `O(n)` time, `O(n)` space.
