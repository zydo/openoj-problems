# Balanced Brackets

## Description

You are given a string `s` made up of the six bracket characters `'('`,
`')'`, `'{'`, `'}'`, `'['` and `']'`. Decide whether the brackets in `s` are
balanced.

Balanced means:

- every closing bracket matches the most recently opened bracket still open,
- and it is of the same shape as that bracket,
- and nothing is left open at the end.

### Example 1

```text
Input: s = "{[()]}"
Output: true
Explanation: Each closer pairs with the nearest opener outside it, and every
opener is eventually closed.
```

### Example 2

```text
Input: s = "{}[]()"
Output: true
Explanation: Three independent pairs sitting side by side are just as
balanced as nested ones.
```

### Example 3

```text
Input: s = "([)]"
Output: false
Explanation: ')' arrives while '[' is the innermost open bracket, so the two
pairs are crossed rather than nested.
```

### Constraints

- `1 <= s.length <= 10⁴`
- `s` contains no characters besides `'()[]{}'`.

## Hints

### Hint 1

The bracket that must close next is always the most recently opened one. What
data structure serves things in that order?

### Hint 2

Reading left to right, stack each opener as you meet it.

### Hint 3

At a closer, the opener on top of the stack must be its partner — pop and
continue, or reject at once if the shapes disagree or the stack is empty. At
the end, reject again if anything is still stacked.
