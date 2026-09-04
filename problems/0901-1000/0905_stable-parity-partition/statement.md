# Stable Parity Partition

## Description

Rearrange the integer array `nums` so that every even value appears before
every odd value. The judge uses one deterministic form: preserve the original
relative order within the even values and also within the odd values.

Return that stable parity partition.

### Example 1

```text
Input: nums = [5,2,7,8,1,4]
Output: [2,8,4,5,7,1]
Explanation: The evens retain their input order as 2, 8, 4; the odds then
retain theirs as 5, 7, 1.
```

### Example 2

```text
Input: nums = [1,3,5,2,4]
Output: [2,4,1,3,5]
```

### Constraints

- `1 <= nums.length <= 5000`
- `0 <= nums[i] <= 5000`
