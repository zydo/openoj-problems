# All The Subsets II

## Description

An integer array `nums` arrives, and this time its values may repeat.
Enumerate every subset the array can form — the full power set — but
collapsed to distinct rows: when two construction paths would produce
subsets reading exactly alike, that subset is reported once.

The report follows a pinned order: the whole list is sorted in
ascending lexicographic order, the empty subset `[]` comes first, and
each subset keeps its own elements in ascending order.

### Example 1

```text
Input: nums = [5,1,5]
Output: [[],[1],[1,5],[1,5,5],[5],[5,5]]
```

The duplicated 5 can be taken once or twice, or skipped — but the
subset `[5]` is the same row whether it came from the first 5 or the
second, so it appears a single time.

### Example 2

```text
Input: nums = [-3,2]
Output: [[],[-3],[-3,2],[2]]
```

Two distinct values yield the four usual subsets, smallest
lexicographically first.

### Example 3

```text
Input: nums = [4,4]
Output: [[],[4],[4,4]]
```

With both copies equal, three distinct rows survive: take neither,
one, or both.

### Constraints

- `1 <= nums.length <= 10`
- `-10 <= nums[i] <= 10`
