# Largest Subarray Sum

## Description

A *block* of `nums` is a run of one or more consecutive entries. Every block
has a sum; return the largest sum any block of `nums` achieves.

A block must contain at least one entry, so when every entry is negative the
answer is negative too.

### Example 1

```text
Input: nums = [-3,5,-6,4,-1,3,-2,1,-4]
Output: 6
Explanation: The block [4,-1,3] sums to 6. No other block does better —
including the single 5, and including [4,-1,3,-2,1], which the trailing -2
pulls back down.
```

### Example 2

```text
Input: nums = [-7]
Output: -7
Explanation: One entry, one block.
```

### Example 3

```text
Input: nums = [2,3,-1,4,5]
Output: 13
Explanation: The whole array wins: the lone -1 costs less than the 9 that
follows it is worth.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`

**Follow up:** After finding the `O(n)` scan, try assembling the same answer by
splitting the array in half and merging the two results — a harder argument for
the same value.

## Hints

### Hint 1

Every block ends somewhere. If you knew, for each position, the largest sum of
a block ending exactly there, the answer would be the largest of those numbers.

### Hint 2

That per-position quantity has a one-step rule. A block ending at `i` either
grew out of a block ending at `i - 1`, or it starts at `i` and nothing precedes
it. Take whichever is larger.

### Hint 3

Reaching a running sum below zero means the prefix behind you subtracts from
anything ahead, so abandon it. Seed the scan with the first entry rather than
zero, or arrays that are entirely negative come out wrong.
