# Blocks Echoed Back to Back

## Description

Given an array of positive integers `arr`, decide whether some block of
`m` consecutive elements shows up `k` or more times in a row somewhere in
the array — copies sitting immediately after one another, never
overlapping.

The block is any contiguous subarray of length `m`; what matters is its
length and that enough identical copies line up end to end.

Return `true` if such a block exists, and `false` otherwise.

### Example 1

```text
Input: arr = [3,3,3,3,3,3], m = 2, k = 3
Output: true
Explanation: The block (3,3) appears three times in a row covering the
whole array. A block may repeat more than k times and still count.
```

### Example 2

```text
Input: arr = [4,5,4,5,7,8], m = 2, k = 2
Output: true
Explanation: The block (4,5) occupies indices 0-3 as two back-to-back
copies.
```

### Example 3

```text
Input: arr = [1,1,2,2,3,3], m = 2, k = 2
Output: false
Explanation: Each length-2 block here — (1,1), (2,2), (3,3) — appears
only once; adjacent blocks never match each other, so nothing repeats
twice in a row.
```

### Constraints

- `2 <= arr.length <= 100`
- `1 <= arr[i] <= 100`
- `1 <= m <= 100`
- `2 <= k <= 100`

## Hints

### Hint 1

Try every starting index for the block and count how many consecutive
copies of it follow — a direct check against the `m` elements after each
copy settles whether it continues.

### Hint 2

Whole-block comparisons can be avoided: a position `i` continues the
previous copy exactly when `arr[i] == arr[i - m]`. When that holds for
`m * (k - 1)` positions in a row, the block just before them has appeared
`k` times consecutively.
