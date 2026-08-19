# Solutions — Keep Every Cycle Even

## DSU with Parity

The demand "every cycle totals an even weight" is really a labeling question.
Picture a bit on each node: a link of weight `w` insists its endpoints' bits
differ by exactly `w` mod 2, so a `0` ties equal labels and a `1` ties
opposite ones. Such a labeling exists precisely when every cycle is even —
equivalently, when any two walks between the same pair of nodes carry the same
XOR of weights.

The structure maintained is a disjoint-set union in which `par[x]` holds the
XOR of weights from `x` up to its set-forest parent. `find(x)` reports the
root together with the accumulated XOR to it, compressing on the way out by
folding those accumulated values into `par`. The invariant: within one
component, that accumulated XOR equals the parity of every walk between the
two nodes — so path parity is well defined at all times.

Each offer `[u, v, w]` is then judged in near-constant time. Shared root: the
offer would close exactly one new cycle of total `xu ^ xv ^ w`, and it is
accepted precisely when that is zero — when the standing path parity `xu ^ xv`
already equals `w`. Different roots: the offer joins two components and makes
no cycle, so it is always accepted, the trees are linked by rank, and the new
parent link receives parity `xu ^ xv ^ w` to keep the invariant whole.

Accepted links inside a component never disturb any path parity — they append
redundant even cycles — so judging the single new cycle suffices; earlier
cycles were even already, by induction. Union by rank plus path compression
holds each offer to amortized inverse-Ackermann cost.

**Complexity:** `O(E * alpha(N))` time, `O(N)` space.
