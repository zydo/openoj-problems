# Apply Interval Updates

## Description

Begin with an integer array of `length` zeros. Each entry in `updates` is
`[left, right, delta]` and adds `delta` to every position from `left` through
`right`, including both endpoints.

Return the array after processing the updates in the order given.

### Example 1

```text
Input: length = 5, updates = [[1,3,4],[2,4,-2],[0,2,1]]
Output: [1,5,3,2,-2]
```

![The array evolving through three interval updates to [1, 5, 3, 2, -2], with each affected interval shaded](figures/example-1.svg)

### Example 2

```text
Input: length = 6, updates = [[0,1,-3],[4,5,7]]
Output: [-3,-3,0,0,7,7]
```

### Constraints

- `1 <= length <= 10^5`
- `0 <= updates.length <= 10^4`
- Every update is `[left, right, delta]` with `0 <= left <= right < length`.
- Each `delta` is between `-1000` and `1000`, inclusive.

## Hints

### Hint 1

Consider recording the points where an update begins and stops affecting the
array.

### Hint 2

What running value would reconstruct the final number at each index during one
left-to-right pass?

### Hint 3

For `[left, right, delta]`, place one marker at `left` and an opposite marker
immediately after `right`.

### Hint 4

The updates and the output array can then be processed in `O(k + n)` time.
