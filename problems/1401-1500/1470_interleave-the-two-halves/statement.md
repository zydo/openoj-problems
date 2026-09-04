# Interleave the Two Halves

## Description

An array `nums` holds `2n` values stored as two stacked halves: the first
`n` entries are the x values `x1, x2, ..., xn` and the last `n` entries
are the y values `y1, y2, ..., yn`. Rearrange the entries so the two
halves alternate pairwise, producing `x1, y1, x2, y2, ..., xn, yn`, and
return that array.

### Example 1

```text
Input: nums = [9,4,7,1,6,8], n = 3
Output: [9,1,4,6,7,8]
Explanation: The halves are x = [9,4,7] and y = [1,6,8]. Pairing them in
order gives [9,1,4,6,7,8].
```

### Example 2

```text
Input: nums = [10,20,30,40], n = 2
Output: [10,30,20,40]
Explanation: x = [10,20] and y = [30,40] zip together into
[10,30,20,40].
```

### Example 3

```text
Input: nums = [500,7], n = 1
Output: [500,7]
Explanation: Each half holds a single entry, so the one x value is
followed by the one y value.
```

### Constraints

- `1 <= n <= 500`
- `nums.length == 2 * n`
- `1 <= nums[i] <= 10³`

## Hints

### Hint 1

Walk the halves with two cursors — one starting at index `0`, the other
at index `n` — emitting one value from each cursor per step until both
run out.
