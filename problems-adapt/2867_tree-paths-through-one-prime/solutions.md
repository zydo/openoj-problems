# Solutions — Tree Paths Through Exactly One Prime

## Sieve plus apex-counting tree DP

Primality is a property of node *labels*, so a single sieve of Eratosthenes
over `1..n` decides it for every node at once — no per-node factorization
anywhere. What remains is counting the paths whose prime tally is exactly
one.

Root the tree at node 1 and record a BFS order (iteration, not recursion —
a 10⁵-node chain would blow the call stack). For each node `x` maintain two
figures about downward paths that start at `x`: `dp0[x]`, how many run
through no prime node, and `dp1[x]`, how many run through exactly one.
Filling them bottom-up: a prime `x` sets `dp0[x] = 0, dp1[x] = 1` since
every downward path already contains `x`'s prime, and each child `y` merges
in shifted (`dp1[x] += dp0[y]`, its prime-free paths become one-prime
paths); a composite `x` starts from `dp0[x] = 1, dp1[x] = 0` and merges
children directly.

A path with exactly one prime is counted at its apex, the highest node it
reaches — the point where its two downward halves meet. When child `y`'s
counters `c0, c1` arrive at `x`, they pair against the totals already
gathered from earlier children (which include `x` itself, covering paths
that end there). If `x` is prime, `x`'s own prime already sits on every
path through it, so neither half may contain another — the halves pair up
one-prime with one-prime (`total1 * c1`). If `x` is composite, exactly one half
must carry the prime: `total0 * c1 + total1 * c0`. Summed over all merges,
every valid path is counted once, at its apex.

In Example 3's star, node 1 is composite and every path through it pairs a
leaf with a leaf; the four prime leaves against the four composite ones
give `16`, plus the `4` single edges from 1 to a prime leaf.

**Complexity:** `O(n log log n)` time, `O(n)` space.
