# Rebuilding to One Parity II

## Description

You are given an array `nums1` of `n` distinct integers, and you want to
rebuild it into an array `nums2` of the same length whose entries are all
odd together or all even together.

Slot `i` of the rebuild has exactly two possible fills:

- `nums2[i] = nums1[i]`, keeping the original value, or
- `nums2[i] = nums1[i] - nums1[j]` for a single index `j != i`, allowed
  only when the difference stays positive: `nums1[i] - nums1[j] >= 1`.

Each slot picks its fill independently, in any arrangement.

Return `true` if some completion of `nums2` lands entirely on one parity,
and `false` otherwise.

### Example 1

```text
Input: nums1 = [6,3,10]
Output: true
Explanation: Aim for all odd. Keep nums2[1] = 3, and let the even elements
subtract it: nums2[0] = 6 - 3 = 3 and nums2[2] = 10 - 3 = 7. Now
nums2 = [3, 3, 7], which is odd throughout.
```

### Example 2

```text
Input: nums1 = [8,4,2]
Output: true
Explanation: Every element is already even, so keeping each value as-is
gives nums2 = [8, 4, 2] — even throughout.
```

### Example 3

```text
Input: nums1 = [4,7,6]
Output: false
Explanation: All-even is out of reach because 7 is odd, and it has no
smaller odd element to subtract. All-odd is out of reach because 4 is the
smallest element: it has nothing smaller to subtract, and subtracting any
larger element would break the positivity rule, so 4 stays even forever.
```

### Constraints

- `1 <= n == nums1.length <= 10⁵`
- `1 <= nums1[i] <= 10⁹`
- `nums1` consists of distinct integers.

## Hints

### Hint 1

A subtraction flips parity exactly when the two operands differ in parity,
and it is legal only against a strictly smaller element.

### Hint 2

For the all-odd target, an odd minimum makes every even element able to
subtract it; for the all-even target, any odd element anywhere is already
fatal.
