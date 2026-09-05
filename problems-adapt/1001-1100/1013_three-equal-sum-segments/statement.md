# Three Equal-Sum Segments

## Description

Given an array of integers, decide whether it can be cut into three
contiguous, non-empty segments that all have the same sum.

The array keeps its order: the first segment must be a prefix, the last
must be a suffix, and the two cut points sit strictly between elements,
so every element lands in exactly one segment. Return `true` when such a
pair of cut points exists and `false` otherwise.

### Example 1

```text
Input: arr = [2,2,2]
Output: true
Explanation: Cutting between the elements gives [2], [2], [2] — three
segments, each summing to 2.
```

### Example 2

```text
Input: arr = [1,2,3]
Output: false
Explanation: The total is 6, so every segment would have to sum to 2,
but no prefix of the array sums to 2.
```

### Example 3

```text
Input: arr = [1,-1,1,-1,1,-1,0]
Output: true
Explanation: The segments [1,-1], [1,-1] and [1,-1,0] each sum to 0.
```

### Constraints

- `3 <= arr.length <= 5 * 10^4`
- `-10^4 <= arr[i] <= 10^4`

## Hints

### Hint 1

Three equal segment sums force the array total to be divisible by three,
with each segment summing to exactly one third of it. Fix that value
first, then ask what a single left-to-right scan can confirm about the
places where a running prefix sum lands on it.
