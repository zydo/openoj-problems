# The Divisor Ladder Pull-Down

## Description

You are handed an integer array `nums`.

One move is available, and you may take it as many times as you like:

- Pick two indices `a` and `b` with `nums[a] % nums[b] == 0`.
- Overwrite `nums[a]` with `nums[b]`.

Every move therefore slides a value down onto another value that divides it
evenly. Values can keep sliding as long as each new target still divides
them, so a number can travel several rungs before it settles.

Report the smallest total the array can reach once no sequence of moves can
lower it further.

### Example 1

```text
Input: nums = [8,4,3]
Output: 11
Explanation:
    Take a = 0 and b = 1: nums[0] = 8 and nums[1] = 4, and 8 % 4 == 0, so
    nums[0] becomes 4.
    The array is now [4, 4, 3], and nothing divides 4 or 3 among the other
    entries, so play stops. The answer is 4 + 4 + 3 = 11.
```

### Example 2

```text
Input: nums = [9,3,6,5]
Output: 14
Explanation:
    Take a = 0, b = 1: 9 % 3 == 0, so nums[0] becomes 3.
    Take a = 2, b = 1: 6 % 3 == 0, so nums[2] becomes 3.
    The array is now [3, 3, 3, 5]. Neither 3 nor 5 divides the other, so
    the sum cannot drop again: 3 + 3 + 3 + 5 = 14.
```

### Example 3

```text
Input: nums = [11,13,7]
Output: 31
Explanation:
    No entry divides another, so every candidate move fails its remainder
    test and the array is stuck at 11 + 13 + 7 = 31.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`

### Hint 1

A chain of moves can only ever carry a value down to some value that was
already in the array, so each entry ends up as the smallest present number
that divides it.

### Hint 2

Mark which values occur, walk the present values in increasing order as
candidate divisors, and stamp each present multiple with the first divisor
that reaches it; then add up where every entry landed.
