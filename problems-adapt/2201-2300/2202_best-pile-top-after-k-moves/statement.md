# Best Pile Top After K Moves

## Description

A pile of numbered plates is given as a 0-indexed integer array `nums`,
where `nums[0]` is the plate currently sitting on top.

Each move is one of exactly two actions:

- Take the top plate off the pile, provided the pile is not empty.
- Take one plate from those already removed and put it back on the pile,
  provided at least one plate has been removed. That plate becomes the new
  top.

You are also given an integer `k`, the exact number of moves to perform.

Return the largest value that can sit on top of the pile after precisely
`k` moves. If no sequence of `k` moves can leave the pile non-empty,
return `-1`.

### Example 1

```text
Input: nums = [3,7,1,9,4], k = 3
Output: 9
Explanation:
One way to reach 9 in exactly 3 moves:
- Move 1: Remove 3. The pile becomes [7,1,9,4].
- Move 2: Remove 7. The pile becomes [1,9,4].
- Move 3: Remove 1. The pile becomes [9,4].
Now 9 is on top. No larger value exists in the pile, so 9 is the best
possible answer.
```

### Example 2

```text
Input: nums = [6], k = 3
Output: -1
Explanation:
The moves can only alternate between removing the lone plate and putting
it back, so after an odd number of moves the pile is always empty.
```

### Example 3

```text
Input: nums = [1,2], k = 5
Output: 2
Explanation: Remove 1, remove 2, put 1 back, remove 1, then put 2 back.
The fifth move leaves 2 on top, and 2 is the largest plate there is.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i], k <= 10⁹`

## Hints

### Hint 1

For a fixed index `i`, compare the number of moves needed to lift `nums[i]`
to the top — removing everything above it plus one move to return it —
against the budget `k`, and ask what the spare moves can be spent on.

### Hint 2

The pile ends up empty only in very specific budgets. Check what happens
when the pile holds a single plate, and what an odd number of moves does
to it.
