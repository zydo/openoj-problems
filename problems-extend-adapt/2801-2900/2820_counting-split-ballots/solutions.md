# Solutions — Counting Split Ballots

## Split every ballot, aggregate the shares, keep the top tier

One resident's single vote may be spread across several names, so a row can
never be counted as a whole vote: the unit of accounting is the elector,
not the row. Grouping `Ballots` by `elector` and taking
`1.0 / COUNT(choice)` builds exactly that — each elector's non-null rows
per their ballot size, so a two-name ballot contributes 0.5 to each line
and a sit-out's null-only ticket divides nothing into any name.
`COUNT(choice)`, not `COUNT(*)`, is what keeps abstention rows out of the
denominator; an elector who never voted gets no share at all.

Those per-elector shares are joined back onto the non-null rows by
elector, and `GROUP BY choice` with `SUM(share)` adds up, for each name,
every fraction of every ballot that carried it — Hank's two-way split
lands 1/2 on Lena and Milo alike, while Petra's whole vote lands 1.0 on
Noor alone. Floating-point sums of halves and thirds are honest but not
bit-exact, so the aggregate is rounded (`ROUND(SUM(share), 9)`) before
comparison; names whose totals agree arithmetically then compare equal
regardless of summation order, while genuinely different totals sit far
outside that grain. The winners are everyone tied with
`(SELECT MAX(votes) FROM totals)` — filtering rather than ranking-and-
keeping-one means a two-way tie naturally outputs both names. The final
`ORDER BY choice` puts those rows in the required ascending order.

Each of the two groupings passes over the `B` rows of `Ballots` once
(hash- or sort-built groups over the shares join), and the surviving
groups are scanned once more for the max.

**Complexity:** `O(B log B)` time, `O(B)` space.
