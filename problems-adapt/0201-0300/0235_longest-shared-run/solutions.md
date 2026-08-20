# Solutions — Longest Shared Run

## Longest Common Suffix Dynamic Programming

Contiguity is the whole difficulty here: unlike a subsequence, a shared stretch
may not skip anything, so it is pinned down completely by where it starts in
each array. That suggests indexing the state by a pair of starting positions
and storing how far the agreement carries from there. Write `match[i][j]` for
the number of entries that coincide when reading `first` from `i` and `second`
from `j` in lockstep.

One comparison fixes each cell. Disagreeing entries end the reading
immediately, leaving `0`; agreeing entries contribute themselves and then hand
the rest of the question to the pair one step along, so the cell is
`match[i+1][j+1] + 1`. The longest shared stretch is whichever cell came out
largest, since every stretch is counted at the pair it starts from — which is
why the running maximum is taken as cells are written rather than read off a
designated corner at the end.

Because a cell depends only on the cell after it in both indices, the sweep
runs `i` downward from the last position of `first`, and within each `i` runs
`j` downward too. At that point only the row for `i + 1` is ever consulted, so
the code carries one array `dp` for it and fills a fresh `new` for the current
row, then swaps. The extra `+ 1` slot on each row removes the boundary test:
the diagonal lookup at the far edge reads a permanent `0`, which is the right
answer for a stretch that has already run out of array.

Two arrays sharing no value never take the matching branch, so every cell stays
`0` and the reported length is `0` — the same code path that handles a shared
value appearing only in isolation, never extended.

**Complexity:** `O(m · n)` time, `O(n)` space.
