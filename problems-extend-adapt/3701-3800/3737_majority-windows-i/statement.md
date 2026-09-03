# Majority Windows I

## Description

You are given an integer array `nums` and an integer `target`.

Count the contiguous windows inside `nums` — the subarrays — in which
`target` holds a strict majority, meaning it appears strictly more often
than every other value put together, i.e. strictly more than half of the
window's length.

Return that count.

### Example 1

```text
Input: nums = [4,9,4,4], target = 4
Output: 7
Explanation: The windows where 4 is the strict majority are nums[0..0] =
[4], nums[2..2] = [4], nums[3..3] = [4], nums[0..2] = [4,9,4], nums[2..3]
= [4,4], nums[1..3] = [9,4,4], and nums[0..3] = [4,9,4,4] — seven in all.
```

### Example 2

```text
Input: nums = [6,6,6,6], target = 6
Output: 10
Explanation: Every one of the 4 x 5 / 2 = 10 subarrays consists solely of
6s, so all of them qualify.
```

### Example 3

```text
Input: nums = [2,5,8], target = 6
Output: 0
Explanation: The value 6 never occurs in nums, so no window can have it
as a majority and the count is zero.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 10^9`
- `1 <= target <= 10^9`

## Hints

### Hint 1

A plain double loop over both ends is fast enough at this size.

### Hint 2

A window qualifies exactly when twice the number of `target` occurrences
inside it exceeds its length; keep that occurrence count current as the
window's right edge slides forward.
