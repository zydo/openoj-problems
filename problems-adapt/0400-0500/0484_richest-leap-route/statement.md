# Richest Leap Route

## Description

You start on index `0` of the 0-indexed array `nums` and want to arrive at its
final index. A single leap carries you forward between 1 and `k` positions: from
index `i` you may land on any index of `i + 1 .. i + k` that is still inside the
array.

Every index you stand on adds its value to your takings, the first and the last
one included. Return the largest total a route to the final index can collect.

### Example 1

```text
Input: nums = [2,-3,-4,5,-6,1], k = 2
Output: 5
Explanation: Standing on indices 0, 1, 3 and 5 collects 2 - 3 + 5 + 1 = 5.
Index 3 cannot be reached without first standing on index 1 or index 2, and
losing 3 there beats losing 4.
```

### Example 2

```text
Input: nums = [6,-2,-8,3,-1,2], k = 3
Output: 11
Explanation: Leaps of three and of two hop over every negative entry:
6 + 3 + 2 = 11.
```

### Example 3

```text
Input: nums = [-4,-9,-2], k = 2
Output: -6
Explanation: One leap of two goes straight from the first index to the last and
leaves -9 untouched. Both ends are always collected, so no route beats -6.
```

### Constraints

- `nums` holds at least 1 and at most `10^5` values.
- `1 <= k <= 10^5`.
- Each value lies in `-10^4 <= nums[i] <= 10^4`.

### Follow-up

The obvious recurrence inspects up to `k` predecessors for every index. Can you
finish in time proportional to the length of `nums` alone?

## Hints

### Hint 1

Write `dp[i]` for the largest total collectable while standing on index `i`. The
leap into `i` came from somewhere in `i - k .. i - 1`, so `dp[i]` is `nums[i]`
plus the best of those entries — a recurrence, but a costly one at `k`
predecessors each.

### Hint 2

Neighbouring indices consult windows that overlap in all but one or two places,
so a fresh scan per index re-derives a maximum it already knew. Carry the
window's maximum along instead of recomputing it.

### Hint 3

A deque of indices whose `dp` values fall from front to back does exactly that.
Before reading, discard front indices that have slipped out of the window; after
computing `dp[i]`, discard back indices whose `dp` is no larger than it, then
append `i`. The front is the best predecessor at every step, and each index is
appended and discarded once.
