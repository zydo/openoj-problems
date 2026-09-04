# Duplicate Within Reach II

## Description

You are given an integer array `nums` and an integer `k`. Determine
whether some value appears more than once at two positions that are close
enough together — formally, whether there exist two distinct indices `i`
and `j` with `nums[i] == nums[j]` and `abs(i - j) <= k`.

Return `true` if such a pair of positions exists, `false` otherwise.

### Example 1

```text
Input: nums = [4,2,8,4], k = 3
Output: true
Explanation: The value 4 appears at indices 0 and 3, and abs(0 - 3) = 3
is within the allowed reach of k = 3.
```

### Example 2

```text
Input: nums = [5,1,2,3,4], k = 1
Output: false
Explanation: Every value in the array is distinct, so no repeated value
exists at any distance, let alone within reach k = 1.
```

### Example 3

```text
Input: nums = [9,3,9,3,9], k = 2
Output: true
Explanation: The value 9 at indices 2 and 4 are only 2 apart, which is
within reach k = 2 (the pair at indices 0 and 2 also qualifies).
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`
- `0 <= k <= 10⁵`
