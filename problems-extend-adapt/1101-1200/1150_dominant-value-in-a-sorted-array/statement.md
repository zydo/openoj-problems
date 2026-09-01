# Dominant Value in a Sorted Array

## Description

You are given an array `nums` of integers sorted in non-decreasing order,
along with an integer `target`. A value is **dominant** in `nums` when it
occurs strictly more than `nums.length / 2` times in the array.

Return `true` if `target` is dominant in `nums`, or `false` otherwise.

### Example 1

```text
Input: nums = [1,1,1,1,2,3,4], target = 1
Output: true
Explanation: The value 1 occupies 4 of the 7 slots, and 4 > 7 / 2 holds.
```

### Example 2

```text
Input: nums = [1,2,2,3], target = 2
Output: false
Explanation: The value 2 appears twice, and 2 > 4 / 2 is false — filling
exactly half the array is not enough.
```

### Example 3

```text
Input: nums = [4,4,4,4,4,4,9], target = 4
Output: true
Explanation: Six of the seven elements equal 4, and 6 > 7 / 2 holds.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i], target <= 10⁹`
- `nums` is sorted in non-decreasing order.

## Hints

### Hint 1

In a sorted array all equal values form one contiguous run, so counting
`target` is a positioning question, not a scan.

### Hint 2

Two boundary searches bracket that run: the first index whose value is at
least `target`, and the first whose value is strictly greater. The gap
between them is the number of occurrences.

### Hint 3

Dominance is `count > length / 2`; comparing `2 * count > length` says the
same thing without dividing.
