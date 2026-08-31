# Longest Index Cycle

## Description

You are given an integer array `nums` of length `n` that is a
permutation of every integer from `0` to `n - 1`.

For a chosen starting index `k`, build a chain by repeatedly following
the array as a function: begin at `nums[k]`, then jump to
`nums[nums[k]]`, then to `nums[nums[nums[k]]]`, and so on, adding each
new value to a set. Stop the moment the next value would already be in
the set.

Return the size of the largest such chain over every possible starting
index `k`.

### Example 1

```text
Input: nums = [2,0,1,4,3]
Output: 3
Explanation: Starting at k = 0 gives nums[0] = 2, nums[2] = 1,
nums[1] = 0, which is already in the chain, so the chain is {2, 1, 0}
with 3 elements. Starting at k = 3 gives {4, 3} with only 2 elements, so
3 is the best result.
```

### Example 2

```text
Input: nums = [3,0,1,2]
Output: 4
```

### Constraints

- `1 <= nums.length <= 10^5`
- `0 <= nums[i] < nums.length`
- Every value in `nums` is distinct.
