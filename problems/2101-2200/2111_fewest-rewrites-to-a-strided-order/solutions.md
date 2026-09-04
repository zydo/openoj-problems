# Solutions — Fewest Rewrites to a Strided Order

## Longest Non-Decreasing Subsequence per Residue Class

The rule `arr[i-k] <= arr[i]` never compares two indices with different
remainders modulo `k`, so the array falls apart into `k` independent chains —
the entries at indices `start, start+k, start+2k, …`. The whole array is
k-ordered precisely when every chain fails to descend, and rewriting inside
one chain cannot disturb another, so the answer is the sum of the per-chain
minima.

Within one chain, whatever you leave untouched must already be a non-descending
subsequence, so the cheapest plan keeps a longest one (LNDS) and rewrites the
rest: `len(chain) − LNDS(chain)`. Replacement values are arbitrary positive
integers, so a kept subsequence can always be padded into a fully ordered
chain. Example 1 is the k = 1 case: `[6,3,5,2,7]` hides the rising run
`3, 5, 7` of length 3, leaving `5 − 3 = 2` rewrites.

Each LNDS comes from the patience trick: `tails[l]` holds the smallest tail of
any non-descending subsequence of length `l+1`, and every new value replaces
the first tail strictly greater than it. `bisect_right` (not `bisect_left`) is
what lets equal values extend a run rather than replace their twin — the
difference between non-descending and strictly increasing.

Chains partition the array, so their lengths sum to `n`, and the binary-search
insertion costs `O(log)` per element.

**Complexity:** `O(n log n)` time, `O(n)` space.
