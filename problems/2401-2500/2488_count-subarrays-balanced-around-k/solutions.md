# Solutions — Count Subarrays Balanced Around K

## Sign Encode, Then Pair Prefixes

Compress every element to a sign relative to `k`: `+1` above, `-1` below, `0`
at `k` itself. A window whose sign sum is `0` has equally many larger and
smaller entries, so `k` sits exactly at its middle; a window with sum `1` has
one extra larger entry, which the left-middle convention still parks at
`k`. Either sum forces the median to be `k` — provided the window actually
contains the `k`. So count windows that cover `k`'s position and whose encoded
sum is `0` or `1`.

One scan does the counting. Hold `current`, the encoded sum of the prefix, and
a hash map of prefix sums recorded at indices strictly before `k`'s position,
seeded with the empty prefix `{0: 1}`. The moment the index reaches `k`'s
position, every not-yet-counted window ending here began at some earlier
stored prefix, and its sum is `current - stored`. Qualifying windows are those
where the difference is `0` or `1`, so add the map's counts for `current` and
for `current - 1` to the answer and keep walking.

Freezing the map at `k`'s index is what enforces containment: a window with
sum `0` or `1` that skips `k` has a different median and must not be counted.
Distinct values make `k`'s position unambiguous — in `[2,4,5,1,3]` the 4 sits
at index 1, and the four counted windows are exactly the prefixes ending at
indices 1 through 3 paired with the stored sums 0 and -1. When `k` is
surrounded by smaller values, as the 5 in `[1,2,5,3,4]`, every stored sum sits
too far below `current` for either lookup to fire, and only the singleton
survives.

**Complexity:** `O(n)` time, `O(n)` space.
