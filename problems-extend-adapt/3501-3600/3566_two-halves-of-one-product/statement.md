# Two Halves Of One Product

## Description

An integer array `nums` holds distinct positive integers, and you are
also given an integer `target`.

Decide whether `nums` can be split into two non-empty groups that share
no element — every element landing in exactly one group — where the
product of the numbers inside each group comes out equal to `target`.

Return true when such a split exists and false otherwise.

### Example 1

```text
Input: nums = [6,8,4,12,1], target = 48
Output: true
Explanation: The groups [6, 8] and [1, 4, 12] both multiply out to 48 —
6 * 8 == 48 and 1 * 4 * 12 == 48.
```

### Example 2

```text
Input: nums = [2,3,5], target = 6
Output: false
Explanation: The number 5 divides no product that equals 6, so no split
of nums can put 6 on both sides.
```

### Example 3

```text
Input: nums = [7,5,35], target = 35
Output: true
Explanation: The singleton [35] already holds the target, and the
remaining pair [7, 5] multiplies to 35 as well.
```

### Constraints

- `3 <= nums.length <= 12`
- `1 <= target <= 10¹⁵`
- `1 <= nums[i] <= 100`
- All elements of `nums` are distinct.

## Hints

### Hint 1

Only 12 elements exist, so every way of splitting can be examined
directly.

### Hint 2

Encode each candidate side as a bitmask; its complement is the other
side, and a product that overshoots `target` can abandon the branch
early.
