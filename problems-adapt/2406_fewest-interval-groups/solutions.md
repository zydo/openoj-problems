# Solutions — Fewest Interval Groups

## Endpoint sweep (maximum overlap)

The fewest groups equals the deepest coverage: wherever `d` ranges coincide,
those `d` pairwise intersect and need `d` distinct groups, and conversely `d`
slots at the deepest point are always enough — threading ranges through the
slots as they free up builds a valid assignment. So the answer is the peak of
the coverage function, and that peak is reachable without visiting any
coordinates.

Sort the start points and the end points into two arrays and sweep them
together with two pointers, remembering the ranges are inclusive. When
`starts[i] <= ends[j]`, the next event is an opening with some range still
live — the `<=`, not `<`, is precisely what scores touching ranges like
`[1, 5]` and `[5, 9]` as intersecting — so the live count rises and `i`
advances. Otherwise a closing comes first, the live count falls, and `j`
advances. The largest live count seen is the answer.

For `[[1,4],[3,6],[8,9],[9,12],[2,11]]`, depth reaches 3 at the point 3 (and
again at 9), so three groups are both forced and enough.

The sweep stops once the starts run out: only openings create depth, and the
leftover closings can only lower the count. Sorting does all the real work.

**Complexity:** `O(n log n)` time, `O(n)` space.
