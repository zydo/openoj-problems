# Three Copies, Nine Digits

## Description

Start from an integer `n` that has exactly three digits, and write out three
related values back to back: `n` itself, then `2 * n`, then `3 * n`, with
nothing between them. Joining `12` and `345` this way, for instance, gives
`12345`.

Call `n` qualifying when the string you just wrote is exactly nine
characters long and spells out each of the digits `1` through `9` once —
which rules out any `0` appearing anywhere. Return `true` if `n` qualifies,
or `false` otherwise.

### Example 1

```text
Input: n = 273
Output: true
Explanation: The three values are 273, 546, and 819. Written back to back they read 273546819 — nine digits covering 1 through 9 with no repeats.
```

### Example 2

```text
Input: n = 262
Output: false
Explanation: The string reads 262524786. It is nine characters long, but some digits repeat and others never appear.
```

### Example 3

```text
Input: n = 489
Output: false
Explanation: The string reads 4899781467. Since 3 * n already has four digits, the string is too long to qualify.
```

### Constraints

- `100 <= n <= 999`

## Hints

### Hint 1

Assemble the string exactly as the description says — `n`, `2 * n`, and
`3 * n` glued together. Its length alone already rejects many inputs.

### Hint 2

Tally how often each digit occurs. A nine-character string that never
contains `0` and repeats nothing must be missing nothing either.
