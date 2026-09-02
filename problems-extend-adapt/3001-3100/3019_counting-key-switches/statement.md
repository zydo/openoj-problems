# Counting Key Switches

## Description

A typist produces a string `s`, indexed from `0`. A key switch happens
each time the key being pressed differs from the key pressed just before
it — so `"zx"` contains one switch, while `"mMMm"` contains none.

Count how many key switches occur while typing `s`.

Case never matters: holding shift or locking caps changes which letter
appears, not which key is pressed, so moving from `'r'` to `'R'` is the
same key pressed twice.

### Example 1

```text
Input: s = "aBcD"
Output: 3
Explanation: Ignoring case the presses run a, b, c, d — a different key
at every step, for three switches in total.
```

### Example 2

```text
Input: s = "gGGgHi"
Output: 2
Explanation: Lowercased, the presses read g, g, g, g, h, i. The first
four hits all land on the same key; only g to h and h to i switch,
giving 2.
```

### Example 3

```text
Input: s = "TtTtTt"
Output: 0
Explanation: Every press is the same letter up to case, so the same key
is struck throughout and no switch ever happens.
```

### Constraints

- `1 <= s.length <= 100`
- `s` holds only upper- and lowercase English letters.

## Hints

### Hint 1

Fold the string to one case first; after that a switch is simply an
adjacent pair of positions carrying different letters.
