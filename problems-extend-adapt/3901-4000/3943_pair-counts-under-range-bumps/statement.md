# Pair Counts Under Range Bumps

## Description

You are given integer arrays `nums1` and `nums2`, together with a list
`queries`. Every query takes one of two shapes:

- `[1, x, y, val]` — add `val` to every entry of `nums2` from index `x`
  through index `y`, inclusive;
- `[2, tot]` — report how many pairs `(j, k)` satisfy
  `nums1[j] + nums2[k] == tot`.

Return the answers to all counting queries, in the order they were asked.

### Example 1

```text
Input: nums1 = [3,1], nums2 = [2,5,2], queries = [[2,7],[1,0,2,2],[2,7]]
Output: [0,2]
Explanation: At first no entry of nums2 completes a sum of 7 with 3 or
1. Raising every entry by 2 turns nums2 into [4,7,4], and now both
copies of 4 pair with the 3, so the count is 2.
```

### Example 2

```text
Input: nums1 = [4], nums2 = [1,2,3], queries = [[2,5],[1,2,2,10],[2,17]]
Output: [1,1]
Explanation: Only 4 + 1 makes 5. After the last entry jumps from 3 to
13, the sole pair summing to 17 is 4 + 13.
```

### Example 3

```text
Input: nums1 = [7], nums2 = [1], queries = [[2,5]]
Output: [0]
Explanation: 7 + 1 = 8 misses 5, so nothing is counted.
```

### Constraints

- `1 <= nums1.length <= 5`
- `1 <= nums2.length <= 5 * 10⁴`
- `1 <= nums1[i], nums2[i] <= 10⁵`
- `1 <= queries.length <= 5 * 10⁴`
- Each query has the form `[1, x, y, val]` or `[2, tot]`.
- `0 <= x <= y < nums2.length`
- `1 <= val <= 10⁵`
- `1 <= tot <= 10⁹`

### Hint 1

`nums1` is tiny, so a counting query only needs to ask, for each distinct
`nums1` value, how many current `nums2` entries equal the complement.

### Hint 2

Slice `nums2` into blocks of roughly square-root length and give each
block a pending addition plus a frequency table of its true current
values.

### Hint 3

An update covering a block wholesale just raises its pending addition;
the two partly covered ends are materialized, edited entry by entry, and
have their tables rebuilt. A counting query reads each block's table at
`tot - nums1[j]` minus that block's pending addition.
