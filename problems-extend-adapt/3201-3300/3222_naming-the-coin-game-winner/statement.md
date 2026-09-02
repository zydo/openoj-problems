# Naming The Coin Game Winner

## Description

Two positive integers `x` and `y` count the coins on a table: `x` coins
worth 75 each and `y` coins worth 10 each.

Alice moves first, after which the two players alternate. On a turn, the
mover must remove coins whose values sum to exactly 115. A player who
cannot assemble such a set loses.

Assuming both players play optimally, return the name of the winner.

### Example 1

```text
Input: x = 5, y = 13
Output: "Alice"
Explanation: Every turn looks the same — one 75-coin and four 10-coins
is the only way to total 115. Alice, Bob, and Alice each take one such
set, after which too few coins of either kind remain; Bob is the one
stuck without a move.
```

### Example 2

```text
Input: x = 2, y = 9
Output: "Bob"
Explanation: Alice and Bob each strip one 75-plus-four-10s set. On the
next turn Alice finds no 75-coin left and cannot move.
```

### Constraints

- `1 <= x, y <= 100`

## Hints

### Hint 1

Find every way to reach exactly 115 with coins of 75 and 10 — there is
only one combination.

### Hint 2

Since each turn consumes that one fixed set of coins, the game lasts
exactly `min(x, floor(y / 4))` turns — count how often the set can be
paid for.

### Hint 3

The parity of that count settles everything: Alice takes every
odd-numbered turn.
