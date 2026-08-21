# Solutions — Symmetric Word Grids

## Backtracking with a Prefix Map

The symmetry condition is not something to test at the end — it is something to
build with. Suppose lines `0 … k-1` of the block are already written. Column `k`
of those lines is fixed, and symmetry says column `k` spells line `k`. So the
first `k` letters of the next line are decided before it is chosen: line `k`
must begin with `line[0][k], line[1][k], …, line[k-1][k]`.

That turns an apparently exponential choice into a lookup. Before searching,
walk every entry and file it under each of its prefixes — the empty string, the
one-letter opening, and so on up to the whole entry. With that index in hand,
the candidates for line `k` are exactly one bucket, and the empty-prefix bucket
holds everything, which is precisely the freedom line 0 enjoys. An entry files
itself under all of its own prefixes, so picking it twice costs nothing extra.

The recursion carries the partial block. At depth `col` it assembles the forced
opening from the letters in column `col`, fetches that bucket, and recurses once
per candidate; at depth `L` it records a copy. All entries share a length, so
every block is `L` lines tall and the recursion is `L` deep — at most four here.

Checking only the prefix is enough, and this is worth seeing. Placing line `col`
with a matching opening asserts `block[j][col] == block[col][j]` for each earlier
line `j`, and every unordered pair `{j, col}` is settled exactly once, when the
later of the two lines goes down. Nothing is left to verify at the bottom.

On `["shot","hope","open","tend","spot"]` the first line has five candidates.
Choosing `"shot"` forces line 1 to start with `"h"`, which only `"hope"` offers;
that fixes `"op"` for line 2, then `"ten"` for line 3, and one block survives.
Choosing `"spot"` forces line 1 to start with `"p"` and the branch dies at depth
1 — no bucket, no candidates, no work. That is the shape of the whole search:
pruning happens at the moment a prefix has no takers, not after a full block has
been assembled and rejected. Sorting the results at the end only makes the
output order deterministic.

**Complexity:** `O(N * L^2 + N^L)` time in the worst case — building the index
touches `L` prefixes per entry, and the search tree is `L` deep over `N` entries,
though prefix pruning keeps it far below that bound in practice —
and `O(N * L^2)` space for the index.
