# Solutions — Longest Uniform Run After One Swap

## Run-Length Encoding

One swap can improve a uniform run in exactly two ways, and a run-length
encoding of `text` exposes both. A lone run of some character `ch` may be
stretched by one — a `ch` swapped in from anywhere else — or two runs of the
same character with exactly one alien character between them may be glued,
the swap replacing that separator with a `ch` borrowed from elsewhere.
Evaluate both candidates for every character and take the maximum.

First pass: build `runs`, the run-length encoding, together with a `Counter`
of overall character frequencies. Each run contributes a stretch candidate
`min(length + 1, counts[ch])`: the run can absorb one swapped-in character,
but only if a spare `ch` actually exists beyond the run, hence the cap at
the total count. For `"bbbbc"` the b-run would love a fifth member, yet only
four b's exist, so the candidate is 4 — the run as it stands.

Second pass: for every interior run of length exactly 1 whose neighbours
carry the same character, the merge candidate is `left_len + right_len`,
plus one more when `counts[ch]` exceeds that sum — a spare `ch` outside the
two runs can fill the vacated gap. In `"aabaaca"` the a-runs of length 2 and
2 flank the lone `b`, and the fifth `a` at the end supplies the filler:
2 + 2 + 1 = 5. When the two runs already hold every occurrence, the swap can
still join them but cannot extend further, so no bonus is added.

The all-one-letter string falls out of the stretch branch
(`min(n + 1, n) = n`), so `"hhhhh"` scores 5 with the swap unspent.

**Complexity:** `O(n)` time, `O(n)` space.
