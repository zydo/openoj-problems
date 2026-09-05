# Cheapest Window Leveling

## Description

You are given an integer array `nums` and an integer `k`. A single move
raises or lowers one element by exactly 1, and you may make as many moves
as you like. Return the smallest total number of moves that leaves some
window of `k` consecutive elements all holding one common value.

### Example 1

```text
Input: nums = [8,1,5,9,4], k = 3
Output: 5
Explanation: Work on the window [5, 9, 4]. Lower the 9 to 5 with 4 moves
and raise the 4 to 5 with 1 move, after which the window reads [5, 5, 5].
That costs 5 moves, and no other window can be leveled more cheaply.
```

### Example 2

```text
Input: nums = [12,4,7,7,1], k = 2
Output: 0
Explanation: The adjacent pair [7, 7] is already a window of equal
elements, so no moves are needed.
```

### Example 3

```text
Input: nums = [-6,10,-6], k = 2
Output: 16
Explanation: Both windows contain one -6 and one 10. Raising the 10-side
or lowering it to meet its neighbor costs 16 moves either way, and no
cheaper plan exists.
```

### Constraints

- `2 <= nums.length <= 10⁵`
- `-10⁶ <= nums[i] <= 10⁶`
- `2 <= k <= nums.length`

## Hints

### Hint 1

Pick the common value for a fixed window deliberately: the moves needed
sum to `|x - t|` over the window's elements `x`, and that total is lowest
when `t` is a middle value of the window.

### Hint 2

Hold the window's lower and upper halves in two heaps so the middle value
can keep up as the window slides one position at a time.

### Hint 3

Maintain running sums for both halves as well; then each window's total
cost falls out with a couple of multiplications and subtractions.
