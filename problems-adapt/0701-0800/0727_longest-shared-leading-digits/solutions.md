# Solutions — Longest Shared Leading Digits

Both solutions earn their speed from the same restatement: a shared leading
slice of length `L` is nothing beyond agreement on the first `L` decimal
digits. The sort banks that restatement into an order — merge every value
from both arrays as a digit string, sort lexicographically, and the two
values behind the deepest agreement end up adjacent, so one scan of
neighboring slots settles the whole cross-product search. The hash set skips
ordering entirely and asks its question point-blank — is this digit run
already on file from `arr1`? — paying a flat membership lookup instead.

## Sorted digit strings

Agreement on the first `L` digits is exactly the property that lexicographic
order preserves, so the all-pairs hunt can be delegated to a sort: write
every element of both arrays as a digit string tagged with its source array,
sort the whole company as strings, and read the answer off adjacent slots.

The order must be lexicographic — never numeric. Only string order keeps a
prefix family contiguous: `7`, `74`, `749`, `7491` all precede `75` because
`"4" < "5"` at the second digit, while numeric order would interleave `75`
into the `74…` family and split it in two. The tags ride along untouched;
the sort never looks at them, and no value is ever compared as a number.

Why neighbors suffice: let `L` be the deepest agreement any cross pair
manages, realized by `x` from `arr1` and `y` from `arr2`. Every digit string
extending that shared `L`-digit prefix occupies one contiguous block of the
sorted order, and `x` and `y` both sit in that block — so walking from one
to the other crosses a source boundary at some adjacent slot, and that
cross-source neighboring pair agrees on at least `L` digits. The converse is
free: a cross-source neighboring pair is itself a cross pair, so whatever it
agrees on is achievable. The maximum over cross-source neighbors is thus
exactly the all-pairs maximum.

The scan compares each entry only with its sorted predecessor, skipping
neighbors whose tags match, and counts matching leading digits up to the
first divergence. In the first worked example (`[7, 74, 749]` against
`[7491, 75]`) the merged order runs `7`, `74`, `749`, `7491`, `75` — the
first three from `arr1`, the last two from `arr2`. The cross-source
neighbors are `749` against `7491`, agreeing on three digits, and `7491`
against `75`, agreeing on one; the deepest of those, 3, is the answer.

**Complexity:** `O(N * (log N + D))` time with `N = |arr1| + |arr2|` and
`D <= 9` digits, `O(N * D)` space.

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
