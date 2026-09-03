# Solutions — Spelling The String From The Dictionary

## Bottom-up DP over prefix reachability

Spelling `s` decomposes along its prefixes: `s` spells out of the dictionary exactly when some word ends at the last position and everything before that word also splits. So `reachable[i]` records whether the first `i` characters spell out of the dictionary; `reachable[0]` is true because the empty prefix costs nothing, and `reachable[n]` is the answer. Each position is settled once, so the overlapping spellings that make plain recursion exponential — every way of splitting a run of `"hop"`s re-derives the same suffixes — collapse into one table pass, and reused words need no bookkeeping: `"hophophop"` simply reads `"hop"` out of the set at all three of its positions.

To decide position `i`, the code asks which dictionary words could end there. A hash set of `dictionary` answers membership, and iterating only the _distinct word lengths_ — at most 20 under the constraints — keeps the inner loop small no matter how large the dictionary grows: for each length `L` with `reachable[i - L]` set, one slice comparison tests whether `s[i-L:i]` is a word, and the first hit marks `reachable[i]`. Lengths are scanned in ascending order so the loop stops as soon as `L` exceeds `i`. `"railroadcar"` fails exactly here: no dictionary word ends the string — the trailing `"car"` is missing from `dictionary`, so `reachable[11]` never gets set.

**Complexity:** `O(n · D · L)` time with `n = |s|`, `D ≤ 20` distinct word lengths and `L ≤ 20` the longest word — at most about 120,000 character comparisons at the constraint ceiling — and `O(n)` space beyond the word set.
