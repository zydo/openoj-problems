# The Color Quota Game

## Description

A game has `n` players, numbered `0` to `n - 1`, and an array `pick`
listing every ball taken: `pick[i] = [xi, yi]` means player `xi` grabbed a
ball of color `yi`.

Player `i` clears their quota when they hold strictly more than `i` balls
of one single color, and any player who clears their quota wins:

- Player 0 wins by holding any ball at all.
- Player 1 wins by holding at least two balls of one color.
- In general, player `i` wins by holding at least `i + 1` balls of one
  color.

Count how many players win the game. Several players may win at once.

### Example 1

```text
Input: n = 3, pick = [[0,5],[1,2],[1,2],[2,2],[2,2],[2,2]]
Output: 3
Explanation: Player 0 holds one ball, player 1 holds two of color 2, and
player 2 holds three of color 2 — each clears their own quota.
```

### Example 2

```text
Input: n = 4, pick = [[0,0],[1,0],[1,1],[2,3],[2,3]]
Output: 1
Explanation: Only player 0 wins. Players 1 and 2 both top out at two
balls of one color, one short of their quotas.
```

### Example 3

```text
Input: n = 2, pick = [[1,7],[1,7],[1,7]]
Output: 1
Explanation: Player 0 never picked, while player 1's three balls of
color 7 beat a quota of two.
```

### Constraints

- `2 <= n <= 10`
- `1 <= pick.length <= 100`
- `pick[i].length == 2`
- `0 <= xi <= n - 1`
- `0 <= yi <= 10`

## Hints

### Hint 1

Tally, for every player, how many balls of each color they picked.

### Hint 2

Player `i` wins exactly when the largest single-color tally in their row
reaches `i + 1`.
