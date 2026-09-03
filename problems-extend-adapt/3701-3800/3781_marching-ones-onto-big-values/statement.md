# Marching Ones Onto Big Values

## Description

You are given an integer array `nums` of length `n` and a binary string `s`
of the same length.

Your score starts at 0 and becomes the sum of `nums[i]` over every index
`i` where `s[i]` is `'1'`.

You may repeat a single kind of move as often as you like: choose an index
`i` with `0 <= i < n - 1` where `s[i] = '0'` and `s[i + 1] = '1'`, and
exchange those two characters. Return the largest score reachable this way.

### Example 1

```text
Input: nums = [5,1,8,2], s = "0011"
Output: 13
Explanation: The two '1' characters can both march left across the zeros,
so they can settle on the indices holding 8 and 5, the two largest values.
The score is 8 + 5 = 13.
```

### Example 2

```text
Input: nums = [3,6,4,7], s = "0110"
Output: 10
Explanation: Each '1' may only end up at or before its own starting index,
so neither can ever reach the 7 at the last position. Parking them on 6
and 4 yields 6 + 4 = 10, the best possible.
```

### Example 3

```text
Input: nums = [7,8,9], s = "000"
Output: 0
Explanation: No '1' exists, so nothing contributes to the score and no
move is even possible.
```

### Constraints

- `n == nums.length == s.length`
- `1 <= n <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `s[i]` is either `'0'` or `'1'`.

## Hints

### Hint 1

Think greedily: a `'1'` can only ever travel leftward, and two `'1'`s can
never swap past one another.

### Hint 2

Sweep the indices from left to right while keeping the values already seen
in a max-heap.

### Hint 3

Each index offers its value as a possible landing slot; when the sweep
meets a `'1'`, let it take the best slot offered so far by popping the
heap.
