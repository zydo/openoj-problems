# Windows That Reach Back

## Description

Given an integer array `nums` of length `n`, each index `i` with
`0 <= i < n` designates one contiguous window: it starts at
`start = max(0, i - nums[i])` and covers `nums[start ... i]`. Add up every
element of every designated window and return the grand total.

### Example 1

```text
Input: nums = [4,2,5,1]
Output: 27
Explanation:
i = 0: the window is [4], summing to 4
i = 1: the window is [4, 2], summing to 6
i = 2: the window is [4, 2, 5], summing to 11
i = 3: the window is [5, 1], summing to 6
Altogether 4 + 6 + 11 + 6 = 27.
```

### Example 2

```text
Input: nums = [1,1,1]
Output: 5
Explanation:
Every value is 1, so each window tries to reach back one step and gets
clamped at the array's start. The windows are [1], [1, 1], and [1, 1, 1],
summing to 1 + 2 + 2 = 5.
```

### Constraints

- `1 <= n == nums.length <= 100`
- `1 <= nums[i] <= 1000`

## Hints

### Hint 1

The limits are tiny — for each index you can simply walk its window and
sum the elements directly.
