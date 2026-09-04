# Solutions — Each Performer's Chart Count

The chart is a bag of rows; the answer collapses that bag into one row per
distinct performer carrying its size, then orders those rows.

## Group by performer and order by the count

`GROUP BY performer` forms one bucket per distinct name and `COUNT(*)`
measures each bucket's size — the number of chart entries that name
appears on. Names are compared as stored text, so `Northwind` and
`northwind` stay separate performers, and names differing only by a
trailing space never merge; every character counts.

The ordering clause produces exactly the required table: `appearances`
descending puts the busiest performers first, and `performer` ascending
breaks ties deterministically, so equal-count groups come out in
alphabetical order. An empty chart simply yields no buckets and an empty
result table, needing no special case. The `song_title` values ride along
in the rows but are irrelevant to both stages.

**Complexity:** `O(n)` time to scan the `n` chart rows, plus
`O(a log a)` to order the `a` distinct performers; `O(a)` space.
