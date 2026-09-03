# Covering Every Target With Fewest Bumps

## Description

You have an array `nums` of integer values and a short list `target` of
target values. One operation picks any element of `nums` and raises it by
1; an element may be raised any number of times.

Every target value must end up "covered": for each `target[i]`, at least
one element of `nums` must be a multiple of `target[i]` when you stop. A
single raised element is allowed to cover several targets at once, as long
as it is a multiple of each of them.

Return the smallest total number of +1 operations that covers all the
targets.

### Example 1

```text
Input: nums = [3,8], target = [6]
Output: 3
Explanation: Raising 3 to 6 takes three operations and makes it a
multiple of 6. Raising 8 instead (8 to 12) would take four, so 3 is
optimal.
```

### Example 2

```text
Input: nums = [4,7,10], target = [6,9]
Output: 4
Explanation: Raise 4 to 6 (two operations) to cover target 6, and 7 to 9
(two operations) to cover target 9. No plan spends fewer than four
operations.
```

### Example 3

```text
Input: nums = [9,2,15], target = [3]
Output: 0
Explanation: 9 is already a multiple of 3, so nothing needs to move.
```

### Constraints

- `1 <= nums.length <= 5 * 10⁴`
- `1 <= target.length <= 4`
- `target.length <= nums.length`
- `1 <= nums[i], target[i] <= 10⁴`

## Hints

### Hint 1

There are at most four targets, so every way of partitioning them into
groups fits in a bitmask. Targets that share one raised element must land
on a common multiple — the LCM of the group.
