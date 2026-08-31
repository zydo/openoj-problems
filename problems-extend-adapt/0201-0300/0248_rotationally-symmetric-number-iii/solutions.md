# Solutions — Rotationally Symmetric Number III

## Closed-form interior lengths, pruned boundary walk

A rotationally symmetric string is decided entirely by its first half:
the outermost digit picks from `1, 6, 8, 9` (a leading zero is forbidden,
except for `"0"` itself), every inner pair from `0, 1, 6, 8, 9` (5 ways,
the partner is forced), and an odd length's middle digit from `0, 1, 8`
(3 ways, since `6` and `9` only ever pair with each other). So every
length strictly between `len(low)` and `len(high)` — at most 13 of them —
contributes a plain product `4 * 5^p * 3^q`, never enumerated. Because
neither boundary carries a leading zero, a longer symmetric number is
always the larger one, so only two lengths ever touch a boundary at all:
candidates of `len(low)` must clear `low`, and candidates of `len(high)`
must not exceed `high`.

For a boundary length, the count walks the half-positions from the
outside in while the prefix still matches the boundary's own digits. At
each position, every allowed digit larger than the boundary's digit
settles the comparison right there — the first differing position
decides everything — and the remaining inner half-positions then
complete freely, in exactly the products above, so each such digit
contributes one multiplied count instead of a subtree walk. A boundary
digit outside the allowed set (a `7`, or a `6` sitting in the middle
seat) kills the equal-prefix chain on the spot. If the whole first half
matches, the one surviving candidate is the mirror completion of the
boundary's own first half, compared directly against the boundary.
Throughout, lexicographic order on equal-length digit strings is numeric
order, because no candidate and no boundary carries a leading zero.

The answer assembles as `count(>= low)` at `low`'s own length, plus the
closed forms for every length from `len(low) + 1` through `len(high)`
inclusive, minus `count(>= high)` at `high`'s length. That subtraction
also drops `high` itself when it qualifies, so `high` gets added back
exactly when it is rotationally symmetric — one linear mirror check.
Two small facts keep the edges honest: `"0"` is rotationally symmetric
on its own (the second example's answer of `0` for `low = high = "9"`
confirms `9` is not, since it rotates into `6`), and a single `6` or `9`
is never symmetric by itself.

**Complexity:** `O(L^2)` time, `O(L)` space, where `L = high.length` — a
few hundred integer operations at the 15-digit ceiling.
