# Rebuilding to One Parity I

## Description

You are given an array `nums1` of `n` distinct integers, and you want to
rebuild it into an array `nums2` of the same length whose entries are all
odd together or all even together.

Slot `i` of the rebuild has exactly two possible fills:

- `nums2[i] = nums1[i]`, keeping the original value, or
- `nums2[i] = nums1[i] - nums1[j]` for any single index `j != i`.

Each slot picks its fill independently, in any arrangement.

Return `true` if some completion of `nums2` lands entirely on one parity,
and `false` otherwise.

### Example 1

```text
Input: nums1 = [5,2,8]
Output: true
Explanation: Aim for all odd. Keep nums2[0] = 5, and fill the even slots by
subtracting the odd element: nums2[1] = 2 - 5 = -3 and nums2[2] = 8 - 5 = 3.
Now nums2 = [5, -3, 3], which is odd throughout.
```

### Example 2

```text
Input: nums1 = [4,6,10]
Output: true
Explanation: Every element is already even, so keeping each value as-is
gives nums2 = [4, 6, 10] — even throughout.
```

### Constraints

- `1 <= n == nums1.length <= 100`
- `1 <= nums1[i] <= 100`
- `nums1` consists of distinct integers.

## Hints

### Hint 1

Only how many odd numbers `nums1` contains can decide anything — the actual
values never matter.

### Hint 2

Count the odds and check both targets: all-even needs either no odd element
or at least two, while all-odd needs at least one odd to subtract from the
evens.
