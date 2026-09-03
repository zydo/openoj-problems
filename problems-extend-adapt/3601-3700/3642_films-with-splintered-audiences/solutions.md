# Solutions — Films With Splintered Audiences

## One Group per Film, Judged in HAVING

Every rule in this problem is a property of a film's viewing set, so the
query is a single grouped pass: join `viewings` to `films` on `film_id`
and group by the film's columns. Inside each group, `COUNT(*)` is the
viewing total, `MIN`/`MAX` of `viewing_rating` give the spread and — for
free — the both-sides test, since a film with at least one rating of 2
or lower and one of 4 or higher is exactly a group whose minimum is at
most 2 and whose maximum is at least 4. The extreme count comes from
flagging each row: a `CASE` expression pays out 1.0 for ratings outside
the open middle (2 or lower, or 4 or higher) and 0.0 otherwise, and
averaging those flags _is_ extreme-ratings-over-total.

All four admission rules are per-group facts, so they live in `HAVING`,
not `WHERE`: at least five rows in the group, minimum at most 2, maximum
at least 4, and the flagged average at least 0.6. The threshold is
applied to the exact average — Glass Orchard's 5/7 in the example
qualifies on 0.714…, not on the reported 0.71; the same average appears
once more in the SELECT wrapped in `ROUND(..., 2)` purely for display,
so filtering and reporting never interfere. Films that fail any rule
simply lose their group, which is what an empty result looks like here —
no outer joins or extra branches needed.

`ORDER BY split_score DESC, title DESC` ranks the reported scores,
letting equal scores fall through to reverse-alphabetical title order.
Each viewing row is joined, flagged and aggregated a constant number of
times, so with hash join and hash grouping the query runs in one linear
sweep over the tables (sort-based plans add a log factor); working
storage is the per-film groups.

**Complexity:** `O(V + F)` time and space for `V` viewings and `F`
films.
