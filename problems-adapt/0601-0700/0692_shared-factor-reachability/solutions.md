# Solutions — Shared Factor Reachability

## Smallest-Prime-Factor Sieve with Union-Find

Neighbourhood is exactly shared prime factors, so the positions form one
family iff they all land in a single union-find component. Wiring every
neighbour pair directly is quadratic, but each prime can act as a hub that
chains its positions together: unioning a position with the _previous_
position that claimed the same prime preserves connectivity with linearly
many unions, since consecutive links along the chain already make a prime's
positions mutually reachable.

Factorizing up to `10^5` values demands speed, so a smallest-prime-factor
sieve runs once up to `max(nums)`. Any value then falls apart into its
distinct primes by repeated SPF division — each step removes at least one
prime, so decomposition takes `O(log value)` divisions — with an inner loop
stripping repeated powers so each prime registers once. A `last[prime]` map
remembers the most recent position claiming each prime; each new position
unions against those predecessors before taking ownership.

In `[10, 21, 15]`, the prime 2 chains positions 0 and 2 (10 and 15), and the
prime 3 chains positions 1 and 2 (21 and 15) — one component, so the answer
is true. Two shortcuts precede the machinery: a lone position is trivially
connected, and any value 1 forces false, since 1 owns no prime and can never
be anyone's neighbour. A closing sweep confirms every position shares one
root. With `V = max(nums)`, the sieve costs `O(V log log V)` and the union
phase `O(n log V)` on top of near-constant amortized finds.

**Complexity:** `O(V log log V + n log V)` time, `O(V + n)` space.
