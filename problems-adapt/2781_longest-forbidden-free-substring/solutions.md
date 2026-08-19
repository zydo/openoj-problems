# Solutions — Longest Forbidden-Free Substring

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
