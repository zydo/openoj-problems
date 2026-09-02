# One Span To Bridge The Gaps

## Description

You are given a 2D array `intervals`, where `intervals[i] = [start_i,
end_i]` holds the two endpoints of interval `i`, and an integer `k`.

Two intervals sit in the same group when, taken together, they blanket
one continuous stretch of the number line with no uncovered point between
the group's smallest and largest coordinate. So `[[1,2],[2,5],[3,3]]` is
a single group, while `[[1,2],[3,4]]` splits in two because the open
stretch `(2,3)` is covered by neither.

You must insert exactly one brand-new interval `[start_new, end_new]`
whose length `end_new - start_new` is at most `k`. Pick it so that the
intervals end up in as few groups as possible, and return that smallest
possible group count.

### Example 1

```text
Input: intervals = [[2,4],[9,11],[14,16]], k = 5
Output: 2
Explanation: The intervals form three groups. Inserting [4,9] — length
5, within the budget — welds the first two together, leaving [2,11] and
[14,16]. No allowed span reaches the last group: its start 14 sits 10
units past the first group's end 4.
```

### Example 2

```text
Input: intervals = [[13,15],[1,3],[7,8]], k = 4
Output: 2
Explanation: Ordered left to right, the groups are [1,3], [7,8], and
[13,15]. The new interval [3,7] has length 4 and joins the first two;
the hop from [7,8] to [13,15] measures 5, past the budget, so two
groups remain.
```

### Example 3

```text
Input: intervals = [[1,5],[3,7]], k = 1
Output: 1
Explanation: The two intervals already overlap into one group, and no
insertion can push the count below one.
```

### Constraints

- `1 <= intervals.length <= 10⁵`
- `intervals[i] == [start_i, end_i]`
- `1 <= start_i <= end_i <= 10⁹`
- `1 <= k <= 10⁹`

## Hints

### Hint 1

Reason about whole groups rather than raw intervals — order the
intervals and fuse every pair that overlaps or touches.

### Hint 2

After fusing, one new interval of length at most `k` welds together
exactly those consecutive groups whose outer reach — the last group's
start minus the first group's end — fits within `k`.

### Hint 3

That outer reach only grows as a window of consecutive groups widens, so
slide two pointers across the fused groups and keep the longest window
inside the budget; every seam the window crosses removes one group.
