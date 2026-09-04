# Growing The Prize Pot I

## Description

You are given an integer array `rewardValues` of length `n`, listing the
prize values on offer.

Your pot starts at `x = 0` and every position is unmarked. You may repeat
this operation as often as you like:

- Pick an unmarked position `i` in `[0, n - 1]`.
- When `rewardValues[i]` is strictly greater than your current pot `x`, it
  is absorbed: `x` grows by `rewardValues[i]` and position `i` becomes
  marked. Otherwise nothing happens and the position stays unmarked.

Return the largest pot you can end up with when you play optimally.

### Example 1

```text
Input: rewardValues = [2,7,3]
Output: 12
Explanation: Absorb the 2 (pot 2), then the 3 (pot 5), then the 7 (pot 12).
```

### Example 2

```text
Input: rewardValues = [4,4,4]
Output: 4
Explanation: After the first 4 is absorbed the pot equals 4, so no further
copy can be absorbed — each later 4 fails the strictly-greater test.
```

### Example 3

```text
Input: rewardValues = [9,2,8,6,3]
Output: 17
Explanation: Absorb 2, then 6, then 9, ending at 17. Skipping 3 and 8 turns
out to be necessary: absorbing the 3 would raise the pot to 5, and after
the 6 followed the pot would sit at 11, locked out of both the 8 and the 9.
```

### Constraints

- `1 <= rewardValues.length <= 2000`
- `1 <= rewardValues[i] <= 2000`

## Hints

### Hint 1

Sort the values first.

### Hint 2

Whatever set of values a play absorbs, absorbing them in increasing order is
always legal, so it suffices to consider increasing sequences.

### Hint 3

Track reachability, not indices: let `reach[i][t]` say whether total `t` can
be produced using only the first `i` sorted values.

### Hint 4

Value `v` extends exactly those totals `t < v`:
`reach[i][t] = reach[i - 1][t] or (t >= v and reach[i - 1][t - v])`.
