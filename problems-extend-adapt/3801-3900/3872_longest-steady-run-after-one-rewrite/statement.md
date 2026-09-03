# Longest Steady Run After One Rewrite

## Description

You are given an integer array `nums`.

A contiguous run inside `nums` is steady when consecutive elements advance
by the same amount everywhere in the run — `nums[i+1] - nums[i]` takes a
single fixed value from the left end to the right end.

Before you measure anything, you may rewrite at most one element: pick any
single slot of `nums` and swap in any integer you like. Then choose a
contiguous subarray of the resulting array.

Return the greatest length a steady subarray can reach after that rewrite.

### Example 1

```text
Input: nums = [20,15,10,40,0]
Output: 5
Explanation: Rewrite nums[3] = 40 as 5. The array becomes
[20, 15, 10, 5, 0], and the whole array is a steady run: every step moves
by -5. The subarray [20, 15, 10, 5, 0] has length 5.
```

### Example 2

```text
Input: nums = [4,8,12,5,6,7]
Output: 4
Explanation: Rewrite nums[3] = 5 as 16. The array becomes
[4, 8, 12, 16, 6, 7], and [4, 8, 12, 16] is a steady run advancing by 4,
of length 4. No rewrite achieves a longer steady subarray.
```

### Example 3

```text
Input: nums = [50,40,30,8,10,12,14]
Output: 5
Explanation: Rewrite nums[3] = 8 as 20. The array becomes
[50, 40, 30, 20, 10, 12, 14], whose prefix [50, 40, 30, 20, 10] steps by
-10 throughout, so a steady subarray of length 5 is achievable.
```

### Constraints

- `4 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

Two linear sweeps tabulate, for every index, the length of the longest
steady run ending there and the length of the longest one starting there.

### Hint 2

A rewrite only pays off when the chosen subarray covers the rewritten
slot. When the subarray stops at that slot, one tabulated side simply
extends by one.

### Hint 3

When the subarray crosses the slot, both sides must share one difference,
forced to `(nums[p+1] - nums[p-1]) / 2` — an odd sum permits no bridge.
Take the maximum candidate over every slot, and against the best run with
no rewrite at all.
