# Pairs with a Positive Lead

## Description

You are given two integer arrays, `nums1` and `nums2`, both of length
`n`. Call an index pair `(i, j)` with `i < j` a _winning_ pair when the
first array's two entries out-add the second's:

`nums1[i] + nums1[j] > nums2[i] + nums2[j]`

Count the winning pairs.

### Example 1

```text
Input: nums1 = [3,1,4,2], nums2 = [1,3,2,3]
Output: 3
Explanation: The winning pairs are:
- (0, 2) where 3 + 4 > 1 + 2.
- (0, 3) where 3 + 2 > 1 + 3.
- (2, 3) where 4 + 2 > 2 + 3.
```

### Example 2

```text
Input: nums1 = [5,6,2,7,4], nums2 = [4,2,5,1,6]
Output: 7
Explanation: The winning pairs are:
- (0, 1) where 5 + 6 > 4 + 2.
- (0, 3) where 5 + 7 > 4 + 1.
- (1, 2) where 6 + 2 > 2 + 5.
- (1, 3) where 6 + 7 > 2 + 1.
- (1, 4) where 6 + 4 > 2 + 6.
- (2, 3) where 2 + 7 > 5 + 1.
- (3, 4) where 7 + 4 > 1 + 6.
```

### Example 3

```text
Input: nums1 = [9,1,1,3,5,7], nums2 = [2,8,4,6,2,5]
Output: 5
Explanation: Index 0 pairs positively with indices 2, 3, 4, and 5
(9 out-adds every partner it meets there), and indices 4 and 5 form the
fifth winning pair, 5 + 7 > 2 + 5.
```

### Constraints

- `n == nums1.length == nums2.length`
- `1 <= n <= 10⁵`
- `1 <= nums1[i], nums2[i] <= 10⁵`

## Hints

### Hint 1

Move every term to one side: the condition is `d[i] + d[j] > 0` for
`d[k] = nums1[k] - nums2[k]`, a single array and a single inequality.

### Hint 2

Once the question is about one difference array, sorting it makes all
the positive-sum pairs countable in one sweep from both ends.
