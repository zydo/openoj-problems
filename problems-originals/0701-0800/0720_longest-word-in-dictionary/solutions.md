# Solutions — Longest Word in Dictionary

Buildability is recursive: a word can be built one character at a time exactly
when the word minus its last character can be, bottoming out at a lone letter,
which carries the empty prefix and needs nothing. That recursion has a
direction — always toward a lexicographically smaller word — so sorting the
dictionary first turns the definition into a single forward sweep, and the
selection rule (longest, ties to the smallest lexicographical order) is the
order the sweep already walks.

## Sort, then Sweep a Buildable Set

Sort `words` into lexicographic order and walk it once, carrying a hash set of
the words proven buildable so far. Any word minus its last character is
strictly smaller than the word itself, so when the sweep reaches a word its
stem has already been visited if the dictionary holds it at all: the stem is
buildable exactly when it sits in the set, and absent when it does not. A
length-1 word needs no stem and enters the set outright. Duplicates cost
nothing — the second copy finds the first already in the set.

The best-answer bookkeeping needs no comparison at all. The sweep replaces
`best` only on a strictly greater length, so among the equally long candidates
the one seen first survives — and first-seen in sorted order is precisely the
lexicographically smallest, the statement's tie rule. When no word ever enters
the set (every word starts life at length 2 or more with no letters beneath
it), `best` stays the empty string it started as, which is exactly the
statement's no-answer return.

**Complexity:** `O(n log n · L)` time, `O(n · L)` space.
