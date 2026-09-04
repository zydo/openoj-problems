# Typing Through Special Keys II

## Description

You are given a string `s` made of lowercase English letters plus the three
special characters `*`, `#`, and `%`, and an integer `k`.

Read `s` from left to right while growing an output text, acting on each
character as you meet it:

- a lowercase letter is typed onto the end of the text;
- `*` backspaces, erasing the text's last character when the text is not
  already empty;
- `#` repeats the whole text once, appending a copy of it to itself;
- `%` flips the text around, reversing it in place.

Return the character of the finished text at index `k`. If `k` falls
outside the text, return `"."`.

### Example 1

```text
Input: s = "dcba#%", k = 5
Output: "b"
Explanation: 'd', 'c', 'b', 'a' type "dcba", '#' doubles it to "dcbadcba",
and '%' reverses it to "abcdbcda". The character at index k = 5 is 'b'.
```

### Example 2

```text
Input: s = "kx#m#n%", k = 7
Output: "x"
Explanation: 'k' and 'x' type "kx", '#' doubles it to "kxkx", 'm' appends
to make "kxkxm", '#' doubles that to "kxkxmkxkxm", 'n' appends to make
"kxkxmkxkxmn", and '%' reverses it. The character at index k = 7 is 'x'.
```

### Example 3

```text
Input: s = "t**w", k = 0
Output: "w"
Explanation: 't' types "t", the first '*' erases it, and the second '*'
finds the text already empty, so nothing happens; 'w' then types "w",
whose only character sits at index 0.
```

### Example 4

```text
Input: s = "lon#%", k = 6
Output: "."
Explanation: 'l', 'o', 'n' type "lon", '#' doubles it to "lonlon", and '%'
reverses it. The finished text holds six characters, so index k = 6 is out
of bounds and the output is '.'.
```

### Constraints

- `1 <= s.length <= 10^5`
- `s` consists only of lowercase English letters and the characters `*`,
  `#`, and `%`.
- `0 <= k <= 10^15`
- The length of the finished text never exceeds `10^15`.

## Hints

### Hint 1

The finished text is far too large to build, but its length after every
prefix of `s` is cheap to record.

### Hint 2

Walk `s` backwards with the queried index in hand: a `#` folds an index in
the right half into the left, a `%` mirrors the index across the midpoint,
and a `*` leaves every surviving index alone.
