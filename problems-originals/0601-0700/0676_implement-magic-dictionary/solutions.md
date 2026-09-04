# Solutions — Implement Magic Dictionary

## Length-Bucketed Mismatch Scan

`buildDict` groups the words by length into a map of buckets, replacing any
dictionary set earlier — a second call speaks only for itself, so `search`
never sees stale words. Grouping by length is the whole index: a word of a
different length cannot be reached by changing characters, so `search` starts
from the search word's length and looks nowhere else.

`search` walks that one bucket and, for each candidate, counts the positions
where candidate and search word disagree, abandoning the candidate as soon as
the count passes one. A candidate with exactly one differing position is
reachable by changing exactly that character, so the answer is true; matching
with zero changes never counts, because the word was not changed at all — the
rule demands exactly one. That is also why a search word taken verbatim from
the dictionary still returns true when some other word sits one change away:
the change is judged against every word, not just the one that already
matches.

Since a search only touches same-length words, each comparison runs over
identical lengths and the early exit caps the work per candidate at two
mismatches.

**Complexity:** `O(Σᵢ |dictionary[i]|)` per `buildDict`; `O(L · k)` per
`search`, with `L` the search word's length and `k` the number of stored words
of that length; `O(Σᵢ |dictionary[i]|)` space.
