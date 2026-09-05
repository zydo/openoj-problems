# Solutions — February's Top Tags

## Cut the tag, group February, keep the top three

Each body carries exactly one tag, so the tag is a property of the
row: everything from the `#` — located with `INSTR(body, '#')` — to the
next space, or to the end of the body when the tag closes it. The `feb`
CTE restricts the table to February 2024 first (`BETWEEN '2024-02-01' AND
'2024-02-29'`; 2024 is a leap year, so the month ends on the 29th) and
keeps only the tail `SUBSTR(body, INSTR(body, '#'))`. The `tags`
CTE then trims that tail at its first space: `INSTR(tail, ' ')` returns 0
when there is none, in which case the whole tail is the tag, otherwise
`SUBSTR(tail, 1, INSTR(tail, ' ') - 1)` cuts just before it.

Counting is a plain `GROUP BY tag` with `COUNT(*)` — every surviving
row is one mention. The final `ORDER BY tag_count DESC, tag DESC`
realizes the demanded ordering, and `LIMIT 3` keeps the top three. The
secondary key matters exactly at the cut: when several tags share the
third-place count, the lexicographically largest one wins the seat, which
is what "ordered by tag count, then by the tag itself, both
descending" asks for — in the first example, `#SunriseRun` (3) and
`#CoffeeFirst` (2) lead, and `#Weekend` takes the last row over
`#BookClub` on that tiebreak.

**Complexity:** `O(n + k log k)` time, `O(k)` space — one pass over the
`n` February posts buckets mentions into `k` tags, then the `k` groups
are sorted.
