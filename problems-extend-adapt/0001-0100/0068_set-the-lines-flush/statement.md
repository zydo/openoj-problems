# Set The Lines Flush

## Description

You are handed a list of `words` and a line width `maxWidth`. Lay the
words out on lines, every line exactly `maxWidth` characters wide and
pressed against both margins.

Words are placed greedily: keep adding words to the current line while
they fit, and the first word that would not fit opens the next line.
Whatever room remains on a line is filled with `' '` characters.

On a filled line the padding goes between words, shared out as evenly as
the gaps allow; when the spaces do not divide evenly, the leftmost gaps
take the larger share. A line holding a single word, and the final line
of the text, are left-aligned instead — single spaces between words,
with every padding character pushed onto the right end.

Return the laid-out lines. A word is any run of non-space characters;
every word is at most `maxWidth` long, and the list is never empty.

### Example 1

```text
Input: words = ["keep","the","code","clean","and","clear"], maxWidth = 9
Output:
[
  "keep  the",
  "code     ",
  "clean and",
  "clear    "
]
```

The first line's lone gap takes both leftover spaces. `code` sits alone
after the next word misses the line, so it is left-aligned with its
padding trailing. The last line keeps single spacing and pads the tail.

### Example 2

```text
Input: words = ["hyphenation","is","rare"], maxWidth = 11
Output:
[
  "hyphenation",
  "is rare    "
]
```

A line with one word cannot be spread across gaps, so `hyphenation` is
left-aligned even though it is not the final line.

### Example 3

```text
Input: words = ["an","old","owl","perched","on","a","bough"], maxWidth = 12
Output:
[
  "an  old  owl",
  "perched on a",
  "bough       "
]
```

Four spare spaces on the first line split evenly across its two gaps.
The second line packs three words edge to edge, and the last line is
left-aligned with the padding on the tail.

### Constraints

- `1 <= words.length <= 300`
- `1 <= words[i].length <= 20`
- `words[i]` consists of English letters and punctuation symbols.
- `1 <= maxWidth <= 100`
- `words[i].length <= maxWidth`
