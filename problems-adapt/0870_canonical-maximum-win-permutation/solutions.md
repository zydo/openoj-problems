# Solutions — Canonical Maximum-Win Permutation

## Greedy Assignment with a Fenwick Tree

For each opponent value, using the smallest remaining value that beats it is
safe: choosing a larger winner gains the same one point while making later
matches no easier. When no win is possible, using the smallest remaining value
sacrifices the least useful choice. This greedy rule maximizes wins and is also
the exact canonical order required by the statement.

Sort a copy of `available`. A Fenwick tree stores whether each sorted rank is
still unused. For an opponent value, binary search finds the first sorted value
that is strictly greater. The tree then selects the first unused rank at or
after that boundary. If none exists, it selects the first unused rank overall.

Fenwick prefix sums count how many available ranks lie before a boundary, and
binary lifting locates the next order statistic. After choosing a rank,
subtract one at its tree position so duplicate values and later queries are
handled correctly.

Strict upper-bound search keeps equal values on the losing side, exactly
matching the definition of a win.

**Complexity:** `O(n log n)` time and `O(n)` space.
