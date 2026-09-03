# Solutions — Crop Rotation Routines

The routine rule reduces to two aggregate facts about a grower's visit
history. First the visits must be split at every gap longer than two days:
the "near-consecutive dates" clause only lets visits within the same
contiguous run reinforce each other, and a run that breaks apart is never
glued back together. Second, within one run the grower must have tended at
least three distinct crops and must have enough total visits to fit two
full passes of that crop set — the "at least 2 complete cycles" clause,
expressed as `planting_count >= 2 * distinct_crops`.

## Window a contiguous run, then keep blocks with two full cycles

Each visit is tagged with the number of days since the grower's previous
visit, using `LAG` over the date-ordered partition; a running `SUM` of the
"gap > 2" markers then numbers the contiguous blocks, so every visit whose
previous visit is more than two days back starts a new block id. Grouping
by grower and block id collapses each run into its `COUNT(*)`,
`COUNT(DISTINCT crop)`, and `SUM(hours_logged)`, and the `HAVING` clause
keeps exactly the blocks that are rotations: at least three distinct crops
and at least twice as many visits as crops.

A grower may own several qualifying blocks, so a `ROW_NUMBER` per grower
over `rotation_length DESC, total_hours DESC` picks the single block that
defines the reported row — the longest rotation, with the highest logged
hours breaking a tie. Joining back to `growers` restores the name and
region, and the final ordering mirrors the required `rotation_length DESC,
rotation_hours DESC` output, with `grower_id ASC` as a stable tiebreaker
for rows that agree on both; the judge compares rows as an unordered
multiset, so the ordering is fidelity to the statement rather than a
correctness requirement. The hours total is cast to REAL before it leaves
the query so every judge row carries the decimal value the statement
shows.

**Complexity:** `O(n log n)` time, `O(n)` space (n planting rows).
