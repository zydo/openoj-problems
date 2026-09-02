# Solutions — Tally Peaks and Dips

## Run compression, then interior extrema

Every index inside a maximal run of equal values has the same nearest
differing neighbors — the value just left of the run and the value just
right of it — so an entire run is a peak, a dip, or neither as one unit.
Collapsing each run to a single representative therefore loses nothing and
resolves the statement's "equal indices share one peak or dip" rule
mechanically: duplicates cannot be double-counted because they no longer
exist as separate entries.

On the compressed sequence the definition becomes the classic local-extremum
test: an interior entry whose neighbors on both sides are smaller is a peak,
one whose neighbors are both larger is a dip. Restricting the loop to
interior positions encodes the other rule exactly — the first and last
representatives lack a differing neighbor on one side, which is what
disqualifies them. For `[1,3,2,4,2,4,1]` the compression changes nothing,
and all five interior entries — `3`, `2`, `4`, `2`, `4` — are extrema,
alternating peak and dip.

With `nums.length ≤ 100` everything fits trivially: one pass builds the
compression, one pass counts, and no value ever leaves the small-integer
range.

**Complexity:** `O(n)` time, `O(n)` space.
