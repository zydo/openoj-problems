# Solutions — Word Break

## Bottom-up DP over prefix reachability

Segmenting `s` decomposes along its prefixes: `s` splits into dictionary words exactly when some word ends at the last position and everything before that word also splits. So `reachable[i]` records whether the first `i` characters form a sequence of dictionary words; `reachable[0]` is true because the empty prefix costs nothing, and `reachable[n]` is the answer. Each position is settled once, so the overlapping segmentations that make plain recursion exponential — every way of splitting a run of `"a"` into `"a"` and `"aa"` re-derives the same suffixes — collapse into one table pass, and reused words need no bookkeeping: `"applepenapple"` simply reads `"apple"` out of the set at both of its positions.

To decide position `i`, the code asks which dictionary words could end there. A hash set of the words answers membership, and iterating only the *distinct word lengths* — at most 20 under the constraints — keeps the inner loop small no matter how large the dictionary grows: for each length `L` with `reachable[i - L]` set, one slice comparison tests whether `s[i-L:i]` is a word, and the first hit marks `reachable[i]`. Lengths are scanned in ascending order so the loop stops as soon as `L` exceeds `i`. `"catsandog"` fails exactly here: `"dog"` ends the string, but it needs the prefix `"catsan"` to be reachable, and no dictionary word lands there.

**Complexity:** `O(n · D · L)` time with `n = |s|`, `D ≤ 20` distinct word lengths and `L ≤ 20` the longest word — at most about 120,000 character comparisons at the constraint ceiling — and `O(n)` space beyond the word set.
