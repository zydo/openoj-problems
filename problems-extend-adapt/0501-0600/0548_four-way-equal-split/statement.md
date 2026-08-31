# Four-Way Equal Split

## Description

You are given an integer array `nums` of length `n`. Decide whether three
boundary positions `i`, `j`, and `k` can be chosen so that `nums` breaks into
four contiguous blocks of equal total, with the single element sitting on
each boundary left out of every block.

Formally, an index triple must satisfy `0 < i`, `i + 1 < j`, and
`j + 1 < k < n - 1`. Given such a triple, the four blocks are
`nums[0..i-1]`, `nums[i+1..j-1]`, `nums[j+1..k-1]`, and `nums[k+1..n-1]`; the
entries `nums[i]`, `nums[j]`, and `nums[k]` themselves never belong to any
block. Return `true` if some triple makes all four block sums equal, and
`false` if no triple does.

### Example 1

```text
Input: nums = [3,6,3,6,3,6,3]
Output: true
Explanation: i = 1, j = 3, k = 5.
nums[0..0] = [3], sum 3
nums[2..2] = [3], sum 3
nums[4..4] = [3], sum 3
nums[6..6] = [3], sum 3
```

### Example 2

```text
Input: nums = [5,1,5,1,5,1,5,1]
Output: false
```

### Example 3

```text
Input: nums = [4,0,2,2,0,4,0,2,2,0,4]
Output: true
Explanation: i = 1, j = 5, k = 9.
nums[0..0] = [4], sum 4
nums[2..4] = [2,2,0], sum 4
nums[6..8] = [0,2,2], sum 4
nums[10..10] = [4], sum 4
```

### Constraints

- `n == nums.length`
- `1 <= n <= 2000`
- `-10⁶ <= nums[i] <= 10⁶`
