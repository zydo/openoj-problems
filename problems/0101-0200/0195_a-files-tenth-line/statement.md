# A File's Tenth Line

## Description

A text file arrives on standard input, one line per line. Output its
tenth line and nothing besides. When the file stops before ten lines,
output nothing at all — no empty line either.

Lines are separated by newline characters, and the last line ends with
a newline like every other.

### Example 1

```text
Input:
Aurora
Basalt
Cedar
Dover
Elm
Fjord
Gale
Haven
Ibis
Juniper
Kestrel
Larch
Output:
Juniper
Explanation: twelve lines arrive; the tenth of them is `Juniper`, so
that line — and only that line — is written to standard output.
```

### Constraints

- The file holds between 1 and 1000 lines.
- Each line is 1 to 500 printable ASCII characters; there are no tabs
  or other control characters.
- Leading and trailing spaces are part of a line and must be preserved
  exactly.

## Hints

### Hint 1

Work out first what your tool of choice does on a short file:
line-addressing utilities print nothing, while code that subscripts a
tenth element has to check the count itself.

### Hint 2

Several tool-level routes exist: hold the lines and subscript, take a
ten-line prefix and keep its last line, or stream with a line address
or counter that stops the moment the tenth line shows up.
