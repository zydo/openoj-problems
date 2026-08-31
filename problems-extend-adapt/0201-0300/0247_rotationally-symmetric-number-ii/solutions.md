# Solutions — Rotationally Symmetric Number II

## Recursion building from the outside in

A 180-degree rotation reads a number's digits in reverse, each one mapped
to its own rotation — `0`, `1`, and `8` map to themselves, `6` and `9`
swap with each other — so a rotationally symmetric number is determined
entirely by its outer half: strip the outermost digit off each end and
what remains is still rotationally symmetric, two digits shorter. That
observation is the whole recursion. A length-`n` answer is one of the
pairs `11`, `69`, `88`, `96` wrapped around every length-`(n - 2)`
answer, which is why the recursion shrinks by two rather than by one:
digits pair up from both ends at once, never one at a time. The two
shapes that cannot be peeled further are the base cases — an empty core
for even `n`, and for odd `n` a single middle digit that must rotate to
itself: `0`, `1`, or `8`.

One pair is special. `00` would wrap a shorter number into a longer one
with a leading zero, which isn't a valid `n`-digit number at all, so the
outermost layer uses only the four non-zero pairs, while every layer
nested inside it — invisible from outside — may use all five. The count
grows accordingly: four choices at the shell and five at each layer
within, so even `n = 2k` admits `4 * 5^(k-1)` numbers (`n = 14` gives
`4 * 5^6 = 62500`) and odd `n >= 3` admits `12 * 5^((n-3)/2)`, the three
middle-digit choices times the even count two shorter.

The emission order needs no post-sort. Pairs are tried in ascending
order of their left digit (`00` < `11` < `69` < `88` < `96`), every
string at one level has the same length, and each level wraps results
that are already sorted — so the two nested loops emit the whole list
in the ascending lexicographic order the statement pins. The work is
proportional to the output itself: each of the `5^(n/2)`-many strings
is assembled by one three-piece concatenation.

**Complexity:** `O(n * 5^(n/2))` time, `O(n * 5^(n/2))` space — the
output itself is that big.
