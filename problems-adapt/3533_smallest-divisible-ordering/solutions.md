# Solutions — Smallest Divisible Ordering

## Bitmask DP over (placed set, remainder), rebuilt greedily

Appending a number `x` to digits whose value is congruent to `r` modulo `k`
gives a new congruence `(r · 10^d + x) mod k`, where `d` is the digit count of
`x`; both `d` and the powers of ten are precomputable. Nothing else about the
prefix survives this step, so feasibility depends on exactly two things: which
numbers have been placed (a bitmask) and the congruence so far. Let
`dp[mask][rem]` record whether the numbers missing from `mask` can be placed
after a prefix with congruence `rem` so that the finished digit string is a
multiple of `k`. The anchor is `dp[full][0]`: with every number placed and
congruence 0, nothing remains to do. Filling masks from the most-used
downward, each state tries every unplaced number as the next pick, and if
`dp[0][0]` comes out false, no valid arrangement exists at all.

The answer itself is rebuilt greedily. Keep the candidate indices sorted by
value; walking left to right, commit the smallest unplaced number whose
congruence transition lands on a state still marked true in the table. That
choice is always completable — the table says so — and any list holding a
smaller number at an earlier position beats every list that does not,
whatever follows.

Worked example: `nums = [5,42,9]`, `k = 5`. Every placement of 5 in the last
slot leaves a prefix congruence that 5 then maps to 0, because appending a
final digit 5 forces divisibility by 5; the two reachable orders are
`[42,9,5]` and `[9,42,5]`, and the greedy takes 9 before 42, yielding
`[9,42,5]`.

Loose ends: with `k = 1` every arrangement is valid and the sorted order wins
outright; repeated values are interchangeable, so duplicates cost nothing; and
the table is at most `2^13 · 100` booleans, with the rebuild adding a single
`O(n)` scan per output position over the sorted candidates.

**Complexity:** `O(2^n · k · n)` time, `O(2^n · k)` space.
