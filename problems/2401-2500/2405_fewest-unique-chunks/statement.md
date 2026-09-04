# Fewest Unique Chunks

## Description

Split the string `s` into one or more contiguous substrings such that no
letter appears twice inside a single substring. Every character of `s` must
belong to exactly one substring. Return the smallest number of substrings a
valid split can use.

### Example 1

```text
Input: s = "abcabcabc"
Output: 3
Explanation: One optimal split is ("abc", "abc", "abc"); each chunk keeps
its three letters distinct.
```

### Example 2

```text
Input: s = "aaaa"
Output: 4
Explanation: A chunk may hold at most one `a`, so every character must stand
alone.
```

### Example 3

```text
Input: s = "az"
Output: 1
Explanation: `a` and `z` are distinct letters, so the whole string is one
valid chunk.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists of only English lowercase letters.

## Hints

### Hint 1

Grow each substring as far right as it can go before a letter repeats.

### Hint 2

A 26-bit mask tracks which letters the current substring already holds.
