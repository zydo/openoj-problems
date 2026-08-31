# Ball Cascade Clearance

## Description

A row of colored balls sits on a board; each ball is red `R`, yellow `Y`,
blue `B`, green `G`, or white `W`. You hold a handful of spare balls. Your
goal is to remove every ball from the board.

On each turn, take one ball from your hand and insert it anywhere in the row
— between two existing balls or at either end. Whenever at least three
consecutive balls share a color, that entire group vanishes. Removing a group
may bring new groups of three or more together, which then vanish too; keep
clearing until no further group can form. Repeat until the board is empty
(you win) or your hand runs out.

Given the starting `board` and the multiset of balls in `hand`, return the
fewest insertions needed to clear the board, or `-1` if it cannot be done.

### Example 1

```text
Input: board = "RRWWRR", hand = "W"
Output: 1
Explanation: Inserting the W into the middle pair turns the row into
RRWWWRR. The three Ws clear, the remaining four R balls then join into one
group and clear too.
```

### Example 2

```text
Input: board = "WWRRBBWW", hand = "WWRB"
Output: 2
Explanation: Two insertions suffice: add an R to grow the R pair into a
clearing group, then a B to finish the cascade that empties the row.
```

### Example 3

```text
Input: board = "BBYYB", hand = "B"
Output: -1
Explanation: Clearing the leading Bs leaves YYB behind, and the single spare
ball cannot remove the remaining pair.
```

### Constraints

- `1 <= board.length <= 16`
- `1 <= hand.length <= 5`
- `board` and `hand` contain only the characters `R`, `Y`, `B`, `G`, and `W`.
- The initial board has no run of three or more consecutive same-colored
  balls.