# Stripping Unmatched Parentheses

## Description

A string `s` mixes lowercase letters with `'('` and `')'`. Call it
parenthesized-valid when:

- it is empty, or holds only lowercase letters, or
- it is two parenthesized-valid pieces written one after another, or
- it is a parenthesized-valid piece wrapped in one matching pair of
  parentheses.

Delete as few parentheses from `s` as possible so that what remains is
parenthesized-valid, and return the resulting string.

The expected answer is the canonical one: delete precisely the parentheses
that have no partner — each `')'` with no earlier undeleted `'('` to pair
with, and each `'('` with no later undeleted `')'` to pair with — and keep
every other character exactly where it was.

### Example 1

```text
Input: s = "x(y)z)p"
Output: "x(y)zp"
Explanation: The second ')' arrives with no open '(' to pair with, so it
is the one deleted.
```

### Example 2

```text
Input: s = "(a(b)c"
Output: "a(b)c"
Explanation: The leading '(' never finds a later ')' to pair with, so it
is deleted.
```

### Example 3

```text
Input: s = "b)(a"
Output: "ba"
Explanation: The ')' has no earlier '(' and the '(' has no later ')', so
both go and only the letters remain.
```

### Example 4

```text
Input: s = "plain"
Output: "plain"
Explanation: There is nothing to fix — no parenthesis is unmatched.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists of `'('`, `')'`, and lowercase English letters.

## Hints

### Hint 1

In a valid string every prefix holds at least as many `'('` as `')'`, and
every suffix holds at least as many `')'` as `'('`.

### Hint 2

One left-to-right pass flags every `')'` that breaks the first rule; a
second pass the other way flags the `'('` characters that break the
mirrored rule. Everything unflagged is the answer.
