# Solutions — Repeated Sign-Up Emails

## Group and count

The request is a property of each address as a whole — how many rows carry it — not of any single row. `GROUP BY email` collapses `Signups` into one group per distinct address, `COUNT(email)` sizes each group, and `HAVING COUNT(email) > 1` keeps exactly the groups with repeats. Each repeated email therefore survives as one output row, one-time addresses drop out, and an empty table forms no groups at all — zero rows, no special case. `SELECT email AS RepeatedEmail` shapes the one column the contract names.

The filter must be `HAVING`, not `WHERE`: the count describes the whole group, and `WHERE` runs before grouping ever happens. The equivalent self-join states the same test row-wise — `SELECT DISTINCT s1.email FROM Signups s1 JOIN Signups s2 ON s1.email = s2.email AND s1.signupId <> s2.signupId` pairs each row with a different row of the same address, and `DISTINCT` collapses the pairs back to one row per address — but it materializes every matching pair first, where the grouped form reaches that shape directly.

`GROUP BY email` hashes the addresses in a single aggregation pass; with `P` rows in `Signups` and `D` distinct emails, only the `D` groups and their counts are held.

**Complexity:** `O(P)` time, `O(D)` space.
