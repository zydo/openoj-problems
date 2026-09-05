# Solutions — Spelling The String From The Dictionary

Both approaches fill the same prefix-reachability table: `reachable[i]`
says whether the first `i` characters of `s` spell out of the dictionary,
the empty prefix is free, and the last entry is the answer. The bottom-up
DP settles one position at a time by asking which dictionary words could
end there — the distinct word lengths bound the candidate list, and a
hash set answers each candidate with one slice comparison. The trie walk
turns the question inside out: instead of naming candidate words and
testing them, it follows `s`'s own characters down a prefix tree of the
dictionary from every reachable position, so a walk dies at the first
character no remaining word shares, and each word end it crosses marks
the prefix after it reachable.

## Bottom-up DP over prefix reachability

Spelling `s` decomposes along its prefixes: `s` spells out of the dictionary exactly when some word ends at the last position and everything before that word also splits. So `reachable[i]` records whether the first `i` characters spell out of the dictionary; `reachable[0]` is true because the empty prefix costs nothing, and `reachable[n]` is the answer. Each position is settled once, so the overlapping spellings that make plain recursion exponential — every way of splitting a run of `"hop"`s re-derives the same suffixes — collapse into one table pass, and reused words need no bookkeeping: `"hophophop"` simply reads `"hop"` out of the set at all three of its positions.

To decide position `i`, the code asks which dictionary words could end there. A hash set of `dictionary` answers membership, and iterating only the _distinct word lengths_ — at most 20 under the constraints — keeps the inner loop small no matter how large the dictionary grows: for each length `L` with `reachable[i - L]` set, one slice comparison tests whether `s[i-L:i]` is a word, and the first hit marks `reachable[i]`. Lengths are scanned in ascending order so the loop stops as soon as `L` exceeds `i`. `"railroadcar"` fails exactly here: no dictionary word ends the string — the trailing `"car"` is missing from `dictionary`, so `reachable[11]` never gets set.

**Complexity:** `O(n · D · L)` time with `n = |s|`, `D ≤ 20` distinct word lengths and `L ≤ 20` the longest word — at most about 120,000 character comparisons at the constraint ceiling — and `O(n)` space beyond the word set.

## Trie walk over the dictionary

The DP pays for every word that could end at a position, even when the
word's first letter has already ruled it out. A trie lets the dictionary
do that ruling itself: all the words share one prefix tree, each node
owning children keyed by letter plus a flag on every node where a word
ends. Building it is one root-to-leaf insertion per word — walk the
word's letters from the root, creating missing children as they appear,
and set the flag on the final node.

The reachability sweep is then a walk per reachable position. Reading
`s` left to right, each position already marked reachable starts at the
root and consumes `s[i], s[i+1], ...` while the current node has a
matching child, stopping at the first character no remaining word
shares; because a walk only ever marks positions after its own start,
one pass settles every position. No candidate list is enumerated and no
slices are cut — a dead branch costs a single lookup. `"hophophop"`
repeats the same three-node `h-o-p` descent from each of its reachable
positions, and the walk from position 8 of `"railroadcar"` follows `c`,
`a`, `r` down `"carrot"`'s spine and then runs out of string, so no
terminal is crossed, `reachable[11]` is never set, and the answer is
false.

**Complexity:** `O(T + n · L)` time with `T` the dictionary's total
letters and `L ≤ 20` the longest word — one insert per letter builds the
trie and every reachable position walks at most `L` single-character
steps — and `O(T)` space for the trie plus `O(n)` for the table.
