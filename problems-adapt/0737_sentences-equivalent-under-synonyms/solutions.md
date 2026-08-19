# Solutions — Sentences Equivalent Under Synonyms

## Union-Find over Words

Read the declared pairs as edges of an undirected graph whose vertices are the
words. Reflexivity, symmetry and transitivity are precisely what makes "stands
in for" agree with "identical, or joined by some path of edges", so the question
at each position is a connectivity query, and a disjoint-set forest keyed by the
word strings answers all of them. The routine is therefore two linear passes:
merge every declared pair, then walk the aligned positions comparing
representatives.

Unequal word counts are rejected up front — no pairing of positions exists at
all in that case. At a position where the two words are literally the same, no
lookup is needed; otherwise the two representatives have to agree. `find`
enrols a word as its own singleton the first time it is asked about, which
handles words that occur only in the sentences and never in a declared pair:
such a word forms a piece by itself and so can only be matched by a copy of
itself. When `synonyms` is empty the whole structure stays a collection of
singletons and the test collapses to string equality position by position.

Each `find` halves the length of the chain it walks by pointing every second
node at its grandparent, so the forest stays shallow and every operation is
near-constant amortised. Writing `P` for the number of declared pairs, `N` for
the number of positions and `W` for the count of distinct words, the merging
pass is linear in `P` and the comparison pass linear in `N`.

**Complexity:** `O((P + N) α(W))` time, `O(W)` space.
