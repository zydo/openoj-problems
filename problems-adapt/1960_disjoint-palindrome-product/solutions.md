# Solutions — Disjoint Palindrome Product

## Per-Center Radii, Then a Cut Sweep

One palindrome sits entirely before the other, so a boundary between adjacent
positions always separates them: the left pick lives in the prefix, the right
pick in the suffix. If `L[i]` is the length of the longest odd palindrome
contained in `s[0..i]` and `R[i]` the longest in `s[i..n-1]`, the answer is
the largest `L[i] * R[i+1]` over all boundaries. The whole problem is
computing those two arrays.

Manacher's algorithm supplies the raw material in one pass: for each center
`c`, the radius `d1[c]` of the longest odd palindrome around `c`. Recording,
per index, the longest palindrome that *ends* there and the longest that
*starts* there is a direct transcription of those radii. The subtle step is
propagation: a palindrome of length `m` ending at index `e` implies one of
length `m - 2` ending at `e - 1` (drop the outermost pair; the center is
unchanged and the length stays odd), so a right-to-left sweep of
subtractions spreads reach leftward, and the mirrored sweep spreads
start-reach rightward. Running maxima then collapse the per-index values
into `L` and `R`. In `"ababab"`, center 1 gives `"aba"` ending at index 2 and
center 3 gives `"bab"` ending at 5; the boundary between indices 2 and 3
prices at 3 · 3 = 9, and the boundary inside `"ababa"`'s span prices at 5 · 1,
which is why the shorter pair wins.

Any lone letter is an odd palindrome of length 1, so `L` and `R` hold at
least 1 everywhere and every boundary yields a valid product — small inputs
like `"aa"` need no special casing beyond looping the boundaries from 0 to
`n - 2`. Each phase — radii, the two propagation sweeps, the running maxima,
the final product sweep — is linear.

**Complexity:** `O(n)` time, `O(n)` space.
