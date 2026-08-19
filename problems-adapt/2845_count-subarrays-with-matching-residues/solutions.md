# Solutions — Count Subarrays with Matching Residues

## Prefix Counts with a Hash Map

Start by collapsing the array to an indicator: whether `nums[i] % modulo == k`
is the only fact any subarray's fate depends on. A run qualifies when the
indicators inside it sum to `k` modulo `modulo`, so the task becomes counting
runs whose indicator sum has one fixed residue — the familiar prefix-counting
pattern, applied to residues rather than raw sums.

Let `pref` be the hits among the first `i` positions. A right endpoint at `i`
pairs with every earlier boundary `l` for which
`pref[right] - pref[l] ≡ k (mod modulo)`, i.e. `pref[l]` must sit at residue
`(pref[right] - k) mod modulo`. The sweep keeps a hash map from residue to
how many prefixes seen so far have it: at each element, update `pref`, add
`count[(pref - k) mod modulo]` to the answer, and only then increment
`count[pref mod modulo]`. Seeding the map with residue `0` once stands in for
the empty prefix, which is what makes runs starting at index 0 and whole-array
runs count correctly.

Two details deserve care. The language's `%` must produce a non-negative
residue or the lookups disagree with the arithmetic — Python's already does.
And the map holds at most `min(n, modulo)` distinct residues, frequently far
fewer, since `modulo` may dwarf the array; the sweep stays linear either way.

**Complexity:** `O(n)` time, `O(min(n, modulo))` space.
