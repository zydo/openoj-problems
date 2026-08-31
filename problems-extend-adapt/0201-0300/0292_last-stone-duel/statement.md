# Last Stone Duel

## Description

Two players face off over a single heap of stones and take alternating
turns, with you moving first. On a turn, the player to move removes
anywhere from 1 to 3 stones from the heap. Whoever removes the heap's
final stone wins the duel.

Given `n`, the number of stones the heap starts with, return `true` if
you are guaranteed to win the duel when both sides play perfectly,
otherwise return `false`.

### Example 1

```text
Input: n = 4
Output: false
Explanation: These are the possible outcomes:
1. You remove 1 stone. Your opponent removes 3, taking the last stone.
2. You remove 2 stones. Your opponent removes 2, taking the last stone.
3. You remove 3 stones. Your opponent removes the last stone.
In every outcome, your opponent wins.
```

### Example 2

```text
Input: n = 1
Output: true
```

### Example 3

```text
Input: n = 7
Output: true
```

### Constraints

- `1 <= n <= 2³¹ - 1`

## Hints

### Hint 1

Work out the outcome for the first few small heaps by hand — is there a
heap size you can never win from, no matter what you do on your turn?
