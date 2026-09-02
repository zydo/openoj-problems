# Best Total After One Swap

## Description

You are given two integer arrays `nums1` and `nums2`, both indexed from 0
and both of length n.

You may perform the following operation at most once: pick two indices
`left` and `right` with `0 <= left <= right < n` and exchange the block
`nums1[left...right]` with the block `nums2[left...right]` — every element
in that index range trades places with its counterpart in the other array.

For instance, with `nums1 = [4,5,6,7,8]`, `nums2 = [14,15,16,17,18]`, and
the range `left = 0`, `right = 1`, the arrays become
`nums1 = [14,15,6,7,8]` and `nums2 = [4,5,16,17,18]`.

The pair of arrays is then scored as the larger of the two totals:
`max(sum(nums1), sum(nums2))`, where `sum(arr)` adds up every element of
`arr`.

Return the greatest score attainable. Skipping the operation is allowed,
so the untouched pair's score is always available to you.

A subarray is a contiguous run of elements within an array, and
`arr[left...right]` names the run that spans indices `left` through
`right`, both endpoints included.

### Example 1

```text
Input: nums1 = [12,3,8], nums2 = [5,20,2]
Output: 40
Explanation: Trade the middle positions: nums1 becomes [12,20,8] and
nums2 becomes [5,3,2]. The score is max(40, 10) = 40.
```

### Example 2

```text
Input: nums1 = [9,1,1,9], nums2 = [2,8,8,2]
Output: 34
Explanation: Trade the inner block (left = 1, right = 2): nums1 becomes
[9,8,8,9] and nums2 becomes [2,1,1,2]. The score is max(34, 6) = 34.
```

### Example 3

```text
Input: nums1 = [15,4,7], nums2 = [1,1,1]
Output: 26
Explanation: No exchange can raise sum(nums1) = 26, and no exchange
lifts the smaller side past it, so the best move is to do nothing. The
score is max(26, 3) = 26.
```

### Constraints

- `nums1` and `nums2` share the same length `n`
- `1 <= n <= 10⁵`
- `1 <= nums1[i], nums2[i] <= 10⁴`

## Hints

### Hint 1

Track what one swap does to the totals, not what it does to the arrays
element by element.

### Hint 2

Suppose `nums1` is the side you want to end on. Handing over a range
changes `sum(nums1)` by the range sum of `nums2[i] - nums1[i]`, so the
best ending on that side is `sum(nums1)` plus the largest-range gain of
that difference array.

### Hint 3

The largest-range gain is the classic best-contiguous-block scan: keep a
running block that either extends or restarts at each step, and never let
it go negative — the zero floor folds the "do nothing" option in for
free. Run the scan once per direction and take the better ending.
