# Solutions — Longest Even-Vowel Substring

## Prefix XOR of vowel parity

Only parity matters, and five parities fit in five bits: assign `a, e, i, o, u`
the weights 1, 2, 4, 8, 16 and let `mask` be the XOR of the weights of the
vowels read so far — consonants are ignored, and repeating a vowel flips its
bit back. Then for cut points `l < r`, the stretch `s[l + 1..r]` has every
vowel an even number of times exactly when `mask[l] == mask[r]`: the two states
cancel on every bit, which is precisely the claim that each vowel entered the
stretch an even number of times. For instance, in `"quietperiod"` the parity
state just before `"ietperi"` equals the state at its right edge, because the
window adds `i` and `e` twice each.

The longest window therefore connects two equal states as far apart as
possible, so the scan keeps `first`, a 32-entry table holding the earliest
index at which each mask value has occurred (`-2` marks "unseen"). Position
`-1` is pre-registered for mask 0 — the empty prefix — which lets a window
starting at index 0 compete. At each index `i` the mask is updated, and either
`i - first[mask]` improves the answer or the index is recorded as that mask's
first sighting. Only the first sighting is ever useful: any later repeat of
the same mask would give a shorter reach.

Two boundary behaviors fall out without special cases. With `"aeio"` no mask
ever repeats, so the answer stays 0 — the empty window. With `"lemonmelon"`
mask 0 recurs at the final index, and `first[0] = -1` recovers the whole
string's length.

The table has a fixed 32 slots regardless of input size, and each letter costs
constant work.

**Complexity:** `O(n)` time, `O(1)` space (32-entry table).
