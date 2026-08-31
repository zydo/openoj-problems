# Mountain Summit Position

## Description

An integer array `arr` is guaranteed to rise strictly to one summit and then
fall strictly. Return the index of that summit.

Your algorithm must run in `O(log n)` time.

### Example 1

```text
Input: arr = [1,4,9,12,7,3]
Output: 3
```

### Example 2

```text
Input: arr = [0,3,6,4,2]
Output: 2
```

### Example 3

```text
Input: arr = [2,5,4]
Output: 1
```

### Constraints

- `arr` has between `3` and `10⁵` elements.
- Every `arr[i]` lies between `0` and `10⁶`, inclusive.
- `arr` is a mountain array with strictly increasing and strictly decreasing
  portions.
