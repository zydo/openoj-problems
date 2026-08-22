# Clearing an Array with Window Decrements

## Description

You are given an integer array `nums` of length `n`, and a list of
windows `queries`, where `queries[i] = [li, ri]` names the contiguous
stretch of positions from `li` to `ri`, ends included.

The windows are used one after another. Using window `i`, you pick any
subset of the positions it covers and subtract `1` from each of them —
the subset may be empty, and positions already at `0` may be picked or
skipped as you choose.

Return `true` if every entry of `nums` can be brought to exactly `0`
after all windows have been used, and `false` otherwise.

### Example 1

```text
Input: nums = [0,2,1], queries = [[0,1],[1,2]]
Output: true
Explanation: Pick position 1 in the first window, and positions 1 and 2
in the second. Position 1 loses two units in total, position 2 loses
one, and position 0 needs nothing. Every entry ends at 0.
```

### Example 2

```text
Input: nums = [1,2,2], queries = [[0,1],[2,2]]
Output: false
Explanation: Position 1 is covered only by the first window, so it can
lose at most one unit but needs two. No choice of subsets fixes that.
```

### Example 3

```text
Input: nums = [1,1], queries = [[0,1],[0,1],[0,1]]
Output: true
Explanation: Coverage exceeds what is needed, but nothing forces you to
use it: pick position 0 in one window and position 1 in another, and
skip the third entirely.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁵`
- `1 <= queries.length <= 10⁵`
- every window is a pair `[li, ri]` with `0 <= li <= ri < nums.length`

## Hints

### Hint 1

Each window removes at most one unit from a given position, and windows
never interact — so the order in which they are used is a distraction.

### Hint 2

All that matters per position is how many windows cover it. How would
you compute that count for every position in one sweep instead of
walking each window's stretch?

### Hint 3

Mark where coverage begins and ends, then accumulate. A position can
reach zero exactly when its coverage count is at least its starting
value.
