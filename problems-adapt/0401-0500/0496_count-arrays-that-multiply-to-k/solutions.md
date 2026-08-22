# Solutions — Count Arrays That Multiply to k

## Prime Factorization with Stars and Bars

Unique factorization splits the count by prime. Write each slot's value as a
product of primes: the whole array multiplies to `k` exactly when, for every
prime `p` occurring with exponent `x` in `k`, the exponents of `p` across all
`n` slots add up to `x`. Handing out `x` indistinguishable copies of one prime
to `n` ordered slots is the stars-and-bars count `C(x + n - 1, n - 1)`, and
since distinct primes never share a slot's arithmetic, the per-prime counts
multiply into the answer.

Each query factors its `k` by trial division up to `sqrt(k)` — no more than
about a hundred divisions for `k <= 10^4` — gathering exponents; any leftover
greater than 1 after the loop is one more prime to the first power. The answer
is the product of `C(x + n - 1, n - 1)` over those exponents, reduced modulo
10^9 + 7. For the query `[3, 10000]`, `10000 = 2⁴ · 5⁴` gives `C(6, 2) · C(6, 2)
= 225`.

Binomials come off factorial tables built once to `_MAX = 20000`, safely above
every argument that can occur (a `k` under 10^4 carries no prime exponent past
13, so `x + n - 1 <= 13 + 10^4 - 1`). One Fermat inversion
`pow(fact[max], MOD - 2, MOD)` runs backwards to produce all inverse
factorials, after which any binomial costs three multiplications. The tables
are paid for once and shared by all queries; each query afterwards pays only
its factorization and a few multiplications. With `M` the table bound (20000),
`Q` the query count, and `K` the largest `k`, the totals follow.

**Complexity:** `O(M + Q sqrt(K))` time, `O(M)` space.
