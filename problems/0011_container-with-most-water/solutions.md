# Solutions — Container With Most Water

## Two pointers

The water between lines at `left` and `right` is `(right - left) * min(height[left], height[right])`: the width times the shorter of the two walls, since water above it would spill. Start with the widest possible container, one pointer at each end, and repeatedly move one pointer inward, recording the best area along the way.

Moving either pointer inward strictly shrinks the width, so a new pair can only beat the current best if its shorter wall is taller. Moving the taller wall inward can never help — the area stays capped by the shorter wall, which does not grow, while the width falls. Hence the taller wall's current pair is the best it can ever be part of, and it is safe to discard: the code always advances the pointer at the shorter wall (moving the right one on ties, which is equally correct since either wall caps the other).

This argument is why nothing is missed: every pair that is abandoned is proven no better than a pair already measured, so the maximum is found by the time the pointers meet. The loop runs at most `n - 1` steps, each doing constant work, and only two integers of extra state are kept.

**Complexity:** `O(n)` time, `O(1)` space.
