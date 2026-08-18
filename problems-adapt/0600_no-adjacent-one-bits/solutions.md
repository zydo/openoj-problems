# Solutions — No Adjacent One-Bits

## Fibonacci Digit Counting over the Binary Representation

With `n` as large as 10⁹ there is no question of testing integers one by one.
Every integer below `n` agrees with `n` in binary up to some bit and then
falls behind at that bit, so the count decomposes by *where* the fall happens.
The method reads `n`'s bits left to right; at each bit where `n` carries a 1,
every integer that matches the prefix so far but takes 0 there is already
below `n`, and its remaining low bits are unconstrained apart from the no-`11`
rule.

Counting the free suffixes is where Fibonacci enters. Let `f[i]` be the number
of `11`-free bit strings of length `i`. Such a string starts with `0` (any
`11`-free continuation of length `i-1`) or with `10` (any of length `i-2`),
giving `f[i] = f[i-1] + f[i-2]` off the bases `f[0] = 1`, `f[1] = 2`. So
writing 0 at bit `i` of an `m`-bit `n` contributes exactly `f[m - i - 1]`
integers.

Two edge rules close the count. If `n` itself holds two neighboring ones —
noticed the moment a 1 bit follows another — then every integer sharing that
prefix is also disqualified, the scan halts, and only the strictly-smaller
tally is returned. Otherwise `n` is itself sparse and one final `+1` admits
it.

Everything scales with the bit length of `n`, at most 30 bits under the given
bound, so both the Fibonacci table and the scan are tiny. For `n = 20`
(`10100`), the method adds `f[4]` at the leading 1 and `f[2]` at the next,
then counts `n` itself — `8 + 3 + 1 = 12`, matching the example.

**Complexity:** `O(log n)` time, `O(log n)` space.
