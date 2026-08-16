# Solutions — Minimum Size Subarray Sum

## Sliding Window

Because every element is positive, a window's sum strictly grows when the right end advances and strictly shrinks when the left end retreats. This monotonicity is what makes two pointers valid: for any right end, there is a unique smallest left end reaching the target, and that boundary only ever moves rightward as `right` does — so both pointers together make at most `n` steps each.

The scan advances `right` absorbing each element into `window`, and whenever the sum is at least `target`, records the current length `right - left + 1` and then shrinks from the left, subtracting `nums[left]`, while the sum stays large enough. This inner loop both finds the minimal window ending at this `right` and leaves the window in the leanest state for the next extension, so no candidate window is missed.

![Window snapshots for target 7 over [2,3,1,2,4,3]: the window grows to sum 8, shrinks twice as right reaches 4, and finally settles on [4,3] with sum 7 and length 2.](figures/solution-window-states.svg)

`best` starts at `n + 1`, an impossible length, so if the whole array never reaches `target` the sentinel survives and the answer is 0. A single element at least the target immediately yields length 1.

**Complexity:** `O(n)` time, `O(1)` space.
