# Solutions — Two Conflict-Free Groups

Two routes to the same decision: paint the people with two colours and watch
for a contradiction, or forget the colours and only track who is obliged to
end up together.

## dfs_color

The badges are a 2-colouring of the graph whose vertices are people and whose
edges are the listed clashes, so the answer is `true` exactly when that graph
is bipartite. Building an adjacency list is the first step — a clash binds
both people, so each entry is stored in both directions.

From there the colouring is deterministic. Take any person with no colour yet,
assign one arbitrarily, and push them onto a stack. Popping a person, each
neighbour either has no colour — in which case it takes the negation of the
current one and is pushed, marked at push time so it can never enter the stack
twice — or already has one. An already-coloured neighbour matching the popped
person's colour is a contradiction that no relabelling can repair: it closes a
cycle of odd length, and the traversal returns `false` on the spot. A
component that drains without such a clash has been coloured legally, and its
two colours are the two badges.

Nothing guarantees the graph is connected, and people who clash with nobody
sit alone, so the sweep restarts from every uncoloured person in `1..n`.
Because the constraints give `a < b` inside each entry, nobody clashes with
themselves, which would be unsatisfiable on its own.

**Complexity:** `O(n + e)` time, `O(n + e)` space, for `e` listed clashes.

## union_find

The colours are not really needed. What matters is the _must share a badge_
relation, and it follows from one observation: everyone a given person clashes
with is pushed to the other side of that person, so they all land together.
Build the same adjacency list, then for each person merge that person's entire
neighbour list into a single component, joining each neighbour to the first
one.

A disjoint-set forest records these obligations without naming any group. When
the input is satisfiable the merging produces sets that never straddle a
listed clash; when it is not, transitivity drags the two ends of some clash
into one set. So the verdict is read afterwards: walk the entries once and
return `false` at the first `[a, b]` whose roots coincide, `true` if none do.
Path halving during `find` — pointing every second node at its grandparent on
the way up — keeps the trees shallow without a second pass.

**Complexity:** `O(n + e·α(n))` time, `O(n + e)` space, with `α` the inverse
Ackermann function.
