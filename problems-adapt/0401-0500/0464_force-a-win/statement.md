# Force A Win

## Description

Two players alternate moves. Between them lies a pool of the integers `1`
through `maxNumber`, and a shared running total starts at `0`. On a turn a
player takes one still-unused integer from the pool and adds it to the
total. The player whose addition first brings the total to `target` or
higher wins, and taken integers never return to the pool.

Given `maxNumber` and `target`, decide whether the player who moves first
can force a win when both sides play perfectly. Return `true` when the
opening player has a forced win, `false` when the second player does.

Two degenerate situations are settled outright: a `target` of `0` or less is
already reached before anyone moves, so the opening player wins at once; and
if even the whole pool summed together falls short of `target`, neither
player can ever get there, so the opening player cannot win.

### Example 1

```text
Input: maxNumber = 4, target = 5
Output: false
Explanation: Every integer pairs with another to make 5 exactly. However the
opening player starts — 1, 2, 3, or 4 — the reply 4, 3, 2, or 1 brings the
total to 5 and wins on the spot.
```

### Example 2

```text
Input: maxNumber = 6, target = 9
Output: true
Explanation: The opening player takes 1. No reply from the pool reaches 9
immediately, and every second-player answer can then be met with a move that
finishes the game or strands the opponent — the win is forced.
```

### Example 3

```text
Input: maxNumber = 5, target = 16
Output: false
Explanation: The pool sums to only 15, so the total can never reach 16 and
neither player can be the one to cross it.
```

### Example 4

```text
Input: maxNumber = 6, target = 0
Output: true
Explanation: The target is reached before the first move is made.
```

### Constraints

- `1 <= maxNumber <= 20`
- `0 <= target <= 300`

## Hints

### Hint 1

Start with the two outright cases: a target that is already met, and a pool
whose total sum cannot meet it. Both answers come without any search.

### Hint 2

What a position looks like depends only on which integers are gone from the
pool — their sum fixes how much of the target is still missing. With at most
20 integers, that set of taken numbers packs into a bitmask.

### Hint 3

Evaluate positions by recursion over that mask, storing each mask's verdict
so no position is judged twice.

### Hint 4

A position is a win for the player to move when some available integer
either reaches the remaining target by itself or hands the opponent a
position that is a loss.
