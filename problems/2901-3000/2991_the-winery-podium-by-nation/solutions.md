# Solutions — The Winery Podium by Nation

## Sum per winery, rank per nation, pivot the podium

The ranking works on two levels of aggregation. A winery's total is the
sum of its rows inside one nation, so the first CTE applies
`GROUP BY nation, winery` with `SUM(rating)` and yields one
`total_rating` per competitor — the same winery name in two nations
stays two separate rows. The second CTE then positions every competitor
inside its nation with `ROW_NUMBER() OVER (PARTITION BY nation ORDER BY
total_rating DESC, winery)`: totals descending, winery name ascending as
the tie-break, exactly the statement's ordering. `ROW_NUMBER` rather than
`RANK` is deliberate — the output asks for three labeled slots, not peer
groups, so a tie must be resolved into positions 1, 2, 3 by the name
order rather than sharing a rank.

The final `SELECT` pivots the ranks into columns. Grouped by `nation`,
each slot is `MAX(CASE WHEN rn = k THEN winery || ' (' || total_rating ||
')' END)`, so a podium entry renders as the winery name followed by its
total in parentheses — `CasaVigna (179)`. `MAX` over a group where slot
k's `CASE` never fires is `NULL`, and `COALESCE` replaces exactly those
holes with `'No second winery'` and `'No third winery'`; slot 1 always
exists because a nation in the table has at least one winery.
`ORDER BY nation` closes the query with the required ascending nation
order.

Aggregating the `n` input rows into `w` winery totals is one pass, the
window sorts each nation's competitors, and the pivot re-groups the same
`w` rows by nation — the whole pipeline touches each row a constant
number of times plus the sorts. **Complexity:** `O(n + w log w)` time,
`O(n)` space.
