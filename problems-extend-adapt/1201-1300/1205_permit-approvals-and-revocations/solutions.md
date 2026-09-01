# Solutions — Permit Approvals and Revocations

## Two per-group tallies merged by full outer join

Approved totals and revocation totals are counted independently, then merged on the `(month, region)` key. The approved branch filters `Permits` to `status = 'approved'` and groups by `substr(issued_on, 1, 7)` and `region`. The revocation branch joins `Revocations` back to `Permits` on `permit_id` to recover each revocation's region and fee, but groups by the **revocation's** own `revoked_on` month — a revocation is reported in the month it took effect, which need not match the month its permit was lodged.

Because a region-month can appear in either branch alone, the two tallies are combined with a full outer join, emulated in SQLite by two `LEFT JOIN`s (`approved` left-joined with `revocation_rows`, unioned with the mirror image). `COALESCE` fills the missing side with zeros. Finally the all-zero rows the statement asks to ignore are filtered out, and the leftover rows are emitted in any order.

**Complexity:** `O(P log P + R log R)` time for the two grouped scans (plus the merge) and `O(P + R)` space, where `P` is the number of permits and `R` the number of revocations.
