# Only The Non-Negatives Spin

## Description

You are given an integer array `nums` and an integer `k`.

Gather every non-negative element of `nums` — in the order they appear —
and rotate that gathered sequence to the left by `k` steps, wrapping
around cyclically. Negative elements never take part in the rotation and
never change position.

Write the rotated values back into the slots that originally held
non-negative numbers, in order, leaving every negative slot exactly as it
was, and return the finished array.

### Example 1

```text
Input: nums = [4,-1,2,-5,8], k = 1
Output: [2,-1,8,-5,4]
Explanation:
The non-negative values in order are [4, 2, 8]. Rotating left by one step
gives [2, 8, 4]. Writing them back into the non-negative slots yields
[2, -1, 8, -5, 4].
```

### Example 2

```text
Input: nums = [0,9,-3,6], k = 4
Output: [9,6,-3,0]
Explanation:
The non-negative values are [0, 9, 6]; rotating a 3-cycle by 4 steps is
the same as rotating by 1, giving [9, 6, 0]. The result is [9, 6, -3, 0].
```

### Example 3

```text
Input: nums = [-7,-8], k = 3
Output: [-7,-8]
Explanation: There is nothing to rotate — the gathered sequence is empty —
so the array comes back untouched regardless of k.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁵ <= nums[i] <= 10⁵`
- `0 <= k <= 10⁵`

## Hints

### Hint 1

Collect the non-negative values first; their count `m` is the size of the
cycle that actually rotates.

### Hint 2

Reduce the shift once with `k %= m` — spinning a cycle of length `m` by
`m` steps changes nothing.

### Hint 3

On a second pass, hand the `j`-th non-negative slot the value
`j + shift` places along the gathered sequence; negatives stay where they
started.
