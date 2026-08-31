# Median Convergence II

## Description

Given an integer array `nums`, return the fewest moves needed to make every
element equal. In one move you may change a single element by either `+1` or
`-1`.

### Example 1

```text
Input: nums = [1,2,4,7]
Output: 8
Explanation: Gathering on 2 costs |1-2| + |2-2| + |4-2| + |7-2| = 1+0+2+5.
```

### Example 2

```text
Input: nums = [3,3,3]
Output: 0
Explanation: The elements already agree.
```

### Example 3

```text
Input: nums = [-5,2,3,10]
Output: 16
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`
- Test cases are designed so that the answer fits in a 32-bit integer.
