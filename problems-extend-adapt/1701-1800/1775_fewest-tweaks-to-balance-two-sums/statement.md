# Fewest Tweaks To Balance Two Sums

## Description

You are given two integer arrays `nums1` and `nums2`, which may have
different lengths. Every value in either array is one of the six numbers
`1` through `6`.

One tweak lets you pick any single element of either array and overwrite
it with any value between `1` and `6`, inclusive.

Return the fewest number of tweaks needed to make the sum of `nums1`
equal to the sum of `nums2`, or `-1` if no amount of tweaking can level
them.

### Example 1

```text
Input: nums1 = [4,4,4], nums2 = [6,6,6]
Output: 2
Explanation: The sums are 12 and 18.
- Change nums2[0] to 1. The arrays are [4,4,4] and [1,6,6] — sums 12
  and 13.
- Change nums2[1] to 5. The arrays are [4,4,4] and [1,5,6] — both sum
  to 12.
```

### Example 2

```text
Input: nums1 = [1,1,1,1,1,1,1,1,1,1,1,1,1], nums2 = [6]
Output: -1
Explanation: Tweaking cannot change array lengths. Even with every
element of `nums1` reduced to `1` and the lone element of `nums2`
raised to `6`, the sums would still be 13 and 6, so they can never
meet.
```

### Example 3

```text
Input: nums1 = [5,5,5], nums2 = [1,1,1,1,1,1,2]
Output: 2
Explanation: The sums are 15 and 9.
- Change nums1[0] to 1. The arrays are [1,5,5] and [1,1,1,1,1,1,2] —
  sums 11 and 9.
- Change nums1[1] to 3. The arrays are [1,3,5] and [1,1,1,1,1,1,2] —
  both sum to 9.
```

### Constraints

- `1 <= nums1.length, nums2.length <= 10⁵`
- `1 <= nums1[i], nums2[i] <= 6`

## Hints

### Hint 1

Only the gap between the two sums matters. An element of the
larger-sum array can shrink that gap by at most `value - 1`, and an
element of the smaller-sum array by at most `6 - value`.

### Hint 2

Counting how many elements offer each gain size from `1` to `5` is
enough — spend the biggest gains first and stop once the gap closes.
The task is impossible exactly when one array is more than six times
as long as the other.
