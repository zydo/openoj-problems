# Count Minimum-Led Subarrays

## Description

Call a subarray *minimum-led* when its first entry is no bigger than any entry
it contains — that is, the run opens on one of its own smallest values. A
subarray here is a contiguous, non-empty stretch of `nums`.

Return how many minimum-led subarrays `nums` has. Every single entry qualifies
on its own, so the count is at least `nums.length`.

### Example 1

```text
Input: nums = [5,1,3,2,4]
Output: 9
Explanation: The five one-entry runs all qualify. Beyond those, 1 leads
[1,3], [1,3,2] and [1,3,2,4], and 2 leads [2,4]. Nothing longer opens on 5 or
on 3, since a smaller value sits immediately to the right of each.
```

### Example 2

```text
Input: nums = [9,7,4]
Output: 3
Explanation: Values fall from left to right, so no run of two or more opens on
its smallest entry. Only the three single entries count.
```

### Example 3

```text
Input: nums = [4,4,4,4]
Output: 10
Explanation: Ties are allowed — "no bigger than" does not demand strictly
smaller — so every one of the 10 subarrays qualifies.
```

### Constraints

- `1 <= nums.length <= 5 * 10^4`
- `0 <= nums[i] <= 10^5`

## Hints

### Hint 1

Group the subarrays by where they start. Beginning at index `i` and walking
right, the run stays minimum-led until you meet a value strictly below
`nums[i]`; after that it never recovers.

### Hint 2

So each start contributes a block of consecutive lengths, and its size is the
gap between `i` and the first index to its right holding a strictly smaller
value (or the end of the array when there is none). Adding those gaps gives the
answer.

### Hint 3

Those "first strictly smaller to the right" positions can all be found in one
sweep with a stack of pending indices whose values never decrease from bottom to
top. Each index is pushed once and settled once.
