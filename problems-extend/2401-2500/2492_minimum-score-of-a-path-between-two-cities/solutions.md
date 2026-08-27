# Solutions — Minimum Score of a Path Between Two Cities

The score of a path is the minimum road distance on it, and a path may
reuse roads and revisit cities. That freedom collapses the problem to a
single connected-component question.

## Minimum edge inside city 1's component

Because any road can be traversed repeatedly, every road in the
connected component that contains city 1 can be incorporated into a
valid path: travel from 1 to one endpoint, cross the road, and return
along the same route — the reused edges only ever contribute a score of
their own minimum, which cannot hurt. The best possible score is
therefore the smallest distance among all roads whose two endpoints lie
in city 1's component (the constraint that a path from 1 to n exists
puts n in that same component). The score of the path itself is
unaffected by the detour edges used to reach a candidate road, so the
minimum over the component is achievable and clearly a lower bound.

Union-Find realizes this directly: union the endpoints of every road,
then locate the root of city 1 and scan the roads once, keeping the
smallest distance among those that stay inside that root's component.
Both the union pass and the final scan are linear in the number of
roads, with the disjoint-set operations near-inverse-Ackermann amortized.

**Complexity:** `O(m · α(n))` time, `O(n)` space, where `n` is the
number of cities and `m` the number of roads.
