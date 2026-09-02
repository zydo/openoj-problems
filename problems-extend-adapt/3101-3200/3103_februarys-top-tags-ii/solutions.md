# Solutions — February's Top Tags II

## Split every chirp at its tags, group, keep the top three

Unlike its single-tag sibling, a chirp here can carry several tags, so
counting is a token-splitting job first. A recursive CTE walks each
chirp's text: every step anchors on the next `#` — `INSTR(rest, '#')` —
lifts the tag from there to the following space (a virtual trailing
space makes the end-of-body case uniform), and the remainder after that
tag becomes the next `rest`. The recursion stops once no `#` survives,
which terminates because every step consumes the anchor character plus
everything before the next one. One row per occurrence leaves the CTE —
the same tag repeated inside a single chirp legitimately contributes
several rows.

Counting those occurrences is then plain aggregation: an inner select
drops the seed row's NULL tag, the outer `GROUP BY tag` counts mentions
into `tag_count`, and the window function alternative would do exactly
the same partitioned work. The final `ORDER BY tag_count DESC, tag DESC
LIMIT 3` realizes the demanded ranking; because tag values are unique
grouping keys, the descending name tiebreak always breaks equal counts
deterministically — it decides the second and third seats whenever
several tags share a boundary count, as in Example 1, where `#SlowCraft`
and `#RiverRun` outrank the other two-mention tags.

**Complexity:** `O(n + k log k)` time, `O(k)` space — `n` the total
chirp text length walked once by the splitter, `k` the distinct tags
then sorted.
