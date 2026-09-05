# Solutions — Scouting Shortlist

Two independent roads lead onto the shortlist: a podium streak across
consecutive matches, or a scatter of outright wins. Both must be
checked for every player, and the answer is their union.

## Islands of podiums, plus a win tally

Unpivot the three podium columns into one `(match_id, player_id)`
appearance relation with `UNION`, so a player filling two podium spots
in a single match appears once — placing in a match is what the streak
counts, not the number of spots. Because the table guarantees
consecutive match IDs, "three or more consecutive matches" is a
gaps-and-islands pass: `match_id - ROW_NUMBER() OVER (PARTITION BY
player_id ORDER BY match_id)` stamps every maximal run of consecutive
IDs with a constant `grp`, and `HAVING COUNT(*) >= 3` on `(player_id,
grp)` keeps the streak qualifiers. The second condition is a plain
`GROUP BY champion` with `COUNT(DISTINCT match_id) >= 3` — distinct,
because the champion column meets each match exactly once anyway, and
the count spans non-consecutive matches (Noa's `301, 303, 305` in the
example). The two qualifier sets feed `IN` predicates on `Players`,
and handle and email come out in any order.

The boundary cases are where the two conditions part ways: Riko in the
example is a streak qualifier with a single win, while Sam owns two
wins and no streak of three, so neither condition alone suffices.
Everything runs as one wrap-safe `SELECT` with subqueries (no `WITH`
header), and rows compare as a multiset.

**Complexity:** `O(M log M)` time for the per-player sort behind the
window function, `O(M)` extra space, for `M` match rows.
