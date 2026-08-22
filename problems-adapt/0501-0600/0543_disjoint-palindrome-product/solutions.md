# Solutions — Disjoint Palindrome Product

Both solutions rest on the same pin: one palindrome sits entirely before the
other, so a boundary between adjacent positions always separates them — the
left pick lives in the prefix, the right pick in the suffix. If `L[i]` is the
length of the longest odd palindrome contained in `s[0..i]` and `R[i]` the
longest in `s[i..n-1]`, the answer is the largest `L[i] * R[i+1]` over all
boundaries, and the whole problem is computing those two arrays. The
bisection route asks each center how far symmetry reaches around it and
answers with palindrome probes that two rolling hashes price at constant
time. Manacher's sweep exploits the string's own symmetry instead, reusing
each proven radius to bound the next — which is where its log-factor
advantage lives.

## Double-Hash Radii with Per-Center Binary Search

Radii need no symmetry exploit to find — only a palindrome test. Around a
fixed center `c`, an odd palindrome of radius `k` contains one at every
smaller radius, so feasibility is monotone in `k`, and a binary search over
`[0, min(c, n-1-c)]` locates the maximal reach with `O(log n)` probes. Each
probe asks whether the window `s[c-k..c+k]` equals its own reversal, which is
substring equality against the mirrored window of the reversed string, and
rolling hashes turn that equality into an `O(1)` comparison.

The substrate is a pair of prefix-hash tables — one forward over `s`, one
forward over the reversed string — plus the base powers, all maintained
under two independent moduli, `10^9+7` and `10^9+9`. A window is accepted as
a palindrome exactly when its forward hash matches the reversal-side hash
under both moduli; a coincidental double match is a collision, roughly one
chance in `10^18` per probe, so a wrong radius across all `n log n` probes
is vanishingly unlikely — the price of trading Manacher's certainty for
simplicity. The fixed-width languages run the arithmetic in 64 bits
throughout; JavaScript and TypeScript split each multiply into 16-bit halves
so no intermediate exceeds `2^53`, where double arithmetic is still exact.

With the radii in hand, the cut sweep carries over unchanged: record per
index the longest odd palindrome ending and starting there, propagate the
length `m -> m - 2` shrink across neighboring indices, fold into running
maxima `L` and `R`, and price every boundary. Any lone letter is a length-1
palindrome, so both sides of every boundary contribute at least 1 and small
inputs like `"aa"` need no special casing.

**Complexity:** `O(n log n)` time, `O(n)` space.

## Per-Center Radii, Then a Cut Sweep

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
