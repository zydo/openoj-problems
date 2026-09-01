# Finest Balanced Slices

## Description

Call a string balanced when it contains the same number of `'L'` and `'R'`
characters.

You are given a balanced string `s`. Cut it into consecutive pieces — every
character must land in exactly one piece — so that each piece is itself
balanced. Return the largest number of pieces such a cutting can produce.

### Example 1

```text
Input: s = "RLRLRLRL"
Output: 4
Explanation: Cut after every second character: "RL", "RL", "RL", "RL".
Each piece is balanced, so four is attainable, and no cutting yields
more.
```

### Example 2

```text
Input: s = "LLRRLLRR"
Output: 2
Explanation: The pieces "LLRR" and "LLRR" are both balanced. Cuttings
with more pieces would leave some piece unbalanced.
```

### Example 3

```text
Input: s = "LRLRRLLRLLRR"
Output: 5
Explanation: One optimal cutting is "LR", "LR", "RL", "LR", "LLRR".
```

### Constraints

- `2 <= s.length <= 1000`
- Every character of `s` is `'L'` or `'R'`.
- `s` as a whole is balanced.

## Hints

### Hint 1

Sweep the string once, keeping a running balance that rises on `'L'` and
falls on `'R'`.

### Hint 2

A prefix is balanced exactly when that balance is zero, so each return
to zero marks the end of one more piece.
