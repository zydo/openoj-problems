# Smallest Removal to Sort the Array

## Description

You are given an integer array `arr`. Delete one contiguous run of
elements — possibly an empty run — so that whatever remains reads in
non-decreasing order. Return the length of the shortest run whose
removal achieves this.

### Example 1

```text
Input: arr = [6,7,3,1,8]
Output: 2
Explanation: Dropping the run [3,1] leaves [6,7,8], which is sorted,
and no shorter removal can fix the two out-of-place dips.
```

### Example 2

```text
Input: arr = [9,6,4,2]
Output: 3
Explanation: Every step descends, so only one element can survive —
whichever three consecutive elements you drop, the leftover single
value is trivially in order.
```

### Example 3

```text
Input: arr = [1,3,3,7]
Output: 0
Explanation: The array already never decreases, so nothing has to go.
```

### Constraints

- `1 <= arr.length <= 10⁵`
- `0 <= arr[i] <= 10⁹`

## Hints

### Hint 1

After a valid removal the survivors are a non-decreasing prefix of the
original array glued to a non-decreasing suffix, so start by measuring
how far each of those two runs extends.

### Hint 2

Dropping the whole tail after the prefix, or the whole head before the
suffix, always works and bounds the answer; a two-pointer sweep over
the two sorted runs then tests whether keeping part of each is better.

### Hint 3

In the sweep, advance one pointer while its element is at most the
other's: because both runs are individually sorted, the earliest usable
suffix start only moves forward as the kept prefix grows, so each
pointer walks its run once.
