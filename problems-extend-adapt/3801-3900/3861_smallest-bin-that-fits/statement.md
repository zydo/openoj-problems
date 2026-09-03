# The Smallest Bin That Fits

## Description

A row of bins sits on a shelf, described by an integer array `capacity`
where `capacity[i]` is how much the `i`-th bin holds, together with an
integer `itemSize` giving the size of one item.

Bin `i` is able to hold the item precisely when `capacity[i] >= itemSize`.

Report the index of the bin that holds the least while still being able to
take the item. When several bins tie on that least capacity, prefer the one
that appears first in the row.

When nothing on the shelf is large enough, report `-1`.

### Example 1

```text
Input: capacity = [8,2,6,4,9], itemSize = 5
Output: 2
Explanation:
Bins 0, 2, and 4 can take the item. Their capacities are 8, 6, and 9, and
the least of these is 6, sitting at index 2.
```

### Example 2

```text
Input: capacity = [7,3,7,5,7], itemSize = 7
Output: 0
Explanation:
The tightest capacity that still works is 7, and it occurs at indices 0, 2,
and 4. The earliest of those, index 0, is the answer.
```

### Example 3

```text
Input: capacity = [5,6], itemSize = 9
Output: -1
Explanation:
Neither bin reaches size 9, so no bin qualifies and the result is -1.
```

### Constraints

- `1 <= capacity.length <= 100`
- `1 <= capacity[i] <= 100`
- `1 <= itemSize <= 100`

## Hints

### Hint 1

Sweep the array once, tracking the best capacity found so far among bins
that pass the `itemSize` check.

### Hint 2

Replace the tracked best only when you meet a strictly smaller capacity, so
ties naturally keep the earlier position.

### Hint 3

If the sweep never found a qualifying bin, the answer is `-1`.
