# Solutions — One-Swap Word Groups

## Union-Find over similar pairs

Start with the pair test, which the anagram guarantee makes cheap. Two entries
hold the same multiset of letters, so the positions where they disagree can
never number exactly one — a lone misplaced letter has nowhere to have come
from. Zero disagreements means the words are equal and the definition already
links them. Exactly two means one exchange, applied at those two positions,
converts one word into the other, provided the letters cross over, which the
anagram property forces. Three or more cannot be repaired by a single exchange,
because an exchange corrects at most two positions. So the test is: walk the
two words together, count disagreements, stop early once a third shows up, and
accept a count of zero or two. That is the `similar` helper in the code.

Grouping is then the connected-components question on the graph whose vertices
are the entries and whose edges are the linked pairs. Building the graph
explicitly is unnecessary: a disjoint-set forest over the indices records
exactly the reachability that matters. Every linked pair found is merged; at
the end, the number of groups is the number of distinct roots, which the code
gathers by mapping `find` over all indices into a set. `find` uses path
halving — each step repoints a node at its grandparent — which flattens the
trees as a side effect of ordinary lookups and keeps the amortised cost near
constant.

Nothing cleverer is needed for the size of the input. At `300` entries the
double loop performs under `45,000` pair tests, each a scan of words at most
`300` letters long that usually stops after the third disagreement. Generating
candidate neighbours instead of testing pairs would only pay off for far longer
lists.

**Complexity:** `O(N^2 · L)` time and `O(N)` space, for `N` entries of length `L`.
