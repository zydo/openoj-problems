# Flip The Word Order II

## Description

A character array `s` holds words separated by single spaces. Flip the
order of the words inside that array — the work has to happen in place,
on the characters you were given — and return the flipped text as a
string. A word is any maximal stretch of non-space characters.

This is the in-place sequel to Flip The Word Order, and the tidy input
is what makes it lighter: with exactly one space between neighboring
words and nothing hanging off either end, nothing ever needs to shrink
or shift, so the whole job is flipping runs of characters inside the
array.

### Example 1

```text
Input: s = "morning walks build calm minds"
Output: "minds calm build walks morning"
```

### Example 2

```text
Input: s = "z"
Output: "z"
Explanation: One word flips to itself.
```

### Example 3

```text
Input: s = "week 12 day 3 plan"
Output: "plan 3 day 12 week"
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` contains English letters (upper- and lower-case), digits, and the
  space character `' '`.
- `s` contains at least one word.
- `s` has no leading or trailing spaces.
- Neighboring words are separated by exactly one space.
