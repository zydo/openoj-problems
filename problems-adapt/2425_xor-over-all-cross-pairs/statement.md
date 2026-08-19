# XOR Over All Cross Pairs

## Description

You are given two arrays of non-negative integers, `nums1` and `nums2`.

Form every combination of one element from `nums1` and one element from
`nums2` — all `len(nums1) * len(nums2)` of them, each exactly once — and take
the bitwise XOR inside each combination.

Return the bitwise XOR of every combination result together.

### Example 1

```text
Input: nums1 = [5,2,10], nums2 = [6,1,13]
Output: 7
Explanation:
The nine combination results are [3,4,8,4,3,15,12,11,7], and their XOR is 7.
```

### Example 2

```text
Input: nums1 = [8,3], nums2 = [5,1,2]
Output: 11
Explanation:
Every element of nums1 enters three combinations and every element of nums2
enters two. The doubled values cancel in pairs, so only the XOR of nums1
survives: 8 ^ 3 = 11.
```

### Example 3

```text
Input: nums1 = [9,4], nums2 = [2,7]
Output: 0
Explanation:
Each element enters exactly two combinations, one per partner, so everything
cancels and the total is 0.
```

### Constraints

- `1 <= nums1.length, nums2.length <= 10⁵`
- `0 <= nums1[i], nums2[j] <= 10⁹`

## Hints

### Hint 1

You never need the combination values themselves. If you expand the grand XOR
symbolically, how many times does one fixed element of `nums1` occur?

### Hint 2

A value XORed with itself vanishes in pairs, so only the parity of each
element's occurrence count matters.

### Hint 3

Each element of `nums1` occurs `len(nums2)` times and each element of `nums2`
occurs `len(nums1)` times — so each array contributes its own overall XOR
exactly when the other array has odd length.
