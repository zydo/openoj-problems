# Solutions — Unpaired Value In A Sorted Array

## Binary Search Over Pair Boundaries

Walk mentally through the array and the pairs line up like this: left of
the unpaired value, each pair fills an even slot and the odd slot after it;
right of the unpaired value, the whole pairing has slipped one slot, so
each pair fills an odd slot and the even slot after it. The unpaired value
is exactly where the slip happens, and since the layout goes
intact-then-slipped and never back, the slip is a monotone boundary — the
one thing binary search is built to find.

The search therefore only ever inspects even positions: whenever the
midpoint comes out odd it is stepped back one, so `mid` and `mid + 1`
always describe a candidate pair starting on an even slot. The comparison
then decides a side. When `nums[mid] == nums[mid + 1]` the candidate pair
is intact, the slip is strictly right of `mid + 1`, and the search sets
`lo = mid + 2`. When they differ, that pair is already broken — either the
unpaired value sits at `mid`, or the slip happened earlier — so the answer
is at `mid` or left of it and `hi = mid`.

Tracing `nums = [5,5,9,13,13,16,16,22,22]`: `lo = 0, hi = 8` picks
`mid = 4`, where `13 != 16`, so `hi = 4`; then `mid = 2`, where
`9 != 13`, so `hi = 2`; then `mid = 1` snaps to `0`, where `5 == 5`, so
`lo = 2`. The bounds meet at index 2 and `nums[2] = 9`.

The index arithmetic never leaves the array: while `lo < hi` the
even-snapped `mid` stays at most `n - 2`, so `mid + 1` is always valid. A
one-element array never enters the loop and returns itself, and the loop's
surviving index is the answer because `hi` only settles where a pair was
found broken or the right side ran out. Halving the range each step with
two indices of state meets the logarithmic-time, constant-space
requirement without modifying the input.

**Complexity:** `O(log n)` time, `O(1)` space.
