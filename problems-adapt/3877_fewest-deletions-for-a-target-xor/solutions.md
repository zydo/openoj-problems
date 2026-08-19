# Solutions — Fewest Deletions for a Target XOR

## DP over Reachable XOR Values

Erasing entries chooses a survivor set, so the task reframes: among all sets
whose XOR is `target`, find one with the most entries — the deletions are
then whatever the array holds beyond it. The code carries a dictionary `dp`
keyed by every subset-XOR value reachable so far, each mapped to the largest
number of entries attaining it; it opens at `{0: 0}`, the empty set.

Each entry `x` is folded in by walking the current map: retaining `x` carries
a state `xor_val` to `xor_val ^ x` and raises its count by one, while passing
over `x` changes nothing — the map is cloned first so both futures coexist,
and whenever a value reappears the larger count wins. When the fold ends,
`target` either sits in the map, and the answer is `len(nums) - dp[target]`,
or it does not, and the answer is `-1`.

The map cannot explode. Forty entries span `2^40` subsets, but every value is
at most `10^4 < 2^14`, so XOR results occupy 14 bits and the dictionary holds
no more than `V <= 2^14` keys, `V` being the count of distinct reachable
values — the exponential family collapses into its XOR classes. The hint's
algebra (the deleted set's XOR is pinned to `total ^ target`) is exactly what
the count-maximization encodes implicitly.

Boundaries come free with the mechanism: the empty set pins `dp[0] = 0`, so
`target = 0` is always reachable by wiping the array, and `target` equal to
the full XOR costs nothing — `[7, 7]` with `target = 0` keeps both entries
because the pair cancels.

**Complexity:** `O(n * V)` time, `O(V)` space.
