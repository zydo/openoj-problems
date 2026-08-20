# Distinct OR Results of Contiguous Segments

## Description

For every non-empty contiguous segment of integer array `values`, compute the
bitwise OR of all elements in that segment.

Return how many distinct results occur.

### Example 1

```text
Input: values = [5,2]
Output: 3
Explanation: The results are 5, 2, and 7.
```

### Example 2

```text
Input: values = [3,6,1]
Output: 4
Explanation: The distinct results are 1, 3, 6, and 7.
```

### Example 3

```text
Input: values = [8,8,1,2]
Output: 6
```

### Constraints

- `1 <= values.length <= 5 * 10^4`
- `0 <= values[i] <= 10^9`

## Hints

### Hint 1

Track the distinct OR results of segments ending at the current position.

### Hint 2

For a new value `x`, the new ending-result set contains `x` and `old | x` for
every result in the preceding set.

### Hint 3

OR only adds set bits, so an ending-result set has at most about 31 distinct
values under these constraints.
