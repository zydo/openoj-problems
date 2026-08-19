# Largest Subarray Sum with Length a Multiple of K

## Description

You are given an integer array `nums` and an integer `k`.

Among all non-empty contiguous stretches of `nums` whose length is a
multiple of `k`, find the largest attainable sum of elements and return
it.

### Example 1

```text
Input: nums = [3,-1,4,-2,5], k = 2
Output: 6
Explanation: The stretch [-1,4,-2,5] has length 4 and sums to 6. The
whole array sums to 9, but its length 5 is not a multiple of 2.
```

### Example 2

```text
Input: nums = [-2,-3,-1,-4], k = 3
Output: -6
Explanation: Only the two stretches of length 3 qualify, summing to -6
and -8. With every element negative, the answer stays negative.
```

### Example 3

```text
Input: nums = [4,-7,6], k = 3
Output: 3
Explanation: No stretch shorter than the whole array has a length
divisible by 3, so the full sum 4 - 7 + 6 is the only candidate.
```

### Constraints

- `1 <= k <= nums.length <= 2 · 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`

## Hints

### Hint 1

A stretch's length is a multiple of `k` exactly when its two boundary
positions agree modulo `k`. What does that turn the length condition
into?

### Hint 2

With sums expressed through prefix sums, boundaries that agree modulo
`k` pair up within `k` separate classes — and inside one class the task
is a familiar best-difference search.

### Hint 3

Sweep once, holding the smallest prefix sum seen so far in each class;
every position then offers one candidate: its own prefix minus that
class minimum.
