# Typing Through Special Keys I

## Description

You are given a string `s` made of lowercase English letters plus the three
special characters `*`, `#`, and `%`.

Read `s` from left to right while growing an output text, acting on each
character as you meet it:

- a lowercase letter is typed onto the end of the text;
- `*` backspaces, erasing the text's last character when the text is not
  already empty;
- `#` repeats the whole text once, appending a copy of it to itself;
- `%` flips the text around, reversing it in place.

Return the text that remains once every character of `s` has been handled.

### Example 1

```text
Input: s = "ab#c%"
Output: "cbaba"
Explanation: 'a' and 'b' type "ab", '#' doubles it to "abab", 'c' appends
to make "ababc", and '%' reverses it, leaving "cbaba".
```

### Example 2

```text
Input: s = "t**w"
Output: "w"
Explanation: 't' types "t", the first '*' erases it, and the second '*'
finds the text already empty, so nothing happens; 'w' then types "w".
```

### Example 3

```text
Input: s = "q##*"
Output: "qqq"
Explanation: 'q' types "q", the first '#' doubles it to "qq", the second
'#' doubles that to "qqqq", and '*' erases one 'q', leaving "qqq".
```

### Constraints

- `1 <= s.length <= 20`
- `s` consists only of lowercase English letters and the characters `*`,
  `#`, and `%`.

## Hints

### Hint 1

Keep one text buffer and apply each character's effect as you meet it — no
clever data structure is needed at this input size.

### Hint 2

Treat the three specials separately: one shrinks the text, one doubles its
length, and one reorders it without changing the length.
