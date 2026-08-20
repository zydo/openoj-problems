# Solutions — Sum of Suffix Match Scores

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
