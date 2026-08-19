# Solutions — Minimum Non-Leaf Sum

## Interval Dynamic Programming

A full binary tree over ordered leaves slices the array recursively: the
leaves under any node form a consecutive block, the root's block is the
whole array, and choosing the root's split chooses where the block breaks.
For a split of slice `leaves[i..j]` at `k`, the root pays
`max(leaves[i..k]) * max(leaves[k+1..j])` — largest leaf each side — on top
of whatever the two subtrees pay. So `dp[i][j]`, the least internal sum
for the slice, obeys

`dp[i][j] = min over k of maxi(i,k) * maxi(k+1,j) + dp[i][k] + dp[k+1][j]`,

with a lone leaf costing nothing.

Two tables fill together. `maxi[i][j]` — the largest leaf of the slice —
is built first over increasing slice lengths, each entry extending its
shorter neighbour by one element. Then `dp` fills the same length order,
so both halves of any candidate split are already final when consulted;
`dp[0][n-1]` is the answer. Slices of length 1 seed both tables for free.

Worked on `leaves = [5,3,2]`: the length-2 slices pay `5·3 = 15` and
`3·2 = 6`. The full slice then weighs cut-after-5 (`maxi(5)·maxi(3,2) =
15`, plus 15) against cut-after-3 (`maxi(5,3)·maxi(2) = 10`, plus 6), and
the second wins at 21 — pairing the small leaves under one subtree keeps
the large leaf out of one product. A two-leaf array has a single cut and
pays the forced product, and at `n <= 40` the cubic sweep over cuts is
comfortable.

**Complexity:** `O(n³)` time, `O(n²)` space.
