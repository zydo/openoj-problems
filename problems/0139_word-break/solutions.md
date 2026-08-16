# Solutions — Word Break

## Reachable-Prefix Dynamic Programming

Let `reachable[i]` say whether the prefix `s[0..i)` can be segmented, with `reachable[0] = True` for the empty prefix. Any segmentation of that prefix ends with some last word `s[j..i)`, so `reachable[i]` holds exactly when some earlier `reachable[j]` has that piece in the dictionary; the answer is `reachable[n]`.

The dictionary lives in a hash set, so each membership test costs only the price of building the slice. For each i the inner loop tries every split point j and breaks at the first success, since only feasibility matters. Words are never consumed: the same set entry can back any number of pieces, which is what allows repeated reuse as in "apple pen apple".

The cost is dominated by the O(n^2) (j, i) pairs, each building and hashing a slice of length up to n — worst case cubic in n, which the constraint n ≤ 300 keeps to a few million character operations, and the early break plus short dictionary words make it far smaller in practice. Space is the DP array plus the word set: O(n) plus O(W) for W dictionary words of at most 20 characters each.

**Complexity:** `O(n^3)` time, `O(n + W)` space.
