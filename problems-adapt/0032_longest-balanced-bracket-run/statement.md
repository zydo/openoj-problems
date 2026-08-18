# Longest Balanced Bracket Run

## Description

A string `s` is built from nothing but the two characters `(` and `)`. Among
all of its contiguous slices, find the longest one that is balanced, and return
that slice's length.

A slice counts as balanced when every `(` in it is closed by a later `)` inside
the same slice and no `)` is left without a partner. Return `0` when no slice
qualifies.

### Example 1

```text
Input: s = "(()())"
Output: 6
Explanation: The whole string closes cleanly, so the answer is its length.
```

### Example 2

```text
Input: s = "))(()()"
Output: 4
Explanation: The two leading closers can never belong to a balanced slice. The
best slice is the final four characters.
```

### Example 3

```text
Input: s = "((("
Output: 0
Explanation: Nothing is ever closed, so no slice of positive length qualifies.
```

### Constraints

- `0 <= s.length <= 3 * 10^4`
- Every character of `s` is either `(` or `)`.

## Hints

### Hint 1

A slice is balanced exactly when scanning it never leaves a closer without a
partner and nothing is still open at its end. Which positions can therefore
never sit inside the answer?

### Hint 2

Those positions act as walls. If you always know the nearest wall to the left
of where you are, the run ending at your current position has a length you can
read off directly.

### Hint 3

Hold the positions of the still-open brackets on a stack with a wall
underneath. Closing a bracket pops one; if the stack runs dry the closer itself
becomes the new wall, and otherwise whatever is now on top is the wall your
current run measures back to.
