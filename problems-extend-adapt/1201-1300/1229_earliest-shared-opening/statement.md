# Earliest Shared Opening

## Description

Two people each keep a list of the time windows during which they are free:
`slots1` for the first person and `slots2` for the second. A window is a
pair `[start, end]` covering the inclusive span of moments from `start`
through `end`, and no two windows on the same person's list overlap.

You are also given a meeting length `duration`. Find the earliest moment at
which a meeting of exactly that length can begin so that it fits inside a
free window of both people at once. Return the meeting as `[start, start +
duration]`; if no placement of that length exists anywhere on the two
calendars, return the empty list.

### Example 1

```text
Input: slots1 = [[1,12],[40,60]], slots2 = [[4,20],[30,55]], duration = 7
Output: [4,11]
Explanation: The first overlapping stretch of the two calendars runs from
4 to 12, which is long enough for a 7-length meeting starting at 4.
```

### Example 2

```text
Input: slots1 = [[1,12],[40,60]], slots2 = [[4,20],[30,55]], duration = 9
Output: [40,49]
Explanation: The early overlap only spans 8 moments, one short of 9, so
the meeting must wait for the later windows and starts at 40.
```

### Example 3

```text
Input: slots1 = [[0,9]], slots2 = [[3,9]], duration = 6
Output: [3,9]
Explanation: The shared window from 3 to 9 is exactly 6 moments long, so
the meeting fills it precisely.
```

### Example 4

```text
Input: slots1 = [[2,10]], slots2 = [[5,8]], duration = 4
Output: []
Explanation: The calendars overlap only from 5 to 8 — three moments, too
few for the requested length — so no meeting is possible.
```

### Constraints

- `1 <= slots1.length, slots2.length <= 10⁴`
- `slots1[i].length == 2` and `slots2[i].length == 2`
- `slots1[i][0] < slots1[i][1]`
- `slots2[i][0] < slots2[i][1]`
- `0 <= slots1[i][j], slots2[i][j] <= 10⁹`
- `1 <= duration <= 10⁶`

## Hints

### Hint 1

Sort each person's windows by start. When one window from each list
overlaps, the shared stretch begins at the larger of the two starts and
ends at the smaller of the two ends.

### Hint 2

Walking both sorted lists with one pointer each lets you visit every
overlapping pair without trying all pairs: whichever window ends first can
never reach any later window on the other side, so it is safe to drop.

### Hint 3

The first overlapping stretch whose length reaches `duration` gives the
answer immediately — start the meeting at the larger of the two starts.
