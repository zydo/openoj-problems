# Rearrange Into Equal Steps

## Description

A sequence is **evenly spaced** when the gap between every pair of
neighboring values is identical — that one constant step size is what makes
it an arithmetic progression.

You are given an integer array `arr`. Decide whether its elements can be
reordered into an evenly spaced sequence: return `true` if some
rearrangement has a constant gap between neighbors, and `false` if no
ordering does.

### Example 1

```text
Input: arr = [9,3,15,21]
Output: true
Explanation: Arranged as [3,9,15,21], every neighboring pair differs by
exactly 6, so a constant-step reordering exists.
```

### Example 2

```text
Input: arr = [4,1,7,12]
Output: false
Explanation: However the four values are ordered, the neighboring gaps
cannot all be made equal.
```

### Example 3

```text
Input: arr = [-8,-2,-5]
Output: true
Explanation: Arranged as [-8,-5,-2], both neighboring steps are 3.
```

### Constraints

- `2 <= arr.length <= 1000`
- `-10⁶ <= arr[i] <= 10⁶`

## Hints

### Hint 1

If any reordering has a constant neighboring gap, then sorting the values
must produce one too — an evenly spaced sequence read in increasing order
is still evenly spaced. So there is only one candidate ordering to test.

### Hint 2

Sort a copy of the array, measure the gap between its first two elements,
and check that every later gap matches it exactly.
