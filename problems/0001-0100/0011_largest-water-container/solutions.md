# Solutions — Largest Water Container

## Two pointers

The volume for a pair is `(right - left) * min(heights[left], heights[right])`
— width times the shorter wall, because water above that level spills. Start
from the widest pair there is, one pointer at each end, then move one pointer
inward at a time, keeping the best volume seen.

The whole method rests on one observation. Any move shrinks the width, so a
later pair can only win by reaching a higher level. Move the _taller_ wall
inward and the level is still capped by the shorter wall, which has not
changed — width fell, level did not rise, so every such pair is worse than the
one just measured. The taller wall may still pay off later; the shorter one
cannot. So the pointer at the shorter wall is the one that advances (on a tie
either is safe, since each caps the other; the code moves the right pointer).

Running the statement's first example, `heights = [3,7,2,9,4,6,1,8,5]`:

1. `left = 0, right = 8`: `min(3, 5) x 8 = 24`. Wall 0 is shorter, so it
   retires — every remaining pair containing it is narrower and still capped
   at 3.
2. `left = 1, right = 8`: `min(7, 5) x 7 = 35`, the new best. Now the right
   wall is the shorter one and retreats.
3. `left = 1, right = 7`: `min(7, 8) x 6 = 42`. This is the answer, though the
   sweep does not know that yet.
4. `left = 2, right = 7`: `min(2, 8) x 5 = 10`, and the sweep walks on through
   32, 3, 12 and 4 as the pointers close on positions 3 and 4.

Nothing is missed because every discarded pair is provably no better than a
pair already measured, so the maximum is in hand by the time the pointers meet.
Note that the tallest wall in the array, the 9 at position 3, never appears in
the answer — height alone decides nothing without width.

The loop takes at most `n - 1` steps of constant work and keeps two indices and
a running best.

**Complexity:** `O(n)` time, `O(1)` space.
