# Lift the Lowest Cell Score

## Description

You are given an integer array `points` of length `n` and an integer `m`, a
budget of steps.

Every cell of the array carries a running total, and all totals start at
zero. A marker waits just off the left end of the array. Its first step
enters cell `0`; every later step moves it one cell left or right, and it
may never leave the array. Each time the marker arrives at cell `i`, that
cell's total grows by `points[i]`.

Spend at most `m` steps. Return the largest value the smallest cell total
can reach.

### Example 1

```text
Input: points = [3,5], m = 3
Output: 5
Explanation: Step into cell 0, on to cell 1, then back to cell 0. The
totals are [6,5] — the return step buys cell 0 a second deposit while cell 1
keeps its single larger one, so the smallest total is 5.
```

### Example 2

```text
Input: points = [3,8,3], m = 5
Output: 3
Explanation: A straight sweep 0 -> 1 -> 2 spends three steps for totals
[3,8,3]. Pushing the smallest total past 3 needs both outer cells entered
twice each, and touring from one outer cell to the other and back again
costs six steps on its own, so 3 stands.
```

### Example 3

```text
Input: points = [5,2,5], m = 11
Output: 10
Explanation: The middle cell pays only 2 per visit, so it must be entered
five times. The walk 0,1,0,1,2,1,2,1,2,1 does exactly that in ten steps,
leaving totals of 10, 10 and 15; raising the middle cell to 12 would take
six visits, which no eleven-step walk affords.
```

### Constraints

- `2 <= points.length <= 5 * 10⁴`
- `1 <= points[i] <= 10⁶`
- `1 <= m <= 10⁹`

## Hints

### Hint 1

"Every total at least `x`" is easier to decide than "largest reachable
minimum" — and once some walk achieves `x`, that same walk achieves every
smaller target. What does that monotonicity invite?

### Hint 2

For a fixed target, argue that an optimal walk never carries a long
backtrack: it can be rearranged into a rightward sweep that oscillates
across single boundaries.

### Hint 3

One round trip across the boundary between adjacent cells costs two steps
and grants each of them one extra deposit. Sweeping left to right, decide
cell by cell how many crossings it still needs, and remember that crossings
made for cell `i` already bank a deposit at cell `i + 1`.
