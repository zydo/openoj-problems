# Skipped Sequence Term

## Description

A list of integers used to advance at a fixed pace: the difference between
each pair of adjacent values was the same throughout. One value was then
removed from somewhere in the middle of the list — never the first and never
the last — and the remaining values kept their original order.

Given the list as it stands now, recover the value that was removed.

### Example 1

```text
Input: arr = [2,5,8,14,17]
Output: 11
Explanation: The pace is 3, so the intact list read
[2,5,8,11,14,17] and 11 is what went missing.
```

### Example 2

```text
Input: arr = [30,24,18,6]
Output: 12
Explanation: The values count down by 6, so the complete
sequence was [30,24,18,12,6].
```

### Example 3

```text
Input: arr = [40,41,42,44,45]
Output: 43
Explanation: Adjacent values differ by 1, and 43 is the
only value the run from 40 through 45 skips.
```

### Constraints

- `3 <= arr.length <= 1000`
- `-10⁵ <= arr[i] <= 10⁵`
- The input is guaranteed to be a valid list: it arises from an arithmetic
  progression by deleting exactly one interior value.

## Hints

### Hint 1

Neither end value was touched, so the first value, the last value, and the
length together pin down the entire original progression — including the
size of each step.

### Hint 2

Alternatively, scan the adjacent differences once: every one of them equals
the common step except a single one that is twice as large, and that odd
one out marks exactly where the gap sits.

### Hint 3

For a one-line answer, the removed value is the average of the two values
that now surround the hole — or, equivalently, the difference between the
sum of the full progression and the sum of what survived.
