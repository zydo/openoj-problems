# Solutions — Tallest Cuboid Stack

## Chain DP over Sorted Triples

Rotation costs nothing, so each cuboid may as well carry its
measurements in sorted order — smallest two forming the base, largest
standing up as the height. That orientation dominates every other: it is
the tallest the cuboid can ever be, and simultaneously the least
constrained as a rider, because its base is as small as the cuboid
allows. Sorting each triple internally therefore loses nothing, and
afterwards the cuboids are sorted again, lexicographically by triple, so
a potential base always precedes the cuboids that might sit on it.

What remains is a longest-chain DP by height. Let `dp[i]` be the tallest
pile with cuboid `i` on top, starting at cuboid `i`'s own height. Every
earlier `j` whose triple is component-wise at most `i`'s — non-strict,
because matching measurements may touch — can carry it, and `dp[i]`
takes the best `dp[j] + height(i)`. The answer is the maximum entry.
For `[[20,40,10],[50,20,30],[40,60,30]]` the sorted triples are
`[10,20,40]`, `[20,30,50]`, `[30,40,60]`; each nests in the next, the
chain runs the full length of the array, and the pile reaches
`40 + 50 + 60 = 150`.

Trying every earlier pair is exhaustive: the lexicographic order
guarantees a supporting cuboid appears before its riders, each cuboid is
used in exactly one orientation, and no cuboid rests on itself. With
`n <= 100` the double loop is trivially fast.

**Complexity:** `O(n²)` time, `O(n)` space.
