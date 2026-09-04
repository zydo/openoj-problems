# Wildcard Bracket Balance

## Description

You are given a string `s` made up of only three characters: `'('`,
`')'`, and `'*'`. Determine whether `s` can be read as a balanced
bracket sequence once every `'*'` is resolved.

Balance follows the usual bracket rules:

- Every `'('` must be matched by a later `')'`.
- Every `')'` must be matched by an earlier `'('`.
- A match's opening character must appear before its closing character.

The wildcard `'*'` is flexible: each occurrence may independently stand
in for `'('`, for `')'`, or for the empty string. Return `true` if some
assignment of the wildcards makes the whole string balanced, and `false`
if no assignment does.

### Example 1

```text
Input: s = "(())"
Output: true
```

### Example 2

```text
Input: s = "((*)"
Output: true
Explanation: Reading the '*' as ')' turns the string into "(())", which
is balanced.
```

### Example 3

```text
Input: s = "*)("
Output: false
Explanation: No matter how the '*' is read, the trailing '(' has
nothing left after it to close it.
```

### Constraints

- `1 <= s.length <= 100`
- Every character of `s` is `'('`, `')'`, or `'*'`.

## Hints

### Hint 1

Try every way of resolving each `'*'` to `'('`, `')'`, or nothing, and
check whether any resulting string is balanced.

### Hint 2

Let a table entry mark whether the slice `s[i:j]` can be resolved into a
balanced substring, and build it up from smaller slices.

### Hint 3

A running count of open parentheses works when there is no `'*'`: rise
on `'('`, fall on `')'`, and it must never go negative or end above
zero. Think about tracking that count with a stack instead of a single
number.

### Hint 4

What if you kept two stacks — one committed to real `'('` characters,
another for `'*'` characters that might still stand in as one — instead
of a single counter?
