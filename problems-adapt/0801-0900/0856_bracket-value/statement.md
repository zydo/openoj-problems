# Bracket Value

## Description

A string `s` is guaranteed to be a balanced sequence of parentheses. Assign it
a value using these recursive rules:

- A direct pair, `"()"`, is worth 1.
- Placing two balanced sequences beside one another adds their values.
- Wrapping a balanced sequence in one additional pair doubles its value.

Return the value of `s`.

### Example 1

```text
Input: s = "(()())"
Output: 4
Explanation: The inner sequence contains two direct pairs, so it is worth
2; the outside pair doubles that value.
```

### Example 2

```text
Input: s = "((())())"
Output: 6
```

### Example 3

```text
Input: s = "()((()))"
Output: 5
```

### Constraints

- `2 <= s.length <= 50`
- Every character in `s` is `'('` or `')'`.
- `s` is balanced.
