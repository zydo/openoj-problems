# Pinfall With Strike Doubles

## Description

Two players trade turns through a game of `n` rounds, and every round
holds exactly 10 pins. Arrays `player1` and `player2` record how many
pins each player knocked down in every round.

Scoring carries one twist. A round's pins count double whenever the
same player flattened all 10 pins in either of their two previous
rounds; otherwise the pins count as rolled. A player's score is the sum
of these per-round values over all `n` rounds.

Call the result: `1` if player 1 outscores player 2, `2` if player 2
outscores player 1, and `0` if the totals tie.

### Example 1

```text
Input: player1 = [10,3,4], player2 = [2,3,4]
Output: 1
Explanation: Player 1 opens with a strike, so their next two rounds
each double: 10 + 2·3 + 2·4 = 24. Player 2 never strikes and totals
2 + 3 + 4 = 9.
```

### Example 2

```text
Input: player1 = [4,4,4], player2 = [10,1,1]
Output: 2
Explanation: Player 1's steady 4s sum to 12. Player 2's first-round
strike doubles rounds two and three: 10 + 2·1 + 2·1 = 14.
```

### Example 3

```text
Input: player1 = [5,6], player2 = [6,5]
Output: 0
Explanation: Neither player strikes, and both totals reach 11 — a dead
heat.
```

### Constraints

- `n == player1.length == player2.length`
- `1 <= n <= 1000`
- `0 <= player1[i], player2[i] <= 10`

## Hints

### Hint 1

No clever insight is required — tallying one player at a time with a
plain simulation is enough.

### Hint 2

While walking a player's rounds, glance back at most two positions: a
10 anywhere in that window doubles the current round.
