# XOR Erasure Duel

## Description

An array `nums` is written on a board. Two players take turns removing exactly
one remaining number, with the first player moving first.

If a move leaves the bitwise XOR of all remaining numbers equal to `0`, the
player making that move loses immediately. The XOR of an empty collection is
`0`. Conversely, a player whose turn begins when the board's XOR is already
`0` wins immediately.

Assuming optimal play, return `true` if the first player wins and `false`
otherwise.

### Example 1

```text
Input: nums = [4]
Output: false
Explanation: Removing the only value leaves an empty board with XOR 0, so the
first player loses on that move.
```

### Example 2

```text
Input: nums = [4,4]
Output: true
Explanation: The board XOR is initially 0, so the first player wins before
making a removal.
```

### Example 3

```text
Input: nums = [1,2,4]
Output: false
```

### Constraints

- `1 <= nums.length <= 1000`
- `0 <= nums[i] < 2¹⁶`
