# Solutions — Valid Triangle Count

## Sort and Two Pointers

Sort the array and every triplet takes the form `a <= b <= c`. Sorted order
settles two of the three triangle inequalities by itself, so a single test —
`a + b > c` — decides the triplet. That collapse is what makes a fast count
possible: anchor the largest side with an outer index, then count the pairs
among the smaller entries whose sum exceeds the anchor.

The outer index walks `i` from the end of the array toward the front, holding
`sides[i]` as the anchor. Inside, two pointers `lo = 0` and `hi = i - 1` sweep
the prefix. When `sides[lo] + sides[hi] > sides[i]`, the sum clears the bar
already at the leftmost position, so every index from `lo` to `hi - 1` also
pairs with `hi` — `hi - lo` triplets enter the count in one step — and `hi`
steps down. When it fails, the sum is short even with the largest possible
partner on the right, so `lo` has to move up. Both pointers only travel
inward, making the inner scan linear per anchor.

![Sorted [3,4,5,6] with the anchor fixed at 6: lo + hi already exceeds it, so hi − lo = 2 triplets are counted in one step.](figures/solution-two-pointers.svg)

Zero lengths need no special branch beyond one early exit: the array is
sorted, so the first anchor equal to 0 means every remaining entry is 0 too,
and no zero-sided triangle exists — the outer loop breaks there. An input
shorter than three entries simply never enters the loop and yields 0, which
the third example shows.

The sort produces a fresh copy (`sorted` in the Python port) and the scan
keeps only counters and indices; walking the first example,
`sides = [3,4,5,6]`: anchoring 6 adds 2 + 1 triplets, then anchoring 5 adds 1
more, for 4 in total.

**Complexity:** `O(n²)` time, `O(n)` space.
