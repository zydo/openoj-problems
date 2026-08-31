# Flip Duel II

## Description

Two players take alternating turns on a string `currentState` made only
of the characters `+` and `-`. On a turn, the player to move must pick a
position holding two consecutive `+` characters and flip that pair to
`--`; the rest of the string is unchanged. A player who cannot find any
`++` pair to flip loses immediately, since they have no legal move.

Given the starting `currentState` and assuming both players always play
optimally, return `true` if the player who moves first is guaranteed to
win, otherwise return `false`.

### Example 1

```text
Input: currentState = "+++"
Output: true
Explanation: The first player can flip either "++" pair — say the left
one, producing "--+". No "++" pair remains, so the second player has no
move and loses.
```

### Example 2

```text
Input: currentState = "+"
Output: false
Explanation: There is no "++" pair anywhere, so the first player already
has no move and loses right away.
```

### Example 3

```text
Input: currentState = "+++++"
Output: false
```

### Constraints

- `1 <= currentState.length <= 60`
- `currentState[i]` is either `+` or `-`.
- `currentState` never contains a run of more than 20 consecutive `+`
  characters.

### Follow-up

What is the runtime complexity of your approach?
