# Zigzag Arrangement

## Description

Given an integer array `nums`, rearrange its elements so that they zigzag:
`nums[0] <= nums[1] >= nums[2] <= nums[3] >= ...`, alternating between a
rise and a fall at every step. Assume a valid rearrangement always
exists for the given input.

This judge observes only the value your function returns, so mutate
`nums` into a zigzag order (in place or otherwise) and hand back the
rearranged array.

More than one arrangement can satisfy the zigzag pattern for the same
input, so to keep the expected output well defined, the judge fixes one
specific repair procedure: walk `i` from `1` to the end, and whenever the
adjacent pair `(nums[i-1], nums[i])` violates the relation demanded at
position `i` — `nums[i-1] <= nums[i]` when `i` is odd, `nums[i-1] >=
nums[i]` when `i` is even — swap those two entries; leave a pair that
already satisfies its relation untouched. Your output is checked
against the result of applying exactly this procedure.

### Example 1

```text
Input: nums = [8,3,9,1,5,2]
Output: [3,9,1,8,2,5]
Explanation: Other zigzag orderings of this multiset exist, but the
pinned repair procedure produces exactly this one.
```

### Example 2

```text
Input: nums = [5,5,4,5,2,9]
Output: [5,5,4,5,2,9]
Explanation: Every adjacent pair already satisfies its required relation,
so the repair procedure leaves the array unchanged.
```

### Constraints

- `1 <= nums.length <= 5 * 10⁴`
- `0 <= nums[i] <= 10⁴`
- It is guaranteed that there will be a valid answer for the given input
  `nums`.

### Follow-up

Could you solve the problem in `O(n)` time complexity?
