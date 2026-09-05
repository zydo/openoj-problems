# Solutions — Recruiting Under a Salary Cap II

## Pay prefixes by level

Within each level category, ordering by the guaranteed-unique monthly_pay
places applicants in their required hiring order. A partitioned window sum
attaches the total cost of each prefix to its final applicant, so a senior is
accepted exactly when that running total is at most $70,000.

The greatest affordable senior running total is the exact amount already
spent, with zero supplied when no senior is hired. The remaining budget then
sets the corresponding threshold for junior running totals, and one final
filter returns the IDs from both accepted prefixes.

**Complexity:** `O(n log n)` time and `O(n)` space for sorting and evaluating the window sums.
