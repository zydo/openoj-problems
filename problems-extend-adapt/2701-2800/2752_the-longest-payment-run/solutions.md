# Solutions — The Longest Payment Run

## Gaps-and-islands over per-payer date runs

Each payer's payment dates split into runs of adjacent calendar days, and
the answer is whoever owns a longest run — the classic gaps-and-islands
shape. The first pass puts every row on a continuous timeline,
`julianday(paid_on)`, and carries its predecessor's day number alongside:
`LAG` over `PARTITION BY payer_id ORDER BY paid_on` reaches one row back
inside the same payer. A row continues its predecessor's run exactly when
the difference is 1; that one number is where month and year rollovers
stop mattering, because 2023-12-31 and 2024-01-01 are one day apart on
the julian timeline even though string arithmetic would see nothing
special tying them together.

The second pass turns run membership into an id: a new run starts at a
row whose predecessor is missing or non-adjacent (`CASE ... THEN 0 ELSE
1`, with the NULL first row falling into the ELSE), and a running SUM of
that flag numbers the runs within each payer in date order. Grouping by
payer and id then counts each run's rows, so `COUNT(*) AS streak` is that
run's length — a payer paying on the 5th, 6th and 20th comes out as
streaks 2 and 1, never a total of 3.

What remains is a two-level maximum: `MAX(streak)` per payer finds each
payer's best run, and the outer query keeps the payers whose best equals
the global maximum, so ties all survive (when nobody has two adjacent
days every best is 1 and everyone is returned). The final
`ORDER BY payer_id ASC` supplies the required ascending order, which the
judge compares exactly.

Every step is one ordered scan of the rows per window: sorting each
payer's dates dominates, at n log n comparisons for n payments, with O(n)
intermediate rows across the CTE chain.

**Complexity:** `O(n log n)` time, `O(n)` space.
