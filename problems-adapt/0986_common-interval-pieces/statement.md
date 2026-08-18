# Common Interval Pieces

## Description

Two collections of closed integer intervals, `rangesA` and `rangesB`, each
arrive already sorted and with no two members of the same collection touching
or overlapping. Read each collection as the set of real numbers it covers, and
return the pieces that both sets cover, as a sorted list of closed intervals.

The interval `[a, b]` stands for every real `x` with `a <= x <= b`, endpoints
included. Two such intervals meet in either nothing at all or one closed
interval, and a shared endpoint alone is enough: `[4, 9]` and `[9, 11]` have
`[9, 9]` in common.

### Example 1

```text
Input: rangesA = [[0,4],[7,12],[16,20]], rangesB = [[2,7],[9,10],[13,17],[19,22]]
Output: [[2,4],[7,7],[9,10],[16,17],[19,20]]
Explanation: [0,4] and [2,7] share [2,4]; [7,12] then meets [2,7] only at its
left endpoint, giving the single point [7,7], and swallows [9,10] whole. The
last piece of A picks up [16,17] and [19,20] from the last two of B.
```

### Example 2

```text
Input: rangesA = [[3,8]], rangesB = []
Output: []
Explanation: An empty collection covers nothing, so nothing is shared.
```

### Example 3

```text
Input: rangesA = [[1,2],[6,9]], rangesB = [[3,5],[10,14]]
Output: []
Explanation: The two collections interleave without ever meeting.
```

### Constraints

- Each collection holds at most `1000` intervals, and may be empty; the two
  lengths sum to at least `1`.
- Every endpoint is an integer in `[0, 10^9]`.
- Within one interval the left endpoint is strictly below the right one.
- Consecutive intervals of one collection are separated: each ends strictly
  before the next one begins.

## Hints

### Hint 1

Both collections are already in order, so walk them the way a merge walks two
sorted runs — one cursor per collection, never restarting either.

### Hint 2

For the pair of intervals under the cursors, the shared part runs from the
later of the two left endpoints to the earlier of the two right endpoints.
Emit it when that lower bound has not passed the upper bound.

### Hint 3

Whichever of the two intervals finishes first can be discarded: everything
still ahead in the opposite collection begins past its right endpoint, so it
has no further business. Advance that cursor and compare again.
