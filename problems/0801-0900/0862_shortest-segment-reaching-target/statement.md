# Shortest Segment Reaching Target

## Description

A _segment_ of `nums` is a run of one or more entries sitting next to each
other. Given `nums` and an integer `target`, report how few entries a segment
can hold while still summing to `target` or more. Report `-1` when no segment
manages it at all.

Entries may be negative, so a longer segment does not always carry a bigger
sum.

### Example 1

```text
Input: nums = [3,-2,5,1], target = 6
Output: 2
Explanation: The pair 5, 1 already reaches 6. One entry alone never does,
since the largest is 5.
```

### Example 2

```text
Input: nums = [5,-4,5], target = 6
Output: 3
Explanation: Nothing shorter clears the bar — the two 5s are not neighbours,
and each adjacent pair is dragged to 1 by the -4. Taking all three swallows
the -4 and lands on 6.
```

### Example 3

```text
Input: nums = [4,1,-2], target = 9
Output: -1
Explanation: The whole array totals 3, and no part of it does better.
```

### Constraints

- `nums` holds between 1 and 100000 entries
- every entry lies in `[-100000, 100000]`
- `1 <= target <= 10^9`

## Hints

### Hint 1

Write `p[i]` for the total of the first `i` entries. Then the segment covering
positions `j` through `i - 1` sums to `p[i] - p[j]`, and the question becomes:
for each right end `i`, how close to `i` can a left end `j` be while keeping
`p[j] <= p[i] - target`?

### Hint 2

Growing a window no longer grows its sum once negatives appear, so the
two-pointer walk that works on non-negative data is off the table. Reason about
the prefix values themselves instead of about window edges.

### Hint 3

Keep the still-usable left ends in a double-ended queue whose prefix values
climb from front to back. A front that satisfies the threshold can be answered
and discarded forever, because every later right end would only make that
segment longer. A back whose prefix value is at least the newest one is
dominated by the newest one — later and no larger — so drop it before pushing.

### Hint 4

Index `0` must be one of the candidate left ends: `p[0] = 0` is what lets a
segment that begins at the very first entry compete.
