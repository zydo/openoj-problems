# Solutions — Top Reviewer and Best Film

## Approach: Two ranked subqueries, unioned in order

The output is two rows from two independent questions, so each becomes
its own ranked subquery and `UNION ALL` stacks them: the viewer row
first, then the film row. For the viewer, `Reviews` grouped by
`viewer_id` counts reviews, the join to `Viewers` supplies the name, and
`ORDER BY count DESC, name ASC LIMIT 1` applies both the greatest-count
rule and the lexicographic tie-break. For the film, only February 2020
reviews (`reviewed_on LIKE '2020-02-%'`) are grouped by `film_id`,
averaged, joined to `Films` for the title, and ranked
`ORDER BY AVG(rating) DESC, title ASC LIMIT 1`.

One `column` name (`results`) is shared by both branches so the union
presents a single column; `UNION ALL` (not `UNION`) keeps the two rows
distinct even if the viewer's name and the film's title coincide.

**Complexity:** `O(R log R)` over the review rows (the two group-bys and
their sorts), `O(1)` output.
