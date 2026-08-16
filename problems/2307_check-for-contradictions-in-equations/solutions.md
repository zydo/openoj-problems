# Solutions — Check for Contradictions in Equations

## Weighted Union-Find with Ratio Checking

Model each variable as a node and each equation `a / b = w` as a weighted edge. The system is consistent exactly when the ratio between any two variables is uniquely determined by the equations seen so far. A weighted union-find maintains, for every variable `x`, its representative `parent[x]` and `weight[x] = x / parent[x]`, so the ratio of two variables in the same component is `weight[a] / weight[b]`. Path compression multiplies the weights along the way so each node's weight is updated to point directly at the root.

Process the equations in order. For `a / b = w`, find both roots together with the accumulated ratios `wa` and `wb`. If the roots differ, merge the components by attaching `root_a` under `root_b` with `weight[root_a] = wb * w / wa` — the unique value that makes the new edge consistent with the existing ratios. If the roots already coincide, the equation imposes a check rather than new information: it demands `a / b = wa / wb`, so when `abs(wa / wb - w)` exceeds the tolerance `10^-5` the equations contradict each other and the answer is `true`. If no equation ever fails the check, return `false`.

Floating-point arithmetic is safe here because the test data avoids precision traps, and the `10^-5` epsilon absorbs rounding noise. The `find` helper lazily creates singleton entries for unseen variables, so variables appearing only once are handled without special casing, and a self-loop like `a / a = v != 1` is caught naturally since both finds return the same root with `wa == wb`.

**Complexity:** `O(E α(V))` time, `O(V)` space, where `E` is the number of equations and `V` the number of distinct variables.
