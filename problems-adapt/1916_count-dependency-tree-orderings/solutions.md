# Solutions — Count Dependency Tree Orderings

## Tree DP with multinomial interleaving

A legal completion order is exactly a linear extension of the tree rooted
at task 0: a task starts only after its prerequisite is done. Write
`ways[u]` for the number of legal orderings inside the subtree below `u`;
finishing that subtree means running `u` first and interleaving the
already-legal orderings of the child subtrees. Interleaving blocks of
sizes `s1, s2, …` can happen in
`(s1+s2+…)! / (s1!·s2!·…)` ways, giving
`ways[u] = (size(u)-1)! · Π ways[v] / size[v]!` over children `v`, all
modulo 10^9+7.

Division is recast as multiplication by tabulating factorials and inverse
factorials: one Fermat little-theorem exponentiation `pow(fact[n], MOD-2,
MOD)` inverts `fact[n]`, and the inverse table then fills backwards via
`invfact[i-1] = invfact[i] · i` — one exponentiation for the whole run
instead of one per node.

Because `n` reaches 10^5, recursion is out; the code assembles children
lists, derives a processing order by draining a stack seeded with 0
(parents always surface before their descendants), and then walks that
order in reverse — a post-order in which each child folds into its parent
before the parent folds upward. `size[u]` and `ways[u]` fill bottom-up in
that one pass, and `ways[0]` is the result. A pure chain — as in Example
1, `[-1, 2, 0]` — exercises the degenerate branch: every node has one
child, every multinomial coefficient is 1, and the sole ordering falls
out.

**Complexity:** `O(n)` time, `O(n)` space.
