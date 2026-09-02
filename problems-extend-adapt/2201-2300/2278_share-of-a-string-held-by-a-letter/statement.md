# Share of a String Held by a Letter

## Description

You are given a string `s` and a single character `letter`. Count how many
positions of `s` hold exactly that character, and express the count as a
percentage of the string's length, rounding down to a whole number.

Return that percentage.

### Example 1

```text
Input: s = "mississippi", letter = "s"
Output: 36
Explanation: The letter "s" appears at 4 of the 11 positions, and
4 / 11 * 100 = 36.36..., which rounds down to 36.
```

### Example 2

```text
Input: s = "abc", letter = "c"
Output: 33
Explanation: One of the three positions holds "c", and 1 / 3 * 100 = 33.33...,
which rounds down to 33.
```

### Example 3

```text
Input: s = "zzz", letter = "z"
Output: 100
Explanation: Every position holds the given letter, so the share is the
whole string: 100 percent.
```

### Constraints

- `1 <= s.length <= 100`
- `s` is made up of lowercase English letters.
- `letter` is a lowercase English letter.

## Hints

### Hint 1

A single scan of `s` tells you how many of its characters match `letter`.

### Hint 2

Multiply the match count by 100 before dividing by the length — the
remaining division is then an exact floor, with no rounding subtleties.
