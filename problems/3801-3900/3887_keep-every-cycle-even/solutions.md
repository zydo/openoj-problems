# Solutions — Keep Every Cycle Even

Both methods weigh each offer against the same fact: the link is safe exactly
when the parity of the path already standing between its endpoints matches the
offer's weight. They differ in where that parity is kept. The 2-coloring pins
it on the nodes themselves — one absolute bit per node, reconciled at every
merge by recoloring the smaller side — so an offer inside a component is
decided by two array reads. The parity DSU keeps the parity relative instead,
folded into the parent links of the forest, and reads it out with two finds
that never touch a component's members.

## Small-to-Large 2-Coloring

Here the labeling is kept literally: every node carries an absolute bit
`color[x]`, and a disjoint-set forest — path halving, union by size — does
nothing but membership. The invariant is that inside one component every
accepted edge `[u, v, w]` satisfies `color[u] ^ color[v] == w`. XOR-ing that
relation along the edges of any walk cancels the intermediate colors, so the
parity of each standing path equals the color difference of its endpoints —
which makes an offer between two same-component nodes a constant-time verdict:
take it exactly when `color[u] ^ color[v] == w`.

An offer whose endpoints lie in different components closes no cycle and is
always taken, but the merge must reconcile the two colorings first. When
`color[u] ^ color[v]` already equals `w` they agree as they stand; otherwise
one side must invert. Flipping either component repairs the demand: a uniform
flip leaves every relation inside the flipped component alone — both endpoints
of each internal edge move, so their XOR stands still — while toggling the
relation to the other side, which is exactly what the mismatch asked for. So
the code walks the smaller component's member list and flips each bit, then
links that root under the larger.

The small side is the whole budget. A node is recolored only when its
component is the smaller party to a merge, and that merge at least doubles the
component the node then belongs to, so each bit flips at most `log2 N` times —
`O(N log N)` recoloring in total, and the member lists, concatenated
small-into-large, cost the same. Judging stays a single sequential pass in the
statement's order: a refusal touches nothing, and every verdict reads the
state the earlier offers left behind.

**Complexity:** `O((N + E) log N)` time, `O(N)` space.

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
