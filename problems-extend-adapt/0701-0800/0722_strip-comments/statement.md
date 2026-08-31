# Strip Comments

## Description

You are given the source of a C++ program as an array of strings
`source`, one entry per line — the pieces you would get by splitting
the original text on `'\n'`. Strip every comment from it and return the
remaining lines in the same array-of-strings shape.

C++ has two comment forms:

- `//` starts a **line comment**: everything from it to the end of that
  same line is discarded.
- `/*` starts a **block comment**: everything is discarded up through
  the next `*/` that has not already been consumed by an earlier block
  comment. Matches are found by scanning in reading order — line by
  line, left to right — so inside `/*/` the closing `*/` overlaps the
  opening `/*` and does not count as a close.

Whichever comment marker takes effect first wins: once a block comment
is open, a `//` inside it means nothing, and once either kind of
comment has started, a further `/*` inside it means nothing either.

Drop any line that ends up with no characters left after stripping —
the returned array never contains empty strings. A line that still has
only spaces on it, however, is not empty and must be kept.

The input never contains control characters, single quotes, or double
quotes, and there is nothing besides comments — no macros, no other
syntax — that interacts with comment parsing. Every block comment that
opens is guaranteed to close somewhere later in the source, so a `/*`
seen outside of any comment always begins a genuine new one.

A block comment that spans several lines also erases the line breaks it
covers, so the code immediately before it and the code immediately
after it are joined onto one output line — Example 2 shows this.

### Example 1

```text
Input: source = ["/* header */", "void run()", "{ ", "  // setup ", "int x, y;", "/* start", "   of a", "   long comment */", "x = y + 1;", "}"]
Output: ["void run()", "{ ", "  ", "int x, y;", "x = y + 1;", "}"]
Explanation:
The first block comment consumes all of line 1; the // comment consumes
the tail of line 4, leaving its two leading spaces (which is not empty,
so the line stays); a second block comment spans lines 6-8 and vanishes
entirely. Every fully consumed line disappears from the output.
```

### Example 2

```text
Input: source = ["x/*note", "mid", "tail*/y"]
Output: ["xy"]
Explanation:
The block comment opens partway through line 1 and closes partway
through line 3, deleting the line breaks in between along with it. The
"x" that precedes the comment and the "y" that follows it end up
joined into a single output line, "xy".
```

### Constraints

- `1 <= source.length <= 100`
- `0 <= source[i].length <= 80`
- `source[i]` consists of printable ASCII characters.
- Every block comment that opens is eventually closed.
- The input contains no single-quote or double-quote characters.

## Hints

### Hint 1

Parse each line with a single flag carried across lines — whether you
are inside a block comment — plus one buffer for the line being built:

- If a `/*` starts and you are not in a block, skip two characters and
  enter the block.
- If a `*/` ends and you are in a block, skip two characters and leave
  the block.
- If a `//` starts and you are not in a block, ignore the rest of the
  line.
- If you are not in a block and no comment starts there, record the
  character.
- At the end of each line, if you are not in a block, record the line
  — unless it is empty — and start a fresh buffer.
