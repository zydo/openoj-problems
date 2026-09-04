# Player Score Table

## Description

Maintain a running table of player scores that supports scoring updates,
summed leader queries, and resets.

Implement the `ScoreTable` class:

- `ScoreTable()` initializes an empty table.
- `void recordScore(int playerId, int score)` adds `score` to `playerId`'s
  accumulated total, creating an entry for the player with that score if
  one does not exist yet.
- `int topScores(int count)` returns the sum of the `count` highest player
  totals in the table.
- `void reset(int playerId)` erases the player's entry, as if they had
  never scored. It is guaranteed the player has an entry when this is
  called.

### Example 1

```text
Input:
["ScoreTable","recordScore","recordScore","recordScore","topScores","recordScore","topScores","topScores","reset","topScores"]
[[],[1,80],[2,95],[1,10],[1],[3,95],[2],[3],[2],[2]]
Output: [null,null,null,null,95,null,190,280,null,185]
Explanation: Player 1 reaches 80+10=90 and player 2 has 95, so the single
best total is 95. Player 3 then joins at 95, making the two best total
95+95=190 and the three best 95+95+90=280. Resetting player 2 drops that
entry, so the two best remaining totals sum to 95+90=185.
```

### Constraints

- `1 <= playerId, count <= 10⁴`
- `1 <= score <= 100`
- It is guaranteed that `count` is less than or equal to the number of
  players currently in the table.
- At most `10³` calls are made in total.

## Hints

### Hint 1

A dictionary from player id to running total is enough to keep the table.

### Hint 2

Every `topScores(count)` call needs the largest `count` totals — sorting on
demand works, and a heap works too.
