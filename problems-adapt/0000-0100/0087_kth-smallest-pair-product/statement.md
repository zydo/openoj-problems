# Kth Smallest Pair Product

## Description

You are given two integer arrays `nums1` and `nums2`, each sorted in
ascending order, and an integer `k`.

Form every product `nums1[i] * nums2[j]` — one value from each array —
giving `nums1.length * nums2.length` products in total, repeated values
included. Return the `k`-th smallest among them, counting from 1.

### Example 1

```text
Input: nums1 = [3,7], nums2 = [2,5], k = 3
Output: 15
Explanation: The products are 6, 15, 14, 35; in ascending order they are
6, 14, 15, 35. The 3rd smallest is 15.
```

### Example 2

```text
Input: nums1 = [-3,0,4], nums2 = [-2,1,3], k = 5
Output: 0
Explanation: The products are -9, -3, 6, 0, 0, 0, -8, 4, 12; ascending:
-9, -8, -3, 0, 0, 0, 4, 6, 12. The 5th smallest is 0 — every pairing of
the 0 produces one.
```

### Example 3

```text
Input: nums1 = [-4,1,2], nums2 = [-3,0,2], k = 2
Output: -6
Explanation: The products are 12, 0, -8, -3, 0, 2, -6, 0, 4; ascending:
-8, -6, -3, 0, 0, 0, 2, 4, 12. The 2nd smallest is -6 — the large values
of one array times the large values of the other land deepest.
```

### Constraints

- `1 <= nums1.length, nums2.length <= 5 * 10⁴`
- `-10⁵ <= nums1[i], nums2[j] <= 10⁵`
- `1 <= k <= nums1.length * nums2.length`
- both arrays are sorted in ascending order

## Hints

### Hint 1

For a candidate value `v`, ask how many pairs have product at most `v`.
How does that count behave as `v` grows — and which `v` must the k-th
smallest product then be?

### Hint 2

The count is computable without listing products: fix one factor `x` and
note that the qualifying partners `y` occupy one contiguous run of the
sorted other array.

### Hint 3

Which run — prefix or suffix — depends on the sign of `x`, and `x = 0`
collapses all its pairs to a single value. A binary search per `x` locates
the boundary of the run.

### Hint 4

Products reach about `10^10` in magnitude, so searching values needs a
64-bit range; roughly forty probes close in on the answer.
