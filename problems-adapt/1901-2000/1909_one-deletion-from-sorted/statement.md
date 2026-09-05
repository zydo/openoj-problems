# One Deletion from Sorted

## Description

An array climbs strictly when every element is larger than the one
before it: `nums[i - 1] < nums[i]` for every valid `i`.

You are given a **0-indexed** integer array `nums`. Report whether the
array can be brought into that shape by erasing one element. An array
that already climbs strictly counts as success — deleting from it keeps
it climbing, so the answer is `true` there as well.

### Example 1

```text
Input: nums = [4,7,2,8]
Output: true
Explanation: Erasing the 2 splices the ends together into [4,7,8],
which climbs strictly.
```

### Example 2

```text
Input: nums = [5,4,3]
Output: false
Explanation: The three possible single deletions give [4,3], [5,3],
and [5,4] — none of them climbs.
```

### Example 3

```text
Input: nums = [1,2,3]
Output: true
Explanation: The array already climbs strictly, so the requirement is
met no matter which element (if any) goes.
```

### Constraints

- `2 <= nums.length <= 1000`
- `1 <= nums[i] <= 1000`

## Hints

### Hint 1

Everything hinges on the first spot where the climb breaks — find it
before thinking about deletions.

### Hint 2

When `nums[i - 1] >= nums[i]`, only those two elements are plausible
deletions; one pass can weigh both without ever copying the array.
