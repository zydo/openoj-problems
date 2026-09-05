# Ordered Target Compositions

## Description

You receive an array `nums` of distinct positive integers and a positive
integer `target`. Count the ordered sequences of values from `nums` whose
total is exactly `target`.

A value may be used more than once. Order matters: sequences containing the
same values in different positions are counted separately. The test data
ensures that the returned count fits in a signed 32-bit integer.

### Example 1

```text
Input: nums = [2,3,5], target = 8
Output: 6
Explanation: Six ordered sequences reach 8, including [3, 5], [5, 3],
[2, 3, 3], and [3, 3, 2].
```

### Example 2

```text
Input: nums = [4,6], target = 9
Output: 0
Explanation: No sequence formed from 4 and 6 can total 9.
```

### Constraints

- `1 <= nums.length <= 200`
- `1 <= nums[i] <= 1000`
- All values in `nums` are distinct.
- `1 <= target <= 1000`

### Follow-up

How would allowing negative values affect the count? What additional
restriction would make that variant finite?
