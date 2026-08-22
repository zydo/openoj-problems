# Solutions — Palindrome Partitions

## Palindrome Table with Backtracking

Arbitrary intervals of `s` get asked whether they read both ways, so settle all
of those questions first in one table, `is_pal[i][j]`. Fill it with `i`
running right to left and `j` from `i` upward: the interval from `i` to `j`
qualifies exactly when its two end letters match and the part between them is
either empty or already marked. Walking `i` backwards means every inner
interval is settled before an outer interval tries to read it.

The search then moves through the string from the left, consuming the table.
Standing at position `start`, it offers each `end` in turn such that the piece
from `start` to `end` qualifies, appends that piece, and recurses from `end + 1`
with the piece removed again afterwards. Reaching the far end means the pieces
on hand tile the whole string, and a copy of them joins the result. Offering
the ends shortest-first is exactly what produces the required ordering — for
`"toto"`, the partition `["t","oto"]` surfaces before `["tot","o"]` because
its first piece is the single letter `t`, and the same rule applies inside each
suffix.

No dead ends exist: one letter always qualifies, so the left-to-right sweep can
always fall back to splitting off a single character, and the partition of all
single letters is reachable for every input. The bound of sixteen letters
keeps the enumeration small in general, but a string of one repeated letter
still admits a partition for every way of grouping adjacent letters, so the
cost is tied to the output. Writing `P` for the number of partitions and `n`
for the length, the search performs `O(P · n)` piece insertions on top of the
table.

**Complexity:** `O(n^2 + P · n)` time, `O(n^2)` space.
