# Fewest Sweeps To Zero Everything

## Description

You are given an array `nums` of `n` non-negative integers. Apply sweeps
— possibly none — until every element has become `0`.

One sweep picks a contiguous stretch `[i, j]` (with `0 <= i <= j < n`),
finds the smallest value inside that stretch, and turns every element of
the stretch equal to that smallest value into `0`.

Return the fewest sweeps that can flatten the whole array to zeros.

### Example 1

```text
Input: nums = [4,7,4]
Output: 2
Explanation: The stretch [0,2] holds 4 as its smallest value, so one
sweep zeroes both 4s at once and leaves [0,7,0]. A second sweep over
[1,1] clears the 7.
```

### Example 2

```text
Input: nums = [2,5,5,2,6,6]
Output: 3
Explanation: Sweep [0,5]: the minimum is 2 and both copies drop, giving
[0,5,5,0,6,6]. Sweep [1,2] to erase the pair of 5s, then sweep [4,5] for
the pair of 6s — three sweeps in all.
```

### Example 3

```text
Input: nums = [0,3,1,3,0,1]
Output: 4
Explanation: Sweep [1,3], whose minimum 1 drops, leaving
[0,3,0,3,0,1]. The two 3s now need their own single-element sweeps: a
stretch spanning both would touch a 0 first and erase nothing else.
Finally sweep [5,5] for the remaining 1 — 1 + 2 + 1 = 4 sweeps.
```

### Constraints

- `1 <= n == nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁵`

## Hints

### Hint 1

A sweep really pays for one (value, run) pair: the value it erases,
inside a maximal stretch where nothing smaller is still standing.

### Hint 2

Erase values in increasing order — each maximal run of entries at least
`v` that contains a `v` then costs exactly one sweep.

### Hint 3

You need not simulate: a left-to-right monotonic stack counts the pairs.
A positive entry above the stack top opens a group, an equal entry rides
along, and any smaller value closes every group still open.
