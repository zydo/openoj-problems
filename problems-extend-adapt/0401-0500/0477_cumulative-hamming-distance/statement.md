# Cumulative Hamming Distance

## Description

The Hamming distance between two integers is the number of bit positions at
which they differ. For an array `nums`, add up the Hamming distance over
every unordered pair of values in it. Return that sum.

### Example 1

```text
Input: nums = [3,5,6]
Output: 6
Explanation: The pairs differ as follows: (3,5) at two bits, (3,6) at two
bits, and (5,6) at two bits, for a total of 6.
```

### Example 2

```text
Input: nums = [0,1]
Output: 1
```

### Example 3

```text
Input: nums = [7,7,7]
Output: 0
```

### Constraints

- `1 <= nums.length <= 10⁴`
- `0 <= nums[i] <= 10⁹`
- The answer fits in a signed 32-bit integer.
