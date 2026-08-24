# Solutions — Squares of a Sorted Array

The input arrives sorted, and squaring keeps every magnitude while folding the
number line at zero, so the largest remaining square always sits at one of the
two ends of the unprocessed window — never inside it. Two pointers, one at
each end, can therefore emit the answer from largest square to smallest
without any sorting pass, meeting the follow-up's `O(n)` goal.

## Two pointers from both ends

Keep a window `[left, right]` of values not yet written and fill a
preallocated answer from the back. Each step compares the squares of the two
window ends: whichever is larger is the largest square remaining anywhere —
the ends bound their half's magnitudes, since `nums` is sorted — so it is
written to the next back position and its pointer moves inward. When the
squares tie (`-3` and `3` both square to 9) either value may go first; both
get written, one now and one in a later step.

The window shrinks by exactly one value per step, so after `n` steps the
answer is full and the loop ends; every value is read a constant number of
times and written exactly once. Magnitudes are bounded by `10⁴`, so squares
stay at or below `10⁸`, comfortably inside 32-bit integers, and the squared
comparison never overflows.

Squaring into a new array and sorting it is the trivial alternative — same
output, `O(n log n)` time — but the sorted input already encodes the order
the sort would discover; the two-pointer scan reads that order off directly.

**Complexity:** `O(n)` time, `O(n)` space.
