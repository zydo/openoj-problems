# Solutions — Recruiting Under a Salary Cap

## Cumulative pay by hiring priority

Within each level category, hiring the cheapest applicants first gives the
largest possible count. A window sum ordered by `monthly_pay` and then
`applicant_id` records the cost of every cheapest prefix; the ID tie-break only
makes equal-pay prefixes deterministic. The affordable senior prefix is counted
first, and its pay is summed to determine the payroll that remains.

The same cumulative sums then identify the junior prefix that fits in that
remainder. Two aggregate CTEs always produce one row each, including on an
empty table, and `UNION ALL` labels those fixed rows as `Senior` and `Junior`.

**Complexity:** `O(n log n)` time and `O(n)` space for sorting and evaluating the window sums.
