# Solutions — Verification Success Rates

Each member's verification success rate is the average of a binary
confirmed flag over the prompts sent to them.

## Left join, average the confirmed flag, round

Each member's rate is the fraction of their prompts that came back
`'confirmed'`, so the query joins every registration to its verification
rows and averages a boolean flag over the group. The `LEFT JOIN` keeps
members who were never sent a prompt; for them the joined row carries a
`NULL` outcome, `AVG(c.outcome = 'confirmed')` evaluates to `NULL`
(SQLite averages only non-`NULL` values), and `COALESCE(..., 0)`
supplies the rate `0` the statement prescribes.

The boolean `c.outcome = 'confirmed'` is `1` for a confirmed row and `0`
for a timeout, so `AVG` is exactly the confirmed-to-total ratio, and
`GROUP BY s.member_id` computes one ratio per member. `ROUND(..., 2)`
gives the two-decimal form the statement requires, and because every
member of the `Registrations` table appears through the left join, the
result contains exactly one row per registration — no member is dropped.

The query scans each table once to build the join, then groups; the row
set is compared against the expected table as an unordered set, matching
the statement's "in any order".

**Complexity:** `O(n log n)` time, `O(n)` space.
