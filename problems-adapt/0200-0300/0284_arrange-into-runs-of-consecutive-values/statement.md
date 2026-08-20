# Arrange Into Runs of Consecutive Values

## Description

Given an integer array `entries` and an integer `runLength`, determine whether
all entries can be rearranged into groups of exactly `runLength` values such
that every group contains consecutive integers.

Every occurrence must be used once. Duplicate values are distinct entries and
may belong to different groups.

### Example 1

```text
Input: entries = [11,12,13,15,16,17], runLength = 3
Output: true
Explanation: The entries form [11,12,13] and [15,16,17].
```

### Example 2

```text
Input: entries = [10,11,12,12,13,15], runLength = 3
Output: false
Explanation: After forming [10,11,12], the remaining values cannot form a consecutive run.
```

### Constraints

- `1 <= entries.length <= 10^4`
- `0 <= entries[i] <= 10^9`
- `1 <= runLength <= entries.length`

## Hints

### Hint 1

The number of entries must be divisible by `runLength`.

### Hint 2

Count each value, then process distinct values from smallest to largest.

### Hint 3

The smallest remaining value must begin a run. If it occurs `count` times,
the next `runLength - 1` consecutive values must each occur at least `count`
times.
