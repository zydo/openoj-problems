# Lowest-Sum Cross-Array Pairs

## Description

The integer arrays `nums1` and `nums2` are each sorted in non-decreasing
order. Form a pair by choosing one value from each array.

Return the `k` pairs with the lowest sums. Output them in non-decreasing sum
order. If two sums are equal, emit the pair using the earlier index in
`nums1` first. Equal values selected from duplicate positions may therefore
produce identical output pairs.

### Example 1

```text
Input: nums1 = [-4,2,9], nums2 = [-1,3,8], k = 5
Output: [[-4,-1],[-4,3],[2,-1],[-4,8],[2,3]]
```

### Example 2

```text
Input: nums1 = [0,0,5], nums2 = [-2,1], k = 4
Output: [[0,-2],[0,-2],[0,1],[0,1]]
```

### Constraints

- `1 <= nums1.length, nums2.length <= 10^5`
- Every value in either array is between `-10^9` and `10^9`, inclusive.
- Both arrays are sorted in non-decreasing order.
- `1 <= k <= 10^4`
- `k <= nums1.length * nums2.length`

## Hints

### Hint 1

For a fixed index in `nums1`, pairing it with `nums2[0]` starts a sorted
sequence of candidate sums.

### Hint 2

Keep the next unseen pair from each active sequence in a min-heap. After
removing `(i, j)`, advance only that sequence to `(i, j + 1)`.

### Hint 3

At most `k` sequences can contribute to the first `k` results, so there is no
need to materialize the full Cartesian product.
