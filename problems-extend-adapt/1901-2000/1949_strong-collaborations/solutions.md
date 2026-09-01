# Solutions — Strong Collaborations

A collaboration is strong exactly when the pair shares at least three
mutual collaborators, so the query needs each collaboration edge's
common-neighbor set. The natural shape is a directed neighbor index, then
an intersection of the two members' collaborator lists per edge.

## Directed edge union, join, group count

The `neighbors` CTE expands `Collaborations` into both directions: each
stored `(member1_id, member2_id)` row also yields the reverse
`(member2_id, member1_id)`. A member's collaborators are then exactly the
rows whose `a` column holds their id. For every collaboration edge
`(m1, m2)` from the base table, joining `neighbors x` on `x.a = m1` and
`neighbors y` on `y.a = m2 AND y.b = x.b` pairs up each candidate
collaborator once — `x.b` is a collaborator of `m1`, `y.b` is a
collaborator of `m2`, and the equality forces them to be the same member,
so a mutual collaborator of `m1` and `m2` contributes exactly one joined
row.

Grouping by the edge and counting `DISTINCT x.b` yields the mutual
collaborator count; `HAVING COUNT(...) >= 3` keeps only strong
collaborations and emits each edge as stored in the table. The `DISTINCT`
is defensive — the primary key already ensures each directed edge appears
once — and the grouping runs over the edge set, so the work stays
proportional to the pairs that actually share a collaborator.

**Complexity:** `O(E²)` time in the worst case over `E` collaboration
edges, `O(E)` space for the directed edge index.
