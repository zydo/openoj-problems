# Solutions — Sum of Suffix Match Scores

Both methods score the suffix starting at position `i` by how far it agrees
with the front of `s` — that agreement length is the Z-array entry `z[i]`,
with the convention `z[0] = n` for the whole-string suffix, and the answer is
the sum of the array. The hashing route never builds the array: it asks each
suffix one monotone question per bisection step — do these `L` characters
equal the first `L`? — and a pair of rolling hashes prices every question in
constant time. The Z-function pass earns the whole array in one sweep
instead, proving each character comparison once and reusing every match it
has already certified.

## Double-Hash LCPs with Per-Suffix Binary Search

The score of the suffix at `i` is the largest `L` with `s[i..i+L)` equal to
`s[0..L)`. Agreement for `L` characters implies agreement at every shorter
length — break the agreement at some character and every shorter window is
unaffected — so feasibility is monotone in `L`, and a binary search over
`[0, n - i]` locates each suffix's score with `O(log n)` probes instead of a
character-by-character crawl.

Each probe is substring equality, which rolling hashes answer from tables:
the hash of `s[0..L)` is the prefix-hash entry `pre[L]` outright, and the
hash of `s[i..i+L)` is `pre[i+L] - pre[i] * BASE^L`, normalized into range.
The tables are maintained under two independent moduli, `10^9+7` and
`10^9+9`, over a fixed base of 26 — deterministic constants, no randomized
choices anywhere. A window is accepted exactly when both moduli agree; a
coincidental double match is a collision, roughly one chance in `10^18` per
probe, so a wrong score anywhere across the `n log n` probes is vanishingly
unlikely. The fixed-width languages run the arithmetic in 64 bits
throughout; JavaScript and TypeScript split each multiply into 16-bit halves
so no intermediate exceeds `2^53`, where double arithmetic is still exact.

For `s = "xhyxhx"`: the suffix at position 3 bisects to `L = 2` (`"xh"`
matches the front), the suffix at position 5 to `L = 1`, the rest to 0, and
`s` itself scores 6 — the total 9 of the statement's second example. The
`n == 0` guard only keeps the allocations sane; the constraints promise
`n >= 1`.

**Complexity:** `O(n log n)` time, `O(n)` space, exact except for a
~1-in-`10^18`-per-probe double-hash collision.

## Z-function in one pass

The score of the suffix starting at position `i` is, by definition, the
length of the longest prefix of `s` that reappears starting at `i` — the
Z-array entry `z[i]`, with the convention `z[0] = n` for the whole-string
suffix, since a string matches itself entirely. Summing the scores of all
suffixes is therefore summing the Z-array, and the only work is computing
it.

The pass keeps the rightmost match window `[left, right)` seen so far.
When position `i` falls inside it, the already-known `z[i - left]` — the
mirror position inside the window — is a lower bound on `z[i]`, capped at
`right - i` so the borrowed claim never runs past verified characters;
outside the window the count starts at 0. From that starting point a
direct comparison loop extends the match as far as it truly goes, and the
window advances whenever `i + z[i]` pushes its right end outward. Every
successful comparison moves `right` forward and `right` never retreats, so
the total comparison work over the whole pass is linear.

For `s = "xhyxhx"`: `z` comes out as `[6, 0, 0, 2, 0, 1]`, summing to 9 —
the entries at positions 3, 5, and 0 are exactly the scores quoted in the
statement's second example. The `n == 0` guard only keeps the allocations
sane; the constraints promise `n >= 1`.

**Complexity:** `O(n)` time, `O(n)` space.
