# Divisor Takeaway Game

## Description

Alice and Bob play a turn-based game, with Alice taking the first turn. A
single number `n` sits on the board, and a move consists of two parts:

- Picking an integer `x` with `0 < x < n` and `n % x == 0` — a proper
  divisor of the current number.
- Erasing the current number and writing `n - x` in its place.

A player who has no legal move on their turn loses. Return `true` if and
only if Alice wins the game when both players play optimally.

### Example 1

```text
Input: n = 12
Output: true
Explanation: Alice plays 3, leaving Bob with 9. Whatever divisor Bob
removes from an odd number, the result is even, and Alice can keep
returning an odd board until Bob is left with 1 and no move.
```

### Example 2

```text
Input: n = 15
Output: false
Explanation: Alice's only legal subtractions are 1, 3, and 5, each of
which hands Bob an even number. Even boards are always winning for the
player receiving them, so Bob answers perfectly and Alice loses.
```

### Constraints

- `1 <= n <= 1000`

## Hints

### Hint 1

Mark the small boards by hand — 1 through 5 — as a win or a loss for the
player whose turn it is, then look for how each marking follows from
smaller ones.

### Hint 2

A board is winning exactly when some divisor move lands the opponent on a
losing board. The parity writes the whole table: an even board can always
shed an odd divisor to hand over an odd board, while an odd board can
only ever hand back an even one.
