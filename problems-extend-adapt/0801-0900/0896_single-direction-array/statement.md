# Single-Direction Array

## Description

Call an integer array single-direction when it never reverses its ordering:
it may stay the same or rise as it is read from left to right, or it may stay
the same or fall throughout.

Given `nums`, return `true` when it has either form and `false` when it
contains both an upward and a downward change.

### Example 1

```text
Input: nums = [4,4,1,-2]
Output: true
Explanation: Equal neighbors are allowed, and the remaining values only fall.
```

### Example 2

```text
Input: nums = [2,2,5,1]
Output: false
Explanation: The rise from 2 to 5 and later drop to 1 require opposite
directions.
```

### Example 3

```text
Input: nums = [7]
Output: true
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁵ <= nums[i] <= 10⁵`
