# Square-Equals-Product Triplets

## Description

You are given two integer arrays `nums1` and `nums2`. Count the
triplets that satisfy one of these two shapes:

- **Shape 1:** indices `(i, j, k)` with `0 <= i < nums1.length` and
  `0 <= j < k < nums2.length` such that
  `nums1[i]^2 == nums2[j] * nums2[k]`.
- **Shape 2:** indices `(i, j, k)` with `0 <= i < nums2.length` and
  `0 <= j < k < nums1.length` such that
  `nums2[i]^2 == nums1[j] * nums1[k]`.

Report the combined number of shape-1 and shape-2 triplets.

### Example 1

```text
Input: nums1 = [3,6], nums2 = [2,4,9]
Output: 1
Explanation: Shape 1: triplet (1, 1, 2) —
nums1[1]^2 = 6^2 = 36 = 4 * 9 = nums2[1] * nums2[2].
```

### Example 2

```text
Input: nums1 = [5,5,5], nums2 = [1,25]
Output: 3
Explanation: Shape 1: the index pair (0, 1) of nums2 multiplies to
1 * 25 = 25 = 5^2, and each of the three copies of 5 in nums1 pairs
with it, giving triplets (0, 0, 1), (1, 0, 1), and (2, 0, 1).
```

### Example 3

```text
Input: nums1 = [2,8], nums2 = [4,4,16]
Output: 4
Explanation:
Shape 1: (1, 0, 2) and (1, 1, 2) — nums1[1]^2 = 8^2 = 64 = 4 * 16,
with two choices for which copy of 4 is used.
Shape 2: (0, 0, 1) and (1, 0, 1) — nums2[0]^2 = nums2[1]^2 = 4^2 =
16 = 2 * 8 = nums1[0] * nums1[1].
```

### Constraints

- `1 <= nums1.length, nums2.length <= 1000`
- `1 <= nums1[i], nums2[i] <= 10^5`

## Hints

### Hint 1

Count value frequencies in both arrays up front; answering "how many
index pairs multiply to this square?" from a frequency map costs a few
lookups per element instead of a double loop over indices.

### Hint 2

Watch the arithmetic width: values reach `10^5`, so a square reaches
`10^10` and must be handled in 64-bit integers.
