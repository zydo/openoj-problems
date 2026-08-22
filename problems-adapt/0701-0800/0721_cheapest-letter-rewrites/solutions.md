# Solutions — Cheapest Letter Rewrites

Both methods rest on the same pin: a rewrite rule is a priced directed edge
between two of the 26 letters, so the cheapest way to turn one letter into
another is a shortest path, and the whole menu can be settled before the
string is ever touched. Dijkstra asks each letter in turn for its prices,
settling one row of the table per source with a heap and paying only for the
rules that exist. Floyd–Warshall relaxes the entire table through every
letter in one fixed cube of work, whatever the menu holds. Either way the
bill that matters is the mandatory scan that zips `source` against `target`,
adding one table entry per differing position.

## Dijkstra from Each of the 26 Letters

Floyd–Warshall's cube never asks how many rules the menu holds; this variant
does. Each rule becomes one directed edge in a 26-node adjacency list —
duplicates included, since the relaxation test keeps whichever copy of a
pair is cheaper — and every letter then runs its own single-source search:
tentative prices start at 0 for the source letter and infinity elsewhere,
and a min-heap always offers the cheapest unsettled letter.

Positive costs are the whole licence for the greed. The smallest tentative
price on the heap is already final — any other route to that letter must
leave through a letter at least as expensive — so each pop settles one
letter for good. Settling a letter relaxes its rules, re-queueing a neighbor
only when the route through it strictly improves the record; heap entries
that went stale before a cheaper route was found are discarded by a
`price > dist` guard, and a letter still at infinity when the heap empties
is genuinely unreachable.

Twenty-six finished runs fill the same 676-entry price table the all-pairs
pass would have, so the finishing scan is unchanged: matching positions are
skipped at no charge, every other position adds its table entry, and one
infinity is enough to answer -1. The prices are the prices, whichever search
produced them — the run from `e` still prices the e-to-u entry of
`peck -> puck` at 5 through `o`, and `dodo -> nono` still charges 7 per `d`.
The trade behind the placement: the menu holds at most 26 · 25 = 650
distinct letter pairs, so the graph always lives in the dense regime where
the heap's log factor buys nothing, and both graph passes are noise beside
the O(n) scan that follows — the fixed cube and the smaller table keep the
last word.

**Complexity:** `O(26 (k + 26) log 26 + n)` time, `O(k + 26^2)` space.

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
