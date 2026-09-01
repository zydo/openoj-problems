# Solutions — Second-Latest Task per Person

## Approach: Rank stints per person, keep rank two or a lone rank one

Window functions number each person's rows from newest to oldest:
`ROW_NUMBER() OVER (PARTITION BY person ORDER BY start_day DESC)` gives the
most recent stint `1`, the second-latest `2`, and so on. The wanted row is
rank `2` — except for people with a single stint, who have no rank `2` at
all and must contribute their rank-`1` row instead. `COUNT(*) OVER
(PARTITION BY person)` flags those singleton partitions, and the outer
query keeps a row when it is ranked two or when it is ranked one in a
one-row partition.

**Complexity:** `O(N log N)` over the `N` stint rows (the window sort),
`O(P)` output for `P` people.
