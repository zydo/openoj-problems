# Widest Valid Pair Span

## Description

You are given two integer arrays `nums1` and `nums2`, each arranged in
non-increasing order — every element is greater than or equal to the one
after it.

Consider index pairs `(i, j)` with `i` inside `nums1`, `j` inside
`nums2`, and `i <= j`. Such a pair is compatible when
`nums1[i] <= nums2[j]`, and its span is `j - i`.

Over all compatible pairs, return the largest span possible. When no
pair is compatible at all, return `0`.

### Example 1

```text
Input: nums1 = [70,50,20], nums2 = [90,60,55,30,25]
Output: 2
Explanation: The pair (2,4) is compatible — 20 <= 25 — and has span 2.
No compatible pair stretches farther.
```

### Example 2

```text
Input: nums1 = [5,5,5,5], nums2 = [6,6,1,1]
Output: 1
Explanation: The first 5 pairs with the second 6 at indices (0,1),
giving span 1; the 1s in nums2 are too small to extend the reach.
```

### Example 3

```text
Input: nums1 = [10,5], nums2 = [4,3]
Output: 0
Explanation: Every value in nums1 exceeds every value at or after its
own index in nums2, so no compatible pair exists and the answer is 0.
```

### Constraints

- `1 <= nums1.length, nums2.length <= 10^5`
- `1 <= nums1[i], nums2[j] <= 10^5`
- Both `nums1` and `nums2` are non-increasing.

## Hints

### Hint 1

Because both arrays only go down, compatibility is stable to the left:
whatever `j` worked for `nums1[i]` keeps working for every smaller value
that follows it.

### Hint 2

That monotonicity is all a two-pointer sweep needs — or, for a different
angle, for each `i` binary-search `nums2` for the last index still
holding a value of at least `nums1[i]`.
