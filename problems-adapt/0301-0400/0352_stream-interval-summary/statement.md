# Stream Interval Summary

## Description

Non-negative integers arrive one at a time. After any prefix of the stream,
represent all distinct values seen so far as sorted, pairwise-disjoint closed
intervals. Consecutive values belong to the same interval, and adding a value
already covered changes nothing.

Implement the `IntervalSummary` class:

- `IntervalSummary()` starts with no values.
- `void addValue(int value)` records one incoming integer.
- `int[][] currentIntervals()` returns the current intervals as
  `[start, end]` pairs ordered by `start`.

### Example 1

```text
Input:
["IntervalSummary", "addValue", "currentIntervals", "addValue", "currentIntervals", "addValue", "currentIntervals", "addValue", "currentIntervals", "addValue", "currentIntervals"]
[[], [4], [], [8], [], [5], [], [7], [], [6], []]
Output: [null, null, [[4,4]], null, [[4,4],[8,8]], null, [[4,5],[8,8]], null, [[4,5],[7,8]], null, [[4,8]]]
Explanation: Values 5, 7, and 6 successively extend and then join the two ranges.
```

### Constraints

- `0 <= value <= 10⁴`
- At most `3 × 10⁴` total calls are made.
- At most `10²` calls are made to `currentIntervals`.

### Follow-up

How would you optimize for a long stream whose values repeatedly merge into
only a few intervals?
