# Word Shifting on a Move Budget

## Description

Two lowercase strings `s` and `t` share the same length. The goal is to
reshape `s` into `t` using a numbered sequence of moves, `1` through
`k`.

Each move `i` offers exactly two options:

- choose one index of `s` that **no earlier move has ever touched** and
  push its letter forward through the alphabet exactly `i` steps,
  wrapping from `'z'` back to `'a'`; or
- let the move pass without doing anything.

The shift amount is not negotiable — move 7 always pushes its chosen
letter 7 letters along, move 20 always pushes 20 — and a picked index
is retired for good. The only real decision is which untouched index,
if any, receives each move.

Decide whether the moves `1..k` can be spent so that `s` ends up
equal to `t`.

### Example 1

```text
Input: s = "abc", t = "add", k = 9
Output: true
Explanation: Move 1 shifts the 'c' to 'd'; move 2 shifts the 'b' to
'd'. The leading 'a' is already correct, and moves 3 through 9 sit
idle.
```

### Example 2

```text
Input: s = "aaa", t = "bbb", k = 25
Output: false
Explanation: All three letters need a push of exactly 1. Move 1
fixes one of them, but the next move capable of a 1-push is move 27
— far beyond the budget — so the other two can never be repaired.
```

### Example 3

```text
Input: s = "az", t = "za", k = 25
Output: true
Explanation: The 'z' needs a 1-step push to become 'a' (move 1),
while the 'a' needs a 25-step push, wrapping around the alphabet, to
become 'z' (move 25). Both moves fit inside the budget.
```

### Constraints

- `1 <= s.length, t.length <= 10^5`
- `s.length == t.length`
- `0 <= k <= 10^9`
- `s` and `t` contain only lowercase English letters.

## Hints

### Hint 1

A push of `x` steps lands on the same letter as a push of `x + 26`
steps, because the alphabet closes into a loop of length 26.

### Hint 2

Tally, for every amount `d` in `1..25`, how many positions require
exactly a `d`-step push. Positions sharing an amount must consume the
moves `d`, `d + 26`, `d + 52`, ... in order — verify the largest move
each amount demands still fits under `k`.
