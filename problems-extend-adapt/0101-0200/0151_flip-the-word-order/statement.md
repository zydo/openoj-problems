# Flip The Word Order

## Description

A string `s` holds a run of words separated by spaces. Read the words,
flip their order front to back, and return the result as one string
joined by single spaces.

The input is not obliged to be tidy: it may start or end with spaces,
and neighboring words can sit several spaces apart. The string you
return must be — exactly one space between neighboring words and
nothing hanging off either end. A word is any maximal stretch of
non-space characters.

### Example 1

```text
Input: s = "wind over quiet water"
Output: "water quiet over wind"
```

### Example 2

```text
Input: s = "task 7 needs 3 checks"
Output: "checks 3 needs 7 task"
```

### Example 3

```text
Input: s = "  double   spaces   here  "
Output: "here spaces double"
Explanation: The padding at both ends and the runs of inner spaces all
collapse: the returned words are separated by exactly one space each.
```

### Constraints

- `1 <= s.length <= 10⁴`
- `s` contains English letters (upper- and lower-case), digits, and the
  space character `' '`.
- `s` contains at least one word.

### Follow up

If strings are mutable in your language, could the flip be done in
place using `O(1)` extra space?
