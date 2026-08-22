# Solutions — Longest Forbidden-Free Substring

Both sweeps rest on the same pin: cleanliness is hereditary, so the longest
clean substring falls to a two-pointer sweep that grows the right end and,
whenever a forbidden string ends there, hops the left end past that string's
first character. The window variant finds each such occurrence by force,
probing a hash set with the up-to-`L` suffixes that end at the right end. The
automaton compiles the forbidden strings once into an Aho-Corasick machine
whose state after each character is the longest suffix of the text that
prefixes a forbidden string, so the occurrence search collapses to one hop
per character.

## Sliding Window with a Forbidden Set

Cleanliness is hereditary: cut a clean stretch anywhere and both halves stay
clean. That makes the longest clean substring a two-pointer question — grow the
right end one character at a time and, whenever a forbidden string now ends
there, hop the left end beyond that occurrence's first character. Since each
forbidden string spans at most `L = 10` characters, only the last `L` suffixes
ending at the right end can possibly be forbidden, and a hash set of the
forbidden strings tests each of them in time proportional to its length.

For each new right end the code tries those suffixes from shortest to longest
and jumps at the first hit. Preferring the shortest match is deliberate: it is
the one starting latest, and moving the left end just past it gives the widest
start position that still excludes every occurrence — a longer match reaching
further left could not fit inside the window anyway. Occurrences that ended
earlier were dealt with when their own right ends passed, and the left end
never travels backward.

![The sweep over "zababars": "za" and two "aba" occurrences push the left end
forward, and the final clean window is "abrs" of length 4.](figures/solution-sliding-window.svg)

For `"zababars"` with `["za","aba"]`, the left end hops to 1 after `"za"`, to 2
after the first `"aba"`, and to 4 after the second; from there the window
grows to `"abrs"` before the string ends.

After each hop the candidate `right - left + 1` updates the answer. With `F`
forbidden strings of length at most `L`, the sweep performs at most `L` set
probes, each over at most `L` characters, per position.

**Complexity:** `O(n·L²)` time, `O(F·L)` space.

## Aho-Corasick Longest-Match Scan

The forbidden strings are fixed before the scan begins, so they can be
compiled once into an Aho-Corasick automaton: a trie of the forbidden strings
whose failure links connect each node to the longest proper suffix of its
path that is also a trie path. The code keeps the trie's children in a single
map keyed by node and character, so the automaton costs one entry per trie
edge — its size tracks the forbidden text, not the alphabet. A breadth-first
pass over depth buckets wires the links; as it goes, every node folds in its
failure chain to learn the length of the shortest forbidden string ending
exactly there.

The scan then replays the two-pointer sweep with the per-position search
gone. Each character advances the state along the trie, falling back along
failure links when no child matches; the text pointer never retreats, and
since one character deepens the state by at most one while every fallback
shallows it, the fallbacks amortize to constant work per position. The
shortest forbidden string ending at the current right end is exactly the
latest-starting occurrence — the one the window variant's inner loop finds —
so hopping the left end past its first character performs the identical
jumps.

For `"zababars"` with `["za","aba"]` the left end hops to 1 after `"za"`, to
2 after the first `"aba"`, and to 4 after the second, just as before — but
each hop now costs one automaton step instead of a probe of the last `L`
suffixes.

Building the automaton touches each forbidden character once and the scan
touches each character of `word` once, with expected-constant map operations
throughout, so the window variant's `L`-squared probing term is gone.

**Complexity:** `O(n + F·L)` time, `O(F·L)` space.
