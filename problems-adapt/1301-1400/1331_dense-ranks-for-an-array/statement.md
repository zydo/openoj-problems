# Dense Ranks For An Array

## Description

Every entry of an integer array must be replaced by its rank, a
1-based position summarizing how that entry compares with the rest:

- A strictly larger value always earns a strictly larger rank.
- Entries holding the same value share one rank.
- No rank is skipped: the ranks used are exactly `1, 2, ...` up to the
  number of distinct values.

Return the array after every element has been swapped for its rank,
keeping the original positions.

### Example 1

```text
Input: arr = [23,8,4,15,16,8,23]
Output: [5,2,1,3,4,2,5]
Explanation: The distinct values in order are 4, 8, 15, 16, 23, so the
4s would be rank 1, both 8s share rank 2, and both 23s share rank 5.
```

### Example 2

```text
Input: arr = [-5,-1,-5,0]
Output: [1,2,1,3]
```

### Example 3

```text
Input: arr = [9,9,2,3,3,7]
Output: [4,4,1,2,2,3]
```

### Constraints

- `0 <= arr.length <= 10^5`
- `-10^9 <= arr[i] <= 10^9`

## Hints

### Hint 1

Sorting a copy of the array puts every value in rank order; equal
neighbors that would repeat a rank can simply be dropped.

### Hint 2

Once the distinct values are sorted, a value's rank is nothing more
than its 1-based slot in that list — record each value's slot in a
lookup table, then replay the table over the original positions.
