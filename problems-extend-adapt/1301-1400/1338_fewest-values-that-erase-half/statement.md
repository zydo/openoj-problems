# Fewest Values That Erase Half

## Description

Pick any set of values from an integer array `arr`; every occurrence of
each picked value is erased from the array at once.

Return the smallest number of distinct values you can pick so that at
least half of the original entries disappear.

### Example 1

```text
Input: arr = [9,9,9,4,4,4,1,6]
Output: 2
Explanation: Picking {9,4} strips six entries and leaves [1,6], so half
of the eight original entries are gone. No single value occurs four or
more times, so one value can never suffice.
```

### Example 2

```text
Input: arr = [3,3,3,3,3,3,3,3,1,2]
Output: 1
Explanation: The value 3 alone accounts for eight of the ten entries.
```

### Example 3

```text
Input: arr = [1,2,3,4,5,6,7,8]
Output: 4
Explanation: Every value occurs exactly once, so each pick removes only
a single entry, and four picks are needed to reach four.
```

### Constraints

- `2 <= arr.length <= 10^5`
- `arr.length` is even.
- `1 <= arr[i] <= 10^5`

## Hints

### Hint 1

Tally how often each distinct value appears — that tally is all the
problem really sees.

### Hint 2

A pick of k values removes the sum of their k frequencies, so the best
plan always takes the k most frequent values; accumulate frequencies
from the top until the running total reaches half the array.
