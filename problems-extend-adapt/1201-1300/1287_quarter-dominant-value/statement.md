# The Quarter-Dominant Value

## Description

An integer array is given to you already sorted in non-decreasing order.
Exactly one of its values appears in more than a quarter of the slots —
a run so long it dominates that stretch of the array. Find that value.

### Example 1

```text
Input: arr = [2,4,4,4,9]
Output: 4
Explanation: `4` fills 3 of the 5 slots — 60%, well past a quarter.
```

### Example 2

```text
Input: arr = [11,13,13,13,13,13,15,18]
Output: 13
Explanation: `13` occupies 6 of the 8 slots.
```

### Constraints

- `1 <= arr.length <= 10^4`
- `0 <= arr[i] <= 10^5`

## Hints

### Hint 1

Split the sorted array into four quarters and think about where a run
longer than one quarter could possibly live.

### Hint 2

Such a run is too long to hide between two adjacent quarter marks — it
has to cover at least one of them.

### Hint 3

Check each candidate mark's value by measuring its run length with two
binary searches.
