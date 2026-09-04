# Longest Peak Span

## Description

A contiguous part of an integer array is a peak span when it contains at
least three values, rises strictly to one interior high point, and then falls
strictly afterward. Equal neighboring values break a rise or fall, and the
high point cannot be at either end of the span.

Given `arr`, return the length of its longest peak span. Return `0` when no
such contiguous span exists.

### Example 1

```text
Input: arr = [1,3,5,4,2,1,6,7,4,3]
Output: 6
Explanation: `[1,3,5,4,2,1]` is the longest strictly rising-then-falling span.
```

### Example 2

```text
Input: arr = [0,1,0,1,2,1]
Output: 4
Explanation: `[0,1,2,1]` is the longer of the two peak spans.
```

### Example 3

```text
Input: arr = [1,2,3]
Output: 0
```

### Constraints

- `arr` has between `1` and `10⁴` elements.
- Each `arr[i]` is between `0` and `10⁴`, inclusive.

### Follow-up

Can the longest span be found in one pass with `O(1)` additional space?
