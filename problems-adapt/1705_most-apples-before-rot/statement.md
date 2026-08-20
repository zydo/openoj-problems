# Most Apples Before Rot

## Description

A tree drops apples for `n` days in a row. On day `i` it drops
`apples[i]` of them, and that whole batch spoils on day `i + days[i]` —
from that morning on, none of it is edible. Days with `apples[i] == 0`
(and then `days[i] == 0`) are days the tree drops nothing.

You eat at most one apple per day, and you may keep eating after day `n`
for as long as anything you picked stays fresh.

Given `apples` and `days`, both of length `n`, return the most apples
you can eat.

### Example 1

```text
Input: apples = [2,3,1,4], days = [2,3,2,3]
Output: 6
Explanation: Day 0 and day 1 you eat from the first batches; on day 2
the day-2 drop joins the day-1 batch and both rot before day 4; days 3
through 5 carry you through the day-3 batch — six apples in all.
```

### Example 2

```text
Input: apples = [2,0,0,0,3], days = [2,0,0,0,3]
Output: 5
Explanation: Two apples from day 0 are eaten on days 0 and 1, days 2
through 4 go by bare, and the three apples dropped on day 4 carry you
through days 4, 5 and 6.
```

### Example 3

```text
Input: apples = [3,3], days = [1,3]
Output: 4
Explanation: The first batch spoils on day 1 after feeding you a single
apple; the second batch, fresh until day 4, supplies days 1, 2 and 3.
```

### Constraints

- `n == apples.length == days.length`
- `1 <= n <= 2·10⁴`
- `0 <= apples[i], days[i] <= 2·10⁴`
- `days[i] == 0` exactly when `apples[i] == 0`

## Hints

### Hint 1

When several batches sit fresh at once, the apple to eat is from the
batch that spoils first — holding it for later risks losing it for
nothing.

### Hint 2

A collection ordered by spoil day serves that choice, and the days after
`n` still count: with no new drops arriving, you simply keep eating
whatever spoils latest into the future until nothing fresh remains.
