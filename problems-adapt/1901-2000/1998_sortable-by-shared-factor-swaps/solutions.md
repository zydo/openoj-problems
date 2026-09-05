# Solutions — Sortable by Shared-Factor Swaps

## Sieve of smallest prime factors plus union-find over values

Exchanges are transitive in a useful way: values sharing a prime can trade
places outright, and a chain of such trades carries any value into any
position held by a value of the same connected crowd. Make this precise with
a graph whose nodes are the array values together with every prime up to
`10^5`, join each value to each prime it contains, and read off connected
components with a disjoint-set forest. Two values in one component can be
shuffled into one another's slots through the primes between them; two in
separate components never interact.

Factoring everything naively would be slow, so a sieve first records the
smallest prime factor `spf[v]` of every `v` up to the bound `M = 100001`;
splitting a value into its distinct primes is then a few divisions. The
forest uses path halving, keeping finds near-constant amortized. Indexing
the structure by _value_ rather than position is what makes repeated values
share their component for free, wherever they sit.

With components in hand, the verdict is a position-by-position comparison
against the sorted copy: sorting succeeds if and only if, at every index,
the value present and the value the sorted order demands lie in one
component — each such pair is exchangeable through some chain of
divisor-sharing hops, while an index whose two values sit in different
components can never be reconciled. A value already standing at its target
trivially shares a component with itself.

Walk `nums = [35,6,14]`: the primes involved are 2, 3, 5, 7, and the unions
are 35–7, 35–5, 6–3, 6–2, 14–7, 14–2. One component swallows
{35, 14, 6, 7, 5, 3, 2} — 35 and 6 meet through 14 — so the comparison with
sorted `[6,14,35]` passes at every index and the answer is `true`. For
`[14,3,10]`, the 3 stands alone: its only prime, 3, appears in no other
value, and it fails against both `3`'s sorted-slot neighbor and everything
else, giving `false`.

**Complexity:** `O(M log log M + n log n)` time, `O(M)` space.
