# End-Picking Game Winner

## Description

Two players play a game on an integer array `nums`, taking turns with the
first player moving first. On each turn a player removes one entry from
either end of what remains of the array — the leftmost or the rightmost —
and adds its value to their score. The array shrinks by one entry per turn,
and the game ends once every entry has been claimed.

Both players always play optimally. Return `true` if the first player
finishes with a score greater than or equal to the second player's; equal
scores count as a win for the first player.

### Example 1

```text
Input: nums = [2,9,3]
Output: false
Explanation: Whatever the first player opens with, the second player takes
the 9 next: opening with 2 leaves [9,3], opening with 3 leaves [2,9], and
either way the 9 is available. The first player ends on 2 + 3 = 5 against
9 and loses.
```

### Example 2

```text
Input: nums = [6,12,4,10]
Output: true
Explanation: The first player takes the 10. The second player is left with
[6,12,4]; taking the 6 exposes the 12, and taking the 4 exposes the 12 as
well, so the first player collects 12 next either way. Final scores are
10 + 12 = 22 for the first player and 6 + 4 = 10 for the second.
```

### Example 3

```text
Input: nums = [5,5]
Output: true
Explanation: Each player ends with 5. A tie goes to the first player.
```

### Constraints

- `1 <= nums.length <= 20`
- `0 <= nums[i] <= 10⁷`

## Hints

### Hint 1

Two running totals are heavier bookkeeping than the game needs. What single
number, read at the end, decides the winner?

### Hint 2

On a stretch `nums[i..j]`, the player to move banks one end and then endures
the opponent's best performance on the stretch that is left. Express the best
achievable final gap (mover's score minus opponent's score) with that idea.

### Hint 3

The first player wins exactly when that gap on the whole array is
non-negative — the tie rule is why the comparison is `>=`.

### Hint 4

With `nums.length <= 20`, memoizing over the `O(n²)` stretches settles every
position instantly.
