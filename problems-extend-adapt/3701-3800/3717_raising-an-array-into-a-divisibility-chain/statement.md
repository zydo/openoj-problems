# Raising An Array Into A Divisibility Chain

## Description

Given an integer array `nums`, we want to bend it into a divisibility chain:
starting from the second element, every value must be an exact multiple of the
one to its left — that is, `nums[i]` must be divisible by `nums[i - 1]` for
each index `i > 0`.

The only move available is a raise: pick any index `i > 0` and add 1 to
`nums[i]`. The element at index 0 is pinned and can never change. Raises may
be applied any number of times, in any mix across positions.

Return the smallest total number of raises that turns `nums` into a
divisibility chain.

### Example 1

```text
Input: nums = [2,5,10]
Output: 3
Explanation: Raise nums[1] once and nums[2] twice, reaching [2,6,12]. Each
element is now a multiple of its left neighbor, and no fewer than 3 raises
can do it.
```

### Example 2

```text
Input: nums = [8,3,24]
Output: 5
Explanation: The middle value must land on a multiple of 8 that is at least
3, so it climbs to 8; 24 already is a multiple of 8. The five raises produce
[8,8,24].
```

### Example 3

```text
Input: nums = [7,7,14,4]
Output: 10
Explanation: The chain holds through the 14, but the trailing 4 has to become
a multiple of 14, and the nearest such value at or above 4 is 14 itself — ten
raises give [7,7,14,14].
```

### Example 4

```text
Input: nums = [9]
Output: 0
Explanation: A single element is a divisibility chain already, so nothing
needs to move.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 50`

## Hints

### Hint 1

Think about where each position ends up rather than which operations run:
index 0 keeps its value, and every later index finishes on some value no
smaller than the one it started with.

### Hint 2

Let dp[v] be the fewest raises that complete a valid chain over the processed
prefix while leaving the last element equal to v, and fill these states left
to right.

### Hint 3

A state v at index i can only extend states u at index i - 1 whose value u
divides v, at an extra cost of v - nums[i]. Something must also bound v from
above — argue that an optimal chain never climbs far past the largest
starting value.
