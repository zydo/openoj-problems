# Picking Off Middle Pieces

## Description

A row of `n` pieces sits on a table; each piece is colored `'A'` or `'B'`.
You are given the string `colors` of length `n`, where `colors[i]` is the
color of the `i`th piece.

Alice and Bob play a turn-based game, Alice moving first. On Alice's turn
she must take away one `'A'` piece whose two immediate neighbors are also
`'A'`; on Bob's turn he must take away one `'B'` piece whose two immediate
neighbors are also `'B'`. Pieces at the two ends of the row can never be
taken. The first player with no legal move on their turn loses, and their
opponent wins.

Assuming both play optimally, return `true` if Alice wins and `false`
otherwise.

### Example 1

```text
Input: colors = "AAABBA"
Output: true
Explanation: Alice removes the middle 'A' of the opening run, leaving
AABBA. Bob has no 'B' flanked by two 'B's and must sit out his turn, so
Alice wins.
```

### Example 2

```text
Input: colors = "ABBBAAB"
Output: false
Explanation: Alice has no legal first move — no 'A' has 'A' neighbors. Bob
takes the middle of the three 'B's, and Alice remains motionless, so Bob
wins.
```

### Example 3

```text
Input: colors = "AAAAABBB"
Output: true
Explanation: Alice can eventually take three pieces from her run of five
'A's while Bob can take only one from his run of three 'B's. Bob is the
first to run out of moves, so Alice wins.
```

### Constraints

- `1 <= colors.length <= 10⁵`
- `colors` consists of only the letters `'A'` and `'B'`.

## Hints

### Hint 1

A removal never joins two runs of the same color, so each player's eventual
move supply is fixed the moment the row is laid out.

### Hint 2

Inside a maximal run of one color with length `L`, the pieces that can ever
be taken number `L - 2` (when `L` is at least 3).

### Hint 3

Tally the moves available to each player. Alice, moving first, wins exactly
when her tally is strictly larger.
