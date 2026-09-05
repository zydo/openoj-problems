# Command Expansion

## Description

A command string is built by concatenating tokens drawn from exactly
three shapes: `"G"`, `"()"`, and `"(al)"`, in any order and any counts.
Expanding the command replaces each token — `"G"` stays `"G"`, `"()"`
becomes `"o"`, and `"(al)"` becomes `"al"` — and the expansions are
joined in the order they appear.

Given the command string, return its expansion.

### Example 1

```text
Input: command = "(al)(al)G"
Output: "alalG"
Explanation: Each of the two `"(al)"` tokens expands to `"al"`, and the
trailing `"G"` stays as it is.
```

### Example 2

```text
Input: command = "G(al)()G()"
Output: "GaloGo"
```

### Example 3

```text
Input: command = "()(al)()(al)"
Output: "oaloal"
```

### Constraints

- `1 <= command.length <= 100`
- `command` is a concatenation of `"G"`, `"()"`, and `"(al)"` tokens.

## Hints

### Hint 1

Look at at most two characters at a time to know which token starts
here.

### Hint 2

An opening parenthesis is all you need to peek past: the very next
character tells the two bracketed tokens apart.
