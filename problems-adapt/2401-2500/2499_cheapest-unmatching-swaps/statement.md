# Cheapest Unmatching Swaps

## Description

Two equal-length arrays `nums1` and `nums2` start aligned index by index.
One operation swaps two entries of `nums1` and costs the sum of their
indices. You may apply any number of operations. Find the minimum total cost
so that, afterwards, `nums1[i] != nums2[i]` holds at every index — or `-1`
if that is impossible.

### Example 1

```text
Input: nums1 = [1,2,3], nums2 = [1,2,3]
Output: 3
Explanation: Swap indices 0 and 1 (cost 1), giving nums1 = [2,1,3], then
swap indices 0 and 2 (cost 2), giving nums1 = [3,1,2] — every aligned pair
now differs, for a total cost of 3. No cheaper pair of swaps fixes all three
positions.
```

### Example 2

```text
Input: nums1 = [1,2,2], nums2 = [1,2,2]
Output: -1
Explanation: The only value that can sit at index 0 is 1, and nums2[0] is 1
too, so index 0 can never be fixed.
```

### Constraints

- `n == nums1.length == nums2.length`
- `1 <= n <= 10⁵`
- `1 <= nums1[i], nums2[i] <= n`

## Hints

### Hint 1

Only indices where `nums1[i] == nums2[i]` ever need attention; an aligned
mismatch can be ignored.

### Hint 2

Consider which values are involved at the mismatched indices and whether the
remaining indices can absorb the necessary swaps.
