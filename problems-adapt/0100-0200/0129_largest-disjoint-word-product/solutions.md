# Solutions — Largest Disjoint Word Product

## 26-Bit Letter-Set Bitmasks

Whether two entries can pair depends only on their sets of distinct letters;
arrangement within a word and repeated letters change the length but not the
pairing test. So the first pass compresses each word into a 26-bit integer,
setting bit `ord(ch) - ord('a')` for every letter the word contains, and
carries the word's length alongside the mask.

Once every word is a mask, the disjointness test collapses to one machine
instruction: two words share no letter exactly when their masks' bitwise AND
is zero. The second pass walks all unordered pairs, tracking the largest
length product among pairs that pass the AND test, and leaves the answer at
0 when none does.

The two passes split the cost. Building masks is linear in total input length
`L` (up to 1000 words of up to 1000 characters, so about a million letter
visits). The pairing phase is `O(n²)` in the number of words — roughly half
a million iterations at `n = 1000`, each one AND plus multiply — which is
cheap precisely because the mask did the expensive part in advance. The
1000-word bound is the deliberate design point for this quadratic phase.

Edge behavior falls out of the representation. In `["moon","loom","wool",
"moat"]` every mask carries the `o` bit, so every AND is nonzero and the
result stays 0. Entries with equal letter sets but different lengths, like
`cat` and `cart`, simply compete through their lengths — `cart` wins the
`dog` pairing at 12 against `cat`'s 9 — and the AND test never distinguishes
how those letters were chosen.

**Complexity:** `O(L + n²)` time, `O(n)` space.
