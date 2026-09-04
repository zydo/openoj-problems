# Anchoring the Extremes

## Description

You are given a 0-indexed integer array `nums`, and you may repeatedly
swap two neighboring elements.

Call the array anchored once its smallest element — any copy of it, if
the value repeats — sits in the leftmost position and its largest element
(again, any copy) sits in the rightmost position. Elements in between are
unconstrained.

Return the fewest neighboring swaps that make `nums` anchored.

### Example 1

```text
Input: nums = [4,2,9,7,1,5]
Output: 6
Explanation: The smallest element, 1, starts at index 4 and needs four
swaps to reach the front; the largest, 9, starts at index 2 and needs
three to reach the back. Since 9 stands left of 1, one swap moves both
toward their ends at once, so the total is 4 + 3 - 1 = 6.
```

### Example 2

```text
Input: nums = [11]
Output: 0
Explanation: A lone element is already both the leftmost minimum and the
rightmost maximum, so the array is anchored as it stands.
```

### Example 3

```text
Input: nums = [2,8,3,9,1]
Output: 4
Explanation: The 1 at index 4 takes four swaps to walk to the front, and
the 9 at index 3 takes one to step to the back — the same swap moves both
elements past each other, giving 4 + 1 - 1 = 4.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^5`

## Hints

### Hint 1

When several copies of the minimum or the maximum exist, promoting the
leftmost minimum and the rightmost maximum keeps the travel distances
shortest — any other pick can only add swaps.

### Hint 2

Spend each swap moving one of the two extremes a single step toward its
end position — except when the two must pass each other, which one swap
accomplishes for both.
