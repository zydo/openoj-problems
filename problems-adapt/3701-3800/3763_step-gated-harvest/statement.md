# Step-Gated Harvest

## Description

You are given two integer arrays `nums` and `threshold`, both of length
`n`.

You collect values one move at a time. Move number `step` starts at 1 and
each move takes it one higher, and on move `step` you may take any index
`i` that no earlier move has taken provided `threshold[i] <= step`. If
every untaken index is still gated — `threshold[i] > step` for all of them
— the process stops right there.

Taking index `i` adds `nums[i]` to your running total. Return the largest
total a sequence of moves can reach.

### Example 1

```text
Input: nums = [8,3,12,7,5], threshold = [2,1,2,1,3]
Output: 35
Explanation: Move 1 takes index 3 (gate 1) for 7. Move 2 unlocks indices
0 and 2 and takes index 2 for 12. Move 3 takes index 0 for 8, move 4
takes index 4 for 5, and move 5 sweeps up the last index for 3 — a total
of 7 + 12 + 8 + 5 + 3 = 35.
```

### Example 2

```text
Input: nums = [9,4,5], threshold = [2,3,3]
Output: 0
Explanation: Every gate exceeds 1, so the very first move finds nothing
available and the process ends before collecting anything.
```

### Example 3

```text
Input: nums = [6,2,9,4], threshold = [1,4,4,2]
Output: 10
Explanation: Move 1 takes index 0 for 6. Move 2 unlocks index 3 and takes
its 4. On move 3 the two remaining indices still wait behind their gate
of 4, nothing else is available, and the harvest stops at 6 + 4 = 10.
```

### Constraints

- `1 <= n == nums.length == threshold.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `1 <= threshold[i] <= n`

## Hints

### Hint 1

A gate only ever opens: passing over an available index leaves it
available for later moves, so the set of collectible indices grows
monotonically and the process starves exactly when some move finds that
set empty.

### Hint 2

Bucket the indices by gate value and sweep the moves forward. Each move,
pour the bucket that just unlocked into a max-heap of available values and
pop its largest element as the pick; taking the biggest available value
every move is safe because trading a larger value for a smaller one can
never pay off later.
