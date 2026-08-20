# Solutions — Largest Concatenation

## Custom Comparator Sort

The whole question is what "larger" means once numbers become digit blocks.
Comparing them as numbers is the wrong instrument: `7` must be written before
`71` even though it is the smaller number, because the reading `771` beats
`717`. What decides the placement of two blocks is their two possible
readings — put `a` ahead of `b` exactly when the string `a` followed by `b` is
greater than `b` followed by `a`. That test looks at nothing but the two
blocks themselves, which is what makes a global sort out of a local question.

For that sort to mean anything the test must be a real ordering, and it is:
the relation is transitive, so no cycle of blocks can each prefer the next
position. With that settled, sorting the stringified entries with the test as
comparator produces the answer, and the exchange argument shows why the sorted
arrangement cannot be beaten: if any two neighbours in the finished string
were the wrong way round, swapping just those two blocks would produce a
strictly larger reading — so in a sorted string no such swap exists, and any
other arrangement differs from it by adjacent swaps that never gain ground.

One case sits outside the ordering argument. All entries are non-negative, so
a `0` block sorts behind everything nonzero; if the joined string *begins*
with `0`, no nonzero block was present at all and the true value is zero, so
`[0,0,0]` answers `"0"` rather than `"000"`. Each comparison touches at most
10 digits per side (entries are bounded by `10⁹`), so comparisons cost a small
constant.

**Complexity:** `O(n log n)` comparisons, `O(n)` space.
