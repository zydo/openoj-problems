# Solutions — Best k Disjoint Windows of Minimum Length m

## Layered DP with one running maximum per row

Count windows layer by layer. Let `prev[j]` be the best worth obtainable
from `i - 1` windows inside the first `j` elements; the zeroth layer is all
zeros, since no windows cost nothing. To place the `i`-th window so that it
closes right after `j`, it must open at some `t` with `t <= j - m` — that is
the minimum-length rule — and it adds `prefix[j] - prefix[t]`. So the row
recurrence reads

`cur[j] = max(cur[j - 1], prefix[j] + max over admissible t of (prev[t] - prefix[t]))`,

where `cur[j - 1]` inside the max says the window may have closed earlier
and the elements since are simply unused — exactly the freedom the
statement allows, since the windows need not cover the array.

The inner maximum is the only quadratic threat, and it dissolves on
inspection: as `j` advances by one, exactly one new `t = j - m` becomes
admissible, so a running variable that absorbs each newcomer keeps the
maximum current in constant time per step. One pass builds a row, `k` rows
build the answer, and only two rows are ever alive.

Exactly-`k` semantics show up as reachability: a position `j` can hold `i`
windows only once `i * m <= j`, and earlier positions carry negative
infinity through the recurrence, so illegal placements never win a max.
That is also why Example 2 returns a negative total — four mandatory
windows over four elements means every element is spent somewhere — and why
Example 3's single window happily spans the whole array: dropping either
end costs a 5, far more than the tolls it shelters.

**Complexity:** `O(n * k)` time, `O(n)` space.
