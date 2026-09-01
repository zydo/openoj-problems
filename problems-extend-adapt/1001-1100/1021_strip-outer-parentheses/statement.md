# Strip Outer Parentheses

## Description

A string of parentheses is valid when its brackets nest and pair up
properly. Formally: the empty string is valid, and validity is preserved
when two valid strings are joined or when one valid string is wrapped in a
fresh matching pair — so `"()"`, `"(())()"`, and `"(()(()))"` are all
valid.

Inside a valid string, a primitive piece is a nonempty valid piece that
cannot be cut into two shorter valid pieces sitting side by side — it
opens as one unit and closes as one unit. Every valid string splits into
primitive pieces in exactly one way, laid end to end.

Take the string `s`, delete the first and last character of each of its
primitive pieces, and return what is left.

### Example 1

```text
Input: s = "(()(()))"
Output: "()(())"
Explanation: The whole string is one primitive piece. Deleting its outer
pair leaves the interior "()(())" untouched.
```

### Example 2

```text
Input: s = "()(())()"
Output: "()"
Explanation: The string splits into "()" + "(())" + "()". The first and
third pieces collapse to "" and the middle one loses only its wrapper,
giving "" + "()" + "" = "()".
```

### Example 3

```text
Input: s = "(()())"
Output: "()()"
Explanation: One primitive piece whose interior is "()()"; nothing of the
interior is removed.
```

### Constraints

- `1 <= s.length <= 10⁵`
- Every character of `s` is `'('` or `')'`.
- `s` is a valid parentheses string.

## Hints

### Hint 1

Scan left to right and keep a count of the `(` that are still open. A
character belongs to the interior of its primitive piece exactly when it
is not the `(` that opened the piece at depth zero and not the `)` that
closes the piece back down to zero.

### Hint 2

The decomposition never has to be materialized: a single pass that keeps
every character whose surrounding depth is nonzero builds the answer
directly.
