# Three-Pile Solitaire Score

## Description

You are playing a one-player game against three stone piles of sizes
`a`, `b`, and `c`. On each turn you pick two distinct piles that both
still hold stones, remove one stone from each, and bank 1 point. Once
fewer than two piles are non-empty, no move remains and the game is
over.

Given `a`, `b`, and `c`, report the largest score the game can reach.

### Example 1

```text
Input: a = 3, b = 5, c = 9
Output: 8
Explanation: Pair each of the 8 stones in the two smaller piles with
a stone from the pile of 9. The last state is (0, 0, 1), and only one
non-empty pile remains.
```

### Example 2

```text
Input: a = 5, b = 5, c = 5
Output: 7
Explanation: The 15 stones drain two per move for 7 moves; one stone
is always left over.
```

### Example 3

```text
Input: a = 1, b = 2, c = 10
Output: 3
Explanation: The big pile can absorb every stone of the two small
piles, so play ends after 3 moves with 7 stones stranded in it.
```

### Constraints

- `1 <= a, b, c <= 10^5`

## Hints

### Hint 1

Greedy intuition: pairing the two currently largest piles each turn
never hurts.

### Hint 2

Two quantities cap the score: every move spends exactly two stones,
and the biggest pile can lose at most one stone per move.

### Hint 3

With the piles sorted `x <= y <= z`, those caps read
`min(x + y, (x + y + z) / 2)` — and a short case analysis shows the
bound is always achievable.
