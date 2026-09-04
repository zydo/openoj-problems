# Longest Shared Run

## Description

A _run_ is any stretch of consecutive entries cut out of an array. Two arrays
`first` and `second` share a run when the same values, in the same order and
with nothing skipped, can be cut out of each of them.

Report how long the longest such stretch is. When the two arrays have no value
at all in common, the answer is `0`.

### Example 1

```text
Input: first = [6,2,8,5], second = [1,6,2,8]
Output: 3
Explanation: 6, 2, 8 opens first and closes second. Nothing longer works:
carrying on to 6, 2, 8, 5 runs off the end of second.
```

### Example 2

```text
Input: first = [3,3,3], second = [3,3]
Output: 2
Explanation: Repeats are ordinary values. The shorter array caps the answer at
its own length, and both of its entries do line up inside the longer one.
```

### Example 3

```text
Input: first = [9,4], second = [5,7]
Output: 0
Explanation: Not one value is shared, so not even a stretch of length one
qualifies.
```

### Constraints

- `1 <= first.length <= 1000`
- `1 <= second.length <= 1000`
- `0 <= first[i] <= 100`
- `0 <= second[i] <= 100`

## Hints

### Hint 1

A shared stretch has to start somewhere in each array. There are only a
million such starting pairs, so it is affordable to ask, for every pair of
positions, how far a match beginning right there can be carried.

### Hint 2

That question answers itself one step at a time. If the two entries at a pair
of positions disagree, no stretch begins there at all. If they agree, the
answer for that pair is one more than the answer for the pair of positions one
step to the right in each array.

### Hint 3

Filling the grid from its bottom-right corner backwards means each cell only
ever reads the cell diagonally after it, so the row you are building needs just
the row you built before. Keep the largest value you ever wrote — the winning
stretch can begin anywhere.
