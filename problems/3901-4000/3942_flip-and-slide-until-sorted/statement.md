# Flip And Slide Until Sorted

## Description

You are given an array `nums` of length `n` that holds each of the
integers `0` through `n - 1` exactly once.

Only two moves are allowed, and each one counts as a single operation:

- **Flip** — reverse the entire array from end to end.
- **Slide** — take the first element and move it to the back, shifting
  every other element one step toward the front.

Sort `nums` into increasing order using as few operations as possible,
and return that count. If no sequence of flips and slides can produce
the sorted array, return `-1`.

### Example 1

```text
Input: nums = [0,1,2,3]
Output: 0
Explanation: The array is already in increasing order, so no operation
is needed.
```

### Example 2

```text
Input: nums = [3,0,1,2]
Output: 1
Explanation: One slide carries the leading 3 to the back, leaving
[0,1,2,3].
```

### Example 3

```text
Input: nums = [2,1,0,4,3]
Output: 3
Explanation: Flip the array to reach the descending layout
[4,3,2,1,0], then slide twice to land on [2,1,0,4,3]. No shorter
sequence of moves gets there.
```

### Example 4

```text
Input: nums = [1,0,2,3]
Output: -1
Explanation: Every layout flips and slides can produce is a rotation of
the original array or a rotation of its reverse, and [1,0,2,3] is
neither, so sorting is impossible.
```

### Constraints

- `1 <= n == nums.length <= 10⁵`
- `0 <= nums[i] <= n - 1`
- `nums` contains every integer from `0` to `n - 1` exactly once.

### Hint 1

Both moves preserve a great deal of structure: each array you can ever
reach is a rotation of the original or a rotation of the flipped
original.

### Hint 2

Sorting is therefore possible exactly when `nums` is a rotation of the
ascending sequence or a rotation of the descending one.

### Hint 3

Name every reachable layout by a family and an offset — the family says
whether the base array is the original or its flip, the offset says how
far it has been slid. A breadth-first search over these `2n` layouts,
where a slide advances the offset and a flip switches family while
sending the offset to `n - offset`, yields the minimum count.
