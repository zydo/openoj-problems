# Solutions — Election Winner

## Join, group, and keep the largest group

The answer is the name of the nominee with the most ballots, and both
ingredients come from one grouping over a join.
`Nominee JOIN Ballot ON Nominee.id = Ballot.nomineeId` carries each
nominee's name on every one of their ballots; the join is inner on
purpose — a nominee with zero ballots matches nothing, forms no group,
and can never win, which is exactly the contract.
`GROUP BY Nominee.id, name` then collapses each nominee's ballots into
a single group — `id` alone identifies the nominee, and `name` rides
along so the selection stays valid under strict grouping rules (and two
nominees sharing a name stay two distinct groups).
`ORDER BY COUNT(*) DESC LIMIT 1` ranks the groups by size and keeps the
largest; the selected `name` of that one group is the winning nominee.

The winner guarantee carries the tie-breaking, not the query: exactly
one nominee wins, so the top group is unique and `LIMIT 1` returns
that row alone — no tie-break key is needed, and a one-ballot margin is
just the boundary where that uniqueness still holds. Counting is
order-independent, so `Ballot.id` order and insertion order never
matter, and because `nomineeId` is a foreign key to `Nominee.id`, every
ballot joins to exactly one nominee, making `COUNT(*)` per group exactly
that nominee's ballot total.

One pass over the `B` ballots builds the join and the `C` groups; ranking
the `C` groups costs a sort, and a single row leaves.

**Complexity:** `O(B + C log C)` time, `O(C)` space.
