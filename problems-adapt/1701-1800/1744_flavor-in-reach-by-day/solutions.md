# Solutions — Flavor in Reach by Day

## Prefix sums bound each query's window

The only thing that matters about the flavors before `t` is how many jars
they hold in total, so a prefix-sum array `pref` where `pref[i]` is the
total jars in flavors `0 .. i-1` answers every query's "when can I reach
flavor `t`" question in constant time.

For a query `(t, day, cap)`, the earliest day flavor `t` can be touched
is `pref[t] // cap`: eating `cap` jars every day clears the preceding
flavors as fast as the rules allow, and the first jar of flavor `t` is
reached on that day. The latest day is `pref[t] + stock[t] - 1`, reached
by eating one jar a day, the slowest pace the rules permit. The query is
true exactly when `day` lies inside that window: `pref[t] // cap <= day
<= pref[t] + stock[t] - 1`.

Prefix sums reach `10⁵ × 10⁵ = 10¹⁰`, so the accumulated totals must be
held in 64-bit integers even though every individual count fits in 32
bits. With the prefix array built in one pass and each query reduced to
two comparisons, the whole answer is a single linear sweep over the
queries.

**Complexity:** `O(n + q)` time, `O(n)` space.
