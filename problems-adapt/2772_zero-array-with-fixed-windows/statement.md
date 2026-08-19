# Zero the Array with Fixed Windows

## Description

You are given an integer array `nums` and a positive integer `k`.

One move takes any `k` consecutive cells of the array and subtracts `1` from
each of them. You may make the move any number of times, reusing and overlapping
windows freely.

Return `true` if the whole array can be driven to all zeros this way, or
`false` if it cannot.

### Example 1

```text
Input: nums = [1,1,3,2,2,0], k = 3
Output: true
Explanation: Three moves suffice:
- On [1,1,3] the array becomes [0,0,2,2,2,0].
- On the window starting at index 2 it becomes [0,0,1,1,1,0].
- Repeating that window zeroes the remaining entries.
```

### Example 2

```text
Input: nums = [3,1,2], k = 3
Output: false
Explanation: The only window of size 3 is the whole array, so every move
lowers all three cells together. They would have to be equal to reach zero
together, and they are not.
```

### Example 3

```text
Input: nums = [5,0,3], k = 1
Output: true
Explanation: With k = 1 each move touches a single cell, so any array can be
zeroed cell by cell.
```

### Constraints

- `1 <= k <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁶`

## Hints

### Hint 1

The leftmost cell still above zero can only be lowered by a window that starts
exactly there — so any successful plan can be replayed from left to right.

### Hint 2

Sweeping that way, all you need at each cell is how many earlier windows still
cover it; a difference array answers that in constant time.
