# Minimum Cost to Clear Flagged Cells

## Description

You are given a binary string `s` describing a row of cells. A `'1'` marks a
cell as flagged, and every flagged cell has to be removed; a `'0'` marks a
clean cell, which may stay.

Cells come off one at a time, and where a cell sits decides what removing it
costs:

- the leftmost remaining cell costs 1 to remove;
- the rightmost remaining cell costs 1 to remove;
- any other remaining cell costs 2 to remove.

Return the minimum total cost of removing all flagged cells.

A row with no flagged cell costs nothing to clear.

### Example 1

```text
Input: s = "1000101"
Output: 4
Explanation:
One way to clear every flagged cell is to
- remove the left end once. Cost 1.
- remove the right end three times. Cost 3.
This obtains a total cost of 1 + 3 = 4.

An alternative way is to
- remove the left end once. Cost 1.
- remove the right end once. Cost 1.
- remove the flagged cell in the middle directly. Cost 2.
This also obtains a total cost of 1 + 1 + 2 = 4.

4 is the least possible total cost; no plan clears the row for less.
```

### Example 2

```text
Input: s = "0001000"
Output: 2
Explanation:
The flagged cell sits deep inside the row, so paring the row down to it from
one end is expensive:
- remove the left end 4 times. Cost 4.
- remove the right end 3 times. Cost 3.
Removing that single cell where it stands costs 2, which is the minimum.
```

### Example 3

```text
Input: s = "1111"
Output: 4
Explanation:
Every cell is flagged. Taking a cell off an end costs 1, while removing one
from the interior costs 2, so the cheapest plan peels all four cells off the
two ends for 1 + 1 + 1 + 1 = 4.
```

### Constraints

- `1 <= s.length <= 2 * 10^5`
- `s[i]` is either `'0'` or `'1'`.

## Hints

### Hint 1

Whatever you do, the cells you never touch form one contiguous block in the
middle: around it you peel cells off the two ends at 1 apiece, and inside it
each flagged cell pays 2 while each clean cell pays nothing. A plan is
therefore described by where its untouched block starts and stops.

### Hint 2

Compare a plan against the extreme one that peels the entire row from the
ends, which costs `n`. Keeping a clean cell in the block saves the 1 that
peeling it would have cost, while keeping a flagged one pays 2 instead of 1.
Which single value per cell captures both effects?

### Hint 3

Score `'1'` as `+1` and `'0'` as `-1`; a plan's cost is `n` plus the sum of
its block under that scoring, and the empty block (sum 0) is allowed. The
minimum such sum is reachable in one left-to-right sweep.
