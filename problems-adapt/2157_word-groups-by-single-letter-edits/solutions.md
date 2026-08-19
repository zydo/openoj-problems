# Solutions — Word Groups By Single-Letter Edits

## Union-Find over Letter-Set Bitmasks

With no letter repeated, a word is nothing more than its letter set, and a
letter set is a 26-bit mask. The three moves turn into bit arithmetic: add
or remove sets or clears one bit, and swap clears one set bit while setting
one absent bit. Two words are connected exactly when their masks stand one
move apart, so the groups asked for are the connected components of the
graph over masks — count the components, then take the largest.

Repeated words would multiply nodes without adding edges, so the first pass
counts masks with a `Counter` and lays down one union-find node per
*distinct* mask, seeded with that mask's multiplicity. Duplicates therefore
merge into their component for free, courtesy of the swap-for-itself move —
example 3's two "uv"s — and no bookkeeping for them remains.

Each mask then probes every neighbor it could reach. The 26 single-bit
toggles cover add and remove; the swap move iterates every set bit (cleared
by low-bit extraction) against every absent bit, at most 26·25 probes. Each
probe is a hash-set membership test followed by a union; path halving in
`find` and size accumulation at the root keep the unions nearly constant in
practice. When the sweep ends, the number of distinct roots is the group
count and the biggest size stored at any root is the largest group. Every
distinct mask does at most 26 + 26² probes, so the pass is linear in the
number of words up to that constant factor.

**Complexity:** `O(26² · n · α(n))` time, `O(n)` space.
