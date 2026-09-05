# Solutions — Longest Repeated Segment

Both attacks lean on the same fact: two appearances of one segment are two
suffixes of `s` that open with the same run of characters, however much those
appearances overlap. The suffix array makes the fact concrete — stand every
suffix in sorted order and the deepest agreement between neighbors _is_ the
answer, read off by one linear scan with no randomness anywhere. The hash
bisection stays cheaper by never ordering anything at all: it asks only
whether some width repeats, halves the search on the monotone answer, and
fingerprints windows in place of comparing them.

## Suffix Array with Kasai LCP

A repeated segment is a common prefix of two different suffixes, so the
longest one hiding in `s` is the deepest prefix any two suffixes share.
Sorting the suffixes makes that depth easy to read off: suffixes opening with
the same run cannot be separated in the order by a suffix that opens
differently, so the deepest shared prefix is always realized by some pair of
_adjacent_ suffixes. The answer is therefore the maximum LCP across
neighboring pairs of the sorted order, and the code slices that window out of
`s` at the end — or returns the empty string when every neighboring pair
disagrees from the first character on.

The sort never compares the suffixes themselves. Every suffix starts ranked
by its first letter, and each pass re-sorts them by the pair
_(`rank[i]`, `rank[i + k]`)_, where the second entry is the rank the suffix
`k` steps later already holds, a below-everything sentinel stands in past the
end of `s` — so a suffix that is a strict prefix of a longer one ranks below
it — and the pair is packed into one integer key so an ordinary comparison
sort applies. Suffixes sharing a rank after a pass agree on a prefix of
length `2k`, so each doubling of `k` doubles the compared length and
`ceil(log2 n)` passes settle the full order; the pass that leaves every rank
distinct ends the loop early. Nothing here is randomized — no hash, no
modulus, no collision to argue away — which is this family's whole character.

The neighboring depths then come from Kasai's scan instead of from
comparisons. Walking the text positions left to right, each suffix is matched
against its sorted predecessor by a single extending pointer `h`; because
both suffixes at position `i` lose exactly their first character when the
walk steps to `i + 1`, a match can shorten by at most one per step, and
paying one unit back each step keeps the pointer's total travel within `2n`
characters. The scan remembers the deepest match it has seen and where it
starts. Overlapping appearances need no handling anywhere — adjacency in the
sorted order says nothing about distance in the text, which is exactly the
freedom the problem grants.

**Complexity:** `O(n log² n)` time, `O(n)` space.

## Binary Search on Length with Double Rabin-Karp Hashing

Everything rests on one monotone fact: trimming a character off both
appearances of a repeated segment leaves a shorter repeated segment. The widths
that admit a repeat therefore form an unbroken range `1 .. answer`, and the
largest of them can be found by bisection instead of by trying every width.
Each probe asks one question — _is there a repeated segment exactly this wide?_
— and answers with the starting position of one, or `-1`. The search keeps the
widest success it has seen along with its position, and slices that window out
of `s` at the end; a probe of width 0 is never allowed to succeed, so a string
with no repeat at all falls through to the empty answer.

A probe is Rabin-Karp. Rather than compare windows, the code turns each one
into a pair of polynomial hashes taken modulo `10^9 + 7` and `10^9 + 9` with
base 26. The first window is hashed the slow way; every later window is
obtained from its predecessor in constant time by subtracting the outgoing
character times the appropriate precomputed power of the base, shifting, and
folding in the incoming character. A dictionary maps each hash pair to the
positions that produced it, so a repeat announces itself when a pair recurs.

Two independent moduli make an accidental agreement vanishingly rare, but the
probe does not rely on that: when a pair recurs, the candidate window is
compared character by character against each stored position before the probe
reports success. Correctness is therefore hash-independent, and the double hash
only serves to keep those verifications from ever being needed twice.

Overlapping appearances need no special handling anywhere — the probe compares
windows and never asks how far apart their positions are, which is exactly the
freedom the problem grants. Each probe costs `O(n)` hashing plus the occasional
verification, and bisection performs `O(log n)` of them.

**Complexity:** `O(n log n)` time, `O(n)` space.
