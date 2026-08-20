# Solutions — Conflicting Ratios

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
