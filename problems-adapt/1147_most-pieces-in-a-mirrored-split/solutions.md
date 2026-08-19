# Solutions — Most Pieces in a Mirrored Split

## Greedy Peeling of Mirrored Pairs

Pieces mirror around the center, so build the cut from the outside in. At
each step find the shortest prefix of the remaining text that equals the
suffix of the same length, count the two as pieces, and continue on the
narrower interior. Committing to the shortest match is safe by exchange: if
some optimal cut begins with a longer pair, re-cutting that pair at the
point where the greedy match ends leaves every other piece valid, so the
greedy choice costs nothing.

The code carries two boundaries, `left` and `right`, into the original
string — the middle is never copied out — and grows `size` from 1 while
`left + size <= right - size`, since a candidate pair must not overlap
itself. Python decides each candidate with one slice comparison,
`text[left:left+size] == text[right-size:right]`. On a match the piece count
gains 2 and both boundaries move in by `size`; if no length matches, the
entire remainder — an unpairable stretch, or the odd middle block — becomes
one last piece and the loop stops.

For `"abcdefcdeab"` the scan matches `"ab"`, then `"cde"`, leaving the lone
`"f"` as the middle piece: 5 in total. For `"puzzle"` no length ever pairs,
so the answer is the single-piece cut, 1. Interior characters are never
re-examined against outer ones, but a failing step re-compares long prefixes,
so the worst case stays quadratic — comfortable at length 1000.

**Complexity:** `O(n^2)` time, `O(n)` space.
