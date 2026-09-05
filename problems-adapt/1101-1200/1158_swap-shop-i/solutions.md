# Solutions — Swap Shop I

## Left join a filtered buy count onto every member

Every member must appear in the output exactly once, whether they bought
anything in 2019 or not — so the driving table is `Members`, left-joined
to an aggregate over `Trades`. The aggregate keeps only the trades inside
the year that matters (`strftime('%Y', trade_date) = '2019'`, which could
equivalently be written as a date-range predicate) and counts rows per
`buyer_id`. Grouping by the buyer is what makes the count one-sided: a
trade where the member was the seller never lands in their bucket.

The join has to be a **left** join. An inner join would silently discard
every member with no 2019 purchases — precisely the rows the example
reports with a zero. `COALESCE(..., 0)` converts the NULL that a
matchless left join produces into the 0 the output wants, and nothing on
the Listings side is ever consulted; that table exists for the sibling
problem, which asks about brands.

**Complexity:** `O(M + T)` time for `M` members and `T` trades — one
grouped scan plus one hash join — and `O(M + B)` space for the per-buyer
counts of `B` distinct buyers.
