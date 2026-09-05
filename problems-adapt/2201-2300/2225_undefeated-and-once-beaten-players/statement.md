# Undefeated and Once-Beaten Players

## Description

The array `matches` records the outcomes of a tournament: each pair
`matches[i] = [winner, loser]` says that player `winner` beat player
`loser` in that game.

Report the tournament as a two-element list `answer`:

- `answer[0]` lists every player who finished without a single defeat;
- `answer[1]` lists every player who lost exactly one game.

Both lists must be sorted in increasing order.

Notes:

- Only players who took part in at least one game are reported.
- No game repeats — every `[winner, loser]` pair is distinct — but a
  player may of course lose several different games.

### Example 1

```text
Input: matches = [[7,2],[9,2],[4,9],[4,2],[8,4]]
Output: [[7,8],[4,9]]
Explanation:
Player 2 lost three times, to 7, to 9, and to 4. Players 9 and 4 each
lost exactly once, and players 7 and 8 never lost, so answer[0] = [7,8]
and answer[1] = [4,9].
```

### Example 2

```text
Input: matches = [[12,3],[3,20],[12,20],[20,8]]
Output: [[12],[3,8]]
Explanation:
Player 12 won both of their games. Players 3 and 8 lost exactly once
each, while player 20 lost twice, so answer[0] = [12] and
answer[1] = [3,8].
```

### Example 3

```text
Input: matches = [[6,10],[7,10],[8,10]]
Output: [[6,7,8],[]]
Explanation:
Players 6, 7, and 8 never lost, while player 10 lost three games, so the
once-beaten list is empty.
```

### Constraints

- `1 <= matches.length <= 10⁵`
- `matches[i].length == 2`
- `1 <= matches[i][0], matches[i][1] <= 10⁵`
- `matches[i][0] != matches[i][1]`
- All `matches[i]` are distinct.

## Hints

### Hint 1

A win never disqualifies anyone — only the loss count sorts players into
buckets, so one counter per player is the entire bookkeeping.

### Hint 2

Give every player who appears in any game a counter starting at 0, bump a
player's counter on each loss, then collect and sort the players whose
counts are 0 and the players whose counts are 1.
