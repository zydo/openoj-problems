# Fixed-Gap Pair Count

## Description

Count the distinct unordered pairs of array values whose absolute difference
is exactly `k`. Two pairs are the same unordered pair when they use the same
two values, regardless of which indices supplied them.

### Example 1

```text
Input: nums = [3,1,4,1,5], k = 2
Output: 2
Explanation: The pairs are (1,3) and (3,5); the two copies of 1 still form
only one pair.
```

### Example 2

```text
Input: nums = [1,2,3,4,5], k = 1
Output: 4
```

### Example 3

```text
Input: nums = [1,3,1,5,4], k = 0
Output: 1
Explanation: Only the value 1 appears twice, forming one (1,1) pair.
```

### Constraints

- `1 <= nums.length <= 10⁴`
- `-10⁷ <= nums[i] <= 10⁷`
- `0 <= k <= 10⁷`
