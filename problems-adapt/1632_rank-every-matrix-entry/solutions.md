# Solutions — Rank Every Matrix Entry

## Union-find over equal values

Walk the entries from smallest value to largest. Everything strictly smaller
is already ranked and its ordering obligations are settled, so the only
coordination left is among ties: entries of one value that meet along a row
or a column are compelled to share a rank. Handle each value group in turn
and, inside it, unite every pair of entries that share a row or a column —
the unions chain, so whole connected clusters of equal entries collapse onto
one rank.

Each cluster's common rank must clear the largest rank already sitting in any
of its rows or columns; `row_max` and `col_max` carry those maxima forward
from all strictly smaller values. One past the strictest of those
requirements is simultaneously the smallest legal rank for every entry in the
cluster, so it is assigned to all of them and both maxima arrays are pushed
up to record it.

Handing out the smallest feasible rank at each step, in ascending value
order, leaves no entry over-ranked: the union step forces the ties, and any
attempt to lower an entry would break a strict comparison against a smaller,
already-fixed neighbor. At the borders, a matrix of a single repeated value
shrinks to one cluster ranked 1, and each value group builds its union-find
from scratch so clusters cannot bleed from one value into the next.

For the matrix `[[4,25,-18],[-18,25,8],[43,31,-2],[4,25,9]]`, the three `25`s
fuse through their shared column and the two `4`s through theirs, which is
why matching entries carry matching ranks in the answer.

**Complexity:** `O(mn log(mn))` time, `O(mn)` space, for an `m × n` matrix.
