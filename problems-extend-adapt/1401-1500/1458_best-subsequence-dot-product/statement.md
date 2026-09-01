# Best Subsequence Dot Product

## Description

You receive two integer arrays, `nums1` and `nums2`.

Choose a non-empty subsequence from each array such that the two choices
have the same length, and score the pair by their dot product: the sum
of the element-by-element products after lining the choices up position
by position. A subsequence keeps the left-to-right order of its array —
elements may be dropped but never reordered.

Return the largest score that any equal-length pair of subsequences can
reach.

### Example 1

```text
Input: nums1 = [2,3,-1,4], nums2 = [1,-2,5,-3]
Output: 25
Explanation: Take [3,-1,4] from nums1 and [1,-2,5] from nums2. Lined up
position by position, the products are 3*1, (-1)*(-2), and 4*5, which
sum to 25.
```

### Example 2

```text
Input: nums1 = [-5,-4], nums2 = [3,6]
Output: -12
Explanation: Every elementwise product available here is negative, so
the best move is to keep exactly one pair: [-4] from nums1 against [3]
from nums2, scoring -12.
```

### Example 3

```text
Input: nums1 = [7], nums2 = [-2]
Output: -14
Explanation: Each array holds a single element, so the only possible
pair scores 7*(-2) = -14.
```

### Constraints

- `1 <= nums1.length, nums2.length <= 500`
- `-1000 <= nums1[i], nums2[i] <= 1000`

## Hints

### Hint 1

Try a two-sequence table: let `dp[i][j]` hold the best score with the
choices drawn from the suffix of `nums1` starting at `i` and the suffix
of `nums2` starting at `j`, both non-empty. Pairing the two current
elements may continue into the remaining suffixes or stop right there;
the other options each drop one of the two heads.
