# Solutions — Primes Below N

Two sieves; both tabulate primality below `n` in one pass over a flag
array, differing in whether a composite is crossed off repeatedly or
exactly once.

## eratosthenes

Running a primality probe on each number under `n` re-derives the same
divisors again and again; a sieve turns the task inside out. Every number
from 2 up is provisionally prime, and each time a prime `i` is confirmed,
all of its multiples get struck off together. Whatever is still standing at
the end was never a multiple of anything below it — hence prime.

The flags live in a `bytearray` indexed by the number itself — compact, and
quick to update in bulk. The outer loop stops once `i * i >= n`: any
composite below `n` owns a factor at most its square root, so every
remaining composite has already been struck. When `is_prime[i]` still holds,
the slice write `is_prime[i*i :: i] = bytearray(len(range(i*i, n, i)))`
clears the multiples of `i` in one C-level stroke, beginning at `i*i`
because smaller multiples fell earlier to their smaller factors.

Summing the flags that survive gives the count. Values of `n` below 3
(`n = 0, 1, 2`) short-circuit to 0, no prime being strictly smaller than 2.

**Complexity:** `O(n log log n)` time, `O(n)` space.

## linear_sieve

Eratosthenes strikes the same composite repeatedly — 60 is hit by 2, then
3, then 5 — and that redundancy is the `log log n` in its bound. The linear
sieve schedules each composite to be written exactly once, by its smallest
prime factor. It maintains an `spf` table (`spf[x]` is the smallest prime
factor of `x`, 0 while `x` is untouched) plus the primes seen so far;
walking `i` upward, `spf[i]` untouched means nothing smaller ever claimed
`i`, so `i` is prime. For each prime `p` in ascending order it then records
`spf[i·p] = p`, halting at the first `p` past `spf[i]` or past the range —
and that halting rule is the entire mechanism: pairing every composite with
its smallest factor means no pair occurs twice, so the writes total exactly
the composites below `n`.

One sweep, one write per composite: time is a clean `O(n)`, and the prime
list fills in ascending order as a bonus. It pays with bookkeeping — `spf`
spends a full int per number instead of a flag bit — and a branchier inner
loop, which is why plain Eratosthenes with its bulk clearing usually runs
faster in practice despite the weaker bound. Inputs below 3 return 0 up
front as before.

**Complexity:** `O(n)` time, `O(n)` space.
