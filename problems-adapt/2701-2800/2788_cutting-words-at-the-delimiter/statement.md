# Cutting Words At The Delimiter

## Description

You are given an array of strings `words` and a single character
`separator`. Cut every string of `words` at each occurrence of
`separator`, collect all the pieces the cuts produce, and return them as
one flat array of strings.

Three rules govern the result:

- The `separator` character itself marks where a cut happens and never
  appears in any returned piece.
- One string may hold many separators, so a single cut can produce any
  number of pieces.
- Pieces are kept in the order they were read: within a word left to
  right, and word by word in the order `words` lists them.

Pieces that end up empty are discarded — a separator at either end of a
string or two separators sitting side by side each contribute nothing.

### Example 1

```text
Input: words = ["sunny#side#up","egg"], separator = "#"
Output: ["sunny","side","up","egg"]
Explanation: "sunny#side#up" cuts into "sunny", "side", and "up", while
"egg" holds no separator and passes through as one piece, giving the
four strings in order.
```

### Example 2

```text
Input: words = ["@mind@","@the@"], separator = "@"
Output: ["mind","the"]
Explanation: Each word begins and ends with a separator, so both edges
of every cut are empty and are dropped; only the middle pieces "mind"
and "the" survive.
```

### Example 3

```text
Input: words = [",,deep,,pool,,"], separator = ","
Output: ["deep","pool"]
Explanation: Adjacent commas contribute empty pieces between them, and
the commas at both ends contribute empty edge pieces as well. Keeping
just the non-empty pieces leaves "deep" and "pool".
```

### Constraints

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 20`
- Each character of `words[i]` is a lowercase English letter or one of
  the characters `".,|$#@"` (quotes excluded).
- `separator` is one of the characters `".,|$#@"` (quotes excluded).

### Hint 1

Handle the words one at a time: walk each string, note every position
where the separator appears, and read off the text between consecutive
cut points.

### Hint 2

Watch the edges — a separator at the very start or end of a word, or
two in a row, both yield empty pieces, and the result must not contain
any empty strings.
