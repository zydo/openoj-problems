# Total Games in a Knockout Bracket

## Description

A knockout bracket opens with `n` teams and holds rounds under these rules
until a single champion stands:

- With an even field, the teams are paired off: `n / 2` games are played,
  and the `n / 2` winners move on to the next round.
- With an odd field, one team is given a bye straight into the next round
  while the rest pair off: `(n - 1) / 2` games are played, and
  `(n - 1) / 2 + 1` teams move on.

Return the total number of games the bracket contains, from the opening
round until the champion is decided.

### Example 1

```text
Input: n = 8
Output: 7
Explanation: Round by round:
- 1st round: 8 teams, 4 games, 4 move on.
- 2nd round: 4 teams, 2 games, 2 move on.
- 3rd round: 2 teams, 1 game, and the winner is decided.
Total games = 4 + 2 + 1 = 7.
```

### Example 2

```text
Input: n = 5
Output: 4
Explanation: Round by round:
- 1st round: 5 teams, 2 games, one bye, 3 move on.
- 2nd round: 3 teams, 1 game, one bye, 2 move on.
- 3rd round: 2 teams, 1 game, and the winner is decided.
Total games = 2 + 1 + 1 = 4.
```

### Example 3

```text
Input: n = 1
Output: 0
Explanation: The lone entrant is champion already; no game is played.
```

### Constraints

- `1 <= n <= 200`

## Hints

### Hint 1

Playing the rounds by hand is enough — keep going while more than one team
remains.

### Hint 2

Handle the odd-sized fields carefully: the bye changes how many teams carry
into the next round.
