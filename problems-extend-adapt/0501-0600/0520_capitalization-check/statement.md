# Capitalization Check

## Description

A word is considered correctly capitalized when it matches one of
three patterns:

- every letter is uppercase, such as `"NASA"`.
- every letter is lowercase, such as `"berlin"`.
- only the first letter is uppercase and the rest are lowercase, such
  as `"Berlin"`.

Given a string `word`, return `true` if its capitalization matches one
of these patterns, or `false` otherwise.

### Example 1

```text
Input: word = "NASA"
Output: true
```

### Example 2

```text
Input: word = "mcAfee"
Output: false
```

### Constraints

- `1 <= word.length <= 100`
- `word` consists only of lowercase and uppercase English letters.
