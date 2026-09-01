# Solutions — Infection Quarantine Choice

## Union-find over the saved-component structure

The compromise starts at every service of `initial` at once and floods each
connected component it touches in full, so the final compromised set is
exactly the union of the components holding at least one initial service.
That reduces `M(initial)` to a per-component fact: a component's services are
compromised if and only if it contains an initial service, and quarantining
one initial service only changes that verdict when it was the component's
sole source — in that case the whole component is spared; otherwise some
other source keeps it compromised, and even the quarantined service can be
reached through its neighbors.

An iterative union-find with path halving and union-by-size merges every pair
`i`, `j` with `graph[i][j] == 1`, so each root's size is its component's
service count. Counting initial services per root then classifies every
candidate: a service in a component with exactly one initial member saves
that component's size, and a service sharing its component with another
initial member saves nothing. The answer is the candidate with the largest
save, ties going to the smallest service index; when no component is
saveable every candidate saves zero, and the same smallest-index rule returns
the smallest service of `initial`.

Each of the `n(n - 1) / 2` matrix cells is examined once to drive one `find`
pair, and the two passes over `initial` are linear, all on arrays of `n`
entries.

**Complexity:** `O(n²)` time, `O(n)` space.
