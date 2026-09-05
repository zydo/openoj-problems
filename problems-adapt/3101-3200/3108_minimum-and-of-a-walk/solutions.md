# Solutions — Minimum AND of a Walk

## Union-find with a per-component AND

Repetition is the whole trick. A walk may cross any edge as often as it
likes, and AND-ing another weight into the total can only clear bits, so
the cheapest walk between two reachable vertices sweeps in **every** edge
of their component: detours are free in the sense that they only ever
lower the total, and once the whole component has been collected, the
final approach to the target re-ANDs weights already counted. The minimum
cost between two connected vertices is therefore the AND of all edge
weights of their shared component; when no walk exists, `-1` answers.

Group the vertices with union-find (path halving in `find`, union by
size, so each lookup runs in near-constant time). A second sweep over
`edges` then ANDs each weight into an accumulator keyed by its
component's root. A vertex with no edges forms a trivial component and
gets no accumulator entry — but such a vertex can only be queried against
a different root, so the missing entry never reaches the output.

Each query costs two `find` calls: differing roots return `-1`, and a
shared root returns the component's AND, which is `0` the moment any
component edge misses a bit somewhere (an explicit weight-0 edge most of
all). Example 1's walk crosses 9, 10, 10, 12 on its way from 0 to 3 and
lands on the component AND `9 & 10 & 12 = 8`; Example 2's parallel pair
already cancels to `2 & 5 & 2 = 0` without touching the triangle's third
side.

**Complexity:** `O((n + E + Q) * alpha(n))` time, `O(n)` space.
