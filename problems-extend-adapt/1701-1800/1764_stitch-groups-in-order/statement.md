# Stitch Groups in Order

## Description

You are given a list `groups` of `n` integer arrays, and a single
integer array `nums`. Decide whether `nums` can be carved into `n`
disjoint contiguous windows such that window `i` (0-indexed) equals
`groups[i]` exactly, and every window lies entirely to the left of the
one after it — the windows must appear in `nums` in the same order the
groups are listed.

Disjoint means no position of `nums` may fall inside two windows.
Return `true` when such a carving exists and `false` otherwise.

### Example 1

```text
Input: groups = [[7,8],[9]], nums = [7,8,9]
Output: true
Explanation: Take [7,8] as the first window and [9] as the second.
The windows sit back to back and follow the group order.
```

### Example 2

```text
Input: groups = [[4],[2,6]], nums = [2,6,4]
Output: false
Explanation: Both patterns occur, but [4] only occurs after [2,6] —
the required order is the reverse, so no valid carving exists.
```

### Example 3

```text
Input: groups = [[5,5]], nums = [5,1,5]
Output: false
Explanation: The two 5s are separated by a 1, so [5,5] never occurs
as a contiguous window.
```

### Constraints

- `groups.length == n`
- `1 <= n <= 10^3`
- `1 <= groups[i].length`, `sum(groups[i].length) <= 10^3`
- `1 <= nums.length <= 10^3`
- `-10^7 <= groups[i][j], nums[k] <= 10^7`

## Hints

### Hint 1

The moment a group claims a window, every position up to that window's
end is spent — the remaining groups can only live in the suffix after
it.

### Hint 2

It is always safe to drop each group into its first still-available
occurrence: any plan that starts a group later starts the following
groups no earlier, so the earliest choice keeps the most room.
