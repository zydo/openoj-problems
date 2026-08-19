# Solutions — Count Numbers Shrinking to One in K Bit Counts

## Popcount Buckets, Filled by a Digit Walk

A bit count erases everything about a number except how many `1`s it
had, so the number of bit counts needed to reach `1` is a function of
the popcount alone. Write `f[x]` for the count needed starting from a
number with value `x`: `f[1] = 0` and `f[x] = 1 + f[popcount(x)]`.
Because `s` is at most 800 bits, every popcount that can occur is at
most 800, and the whole table builds in one linear pass. A number with
`p >= 1` set bits shrinks to one within `k` bit counts exactly when
`1 + f[p] <= k`.

So the answer is a sum over popcount buckets: for each qualifying `p`,
how many positive integers below `n` have exactly `p` set bits? That is
a walk along `s` from the most significant bit, carrying the number of
`1`s already placed. At a bit where `s` holds `1`, choosing `0` there
instead makes the whole number strictly smaller while everything after
it is free; placing `p` ones among those `remaining` free bits gives
`C(remaining, p)` numbers in bucket `ones + p`. Pascal's triangle built
mod `10⁹ + 7` serves every factor. Each `x < n` branches off at exactly
one position — the first bit where it drops below `s` — so nothing is
counted twice, and `n` itself never branches at all.

The bucket `p = 0` holds only the number `0`, which the walk produces
but the positive-integers requirement discards. For `s = "1100"` with
`k = 2` the qualifying buckets are `p = 1` and `p = 2`, holding nine
numbers between them; with `k = 5` every bucket up to the length of `s`
qualifies, and the answer is simply `n - 1` reduced mod.

**Complexity:** the binomial triangle dominates: `O(L²)` time and space
for `L = len(s)`, plus an `O(L)` walk.
