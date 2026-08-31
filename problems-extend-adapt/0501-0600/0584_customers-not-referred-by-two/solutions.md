# Solutions — Customers Not Referred by Two

## The null-aware referrer filter

The two qualifying populations both live in `referrer_id`, so the query is a
single filter with two branches: `WHERE referrer_id IS NULL OR referrer_id != 2`
keeps every row whose referrer is nobody — `referrer_id` null — and every row
whose referrer is somebody other than guest 2, and the projection is the
answer's one column, `guest_name`.

The second branch alone is a trap. In SQL the comparison `null != 2` is
unknown, not true, so `WHERE referrer_id != 2` on its own silently drops the
unreferred — exactly the guests the `IS NULL` branch exists to keep; the
same rescue is available as a coalesce, `IFNULL(referrer_id, 0) != 2`, which
maps null to 0 before comparing. The boundary is exact: a `referrer_id` of 2
is excluded, while 1 and 3 — or any other integer, negative or huge — are
kept, and a guest's own `guest_id` never enters the filter: guest 2 is an
ordinary guest here, kept or dropped by their `referrer_id` like anyone
else, and a guest who referred themselves qualifies unless their referrer
id is 2.

One scan over the `G` rows of `Guest` streams the qualifying `guest_name`
values out; nothing beyond the output itself is retained. Equivalent shapes
reach the same rows — the `IFNULL`/`COALESCE` coalesce above, or the
null-safe inequality `referrer_id IS NOT 2`, which dialects such as SQLite
evaluate as true on null — but the two-branch predicate states both
populations directly.

**Complexity:** `O(G)` time, `O(1)` space.
