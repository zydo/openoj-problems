# Solutions — Longest Repeated Segment

## Binary Search on Length with Double Rabin-Karp Hashing

Everything rests on one monotone fact: trimming a character off both
appearances of a repeated segment leaves a shorter repeated segment. The widths
that admit a repeat therefore form an unbroken range `1 .. answer`, and the
largest of them can be found by bisection instead of by trying every width.
Each probe asks one question — *is there a repeated segment exactly this wide?*
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
