# Solutions — Cheapest Letter Rewrites

## Floyd–Warshall on the 26-letter price graph

Each rule is a directed edge priced by its cost, drawn between two of the 26
letters; rewriting the same position over and over is exactly walking a path
through those edges. So the cheapest way to turn letter `a` into letter `b` is
the shortest `a -> b` path, and where several rules cover one pair the smallest
price is simply the winning edge weight.

26 nodes means 26³ relaxation steps — effectively free — which buys all 676
pairwise prices up front. Initialize the table with zeros on the diagonal and
infinities elsewhere, fold in each rule as `dist[a][b] = min(dist[a][b], w)`,
then relax every pair through each letter in turn. The code uses Python's
`float("inf")` as the unreachable sentinel: it is the only non-integer in the
table, so an exact equality test distinguishes "no path" from any real price.

The finishing pass zips `source` and `target`. Equal letters are skipped at no
charge; every other position adds its table entry, and one infinite entry is
enough to answer -1. In the first example, `peck -> puck`, the e-to-u entry
comes out as 5 — the two-edge route `e -> o -> u` undercuts the direct rule
priced at 8 — while for `dodo -> nono` the same entry type is charged once per
occurrence, which is why the answer doubles to 14.

**Complexity:** `O(26^3 + n)` time, `O(26^2)` space.
