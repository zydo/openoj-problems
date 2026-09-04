# Zeros To The Tail

## Description

You are given an integer array `nums`.

One move picks any two distinct positions `i` and `j` and exchanges
`nums[i]` with `nums[j]`.

The goal is an array whose trailing stretch is exactly the zeros: every `0`
sits at the back while all other values fill the remaining positions in
any order.

Return the fewest moves that reach such an array.

### Example 1

```text
Input: nums = [4,0,2,0,9,0]
Output: 1
Explanation:
    Three zeros claim the last three positions, and the front stretch
    [4,0,2] holds a single one of them. Swapping that zero with the 9
    settles the array in one move.
```

### Example 2

```text
Input: nums = [0,0,5,0]
Output: 1
Explanation:
    The final zero zone spans the last three slots, and only the leading
    0 lies outside it. Exchanging nums[0] with nums[2] yields
    [5,0,0,0], so one move suffices.
```

### Example 3

```text
Input: nums = [0,6,0,8,0,2]
Output: 2
Explanation:
    The last three slots belong to the zeros in the end, yet the front
    stretch [0,6,0] already contains two of them. Swapping 0 with 8 and
    then 0 with 2 pushes the rest to the tail, and no single swap can do
    better.
```

### Example 4

```text
Input: nums = [7,3,1]
Output: 0
Explanation: No zeros are present, so the array is already settled.
```

### Constraints

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 100`

### Hint 1

Only where the zeros sit matters — the non-zero values are
interchangeable, so picture the array as a zero/one pattern.

### Hint 2

With `z` zeros, the tail `z` slots belong to them. Every zero currently
living before that zone needs exactly one swap to leave.
