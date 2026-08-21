# Solutions — Longest Shared Leading Digits

## Hash set of leading slices

A shared leading slice of length `L` is nothing more than agreement on the
first `L` decimal digits, so the all-pairs question reduces to membership
testing: collect the leading slices of every `arr1` element into one hash set,
then probe the slices of `arr2` elements against it.

Registration folds digits in from the left (`v = v * 10 + digit`) and stores
each intermediate value, so a single pass over `arr1` files up to nine slices
per number — values cap at 10^8, so at most nine digits. Then each `y` in
`arr2` walks its own slices in increasing length, remembering the longest one
the set contains.

That walk is entitled to break at the first miss. Slices nest — any slice of
length `L + 1` extends its length-`L` prefix — so once one length of `y` is
absent from the set, no longer slice of `y` can equal a slice of any `arr1`
element either. In the first worked example (`[7, 74, 749]` against
`[7491, 75]`), the set holds `7`, `74`, `749` (and their intermediate folds),
`7491` probes `7`, `74`, `749` successfully, and the answer is the deepest of
those, 3.

**Complexity:** `O((|arr1| + |arr2|) * D)` time with `D <= 9` digits,
`O(|arr1| * D)` space.
