# Solutions — Shortest String With Every Code

## Eulerian Circuit on the de Bruijn Graph

Two codes may be packed one character apart precisely when the tail of the
first, of length `n - 1`, matches the head of the second. That observation turns
the whole task into a routing question. Give every string of `n - 1` digits its
own vertex — there are `k^(n-1)` of them, stored as base-`k` integers — and let
each of the `kⁿ` codes be a directed edge from its head to its tail. Travelling
an edge means writing one more character and sliding the window forward, so a
route that uses each edge exactly once writes every code exactly once with the
maximum possible overlap. Every vertex has `k` edges leaving and `k` arriving,
so the degrees balance and a closed route over all edges is guaranteed; the
characters it writes, plus the `n - 1` that label the vertex it began at, total
`kⁿ + n - 1`, and no shorter string can hold `kⁿ` distinct blocks.

The implementation is Hierholzer's method run from an explicit stack rather than
recursion. One stack carries the vertices of the route under construction and a
second remembers, for each of them, the digit whose edge led there. From the
vertex on top, the lowest digit whose edge is still unused is taken — a flag
array of `kⁿ` booleans tracks that — and the successor `(vertex · k + digit) mod
k^(n-1)`, the window advanced by one place, is pushed. When every edge out of
the top vertex has been spent, that vertex is popped and the digit that reached
it is written out.

Writing on the way out, rather than on the way in, is what makes the greedy walk
safe. A vertex is only finished once it is popped, and any detour pushed after a
dead end is emitted before the digits that surround it, so the fragments are
spliced into one circuit without any explicit merging step. The walk begins at
vertex `0`, whose label is `n - 1` zeros; the code appends exactly that many
zeros at the end, closing the circuit. Trying digits from small to large makes
the whole procedure deterministic. Every push and pop inspects at most `k` digit
slots and the number of pushes is bounded by the edge count.

**Complexity:** `O(k^(n+1))` time, `O(kⁿ)` space.
