# Solutions — Tree Split into Divisible Sums

## Greedy subtree-sum cutting

Root the tree at node `0` and total each subtree from the leaves up. When a
subtree's sum first becomes a multiple of `k`, cut the edge joining it to its
parent. This greedy choice is safe for an exchange reason: the grand total is
a multiple of `k` by assumption, so removing a multiple-of-`k` subtree leaves
a multiple-of-`k` remainder — both sides stay admissible — while a subtree
whose sum is *not* a multiple can never be separated from its parent in any
admissible split, since every component must stand on its own. Cutting every
divisible subtree therefore forecloses nothing and adds a component each
time.

Concretely, a stack walk from the root records parents and an order with
parents before children; consuming that order in reverse finishes every
subtree before its parent needs it. For node `u` (other than the root): if
`subtree[u] % k == 0`, count one component and throw the sum away (the edge
above `u` is cut); otherwise add `subtree[u]` into its parent and defer the
decision upward. The root itself contributes the final component, and its
sum needs no check — every cut removed a multiple of `k`, so what remains of
a multiple-of-`k` total is still a multiple of `k`.

Example 2 walks the whole mechanism: node `4` totals `0`, a multiple, and is
cut immediately; node `1` absorbs node `3`'s `3`, reaches `4`, and is cut as
the component `{1, 3}`; node `2` absorbs node `5`'s `5`, reaches `8`, and is
cut too; node `0`'s own `4` is the fourth component. Values of `0` and sums
up to `3 x 10^13` need no special casing.

**Complexity:** `O(n)` time, `O(n)` space.
