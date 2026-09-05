# Solutions — Conflicting Ratios

Both readings turn the constraints into one weighted graph — names as
vertices, each `x / y = r` an edge — and ask the same question of it: do
the weights around every cycle multiply to 1? The BFS labelling settles
each component separately: flood outward from an arbitrary root, let
every name's ratio-to-root fall out of the walk, then hold each
constraint against the labels it touches. The weighted union-find never
separates the two jobs: its single pass attaches what is new and, the
moment a constraint lands between names it already links, compares it
against the ratio those names have been forced into.

## Per-component BFS ratio propagation

Names become vertices, and each constraint `x / y = r` an edge kept in
both directions: `x`'s adjacency gains `(y, 1 / r)`, `y`'s gains
`(x, r)`, so every entry carries the factor neighbor-over-name. A
component the constraints leave consistent admits a full assignment of
values, and fixing one name as the root — value 1 — pins down all the
rest: `v / root` is the product of factors along _any_ path, because
with every cycle multiplying to 1 the route cannot matter. The code
computes exactly that labelling: a plain queue seeded with an unvisited
root carrying `1.0`, spreading ratios breadth-first, each dequeue
labelling the neighbours still at zero.

Labels in hand, every constraint is held against them. An edge demanding
`a / b = r` meets the verdict `ratio[a] / ratio[b]`, the ratio the
labelling forced between its two names; `abs(ratio[a] / ratio[b] - r)`
past the `10^-5` tolerance means the edge closes a cycle whose product
misses 1, and the answer is `true`. The edges the flood itself walked
cannot fail — their factors set the labels, so the division hands `r`
straight back — leaving the closing edges as the only ones ever judged.
Each constraint is checked on its own, so the same pair put twice with
two different ratios is judged twice.

Doubles are enough: with at most a hundred factors in any label, the
corpus keeps the products within `10^±100` — far inside double range —
while the epsilon absorbs what rounding remains. Names seen in only one
constraint need no special casing, and a constraint like `w / w = 4` is
caught without effort: both endpoints share one label, leaving the check
`abs(1 - 4) > 10^-5`.

**Complexity:** `O(V + E)` time, `O(V)` space, for `E` constraints over
`V` distinct names.

## Weighted union-find with ratio checking

Names become vertices, and each constraint `x / y = r` becomes a
weighted edge. The whole set of constraints can hold simultaneously
exactly when the ratio between any two names is pinned down uniquely by
everything seen so far — a cycle whose weights multiply to something
other than 1 is a clash. A weighted union-find serves this directly: for
each name `x` it keeps the representative `parent[x]` and the factor
`weight[x] = x / parent[x]`, so two names of one component stand in
ratio `weight[a] / weight[b]`. Compression multiplies factors along the
way until every node points at its root.

Walk the constraints in order. For `a / b = r`, locate both roots along
with the accumulated factors `wa` and `wb`. Different roots mean the
constraint is new information: attach `root_a` under `root_b` with
`weight[root_a] = wb * r / wa`, the one setting that agrees with the
factors already stored. Matching roots mean the constraint repeats
something already determined — it demands `a / b = wa / wb`, so if
`abs(wa / wb - r)` drifts past the `10^-5` tolerance the answer is
`true`. Survive every constraint and return `false`.

Doubles are safe because the data steers clear of precision traps and
the epsilon absorbs what rounding remains. The `find` helper lazily
creates singleton entries, so names seen only once need no special
casing — and a constraint like `w / w = 4` is caught without effort,
since both finds return the same root with `wa == wb`, leaving the check
`abs(1 - 4) > 10^-5`.

**Complexity:** `O(E α(V))` time and `O(V)` space, for `E` constraints
over `V` distinct names.
