# Point Gap Under Swapping Turns

## Description

A season consists of `n` games, given as an integer array `nums` where
`nums[i]` is the number of points scored in game `i`. Two players share
the season; the first player holds the active seat at the start, and the
second player sits out.

Before the points of each game are awarded, up to two seat changes can
happen, in this order:

- an odd point count (`nums[i]` odd) swaps the two players' seats;
- every sixth game — index 5, 11, 17, and so on — swaps them as well;
- then whichever player currently holds the active seat banks all
  `nums[i]` points of that game.

Both rules are checked on every game, so a sixth game with an odd point
count changes seats twice, which lands the seat back where it started.

Return the first player's total points minus the second player's total
points.

### Example 1

```text
Input: nums = [2,2,2,2,2,4]
Output: 6
Explanation: Games 0 through 4 score even points and are not sixth
games, so the first player collects 2 + 2 + 2 + 2 + 2 = 10. Game 5 is
a sixth game, so the seat passes to the second player, who banks 4.
The gap is 10 - 4 = 6.
```

### Example 2

```text
Input: nums = [3,3,3,3,3,3]
Output: -6
Explanation: Every score is odd, so the seat changes before each game:
the second player takes games 0, 2, and 4 (9 points), the first player
takes games 1 and 3 (6 points). Game 5 swaps twice — the odd score and
the sixth-game rule — returning the seat to the second player, who
banks the final 3 (12 total). The gap is 6 - 12 = -6.
```

### Example 3

```text
Input: nums = [4,1,6,8]
Output: -11
Explanation: The first player banks game 0's 4. The odd 1 in game 1
hands the seat to the second player, who keeps it through games 2 and
3 for 1 + 6 + 8 = 15. The gap is 4 - 15 = -11.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 1000`

## Hints

### Hint 1

Straight simulation is enough — but note that only the seat, not the
scores, carries between games.

### Hint 2

The seat is a single bit, so track it as a sign: one value for the
first player, its negation for the second.

### Hint 3

Apply the two seat changes in the stated order, then add
(sign × points) into the running difference.
